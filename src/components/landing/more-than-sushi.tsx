import { Fish, Utensils, Wheat, Flame, HandPlatter, Heart } from "lucide-react";

const PILLARS = [
  {
    icon: Fish,
    title: "Fish",
    jp: "魚",
    description: "Season, flavor, texture and fat — know your neta the way a chef does.",
  },
  {
    icon: Utensils,
    title: "Knife",
    jp: "包丁",
    description: "Deba, yanagiba and the precise cuts that respect every fish's structure.",
  },
  {
    icon: Wheat,
    title: "Shari",
    jp: "シャリ",
    description: "Rice, vinegar and temperature — the half of nigiri most people overlook.",
  },
  {
    icon: Flame,
    title: "Edomae",
    jp: "江戸前",
    description: "Curing, marinating and aging techniques that define the Tokyo tradition.",
  },
  {
    icon: HandPlatter,
    title: "Omakase",
    jp: "おまかせ",
    description: "Sequencing a full course by flavor, texture, temperature and timing.",
  },
  {
    icon: Heart,
    title: "Omotenashi",
    jp: "おもてなし",
    description: "Japanese hospitality — anticipating a guest's needs before they're voiced.",
  },
];

export function MoreThanSushi() {
  return (
    <section className="bg-washi-texture px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            Beyond the Recipe
          </span>
          <h2 className="font-serif-display mt-3 text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            More Than Sushi
          </h2>
          <p className="mt-4 text-balance text-sumi">
            Learn the skills, culture and philosophy behind the craft.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-lg border border-border bg-washi-soft p-6 transition-colors hover:border-accent/40"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-10 items-center justify-center rounded-full bg-accent-soft text-accent-dark">
                  <pillar.icon className="size-5" />
                </span>
                <span className="font-jp text-lg text-wood-dark">{pillar.jp}</span>
              </div>
              <h3 className="font-serif-display mt-4 text-lg font-medium text-ink">
                {pillar.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-sumi">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
