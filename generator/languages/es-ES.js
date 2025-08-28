import { PhraseKeys } from '../types.js';

export const esES = {
    provider: 'google',
    langCode: 'es-ES',
    voice: {
        name: 'es-ES-Neural2-B',
        ssmlGender: 'MALE',
    },
    phrases: [
        // Greetings & Politeness (Spain)
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
            note: 'Saludo coloquial válido todo el día.',
        },
        {
            key: PhraseKeys.FAREWELL_BYE,
            text: '¡Hasta luego!',
            pronunciation_ipa: '/asta ˈlweɣo/',
            pronunciation_simple: '/as-ta ˈlwe-go/',
        },
        {
            key: PhraseKeys.POLITENESS_PLEASE,
            text: 'De nada',
            pronunciation_ipa: '/de ˈnaða/',
            pronunciation_simple: '/de ˈna-da/',
            note: 'Respuesta a “gracias” (= “con gusto”).',
        },
        {
            key: PhraseKeys.POLITENESS_THANK_YOU,
            text: 'Gracias',
            pronunciation_ipa: '/ˈɡɾaθjas/',
            pronunciation_simple: '/ˈgra-thyas/',
        },
        {
            key: PhraseKeys.POLITENESS_MANY_THANKS,
            text: '¡Mil gracias!',
            pronunciation_ipa: '/mil ˈɡɾaθjas/',
            pronunciation_simple: '/mil ˈgra-thyas/',
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
            text: '¡Encantado/a!',
            pronunciation_ipa: '/eŋkanˈtaðo(a)/',
            pronunciation_simple: '/en-kan-ˈta-do(-a)/',
            note: '“Encantado” si eres hombre; “Encantada” si eres mujer.',
        },
        {
            key: PhraseKeys.INTRODUCTION_WHATS_YOUR_NAME,
            text: '¿Cómo te llamas?',
            pronunciation_ipa: '/ˈkomo te ˈʝamas/',
            pronunciation_simple: '/ˈko-mo te ˈya-mas/',
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
            text: '¿Hablas inglés?',
            pronunciation_ipa: '/ˈaβlas iŋˈɡles/',
            pronunciation_simple: '/ˈa-blas ing-ˈgles/',
        },
        {
            key: PhraseKeys.COMMUNICATION_SPEAK_SLOWER,
            text: '¿Puedes hablar un poco más despacio, porfa?',
            pronunciation_ipa: '/ˈpweðes aˈβlaɾ un ˈpoko mas ðesˈpasjo ˈpoɾfa/',
            pronunciation_simple:
                '/ˈpwe-des a-ˈblar un ˈpo-ko mas des-ˈpa-syo ˈpor-fa/',
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
            pronunciation_ipa: '/ˈkomo se ˈðiθe en espaˈɲol/',
            pronunciation_simple: '/ˈko-mo se ˈdi-the en es-pa-ˈnyol/',
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
            note: 'Forma coloquial de «por favor» muy usada en España.',
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
            pronunciation_ipa: '/soj βegetaˈɾjano(a)/',
            pronunciation_simple: '/soy ve-he-ta-ˈrya-no(-a)/',
            note: '“-a” para femenino.',
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
            text: '¿Dónde está la estación?',
            pronunciation_ipa: '/ˈdonde esˈta la estaˈθjon/',
            pronunciation_simple: '/ˈdon-de es-ˈta la es-ta-ˈthyon/',
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
            text: '¿Cuánto cuesta?',
            pronunciation_ipa: '/ˈkwanto ˈkwesta/',
            pronunciation_simple: '/ˈkwan-to ˈkwes-ta/',
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
            pronunciation_simple: '/a-ˈyu-da/',
        },
        {
            key: PhraseKeys.EMERGENCY_DOCTOR,
            text: '¡Necesito un médico!',
            pronunciation_ipa: '/neθeˈθito un ˈmeðiko/',
            pronunciation_simple: '/ne-the-ˈthi-to un ˈme-di-ko/',
        },
        {
            key: PhraseKeys.EMERGENCY_POLICE,
            text: '¡Llame a la policía!',
            pronunciation_ipa: '/ˈʝame a la poliˈθia/',
            pronunciation_simple: '/ˈya-me a la po-li-ˈthia/',
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
            pronunciation_ipa: '/ˈθiŋko/',
            pronunciation_simple: '/ˈthin-ko/',
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
            pronunciation_ipa: '/ˈdjeθ/',
            pronunciation_simple: '/ˈdye-th/',
        },
    ],
};
