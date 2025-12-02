/*
=== USAGE INSTRUCTIONS ===

1.  **Installation:**
    Run `npm install @google-cloud/text-to-speech microsoft-cognitiveservices-speech-sdk dotenv` in your terminal.

2.  **Authentication:**
    - Create a `.env` file in the root directory (see .env.example).
    - Add your Google API key: GOOGLE_API_KEY="your_api_key_here"
    - For Azure TTS (Albanian): AZURE_SPEECH_KEY="your_key" and AZURE_SPEECH_REGION="your_region"

3.  **Adding Data:**
    - Open the `data.js` file.
    - Add new decks or phrases following the provided structure.
    - Google voices: https://cloud.google.com/text-to-speech/docs/voices
    - Azure voices: https://docs.microsoft.com/azure/cognitive-services/speech-service/language-support
    - Set voice.provider: 'azure' for Azure TTS voices

4.  **Running the Script:**
    - Execute the script with the desired deck name as argument.
    - Example: `node generate.js deDE`
    - If you start the script without arguments, it will list all available decks.

5.  **Output:**
    - The script creates a `./output/[source]-[target]` folder with the `anki_deck.csv` file and the `audio` subfolder.
    - CSV format: Source;Target;Audio;Source Notes;Target Notes
    - Audio files are named by semantic keys (e.g., GREETING_HELLO.mp3)
*/

import textToSpeech from '@google-cloud/text-to-speech';
import * as sdk from 'microsoft-cognitiveservices-speech-sdk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { decks } from './data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const client = new textToSpeech.TextToSpeechClient({
    apiKey: process.env.GOOGLE_API_KEY,
});

function showUsage() {
    console.log('\n🚀 Anki TTS Generator');
    console.log('=====================\n');
    console.log('Usage:');
    console.log(
        '  node generate.js <source_deck> <target_deck>     # Legacy: separate decks'
    );
    console.log(
        '  node generate.js <pair_deck>                     # New: single pair deck (e.g., deDE-trTR)'
    );
    console.log(
        '  node generate.js --all-to <target_deck>          # Generate all sources to target'
    );
    console.log(
        '  node generate.js --all-from <source_deck>        # Generate source to all targets'
    );
    console.log(
        '  node generate.js --all                           # Generate ALL combinations\n'
    );
    console.log('Parameters:');
    console.log('  source_deck  - The source language deck for translations');
    console.log(
        '  target_deck  - The target language deck to generate audio for'
    );
    console.log(
        '  --all-to     - Generate all available source languages to the specified target'
    );
    console.log(
        '  --all-from   - Generate the specified source language to all available targets'
    );
    console.log(
        '  --all        - Generate all possible source→target combinations\n'
    );
    console.log('Available decks:');
    Object.keys(decks).forEach(deckName => {
        const deck = decks[deckName];
        const lang = deck.langCode || deck.targetLang || '-';
        const count = Array.isArray(deck.phrases)
            ? deck.phrases.length
            : Array.isArray(deck.cards)
              ? deck.cards.length
              : 0;
        console.log(`  • ${deckName} (${lang}, ${count} items)`);
    });
    console.log('\nExamples:');
    console.log('  node generate.js deDE sqAL           # German to Albanian');
    console.log(
        '  node generate.js enUS esCO           # English to Colombian Spanish'
    );
    console.log(
        '  node generate.js --all-to deDE       # ALL languages to German'
    );
    console.log(
        '  node generate.js --all-from deDE     # German to ALL languages'
    );
    console.log(
        '  node generate.js --all-from enUS     # English to ALL languages'
    );
    console.log(
        '  node generate.js --all               # Generate EVERYTHING\n'
    );
}

async function generateAudioAzure(text, voiceName, outputPath) {
    return new Promise((resolve, reject) => {
        try {
            const speechConfig = sdk.SpeechConfig.fromSubscription(
                process.env.AZURE_SPEECH_KEY,
                process.env.AZURE_SPEECH_REGION
            );

            speechConfig.speechSynthesisOutputFormat =
                sdk.SpeechSynthesisOutputFormat.Audio24Khz160KBitRateMonoMp3;
            speechConfig.speechSynthesisVoiceName = voiceName;

            const audioConfig = sdk.AudioConfig.fromAudioFileOutput(outputPath);
            const synthesizer = new sdk.SpeechSynthesizer(
                speechConfig,
                audioConfig
            );

            synthesizer.speakTextAsync(
                text,
                result => {
                    if (
                        result.reason ===
                        sdk.ResultReason.SynthesizingAudioCompleted
                    ) {
                        synthesizer.close();
                        resolve();
                    } else {
                        synthesizer.close();
                        reject(
                            new Error(
                                `Speech synthesis canceled: ${result.errorDetails}`
                            )
                        );
                    }
                },
                error => {
                    synthesizer.close();
                    reject(new Error(`Azure TTS error: ${error}`));
                }
            );
        } catch (error) {
            reject(new Error(`Azure TTS setup error: ${error.message}`));
        }
    });
}

