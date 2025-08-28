import { PhraseKeys } from '../types.js';

export const trTR = {
    provider: 'azure',
    langCode: 'tr-TR',
    voice: {
        name: 'tr-TR-Standard-B',
        ssmlGender: 'MALE',
    },
    phrases: [
        // Greetings & Politeness (Turkey)
        {
            key: PhraseKeys.GREETING_HELLO,
            text: 'Merhaba!',
            pronunciation_ipa: '/ˈmɛɾhaba/',
            pronunciation_simple: '/ˈmer-ha-ba/',
        },
        {
            key: PhraseKeys.GREETING_GOOD_DAY,
            text: 'Selam!',
            pronunciation_ipa: '/seˈlam/',
            pronunciation_simple: '/se-ˈlam/',
            note: 'Gün boyu kullanılabilir, samimi selam.',
        },
        {
            key: PhraseKeys.FAREWELL_BYE,
            text: 'Görüşürüz!',
            pronunciation_ipa: '/ɟøɾyˈʃyɾyz/',
            pronunciation_simple: '/gyo-ryu-ˈshu-ryuz/',
        },
        {
            key: PhraseKeys.POLITENESS_PLEASE,
            text: 'Rica ederim',
            pronunciation_ipa: '/ɾiˈd͡ʒa edeˈɾim/',
            pronunciation_simple: '/ri-ˈja e-de-ˈrim/',
            note: 'Teşekküre cevap (= “bir şey değil”).',
        },
        {
            key: PhraseKeys.POLITENESS_THANK_YOU,
            text: 'Teşekkürler!',
            pronunciation_ipa: '/teʃekyɾˈlɛɾ/',
            pronunciation_simple: '/te-she-kyur-ˈler/',
        },
        {
            key: PhraseKeys.POLITENESS_MANY_THANKS,
            text: 'Çok teşekkürler!',
            pronunciation_ipa: '/t͡ʃok teʃekyɾˈlɛɾ/',
            pronunciation_simple: '/chok te-she-kyur-ˈler/',
        },
        {
            key: PhraseKeys.CONFIRMATION_YES,
            text: 'Evet',
            pronunciation_ipa: '/eˈvet/',
            pronunciation_simple: '/e-ˈvet/',
        },
        {
            key: PhraseKeys.CONFIRMATION_NO,
            text: 'Hayır',
            pronunciation_ipa: '/ˈhajɯɾ/',
            pronunciation_simple: '/ˈha-yur/',
        },
        {
            key: PhraseKeys.POLITENESS_EXCUSE_ME,
            text: 'Pardon',
            pronunciation_ipa: '/ˈpaɾdon/',
            pronunciation_simple: '/ˈpar-don/',
        },

        // Introduction
        {
            key: PhraseKeys.INTRODUCTION_MY_NAME,
            text: 'Ben …',
            pronunciation_ipa: '/bɛn/',
            pronunciation_simple: '/ben/',
        },
        {
            key: PhraseKeys.INTRODUCTION_NICE_TO_MEET,
            text: 'Memnun oldum!',
            pronunciation_ipa: '/mɛmˈnun ˈoldum/',
            pronunciation_simple: '/mem-ˈnoon ˈol-dum/',
        },
        {
            key: PhraseKeys.INTRODUCTION_WHATS_YOUR_NAME,
            text: 'Adın ne?',
            pronunciation_ipa: '/aˈdɯn ne/',
            pronunciation_simple: '/a-ˈdun ne/',
            note: 'Nazik: “Adınız ne?”',
        },

        // Communication
        {
            key: PhraseKeys.COMMUNICATION_DONT_UNDERSTAND,
            text: 'Anlamadım.',
            pronunciation_ipa: '/anlaˈmadɯm/',
            pronunciation_simple: '/an-la-ˈma-dum/',
        },
        {
            key: PhraseKeys.COMMUNICATION_SPEAK_ENGLISH,
            text: 'İngilizce biliyor musunuz?',
            pronunciation_ipa: '/iŋɡiˈlizd͡ʒe biˈliːjoɾ musuˈnuz/',
            pronunciation_simple: '/ing-gee-ˈliz-je bi-ˈlee-yor mu-su-ˈnuz/',
        },
        {
            key: PhraseKeys.COMMUNICATION_SPEAK_SLOWER,
            text: 'Biraz daha yavaş konuşur musunuz, lütfen?',
            pronunciation_ipa:
                '/biˈɾaz daˈha jaˈvaʃ koˈnuʃuɾ musuˈnuz ˈlytfen/',
            pronunciation_simple:
                '/bi-ˈraz da-ˈha ya-ˈvash ko-ˈnu-shur mu-su-ˈnuz ˈlyt-fen/',
        },
        {
            key: PhraseKeys.COMMUNICATION_LIMITED_LANGUAGE,
            text: 'Türkçem çok iyi değil.',
            pronunciation_ipa: '/ˈtyɾkt͡ʃɛm t͡ʃok iˈji deˈjil/',
            pronunciation_simple: '/ˈtyurk-chem chok ee-yee de-ˈyil/',
        },
        {
            key: PhraseKeys.COMMUNICATION_HOW_DO_YOU_SAY,
            text: '… Türkçe nasıl denir?',
            pronunciation_ipa: '/tyɾkt͡ʃe nɯˈsɯl deˈniɾ/',
            pronunciation_simple: '/tyurk-che na-ˈsul de-ˈnir/',
        },

        // Food & Dining
        {
            key: PhraseKeys.REQUEST_MENU,
            text: 'Menü lütfen.',
            pronunciation_ipa: '/ˈmɛnʏ ˈlytfen/',
            pronunciation_simple: '/ˈme-ny ˈlyt-fen/',
        },
        {
            key: PhraseKeys.REQUEST_COFFEE,
            text: 'Kahve',
            pronunciation_ipa: '/ˈkahve/',
            pronunciation_simple: '/ˈkah-ve/',
        },
        {
            key: PhraseKeys.REQUEST_WATER,
            text: 'Su',
            pronunciation_ipa: '/su/',
            pronunciation_simple: '/su/',
        },
        {
            key: PhraseKeys.REQUEST_PLEASE,
            text: 'lütfen',
            pronunciation_ipa: '/ˈlytfen/',
            pronunciation_simple: '/ˈlyt-fen/',
        },
        {
            key: PhraseKeys.REQUEST_BILL,
            text: 'Hesap lütfen.',
            pronunciation_ipa: '/heˈsap ˈlytfen/',
            pronunciation_simple: '/he-ˈsap ˈlyt-fen/',
        },
        {
            key: PhraseKeys.DINING_VEGETARIAN,
            text: 'Vejetaryenim.',
            pronunciation_ipa: '/ved͡ʒetaɾˈjenim/',
            pronunciation_simple: '/ve-je-tar-ˈye-nim/',
        },
        {
            key: PhraseKeys.DINING_DELICIOUS,
            text: 'Çok lezzetliydi!',
            pronunciation_ipa: '/t͡ʃok lezˈzetlijdi/',
            pronunciation_simple: '/chok lez-ˈzet-lee-y-dee/',
        },
        {
            key: PhraseKeys.DINING_YUMMY,
            text: 'Harika olmuş!',
            pronunciation_ipa: '/haˈɾika ˈolmuʃ/',
            pronunciation_simple: '/ha-ˈri-ka ˈol-mush/',
        },

        // Navigation
        {
            key: PhraseKeys.NAVIGATION_TRAIN_STATION,
            text: 'Tren istasyonu nerede?',
            pronunciation_ipa: '/tɾɛn istaˈsjonu neˈɾede/',
            pronunciation_simple: '/tren is-ta-syo-nu ne-ˈre-de/',
        },
        {
            key: PhraseKeys.NAVIGATION_RESTROOM,
            text: 'Tuvalet nerede?',
            pronunciation_ipa: '/tuvaˈlet neˈɾede/',
            pronunciation_simple: '/tu-va-ˈlet ne-ˈre-de/',
        },
        {
            key: PhraseKeys.NAVIGATION_ATM,
            text: 'En yakın ATM nerede?',
            pronunciation_ipa: '/ɛn jɯˈkɯn a.teːˈme neˈɾede/',
            pronunciation_simple: '/en yə-ˈkun A-T-E me-ˈre-de/',
        },

        // Shopping
        {
            key: PhraseKeys.SHOPPING_HOW_MUCH,
            text: 'Bu ne kadar?',
            pronunciation_ipa: '/bu ne kaˈdaɾ/',
            pronunciation_simple: '/bu ne ka-ˈdar/',
        },
        {
            key: PhraseKeys.SHOPPING_PAY_BY_CARD,
            text: 'Kartla ödeyebilir miyim?',
            pronunciation_ipa: '/ˈkaɾtɫa œdejeˈbiɾ miˈjim/',
            pronunciation_simple: '/ˈkart-la o-de-ye-ˈbir mi-ˈyim/',
        },
        {
            key: PhraseKeys.SHOPPING_PAY_BY_CASH,
            text: 'Nakit ödeyeceğim.',
            pronunciation_ipa: '/naˈkit œdejeˈd͡ʒeːjim/',
            pronunciation_simple: '/na-ˈkit o-de-ye-ˈjem/',
        },

        // Emergency
        {
            key: PhraseKeys.EMERGENCY_HELP,
            text: 'Yardım!',
            pronunciation_ipa: '/jaɾˈdɯm/',
            pronunciation_simple: '/yar-ˈdum/',
        },
        {
            key: PhraseKeys.EMERGENCY_DOCTOR,
            text: 'Doktora ihtiyacım var!',
            pronunciation_ipa: '/doktoˈɾa ihtaˈjad͡ʒɯm vaɾ/',
            pronunciation_simple: '/dok-to-ˈra ih-ta-ˈya-jum var/',
        },
        {
            key: PhraseKeys.EMERGENCY_POLICE,
            text: 'Polisi arayın!',
            pronunciation_ipa: '/poˈlisi aˈɾajɯn/',
            pronunciation_simple: '/po-ˈli-si a-ˈra-yun/',
        },

        // Numbers 1-10
        {
            key: PhraseKeys.NUMBER_ONE,
            text: 'bir',
            pronunciation_ipa: '/biɾ/',
            pronunciation_simple: '/bir/',
        },
        {
            key: PhraseKeys.NUMBER_TWO,
            text: 'iki',
            pronunciation_ipa: '/iˈki/',
            pronunciation_simple: '/i-ˈki/',
        },
        {
            key: PhraseKeys.NUMBER_THREE,
            text: 'üç',
            pronunciation_ipa: '/yt͡ʃ/',
            pronunciation_simple: '/yuch/',
        },
        {
            key: PhraseKeys.NUMBER_FOUR,
            text: 'dört',
            pronunciation_ipa: '/dœɾt/',
            pronunciation_simple: '/dört/',
        },
        {
            key: PhraseKeys.NUMBER_FIVE,
            text: 'beş',
            pronunciation_ipa: '/beʃ/',
            pronunciation_simple: '/besh/',
        },
        {
            key: PhraseKeys.NUMBER_SIX,
            text: 'altı',
            pronunciation_ipa: '/alˈtɯ/',
            pronunciation_simple: '/al-ˈtuh/',
        },
        {
            key: PhraseKeys.NUMBER_SEVEN,
            text: 'yedi',
            pronunciation_ipa: '/jeˈdi/',
            pronunciation_simple: '/ye-ˈdi/',
        },
        {
            key: PhraseKeys.NUMBER_EIGHT,
            text: 'sekiz',
            pronunciation_ipa: '/seˈkiz/',
            pronunciation_simple: '/se-ˈkiz/',
        },
        {
            key: PhraseKeys.NUMBER_NINE,
            text: 'dokuz',
            pronunciation_ipa: '/doˈkuz/',
            pronunciation_simple: '/do-ˈkuz/',
        },
        {
            key: PhraseKeys.NUMBER_TEN,
            text: 'on',
            pronunciation_ipa: '/on/',
            pronunciation_simple: '/on/',
        },
    ],
};
