import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createDeck, deckFileName } from '../create-deck.js';
import { ritual, single } from './fixtures.js';

const options = {
    learnerLang: 'de-DE',
    targetLang: 'zh-CN',
    region: 'Beijing',
    level: 'standard',
    tts: { provider: 'azure', voice: 'zh-CN-XiaoxiaoNeural' },
};

test('drafts, retries invalid output with feedback and applies the review', async () => {
    const prompts = [];
    const answers = [
        { cards: [{ ...single, l2: '' }] },
        { cards: [single] },
        { cards: [single, ritual], changes: ['added welcome ritual'] },
    ];
    const ask = async prompt => {
        prompts.push(prompt);
        return answers.shift();
    };

    const { deck, changes } = await createDeck(options, ask);

    assert.equal(prompts.length, 3);
    assert.match(prompts[0], /TARGET_LANGUAGE_NAME = "Chinese \(China\)"/);
    assert.match(prompts[0], /DECK_LEVEL = "STANDARD"/);
    assert.doesNotMatch(prompts[0], /{{/);
    assert.match(prompts[1], /missing l2/);
    assert.match(prompts[2], /native speaker from Beijing/);
    assert.deepEqual(changes, ['added welcome ritual']);
    assert.deepEqual(deck, {
        learnerLang: 'de-DE',
        targetLang: 'zh-CN',
        region: 'Beijing',
        tts: options.tts,
        cards: [single, ritual],
    });
});

test('gives up after repeated invalid output', async () => {
    const ask = async () => ({ cards: [] });
    await assert.rejects(
        createDeck(options, ask),
        /invalid deck after 3 attempts/
    );
});

test('names deck files after languages and non-default level', () => {
    assert.equal(deckFileName(options), 'deDE-zhCN');
    assert.equal(
        deckFileName({ ...options, level: 'advanced' }),
        'deDE-zhCN-advanced'
    );
});
