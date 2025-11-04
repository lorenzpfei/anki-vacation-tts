export const deck = {
    learnerLang: 'de-DE',
    targetLang: 'tr-TR',
    provider: 'azure',
    voice: {
        name: 'tr-TR-EmelNeural',
        ssmlGender: 'FEMALE',
    },
    cards: [
        // === GREETINGS & POLITENESS ===
        {
            id: 'hello_merhaba',
            type: 'single',
            category: 'greeting',
            cue_L1: 'Hallo (neutral, höflich)',
            context_L1: 'Allgemeine Begrüßung in fast jeder Situation.',
            l2: 'Merhaba',
            pronunciation_ipa: 'ˈmɛɾhaba',
            pronunciation_simple: 'mer-ha-ba',
            meaning_L1: 'Hallo / Guten Tag',
            usage_L1:
                'Sehr üblich in der Türkei, passt zu Unbekannten, Verkäufer:innen, Behörden usw. Funktioniert fast immer und klingt freundlich.',
            notes_L1:
                'In Istanbul ist „Merhaba“ oft neutraler und etwas höflicher als das sehr informelle „Selam“.',
        },
        {
            id: 'hello_selam',
            type: 'single',
            category: 'greeting',
            cue_L1: 'Hi (sehr locker, unter Freunden)',
            context_L1:
                'Lockere Begrüßung unter Bekannten oder in entspannten Situationen.',
            l2: 'Selam',
            pronunciation_ipa: 'seˈlam',
            pronunciation_simple: 'se-lam',
            meaning_L1: 'Hi',
            usage_L1:
                'Wird viel unter Freunden oder jüngeren Leuten benutzt. Zu deutlich älteren oder formellen Personen lieber „Merhaba“ sagen.',
            notes_L1: 'Vom Gefühl her ähnlich wie „Hi“ auf Deutsch/Englisch.',
        },
        {
            id: 'greeting_day_iyi_gunler',
            type: 'single',
            category: 'greeting',
            cue_L1: 'Guten Tag / Schönen Tag',
            context_L1:
                'Typisches Tagesgruß- oder Verabschiedungswort, z.B. im Laden, am Telefon.',
            l2: 'İyi günler',
            pronunciation_ipa: 'iˈji ɟynˈlɛɾ',
            pronunciation_simple: 'i-ji guen-ler',
            meaning_L1: 'Guten Tag / Einen schönen Tag',
            usage_L1:
                'Sehr häufig im Service-Kontext: beim Betreten oder Verlassen eines Geschäfts, im Büro, am Telefon. Passt sowohl zur Begrüßung als auch zum Abschied.',
            notes_L1:
                'Klingt etwas formeller als „Merhaba“, aber ist im Alltag extrem üblich.',
        },
        {
            id: 'bye_gorusuruz',
            type: 'single',
            category: 'greeting',
            cue_L1: 'Bis später / Wir sehen uns',
            context_L1:
                'Verabschiedung von jemandem, den man wahrscheinlich wieder sieht.',
            l2: 'Görüşürüz',
            pronunciation_ipa: 'ɟøɾyˈʃyɾyz',
            pronunciation_simple: 'goe-rue-schue-ruez',
            meaning_L1: 'Bis später / Wir sehen uns',
            usage_L1:
                'Sehr üblich unter Freunden oder Bekannten. Du kannst es fast immer als informelles „Tschüss“ benutzen.',
            notes_L1:
                'Für sehr formelle Situationen sagen viele einfach nochmal „İyi günler“ beim Weggehen.',
        },
        {
            id: 'bye_hosca_kal',
            type: 'single',
            category: 'greeting',
            cue_L1: 'Tschüss (du gehst, die andere Person bleibt)',
            context_L1:
                'Wenn du weggehst und jemand anders bleibt an Ort und Stelle.',
            l2: 'Hoşça kal',
            pronunciation_ipa: 'hoʃtʃa ˈkal',
            pronunciation_simple: 'hosch-tscha kal',
            meaning_L1: 'Tschüss, mach’s gut',
            usage_L1:
                'Wird von der Person benutzt, die weggeht. Die Person, die bleibt, sagt meistens „Güle güle“ zurück.',
            variant_plural: {
                l2: 'Hoşça kalın',
                pronunciation_ipa: 'hoʃtʃa ˈkalɯn',
                pronunciation_simple: 'hosch-tscha ka-luhn',
            },
        },
        {
            id: 'yes_evet',
            type: 'single',
            category: 'politeness',
            cue_L1: 'Ja',
            context_L1: 'Allgemeines „Ja“ in jeder Situation.',
            l2: 'Evet',
            pronunciation_ipa: 'eˈvɛt',
            pronunciation_simple: 'e-vet',
            meaning_L1: 'Ja',
            usage_L1:
                'Standardwort für „Ja“ in allen Situationen, von sehr locker bis sehr formell.',
        },
        {
            id: 'no_hayir',
            type: 'single',
            category: 'politeness',
            cue_L1: 'Nein',
            context_L1: 'Allgemeines „Nein“, wenn du etwas ablehnen willst.',
            l2: 'Hayır',
            pronunciation_ipa: 'haˈjɯɾ',
            pronunciation_simple: 'ha-juh-r',
            meaning_L1: 'Nein',
            usage_L1:
                'Neutrales, deutliches „Nein“. In der Praxis hört man oft auch „Yok“ (gibt es nicht/nee), aber „Hayır“ ist für Lernende klarer.',
            notes_L1:
                'Wenn du höflicher klingen willst, kombiniere es mit „teşekkürler“: z.B. „Hayır, teşekkürler.“ (Nein, danke).',
        },
        {
            id: 'please_request_lutfen',
            type: 'single',
            category: 'politeness',
            cue_L1: 'Bitte (bei einer Bitte, am Ende)',
            context_L1: 'Du fügst es an eine Bitte an, z.B. beim Bestellen.',
            l2: 'Lütfen',
            pronunciation_ipa: 'ˈlytfen',
            pronunciation_simple: 'luet-fen',
            meaning_L1: 'bitte',
            usage_L1:
                'Wird meist am Ende einer höflichen Bitte gesagt: „Bir kahve lütfen.“ Es kann auch alleine benutzt werden, wenn du jemanden freundlich bittest.',
        },
        {
            id: 'please_response_rica_ederim',
            type: 'single',
            category: 'politeness',
            cue_L1: 'Gern geschehen / Bitte ( als Antwort auf Danke)',
            context_L1: 'Standardantwort, wenn sich jemand bei dir bedankt.',
            l2: 'Rica ederim',
            pronunciation_ipa: 'ɾidʒa edeˈɾim',
            pronunciation_simple: 'ri-dscha e-de-rim',
            meaning_L1: 'Gern geschehen / Bitte sehr',
            usage_L1:
                'Sehr gebräuchliche, höfliche Antwort auf „Teşekkürler“ oder „Sağ ol“. Klingt freundlich, weder zu steif noch zu locker.',
        },
        {
            id: 'thanks_tesekkurler',
            type: 'single',
            category: 'thanks',
            cue_L1: 'Danke (neutral, höflich)',
            context_L1: 'Wenn dir jemand hilft, dir etwas bringt usw.',
            l2: 'Teşekkürler',
            pronunciation_ipa: 'teʃekˈkyɾleɾ',
            pronunciation_simple: 'te-schek-kuehr-ler',
            meaning_L1: 'Danke',
            usage_L1:
                'Sehr häufige, neutrale Form von „Danke“. Passt in fast allen Situationen – von Restaurant bis Freundeskreis.',
            notes_L1:
                'Etwas länger und formeller ist „Teşekkür ederim“. Sehr locker zu Freund:innen sagt man oft „Sağ ol“.',
        },
        {
            id: 'thanks_sag_ol',
            type: 'single',
            category: 'thanks',
            cue_L1: 'Danke (locker, persönlich)',
            context_L1: 'Dank an Freund:innen oder in entspannter Atmosphäre.',
            l2: 'Sağ ol',
            pronunciation_ipa: 'saːˈoɫ',
            pronunciation_simple: 'saa-ol',
            meaning_L1: 'Danke',
            usage_L1:
                'Klingt warm und persönlich, eher im informellen Bereich. In Läden/Restaurants lieber „Teşekkürler“ benutzen.',
            notes_L1:
                'Plural/höflich gegenüber mehreren oder Älteren wäre „Sağ olun“.',
        },

        // === CULTURAL RITUALS ===
        {
            id: 'welcome_ritual',
            type: 'ritual_pair',
            category: 'ritual_greeting',
            cue_L1: 'Wenn du irgendwo ankommst und man dich willkommen heißt',
            context_L1:
                'Zu Hause bei Leuten, in einer Pension, in kleinen Hotels oder auch in Geschäften.',
            call_l2: 'Hoş geldiniz',
            call_pronunciation_ipa: 'hoʃ ɟelˈdiniz',
            call_pronunciation_simple: 'hosch gel-di-nis',
            call_meaning_L1: 'Willkommen (zu dir/Ihnen gesagt)',
            call_literal_L1: 'Ihr seid gut gekommen',
            call_usage_L1:
                '„Hoş geldiniz“ wird beim Ankommen gesagt, besonders wenn man irgendwo zu Besuch ist oder als Kunde betritt. Du wirst das sehr oft hören.',
            response_l2: 'Hoş bulduk',
            response_pronunciation_ipa: 'hoʃ bulˈduk',
            response_pronunciation_simple: 'hosch bul-duk',
            response_meaning_L1: 'Danke (Antwort auf „Hoş geldiniz“)',
            notes_L1:
                'Antwort ruhig auch mit einem Lächeln. Unter Freund:innen und in Einzahl hört man auch „Hoş geldin“ → „Hoş bulduk“.',
        },
        {
            id: 'ritual_kolay_gelsin',
            type: 'single',
            category: 'ritual',
            cue_L1: 'Leute freundlich bei der Arbeit ansprechen',
            context_L1:
                'Zu Verkäufer:innen, Handwerker:innen, Reinigungskräften usw., wenn sie gerade arbeiten.',
            l2: 'Kolay gelsin',
            pronunciation_ipa: 'koˈlaj ɟelˈsin',
            pronunciation_simple: 'ko-laj gel-sin',
            meaning_L1: 'Möge es dir/Ihnen leicht fallen',
            literal_L1: 'Möge es leicht kommen',
            usage_L1:
                'Sehr türkische, höfliche Floskel, wenn jemand arbeitet. Zum Beispiel, wenn du einen Laden betrittst oder an einer Baustelle vorbeigehst.',
            notes_L1:
                'Darauf antworten Leute meist mit „Sağ olun“, „Teşekkürler“ oder wieder „Kolay gelsin“. Für dich reicht „Kolay gelsin“ zu sagen.',
        },
        {
            id: 'ritual_afiyet_olsun',
            type: 'single',
            category: 'ritual_food',
            cue_L1: '„Guten Appetit“ wünschen',
            context_L1:
                'Zu jemandem, der gerade isst oder wenn dir das Essen gebracht wird.',
            l2: 'Afiyet olsun',
            pronunciation_ipa: 'aˈfijet olˈsun',
            pronunciation_simple: 'a-fi-jet ol-sun',
            meaning_L1: 'Guten Appetit',
            usage_L1:
                'Wird beim Servieren oder wenn jemand isst gesagt. Bedienungen sagen es oft, wenn sie das Essen bringen.',
            notes_L1:
                'Als Reaktion darauf reicht „Teşekkürler“. Nach dem Essen sagt man eher „Çok lezzetliydi“ oder „Eline sağlık“ zur Person, die gekocht hat.',
        },
        {
            id: 'ritual_eline_saglik',
            type: 'single',
            category: 'ritual_food',
            cue_L1: 'Kompliment an die Person, die gekocht hat',
            context_L1:
                'Nach dem Essen, wenn du sagen willst, dass das Essen gut war.',
            l2: 'Eline sağlık',
            pronunciation_ipa: 'eliˈne saːˈɫɯk',
            pronunciation_simple: 'e-li-ne saa-luhk',
            meaning_L1:
                'Danke für das Essen (wörtlich „Gesundheit deiner Hand“)',
            literal_L1: 'Gesundheit deiner Hand',
            usage_L1:
                'Sehr typische türkische Floskel zur Person, die gekocht oder vorbereitet hat. Klingt super höflich und wertschätzend.',
            variant_plural: {
                l2: 'Ellerinize sağlık',
                pronunciation_ipa: 'elleɾiˈnizɛ saːˈɫɯk',
                pronunciation_simple: 'el-le-ri-ni-ze saa-luhk',
            },
            notes_L1:
                'Singular „Eline sağlık“ für Leute, die du duzt; plural/höflich „Ellerinize sağlık“ für mehrere oder für Respekt.',
        },
        {
            id: 'ritual_gecmis_olsun',
            type: 'single',
            category: 'ritual',
            cue_L1: 'Gute Besserung / Es tut mir leid (nach Unfall, Krankheit)',
            context_L1:
                'Wenn jemand krank war, einen Unfall hatte oder etwas Schlimmes erlebt hat.',
            l2: 'Geçmiş olsun',
            pronunciation_ipa: 'ɟetʃˈmiʃ olˈsun',
            pronunciation_simple: 'getsch-misch ol-sun',
            meaning_L1: 'Gute Besserung / Hoffentlich ist es vorbei',
            usage_L1:
                'Sehr häufige Floskel bei Krankheit, Unfall oder kleinen Missgeschicken. Die Person antwortet meist mit „Teşekkürler“.',
        },
        {
            id: 'ritual_buyurun',
            type: 'single',
            category: 'ritual',
            cue_L1: '„Hier bitte“ / „Kommen Sie rein“',
            context_L1:
                'Wenn du etwas reichst oder jemandem höflich den Vortritt lässt.',
            l2: 'Buyurun',
            pronunciation_ipa: 'buˈjuɾun',
            pronunciation_simple: 'bu-ju-run',
            meaning_L1: 'Bitte / Hier bitte / Kommen Sie rein',
            usage_L1:
                '„Buyurun“ ist ein Allround-Wort: beim Hineinbitten, beim Überreichen von etwas oder als höfliche Reaktion, wenn jemand dich anspricht.',
            notes_L1:
                'Du wirst das Wort ständig hören – gerade von Verkäufer:innen, Kellner:innen und an Schaltern.',
        },

        // === INTRODUCTION / SMALL TALK ===
        {
            id: 'intro_my_name',
            type: 'single',
            category: 'introduction',
            cue_L1: 'Ich heiße … / Ich bin …',
            context_L1: 'Wenn du deinen Namen sagst.',
            l2: 'Ben …',
            pronunciation_ipa: 'bɛn',
            pronunciation_simple: 'ben …',
            meaning_L1: 'Ich bin …',
            usage_L1:
                'Du sagst einfach „Ben …“ und fügst deinen Namen an, z.B. „Ben Anna“. Sehr natürlich und häufig, auch informell.',
            notes_L1:
                'Etwas formeller wäre „Adım …“ (Mein Name ist …). „Ben …“ reicht fast immer.',
        },
        {
            id: 'intro_nice_to_meet_you',
            type: 'single',
            category: 'introduction',
            cue_L1: 'Freut mich, dich/Sie kennenzulernen',
            context_L1:
                'Nach der Vorstellung, wenn du höflich reagieren willst.',
            l2: 'Memnun oldum',
            pronunciation_ipa: 'memˈnun olˈdum',
            pronunciation_simple: 'mem-nun ol-dum',
            meaning_L1: 'Freut mich (Sie kennenzulernen)',
            usage_L1:
                'Sehr gängige Antwort, wenn ihr euch vorgestellt habt. Funktioniert sowohl im informellen als auch im höflichen Kontext.',
        },
        {
            id: 'intro_whats_your_name',
            type: 'single',
            category: 'introduction',
            cue_L1: 'Wie heißt du / Wie heißen Sie?',
            context_L1: 'Wenn du nach dem Namen fragst.',
            l2: 'Adın ne?',
            pronunciation_ipa: 'aˈdɯn ne',
            pronunciation_simple: 'a-duhn ne',
            meaning_L1: 'Wie heißt du?',
            usage_L1: 'Informell, z.B. bei Gleichaltrigen oder Kindern.',
            variant_plural: {
                l2: 'Adınız ne?',
                pronunciation_ipa: 'adɯˈnɯz ne',
                pronunciation_simple: 'a-duh-nuhz ne',
            },
            notes_L1:
                'Für höfliches „Sie“ oder mehrere Personen benutzt du die Variante „Adınız ne?“. In vielen Situationen passt auch einfach ein vorgestelltes „Ben …“ und man fragt gar nicht explizit.',
        },

        // === COMMUNICATION / LANGUAGE ISSUES ===
        {
            id: 'comm_dont_understand',
            type: 'single',
            category: 'communication',
            cue_L1: 'Ich verstehe nicht.',
            context_L1: 'Wenn du jemanden nicht verstanden hast.',
            l2: 'Anlamıyorum',
            pronunciation_ipa: 'anlaˈmɯjoɾum',
            pronunciation_simple: 'an-la-muh-jo-rum',
            meaning_L1: 'Ich verstehe (es) nicht.',
            usage_L1:
                'Kannst du immer sagen, wenn du jemanden nicht verstehst. Oft kombiniert mit einer Bitte, langsamer zu sprechen.',
            notes_L1:
                'Sehr häufig ist auch „Anlamadım“ (Ich habe es nicht verstanden) nach einem einzelnen Satz.',
        },
        {
            id: 'comm_speak_english',
            type: 'single',
            category: 'communication',
            cue_L1: 'Sprechen Sie Englisch?',
            context_L1: 'Wenn du auf Englisch wechseln möchtest.',
            l2: 'İngilizce biliyor musunuz?',
            pronunciation_ipa: 'iŋɡiˈlizdʒe biliˈjoɾ musuˈnuz',
            pronunciation_simple: 'in-gi-liz-dsche bi-li-jor mu-su-nuz',
            meaning_L1: 'Sprechen Sie Englisch?',
            usage_L1:
                'Standardfrage, um zu prüfen, ob jemand Englisch kann. Falls du lieber Deutsch sagen willst, kannst du „İngilizce“ durch „Almanca“ ersetzen.',
            notes_L1:
                '„Almanca biliyor musunuz?“ = „Sprechen Sie Deutsch?“. In touristischen Gegenden geht beides oft.',
        },
        {
            id: 'comm_speak_slower',
            type: 'single',
            category: 'communication',
            cue_L1: 'Können Sie bitte langsamer sprechen?',
            context_L1: 'Wenn jemand zu schnell spricht.',
            l2: 'Yavaş konuşur musunuz, lütfen?',
            pronunciation_ipa: 'jaˈvaʃ konuˈʃuɾ musuˈnuz ˈlytfen',
            pronunciation_simple: 'ja-wasch ko-nu-schur mu-su-nuz luet-fen',
            meaning_L1: 'Können Sie bitte langsamer sprechen?',
            usage_L1:
                'Kürzere, aber immer noch höfliche Standardform. Funktioniert in fast jeder Situation.',
            notes_L1:
                'Eine längere Variante wäre „Biraz daha yavaş konuşur musunuz, lütfen?“ – für den Alltag ist die kürzere Form völlig ausreichend.',
        },
        {
            id: 'comm_turkish_not_well',
            type: 'single',
            category: 'communication',
            cue_L1: 'Ich spreche nicht so gut Türkisch.',
            context_L1: 'Bescheiden erklären, dass dein Türkisch begrenzt ist.',
            l2: 'Türkçem çok iyi değil',
            pronunciation_ipa: 'ˈtyɾktʃem tʃok iˈji deˈjil',
            pronunciation_simple: 'tuerk-tschem tschok i-ji de-jil',
            meaning_L1: 'Mein Türkisch ist nicht sehr gut.',
            usage_L1:
                'Sehr natürliche Art, dein Sprachniveau zu erklären. Wird von Muttersprachler:innen genauso gesagt.',
        },
        {
            id: 'comm_how_to_say',
            type: 'single',
            category: 'communication',
            cue_L1: 'Wie sagt man … auf Türkisch?',
            context_L1:
                'Wenn du wissen willst, wie ein Wort auf Türkisch heißt.',
            l2: 'Türkçede "..." nasıl denir?',
            pronunciation_ipa: 'tyɾktʃeˈde ... ˈnɯsɯɫ deˈniɾ',
            pronunciation_simple: 'tuerk-tsche-de "..." na-suhl de-nir',
            meaning_L1: 'Wie sagt man „…“ auf Türkisch?',
            usage_L1:
                'Ersetze „...“ durch das deutsche oder englische Wort, z.B. „Türkçede ‚Bahn‘ nasıl denir?“. Sehr praktische Frage für den Lernalltag.',
        },

        // === FOOD & DRINK ===
        {
            id: 'food_menu',
            type: 'single',
            category: 'food',
            cue_L1: 'Die Speisekarte, bitte.',
            context_L1: 'Im Restaurant, wenn du die Karte sehen möchtest.',
            l2: 'Menü lütfen',
            pronunciation_ipa: 'meˈny ˈlytfen',
            pronunciation_simple: 'me-nue luet-fen',
            meaning_L1: 'Die Speisekarte, bitte.',
            usage_L1:
                'Sehr kurze und absolut übliche Art, nach der Karte zu fragen.',
            variant_plural: {
                l2: 'Menü alabilir miyiz?',
                pronunciation_ipa: 'ˈmɛny alabiˈliɾ miˈjiz',
                pronunciation_simple: 'me-nue a-la-bi-lir mi-jiz',
            },
            notes_L1:
                'Für eine extra höfliche „Wir“-Form kannst du „Menü alabilir miyiz?“ sagen, aber „Menü lütfen“ reicht völlig.',
        },
        {
            id: 'food_coffee',
            type: 'single',
            category: 'food',
            cue_L1: 'Einen Kaffee, bitte.',
            context_L1: 'In Café/Restaurant beim Bestellen.',
            l2: 'Bir kahve lütfen',
            pronunciation_ipa: 'biɾ kahˈvɛ ˈlytfen',
            pronunciation_simple: 'bir kah-we luet-fen',
            meaning_L1: 'Einen Kaffee, bitte.',
            usage_L1:
                'Sehr direkte, natürliche Bestellung. Wenn du eine Sorte willst, fügst du sie ein: „Bir Türk kahvesi lütfen.“',
            notes_L1:
                'Manchmal wird „Bir kahve“ ohne „lütfen“ gesagt, aber mit „lütfen“ klingt es höflicher – gerade als Tourist:in.',
        },
        {
            id: 'food_water',
            type: 'single',
            category: 'food',
            cue_L1: 'Ein Wasser, bitte.',
            context_L1: 'Im Restaurant oder Kiosk.',
            l2: 'Bir su lütfen',
            pronunciation_ipa: 'biɾ su ˈlytfen',
            pronunciation_simple: 'bir su luet-fen',
            meaning_L1: 'Ein Wasser, bitte.',
            usage_L1:
                'Sehr einfache und übliche Form. Wenn du eine Flasche möchtest: „Bir şişe su lütfen.“',
        },
        {
            id: 'food_bill',
            type: 'single',
            category: 'food',
            cue_L1: 'Die Rechnung, bitte.',
            context_L1: 'Am Ende im Restaurant oder Café.',
            l2: 'Hesap lütfen',
            pronunciation_ipa: 'heˈsap ˈlytfen',
            pronunciation_simple: 'he-sap luet-fen',
            meaning_L1: 'Die Rechnung, bitte.',
            usage_L1:
                'Extrem häufige Kurzform, sehr typisch für die Türkei. Die Bedienung weiß sofort, was du möchtest.',
            notes_L1:
                'Etwas vollständiger wäre „Hesabı alabilir miyiz?“, aber „Hesap lütfen“ ist kürzer und völlig okay.',
        },
        {
            id: 'food_vegetarian',
            type: 'single',
            category: 'food',
            cue_L1: 'Ich bin Vegetarier:in.',
            context_L1: 'Beim Bestellen oder Erklären deiner Ernährung.',
            l2: 'Vejetaryenim',
            pronunciation_ipa: 'vedʒetaɾˈjenim',
            pronunciation_simple: 'we-dsche-tar-je-ne-m',
            meaning_L1: 'Ich bin Vegetarier:in.',
            usage_L1:
                'Sehr natürliche Kurzform, so würden es viele auch selber sagen. In Istanbul versteht man „vejetaryen“ gut.',
            notes_L1:
                'Noch klarer ist: „Et ve balık yemiyorum.“ (Ich esse kein Fleisch und keinen Fisch.)',
        },
        {
            id: 'food_delicious_after',
            type: 'single',
            category: 'food',
            cue_L1: 'Das war sehr lecker!',
            context_L1: 'Nach dem Essen, um ein Kompliment zu machen.',
            l2: 'Çok lezzetliydi!',
            pronunciation_ipa: 'tʃok lezːetˈlijdi',
            pronunciation_simple: 'tschok lez-zet-lii-di',
            meaning_L1: 'Es war sehr lecker!',
            usage_L1:
                'Perfekt nach dem Essen – im Restaurant oder bei jemandem zu Hause. Kommt immer gut an.',
        },
        {
            id: 'food_delicious_now',
            type: 'single',
            category: 'food',
            cue_L1: 'Das ist wirklich lecker!',
            context_L1: 'Während du gerade isst.',
            l2: 'Bu çok lezzetli!',
            pronunciation_ipa: 'bu tʃok lezːetˈli',
            pronunciation_simple: 'bu tschok lez-zet-li',
            meaning_L1: 'Das ist sehr lecker!',
            usage_L1:
                'Kannst du sagen, während du isst, um dein Essen zu loben.',
        },

        // === NAVIGATION ===
        {
            id: 'nav_train_station',
            type: 'single',
            category: 'navigation',
            cue_L1: 'Wo ist der Bahnhof?',
            context_L1: 'Wenn du nach dem Bahnhof fragst.',
            l2: 'Tren istasyonu nerede?',
            pronunciation_ipa: 'tɾɛn istasjoˈnu ˈnɛɾede',
            pronunciation_simple: 'tren is-tas-jo-nu ne-re-de',
            meaning_L1: 'Wo ist der Bahnhof?',
            usage_L1:
                'Du kannst das zu Passant:innen oder im Hotel sagen, um die Richtung zu erfahren.',
        },
        {
            id: 'nav_toilet',
            type: 'single',
            category: 'navigation',
            cue_L1: 'Wo ist die Toilette?',
            context_L1: 'In Restaurants, Cafés, Einkaufszentren usw.',
            l2: 'Tuvalet nerede?',
            pronunciation_ipa: 'tuvaˈlet ˈnɛɾede',
            pronunciation_simple: 'tu-va-let ne-re-de',
            meaning_L1: 'Wo ist die Toilette?',
            usage_L1:
                '„Tuvalet“ ist das ganz normale Wort für Toilette in Alltagssprache.',
        },
        {
            id: 'nav_atm',
            type: 'single',
            category: 'navigation',
            cue_L1: 'Wo ist der nächste Geldautomat?',
            context_L1: 'Wenn du Bargeld abheben willst.',
            l2: 'En yakın ATM nerede?',
            pronunciation_ipa: 'ɛn jaˈkɯn a teˈme ˈnɛɾede',
            pronunciation_simple: 'en ja-kuhn a-te-me ne-re-de',
            meaning_L1: 'Wo ist der nächste Geldautomat?',
            usage_L1:
                '„ATM“ (ausgesprochen „a-te-me“) ist in der Türkei sehr geläufig. Du kannst das auf der Straße einfach fragen.',
        },

        // === SHOPPING ===
        {
            id: 'shop_how_much',
            type: 'single',
            category: 'shopping',
            cue_L1: 'Wie viel kostet das?',
            context_L1:
                'Im Laden oder auf dem Markt, während du auf etwas zeigst.',
            l2: 'Bu ne kadar?',
            pronunciation_ipa: 'bu ne kaˈdaɾ',
            pronunciation_simple: 'bu ne ka-dar',
            meaning_L1: 'Wie viel kostet das?',
            usage_L1:
                'Standardfrage beim Einkaufen. Du kannst dabei auf den Gegenstand zeigen.',
        },
        {
            id: 'shop_pay_card',
            type: 'single',
            category: 'shopping',
            cue_L1: 'Kann ich mit Karte zahlen?',
            context_L1: 'Beim Bezahlen an der Kasse.',
            l2: 'Kartla ödeyebilir miyim?',
            pronunciation_ipa: 'kaɾtɫa ødejeˈbiliɾ miˈjim',
            pronunciation_simple: 'kart-la oe-de-je-bil-ir mi-jim',
            meaning_L1: 'Kann ich mit Karte zahlen?',
            usage_L1:
                'Höfliche Standardfrage. In vielen Läden hört man auch „Kart geçiyor mu?“ (Nehmt ihr Karte?), aber diese Form ist für Lernende klarer.',
        },
        {
            id: 'shop_pay_cash',
            type: 'single',
            category: 'shopping',
            cue_L1: 'Ich möchte bar bezahlen.',
            context_L1: 'Wenn du klarstellen willst, dass du in bar zahlst.',
            l2: 'Nakit ödemek istiyorum.',
            pronunciation_ipa: 'naˈkit ødeˈmek istijoˈɾum',
            pronunciation_simple: 'na-kit oe-de-mek is-ti-jo-rum',
            meaning_L1: 'Ich möchte bar bezahlen.',
            usage_L1:
                'Wenn du gefragt wirst, wie du zahlen willst, oder wenn es unklar ist, sagst du das einfach dazu.',
            notes_L1:
                'Sehr umgangssprachlich und kurz wäre „Nakit olur.“ (Bar geht.), aber „Nakit ödemek istiyorum“ ist für Lernende transparenter.',
        },

        // === EMERGENCY ===
        {
            id: 'emerg_help',
            type: 'single',
            category: 'emergency',
            cue_L1: 'Hilfe!',
            context_L1: 'In einem Notfall, wenn du Hilfe brauchst.',
            l2: 'Yardım edin!',
            pronunciation_ipa: 'jaɾˈdɯm eˈdin',
            pronunciation_simple: 'jar-duhm e-din',
            meaning_L1: 'Helfen Sie mir! / Hilfe!',
            usage_L1:
                'Ruf es laut, wenn du dringend Hilfe brauchst, z.B. bei einem Unfall oder Überfall.',
        },
        {
            id: 'emerg_doctor',
            type: 'single',
            category: 'emergency',
            cue_L1: 'Ich brauche einen Arzt!',
            context_L1: 'Bei Krankheit oder Verletzung.',
            l2: 'Doktora ihtiyacım var.',
            pronunciation_ipa: 'doktoˈɾa ihtijaˈdʒɯm vaɾ',
            pronunciation_simple: 'dok-to-ra ich-tja-dschuhm var',
            meaning_L1: 'Ich brauche einen Arzt.',
            usage_L1:
                'Kannst du zu Passant:innen, im Hotel oder im Taxi sagen, wenn es dir schlecht geht.',
            notes_L1:
                'Noch kürzer (und umgangssprachlich) wäre „Doktor lazım.“ (Ein Arzt ist nötig.).',
        },
        {
            id: 'emerg_police',
            type: 'single',
            category: 'emergency',
            cue_L1: 'Rufen Sie die Polizei!',
            context_L1: 'Bei Gefahr, Diebstahl, Überfall usw.',
            l2: 'Polisi çağırın!',
            pronunciation_ipa: 'poliˈsi tʃaːˈɯɾɯn',
            pronunciation_simple: 'po-li-si tscha-a-ruh-n',
            meaning_L1: 'Rufen Sie die Polizei!',
            usage_L1:
                'In ernsten Situationen, wenn du schnell Hilfe von der Polizei brauchst.',
        },

        // === NUMBERS 1–10 ===
        {
            id: 'number_1',
            type: 'single',
            category: 'number',
            cue_L1: '1',
            context_L1: 'Zählen, Bestellen, Mengen angeben.',
            l2: 'Bir',
            pronunciation_ipa: 'biɾ',
            pronunciation_simple: 'bir',
            meaning_L1: 'eins',
            usage_L1:
                'Wird wie deutsche „eins“ beim Zählen und Bestellen benutzt.',
        },
        {
            id: 'number_2',
            type: 'single',
            category: 'number',
            cue_L1: '2',
            context_L1: 'Zählen, Bestellen, Mengen angeben.',
            l2: 'İki',
            pronunciation_ipa: 'iˈci',
            pronunciation_simple: 'i-ki',
            meaning_L1: 'zwei',
            usage_L1: 'Zum Beispiel „İki kahve“ (zwei Kaffees).',
        },
        {
            id: 'number_3',
            type: 'single',
            category: 'number',
            cue_L1: '3',
            context_L1: 'Zählen, Bestellen, Mengen angeben.',
            l2: 'Üç',
            pronunciation_ipa: 'ytʃ',
            pronunciation_simple: 'ue-tsch',
            meaning_L1: 'drei',
            usage_L1: 'Zum Beispiel „Üç su“ (drei Wasser).',
        },
        {
            id: 'number_4',
            type: 'single',
            category: 'number',
            cue_L1: '4',
            context_L1: 'Zählen, Bestellen, Mengen angeben.',
            l2: 'Dört',
            pronunciation_ipa: 'dœɾt',
            pronunciation_simple: 'doert',
            meaning_L1: 'vier',
            usage_L1: 'Normale Zählform, z.B. „Dört kişi“ (vier Personen).',
        },
        {
            id: 'number_5',
            type: 'single',
            category: 'number',
            cue_L1: '5',
            context_L1: 'Zählen, Bestellen, Mengen angeben.',
            l2: 'Beş',
            pronunciation_ipa: 'beʃ',
            pronunciation_simple: 'besch',
            meaning_L1: 'fünf',
            usage_L1: 'Zum Beispiel „Beş lira“ (fünf Lira).',
        },
        {
            id: 'number_6',
            type: 'single',
            category: 'number',
            cue_L1: '6',
            context_L1: 'Zählen, Bestellen, Mengen angeben.',
            l2: 'Altı',
            pronunciation_ipa: 'aɫˈtɯ',
            pronunciation_simple: 'al-tuh',
            meaning_L1: 'sechs',
            usage_L1: 'Normale Zählform, z.B. „Altı gün“ (sechs Tage).',
        },
        {
            id: 'number_7',
            type: 'single',
            category: 'number',
            cue_L1: '7',
            context_L1: 'Zählen, Bestellen, Mengen angeben.',
            l2: 'Yedi',
            pronunciation_ipa: 'jeˈdi',
            pronunciation_simple: 'je-di',
            meaning_L1: 'sieben',
            usage_L1: 'Zum Beispiel „Yedi kişi“ (sieben Personen).',
        },
        {
            id: 'number_8',
            type: 'single',
            category: 'number',
            cue_L1: '8',
            context_L1: 'Zählen, Bestellen, Mengen angeben.',
            l2: 'Sekiz',
            pronunciation_ipa: 'seˈkiz',
            pronunciation_simple: 'se-kiz',
            meaning_L1: 'acht',
            usage_L1: 'Normale Zählform, z.B. „Sekiz oda“ (acht Zimmer).',
        },
        {
            id: 'number_9',
            type: 'single',
            category: 'number',
            cue_L1: '9',
            context_L1: 'Zählen, Bestellen, Mengen angeben.',
            l2: 'Dokuz',
            pronunciation_ipa: 'doˈkuz',
            pronunciation_simple: 'do-kuz',
            meaning_L1: 'neun',
            usage_L1: 'Zum Beispiel „Dokuz lira“ (neun Lira).',
        },
        {
            id: 'number_10',
            type: 'single',
            category: 'number',
            cue_L1: '10',
            context_L1: 'Zählen, Bestellen, Mengen angeben.',
            l2: 'On',
            pronunciation_ipa: 'on',
            pronunciation_simple: 'on',
            meaning_L1: 'zehn',
            usage_L1: 'Wichtig für Preise: „On lira“ (zehn Lira).',
        },
    ],
};
