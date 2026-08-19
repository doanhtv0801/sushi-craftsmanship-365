"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search as SearchIcon, BookText, Compass } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { getAllMissions } from "@/data/missions";
import { localize } from "@/types/locale";
import type { VocabularyEntry } from "@/types/database";

interface VocabHit extends VocabularyEntry {
  missionNumber: number;
  missionSlug: string;
}

export function SearchContent() {
  const [query, setQuery] = useState("");

  const allMissions = useMemo(() => getAllMissions(), []);
  const allVocab = useMemo<VocabHit[]>(
    () =>
      allMissions
        .filter((m) => m.hasFullContent)
        .flatMap((m) =>
          m.vocabulary.map((v) => ({ ...v, missionNumber: m.missionNumber, missionSlug: m.slug }))
        ),
    [allMissions]
  );

  const q = query.trim().toLowerCase();

  const missionResults = useMemo(() => {
    if (!q) return [];
    return allMissions
      .filter((m) => {
        const title = localize(m.title, "en").toLowerCase();
        const num = String(m.missionNumber).padStart(3, "0");
        return title.includes(q) || num.includes(q) || String(m.missionNumber).includes(q);
      })
      .slice(0, 20);
  }, [q, allMissions]);

  const vocabResults = useMemo(() => {
    if (!q) return [];
    return allVocab
      .filter(
        (v) =>
          v.japanese.includes(query.trim()) ||
          v.reading.toLowerCase().includes(q) ||
          v.english.toLowerCase().includes(q) ||
          v.vietnamese.toLowerCase().includes(q)
      )
      .slice(0, 20);
  }, [q, query, allVocab]);

  const hasResults = missionResults.length > 0 || vocabResults.length > 0;

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10">
      <div>
        <h1 className="font-serif-display text-2xl font-medium tracking-tight text-ink sm:text-3xl">
          Search
        </h1>
        <p className="mt-1 text-sumi">Find missions and Japanese sushi vocabulary.</p>
      </div>

      <div className="relative">
        <SearchIcon className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-sumi" />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Try 'kohada', 'edomae', or a mission number..."
          className="pl-10"
          autoFocus
        />
      </div>

      {q && !hasResults && (
        <p className="text-sm text-sumi">No results for &ldquo;{query}&rdquo;.</p>
      )}

      {missionResults.length > 0 && (
        <section className="flex flex-col gap-2">
          <h2 className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-accent">
            <Compass className="size-3.5" /> Missions
          </h2>
          <div className="flex flex-col divide-y divide-border rounded-md border border-border bg-washi-soft">
            {missionResults.map((m) => (
              <Link
                key={m.id}
                href={`/missions/${m.slug}`}
                className="flex items-center justify-between gap-3 px-4 py-3 text-sm hover:bg-washi"
              >
                <span>
                  <span className="mr-2 font-medium text-sumi">
                    {String(m.missionNumber).padStart(3, "0")}
                  </span>
                  {localize(m.title, "en")}
                </span>
                {!m.hasFullContent && <Badge variant="outline">Coming soon</Badge>}
              </Link>
            ))}
          </div>
        </section>
      )}

      {vocabResults.length > 0 && (
        <section className="flex flex-col gap-2">
          <h2 className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-accent">
            <BookText className="size-3.5" /> Vocabulary
          </h2>
          <div className="flex flex-col divide-y divide-border rounded-md border border-border bg-washi-soft">
            {vocabResults.map((v) => (
              <Link
                key={v.id}
                href={`/missions/${v.missionSlug}`}
                className="flex items-center justify-between gap-3 px-4 py-3 text-sm hover:bg-washi"
              >
                <span className="flex items-center gap-3">
                  <span className="font-jp text-base text-ink">{v.japanese}</span>
                  <span className="text-sumi">{v.english}</span>
                </span>
                <span className="text-xs text-sumi">
                  Mission {String(v.missionNumber).padStart(3, "0")}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
