import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { zipSync } from 'fflate';
import { audioClips } from './deck.js';

const MODEL_ID = 1734000000001;
const MODEL_NAME = 'Vacation PhraseCard';

const FIELDS = [
    'Cue_L1',
    'Context_L1',
    'L2',
    'Pron_IPA',
    'Pron_Simple',
    'Meaning_L1',
    'Literal_L1',
    'Usage_L1',
    'VarPlural_L2',
    'VarPlural_IPA',
    'VarPlural_Simple',
    'Resp_L2',
    'Resp_Pron_IPA',
    'Resp_Pron_Simple',
    'Resp_Meaning_L1',
    'Notes_L1',
    'Audio_L2',
    'Audio_VarPlural',
    'Audio_Resp',
];

const VARIANT = `{{#VarPlural_L2}}
<hr>
<div class="variant">
<div><b>Polite/plural variant:</b> {{VarPlural_L2}}</div>
<div class="audio">{{Audio_VarPlural}}</div>
<div><b>IPA:</b> {{VarPlural_IPA}} &nbsp;|&nbsp; <b>Simple:</b> {{VarPlural_Simple}}</div>
</div>
{{/VarPlural_L2}}`;

const FOOTER = `{{#Notes_L1}}<hr><div class="notes">{{Notes_L1}}</div>{{/Notes_L1}}
<div class="tags">{{Tags}}</div>`;

const SAY_FRONT = `{{#Resp_L2}}
<div class="cue">Someone says to you: “{{L2}}” – how do you respond?</div>
<div class="context">{{Context_L1}}</div>
<div class="audio">{{Audio_L2}}</div>
{{/Resp_L2}}
{{^Resp_L2}}
<div class="cue">{{Cue_L1}}</div>
<div class="context">{{Context_L1}}</div>
{{/Resp_L2}}`;

const SAY_BACK = `{{#Resp_L2}}
<div class="l2">{{Resp_L2}}</div>
<div class="audio">{{Audio_Resp}}</div>
<div class="block"><b>IPA:</b> {{Resp_Pron_IPA}} &nbsp;|&nbsp; <b>Simple:</b> {{Resp_Pron_Simple}}</div>
<div class="block"><b>Meaning:</b> {{Resp_Meaning_L1}}</div>
<div class="block"><b>Situation:</b> {{Usage_L1}}</div>
<hr>
<div class="block"><b>What you usually hear first:</b></div>
<div class="l2">{{L2}}</div>
<div class="audio">{{Audio_L2}}</div>
<div class="block"><b>Call – IPA:</b> {{Pron_IPA}} &nbsp;|&nbsp; <b>Simple:</b> {{Pron_Simple}}</div>
<div class="block"><b>Call – meaning:</b> {{Meaning_L1}}</div>
{{/Resp_L2}}
{{^Resp_L2}}
<div class="l2">{{L2}}</div>
<div class="audio">{{Audio_L2}}</div>
<div class="block"><b>IPA:</b> {{Pron_IPA}} &nbsp;|&nbsp; <b>Simple:</b> {{Pron_Simple}}</div>
<div class="block"><b>Meaning:</b> {{Meaning_L1}}</div>
{{#Literal_L1}}<div class="block"><b>Literal:</b> {{Literal_L1}}</div>{{/Literal_L1}}
{{#Usage_L1}}<div class="block"><b>Usage:</b> {{Usage_L1}}</div>{{/Usage_L1}}
${VARIANT}
{{/Resp_L2}}
${FOOTER}`;

const UNDERSTAND_FRONT = `{{#Resp_L2}}
<div class="l2">{{L2}}</div>
<div class="audio">{{Audio_L2}}</div>
<div class="context">What does this mean, and how do you respond?</div>
{{/Resp_L2}}`;

const UNDERSTAND_BACK = `<div class="block"><b>Meaning:</b> {{Meaning_L1}}</div>
{{#Usage_L1}}<div class="block"><b>Usage:</b> {{Usage_L1}}</div>{{/Usage_L1}}
<hr>
<div class="block"><b>Typical response:</b></div>
<div class="l2">{{Resp_L2}}</div>
<div class="audio">{{Audio_Resp}}</div>
<div class="block"><b>Response – IPA:</b> {{Resp_Pron_IPA}} &nbsp;|&nbsp; <b>Simple:</b> {{Resp_Pron_Simple}}</div>
<div class="block"><b>Response meaning:</b> {{Resp_Meaning_L1}}</div>
${FOOTER}`;