async function ensureDirectoryExists(dirPath) {
    try {
        await fs.promises.mkdir(dirPath, { recursive: true });
    } catch (error) {
        throw new Error(
            `Error creating directory ${dirPath}: ${error.message}`
        );
    }
}

async function generateAudio(text, voice, langCode, outputPath) {
    try {
        const request = {
            input: { text: text },
            voice: {
                languageCode: langCode,
                name: voice.name,
                ssmlGender: voice.ssmlGender,
            },
            audioConfig: { audioEncoding: 'MP3', sampleRateHertz: 24000 },
        };

        const [response] = await client.synthesizeSpeech(request);
        await fs.promises.writeFile(
            outputPath,
            response.audioContent,
            'binary'
        );
    } catch (error) {
        throw new Error(
            `Error generating audio file for "${text}": ${error.message}`
        );
    }
}

function concatNonEmpty(parts) {
    return parts
        .filter(p => typeof p === 'string' && p.trim().length > 0)
        .join(' | ');
}

function escapeCsv(value) {
    const s = value || '';
    return s.replace(/"/g, '""');
}

async function generateRitualsCSV(ritualCards, outputPath, targetDeckName) {
    if (!ritualCards || ritualCards.length === 0) {
        return;
    }

    const rows = ritualCards
        .map(card => {
            const cue = escapeCsv(card.cue_L1 || '');
            const context = escapeCsv(card.context_L1 || '');
            const callL2 = escapeCsv(card.call_l2 || '');
            const callIPA = escapeCsv(card.call_pronunciation_ipa || '');
            const callSimple = escapeCsv(card.call_pronunciation_simple || '');
            const callMeaning = escapeCsv(card.call_meaning_L1 || '');
            const callLiteral = escapeCsv(card.call_literal_L1 || '');
            const callUsage = escapeCsv(card.call_usage_L1 || '');
            const respL2 = escapeCsv(card.response_l2 || '');
            const respIPA = escapeCsv(card.response_pronunciation_ipa || '');
            const respSimple = escapeCsv(
                card.response_pronunciation_simple || ''
            );
            const respMeaning = escapeCsv(card.response_meaning_L1 || '');
            const notes = escapeCsv(card.notes_L1 || '');
            const audioCall = `[sound:${targetDeckName}_${card.id}__call.mp3]`;
            const audioResp = `[sound:${targetDeckName}_${card.id}__response.mp3]`;

            return `"${cue}";"${context}";"${callL2}";"${callIPA}";"${callSimple}";"${callMeaning}";"${callLiteral}";"${callUsage}";"${respL2}";"${respIPA}";"${respSimple}";"${respMeaning}";"${notes}";"${audioCall}";"${audioResp}"`;
        })
        .join('\n');

    const content = rows + (rows ? '\n' : '');
    await fs.promises.writeFile(outputPath, content, 'utf8');
}

async function generateUnifiedCSV(deck, outputPath, targetDeckName) {
    if (!isNewDeckFormat(deck)) return;

    const rows = (deck.cards || [])
        .map(card => {
            const isSingle = card.type === 'single';
            const isRitual = card.type === 'ritual_pair';

            const Cue_L1 = escapeCsv(card.cue_L1 || '');
            const Context_L1 = escapeCsv(card.context_L1 || '');
            const Notes_L1 = escapeCsv(card.notes_L1 || '');

            const L2 = escapeCsv(isSingle ? card.l2 || '' : card.call_l2 || '');
            const Pron_IPA = escapeCsv(
                isSingle
                    ? card.pronunciation_ipa || ''
                    : card.call_pronunciation_ipa || ''
            );
            const Pron_Simple = escapeCsv(
                isSingle
                    ? card.pronunciation_simple || ''
                    : card.call_pronunciation_simple || ''
            );
            const Meaning_L1 = escapeCsv(
                isSingle ? card.meaning_L1 || '' : card.call_meaning_L1 || ''
            );
            const Literal_L1 = escapeCsv(
                isSingle ? card.literal_L1 || '' : card.call_literal_L1 || ''
            );
            const Usage_L1 = escapeCsv(
                isSingle ? card.usage_L1 || '' : card.call_usage_L1 || ''
            );

            const VarPlural_L2 = escapeCsv(
                isSingle && card.variant_plural
                    ? card.variant_plural.l2 || ''
                    : ''
            );
            const VarPlural_IPA = escapeCsv(
                isSingle && card.variant_plural
                    ? card.variant_plural.pronunciation_ipa || ''
                    : ''
            );
            const VarPlural_Simple = escapeCsv(
                isSingle && card.variant_plural
                    ? card.variant_plural.pronunciation_simple || ''
                    : ''
            );

            const Resp_L2 = escapeCsv(isRitual ? card.response_l2 || '' : '');
            const Resp_Pron_IPA = escapeCsv(
                isRitual ? card.response_pronunciation_ipa || '' : ''
            );
            const Resp_Pron_Simple = escapeCsv(
                isRitual ? card.response_pronunciation_simple || '' : ''
            );
            const Resp_Meaning_L1 = escapeCsv(
                isRitual ? card.response_meaning_L1 || '' : ''
            );

            const audioBase = `${targetDeckName}_${card.id}`;
            const Audio_L2 = isSingle
                ? `[sound:${audioBase}.mp3]`
                : `[sound:${audioBase}__call.mp3]`;
            const Audio_VarPlural =
                isSingle && card.variant_plural
                    ? `[sound:${audioBase}__plural.mp3]`
                    : '';
            const Audio_Resp = isRitual
                ? `[sound:${audioBase}__response.mp3]`
                : '';

            const Tags = escapeCsv(
                [
                    `lang:${deck.targetLang || deck.langCode || ''}`,
                    `L1:${deck.learnerLang || ''}`,
                    `cat:${card.category || ''}`,
                    `type:${card.type || ''}`,
                ].join(' ')
            );

            return `"${Cue_L1}";"${Context_L1}";"${L2}";"${Pron_IPA}";"${Pron_Simple}";"${Meaning_L1}";"${Literal_L1}";"${Usage_L1}";"${VarPlural_L2}";"${VarPlural_IPA}";"${VarPlural_Simple}";"${Resp_L2}";"${Resp_Pron_IPA}";"${Resp_Pron_Simple}";"${Resp_Meaning_L1}";"${Notes_L1}";"${Audio_L2}";"${Audio_VarPlural}";"${Audio_Resp}";"${Tags}"`;
        })
        .join('\n');

    const content = rows + (rows ? '\n' : '');
    await fs.promises.writeFile(outputPath, content, 'utf8');
}

function isNewDeckFormat(deck) {
    return Array.isArray(deck.cards);
}

function flattenDeckEntries(deck, sourceDeckName) {
    // Returns a normalized list of entries to generate audio and CSV rows from
    // Each entry: { id, text, ipa, simple, source, sourceNotes, targetNotes }
    const entries = [];

    if (!isNewDeckFormat(deck)) {
        // Legacy deck with phrases[] and PhraseKeys
        const sourceDeck = decks[sourceDeckName];
        for (const phrase of deck.phrases) {
            const sourcePhrase = sourceDeck
                ? (sourceDeck.phrases || []).find(p => p.key === phrase.key)
                : null;

            entries.push({
                id: phrase.key,
                text: phrase.text,
                ipa: phrase.pronunciation_ipa || '',
                simple: phrase.pronunciation_simple || '',
                source: sourcePhrase ? sourcePhrase.text : '',
                sourceNotes:
                    sourcePhrase && sourcePhrase.note ? sourcePhrase.note : '',
                targetNotes: phrase.note || '',
            });
        }
        return entries;
    }

    // New flexible deck with cards[]
    for (const card of deck.cards) {
        if (card.type === 'single') {
            entries.push({
                id: card.id,
                text: card.l2,
                ipa: card.pronunciation_ipa || '',
                simple: card.pronunciation_simple || '',
                source: card.cue_L1,
                sourceNotes: card.context_L1 || '',
                targetNotes: concatNonEmpty([
                    card.usage_L1 || '',
                    card.notes_L1 || '',
                ]),
            });

            if (card.variant_plural) {
                entries.push({
                    id: `${card.id}__plural`,
                    text: card.variant_plural.l2,
                    ipa: card.variant_plural.pronunciation_ipa || '',
                    simple: card.variant_plural.pronunciation_simple || '',
                    source: `${card.cue_L1} (polite/plural)`,
                    sourceNotes: card.context_L1 || '',
                    targetNotes: card.usage_L1 || '',
                });
            }
        } else if (card.type === 'ritual_pair') {
            entries.push({
                id: `${card.id}__call`,
                text: card.call_l2,
                ipa: card.call_pronunciation_ipa || '',
                simple: card.call_pronunciation_simple || '',
                source: `${card.cue_L1} (call)`,
                sourceNotes: card.context_L1 || '',
                targetNotes: card.call_usage_L1 || '',
            });

            entries.push({
                id: `${card.id}__response`,
                text: card.response_l2,
                ipa: card.response_pronunciation_ipa || '',
                simple: card.response_pronunciation_simple || '',
                source: `${card.cue_L1} (response)`,
                sourceNotes: card.context_L1 || '',
                targetNotes: card.notes_L1 || '',
            });
        }
    }

    return entries;
}

function findSourcePhrase(targetKey, sourceDeckName = 'deDE') {
    const sourceDeck = decks[sourceDeckName];
    if (!sourceDeck) return null;

    return sourceDeck.phrases.find(phrase => phrase.key === targetKey) || null;
}

async function generateCSV(entries, outputPath, targetDeckName) {
    try {
        const csvRows = entries
            .map(entry => {
                const escapedSource = (entry.source || '').replace(/"/g, '""');
                const escapedTarget = (entry.text || '').replace(/"/g, '""');
                const escapedPronunciationSimple = (entry.simple || '').replace(
                    /"/g,
                    '""'
                );
                const escapedPronunciationIPA = (entry.ipa || '').replace(
                    /"/g,
                    '""'
                );
                const escapedSourceNotes = (entry.sourceNotes || '').replace(
                    /"/g,
                    '""'
                );
                const escapedTargetNotes = (entry.targetNotes || '').replace(
                    /"/g,
                    '""'
                );

                return `"${escapedSource}";"${escapedTarget}";[sound:${targetDeckName}_${entry.id}.mp3];"${escapedPronunciationIPA}";"${escapedPronunciationSimple}";"${escapedSourceNotes}";"${escapedTargetNotes}"`;
            })
            .join('\n');

        const csvContent = csvRows + (csvRows ? '\n' : '');
        await fs.promises.writeFile(outputPath, csvContent, 'utf8');
    } catch (error) {
        throw new Error(`Error creating CSV file: ${error.message}`);
    }
}

async function processDeck(sourceDeckName, targetDeckName) {
    const deck = decks[targetDeckName];
    const sourceDeck = decks[sourceDeckName];

    if (!deck) {
        console.error(`❌ Error: Target deck "${targetDeckName}" not found.\n`);
        showUsage();
        process.exit(1);
    }

    if (!sourceDeck) {
        console.error(`❌ Error: Source deck "${sourceDeckName}" not found.\n`);
        showUsage();
        process.exit(1);
    }

    const targetLangCode = deck.langCode || deck.targetLang;
    const provider =
        deck.provider || (deck.voice && deck.voice.provider) || 'google';

    console.log(`\n🎯 Processing deck: ${sourceDeckName} → ${targetDeckName}`);
    console.log(`📍 Target language: ${targetLangCode}`);
    const isPair = isNewDeckFormat(deck) && !!deck.learnerLang;
    if (isPair) {
        console.log(
            `📍 Source language: ${deck.learnerLang} (${sourceDeckName})`
        );
    } else {
        console.log(
            `📍 Source language: ${sourceDeck.langCode} (${sourceDeckName})`
        );
    }
    console.log(`🎤 Voice: ${deck.voice.name} (${deck.voice.ssmlGender})`);

    const entries = flattenDeckEntries(deck, sourceDeckName);
    console.log(`📝 Number of items: ${entries.length}\n`);

    const deckDirName =
        isNewDeckFormat(deck) && !!deck.learnerLang
            ? targetDeckName
            : `${sourceDeckName}-${targetDeckName}`;
    const outputDir = path.join(__dirname, 'output', 'decks', deckDirName);
    const audioDir = path.join(__dirname, 'output', 'audio', deckDirName);

    try {
        await ensureDirectoryExists(outputDir);
        await ensureDirectoryExists(audioDir);
    } catch (error) {
        console.error(`❌ ${error.message}`);
        process.exit(1);
    }

    const totalItems = entries.length;
    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < totalItems; i++) {
        const entry = entries[i];
        const progress = `(${i + 1}/${totalItems})`;

        console.log(`${progress} Generating audio for: "${entry.text}"`);

        try {
            const audioPath = path.join(
                audioDir,
                `${targetDeckName}_${entry.id}.mp3`
            );

            // Check if file already exists
            if (fs.existsSync(audioPath)) {
                console.log(
                    `  ⏭️  Skipping: ${targetDeckName}_${entry.id}.mp3 (already exists)`
                );
                successCount++;
                continue;
            }

            const isAzure = provider === 'azure';
            if (isAzure) {
                await generateAudioAzure(
                    entry.text,
                    deck.voice.name,
                    audioPath
                );
            } else {
                await generateAudio(
                    entry.text,
                    deck.voice,
                    targetLangCode,
                    audioPath
                );
            }

            successCount++;
            console.log(`  ✅ Success: ${targetDeckName}_${entry.id}.mp3`);
        } catch (error) {
            errorCount++;
            console.error(`  ❌ Error with "${entry.text}": ${error.message}`);
        }
    }

    console.log(`\n📊 Audio generation completed:`);
    console.log(`  ✅ Successful: ${successCount}`);
    console.log(`  ❌ Errors: ${errorCount}`);

    if (successCount > 0) {
        try {
            if (isNewDeckFormat(deck)) {
                const unifiedPath = path.join(outputDir, 'anki_unified.csv');
                await generateUnifiedCSV(deck, unifiedPath, targetDeckName);
                console.log(`\n📄 CSV file created: ${unifiedPath}`);
            } else {
                const csvPath = path.join(outputDir, 'anki_deck.csv');
                await generateCSV(entries, csvPath, targetDeckName);
                console.log(`\n📄 CSV file created: ${csvPath}`);
            }
            console.log(`📁 Audio files in: ${audioDir}`);
            console.log(
                `\n🎉 Processing of "${sourceDeckName}-${targetDeckName}" completed successfully!`
            );
        } catch (error) {
            console.error(`❌ ${error.message}`);
            process.exit(1);
        }
    } else {
        console.error(
            `\n❌ No audio files were generated successfully. CSV file will not be created.`
        );
        process.exit(1);
    }
}

function checkEnvironment(deck) {
    const provider =
        (deck && (deck.provider || (deck.voice && deck.voice.provider))) ||
        'google';

    if (provider !== 'azure') {
        if (!process.env.GOOGLE_API_KEY) {
            console.error(
                '\n❌ Error: GOOGLE_API_KEY environment variable not set.'
            );
            console.error('Create a .env file with:');
            console.error('GOOGLE_API_KEY="your_api_key_here"');
            if (provider === 'azure') {
                console.error('AZURE_SPEECH_KEY="your_azure_speech_key_here"');
                console.error('AZURE_SPEECH_REGION="your_azure_region"\n');
            } else {
                console.log('\n');
            }
            process.exit(1);
        }
    }

    if (provider === 'azure') {
        if (!process.env.AZURE_SPEECH_KEY || !process.env.AZURE_SPEECH_REGION) {
            console.error(
                '\n❌ Error: Azure TTS environment variables not set.'
            );
            console.error('Create a .env file with:');
            console.error('AZURE_SPEECH_KEY="your_azure_speech_key_here"');
            console.error('AZURE_SPEECH_REGION="your_azure_region"\n');
            process.exit(1);
        }
    }
}

async function generateAllToTarget(targetDeckName) {
    const targetDeck = decks[targetDeckName];

    if (!targetDeck) {
        console.error(`❌ Error: Target deck "${targetDeckName}" not found.\n`);
        showUsage();
        process.exit(1);
    }

    checkEnvironment(targetDeck);

    const allSourceDecks = Object.keys(decks).filter(
        deckName => deckName !== targetDeckName
    );

    console.log(`\n🎯 Bulk Generation: ALL → ${targetDeckName}`);
    console.log(`📍 Target language: ${targetDeck.langCode}`);
    console.log(
        `🎤 Voice: ${targetDeck.voice.name} (${targetDeck.voice.ssmlGender})`
    );
    console.log(`📚 Source languages: ${allSourceDecks.length}`);
    console.log(
        `📝 Total deck combinations to generate: ${allSourceDecks.length}\n`
    );

    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < allSourceDecks.length; i++) {
        const sourceDeckName = allSourceDecks[i];
        const sourceDeck = decks[sourceDeckName];

        console.log(
            `\n┌─ Processing ${i + 1}/${allSourceDecks.length}: ${sourceDeckName} → ${targetDeckName} ─┐`
        );
        console.log(`│ Source: ${sourceDeck.langCode} (${sourceDeckName})`);
        console.log(
            `└─────────────────────────────────────────────────────────────┘`
        );

        try {
            await processDeck(sourceDeckName, targetDeckName);
            successCount++;
            console.log(`✅ Completed: ${sourceDeckName} → ${targetDeckName}`);
        } catch (error) {
            errorCount++;
            console.error(
                `❌ Failed: ${sourceDeckName} → ${targetDeckName}: ${error.message}`
            );
        }
    }

    console.log(`\n🎉 Bulk generation completed!`);
    console.log(`📊 Results:`);
    console.log(`  ✅ Successful: ${successCount}`);
    console.log(`  ❌ Errors: ${errorCount}`);
    console.log(`\n📁 All decks saved in: output/decks/`);
    console.log(`🔊 All audio files in: output/audio/`);
}

async function generateAllFromSource(sourceDeckName) {
    const sourceDeck = decks[sourceDeckName];

    if (!sourceDeck) {
        console.error(`❌ Error: Source deck "${sourceDeckName}" not found.\n`);
        showUsage();
        process.exit(1);
    }

    const allTargetDecks = Object.keys(decks).filter(
        deckName => deckName !== sourceDeckName
    );

    console.log(`\n🎯 Bulk Generation: ${sourceDeckName} → ALL`);
    console.log(`📍 Source language: ${sourceDeck.langCode}`);
    console.log(`📚 Target languages: ${allTargetDecks.length}`);
    console.log(
        `📝 Total deck combinations to generate: ${allTargetDecks.length}\n`
    );

    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < allTargetDecks.length; i++) {
        const targetDeckName = allTargetDecks[i];
        const targetDeck = decks[targetDeckName];

        console.log(
            `\n┌─ Processing ${i + 1}/${allTargetDecks.length}: ${sourceDeckName} → ${targetDeckName} ─┐`
        );
        console.log(`│ Target: ${targetDeck.langCode} (${targetDeckName})`);
        console.log(
            `│ Voice: ${targetDeck.voice.name} (${targetDeck.voice.ssmlGender})`
        );
        console.log(
            `└─────────────────────────────────────────────────────────────┘`
        );

        // Check environment for each target deck
        try {
            checkEnvironment(targetDeck);
        } catch (error) {
            errorCount++;
            console.error(
                `❌ Failed: ${sourceDeckName} → ${targetDeckName}: Environment error`
            );
            continue;
        }

        try {
            await processDeck(sourceDeckName, targetDeckName);
            successCount++;
            console.log(`✅ Completed: ${sourceDeckName} → ${targetDeckName}`);
        } catch (error) {
            errorCount++;
            console.error(
                `❌ Failed: ${sourceDeckName} → ${targetDeckName}: ${error.message}`
            );
        }
    }

    console.log(`\n🎉 Bulk generation completed!`);
    console.log(`📊 Results:`);
    console.log(`  ✅ Successful: ${successCount}`);
    console.log(`  ❌ Errors: ${errorCount}`);
    console.log(`\n📁 All decks saved in: output/decks/`);
    console.log(`🔊 All audio files in: output/audio/`);
}

