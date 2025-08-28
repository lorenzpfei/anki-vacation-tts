You are an expert linguist and a native speaker of **[LANGUAGE_NAME]** from **[REGION]**. Your task is to create a JavaScript data file for a language-learning application.

The most important goal is **authenticity**. The phrases you provide must reflect how people **actually speak** in everyday, informal situations—not just what is taught in a formal textbook. Use natural contractions, common colloquialisms, and the most typical ways of asking for things.

### Instructions:

1.  **Adopt the Persona:** Act as a native speaker creating a helpful guide for a friend visiting your country.
2.  **Focus on Authenticity:** For each `PhraseKey`, provide the most natural and commonly used phrase. Study the `enUS` example below to understand the desired level of casual, real-world language.
3.  **Fill out the Template:** Complete the `phrases` array in the JavaScript template. Do not change the `PhraseKeys`.
4.  **Add Notes:** If a phrase has an important nuance (e.g., it's informal, or there's a common feminine/masculine variant), add a concise explanation in the optional `note` field.
5.  **Choose a Voice:**
    - First, try to find a high-quality, natural-sounding **Neural2** voice from the official **Google Cloud TTS** voice list for your language and region.
    - **If a suitable Google voice does not exist**, search the **Microsoft Azure TTS** voice list and use a high-quality `Neural` voice from there. If you use Azure, remember to set the `provider` key to `'azure'`.

### Excellent Example (`enUS`):

