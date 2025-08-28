/*
=== USAGE INSTRUCTIONS ===

1.  **Installation:**
    Run `npm install @google-cloud/text-to-speech microsoft-cognitiveservices-speech-sdk dotenv` in your terminal.

2.  **Authentication:**
    - Create a `.env` file in the root directory (see .env.example).
    - Add your Google API key: GOOGLE_API_KEY="your_api_key_here"
    - For Azure TTS (Albanian): AZURE_SPEECH_KEY="your_key" and AZURE_SPEECH_REGION="your_region"

3.  **Adding Data:**
    - Open the `data.js` file.
    - Add new decks or phrases following the provided structure.
    - Google voices: https://cloud.google.com/text-to-speech/docs/voices
    - Azure voices: https://docs.microsoft.com/azure/cognitive-services/speech-service/language-support
    - Set voice.provider: 'azure' for Azure TTS voices

4.  **Running the Script:**
    - Execute the script with the desired deck name as argument.
    - Example: `node generate.js deDE`
    - If you start the script without arguments, it will list all available decks.

5.  **Output:**
    - The script creates a `./output/[source]-[target]` folder with the `anki_deck.csv` file and the `audio` subfolder.
    - CSV format: Source;Target;Audio;Source Notes;Target Notes
    - Audio files are named by semantic keys (e.g., GREETING_HELLO.mp3)
*/

import textToSpeech from '@google-cloud/text-to-speech';
import * as sdk from 'microsoft-cognitiveservices-speech-sdk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { decks } from './data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const client = new textToSpeech.TextToSpeechClient({
  apiKey: process.env.GOOGLE_API_KEY
});

function showUsage() {
  console.log('\n🚀 Anki TTS Generator');
  console.log('=====================\n');
  console.log('Usage: node generate.js <source_deck> <target_deck>\n');
  console.log('Parameters:');
  console.log('  source_deck  - The source language deck for translations');
  console.log('  target_deck  - The target language deck to generate audio for\n');
  console.log('Available decks:');
  Object.keys(decks).forEach(deckName => {
    const deck = decks[deckName];
    console.log(`  • ${deckName} (${deck.langCode}, ${deck.phrases.length} phrases)`);
  });
  console.log('\nExamples:');
  console.log('  node generate.js deDE sqAL  # German to Albanian');
  console.log('  node generate.js enUS esCO  # English to Colombian Spanish');
  console.log('  node generate.js deDE frFR  # German to French\n');
}

async function generateAudioAzure(text, voiceName, outputPath) {
  return new Promise((resolve, reject) => {
    try {
      const speechConfig = sdk.SpeechConfig.fromSubscription(
        process.env.AZURE_SPEECH_KEY,
        process.env.AZURE_SPEECH_REGION
      );
      
      speechConfig.speechSynthesisOutputFormat = sdk.SpeechSynthesisOutputFormat.Audio24Khz160KBitRateMonoMp3;
      speechConfig.speechSynthesisVoiceName = voiceName;

      const audioConfig = sdk.AudioConfig.fromAudioFileOutput(outputPath);
      const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);

      synthesizer.speakTextAsync(
        text,
        result => {
          if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
            synthesizer.close();
            resolve();
          } else {
            synthesizer.close();
            reject(new Error(`Speech synthesis canceled: ${result.errorDetails}`));
          }
        },
        error => {
          synthesizer.close();
          reject(new Error(`Azure TTS error: ${error}`));
        }
      );
    } catch (error) {
      reject(new Error(`Azure TTS setup error: ${error.message}`));
    }
  });
}

async function ensureDirectoryExists(dirPath) {
  try {
    await fs.promises.mkdir(dirPath, { recursive: true });
  } catch (error) {
    throw new Error(`Error creating directory ${dirPath}: ${error.message}`);
  }
}

async function generateAudio(text, voice, langCode, outputPath) {
  try {
    const request = {
      input: { text: text },
      voice: {
        languageCode: langCode,
        name: voice.name,
        ssmlGender: voice.ssmlGender,
      },
      audioConfig: { audioEncoding: 'MP3', sampleRateHertz: 24000 },
    };

    const [response] = await client.synthesizeSpeech(request);
    await fs.promises.writeFile(outputPath, response.audioContent, 'binary');
  } catch (error) {
    throw new Error(`Error generating audio file for "${text}": ${error.message}`);
  }
}

function findSourcePhrase(targetKey, sourceDeckName = 'deDE') {
  const sourceDeck = decks[sourceDeckName];
  if (!sourceDeck) return null;
  
  return sourceDeck.phrases.find(phrase => phrase.key === targetKey) || null;
}

