"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MissionQuiz } from "./mission-quiz";
import { useProgressStore } from "@/lib/progress/progress-store";
import { getMissionByNumber } from "@/data/missions";
import type { Mission } from "@/types/database";
import { useHydrated } from "@/lib/use-hydrated";

export function MissionCompletePanel({ mission }: { mission: Mission }) {
  const hydrated = useHydrated();
  const status = useProgressStore((s) => s.getMissionStatus(mission.missionNumber));
  const completeMission = useProgressStore((s) => s.completeMission);
  const recordQuizResult = useProgressStore((s) => s.recordQuizResult);
  const [quizScore, setQuizScore] = useState<{ score: number; total: number } | null>(null);
  const [justCompleted, setJustCompleted] = useState(false);

  const nextMission = getMissionByNumber(mission.missionNumber + 1);

  function handleQuizSubmit(score: number, total: number) {
    setQuizScore({ score, total });
    recordQuizResult(mission.missionNumber, score, total);
  }

  function handleComplete() {
    completeMission(mission.missionNumber, { xp: mission.xp, skill: mission.primarySkill });
    setJustCompleted(true);
  }

  const isCompleted = status === "completed" || justCompleted;
  const canInteract = status === "current" || justCompleted;

  if (!hydrated) {
    return <div className="h-32 animate-pulse rounded-lg border border-border bg-washi-soft" />;
  }

  if (status === "locked") {
    return (
      <Card className="border-border/70 bg-washi-soft/50">
        <CardContent className="flex items-center gap-3 py-6 text-sm text-sumi">
          <Lock className="size-4" />
          Complete earlier missions first to unlock the quiz and mark this mission complete.
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {mission.quiz && mission.quiz.questions.length > 0 && (
        <Card>
          <CardHeader>
            <span className="text-xs font-medium uppercase tracking-widest text-accent">Quiz</span>
            <CardTitle>Check Your Understanding</CardTitle>
          </CardHeader>
          <CardContent>
            <MissionQuiz quiz={mission.quiz} onSubmit={handleQuizSubmit} />
          </CardContent>
        </Card>
      )}

      <Card className={isCompleted ? "border-success/40 bg-success-soft/40" : undefined}>
        <CardContent className="flex flex-col items-start gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          {isCompleted ? (
            <div className="flex items-center gap-2 text-success">
              <CheckCircle2 className="size-5" />
              <span className="font-medium">
                Mission Complete — +{mission.xp} XP
                {quizScore?.score === quizScore?.total && quizScore && " · +30 XP perfect quiz"}
              </span>
            </div>
          ) : (
            <p className="text-sm text-sumi">
              Ready to mark this mission complete? You&rsquo;ll earn {mission.xp} XP.
            </p>
          )}

          <div className="flex gap-2">
            {!isCompleted && canInteract && (
              <Button variant="accent" size="lg" onClick={handleComplete}>
                Complete Mission
              </Button>
            )}
            {isCompleted && nextMission && (
              <Button variant="accent" size="lg" asChild>
                <Link href={`/missions/${nextMission.slug}`}>
                  Next Mission <ArrowRight className="size-4" />
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
