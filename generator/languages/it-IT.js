import { PhraseKeys } from '../types.js';

export const itIT = {
    provider: 'google',
    langCode: 'it-IT',
    voice: {
        name: 'it-IT-Neural2-C',
        ssmlGender: 'MALE',
    },
    phrases: [
        // Greetings & Politeness
        {
            key: PhraseKeys.GREETING_HELLO,
            text: 'Ciao!',
            pronunciation_ipa: '/ˈt͡ʃa.o/',
            pronunciation_simple: '/ˈcha-o/',
        },
        {
            key: PhraseKeys.GREETING_GOOD_DAY,
            text: 'Buongiorno!',
            pronunciation_ipa: '/bwɔnˈdʒorno/',
            pronunciation_simple: '/bwon-ˈjor-no/',
        },
        {
            key: PhraseKeys.FAREWELL_BYE,
            text: 'A dopo!',
            pronunciation_ipa: '/a ˈdɔpo/',
            pronunciation_simple: '/a ˈdo-po/',
        },
        {
            key: PhraseKeys.POLITENESS_PLEASE,
            text: 'Prego!',
            pronunciation_ipa: '/ˈprɛɡo/',
            pronunciation_simple: '/ˈpre-go/',
            note: 'Reply to “grazie”.',
        },
        {
            key: PhraseKeys.POLITENESS_THANK_YOU,
            text: 'Grazie!',
            pronunciation_ipa: '/ˈɡrat.t͡sje/',
            pronunciation_simple: '/ˈgra-tsye/',
        },
        {
            key: PhraseKeys.POLITENESS_MANY_THANKS,
            text: 'Grazie mille!',
            pronunciation_ipa: '/ˈɡrat.t͡sje ˈmille/',
            pronunciation_simple: '/ˈgra-tsye ˈmil-le/',
        },
        {
            key: PhraseKeys.CONFIRMATION_YES,
            text: 'Sì',
            pronunciation_ipa: '/si/',
            pronunciation_simple: '/see/',
        },
        {
            key: PhraseKeys.CONFIRMATION_NO,
            text: 'No',
            pronunciation_ipa: '/nɔ/',
            pronunciation_simple: '/noh/',
        },
        {
            key: PhraseKeys.POLITENESS_EXCUSE_ME,
            text: 'Scusa',
            pronunciation_ipa: '/ˈskuːza/',
            pronunciation_simple: '/ˈskuu-za/',
            note: 'Informal; polite: “Scusi”.',
        },

        // Introduction
        {
            key: PhraseKeys.INTRODUCTION_MY_NAME,
            text: 'Mi chiamo …',
            pronunciation_ipa: '/mi ˈkjamo/',
            pronunciation_simple: '/mi ˈkya-mo/',
        },
        {
            key: PhraseKeys.INTRODUCTION_NICE_TO_MEET,
            text: 'Piacere!',
            pronunciation_ipa: '/pjaˈt͡ʃeːre/',
            pronunciation_simple: '/pya-ˈche-re/',
        },
        {
            key: PhraseKeys.INTRODUCTION_WHATS_YOUR_NAME,
            text: 'Come ti chiami?',
            pronunciation_ipa: '/ˈkome ti ˈkjami/',
            pronunciation_simple: '/ˈko-me ti ˈkya-mi/',
        },

        // Communication
        {
            key: PhraseKeys.COMMUNICATION_DONT_UNDERSTAND,
            text: 'Non capisco.',
            pronunciation_ipa: '/non kaˈpisko/',
            pronunciation_simple: '/non ka-ˈpees-ko/',
        },
        {
            key: PhraseKeys.COMMUNICATION_SPEAK_ENGLISH,
            text: 'Parla inglese?',
            pronunciation_ipa: '/ˈparla iŋˈɡleze/',
            pronunciation_simple: '/ˈpar-la ing-ˈle-ze/',
        },
        {
            key: PhraseKeys.COMMUNICATION_SPEAK_SLOWER,
            text: "Un po' più piano, per favore.",
            pronunciation_ipa: '/um pɔ pjʊ ˈpjano per faˈvoːre/',
            pronunciation_simple: '/oon po pyoo ˈpya-no, per fa-ˈvo-re/',
        },
        {
            key: PhraseKeys.COMMUNICATION_LIMITED_LANGUAGE,
            text: 'Il mio italiano non è granché.',
            pronunciation_ipa: '/il ˈmi.o italiˈaːno non ɛ ɡraŋˈke/',
            pronunciation_simple: '/il ˈmee-o ee-ta-lya-no non eh gran-ˈkeh/',
        },
        {
            key: PhraseKeys.COMMUNICATION_HOW_DO_YOU_SAY,
            text: 'Come si dice … in italiano?',
            pronunciation_ipa: '/ˈkome si ˈdit͡ʃe in italiˈaːno/',
            pronunciation_simple: '/ˈko-me see ˈdee-che in ee-ta-lya-no/',
        },

        // Food & Dining
        {
            key: PhraseKeys.REQUEST_MENU,
            text: 'Il menù, per favore.',
            pronunciation_ipa: '/il meˈnu per faˈvoːre/',
            pronunciation_simple: '/eel me-ˈnu, per fa-ˈvo-re/',
        },
        {
            key: PhraseKeys.REQUEST_COFFEE,
            text: 'Caffè',
            pronunciation_ipa: '/kafˈfɛ/',
            pronunciation_simple: '/kaf-ˈfeh/',
        },
        {
            key: PhraseKeys.REQUEST_WATER,
            text: 'Acqua',
            pronunciation_ipa: '/ˈakkwa/',
            pronunciation_simple: '/ˈak-qua/',
        },
        {
            key: PhraseKeys.REQUEST_PLEASE,
            text: 'per favore',
            pronunciation_ipa: '/per faˈvoːre/',
            pronunciation_simple: '/per fa-ˈvo-re/',
        },
        {
            key: PhraseKeys.REQUEST_BILL,
            text: 'Il conto, per favore.',
            pronunciation_ipa: '/il ˈkonto per faˈvoːre/',
            pronunciation_simple: '/eel ˈkon-to, per fa-ˈvo-re/',
        },
        {
            key: PhraseKeys.DINING_VEGETARIAN,
            text: 'Sono vegetariano/a.',
            pronunciation_ipa: '/ˈsoːno ved͡ʒetaˈrjano(a)/',
            pronunciation_simple: '/ˈso-no ve-je-ta-ˈrya-no(-a)/',
            note: '“-a” for female.',
        },
        {
            key: PhraseKeys.DINING_DELICIOUS,
            text: 'Era buonissimo!',
            pronunciation_ipa: '/ˈeːra bwoˈnisːimo/',
            pronunciation_simple: '/ˈeh-ra bwo-ˈnee-see-mo/',
        },
        {
            key: PhraseKeys.DINING_YUMMY,
            text: 'È davvero buono!',
            pronunciation_ipa: '/ɛ davˈvɛro ˈbwɔno/',
            pronunciation_simple: '/eh dav-ˈve-ro ˈbwo-no/',
        },

        // Navigation
        {
            key: PhraseKeys.NAVIGATION_TRAIN_STATION,
            text: 'Dov’è la stazione?',
            pronunciation_ipa: '/doˈvɛ la statˈtsjoːne/',
            pronunciation_simple: '/do-ˈveh la sta-ˈtsyo-ne/',
        },
        {
            key: PhraseKeys.NAVIGATION_RESTROOM,
            text: 'Dov’è il bagno?',
            pronunciation_ipa: '/doˈvɛ il ˈbaɲɲo/',
            pronunciation_simple: '/do-ˈveh il ˈban-nyo/',
        },
        {
            key: PhraseKeys.NAVIGATION_ATM,
            text: 'Dov’è il bancomat?',
            pronunciation_ipa: '/doˈvɛ il ˈbaŋkomat/',
            pronunciation_simple: '/do-ˈveh il ˈban-ko-mat/',
        },

        // Shopping
        {
            key: PhraseKeys.SHOPPING_HOW_MUCH,
            text: 'Quanto costa?',
            pronunciation_ipa: '/ˈkwanto ˈkɔsta/',
            pronunciation_simple: '/ˈkwan-to ˈkos-ta/',
        },
        {
            key: PhraseKeys.SHOPPING_PAY_BY_CARD,
            text: 'Posso pagare con la carta?',
            pronunciation_ipa: '/ˈposso paˈɡaːre kon la ˈkarta/',
            pronunciation_simple: '/ˈpos-so pa-ˈga-re kon la ˈkar-ta/',
        },
        {
            key: PhraseKeys.SHOPPING_PAY_BY_CASH,
            text: 'Pago in contanti.',
            pronunciation_ipa: '/ˈpaɡo in konˈtanti/',
            pronunciation_simple: '/ˈpa-go in kon-ˈtan-tee/',
        },

        // Emergency
        {
            key: PhraseKeys.EMERGENCY_HELP,
            text: 'Aiuto!',
            pronunciation_ipa: '/aiˈuːto/',
            pronunciation_simple: '/ai-ˈyoo-to/',
        },
        {
            key: PhraseKeys.EMERGENCY_DOCTOR,
            text: 'Ho bisogno di un medico!',
            pronunciation_ipa: '/o biˈzoɲɲo di un ˈmɛdiko/',
            pronunciation_simple: '/o bee-ˈzohn-nyo dee oon ˈme-dee-ko/',
        },
        {
            key: PhraseKeys.EMERGENCY_POLICE,
            text: 'Chiami la polizia!',
            pronunciation_ipa: '/ˈkjaːmi la poliˈt͡sia/',
            pronunciation_simple: '/ˈkya-mee la po-li-ˈtsee-a/',
        },

        // Numbers 1-10
        {
            key: PhraseKeys.NUMBER_ONE,
            text: 'uno',
            pronunciation_ipa: '/ˈuːno/',
            pronunciation_simple: '/ˈoo-no/',
        },
        {
            key: PhraseKeys.NUMBER_TWO,
            text: 'due',
            pronunciation_ipa: '/ˈduːe/',
            pronunciation_simple: '/ˈdoo-eh/',
        },
        {
            key: PhraseKeys.NUMBER_THREE,
            text: 'tre',
            pronunciation_ipa: '/tre/',
            pronunciation_simple: '/treh/',
        },
        {
            key: PhraseKeys.NUMBER_FOUR,
            text: 'quattro',
            pronunciation_ipa: '/ˈkwattro/',
            pronunciation_simple: '/ˈkwa-tro/',
        },
        {
            key: PhraseKeys.NUMBER_FIVE,
            text: 'cinque',
            pronunciation_ipa: '/ˈt͡ʃiŋkwe/',
            pronunciation_simple: '/ˈchin-kwe/',
        },
        {
            key: PhraseKeys.NUMBER_SIX,
            text: 'sei',
            pronunciation_ipa: '/sɛi/',
            pronunciation_simple: '/say/',
        },
        {
            key: PhraseKeys.NUMBER_SEVEN,
            text: 'sette',
            pronunciation_ipa: '/ˈsɛtte/',
            pronunciation_simple: '/ˈset-te/',
        },
        {
            key: PhraseKeys.NUMBER_EIGHT,
            text: 'otto',
            pronunciation_ipa: '/ˈɔtto/',
            pronunciation_simple: '/ˈot-to/',
        },
        {
            key: PhraseKeys.NUMBER_NINE,
            text: 'nove',
            pronunciation_ipa: '/ˈnɔve/',
            pronunciation_simple: '/ˈno-veh/',
        },
        {
            key: PhraseKeys.NUMBER_TEN,
            text: 'dieci',
            pronunciation_ipa: '/ˈdjɛt͡ʃi/',
            pronunciation_simple: '/ˈdye-chee/',
        },
    ],
};
