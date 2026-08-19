import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { STAGES } from "@/data/stages";
import { localize } from "@/types/locale";

export function MissionsSection() {
  return (
    <section className="bg-ink-texture px-6 py-24 text-washi">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-wood">
            The Curriculum
          </span>
          <h2 className="font-serif-display mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
            365 Missions
          </h2>
          <p className="mt-4 text-balance text-washi/75">
            Learn one concept every day. Eight stages, from your first day as a student
            to opening your own restaurant.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {STAGES.map((stage) => (
            <div
              key={stage.id}
              className="rounded-lg border border-washi/10 bg-washi/[0.04] p-5"
            >
              <span className="text-xs font-medium tracking-widest text-wood">
                STAGE {stage.stageNumber} · {stage.missionStart}–{stage.missionEnd}
              </span>
              <h3 className="font-serif-display mt-2 text-base font-medium text-washi">
                {localize(stage.title, "en")}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-washi/60">
                {localize(stage.subtitle, "en")}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="font-jp text-sm tracking-widest text-wood">
            365日。365のミッション。一つの技。
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link href="/missions">
              View the Full Mission Map <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
