import type { CEFRLevel } from '@/types';

export interface GrammarTopicData {
  id: string;
  topic: string;
  level: CEFRLevel;
  description: string;
  explanation: string;
  examples: { german: string; english: string; highlight: string }[];
}

export const GRAMMAR_CURRICULUM: Record<CEFRLevel, GrammarTopicData[]> = {
  // ─── A1 ───────────────────────────────────────────────────────
  A1: [
    {
      id: 'a1-present-tense-regular',
      topic: 'Present Tense (Regular Verbs)',
      level: 'A1',
      description: 'Conjugating regular verbs in the present tense.',
      explanation:
        'German regular verbs follow a predictable pattern in the present tense. Remove the -en ending from the infinitive to get the stem, then add the personal endings: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en.',
      examples: [
        {
          german: 'Ich spiele gern Fußball.',
          english: 'I like playing football.',
          highlight: 'spiele',
        },
        {
          german: 'Du lernst Deutsch.',
          english: 'You are learning German.',
          highlight: 'lernst',
        },
        {
          german: 'Wir wohnen in Berlin.',
          english: 'We live in Berlin.',
          highlight: 'wohnen',
        },
      ],
    },
    {
      id: 'a1-sein-haben',
      topic: 'Sein & Haben',
      level: 'A1',
      description: 'The irregular verbs "to be" and "to have".',
      explanation:
        'Sein (to be) and haben (to have) are the two most important verbs in German. Both are irregular and must be memorized: ich bin/habe, du bist/hast, er ist/hat, wir sind/haben, ihr seid/habt, sie sind/haben.',
      examples: [
        {
          german: 'Ich bin Studentin.',
          english: 'I am a student (female).',
          highlight: 'bin',
        },
        {
          german: 'Er hat zwei Brüder.',
          english: 'He has two brothers.',
          highlight: 'hat',
        },
        {
          german: 'Wir sind müde.',
          english: 'We are tired.',
          highlight: 'sind',
        },
      ],
    },
    {
      id: 'a1-nominative-accusative',
      topic: 'Nominative & Accusative Cases',
      level: 'A1',
      description: 'Subject and direct object cases.',
      explanation:
        'The nominative case marks the subject of a sentence (who/what does the action). The accusative case marks the direct object (who/what receives the action). Only masculine articles change: der becomes den, ein becomes einen. Feminine, neuter, and plural articles stay the same.',
      examples: [
        {
          german: 'Der Mann kauft einen Kuchen.',
          english: 'The man buys a cake.',
          highlight: 'einen Kuchen',
        },
        {
          german: 'Ich sehe den Hund.',
          english: 'I see the dog.',
          highlight: 'den Hund',
        },
        {
          german: 'Sie liest ein Buch.',
          english: 'She reads a book.',
          highlight: 'ein Buch',
        },
      ],
    },
    {
      id: 'a1-gender',
      topic: 'Grammatical Gender',
      level: 'A1',
      description: 'Masculine, feminine, and neuter nouns with articles.',
      explanation:
        'Every German noun has a grammatical gender: masculine (der), feminine (die), or neuter (das). Gender must be memorized with each noun. Some patterns help: nouns ending in -ung, -heit, -keit are feminine; nouns ending in -chen, -lein are neuter; male persons and days/months are masculine.',
      examples: [
        {
          german: 'Der Tisch ist groß.',
          english: 'The table is big.',
          highlight: 'Der Tisch',
        },
        {
          german: 'Die Lampe ist neu.',
          english: 'The lamp is new.',
          highlight: 'Die Lampe',
        },
        {
          german: 'Das Kind spielt draußen.',
          english: 'The child plays outside.',
          highlight: 'Das Kind',
        },
      ],
    },
    {
      id: 'a1-plural',
      topic: 'Plural Forms',
      level: 'A1',
      description: 'Forming plurals of German nouns.',
      explanation:
        'German has several plural patterns: add -e (der Tisch → die Tische), add -er (das Kind → die Kinder), add -n/-en (die Lampe → die Lampen), add -s (das Auto → die Autos), or no change (der Lehrer → die Lehrer). Some also add an umlaut. The definite article is always "die" in the plural.',
      examples: [
        {
          german: 'Die Bücher liegen auf dem Tisch.',
          english: 'The books are on the table.',
          highlight: 'Die Bücher',
        },
        {
          german: 'Ich habe zwei Katzen.',
          english: 'I have two cats.',
          highlight: 'Katzen',
        },
        {
          german: 'Die Häuser sind alt.',
          english: 'The houses are old.',
          highlight: 'Die Häuser',
        },
      ],
    },
    {
      id: 'a1-basic-word-order',
      topic: 'Basic Word Order',
      level: 'A1',
      description: 'Subject-verb-object and verb-second rule.',
      explanation:
        'In German main clauses the conjugated verb always goes in the second position (V2 rule). The subject usually comes first, but if another element (time, place) is in first position, the subject moves after the verb. This inversion keeps the verb firmly in second position.',
      examples: [
        {
          german: 'Ich trinke morgens Kaffee.',
          english: 'I drink coffee in the morning.',
          highlight: 'Ich trinke',
        },
        {
          german: 'Morgens trinke ich Kaffee.',
          english: 'In the morning I drink coffee.',
          highlight: 'Morgens trinke ich',
        },
        {
          german: 'Am Wochenende spiele ich Tennis.',
          english: 'On the weekend I play tennis.',
          highlight: 'Am Wochenende spiele ich',
        },
      ],
    },
    {
      id: 'a1-questions',
      topic: 'Forming Questions',
      level: 'A1',
      description: 'Yes/no questions and W-questions.',
      explanation:
        'For yes/no questions, move the verb to the first position: "Sprichst du Deutsch?" For W-questions (wer, was, wo, wann, warum, wie), the W-word comes first, the verb second: "Wo wohnst du?" The intonation rises at the end of yes/no questions.',
      examples: [
        {
          german: 'Sprichst du Deutsch?',
          english: 'Do you speak German?',
          highlight: 'Sprichst du',
        },
        {
          german: 'Wo wohnst du?',
          english: 'Where do you live?',
          highlight: 'Wo wohnst',
        },
        {
          german: 'Was machst du heute Abend?',
          english: 'What are you doing this evening?',
          highlight: 'Was machst',
        },
      ],
    },
  ],

  // ─── A2 ───────────────────────────────────────────────────────
  A2: [
    {
      id: 'a2-perfekt',
      topic: 'Perfekt (Present Perfect)',
      level: 'A2',
      description: 'Talking about the past using haben/sein + past participle.',
      explanation:
        'The Perfekt is the most common past tense in spoken German. It uses an auxiliary verb (haben or sein) in second position and the past participle at the end. Most verbs use haben; verbs of movement or change of state (gehen, fahren, werden) use sein. Regular past participles: ge- + stem + -t (gemacht). Irregular: ge- + stem change + -en (geschrieben).',
      examples: [
        {
          german: 'Ich habe gestern Fußball gespielt.',
          english: 'I played football yesterday.',
          highlight: 'habe ... gespielt',
        },
        {
          german: 'Sie ist nach Hamburg gefahren.',
          english: 'She went to Hamburg.',
          highlight: 'ist ... gefahren',
        },
        {
          german: 'Wir haben einen Film gesehen.',
          english: 'We watched a film.',
          highlight: 'haben ... gesehen',
        },
      ],
    },
    {
      id: 'a2-modal-verbs',
      topic: 'Modal Verbs',
      level: 'A2',
      description: 'können, müssen, wollen, sollen, dürfen, mögen.',
      explanation:
        'Modal verbs express ability, necessity, desire, permission, or obligation. The modal verb is conjugated in second position; the main verb goes to the end in its infinitive form. Modal verbs have irregular singular forms: ich kann, du kannst, er kann.',
      examples: [
        {
          german: 'Ich kann gut schwimmen.',
          english: 'I can swim well.',
          highlight: 'kann ... schwimmen',
        },
        {
          german: 'Du musst heute früh aufstehen.',
          english: 'You have to get up early today.',
          highlight: 'musst ... aufstehen',
        },
        {
          german: 'Hier darf man nicht rauchen.',
          english: 'You may not smoke here.',
          highlight: 'darf ... nicht rauchen',
        },
      ],
    },
    {
      id: 'a2-dative',
      topic: 'Dative Case',
      level: 'A2',
      description: 'Indirect objects and dative prepositions.',
      explanation:
        'The dative case marks the indirect object (to/for whom). Articles change: der → dem, die → der, das → dem, die (plural) → den (+n on noun). Certain verbs always take dative: helfen, danken, gefallen, gehören. Prepositions mit, nach, bei, von, zu, aus, seit, gegenüber always require dative.',
      examples: [
        {
          german: 'Ich gebe dem Kind einen Apfel.',
          english: 'I give the child an apple.',
          highlight: 'dem Kind',
        },
        {
          german: 'Sie hilft ihrer Mutter.',
          english: 'She helps her mother.',
          highlight: 'ihrer Mutter',
        },
        {
          german: 'Er fährt mit dem Bus zur Arbeit.',
          english: 'He goes to work by bus.',
          highlight: 'mit dem Bus',
        },
      ],
    },
    {
      id: 'a2-prepositions',
      topic: 'Prepositions with Cases',
      level: 'A2',
      description: 'Accusative, dative, and two-way prepositions.',
      explanation:
        'Some prepositions always take accusative (durch, für, gegen, ohne, um). Others always take dative (aus, bei, mit, nach, seit, von, zu). Two-way prepositions (an, auf, hinter, in, neben, über, unter, vor, zwischen) take accusative for movement toward a destination (Wohin?) and dative for location (Wo?).',
      examples: [
        {
          german: 'Die Katze springt auf den Tisch.',
          english: 'The cat jumps onto the table.',
          highlight: 'auf den Tisch',
        },
        {
          german: 'Die Katze liegt auf dem Tisch.',
          english: 'The cat is lying on the table.',
          highlight: 'auf dem Tisch',
        },
        {
          german: 'Er wartet seit einer Stunde.',
          english: 'He has been waiting for an hour.',
          highlight: 'seit einer Stunde',
        },
      ],
    },
    {
      id: 'a2-comparatives',
      topic: 'Comparatives & Superlatives',
      level: 'A2',
      description: 'Comparing things using -er and am -sten.',
      explanation:
        'To form comparatives, add -er to the adjective: schnell → schneller. For superlatives, use "am" + adjective + "-sten": am schnellsten. Many common adjectives take an umlaut: groß → größer → am größten. "Als" means "than" in comparisons, "so ... wie" means "as ... as".',
      examples: [
        {
          german: 'Berlin ist größer als München.',
          english: 'Berlin is bigger than Munich.',
          highlight: 'größer als',
        },
        {
          german: 'Sie läuft am schnellsten.',
          english: 'She runs the fastest.',
          highlight: 'am schnellsten',
        },
        {
          german: 'Mein Auto ist so alt wie deins.',
          english: 'My car is as old as yours.',
          highlight: 'so alt wie',
        },
      ],
    },
  ],

  // ─── B1 ───────────────────────────────────────────────────────
  B1: [
    {
      id: 'b1-praeteritum',
      topic: 'Präteritum (Simple Past)',
      level: 'B1',
      description: 'Simple past tense, especially in written German.',
      explanation:
        'The Präteritum is used primarily in written narratives and with common verbs like sein, haben, and modals in spoken German. Regular verbs insert -te- between the stem and the ending: ich machte, du machtest. Irregular verbs change their stem vowel: gehen → ging, schreiben → schrieb.',
      examples: [
        {
          german: 'Er ging jeden Tag in die Schule.',
          english: 'He went to school every day.',
          highlight: 'ging',
        },
        {
          german: 'Wir hatten keine Zeit.',
          english: 'We had no time.',
          highlight: 'hatten',
        },
        {
          german: 'Sie schrieb einen langen Brief.',
          english: 'She wrote a long letter.',
          highlight: 'schrieb',
        },
      ],
    },
    {
      id: 'b1-genitive',
      topic: 'Genitive Case',
      level: 'B1',
      description: 'Expressing possession and using genitive prepositions.',
      explanation:
        'The genitive case shows possession (like English "of" or "\'s"). Articles change: der → des (+s/es on noun), die → der, das → des (+s/es on noun), die (plural) → der. Prepositions wegen, trotz, während, statt take genitive. Masculine and neuter nouns usually add -s or -es in genitive.',
      examples: [
        {
          german: 'Das ist das Auto meines Vaters.',
          english: 'That is my father\'s car.',
          highlight: 'meines Vaters',
        },
        {
          german: 'Trotz des Regens gingen wir spazieren.',
          english: 'Despite the rain, we went for a walk.',
          highlight: 'Trotz des Regens',
        },
        {
          german: 'Die Farbe der Blumen ist wunderschön.',
          english: 'The colour of the flowers is beautiful.',
          highlight: 'der Blumen',
        },
      ],
    },
    {
      id: 'b1-relative-clauses',
      topic: 'Relative Clauses',
      level: 'B1',
      description: 'Adding information to nouns with relative pronouns.',
      explanation:
        'Relative clauses describe a noun in more detail. They are introduced by a relative pronoun (der, die, das, etc.) that matches the gender and number of the noun it refers to. The case of the relative pronoun depends on its role in the relative clause. The verb goes to the end of the relative clause.',
      examples: [
        {
          german: 'Der Mann, der dort steht, ist mein Lehrer.',
          english: 'The man who is standing there is my teacher.',
          highlight: 'der dort steht',
        },
        {
          german: 'Das Buch, das ich lese, ist sehr spannend.',
          english: 'The book that I am reading is very exciting.',
          highlight: 'das ich lese',
        },
        {
          german: 'Die Frau, mit der ich gesprochen habe, kommt aus Wien.',
          english: 'The woman I spoke with comes from Vienna.',
          highlight: 'mit der ich gesprochen habe',
        },
      ],
    },
    {
      id: 'b1-subordinating-conjunctions',
      topic: 'Subordinating Conjunctions',
      level: 'B1',
      description: 'weil, dass, obwohl, wenn, als, damit, etc.',
      explanation:
        'Subordinating conjunctions (weil, dass, obwohl, wenn, als, damit, ob, bevor, nachdem) push the conjugated verb to the end of the clause. "Weil" gives a reason, "dass" introduces a that-clause, "obwohl" means "although", "wenn" means "if/whenever", and "als" means "when" (single past event).',
      examples: [
        {
          german: 'Ich bleibe zu Hause, weil ich krank bin.',
          english: 'I am staying home because I am sick.',
          highlight: 'weil ich krank bin',
        },
        {
          german: 'Er sagt, dass er morgen kommt.',
          english: 'He says that he is coming tomorrow.',
          highlight: 'dass er morgen kommt',
        },
        {
          german: 'Als ich jung war, spielte ich oft im Garten.',
          english: 'When I was young, I often played in the garden.',
          highlight: 'Als ich jung war',
        },
      ],
    },
    {
      id: 'b1-reflexive-verbs',
      topic: 'Reflexive Verbs',
      level: 'B1',
      description: 'Verbs with reflexive pronouns (sich).',
      explanation:
        'Reflexive verbs require a reflexive pronoun that refers back to the subject. Accusative reflexive pronouns: mich, dich, sich, uns, euch, sich. Some verbs are always reflexive in German but not in English: sich freuen (to be happy), sich erinnern (to remember), sich beeilen (to hurry).',
      examples: [
        {
          german: 'Ich freue mich auf den Urlaub.',
          english: 'I am looking forward to the holiday.',
          highlight: 'freue mich',
        },
        {
          german: 'Er erinnert sich an seine Kindheit.',
          english: 'He remembers his childhood.',
          highlight: 'erinnert sich',
        },
        {
          german: 'Beeil dich, wir sind spät dran!',
          english: 'Hurry up, we are running late!',
          highlight: 'Beeil dich',
        },
      ],
    },
    {
      id: 'b1-konjunktiv-ii-basics',
      topic: 'Konjunktiv II (Basics)',
      level: 'B1',
      description: 'Expressing wishes, polite requests, and unreal conditions.',
      explanation:
        'Konjunktiv II is used for hypothetical situations, polite requests, and wishes. The most common forms use "würde" + infinitive: "Ich würde gern helfen." For hätte (would have) and wäre (would be), the special forms are preferred over würde. Wenn ich Zeit hätte, würde ich kommen.',
      examples: [
        {
          german: 'Ich hätte gern ein Glas Wasser.',
          english: 'I would like a glass of water.',
          highlight: 'hätte gern',
        },
        {
          german: 'Wenn ich reich wäre, würde ich reisen.',
          english: 'If I were rich, I would travel.',
          highlight: 'wäre ... würde',
        },
        {
          german: 'Könntest du mir bitte helfen?',
          english: 'Could you please help me?',
          highlight: 'Könntest',
        },
      ],
    },
  ],

  // ─── B2 ───────────────────────────────────────────────────────
  B2: [
    {
      id: 'b2-passive-voice',
      topic: 'Passive Voice',
      level: 'B2',
      description: 'Vorgangspassiv (werden) and Zustandspassiv (sein).',
      explanation:
        'The process passive (Vorgangspassiv) uses "werden" + past participle to describe an action being done: "Das Haus wird gebaut." The state passive (Zustandspassiv) uses "sein" + past participle to describe a resulting state: "Das Haus ist gebaut." The agent can be introduced with "von" + dative.',
      examples: [
        {
          german: 'Das Buch wurde von Goethe geschrieben.',
          english: 'The book was written by Goethe.',
          highlight: 'wurde ... geschrieben',
        },
        {
          german: 'Hier wird Deutsch gesprochen.',
          english: 'German is spoken here.',
          highlight: 'wird ... gesprochen',
        },
        {
          german: 'Der Tisch ist schon gedeckt.',
          english: 'The table is already set.',
          highlight: 'ist ... gedeckt',
        },
      ],
    },
    {
      id: 'b2-konjunktiv-ii-extended',
      topic: 'Extended Konjunktiv II',
      level: 'B2',
      description: 'Past subjunctive and complex hypothetical chains.',
      explanation:
        'The past Konjunktiv II expresses unreal conditions in the past using "hätte/wäre" + past participle: "Wenn ich das gewusst hätte, wäre ich gekommen." This form is essential for expressing regret, missed opportunities, and counterfactual reasoning.',
      examples: [
        {
          german: 'Wenn ich das gewusst hätte, hätte ich anders gehandelt.',
          english: 'If I had known that, I would have acted differently.',
          highlight: 'hätte ... gewusst ... hätte ... gehandelt',
        },
        {
          german: 'Er wäre fast gestürzt.',
          english: 'He almost fell.',
          highlight: 'wäre ... gestürzt',
        },
        {
          german: 'Hätten wir uns beeilt, hätten wir den Zug erreicht.',
          english: 'Had we hurried, we would have caught the train.',
          highlight: 'Hätten ... beeilt ... hätten ... erreicht',
        },
      ],
    },
    {
      id: 'b2-complex-subordinate-clauses',
      topic: 'Complex Subordinate Clauses',
      level: 'B2',
      description: 'Nested clauses, je ... desto, and multi-clause sentences.',
      explanation:
        'Advanced German uses multiple embedded subordinate clauses. Key patterns include: "je ... desto/umso" (the more ... the more), concessive clauses with "obgleich/obschon", and consecutive clauses with "sodass". In nested clauses, each verb goes to the end of its own clause.',
      examples: [
        {
          german: 'Je mehr ich übe, desto besser werde ich.',
          english: 'The more I practice, the better I get.',
          highlight: 'Je mehr ... desto besser',
        },
        {
          german: 'Er sprach so leise, dass niemand ihn verstehen konnte.',
          english: 'He spoke so quietly that nobody could understand him.',
          highlight: 'so leise, dass ... verstehen konnte',
        },
        {
          german: 'Das Buch, das mir mein Freund, der in Wien lebt, empfohlen hat, ist ausgezeichnet.',
          english: 'The book that my friend who lives in Vienna recommended to me is excellent.',
          highlight: 'das ... der in Wien lebt ... empfohlen hat',
        },
      ],
    },
    {
      id: 'b2-adjective-endings',
      topic: 'Adjective Endings',
      level: 'B2',
      description: 'Complete adjective declension system.',
      explanation:
        'German adjectives take different endings depending on the case, gender, number, and whether they follow a definite article, indefinite article, or no article. After definite articles, adjectives mostly end in -e or -en. After indefinite articles, the adjective takes on more of the case-signaling role. Without any article, adjectives take strong endings that mirror the definite article endings.',
      examples: [
        {
          german: 'Der alte Mann liest eine interessante Zeitung.',
          english: 'The old man reads an interesting newspaper.',
          highlight: 'alte ... interessante',
        },
        {
          german: 'Ich trinke gern kalten Kaffee.',
          english: 'I like drinking cold coffee.',
          highlight: 'kalten',
        },
        {
          german: 'Mit großer Freude nahm sie den Preis entgegen.',
          english: 'With great joy she accepted the prize.',
          highlight: 'großer Freude',
        },
      ],
    },
    {
      id: 'b2-infinitive-constructions',
      topic: 'Infinitive Constructions',
      level: 'B2',
      description: 'zu + infinitive, um ... zu, ohne ... zu, anstatt ... zu.',
      explanation:
        'Infinitive constructions with "zu" function like English "to + verb". "Um ... zu" expresses purpose ("in order to"), "ohne ... zu" means "without doing", and "anstatt ... zu" means "instead of doing". With separable verbs, "zu" goes between the prefix and the verb: anzufangen.',
      examples: [
        {
          german: 'Ich habe keine Lust, heute zu arbeiten.',
          english: 'I don\'t feel like working today.',
          highlight: 'zu arbeiten',
        },
        {
          german: 'Sie lernt Deutsch, um in Berlin zu studieren.',
          english: 'She is learning German in order to study in Berlin.',
          highlight: 'um ... zu studieren',
        },
        {
          german: 'Er ging, ohne sich zu verabschieden.',
          english: 'He left without saying goodbye.',
          highlight: 'ohne sich zu verabschieden',
        },
      ],
    },
  ],

  // ─── C1 ───────────────────────────────────────────────────────
  C1: [
    {
      id: 'c1-participial-phrases',
      topic: 'Participial Phrases',
      level: 'C1',
      description: 'Extended participial attributes before nouns.',
      explanation:
        'German allows complex participial constructions placed before a noun, functioning like compressed relative clauses. The participle takes adjective endings. "Der in Berlin lebende Künstler" = "der Künstler, der in Berlin lebt". These are common in academic and journalistic writing and can be quite long.',
      examples: [
        {
          german: 'Die von der Regierung vorgeschlagene Reform ist umstritten.',
          english: 'The reform proposed by the government is controversial.',
          highlight: 'Die von der Regierung vorgeschlagene Reform',
        },
        {
          german: 'Der seit Jahren in München lebende Musiker gab ein Konzert.',
          english: 'The musician who has been living in Munich for years gave a concert.',
          highlight: 'Der seit Jahren in München lebende Musiker',
        },
        {
          german: 'Das auf dem Tisch liegende Buch gehört mir.',
          english: 'The book lying on the table belongs to me.',
          highlight: 'Das auf dem Tisch liegende Buch',
        },
      ],
    },
    {
      id: 'c1-konjunktiv-i',
      topic: 'Konjunktiv I (Indirect Speech)',
      level: 'C1',
      description: 'Reported speech using Konjunktiv I.',
      explanation:
        'Konjunktiv I is used primarily in formal writing and news to report what someone said without confirming its truth. It is formed from the infinitive stem + endings: -e, -est, -e, -en, -et, -en. If the Konjunktiv I form is identical to the indicative, Konjunktiv II is used as a substitute.',
      examples: [
        {
          german: 'Der Minister sagte, er habe den Bericht gelesen.',
          english: 'The minister said he had read the report.',
          highlight: 'habe ... gelesen',
        },
        {
          german: 'Sie behauptete, sie sei unschuldig.',
          english: 'She claimed she was innocent.',
          highlight: 'sei',
        },
        {
          german: 'Die Zeitung berichtet, die Verhandlungen seien gescheitert.',
          english: 'The newspaper reports that the negotiations have failed.',
          highlight: 'seien gescheitert',
        },
      ],
    },
    {
      id: 'c1-stylistic-inversion',
      topic: 'Stylistic Inversion',
      level: 'C1',
      description: 'Using word order for emphasis and rhetorical effect.',
      explanation:
        'Beyond the basic V2 rule, German offers flexible word order for emphasis. Placing an object or adverbial phrase first adds emphasis: "Dieses Problem müssen wir lösen." The Mittelfeld (middle field) order can also shift for focus: time-manner-place is the default, but deviations create emphasis on the displaced element.',
      examples: [
        {
          german: 'Selten habe ich so etwas Schönes gesehen.',
          english: 'Rarely have I seen something so beautiful.',
          highlight: 'Selten habe ich',
        },
        {
          german: 'Diesen Fehler hätten wir vermeiden können.',
          english: 'This mistake we could have avoided.',
          highlight: 'Diesen Fehler hätten wir',
        },
        {
          german: 'Erst nach langem Zögern stimmte er zu.',
          english: 'Only after long hesitation did he agree.',
          highlight: 'Erst nach langem Zögern stimmte er',
        },
      ],
    },
    {
      id: 'c1-advanced-modals',
      topic: 'Advanced Modal Verb Usage',
      level: 'C1',
      description: 'Subjective modals expressing probability and hearsay.',
      explanation:
        'Modal verbs can express subjective judgments about probability. "Er muss krank sein" = "He must be ill" (high certainty). "Er dürfte krank sein" = "He is probably ill" (reasonable assumption). "Er soll reich sein" = "He is said to be rich" (hearsay). "Er will das gesehen haben" = "He claims to have seen it" (unverified claim).',
      examples: [
        {
          german: 'Sie dürfte inzwischen angekommen sein.',
          english: 'She has probably arrived by now.',
          highlight: 'dürfte ... angekommen sein',
        },
        {
          german: 'Er soll ein ausgezeichneter Chirurg sein.',
          english: 'He is said to be an excellent surgeon.',
          highlight: 'soll ... sein',
        },
        {
          german: 'Das kann nicht stimmen.',
          english: 'That cannot be true.',
          highlight: 'kann nicht stimmen',
        },
      ],
    },
    {
      id: 'c1-discourse-markers',
      topic: 'Discourse Markers & Connectors',
      level: 'C1',
      description: 'Advanced linking words for academic and formal texts.',
      explanation:
        'Sophisticated German uses a range of connectors to structure arguments: "allerdings" (however), "nichtsdestotrotz" (nevertheless), "insofern" (in so far as), "zumal" (especially since), "infolgedessen" (as a result), "demzufolge" (consequently). These elevate writing from competent to polished.',
      examples: [
        {
          german: 'Die Studie ist aufschlussreich; allerdings fehlen wichtige Daten.',
          english: 'The study is informative; however, important data are missing.',
          highlight: 'allerdings',
        },
        {
          german: 'Er war müde, zumal er die ganze Nacht gearbeitet hatte.',
          english: 'He was tired, especially since he had worked all night.',
          highlight: 'zumal',
        },
        {
          german: 'Die Kosten stiegen; infolgedessen musste das Projekt gestoppt werden.',
          english: 'Costs rose; as a result, the project had to be stopped.',
          highlight: 'infolgedessen',
        },
      ],
    },
  ],

  // ─── C2 ───────────────────────────────────────────────────────
  C2: [
    {
      id: 'c2-register-switching',
      topic: 'Register Switching',
      level: 'C2',
      description: 'Shifting between formal, informal, academic, and colloquial registers.',
      explanation:
        'Mastery of German means effortlessly switching between registers. Formal/academic: "Es sei darauf hingewiesen, dass ..." Colloquial: "Also, pass mal auf ..." Bureaucratic: "Hiermit wird bestätigt, dass ..." Recognizing and producing the right register for the context is a hallmark of C2 proficiency.',
      examples: [
        {
          german: 'Es sei darauf hingewiesen, dass die Frist am Montag abläuft.',
          english: 'It should be noted that the deadline expires on Monday.',
          highlight: 'Es sei darauf hingewiesen',
        },
        {
          german: 'Sag mal, hast du eigentlich \'ne Ahnung, wovon der redet?',
          english: 'Hey, do you actually have any idea what he is talking about?',
          highlight: '\'ne Ahnung, wovon der redet',
        },
        {
          german: 'Unter Bezugnahme auf Ihr Schreiben vom 15. März teilen wir Ihnen mit, dass ...',
          english: 'With reference to your letter of March 15, we inform you that ...',
          highlight: 'Unter Bezugnahme auf Ihr Schreiben',
        },
      ],
    },
    {
      id: 'c2-literary-subjunctive',
      topic: 'Literary Subjunctive',
      level: 'C2',
      description: 'Konjunktiv I and II in literary and rhetorical contexts.',
      explanation:
        'In literature, the subjunctive goes beyond reported speech. Writers use Konjunktiv II for ironic distance, hypothetical inner monologue, and "erlebte Rede" (free indirect speech). Konjunktiv I appears in wishes ("Es lebe der König!") and set phrases ("Gott sei Dank"). Mastering these forms unlocks German literature.',
      examples: [
        {
          german: 'Es lebe die Freiheit!',
          english: 'Long live freedom!',
          highlight: 'lebe',
        },
        {
          german: 'Er tat, als wüsste er von nichts.',
          english: 'He acted as if he knew nothing.',
          highlight: 'als wüsste er',
        },
        {
          german: 'Man nehme zweihundert Gramm Butter und verrühre sie mit dem Zucker.',
          english: 'Take two hundred grams of butter and mix them with the sugar.',
          highlight: 'Man nehme ... verrühre',
        },
      ],
    },
    {
      id: 'c2-archaic-forms',
      topic: 'Archaic & Historical Forms',
      level: 'C2',
      description: 'Recognizing and understanding older German forms.',
      explanation:
        'Reading older literature and legal texts requires familiarity with archaic forms: "denn" as "than", "ward" as past tense of "werden", "ob" as "whether/if" in elevated style, genitive objects with certain verbs (sich einer Sache bedienen), and forms like "dessen ungeachtet" (notwithstanding). These appear in Goethe, Schiller, and formal legal language.',
      examples: [
        {
          german: 'Und es ward Licht.',
          english: 'And there was light.',
          highlight: 'ward',
        },
        {
          german: 'Dessen ungeachtet besteht die Pflicht zur Zahlung fort.',
          english: 'Notwithstanding this, the obligation to pay continues.',
          highlight: 'Dessen ungeachtet',
        },
        {
          german: 'Wes Brot ich ess, des Lied ich sing.',
          english: 'Whose bread I eat, his song I sing.',
          highlight: 'Wes ... des',
        },
      ],
    },
    {
      id: 'c2-regional-variation',
      topic: 'Regional Variation',
      level: 'C2',
      description: 'Awareness of Austrian, Swiss, and regional German differences.',
      explanation:
        'German varies significantly across regions. Austrian German uses different vocabulary (Paradeiser = Tomate, Erdäpfel = Kartoffeln, Jänner = Januar) and grammar (Perfekt with "sein" for stehen/sitzen). Swiss German has no "ß" and different pronunciations. Northern German uses "Tschüss", southern German "Servus" or "Pfüa di". Recognizing these differences is essential for true fluency.',
      examples: [
        {
          german: 'Ich hätte gern ein Viertel Wein. (Austrian)',
          english: 'I would like a quarter litre of wine.',
          highlight: 'ein Viertel',
        },
        {
          german: 'Grüezi mitenand! (Swiss German greeting)',
          english: 'Hello everyone!',
          highlight: 'Grüezi mitenand',
        },
        {
          german: 'Die Erdäpfel sind heute besonders gut. (Austrian)',
          english: 'The potatoes are especially good today.',
          highlight: 'Erdäpfel',
        },
      ],
    },
  ],
};
