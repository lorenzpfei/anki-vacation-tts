// Type definitions for the language deck structure

/**
 * @typedef {Object} Voice
 * @property {string} name - Google Cloud TTS voice name (e.g., 'de-DE-Wavenet-F')
 * @property {'MALE'|'FEMALE'|'NEUTRAL'} ssmlGender - Voice gender
 */

/**
 * @typedef {Object} Phrase
 * @property {string} key - Semantic key for cross-language mapping (e.g., 'GREETING_HELLO')
 * @property {string} id - Unique identifier for the phrase (e.g., 'de_std_001')
 * @property {string} text - The actual phrase text in the target language
 * @property {string} [pronunciation_ipa] - Full IPA pronunciation (e.g., '/ˈhaloː/')
 * @property {string} [pronunciation_simple] - Simplified IPA pronunciation (e.g., '/ˈha-lo/')
 * @property {string} [note] - Optional note for additional context (e.g., feminine form)
 */

/**
 * @typedef {Object} LanguageDeck
 * @property {string} langCode - BCP 47 language code (e.g., 'de-DE', 'es-CO')
 * @property {Voice} voice - Voice configuration for TTS
 * @property {Phrase[]} phrases - Array of phrases with semantic keys
 */

/**
 * @typedef {Object.<string, LanguageDeck>} DecksCollection
 * Collection of language decks indexed by deck name
 */

export const PhraseKeys = {
    // Greetings & Politeness
    GREETING_HELLO: 'GREETING_HELLO',
    GREETING_GOOD_DAY: 'GREETING_GOOD_DAY',
    FAREWELL_BYE: 'FAREWELL_BYE',
    POLITENESS_PLEASE: 'POLITENESS_PLEASE',
    POLITENESS_THANK_YOU: 'POLITENESS_THANK_YOU',
    POLITENESS_MANY_THANKS: 'POLITENESS_MANY_THANKS',
    CONFIRMATION_YES: 'CONFIRMATION_YES',
    CONFIRMATION_NO: 'CONFIRMATION_NO',
    POLITENESS_EXCUSE_ME: 'POLITENESS_EXCUSE_ME',

    // Introduction
    INTRODUCTION_MY_NAME: 'INTRODUCTION_MY_NAME',
    INTRODUCTION_NICE_TO_MEET: 'INTRODUCTION_NICE_TO_MEET',
    INTRODUCTION_WHATS_YOUR_NAME: 'INTRODUCTION_WHATS_YOUR_NAME',

    // Communication
    COMMUNICATION_DONT_UNDERSTAND: 'COMMUNICATION_DONT_UNDERSTAND',
    COMMUNICATION_SPEAK_ENGLISH: 'COMMUNICATION_SPEAK_ENGLISH',
    COMMUNICATION_SPEAK_SLOWER: 'COMMUNICATION_SPEAK_SLOWER',
    COMMUNICATION_LIMITED_LANGUAGE: 'COMMUNICATION_LIMITED_LANGUAGE',
    COMMUNICATION_HOW_DO_YOU_SAY: 'COMMUNICATION_HOW_DO_YOU_SAY',

    // Food & Dining
    REQUEST_MENU: 'REQUEST_MENU',
    REQUEST_COFFEE: 'REQUEST_COFFEE',
    REQUEST_WATER: 'REQUEST_WATER',
    REQUEST_PLEASE: 'REQUEST_PLEASE',
    REQUEST_BILL: 'REQUEST_BILL',
    DINING_VEGETARIAN: 'DINING_VEGETARIAN',
    DINING_DELICIOUS: 'DINING_DELICIOUS',
    DINING_YUMMY: 'DINING_YUMMY',

    // Navigation
    NAVIGATION_TRAIN_STATION: 'NAVIGATION_TRAIN_STATION',
    NAVIGATION_RESTROOM: 'NAVIGATION_RESTROOM',
    NAVIGATION_ATM: 'NAVIGATION_ATM',

    // Shopping
    SHOPPING_HOW_MUCH: 'SHOPPING_HOW_MUCH',
    SHOPPING_PAY_BY_CARD: 'SHOPPING_PAY_BY_CARD',
    SHOPPING_PAY_BY_CASH: 'SHOPPING_PAY_BY_CASH',

    // Emergency
    EMERGENCY_HELP: 'EMERGENCY_HELP',
    EMERGENCY_DOCTOR: 'EMERGENCY_DOCTOR',
    EMERGENCY_POLICE: 'EMERGENCY_POLICE',

    // Numbers 1-10
    NUMBER_ONE: 'NUMBER_ONE',
    NUMBER_TWO: 'NUMBER_TWO',
    NUMBER_THREE: 'NUMBER_THREE',
    NUMBER_FOUR: 'NUMBER_FOUR',
    NUMBER_FIVE: 'NUMBER_FIVE',
    NUMBER_SIX: 'NUMBER_SIX',
    NUMBER_SEVEN: 'NUMBER_SEVEN',
    NUMBER_EIGHT: 'NUMBER_EIGHT',
    NUMBER_NINE: 'NUMBER_NINE',
    NUMBER_TEN: 'NUMBER_TEN',
};

export default { PhraseKeys };
