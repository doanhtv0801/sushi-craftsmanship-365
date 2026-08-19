"use client";

import { STAGES, getStageForMissionNumber } from "@/data/stages";
import { getMissionsByStage } from "@/data/missions";
import { StageGroup } from "@/components/missions/stage-group";
import { useProgressStore } from "@/lib/progress/progress-store";
import { useHydrated } from "@/lib/use-hydrated";
import { PageSkeleton } from "@/components/shared/page-skeleton";

export function MissionsMapContent() {
  const hydrated = useHydrated();
  const highestUnlocked = useProgressStore((s) => s.highestUnlockedMission());
  const currentStage = getStageForMissionNumber(highestUnlocked);

  if (!hydrated) return <PageSkeleton />;

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10">
      <div>
        <h1 className="font-serif-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
          Mission Map
        </h1>
        <p className="mt-1 max-w-2xl text-sumi">
          365 missions across 8 stages — from your first day as a student to opening your
          own restaurant. Complete missions in order to unlock the next.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {STAGES.map((stage) => (
          <StageGroup
            key={stage.id}
            stage={stage}
            missions={getMissionsByStage(stage.id)}
            defaultOpen={currentStage?.id === stage.id}
          />
        ))}
      </div>
    </div>
  );
}
