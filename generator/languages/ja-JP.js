import { PhraseKeys } from '../types.js';

export const jaJP = {
    provider: 'google',
    langCode: 'ja-JP',
    voice: {
        name: 'ja-JP-Neural2-C',
        ssmlGender: 'MALE',
    },
    phrases: [
        // Greetings & Politeness
        {
            key: PhraseKeys.GREETING_HELLO,
            text: 'どうも！',
            pronunciation_ipa: '/doːmo/',
            pronunciation_simple: '/doo-mo/',
        },
        {
            key: PhraseKeys.GREETING_GOOD_DAY,
            text: 'こんにちは！',
            pronunciation_ipa: '/koɲɲi̥t͡ɕiwa/',
            pronunciation_simple: '/kon-ni-chi-wa/',
        },
        {
            key: PhraseKeys.FAREWELL_BYE,
            text: 'じゃあね！',
            pronunciation_ipa: '/dʑaːne/',
            pronunciation_simple: '/jaa-neh/',
        },
        {
            key: PhraseKeys.POLITENESS_PLEASE,
            text: 'いえいえ',
            pronunciation_ipa: '/ie̞ ie̞/',
            pronunciation_simple: '/ee-eh ee-eh/',
            note: 'Casual “you’re welcome”. Polite: どういたしまして。',
        },
        {
            key: PhraseKeys.POLITENESS_THANK_YOU,
            text: 'ありがとう！',
            pronunciation_ipa: '/aɾi̥ɡaꜜtoː/',
            pronunciation_simple: '/a-ree-ga-TOH/',
        },
        {
            key: PhraseKeys.POLITENESS_MANY_THANKS,
            text: 'どうもありがとう！',
            pronunciation_ipa: '/doːmo aɾi̥ɡaꜜtoː/',
            pronunciation_simple: '/DOH-mo a-ree-ga-TOH/',
        },
        {
            key: PhraseKeys.CONFIRMATION_YES,
            text: 'はい',
            pronunciation_ipa: '/hai/',
            pronunciation_simple: '/hai/',
        },
        {
            key: PhraseKeys.CONFIRMATION_NO,
            text: 'いいえ',
            pronunciation_ipa: '/iːe/',
            pronunciation_simple: '/ee-eh/',
        },
        {
            key: PhraseKeys.POLITENESS_EXCUSE_ME,
            text: 'すみません',
            pronunciation_ipa: '/sɯmimasẽ̞ɴ/',
            pronunciation_simple: '/su-mi-ma-sen/',
        },

        // Introduction
        {
            key: PhraseKeys.INTRODUCTION_MY_NAME,
            text: '…です。',
            pronunciation_ipa: '/desɯ/',
            pronunciation_simple: '/dess/',
        },
        {
            key: PhraseKeys.INTRODUCTION_NICE_TO_MEET,
            text: 'はじめまして！',
            pronunciation_ipa: '/ha̠dʑime̞maɕite̞/',
            pronunciation_simple: '/ha-ji-me-ma-shte/',
        },
        {
            key: PhraseKeys.INTRODUCTION_WHATS_YOUR_NAME,
            text: 'お名前は？',
            pronunciation_ipa: '/o namae wa/',
            pronunciation_simple: '/o na-ma-eh wa?/',
        },

        // Communication
        {
            key: PhraseKeys.COMMUNICATION_DONT_UNDERSTAND,
            text: 'わかりません。',
            pronunciation_ipa: '/wakaɾimasẽ̞ɴ/',
            pronunciation_simple: '/wa-ka-ri-ma-sen/',
        },
        {
            key: PhraseKeys.COMMUNICATION_SPEAK_ENGLISH,
            text: '英語、話せますか？',
            pronunciation_ipa: '/eːɡo hanase̞masɯka/',
            pronunciation_simple: '/eh-go ha-na-se-mas-ka?/',
        },
        {
            key: PhraseKeys.COMMUNICATION_SPEAK_SLOWER,
            text: 'もう少しゆっくりお願いします。',
            pronunciation_ipa: '/moː so̞ɕi jɯkːɯɾi one̞ɡaishimasɯ/',
            pronunciation_simple:
                '/moh- soo-shi yook-ku-ri o-ne-gai-shi-ma-su/',
        },
        {
            key: PhraseKeys.COMMUNICATION_LIMITED_LANGUAGE,
            text: '日本語はあまり上手じゃないです。',
            pronunciation_ipa: '/nihoŋɡo wa a̠maɾi d͡ʑoːzɯ d͡ʑa nai desɯ/',
            pronunciation_simple: '/ni-hon-go wa a-ma-ri jo-zu ja nai dess/',
        },
        {
            key: PhraseKeys.COMMUNICATION_HOW_DO_YOU_SAY,
            text: '…は日本語で何と言いますか？',
            pronunciation_ipa: '/wa nihoŋɡo de̞ naɴ to iimasɯka/',
            pronunciation_simple: '/… wa ni-hon-go de nan to ee-mas-ka?/',
        },

        // Food & Dining
        {
            key: PhraseKeys.REQUEST_MENU,
            text: 'メニューお願いします。',
            pronunciation_ipa: '/me̞ɲɯː one̞ɡaishimasɯ/',
            pronunciation_simple: '/me-nyuu o-ne-gai-shi-ma-su/',
        },
        {
            key: PhraseKeys.REQUEST_COFFEE,
            text: 'コーヒー',
            pronunciation_ipa: '/koːçiː/',
            pronunciation_simple: '/koo-hee/',
        },
        {
            key: PhraseKeys.REQUEST_WATER,
            text: 'お水',
            pronunciation_ipa: '/omizu/',
            pronunciation_simple: '/o-mee-zoo/',
        },
        {
            key: PhraseKeys.REQUEST_PLEASE,
            text: 'お願いします',
            pronunciation_ipa: '/one̞ɡaishimasɯ/',
            pronunciation_simple: '/o-ne-gai-shi-ma-su/',
        },
        {
            key: PhraseKeys.REQUEST_BILL,
            text: 'お会計お願いします。',
            pronunciation_ipa: '/o kaikeː one̞ɡaishimasɯ/',
            pronunciation_simple: '/o kai-kay o-ne-gai-shi-ma-su/',
        },
        {
            key: PhraseKeys.DINING_VEGETARIAN,
            text: 'ベジタリアンです。',
            pronunciation_ipa: '/bed͡ʑitaɾiaɴ desɯ/',
            pronunciation_simple: '/be-ji-ta-ri-an dess/',
        },
        {
            key: PhraseKeys.DINING_DELICIOUS,
            text: 'すごくおいしかった！',
            pronunciation_ipa: '/sɯɡo̞kɯ oi̯ɕikatta/',
            pronunciation_simple: '/su-go-ku oi-shi-kat-ta/',
        },
        {
            key: PhraseKeys.DINING_YUMMY,
            text: 'めっちゃおいしい！',
            pronunciation_ipa: '/met͡ɕːa oi̯ɕiː/',
            pronunciation_simple: '/met-cha oi-shee/',
            note: 'Casual emphasis; very common.',
        },

        // Navigation
        {
            key: PhraseKeys.NAVIGATION_TRAIN_STATION,
            text: '駅はどこですか？',
            pronunciation_ipa: '/e̞ki wa do̞ko̞ de̞sɯka/',
            pronunciation_simple: '/e-ki wa do-ko dess-ka?/',
        },
        {
            key: PhraseKeys.NAVIGATION_RESTROOM,
            text: 'トイレはどこですか？',
            pronunciation_ipa: '/toi̯ɾe̞ wa do̞ko̞ de̞sɯka/',
            pronunciation_simple: '/toi-re wa do-ko dess-ka?/',
        },
        {
            key: PhraseKeys.NAVIGATION_ATM,
            text: 'ATMはどこですか？',
            pronunciation_ipa: '/eːtiːe̞mɯ wa do̞ko̞ de̞sɯka/',
            pronunciation_simple: '/ay-tee-em wa do-ko dess-ka?/',
        },

        // Shopping
        {
            key: PhraseKeys.SHOPPING_HOW_MUCH,
            text: 'これ、いくらですか？',
            pronunciation_ipa: '/koɾe ikɯɾa de̞sɯka/',
            pronunciation_simple: '/ko-re, i-ku-ra dess-ka?/',
        },
        {
            key: PhraseKeys.SHOPPING_PAY_BY_CARD,
            text: 'カードで払えますか？',
            pronunciation_ipa: '/kaːdo̞ de̞ haɾae̞masɯka/',
            pronunciation_simple: '/kaa-do de ha-ra-eh-mas-ka?/',
        },
        {
            key: PhraseKeys.SHOPPING_PAY_BY_CASH,
            text: '現金で払います。',
            pronunciation_ipa: '/ɡe̞ŋkiɴ de̞ haɾai̯masɯ/',
            pronunciation_simple: '/gen-kin de ha-rai-mas/',
        },

        // Emergency
        {
            key: PhraseKeys.EMERGENCY_HELP,
            text: '助けて！',
            pronunciation_ipa: '/tasɯke̞te̞/',
            pronunciation_simple: '/ta-su-ke-te/',
        },
        {
            key: PhraseKeys.EMERGENCY_DOCTOR,
            text: 'お医者さんお願いします！',
            pronunciation_ipa: '/o iɕa saɴ one̞ɡaishimasɯ/',
            pronunciation_simple: '/o ee-sha-san o-ne-gai-shi-mas!/',
        },
        {
            key: PhraseKeys.EMERGENCY_POLICE,
            text: '警察を呼んでください！',
            pronunciation_ipa: '/keːsatsɯ o jo̞nde̞ kɯɾasai̯/',
            pronunciation_simple: '/kay-satsu o yon-de ku-ra-sai!/',
        },

        // Numbers 1-10
        {
            key: PhraseKeys.NUMBER_ONE,
            text: 'いち',
            pronunciation_ipa: '/it͡ɕi/',
            pronunciation_simple: '/ee-chee/',
        },
        {
            key: PhraseKeys.NUMBER_TWO,
            text: 'に',
            pronunciation_ipa: '/ni/',
            pronunciation_simple: '/nee/',
        },
        {
            key: PhraseKeys.NUMBER_THREE,
            text: 'さん',
            pronunciation_ipa: '/saɴ/',
            pronunciation_simple: '/sahn/',
        },
        {
            key: PhraseKeys.NUMBER_FOUR,
            text: 'よん',
            pronunciation_ipa: '/joɴ/',
            pronunciation_simple: '/yohn/',
        },
        {
            key: PhraseKeys.NUMBER_FIVE,
            text: 'ご',
            pronunciation_ipa: '/ɡo/',
            pronunciation_simple: '/goh/',
        },
        {
            key: PhraseKeys.NUMBER_SIX,
            text: 'ろく',
            pronunciation_ipa: '/ɾokɯ/',
            pronunciation_simple: '/ro-ku/',
        },
        {
            key: PhraseKeys.NUMBER_SEVEN,
            text: 'なな',
            pronunciation_ipa: '/nana/',
            pronunciation_simple: '/na-na/',
        },
        {
            key: PhraseKeys.NUMBER_EIGHT,
            text: 'はち',
            pronunciation_ipa: '/hat͡ɕi/',
            pronunciation_simple: '/ha-chee/',
        },
        {
            key: PhraseKeys.NUMBER_NINE,
            text: 'きゅう',
            pronunciation_ipa: '/kʲɯː/',
            pronunciation_simple: '/kyuu/',
        },
        {
            key: PhraseKeys.NUMBER_TEN,
            text: 'じゅう',
            pronunciation_ipa: '/dʑɯː/',
            pronunciation_simple: '/jyuu/',
        },
    ],
};
