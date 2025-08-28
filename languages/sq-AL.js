import { PhraseKeys } from '../types.js';

export const sqAL = {
  langCode: 'sq-AL',
  voice: {
    name: 'sq-AL-IlirNeural',
    ssmlGender: 'MALE',
    provider: 'azure',
  },
  phrases: [
    // Greetings & Politeness - Everyday Albanian
    { key: PhraseKeys.GREETING_HELLO, text: 'Përshëndetje!' },
    { key: PhraseKeys.GREETING_GOOD_DAY, text: 'Mirëmëngjes!' },
    { key: PhraseKeys.FAREWELL_BYE, text: 'Mirupafshim!' },
    { key: PhraseKeys.POLITENESS_PLEASE, text: 'Ju lutem' },
    { key: PhraseKeys.POLITENESS_THANK_YOU, text: 'Faleminderit!' },
    { key: PhraseKeys.POLITENESS_MANY_THANKS, text: 'Shumë faleminderit' },
    { key: PhraseKeys.CONFIRMATION_YES, text: 'Po' },
    { key: PhraseKeys.CONFIRMATION_NO, text: 'Jo' },
    { key: PhraseKeys.POLITENESS_EXCUSE_ME, text: 'Më falni' },
    
    // Introduction - Meeting people
    { key: PhraseKeys.INTRODUCTION_MY_NAME, text: 'Unë quhem...' },
    { key: PhraseKeys.INTRODUCTION_NICE_TO_MEET, text: 'Gëzohem që u njohëm' },
    { key: PhraseKeys.INTRODUCTION_WHATS_YOUR_NAME, text: 'Si quheni ju?' },

    // Communication - Practical Albanian
    { key: PhraseKeys.COMMUNICATION_DONT_UNDERSTAND, text: 'Nuk kuptoj.' },
    { key: PhraseKeys.COMMUNICATION_SPEAK_ENGLISH, text: 'A flisni anglisht?' },
    { key: PhraseKeys.COMMUNICATION_SPEAK_SLOWER, text: 'Mund të flisni më ngadalë, ju lutem?' },
    { key: PhraseKeys.COMMUNICATION_LIMITED_LANGUAGE, text: 'Nuk flas shumë shqip.' }, 
    { key: PhraseKeys.COMMUNICATION_HOW_DO_YOU_SAY, text: 'Si thuhet ... në shqip?' },

    // Food & Dining - Restaurant Albanian
    { key: PhraseKeys.REQUEST_MENU, text: 'Menunë, ju lutem.' },
    { key: PhraseKeys.REQUEST_COFFEE, text: 'Një kafe, ju lutem.' },
    { key: PhraseKeys.REQUEST_BILL, text: 'Llogarinë, ju lutem.' },
    { key: PhraseKeys.DINING_VEGETARIAN, text: 'Unë jam vegjetarian.', note: '(f) Unë jam vegjetariane.' },
    { key: PhraseKeys.DINING_DELICIOUS, text: 'Ishte shumë e shijshme!', note: 'pas ngrënies' },
    { key: PhraseKeys.DINING_YUMMY, text: 'Sa e shijshme!', note: 'gjatë ngrënies' },

    // Navigation - Getting around Albania
    { key: PhraseKeys.NAVIGATION_TRAIN_STATION, text: 'Ku është stacioni i trenit?' },
    { key: PhraseKeys.NAVIGATION_RESTROOM, text: 'Ku është banja?' },
    { key: PhraseKeys.NAVIGATION_ATM, text: 'Ku është bankomati më i afërt?' },

    // Shopping - Market Albanian
    { key: PhraseKeys.SHOPPING_HOW_MUCH, text: 'Sa kushton?' },
    { key: PhraseKeys.SHOPPING_PAY_BY_CARD, text: 'Mund të paguaj me kartë?' },
    { key: PhraseKeys.SHOPPING_PAY_BY_CASH, text: 'Dua të paguaj me para në dorë.' },

    // Emergency - Direct and clear
    { key: PhraseKeys.EMERGENCY_HELP, text: 'Ndihmë!' },
    { key: PhraseKeys.EMERGENCY_DOCTOR, text: 'Kam nevojë për një mjek!' }, // Slightly more natural phrasing
    { key: PhraseKeys.EMERGENCY_POLICE, text: 'Thirrni policinë!' },

    // Numbers 1-10
    { key: PhraseKeys.NUMBER_ONE, text: 'një' },
    { key: PhraseKeys.NUMBER_TWO, text: 'dy' },
    { key: PhraseKeys.NUMBER_THREE, text: 'tre' },
    { key: PhraseKeys.NUMBER_FOUR, text: 'katër' },
    { key: PhraseKeys.NUMBER_FIVE, text: 'pesë' },
    { key: PhraseKeys.NUMBER_SIX, text: 'gjashtë' },
    { key: PhraseKeys.NUMBER_SEVEN, text: 'shtatë' },
    { key: PhraseKeys.NUMBER_EIGHT, text: 'tetë' },
    { key: PhraseKeys.NUMBER_NINE, text: 'nëntë' },
    { key: PhraseKeys.NUMBER_TEN, text: 'dhjetë' },
  ],
};
