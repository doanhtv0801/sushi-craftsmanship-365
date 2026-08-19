"use client";

import { useRouter } from "next/navigation";
import { Flame, Trophy, Clock, LogOut } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { SkillBars } from "@/components/shared/skill-bars";
import { useAuthStore } from "@/lib/auth/auth-store";
import { useProgressStore } from "@/lib/progress/progress-store";
import { getAllMissions } from "@/data/missions";
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

export function ProfileContent() {
  const router = useRouter();
  const hydrated = useHydrated();
  const user = useAuthStore((s) => s.user);
  const signOut = useAuthStore((s) => s.signOut);
  const totalXp = useProgressStore((s) => s.totalXp);
  const completedCount = useProgressStore((s) => s.completedMissionNumbers.length);
  const currentStreak = useProgressStore((s) => s.currentStreak);
  const longestStreak = useProgressStore((s) => s.longestStreak);
  const totalStudyMinutes = useProgressStore((s) => s.totalStudyMinutes);
  const skillPoints = useProgressStore((s) => s.skillPoints);

  const { level, xpIntoLevel, xpForNextLevel } = getLevelFromXp(totalXp);
  const rank = getRankForLevel(level);
  const totalMissions = getAllMissions().length;

  function handleSignOut() {
    signOut();
    router.push("/");
  }

  if (!hydrated) return <PageSkeleton />;

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10">
      <div className="flex items-center gap-4">
        <Avatar className="size-14">
          <AvatarFallback className="text-lg">
            {(user?.displayName ?? "S").slice(0, 1).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-serif-display text-xl font-medium text-ink">
            {user?.displayName ?? "Guest Craftsman"}
          </h1>
          <p className="text-sm text-sumi">{user?.email ?? "Not signed in"}</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <span className="text-xs font-medium uppercase tracking-widest text-accent">Rank</span>
          <CardTitle className="flex items-baseline gap-2">
            {localize(rank.title, "en")}
            <span className="font-jp text-sm font-normal text-wood-dark">
              {localize(rank.title, "ja")}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat icon={Trophy} label="Level" value={String(level)} />
            <Stat icon={Trophy} label="Total XP" value={String(totalXp)} />
            <Stat
              icon={Trophy}
              label="Missions"
              value={`${completedCount} / ${totalMissions}`}
            />
            <Stat icon={Clock} label="Study Time" value={formatMinutes(totalStudyMinutes)} />
          </div>
          <div>
            <div className="mb-1.5 flex items-center justify-between text-xs text-sumi">
              <span>Progress to Level {level + 1}</span>
              <span>
                {xpIntoLevel} / {xpForNextLevel} XP
              </span>
            </div>
            <Progress value={Math.round((xpIntoLevel / xpForNextLevel) * 100)} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            Discipline
          </span>
          <CardTitle>Streak</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <Stat icon={Flame} label="Current Streak" value={`${currentStreak} days`} />
          <Stat icon={Flame} label="Longest Streak" value={`${longestStreak} days`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <span className="text-xs font-medium uppercase tracking-widest text-accent">Skills</span>
          <CardTitle>Your Craft</CardTitle>
        </CardHeader>
        <CardContent>
          <SkillBars points={skillPoints} />
        </CardContent>
      </Card>

      {user && (
        <Button variant="outline" onClick={handleSignOut} className="self-start">
          <LogOut className="size-4" /> Sign out
        </Button>
      )}

      <p className="text-xs text-sumi/70">
        Achievements, saved vocabulary and the full career roadmap arrive in later phases of
        this app.
      </p>
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <span className="flex items-center gap-1.5 text-xs text-sumi">
        <Icon className="size-3.5" /> {label}
      </span>
      <span className="text-lg font-medium text-ink">{value}</span>
    </div>
  );
}
