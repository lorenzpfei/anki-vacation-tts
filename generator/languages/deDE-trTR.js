export const deck = {
    learnerLang: 'de-DE',
    targetLang: 'tr-TR',
    provider: 'azure',
    voice: {
        name: 'tr-TR-EmelNeural',
        ssmlGender: 'FEMALE',
    },
    cards: [
        // ===== GREETINGS & POLITENESS =====
        {
            id: 'hello_merhaba',
            type: 'single',
            category: 'greeting',
            cue_L1: 'Hallo (neutral, überall passend)',
            context_L1:
                'Allgemeine Begrüßung, wenn du jemanden tagsüber oder abends triffst.',
            l2: 'Merhaba.',
            pronunciation_ipa: 'ˈmɛɾhaba',
            pronunciation_simple: 'mer-ha-ba',
            meaning_L1: '"Hallo."',
            usage_L1:
                'Sehr verbreitet, passt fast immer: bei Freunden, im Laden, im Büro. Etwas höflicher als "Selam", aber nicht steif.',
        },
        {
            id: 'hello_selam',
            type: 'single',
            category: 'greeting',
            cue_L1: 'Hi (sehr locker)',
            context_L1:
                'Informelle Begrüßung unter Freunden oder Leuten in deinem Alter.',
            l2: 'Selam.',
            pronunciation_ipa: 'seˈlam',
            pronunciation_simple: 'se-lam',
            meaning_L1: '"Hi."',
            usage_L1:
                'Sehr locker und jugendlich, ähnlich wie "Hi" auf Deutsch. Vor allem unter Freunden und Gleichaltrigen.',
        },
        {
            id: 'greeting_iyi_gunler',
            type: 'single',
            category: 'greeting',
            cue_L1: '„Guten Tag“ (höflich, z.B. im Laden)',
            context_L1:
                'Wenn du jemanden tagsüber höflich begrüßt oder dich verabschiedest.',
            l2: 'İyi günler.',
            pronunciation_ipa: 'iˈji ɟynˈlɛɾ',
            pronunciation_simple: 'i-ji guen-ler',
            meaning_L1: '"Guten Tag."',
            usage_L1:
                'Sehr häufig bei Kassierer:innen, in Büros oder am Telefon. Kann sowohl zur Begrüßung als auch zum Verabschieden benutzt werden.',
        },
        {
            id: 'bye_gorusuruz',
            type: 'single',
            category: 'greeting',
            cue_L1: 'Tschüss / Bis dann',
            context_L1:
                'Wenn du dich von jemandem verabschiedest, den du wiedersehen wirst.',
            l2: 'Görüşürüz.',
            pronunciation_ipa: 'ɟøɾyˈʃyɾyz',
            pronunciation_simple: 'goe-rue-schue-rues',
            meaning_L1: '"Wir sehen uns." / "Bis dann."',
            usage_L1:
                'Sehr übliches, freundliches „Tschüss“. Du kannst es fast immer benutzen, auch am Telefon.',
        },
        {
            id: 'thanks_tesekkur_ederim',
            type: 'single',
            category: 'thanks',
            cue_L1: 'Danke (höflich, überall passend)',
            context_L1:
                'Wenn du dich höflich bedankst, z.B. im Café, im Taxi, bei Freunden.',
            l2: 'Teşekkür ederim.',
            pronunciation_ipa: 'teʃekˈkyɾ edeˈɾim',
            pronunciation_simple: 'te-schek-kuer e-de-rim',
            meaning_L1: '"Danke." / "Vielen Dank."',
            usage_L1:
                'Standardform für „Danke“, passt in fast allen Situationen – von Freunden bis sehr höflich.',
            variant_plural: {
                l2: 'Teşekkür ederiz.',
                pronunciation_ipa: 'teʃekˈkyɾ edeˈɾiz',
                pronunciation_simple: 'te-schek-kuer e-de-ris',
            },
            notes_L1:
                'Sehr häufig hört man auch das kürzere "Teşekkürler." – das bedeutet ebenfalls "Danke".',
        },
        {
            id: 'thanks_sag_ol',
            type: 'single',
            category: 'thanks',
            cue_L1: 'Danke (locker, zu Freunden)',
            context_L1:
                'Wenn du dich lässig bei einer Person bedankst, die du kennst.',
            l2: 'Sağ ol.',
            pronunciation_ipa: 'sɑː ˈoɫ',
            pronunciation_simple: 'saa-ol',
            meaning_L1: '"Danke." (sehr vertraut)',
            usage_L1:
                'Typisch unter Freunden oder bei lockerem Ton. Zu älteren Personen oder in sehr höflichen Situationen eher "Teşekkür ederim".',
            variant_plural: {
                l2: 'Sağ olun.',
                pronunciation_ipa: 'sɑː ˈoɫun',
                pronunciation_simple: 'saa-o-lun',
            },
            notes_L1:
                '"Sağ ol" ist sehr umgangssprachlich, "Sağ olun" ist höflicher bzw. für mehrere Personen.',
        },
        {
            id: 'please_request_lutfen',
            type: 'single',
            category: 'politeness',
            cue_L1: '„bitte“ in Bitten/Fragen (am Satzende)',
            context_L1:
                'Du hängst es ans Ende einer Bitte oder sagst es alleine, um höflich zu sein.',
            l2: 'Lütfen.',
            pronunciation_ipa: 'ˈlytfen',
            pronunciation_simple: 'lyt-fen',
            meaning_L1: '"Bitte." (in Bitten)',
            usage_L1:
                'Wie deutsches „bitte“ bei einer Bitte: z.B. „Bir kahve, lütfen.“ – „Einen Kaffee, bitte.“',
        },
        {
            id: 'politeness_youre_welcome',
            type: 'single',
            category: 'politeness',
            cue_L1: '„Gern geschehen“ / „Bitte“ als Antwort auf Danke',
            context_L1:
                'Wenn dir jemand dankt und du höflich reagieren willst.',
            l2: 'Rica ederim.',
            pronunciation_ipa: 'ɾiˈdʒa edeˈɾim',
            pronunciation_simple: 'ri-dscha e-de-rim',
            meaning_L1: '"Gern geschehen." / "Bitte sehr."',
            usage_L1:
                'Standardantwort auf „Teşekkür ederim“ oder „Sağ ol“. Klingt höflich, aber normal und nicht übertrieben formell.',
        },
        {
            id: 'politeness_buyurun',
            type: 'single',
            category: 'politeness',
            cue_L1: '„Hier, bitte.“ / „Bitte, kommen Sie rein.“',
            context_L1:
                'Wenn du jemandem etwas reichst, ihn hineinbittest oder ihm das Wort gibst.',
            l2: 'Buyurun.',
            pronunciation_ipa: 'buˈjuɾun',
            pronunciation_simple: 'bu-ju-run',
            meaning_L1: '„Bitte schön.“ / „Hier, bitte.“',
            usage_L1:
                'Multifunktionales Wort: wenn du etwas gibst, jemanden hereinbittest, einen Platz anbietest oder im Restaurant „Ja bitte?“ sagst.',
            notes_L1:
                'Du hörst "Buyurun" extrem oft z.B. in Läden, Restaurants und Taxis.',
        },

        // ===== RITUAL PAIRS (KULTURELLE ROUTINEN) =====
        {
            id: 'ritual_welcome_hosgeldiniz',
            type: 'ritual_pair',
            category: 'greeting_ritual',
            cue_L1: 'Jemand kommt zu Besuch / betritt Wohnung, Büro oder Laden',
            context_L1:
                'Türkische Standard-Willkommensformel, wenn jemand in einen Raum oder nach Hause kommt.',
            call_l2: 'Hoş geldiniz.',
            call_pronunciation_ipa: 'hoʃ ɟelˈdiniz',
            call_pronunciation_simple: 'hosch gel-di-niz',
            call_meaning_L1: '"Willkommen." (höflich/plural)',
            call_usage_L1:
                'Gesagt, wenn Besuch kommt oder jemand den Raum betritt – sehr typisch, auch im Laden oder beim Friseur.',
            response_l2: 'Hoş bulduk.',
            response_pronunciation_ipa: 'hoʃ bulˈduk',
            response_pronunciation_simple: 'hosch bul-duk',
            response_meaning_L1: '"Danke, ich fühle mich willkommen."',
            notes_L1:
                'Unter Freunden zu einer einzelnen Person sagt man oft "Hoş geldin." – die Antwort bleibt "Hoş bulduk.".',
        },
        {
            id: 'ritual_food_afiyet_olsun',
            type: 'ritual_pair',
            category: 'food_ritual',
            cue_L1: 'Jemand isst oder hat gerade gegessen',
            context_L1:
                'Typische türkische Essensformel, vor, während oder nach dem Essen.',
            call_l2: 'Afiyet olsun.',
            call_pronunciation_ipa: 'aˈfijet olˈsun',
            call_pronunciation_simple: 'a-fi-jet ol-sun',
            call_meaning_L1: '"Guten Appetit." / "Lass es dir schmecken."',
            call_usage_L1:
                'Wird sehr oft gesagt, wenn jemand isst oder du ihm Essen bringst – z.B. im Restaurant, zu Hause, in der Kantine.',
            response_l2: 'Teşekkür ederim.',
            response_pronunciation_ipa: 'teʃekˈkyɾ edeˈɾim',
            response_pronunciation_simple: 'te-schek-kuer e-de-rim',
            response_meaning_L1: '"Danke."',
            notes_L1:
                'Du kannst auch als Antwort "Size de." („Ihnen auch.“) sagen, vor allem wenn die andere Person ebenfalls essen wird.',
        },
        {
            id: 'ritual_work_kolay_gelsin',
            type: 'ritual_pair',
            category: 'ritual',
            cue_L1: 'Jemand arbeitet (z.B. Verkäufer:in, Handwerker:in, Fahrer:in)',
            context_L1:
                'Sehr typische Höflichkeitsformel für Leute bei der Arbeit.',
            call_l2: 'Kolay gelsin.',
            call_pronunciation_ipa: 'koˈlaj ɟelˈsin',
            call_pronunciation_simple: 'ko-lai gel-sin',
            call_meaning_L1:
                '„Möge es leicht gehen.“ / „Ich wünsche Ihnen/dir eine leichte Arbeit.“',
            call_usage_L1:
                'Gesagt, wenn du an jemandem vorbeigehst oder ihn ansprichst, während er arbeitet – z.B. Kassierer:in, Bauarbeiter, Fahrer.',
            response_l2: 'Sağ olun.',
            response_pronunciation_ipa: 'sɑː ˈoɫun',
            response_pronunciation_simple: 'saa-o-lun',
            response_meaning_L1: '"Danke."',
            notes_L1:
                'Unter Freunden kann die Antwort auch "Sağ ol." sein. Die Formel wirkt sehr „lokal“ und freundlich.',
        },

        // ===== INTRODUCTION & SMALL TALK =====
        {
            id: 'intro_my_name_ben',
            type: 'single',
            category: 'introduction',
            cue_L1: 'Ich bin … / Ich heiße …',
            context_L1: 'Wenn du dich kurz vorstellst.',
            l2: 'Ben ...',
            pronunciation_ipa: 'bɛn',
            pronunciation_simple: 'ben ...',
            meaning_L1: '"Ich bin …"',
            usage_L1:
                'Setze einfach deinen Namen ein: „Ben Anna.“ – sehr übliche Kurzform in Vorstellungsrunden.',
            notes_L1:
                'Auch möglich: "Adım ..." (= „Mein Name ist …“), aber "Ben ..." ist kürzer und sehr häufig.',
        },
        {
            id: 'intro_ask_name',
            type: 'single',
            category: 'introduction',
            cue_L1: 'Wie heißt du? (locker)',
            context_L1:
                'Wenn du eine Person in deinem Alter oder jünger nach ihrem Namen fragst.',
            l2: 'Adın ne?',
            pronunciation_ipa: 'aˈdɯn ne',
            pronunciation_simple: 'a-din ne',
            meaning_L1: '"Wie heißt du?"',
            usage_L1:
                'Locker und direkt, für Freunde, Kinder oder Leute in deinem Alter.',
            variant_plural: {
                l2: 'Adınız ne?',
                pronunciation_ipa: 'aˈdɯnɯz ne',
                pronunciation_simple: 'a-din-iz ne',
            },
            notes_L1:
                '„Adınız ne?“ ist die höfliche bzw. Pluralform: „Wie heißen Sie?“ – für ältere Personen oder formelle Situationen.',
        },
        {
            id: 'intro_nice_to_meet',
            type: 'single',
            category: 'introduction',
            cue_L1: 'Freut mich (jemanden kennenzulernen)',
            context_L1: 'Wenn du jemanden zum ersten Mal triffst.',
            l2: 'Memnun oldum.',
            pronunciation_ipa: 'mɛmˈnun olˈdum',
            pronunciation_simple: 'mem-nun ol-dum',
            meaning_L1: '"Freut mich." / "Sehr erfreut."',
            usage_L1:
                'Typische Antwort nach einer Vorstellung. Kann sowohl höflich als auch freundlich-kurz benutzt werden.',
        },

        // ===== COMMUNICATION / SPRACHE =====
        {
            id: 'comm_dont_understand',
            type: 'single',
            category: 'communication',
            cue_L1: 'Ich verstehe nicht.',
            context_L1:
                'Wenn du jemanden nicht verstehst, was Sprache oder Inhalt angeht.',
            l2: 'Anlamıyorum.',
            pronunciation_ipa: 'anɫaˈmɯjoɾum',
            pronunciation_simple: 'an-la-mih-jo-rum',
            meaning_L1: '"Ich verstehe (es) nicht."',
            usage_L1:
                'Sehr häufig – du kannst danach z.B. um langsameres Sprechen bitten oder nach Englisch fragen.',
        },
        {
            id: 'comm_speak_german',
            type: 'single',
            category: 'communication',
            cue_L1: 'Sprechen Sie Deutsch?',
            context_L1:
                'Wenn du wissen willst, ob jemand mit dir Deutsch sprechen kann.',
            l2: 'Almanca biliyor musunuz?',
            pronunciation_ipa: 'alˈmandʒa biˈlijoɾ musuˈnuz',
            pronunciation_simple: 'al-man-dscha bi-li-yor mu-su-nus',
            meaning_L1: '"Sprechen Sie Deutsch?"',
            usage_L1:
                'Höflich und neutral. Für jüngere Leute ist in Istanbul "İngilizce biliyor musunuz?" (Sprechen Sie Englisch?) meist noch praktischer.',
        },
        {
            id: 'comm_speak_slowly',
            type: 'single',
            category: 'communication',
            cue_L1: 'Könnten Sie bitte langsamer sprechen?',
            context_L1:
                'Wenn jemand zu schnell spricht und du mehr Zeit brauchst.',
            l2: 'Yavaş konuşabilir misiniz, lütfen?',
            pronunciation_ipa: 'jaˈvaʃ konuʃabiˈliɾ misˈiniz ˈlytfen',
            pronunciation_simple:
                'ya-wasch ko-nu-scha-bil-ir mi-si-niz lyt-fen',
            meaning_L1: '"Könnten Sie bitte langsam sprechen?"',
            usage_L1:
                'Sehr höflich und klar. Funktioniert in praktisch jeder Situation.',
        },
        {
            id: 'comm_dont_speak_well',
            type: 'single',
            category: 'communication',
            cue_L1: 'Mein Türkisch ist nicht so gut.',
            context_L1:
                'Wenn du deine Sprachkenntnisse bescheiden einschätzen willst.',
            l2: 'Türkçem çok iyi değil.',
            pronunciation_ipa: 'ˈtyɾktʃɛm tʃok iˈji deˈjil',
            pronunciation_simple: 'tuerk-tschem tschok i-ji de-jil',
            meaning_L1: '"Mein Türkisch ist nicht so gut."',
            usage_L1:
                'Klingt natürlicher als ein wörtliches „Ich spreche kein Türkisch sehr gut“. Öffnet oft die Tür zu mehr Hilfe und Geduld.',
        },
        {
            id: 'comm_how_say_in_turkish',
            type: 'single',
            category: 'communication',
            cue_L1: 'Wie sagt man „…“ auf Türkisch?',
            context_L1:
                'Wenn du nach der passenden türkischen Formulierung für ein Wort oder einen Ausdruck fragst.',
            l2: '... Türkçede nasıl denir?',
            pronunciation_ipa: 'tyɾktʃeˈde ˈnɑsɯɫ deˈniɾ',
            pronunciation_simple: '... tuerk-tsche-de na-sil de-nir',
            meaning_L1: '„Wie sagt man ‚…‘ auf Türkisch?“',
            usage_L1:
                'Setze das deutsche oder englische Wort an die Stelle der Punkte und frag eine Person nach der türkischen Version.',
        },

        // ===== FOOD & DRINK =====
        {
            id: 'food_menu',
            type: 'single',
            category: 'food',
            cue_L1: 'Könnte ich die Speisekarte bekommen?',
            context_L1: 'Im Restaurant, wenn du die Karte sehen möchtest.',
            l2: 'Menü alabilir miyim?',
            pronunciation_ipa: 'ˈmeny aɫaˈbiɾ miˈjim',
            pronunciation_simple: 'me-nue a-la-bir mi-jim',
            meaning_L1: '"Kann ich die Speisekarte bekommen?"',
            usage_L1:
                'Höfliche und sehr gebräuchliche Art, im Restaurant nach der Karte zu fragen.',
        },
        {
            id: 'food_coffee',
            type: 'single',
            category: 'food',
            cue_L1: 'Einen Kaffee, bitte.',
            context_L1:
                'Im Café oder Restaurant, wenn du einen Kaffee bestellst.',
            l2: 'Bir kahve, lütfen.',
            pronunciation_ipa: 'biɾ kahˈve ˈlytfen',
            pronunciation_simple: 'bir kah-we lyt-fen',
            meaning_L1: '"Einen Kaffee, bitte."',
            usage_L1:
                'So bestellst du ganz natürlich einen Kaffee. Du kannst davor auch die Sorte ergänzen, z.B. „Türk kahvesi“.',
        },
        {
            id: 'food_water',
            type: 'single',
            category: 'food',
            cue_L1: 'Ein Wasser, bitte.',
            context_L1: 'Im Restaurant, im Kiosk oder im Café.',
            l2: 'Bir su, lütfen.',
            pronunciation_ipa: 'biɾ su ˈlytfen',
            pronunciation_simple: 'bir su lyt-fen',
            meaning_L1: '"Ein Wasser, bitte."',
            usage_L1:
                'Kurz und praktisch. Wenn du eine Flasche willst, kannst du z.B. "Bir şişe su, lütfen." sagen.',
        },
        {
            id: 'food_bill',
            type: 'single',
            category: 'food',
            cue_L1: 'Die Rechnung, bitte.',
            context_L1: 'Am Ende im Restaurant oder Café.',
            l2: 'Hesabı alabilir miyim?',
            pronunciation_ipa: 'heˈsabɯ aɫaˈbiɾ miˈjim',
            pronunciation_simple: 'he-sa-bih a-la-bir mi-jim',
            meaning_L1: '"Könnte ich die Rechnung bekommen?"',
            usage_L1:
                'Sehr übliche Standardformel, um im Restaurant oder Café zu bezahlen.',
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
            id: 'food_delicious_after',
            type: 'single',
            category: 'food',
            cue_L1: 'Es war sehr lecker! (nach dem Essen)',
            context_L1:
                'Wenn du dich nach einer Mahlzeit bedankst oder das Essen lobst.',
            l2: 'Çok lezzetliydi!',
            pronunciation_ipa: 'tʃok lezˈzetlijdi',
            pronunciation_simple: 'tschok lez-zet-lii-di',
            meaning_L1: '"Es war sehr lecker!"',
            usage_L1:
                'Passt gut, wenn du fertig bist und dem Gastgeber oder Personal ein Kompliment machen willst.',
        },
        {
            id: 'food_delicious_now',
            type: 'single',
            category: 'food',
            cue_L1: 'Das ist sehr lecker! (während des Essens)',
            context_L1: 'Wenn du gerade probierst und etwas loben willst.',
            l2: 'Bu çok lezzetli.',
            pronunciation_ipa: 'bu tʃok lezˈzetli',
            pronunciation_simple: 'bu tschok lez-zet-li',
            meaning_L1: '"Das ist sehr lecker."',
            usage_L1:
                'Sehr natürlicher Satz, um Essen oder ein Getränk zu loben, während du es isst oder trinkst.',
        },

        // ===== NAVIGATION =====
        {
            id: 'nav_train_station',
            type: 'single',
            category: 'navigation',
            cue_L1: 'Wo ist der Bahnhof?',
            context_L1: 'Wenn du nach dem Weg zur nächsten Bahnstation fragst.',
            l2: 'Tren istasyonu nerede?',
            pronunciation_ipa: 'tɾɛn istasˈjonu neˈɾede',
            pronunciation_simple: 'tren is-tas-jo-nu ne-re-de',
            meaning_L1: '"Wo ist der Bahnhof?"',
            usage_L1:
                'Praktisch in jeder Stadt. In Istanbul gibt es verschiedene Linien, aber der Satz wird überall verstanden.',
        },
        {
            id: 'nav_toilet',
            type: 'single',
            category: 'navigation',
            cue_L1: 'Wo ist die Toilette?',
            context_L1: 'Im Restaurant, Café, Einkaufszentrum usw.',
            l2: 'Tuvalet nerede?',
            pronunciation_ipa: 'tuvaˈlet neˈɾede',
            pronunciation_simple: 'tu-va-let ne-re-de',
            meaning_L1: '"Wo ist die Toilette?"',
            usage_L1:
                '"Tuvalet" ist das ganz normale Wort im Alltag – sehr nützlich.',
        },
        {
            id: 'nav_atm',
            type: 'single',
            category: 'navigation',
            cue_L1: 'Wo ist der nächste Geldautomat?',
            context_L1: 'Wenn du Bargeld abheben musst.',
            l2: 'En yakın bankamatik nerede?',
            pronunciation_ipa: 'en jaˈkɯn bankamaˈtik neˈɾede',
            pronunciation_simple: 'en ja-kihn ban-ka-ma-tik ne-re-de',
            meaning_L1: '"Wo ist der nächste Geldautomat?"',
            usage_L1:
                '"Bankamatik" (Markenname) wird im Alltag oft als allgemeines Wort für „Geldautomat“ benutzt.',
        },

        // ===== SHOPPING =====
        {
            id: 'shop_how_much',
            type: 'single',
            category: 'shopping',
            cue_L1: 'Wie viel kostet das?',
            context_L1:
                'Beim Einkaufen, wenn du den Preis von etwas wissen willst.',
            l2: 'Bu ne kadar?',
            pronunciation_ipa: 'bu ne kaˈdaɾ',
            pronunciation_simple: 'bu ne ka-dar',
            meaning_L1: '"Wie viel kostet das?"',
            usage_L1:
                'Super kurz und sehr häufig. Du kannst auf den Gegenstand zeigen und das fragen.',
        },
        {
            id: 'shop_pay_card',
            type: 'single',
            category: 'shopping',
            cue_L1: 'Kann ich mit Karte zahlen?',
            context_L1: 'An der Kasse im Laden oder Restaurant.',
            l2: 'Kartla ödeyebilir miyim?',
            pronunciation_ipa: 'kaɾtɫa ødejebiˈliɾ miˈjim',
            pronunciation_simple: 'kart-la oe-de-ye-bil-ir mi-jim',
            meaning_L1: '"Kann ich mit Karte zahlen?"',
            usage_L1:
                'Sehr praktische, höfliche Frage – in Istanbul ist Kartenzahlung ziemlich verbreitet.',
        },
        {
            id: 'shop_pay_cash',
            type: 'single',
            category: 'shopping',
            cue_L1: 'Ich möchte bar bezahlen.',
            context_L1:
                'Wenn du klarstellen willst, dass du mit Bargeld zahlst.',
            l2: 'Nakit ödemek istiyorum.',
            pronunciation_ipa: 'naˈkit ødeˈmek isˈtijuɾum',
            pronunciation_simple: 'na-kit oe-de-mek is-ti-ju-rum',
            meaning_L1: '"Ich möchte bar bezahlen."',
            usage_L1:
                'Hilfreich, wenn mehrere Zahlungsarten möglich sind oder du nach Wechselgeld fragst.',
        },

        // ===== EMERGENCY =====
        {
            id: 'emergency_help',
            type: 'single',
            category: 'emergency',
            cue_L1: 'Hilfe! (laut, ernst)',
            context_L1:
                'In einer Notsituation, wenn du dringend Hilfe brauchst.',
            l2: 'Yardım edin!',
            pronunciation_ipa: 'jaɾˈdɯm ˈedin',
            pronunciation_simple: 'jar-dim e-din',
            meaning_L1: '"Helfen Sie!" / "Hilfe!"',
            usage_L1:
                'Sehr klarer Hilferuf, z.B. bei Unfall, Überfall oder starker gesundheitlicher Not.',
        },
        {
            id: 'emergency_doctor',
            type: 'single',
            category: 'emergency',
            cue_L1: 'Ich brauche einen Arzt!',
            context_L1:
                'Wenn du oder jemand anderes medizinische Hilfe braucht.',
            l2: 'Bir doktora ihtiyacım var!',
            pronunciation_ipa: 'biɾ doktoˈɾa ihtijaˈdʒɯm vaɾ',
            pronunciation_simple: 'bir dok-to-ra ih-ti-ja-dschim var',
            meaning_L1: '"Ich brauche einen Arzt!"',
            usage_L1:
                'Deutlicher Satz, damit andere sofort verstehen, dass medizinische Hilfe nötig ist.',
        },
        {
            id: 'emergency_police',
            type: 'single',
            category: 'emergency',
            cue_L1: 'Rufen Sie die Polizei!',
            context_L1:
                'Bei Diebstahl, Angriff oder anderen ernsten Situationen.',
            l2: 'Polisi arayın!',
            pronunciation_ipa: 'poˈlisi aɾaˈjɯn',
            pronunciation_simple: 'po-li-si a-ra-yin',
            meaning_L1: '"Rufen Sie die Polizei!"',
            usage_L1:
                'Klarer, direkter Satz, damit Umstehende sofort die Polizei anrufen.',
        },

        // ===== NUMBERS 1–10 =====
        {
            id: 'number_1',
            type: 'single',
            category: 'number',
            cue_L1: 'Zahl 1',
            context_L1: 'Zum Zählen, Bestellen, Nummern sagen.',
            l2: 'bir',
            pronunciation_ipa: 'biɾ',
            pronunciation_simple: 'bir',
            meaning_L1: 'eins',
            usage_L1:
                'Sehr häufig in Bestellungen, Adressen, Telefonnummern und beim Zählen.',
        },
        {
            id: 'number_2',
            type: 'single',
            category: 'number',
            cue_L1: 'Zahl 2',
            context_L1: 'Zum Zählen, Bestellen, Nummern sagen.',
            l2: 'iki',
            pronunciation_ipa: 'iˈki',
            pronunciation_simple: 'i-ki',
            meaning_L1: 'zwei',
            usage_L1: 'Zum Beispiel: „iki kahve“ = zwei Kaffee.',
        },
        {
            id: 'number_3',
            type: 'single',
            category: 'number',
            cue_L1: 'Zahl 3',
            context_L1: 'Zum Zählen, Bestellen, Nummern sagen.',
            l2: 'üç',
            pronunciation_ipa: 'ytʃ',
            pronunciation_simple: 'ue-tsch',
            meaning_L1: 'drei',
            usage_L1: 'Zum Beispiel: „üç kişi“ = drei Personen.',
        },
        {
            id: 'number_4',
            type: 'single',
            category: 'number',
            cue_L1: 'Zahl 4',
            context_L1: 'Zum Zählen, Bestellen, Nummern sagen.',
            l2: 'dört',
            pronunciation_ipa: 'dœɾt',
            pronunciation_simple: 'doert',
            meaning_L1: 'vier',
            usage_L1: 'Wird wie andere Zahlen einfach vor das Nomen gesetzt.',
        },
        {
            id: 'number_5',
            type: 'single',
            category: 'number',
            cue_L1: 'Zahl 5',
            context_L1: 'Zum Zählen, Bestellen, Nummern sagen.',
            l2: 'beş',
            pronunciation_ipa: 'beʃ',
            pronunciation_simple: 'besch',
            meaning_L1: 'fünf',
            usage_L1: 'Sehr häufig z.B. bei Uhrzeiten und Preisen.',
        },
        {
            id: 'number_6',
            type: 'single',
            category: 'number',
            cue_L1: 'Zahl 6',
            context_L1: 'Zum Zählen, Bestellen, Nummern sagen.',
            l2: 'altı',
            pronunciation_ipa: 'aɫˈtɯ',
            pronunciation_simple: 'al-tih',
            meaning_L1: 'sechs',
            usage_L1:
                'Sprich das letzte „ı“ ungefähr wie ein kurzes, dumpfes „i“.',
        },
        {
            id: 'number_7',
            type: 'single',
            category: 'number',
            cue_L1: 'Zahl 7',
            context_L1: 'Zum Zählen, Bestellen, Nummern sagen.',
            l2: 'yedi',
            pronunciation_ipa: 'jeˈdi',
            pronunciation_simple: 'je-di',
            meaning_L1: 'sieben',
            usage_L1: 'Klingt ungefähr wie „jedih“. Sehr häufig in Uhrzeiten.',
        },
        {
            id: 'number_8',
            type: 'single',
            category: 'number',
            cue_L1: 'Zahl 8',
            context_L1: 'Zum Zählen, Bestellen, Nummern sagen.',
            l2: 'sekiz',
            pronunciation_ipa: 'seˈkiz',
            pronunciation_simple: 'se-kiz',
            meaning_L1: 'acht',
            usage_L1: 'Zum Beispiel: „sekiz lira“ = acht Lira.',
        },
        {
            id: 'number_9',
            type: 'single',
            category: 'number',
            cue_L1: 'Zahl 9',
            context_L1: 'Zum Zählen, Bestellen, Nummern sagen.',
            l2: 'dokuz',
            pronunciation_ipa: 'doˈkuz',
            pronunciation_simple: 'do-kus',
            meaning_L1: 'neun',
            usage_L1: 'Sehr häufig bei Telefonnummern und Buslinien.',
        },
        {
            id: 'number_10',
            type: 'single',
            category: 'number',
            cue_L1: 'Zahl 10',
            context_L1: 'Zum Zählen, Bestellen, Nummern sagen.',
            l2: 'on',
            pronunciation_ipa: 'on',
            pronunciation_simple: 'on',
            meaning_L1: 'zehn',
            usage_L1:
                'Bildet zusammen mit anderen Zahlen z.B. 11–19: „on bir“ (11), „on iki“ (12) usw.',
        },
    ],
};
