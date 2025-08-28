#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Convert dashed language code to camelCase (e.g., "de-DE" -> "deDE")
function dashToCamelCase(langCode) {
    return langCode.replace(/-([a-zA-Z])/g, (match, letter) => letter.toUpperCase());
}

// Get all available language codes from the languages directory
function getAvailableLanguages() {
    const languagesDir = path.join(__dirname, 'languages');
    const files = fs.readdirSync(languagesDir);
    return files
        .filter(file => file.endsWith('.js'))
        .map(file => file.replace('.js', ''))
        .map(dashToCamelCase); // Convert to camelCase for MP3 matching
}

// Get all MP3 files for a specific language
function getLanguageFiles(languageCode, audioDir) {
    const files = fs.readdirSync(audioDir);
    return files
        .filter(file => file.startsWith(`${languageCode}_`) && file.endsWith('.mp3'))
        .map(file => path.join(audioDir, file));
}

// Build ZIP for a specific language
function buildLanguageZip(languageCode, audioDir) {
    const mp3Files = getLanguageFiles(languageCode, audioDir);
    
    if (mp3Files.length === 0) {
        console.log(`⚠️  No MP3 files found for language: ${languageCode}`);
        return false;
    }

    const zipPath = path.join(audioDir, `audio-${languageCode}.zip`);
    
    // Remove existing ZIP if it exists
    if (fs.existsSync(zipPath)) {
        fs.unlinkSync(zipPath);
        console.log(`🗑️  Removed existing: audio-${languageCode}.zip`);
    }

    try {
        // Create ZIP file with all MP3 files for this language
        console.log(`📦 Creating audio-${languageCode}.zip with ${mp3Files.length} files...`);
        
        // Change to audio directory and zip files
        const fileNames = mp3Files.map(f => path.basename(f)).join(' ');
        execSync(`cd "${audioDir}" && zip -j "audio-${languageCode}.zip" ${fileNames}`, { 
            stdio: 'inherit' 
        });
        
        // Remove the original MP3 files
        mp3Files.forEach(file => {
            fs.unlinkSync(file);
        });
        
        console.log(`✅ Successfully created audio-${languageCode}.zip and removed ${mp3Files.length} MP3 files`);
        return true;
        
    } catch (error) {
        console.error(`❌ Failed to create ZIP for ${languageCode}:`, error.message);
        return false;
    }
}

// Main function
function main() {
    const audioDir = path.join(__dirname, 'output', 'audio');
    
    if (!fs.existsSync(audioDir)) {
        console.error('❌ Audio directory not found:', audioDir);
        process.exit(1);
    }

    const args = process.argv.slice(2);
    
    if (args.length > 0) {
        // Build ZIP for specific language(s)
        let successCount = 0;
        args.forEach(langArg => {
            // Convert dashed format to camelCase if needed
            const languageCode = dashToCamelCase(langArg);
            console.log(`\n🔄 Processing ${languageCode}...`);
            if (buildLanguageZip(languageCode, audioDir)) {
                successCount++;
            }
        });
        console.log(`\n🎉 Successfully processed ${successCount}/${args.length} languages`);
    } else {
        // Build ZIPs for all available languages
        const languages = getAvailableLanguages();
        console.log(`🚀 Building audio ZIPs for all ${languages.length} languages...\n`);
        
        let successCount = 0;
        languages.forEach(languageCode => {
            console.log(`🔄 Processing ${languageCode}...`);
            if (buildLanguageZip(languageCode, audioDir)) {
                successCount++;
            }
        });
        
        console.log(`\n🎉 Successfully processed ${successCount}/${languages.length} languages`);
    }
}

if (require.main === module) {
    main();
}

module.exports = { buildLanguageZip, getAvailableLanguages };