import assert from 'node:assert/strict';
import { afterEach, test } from 'node:test';
import { speakerFor } from '../tts.js';

const realFetch = globalThis.fetch;
afterEach(() => {
    globalThis.fetch = realFetch;
});

function mockFetch(respond) {
    const calls = [];
    globalThis.fetch = async (url, init) => {
        calls.push({ url, ...init });
        return respond(calls.length);
    };
    return calls;
}

function wav(samples) {
    const data = Buffer.alloc(samples * 2);
    const header = Buffer.alloc(44);
    header.write('RIFF', 0);
    header.writeUInt32LE(36 + data.length, 4);
    header.write('WAVEfmt ', 8);
    header.writeUInt32LE(16, 16);
    header.writeUInt16LE(1, 20);
    header.writeUInt16LE(1, 22);
    header.writeUInt32LE(24000, 24);
    header.writeUInt32LE(48000, 28);
    header.writeUInt16LE(2, 32);
    header.writeUInt16LE(16, 34);
    header.write('data', 36);
    header.writeUInt32LE(data.length, 40);
    return Buffer.concat([header, data]);
}

test('gemini converts the returned wav to mp3 and sends the style', async () => {
    process.env.GEMINI_API_KEY = 'test';
    const calls = mockFetch(
        () =>
            new Response(
                JSON.stringify({
                    steps: [
                        {
                            content: [
                                {
                                    type: 'audio',
                                    data: wav(24000).toString('base64'),
                                },
                            ],
                        },
                    ],
                })
            )
    );
    const speak = speakerFor({
        targetLang: 'zh-CN',
        tts: { provider: 'gemini', voice: 'Kore', style: 'calm teacher' },
    });

    const mp3 = await speak('多少钱？');

    assert.equal(mp3[0], 0xff);
    assert.equal(mp3[1] & 0xe0, 0xe0);
    const body = JSON.parse(calls[0].body);
    assert.equal(body.input[0].content[0].text, '多少钱？');
    assert.equal(body.input[0].content[0].annotations[0].style, 'calm teacher');
    assert.deepEqual(body.generation_config.speech_config, [{ voice: 'Kore' }]);
});

test('azure sends escaped ssml for the voice locale', async () => {
    process.env.AZURE_SPEECH_KEY = 'key';
    process.env.AZURE_SPEECH_REGION = 'westeurope';
    const calls = mockFetch(() => new Response(Buffer.from('mp3')));
    const speak = speakerFor({
        targetLang: 'zh-CN',
        tts: { provider: 'azure', voice: 'zh-CN-XiaoxiaoNeural' },
    });

    assert.equal((await speak('A & B')).toString(), 'mp3');
    assert.equal(
        calls[0].url,
        'https://westeurope.tts.speech.microsoft.com/cognitiveservices/v1'
    );
    assert.equal(
        calls[0].body,
        '<speak version="1.0" xml:lang="zh-CN"><voice name="zh-CN-XiaoxiaoNeural">A &#38; B</voice></speak>'
    );
});

test('retries rate limits and fails fast on client errors', async () => {
    process.env.ELEVENLABS_API_KEY = 'key';
    const speak = speakerFor({
        targetLang: 'tr-TR',
        tts: { provider: 'elevenlabs', voice: 'v1' },
    });

    const retried = mockFetch(n =>
        n === 1
            ? new Response('slow down', {
                  status: 429,
                  headers: { 'retry-after': '0' },
              })
            : new Response('mp3')
    );
    assert.equal((await speak('Merhaba')).toString(), 'mp3');
    assert.equal(retried.length, 2);

    mockFetch(() => new Response('bad voice', { status: 400 }));
    await assert.rejects(speak('Merhaba'), /400: bad voice/);
});