```javascript
import { PhraseKeys } from "../types.js";

export const enUS = {
  provider: "google",
  langCode: "en-US",
  voice: {
    name: "en-US-Neural2-D",
    ssmlGender: "MALE",
  },
  phrases: [
    // Greetings & Politeness - American English
    { key: PhraseKeys.GREETING_HELLO, text: "Hi!" },
    { key: PhraseKeys.GREETING_GOOD_DAY, text: "Good morning!" },
    { key: PhraseKeys.FAREWELL_BYE, text: "Bye!" },
    { key: PhraseKeys.POLITENESS_PLEASE, text: "Please" },
    { key: PhraseKeys.POLITENESS_THANK_YOU, text: "Thanks!" },
    { key: PhraseKeys.POLITENESS_MANY_THANKS, text: "Thanks so much!" },
    { key: PhraseKeys.CONFIRMATION_YES, text: "Yes" },
    { key: PhraseKeys.CONFIRMATION_NO, text: "No" },
    { key: PhraseKeys.POLITENESS_EXCUSE_ME, text: "Excuse me" },

    // Introduction - Meeting people
    { key: PhraseKeys.INTRODUCTION_MY_NAME, text: "My name is..." },
    { key: PhraseKeys.INTRODUCTION_NICE_TO_MEET, text: "Nice to meet you!" },
    { key: PhraseKeys.INTRODUCTION_WHATS_YOUR_NAME, text: "What's your name?" },

    // Communication - Natural American English
    {
      key: PhraseKeys.COMMUNICATION_DONT_UNDERSTAND,
      text: "I don't understand.",
    },
    {
      key: PhraseKeys.COMMUNICATION_SPEAK_ENGLISH,
      text: "Do you speak English?",
    },
    {
      key: PhraseKeys.COMMUNICATION_SPEAK_SLOWER,
      text: "Could you speak a little slower, please?",
    },
    {
      key: PhraseKeys.COMMUNICATION_LIMITED_LANGUAGE,
      text: "I don't speak the language very well.",
    },
    {
      key: PhraseKeys.COMMUNICATION_HOW_DO_YOU_SAY,
      text: "How do you say ... in this language?",
    },

    // Food & Dining - How Americans actually order
    { key: PhraseKeys.REQUEST_MENU, text: "Can I get a menu, please?" },
    { key: PhraseKeys.REQUEST_COFFEE, text: "I'll have a coffee, please." },
    { key: PhraseKeys.REQUEST_BILL, text: "Can we get the check, please?" },
    { key: PhraseKeys.DINING_VEGETARIAN, text: "I'm a vegetarian." },
    {
      key: PhraseKeys.DINING_DELICIOUS,
      text: "That was delicious!",
      note: "after eating",
    },
    {
      key: PhraseKeys.DINING_YUMMY,
      text: "This is really good!",
      note: "during eating",
    },

    // Navigation - American style
    {
      key: PhraseKeys.NAVIGATION_TRAIN_STATION,
      text: "Where's the train station?",
    },
    { key: PhraseKeys.NAVIGATION_RESTROOM, text: "Where's the restroom?" },
    { key: PhraseKeys.NAVIGATION_ATM, text: "Where is the nearest ATM?" },

    // Shopping - Natural American conversation
    { key: PhraseKeys.SHOPPING_HOW_MUCH, text: "How much is this?" },
    { key: PhraseKeys.SHOPPING_PAY_BY_CARD, text: "Can I pay with a card?" },
    {
      key: PhraseKeys.SHOPPING_PAY_BY_CASH,
      text: "I'd like to pay with cash.",
    },

    // Emergency - Direct and urgent
    { key: PhraseKeys.EMERGENCY_HELP, text: "Help!" },
    { key: PhraseKeys.EMERGENCY_DOCTOR, text: "I need a doctor!" },
    { key: PhraseKeys.EMERGENCY_POLICE, text: "Call the police!" },

    // Numbers 1-10
    { key: PhraseKeys.NUMBER_ONE, text: "one" },
    { key: PhraseKeys.NUMBER_TWO, text: "two" },
    { key: PhraseKeys.NUMBER_THREE, text: "three" },
    { key: PhraseKeys.NUMBER_FOUR, text: "four" },
    { key: PhraseKeys.NUMBER_FIVE, text: "five" },
    { key: PhraseKeys.NUMBER_SIX, text: "six" },
    { key: PhraseKeys.NUMBER_SEVEN, text: "seven" },
    { key: PhraseKeys.NUMBER_EIGHT, text: "eight" },
    { key: PhraseKeys.NUMBER_NINE, text: "nine" },
    { key: PhraseKeys.NUMBER_TEN, text: "ten" },
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
    { key: PhraseKeys.GREETING_HELLO, text: '...' },
    { key: PhraseKeys.GREETING_GOOD_DAY, text: '...' },
    { key: PhraseKeys.FAREWELL_BYE, text: '...' },
    { key: PhraseKeys.POLITENESS_PLEASE, text: '...' },
    { key: PhraseKeys.POLITENESS_THANK_YOU, text: '...' },
    { key: PhraseKeys.POLITENESS_MANY_THANKS, text: '...' },
    { key: PhraseKeys.CONFIRMATION_YES, text: '...' },
    { key: PhraseKeys.CONFIRMATION_NO, text: '...' },
    { key: PhraseKeys.POLITENESS_EXCUSE_ME, text: '...' },

    // Introduction
    { key: PhraseKeys.INTRODUCTION_MY_NAME, text: '...' },
    { key: PhraseKeys.INTRODUCTION_NICE_TO_MEET, text: '...' },
    { key: PhraseKeys.INTRODUCTION_WHATS_YOUR_NAME, text: '...' },

    // Communication
    { key: PhraseKeys.COMMUNICATION_DONT_UNDERSTAND, text: '...' },
    { key: PhraseKeys.COMMUNICATION_SPEAK_ENGLISH, text: '...' },
    { key: PhraseKeys.COMMUNICATION_SPEAK_SLOWER, text: '...' },
    { key: PhraseKeys.COMMUNICATION_LIMITED_LANGUAGE, text: '...' }, // Note: Translate as "I don't speak [LANGUAGE_NAME] very well."
    { key: PhraseKeys.COMMUNICATION_HOW_DO_YOU_SAY, text: '...' },

    // Food & Dining
    { key: PhraseKeys.REQUEST_MENU, text: '...' },
    { key: PhraseKeys.REQUEST_COFFEE, text: '...' },
    { key: PhraseKeys.REQUEST_BILL, text: '...' },
    { key: PhraseKeys.DINING_VEGETARIAN, text: '...' },
    { key: PhraseKeys.DINING_DELICIOUS, text: '...' },
    { key: PhraseKeys.DINING_YUMMY, text: '...' },

    // Navigation
    { key: PhraseKeys.NAVIGATION_TRAIN_STATION, text: '...' },
    { key: PhraseKeys.NAVIGATION_RESTROOM, text: '...' },
    { key: PhraseKeys.NAVIGATION_ATM, text: '...' },

    // Shopping
    { key: PhraseKeys.SHOPPING_HOW_MUCH, text: '...' },
    { key: PhraseKeys.SHOPPING_PAY_BY_CARD, text: '...' },
    { key: PhraseKeys.SHOPPING_PAY_BY_CASH, text: '...' },

    // Emergency
    { key: PhraseKeys.EMERGENCY_HELP, text: '...' },
    { key: PhraseKeys.EMERGENCY_DOCTOR, text: '...' },
    { key: PhraseKeys.EMERGENCY_POLICE, text: '...' },

    // Numbers 1-10
    { key: PhraseKeys.NUMBER_ONE, text: '...' },
    { key: PhraseKeys.NUMBER_TWO, text: '...' },
    { key: PhraseKeys.NUMBER_THREE, text: '...' },
    { key: PhraseKeys.NUMBER_FOUR, text: '...' },
    { key: PhraseKeys.NUMBER_FIVE, text: '...' },
    { key: PhraseKeys.NUMBER_SIX, text: '...' },
    { key: PhraseKeys.NUMBER_SEVEN, text: '...' },
    { key: PhraseKeys.NUMBER_EIGHT, text: '...' },
    { key: PhraseKeys.NUMBER_NINE, text: '...' },
    { key: PhraseKeys.NUMBER_TEN, text: '...' },
  ],
};
```
