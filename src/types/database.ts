import type { LocalizedText } from "./locale";

/**
 * Domain types mirroring `supabase/schema.sql`.
 *
 * These are the contracts the mock data layer (Phase 1) and the future
 * Supabase-backed repositories (Phase 2+) both implement, so swapping the
 * storage engine never touches a UI component.
 */

export type Difficulty = "beginner" | "intermediate" | "advanced";
export type MissionStatus = "locked" | "unlocked" | "current" | "completed";
export type ContentStatus = "draft" | "published" | "archived";

export type SkillSlug =
  | "fish_knowledge"
  | "knife_skills"
  | "shari"
  | "edomae"
  | "omakase";

export interface Skill {
  id: string;
  slug: SkillSlug;
  name: LocalizedText;
  icon: string;
  sortOrder: number;
}

export interface Stage {
  id: string;
  stageNumber: number;
  slug: string;
  title: LocalizedText;
  subtitle?: LocalizedText;
  description?: LocalizedText;
  missionStart: number;
  missionEnd: number;
  icon: string;
  colorToken: string;
}

export interface VocabularyEntry {
  id: string;
  japanese: string;
  reading: string;
  english: string;
  vietnamese: string;
  category:
    | "fish"
    | "knife"
    | "kitchen"
    | "technique"
    | "service"
    | "omakase"
    | "business"
    | "general";
  example?: LocalizedText;
}

export interface QuizAnswer {
  id: string;
  label: "A" | "B" | "C" | "D";
  answer: LocalizedText;
  isCorrect: boolean;
}

export interface QuizQuestion {
  id: string;
  question: LocalizedText;
  explanation?: LocalizedText;
  answers: QuizAnswer[];
}

export interface Quiz {
  id: string;
  missionId: string;
  passingScore: number;
  questions: QuizQuestion[];
}

export interface Mission {
  id: string;
  missionNumber: number;
  slug: string;
  stageId: string;
  title: LocalizedText;
  difficulty: Difficulty;
  description: LocalizedText;
  goal?: LocalizedText;
  content?: LocalizedText;
  culturalInsight?: LocalizedText;
  chefTip?: LocalizedText;
  keyTakeaway?: LocalizedText;
  primarySkill: SkillSlug;
  vocabulary: VocabularyEntry[];
  quiz?: Quiz;
  xp: number;
  estimatedMinutes: number;
  status: ContentStatus;
  /** true when the mission has full authored content (Phase 1 seed: 001–010) */
  hasFullContent: boolean;
}

export interface MissionProgressRecord {
  missionId: string;
  status: MissionStatus;
  startedAt?: string;
  completedAt?: string;
  xpEarned: number;
}

export type Rank =
  | "sushi_student"
  | "sushi_apprentice"
  | "junior_sushi_chef"
  | "sushi_chef"
  | "edomae_sushi_chef"
  | "omakase_chef"
  | "head_sushi_chef"
  | "international_sushi_chef"
  | "chef_owner";

export interface RankDefinition {
  slug: Rank;
  title: LocalizedText;
  minLevel: number;
  description: LocalizedText;
}

export interface Profile {
  id: string;
  displayName: string;
  email: string;
  avatarUrl?: string;
  preferredLocale: "ja" | "en" | "vi";
  currentRank: Rank;
  level: number;
  totalXp: number;
  currentStreak: number;
  longestStreak: number;
  lastActiveDate?: string;
  totalStudyMinutes: number;
  onboarded: boolean;
}

export interface UserSkillProgress {
  skillSlug: SkillSlug;
  points: number;
  level: number;
}
