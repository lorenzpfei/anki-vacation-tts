import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateCards } from './deck.js';
import { apiKey, post } from './http.js';

const PROMPT_PATH = path.join(
    path.dirname(fileURLToPath(import.meta.url)),
    'Prompt.md'
);
const GEMINI_MODEL = 'gemini-4-argon';
const MAX_ATTEMPTS = 3;

const text = { type: 'string' };
const phrase = {
    type: 'object',
    properties: {
        l2: text,
        pronunciation_ipa: text,
        pronunciation_simple: text,
    },
    required: ['l2', 'pronunciation_ipa', 'pronunciation_simple'],
};
const common = {
    id: text,
    category: text,
    cue_L1: text,
    context_L1: text,
    notes_L1: text,
};
const SINGLE = {
    type: 'object',
    properties: {
        ...common,
        type: { type: 'string', enum: ['single'] },
        ...phrase.properties,
        meaning_L1: text,
        literal_L1: text,
        usage_L1: text,
        variant_plural: phrase,
    },
    required: [
        'id',
        'type',
        'category',
        'cue_L1',
        'context_L1',
        ...phrase.required,
        'meaning_L1',
        'usage_L1',
    ],
};
const RITUAL = {
    type: 'object',
    properties: {
        ...common,
        type: { type: 'string', enum: ['ritual_pair'] },
        call_l2: text,
        call_pronunciation_ipa: text,
        call_pronunciation_simple: text,
        call_meaning_L1: text,
        call_literal_L1: text,
        call_usage_L1: text,
        response_l2: text,
        response_pronunciation_ipa: text,
        response_pronunciation_simple: text,
        response_meaning_L1: text,
    },
    required: [
        'id',
        'type',
        'category',
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
const CARDS = { type: 'array', items: { anyOf: [SINGLE, RITUAL] } };
const DECK_SCHEMA = {
    type: 'object',
    properties: { cards: CARDS },
    required: ['cards'],
};
const REVIEW_SCHEMA = {
    type: 'object',
    properties: { changes: { type: 'array', items: text }, cards: CARDS },
    required: ['changes', 'cards'],
};

const REVIEW_PROMPT = `You are a native speaker from {{region}} and a linguist. Review this {{targetName}} phrase deck for {{learnerName}}-speaking tourists, written against the brief below.

Fix every problem you find:
- phrases that natives in {{region}} would not actually say, or that sound stiff or textbook-like
- wrong or missing IPA, wrong simple transcriptions, and for tonal languages wrong tone marks
- multiple cards for the same concept, cards a tourist does not need, missing domains required by the brief
- unnatural or incorrect {{learnerName}} explanations

Keep card ids stable for cards you keep. Return the full corrected deck in "cards" and one short English line per change in "changes" (empty if nothing needed fixing).

=== BRIEF ===
{{brief}}

=== DECK ===
{{deck}}`;

const fill = (template, values) =>
    template.replace(/{{(\w+)}}/g, (_, key) => values[key]);

async function askGemini(prompt, schema) {
    const model = process.env.GEMINI_MODEL ?? GEMINI_MODEL;
    const response = await post(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
        { 'x-goog-api-key': apiKey('GEMINI_API_KEY') },
        {
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
            generationConfig: {
                responseMimeType: 'application/json',
                responseJsonSchema: schema,
            },
        }
    );
    const data = await response.json();
    const output = (data.candidates?.[0]?.content?.parts ?? [])
        .filter(part => !part.thought)
        .map(part => part.text ?? '')
        .join('');
    return JSON.parse(output);
}

async function askValid(prompt, schema, ask) {
    let errors = [];
    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
        const feedback = errors.length
            ? `\n\nYour previous answer was invalid, fix these errors:\n- ${errors.join('\n- ')}`
            : '';
        const result = await ask(prompt + feedback, schema);
        errors = validateCards(result.cards);
        if (errors.length === 0) return result;
    }
    throw new Error(
        `invalid deck after ${MAX_ATTEMPTS} attempts:\n- ${errors.join('\n- ')}`
    );
}

export function deckFileName({ learnerLang, targetLang, level }) {
    const compact = code => code.replace(/-/g, '');
    const suffix = level === 'standard' ? '' : `-${level}`;
    return `${compact(learnerLang)}-${compact(targetLang)}${suffix}`;
}

export async function createDeck(options, ask = askGemini, log = () => {}) {
    const names = new Intl.DisplayNames(['en'], { type: 'language' });
    const values = {
        ...options,
        level: options.level.toUpperCase(),
        targetName: names.of(options.targetLang),
        learnerName: names.of(options.learnerLang),
    };
    const brief = fill(fs.readFileSync(PROMPT_PATH, 'utf8'), values);

    log('✍️  Drafting deck…');
    const draft = await askValid(brief, DECK_SCHEMA, ask);
    log(`🔎 Reviewing ${draft.cards.length} cards…`);
    const review = await askValid(
        fill(REVIEW_PROMPT, {
            ...values,
            brief,
            deck: JSON.stringify(draft.cards, null, 2),
        }),
        REVIEW_SCHEMA,
        ask
    );
    return {
        deck: {
            learnerLang: options.learnerLang,
            targetLang: options.targetLang,
            region: options.region,
            tts: options.tts,
            cards: review.cards,
        },
        changes: review.changes,
    };
}
