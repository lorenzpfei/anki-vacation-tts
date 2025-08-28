import { PhraseKeys } from '../types.js';

export const frFR = {
  provider: 'google',
  langCode: 'fr-FR',
  voice: {
    name: 'fr-FR-Neural2-D',
    ssmlGender: 'MALE',
  },
  phrases: [
    // Greetings & Politeness - Everyday French
    { key: PhraseKeys.GREETING_HELLO, text: 'Salut !' },
    { key: PhraseKeys.GREETING_GOOD_DAY, text: 'Bonjour !' },
    { key: PhraseKeys.FAREWELL_BYE, text: 'Au revoir !' },
    { key: PhraseKeys.POLITENESS_PLEASE, text: 'S\'il vous plaît' },
    { key: PhraseKeys.POLITENESS_THANK_YOU, text: 'Merci !' },
    { key: PhraseKeys.POLITENESS_MANY_THANKS, text: 'Merci beaucoup' },
    { key: PhraseKeys.CONFIRMATION_YES, text: 'Oui' },
    { key: PhraseKeys.CONFIRMATION_NO, text: 'Non' },
    { key: PhraseKeys.POLITENESS_EXCUSE_ME, text: 'Pardon' },
    
    // Introduction - Meeting people
    { key: PhraseKeys.INTRODUCTION_MY_NAME, text: 'Je m\'appelle...' },
    { key: PhraseKeys.INTRODUCTION_NICE_TO_MEET, text: 'Enchanté !', note: '(f) Enchantée !' },
    { key: PhraseKeys.INTRODUCTION_WHATS_YOUR_NAME, text: 'Comment tu t\'appelles ?', note: 'Informal. Formal: Comment vous appelez-vous ?' },
    
    // Communication - Natural French
    { key: PhraseKeys.COMMUNICATION_DONT_UNDERSTAND, text: 'Je ne comprends pas.' },
    { key: PhraseKeys.COMMUNICATION_SPEAK_ENGLISH, text: 'Vous parlez anglais ?' },
    { key: PhraseKeys.COMMUNICATION_SPEAK_SLOWER, text: 'Pouvez-vous parler plus lentement, s\'il vous plaît ?' },
    { key: PhraseKeys.COMMUNICATION_LIMITED_LANGUAGE, text: 'Je ne parle pas bien français.' },
    { key: PhraseKeys.COMMUNICATION_HOW_DO_YOU_SAY, text: 'Comment on dit ... en français ?' },

    // Food & Dining - How French people actually order
    { key: PhraseKeys.REQUEST_MENU, text: 'La carte, s\'il vous plaît.' },
    { key: PhraseKeys.REQUEST_COFFEE, text: 'Je vais prendre un café.' },
    { key: PhraseKeys.REQUEST_BILL, text: 'L\'addition, s\'il vous plaît.' },
    { key: PhraseKeys.DINING_VEGETARIAN, text: 'Je suis végétarien.', note: '(f) Je suis végétarienne.' },
    { key: PhraseKeys.DINING_DELICIOUS, text: 'C\'était délicieux !', note: 'après avoir mangé' },
    { key: PhraseKeys.DINING_YUMMY, text: 'C\'est très bon !', note: 'pendant qu\'on mange' },

    // Navigation - Natural French
    { key: PhraseKeys.NAVIGATION_TRAIN_STATION, text: 'Où est la gare, s\'il vous plaît ?' },
    { key: PhraseKeys.NAVIGATION_RESTROOM, text: 'Où sont les toilettes ?' },
    { key: PhraseKeys.NAVIGATION_ATM, text: 'Où est le distributeur de billets le plus proche ?' },
    
    // Shopping - How people really ask
    { key: PhraseKeys.SHOPPING_HOW_MUCH, text: 'Combien ça coûte ?' },
    { key: PhraseKeys.SHOPPING_PAY_BY_CARD, text: 'Je peux payer par carte ?' },
    { key: PhraseKeys.SHOPPING_PAY_BY_CASH, text: 'Je voudrais payer en espèces.' },

    // Emergency - Direct and urgent
    { key: PhraseKeys.EMERGENCY_HELP, text: 'Au secours !' },
    { key: PhraseKeys.EMERGENCY_DOCTOR, text: 'J\'ai besoin d\'un médecin !' },
    { key: PhraseKeys.EMERGENCY_POLICE, text: 'Appelez la police !' },

    // Numbers 1-10
    { key: PhraseKeys.NUMBER_ONE, text: 'un' },
    { key: PhraseKeys.NUMBER_TWO, text: 'deux' },
    { key: PhraseKeys.NUMBER_THREE, text: 'trois' },
    { key: PhraseKeys.NUMBER_FOUR, text: 'quatre' },
    { key: PhraseKeys.NUMBER_FIVE, text: 'cinq' },
    { key: PhraseKeys.NUMBER_SIX, text: 'six' },
    { key: PhraseKeys.NUMBER_SEVEN, text: 'sept' },
    { key: PhraseKeys.NUMBER_EIGHT, text: 'huit' },
    { key: PhraseKeys.NUMBER_NINE, text: 'neuf' },
    { key: PhraseKeys.NUMBER_TEN, text: 'dix' },
  ],
};
