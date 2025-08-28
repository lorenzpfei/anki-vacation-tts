import { PhraseKeys } from '../types.js';

export const deDE = {
    provider: 'google',
    langCode: 'de-DE',
    voice: {
        name: 'de-DE-Neural2-B', // Switched to a recommended male Neural2 voice for variety
        ssmlGender: 'MALE',
    },
    phrases: [
        // Greetings & Politeness
        {
            key: PhraseKeys.GREETING_HELLO,
            text: 'Hallo!',
            pronunciation_ipa: '/haˈloː/',
            pronunciation_simple: '/ha-ˈloh/',
        },
        {
            key: PhraseKeys.GREETING_GOOD_DAY,
            text: 'Guten Tag!',
            pronunciation_ipa: '/ˈɡuːtən taːk/',
            pronunciation_simple: '/ˈguu-ten taak/',
            note: 'Neutral; passt den ganzen Tag.',
        },
        {
            key: PhraseKeys.FAREWELL_BYE,
            text: 'Tschüss!',
            pronunciation_ipa: '/t͡ʃʏs/',
            pronunciation_simple: '/tschys/',
        },
        {
            key: PhraseKeys.POLITENESS_PLEASE,
            text: 'Gern!',
            pronunciation_ipa: '/ɡɛʁn/',
            pronunciation_simple: '/gern/',
            note: 'Als Antwort auf „Danke“ (= „Gern geschehen“/„Kein Problem“).',
        },
        {
            key: PhraseKeys.POLITENESS_THANK_YOU,
            text: 'Danke!',
            pronunciation_ipa: '/ˈdaŋkə/',
            pronunciation_simple: '/ˈdan-kə/',
        },
        {
            key: PhraseKeys.POLITENESS_MANY_THANKS,
            text: 'Vielen Dank!',
            pronunciation_ipa: '/ˈfiːlən ˈdaŋk/',
            pronunciation_simple: '/ˈfee-lən ˈdank/',
        },
        {
            key: PhraseKeys.CONFIRMATION_YES,
            text: 'Ja',
            pronunciation_ipa: '/jaː/',
            pronunciation_simple: '/yaa/',
        },
        {
            key: PhraseKeys.CONFIRMATION_NO,
            text: 'Nein',
            pronunciation_ipa: '/naɪ̯n/',
            pronunciation_simple: '/nain/',
        },
        {
            key: PhraseKeys.POLITENESS_EXCUSE_ME,
            text: 'Entschuldigung',
            pronunciation_ipa: '/ɛntˈʃʊldɪɡʊŋ/',
            pronunciation_simple: '/ent-ˈshul-di-gung/',
        },

        // Introduction
        {
            key: PhraseKeys.INTRODUCTION_MY_NAME,
            text: 'Ich heiße …',
            pronunciation_ipa: '/ɪç ˈhaɪ̯sə/',
            pronunciation_simple: '/ich ˈhai-se/',
        },
        {
            key: PhraseKeys.INTRODUCTION_NICE_TO_MEET,
            text: 'Freut mich!',
            pronunciation_ipa: '/fʁɔɪ̯t mɪç/',
            pronunciation_simple: '/froit mich/',
        },
        {
            key: PhraseKeys.INTRODUCTION_WHATS_YOUR_NAME,
            text: 'Wie heißt du?',
            pronunciation_ipa: '/viː ˈhaɪ̯st duː/',
            pronunciation_simple: '/vee ˈhaist du/',
            note: 'Zu Gleichaltrigen; höflich: „Wie heißen Sie?“',
        },

        // Communication
        {
            key: PhraseKeys.COMMUNICATION_DONT_UNDERSTAND,
            text: 'Ich versteh’s nicht.',
            pronunciation_ipa: '/ɪç fɛɐ̯ˈʃteːs nɪçt/',
            pronunciation_simple: '/ich fer-ˈshtehs nicht/',
        },
        {
            key: PhraseKeys.COMMUNICATION_SPEAK_ENGLISH,
            text: 'Sprechen Sie Englisch?',
            pronunciation_ipa: '/ˈʃpʁɛçn̩ ziː ˈɛŋlɪʃ/',
            pronunciation_simple: '/ˈshprech-en zee ˈeng-lish/',
        },
        {
            key: PhraseKeys.COMMUNICATION_SPEAK_SLOWER,
            text: 'Ein bisschen langsamer, bitte.',
            pronunciation_ipa: '/aɪ̯n ˈbɪsçn̩ ˈlaŋzamɐ ˈbɪtə/',
            pronunciation_simple: '/ain ˈbis-chen ˈlang-za-mer ˈbi-te/',
        },
        {
            key: PhraseKeys.COMMUNICATION_LIMITED_LANGUAGE,
            text: 'Mein Deutsch ist noch nicht so gut.',
            pronunciation_ipa: '/maɪ̯n dɔʏ̯t͡ʃ ɪst nɔx nɪçt zoː ɡuːt/',
            pronunciation_simple: '/main doitsh ist noch nicht zo guut/',
        },
        {
            key: PhraseKeys.COMMUNICATION_HOW_DO_YOU_SAY,
            text: 'Wie sagt man … auf Deutsch?',
            pronunciation_ipa: '/viː zaːkt man aʊ̯f dɔʏ̯t͡ʃ/',
            pronunciation_simple: '/vee zaakt man auf doitsh/',
        },

        // Food & Dining
        {
            key: PhraseKeys.REQUEST_MENU,
            text: 'Speisekarte, bitte.',
            pronunciation_ipa: '/ˈʃpaɪ̯zəˌkaʁtə ˈbɪtə/',
            pronunciation_simple: '/ˈshpai-ze-kar-te ˈbi-te/',
        },
        {
            key: PhraseKeys.REQUEST_COFFEE,
            text: 'Kaffee',
            pronunciation_ipa: '/ˈkafeː/',
            pronunciation_simple: '/ˈka-feh/',
        },
        {
            key: PhraseKeys.REQUEST_WATER,
            text: 'Wasser',
            pronunciation_ipa: '/ˈvasɐ/',
            pronunciation_simple: '/ˈvas-ser/',
        },
        {
            key: PhraseKeys.REQUEST_PLEASE,
            text: 'bitte',
            pronunciation_ipa: '/ˈbɪtə/',
            pronunciation_simple: '/ˈbi-te/',
            note: 'Beim Bestellen/Bitten.',
        },
        {
            key: PhraseKeys.REQUEST_BILL,
            text: 'Die Rechnung, bitte.',
            pronunciation_ipa: '/diː ˈʁɛçnʊŋ ˈbɪtə/',
            pronunciation_simple: '/dee ˈrech-nung ˈbi-te/',
        },
        {
            key: PhraseKeys.DINING_VEGETARIAN,
            text: 'Ich bin Vegetarier(in).',
            pronunciation_ipa: '/ɪç bɪn veɡeˈtaːʁi̯ɐ(ɪn)/',
            pronunciation_simple: '/ich bin ve-ge-ˈtaar-ee-er(-in)/',
            note: '„-in“ für weiblich.',
        },
        {
            key: PhraseKeys.DINING_DELICIOUS,
            text: 'War sehr lecker!',
            pronunciation_ipa: '/vaːɐ̯ zeːɐ̯ ˈlɛkɐ/',
            pronunciation_simple: '/var zair ˈle-ker/',
        },
        {
            key: PhraseKeys.DINING_YUMMY,
            text: 'Schmeckt richtig gut!',
            pronunciation_ipa: '/ʃmɛkt ˈʁɪçtɪç ɡuːt/',
            pronunciation_simple: '/shmekt ˈrich-tich guut/',
        },

        // Navigation
        {
            key: PhraseKeys.NAVIGATION_TRAIN_STATION,
            text: 'Wo ist der Bahnhof?',
            pronunciation_ipa: '/voː ɪst deːɐ̯ ˈbaːnhoːf/',
            pronunciation_simple: '/vo ist der ˈbahn-hohf/',
        },
        {
            key: PhraseKeys.NAVIGATION_RESTROOM,
            text: 'Wo ist die Toilette?',
            pronunciation_ipa: '/voː ɪst diː toi̯ˈlɛtə/',
            pronunciation_simple: '/vo ist dee toi-ˈle-te/',
        },
        {
            key: PhraseKeys.NAVIGATION_ATM,
            text: 'Wo ist der nächste Geldautomat?',
            pronunciation_ipa: '/voː ɪst deːɐ̯ ˈnɛːçstə ˈɡɛltʔaʊ̯toːmaːt/',
            pronunciation_simple: '/vo ist der ˈneech-ste ˈgelt-au-to-maat/',
        },

        // Shopping
        {
            key: PhraseKeys.SHOPPING_HOW_MUCH,
            text: 'Was kostet das?',
            pronunciation_ipa: '/vas ˈkɔstət das/',
            pronunciation_simple: '/vas ˈkos-tet das/',
        },
        {
            key: PhraseKeys.SHOPPING_PAY_BY_CARD,
            text: 'Kann ich mit Karte zahlen?',
            pronunciation_ipa: '/kan ɪç mɪt ˈkaʁtə ˈtsaːlən/',
            pronunciation_simple: '/kan ich mit ˈkar-te ˈtsa-len/',
        },
        {
            key: PhraseKeys.SHOPPING_PAY_BY_CASH,
            text: 'Ich zahle bar.',
            pronunciation_ipa: '/ɪç ˈtsaːlə baːɐ̯/',
            pronunciation_simple: '/ich ˈtsa-le baar/',
        },

        // Emergency
        {
            key: PhraseKeys.EMERGENCY_HELP,
            text: 'Hilfe!',
            pronunciation_ipa: '/ˈhɪlfə/',
            pronunciation_simple: '/ˈhil-fe/',
        },
        {
            key: PhraseKeys.EMERGENCY_DOCTOR,
            text: 'Ich brauche einen Arzt!',
            pronunciation_ipa: '/ɪç ˈbʁaʊ̯xə ˈaɪ̯nən aːɐ̯tst/',
            pronunciation_simple: '/ich ˈbrow-che ˈai-nen arzt/',
        },
        {
            key: PhraseKeys.EMERGENCY_POLICE,
            text: 'Rufen Sie die Polizei!',
            pronunciation_ipa: '/ˈʁuːfn̩ ziː diː pɔliˈt͡saɪ̯/',
            pronunciation_simple: '/ˈruu-fen zee dee po-li-ˈtsai/',
        },

        // Numbers 1-10
        {
            key: PhraseKeys.NUMBER_ONE,
            text: 'eins',
            pronunciation_ipa: '/aɪ̯ns/',
            pronunciation_simple: '/ains/',
        },
        {
            key: PhraseKeys.NUMBER_TWO,
            text: 'zwei',
            pronunciation_ipa: '/t͡svaɪ̯/',
            pronunciation_simple: '/tsvai/',
        },
        {
            key: PhraseKeys.NUMBER_THREE,
            text: 'drei',
            pronunciation_ipa: '/dʁaɪ̯/',
            pronunciation_simple: '/drai/',
        },
        {
            key: PhraseKeys.NUMBER_FOUR,
            text: 'vier',
            pronunciation_ipa: '/fiːɐ̯/',
            pronunciation_simple: '/feer/',
        },
        {
            key: PhraseKeys.NUMBER_FIVE,
            text: 'fünf',
            pronunciation_ipa: '/fʏnf/',
            pronunciation_simple: '/fuenf/',
        },
        {
            key: PhraseKeys.NUMBER_SIX,
            text: 'sechs',
            pronunciation_ipa: '/zɛks/',
            pronunciation_simple: '/zeks/',
        },
        {
            key: PhraseKeys.NUMBER_SEVEN,
            text: 'sieben',
            pronunciation_ipa: '/ˈziːbən/',
            pronunciation_simple: '/ˈzee-ben/',
        },
        {
            key: PhraseKeys.NUMBER_EIGHT,
            text: 'acht',
            pronunciation_ipa: '/axt/',
            pronunciation_simple: '/acht/',
        },
        {
            key: PhraseKeys.NUMBER_NINE,
            text: 'neun',
            pronunciation_ipa: '/nɔʏ̯n/',
            pronunciation_simple: '/noyn/',
        },
        {
            key: PhraseKeys.NUMBER_TEN,
            text: 'zehn',
            pronunciation_ipa: '/tseːn/',
            pronunciation_simple: '/tsehn/',
        },
    ],
};
