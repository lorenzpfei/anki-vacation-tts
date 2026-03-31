export const deck = {
    learnerLang: 'de-DE',
    targetLang: 'hi-IN',
    provider: 'google',
    voice: {
        name: 'hi-IN-Neural2-B',
        ssmlGender: 'MALE',
    },
    cards: [
        {
            id: 'greeting_hello',
            type: 'single',
            category: 'greeting',
            cue_L1: 'Hallo (universell)',
            context_L1: 'Die Standardbegrüßung zu jeder Tageszeit.',
            l2: 'नमस्ते',
            pronunciation_ipa: 'nəməsteː',
            pronunciation_simple: 'na-mas-te',
            meaning_L1: 'Hallo / Guten Tag',
            usage_L1:
                'Wird von jedem verstanden und geschätzt. Man faltet dabei oft leicht die Hände vor der Brust, besonders bei älteren Menschen.',
            notes_L1:
                "In Delhi sagen jüngere Leute auch oft einfach 'Hello', aber 'Namaste' ist immer höflich und öffnet Türen.",
        },
        {
            id: 'greeting_bye',
            type: 'single',
            category: 'greeting',
            cue_L1: 'Tschüss / Bis dann',
            context_L1: 'Verabschiedung beim Gehen.',
            l2: 'फिर मिलेंगे',
            pronunciation_ipa: 'pʰɪɾ mɪleːŋgeː',
            pronunciation_simple: 'fir mi-leng-ge',
            meaning_L1: 'Wir sehen uns wieder / Bis dann',
            usage_L1:
                "Eine sehr herzliche, natürliche Art sich zu verabschieden. Wortwörtlich bedeutet es 'Wir werden uns wieder treffen'.",
            notes_L1:
                "Das englische 'Bye' wird in Delhi ebenfalls massenhaft verwendet und ist völlig akzeptabel.",
        },
        {
            id: 'basic_yes',
            type: 'single',
            category: 'communication',
            cue_L1: 'Ja',
            context_L1: 'Zustimmung in Alltagsgesprächen.',
            l2: 'हाँ',
            pronunciation_ipa: 'hãː',
            pronunciation_simple: 'haan',
            meaning_L1: 'Ja',
            usage_L1:
                "Das alltägliche 'Ja'. Oft begleitet von einem charakteristischen indischen Kopfwiegen (Kopfschütteln), das für Anfänger wie ein 'Nein' aussehen kann.",
            notes_L1:
                "Sprich das 'n' am Ende nicht aus, es ist nur eine Nasalierung des 'a'.",
        },
        {
            id: 'basic_no',
            type: 'single',
            category: 'communication',
            cue_L1: 'Nein',
            context_L1: 'Ablehnung (z. B. bei Straßenverkäufern).',
            l2: 'नहीं',
            pronunciation_ipa: 'nəhĩː',
            pronunciation_simple: 'na-hiin',
            meaning_L1: 'Nein',
            usage_L1:
                "Direktes 'Nein'. Wenn Straßenverkäufer hartnäckig sind, kannst du auch einfach die Hand heben und weitergehen.",
        },
        {
            id: 'basic_please',
            type: 'single',
            category: 'politeness',
            cue_L1: 'Bitte (für Bitten/Bestellungen)',
            context_L1: 'Wenn du um einen Gefallen bittest.',
            l2: 'प्लीज़',
            pronunciation_ipa: 'pliːz',
            pronunciation_simple: 'pliiz',
            meaning_L1: 'Bitte',
            usage_L1:
                "In Delhi benutzt fast niemand das formelle Hindi-Wort 'Kripya' im echten Leben. Das englische 'Please' ist voll in den Hindi-Alltag integriert worden.",
            notes_L1:
                "Wird einfach an den Satz oder das Wort angehängt, z.B. 'Wasser, please'.",
        },
        {
            id: 'basic_thanks',
            type: 'single',
            category: 'politeness',
            cue_L1: 'Danke',
            context_L1: 'Die natürlichste Art, sich im Alltag zu bedanken.',
            l2: 'शुक्रिया',
            pronunciation_ipa: 'ʃʊkɾɪjaː',
            pronunciation_simple: 'schuk-ri-ja',
            meaning_L1: 'Danke',
            usage_L1:
                "'Shukriya' ist ein warmes, alltägliches Dankeschön aus dem Urdu, das in Delhi allgegenwärtig ist. (Das englische 'Thank you' ist ebenso verbreitet).",
            notes_L1:
                "Vermeide 'Dhanyavad' – das ist sehr formell und wirkt in einem Café oder Tuk-Tuk völlig unnatürlich.",
        },
        {
            id: 'basic_welcome',
            type: 'single',
            category: 'politeness',
            cue_L1: 'Gern geschehen / Kein Problem',
            context_L1: 'Reaktion, wenn sich jemand bei dir bedankt.',
            l2: 'कोई बात नहीं',
            pronunciation_ipa: 'koːiː baːt̪ nəhĩː',
            pronunciation_simple: 'ko-i baat na-hiin',
            meaning_L1: 'Kein Problem / Macht nichts',
            literal_L1: 'Keine Sache nicht',
            usage_L1:
                "Die universelle Antwort auf 'Danke'. Es bedeutet auch 'Schon gut' oder 'Kein Problem', wenn sich jemand bei dir entschuldigt.",
        },
        {
            id: 'comm_excuse_me',
            type: 'single',
            category: 'communication',
            cue_L1: 'Entschuldigung! (um Aufmerksamkeit zu rufen)',
            context_L1:
                'Wenn du den Kellner oder einen Fremden ansprechen willst.',
            l2: 'सुनिए',
            pronunciation_ipa: 'sʊnɪjeː',
            pronunciation_simple: 'su-ni-je',
            meaning_L1: 'Hören Sie bitte',
            usage_L1:
                "Die höfliche Art, die Aufmerksamkeit von jemandem zu erregen. Bedeutet wörtlich 'Hören Sie'.",
            notes_L1:
                "Um sich für einen Fehler zu entschuldigen, nutzt man in Delhi meistens einfach das englische 'Sorry'.",
        },
        {
            id: 'comm_dont_understand',
            type: 'single',
            category: 'communication',
            cue_L1: 'Ich verstehe das nicht.',
            context_L1: 'Wenn jemand zu schnell oder komplexes Hindi spricht.',
            l2: 'समझ नहीं आया',
            pronunciation_ipa: 'səmədʒʱ nəhĩː aːjaː',
            pronunciation_simple: 'sa-madsch na-hiin aa-ja',
            meaning_L1: 'Ich habe es nicht verstanden.',
            literal_L1: 'Verständnis nicht gekommen',
            usage_L1:
                'Die kürzeste, natürlichste Art zu sagen, dass man etwas akustisch oder inhaltlich nicht verstanden hat.',
        },
        {
            id: 'food_menu',
            type: 'single',
            category: 'food',
            cue_L1: 'Die Speisekarte, bitte.',
            context_L1: 'Bestellung im Restaurant oder Café.',
            l2: 'मेन्यू देना',
            pronunciation_ipa: 'mɛnjuː deːnaː',
            pronunciation_simple: 'me-nju de-na',
            meaning_L1: 'Die Speisekarte, bitte.',
            literal_L1: 'Menü geben',
            usage_L1:
                "Das Verb 'dena' (geben) am Ende eines Wortes ist die informelle, aber völlig normale Art, in Delhi etwas zu bestellen.",
            notes_L1:
                "Man sagt nicht 'Ich hätte gerne...'. Man nennt das Objekt und fügt 'dena' an.",
        },
        {
            id: 'food_water_bottle',
            type: 'single',
            category: 'food',
            cue_L1: 'Eine Flasche Wasser, bitte.',
            context_L1:
                'Wasser bestellen (Sicherheitsregel Nr. 1 für Touristen).',
            l2: 'एक बोतल पानी',
            pronunciation_ipa: 'eːk boːt̪əl paːniː',
            pronunciation_simple: 'ek bo-tal paa-ni',
            meaning_L1: 'Ein Wasser in der Flasche.',
            usage_L1:
                'Als Tourist bestellst du immer Flaschenwasser. Leitungswasser ist für europäische Mägen nicht sicher.',
            notes_L1:
                "Hänge einfach 'dena' (geben) oder 'please' an, also: 'Ek botal paani dena'.",
        },
        {
            id: 'food_less_spicy',
            type: 'single',
            category: 'food',
            cue_L1: 'Weniger scharf, bitte!',
            context_L1:
                'Die absolute Überlebensphrase für deutsches Essen in Indien.',
            l2: 'कम तीखा',
            pronunciation_ipa: 'kəm t̪iːkʰaː',
            pronunciation_simple: 'kam ti-kha',
            meaning_L1: 'Wenig Schärfe / mild',
            usage_L1:
                "Sag das bei absolut jeder Bestellung, wenn du keine hohe Schärfe verträgst. Ein indisches 'nicht scharf' ist für Deutsche meistens immer noch sehr scharf.",
        },
        {
            id: 'food_bill',
            type: 'single',
            category: 'food',
            cue_L1: 'Die Rechnung, bitte.',
            context_L1: 'Wenn du im Restaurant bezahlen willst.',
            l2: 'बिल देना',
            pronunciation_ipa: 'bɪl deːnaː',
            pronunciation_simple: 'bil de-na',
            meaning_L1: 'Die Rechnung bringen',
            literal_L1: 'Rechnung geben',
            usage_L1:
                'Kurz, direkt und genau das, was Einheimische sagen. Oft wird dabei auch eine Schreibbewegung mit der Hand in der Luft gemacht.',
        },
        {
            id: 'location_toilet',
            type: 'single',
            category: 'location',
            cue_L1: 'Wo ist die Toilette?',
            context_L1: 'Frage im Café, Restaurant oder Kaufhaus.',
            l2: 'वॉशरूम कहाँ है?',
            pronunciation_ipa: 'wɔːʃɾuːm kəhãː hɛː',
            pronunciation_simple: 'wosch-ruum ka-haan hä',
            meaning_L1: 'Wo ist die Toilette?',
            usage_L1:
                "In Delhi (und den meisten indischen Städten) nutzt niemand das Hindi-Wort für Toilette. Das Wort 'Washroom' ist der absolute Standard für saubere Toiletten in städtischen Gebieten.",
        },
        {
            id: 'shopping_how_much',
            type: 'single',
            category: 'shopping',
            cue_L1: 'Wie viel kostet das?',
            context_L1:
                'Frage nach dem Preis beim Einkaufen oder vor der Tuk-Tuk-Fahrt.',
            l2: 'कितने का है?',
            pronunciation_ipa: 'kɪt̪neː kaː hɛː',
            pronunciation_simple: 'kit-ne ka hä',
            meaning_L1: 'Was kostet das? / Wie viel?',
            usage_L1:
                'Das ist die natürlichste Formulierung. Vor dem Einsteigen in eine Rikscha (Tuk-Tuk) solltest du immer vorher fragen und den Preis klären.',
        },
        {
            id: 'shopping_card',
            type: 'single',
            category: 'shopping',
            cue_L1: 'Kann ich mit Karte zahlen?',
            context_L1: 'An der Kasse oder im Restaurant.',
            l2: 'कार्ड चलेगा?',
            pronunciation_ipa: 'kaːɽɖ tʃəleːgaː',
            pronunciation_simple: 'kaard tscha-le-ga',
            meaning_L1: 'Nehmen Sie Karte?',
            literal_L1: 'Wird Karte laufen?',
            usage_L1:
                "Das Verb 'chalega' (wird es laufen/gehen?) ist ein indisches Allzweckwort. Inder zahlen fast alles mit der App 'UPI', Touristen müssen oft nach dem Kartenlesegerät fragen.",
        },
        {
            id: 'filler_okay',
            type: 'single',
            category: 'filler',
            cue_L1: 'Okay / In Ordnung',
            context_L1:
                'Zustimmung, Bestätigung oder Abschluss eines Gesprächs.',
            l2: 'ठीक है',
            pronunciation_ipa: 'ʈʰiːk hɛː',
            pronunciation_simple: 'thiik hä',
            meaning_L1: 'Ist gut / Alles klar',
            usage_L1:
                'Das wohl häufigste Füllwort in Hindi. Du benutzt es, um zu zeigen, dass du verstanden hast, dass du einverstanden bist, oder um eine Verhandlung abzuschließen.',
            notes_L1:
                "Wird oft verdoppelt: 'Theek hai, theek hai' (Alles klar, passt schon).",
        },
        {
            id: 'transport_stop',
            type: 'single',
            category: 'transport',
            cue_L1: 'Hier anhalten, bitte.',
            context_L1:
                'Wenn du im Taxi oder der Auto-Rikscha an deinem Ziel bist.',
            l2: 'यहीं रोक दो',
            pronunciation_ipa: 'jəhĩː ɾoːk d̪oː',
            pronunciation_simple: 'ja-hiin rok do',
            meaning_L1: 'Stoppen Sie hier.',
            literal_L1: 'Genau hier stoppen geben',
            usage_L1:
                "Viel natürlicher als ein langes 'Bitte halten Sie das Fahrzeug an'. Es ist kurz, prägnant und wird vom Fahrer über den Straßenlärm hinweg verstanden.",
        },
        {
            id: 'slang_how_are_you',
            type: 'single',
            category: 'smalltalk',
            cue_L1: "Wie geht's? / Was geht?",
            context_L1: 'Lässige Begrüßung unter Freunden/Klassenkameraden.',
            l2: 'क्या हाल है?',
            pronunciation_ipa: 'kjaː ɦaːl hɛː',
            pronunciation_simple: 'kja haal hä',
            meaning_L1: 'Wie ist die Lage? / Was geht ab?',
            literal_L1: 'Was Zustand ist?',
            usage_L1:
                "Vergiss das formelle 'Aap kaise hain' aus dem Lehrbuch. 'Kya haal hai?' ist genau das, was Freunde sich in Delhi zurufen.",
            notes_L1:
                "Man hängt oft noch ein 'Bhai' (Bruder) oder 'Yaar' (Alter) ran: 'Kya haal hai, yaar?'",
        },
        {
            id: 'slang_all_good',
            type: 'single',
            category: 'smalltalk',
            cue_L1: 'Alles super! / Läuft!',
            context_L1: "Die beste Antwort auf 'Wie geht's?'.",
            l2: 'सब बढ़िया',
            pronunciation_ipa: 'səb bəɽʱɪjaː',
            pronunciation_simple: 'sab ba-rhi-ja',
            meaning_L1: 'Alles bestens / Alles gut',
            usage_L1:
                'Das ist die absolute Standardantwort unter jungen Leuten. Es klingt positiv, entspannt und muttersprachlich.',
            notes_L1:
                "Das 'rhi' (ड़) wird mit einem Zungenschlag (wie ein kurzes, gerolltes 'r' und 'd' gleichzeitig) gesprochen.",
        },
        {
            id: 'slang_yaar',
            type: 'single',
            category: 'filler',
            cue_L1: 'Alter / Bro (Füllwort)',
            context_L1:
                'Um den Satz lockerer zu machen oder Frust/Freude auszudrücken.',
            l2: 'यार',
            pronunciation_ipa: 'jaːɾ',
            pronunciation_simple: 'jaar',
            meaning_L1: 'Freund / Kumpel',
            usage_L1:
                "Das wichtigste Slang-Wort überhaupt. Es ist wie 'Alter' auf Deutsch oder 'Bro' auf Englisch. Man hängt es fast an jeden Satz an, wenn man mit Kumpels redet.",
            notes_L1:
                "Wird für Jungs und Mädchen gleichermaßen verwendet. Beispiel: 'Sorry, yaar!' oder 'Komm schon, yaar!'",
        },
        {
            id: 'slang_crazy',
            type: 'single',
            category: 'smalltalk',
            cue_L1: 'Spinnst du? / Bist du verrückt?',
            context_L1: 'Wenn ein Klassenkamerad Unsinn redet (scherzhaft).',
            l2: 'पागल है क्या?',
            pronunciation_ipa: 'paːgəl hɛː kjaː',
            pronunciation_simple: 'pa-gal hä kja',
            meaning_L1: 'Bist du verrückt?',
            literal_L1: 'Verrückt bist was?',
            usage_L1:
                "Sehr typisch für neckende Gespräche auf dem Schulhof. Es ist unter Freunden nicht beleidigend gemeint, sondern einfach ein 'Sag mal, spinnst du?'.",
        },
        {
            id: 'slang_lets_go',
            type: 'single',
            category: 'smalltalk',
            cue_L1: 'Los! / Mach schon! / Komm!',
            context_L1:
                'Wenn du willst, dass jemand mitkommt oder ihr losgeht.',
            l2: 'चल',
            pronunciation_ipa: 'tʃəl',
            pronunciation_simple: 'tschal',
            meaning_L1: 'Los / Beweg dich',
            literal_L1: 'Geh',
            usage_L1:
                "Super kurzes Kommando unter Freunden. Wenn die Pause vorbei ist und ihr in den Unterricht müsst, sagst du einfach 'Chal!'.",
            notes_L1:
                "Die etwas höflichere Form für eine Gruppe wäre 'Chalo' (Lasst uns gehen), aber 'Chal' ist für den besten Kumpel perfekt.",
        },
    ],
};