const CSS = `.card { font-family: system-ui, sans-serif; font-size: 18px; text-align: center; }
.cue { font-size: 1.4em; font-weight: 600; margin-bottom: 4px; }
.context { color: #666; font-size: 0.95em; margin-bottom: 10px; }
.l2 { font-size: 1.8em; font-weight: 700; margin: 4px 0; }
.audio, .block { margin: 6px 0; }
.variant { margin-top: 6px; }
.notes { font-size: 0.9em; color: #666; font-style: italic; margin-top: 8px; }
.tags { font-size: 0.75em; color: #aaa; margin-top: 6px; }
hr { border: none; border-top: 1px solid #ddd; margin: 10px 0; }`;

const SCHEMA = `
CREATE TABLE col (id integer primary key, crt integer not null, mod integer not null, scm integer not null, ver integer not null, dty integer not null, usn integer not null, ls integer not null, conf text not null, models text not null, decks text not null, dconf text not null, tags text not null);
CREATE TABLE notes (id integer primary key, guid text not null, mid integer not null, mod integer not null, usn integer not null, tags text not null, flds text not null, sfld integer not null, csum integer not null, flags integer not null, data text not null);
CREATE TABLE cards (id integer primary key, nid integer not null, did integer not null, ord integer not null, mod integer not null, usn integer not null, type integer not null, queue integer not null, due integer not null, ivl integer not null, factor integer not null, reps integer not null, lapses integer not null, left integer not null, odue integer not null, odid integer not null, flags integer not null, data text not null);
CREATE TABLE revlog (id integer primary key, cid integer not null, usn integer not null, ease integer not null, ivl integer not null, lastIvl integer not null, factor integer not null, time integer not null, type integer not null);
CREATE TABLE graves (usn integer not null, oid integer not null, type integer not null);
CREATE INDEX ix_notes_usn on notes (usn);
CREATE INDEX ix_cards_usn on cards (usn);
CREATE INDEX ix_revlog_usn on revlog (usn);
CREATE INDEX ix_cards_nid on cards (nid);
CREATE INDEX ix_cards_sched on cards (did, queue, due);
CREATE INDEX ix_revlog_cid on revlog (cid);
CREATE INDEX ix_notes_csum on notes (csum);`;

const sha1 = text => crypto.createHash('sha1').update(text).digest('hex');

