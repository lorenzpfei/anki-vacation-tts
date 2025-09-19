# Anki Vacation TTS Generator

**Learn only what you actually need for your vacation abroad!**

This Node.js tool generates audio flashcards for essential travel phrases - no unnecessary vocabulary or complex grammar that typical language learning apps force on you. Focus on authentic, colloquial expressions that locals actually use in real situations like restaurants, shops, and emergencies.

Perfect for travelers who want to learn practical communication basics before visiting a new country, without wasting time on academic language that won't help you order coffee or ask for directions.

## 🚀 Features

- 🎙️ **High-Quality TTS**: Google Neural2 voices + Azure TTS for unsupported languages
- 🌍 **Multi-Language Support**: 8 languages with authentic colloquial phrases
- 📚 **Anki Integration**: CSV with dual pronunciation formats (simple + IPA) for flexible learning
- 🔄 **Flexible Translation Pairs**: Any source→target language combination
- 🎯 **Semantic File Names**: Audio files named by meaning (e.g., `GREETING_HELLO.mp3`)
- ⚡ **Smart Generation**: Skips existing files, robust error handling

## 🧠 Why Anki works (science‑backed)

Anki pairs **active recall** (testing yourself) with **spaced repetition** (reviewing right before you forget) to boost long‑term memory and retention with less time.

- **Active recall** outperforms rereading for durable learning and transfer.
- **Spaced repetition** schedules optimized intervals to beat the forgetting curve.

