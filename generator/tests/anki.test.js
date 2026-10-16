import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { test } from 'node:test';
import { unzipSync } from 'fflate';
import { buildApkg } from '../anki.js';
import { audioClips } from '../deck.js';
import { deck } from './fixtures.js';

function openApkg(apkg) {
    const files = unzipSync(apkg);
    const dbPath = path.join(
        fs.mkdtempSync(path.join(os.tmpdir(), 'apkg-test-')),
        'collection.anki2'
    );
    fs.writeFileSync(dbPath, files['collection.anki2']);
    return { files, db: new DatabaseSync(dbPath) };
}

function build() {
    const audioDir = fs.mkdtempSync(path.join(os.tmpdir(), 'apkg-audio-'));
    for (const clip of audioClips('deDE-trTR', deck())) {
        fs.writeFileSync(path.join(audioDir, clip.file), clip.text);
    }
    fs.writeFileSync(path.join(audioDir, 'deDE-trTR_removed.mp3'), 'stale');
    return openApkg(buildApkg('deDE-trTR', deck(), audioDir));
}

test('packs one note per card and a recognition card only for rituals', () => {
    const { db } = build();
    const cards = db
        .prepare(
            'SELECT n.flds, c.ord FROM cards c JOIN notes n ON n.id = c.nid ORDER BY c.id'
        )
        .all()
        .map(row => [row.flds.split('\x1f')[2], row.ord]);
    assert.deepEqual(cards, [
        ['Teşekkürler', 0],
        ['Hoş geldiniz', 0],
        ['Hoş geldiniz', 1],
    ]);
});

test('links sound fields and tags', () => {
    const { db } = build();
    const notes = db.prepare('SELECT flds, tags FROM notes ORDER BY id').all();
    const fields = notes[0].flds.split('\x1f');
    assert.equal(fields[16], '[sound:deDE-trTR_thanks.mp3]');
    assert.equal(fields[17], '[sound:deDE-trTR_thanks__plural.mp3]');
    assert.equal(
        notes[1].flds.split('\x1f')[18],
        '[sound:deDE-trTR_welcome__response.mp3]'
    );
    assert.equal(
        notes[0].tags,
        ' lang:tr-TR L1:de-DE cat:politeness type:single '
    );
});

test('bundles exactly the deck audio as media', () => {
    const { files } = build();
    const media = JSON.parse(new TextDecoder().decode(files.media));
    assert.deepEqual(
        Object.values(media).sort(),
        audioClips('deDE-trTR', deck())
            .map(clip => clip.file)
            .sort()
    );
    assert.equal(new TextDecoder().decode(files[0]), 'Teşekkürler');
});

test('keeps note guids stable between builds', () => {
    const guids = () =>
        build()
            .db.prepare('SELECT guid FROM notes ORDER BY id')
            .all()
            .map(row => row.guid);
    assert.deepEqual(guids(), guids());
});
