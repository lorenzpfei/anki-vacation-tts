import { PhraseKeys } from '../types.js';

export const itIT = {
  provider: 'google',
  langCode: 'it-IT',
  voice: {
    name: 'it-IT-Neural2-C',
    ssmlGender: 'MALE',
  },
  phrases: [
    // Greetings & Politeness - Everyday Italian
    { key: PhraseKeys.GREETING_HELLO, text: 'Ciao!' },
    { key: PhraseKeys.GREETING_GOOD_DAY, text: 'Buongiorno!' },
    { key: PhraseKeys.FAREWELL_BYE, text: 'Arrivederci' },
    { key: PhraseKeys.POLITENESS_PLEASE, text: 'Per favore' },
    { key: PhraseKeys.POLITENESS_THANK_YOU, text: 'Grazie!' },
    { key: PhraseKeys.POLITENESS_MANY_THANKS, text: 'Grazie mille' },
    { key: PhraseKeys.CONFIRMATION_YES, text: 'Sì' },
    { key: PhraseKeys.CONFIRMATION_NO, text: 'No' },
    { key: PhraseKeys.POLITENESS_EXCUSE_ME, text: 'Scusi' },
    
    // Introduction - Meeting people
    { key: PhraseKeys.INTRODUCTION_MY_NAME, text: 'Mi chiamo...' },
    { key: PhraseKeys.INTRODUCTION_NICE_TO_MEET, text: 'Piacere' },
    { key: PhraseKeys.INTRODUCTION_WHATS_YOUR_NAME, text: 'Come si chiama?' },

    // Communication - Natural Italian
    { key: PhraseKeys.COMMUNICATION_DONT_UNDERSTAND, text: 'Non capisco.' },
    { key: PhraseKeys.COMMUNICATION_SPEAK_ENGLISH, text: 'Parla inglese?' },
    { key: PhraseKeys.COMMUNICATION_SPEAK_SLOWER, text: 'Può parlare più lentamente, per favore?' },
    { key: PhraseKeys.COMMUNICATION_LIMITED_LANGUAGE, text: 'Non parlo molto bene l\'italiano.' },
    { key: PhraseKeys.COMMUNICATION_HOW_DO_YOU_SAY, text: 'Come si dice ... in italiano?' },

    // Food & Dining - How Italians actually order
    { key: PhraseKeys.REQUEST_MENU, text: 'Il menù, per favore.' },
    { key: PhraseKeys.REQUEST_COFFEE, text: 'Prendo un caffè.' },
    { key: PhraseKeys.REQUEST_BILL, text: 'Il conto, per favore.' },
    { key: PhraseKeys.DINING_VEGETARIAN, text: 'Sono vegetariano.', note: '(f) Sono vegetariana.' },
    { key: PhraseKeys.DINING_DELICIOUS, text: 'Era delizioso!', note: 'dopo aver mangiato' },
    { key: PhraseKeys.DINING_YUMMY, text: 'Che buono!', note: 'mentre si mangia' },

    // Navigation - Practical Italian
    { key: PhraseKeys.NAVIGATION_TRAIN_STATION, text: 'Dov\'è la stazione?' },
    { key: PhraseKeys.NAVIGATION_RESTROOM, text: 'Dov\'è il bagno?' },
    { key: PhraseKeys.NAVIGATION_ATM, text: 'Dov\'è il bancomat più vicino?' },
    
    // Shopping - Street-level Italian
    { key: PhraseKeys.SHOPPING_HOW_MUCH, text: 'Quanto costa?' },
    { key: PhraseKeys.SHOPPING_PAY_BY_CARD, text: 'Posso pagare con la carta?' },
    { key: PhraseKeys.SHOPPING_PAY_BY_CASH, text: 'Vorrei pagare in contanti.' },

    // Emergency - Direct and urgent
    { key: PhraseKeys.EMERGENCY_HELP, text: 'Aiuto!' },
    { key: PhraseKeys.EMERGENCY_DOCTOR, text: 'Ho bisogno di un medico!' },
    { key: PhraseKeys.EMERGENCY_POLICE, text: 'Chiamate la polizia!' },

    // Numbers 1-10
    { key: PhraseKeys.NUMBER_ONE, text: 'uno' },
    { key: PhraseKeys.NUMBER_TWO, text: 'due' },
    { key: PhraseKeys.NUMBER_THREE, text: 'tre' },
    { key: PhraseKeys.NUMBER_FOUR, text: 'quattro' },
    { key: PhraseKeys.NUMBER_FIVE, text: 'cinque' },
    { key: PhraseKeys.NUMBER_SIX, text: 'sei' },
    { key: PhraseKeys.NUMBER_SEVEN, text: 'sette' },
    { key: PhraseKeys.NUMBER_EIGHT, text: 'otto' },
    { key: PhraseKeys.NUMBER_NINE, text: 'nove' },
    { key: PhraseKeys.NUMBER_TEN, text: 'dieci' },
  ],
};
