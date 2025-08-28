import { PhraseKeys } from '../types.js';

export const enGB = {
    provider: 'google',
    langCode: 'en-GB',
    voice: {
        name: 'en-GB-Neural2-D',
        ssmlGender: 'MALE',
    },
    phrases: [
        // Greetings & Politeness
        {
            key: PhraseKeys.GREETING_HELLO,
            text: 'Hiya!',
            pronunciation_ipa: '/ˈhaɪjə/',
            pronunciation_simple: '/ˈhai-yə/',
        },
        {
            key: PhraseKeys.GREETING_GOOD_DAY,
            text: 'Hello!',
            pronunciation_ipa: '/həˈləʊ/',
            pronunciation_simple: '/hə-ˈloh/',
            note: 'Neutral greeting you can use all day.',
        },
        {
            key: PhraseKeys.FAREWELL_BYE,
            text: 'Bye!',
            pronunciation_ipa: '/baɪ/',
            pronunciation_simple: '/bai/',
        },
        {
            key: PhraseKeys.POLITENESS_PLEASE,
            text: 'No worries!',
            pronunciation_ipa: '/nəʊ ˈwʌriz/',
            pronunciation_simple: '/noh ˈwuh-reez/',
            note: 'As a reply to “thanks” (= “you’re welcome”).',
        },
        {
            key: PhraseKeys.POLITENESS_THANK_YOU,
            text: 'Thanks!',
            pronunciation_ipa: '/θæŋks/',
            pronunciation_simple: '/thangks/',
        },
        {
            key: PhraseKeys.POLITENESS_MANY_THANKS,
            text: 'Thanks a lot!',
            pronunciation_ipa: '/ˌθæŋks ə ˈlɒt/',
            pronunciation_simple: '/thanks ə ˈlot/',
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
            pronunciation_ipa: '/nəʊ/',
            pronunciation_simple: '/noh/',
        },
        {
            key: PhraseKeys.POLITENESS_EXCUSE_ME,
            text: 'Sorry',
            pronunciation_ipa: '/ˈsɒri/',
            pronunciation_simple: '/ˈso-ree/',
            note: 'Most common way to get someone’s attention in England.',
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
            pronunciation_ipa: '/ˌnaɪs tə ˈmiːt juː/',
            pronunciation_simple: '/nais tə ˈmeet yoo/',
        },
        {
            key: PhraseKeys.INTRODUCTION_WHATS_YOUR_NAME,
            text: "What's your name?",
            pronunciation_ipa: '/wɒts jɔː ˈneɪm/',
            pronunciation_simple: '/wots yaw ˈnaim/',
        },

        // Communication
        {
            key: PhraseKeys.COMMUNICATION_DONT_UNDERSTAND,
            text: "I don't get it.",
            pronunciation_ipa: '/aɪ dəʊnt ɡet ɪt/',
            pronunciation_simple: '/ai dont get it/',
        },
        {
            key: PhraseKeys.COMMUNICATION_SPEAK_ENGLISH,
            text: 'Do you speak English?',
            pronunciation_ipa: '/dʊ juː spiːk ˈɪŋɡlɪʃ/',
            pronunciation_simple: '/du yoo speek ˈing-glish/',
        },
        {
            key: PhraseKeys.COMMUNICATION_SPEAK_SLOWER,
            text: 'Could you speak a bit slower, please?',
            pronunciation_ipa: '/kʊd juː spiːk ə bɪt ˈsləʊə, pliːz/',
            pronunciation_simple: '/kud yoo speek ə bit ˈsloh-ə, pleez/',
        },
        {
            key: PhraseKeys.COMMUNICATION_LIMITED_LANGUAGE,
            text: "My English isn't great.",
            pronunciation_ipa: '/maɪ ˈɪŋɡlɪʃ ˈɪz(ə)nt ɡreɪt/',
            pronunciation_simple: '/mai ˈing-glish ˈiz-nt grate/',
        },
        {
            key: PhraseKeys.COMMUNICATION_HOW_DO_YOU_SAY,
            text: 'How do you say … in English?',
            pronunciation_ipa: '/haʊ dʊ juː seɪ ɪn ˈɪŋɡlɪʃ/',
            pronunciation_simple: '/hau du yoo say … in ˈing-glish/',
        },

        // Food & Dining
        {
            key: PhraseKeys.REQUEST_MENU,
            text: 'Menu, please.',
            pronunciation_ipa: '/ˈmɛnjuː pliːz/',
            pronunciation_simple: '/ˈmen-yoo pleez/',
        },
        {
            key: PhraseKeys.REQUEST_COFFEE,
            text: 'Coffee',
            pronunciation_ipa: '/ˈkɒfi/',
            pronunciation_simple: '/ˈko-fi/',
        },
        {
            key: PhraseKeys.REQUEST_WATER,
            text: 'Water',
            pronunciation_ipa: '/ˈwɔːtə/',
            pronunciation_simple: '/ˈwaw-tə/',
        },
        {
            key: PhraseKeys.REQUEST_PLEASE,
            text: 'please',
            pronunciation_ipa: '/pliːz/',
            pronunciation_simple: '/pleez/',
            note: 'Used when asking for things.',
        },
        {
            key: PhraseKeys.REQUEST_BILL,
            text: 'Could we get the bill, please?',
            pronunciation_ipa: '/kʊd wi ɡɛt ðə bɪl, pliːz/',
            pronunciation_simple: '/kud wee get thuh bil, pleez/',
        },
        {
            key: PhraseKeys.DINING_VEGETARIAN,
            text: "I'm vegetarian.",
            pronunciation_ipa: '/aɪm ˌvɛdʒɪˈteəriən/',
            pronunciation_simple: '/aim vej-i-ˈteh-ree-ən/',
        },
        {
            key: PhraseKeys.DINING_DELICIOUS,
            text: 'That was delicious!',
            pronunciation_ipa: '/ðæt wɒz dɪˈlɪʃəs/',
            pronunciation_simple: '/that woz di-ˈli-shəs/',
        },
        {
            key: PhraseKeys.DINING_YUMMY,
            text: 'This is really tasty!',
            pronunciation_ipa: '/ðɪs ɪz ˈrɪəli ˈteɪsti/',
            pronunciation_simple: '/this iz ˈre-ə-lee ˈtay-stee/',
        },

        // Navigation
        {
            key: PhraseKeys.NAVIGATION_TRAIN_STATION,
            text: "Where's the train station?",
            pronunciation_ipa: '/weəz ðə treɪn ˈsteɪʃən/',
            pronunciation_simple: '/wairz thuh trayn ˈstay-shən/',
        },
        {
            key: PhraseKeys.NAVIGATION_RESTROOM,
            text: "Where's the toilet?",
            pronunciation_ipa: '/weəz ðə ˈtɔɪlət/',
            pronunciation_simple: '/wairz thuh ˈtoy-lət/',
            note: '“Toilet” is the usual word in the UK; “loo” is very informal.',
        },
        {
            key: PhraseKeys.NAVIGATION_ATM,
            text: "Where's the nearest cash machine?",
            pronunciation_ipa: '/weəz ðə ˈnɪərəst kæʃ məˈʃiːn/',
            pronunciation_simple: '/wairz thuh ˈneer-əst kash mə-ˈsheen/',
            note: 'UK says “cash machine” more than “ATM”.',
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
            text: 'Can I pay by card?',
            pronunciation_ipa: '/kæn aɪ peɪ baɪ kɑːd/',
            pronunciation_simple: '/kan ai pay bai kaard/',
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
            pronunciation_ipa: '/aɪ niːd ə ˈdɒktə/',
            pronunciation_simple: '/ai need uh ˈdok-tuh/',
        },
        {
            key: PhraseKeys.EMERGENCY_POLICE,
            text: 'Call the police!',
            pronunciation_ipa: '/kɔːl ðə pəˈliːs/',
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
            pronunciation_ipa: '/tuː/',
            pronunciation_simple: '/too/',
        },
        {
            key: PhraseKeys.NUMBER_THREE,
            text: 'three',
            pronunciation_ipa: '/θriː/',
            pronunciation_simple: '/three/',
        },
        {
            key: PhraseKeys.NUMBER_FOUR,
            text: 'four',
            pronunciation_ipa: '/fɔː/',
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
