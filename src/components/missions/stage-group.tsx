"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Mission, Stage } from "@/types/database";
import { localize } from "@/types/locale";
import { MissionNode } from "./mission-node";
import { useProgressStore } from "@/lib/progress/progress-store";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export function StageGroup({
  stage,
  missions,
  defaultOpen,
}: {
  stage: Stage;
  missions: Mission[];
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const getMissionStatus = useProgressStore((s) => s.getMissionStatus);

  const completedInStage = missions.filter(
    (m) => getMissionStatus(m.missionNumber) === "completed"
  ).length;
  const percent = Math.round((completedInStage / missions.length) * 100);

  return (
    <section className="rounded-lg border border-border bg-washi-soft">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <div className="flex flex-1 flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <Badge variant="wood">Stage {stage.stageNumber}</Badge>
            <span className="font-serif-display text-base font-medium text-ink sm:text-lg">
              {localize(stage.title, "en")}
            </span>
            <span className="font-jp hidden text-sm text-wood-dark sm:inline">
              {localize(stage.title, "ja")}
            </span>
          </div>
          <p className="text-xs text-sumi sm:text-sm">{localize(stage.subtitle, "en")}</p>
          <div className="mt-1 flex max-w-xs items-center gap-2">
            <Progress value={percent} className="h-1.5" />
            <span className="whitespace-nowrap text-[11px] text-sumi">
              {completedInStage}/{missions.length}
            </span>
          </div>
        </div>
        <ChevronDown
          className={cn("size-5 shrink-0 text-sumi transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        <div className="grid grid-cols-3 gap-2 border-t border-border p-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {missions.map((mission) => (
            <MissionNode
              key={mission.id}
              mission={mission}
              status={getMissionStatus(mission.missionNumber)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
