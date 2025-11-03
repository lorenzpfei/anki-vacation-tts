# Anki Vacation TTS Generator

**Learn only what you actually need for your vacation abroad!**

This Node.js tool generates audio flashcards for essential travel phrases - no unnecessary vocabulary or complex grammar that typical language learning apps force on you. Focus on authentic, colloquial expressions that locals actually use in real situations like restaurants, shops, and emergencies.

Perfect for travelers who want to learn practical communication basics before visiting a new country, without wasting time on academic language that won't help you order coffee or ask for directions.

## 🚀 Features

- 🎙️ **High-Quality TTS**: Azure Neural (e.g., tr-TR-EmelNeural) or Google when appropriate
- 🧩 **Card-based deck model**: `single` and `ritual_pair` cards incl. IPA + simple pronunciation
- 📚 **Anki Integration**: Unified CSV (20 fields) for one note type (production + recognition)
- 🔄 **Pair decks**: One file contains learner L1 + target L2, context, usage, variants
- 🎯 **Stable audio names**: Based on card IDs (incl. `__plural`, `__call`, `__response`)
- ⚡ **Smart Generation**: Skips existing files, robust error handling

## 🧠 Why Anki works (science‑backed)

Anki pairs **active recall** (testing yourself) with **spaced repetition** (reviewing right before you forget) to boost long‑term memory and retention with less time.

- **Active recall** outperforms rereading for durable learning and transfer.
- **Spaced repetition** schedules optimized intervals to beat the forgetting curve.

