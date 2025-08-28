You are an expert linguist and a native speaker of **[LANGUAGE_NAME]** from **[REGION]**. Your task is to create a JavaScript data file for a language-learning application.

The most important goals are **native speaker authenticity** and **pronunciation**. The phrases you provide must reflect how **native speakers actually speak** in everyday, informal situations—not textbook language, and definitely NOT broken language that foreigners might use when learning. You are a native speaker providing perfect, grammatically correct, natural phrases that locals use. Use natural contractions, common colloquialisms, and the most typical ways native speakers ask for things. **EVERY single phrase must include a pronunciation field - no exceptions!**

### Instructions:

1.  **Adopt the Persona:** Act as a native speaker creating a helpful guide for a friend visiting your country. You are teaching them how to speak like a local, not like a struggling language learner.
2.  **Focus on Native Speaker Simplicity & Authenticity:** For each `PhraseKey`, provide the most natural phrase that **native speakers actually use**. **Never use broken grammar or foreigner-style phrasing.** Use authentic native speech - this might include contractions, slang, or informal grammar that natives naturally use. **Prioritize simple, learnable phrases over complex sentences.** For basic requests like drinks, use the simple word (e.g., "Water" not "Can I get some water please"). Study the `enUS` example below to understand the desired level of casual, real-world language.
3.  **Essential Requirements:**
    - **Native Speaker Authentic:** All phrases must be exactly how native speakers actually say them - this includes contractions, slang, and informal grammar that natives use
    - **Native Speaker Natural:** How would a native speaker actually say this? Not how would a foreigner learning the language say it
    - **GREETING_GOOD_DAY** should be usable throughout the day, not just morning-specific
    - **Must include both REQUEST_COFFEE and REQUEST_WATER phrases** - use simple words, not full sentences
    - **Two types of "please"**: POLITENESS_PLEASE (for "you're welcome"/response) and REQUEST_PLEASE (for asking/requesting)
    - All phrases must be practical for tourists but spoken like locals
    - Use the most common, widely-understood version of each phrase
4.  **Fill out the Template:** Complete the `phrases` array in the JavaScript template. Do not change the `PhraseKeys`.
5.  **REQUIRED: Add Pronunciations and Notes:**
    - **EVERY phrase MUST include BOTH `pronunciation_ipa` AND `pronunciation_simple` fields** - this is not optional!
    - **pronunciation_ipa**: Full IPA notation with all diacritics (e.g., '/ˈhaloː/' for German 'Hallo', '/bɔ̃ˈʒuʁ/' for French 'Bonjour')
    - **pronunciation_simple**: Simplified IPA using basic symbols and hyphens (e.g., '/ˈha-lo/' for German 'Hallo', '/bon-ˈʒur/' for French 'Bonjour')
    - If a phrase has an important nuance (e.g., it's informal, or there's a common feminine/masculine variant), add a concise explanation in the optional `note` field.
6.  **Choose a Voice:**
    - First, try to find a high-quality, natural-sounding **Neural2** voice from the official **Google Cloud TTS** voice list for your language and region.
    - **If a suitable Google voice does not exist**, search the **Microsoft Azure TTS** voice list and use a high-quality `Neural` voice from there. If you use Azure, remember to set the `provider` key to `'azure'`.

### Excellent Example (`enUS`):

