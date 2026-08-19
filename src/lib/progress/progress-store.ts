"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { MissionStatus, SkillSlug } from "@/types/database";
import { XP_AWARDS, getLevelFromXp, getRankForLevel } from "@/lib/gamification";

/**
 * Client-side progress store (Phase 1 mock backend).
 *
 * This mirrors the shape of `mission_progress`, `user_skills`, `profiles`
 * and `user_streaks` in `supabase/schema.sql`. It persists to localStorage
 * so progress survives a reload without a real backend. When Supabase is
 * connected, this store's actions become thin wrappers that also write to
 * Postgres (optimistic local update + server mutation) instead of changing
 * every call site across the app.
 */

interface QuizResult {
  missionNumber: number;
  score: number;
  isPerfect: boolean;
  attemptedAt: string;
}

interface ProgressState {
  totalXp: number;
  completedMissionNumbers: number[];
  quizResults: Record<number, QuizResult>;
  skillPoints: Record<SkillSlug, number>;
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string | null; // ISO date (yyyy-mm-dd)
  totalStudyMinutes: number;

  // Derived getters
  highestUnlockedMission: () => number;
  getMissionStatus: (missionNumber: number) => MissionStatus;
  level: () => number;
  rankSlug: () => ReturnType<typeof getRankForLevel>["slug"];
  progressPercent: (totalMissions: number) => number;

  // Actions
  recordDailyActivity: (minutes?: number) => void;
  completeMission: (missionNumber: number, opts?: { xp?: number; skill?: SkillSlug }) => void;
  recordQuizResult: (missionNumber: number, score: number, totalQuestions: number) => void;
  resetProgress: () => void;
}

const INITIAL_SKILLS: Record<SkillSlug, number> = {
  fish_knowledge: 0,
  knife_skills: 0,
  shari: 0,
  edomae: 0,
  omakase: 0,
};

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

function daysBetween(a: string, b: string): number {
  const d1 = new Date(a + "T00:00:00Z").getTime();
  const d2 = new Date(b + "T00:00:00Z").getTime();
  return Math.round((d2 - d1) / (1000 * 60 * 60 * 24));
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      totalXp: 0,
      completedMissionNumbers: [],
      quizResults: {},
      skillPoints: { ...INITIAL_SKILLS },
      currentStreak: 0,
      longestStreak: 0,
      lastActiveDate: null,
      totalStudyMinutes: 0,

      highestUnlockedMission: () => {
        const completed = get().completedMissionNumbers;
        if (completed.length === 0) return 1;
        return Math.max(...completed) + 1;
      },

      getMissionStatus: (missionNumber: number) => {
        const completed = get().completedMissionNumbers;
        if (completed.includes(missionNumber)) return "completed";
        const current = get().highestUnlockedMission();
        if (missionNumber === current) return "current";
        if (missionNumber < current) return "unlocked";
        return "locked";
      },

      level: () => getLevelFromXp(get().totalXp).level,

      rankSlug: () => getRankForLevel(get().level()).slug,

      progressPercent: (totalMissions: number) => {
        if (totalMissions <= 0) return 0;
        return Math.round((get().completedMissionNumbers.length / totalMissions) * 100);
      },

      recordDailyActivity: (minutes = 0) => {
        set((state) => {
          const today = todayIso();
          if (state.lastActiveDate === today) {
            return { totalStudyMinutes: state.totalStudyMinutes + minutes };
          }
          const wasYesterday =
            state.lastActiveDate !== null && daysBetween(state.lastActiveDate, today) === 1;
          const newStreak = wasYesterday ? state.currentStreak + 1 : 1;
          return {
            lastActiveDate: today,
            currentStreak: newStreak,
            longestStreak: Math.max(state.longestStreak, newStreak),
            totalStudyMinutes: state.totalStudyMinutes + minutes,
            totalXp: state.totalXp + (newStreak > 1 ? XP_AWARDS.dailyStreak : 0),
          };
        });
      },

      completeMission: (missionNumber, opts) => {
        get().recordDailyActivity(opts?.xp ? Math.max(4, Math.round(opts.xp / 25)) : 8);
        set((state) => {
          if (state.completedMissionNumbers.includes(missionNumber)) return {};
          const xpAward = opts?.xp ?? XP_AWARDS.missionComplete;
          const skill = opts?.skill;
          return {
            completedMissionNumbers: [...state.completedMissionNumbers, missionNumber].sort(
              (a, b) => a - b
            ),
            totalXp: state.totalXp + xpAward,
            skillPoints: skill
              ? { ...state.skillPoints, [skill]: state.skillPoints[skill] + 10 }
              : state.skillPoints,
          };
        });
      },

      recordQuizResult: (missionNumber, score, totalQuestions) => {
        const isPerfect = totalQuestions > 0 && score === totalQuestions;
        set((state) => ({
          quizResults: {
            ...state.quizResults,
            [missionNumber]: {
              missionNumber,
              score,
              isPerfect,
              attemptedAt: new Date().toISOString(),
            },
          },
          totalXp: state.totalXp + (isPerfect ? XP_AWARDS.perfectQuiz : 0),
        }));
      },

      resetProgress: () =>
        set({
          totalXp: 0,
          completedMissionNumbers: [],
          quizResults: {},
          skillPoints: { ...INITIAL_SKILLS },
          currentStreak: 0,
          longestStreak: 0,
          lastActiveDate: null,
          totalStudyMinutes: 0,
        }),
    }),
    { name: "sushi365-progress" }
  )
);