References: [BMC Medical Education — Anki users & outcomes](https://pmc.ncbi.nlm.nih.gov/articles/PMC10403443/), [International Journal of Medical Students — Spaced repetition](https://ijms.pitt.edu/IJMS/article/view/1549)

## 📋 Available Languages (13 languages)

| Code   | Language                 |
| ------ | ------------------------ |
| `deDE` | German (Germany)         |
| `elGR` | Greek (Greece)           |
| `enGB` | English (United Kingdom) |
| `enUS` | English (United States)  |
| `esCO` | Spanish (Colombia)       |
| `esES` | Spanish (Spain)          |
| `frFR` | French (France)          |
| `itIT` | Italian (Italy)          |
| `jaJP` | Japanese (Japan)         |
| `ptBR` | Portuguese (Brazil)      |
| `ptPT` | Portuguese (Portugal)    |
| `sqAL` | Albanian (Albania)       |
| `trTR` | Turkish (Turkey)         |

## 📚 Phrase Categories (42 phrases per language)

- **Greetings & Politeness** (9): Hello, Good day, Bye, Please, Thank you, Many thanks, Yes, No, Excuse me
- **Introduction** (3): My name is, Nice to meet you, What's your name?
- **Communication** (5): Don't understand, Speak English?, Speak slower, Limited language, How do you say?
- **Food & Dining** (6): Menu, Coffee, Bill, Vegetarian, Delicious, Yummy + ATM
- **Navigation** (3): Train station, Restroom, ATM
- **Shopping** (3): How much?, Pay by card, Pay by cash
- **Emergency** (3): Help!, Need doctor, Call police
- **Numbers** (10): 1-10 in target language

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

### Command Format

```bash
# Single deck generation
node generate.js <source_deck> <target_deck>

# Bulk generation (all sources to one target)
node generate.js --all-to <target_deck>

# Bulk generation (one source to all targets)
node generate.js --all-from <source_deck>

# Complete generation (all possible combinations)
node generate.js --all
```

### Examples

```bash
# German to Albanian
node generate.js deDE sqAL

# English to Colombian Spanish
node generate.js enUS esCO

# German to French
node generate.js deDE frFR

# Generate ALL languages to German (bulk generation)
node generate.js --all-to deDE

# Generate German to ALL languages (bulk generation)
node generate.js --all-from deDE

# Generate English to ALL languages (bulk generation)
node generate.js --all-from enUS

# Generate EVERYTHING - all possible combinations (warning: lots of files!)
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
├── audio/                     # All audio files in one directory
│   ├── deDE_GREETING_HELLO.mp3
│   ├── deDE_POLITENESS_THANK_YOU.mp3
│   ├── sqAL_GREETING_HELLO.mp3
│   ├── sqAL_POLITENESS_THANK_YOU.mp3
│   └── ...
└── decks/                     # All deck combinations organized by source-target
    ├── deDE-sqAL/
    │   └── anki_deck.csv      # 7-column CSV for Anki
    ├── enUS-frFR/
    │   └── anki_deck.csv
    └── ...
```

### CSV Format (7 columns)

```csv
Source;Target;Audio;Pronunciation (IPA);Pronunciation (Simplified);Source Notes;Target Notes
"Ich heiße...";"Unë quhem...";"[sound:sqAL_INTRODUCTION_MY_NAME.mp3]";"/ˈunə ˈkuhem/";"/ˈu-nə ˈku-hem/";"";""
"Danke!";"Faleminderit!";"[sound:sqAL_POLITENESS_THANK_YOU.mp3]";"/faˌlemindeˈrit/";"/fa-le-min-de-ˈrit/";"";""
```

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
2. Go up one level to `Anki2` folder
3. If `collection.media/` does not exists, you should be able to find it by going into `User 1` (or similar)
4. Copy all files from `output/audio/` directory directly into `collection.media/`

### Step 2: Create Note Type

1. `Tools` → `Manage Note Types` → `Add` → `Basic`
2. Name it "Language TTS Learning Card"
3. Click `Fields...` and create these 7 fields (delete the existing ones):
    - `Source`
    - `Target`
    - `Audio`
    - `Pronunciation_IPA`
    - `Pronunciation_Simplified`
    - `Source_Notes`
    - `Target_Notes`

### Step 3: Import CSV

1. `File` → `Import...` → Select `anki_deck.csv`
2. Settings:
    - **Type**: "Language Learning Card" (you might need to toggle this field if the field mapping doesn't match)
    - **Fields separated by**: Semicolon
    - ✅ **Allow HTML in fields**
3. Map columns: Field 1→Source, Field 2→Target, Field 3→Audio, Field 4→Pronunciation_IPA, Field 5→Pronunciation_Simplified, Field 6→Source_Notes, Field 7→Target_Notes
4. You might wanna delete the first card in the deck (our csv headers) by going into `Browse` -> Select the deck -> Select the first card -> Right click, notes, delete

### Step 4: Customize Card Template

**Front Template:**

```html
<div class="source">{{Source}}</div>
<div class="notes">{{Source_Notes}}</div>
```

**Back Template:**

```html
{{FrontSide}}
<hr />
<div class="target">{{Target}}</div>
<div class="pronunciation-container">
    <div class="pronunciation-ipa">IPA: {{Pronunciation_IPA}}</div>
    <div class="pronunciation-simple">
        Simplified: {{Pronunciation_Simplified}}
    </div>
</div>
<div class="notes">{{Target_Notes}}</div>
<div class="audio">{{Audio}}</div>
```

**Styling:**

```css
.source,
.target {
    font-size: 24px;
    margin: 10px 0;
}

.pronunciation-container {
    margin: 10px 0;
    padding: 8px;
    background-color: #f8f9fa;
    border-radius: 6px;
    border-left: 3px solid #0066cc;
}

.pronunciation-ipa {
    font-size: 16px;
    color: #0066cc;
    font-family:
        'DejaVu Sans', 'Lucida Sans Unicode', monospace; /* Best for IPA */
    margin-bottom: 3px;
    font-weight: 500;
}

.pronunciation-simple {
    font-size: 15px;
    color: #666;
    font-family: 'DejaVu Sans', 'Lucida Sans Unicode', monospace;
    font-style: italic;
}

.notes {
    font-size: 14px;
    color: #666;
    font-style: italic;
    margin: 8px 0;
}

.audio {
    margin-top: 15px;
}

/* Alternative: Hide one pronunciation type if desired */
/* .pronunciation-simple { display: none; } */
/* .pronunciation-ipa { display: none; } */
```

## 🔧 Adding New Languages

### Step 1: Choose Your Language & Voice

1. **Research Available Voices:**
    - First check [Google Cloud TTS voices](https://cloud.google.com/text-to-speech/docs/list-voices-and-types) for Neural2 voices
    - If not available, check [Azure Speech voices](https://learn.microsoft.com/en-gb/azure/ai-services/speech-service/language-support?tabs=tts) for Neural voices
    - Prefer **male voices** and **premium quality** (Neural2 > WaveNet > Standard)

2. **Determine Language Code:**
    - Use ISO format: `language-COUNTRY` (e.g., `tr-TR` for Turkish Turkey)
    - Create deck code: Remove hyphens and capitalize (e.g., `trTR`)

### Step 2: Generate Language File Using AI

1. **Use the AI Prompt:**
    - Open [Prompt.md](Prompt.md) and copy the entire content
    - Replace `[LANGUAGE_NAME]` and `[REGION]` with your target language/region
    - Paste into Claude or ChatGPT and follow the instructions

2. **Focus Areas for Authenticity:**
    - **Formality level**: How locals actually greet strangers vs friends
    - **Common expressions**: Regional variants and colloquialisms
    - **Cultural context**: Payment customs, social norms, emergency protocols
    - **Gendered language**: Add notes for masculine/feminine variants

### Step 3: Create Language File

1. **Save the generated code** as `languages/[DECK_CODE].js` (e.g., `languages/trTR.js`)
2. **Validate the structure** matches existing language files:
    - Correct import statement
    - All 42 required PhraseKeys included
    - Proper voice configuration
    - Cultural authenticity notes where needed

### Step 4: Register the Language

Add your new language to `data.js`:

```javascript
import { trTR } from './languages/trTR.js'; // Add import

export const decks = {
    // ... existing languages
    trTR, // Add to decks object
};
```

### Step 5: Test Your Language

1. **Test audio generation:**

    ```bash
    node generate.js enUS trTR  # English to Turkish
    ```

2. **Verify output:**
    - Audio files created in `output/audio/` with `trTR_` prefix
    - CSV generated with proper formatting
    - Listen to audio samples for quality

### Step 6: Update Documentation

1. **Add to language table** in README (alphabetically by language name)
2. **Add authenticity notes** in the Language Authenticity section
3. **Test a few deck combinations** to ensure everything works

### Example: Adding Turkish

```javascript
// languages/trTR.js
export const trTR = {
    provider: 'google',
    langCode: 'tr-TR',
    voice: {
        name: 'tr-TR-WaveNet-B',
        ssmlGender: 'MALE',
    },
    phrases: [
        { key: PhraseKeys.GREETING_HELLO, text: 'Merhaba!' },
        { key: PhraseKeys.POLITENESS_THANK_YOU, text: 'Teşekkürler!' },
        // ... all 42 required phrases
    ],
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

- **Flat Structure**: All audio files stored in `output/audio/` with deck prefixes
- **Prefixed Names**: Files named as `[deckCode]_[PHRASE_KEY].mp3` (e.g., `deDE_GREETING_HELLO.mp3`)
- **Efficient Storage**: Multiple deck combinations reuse the same audio files
- **Smart Generation**: Audio files only created if they don't already exist
