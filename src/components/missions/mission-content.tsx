"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Mission } from "@/types/database";
import { localize, SUPPORTED_LOCALES, LOCALE_LABEL, type Locale } from "@/types/locale";

function Paragraphs({ text }: { text: string }) {
  return (
    <div className="flex flex-col gap-3 text-[15px] leading-relaxed text-ink">
      {text
        .split("\n\n")
        .filter(Boolean)
        .map((para, i) => (
          <p key={i}>{para}</p>
        ))}
    </div>
  );
}

/**
 * Renders the localized body of a mission (Key Concept, Goal, Cultural
 * Insight, Chef Tip, Remember This) with a locale switcher. This is the
 * primary demonstration of the trilingual content architecture — every
 * field reads from the same `LocalizedText` map, so adding a fourth locale
 * (Chinese, etc.) later is a data change, not a code change.
 */
export function MissionContent({ mission }: { mission: Mission }) {
  const [locale, setLocale] = useState<Locale>("en");

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-1 self-start rounded-md border border-border bg-washi-soft p-1">
        {SUPPORTED_LOCALES.map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            className={cn(
              "rounded-[calc(var(--radius-md)-4px)] px-3 py-1.5 text-xs font-medium transition-colors",
              l === "ja" && "font-jp",
              locale === l ? "bg-ink text-washi" : "text-sumi hover:bg-washi"
            )}
          >
            {LOCALE_LABEL[l]}
          </button>
        ))}
      </div>

      {mission.goal && (
        <section className="flex flex-col gap-2">
          <h2 className="font-serif-display text-sm font-medium uppercase tracking-widest text-accent">
            Mission Goal
          </h2>
          <Paragraphs text={localize(mission.goal, locale)} />
        </section>
      )}

      {mission.content && (
        <section className="flex flex-col gap-2">
          <h2 className="font-serif-display text-sm font-medium uppercase tracking-widest text-accent">
            Key Concept
          </h2>
          <Paragraphs text={localize(mission.content, locale)} />
        </section>
      )}
    </div>
  );
}

export function MissionInsightBlock({
  label,
  text,
}: {
  label: string;
  text: string;
}) {
  return (
    <section className="flex flex-col gap-2 rounded-md border border-border bg-washi-soft p-5">
      <h2 className="font-serif-display text-sm font-medium uppercase tracking-widest text-accent">
        {label}
      </h2>
      <p className="text-[15px] leading-relaxed text-ink">{text}</p>
    </section>
  );
}
