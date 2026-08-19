"use client";

import Link from "next/link";
import { Flame, Clock, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { SkillBars } from "@/components/shared/skill-bars";
import { useAuthStore } from "@/lib/auth/auth-store";
import { useProgressStore } from "@/lib/progress/progress-store";
import { getAllMissions, getMissionByNumber } from "@/data/missions";
import { getStageForMissionNumber } from "@/data/stages";
import { getLevelFromXp, getRankForLevel } from "@/lib/gamification";
import { localize } from "@/types/locale";
import { useHydrated } from "@/lib/use-hydrated";
import { PageSkeleton } from "@/components/shared/page-skeleton";

function formatMinutes(totalMinutes: number): string {
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  if (h === 0) return `${m}m`;
  return `${h}h ${m}m`;
}

export function DashboardContent() {
  const hydrated = useHydrated();
  const user = useAuthStore((s) => s.user);
  const totalXp = useProgressStore((s) => s.totalXp);
  const completedCount = useProgressStore((s) => s.completedMissionNumbers.length);
  const highestUnlocked = useProgressStore((s) => s.highestUnlockedMission());
  const currentStreak = useProgressStore((s) => s.currentStreak);
  const totalStudyMinutes = useProgressStore((s) => s.totalStudyMinutes);
  const skillPoints = useProgressStore((s) => s.skillPoints);

  const allMissions = getAllMissions();
  const totalMissions = allMissions.length;
  const progressPercent = Math.round((completedCount / totalMissions) * 100);

  const { level, xpIntoLevel, xpForNextLevel } = getLevelFromXp(totalXp);
  const rank = getRankForLevel(level);

  const nextMission = getMissionByNumber(Math.min(highestUnlocked, totalMissions));
  const currentStage = nextMission ? getStageForMissionNumber(nextMission.missionNumber) : undefined;

  const firstName = user?.displayName?.split(" ")[0] ?? "Craftsman";

  if (!hydrated) return <PageSkeleton />;

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10">
      <div>
        <h1 className="font-serif-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
          Welcome back, {firstName}.
        </h1>
        <p className="mt-1 text-sumi">Continue your journey to becoming a Sushi Craftsman.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Rank + level */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <span className="text-xs font-medium uppercase tracking-widest text-accent">
              Current Rank
            </span>
            <CardTitle className="flex items-baseline gap-2">
              {localize(rank.title, "en")}
              <span className="font-jp text-sm font-normal text-wood-dark">
                {localize(rank.title, "ja")}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-sumi">Level {level}</span>
              <span className="text-xs text-sumi">
                {xpIntoLevel} / {xpForNextLevel} XP
              </span>
            </div>
            <Progress value={Math.round((xpIntoLevel / xpForNextLevel) * 100)} />
            <p className="text-xs leading-relaxed text-sumi">{localize(rank.description, "en")}</p>
          </CardContent>
        </Card>

        {/* Mission progress */}
        <Card>
          <CardHeader>
            <span className="text-xs font-medium uppercase tracking-widest text-accent">
              Mission Progress
            </span>
            <CardTitle>
              {completedCount} / {totalMissions} Missions Completed
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Progress value={progressPercent} />
            <div className="flex items-center justify-between text-sm text-sumi">
              <span>{progressPercent}% complete</span>
              {currentStage && (
                <Badge variant="wood">
                  Stage {currentStage.stageNumber} · {localize(currentStage.title, "en")}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Streak + study time */}
        <Card>
          <CardHeader>
            <span className="text-xs font-medium uppercase tracking-widest text-accent">
              Discipline
            </span>
            <CardTitle>Daily Practice</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-ink">
              <Flame className="size-5 text-accent" />
              <span className="text-lg font-medium">{currentStreak} Day Streak</span>
            </div>
            <div className="flex items-center gap-2 text-sumi">
              <Clock className="size-4" />
              <span className="text-sm">{formatMinutes(totalStudyMinutes)} total study time</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Continue learning / today's mission */}
        <Card className="lg:col-span-2 border-accent/30 bg-accent-soft/40">
          <CardHeader>
            <span className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-accent">
              <Sparkles className="size-3.5" /> Today&rsquo;s Mission
            </span>
            {nextMission ? (
              <CardTitle className="text-xl">
                Mission {String(nextMission.missionNumber).padStart(3, "0")} —{" "}
                {localize(nextMission.title, "en")}
              </CardTitle>
            ) : (
              <CardTitle>You&rsquo;ve completed the entire curriculum!</CardTitle>
            )}
          </CardHeader>
          <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-sm leading-relaxed text-sumi">
              {nextMission
                ? localize(nextMission.description, "en")
                : "You've walked the full path from student to craftsman. Revisit any mission, any time."}
            </p>
            {nextMission && (
              <Button variant="accent" size="lg" asChild className="w-full sm:w-auto">
                <Link href={`/missions/${nextMission.slug}`}>
                  Continue Mission <ArrowRight className="size-4" />
                </Link>
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Skills */}
        <Card>
          <CardHeader>
            <span className="text-xs font-medium uppercase tracking-widest text-accent">Skills</span>
            <CardTitle>Your Craft</CardTitle>
          </CardHeader>
          <CardContent>
            <SkillBars points={skillPoints} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