async function generateAll() {
    const allDecks = Object.keys(decks);
    const totalCombinations = allDecks.length * (allDecks.length - 1); // n * (n-1) combinations

    console.log(`\n🎯 Complete Generation: ALL → ALL`);
    console.log(`📚 Available languages: ${allDecks.length}`);
    console.log(`📝 Total combinations to generate: ${totalCombinations}`);
    console.log(`⚠️  This will generate a lot of files!\n`);

    // Ask for confirmation
    console.log('🤔 This will generate ALL possible language combinations.');
    console.log(
        '   Are you sure you want to continue? This may take a while...\n'
    );

    let successCount = 0;
    let errorCount = 0;
    let combinationIndex = 0;

    for (const sourceDeckName of allDecks) {
        for (const targetDeckName of allDecks) {
            // Skip same language combinations
            if (sourceDeckName === targetDeckName) continue;

            combinationIndex++;
            const sourceDeck = decks[sourceDeckName];
            const targetDeck = decks[targetDeckName];

            console.log(
                `\n┌─ Processing ${combinationIndex}/${totalCombinations}: ${sourceDeckName} → ${targetDeckName} ─┐`
            );
            console.log(`│ Source: ${sourceDeck.langCode} (${sourceDeckName})`);
            console.log(`│ Target: ${targetDeck.langCode} (${targetDeckName})`);
            console.log(
                `│ Voice: ${targetDeck.voice.name} (${targetDeck.voice.ssmlGender})`
            );
            console.log(
                `└─────────────────────────────────────────────────────────────┘`
            );

            // Check environment for each target deck
            try {
                checkEnvironment(targetDeck);
            } catch (error) {
                errorCount++;
                console.error(
                    `❌ Failed: ${sourceDeckName} → ${targetDeckName}: Environment error`
                );
                continue;
            }

            try {
                await processDeck(sourceDeckName, targetDeckName);
                successCount++;
                console.log(
                    `✅ Completed: ${sourceDeckName} → ${targetDeckName}`
                );
            } catch (error) {
                errorCount++;
                console.error(
                    `❌ Failed: ${sourceDeckName} → ${targetDeckName}: ${error.message}`
                );
            }
        }
    }

    console.log(`\n🎉 Complete generation finished!`);
    console.log(`📊 Final Results:`);
    console.log(`  ✅ Successful: ${successCount}/${totalCombinations}`);
    console.log(`  ❌ Errors: ${errorCount}/${totalCombinations}`);
    console.log(
        `  📈 Success Rate: ${((successCount / totalCombinations) * 100).toFixed(1)}%`
    );
    console.log(`\n📁 All decks saved in: output/decks/`);
    console.log(`🔊 All audio files in: output/audio/`);

    if (successCount > 0) {
        console.log(
            `\n🎊 You now have ${successCount} complete deck combinations ready for Anki!`
        );
    }
}

