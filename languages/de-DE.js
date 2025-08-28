import { PhraseKeys } from '../types.js';

export const deDE = {
  provider: 'google',
  langCode: 'de-DE',
  voice: {
    name: 'de-DE-Neural2-B', // Switched to a recommended male Neural2 voice for variety
    ssmlGender: 'MALE',
  },
  phrases: [
    // Greetings & Politeness - How people really greet
    { key: PhraseKeys.GREETING_HELLO, text: 'Hallo!' },
    { key: PhraseKeys.GREETING_GOOD_DAY, text: 'Guten Tag!' }, // Universal standard
    { key: PhraseKeys.FAREWELL_BYE, text: 'Tschüss!' },
    { key: PhraseKeys.POLITENESS_PLEASE, text: 'Bitte' },
    { key: PhraseKeys.POLITENESS_THANK_YOU, text: 'Danke!' },
    { key: PhraseKeys.POLITENESS_MANY_THANKS, text: 'Vielen Dank!' },
    { key: PhraseKeys.CONFIRMATION_YES, text: 'Ja' },
    { key: PhraseKeys.CONFIRMATION_NO, text: 'Nein' },
    { key: PhraseKeys.POLITENESS_EXCUSE_ME, text: 'Entschuldigung' },
    
    // Introduction - Meeting people
    { key: PhraseKeys.INTRODUCTION_MY_NAME, text: 'Ich heiße...' },
    { key: PhraseKeys.INTRODUCTION_NICE_TO_MEET, text: 'Freut mich!' },
    { key: PhraseKeys.INTRODUCTION_WHATS_YOUR_NAME, text: 'Wie heißt du?', note: 'Informal. Formal: Wie heißen Sie?' },
    
    // Communication - How people really talk
    { key: PhraseKeys.COMMUNICATION_DONT_UNDERSTAND, text: 'Ich verstehe das nicht.' },
    { key: PhraseKeys.COMMUNICATION_SPEAK_ENGLISH, text: 'Sprechen Sie Englisch?' },
    { key: PhraseKeys.COMMUNICATION_SPEAK_SLOWER, text: 'Können Sie bitte langsamer sprechen?' },
    { key: PhraseKeys.COMMUNICATION_LIMITED_LANGUAGE, text: 'Ich spreche nicht so gut Deutsch.' }, // Key is generic
    { key: PhraseKeys.COMMUNICATION_HOW_DO_YOU_SAY, text: 'Wie sagt man ... auf Deutsch?' },

    // Food & Dining - Real restaurant talk
    { key: PhraseKeys.REQUEST_MENU, text: 'Kann ich bitte die Karte haben?' },
    { key: PhraseKeys.REQUEST_COFFEE, text: 'Einen Kaffee, bitte.' },
    { key: PhraseKeys.REQUEST_BILL, text: 'Wir möchten bitte zahlen.' },
    { key: PhraseKeys.DINING_VEGETARIAN, text: 'Ich bin Vegetarier.', note: '(f) Ich bin Vegetarierin.' },
    { key: PhraseKeys.DINING_DELICIOUS, text: 'Es hat sehr gut geschmeckt!', note: 'nach dem Essen' },
    { key: PhraseKeys.DINING_YUMMY, text: 'Das ist lecker!', note: 'während des Essens' },

    // Navigation - How people really ask
    { key: PhraseKeys.NAVIGATION_TRAIN_STATION, text: 'Entschuldigung, wo ist der Bahnhof?' },
    { key: PhraseKeys.NAVIGATION_RESTROOM, text: 'Wo ist die Toilette, bitte?' },
    { key: PhraseKeys.NAVIGATION_ATM, text: 'Wo ist der nächste Geldautomat?' },
    
    // Shopping - Natural conversation
    { key: PhraseKeys.SHOPPING_HOW_MUCH, text: 'Was kostet das?' },
    { key: PhraseKeys.SHOPPING_PAY_BY_CARD, text: 'Kann ich mit Karte zahlen?' },
    { key: PhraseKeys.SHOPPING_PAY_BY_CASH, text: 'Ich würde gerne bar bezahlen.' },

    // Emergency - Direct and urgent
    { key: PhraseKeys.EMERGENCY_HELP, text: 'Hilfe!' },
    { key: PhraseKeys.EMERGENCY_DOCTOR, text: 'Ich brauche einen Arzt!' },
    { key: PhraseKeys.EMERGENCY_POLICE, text: 'Rufen Sie die Polizei!' },

    // Numbers 1-10
    { key: PhraseKeys.NUMBER_ONE, text: 'eins' },
    { key: PhraseKeys.NUMBER_TWO, text: 'zwei' },
    { key: PhraseKeys.NUMBER_THREE, text: 'drei' },
    { key: PhraseKeys.NUMBER_FOUR, text: 'vier' },
    { key: PhraseKeys.NUMBER_FIVE, text: 'fünf' },
    { key: PhraseKeys.NUMBER_SIX, text: 'sechs' },
    { key: PhraseKeys.NUMBER_SEVEN, text: 'sieben' },
    { key: PhraseKeys.NUMBER_EIGHT, text: 'acht' },
    { key: PhraseKeys.NUMBER_NINE, text: 'neun' },
    { key: PhraseKeys.NUMBER_TEN, text: 'zehn' },
  ],
};
