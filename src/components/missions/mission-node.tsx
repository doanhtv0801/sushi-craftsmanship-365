import Link from "next/link";
import { Check, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Mission, MissionStatus } from "@/types/database";
import { localize } from "@/types/locale";

export function MissionNode({ mission, status }: { mission: Mission; status: MissionStatus }) {
  const number = String(mission.missionNumber).padStart(3, "0");
  const title = localize(mission.title, "en");

  const base =
    "group relative flex w-full flex-col gap-1 rounded-md border p-3 text-left transition-all";

  if (status === "locked") {
    return (
      <div
        className={cn(base, "cursor-not-allowed border-border/70 bg-washi-soft/40 opacity-60")}
        aria-disabled
        title={`Mission ${number} — locked`}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-sumi/70">{number}</span>
          <Lock className="size-3.5 text-sumi/50" />
        </div>
        <span className="line-clamp-2 text-xs text-sumi/60">{title}</span>
      </div>
    );
  }

  const isCompleted = status === "completed";
  const isCurrent = status === "current";

  return (
    <Link
      href={`/missions/${mission.slug}`}
      className={cn(
        base,
        "border-border bg-washi-soft hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-sm",
        isCompleted && "border-accent/30 bg-accent-soft/50",
        isCurrent && "border-accent bg-accent-soft ring-2 ring-accent/30"
      )}
    >
      <div className="flex items-center justify-between">
        <span
          className={cn(
            "text-xs font-medium",
            isCompleted ? "text-accent-dark" : isCurrent ? "text-accent" : "text-sumi"
          )}
        >
          {number}
        </span>
        {isCompleted && <Check className="size-3.5 text-accent-dark" />}
        {isCurrent && <span className="size-2 animate-pulse rounded-full bg-accent" />}
      </div>
      <span className="line-clamp-2 text-xs font-medium text-ink">{title}</span>
    </Link>
  );
}
