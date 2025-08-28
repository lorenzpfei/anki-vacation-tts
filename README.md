# Anki Vacation TTS Generator

A Node.js tool that generates audio files from text phrases using Google Cloud Text-to-Speech API and Azure Cognitive Services, creating CSV files ready for import into Anki flashcard decks.

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
npm install @google-cloud/text-to-speech microsoft-cognitiveservices-speech-sdk dotenv
```

### 2. API Keys Setup

Create a `.env` file (see `.env.example`):

```env
# Google Cloud Text-to-Speech API Key (required)
GOOGLE_API_KEY="your_google_api_key_here"

# Azure Cognitive Services (for Albanian only)
AZURE_SPEECH_KEY="your_azure_speech_key_here"
AZURE_SPEECH_REGION="your_azure_region_here"
```

### 3. Get API Keys

- **Google**: [Cloud Console](https://console.cloud.google.com/) → Enable Text-to-Speech API → Create API Key
- **Azure**: [Speech Studio](https://speech.microsoft.com/) → Create Speech resource

### Voices:

- **Google**: [Supported voices and languages](https://cloud.google.com/text-to-speech/docs/list-voices-and-types)
- **Azure**: [Supported voices and languages](https://learn.microsoft.com/en-gb/azure/ai-services/speech-service/language-support?tabs=tts)

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
3. Copy the entire `output/audio/` folder structure into `collection.media/` (preserving the folder hierarchy)

### Step 2: Create Note Type

1. `Tools` → `Manage Note Types` → `Add` → `Basic`
2. Name it "Language Learning Card"
3. Click `Fields...` and create these 5 fields:
   - `Source`
   - `Target`
   - `Audio`
   - `Source_Notes`
   - `Target_Notes`

### Step 3: Import CSV

1. `File` → `Import...` → Select `anki_deck.csv`
2. Settings:
   - **Type**: "Language Learning Card"
   - **Fields separated by**: Semicolon
   - ✅ **Allow HTML in fields**
3. Map columns: Field 1→Source, Field 2→Target, Field 3→Audio, Field 4→Source_Notes, Field 5→Target_Notes

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

Use the provided `Prompt.md` with AI tools to generate new language files with authentic, colloquial phrases following the existing structure and cultural authenticity requirements.

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

💡 **Pro Tip**: Generate audio for each language once, then create unlimited deck combinations instantly!
