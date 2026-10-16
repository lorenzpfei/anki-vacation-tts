import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import dotenv from 'dotenv';
import { buildApkg } from './anki.js';
import { syncAudio } from './audio.js';
import { createDeck, deckFileName } from './create-deck.js';
import { DECKS_DIR, listDecks, loadDeck, validateDeck } from './deck.js';
import { speakerFor } from './tts.js';

const OUTPUT_DIR = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    'output'
);
const LEVELS = ['essentials', 'standard', 'advanced'];

dotenv.config({ quiet: true });

function usage() {
    console.log(`Usage:
  node generate.js <deck>
      Generate missing or outdated audio and build output/<deck>.apkg

  node generate.js new --target <lang> --region <region> [options]
      Draft and review a new deck with Gemini, saved as decks/<name>.json
      --learner   learner language (default de-DE)
      --level     ${LEVELS.join(' | ')} (default standard)
      --provider  gemini | google | azure | elevenlabs (default gemini)
      --voice     voice name or id (default Kore for gemini)

Decks:`);
    for (const name of listDecks()) {
        const deck = loadDeck(name);
        console.log(
            `  ${name.padEnd(24)} ${deck.cards.length} cards, ${deck.tts.provider}`
        );
    }
}

async function build(name) {
    const deck = loadDeck(name);
    const errors = validateDeck(deck);
    if (errors.length) {
        throw new Error(`deck ${name} is invalid:\n- ${errors.join('\n- ')}`);
    }
    const audioDir = path.join(OUTPUT_DIR, 'audio', name);
    console.log(
        `🎯 ${name}: ${deck.cards.length} cards, ${deck.tts.provider} voice ${deck.tts.voice}`
    );
    const result = await syncAudio(
        name,
        deck,
        audioDir,
        speakerFor(deck),
        console.log
    );
    console.log(
        `🔊 ${result.generated} generated, ${result.kept} up to date, ${result.failed.length} failed`
    );
    if (result.failed.length) {
        throw new Error('audio generation failed, apkg not built');
    }
    const apkgPath = path.join(OUTPUT_DIR, `${name}.apkg`);
    fs.writeFileSync(apkgPath, buildApkg(name, deck, audioDir));
    console.log(`📦 ${apkgPath}`);
}

async function create(args) {
    const { values } = parseArgs({
        args,
        options: {
            target: { type: 'string' },
            region: { type: 'string' },
            learner: { type: 'string', default: 'de-DE' },
            level: { type: 'string', default: 'standard' },
            provider: { type: 'string', default: 'gemini' },
            voice: { type: 'string' },
        },
    });
    if (!values.target || !values.region || !LEVELS.includes(values.level)) {
        usage();
        process.exit(1);
    }
    const voice = values.voice ?? (values.provider === 'gemini' && 'Kore');
    if (!voice) throw new Error(`--voice is required for ${values.provider}`);

    const options = {
        learnerLang: values.learner,
        targetLang: values.target,
        region: values.region,
        level: values.level,
        tts: {
            provider: values.provider,
            voice,
            ...(values.provider === 'gemini' && {
                style: `a native speaker from ${values.region} saying a phrase clearly and slightly slowly for a beginner, with natural intonation`,
            }),
        },
    };
    const name = deckFileName(options);
    const file = path.join(DECKS_DIR, `${name}.json`);
    if (fs.existsSync(file)) throw new Error(`${file} already exists`);

    const { deck, changes } = await createDeck(options, undefined, console.log);
    fs.writeFileSync(file, JSON.stringify(deck, null, 4) + '\n');
    console.log(
        `📝 Review changes:\n${changes.map(change => `  - ${change}`).join('\n') || '  none'}`
    );
    console.log(
        `✅ ${file} (${deck.cards.length} cards). Next: node generate.js ${name}`
    );
}

const [command, ...rest] = process.argv.slice(2);
try {
    if (command === 'new') await create(rest);
    else if (command && listDecks().includes(command)) await build(command);
    else usage();
} catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
}
