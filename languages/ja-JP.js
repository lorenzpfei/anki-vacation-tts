import { PhraseKeys } from '../types.js';

export const jaJP = {
  provider: 'google',
  langCode: 'ja-JP',
  voice: {
    name: 'ja-JP-Neural2-C',
    ssmlGender: 'MALE',
  },
  phrases: [
    // Greetings & Politeness - Practical Japanese for tourists
    { key: PhraseKeys.GREETING_HELLO, text: 'こんにちは', note: 'Konnichiwa' },
    { key: PhraseKeys.GREETING_GOOD_DAY, text: 'おはようございます', note: 'Ohayō gozaimasu' },
    { key: PhraseKeys.FAREWELL_BYE, text: 'さようなら', note: 'Sayōnara' },
    { key: PhraseKeys.POLITENESS_PLEASE, text: 'お願いします', note: 'Onegai shimasu' },
    { key: PhraseKeys.POLITENESS_THANK_YOU, text: 'ありがとうございます', note: 'Arigatō gozaimasu' },
    { key: PhraseKeys.POLITENESS_MANY_THANKS, text: 'どうもありがとうございます', note: 'Dōmo arigatō gozaimasu' },
    { key: PhraseKeys.CONFIRMATION_YES, text: 'はい', note: 'Hai' },
    { key: PhraseKeys.CONFIRMATION_NO, text: 'いいえ', note: 'Iie' },
    { key: PhraseKeys.POLITENESS_EXCUSE_ME, text: 'すみません', note: 'Sumimasen' },
    
    // Introduction - Meeting people
    { key: PhraseKeys.INTRODUCTION_MY_NAME, text: '私の名前は...', note: 'Watashi no namae wa...' },
    { key: PhraseKeys.INTRODUCTION_NICE_TO_MEET, text: 'はじめまして', note: 'Hajimemashite' },
    { key: PhraseKeys.INTRODUCTION_WHATS_YOUR_NAME, text: 'お名前は何ですか？', note: 'O-namae wa nan desu ka?' },

    // Communication - Tourist-friendly Japanese
    { key: PhraseKeys.COMMUNICATION_DONT_UNDERSTAND, text: 'わかりません', note: 'Wakarimasen' },
    { key: PhraseKeys.COMMUNICATION_SPEAK_ENGLISH, text: '英語を話せますか？', note: 'Eigo o hanasemasu ka?' },
    { key: PhraseKeys.COMMUNICATION_SPEAK_SLOWER, text: 'もっとゆっくり話してください', note: 'Motto yukkuri hanashite kudasai' },
    
    // Food & Dining - Restaurant Japanese
    { key: PhraseKeys.REQUEST_MENU, text: 'メニューをお願いします', note: 'Menyū o onegai shimasu' },
    { key: PhraseKeys.REQUEST_COFFEE, text: 'コーヒーをお願いします', note: 'Kōhī o onegai shimasu' },
    { key: PhraseKeys.REQUEST_BILL, text: 'お会計お願いします', note: 'Okaikei onegai shimasu' },
    { key: PhraseKeys.DINING_DELICIOUS, text: '美味しかったです', note: 'Oishikatta desu | 食事の後' },
    { key: PhraseKeys.DINING_YUMMY, text: '美味しい！', note: 'Oishii! | 食べている間' },

    // Navigation - Essential directions
    { key: PhraseKeys.NAVIGATION_TRAIN_STATION, text: '駅はどこですか？', note: 'Eki wa doko desu ka?' },
    { key: PhraseKeys.NAVIGATION_RESTROOM, text: 'トイレはどこですか？', note: 'Toire wa doko desu ka?' },
    { key: PhraseKeys.NAVIGATION_ATM, text: 'ATMはどこですか？', note: 'Ei-tī-emu wa doko desu ka?' },
    
    // Shopping - Practical shopping phrases
    { key: PhraseKeys.SHOPPING_HOW_MUCH, text: 'いくらですか？', note: 'Ikura desu ka?' },
    { key: PhraseKeys.SHOPPING_PAY_BY_CARD, text: 'カードで払えますか？', note: 'Kādo de haraemasu ka?' },
    
    // Emergency - Clear and urgent
    { key: PhraseKeys.EMERGENCY_HELP, text: '助けて！', note: 'Tasukete!' },
    { key: PhraseKeys.EMERGENCY_DOCTOR, text: '医者を呼んでください！', note: 'Isha o yonde kudasai!' },
    { key: PhraseKeys.EMERGENCY_POLICE, text: '警察を呼んでください！', note: 'Keisatsu o yonde kudasai!' },

    // Numbers 1-10
    { key: PhraseKeys.NUMBER_ONE, text: '一', note: 'ichi' },
    { key: PhraseKeys.NUMBER_TWO, text: '二', note: 'ni' },
    { key: PhraseKeys.NUMBER_THREE, text: '三', note: 'san' },
    { key: PhraseKeys.NUMBER_FOUR, text: '四', note: 'yon' },
    { key: PhraseKeys.NUMBER_FIVE, text: '五', note: 'go' },
    { key: PhraseKeys.NUMBER_SIX, text: '六', note: 'roku' },
    { key: PhraseKeys.NUMBER_SEVEN, text: '七', note: 'nana' },
    { key: PhraseKeys.NUMBER_EIGHT, text: '八', note: 'hachi' },
    { key: PhraseKeys.NUMBER_NINE, text: '九', note: 'kyū' },
    { key: PhraseKeys.NUMBER_TEN, text: '十', note: 'jū' },
  ],
};