async function generateCSV(phrases, outputPath, sourceDeckName, targetDeckName) {
  try {
    const csvHeader = 'Source;Target;Audio;Source Notes;Target Notes\n';
    const csvRows = phrases.map(phrase => {
      const sourcePhrase = findSourcePhrase(phrase.key, sourceDeckName);
      const sourceText = sourcePhrase ? sourcePhrase.text : '';
      const sourceNotes = sourcePhrase && sourcePhrase.note ? sourcePhrase.note : '';
      const targetNotes = phrase.note || '';
      
      const escapedSource = sourceText.replace(/"/g, '""');
      const escapedTarget = phrase.text.replace(/"/g, '""');
      const escapedSourceNotes = sourceNotes.replace(/"/g, '""');
      const escapedTargetNotes = targetNotes.replace(/"/g, '""');
      
      return `"${escapedSource}";"${escapedTarget}";[sound:audio/${targetDeckName}/${phrase.key}.mp3];"${escapedSourceNotes}";"${escapedTargetNotes}"`;
    }).join('\n');
    
    const csvContent = csvHeader + csvRows;
    await fs.promises.writeFile(outputPath, csvContent, 'utf8');
  } catch (error) {
    throw new Error(`Error creating CSV file: ${error.message}`);
  }
}

async function processDeck(sourceDeckName, targetDeckName) {
  const deck = decks[targetDeckName];
  const sourceDeck = decks[sourceDeckName];
  
  if (!deck) {
    console.error(`❌ Error: Target deck "${targetDeckName}" not found.\n`);
    showUsage();
    process.exit(1);
  }

  if (!sourceDeck) {
    console.error(`❌ Error: Source deck "${sourceDeckName}" not found.\n`);
    showUsage();
    process.exit(1);
  }

  console.log(`\n🎯 Processing deck: ${sourceDeckName} → ${targetDeckName}`);
  console.log(`📍 Target language: ${deck.langCode}`);
  console.log(`📍 Source language: ${sourceDeck.langCode} (${sourceDeckName})`);
  console.log(`🎤 Voice: ${deck.voice.name} (${deck.voice.ssmlGender})`);
  console.log(`📝 Number of phrases: ${deck.phrases.length}\n`);

  const outputDir = path.join(__dirname, 'output', `${sourceDeckName}-${targetDeckName}`);
  const audioDir = path.join(__dirname, 'output', 'audio', targetDeckName);
  
  try {
    await ensureDirectoryExists(outputDir);
    await ensureDirectoryExists(audioDir);
  } catch (error) {
    console.error(`❌ ${error.message}`);
    process.exit(1);
  }

  const totalPhrases = deck.phrases.length;
  let successCount = 0;
  let errorCount = 0;

  for (let i = 0; i < totalPhrases; i++) {
    const phrase = deck.phrases[i];
    const progress = `(${i + 1}/${totalPhrases})`;
    
    console.log(`${progress} Generating audio for: "${phrase.text}"`);
    
    try {
      const audioPath = path.join(audioDir, `${phrase.key}.mp3`);
      
      // Check if file already exists
      if (fs.existsSync(audioPath)) {
        console.log(`  ⏭️  Skipping: ${phrase.key}.mp3 (already exists)`);
        successCount++;
        continue;
      }
      
      if (deck.voice.provider === 'azure') {
        await generateAudioAzure(phrase.text, deck.voice.name, audioPath);
      } else {
        await generateAudio(phrase.text, deck.voice, deck.langCode, audioPath);
      }
      
      successCount++;
      console.log(`  ✅ Success: ${phrase.key}.mp3`);
    } catch (error) {
      errorCount++;
      console.error(`  ❌ Error with "${phrase.text}": ${error.message}`);
    }
  }

  console.log(`\n📊 Audio generation completed:`);
  console.log(`  ✅ Successful: ${successCount}`);
  console.log(`  ❌ Errors: ${errorCount}`);

  if (successCount > 0) {
    try {
      const csvPath = path.join(outputDir, 'anki_deck.csv');
      await generateCSV(deck.phrases, csvPath, sourceDeckName, targetDeckName);
      console.log(`\n📄 CSV file created: ${csvPath}`);
      console.log(`📁 Audio files in: ${audioDir}`);
      console.log(`\n🎉 Processing of "${sourceDeckName}-${targetDeckName}" completed successfully!`);
    } catch (error) {
      console.error(`❌ ${error.message}`);
      process.exit(1);
    }
  } else {
    console.error(`\n❌ No audio files were generated successfully. CSV file will not be created.`);
    process.exit(1);
  }
}

function checkEnvironment(deck) {
  if (!process.env.GOOGLE_API_KEY) {
    console.error('\n❌ Error: GOOGLE_API_KEY environment variable not set.');
    console.error('Create a .env file with:');
    console.error('GOOGLE_API_KEY="your_api_key_here"');
    
    if (deck && deck.voice.provider === 'azure') {
      console.error('AZURE_SPEECH_KEY="your_azure_speech_key_here"');
      console.error('AZURE_SPEECH_REGION="your_azure_region"\n');
    } else {
      console.log('\n');
    }
    process.exit(1);
  }

  if (deck && deck.voice.provider === 'azure') {
    if (!process.env.AZURE_SPEECH_KEY || !process.env.AZURE_SPEECH_REGION) {
      console.error('\n❌ Error: Azure TTS environment variables not set.');
      console.error('Create a .env file with:');
      console.error('AZURE_SPEECH_KEY="your_azure_speech_key_here"');
      console.error('AZURE_SPEECH_REGION="your_azure_region"\n');
      process.exit(1);
    }
  }
}

async function main() {
  const sourceDeck = process.argv[2];
  const targetDeck = process.argv[3];

  if (!sourceDeck || !targetDeck) {
    showUsage();
    return;
  }

  const deck = decks[targetDeck];
  checkEnvironment(deck);
  
  try {
    await processDeck(sourceDeck, targetDeck);
  } catch (error) {
    console.error(`\n❌ Unexpected error: ${error.message}`);
    process.exit(1);
  }
}

main().catch(error => {
  console.error(`\n💥 Critical error: ${error.message}`);
  process.exit(1);
});