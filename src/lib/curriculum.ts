import type {
  CEFRLevel,
  LearnerProfile,
  VocabularyItem,
  GrammarPoint,
  SessionRecord,
  SkillType,
} from '@/types';
import { CEFR_ORDER } from '@/types';
import { cefrToNumber } from '@/lib/utils';

/**
 * Grammar topics organized by CEFR level.
 */
const GRAMMAR_TOPICS: Record<CEFRLevel, string[]> = {
  A1: [
    'Present tense (Präsens) of regular verbs',
    'Present tense of sein and haben',
    'Definite and indefinite articles (der/die/das, ein/eine)',
    'Nominative case',
    'Accusative case',
    'Basic word order (SVO)',
    'Yes/no questions and W-questions',
    'Negation with nicht and kein',
    'Personal pronouns (nominative)',
    'Plural forms of nouns',
    'Possessive articles (mein, dein, etc.)',
    'Separable verbs in present tense',
    'Modal verbs: können, möchten',
    'Imperative (Sie-form)',
    'Prepositions with accusative (für, gegen, ohne, um, durch)',
  ],
  A2: [
    'Dative case',
    'Prepositions with dative (aus, bei, mit, nach, seit, von, zu)',
    'Two-way prepositions (Wechselpräpositionen)',
    'Perfect tense (Perfekt) with haben',
    'Perfect tense with sein',
    'Simple past (Präteritum) of sein and haben',
    'Modal verbs: müssen, dürfen, sollen, wollen',
    'Reflexive verbs',
    'Comparative and superlative adjectives',
    'Adjective declension (basic)',
    'Coordinating conjunctions (und, aber, oder, denn)',
    'Subordinating conjunctions (weil, dass, wenn, als)',
    'Word order in subordinate clauses',
    'Temporal prepositions (am, im, um, von...bis)',
    'Ordinal numbers',
  ],
  B1: [
    'Genitive case',
    'Relative clauses (Relativsätze)',
    'Passive voice (Passiv) present and simple past',
    'Konjunktiv II (würde + infinitive, wäre, hätte)',
    'Infinitive clauses with zu',
    'Adjective declension (complete)',
    'N-declension nouns',
    'Verbs with prepositional objects',
    'Indirect speech (basic Konjunktiv I)',
    'Plusquamperfekt (past perfect)',
    'Future tense (Futur I)',
    'Double infinitive constructions',
    'Concessive clauses (obwohl, trotzdem)',
    'Conditional clauses (wenn...dann)',
    'Adverbial connectors (deshalb, trotzdem, außerdem)',
  ],
  B2: [
    'Konjunktiv I for indirect speech',
    'Konjunktiv II (advanced: past forms)',
    'Passive with modal verbs',
    'Participial adjectives (erweiterte Partizipialattribute)',
    'Nominal style vs. verbal style',
    'Advanced relative clauses (was, wo, worüber)',
    'Subjective meaning of modal verbs',
    'Future perfect (Futur II)',
    'Correlative conjunctions (je...desto, sowohl...als auch)',
    'Advanced word order and emphasis',
    'Verbs with es (es gibt, es geht um)',
    'Prepositional adverbs (darauf, damit, wofür)',
    'Text connectors and discourse markers',
    'Advanced adjective declension with mixed types',
    'Gerund constructions',
  ],
  C1: [
    'Advanced Konjunktiv I and II in all tenses',
    'Complex passive constructions (Zustandspassiv, bekommen-Passiv)',
    'Advanced participial constructions',
    'Nominalization of verbs and adjectives',
    'Functional verb structures (Funktionsverbgefüge)',
    'Advanced modal particles (ja, doch, mal, halt, eben)',
    'Complex sentence structures and embedding',
    'Register variation (formal, academic, colloquial)',
    'Idiomatic prepositional usage',
    'Advanced text cohesion devices',
    'Ellipsis and substitution in German',
    'Stylistic inversion and emphasis patterns',
  ],
  C2: [
    'Nuanced Konjunktiv usage in literary and formal texts',
    'Archaic and literary grammatical forms',
    'Advanced stylistic devices and rhetoric',
    'Regional grammatical variations',
    'Academic and scientific writing conventions',
    'Complex nominalization patterns',
    'Pragmatic functions of grammatical structures',
    'Subtle distinctions between near-synonymous constructions',
    'Advanced punctuation and orthographic conventions',
    'Metalinguistic awareness and grammar terminology',
  ],
};

