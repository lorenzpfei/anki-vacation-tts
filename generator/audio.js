import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { audioClips } from './deck.js';

export function clipHash(text, tts) {
    return crypto
        .createHash('sha1')
        .update(JSON.stringify({ text, tts }))
        .digest('hex');
}

export async function syncAudio(deckName, deck, dir, speak, log = () => {}) {
    fs.mkdirSync(dir, { recursive: true });
    const manifestPath = path.join(dir, 'manifest.json');
    const manifest = fs.existsSync(manifestPath)
        ? JSON.parse(fs.readFileSync(manifestPath, 'utf8'))
        : {};
    const result = { generated: 0, kept: 0, failed: [] };

    for (const clip of audioClips(deckName, deck)) {
        const file = path.join(dir, clip.file);
        const hash = clipHash(clip.text, deck.tts);
        // Files from before the manifest existed are trusted as current.
        if (fs.existsSync(file) && (manifest[clip.file] ?? hash) === hash) {
            manifest[clip.file] = hash;
            result.kept++;
            continue;
        }
        try {
            fs.writeFileSync(file, await speak(clip.text));
            manifest[clip.file] = hash;
            result.generated++;
            log(`  🎙️  ${clip.file}  ${clip.text}`);
        } catch (error) {
            result.failed.push(clip.file);
            log(`  ❌ ${clip.file}: ${error.message}`);
        }
        fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 4));
    }
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 4));
    return result;
}
