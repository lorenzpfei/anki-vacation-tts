import { PhraseKeys } from '../types.js';

export const enUS = {
    provider: 'google',
    langCode: 'en-US',
    voice: {
        name: 'en-US-Neural2-D',
        ssmlGender: 'MALE',
    },
    phrases: [
        // Greetings & Politeness
        {
            key: PhraseKeys.GREETING_HELLO,
            text: 'Hi!',
            pronunciation_ipa: '/haɪ/',
            pronunciation_simple: '/hai/',
        },
        {
            key: PhraseKeys.GREETING_GOOD_DAY,
            text: 'Hello!',
            pronunciation_ipa: '/həˈloʊ/',
            pronunciation_simple: '/huh-ˈloh/',
        },
        {
            key: PhraseKeys.FAREWELL_BYE,
            text: 'Bye!',
            pronunciation_ipa: '/baɪ/',
            pronunciation_simple: '/bai/',
        },
        {
            key: PhraseKeys.POLITENESS_PLEASE,
            text: 'No problem!',
            pronunciation_ipa: '/noʊ ˈprɑbləm/',
            pronunciation_simple: '/noh ˈprah-bləm/',
            note: 'Reply to “thanks” (= “you’re welcome”).',
        },
        {
            key: PhraseKeys.POLITENESS_THANK_YOU,
            text: 'Thanks!',
            pronunciation_ipa: '/θæŋks/',
            pronunciation_simple: '/thangks/',
        },
        {
            key: PhraseKeys.POLITENESS_MANY_THANKS,
            text: 'Thanks so much!',
            pronunciation_ipa: '/ˌθæŋks soʊ ˈmʌtʃ/',
            pronunciation_simple: '/thanks soh ˈmuhch/',
        },
        {
            key: PhraseKeys.CONFIRMATION_YES,
            text: 'Yes',
            pronunciation_ipa: '/jɛs/',
            pronunciation_simple: '/yes/',
        },
        {
            key: PhraseKeys.CONFIRMATION_NO,
            text: 'No',
            pronunciation_ipa: '/noʊ/',
            pronunciation_simple: '/noh/',
        },
        {
            key: PhraseKeys.POLITENESS_EXCUSE_ME,
            text: 'Excuse me',
            pronunciation_ipa: '/ɪkˈskjuz mi/',
            pronunciation_simple: '/ik-ˈskyooz mee/',
        },

        // Introduction
        {
            key: PhraseKeys.INTRODUCTION_MY_NAME,
            text: "I'm …",
            pronunciation_ipa: '/aɪm/',
            pronunciation_simple: '/aim/',
        },
        {
            key: PhraseKeys.INTRODUCTION_NICE_TO_MEET,
            text: 'Nice to meet you!',
            pronunciation_ipa: '/ˌnaɪs tə ˈmit ju/',
            pronunciation_simple: '/nais tə ˈmeet yoo/',
        },
        {
            key: PhraseKeys.INTRODUCTION_WHATS_YOUR_NAME,
            text: "What's your name?",
            pronunciation_ipa: '/wʌts jɚ ˈneɪm/',
            pronunciation_simple: '/wuts yer ˈnaim/',
        },

        // Communication
        {
            key: PhraseKeys.COMMUNICATION_DONT_UNDERSTAND,
            text: "I don't get it.",
            pronunciation_ipa: '/aɪ doʊnt ˈɡɛt ɪt/',
            pronunciation_simple: '/ai dont GET it/',
        },
        {
            key: PhraseKeys.COMMUNICATION_SPEAK_ENGLISH,
            text: 'Do you speak English?',
            pronunciation_ipa: '/du ju spik ˈɪŋɡlɪʃ/',
            pronunciation_simple: '/doo yoo speek ˈing-glish/',
        },
        {
            key: PhraseKeys.COMMUNICATION_SPEAK_SLOWER,
            text: 'Could you speak a little slower, please?',
            pronunciation_ipa: '/kʊd ju spik ə ˈlɪtəl ˈsloʊɚ, pliz/',
            pronunciation_simple: '/kud yoo speek ə ˈli-təl ˈsloh-er, pleez/',
        },
        {
            key: PhraseKeys.COMMUNICATION_LIMITED_LANGUAGE,
            text: "My English isn't great.",
            pronunciation_ipa: '/maɪ ˈɪŋɡlɪʃ ˈɪzənt ɡreɪt/',
            pronunciation_simple: '/mai ˈing-glish ˈiz-ənt grate/',
        },
        {
            key: PhraseKeys.COMMUNICATION_HOW_DO_YOU_SAY,
            text: 'How do you say … in English?',
            pronunciation_ipa: '/haʊ də ju seɪ ɪn ˈɪŋɡlɪʃ/',
            pronunciation_simple: '/how də yoo say in ˈing-glish/',
        },

        // Food & Dining
        {
            key: PhraseKeys.REQUEST_MENU,
            text: 'Menu, please.',
            pronunciation_ipa: '/ˈmɛnju pliz/',
            pronunciation_simple: '/MEN-yoo pleez/',
        },
        {
            key: PhraseKeys.REQUEST_COFFEE,
            text: 'Coffee',
            pronunciation_ipa: '/ˈkɔfi/',
            pronunciation_simple: '/ˈkaw-fee/',
        },
        {
            key: PhraseKeys.REQUEST_WATER,
            text: 'Water',
            pronunciation_ipa: '/ˈwɑɾɚ/',
            pronunciation_simple: '/ˈwah-der/',
        },
        {
            key: PhraseKeys.REQUEST_PLEASE,
            text: 'please',
            pronunciation_ipa: '/pliz/',
            pronunciation_simple: '/pleez/',
            note: 'Used when asking for things.',
        },
        {
            key: PhraseKeys.REQUEST_BILL,
            text: 'Can we get the check, please?',
            pronunciation_ipa: '/kæn wi ɡɛt ðə tʃɛk, pliz/',
            pronunciation_simple: '/kan wee get thuh chek, pleez/',
        },
        {
            key: PhraseKeys.DINING_VEGETARIAN,
            text: "I'm vegetarian.",
            pronunciation_ipa: '/aɪm ˌvɛdʒəˈtɛriən/',
            pronunciation_simple: '/aim vej-ə-ˈteh-ree-ən/',
        },
        {
            key: PhraseKeys.DINING_DELICIOUS,
            text: 'That was delicious!',
            pronunciation_ipa: '/ðæt wəz dɪˈlɪʃəs/',
            pronunciation_simple: '/that wuz di-ˈli-shəs/',
        },
        {
            key: PhraseKeys.DINING_YUMMY,
            text: 'This is really good!',
            pronunciation_ipa: '/ðɪs ɪz ˈrɪəli ɡʊd/',
            pronunciation_simple: '/this iz ˈree-ə-lee gud/',
        },

        // Navigation
        {
            key: PhraseKeys.NAVIGATION_TRAIN_STATION,
            text: "Where's the train station?",
            pronunciation_ipa: '/wɛrz ðə treɪn ˈsteɪʃən/',
            pronunciation_simple: '/wairz thuh trayn ˈstay-shən/',
        },
        {
            key: PhraseKeys.NAVIGATION_RESTROOM,
            text: "Where's the restroom?",
            pronunciation_ipa: '/wɛrz ðə ˈrɛsˌtrum/',
            pronunciation_simple: '/wairz thuh REST-room/',
        },
        {
            key: PhraseKeys.NAVIGATION_ATM,
            text: "Where's the nearest ATM?",
            pronunciation_ipa: '/wɛrz ðə ˈnɪrɪst ˌeɪtiˈɛm/',
            pronunciation_simple: '/wairz thuh NEER-ist A-T-M/',
        },

        // Shopping
        {
            key: PhraseKeys.SHOPPING_HOW_MUCH,
            text: 'How much is this?',
            pronunciation_ipa: '/haʊ mʌtʃ ɪz ðɪs/',
            pronunciation_simple: '/how much iz this/',
        },
        {
            key: PhraseKeys.SHOPPING_PAY_BY_CARD,
            text: 'Can I pay with a card?',
            pronunciation_ipa: '/kæn aɪ peɪ wɪð ə kɑrd/',
            pronunciation_simple: '/kan ai pay with uh kard/',
        },
        {
            key: PhraseKeys.SHOPPING_PAY_BY_CASH,
            text: "I'll pay in cash.",
            pronunciation_ipa: '/aɪl peɪ ɪn kæʃ/',
            pronunciation_simple: '/ail pay in kash/',
        },

        // Emergency
        {
            key: PhraseKeys.EMERGENCY_HELP,
            text: 'Help!',
            pronunciation_ipa: '/hɛlp/',
            pronunciation_simple: '/help/',
        },
        {
            key: PhraseKeys.EMERGENCY_DOCTOR,
            text: 'I need a doctor!',
            pronunciation_ipa: '/aɪ nid ə ˈdɑktɚ/',
            pronunciation_simple: '/ai need uh ˈdok-ter/',
        },
        {
            key: PhraseKeys.EMERGENCY_POLICE,
            text: 'Call the police!',
            pronunciation_ipa: '/kɔl ðə pəˈlis/',
            pronunciation_simple: '/kawl thuh puh-ˈlees/',
        },

        // Numbers 1-10
        {
            key: PhraseKeys.NUMBER_ONE,
            text: 'one',
            pronunciation_ipa: '/wʌn/',
            pronunciation_simple: '/wun/',
        },
        {
            key: PhraseKeys.NUMBER_TWO,
            text: 'two',
            pronunciation_ipa: '/tu/',
            pronunciation_simple: '/too/',
        },
        {
            key: PhraseKeys.NUMBER_THREE,
            text: 'three',
            pronunciation_ipa: '/θri/',
            pronunciation_simple: '/three/',
        },
        {
            key: PhraseKeys.NUMBER_FOUR,
            text: 'four',
            pronunciation_ipa: '/fɔr/',
            pronunciation_simple: '/for/',
        },
        {
            key: PhraseKeys.NUMBER_FIVE,
            text: 'five',
            pronunciation_ipa: '/faɪv/',
            pronunciation_simple: '/faiv/',
        },
        {
            key: PhraseKeys.NUMBER_SIX,
            text: 'six',
            pronunciation_ipa: '/sɪks/',
            pronunciation_simple: '/siks/',
        },
        {
            key: PhraseKeys.NUMBER_SEVEN,
            text: 'seven',
            pronunciation_ipa: '/ˈsɛvən/',
            pronunciation_simple: '/ˈsev-ən/',
        },
        {
            key: PhraseKeys.NUMBER_EIGHT,
            text: 'eight',
            pronunciation_ipa: '/eɪt/',
            pronunciation_simple: '/ayt/',
        },
        {
            key: PhraseKeys.NUMBER_NINE,
            text: 'nine',
            pronunciation_ipa: '/naɪn/',
            pronunciation_simple: '/nain/',
        },
        {
            key: PhraseKeys.NUMBER_TEN,
            text: 'ten',
            pronunciation_ipa: '/tɛn/',
            pronunciation_simple: '/ten/',
        },
    ],
};