References: [BMC Medical Education — Anki users & outcomes](https://pmc.ncbi.nlm.nih.gov/articles/PMC10403443/), [International Journal of Medical Students — Spaced repetition](https://ijms.pitt.edu/IJMS/article/view/1549)

## 📋 Deck model & coverage

- A deck is a JavaScript module exporting `deck` with `learnerLang`, `targetLang`, `voice`, and `cards`.
- Cards are either `single` (with optional polite/plural variant) or `ritual_pair` (call + fixed response).
- Phrases cover greetings/politeness, introductions, communication, food & drink, navigation, shopping, emergencies, and numbers.

## 🛠️ Installation & Setup

### 1. Install

```bash
pnpm install
```

### 2. API Keys Setup

Create a `.env` file (see `.env.example`).

### 3. Get API Keys

- **Google**: [Cloud Console](https://console.cloud.google.com/) → Enable Text-to-Speech API → Create API Key
- **Azure**: [Speech Studio](https://speech.microsoft.com/) → Create Speech resource

## 🎯 Usage

### Pair deck (recommended)

```bash
# Generate from a pair deck (e.g., German→Turkish with context-aware cards)
cd generator
node generate.js deDE-trTR
```

This produces a unified CSV and audio for that pair deck.

### Legacy (optional)

The legacy source→target mode still works if you register old-style language decks:

```bash
node generate.js <source_deck> <target_deck>
node generate.js --all-to <target_deck>
node generate.js --all-from <source_deck>
node generate.js --all
```

### Build Audio ZIP Files

After generating audio files, you can compress them into language-specific ZIP files for distribution:

```bash
# Build ZIPs for all languages (removes original MP3 files after compression)
npm run build-zips

# Or use the script directly
node build-audio-zips.js

# Build ZIP for specific language(s)
node build-audio-zips.js trTR
node build-audio-zips.js deDE frFR esES
```

**What this does:**

- Creates `audio-{languageCode}.zip` files in the `output/audio/` directory
- Each ZIP contains all MP3 files for that target language
- **Removes** the original MP3 files after successful compression
- Perfect for creating release assets or distributing audio files

**Example output:**

```
output/audio/
├── audio-deDE.zip     # All German audio files
├── audio-trTR.zip     # All Turkish audio files
├── audio-frFR.zip     # All French audio files
└── ...
```

### List Available Decks

```bash
node generate.js
```

## 📁 Output Structure

```
output/
├── audio/                         # All audio files in one directory
│   ├── deDE-trTR_greeting_hello_casual.mp3
│   ├── deDE-trTR_thanks_casual__plural.mp3
│   ├── deDE-trTR_ritual_welcome_home__call.mp3
│   └── deDE-trTR_ritual_welcome_home__response.mp3
└── decks/
    └── deDE-trTR/                # Pair-deck folder (no duplicated name)
        └── anki_unified.csv      # Unified CSV (20 fields)
```

### Unified CSV (20 columns)

- File: `output/decks/<pair>/anki_unified.csv`
- Fields: see the Anki Import tutorial below (Step 2/3) for the exact order and mapping.

## 📊 Dual IPA Pronunciation System

Choose your preferred IPA format when importing to Anki:

### Option 1: Full IPA (Column 4)

- **Format**: Complete International Phonetic Alphabet with all diacritics
- **Examples**:
    - German "Hallo" → `/ˈhaloː/`
    - French "Bonjour" → `/bɔ̃ˈʒuʁ/`
    - Japanese "Konnichiwa" → `/konnitʃiwa/`
- **Best for**: Linguists, precise pronunciation, advanced learners

### Option 2: Simplified IPA (Column 5)

- **Format**: IPA using basic symbols with hyphens for syllable breaks
- **Examples**:
    - German "Hallo" → `/ˈha-lo/`
    - French "Bonjour" → `/bon-ˈʒur/`
    - Japanese "Konnichiwa" → `/kon-ni-tʃi-wa/`
- **Best for**: Most learners, easier to read, still internationally standardized

## 📲 Anki Import Tutorial

### Step 1: Copy Audio Files

1. Open Anki → `Tools` → `Add-ons` → `View Files`
2. Go up one level to the `Anki2` (or profile) folder
3. Open your profile folder (e.g. `User 1`) and then the `collection.media/` folder
4. Copy all files from the `output/audio/` directory directly into `collection.media/`

---

### Step 2: Create Note Type

1. In Anki, go to `Tools` → `Manage Note Types` → `Add` → choose **Basic**
2. Name it e.g. **"Vacation PhraseCard"**
3. Click `Fields...` and **delete** any existing fields
4. Create these fields in **this exact order**:
    1. `Cue_L1`
    2. `Context_L1`
    3. `L2`
    4. `Pron_IPA`
    5. `Pron_Simple`
    6. `Meaning_L1`
    7. `Literal_L1`
    8. `Usage_L1`
    9. `VarPlural_L2`
    10. `VarPlural_IPA`
    11. `VarPlural_Simple`
    12. `Resp_L2`
    13. `Resp_Pron_IPA`
    14. `Resp_Pron_Simple`
    15. `Resp_Meaning_L1`
    16. `Notes_L1`
    17. `Audio_L2`
    18. `Audio_VarPlural`
    19. `Audio_Resp`
    20. `Tags`

5. Click **Close** to save the fields.

---

### Step 3: Import CSV

1. Go to `File` → `Import...` → select your generated `anki_unified.csv`
2. Settings:
    - **Type**: `Vacation PhraseCard` (or whatever name you chose)
    - **Fields separated by**: `Semicolon`
    - ✅ **Allow HTML in fields**
3. Map columns to fields in this order:
    1. `Cue_L1`
    2. `Context_L1`
    3. `L2`
    4. `Pron_IPA`
    5. `Pron_Simple`
    6. `Meaning_L1`
    7. `Literal_L1`
    8. `Usage_L1`
    9. `VarPlural_L2`
    10. `VarPlural_IPA`
    11. `VarPlural_Simple`
    12. `Resp_L2`
    13. `Resp_Pron_IPA`
    14. `Resp_Pron_Simple`
    15. `Resp_Meaning_L1`
    16. `Notes_L1`
    17. `Audio_L2`
    18. `Audio_VarPlural`
    19. `Audio_Resp`
    20. `Tags`

4. Finish the import.
5. (Optional) If the header row was imported as a note, open `Browse`, select the deck, delete the first note.

---

### Step 4: Set Up Card Templates

Open `Tools` → `Manage Note Types` → select **Vacation PhraseCard** → `Cards...`.

You’ll create **two card types** inside this **one** note type.

#### Card 1 – “Say it” (production)

This card trains you to **produce** the phrase (L1 → L2).  
For rituals, it focuses on the **response** (what you say back).

**Card 1 – Front Template:**

```html
{{#Resp_L2}}
<!-- RITUAL: focus on the response, audio is fine here -->
<div class="cue">Someone says to you: “{{L2}}” – how do you respond?</div>
<div class="context">{{Context_L1}}</div>

{{#Audio_L2}}
<div class="audio">{{Audio_L2}}</div>
{{/Audio_L2}} {{/Resp_L2}} {{^Resp_L2}}
<!-- NORMAL PHRASE: L1 → L2, NO AUDIO HERE -->
<div class="cue">{{Cue_L1}}</div>
<div class="context">{{Context_L1}}</div>
{{/Resp_L2}}
```

**Card 1 – Back Template:**

```html
{{#Resp_L2}}
<!-- RITUAL: show the response as the main answer -->
<div class="l2">{{Resp_L2}}</div>
<div class="audio">{{Audio_Resp}}</div>

<div class="block">
    <b>IPA:</b> {{Resp_Pron_IPA}} &nbsp; | &nbsp;
    <b>Simple:</b> {{Resp_Pron_Simple}}
</div>

<div class="block"><b>Meaning:</b> {{Resp_Meaning_L1}}</div>

<div class="block"><b>Situation:</b> {{Usage_L1}}</div>

<hr />
<div class="block"><b>What you usually hear first:</b></div>
<div class="l2">{{L2}}</div>
<div class="audio">{{Audio_L2}}</div>
<div class="block">
    <b>Call – IPA:</b> {{Pron_IPA}} &nbsp; | &nbsp;
    <b>Simple:</b> {{Pron_Simple}}
</div>
<div class="block"><b>Call – meaning:</b> {{Meaning_L1}}</div>
{{/Resp_L2}} {{^Resp_L2}}
<!-- NORMAL PHRASE -->
<div class="l2">{{L2}}</div>
<div class="audio">{{Audio_L2}}</div>

<div class="block">
    <b>IPA:</b> {{Pron_IPA}} &nbsp; | &nbsp; <b>Simple:</b> {{Pron_Simple}}
</div>

<div class="block"><b>Meaning:</b> {{Meaning_L1}}</div>

{{#Literal_L1}}
<div class="block"><b>Literal:</b> {{Literal_L1}}</div>
{{/Literal_L1}}

<div class="block"><b>Usage:</b> {{Usage_L1}}</div>

{{#VarPlural_L2}}
<hr />
<div class="variant">
    <div><b>Polite/plural variant:</b> {{VarPlural_L2}}</div>
    <div class="audio">{{Audio_VarPlural}}</div>
    <div>
        <b>IPA:</b> {{VarPlural_IPA}} &nbsp; | &nbsp;
        <b>Simple:</b> {{VarPlural_Simple}}
    </div>
</div>
{{/VarPlural_L2}} {{/Resp_L2}} {{#Notes_L1}}
<hr />
<div class="notes">{{Notes_L1}}</div>
{{/Notes_L1}}

<div class="tags">{{Tags}}</div>
```

**Card 2 – “Understand it” (recognition)**
This card trains you to understand what you hear (L2 → meaning).
For rituals, it shows the call and how to respond.

Use the “Add Card Type…” button in the Cards... dialog to create Card 2, then paste:

**Card 2 – Front Template:**

```html
{{#Resp_L2}}
<!-- RITUAL: recognize the call -->
<div class="l2">{{L2}}</div>
<div class="audio">{{Audio_L2}}</div>
<div class="context">What does this mean, and how do you respond?</div>
{{/Resp_L2}} {{^Resp_L2}}
<!-- NORMAL PHRASE: simple L2 recognition -->
<div class="l2">{{L2}}</div>
<div class="audio">{{Audio_L2}}</div>
{{/Resp_L2}}
```

**Card 2 – Back Template:**

```html
{{#Resp_L2}}
<!-- RITUAL: show meaning + response -->
<div class="block"><b>Meaning:</b> {{Meaning_L1}}</div>

{{#Usage_L1}}
<div class="block"><b>Usage:</b> {{Usage_L1}}</div>
{{/Usage_L1}}

<hr />
<div class="block"><b>Typical response:</b></div>
<div class="l2">{{Resp_L2}}</div>
<div class="audio">{{Audio_Resp}}</div>

<div class="block">
    <b>Response – IPA:</b> {{Resp_Pron_IPA}} &nbsp; | &nbsp;
    <b>Simple:</b> {{Resp_Pron_Simple}}
</div>
<div class="block"><b>Response meaning:</b> {{Resp_Meaning_L1}}</div>
{{/Resp_L2}} {{^Resp_L2}}
<!-- NORMAL PHRASE -->
<div class="block"><b>Meaning:</b> {{Meaning_L1}}</div>

{{#Usage_L1}}
<div class="block"><b>Usage:</b> {{Usage_L1}}</div>
{{/Usage_L1}} {{#VarPlural_L2}}
<hr />
<div class="variant">
    <div><b>Polite/plural variant:</b> {{VarPlural_L2}}</div>
    <div class="audio">{{Audio_VarPlural}}</div>
    <div>
        <b>IPA:</b> {{VarPlural_IPA}} &nbsp; | &nbsp;
        <b>Simple:</b> {{VarPlural_Simple}}
    </div>
</div>
{{/VarPlural_L2}} {{/Resp_L2}} {{#Notes_L1}}
<hr />
<div class="notes">{{Notes_L1}}</div>
{{/Notes_L1}}

<div class="tags">{{Tags}}</div>
```

**Step 5: Styling**
In the same `Cards...` dialog, open the Styling tab and paste:

```html
.cue { font-size: 1.4em; font-weight: 600; margin-bottom: 4px; } .context {
color: #666; font-size: 0.95em; margin-bottom: 10px; } .l2 { font-size: 1.8em;
font-weight: 700; margin: 4px 0; } .audio { margin: 6px 0; } .block { margin:
6px 0; } .variant { margin-top: 6px; } .notes { font-size: 0.9em; color: #666;
font-style: italic; margin-top: 8px; } .tags { font-size: 0.75em; color: #aaa;
margin-top: 6px; } hr { border: none; border-top: 1px solid #ddd; margin: 10px
0; }
```

Click `Save / Close`.
From now on, every CSV you generate can be imported directly into this single note type, and all cards will behave correctly for both speaking and understanding your vacation phrases.

## 🔧 Adding New Pair Decks

### Step 1: Choose Your Language & Voice

1. **Research Available Voices:**
    - Check [Azure Speech voices](https://learn.microsoft.com/azure/ai-services/speech-service/language-support?tabs=tts) (Neural voices)
    - If needed, check [Google Cloud TTS voices](https://cloud.google.com/text-to-speech/docs/list-voices-and-types)
    - Prefer premium Neural quality; e.g., for Turkish we use `tr-TR-EmelNeural` (Azure)

2. **Determine Language Code:**
    - Use ISO format: `language-COUNTRY` (e.g., `tr-TR` for Turkish Turkey)
    - Create deck code: Remove hyphens and capitalize (e.g., `trTR`)

### Step 2: Generate Pair Deck Using AI

1. **Use the AI Prompt:**
    - Open [Prompt.md](generator/Prompt.md) and copy the entire content
    - Fill in TARGET/LEARNER settings at the top
    - Paste into your LLM and follow the instructions to produce the `deck` module (with `cards`)

2. **Focus Areas for Authenticity:**
    - **Formality level**: How locals actually greet strangers vs friends
    - **Common expressions**: Regional variants and colloquialisms
    - **Cultural context**: Payment customs, social norms, emergency protocols
    - **Gendered language**: Add notes for masculine/feminine variants

### Step 3: Create Pair Deck File

1. **Save the generated code** as `generator/languages/<L1L2>.js` (e.g., `generator/languages/deDE-trTR.js`)
2. **Validate the structure**:
    - `export const deck = { learnerLang, targetLang, provider, voice, cards: [...] }`
    - Cards are `single` or `ritual_pair` and include IPA + simple pronunciation
    - Use stable `id` values; variants use `variant_plural`; rituals use call/response fields

### Step 4: Register the Pair Deck

Add your new pair deck to `generator/data.js`:

```javascript
import { deck as deDE_trTR } from './languages/deDE-trTR.js';

export const decks = {
  'deDE-trTR': deDE_trTR,
};
```

### Step 5: Test Your Pair Deck

1. **Test audio generation:**

    ```bash
    node generate.js deDE-trTR
    ```

2. **Verify output:**
- Audio files created in `output/audio/` with `deDE-trTR_` prefix
- Unified CSV generated in `output/decks/deDE-trTR/anki_unified.csv`
    - Listen to audio samples for quality

### Step 6: Update Documentation

1. **Add to language table** in README (alphabetically by language name)
2. **Add authenticity notes** in the Language Authenticity section
3. **Test a few deck combinations** to ensure everything works

### Example: Turkish (de→tr pair deck)

```javascript
// generator/languages/deDE-trTR.js
export const deck = {
  learnerLang: 'de-DE',
  targetLang: 'tr-TR',
  provider: 'azure',
  voice: { name: 'tr-TR-EmelNeural', ssmlGender: 'FEMALE' },
  cards: [ /* single + ritual_pair cards with pronunciations */ ],
};
```

### Voice Provider Guidelines:

- **Google Cloud TTS**: Default choice, excellent Neural2 voices
- **Azure Speech**: Use when Google doesn't support the language well
- **Set provider field**: `'google'` or `'azure'` in language object

## 🌟 Language Authenticity

We are focusing on actually used phrases instead of using the ones learned in school.
The goal is to not immediately sound like a foreigner :D

---

## 🎵 Audio Management

- **Flat Structure**: All audio files in `generator/output/audio/`
- **Stable Names**: `[pair]_<cardId>.mp3`, variants `__plural`, rituals `__call`/`__response`
- **Efficient Storage**: Files are skipped if already present
- **Smart Generation**: Resilient synthesis with provider-aware config
