import { PhraseKeys } from '../types.js';

export const elGR = {
    provider: 'azure',
    langCode: 'el-GR',
    voice: {
        name: 'el-GR-Wavenet-B',
        ssmlGender: 'FEMALE',
    },
    phrases: [
        // Greetings & Politeness
        {
            key: PhraseKeys.GREETING_HELLO,
            text: 'Γεια!',
            pronunciation_ipa: '/ʝa/',
            pronunciation_simple: '/ya/',
        },
        {
            key: PhraseKeys.GREETING_GOOD_DAY,
            text: 'Γεια σας!',
            pronunciation_ipa: '/ʝa sas/',
            pronunciation_simple: '/ya sas/',
            note: 'Ουδέτερο, ταιριάζει όλη μέρα.',
        },
        {
            key: PhraseKeys.FAREWELL_BYE,
            text: 'Τα λέμε!',
            pronunciation_ipa: '/ta ˈleme/',
            pronunciation_simple: '/ta ˈle-me/',
        },
        {
            key: PhraseKeys.POLITENESS_PLEASE,
            text: 'Παρακαλώ!',
            pronunciation_ipa: '/parakaˈlo/',
            pronunciation_simple: '/pa-ra-ka-ˈlo/',
            note: 'Ως απάντηση σε «ευχαριστώ» (= «παρακαλώ/με χαρά»).',
        },
        {
            key: PhraseKeys.POLITENESS_THANK_YOU,
            text: 'Ευχαριστώ!',
            pronunciation_ipa: '/efxariˈsto/',
            pronunciation_simple: '/ef-ha-ris-ˈto/',
        },
        {
            key: PhraseKeys.POLITENESS_MANY_THANKS,
            text: 'Ευχαριστώ πολύ!',
            pronunciation_ipa: '/efxariˈsto poˈli/',
            pronunciation_simple: '/ef-ha-ris-ˈto po-ˈli/',
        },
        {
            key: PhraseKeys.CONFIRMATION_YES,
            text: 'Ναι',
            pronunciation_ipa: '/ne/',
            pronunciation_simple: '/ne/',
        },
        {
            key: PhraseKeys.CONFIRMATION_NO,
            text: 'Όχι',
            pronunciation_ipa: '/ˈoçi/',
            pronunciation_simple: '/ˈo-chi/',
        },
        {
            key: PhraseKeys.POLITENESS_EXCUSE_ME,
            text: 'Συγγνώμη',
            pronunciation_ipa: '/siɣˈnomi/',
            pronunciation_simple: '/sig-ˈno-mi/',
            note: 'Για «με συγχωρείτε» ή «σόρι».',
        },

        // Introduction
        {
            key: PhraseKeys.INTRODUCTION_MY_NAME,
            text: 'Με λένε …',
            pronunciation_ipa: '/me ˈlene/',
            pronunciation_simple: '/me ˈle-ne/',
        },
        {
            key: PhraseKeys.INTRODUCTION_NICE_TO_MEET,
            text: 'Χάρηκα!',
            pronunciation_ipa: '/ˈxaɾika/',
            pronunciation_simple: '/ˈxa-ri-ka/',
        },
        {
            key: PhraseKeys.INTRODUCTION_WHATS_YOUR_NAME,
            text: 'Πώς σε λένε;',
            pronunciation_ipa: '/pos se ˈlene/',
            pronunciation_simple: '/pos se ˈle-ne/',
            note: 'Ευγενικό πληθυντικό: «Πώς σας λένε;»',
        },

        // Communication
        {
            key: PhraseKeys.COMMUNICATION_DONT_UNDERSTAND,
            text: 'Δεν καταλαβαίνω.',
            pronunciation_ipa: '/ðen kata.laˈveno/',
            pronunciation_simple: '/then ka-ta-la-ˈve-no/',
        },
        {
            key: PhraseKeys.COMMUNICATION_SPEAK_ENGLISH,
            text: 'Μιλάτε Αγγλικά;',
            pronunciation_ipa: '/miˈlate aɣliˈka/',
            pronunciation_simple: '/mi-ˈla-te a-ghli-ˈka/',
        },
        {
            key: PhraseKeys.COMMUNICATION_SPEAK_SLOWER,
            text: 'Λίγο πιο αργά, παρακαλώ.',
            pronunciation_ipa: '/ˈliɣo pço arˈɣa, parakaˈlo/',
            pronunciation_simple: '/ˈlee-go pyo ar-ˈga, pa-ra-ka-ˈlo/',
        },
        {
            key: PhraseKeys.COMMUNICATION_LIMITED_LANGUAGE,
            text: 'Τα Ελληνικά μου δεν είναι πολύ καλά.',
            pronunciation_ipa: '/ta eliniˈka mu ðen ˈine poˈli kaˈla/',
            pronunciation_simple:
                '/ta e-li-ni-ˈka mu then ˈi-ne po-ˈli ka-ˈla/',
        },
        {
            key: PhraseKeys.COMMUNICATION_HOW_DO_YOU_SAY,
            text: 'Πώς το λέτε στα Ελληνικά;',
            pronunciation_ipa: '/pos to ˈlete sta eliniˈka/',
            pronunciation_simple: '/pos to ˈle-te sta e-li-ni-ˈka/',
        },

        // Food & Dining
        {
            key: PhraseKeys.REQUEST_MENU,
            text: 'Κατάλογο, παρακαλώ.',
            pronunciation_ipa: '/kaˈtaloɣo, parakaˈlo/',
            pronunciation_simple: '/ka-ˈta-lo-go, pa-ra-ka-ˈlo/',
        },
        {
            key: PhraseKeys.REQUEST_COFFEE,
            text: 'Καφέ',
            pronunciation_ipa: '/kaˈfe/',
            pronunciation_simple: '/ka-ˈfe/',
        },
        {
            key: PhraseKeys.REQUEST_WATER,
            text: 'Νερό',
            pronunciation_ipa: '/neˈro/',
            pronunciation_simple: '/ne-ˈro/',
        },
        {
            key: PhraseKeys.REQUEST_PLEASE,
            text: 'παρακαλώ',
            pronunciation_ipa: '/parakaˈlo/',
            pronunciation_simple: '/pa-ra-ka-ˈlo/',
            note: 'Χρήση όταν ζητάμε κάτι.',
        },
        {
            key: PhraseKeys.REQUEST_BILL,
            text: 'Λογαριασμό, παρακαλώ.',
            pronunciation_ipa: '/loɣarjazˈmo, parakaˈlo/',
            pronunciation_simple: '/lo-ɣa-riaz-ˈmo, pa-ra-ka-ˈlo/',
        },
        {
            key: PhraseKeys.DINING_VEGETARIAN,
            text: 'Είμαι χορτοφάγος.',
            pronunciation_ipa: '/ˈime xortoˈfaʝos/',
            pronunciation_simple: '/ˈi-me hor-to-ˈfa-yos/',
            note: 'Για γυναίκα: «χορτοφάγα».',
        },
        {
            key: PhraseKeys.DINING_DELICIOUS,
            text: 'Ήταν πεντανόστιμο!',
            pronunciation_ipa: '/ˈitan pendanˈostimo/',
            pronunciation_simple: '/ˈi-tan pen-da-ˈno-sti-mo/',
        },
        {
            key: PhraseKeys.DINING_YUMMY,
            text: 'Είναι τέλειο!',
            pronunciation_ipa: '/ˈine ˈtelio/',
            pronunciation_simple: '/ˈi-ne ˈte-lio/',
        },

        // Navigation
        {
            key: PhraseKeys.NAVIGATION_TRAIN_STATION,
            text: 'Πού είναι ο σταθμός;',
            pronunciation_ipa: '/pu ˈine o staθˈmos/',
            pronunciation_simple: '/pu ˈi-ne o stath-ˈmos/',
        },
        {
            key: PhraseKeys.NAVIGATION_RESTROOM,
            text: 'Πού είναι η τουαλέτα;',
            pronunciation_ipa: '/pu ˈine i tuaˈleta/',
            pronunciation_simple: '/pu ˈi-ne i tua-ˈle-ta/',
        },
        {
            key: PhraseKeys.NAVIGATION_ATM,
            text: 'Πού είναι το κοντινότερο ΑΤΜ;',
            pronunciation_ipa: '/pu ˈine to kondiˈnotero a.teˈem/',
            pronunciation_simple: '/pu ˈi-ne to kon-di-ˈno-te-ro A-T-M/',
        },

        // Shopping
        {
            key: PhraseKeys.SHOPPING_HOW_MUCH,
            text: 'Πόσο κάνει αυτό;',
            pronunciation_ipa: '/ˈposo ˈkani afˈto/',
            pronunciation_simple: '/ˈpo-so ˈka-ni af-ˈto/',
        },
        {
            key: PhraseKeys.SHOPPING_PAY_BY_CARD,
            text: 'Μπορώ με κάρτα;',
            pronunciation_ipa: '/boˈro me ˈkarta/',
            pronunciation_simple: '/bo-ˈro me ˈkar-ta/',
        },
        {
            key: PhraseKeys.SHOPPING_PAY_BY_CASH,
            text: 'Με μετρητά.',
            pronunciation_ipa: '/me metriˈta/',
            pronunciation_simple: '/me me-tri-ˈta/',
        },

        // Emergency
        {
            key: PhraseKeys.EMERGENCY_HELP,
            text: 'Βοήθεια!',
            pronunciation_ipa: '/voˈiθia/',
            pronunciation_simple: '/vo-ˈee-thia/',
        },
        {
            key: PhraseKeys.EMERGENCY_DOCTOR,
            text: 'Χρειάζομαι γιατρό!',
            pronunciation_ipa: '/xriˈazome ʝaˈtro/',
            pronunciation_simple: '/hri-ˈa-zo-me ya-ˈtro/',
        },
        {
            key: PhraseKeys.EMERGENCY_POLICE,
            text: 'Καλέστε την αστυνομία!',
            pronunciation_ipa: '/kaˈleste tin astinoˈmia/',
            pronunciation_simple: '/ka-ˈles-te tin as-ti-no-ˈmi-a/',
        },

        // Numbers 1-10
        {
            key: PhraseKeys.NUMBER_ONE,
            text: 'ένα',
            pronunciation_ipa: '/ˈena/',
            pronunciation_simple: '/ˈe-na/',
        },
        {
            key: PhraseKeys.NUMBER_TWO,
            text: 'δύο',
            pronunciation_ipa: '/ˈðio/',
            pronunciation_simple: '/ˈthio/',
        },
        {
            key: PhraseKeys.NUMBER_THREE,
            text: 'τρία',
            pronunciation_ipa: '/ˈtria/',
            pronunciation_simple: '/ˈtri-a/',
        },
        {
            key: PhraseKeys.NUMBER_FOUR,
            text: 'τέσσερα',
            pronunciation_ipa: '/ˈtesera/',
            pronunciation_simple: '/ˈte-se-ra/',
        },
        {
            key: PhraseKeys.NUMBER_FIVE,
            text: 'πέντε',
            pronunciation_ipa: '/ˈpende/',
            pronunciation_simple: '/ˈpen-de/',
        },
        {
            key: PhraseKeys.NUMBER_SIX,
            text: 'έξι',
            pronunciation_ipa: '/ˈeksi/',
            pronunciation_simple: '/ˈek-si/',
        },
        {
            key: PhraseKeys.NUMBER_SEVEN,
            text: 'εφτά',
            pronunciation_ipa: '/eˈfta/',
            pronunciation_simple: '/e-ˈfta/',
            note: 'Συνηθισμένο στην καθομιλουμένη· πιο επίσημο: «επτά».',
        },
        {
            key: PhraseKeys.NUMBER_EIGHT,
            text: 'οχτώ',
            pronunciation_ipa: '/oˈxto/',
            pronunciation_simple: '/o-ˈhto/',
            note: 'Συνηθισμένο στην καθομιλουμένη· πιο επίσημο: «οκτώ».',
        },
        {
            key: PhraseKeys.NUMBER_NINE,
            text: 'εννιά',
            pronunciation_ipa: '/eˈɲa/',
            pronunciation_simple: '/e-ˈnia/',
            note: 'Πιο επίσημο: «εννέα».',
        },
        {
            key: PhraseKeys.NUMBER_TEN,
            text: 'δέκα',
            pronunciation_ipa: '/ˈðeka/',
            pronunciation_simple: '/ˈthe-ka/',
        },
    ],
};
