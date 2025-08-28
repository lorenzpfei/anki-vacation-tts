import { PhraseKeys } from '../types.js';

export const esCO = {
  langCode: 'es-US',
  voice: {
    name: 'es-US-Neural2-B',
    ssmlGender: 'MALE',
  },
  phrases: [
    // Greetings & Politeness - Colombian Spanish
    { key: PhraseKeys.GREETING_HELLO, text: '¡Hola!' },
    { key: PhraseKeys.GREETING_GOOD_DAY, text: '¡Buenos días!' },
    { key: PhraseKeys.FAREWELL_BYE, text: '¡Chao!' }, // More common than "Adiós" in Colombia
    { key: PhraseKeys.POLITENESS_PLEASE, text: 'Por favor' },
    { key: PhraseKeys.POLITENESS_THANK_YOU, text: '¡Gracias!' },
    { key: PhraseKeys.POLITENESS_MANY_THANKS, text: 'Muchas gracias' },
    { key: PhraseKeys.CONFIRMATION_YES, text: 'Sí' },
    { key: PhraseKeys.CONFIRMATION_NO, text: 'No' },
    { key: PhraseKeys.POLITENESS_EXCUSE_ME, text: 'Disculpe' },
    
    // Introduction - Meeting people
    { key: PhraseKeys.INTRODUCTION_MY_NAME, text: 'Me llamo...' },
    { key: PhraseKeys.INTRODUCTION_NICE_TO_MEET, text: 'Mucho gusto!' },
    { key: PhraseKeys.INTRODUCTION_WHATS_YOUR_NAME, text: '¿Cómo se llama usted?' },
    
    // Communication - Colombian style
    { key: PhraseKeys.COMMUNICATION_DONT_UNDERSTAND, text: 'No entiendo.' },
    { key: PhraseKeys.COMMUNICATION_SPEAK_ENGLISH, text: '¿Habla inglés?' },
    { key: PhraseKeys.COMMUNICATION_SPEAK_SLOWER, text: '¿Puede hablar más despacio, por favor?' },
    { key: PhraseKeys.COMMUNICATION_LIMITED_LANGUAGE, text: 'No hablo mucho español.' },
    { key: PhraseKeys.COMMUNICATION_HOW_DO_YOU_SAY, text: '¿Cómo se dice ... en español?' },

    // Food & Dining - How people really order in Colombia
    { key: PhraseKeys.REQUEST_MENU, text: '¿Me puede mostrar la carta?' },
    { key: PhraseKeys.REQUEST_COFFEE, text: 'Me da un café, por favor.' },
    { key: PhraseKeys.REQUEST_BILL, text: '¿Me regala la cuenta?' },
    { key: PhraseKeys.DINING_VEGETARIAN, text: 'Soy vegetariano.', note: '(f) Soy vegetariana.' },
    { key: PhraseKeys.DINING_DELICIOUS, text: '¡Estuvo delicioso!', note: 'después de comer' },
    { key: PhraseKeys.DINING_YUMMY, text: '¡Qué rico!', note: 'mientras come' }, 

    // Navigation - Street-level Colombian
    { key: PhraseKeys.NAVIGATION_TRAIN_STATION, text: '¿Dónde está la estación?' },
    { key: PhraseKeys.NAVIGATION_RESTROOM, text: '¿Dónde está el baño?' },
    { key: PhraseKeys.NAVIGATION_ATM, text: '¿Dónde está el cajero automático más cercano?' },
    
    // Shopping - Natural Colombian conversation
    { key: PhraseKeys.SHOPPING_HOW_MUCH, text: '¿Cuánto vale?' }, // "Vale" is very Colombian
    { key: PhraseKeys.SHOPPING_PAY_BY_CARD, text: '¿Puedo pagar con tarjeta?' },
    { key: PhraseKeys.SHOPPING_PAY_BY_CASH, text: 'Quisiera pagar en efectivo.' },

    // Emergency - Direct and urgent
    { key: PhraseKeys.EMERGENCY_HELP, text: '¡Auxilio!' }, // More common than "Ayuda" in emergencies
    { key: PhraseKeys.EMERGENCY_DOCTOR, text: '¡Necesito un médico!' },
    { key: PhraseKeys.EMERGENCY_POLICE, text: '¡Llamen la policía!' },

    // Numbers 1-10
    { key: PhraseKeys.NUMBER_ONE, text: 'uno' },
    { key: PhraseKeys.NUMBER_TWO, text: 'dos' },
    { key: PhraseKeys.NUMBER_THREE, text: 'tres' },
    { key: PhraseKeys.NUMBER_FOUR, text: 'cuatro' },
    { key: PhraseKeys.NUMBER_FIVE, text: 'cinco' },
    { key: PhraseKeys.NUMBER_SIX, text: 'seis' },
    { key: PhraseKeys.NUMBER_SEVEN, text: 'siete' },
    { key: PhraseKeys.NUMBER_EIGHT, text: 'ocho' },
    { key: PhraseKeys.NUMBER_NINE, text: 'nueve' },
    { key: PhraseKeys.NUMBER_TEN, text: 'diez' },
  ],
};
