# Anki Vacation TTS Generator

**Learn only what you actually need for your vacation abroad!**

This Node.js tool generates audio flashcards for essential travel phrases - no unnecessary vocabulary or complex grammar that typical language learning apps force on you. Focus on authentic, colloquial expressions that locals actually use in real situations like restaurants, shops, and emergencies.

Perfect for travelers who want to learn practical communication basics before visiting a new country, without wasting time on academic language that won't help you order coffee or ask for directions.

## 🚀 Features

- 🎙️ **High-Quality TTS**: Google Neural2 voices + Azure TTS for unsupported languages
- 🌍 **Multi-Language Support**: 8 languages with authentic colloquial phrases
- 📚 **Anki Integration**: CSV with separate columns for source, target, audio, and notes
- 🔄 **Flexible Translation Pairs**: Any source→target language combination
- 🎯 **Semantic File Names**: Audio files named by meaning (e.g., `GREETING_HELLO.mp3`)
- ⚡ **Smart Generation**: Skips existing files, robust error handling

## 📋 Available Languages

| Code   | Language            | Voice Provider | Voice Name       |
| ------ | ------------------- | -------------- | ---------------- |
| `deDE` | German (DE)         | Google         | de-DE-Neural2-B  |
| `esCO` | Spanish (Colombia)  | Google         | es-US-Neural2-B  |
| `frFR` | French (FR)         | Google         | fr-FR-Neural2-D  |
| `itIT` | Italian (IT)        | Google         | it-IT-Neural2-C  |
| `ptBR` | Portuguese (Brazil) | Google         | pt-BR-Neural2-B  |
| `jaJP` | Japanese (JP)       | Google         | ja-JP-Neural2-C  |
| `enUS` | English (US)        | Google         | en-US-Neural2-D  |
| `sqAL` | Albanian (AL)       | Azure          | sq-AL-IlirNeural |

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

### 1. Install Dependencies

```bash
pnpm add @google-cloud/text-to-speech microsoft-cognitiveservices-speech-sdk dotenv
```

### 2. API Keys Setup

Create a `.env` file (see `.env.example`).

### 3. Get API Keys

- **Google**: [Cloud Console](https://console.cloud.google.com/) → Enable Text-to-Speech API → Create API Key
- **Azure**: [Speech Studio](https://speech.microsoft.com/) → Create Speech resource

## 🎯 Usage

### Command Format

```bash
node generate.js <source_deck> <target_deck>
```

### Examples

```bash
# German to Albanian
node generate.js deDE sqAL

# English to Colombian Spanish
node generate.js enUS esCO

# German to French
node generate.js deDE frFR
```

### List Available Decks

```bash
node generate.js
```

## 📁 Output Structure

```
output/
├── audio/                  # Shared audio files by deck
│   ├── deDE/
│   │   ├── GREETING_HELLO.mp3
│   │   ├── POLITENESS_THANK_YOU.mp3
│   │   └── ...
│   ├── sqAL/
│   │   ├── GREETING_HELLO.mp3
│   │   └── ...
│   └── ...
└── deDE-sqAL/              # Source-Target deck combinations
    └── anki_deck.csv       # 5-column CSV for Anki
```

### CSV Format (5 columns)

```csv
Source;Target;Audio;Source Notes;Target Notes
"Ich heiße...";"Unë quhem...";"[sound:audio/sqAL/INTRODUCTION_MY_NAME.mp3]";"";""
"Ich bin Vegetarier.";"Unë jam vegjetarian.";"[sound:audio/sqAL/DINING_VEGETARIAN.mp3]";"(f) Ich bin Vegetarierin.";"(f) Unë jam vegjetariane."
```

## 📲 Anki Import Tutorial

### Step 1: Copy Audio Files

1. Open Anki → `Tools` → `Add-ons` → `View Files`
2. Go up one level to `Anki2` folder
3. If `collection.media/` does not exists, you should be able to find it by going into `User 1` (or similar)
4. Copy the entire `output/audio/` folder structure into `collection.media/` (preserving the folder hierarchy)

### Step 2: Create Note Type

1. `Tools` → `Manage Note Types` → `Add` → `Basic`
2. Name it "Language TTS Learning Card"
3. Click `Fields...` and create these 5 fields (delete the existing ones):
   - `Source`
   - `Target`
   - `Audio`
   - `Source_Notes`
   - `Target_Notes`

### Step 3: Import CSV

1. `File` → `Import...` → Select `anki_deck.csv`
2. Settings:
   - **Type**: "Language Learning Card" (you might need to toggle this field if the field mapping doesn't match)
   - **Fields separated by**: Semicolon
   - ✅ **Allow HTML in fields**
3. Map columns: Field 1→Source, Field 2→Target, Field 3→Audio, Field 4→Source_Notes, Field 5→Target_Notes
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
.notes {
  font-size: 14px;
  color: #666;
  font-style: italic;
}
.audio {
  margin-top: 15px;
}
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
  trTR,  // Add to decks object
};
```

### Step 5: Test Your Language

1. **Test audio generation:**
   ```bash
   node generate.js enUS trTR  # English to Turkish
   ```

2. **Verify output:**
   - Audio files created in `output/audio/trTR/`
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

All phrases use authentic, colloquial expressions:

- **German**: "Moin!" instead of formal greetings
- **Colombian Spanish**: "usted" formality, "¡Chao!", "¿Cuánto vale?"
- **French**: "vous" with strangers, casual contractions
- **Italian**: Regional variations and natural flow
- **Portuguese**: Brazilian expressions like "Valeu!"
- **Japanese**: Practical tourist phrases with romanization notes
- **Albanian**: Uses Azure TTS for better language support

---

## 🎵 Audio Management

- **Shared Audio**: Each language generates audio once in `output/audio/[deckCode]/`
- **Efficient Storage**: Multiple deck combinations reuse the same audio files
- **Smart Generation**: Audio files only created if they don't already exist
- **Semantic Names**: Files named by purpose (e.g., `GREETING_HELLO.mp3`)
