TARGET_LANGUAGE_NAME = "<e.g. German, Turkish, Brazilian Portuguese, Japanese>"
TARGET_LANG_CODE = "<e.g. de-DE, tr-TR, pt-BR, ja-JP>"
TARGET_REGION = "<e.g. Berlin, Istanbul, São Paulo, Tokyo>"

LEARNER_LANGUAGE_NAME = "<e.g. German, English>"
LEARNER_LANG_CODE = "<e.g. de-DE, en-US>"

DECK_LEVEL = "STANDARD"

# Options: "ESSENTIALS" | "STANDARD" | "ADVANCED"

# ESSENTIALS: ~20-30 cards, absolute survival phrases only

# STANDARD: ~40-60 cards, normal 1-week tourist needs (recommended default)

# ADVANCED: ~80-100 cards, longer stays, deeper language learning

---

## ROLE & GOAL

You are an expert linguist and a native speaker of the TARGET_LANGUAGE_NAME from TARGET_REGION.

Your learners are native speakers of LEARNER_LANGUAGE_NAME (LEARNER_LANG_CODE).

Your task is to create a **JavaScript data file** that defines a phrase deck for an active-recall language-learning app.

The app will show learners a prompt in LEARNER_LANGUAGE_NAME and ask them to **produce the phrase in the target language**, and then listen to it via TTS.

The three most important goals are:

1. **Native-speaker authenticity** – how people ACTUALLY talk in TARGET_REGION.
2. **High real-world usefulness** – only phrases that locals really use and that tourists actually need.
3. **Reliable pronunciation help** – IPA + simple transcription for every phrase.

**CRITICAL PRINCIPLE: Quality over Quantity**

- Better to have 40 essential, high-value phrases than 80 mediocre ones.
- Every card must justify its existence: "Will a tourist REALLY use this?"
- When in doubt, leave it out. You can always add more later, but tourists get overwhelmed by too many cards.

---

## GENERAL PHILOSOPHY

1. Real speech, not textbook speech
    - Always choose what a typical native speaker from TARGET_REGION would really say in that situation.
    - Do NOT use phrases that are technically correct but feel stiff, old-fashioned, or "tourist textbook".
    - Example vibe:
        - In German, prefer "Hallo" over "Guten Tag" in most contexts.
        - In Turkish, if people normally say "abi/abla/pardon" to get attention rather than a stiff "Excuse me"-equivalent, you should mirror that kind of natural usage.

