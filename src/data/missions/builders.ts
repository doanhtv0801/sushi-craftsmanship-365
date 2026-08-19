import type {
  Mission,
  QuizAnswer,
  QuizQuestion,
  VocabularyEntry,
  SkillSlug,
  Difficulty,
} from "@/types/database";
import type { LocalizedText } from "@/types/locale";
import { getStageForMissionNumber } from "@/data/stages";

export interface VocabInput {
  ja: string;
  reading: string;
  en: string;
  vi: string;
  category?: VocabularyEntry["category"];
}

export function vocab(missionNumber: number, index: number, v: VocabInput): VocabularyEntry {
  return {
    id: `m${missionNumber}-vocab-${index}`,
    japanese: v.ja,
    reading: v.reading,
    english: v.en,
    vietnamese: v.vi,
    category: v.category ?? "general",
  };
}

export interface QuestionInput {
  question: LocalizedText;
  explanation?: LocalizedText;
  answers: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
}

const LABELS: Array<QuizAnswer["label"]> = ["A", "B", "C", "D"];

export function question(
  missionNumber: number,
  index: number,
  q: QuestionInput
): QuizQuestion {
  return {
    id: `m${missionNumber}-q${index}`,
    question: q.question,
    explanation: q.explanation,
    answers: q.answers.map((text, i) => ({
      id: `m${missionNumber}-q${index}-${LABELS[i]}`,
      label: LABELS[i],
      answer: { en: text },
      isCorrect: i === q.correctIndex,
    })),
  };
}

export interface MissionSeedInput {
  missionNumber: number;
  title: LocalizedText;
  slug: string;
  difficulty: Difficulty;
  description: LocalizedText;
  goal: LocalizedText;
  content: LocalizedText;
  culturalInsight: LocalizedText;
  chefTip: LocalizedText;
  keyTakeaway: LocalizedText;
  primarySkill: SkillSlug;
  xp?: number;
  estimatedMinutes?: number;
  vocabulary: VocabInput[];
  questions: QuestionInput[];
}

export function buildMission(input: MissionSeedInput): Mission {
  const stage = getStageForMissionNumber(input.missionNumber);
  if (!stage) {
    throw new Error(`No stage found for mission ${input.missionNumber}`);
  }

  const vocabulary = input.vocabulary.map((v, i) => vocab(input.missionNumber, i, v));
  const questions = input.questions.map((q, i) => question(input.missionNumber, i, q));

  return {
    id: `mission-${String(input.missionNumber).padStart(3, "0")}`,
    missionNumber: input.missionNumber,
    slug: input.slug,
    stageId: stage.id,
    title: input.title,
    difficulty: input.difficulty,
    description: input.description,
    goal: input.goal,
    content: input.content,
    culturalInsight: input.culturalInsight,
    chefTip: input.chefTip,
    keyTakeaway: input.keyTakeaway,
    primarySkill: input.primarySkill,
    vocabulary,
    quiz: {
      id: `quiz-${input.missionNumber}`,
      missionId: `mission-${String(input.missionNumber).padStart(3, "0")}`,
      passingScore: 70,
      questions,
    },
    xp: input.xp ?? 100,
    estimatedMinutes: input.estimatedMinutes ?? 10,
    status: "published",
    hasFullContent: true,
  };
}
