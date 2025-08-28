import { PhraseKeys } from '../types.js';

export const ptBR = {
    provider: 'google',
    langCode: 'pt-BR',
    voice: {
        name: 'pt-BR-Neural2-B',
        ssmlGender: 'MALE',
    },
    phrases: [
        // Greetings & Politeness
        {
            key: PhraseKeys.GREETING_HELLO,
            text: 'Oi!',
            pronunciation_ipa: '/oj/',
            pronunciation_simple: '/oy/',
        },
        {
            key: PhraseKeys.GREETING_GOOD_DAY,
            text: 'Olá!',
            pronunciation_ipa: '/oˈla/',
            pronunciation_simple: '/o-ˈla/',
        },
        {
            key: PhraseKeys.FAREWELL_BYE,
            text: 'Tchau!',
            pronunciation_ipa: '/tʃaw/',
            pronunciation_simple: '/chow/',
        },
        {
            key: PhraseKeys.POLITENESS_PLEASE,
            text: 'Imagina!',
            pronunciation_ipa: '/imaˈʒina/',
            pronunciation_simple: '/ee-ma-ˈzhee-na/',
            note: 'Very common reply to “obrigado(a)”. Also “De nada!”.',
        },
        {
            key: PhraseKeys.POLITENESS_THANK_YOU,
            text: 'Obrigado!',
            pronunciation_ipa: '/oβɾiˈɡadu/',
            pronunciation_simple: '/o-bree-ˈga-doo/',
            note: 'Female says “Obrigada!”.',
        },
        {
            key: PhraseKeys.POLITENESS_MANY_THANKS,
            text: 'Muito obrigado!',
            pronunciation_ipa: '/ˈmũjtu oβɾiˈɡadu/',
            pronunciation_simple: '/ˈmwin-too o-bree-ˈga-doo/',
        },
        {
            key: PhraseKeys.CONFIRMATION_YES,
            text: 'Sim',
            pronunciation_ipa: '/sĩ/',
            pronunciation_simple: '/seeng~/',
        },
        {
            key: PhraseKeys.CONFIRMATION_NO,
            text: 'Não',
            pronunciation_ipa: '/nɐ̃w̃/',
            pronunciation_simple: '/nah-oong~/',
        },
        {
            key: PhraseKeys.POLITENESS_EXCUSE_ME,
            text: 'Com licença',
            pronunciation_ipa: '/kõ liˈsẽsɐ/',
            pronunciation_simple: '/koh lee-ˈsen-sa/',
        },

        // Introduction
        {
            key: PhraseKeys.INTRODUCTION_MY_NAME,
            text: 'Eu sou …',
            pronunciation_ipa: '/ew sow/',
            pronunciation_simple: '/eh-oo soh/',
        },
        {
            key: PhraseKeys.INTRODUCTION_NICE_TO_MEET,
            text: 'Prazer!',
            pronunciation_ipa: '/pɾaˈzeɾ/',
            pronunciation_simple: '/pra-ˈzehr/',
        },
        {
            key: PhraseKeys.INTRODUCTION_WHATS_YOUR_NAME,
            text: 'Como você se chama?',
            pronunciation_ipa: '/ˈkomu voˈse si ˈʃɐmɐ/',
            pronunciation_simple: '/ˈko-moo vo-ˈseh si ˈsha-ma/',
        },

        // Communication
        {
            key: PhraseKeys.COMMUNICATION_DONT_UNDERSTAND,
            text: 'Não entendi.',
            pronunciation_ipa: '/nɐ̃w̃ ẽtẽˈdʒi/',
            pronunciation_simple: '/nau en-ten-JEE/',
        },
        {
            key: PhraseKeys.COMMUNICATION_SPEAK_ENGLISH,
            text: 'Você fala inglês?',
            pronunciation_ipa: '/voˈse ˈfalɐ ĩˈɡlejs/',
            pronunciation_simple: '/vo-ˈseh ˈfa-la ing-ˈglays?/',
        },
        {
            key: PhraseKeys.COMMUNICATION_SPEAK_SLOWER,
            text: 'Pode falar mais devagar, por favor?',
            pronunciation_ipa: '/ˈpɔdʒi faˈlaʁ majʒ dʒevaˈɡaʁ poʁ faˈvoʁ/',
            pronunciation_simple:
                '/POH-jee fa-ˈlar mys je-va-ˈgar, por fa-ˈvor?/',
        },
        {
            key: PhraseKeys.COMMUNICATION_LIMITED_LANGUAGE,
            text: 'Meu português não é muito bom.',
            pronunciation_ipa: '/mew poʁtuˈɡejs nɐ̃w̃ ɛ ˈmũjtu bõ/',
            pronunciation_simple:
                '/meh-oo por-too-ˈgays nao eh ˈmwin-too bohng~/',
        },
        {
            key: PhraseKeys.COMMUNICATION_HOW_DO_YOU_SAY,
            text: 'Como se diz … em português?',
            pronunciation_ipa: '/ˈkomu si ˈdʒis ẽ poʁtuˈɡejs/',
            pronunciation_simple: '/ˈko-moo see ˈjeez eng por-too-ˈgays?/',
        },

        // Food & Dining
        {
            key: PhraseKeys.REQUEST_MENU,
            text: 'Cardápio, por favor.',
            pronunciation_ipa: '/kaʁˈdapju poʁ faˈvoʁ/',
            pronunciation_simple: '/kar-ˈda-pyu, por fa-ˈvor/',
        },
        {
            key: PhraseKeys.REQUEST_COFFEE,
            text: 'Café',
            pronunciation_ipa: '/kaˈfɛ/',
            pronunciation_simple: '/ka-ˈfeh/',
        },
        {
            key: PhraseKeys.REQUEST_WATER,
            text: 'Água',
            pronunciation_ipa: '/ˈaɡwa/',
            pronunciation_simple: '/ˈa-gwa/',
        },
        {
            key: PhraseKeys.REQUEST_PLEASE,
            text: 'por favor',
            pronunciation_ipa: '/poʁ faˈvoʁ/',
            pronunciation_simple: '/por fa-ˈvor/',
        },
        {
            key: PhraseKeys.REQUEST_BILL,
            text: 'A conta, por favor.',
            pronunciation_ipa: '/a ˈkõtɐ poʁ faˈvoʁ/',
            pronunciation_simple: '/a ˈkon-ta, por fa-ˈvor/',
        },
        {
            key: PhraseKeys.DINING_VEGETARIAN,
            text: 'Sou vegetariano/a.',
            pronunciation_ipa: '/soʊ veʒetaɾiˈɐ̃nu(a)/',
            pronunciation_simple: '/soh ve-zhe-ta-ree-ˈa-no(-a)/',
            note: '“-a” for female.',
        },
        {
            key: PhraseKeys.DINING_DELICIOUS,
            text: 'Tava uma delícia!',
            pronunciation_ipa: '/ˈtavɐ ˈumɐ deˈlisjɐ/',
            pronunciation_simple: '/ˈta-va ˈu-ma de-ˈlee-sya/',
        },
        {
            key: PhraseKeys.DINING_YUMMY,
            text: 'Tá muito bom!',
            pronunciation_ipa: '/ta ˈmũjtu bõ/',
            pronunciation_simple: '/ta ˈmwin-too bohng~/',
        },

        // Navigation
        {
            key: PhraseKeys.NAVIGATION_TRAIN_STATION,
            text: 'Onde fica a estação?',
            pronunciation_ipa: '/ˈõdʒi ˈfikɐ a es.taˈsãw̃/',
            pronunciation_simple: '/ON-jee FEE-ka a es-ta-ˈsown~/',
        },
        {
            key: PhraseKeys.NAVIGATION_RESTROOM,
            text: 'Onde fica o banheiro?',
            pronunciation_ipa: '/ˈõdʒi ˈfikɐ u bɐˈɲejɾo/',
            pronunciation_simple: '/ON-jee FEE-ka oo ban-ˈyay-ro/',
        },
        {
            key: PhraseKeys.NAVIGATION_ATM,
            text: 'Onde tem caixa eletrônico?',
            pronunciation_ipa: '/ˈõdʒi tẽj̃ ˈkajʃɐ eletɾoˈniko/',
            pronunciation_simple: '/ON-jee tayn ˈkai-sha e-le-tro-ˈnee-ko/',
        },

        // Shopping
        {
            key: PhraseKeys.SHOPPING_HOW_MUCH,
            text: 'Quanto é?',
            pronunciation_ipa: '/ˈkwɐ̃tu ɛ/',
            pronunciation_simple: '/ˈkwan-too eh?/',
        },
        {
            key: PhraseKeys.SHOPPING_PAY_BY_CARD,
            text: 'Posso pagar com cartão?',
            pronunciation_ipa: '/ˈpɔsu paˈɡaʁ kõ kaʁˈtãw̃/',
            pronunciation_simple: '/ˈpo-su pa-ˈgar kong kar-ˈtawn~?/',
        },
        {
            key: PhraseKeys.SHOPPING_PAY_BY_CASH,
            text: 'Pago em dinheiro.',
            pronunciation_ipa: '/ˈpaɡu ẽ dʒiˈɲejɾu/',
            pronunciation_simple: '/ˈpa-go eng jee-ˈnyay-roo/',
        },

        // Emergency
        {
            key: PhraseKeys.EMERGENCY_HELP,
            text: 'Socorro!',
            pronunciation_ipa: '/soˈkoʁu/',
            pronunciation_simple: '/so-ˈko-hoo/',
        },
        {
            key: PhraseKeys.EMERGENCY_DOCTOR,
            text: 'Preciso de um médico!',
            pronunciation_ipa: '/pɾeˈsizʊ dʒi ũ ˈmɛdʒiku/',
            pronunciation_simple: '/pre-ˈsee-zu jee oon ˈmeh-jee-koo/',
        },
        {
            key: PhraseKeys.EMERGENCY_POLICE,
            text: 'Chama a polícia!',
            pronunciation_ipa: '/ˈʃɐmɐ a poˈlisjɐ/',
            pronunciation_simple: '/SHA-ma a po-ˈlee-sya/',
        },

        // Numbers 1-10
        {
            key: PhraseKeys.NUMBER_ONE,
            text: 'um',
            pronunciation_ipa: '/ũ/',
            pronunciation_simple: '/oong~/',
        },
        {
            key: PhraseKeys.NUMBER_TWO,
            text: 'dois',
            pronunciation_ipa: '/doi̯s/',
            pronunciation_simple: '/doys/',
        },
        {
            key: PhraseKeys.NUMBER_THREE,
            text: 'três',
            pronunciation_ipa: '/tɾe̞j̯s/',
            pronunciation_simple: '/trays/',
        },
        {
            key: PhraseKeys.NUMBER_FOUR,
            text: 'quatro',
            pronunciation_ipa: '/ˈkwatɾu/',
            pronunciation_simple: '/ˈkwa-tro/',
        },
        {
            key: PhraseKeys.NUMBER_FIVE,
            text: 'cinco',
            pronunciation_ipa: '/ˈsĩku/',
            pronunciation_simple: '/ˈseen-koo/',
        },
        {
            key: PhraseKeys.NUMBER_SIX,
            text: 'seis',
            pronunciation_ipa: '/se̞j̯s/',
            pronunciation_simple: '/says/',
        },
        {
            key: PhraseKeys.NUMBER_SEVEN,
            text: 'sete',
            pronunciation_ipa: '/ˈsɛt͡ʃi/',
            pronunciation_simple: '/ˈseh-chee/',
        },
        {
            key: PhraseKeys.NUMBER_EIGHT,
            text: 'oito',
            pronunciation_ipa: '/ˈojtu/',
            pronunciation_simple: '/ˈoy-tu/',
        },
        {
            key: PhraseKeys.NUMBER_NINE,
            text: 'nove',
            pronunciation_ipa: '/ˈnɔvi/',
            pronunciation_simple: '/ˈno-vee/',
        },
        {
            key: PhraseKeys.NUMBER_TEN,
            text: 'dez',
            pronunciation_ipa: '/dɛz/',
            pronunciation_simple: '/dez/',
        },
    ],
};
