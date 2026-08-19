import { RANKS } from "@/lib/gamification";
import { localize } from "@/types/locale";

export function JourneySection() {
  const highlighted = [RANKS[0], RANKS[2], RANKS[3], RANKS[5], RANKS[8]];

  return (
    <section className="border-y border-border bg-washi px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            The Path
          </span>
          <h2 className="font-serif-display mt-3 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Your Journey
          </h2>
          <p className="mt-4 text-balance text-sumi">
            Beginner → Apprentice → Chef → Omakase Chef → Sushi Craftsman.
          </p>
        </div>

        <div className="mt-14 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
          {highlighted.map((rank, i) => (
            <div key={rank.slug} className="flex flex-1 items-center gap-3">
              <div className="flex flex-1 flex-col items-center gap-2 rounded-lg border border-border bg-washi-soft px-4 py-6 text-center">
                <span className="font-jp text-sm text-wood-dark">{localize(rank.title, "ja")}</span>
                <span className="font-serif-display text-base font-medium text-ink">
                  {localize(rank.title, "en")}
                </span>
              </div>
              {i < highlighted.length - 1 && (
                <span
                  aria-hidden
                  className="hidden text-lg text-border sm:block"
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
