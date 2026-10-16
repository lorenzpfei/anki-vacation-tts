import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
    audioClips,
    listDecks,
    loadDeck,
    validateCards,
    validateDeck,
} from '../deck.js';
import { deck, ritual, single } from './fixtures.js';

test('every shipped deck is valid', () => {
    for (const name of listDecks()) {
        assert.deepEqual(validateDeck(loadDeck(name)), [], name);
    }
});

test('rejects duplicate ids, missing fields and incomplete variants', () => {
    const errors = validateCards([
        single,
        { ...single, l2: '' },
        { ...ritual, id: 'Welcome!' },
        { ...single, id: 'other', variant_plural: { l2: 'x' } },
    ]);
    assert.deepEqual(errors, [
        'cards[1] (thanks): duplicate id',
        'cards[1] (thanks): missing l2',
        'cards[2] (Welcome!): id must match [a-z0-9_]+',
        'cards[3] (other): missing variant_plural.pronunciation_ipa',
        'cards[3] (other): missing variant_plural.pronunciation_simple',
    ]);
});

test('rejects unknown tts providers', () => {
    assert.deepEqual(validateDeck(deck({ provider: 'polly', voice: 'x' })), [
        'tts.provider must be one of gemini, google, azure, elevenlabs',
    ]);
});

test('lists one clip per spoken phrase', () => {
    assert.deepEqual(audioClips('deDE-trTR', deck()), [
        { file: 'deDE-trTR_thanks.mp3', text: 'Teşekkürler' },
        { file: 'deDE-trTR_thanks__plural.mp3', text: 'Teşekkür ederim' },
        { file: 'deDE-trTR_welcome__call.mp3', text: 'Hoş geldiniz' },
        { file: 'deDE-trTR_welcome__response.mp3', text: 'Hoş bulduk' },
    ]);
});
