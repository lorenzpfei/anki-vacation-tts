import { PhraseKeys } from '../types.js';

export const frFR = {
    provider: 'google',
    langCode: 'fr-FR',
    voice: {
        name: 'fr-FR-Neural2-D',
        ssmlGender: 'MALE',
    },
    phrases: [
        // Greetings & Politeness
        {
            key: PhraseKeys.GREETING_HELLO,
            text: 'Salut !',
            pronunciation_ipa: '/saly/',
            pronunciation_simple: '/sa-ly/',
        },
        {
            key: PhraseKeys.GREETING_GOOD_DAY,
            text: 'Bonjour !',
            pronunciation_ipa: '/bɔ̃ʒuʁ/',
            pronunciation_simple: '/bon-ˈʒur/',
            note: 'Usable all daytime.',
        },
        {
            key: PhraseKeys.FAREWELL_BYE,
            text: 'À plus !',
            pronunciation_ipa: '/a ply/',
            pronunciation_simple: '/a plu/',
        },
        {
            key: PhraseKeys.POLITENESS_PLEASE,
            text: 'De rien !',
            pronunciation_ipa: '/də ʁjɛ̃/',
            pronunciation_simple: '/də ryehn/',
            note: 'Reply to “merci”.',
        },
        {
            key: PhraseKeys.POLITENESS_THANK_YOU,
            text: 'Merci !',
            pronunciation_ipa: '/mɛʁsi/',
            pronunciation_simple: '/mer-see/',
        },
        {
            key: PhraseKeys.POLITENESS_MANY_THANKS,
            text: 'Merci beaucoup !',
            pronunciation_ipa: '/mɛʁsi boˈku/',
            pronunciation_simple: '/mer-see bo-ˈkoo/',
        },
        {
            key: PhraseKeys.CONFIRMATION_YES,
            text: 'Oui',
            pronunciation_ipa: '/wi/',
            pronunciation_simple: '/wee/',
        },
        {
            key: PhraseKeys.CONFIRMATION_NO,
            text: 'Non',
            pronunciation_ipa: '/nɔ̃/',
            pronunciation_simple: '/noh~/',
        },
        {
            key: PhraseKeys.POLITENESS_EXCUSE_ME,
            text: 'Pardon',
            pronunciation_ipa: '/paʁdɔ̃/',
            pronunciation_simple: '/par-don~/',
        },

        // Introduction
        {
            key: PhraseKeys.INTRODUCTION_MY_NAME,
            text: 'Je m’appelle …',
            pronunciation_ipa: '/ʒə mapɛl/',
            pronunciation_simple: '/zhə ma-pel/',
        },
        {
            key: PhraseKeys.INTRODUCTION_NICE_TO_MEET,
            text: 'Enchanté(e) !',
            pronunciation_ipa: '/ɑ̃ʃɑ̃te/',
            pronunciation_simple: '/on-shon-ˈteh/',
            note: 'Add (e) if you’re female.',
        },
        {
            key: PhraseKeys.INTRODUCTION_WHATS_YOUR_NAME,
            text: 'Tu t’appelles comment ?',
            pronunciation_ipa: '/ty tapɛl kɔmɑ̃/',
            pronunciation_simple: '/tu ta-pel ko-mon~/',
        },

        // Communication
        {
            key: PhraseKeys.COMMUNICATION_DONT_UNDERSTAND,
            text: 'Je comprends pas.',
            pronunciation_ipa: '/ʒə kɔ̃pʁɑ̃ pa/',
            pronunciation_simple: '/zhə kon~-pran~ pa/',
        },
        {
            key: PhraseKeys.COMMUNICATION_SPEAK_ENGLISH,
            text: 'Vous parlez anglais ?',
            pronunciation_ipa: '/vu paʁle ɑ̃ɡlɛ/',
            pronunciation_simple: '/voo par-lay on-glay?/',
        },
        {
            key: PhraseKeys.COMMUNICATION_SPEAK_SLOWER,
            text: 'Plus lentement, s’il vous plaît.',
            pronunciation_ipa: '/ply lɑ̃tmɑ̃ sil vu plɛ/',
            pronunciation_simple: '/plü lon~-tmon~ seel voo pleh/',
        },
        {
            key: PhraseKeys.COMMUNICATION_LIMITED_LANGUAGE,
            text: 'Je parle pas très bien français.',
            pronunciation_ipa: '/ʒə paʁl pa tʁɛ bjɛ̃ fʁɑ̃sɛ/',
            pronunciation_simple: '/zhə parl pa tre byehn fron-seh/',
        },
        {
            key: PhraseKeys.COMMUNICATION_HOW_DO_YOU_SAY,
            text: 'Comment on dit … en français ?',
            pronunciation_ipa: '/kɔmɑ̃ ɔ̃ di ɑ̃ fʁɑ̃sɛ/',
            pronunciation_simple: '/ko-mon~ on dee on fron-seh?/',
        },

        // Food & Dining
        {
            key: PhraseKeys.REQUEST_MENU,
            text: 'La carte, s’il vous plaît.',
            pronunciation_ipa: '/la kaʁt sil vu plɛ/',
            pronunciation_simple: '/la kart seel voo pleh/',
        },
        {
            key: PhraseKeys.REQUEST_COFFEE,
            text: 'Café',
            pronunciation_ipa: '/kafe/',
            pronunciation_simple: '/ka-feh/',
        },
        {
            key: PhraseKeys.REQUEST_WATER,
            text: 'Eau',
            pronunciation_ipa: '/o/',
            pronunciation_simple: '/oh/',
        },
        {
            key: PhraseKeys.REQUEST_PLEASE,
            text: 's’il vous plaît',
            pronunciation_ipa: '/sil vu plɛ/',
            pronunciation_simple: '/seel voo pleh/',
        },
        {
            key: PhraseKeys.REQUEST_BILL,
            text: 'L’addition, s’il vous plaît.',
            pronunciation_ipa: '/ladisjɔ̃ sil vu plɛ/',
            pronunciation_simple: '/la-dee-syon~ seel voo pleh/',
        },
        {
            key: PhraseKeys.DINING_VEGETARIAN,
            text: 'Je suis végétarien(ne).',
            pronunciation_ipa: '/ʒə sɥi veʒetaʁjɛn/',
            pronunciation_simple: '/zhə swee ve-zhe-ta-ryen/',
            note: 'Add -(ne) if female.',
        },
        {
            key: PhraseKeys.DINING_DELICIOUS,
            text: 'C’était délicieux !',
            pronunciation_ipa: '/sete delisjø/',
            pronunciation_simple: '/seh-teh de-lee-syuh/',
        },
        {
            key: PhraseKeys.DINING_YUMMY,
            text: 'C’est trop bon !',
            pronunciation_ipa: '/se tʁo bɔ̃/',
            pronunciation_simple: '/seh tro bon~/',
        },

        // Navigation
        {
            key: PhraseKeys.NAVIGATION_TRAIN_STATION,
            text: 'Où est la gare ?',
            pronunciation_ipa: '/u ɛ la ɡaʁ/',
            pronunciation_simple: '/oo eh la gar/',
        },
        {
            key: PhraseKeys.NAVIGATION_RESTROOM,
            text: 'Où sont les toilettes ?',
            pronunciation_ipa: '/u sɔ̃ le twalɛt/',
            pronunciation_simple: '/oo son~ lay twa-let/',
        },
        {
            key: PhraseKeys.NAVIGATION_ATM,
            text: 'Où est le distributeur ?',
            pronunciation_ipa: '/u ɛ lə distʁibyˈtœʁ/',
            pronunciation_simple: '/oo eh lə dis-tri-bü-ˈtœr/',
        },

        // Shopping
        {
            key: PhraseKeys.SHOPPING_HOW_MUCH,
            text: 'C’est combien ?',
            pronunciation_ipa: '/se kɔ̃bjɛ̃/',
            pronunciation_simple: '/seh kon~-byehn?/',
        },
        {
            key: PhraseKeys.SHOPPING_PAY_BY_CARD,
            text: 'Je peux payer par carte ?',
            pronunciation_ipa: '/ʒə pø peje paʁ kaʁt/',
            pronunciation_simple: '/zhə pœ pay-yay par kart?/',
        },
        {
            key: PhraseKeys.SHOPPING_PAY_BY_CASH,
            text: 'Je paie en espèces.',
            pronunciation_ipa: '/ʒə pɛ ɑ̃n ɛspɛs/',
            pronunciation_simple: '/zhə peh on es-pess/',
        },

        // Emergency
        {
            key: PhraseKeys.EMERGENCY_HELP,
            text: 'Au secours !',
            pronunciation_ipa: '/o səkuʁ/',
            pronunciation_simple: '/oh sə-ˈkoor/',
        },
        {
            key: PhraseKeys.EMERGENCY_DOCTOR,
            text: 'J’ai besoin d’un médecin !',
            pronunciation_ipa: '/ʒe bəzwɛ̃ dœ̃ medsɛ̃/',
            pronunciation_simple: '/zhay bə-zwehn dun med-senh/',
        },
        {
            key: PhraseKeys.EMERGENCY_POLICE,
            text: 'Appelez la police !',
            pronunciation_ipa: '/ap(ə)le la pɔlis/',
            pronunciation_simple: '/a-peh-lay la po-lees/',
        },

        // Numbers 1-10
        {
            key: PhraseKeys.NUMBER_ONE,
            text: 'un',
            pronunciation_ipa: '/œ̃/',
            pronunciation_simple: '/uhn~/',
        },
        {
            key: PhraseKeys.NUMBER_TWO,
            text: 'deux',
            pronunciation_ipa: '/dø/',
            pronunciation_simple: '/døh/',
        },
        {
            key: PhraseKeys.NUMBER_THREE,
            text: 'trois',
            pronunciation_ipa: '/tʁwa/',
            pronunciation_simple: '/trwah/',
        },
        {
            key: PhraseKeys.NUMBER_FOUR,
            text: 'quatre',
            pronunciation_ipa: '/katʁ/',
            pronunciation_simple: '/katr/',
        },
        {
            key: PhraseKeys.NUMBER_FIVE,
            text: 'cinq',
            pronunciation_ipa: '/sɛ̃k/',
            pronunciation_simple: '/sank~/',
        },
        {
            key: PhraseKeys.NUMBER_SIX,
            text: 'six',
            pronunciation_ipa: '/sis/',
            pronunciation_simple: '/sees/',
        },
        {
            key: PhraseKeys.NUMBER_SEVEN,
            text: 'sept',
            pronunciation_ipa: '/sɛt/',
            pronunciation_simple: '/set/',
        },
        {
            key: PhraseKeys.NUMBER_EIGHT,
            text: 'huit',
            pronunciation_ipa: '/ɥit/',
            pronunciation_simple: '/hweet/',
        },
        {
            key: PhraseKeys.NUMBER_NINE,
            text: 'neuf',
            pronunciation_ipa: '/nœf/',
            pronunciation_simple: '/nœf/',
        },
        {
            key: PhraseKeys.NUMBER_TEN,
            text: 'dix',
            pronunciation_ipa: '/dis/',
            pronunciation_simple: '/dees/',
        },
    ],
};