async function main() {
    const firstArg = process.argv[2];
    const secondArg = process.argv[3];

    // Check for --all flag
    if (firstArg === '--all') {
        try {
            await generateAll();
        } catch (error) {
            console.error(
                `\n💥 Critical error during complete generation: ${error.message}`
            );
            process.exit(1);
        }
        return;
    }

    // Check for --all-to flag
    if (firstArg === '--all-to') {
        if (!secondArg) {
            console.error('❌ Error: --all-to requires a target deck.\n');
            showUsage();
            return;
        }

        try {
            await generateAllToTarget(secondArg);
        } catch (error) {
            console.error(
                `\n💥 Critical error during bulk generation: ${error.message}`
            );
            process.exit(1);
        }
        return;
    }

    // Check for --all-from flag
    if (firstArg === '--all-from') {
        if (!secondArg) {
            console.error('❌ Error: --all-from requires a source deck.\n');
            showUsage();
            return;
        }

        try {
            await generateAllFromSource(secondArg);
        } catch (error) {
            console.error(
                `\n💥 Critical error during bulk generation: ${error.message}`
            );
            process.exit(1);
        }
        return;
    }

    // Regular generation: support legacy two-args or new one-arg pair deck
    if (firstArg && !secondArg && decks[firstArg]) {
        // Single pair deck mode
        const pairDeckName = firstArg;
        const deck = decks[pairDeckName];
        checkEnvironment(deck);
        try {
            await processDeck(pairDeckName, pairDeckName);
        } catch (error) {
            console.error(`\n❌ Unexpected error: ${error.message}`);
            process.exit(1);
        }
        return;
    }

    if (firstArg && secondArg) {
        const sourceDeck = firstArg;
        const targetDeck = secondArg;
        const deck = decks[targetDeck];
        if (!deck) {
            showUsage();
            return;
        }
        checkEnvironment(deck);
        try {
            await processDeck(sourceDeck, targetDeck);
        } catch (error) {
            console.error(`\n❌ Unexpected error: ${error.message}`);
            process.exit(1);
        }
        return;
    }

    showUsage();
}

main().catch(error => {
    console.error(`\n💥 Critical error: ${error.message}`);
    process.exit(1);
});
