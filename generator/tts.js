import { Mp3Encoder } from '@breezystack/lamejs';
import { apiKey, post } from './http.js';

const GEMINI_MODEL = 'gemini-3.8-flash-tts';
const GEMINI_SAMPLE_RATE = 24000;
const ELEVENLABS_MODEL = 'eleven_multilingual_v2';

function wavSamples(wav) {
    const view = new DataView(wav.buffer, wav.byteOffset, wav.byteLength);
    let offset = 12;
    while (offset + 8 <= wav.length) {
        const id = String.fromCharCode(...wav.subarray(offset, offset + 4));
        const size = view.getUint32(offset + 4, true);
        if (id === 'data') {
            return new Int16Array(
                wav.slice(offset + 8, offset + 8 + size).buffer
            );
        }
        offset += 8 + size + (size % 2);
    }
    throw new Error('no audio data in wav');
}

function encodeMp3(samples) {
    const encoder = new Mp3Encoder(1, GEMINI_SAMPLE_RATE, 96);
    const output = [];
    for (let i = 0; i < samples.length; i += 1152) {
        output.push(encoder.encodeBuffer(samples.subarray(i, i + 1152)));
    }
    output.push(encoder.flush());
    return Buffer.concat(output.map(chunk => Buffer.from(chunk)));
}

async function speakGemini(text, tts, targetLang) {
    const response = await post(
        'https://generativelanguage.googleapis.com/v1beta/interactions',
        { 'x-goog-api-key': apiKey('GEMINI_API_KEY') },
        {
            model: tts.model ?? GEMINI_MODEL,
            input: [
                {
                    type: 'user_input',
                    content: [
                        {
                            type: 'text',
                            text,
                            annotations: [
                                {
                                    type: 'speech_metadata',
                                    style:
                                        tts.style ??
                                        `a native ${targetLang} speaker saying a phrase clearly and slightly slowly for a beginner, with natural intonation`,
                                },
                            ],
                        },
                    ],
                },
            ],
            response_format: {
                type: 'audio',
                mime_type: 'audio/wav',
                sample_rate: GEMINI_SAMPLE_RATE,
            },
            generation_config: { speech_config: [{ voice: tts.voice }] },
        }
    );
    const result = await response.json();
    const audio = result.steps
        ?.flatMap(step => step.content ?? [])
        .find(content => content.type === 'audio');
    if (!audio) throw new Error('no audio in Gemini response');
    return encodeMp3(wavSamples(Buffer.from(audio.data, 'base64')));
}

async function speakGoogle(text, tts) {
    const response = await post(
        'https://texttospeech.googleapis.com/v1/text:synthesize',
        { 'x-goog-api-key': apiKey('GOOGLE_API_KEY') },
        {
            input: { text },
            voice: {
                languageCode: tts.voice.split('-').slice(0, 2).join('-'),
                name: tts.voice,
            },
            audioConfig: { audioEncoding: 'MP3', sampleRateHertz: 24000 },
        }
    );
    const { audioContent } = await response.json();
    return Buffer.from(audioContent, 'base64');
}

const escapeXml = text =>
    text.replace(/[<>&'"]/g, char => `&#${char.charCodeAt(0)};`);

async function speakAzure(text, tts) {
    const region = apiKey('AZURE_SPEECH_REGION');
    const lang = tts.voice.split('-').slice(0, 2).join('-');
    const response = await post(
        `https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`,
        {
            'content-type': 'application/ssml+xml',
            'ocp-apim-subscription-key': apiKey('AZURE_SPEECH_KEY'),
            'x-microsoft-outputformat': 'audio-24khz-160kbitrate-mono-mp3',
        },
        `<speak version="1.0" xmlns:mstts="http://www.w3.org/2001/mstts" xml:lang="${lang}"><voice name="${tts.voice}"><mstts:silence type="Leading-exact" value="300ms"/><mstts:silence type="Tailing-exact" value="300ms"/><prosody rate="${tts.rate ?? '0%'}">${escapeXml(text)}</prosody></voice></speak>`
    );
    return Buffer.from(await response.arrayBuffer());
}

async function speakElevenLabs(text, tts) {
    const response = await post(
        `https://api.elevenlabs.io/v1/text-to-speech/${tts.voice}?output_format=mp3_44100_128`,
        { 'xi-api-key': apiKey('ELEVENLABS_API_KEY') },
        {
            text,
            model_id: tts.model ?? ELEVENLABS_MODEL,
            voice_settings: tts.voice_settings,
        }
    );
    return Buffer.from(await response.arrayBuffer());
}

export function speakerFor(deck) {
    const { tts, targetLang } = deck;
    if (tts.provider === 'gemini') {
        return text => speakGemini(text, tts, targetLang);
    }
    if (tts.provider === 'google') return text => speakGoogle(text, tts);
    if (tts.provider === 'azure') return text => speakAzure(text, tts);
    return text => speakElevenLabs(text, tts);
}
