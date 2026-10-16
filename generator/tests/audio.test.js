import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { syncAudio } from '../audio.js';
import { deck } from './fixtures.js';

const tempDir = () => fs.mkdtempSync(path.join(os.tmpdir(), 'audio-test-'));

function recorder() {
    const spoken = [];
    const speak = async text => {
        spoken.push(text);
        return Buffer.from(text);
    };
    return { spoken, speak };
}

test('generates missing clips once and keeps them afterwards', async () => {
    const dir = tempDir();
    const first = recorder();
    const result = await syncAudio('d', deck(), dir, first.speak);
    assert.equal(result.generated, 4);
    assert.equal(first.spoken.length, 4);

    const second = recorder();
    const again = await syncAudio('d', deck(), dir, second.speak);
    assert.deepEqual(again, { generated: 0, kept: 4, failed: [] });
});

test('regenerates a clip when its text or voice changes', async () => {
    const dir = tempDir();
    await syncAudio('d', deck(), dir, recorder().speak);

    const changed = deck();
    changed.cards[0] = { ...changed.cards[0], l2: 'Sağ ol' };
    const textChange = recorder();
    await syncAudio('d', changed, dir, textChange.speak);
    assert.deepEqual(textChange.spoken, ['Sağ ol']);

    const voiceChange = recorder();
    await syncAudio(
        'd',
        { ...changed, tts: { provider: 'gemini', voice: 'Orus' } },
        dir,
        voiceChange.speak
    );
    assert.equal(voiceChange.spoken.length, 4);
});

test('adopts audio files that predate the manifest', async () => {
    const dir = tempDir();
    fs.writeFileSync(path.join(dir, 'd_thanks.mp3'), 'old recording');
    const run = recorder();
    await syncAudio('d', deck(), dir, run.speak);
    assert.equal(run.spoken.includes('Teşekkürler'), false);
    assert.equal(
        fs.readFileSync(path.join(dir, 'd_thanks.mp3'), 'utf8'),
        'old recording'
    );
});

test('reports failures and retries them on the next run', async () => {
    const dir = tempDir();
    const result = await syncAudio('d', deck(), dir, async text => {
        if (text === 'Hoş bulduk') throw new Error('rate limited');
        return Buffer.from(text);
    });
    assert.deepEqual(result.failed, ['d_welcome__response.mp3']);

    const retry = recorder();
    await syncAudio('d', deck(), dir, retry.speak);
    assert.deepEqual(retry.spoken, ['Hoş bulduk']);
});