```javascript
import { PhraseKeys } from '../types.js';

export const enUS = {
    provider: 'google',
    langCode: 'en-US',
    voice: {
        name: 'en-US-Neural2-D',
        ssmlGender: 'MALE',
    },
    phrases: [
        // Greetings & Politeness - American English
        {
            key: PhraseKeys.GREETING_HELLO,
            text: 'Hi!',
            pronunciation_ipa: '/haɪ/',
            pronunciation_simple: '/haɪ/',
        },
        {
            key: PhraseKeys.GREETING_GOOD_DAY,
            text: 'Good morning!',
            pronunciation_ipa: '/ɡʊd ˈmɔrnɪŋ/',
            pronunciation_simple: '/gud ˈmor-niŋ/',
        },
        {
            key: PhraseKeys.FAREWELL_BYE,
            text: 'Bye!',
            pronunciation_ipa: '/baɪ/',
            pronunciation_simple: '/baɪ/',
        },
        {
            key: PhraseKeys.POLITENESS_PLEASE,
            text: "You're welcome",
            pronunciation_ipa: '/jʊr ˈwɛlkəm/',
            pronunciation_simple: '/jur ˈwel-kəm/',
        },
        {
            key: PhraseKeys.POLITENESS_THANK_YOU,
            text: 'Thanks!',
            pronunciation: 'thanks',
        },
        {
            key: PhraseKeys.POLITENESS_MANY_THANKS,
            text: 'Thanks so much!',
            pronunciation: 'thanks so much',
        },
        { key: PhraseKeys.CONFIRMATION_YES, text: 'Yes', pronunciation: 'yes' },
        { key: PhraseKeys.CONFIRMATION_NO, text: 'No', pronunciation: 'no' },
        {
            key: PhraseKeys.POLITENESS_EXCUSE_ME,
            text: 'Excuse me',
            pronunciation: 'ik-SKYOOZ mee',
        },

        // Introduction - Meeting people
        {
            key: PhraseKeys.INTRODUCTION_MY_NAME,
            text: 'My name is...',
            pronunciation: 'my name is',
        },
        {
            key: PhraseKeys.INTRODUCTION_NICE_TO_MEET,
            text: 'Nice to meet you!',
            pronunciation: 'nice to meet you',
        },
        {
            key: PhraseKeys.INTRODUCTION_WHATS_YOUR_NAME,
            text: "What's your name?",
            pronunciation: 'whats your name',
        },

        // Communication - Natural American English
        {
            key: PhraseKeys.COMMUNICATION_DONT_UNDERSTAND,
            text: "I don't understand.",
            pronunciation: 'i dont un-der-STAND',
        },
        {
            key: PhraseKeys.COMMUNICATION_SPEAK_ENGLISH,
            text: 'Do you speak English?',
            pronunciation: 'do you speak ING-glish',
        },
        {
            key: PhraseKeys.COMMUNICATION_SPEAK_SLOWER,
            text: 'Could you speak a little slower, please?',
        },
        {
            key: PhraseKeys.COMMUNICATION_LIMITED_LANGUAGE,
            text: "I don't speak the language very well.",
        },
        {
            key: PhraseKeys.COMMUNICATION_HOW_DO_YOU_SAY,
            text: 'How do you say ... in this language?',
        },

        // Food & Dining - How Americans actually order
        {
            key: PhraseKeys.REQUEST_MENU,
            text: 'Can I get a menu, please?',
            pronunciation: 'can i get a MEN-yoo pleez',
        },
        {
            key: PhraseKeys.REQUEST_COFFEE,
            text: 'Coffee',
            pronunciation_ipa: '/ˈkɔfi/',
            pronunciation_simple: '/ˈkɔ-fi/',
        },
        {
            key: PhraseKeys.REQUEST_WATER,
            text: 'Water',
            pronunciation_ipa: '/ˈwɔtər/',
            pronunciation_simple: '/ˈwɔ-tər/',
        },
        {
            key: PhraseKeys.REQUEST_PLEASE,
            text: 'Please',
            pronunciation_ipa: '/pliz/',
            pronunciation_simple: '/pliz/',
        },
        { key: PhraseKeys.REQUEST_BILL, text: 'Can we get the check, please?' },
        { key: PhraseKeys.DINING_VEGETARIAN, text: "I'm a vegetarian." },
        {
            key: PhraseKeys.DINING_DELICIOUS,
            text: 'That was delicious!',
            note: 'after eating',
        },
        {
            key: PhraseKeys.DINING_YUMMY,
            text: 'This is really good!',
            note: 'during eating',
        },

        // Navigation - American style
        {
            key: PhraseKeys.NAVIGATION_TRAIN_STATION,
            text: "Where's the train station?",
        },
        { key: PhraseKeys.NAVIGATION_RESTROOM, text: "Where's the restroom?" },
        { key: PhraseKeys.NAVIGATION_ATM, text: 'Where is the nearest ATM?' },

        // Shopping - Natural American conversation
        { key: PhraseKeys.SHOPPING_HOW_MUCH, text: 'How much is this?' },
        {
            key: PhraseKeys.SHOPPING_PAY_BY_CARD,
            text: 'Can I pay with a card?',
        },
        {
            key: PhraseKeys.SHOPPING_PAY_BY_CASH,
            text: "I'd like to pay with cash.",
        },

        // Emergency - Direct and urgent
        { key: PhraseKeys.EMERGENCY_HELP, text: 'Help!' },
        { key: PhraseKeys.EMERGENCY_DOCTOR, text: 'I need a doctor!' },
        { key: PhraseKeys.EMERGENCY_POLICE, text: 'Call the police!' },

        // Numbers 1-10
        { key: PhraseKeys.NUMBER_ONE, text: 'one' },
        { key: PhraseKeys.NUMBER_TWO, text: 'two' },
        { key: PhraseKeys.NUMBER_THREE, text: 'three' },
        { key: PhraseKeys.NUMBER_FOUR, text: 'four' },
        { key: PhraseKeys.NUMBER_FIVE, text: 'five' },
        { key: PhraseKeys.NUMBER_SIX, text: 'six' },
        { key: PhraseKeys.NUMBER_SEVEN, text: 'seven' },
        { key: PhraseKeys.NUMBER_EIGHT, text: 'eight' },
        { key: PhraseKeys.NUMBER_NINE, text: 'nine' },
        { key: PhraseKeys.NUMBER_TEN, text: 'ten' },
    ],
};
```

