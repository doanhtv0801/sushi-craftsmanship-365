import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Sparkles } from "lucide-react";
import { getMissionBySlug, getAllMissions } from "@/data/missions";
import { getStageForMissionNumber } from "@/data/stages";
import { Badge } from "@/components/ui/badge";
import { VocabularyTable } from "@/components/missions/vocabulary-table";
import { MissionContent, MissionInsightBlock } from "@/components/missions/mission-content";
import { MissionCompletePanel } from "@/components/missions/mission-complete-panel";
import { localize } from "@/types/locale";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllMissions()
    .filter((m) => m.hasFullContent)
    .map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const mission = getMissionBySlug(slug);
  if (!mission) return { title: "Mission Not Found" };

  const number = String(mission.missionNumber).padStart(3, "0");
  const title = localize(mission.title, "en");
  return {
    title: `Mission ${number} — ${title}`,
    description: localize(mission.description, "en"),
  };
}

const DIFFICULTY_LABEL: Record<string, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

export default async function MissionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const mission = getMissionBySlug(slug);
  if (!mission) notFound();

  const stage = getStageForMissionNumber(mission.missionNumber);
  const number = String(mission.missionNumber).padStart(3, "0");

  if (!mission.hasFullContent) {
    return (
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-24 text-center">
        <Badge variant="wood">Mission {number}</Badge>
        <h1 className="font-serif-display text-2xl font-medium text-ink">
          {localize(mission.title, "en")}
        </h1>
        <p className="max-w-md text-sumi">
          This mission&rsquo;s full lesson content is coming soon. Missions 001–150 are
          fully available today — {stage && `part of ${localize(stage.title, "en")}`}.
        </p>
        <Link href="/missions" className="text-sm font-medium text-accent hover:underline">
          <ArrowLeft className="mr-1 inline size-3.5" /> Back to Mission Map
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-8 sm:px-6 sm:py-10">
      <div className="flex flex-col gap-3">
        <Link
          href="/missions"
          className="inline-flex w-fit items-center gap-1 text-xs font-medium text-sumi hover:text-ink"
        >
          <ArrowLeft className="size-3.5" /> Mission Map
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent">Mission {number}</Badge>
          {stage && <Badge variant="wood">{localize(stage.title, "en")}</Badge>}
          <Badge variant="outline">{DIFFICULTY_LABEL[mission.difficulty]}</Badge>
        </div>

        <h1 className="font-serif-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
          {localize(mission.title, "en")}
        </h1>
        <p className="font-jp text-base text-wood-dark">{localize(mission.title, "ja")}</p>

        <div className="flex items-center gap-4 text-xs text-sumi">
          <span className="flex items-center gap-1">
            <Clock className="size-3.5" /> {mission.estimatedMinutes} min
          </span>
          <span className="flex items-center gap-1">
            <Sparkles className="size-3.5" /> {mission.xp} XP
          </span>
        </div>
      </div>

      <MissionContent mission={mission} />

      {mission.vocabulary.length > 0 && (
        <section className="flex flex-col gap-3">
          <h2 className="font-serif-display text-sm font-medium uppercase tracking-widest text-accent">
            Japanese Vocabulary
          </h2>
          <VocabularyTable vocabulary={mission.vocabulary} />
        </section>
      )}

      {mission.chefTip && (
        <MissionInsightBlock label="Chef Knowledge" text={localize(mission.chefTip, "en")} />
      )}

      {mission.culturalInsight && (
        <MissionInsightBlock
          label="Cultural Insight"
          text={localize(mission.culturalInsight, "en")}
        />
      )}

      {mission.keyTakeaway && (
        <section className="rounded-md border border-accent/30 bg-accent-soft/50 p-5">
          <h2 className="font-serif-display text-sm font-medium uppercase tracking-widest text-accent-dark">
            Remember This
          </h2>
          <p className="mt-2 text-[15px] font-medium leading-relaxed text-ink">
            {localize(mission.keyTakeaway, "en")}
          </p>
        </section>
      )}

      <MissionCompletePanel mission={mission} />
    </div>
  );
}
