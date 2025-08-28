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
    { key: PhraseKeys.GREETING_HELLO, text: 'Hi!' },
    { key: PhraseKeys.GREETING_GOOD_DAY, text: 'Good morning!' },
    { key: PhraseKeys.FAREWELL_BYE, text: 'Bye!' },
    { key: PhraseKeys.POLITENESS_PLEASE, text: 'Please' },
    { key: PhraseKeys.POLITENESS_THANK_YOU, text: 'Thanks!' },
    { key: PhraseKeys.POLITENESS_MANY_THANKS, text: 'Thanks so much!' },
    { key: PhraseKeys.CONFIRMATION_YES, text: 'Yes' },
    { key: PhraseKeys.CONFIRMATION_NO, text: 'No' },
    { key: PhraseKeys.POLITENESS_EXCUSE_ME, text: 'Excuse me' },
    
    // Introduction - Meeting people
    { key: PhraseKeys.INTRODUCTION_MY_NAME, text: 'My name is...' },
    { key: PhraseKeys.INTRODUCTION_NICE_TO_MEET, text: 'Nice to meet you!' },
    { key: PhraseKeys.INTRODUCTION_WHATS_YOUR_NAME, text: 'What\'s your name?' },
    
    // Communication - Natural American English
    { key: PhraseKeys.COMMUNICATION_DONT_UNDERSTAND, text: 'I don\'t understand.' },
    { key: PhraseKeys.COMMUNICATION_SPEAK_ENGLISH, text: 'Do you speak English?' },
    { key: PhraseKeys.COMMUNICATION_SPEAK_SLOWER, text: 'Could you speak a little slower, please?' },
    { key: PhraseKeys.COMMUNICATION_LIMITED_LANGUAGE, text: 'I don\'t speak the language very well.' }, // Key is generic
    { key: PhraseKeys.COMMUNICATION_HOW_DO_YOU_SAY, text: 'How do you say ... in this language?' },

    // Food & Dining - How Americans actually order
    { key: PhraseKeys.REQUEST_MENU, text: 'Can I get a menu, please?' },
    { key: PhraseKeys.REQUEST_COFFEE, text: 'I\'ll have a coffee, please.' },
    { key: PhraseKeys.REQUEST_BILL, text: 'Can we get the check, please?' },
    { key: PhraseKeys.DINING_VEGETARIAN, text: 'I\'m a vegetarian.' },
    { key: PhraseKeys.DINING_DELICIOUS, text: 'That was delicious!', note: 'after eating' },
    { key: PhraseKeys.DINING_YUMMY, text: 'This is really good!', note: 'during eating' },

    // Navigation - American style
    { key: PhraseKeys.NAVIGATION_TRAIN_STATION, text: 'Where\'s the train station?' },
    { key: PhraseKeys.NAVIGATION_RESTROOM, text: 'Where\'s the restroom?' }, // Restroom is more common than bathroom in public
    { key: PhraseKeys.NAVIGATION_ATM, text: 'Where is the nearest ATM?' },
    
    // Shopping - Natural American conversation
    { key: PhraseKeys.SHOPPING_HOW_MUCH, text: 'How much is this?' },
    { key: PhraseKeys.SHOPPING_PAY_BY_CARD, text: 'Can I pay with a card?' },
    { key: PhraseKeys.SHOPPING_PAY_BY_CASH, text: 'I\'d like to pay with cash.' },

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
