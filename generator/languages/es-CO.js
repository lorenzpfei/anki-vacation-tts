import { PhraseKeys } from '../types.js';

export const esCO = {
    provider: 'google',
    langCode: 'es-US',
    voice: {
        name: 'es-US-Neural2-B',
        ssmlGender: 'MALE',
    },
    phrases: [
        // Greetings & Politeness
        {
            key: PhraseKeys.GREETING_HELLO,
            text: '¡Hola!',
            pronunciation_ipa: '/ˈola/',
            pronunciation_simple: '/ˈo-la/',
        },
        {
            key: PhraseKeys.GREETING_GOOD_DAY,
            text: '¡Buenas!',
            pronunciation_ipa: '/ˈbwenas/',
            pronunciation_simple: '/ˈbwe-nas/',
            note: 'Saludo coloquial que funciona todo el día.',
        },
        {
            key: PhraseKeys.FAREWELL_BYE,
            text: '¡Chao!',
            pronunciation_ipa: '/ˈt͡ʃao/',
            pronunciation_simple: '/ˈchao/',
        },
        {
            key: PhraseKeys.POLITENESS_PLEASE,
            text: 'Con gusto',
            pronunciation_ipa: '/koŋ ˈɡusto/',
            pronunciation_simple: '/kon ˈgus-to/',
            note: 'Respuesta a “gracias” (= “de nada”). Muy común en Colombia.',
        },
        {
            key: PhraseKeys.POLITENESS_THANK_YOU,
            text: 'Gracias',
            pronunciation_ipa: '/ˈɡɾasjas/',
            pronunciation_simple: '/ˈgra-syas/',
        },
        {
            key: PhraseKeys.POLITENESS_MANY_THANKS,
            text: '¡Mil gracias!',
            pronunciation_ipa: '/mil ˈɡɾasjas/',
            pronunciation_simple: '/mil ˈgra-syas/',
        },
        {
            key: PhraseKeys.CONFIRMATION_YES,
            text: 'Sí',
            pronunciation_ipa: '/si/',
            pronunciation_simple: '/si/',
        },
        {
            key: PhraseKeys.CONFIRMATION_NO,
            text: 'No',
            pronunciation_ipa: '/no/',
            pronunciation_simple: '/no/',
        },
        {
            key: PhraseKeys.POLITENESS_EXCUSE_ME,
            text: 'Perdón',
            pronunciation_ipa: '/peɾˈðon/',
            pronunciation_simple: '/per-ˈdon/',
        },

        // Introduction
        {
            key: PhraseKeys.INTRODUCTION_MY_NAME,
            text: 'Me llamo …',
            pronunciation_ipa: '/me ˈʝamo/',
            pronunciation_simple: '/me ˈya-mo/',
        },
        {
            key: PhraseKeys.INTRODUCTION_NICE_TO_MEET,
            text: '¡Mucho gusto!',
            pronunciation_ipa: '/ˈmut͡ʃo ˈɡusto/',
            pronunciation_simple: '/ˈmu-cho ˈgus-to/',
        },
        {
            key: PhraseKeys.INTRODUCTION_WHATS_YOUR_NAME,
            text: '¿Cómo te llamas?',
            pronunciation_ipa: '/ˈkomo te ˈʝamas/',
            pronunciation_simple: '/ˈko-mo te ˈya-mas/',
            note: 'Formal: «¿Cómo se llama?»',
        },

        // Communication
        {
            key: PhraseKeys.COMMUNICATION_DONT_UNDERSTAND,
            text: 'No entiendo.',
            pronunciation_ipa: '/no enˈtjendo/',
            pronunciation_simple: '/no en-ˈtyen-do/',
        },
        {
            key: PhraseKeys.COMMUNICATION_SPEAK_ENGLISH,
            text: '¿Habla inglés?',
            pronunciation_ipa: '/ˈaβla iŋˈgles/',
            pronunciation_simple: '/ˈa-bla ing-ˈgles/',
        },
        {
            key: PhraseKeys.COMMUNICATION_SPEAK_SLOWER,
            text: '¿Puede hablar un poquito más despacio, porfa?',
            pronunciation_ipa:
                '/ˈpweðe aβˈlaɾ un poˈkito mas ðesˈpasjo ˈpoɾfa/',
            pronunciation_simple:
                '/ˈpwe-de ab-ˈlar un po-ˈkee-to mas des-ˈpa-syo ˈpor-fa/',
        },
        {
            key: PhraseKeys.COMMUNICATION_LIMITED_LANGUAGE,
            text: 'Mi español no es muy bueno.',
            pronunciation_ipa: '/mi espaˈɲol no es muj ˈbweno/',
            pronunciation_simple: '/mi es-pa-ˈnyol no es muy ˈbwe-no/',
        },
        {
            key: PhraseKeys.COMMUNICATION_HOW_DO_YOU_SAY,
            text: '¿Cómo se dice … en español?',
            pronunciation_ipa: '/ˈkomo se ˈdise en espaˈɲol/',
            pronunciation_simple: '/ˈko-mo se ˈdee-se en es-pa-ˈnyol/',
        },

        // Food & Dining
        {
            key: PhraseKeys.REQUEST_MENU,
            text: 'La carta, porfa.',
            pronunciation_ipa: '/la ˈkaɾta ˈpoɾfa/',
            pronunciation_simple: '/la ˈkar-ta ˈpor-fa/',
        },
        {
            key: PhraseKeys.REQUEST_COFFEE,
            text: 'Café',
            pronunciation_ipa: '/kaˈfe/',
            pronunciation_simple: '/ka-ˈfe/',
            note: 'En Colombia el café negro se pide también como «tinto».',
        },
        {
            key: PhraseKeys.REQUEST_WATER,
            text: 'Agua',
            pronunciation_ipa: '/ˈaɣwa/',
            pronunciation_simple: '/ˈa-gwa/',
        },
        {
            key: PhraseKeys.REQUEST_PLEASE,
            text: 'porfa',
            pronunciation_ipa: '/ˈpoɾfa/',
            pronunciation_simple: '/ˈpor-fa/',
            note: 'Coloquial de «por favor», muy usado.',
        },
        {
            key: PhraseKeys.REQUEST_BILL,
            text: 'La cuenta, porfa.',
            pronunciation_ipa: '/la ˈkwenta ˈpoɾfa/',
            pronunciation_simple: '/la ˈkwen-ta ˈpor-fa/',
        },
        {
            key: PhraseKeys.DINING_VEGETARIAN,
            text: 'Soy vegetariano/a.',
            pronunciation_ipa: '/soj βeɣetaˈɾjano(a)/',
            pronunciation_simple: '/soy ve-he-ta-ˈree-a-no(-a)/',
            note: '«-a» para femenino.',
        },
        {
            key: PhraseKeys.DINING_DELICIOUS,
            text: '¡Estaba riquísimo!',
            pronunciation_ipa: '/esˈtaβa riˈkisimo/',
            pronunciation_simple: '/es-ˈta-ba ree-ˈkee-see-mo/',
        },
        {
            key: PhraseKeys.DINING_YUMMY,
            text: '¡Está muy rico!',
            pronunciation_ipa: '/esˈta muj ˈriko/',
            pronunciation_simple: '/es-ˈta muy ˈree-ko/',
        },

        // Navigation
        {
            key: PhraseKeys.NAVIGATION_TRAIN_STATION,
            text: '¿Dónde queda la estación?',
            pronunciation_ipa: '/ˈdonde ˈkeða la estaˈsjon/',
            pronunciation_simple: '/ˈdon-de ˈke-da la es-ta-ˈsion/',
        },
        {
            key: PhraseKeys.NAVIGATION_RESTROOM,
            text: '¿Dónde está el baño?',
            pronunciation_ipa: '/ˈdonde esˈta el ˈbaɲo/',
            pronunciation_simple: '/ˈdon-de es-ˈta el ˈba-nyo/',
        },
        {
            key: PhraseKeys.NAVIGATION_ATM,
            text: '¿Dónde hay un cajero?',
            pronunciation_ipa: '/ˈdonde aj un kaˈxeɾo/',
            pronunciation_simple: '/ˈdon-de ai un ka-ˈhe-ro/',
        },

        // Shopping
        {
            key: PhraseKeys.SHOPPING_HOW_MUCH,
            text: '¿Cuánto vale esto?',
            pronunciation_ipa: '/ˈkwanto ˈβale ˈesto/',
            pronunciation_simple: '/ˈkwan-to ˈba-le ˈes-to/',
        },
        {
            key: PhraseKeys.SHOPPING_PAY_BY_CARD,
            text: '¿Puedo pagar con tarjeta?',
            pronunciation_ipa: '/ˈpweðo paˈɣaɾ kon taɾˈxeta/',
            pronunciation_simple: '/ˈpwe-do pa-ˈgar kon tar-ˈhe-ta/',
        },
        {
            key: PhraseKeys.SHOPPING_PAY_BY_CASH,
            text: 'Pago en efectivo.',
            pronunciation_ipa: '/ˈpaɣo en eˈfektiβo/',
            pronunciation_simple: '/ˈpa-go en e-fek-ˈti-vo/',
        },

        // Emergency
        {
            key: PhraseKeys.EMERGENCY_HELP,
            text: '¡Ayuda!',
            pronunciation_ipa: '/aˈʝuða/',
            pronunciation_simple: '/a-ˈyu-tha/',
        },
        {
            key: PhraseKeys.EMERGENCY_DOCTOR,
            text: '¡Necesito un médico!',
            pronunciation_ipa: '/neseˈsito un ˈmeðiko/',
            pronunciation_simple: '/ne-se-ˈsee-toon ˈme-di-ko/',
        },
        {
            key: PhraseKeys.EMERGENCY_POLICE,
            text: '¡Llame a la policía!',
            pronunciation_ipa: '/ˈʝame a la poliˈsia/',
            pronunciation_simple: '/ˈya-me a la po-li-ˈsee-a/',
        },

        // Numbers 1-10
        {
            key: PhraseKeys.NUMBER_ONE,
            text: 'uno',
            pronunciation_ipa: '/ˈuno/',
            pronunciation_simple: '/ˈu-no/',
        },
        {
            key: PhraseKeys.NUMBER_TWO,
            text: 'dos',
            pronunciation_ipa: '/dos/',
            pronunciation_simple: '/dos/',
        },
        {
            key: PhraseKeys.NUMBER_THREE,
            text: 'tres',
            pronunciation_ipa: '/tɾes/',
            pronunciation_simple: '/tres/',
        },
        {
            key: PhraseKeys.NUMBER_FOUR,
            text: 'cuatro',
            pronunciation_ipa: '/ˈkwatɾo/',
            pronunciation_simple: '/ˈkwa-tro/',
        },
        {
            key: PhraseKeys.NUMBER_FIVE,
            text: 'cinco',
            pronunciation_ipa: '/ˈsiŋko/',
            pronunciation_simple: '/ˈseen-ko/',
        },
        {
            key: PhraseKeys.NUMBER_SIX,
            text: 'seis',
            pronunciation_ipa: '/sejs/',
            pronunciation_simple: '/says/',
        },
        {
            key: PhraseKeys.NUMBER_SEVEN,
            text: 'siete',
            pronunciation_ipa: '/ˈsjete/',
            pronunciation_simple: '/ˈsye-te/',
        },
        {
            key: PhraseKeys.NUMBER_EIGHT,
            text: 'ocho',
            pronunciation_ipa: '/ˈot͡ʃo/',
            pronunciation_simple: '/ˈo-cho/',
        },
        {
            key: PhraseKeys.NUMBER_NINE,
            text: 'nueve',
            pronunciation_ipa: '/ˈnweβe/',
            pronunciation_simple: '/ˈnwe-be/',
        },
        {
            key: PhraseKeys.NUMBER_TEN,
            text: 'diez',
            pronunciation_ipa: '/djes/',
            pronunciation_simple: '/dyehs/',
        },
    ],
};
