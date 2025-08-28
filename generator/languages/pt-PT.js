import { PhraseKeys } from '../types.js';

export const ptPT = {
    provider: 'azure',
    langCode: 'pt-PT',
    voice: {
        name: 'pt-PT-Standard-E',
        ssmlGender: 'FEMALE',
    },
    phrases: [
        // Greetings & Politeness (Portugal)
        {
            key: PhraseKeys.GREETING_HELLO,
            text: 'Olá!',
            pronunciation_ipa: '/oˈla/',
            pronunciation_simple: '/o-ˈla/',
        },
        {
            key: PhraseKeys.GREETING_GOOD_DAY,
            text: 'Tudo bem?',
            pronunciation_ipa: '/ˈtudu ˈbẽj̃/',
            pronunciation_simple: '/ˈtoo-doo bayng~?/',
            note: 'Pergunta informal que serve como cumprimento todo o dia.',
        },
        {
            key: PhraseKeys.FAREWELL_BYE,
            text: 'Até logo!',
            pronunciation_ipa: '/ɐˈtɛ ˈlɔɣu/',
            pronunciation_simple: '/a-ˈte ˈlo-gu/',
        },
        {
            key: PhraseKeys.POLITENESS_PLEASE,
            text: 'De nada!',
            pronunciation_ipa: '/dɨ ˈnaðɐ/',
            pronunciation_simple: '/dih ˈna-da/',
            note: 'Resposta a “obrigado/obrigada”.',
        },
        {
            key: PhraseKeys.POLITENESS_THANK_YOU,
            text: 'Obrigado!',
            pronunciation_ipa: '/ɔβɾiˈɡadu/',
            pronunciation_simple: '/o-bree-ˈga-doo/',
            note: 'Mulher diz “Obrigada!”.',
        },
        {
            key: PhraseKeys.POLITENESS_MANY_THANKS,
            text: 'Muito obrigado!',
            pronunciation_ipa: '/ˈmũjtu ɔβɾiˈɡadu/',
            pronunciation_simple: '/ˈmwin-too o-bree-ˈga-doo/',
        },
        {
            key: PhraseKeys.CONFIRMATION_YES,
            text: 'Sim',
            pronunciation_ipa: '/sĩ/',
            pronunciation_simple: '/seeng~/',
        },
        {
            key: PhraseKeys.CONFIRMATION_NO,
            text: 'Não',
            pronunciation_ipa: '/nɐ̃w̃/',
            pronunciation_simple: '/na-ong~/',
        },
        {
            key: PhraseKeys.POLITENESS_EXCUSE_ME,
            text: 'Desculpe',
            pronunciation_ipa: '/dɨʃˈkuɫpɨ/',
            pronunciation_simple: '/desh-ˈkool-pə/',
        },

        // Introduction
        {
            key: PhraseKeys.INTRODUCTION_MY_NAME,
            text: 'Chamo-me …',
            pronunciation_ipa: '/ˈʃɐmumɨ/',
            pronunciation_simple: '/ˈsha-moo-mə/',
        },
        {
            key: PhraseKeys.INTRODUCTION_NICE_TO_MEET,
            text: 'Prazer!',
            pronunciation_ipa: '/pɾɐˈzeɾ/',
            pronunciation_simple: '/pra-ˈzehr/',
        },
        {
            key: PhraseKeys.INTRODUCTION_WHATS_YOUR_NAME,
            text: 'Como te chamas?',
            pronunciation_ipa: '/ˈkomu tɨ ˈʃɐmɐʃ/',
            pronunciation_simple: '/ˈko-mu tə ˈsha-mash/',
            note: 'Cortês: «Como se chama?»',
        },

        // Communication
        {
            key: PhraseKeys.COMMUNICATION_DONT_UNDERSTAND,
            text: 'Não percebo.',
            pronunciation_ipa: '/nɐ̃w̃ pɨɾˈsebu/',
            pronunciation_simple: '/na-ong~ pər-ˈseh-boo/',
        },
        {
            key: PhraseKeys.COMMUNICATION_SPEAK_ENGLISH,
            text: 'Fala inglês?',
            pronunciation_ipa: '/ˈfalɐ ĩˈɡleʃ/',
            pronunciation_simple: '/ˈfa-la ing-ˈlesh?/',
        },
        {
            key: PhraseKeys.COMMUNICATION_SPEAK_SLOWER,
            text: 'Mais devagar, se faz favor.',
            pronunciation_ipa: '/majʒ ðɨvɐˈɣaɾ, sɨ faʃ fɐˈvoɾ/',
            pronunciation_simple: '/maizh də-va-ˈgar, si fash fa-ˈvor/',
        },
        {
            key: PhraseKeys.COMMUNICATION_LIMITED_LANGUAGE,
            text: 'O meu português não é muito bom.',
            pronunciation_ipa: '/u mew puɾtuˈɡeʃ nɐ̃w̃ ɛ ˈmũjtu bõ/',
            pronunciation_simple:
                '/oo meh-oo por-too-ˈgesh nao eh ˈmwin-too bohng~/',
        },
        {
            key: PhraseKeys.COMMUNICATION_HOW_DO_YOU_SAY,
            text: 'Como se diz … em português?',
            pronunciation_ipa: '/ˈkomu sɨ ˈdiʃ ẽ puɾtuˈɡeʃ/',
            pronunciation_simple: '/ˈko-mu sə ˈdeesh eng por-too-ˈgesh?/',
        },

        // Food & Dining
        {
            key: PhraseKeys.REQUEST_MENU,
            text: 'A ementa, se faz favor.',
            pronunciation_ipa: '/ɐ iˈmẽtɐ, sɨ faʃ fɐˈvoɾ/',
            pronunciation_simple: '/a i-ˈmen-ta, si fash fa-ˈvor/',
        },
        {
            key: PhraseKeys.REQUEST_COFFEE,
            text: 'Café',
            pronunciation_ipa: '/kɐˈfɛ/',
            pronunciation_simple: '/ka-ˈfeh/',
        },
        {
            key: PhraseKeys.REQUEST_WATER,
            text: 'Água',
            pronunciation_ipa: '/ˈaɣwɐ/',
            pronunciation_simple: '/ˈa-gwa/',
        },
        {
            key: PhraseKeys.REQUEST_PLEASE,
            text: 'se faz favor',
            pronunciation_ipa: '/sɨ faʃ fɐˈvoɾ/',
            pronunciation_simple: '/si fash fa-ˈvor/',
        },
        {
            key: PhraseKeys.REQUEST_BILL,
            text: 'A conta, se faz favor.',
            pronunciation_ipa: '/ɐ ˈkõtɐ, sɨ faʃ fɐˈvoɾ/',
            pronunciation_simple: '/a ˈkon-ta, si fash fa-ˈvor/',
        },
        {
            key: PhraseKeys.DINING_VEGETARIAN,
            text: 'Sou vegetariano/a.',
            pronunciation_ipa: '/so(w) vɨʒɨtɐɾiˈɐnu(a)/',
            pronunciation_simple: '/so ve-zhe-ta-ree-ˈa-no(-a)/',
            note: '“-a” para feminino.',
        },
        {
            key: PhraseKeys.DINING_DELICIOUS,
            text: 'Estava delicioso!',
            pronunciation_ipa: '/(ɨ)ʃˈtavɐ dɨliˈsjozu/',
            pronunciation_simple: '/sh-ˈta-va dɨ-lee-ˈsyo-zu/',
        },
        {
            key: PhraseKeys.DINING_YUMMY,
            text: 'Está mesmo bom!',
            pronunciation_ipa: '/(ɨ)ʃˈta ˈmeʒmu bõ/',
            pronunciation_simple: '/sh-ˈta ˈmezh-moo bohng~/',
        },

        // Navigation
        {
            key: PhraseKeys.NAVIGATION_TRAIN_STATION,
            text: 'Onde fica a estação?',
            pronunciation_ipa: '/ˈõdɨ ˈfikɐ ɐ (ɨ)ʃtɐˈsɐ̃w̃/',
            pronunciation_simple: '/ON-dih FEE-ka a sh-ta-ˈsown~/',
        },
        {
            key: PhraseKeys.NAVIGATION_RESTROOM,
            text: 'Onde fica a casa de banho?',
            pronunciation_ipa: '/ˈõdɨ ˈfikɐ ɐ ˈkazɐ ðɨ ˈbɐɲu/',
            pronunciation_simple: '/ON-dih FEE-ka a ˈka-za dɨ ˈba-nyu/',
        },
        {
            key: PhraseKeys.NAVIGATION_ATM,
            text: 'Onde há multibanco?',
            pronunciation_ipa: '/ˈõdɨ a muliˈtibɐ̃ku/',
            pronunciation_simple: '/ON-dih a mul-ee-ˈtee-ban-ku/',
        },

        // Shopping
        {
            key: PhraseKeys.SHOPPING_HOW_MUCH,
            text: 'Quanto é?',
            pronunciation_ipa: '/ˈkwɐ̃tu ɛ/',
            pronunciation_simple: '/ˈkwan-too eh?/',
        },
        {
            key: PhraseKeys.SHOPPING_PAY_BY_CARD,
            text: 'Posso pagar com cartão?',
            pronunciation_ipa: '/ˈpɔsu pɐˈɡaɾ kõ kɐɾˈtɐ̃w̃/',
            pronunciation_simple: '/ˈpo-su pa-ˈgar kong kar-ˈtawn~?/',
        },
        {
            key: PhraseKeys.SHOPPING_PAY_BY_CASH,
            text: 'Pago em dinheiro.',
            pronunciation_ipa: '/ˈpaɡu ẽ dɨˈɲejɾu/',
            pronunciation_simple: '/ˈpa-go eng dɨ-ˈnye-ru/',
        },

        // Emergency
        {
            key: PhraseKeys.EMERGENCY_HELP,
            text: 'Socorro!',
            pronunciation_ipa: '/suˈkoʁu/',
            pronunciation_simple: '/su-ˈko-hru/',
        },
        {
            key: PhraseKeys.EMERGENCY_DOCTOR,
            text: 'Preciso de um médico!',
            pronunciation_ipa: '/pɾɨˈsiz(u) ð(ɨ) ũ ˈmɛðiku/',
            pronunciation_simple: '/prɨ-ˈsi-zu d(ɨ) oon ˈme-dee-ku/',
        },
        {
            key: PhraseKeys.EMERGENCY_POLICE,
            text: 'Chame a polícia!',
            pronunciation_ipa: '/ˈʃɐmɨ ɐ puˈlisjɐ/',
            pronunciation_simple: '/SHA-mi a po-ˈlee-sya/',
        },

        // Numbers 1-10
        {
            key: PhraseKeys.NUMBER_ONE,
            text: 'um',
            pronunciation_ipa: '/ũ/',
            pronunciation_simple: '/oong~/',
        },
        {
            key: PhraseKeys.NUMBER_TWO,
            text: 'dois',
            pronunciation_ipa: '/ˈdojʃ/',
            pronunciation_simple: '/ˈdoysh/',
        },
        {
            key: PhraseKeys.NUMBER_THREE,
            text: 'três',
            pronunciation_ipa: '/tɾeʃ/',
            pronunciation_simple: '/trehsh/',
        },
        {
            key: PhraseKeys.NUMBER_FOUR,
            text: 'quatro',
            pronunciation_ipa: '/ˈkwatɾu/',
            pronunciation_simple: '/ˈkwa-tru/',
        },
        {
            key: PhraseKeys.NUMBER_FIVE,
            text: 'cinco',
            pronunciation_ipa: '/ˈsĩku/',
            pronunciation_simple: '/ˈseen-ku/',
        },
        {
            key: PhraseKeys.NUMBER_SIX,
            text: 'seis',
            pronunciation_ipa: '/sejʃ/',
            pronunciation_simple: '/saysh/',
        },
        {
            key: PhraseKeys.NUMBER_SEVEN,
            text: 'sete',
            pronunciation_ipa: '/ˈsɛt(ɨ)/',
            pronunciation_simple: '/ˈseh-t(uh)/',
        },
        {
            key: PhraseKeys.NUMBER_EIGHT,
            text: 'oito',
            pronunciation_ipa: '/ˈojtu/',
            pronunciation_simple: '/ˈoy-tu/',
        },
        {
            key: PhraseKeys.NUMBER_NINE,
            text: 'nove',
            pronunciation_ipa: '/ˈnɔv(ɨ)/',
            pronunciation_simple: '/ˈno-v(uh)/',
        },
        {
            key: PhraseKeys.NUMBER_TEN,
            text: 'dez',
            pronunciation_ipa: '/dɛʃ/',
            pronunciation_simple: '/desh/',
        },
    ],
};