const escapeHtml = value =>
    (value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

function noteFields(deckName, card) {
    const sound = suffix => `[sound:${deckName}_${card.id}${suffix}.mp3]`;
    if (card.type === 'ritual_pair') {
        return {
            Cue_L1: card.cue_L1,
            Context_L1: card.context_L1,
            L2: card.call_l2,
            Pron_IPA: card.call_pronunciation_ipa,
            Pron_Simple: card.call_pronunciation_simple,
            Meaning_L1: card.call_meaning_L1,
            Literal_L1: card.call_literal_L1,
            Usage_L1: card.call_usage_L1,
            Resp_L2: card.response_l2,
            Resp_Pron_IPA: card.response_pronunciation_ipa,
            Resp_Pron_Simple: card.response_pronunciation_simple,
            Resp_Meaning_L1: card.response_meaning_L1,
            Notes_L1: card.notes_L1,
            Audio_L2: sound('__call'),
            Audio_Resp: sound('__response'),
        };
    }
    const variant = card.variant_plural;
    return {
        Cue_L1: card.cue_L1,
        Context_L1: card.context_L1,
        L2: card.l2,
        Pron_IPA: card.pronunciation_ipa,
        Pron_Simple: card.pronunciation_simple,
        Meaning_L1: card.meaning_L1,
        Literal_L1: card.literal_L1,
        Usage_L1: card.usage_L1,
        VarPlural_L2: variant?.l2,
        VarPlural_IPA: variant?.pronunciation_ipa,
        VarPlural_Simple: variant?.pronunciation_simple,
        Notes_L1: card.notes_L1,
        Audio_L2: sound(''),
        Audio_VarPlural: variant ? sound('__plural') : '',
    };
}

function collection(deckId, deckTitle, now) {
    const model = {
        id: String(MODEL_ID),
        name: MODEL_NAME,
        type: 0,
        mod: now,
        usn: -1,
        sortf: 0,
        did: deckId,
        tags: [],
        vers: [],
        css: CSS,
        latexPre: '',
        latexPost: '',
        latexsvg: false,
        req: [
            [0, 'any', [0, 2]],
            [1, 'all', [11]],
        ],
        flds: FIELDS.map((name, ord) => ({
            name,
            ord,
            font: 'Arial',
            size: 20,
            media: [],
            rtl: false,
            sticky: false,
        })),
        tmpls: [
            ['Say it', SAY_FRONT, SAY_BACK],
            ['Understand it', UNDERSTAND_FRONT, UNDERSTAND_BACK],
        ].map(([name, qfmt, afmt], ord) => ({
            name,
            ord,
            qfmt,
            afmt,
            bqfmt: '',
            bafmt: '',
            did: null,
        })),
    };
    const deck = (id, name) => ({
        id,
        name,
        desc: '',
        mod: now,
        usn: -1,
        dyn: 0,
        conf: 1,
        collapsed: false,
        extendNew: 0,
        extendRev: 50,
        newToday: [0, 0],
        revToday: [0, 0],
        lrnToday: [0, 0],
        timeToday: [0, 0],
    });
    const dconf = {
        id: 1,
        name: 'Default',
        mod: 0,
        usn: 0,
        autoplay: true,
        replayq: true,
        timer: 0,
        maxTaken: 60,
        new: {
            bury: true,
            delays: [1, 10],
            initialFactor: 2500,
            ints: [1, 4, 7],
            order: 1,
            perDay: 20,
            separate: true,
        },
        lapse: {
            delays: [10],
            leechAction: 0,
            leechFails: 8,
            minInt: 1,
            mult: 0,
        },
        rev: {
            bury: true,
            ease4: 1.3,
            fuzz: 0.05,
            ivlFct: 1,
            maxIvl: 36500,
            minSpace: 1,
            perDay: 100,
        },
    };
    const conf = {
        activeDecks: [1],
        curDeck: 1,
        curModel: String(MODEL_ID),
        nextPos: 1,
        newSpread: 0,
        collapseTime: 1200,
        timeLim: 0,
        estTimes: true,
        dueCounts: true,
        sortType: 'noteFld',
        sortBackwards: false,
        addToCur: true,
    };
    return {
        conf: JSON.stringify(conf),
        models: JSON.stringify({ [MODEL_ID]: model }),
        decks: JSON.stringify({
            1: deck(1, 'Default'),
            [deckId]: deck(deckId, deckTitle),
        }),
        dconf: JSON.stringify({ 1: dconf }),
    };
}

export function buildApkg(deckName, deck, audioDir) {
    const now = Math.floor(Date.now() / 1000);
    const deckId = parseInt(sha1(deckName).slice(0, 12), 16);
    const deckTitle =
        deck.title ??
        new Intl.DisplayNames(['en'], { type: 'language' }).of(deck.targetLang);
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'apkg-'));
    const dbPath = path.join(tmp, 'collection.anki2');
    const db = new DatabaseSync(dbPath);
    db.exec(SCHEMA);

    const col = collection(deckId, deckTitle, now);
    db.prepare(
        'INSERT INTO col VALUES (1, ?, ?, ?, 11, 0, 0, 0, ?, ?, ?, ?, ?)'
    ).run(
        now,
        now * 1000,
        now * 1000,
        col.conf,
        col.models,
        col.decks,
        col.dconf,
        '{}'
    );

    const insertNote = db.prepare(
        'INSERT INTO notes VALUES (?, ?, ?, ?, -1, ?, ?, ?, ?, 0, ?)'
    );
    const insertCard = db.prepare(
        "INSERT INTO cards VALUES (?, ?, ?, ?, ?, -1, 0, 0, ?, 0, 0, 0, 0, 0, 0, 0, 0, '')"
    );
    let id = Date.now();
    deck.cards.forEach((card, index) => {
        const values = noteFields(deckName, card);
        const fields = FIELDS.map(name =>
            name.startsWith('Audio_')
                ? (values[name] ?? '')
                : escapeHtml(values[name])
        );
        const tags = [
            `lang:${deck.targetLang}`,
            `L1:${deck.learnerLang}`,
            `cat:${card.category ?? ''}`,
            `type:${card.type}`,
        ].join(' ');
        const noteId = id++;
        insertNote.run(
            noteId,
            sha1(`${deckName}/${card.id}`).slice(0, 16),
            MODEL_ID,
            now,
            ` ${tags} `,
            fields.join('\x1f'),
            fields[0],
            parseInt(sha1(fields[0]).slice(0, 8), 16),
            ''
        );
        const ords = card.type === 'ritual_pair' ? [0, 1] : [0];
        for (const ord of ords) {
            insertCard.run(id++, noteId, deckId, ord, now, index + 1);
        }
    });
    db.close();

    const files = { 'collection.anki2': fs.readFileSync(dbPath) };
    const media = {};
    audioClips(deckName, deck)
        .map(clip => clip.file)
        .filter(file => fs.existsSync(path.join(audioDir, file)))
        .forEach((file, index) => {
            media[index] = file;
            files[index] = fs.readFileSync(path.join(audioDir, file));
        });
    files.media = Buffer.from(JSON.stringify(media));
    fs.rmSync(tmp, { recursive: true });
    return Buffer.from(zipSync(files, { level: 0 }));
}
