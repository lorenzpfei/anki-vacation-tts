import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const DECKS_DIR = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    'decks'
);

const PROVIDERS = ['gemini', 'google', 'azure', 'elevenlabs'];

const PHRASE_FIELDS = ['l2', 'pronunciation_ipa', 'pronunciation_simple'];

const REQUIRED = {
    single: ['cue_L1', 'context_L1', ...PHRASE_FIELDS, 'meaning_L1'],
    ritual_pair: [
        'cue_L1',
        'context_L1',
        'call_l2',
        'call_pronunciation_ipa',
        'call_pronunciation_simple',
        'call_meaning_L1',
        'call_usage_L1',
        'response_l2',
        'response_pronunciation_ipa',
        'response_pronunciation_simple',
        'response_meaning_L1',
    ],
};

const filled = value => typeof value === 'string' && value.trim() !== '';

export function listDecks() {
    return fs
        .readdirSync(DECKS_DIR)
        .filter(file => file.endsWith('.json'))
        .map(file => file.slice(0, -'.json'.length))
        .sort();
}

export function loadDeck(name) {
    const file = path.join(DECKS_DIR, `${name}.json`);
    if (!fs.existsSync(file)) return null;
    return JSON.parse(fs.readFileSync(file, 'utf8'));
}

export function validateCards(cards) {
    if (!Array.isArray(cards) || cards.length === 0) {
        return ['cards must be a non-empty array'];
    }
    const errors = [];
    const ids = new Set();
    cards.forEach((card, index) => {
        const where = `cards[${index}] (${card?.id ?? 'no id'})`;
        if (!/^[a-z0-9_]+$/.test(card?.id ?? '')) {
            errors.push(`${where}: id must match [a-z0-9_]+`);
        } else if (ids.has(card.id)) {
            errors.push(`${where}: duplicate id`);
        }
        ids.add(card?.id);

        const required = REQUIRED[card?.type];
        if (!required) {
            errors.push(`${where}: type must be single or ritual_pair`);
            return;
        }
        for (const field of required) {
            if (!filled(card[field])) errors.push(`${where}: missing ${field}`);
        }
        if (card.type === 'single' && card.variant_plural) {
            for (const field of PHRASE_FIELDS) {
                if (!filled(card.variant_plural[field])) {
                    errors.push(`${where}: missing variant_plural.${field}`);
                }
            }
        }
    });
    return errors;
}

export function validateDeck(deck) {
    const errors = [];
    if (!filled(deck.learnerLang)) errors.push('missing learnerLang');
    if (!filled(deck.targetLang)) errors.push('missing targetLang');
    if (!PROVIDERS.includes(deck.tts?.provider)) {
        errors.push(`tts.provider must be one of ${PROVIDERS.join(', ')}`);
    }
    if (!filled(deck.tts?.voice)) errors.push('missing tts.voice');
    return [...errors, ...validateCards(deck.cards)];
}

export function audioClips(deckName, deck) {
    const clip = (suffix, text) => ({
        file: `${deckName}_${suffix}.mp3`,
        text,
    });
    return deck.cards.flatMap(card => {
        if (card.type === 'ritual_pair') {
            return [
                clip(`${card.id}__call`, card.call_l2),
                clip(`${card.id}__response`, card.response_l2),
            ];
        }
        return [
            clip(card.id, card.l2),
            ...(card.variant_plural
                ? [clip(`${card.id}__plural`, card.variant_plural.l2)]
                : []),
        ];
    });
}