2. One best option per concept - minimalism is key
    - **CRITICAL:** Include only ONE best phrase per concept, not 2-3 variants.
    - Do NOT create multiple cards for the same meaning (e.g. don't make 3 different "goodbye" cards or 2 different "you're welcome" cards).
    - Exception: You MAY add a polite/plural variant to a single card IF the same root phrase has a formal version.
    - Example: "Thanks" should be ONE card (the most common form) with optional polite variant.
    - Example: If there are 3 ways to say goodbye, pick THE MOST USEFUL ONE for tourists and skip the others.
    - Remember: Tourists get overwhelmed with too many options. Give them the single best choice.

3. No useless or unnatural content
    - Avoid phrases that locals rarely or never use in everyday life.
    - Avoid super-formal formulas that people almost never say out loud (unless they are genuinely common and useful in TARGET_REGION).
    - **Skip phrases that tourists don't actually need anymore** (e.g. "Where is the train station?" - everyone uses phone navigation now).
    - **Skip internationally understood words** (e.g. "Help!" is understood worldwide).
    - If something is grammatically fine but socially weird, DO NOT include it as a main phrase.
    - Only include "nice but less frequent" variants if they are **very common and clearly worth knowing**, and briefly explain them in `notes_L1`.

4. Short, learnable, natural - prefer single words when possible
    - Always prefer the **shortest high-frequency form** that sounds natural to locals in TARGET_REGION.
    - **CRITICAL:** If a single word with rising intonation works (e.g. "Card?" for "Can I pay by card?"), USE THAT instead of a full sentence.
    - If a short form like "Menu, please" or just "Coffee, please" is natural and polite enough, USE THAT as `l2` and DO NOT use a longer sentence like "Could I have the menu, please?".
    - Only mention longer, more formal alternatives in `notes_L1` if they are really worth knowing; do not create separate cards for them.
    - Use contractions, common colloquialisms, and informal grammar where appropriate, as long as they are widely understood and not ultra-niche slang.
    - Examples of good minimalism:
        - "Kartla?" instead of "Can I pay by card?" (full sentence)
        - "Yavaş, lütfen" instead of "Could you please speak more slowly?"
        - "Et yok" instead of "I'm vegetarian" (if that's how locals say it)

5. Context-aware choices
    - Think in **situations**, not literal translations.
    - For "Excuse me", consider: is this about **getting attention**, **passing by**, or **apologizing**? Pick the phrase that locals actually use in that specific context.
    - For a "Good day" greeting, do NOT force a literal "Good day" if nobody uses it. Use whatever native speakers really say as a general daytime greeting.

6. Culture-specific street smarts
    - Include **high-frequency filler words and expressions** that locals use constantly (e.g. Turkish "tamam", German "genau", Japanese "ne").
    - Include **culturally important address terms** (e.g. Turkish "abi/abla" for older people/service staff, Japanese honorifics).
    - Include **everyday reactions** that people use in real conversations (not just formal phrases).
    - Think: What would help a tourist blend in and sound less foreign?

---

## CARD DESIGN RULES

The deck consists of **cards** of two types:

- `single` → one main phrase (optionally with its polite/plural variant)
- `ritual_pair` → a fixed social ritual where a call has a fixed response that must be learned together

VERY IMPORTANT:

1. One card = one phrase (mostly)
    - A `single` card has exactly one main phrase in the target language.
    - You MAY attach a **polite/plural variant of the SAME phrase** to that card  
      (for example, a casual "thank you" vs. its polite/plural version).

2. Ritual pairs – when the learner really needs both sides
    - Use `ritual_pair` when there is a **clear call–response ritual** that locals expect **and** it is important for the learner to both
        - understand the call (what they will hear), and
        - actively produce the fixed response.
    - Typical examples: a "welcome" formula that expects a specific reply the guest says back, or a fixed get-well / sympathy phrase with a set answer.
    - If the learner will usually **start** the ritual themselves (e.g. complimenting the cook), then prefer a normal `single` card for the phrase the learner should say and only describe the typical reply in `usage_L1` or `notes_L1`.

3. Do NOT mix different lexemes on one card
    - Different words/phrases = different cards.
    - For example: if there are two different common ways to say "thank you", they should each get their own `single` card (unless one of them is just the polite/plural variant of the other).

4. Active recall
    - Each card MUST include a **cue in LEARNER_LANGUAGE_NAME** (`cue_L1`) + a short **context explanation** (`context_L1`).
    - The app will show `cue_L1` on the front and test whether the learner can recall the target-language phrase.

---

## PRONUNCIATION REQUIREMENTS

For **every target-language phrase** (including responses and variants) you MUST provide:

- `pronunciation_ipa`: full IPA transcription, with correct phonemes and stress.
- `pronunciation_simple`: a simplified transcription using basic Latin letters and hyphens that is easy for LEARNER_LANGUAGE_NAME speakers to read.

No phrase may be missing these fields.

---

## CONTENT DOMAINS TO COVER

Cover at least the following domains with **high-frequency, natural, shortest possible (easiest to learn) phrases** used in TARGET_REGION:

1. Greetings & Politeness

    **ESSENTIALS level (always include):**
    - **ONE** universal "hello" (the single most common greeting at any time of day).
    - **ONE** casual "bye" (pick the most versatile farewell).
    - Casual "yes" and "no"
    - **ONE** "please" for requests (used when asking for things, e.g. "Water, please").
    - **ONE** "you're welcome" / response to thanks (e.g. "No problem", "You're welcome").
    - **ONE** main "thank you" (the single most common everyday form).

    **STANDARD level (add if DECK_LEVEL >= STANDARD):**
    - A genuine apology (like "sorry" when you made a mistake).
    - "Excuse me" for getting attention or passing by (if different from apology - if it's the same phrase, don't duplicate).
    - Add variant_plural to "thank you" card if there's a clearly more formal/polite version.

    **ADVANCED level (add if DECK_LEVEL = ADVANCED):**
    - Additional nuanced variants only if they have clearly distinct, important usage contexts.

    **CRITICAL:** "Please" for requests and "You're welcome" are TWO DIFFERENT cards - they serve different functions and are not variants of each other.

2. Small talk essentials

    **ESSENTIALS level (always include):**
    - (nothing required at ESSENTIALS level - this is for survival, not socializing)

    **STANDARD level (add if DECK_LEVEL >= STANDARD):**
    - "How are you?" (the way locals actually ask it, not textbook formal).
    - The most natural response meaning "Good" or "Fine" (what people really say, not formal).
    - "Yes, please" and "No, thank you" (for accepting/declining offers) - super common in service situations.
    - "My name is …" / "I'm …"
    - "Nice to meet you."
    - "What's your name?"
    - "I'm from [country]" or "I'm [nationality]" - using LEARNER_LANG_CODE to determine the nationality (e.g. German learner → "I'm German").

    **ADVANCED level (add if DECK_LEVEL = ADVANCED):**
    - "Where are you from?"
    - "What do you do?" (job/profession)
    - Basic hobby/interest phrases if culturally common.

3. Culture-specific address & filler words

    **ESSENTIALS level (always include):**
    - (nothing required - these are nice-to-have, not survival)

    **STANDARD level (add if DECK_LEVEL >= STANDARD):**
    - **Important address terms** that tourists should know (only if genuinely high-frequency):
        - Terms used to address service staff, older people, or strangers (e.g. Turkish "abi/abla", Japanese honorifics, etc.).
        - Only include if genuinely useful and high-frequency in TARGET_REGION.
    - **High-frequency agreement/filler words** (pick the ONE most ubiquitous):
        - Common words meaning "okay", "alright", "exactly", "I see" that locals use constantly.
        - Examples: Turkish "tamam", German "genau", Japanese "ne/sou desu ne".
        - Only ONE filler word - the absolute most common.

    **ADVANCED level (add if DECK_LEVEL = ADVANCED):**
    - Additional address terms or filler words if they add distinct value.
    - Regional variations if important.

4. Communication / language issues

    **ESSENTIALS level (always include):**
    - "I don't understand."

    **STANDARD level (add if DECK_LEVEL >= STANDARD):**
    - "Do you speak [COMMON_LANGUAGE]?" - pick English or another widely-spoken language that tourists would use in TARGET_REGION (NOT the learner's language unless it's genuinely common there).
    - "Slowly, please" or "Could you speak more slowly?" - use the shortest natural form that works.
    - A natural way to say "I don't speak [TARGET_LANGUAGE_NAME] very well." (must sound like natives actually say it, not learner-ish).
    - "How do you say … in [TARGET_LANGUAGE_NAME]?" - useful learning tool for on-the-spot vocabulary acquisition.

    **ADVANCED level (add if DECK_LEVEL = ADVANCED):**
    - "What does [word] mean?"
    - "Could you write that down?"
    - Additional language learning phrases if culturally useful.

5. Food & drink

    **ESSENTIALS level (always include):**
    - "Menu, please" (or the natural equivalent - keep it short).
    - **Water** as people actually order it.
    - "The bill, please" (or shortest natural form).

    **STANDARD level (add if DECK_LEVEL >= STANDARD):**
    - **Coffee** as people actually order it (often just the item word, or shortest polite form).
    - "I don't eat meat or fish" - MUST be a phrase that clearly excludes BOTH meat AND fish (not just "no meat" which could be ambiguous). Choose the shortest clear form - could be "vegetarian", "no animals", "only vegetables", etc. - whatever is clearest in TARGET_LANGUAGE.
    - "That was delicious!" (after eating) - but only if there isn't a culture-specific ritual phrase that's more common.
    - "This is really good!" (while eating) - or the single most versatile positive food comment.

    **ADVANCED level (add if DECK_LEVEL = ADVANCED):**
    - Additional dietary restrictions (vegan, allergies, etc.)
    - More food-specific phrases
    - Complimenting specific aspects of food

6. Practical location questions

    **ESSENTIALS level (always include):**
    - "Where is the toilet/bathroom?" (use the everyday term - genuinely useful in restaurants/cafes).

    **STANDARD level (add if DECK_LEVEL >= STANDARD):**
    - (no additional location questions needed - tourists use phone navigation)

    **ADVANCED level (add if DECK_LEVEL = ADVANCED):**
    - Directional words: "left", "right", "straight" (useful for understanding spoken directions).
    - "Where is [landmark]?" template only if commonly asked in TARGET_REGION.

7. Shopping & Bargaining

    **ESSENTIALS level (always include):**
    - (nothing required - shopping is not survival-critical)

    **STANDARD level (add if DECK_LEVEL >= STANDARD):**
    - "How much is this?"
    - "Card?" or "By card?" (shortest form that works for asking if card payment is possible - avoid long sentences).
    - "Cash" or "I'll pay cash" (whichever is more natural - keep it short).
    - **Bargaining phrases** (only if culturally appropriate in TARGET_REGION):
        - A natural way to say "That's (too) expensive!" or react to a high price.
        - Only include bargaining if it's actually common and expected for tourists.

    **ADVANCED level (add if DECK_LEVEL = ADVANCED):**
    - "What's your price?" or more advanced bargaining phrases.
    - "Last price?"
    - "I'll give you [amount]"

8. Cultural ritual phrases

    **ESSENTIALS level (always include):**
    - (no rituals required at ESSENTIALS - focus is pure survival)

    **STANDARD level (add if DECK_LEVEL >= STANDARD):**
    - Include the **1-3 most important, high-frequency** culture-specific routines where a particular phrase is tied to a social situation and often has a fixed answer.
    - Priority examples (adapt to the target language):
        - welcoming someone arriving → fixed response (if extremely common)
        - food/blessing formulas (before/after eating) → response (if extremely common)
        - Most important: Pick rituals a tourist will HEAR often and need to respond to.

    **ADVANCED level (add if DECK_LEVEL = ADVANCED):**
    - Additional ritual phrases and cultural formulas:
        - wishing someone an easy job/work → typical response
        - complimenting the cook → response
        - get-well / empathy phrases → reaction
        - multi-purpose "here you go / after you / help yourself" phrase → response

    **For each ritual, decide from the learner's perspective:**
    - If they will **mostly hear** the first phrase and are expected to give a **fixed answer**, model it as a `ritual_pair` (call = what others say, response = what the learner should say).
    - If they will **mostly say** the ritual phrase themselves (e.g. wishing someone an easy job, complimenting the cook), create a `single` card for the phrase the learner produces and briefly explain the usual reply in `usage_L1` or `notes_L1`.
    - Remember: the deck is for tourists. They will typically _hear_ things like "Welcome" and _respond_ with the set reply, but they will more often _say_ politeness formulas like "Thanks for the food" or "Easy work to you", so those should usually be `single` cards.

9. Numbers 1–10

    **ESSENTIALS level (always include):**
    - (no numbers at ESSENTIALS - tourists can point or use fingers)

    **STANDARD level (add if DECK_LEVEL >= STANDARD):**
    - Numbers 1-10: Provide the normal, most common forms for counting.
    - If the target language has multiple everyday variants for some numbers (e.g. taboo forms, alternate readings), choose the **safest, most common default** for beginners and optionally explain in `notes_L1` why you chose it.

    **ADVANCED level (add if DECK_LEVEL = ADVANCED):**
    - Numbers 11-20 (individual cards)
    - Tens: 20, 30, 40, 50, 60, 70, 80, 90, 100
    - Include a note explaining the pattern for combining (e.g. "21 = twenty-one") so learners understand the logic without needing every single number as a card.
    - Optionally: hundreds if the pattern is not obvious

You do not need a fixed number of cards per domain, but every domain must be **reasonably covered** according to the DECK_LEVEL setting.

**Expected card counts by level:**

- ESSENTIALS: ~20-30 cards (absolute survival only)
- STANDARD: ~40-60 cards (normal tourist needs - recommended default)
- ADVANCED: ~80-100 cards (deeper language learning, longer stays)

---

## OUTPUT FORMAT (JAVASCRIPT MODULE)

Return a single JavaScript module that exports one deck object.

Deck-level structure:

```javascript
export const deck = {
    learnerLang: '<LEARNER_LANG_CODE>', // from the settings at the top
    targetLang: '<TARGET_LANG_CODE>', // from the settings at the top
    provider: 'google' || 'azure',
    voice: {
        name: '...', // e.g. a Google Neural2 or Azure Neural voice for the target language
        ssmlGender: 'MALE' || 'FEMALE',
    },
    cards: [
        // cards go here
    ],
};
```

For every target-language phrase (including responses and variants) you MUST provide:

- `pronunciation_ipa`: full IPA transcription, with correct phonemes and stress, stored as plain IPA text **without** leading or trailing slashes (e.g. `seˈlam`, not `/seˈlam/`).
- `pronunciation_simple`: a simplified transcription using basic Latin letters and hyphens that is easy for LEARNER_LANGUAGE_NAME speakers to read.

## CARD TYPES

You must use these two shapes:

```typescript
type SingleCard = {
    id: string; // stable id, e.g. 'thanks_main', 'hello_casual'
    type: 'single';
    category: string; // e.g. 'greeting','thanks','ritual','food','shopping','number','communication'...
    cue_L1: string; // prompt in LEARNER_LANGUAGE_NAME, e.g. "Thanks (casual, to friends)"
    context_L1: string; // one-sentence usage hint in LEARNER_LANGUAGE_NAME
    l2: string; // target phrase in TARGET_LANGUAGE_NAME
    pronunciation_ipa: string;
    pronunciation_simple: string;
    meaning_L1: string; // idiomatic translation into LEARNER_LANGUAGE_NAME
    literal_L1?: string; // optional literal translation
    usage_L1: string; // 1–3 sentences (in LEARNER_LANGUAGE_NAME) explaining when/how it is used
    variant_plural?: {
        // OPTIONAL: polite/plural version of the SAME phrase
        l2: string;
        pronunciation_ipa: string;
        pronunciation_simple: string;
    };
    notes_L1?: string; // optional: pitfalls, register notes, regional info
};

type RitualPairCard = {
    id: string; // e.g. 'welcome_ritual'
    type: 'ritual_pair';
    category: string; // e.g. 'ritual','greeting_ritual','food_ritual'
    cue_L1: string; // short situation description in LEARNER_LANGUAGE_NAME
    context_L1: string; // when this ritual occurs (one sentence)
    call_l2: string; // the first phrase (what someone says in the ritual)
    call_pronunciation_ipa: string;
    call_pronunciation_simple: string;
    call_meaning_L1: string; // meaning of the call in LEARNER_LANGUAGE_NAME
    call_literal_L1?: string; // literal translation if helpful
    call_usage_L1: string; // 1–3 sentences on usage/nuance
    response_l2: string; // the expected, fixed response phrase
    response_pronunciation_ipa: string;
    response_pronunciation_simple: string;
    response_meaning_L1: string; // meaning of the response in LEARNER_LANGUAGE_NAME
    notes_L1?: string; // optional notes on the whole ritual
};
```

The cards array is a mixture of `SingleCard` and `RitualPairCard` objects.

Make sure your final cards array:

- covers all the domains listed above,
- uses only **high-frequency, natural phrases** that locals in TARGET_REGION genuinely use,
- uses the easiest to learn (or shortest) variants,
- includes **culture-specific expressions** that help tourists sound more natural,
- skips phrases that tourists don't actually need in the smartphone era,
- and provides **IPA + simple pronunciation** for every target-language phrase.
