export const single = {
    id: 'thanks',
    type: 'single',
    category: 'politeness',
    cue_L1: 'Danke',
    context_L1: 'Überall',
    l2: 'Teşekkürler',
    pronunciation_ipa: 'teʃecːyɾˈlɛɾ',
    pronunciation_simple: 'te-schek-kür-ler',
    meaning_L1: 'Danke',
    variant_plural: {
        l2: 'Teşekkür ederim',
        pronunciation_ipa: 'teʃecːyɾ edeˈɾim',
        pronunciation_simple: 'te-schek-kür e-de-rim',
    },
};

export const ritual = {
    id: 'welcome',
    type: 'ritual_pair',
    category: 'ritual',
    cue_L1: 'Jemand heißt dich willkommen',
    context_L1: 'Beim Ankommen',
    call_l2: 'Hoş geldiniz',
    call_pronunciation_ipa: 'hoʃ ɟeldiniz',
    call_pronunciation_simple: 'hosch gel-di-nis',
    call_meaning_L1: 'Willkommen',
    call_usage_L1: 'Gastgeber sagen das',
    response_l2: 'Hoş bulduk',
    response_pronunciation_ipa: 'hoʃ bulduk',
    response_pronunciation_simple: 'hosch bul-duk',
    response_meaning_L1: 'Schön, hier zu sein',
};

export const deck = (tts = { provider: 'gemini', voice: 'Kore' }) => ({
    learnerLang: 'de-DE',
    targetLang: 'tr-TR',
    tts,
    cards: [single, ritual],
});
