import { PhraseKeys } from '../types.js';

export const ptBR = {
  provider: 'google',
  langCode: 'pt-BR',
  voice: {
    name: 'pt-BR-Neural2-B',
    ssmlGender: 'MALE',
  },
  phrases: [
    // Greetings & Politeness - Brazilian Portuguese
    { key: PhraseKeys.GREETING_HELLO, text: 'Oi!' },
    { key: PhraseKeys.GREETING_GOOD_DAY, text: 'Bom dia!' },
    { key: PhraseKeys.FAREWELL_BYE, text: 'Tchau!' },
    { key: PhraseKeys.POLITENESS_PLEASE, text: 'Por favor' },
    { key: PhraseKeys.POLITENESS_THANK_YOU, text: 'Obrigado', note: 'Casual: Valeu! | (f) Obrigada' },
    { key: PhraseKeys.POLITENESS_MANY_THANKS, text: 'Muito obrigado' },
    { key: PhraseKeys.CONFIRMATION_YES, text: 'Sim' },
    { key: PhraseKeys.CONFIRMATION_NO, text: 'Não' },
    { key: PhraseKeys.POLITENESS_EXCUSE_ME, text: 'Com licença' },
    
    // Introduction - Meeting people
    { key: PhraseKeys.INTRODUCTION_MY_NAME, text: 'Meu nome é...' },
    { key: PhraseKeys.INTRODUCTION_NICE_TO_MEET, text: 'Prazer em conhecer' },
    { key: PhraseKeys.INTRODUCTION_WHATS_YOUR_NAME, text: 'Qual é o seu nome?' },

    // Communication - Brazilian style
    { key: PhraseKeys.COMMUNICATION_DONT_UNDERSTAND, text: 'Não entendo.' },
    { key: PhraseKeys.COMMUNICATION_SPEAK_ENGLISH, text: 'Você fala inglês?' },
    { key: PhraseKeys.COMMUNICATION_SPEAK_SLOWER, text: 'Você pode falar mais devagar, por favor?' },
    { key: PhraseKeys.COMMUNICATION_LIMITED_LANGUAGE, text: 'Eu não falo muito bem português.' },
    { key: PhraseKeys.COMMUNICATION_HOW_DO_YOU_SAY, text: 'Como se diz ... em português?' },

    // Food & Dining - How Brazilians actually order
    { key: PhraseKeys.REQUEST_MENU, text: 'Pode me trazer o cardápio?' },
    { key: PhraseKeys.REQUEST_COFFEE, text: 'Eu vou querer um café.' },
    { key: PhraseKeys.REQUEST_BILL, text: 'A conta, por favor.' },
    { key: PhraseKeys.DINING_VEGETARIAN, text: 'Eu sou vegetariano.', note: '(f) Eu sou vegetariana.' },
    { key: PhraseKeys.DINING_DELICIOUS, text: 'Estava uma delícia!', note: 'depois de comer' },
    { key: PhraseKeys.DINING_YUMMY, text: 'Que delícia!', note: 'enquanto come' },

    // Navigation - Brazilian Portuguese
    { key: PhraseKeys.NAVIGATION_TRAIN_STATION, text: 'Onde fica a estação?' },
    { key: PhraseKeys.NAVIGATION_RESTROOM, text: 'Onde fica o banheiro?' },
    { key: PhraseKeys.NAVIGATION_ATM, text: 'Onde tem um caixa eletrônico por perto?' },
    
    // Shopping - Natural Brazilian conversation
    { key: PhraseKeys.SHOPPING_HOW_MUCH, text: 'Quanto custa?' },
    { key: PhraseKeys.SHOPPING_PAY_BY_CARD, text: 'Posso pagar com cartão?' },
    { key: PhraseKeys.SHOPPING_PAY_BY_CASH, text: 'Gostaria de pagar em dinheiro.' },

    // Emergency - Direct and urgent
    { key: PhraseKeys.EMERGENCY_HELP, text: 'Socorro!' },
    { key: PhraseKeys.EMERGENCY_DOCTOR, text: 'Preciso de um médico!' },
    { key: PhraseKeys.EMERGENCY_POLICE, text: 'Chama a polícia!' },

    // Numbers 1-10
    { key: PhraseKeys.NUMBER_ONE, text: 'um' },
    { key: PhraseKeys.NUMBER_TWO, text: 'dois' },
    { key: PhraseKeys.NUMBER_THREE, text: 'três' },
    { key: PhraseKeys.NUMBER_FOUR, text: 'quatro' },
    { key: PhraseKeys.NUMBER_FIVE, text: 'cinco' },
    { key: PhraseKeys.NUMBER_SIX, text: 'seis' },
    { key: PhraseKeys.NUMBER_SEVEN, text: 'sete' },
    { key: PhraseKeys.NUMBER_EIGHT, text: 'oito' },
    { key: PhraseKeys.NUMBER_NINE, text: 'nove' },
    { key: PhraseKeys.NUMBER_TEN, text: 'dez' },
  ],
};
