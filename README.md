# Anki Vacation TTS Generator

**Learn only what you actually need for your vacation abroad!**

This Node.js tool generates audio flashcards for essential travel phrases - no unnecessary vocabulary or complex grammar that typical language learning apps force on you. Focus on authentic, colloquial expressions that locals actually use in real situations like restaurants, shops, and emergencies.

Perfect for travelers who want to learn practical communication basics before visiting a new country, without wasting time on academic language that won't help you order coffee or ask for directions.

## 🚀 Features

- 🤖 **One-command decks**: Gemini drafts a deck from [Prompt.md](generator/Prompt.md), then a second native-speaker review pass fixes unnatural phrases and pronunciations
- 🎙️ **High-quality TTS**: Gemini, ElevenLabs, Azure or Google voices per deck
- 📦 **Ready-to-import Anki package**: one `.apkg` with note type, card templates, styling and audio
- 🧩 **Card-based deck model**: `single` and `ritual_pair` cards incl. IPA + simple pronunciation
- ♻️ **Up-to-date audio**: only new or changed phrases are synthesized; re-importing updates your notes instead of duplicating them

## 🧠 Why Anki works (science‑backed)

Anki pairs **active recall** (testing yourself) with **spaced repetition** (reviewing right before you forget) to boost long‑term memory and retention with less time.

- **Active recall** outperforms rereading for durable learning and transfer.
- **Spaced repetition** schedules optimized intervals to beat the forgetting curve.

References: [BMC Medical Education — Anki users & outcomes](https://pmc.ncbi.nlm.nih.gov/articles/PMC10403443/), [International Journal of Medical Students — Spaced repetition](https://ijms.pitt.edu/IJMS/article/view/1549)

## 🛠️ Setup

```bash
cd generator
pnpm install
cp .env.example .env
```

Fill in the keys you need:

- **Gemini** (deck creation and Gemini voices): [Google AI Studio](https://aistudio.google.com/apikey)
- **Google Cloud TTS**: [Cloud Console](https://console.cloud.google.com/) → enable Text-to-Speech API → create API key
- **Azure**: [create a Speech resource](https://portal.azure.com/#create/Microsoft.CognitiveServicesSpeechServices) with pricing tier `Free F0`, then copy `KEY 1` and the location from `Keys and Endpoint`
- **ElevenLabs**: [ElevenLabs](https://elevenlabs.io/) → create API key (paid plan required for library voices)

Requires Node.js 22.13 or newer.

## 🎯 Usage

### Build a deck

```bash
node generate.js deDE-trTR
```

This synthesizes missing or changed audio into `output/audio/deDE-trTR/` and writes `output/deDE-trTR.apkg`. Open that file with Anki (double-click or `File` → `Import`) and you are done: note type, both card templates, styling and audio come with it.

Run `node generate.js` without arguments to list all decks.

### Create a new deck

```bash
node generate.js new --target zh-CN --region "mainland China (neutral standard Putonghua)" --provider azure --voice zh-CN-YunyangNeural
```

| Option       | Default    | Description                                   |
| ------------ | ---------- | --------------------------------------------- |
| `--target`   | (required) | Target language, e.g. `tr-TR`, `zh-CN`        |
| `--region`   | (required) | Where the phrases should sound native         |
| `--learner`  | `de-DE`    | Language of cues and explanations             |
| `--level`    | `standard` | `essentials`, `standard` or `advanced`        |
| `--provider` | `gemini`   | `gemini`, `google`, `azure` or `elevenlabs`   |
| `--voice`    | `Kore`     | Voice name or id, required for non-Gemini TTS |

The deck is saved as `decks/<learner>-<target>[-level].json` and the review pass prints what it changed. Read through the cards, adjust anything you like, then build it.
Deck creation uses `gemini-4-argon`; set `GEMINI_MODEL` in `.env` to use a different model, e.g. the cheaper `gemini-3.8-flash`.

### Choosing a voice

- **Gemini** (`gemini-3.8-flash-tts`): very natural, steered by the `style` text in the deck's `tts` config. Voices: [Gemini speech generation](https://ai.google.dev/gemini-api/docs/speech-generation#voices)
- **ElevenLabs**: excellent for most European languages and Turkish/Arabic. Voices: [voice library](https://elevenlabs.io/voice-library)
- **Azure**: the most reliable choice for Mandarin tones in current benchmarks; the Mandarin deck uses `zh-CN-YunyangNeural`. Clips get a short silence before and after so they don't start abruptly in Anki. HD (DragonHD) voices are only available in some regions. Voices: [language support](https://learn.microsoft.com/azure/ai-services/speech-service/language-support?tabs=tts)
- **Google Cloud TTS**: Neural2 and Chirp3-HD voices. Voices: [voice list](https://cloud.google.com/text-to-speech/docs/list-voices-and-types)

Changing the voice of a deck regenerates all of its audio on the next build.

## 🌍 Available decks

| Deck                  | Language           | Cards | Voice                       |
| --------------------- | ------------------ | ----- | --------------------------- |
| `deDE-arSY-advanced`  | Arabic (Syria)     | 92    | ElevenLabs                  |
| `deDE-frFR-advanced`  | French             | 96    | ElevenLabs                  |
| `deDE-hiIN-essential` | Hindi              | 23    | Google Neural2              |
| `deDE-jaJP`           | Japanese           | 69    | Google Neural2              |
| `deDE-koKR`           | Korean             | 52    | Google Neural2              |
| `deDE-trTR`           | Turkish            | 51    | ElevenLabs                  |
| `deDE-zhCN`           | Mandarin (neutral) | 51    | Azure `zh-CN-YunyangNeural` |

All decks are for German speakers.

## 📋 Deck format

A deck is a JSON file in `generator/decks/`:

```json
{
    "learnerLang": "de-DE",
    "targetLang": "tr-TR",
    "tts": { "provider": "elevenlabs", "voice": "ctoYieZ4J7WwcdhujpMq" },
    "cards": []
}
```

- `tts` takes `provider` and `voice`, plus optional `model`, `style` (Gemini), `rate` (Azure, e.g. `-20%`) and `voice_settings` (ElevenLabs).
- The Anki deck is named after the target language in the learner's language (e.g. `Chinesisch (China)`); set `title` to override it.
- Cards are either `single` (with optional polite/plural variant) or `ritual_pair` (call + fixed response). The exact fields are described in [Prompt.md](generator/Prompt.md).
- Card ids are stable: they name the audio files and identify notes in Anki, so keep them when editing a card.

## 🃏 Card types in Anki

- **Say it**: always generated, trains producing the phrase (L1 → L2). For rituals it asks for the response.
- **Understand it**: only for ritual pairs, trains recognizing what you hear (L2 → L1) and how to answer.

You need to both say and understand greetings, but you only need to say "Where is the toilet?" — you won't hear others asking you that.

## 📊 Two pronunciation aids

Every card shows both:

- **IPA**: full International Phonetic Alphabet with stress, e.g. Turkish "Merhaba" → `ˈmɛɾhaba`
- **Simple**: a spelling that is easy to read for the learner, e.g. `mer-ha-ba`. For tonal languages this is the standard romanization with tone marks, e.g. Mandarin "你好" → `nǐ hǎo`

## 🌟 Language Authenticity

We are focusing on actually used phrases instead of using the ones learned in school.
The goal is to not immediately sound like a foreigner :D