/**
 * Target vocabulary counts by CEFR level (cumulative).
 */
const VOCABULARY_TARGETS: Record<CEFRLevel, number> = {
  A1: 500,
  A2: 1000,
  B1: 2000,
  B2: 4000,
  C1: 8000,
  C2: 16000,
};

/**
 * Get the grammar topics that should be covered at a given CEFR level.
 */
export function getGrammarTopicsForLevel(level: CEFRLevel): string[] {
  return GRAMMAR_TOPICS[level];
}

/**
 * Get the target vocabulary count for a CEFR level.
 */
export function getVocabularyTargetForLevel(level: CEFRLevel): number {
  return VOCABULARY_TARGETS[level];
}

/**
 * Calculate overall progress (0-100) toward the current CEFR level.
 * Weighted: 50% vocabulary progress, 50% grammar mastery.
 */
export function getLevelProgress(
  profile: LearnerProfile,
  vocabulary: VocabularyItem[],
  grammar: GrammarPoint[]
): number {
  const level = profile.assessed_level;
  const targetVocab = VOCABULARY_TARGETS[level];

  // Count vocabulary items at or below current level that have been reviewed
  const learnedVocab = vocabulary.filter(
    (v) => cefrToNumber(v.level) <= cefrToNumber(level) && v.times_seen > 0
  ).length;
  const vocabProgress = Math.min(100, (learnedVocab / targetVocab) * 100);

  // Count mastered grammar points at or below current level
  const levelGrammar = grammar.filter(
    (g) => cefrToNumber(g.level) <= cefrToNumber(level)
  );
  const totalGrammarTopics = CEFR_ORDER
    .filter((l) => cefrToNumber(l) <= cefrToNumber(level))
    .reduce((sum, l) => sum + GRAMMAR_TOPICS[l].length, 0);

  const masteredGrammar = levelGrammar.filter((g) => g.mastered).length;
  const grammarProgress =
    totalGrammarTopics > 0
      ? Math.min(100, (masteredGrammar / totalGrammarTopics) * 100)
      : 0;

  // Weighted average: 50% vocab, 50% grammar
  const progress = vocabProgress * 0.5 + grammarProgress * 0.5;
  return Math.round(Math.min(100, Math.max(0, progress)));
}

/**
 * Determine if a learner should level up based on recent session performance.
 * Requires accuracy > 85% over the last 3 sessions.
 */
export function shouldLevelUp(
  profile: LearnerProfile,
  recentSessions: SessionRecord[]
): boolean {
  // Cannot level up beyond C2
  if (profile.assessed_level === 'C2') return false;

  // Need at least 3 sessions to evaluate
  const lastThree = recentSessions
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  if (lastThree.length < 3) return false;

  const averageAccuracy =
    lastThree.reduce((sum, s) => sum + s.accuracy, 0) / lastThree.length;

  return averageAccuracy > 85;
}

/**
 * Identify the learner's weakest skill based on their skill breakdown.
 * Returns the skill with the lowest CEFR level.
 */
export function getWeakestSkill(profile: LearnerProfile): SkillType {
  const breakdown = profile.skill_breakdown;
  const skills: SkillType[] = [
    'speaking',
    'listening',
    'reading',
    'writing',
    'grammar',
    'vocabulary',
  ];

  let weakest: SkillType = skills[0];
  let lowestLevel = cefrToNumber(breakdown[weakest]);

  for (const skill of skills) {
    const level = cefrToNumber(breakdown[skill]);
    if (level < lowestLevel) {
      lowestLevel = level;
      weakest = skill;
    }
  }

  return weakest;
}
