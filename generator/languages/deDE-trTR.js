export const deck = {
    learnerLang: 'de-DE',
    targetLang: 'tr-TR',
    provider: 'azure',
    voice: {
        name: 'tr-TR-EmelNeural',
        ssmlGender: 'FEMALE',
    },
    cards: [
        // --------------------------------------------------
        // GREETINGS & POLITENESS
        // --------------------------------------------------
        {
            id: 'greeting_hello_casual',
            type: 'single',
            category: 'greeting',
            cue_L1: 'Hallo (sehr locker, zu Freunden)',
            context_L1:
                'Wenn du Freunde oder Leute in deinem Alter locker begrüßt.',
            l2: 'Selam!',
            pronunciation_ipa: 'seˈlam',
            pronunciation_simple: 'se-LAM',
            meaning_L1: 'Hi!',
            literal_L1: 'Gruß / Frieden',
            usage_L1:
                'Sehr lockere Begrüßung unter Freunden oder gleichaltrigen Leuten. In Cafés, Bars oder auf der Straße ist das völlig normal.',
            notes_L1:
                'Etwas lockerer als „Merhaba“. Du kannst es eher bei Leuten benutzen, mit denen du per Du bist.',
        },
        {
            id: 'greeting_hello_general',
            type: 'single',
            category: 'greeting',
            cue_L1: 'Hallo (neutral, tagsüber)',
            context_L1: 'Allgemeine Begrüßung tagsüber, fast immer passend.',
            l2: 'Merhaba!',
            pronunciation_ipa: 'ˈmɛɾhaba',
            pronunciation_simple: 'MER-ha-ba',
            meaning_L1: 'Hallo!',
            usage_L1:
                'Neutrale Standardbegrüßung, die du fast immer benutzen kannst – im Laden, im Restaurant, im Hotel, auf der Straße.',
            notes_L1:
                'Klingt freundlicher und natürlicher als sehr formelle Floskeln. Funktioniert mit „Sie“ und „du“ gleichermaßen.',
        },
        {
            id: 'greeting_bye_general',
            type: 'single',
            category: 'greeting',
            cue_L1: 'Tschüss / Bis später',
            context_L1: 'Wenn du dich locker verabschiedest.',
            l2: 'Görüşürüz.',
            pronunciation_ipa: 'ɟøɾyˈʃyɾyz',
            pronunciation_simple: 'gö-rü-SCHÜ-rüs',
            meaning_L1: 'Bis später. / Wir sehen uns.',
            usage_L1:
                'Sehr häufige, freundliche Verabschiedung. Du kannst es fast immer benutzen – bei Freunden, in Läden oder im Café.',
        },
        {
            id: 'politeness_please_request',
            type: 'single',
            category: 'politeness',
            cue_L1: '„Bitte“ (am Ende einer Bitte)',
            context_L1:
                'Wenn du eine Bitte höflich machst, z.B. im Restaurant.',
            l2: 'Lütfen.',
            pronunciation_ipa: 'ˈlytfen',
            pronunciation_simple: 'LÜT-fen',
            meaning_L1: 'Bitte.',
            usage_L1:
                'Wird an Bitten angehängt oder allein gesagt, um höflicher zu klingen. Im Türkischen wird es etwas seltener benutzt als das deutsche „bitte“, aber bei Touristen wirkt es sehr höflich.',
        },
        {
            id: 'thanks_formal',
            type: 'single',
            category: 'thanks',
            cue_L1: 'Danke (höflich, neutral)',
            context_L1: 'Wenn du dich höflich bei jemandem bedankst.',
            l2: 'Teşekkür ederim.',
            pronunciation_ipa: 'teʃekˈkyɾ edeˈɾim',
            pronunciation_simple: 'te-schek-KÜR e-DE-rim',
            meaning_L1: 'Vielen Dank.',
            literal_L1: 'Ich mache/erbringe Dank.',
            usage_L1:
                'Höfliche Standardform. Passt gut in Restaurants, Hotels und bei fremden Leuten. Du kannst es immer benutzen, ohne unhöflich zu wirken.',
        },
        {
            id: 'thanks_casual',
            type: 'single',
            category: 'thanks',
            cue_L1: 'Danke (locker, zu Freunden)',
            context_L1: 'Wenn du dich informell bei einer Person bedankst.',
            l2: 'Sağ ol.',
            pronunciation_ipa: 'ˈsaːol',
            pronunciation_simple: 'SAA-ol',
            meaning_L1: 'Danke.',
            literal_L1: 'Sei gesund.',
            usage_L1:
                'Sehr häufig im Alltag, nachdem dir jemand geholfen hat oder dir etwas gibt. Eher für „du“-Situationen.',
            variant_plural: {
                l2: 'Sağ olun.',
                pronunciation_ipa: 'ˈsaː olun',
                pronunciation_simple: 'SAA-o-lun',
            },
            notes_L1:
                '„Sağ ol“ ist informell (Singular), „Sağ olun“ höflicher oder für mehrere Personen.',
        },
        {
            id: 'thanks_short_neutral',
            type: 'single',
            category: 'thanks',
            cue_L1: 'Danke (kurz, sehr häufig)',
            context_L1: 'Kurzes Dankeschön in fast jeder Alltagssituation.',
            l2: 'Teşekkürler.',
            pronunciation_ipa: 'teʃekˈkyɾleɾ',
            pronunciation_simple: 'te-schek-KÜR-ler',
            meaning_L1: 'Danke. / Danke schön.',
            usage_L1:
                'Sehr häufige, kurze Form. Gut im Supermarkt, im Taxi oder im Café, wenn du einfach nur schnell „Danke“ sagen willst.',
        },
        {
            id: 'thanks_response_formal',
            type: 'single',
            category: 'politeness',
            cue_L1: '„Gern geschehen“ (höflich)',
            context_L1: 'Als Antwort auf „Danke“ in höflichen Situationen.',
            l2: 'Rica ederim.',
            pronunciation_ipa: 'ɾiˈd͡ʒa edeˈɾim',
            pronunciation_simple: 'ri-DJA e-DE-rim',
            meaning_L1: 'Gern geschehen.',
            literal_L1: 'Ich bitte darum.',
            usage_L1:
                'Höfliche Standardantwort auf „Teşekkürler“ oder „Teşekkür ederim“. Passt bei Fremden, im Service und allgemein formellen Situationen.',
        },
        {
            id: 'thanks_response_casual',
            type: 'single',
            category: 'politeness',
            cue_L1: '„Kein Problem“ (locker)',
            context_L1:
                'Lockere Antwort auf „Danke“ bei Freunden oder informell.',
            l2: 'Bir şey değil.',
            pronunciation_ipa: 'biɾ ʃej ˈdiːl',
            pronunciation_simple: 'bir schej DIIL',
            meaning_L1: 'Kein Problem. / Schon gut.',
            literal_L1: 'Es ist keine Sache.',
            usage_L1:
                'Sehr umgangssprachliche Antwort auf ein Dankeschön, vor allem bei Freunden und in entspannten Situationen.',
        },

        // --------------------------------------------------
        // INTRODUCTIONS & SMALL TALK
        // --------------------------------------------------
        {
            id: 'intro_my_name_is',
            type: 'single',
            category: 'introduction',
            cue_L1: 'Ich bin … (Name sagen)',
            context_L1: 'Wenn du dich kurz vorstellst.',
            l2: 'Ben Ayşe.',
            pronunciation_ipa: 'ben ˈajʃe',
            pronunciation_simple: 'ben AI-sche',
            meaning_L1: 'Ich bin Ayşe.',
            usage_L1:
                'Sehr übliche Art, den eigenen Namen zu sagen. Ersetze einfach „Ayşe“ durch deinen Namen, z.B. „Ben Anna.“',
            notes_L1:
                'Du kannst auch „Benim adım …“ sagen, aber „Ben …“ ist kürzer und sehr häufig.',
        },
        {
            id: 'intro_nice_to_meet_you',
            type: 'single',
            category: 'introduction',
            cue_L1: 'Freut mich (dich/Sie kennenzulernen)',
            context_L1: 'Direkt nach dem Austausch der Namen.',
            l2: 'Memnun oldum.',
            pronunciation_ipa: 'memˈnun olˈdum',
            pronunciation_simple: 'mem-NUN ol-DUM',
            meaning_L1: 'Freut mich.',
            usage_L1:
                'Standardphrase nach einer Vorstellung. Passt sowohl in eher formellen als auch in informellen Situationen.',
        },
        {
            id: 'intro_whats_your_name',
            type: 'single',
            category: 'introduction',
            cue_L1: 'Wie heißt du?',
            context_L1: 'Wenn du eine Person nach ihrem Namen fragst (duzen).',
            l2: 'Adın ne?',
            pronunciation_ipa: 'aˈdɯn ne',
            pronunciation_simple: 'a-DIN ne',
            meaning_L1: 'Wie heißt du?',
            usage_L1:
                'Informelle Frage, z.B. bei Gleichaltrigen oder Kindern. Für höflich oder mehrere Personen gibt es die Variante unten.',
            variant_plural: {
                l2: 'Adınız ne?',
                pronunciation_ipa: 'aˈdɯnɯz ne',
                pronunciation_simple: 'a-dı-NIZ ne',
            },
            notes_L1:
                '„Adın“ = dein Name (du), „Adınız“ = Ihr Name / euer Name (Sie/Plural).',
        },

        // --------------------------------------------------
        // COMMUNICATION / LANGUAGE ISSUES
        // --------------------------------------------------
        {
            id: 'lang_i_dont_understand',
            type: 'single',
            category: 'language',
            cue_L1: 'Ich verstehe nicht.',
            context_L1:
                'Wenn du etwas nicht verstanden hast, z.B. im Gespräch oder im Laden.',
            l2: 'Anlamıyorum.',
            pronunciation_ipa: 'anlaˈmɯjoɾum',
            pronunciation_simple: 'an-la-mı-JO-rum',
            meaning_L1: 'Ich verstehe (es) nicht.',
            usage_L1:
                'Sehr nützlich in allen Situationen, wenn du nachfragen oder signalisieren willst, dass du nicht mitkommst.',
        },
        {
            id: 'lang_do_you_speak_english',
            type: 'single',
            category: 'language',
            cue_L1: 'Sprechen Sie Englisch?',
            context_L1:
                'Wenn du wissen möchtest, ob jemand mit dir auf Englisch sprechen kann.',
            l2: 'İngilizce biliyor musunuz?',
            pronunciation_ipa: 'iŋɡiˈlizd͡ʒe biˈliːjoɾ muˈsunuz',
            pronunciation_simple: 'in-gi-LIZ-dsche bi-LI-jor mu-SU-nuz',
            meaning_L1: 'Sprechen Sie Englisch?',
            literal_L1: 'Wissen/Kennen Sie Englisch?',
            usage_L1:
                'In der Türkei ist Englisch hilfreicher als Deutsch. Diese Frage ist höflich und funktioniert in fast allen Situationen.',
        },
        {
            id: 'lang_speak_more_slowly',
            type: 'single',
            category: 'language',
            cue_L1: 'Könnten Sie bitte langsamer sprechen?',
            context_L1:
                'Wenn jemand zu schnell spricht und du es nicht gut verstehst.',
            l2: 'Daha yavaş konuşabilir misiniz, lütfen?',
            pronunciation_ipa: 'daˈha jaˈvaʃ konuʃaˈbiːɾ miˈsiniz ˈlytfen',
            pronunciation_simple:
                'da-HA ya-WASCH ko-nu-scha-BI-lir mi-SI-niz LÜT-fen',
            meaning_L1: 'Könnten Sie bitte langsamer sprechen?',
            usage_L1:
                'Höfliche, aber direkte Bitte. Sehr praktisch, wenn jemand merkt, dass du Türkisch lernst.',
        },
        {
            id: 'lang_my_turkish_not_good',
            type: 'single',
            category: 'language',
            cue_L1: 'Mein Türkisch ist nicht so gut.',
            context_L1:
                'Wenn du vorher warnen willst, dass du nur einfaches Türkisch kannst.',
            l2: 'Türkçem çok iyi değil.',
            pronunciation_ipa: 'ˈtyɾkt͡ʃem t͡ʃok iˈji ˈdiːl',
            pronunciation_simple: 'TÜRK-tschem tschoK i-YI DIIL',
            meaning_L1: 'Mein Türkisch ist nicht so gut.',
            usage_L1:
                'Klingt sehr natürlich und selbstironisch. Gute Einleitung, um um Geduld oder langsamere Sprache zu bitten.',
        },
        {
            id: 'lang_how_do_you_say_this',
            type: 'single',
            category: 'language',
            cue_L1: 'Wie sagt man das auf Türkisch?',
            context_L1:
                'Wenn du auf einen Gegenstand zeigen und nach dem türkischen Wort fragen möchtest.',
            l2: 'Bu Türkçe nasıl söylenir?',
            pronunciation_ipa: 'bu ˈtyɾkt͡ʃe ˈnɑsɯl søjleˈniɾ',
            pronunciation_simple: 'bu TÜRK-tsche NA-sıl söy-le-NIR',
            meaning_L1: 'Wie sagt man das auf Türkisch?',
            usage_L1:
                'Sehr praktisch beim Lernen vor Ort – du kannst dabei auf das Ding zeigen, über das du sprechen willst.',
        },

        // --------------------------------------------------
        // FOOD & DRINK
        // --------------------------------------------------
        {
            id: 'food_menu_please',
            type: 'single',
            category: 'food',
            cue_L1: 'Könnte ich die Speisekarte bekommen?',
            context_L1: 'Wenn du im Restaurant eine Speisekarte möchtest.',
            l2: 'Menü alabilir miyim?',
            pronunciation_ipa: 'ˈmeny alaˈbiːɾ miˈjim',
            pronunciation_simple: 'ME-nü a-la-bi-LIR mi-JIM',
            meaning_L1: 'Könnte ich die Speisekarte bekommen?',
            usage_L1:
                'Höfliche und sehr übliche Formulierung im Restaurant oder Café.',
            variant_plural: {
                l2: 'Menü alabilir miyiz?',
                pronunciation_ipa: 'ˈmeny alaˈbiːɾ miˈjiz',
                pronunciation_simple: 'ME-nü a-la-bi-LIR mi-JIZ',
            },
            notes_L1:
                'Mit „-miyim“ sprichst du als Einzelperson, mit „-miyiz“ fragst du für euch als Gruppe.',
        },
        {
            id: 'food_order_coffee',
            type: 'single',
            category: 'food',
            cue_L1: 'Einen Kaffee, bitte.',
            context_L1: 'Wenn du im Café oder Restaurant Kaffee bestellst.',
            l2: 'Bir kahve, lütfen.',
            pronunciation_ipa: 'biɾ kahˈve ˈlytfen',
            pronunciation_simple: 'bir kah-VE LÜT-fen',
            meaning_L1: 'Einen Kaffee, bitte.',
            usage_L1:
                'So bestellst du allgemein Kaffee. Für türkischen Mokka kannst du z.B. „Bir Türk kahvesi, lütfen.“ sagen.',
        },
        {
            id: 'food_order_water',
            type: 'single',
            category: 'food',
            cue_L1: 'Ein Wasser, bitte.',
            context_L1: 'Wenn du im Restaurant oder Kiosk Wasser bestellst.',
            l2: 'Bir su, lütfen.',
            pronunciation_ipa: 'biɾ su ˈlytfen',
            pronunciation_simple: 'bir su LÜT-fen',
            meaning_L1: 'Ein Wasser, bitte.',
            usage_L1:
                'Sehr einfache, aber typische Bestellung. In Restaurants bekommst du meist eine Flasche stilles Wasser.',
        },
        {
            id: 'food_bill_please',
            type: 'single',
            category: 'food',
            cue_L1: 'Die Rechnung, bitte.',
            context_L1: 'Wenn du im Restaurant oder Café bezahlen möchtest.',
            l2: 'Hesap alabilir miyim?',
            pronunciation_ipa: 'heˈsap alaˈbiːɾ miˈjim',
            pronunciation_simple: 'he-SAP a-la-bi-LIR mi-JIM',
            meaning_L1: 'Könnte ich die Rechnung bekommen?',
            usage_L1:
                'Sehr gebräuchliche und höfliche Form. Du kannst auch die Hand leicht heben und „Hesap, lütfen.“ sagen.',
            variant_plural: {
                l2: 'Hesap alabilir miyiz?',
                pronunciation_ipa: 'heˈsap alaˈbiːɾ miˈjiz',
                pronunciation_simple: 'he-SAP a-la-bi-LIR mi-JIZ',
            },
        },
        {
            id: 'food_vegetarian',
            type: 'single',
            category: 'food',
            cue_L1: 'Ich esse kein Fleisch.',
            context_L1:
                'Wenn du im Restaurant erklären willst, dass du kein Fleisch isst.',
            l2: 'Et yemiyorum.',
            pronunciation_ipa: 'et jeˈmijoɾum',
            pronunciation_simple: 'et je-mi-JO-rum',
            meaning_L1: 'Ich esse kein Fleisch.',
            usage_L1:
                'In vielen Situationen hilfreicher als „Ich bin Vegetarier/in“, weil es direkt auf Fleisch bezogen ist.',
        },
        {
            id: 'food_that_was_delicious',
            type: 'single',
            category: 'food',
            cue_L1: 'Das war sehr lecker!',
            context_L1:
                'Wenn du nach dem Essen das Essen loben möchtest, z.B. bei Freunden oder im Familienkreis.',
            l2: 'Çok lezzetliydi!',
            pronunciation_ipa: 't͡ʃok lezˈzetlijdi',
            pronunciation_simple: 'tschok lez-ZET-lii-di',
            meaning_L1: 'Das war sehr lecker!',
            usage_L1:
                'Sehr nette Rückmeldung an die Person, die gekocht hat. Passt auch im Restaurant, wenn du direkt mit dem Kellner sprichst.',
        },
        {
            id: 'food_this_is_really_good',
            type: 'single',
            category: 'food',
            cue_L1: 'Das ist wirklich lecker!',
            context_L1: 'Während du gerade isst und das Essen loben möchtest.',
            l2: 'Bu çok lezzetli!',
            pronunciation_ipa: 'bu t͡ʃok lezˈzetli',
            pronunciation_simple: 'bu tschok lez-ZET-li',
            meaning_L1: 'Das ist sehr lecker!',
            usage_L1:
                'Sag das während des Essens, während du auf das Gericht zeigst oder es probierst.',
        },

        // --------------------------------------------------
        // NAVIGATION
        // --------------------------------------------------
        {
            id: 'nav_train_station',
            type: 'single',
            category: 'navigation',
            cue_L1: 'Wo ist der Bahnhof?',
            context_L1: 'Wenn du nach dem Bahnhof/der Station fragst.',
            l2: 'Tren garı nerede?',
            pronunciation_ipa: 'tɾen ɡaˈɾɯ neˈɾede',
            pronunciation_simple: 'tren GA-rı ne-RE-de',
            meaning_L1: 'Wo ist der Bahnhof?',
            usage_L1:
                '„Tren garı“ wird im Alltag sehr oft benutzt. Gut für Orientierung in der Stadt.',
            notes_L1:
                'Du kannst auch „tren istasyonu“ hören; „tren garı“ klingt etwas umgangssprachlicher.',
        },
        {
            id: 'nav_toilet',
            type: 'single',
            category: 'navigation',
            cue_L1: 'Wo ist die Toilette?',
            context_L1: 'Wenn du die Toilette suchst.',
            l2: 'Tuvalet nerede?',
            pronunciation_ipa: 'tuvaˈlet neˈɾede',
            pronunciation_simple: 'tu-va-LET ne-RE-de',
            meaning_L1: 'Wo ist die Toilette?',
            usage_L1:
                '„Tuvalet“ ist das normale Alltagswort. Sehr häufige Frage in Cafés, Restaurants und Einkaufszentren.',
        },
        {
            id: 'nav_atm',
            type: 'single',
            category: 'navigation',
            cue_L1: 'Wo ist der nächste Geldautomat?',
            context_L1: 'Wenn du Bargeld abheben möchtest.',
            l2: 'En yakın bankamatik nerede?',
            pronunciation_ipa: 'en jaˈkɯn baŋkamaˈtik neˈɾede',
            pronunciation_simple: 'en ja-KIN ban-ka-ma-TIK ne-RE-de',
            meaning_L1: 'Wo ist der nächste Geldautomat?',
            usage_L1:
                '„Bankamatik“ ist ein sehr gängiges Wort für Geldautomat. Du kannst es auf der Straße oder im Laden fragen.',
        },

        // --------------------------------------------------
        // SHOPPING
        // --------------------------------------------------
        {
            id: 'shop_how_much_is_this',
            type: 'single',
            category: 'shopping',
            cue_L1: 'Wie viel kostet das?',
            context_L1: 'Wenn du nach dem Preis eines Produkts fragst.',
            l2: 'Bu ne kadar?',
            pronunciation_ipa: 'bu ne kaˈdaɾ',
            pronunciation_simple: 'bu ne ka-DAR',
            meaning_L1: 'Wie viel kostet das?',
            usage_L1:
                'Sag das und zeige auf den Gegenstand. Sehr einfache und extrem häufige Frage beim Einkaufen.',
        },
        {
            id: 'shop_pay_by_card',
            type: 'single',
            category: 'shopping',
            cue_L1: 'Kann ich mit Karte bezahlen?',
            context_L1:
                'Wenn du wissen möchtest, ob Kartenzahlung möglich ist.',
            l2: 'Kartla ödeyebilir miyim?',
            pronunciation_ipa: 'ˈkaɾtɫa ødejebiˈliɾ miˈjim',
            pronunciation_simple: 'KART-la ö-de-ye-BI-lir mi-JIM',
            meaning_L1: 'Kann ich mit Karte bezahlen?',
            usage_L1:
                'In vielen Läden inzwischen normal. Diese Frage ist höflich und sehr verständlich.',
        },
        {
            id: 'shop_pay_in_cash',
            type: 'single',
            category: 'shopping',
            cue_L1: 'Ich möchte bar bezahlen.',
            context_L1:
                'Wenn du klarstellen willst, dass du mit Bargeld zahlen möchtest.',
            l2: 'Nakit ödemek istiyorum.',
            pronunciation_ipa: 'naˈkit ødeˈmek isˈtijuɾum',
            pronunciation_simple: 'na-KIT ö-de-MEK is-ti-JO-rum',
            meaning_L1: 'Ich möchte bar bezahlen.',
            usage_L1:
                'Nützlich, wenn der Kassierer fragt, ob Karte oder bar. Funktioniert in allen Einkaufssituationen.',
        },

        // --------------------------------------------------
        // EMERGENCY
        // --------------------------------------------------
        {
            id: 'emergency_help',
            type: 'single',
            category: 'emergency',
            cue_L1: 'Hilfe! (laut, dringend)',
            context_L1: 'In einer Notsituation, wenn du Hilfe brauchst.',
            l2: 'Yardım edin!',
            pronunciation_ipa: 'jaɾˈdɯm eˈdin',
            pronunciation_simple: 'yar-DIM e-DIN',
            meaning_L1: 'Helfen Sie mir!',
            usage_L1:
                'Ruf das laut, wenn du dringend Hilfe brauchst. Es klingt ernst und wird sofort als Notruf verstanden.',
        },
        {
            id: 'emergency_need_doctor',
            type: 'single',
            category: 'emergency',
            cue_L1: 'Ich brauche einen Arzt!',
            context_L1:
                'Wenn jemand verletzt oder krank ist und du Hilfe suchst.',
            l2: 'Doktora ihtiyacım var!',
            pronunciation_ipa: 'dokˈtoɾa ihtijaˈd͡ʒɯm vaɾ',
            pronunciation_simple: 'dok-TO-ra ich-ti-ya-DJIM var',
            meaning_L1: 'Ich brauche einen Arzt!',
            usage_L1:
                'Sag das bei ernsten gesundheitlichen Problemen – auf der Straße, im Hotel oder in einer Apotheke.',
        },
        {
            id: 'emergency_call_police',
            type: 'single',
            category: 'emergency',
            cue_L1: 'Rufen Sie die Polizei!',
            context_L1:
                'Wenn du dringend möchtest, dass jemand die Polizei anruft.',
            l2: 'Polisi arayın!',
            pronunciation_ipa: 'poˈlisi aˈɾajɯn',
            pronunciation_simple: 'po-LI-si a-RA-yın',
            meaning_L1: 'Rufen Sie die Polizei!',
            usage_L1:
                'Sehr klare Aufforderung in Notfällen, etwa bei Diebstahl oder Gefahr.',
        },

        // --------------------------------------------------
        // CULTURAL RITUAL PHRASES
        // --------------------------------------------------
        {
            id: 'ritual_welcome_home',
            type: 'ritual_pair',
            category: 'greeting_ritual',
            cue_L1: 'Jemand kommt an (zu Besuch, ins Geschäft, nach Hause).',
            context_L1:
                'Sehr typischer Begrüßungsritualsatz, wenn jemand irgendwo ankommt.',
            call_l2: 'Hoş geldiniz.',
            call_pronunciation_ipa: 'hoʃ ɟelˈdiniz',
            call_pronunciation_simple: 'hosch gel-DI-niz',
            call_meaning_L1: 'Herzlich willkommen.',
            call_literal_L1: 'Ihr seid gut/schön gekommen.',
            call_usage_L1:
                'Sehr häufige Begrüßung, wenn jemand in einen Laden, in eine Wohnung oder ins Büro kommt – vor allem, wenn ihr euch siezt.',
            response_l2: 'Hoş bulduk.',
            response_pronunciation_ipa: 'hoʃ bulˈduk',
            response_pronunciation_simple: 'hosch bul-DUK',
            response_meaning_L1: 'Danke (für die Begrüßung).',
            notes_L1:
                'Informell zu einer Person sagt man oft „Hoş geldin.“ Stattdessen. Die Antwort bleibt immer „Hoş bulduk.“',
        },
        {
            id: 'ritual_goodbye_host_guest',
            type: 'ritual_pair',
            category: 'greeting_ritual',
            cue_L1: 'Verabschiedung – jemand geht, jemand bleibt.',
            context_L1:
                'Typischer Abschiedsritualsatz zwischen der Person, die bleibt, und der Person, die geht.',
            call_l2: 'Güle güle.',
            call_pronunciation_ipa: 'ɟyˈle ɟyˈle',
            call_pronunciation_simple: 'GÜ-le GÜ-le',
            call_meaning_L1: 'Tschüss, mach’s gut.',
            call_literal_L1: 'Geh lachend / mit einem Lächeln.',
            call_usage_L1:
                'Das sagt meistens die Person, die bleibt, z.B. der Ladenbesitzer, wenn du hinausgehst.',
            response_l2: 'Hoşça kal.',
            response_pronunciation_ipa: 'ˈhoʃt͡ʃa kaɫ',
            response_pronunciation_simple: 'HOSCH-tscha kal',
            response_meaning_L1: 'Mach’s gut. / Bleib gesund.',
            notes_L1:
                'Die Rollen sind nicht superstreng, aber grob: der Bleibende „Güle güle“, der Gehende „Hoşça kal“. Beide klingen sehr freundlich.',
        },
        {
            id: 'ritual_work_easy',
            type: 'ritual_pair',
            category: 'work_ritual',
            cue_L1: 'Jemand arbeitet (Kellner, Verkäufer, Handwerker) und du willst etwas Freundliches sagen.',
            context_L1:
                'Sehr typische Floskel, um arbeitende Menschen höflich anzusprechen.',
            call_l2: 'Kolay gelsin.',
            call_pronunciation_ipa: 'koˈlaj ɟelˈsin',
            call_pronunciation_simple: 'ko-LAI gel-SIN',
            call_meaning_L1: 'Gutes Gelingen bei der Arbeit.',
            call_literal_L1: 'Möge es leicht fallen.',
            call_usage_L1:
                'Sehr türkische, höfliche Formel gegenüber Menschen, die gerade arbeiten – im Laden, auf der Straße oder im Büro.',
            response_l2: 'Sağ olun.',
            response_pronunciation_ipa: 'ˈsaː olun',
            response_pronunciation_simple: 'SAA-o-lun',
            response_meaning_L1: 'Danke.',
            notes_L1:
                'Du kannst „Kolay gelsin“ auch sagen, bevor du eine Frage stellst – das wirkt direkt viel sympathischer.',
        },
        {
            id: 'ritual_food_afiyet',
            type: 'ritual_pair',
            category: 'food_ritual',
            cue_L1: 'Jemand isst oder bekommt Essen.',
            context_L1:
                'Sehr verbreitete Essensfloskel vor oder während des Essens.',
            call_l2: 'Afiyet olsun.',
            call_pronunciation_ipa: 'aˈfijet olˈsun',
            call_pronunciation_simple: 'a-FI-jet ol-SUN',
            call_meaning_L1: 'Guten Appetit.',
            call_usage_L1:
                'Wird gesagt, wenn jemand beginnt zu essen, schon am Essen ist oder Essen serviert bekommt.',
            response_l2: 'Size de.',
            response_pronunciation_ipa: 'ˈsize de',
            response_pronunciation_simple: 'SI-ze de',
            response_meaning_L1: 'Ihnen auch. / Dir auch.',
            notes_L1:
                'Die Antwort kann auch einfach wieder „Afiyet olsun.“ sein. Im Alltag hört man beide Varianten.',
        },
        {
            id: 'ritual_food_ellersaglik',
            type: 'ritual_pair',
            category: 'food_ritual',
            cue_L1: 'Du möchtest der Person danken, die gekocht hat.',
            context_L1:
                'Typische Floskel direkt an die Person, die das Essen vorbereitet hat.',
            call_l2: 'Ellerine sağlık.',
            call_pronunciation_ipa: 'elleɾiˈne ˈsaːɫɯk',
            call_pronunciation_simple: 'el-le-ri-NE SAA-lık',
            call_meaning_L1: 'Danke fürs Kochen / Sehr gut gekocht.',
            call_literal_L1: 'Gesundheit deinen Händen.',
            call_usage_L1:
                'Sehr schöne, persönliche Art, die Köchin/den Koch zu loben. Wird im Familienkreis und bei Freunden viel benutzt.',
            response_l2: 'Afiyet olsun.',
            response_pronunciation_ipa: 'aˈfijet olˈsun',
            response_pronunciation_simple: 'a-FI-jet ol-SUN',
            response_meaning_L1: 'Guten Appetit. / Lass es dir schmecken.',
            notes_L1:
                'Die Antwort „Afiyet olsun.“ funktioniert auch hier als freundliche Standardreaktion.',
        },
        {
            id: 'ritual_offering_buyurun',
            type: 'ritual_pair',
            category: 'ritual',
            cue_L1: 'Du gibst jemandem etwas (z.B. Essen, einen Platz, ein Dokument) oder lässt jemanden vor.',
            context_L1:
                'Sehr vielseitige Höflichkeitsfloskel beim Anbieten oder Einladen.',
            call_l2: 'Buyurun.',
            call_pronunciation_ipa: 'buˈjuɾun',
            call_pronunciation_simple: 'bu-JU-run',
            call_meaning_L1: 'Bitte. / Hier, bitte. / Komm(en) Sie herein.',
            call_usage_L1:
                'Wird benutzt beim Servieren, beim Reichen von Dingen, beim Hineinbitten oder wenn man jemanden vorlässt.',
            response_l2: 'Teşekkürler.',
            response_pronunciation_ipa: 'teʃekˈkyɾleɾ',
            response_pronunciation_simple: 'te-schek-KÜR-ler',
            response_meaning_L1: 'Danke.',
            notes_L1:
                '„Buyurun“ ist extrem häufig und sehr vielseitig. Die Standardantwort ist einfach ein kurzes Dankeschön.',
        },

        // --------------------------------------------------
        // NUMBERS 1–10
        // --------------------------------------------------
        {
            id: 'number_1',
            type: 'single',
            category: 'number',
            cue_L1: 'Zahl: 1',
            context_L1: 'Beim Zählen oder Bestellen („eins“).',
            l2: 'Bir.',
            pronunciation_ipa: 'biɾ',
            pronunciation_simple: 'bir',
            meaning_L1: 'eins',
            usage_L1:
                'Auch sehr häufig beim Bestellen: „Bir kahve, lütfen.“ – „Einen Kaffee, bitte.“',
        },
        {
            id: 'number_2',
            type: 'single',
            category: 'number',
            cue_L1: 'Zahl: 2',
            context_L1: 'Beim Zählen oder Bestellen („zwei“).',
            l2: 'İki.',
            pronunciation_ipa: 'iˈci',
            pronunciation_simple: 'i-KI',
            meaning_L1: 'zwei',
            usage_L1:
                'Wird sehr oft in Bestellungen und beim Zählen verwendet, ähnlich wie im Deutschen.',
        },
        {
            id: 'number_3',
            type: 'single',
            category: 'number',
            cue_L1: 'Zahl: 3',
            context_L1: 'Beim Zählen oder Bestellen („drei“).',
            l2: 'Üç.',
            pronunciation_ipa: 'yt͡ʃ',
            pronunciation_simple: 'ÜTSCH',
            meaning_L1: 'drei',
            usage_L1:
                'Achte auf den „tsch“-Laut am Ende – ähnlich wie im deutschen „Matsch“.',
        },
        {
            id: 'number_4',
            type: 'single',
            category: 'number',
            cue_L1: 'Zahl: 4',
            context_L1: 'Beim Zählen oder Bestellen („vier“).',
            l2: 'Dört.',
            pronunciation_ipa: 'dœɾt',
            pronunciation_simple: 'DÖRT',
            meaning_L1: 'vier',
            usage_L1:
                'Das „ö“ klingt wie in „schön“. Wichtig für Preise und Zimmernummern.',
        },
        {
            id: 'number_5',
            type: 'single',
            category: 'number',
            cue_L1: 'Zahl: 5',
            context_L1: 'Beim Zählen oder Bestellen („fünf“).',
            l2: 'Beş.',
            pronunciation_ipa: 'beʃ',
            pronunciation_simple: 'BESCH',
            meaning_L1: 'fünf',
            usage_L1:
                'Das „ş“ wird wie deutsches „sch“ gesprochen. Sehr häufig bei Uhrzeiten und Preisen.',
        },
        {
            id: 'number_6',
            type: 'single',
            category: 'number',
            cue_L1: 'Zahl: 6',
            context_L1: 'Beim Zählen oder Bestellen („sechs“).',
            l2: 'Altı.',
            pronunciation_ipa: 'alˈtɯ',
            pronunciation_simple: 'al-TI',
            meaning_L1: 'sechs',
            usage_L1:
                'Das letzte „ı“ ist der türkische Laut ohne Punkt – ungefähr wie ein sehr kurzes, dumpfes „i“.',
        },
        {
            id: 'number_7',
            type: 'single',
            category: 'number',
            cue_L1: 'Zahl: 7',
            context_L1: 'Beim Zählen oder Bestellen („sieben“).',
            l2: 'Yedi.',
            pronunciation_ipa: 'jeˈdi',
            pronunciation_simple: 'je-DI',
            meaning_L1: 'sieben',
            usage_L1:
                'Das anfängliche „y“ klingt wie das deutsche „j“ in „ja“.',
        },
        {
            id: 'number_8',
            type: 'single',
            category: 'number',
            cue_L1: 'Zahl: 8',
            context_L1: 'Beim Zählen oder Bestellen („acht“).',
            l2: 'Sekiz.',
            pronunciation_ipa: 'seˈkiz',
            pronunciation_simple: 'se-KIZ',
            meaning_L1: 'acht',
            usage_L1:
                'Sehr wichtig für Telefonnummern und Preise. Betonung liegt auf der zweiten Silbe.',
        },
        {
            id: 'number_9',
            type: 'single',
            category: 'number',
            cue_L1: 'Zahl: 9',
            context_L1: 'Beim Zählen oder Bestellen („neun“).',
            l2: 'Dokuz.',
            pronunciation_ipa: 'doˈkuz',
            pronunciation_simple: 'do-KUZ',
            meaning_L1: 'neun',
            usage_L1:
                'Kommt häufig in Telefonnummern und Zimmernummern vor – am besten laut mitsprechen, um sich dran zu gewöhnen.',
        },
        {
            id: 'number_10',
            type: 'single',
            category: 'number',
            cue_L1: 'Zahl: 10',
            context_L1: 'Beim Zählen oder Bestellen („zehn“).',
            l2: 'On.',
            pronunciation_ipa: 'on',
            pronunciation_simple: 'on',
            meaning_L1: 'zehn',
            usage_L1:
                'Grundlage für viele weitere Zahlen, z.B. „on bir“ = elf, „on iki“ = zwölf.',
        },
    ],
};