### JavaScript Template to Complete:

```javascript
import { PhraseKeys } from '../types.js';

export const /* TODO: variableName e.g., frFR */ = {
  provider: '/* TODO: google or azure */',
  langCode: '/* TODO: e.g., fr-FR */',
  voice: {
    name: '/* TODO: e.g., fr-FR-Neural2-D */',
    ssmlGender: '/* TODO: MALE or FEMALE */',
  },
  phrases: [
    // Greetings & Politeness
    { key: PhraseKeys.GREETING_HELLO, text: '...', pronunciation_ipa: '/.../', pronunciation_simple: '/.../' },
    { key: PhraseKeys.GREETING_GOOD_DAY, text: '...', pronunciation_ipa: '/.../', pronunciation_simple: '/.../' },
    { key: PhraseKeys.FAREWELL_BYE, text: '...', pronunciation_ipa: '/.../', pronunciation_simple: '/.../' },
    { key: PhraseKeys.POLITENESS_PLEASE, text: '...', pronunciation_ipa: '/.../', pronunciation_simple: '/.../' }, // You're welcome
    { key: PhraseKeys.POLITENESS_THANK_YOU, text: '...', pronunciation: '...' },
    { key: PhraseKeys.POLITENESS_MANY_THANKS, text: '...', pronunciation: '...' },
    { key: PhraseKeys.CONFIRMATION_YES, text: '...', pronunciation: '...' },
    { key: PhraseKeys.CONFIRMATION_NO, text: '...', pronunciation: '...' },
    { key: PhraseKeys.POLITENESS_EXCUSE_ME, text: '...', pronunciation: '...' },

    // Introduction
    { key: PhraseKeys.INTRODUCTION_MY_NAME, text: '...', pronunciation: '...' },
    { key: PhraseKeys.INTRODUCTION_NICE_TO_MEET, text: '...', pronunciation: '...' },
    { key: PhraseKeys.INTRODUCTION_WHATS_YOUR_NAME, text: '...', pronunciation: '...' },

    // Communication
    { key: PhraseKeys.COMMUNICATION_DONT_UNDERSTAND, text: '...', pronunciation: '...' },
    { key: PhraseKeys.COMMUNICATION_SPEAK_ENGLISH, text: '...', pronunciation: '...' },
    { key: PhraseKeys.COMMUNICATION_SPEAK_SLOWER, text: '...', pronunciation: '...' },
    { key: PhraseKeys.COMMUNICATION_LIMITED_LANGUAGE, text: '...', pronunciation: '...' }, // Note: Native speaker way to say "I don't speak [LANGUAGE_NAME] very well" - NOT broken learner language!
    { key: PhraseKeys.COMMUNICATION_HOW_DO_YOU_SAY, text: '...', pronunciation: '...' },

    // Food & Dining
    { key: PhraseKeys.REQUEST_MENU, text: '...', pronunciation: '...' },
    { key: PhraseKeys.REQUEST_COFFEE, text: '...', pronunciation_ipa: '/.../', pronunciation_simple: '/.../' },
    { key: PhraseKeys.REQUEST_WATER, text: '...', pronunciation_ipa: '/.../', pronunciation_simple: '/.../' },
    { key: PhraseKeys.REQUEST_PLEASE, text: '...', pronunciation_ipa: '/.../', pronunciation_simple: '/.../' }, // For requesting things
    { key: PhraseKeys.REQUEST_BILL, text: '...', pronunciation: '...' },
    { key: PhraseKeys.DINING_VEGETARIAN, text: '...', pronunciation: '...' },
    { key: PhraseKeys.DINING_DELICIOUS, text: '...', pronunciation: '...' },
    { key: PhraseKeys.DINING_YUMMY, text: '...', pronunciation: '...' },

    // Navigation
    { key: PhraseKeys.NAVIGATION_TRAIN_STATION, text: '...', pronunciation: '...' },
    { key: PhraseKeys.NAVIGATION_RESTROOM, text: '...', pronunciation: '...' },
    { key: PhraseKeys.NAVIGATION_ATM, text: '...', pronunciation: '...' },

    // Shopping
    { key: PhraseKeys.SHOPPING_HOW_MUCH, text: '...', pronunciation: '...' },
    { key: PhraseKeys.SHOPPING_PAY_BY_CARD, text: '...', pronunciation: '...' },
    { key: PhraseKeys.SHOPPING_PAY_BY_CASH, text: '...', pronunciation: '...' },

    // Emergency
    { key: PhraseKeys.EMERGENCY_HELP, text: '...', pronunciation: '...' },
    { key: PhraseKeys.EMERGENCY_DOCTOR, text: '...', pronunciation: '...' },
    { key: PhraseKeys.EMERGENCY_POLICE, text: '...', pronunciation: '...' },

    // Numbers 1-10
    { key: PhraseKeys.NUMBER_ONE, text: '...', pronunciation: '...' },
    { key: PhraseKeys.NUMBER_TWO, text: '...', pronunciation: '...' },
    { key: PhraseKeys.NUMBER_THREE, text: '...', pronunciation: '...' },
    { key: PhraseKeys.NUMBER_FOUR, text: '...', pronunciation: '...' },
    { key: PhraseKeys.NUMBER_FIVE, text: '...', pronunciation: '...' },
    { key: PhraseKeys.NUMBER_SIX, text: '...', pronunciation: '...' },
    { key: PhraseKeys.NUMBER_SEVEN, text: '...', pronunciation: '...' },
    { key: PhraseKeys.NUMBER_EIGHT, text: '...', pronunciation: '...' },
    { key: PhraseKeys.NUMBER_NINE, text: '...', pronunciation: '...' },
    { key: PhraseKeys.NUMBER_TEN, text: '...', pronunciation: '...' },
  ],
};
```
