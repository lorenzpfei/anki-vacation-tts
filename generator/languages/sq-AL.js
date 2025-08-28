import { PhraseKeys } from '../types.js';

export const sqAL = {
    langCode: 'sq-AL',
    voice: {
        name: 'sq-AL-IlirNeural',
        ssmlGender: 'MALE',
        provider: 'azure',
    },
    phrases: [
        // Greetings & Politeness
        {
            key: PhraseKeys.GREETING_HELLO,
            text: 'Ç’kemi!',
            pronunciation_ipa: '/ˈt͡ʃcemi/',
            pronunciation_simple: '/ˈche-mi/',
        },
        {
            key: PhraseKeys.GREETING_GOOD_DAY,
            text: 'Përshëndetje!',
            pronunciation_ipa: '/pərʃənˈdɛciem/',
            pronunciation_simple: '/pər-shən-ˈde-tye/',
        },
        {
            key: PhraseKeys.FAREWELL_BYE,
            text: 'Tung!',
            pronunciation_ipa: '/tuŋ/',
            pronunciation_simple: '/toong/',
        },
        {
            key: PhraseKeys.POLITENESS_PLEASE,
            text: "S'ka gjë!",
            pronunciation_ipa: '/ska ɟə/',
            pronunciation_simple: '/ska jyə/',
            note: 'Casual “you’re welcome”.',
        },
        {
            key: PhraseKeys.POLITENESS_THANK_YOU,
            text: 'Faleminderit!',
            pronunciation_ipa: '/falɛminˈdɛɾit/',
            pronunciation_simple: '/fa-le-min-ˈde-rit/',
        },
        {
            key: PhraseKeys.POLITENESS_MANY_THANKS,
            text: 'Shumë faleminderit!',
            pronunciation_ipa: '/ʃumə falɛminˈdɛɾit/',
            pronunciation_simple: '/shoo-mə fa-le-min-ˈde-rit/',
        },
        {
            key: PhraseKeys.CONFIRMATION_YES,
            text: 'Po',
            pronunciation_ipa: '/pɔ/',
            pronunciation_simple: '/po/',
        },
        {
            key: PhraseKeys.CONFIRMATION_NO,
            text: 'Jo',
            pronunciation_ipa: '/jɔ/',
            pronunciation_simple: '/yo/',
        },
        {
            key: PhraseKeys.POLITENESS_EXCUSE_ME,
            text: 'Më fal',
            pronunciation_ipa: '/mə fal/',
            pronunciation_simple: '/mə fal/',
            note: 'Polite plural: “Më falni”.',
        },

        // Introduction
        {
            key: PhraseKeys.INTRODUCTION_MY_NAME,
            text: 'Unë jam …',
            pronunciation_ipa: '/ˈunə jam/',
            pronunciation_simple: '/ˈu-nə yam/',
        },
        {
            key: PhraseKeys.INTRODUCTION_NICE_TO_MEET,
            text: 'Gëzohem!',
            pronunciation_ipa: '/ɡəˈzɔhɛm/',
            pronunciation_simple: '/gə-ˈzo-hem/',
        },
        {
            key: PhraseKeys.INTRODUCTION_WHATS_YOUR_NAME,
            text: 'Si quhesh?',
            pronunciation_ipa: '/si ˈcuhɛʃ/',
            pronunciation_simple: '/see ˈcu-hesh/',
            note: 'Polite: “Si quheni?”',
        },

        // Communication
        {
            key: PhraseKeys.COMMUNICATION_DONT_UNDERSTAND,
            text: "S'e kuptoj.",
            pronunciation_ipa: '/sə kupˈtɔj/',
            pronunciation_simple: '/sə kup-ˈtoy/',
        },
        {
            key: PhraseKeys.COMMUNICATION_SPEAK_ENGLISH,
            text: 'Flisni anglisht?',
            pronunciation_ipa: '/ˈflisni anˈɡliʃt/',
            pronunciation_simple: '/ˈflees-nee ang-ˈlisht?/',
        },
        {
            key: PhraseKeys.COMMUNICATION_SPEAK_SLOWER,
            text: 'Më ngadalë, ju lutem.',
            pronunciation_ipa: '/mə ŋaˈdalə, ju ˈlutɛm/',
            pronunciation_simple: '/mə nga-ˈda-lə, yoo ˈlu-tem/',
        },
        {
            key: PhraseKeys.COMMUNICATION_LIMITED_LANGUAGE,
            text: 'Nuk flas mirë shqip.',
            pronunciation_ipa: '/nuk flas ˈmiɾə ʃcip/',
            pronunciation_simple: '/nuk flas ˈmee-rə shchip/',
        },
        {
            key: PhraseKeys.COMMUNICATION_HOW_DO_YOU_SAY,
            text: 'Si thuhet … në shqip?',
            pronunciation_ipa: '/si ˈθuhɛt nə ʃcip/',
            pronunciation_simple: '/see ˈthu-het nə shchip?/',
        },

        // Food & Dining
        {
            key: PhraseKeys.REQUEST_MENU,
            text: 'Menyja, ju lutem.',
            pronunciation_ipa: '/mɛˈnyja, ju ˈlutɛm/',
            pronunciation_simple: '/me-ˈnyah, yoo ˈlu-tem/',
        },
        {
            key: PhraseKeys.REQUEST_COFFEE,
            text: 'Kafe',
            pronunciation_ipa: '/kaˈfɛ/',
            pronunciation_simple: '/ka-ˈfeh/',
        },
        {
            key: PhraseKeys.REQUEST_WATER,
            text: 'Ujë',
            pronunciation_ipa: '/ˈujə/',
            pronunciation_simple: '/ˈoo-yə/',
        },
        {
            key: PhraseKeys.REQUEST_PLEASE,
            text: 'ju lutem',
            pronunciation_ipa: '/ju ˈlutɛm/',
            pronunciation_simple: '/yoo ˈlu-tem/',
        },
        {
            key: PhraseKeys.REQUEST_BILL,
            text: 'Llogarinë, ju lutem.',
            pronunciation_ipa: '/lɔɡaˈɾinə, ju ˈlutɛm/',
            pronunciation_simple: '/llo-ga-ˈree-nə, yoo ˈlu-tem/',
        },
        {
            key: PhraseKeys.DINING_VEGETARIAN,
            text: 'Jam vegjetarian/e.',
            pronunciation_ipa: '/jam ved͡ʒetaˈɾian(e)/',
            pronunciation_simple: '/yam ve-je-ta-ˈryan(-e)/',
            note: '“-e” for female.',
        },
        {
            key: PhraseKeys.DINING_DELICIOUS,
            text: 'Ishte shumë e shijshme!',
            pronunciation_ipa: '/ˈiʃtɛ ʃum ə ˈʃijʃmə/',
            pronunciation_simple: '/ˈish-te shoom ə ˈsheesh-mə/',
        },
        {
            key: PhraseKeys.DINING_YUMMY,
            text: 'Është shumë e mirë!',
            pronunciation_ipa: '/ˈəʃtə ʃum ə ˈmirə/',
            pronunciation_simple: '/ˈəsh-tə shoom ə ˈmee-rə/',
        },

        // Navigation
        {
            key: PhraseKeys.NAVIGATION_TRAIN_STATION,
            text: 'Ku është stacioni i trenit?',
            pronunciation_ipa: '/ku ˈəʃtə staˈcjɔni i ˈtrɛnit/',
            pronunciation_simple: '/koo ˈəsh-tə sta-ˈtsyoh-ni i ˈtre-nit/',
        },
        {
            key: PhraseKeys.NAVIGATION_RESTROOM,
            text: 'Ku është tualeti?',
            pronunciation_ipa: '/ku ˈəʃtə tuaˈlɛti/',
            pronunciation_simple: '/koo ˈəsh-tə tua-ˈle-ti/',
        },
        {
            key: PhraseKeys.NAVIGATION_ATM,
            text: 'Ku ka bankomat?',
            pronunciation_ipa: '/ku ka baŋkɔˈmat/',
            pronunciation_simple: '/koo ka ban-ko-ˈmat/',
        },

        // Shopping
        {
            key: PhraseKeys.SHOPPING_HOW_MUCH,
            text: 'Sa kushton kjo?',
            pronunciation_ipa: '/sa kuʃˈtɔn cɔ/',
            pronunciation_simple: '/sa kush-ˈton kyo?/',
        },
        {
            key: PhraseKeys.SHOPPING_PAY_BY_CARD,
            text: 'Mund të paguaj me kartë?',
            pronunciation_ipa: '/mund tə paˈɡuaj mɛ ˈkaɾtə/',
            pronunciation_simple: '/moond tə pa-ˈgoo-ai me ˈkar-tə?/',
        },
        {
            key: PhraseKeys.SHOPPING_PAY_BY_CASH,
            text: 'Paguaj me para në dorë.',
            pronunciation_ipa: '/paˈɡuaj mɛ paˈɾa nə dɔɾə/',
            pronunciation_simple: '/pa-ˈgoo-ai me pa-ˈra nə ˈdo-rə/',
        },

        // Emergency
        {
            key: PhraseKeys.EMERGENCY_HELP,
            text: 'Ndihmë!',
            pronunciation_ipa: '/ndi.hmə/',
            pronunciation_simple: '/n-DEEH-mə/',
        },
        {
            key: PhraseKeys.EMERGENCY_DOCTOR,
            text: 'Më duhet një mjek!',
            pronunciation_ipa: '/mə ˈduhɛt ɲə mjɛk/',
            pronunciation_simple: '/mə ˈdu-het nyə myek/',
        },
        {
            key: PhraseKeys.EMERGENCY_POLICE,
            text: 'Thirrni policinë!',
            pronunciation_ipa: '/ˈθirni pɔliˈtsin/',
            pronunciation_simple: '/THIR-ni po-li-ˈtseen/',
        },

        // Numbers 1-10
        {
            key: PhraseKeys.NUMBER_ONE,
            text: 'një',
            pronunciation_ipa: '/ɲə/',
            pronunciation_simple: '/nyə/',
        },
        {
            key: PhraseKeys.NUMBER_TWO,
            text: 'dy',
            pronunciation_ipa: '/dy/',
            pronunciation_simple: '/dy/',
        },
        {
            key: PhraseKeys.NUMBER_THREE,
            text: 'tre',
            pronunciation_ipa: '/trɛ/',
            pronunciation_simple: '/treh/',
        },
        {
            key: PhraseKeys.NUMBER_FOUR,
            text: 'katër',
            pronunciation_ipa: '/ˈkatər/',
            pronunciation_simple: '/ˈka-tər/',
        },
        {
            key: PhraseKeys.NUMBER_FIVE,
            text: 'pesë',
            pronunciation_ipa: '/ˈpɛsə/',
            pronunciation_simple: '/ˈpe-sə/',
        },
        {
            key: PhraseKeys.NUMBER_SIX,
            text: 'gjashtë',
            pronunciation_ipa: '/ɟaʃt/',
            pronunciation_simple: '/gyasht/',
        },
        {
            key: PhraseKeys.NUMBER_SEVEN,
            text: 'shtatë',
            pronunciation_ipa: '/ʃtatə/',
            pronunciation_simple: '/shta-tə/',
        },
        {
            key: PhraseKeys.NUMBER_EIGHT,
            text: 'tetë',
            pronunciation_ipa: '/ˈtɛtə/',
            pronunciation_simple: '/ˈte-tə/',
        },
        {
            key: PhraseKeys.NUMBER_NINE,
            text: 'nëntë',
            pronunciation_ipa: '/ˈnən.tə/',
            pronunciation_simple: '/ˈnən-tə/',
        },
        {
            key: PhraseKeys.NUMBER_TEN,
            text: 'dhjetë',
            pronunciation_ipa: '/ˈðjɛ.tə/',
            pronunciation_simple: '/ˈth-ye-tə/',
        },
    ],
};
