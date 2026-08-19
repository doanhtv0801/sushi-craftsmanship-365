import type { Rank, RankDefinition } from "@/types/database";

/**
 * XP & Level formula
 * --------------------------------------------------------------------------
 * XP required to advance FROM level L TO level L+1 grows linearly so early
 * levels come quickly (dopamine early, like Duolingo) while later levels
 * demand sustained practice (matching a real apprenticeship arc).
 *
 *   xpForLevel(L) = 100 + (L - 1) * 25
 *
 * Level 1→2 costs 100 XP, level 10→11 costs 325 XP, level 30→31 costs 825 XP.
 * A completed mission is worth 100 XP by default, so the curve keeps pace
 * with roughly one mission per level in the early game.
 */

const BASE_XP = 100;
const GROWTH_XP = 25;

export function xpRequiredForLevel(level: number): number {
  return BASE_XP + (level - 1) * GROWTH_XP;
}

export function getLevelFromXp(totalXp: number): {
  level: number;
  xpIntoLevel: number;
  xpForNextLevel: number;
} {
  let level = 1;
  let remaining = totalXp;
  let needed = xpRequiredForLevel(level);

  while (remaining >= needed) {
    remaining -= needed;
    level += 1;
    needed = xpRequiredForLevel(level);
  }

  return { level, xpIntoLevel: remaining, xpForNextLevel: needed };
}

/** XP awards (section 24 of the product brief). */
export const XP_AWARDS = {
  missionComplete: 100,
  perfectQuiz: 30,
  dailyStreak: 10,
} as const;

/**
 * Rank ladder — 9 ranks spanning the full 365-mission journey, gated by
 * level rather than mission count so quiz performance / streak bonuses also
 * matter, not just raw completion.
 */
export const RANKS: RankDefinition[] = [
  {
    slug: "sushi_student",
    minLevel: 1,
    title: { en: "Sushi Student", ja: "寿司の見習い生", vi: "Học viên Sushi" },
    description: {
      en: "You've just begun — learning what separates a craftsman from a cook.",
      ja: "職人と料理人の違いを学び始めたばかりです。",
      vi: "Bạn vừa bắt đầu — học điều làm nên sự khác biệt của một nghệ nhân.",
    },
  },
  {
    slug: "sushi_apprentice",
    minLevel: 6,
    title: { en: "Sushi Apprentice", ja: "寿司見習い", vi: "Học việc Sushi" },
    description: {
      en: "Fish knowledge and terminology are becoming second nature.",
      ja: "魚の知識と専門用語が身についてきました。",
      vi: "Kiến thức về cá và thuật ngữ đang trở thành bản năng thứ hai.",
    },
  },
  {
    slug: "junior_sushi_chef",
    minLevel: 13,
    title: { en: "Junior Sushi Chef", ja: "若手寿司職人", vi: "Đầu bếp Sushi trẻ" },
    description: {
      en: "Knife skills and fish preparation are taking shape.",
      ja: "包丁さばきと魚の下処理が形になってきました。",
      vi: "Kỹ năng dao và sơ chế cá đang dần hình thành.",
    },
  },
  {
    slug: "sushi_chef",
    minLevel: 21,
    title: { en: "Sushi Chef", ja: "寿司職人", vi: "Đầu bếp Sushi" },
    description: {
      en: "Shari and nigiri technique are consistent and confident.",
      ja: "シャリと握りの技術が安定してきました。",
      vi: "Kỹ thuật cơm giấm và nigiri đã ổn định và tự tin.",
    },
  },
  {
    slug: "edomae_sushi_chef",
    minLevel: 29,
    title: { en: "Edomae Sushi Chef", ja: "江戸前寿司職人", vi: "Đầu bếp Sushi Edomae" },
    description: {
      en: "Curing, aging and marinating techniques are part of your craft.",
      ja: "締め・熟成・漬けの技術が身についています。",
      vi: "Kỹ thuật ướp, làm chín và ủ chua đã trở thành một phần trong tay nghề.",
    },
  },
  {
    slug: "omakase_chef",
    minLevel: 37,
    title: { en: "Omakase Chef", ja: "おまかせ職人", vi: "Đầu bếp Omakase" },
    description: {
      en: "You can compose a full omakase sequence with omotenashi in mind.",
      ja: "おもてなしの心でおまかせの流れを組み立てられます。",
      vi: "Bạn có thể xây dựng một chuỗi omakase hoàn chỉnh với tinh thần omotenashi.",
    },
  },
  {
    slug: "head_sushi_chef",
    minLevel: 45,
    title: { en: "Head Sushi Chef", ja: "花板", vi: "Bếp trưởng Sushi" },
    description: {
      en: "Restaurant operations, sourcing and team leadership are yours to run.",
      ja: "店の運営・仕入れ・チームの統率を担います。",
      vi: "Vận hành nhà hàng, thu mua và quản lý đội ngũ nằm trong tay bạn.",
    },
  },
  {
    slug: "international_sushi_chef",
    minLevel: 53,
    title: {
      en: "International Sushi Chef",
      ja: "国際的な寿司職人",
      vi: "Đầu bếp Sushi Quốc tế",
    },
    description: {
      en: "Ready to bring authentic Edomae craftsmanship anywhere in the world.",
      ja: "本物の江戸前の技を世界のどこへでも届けられます。",
      vi: "Sẵn sàng mang tay nghề Edomae đích thực đến bất kỳ đâu trên thế giới.",
    },
  },
  {
    slug: "chef_owner",
    minLevel: 61,
    title: { en: "Chef / Restaurant Owner", ja: "オーナーシェフ", vi: "Bếp trưởng / Chủ nhà hàng" },
    description: {
      en: "From student to craftsman to owner — the full journey, completed.",
      ja: "見習いから職人、そしてオーナーへ — 旅の完成です。",
      vi: "Từ học viên đến nghệ nhân rồi chủ nhà hàng — hành trình trọn vẹn.",
    },
  },
];

export function getRankForLevel(level: number): RankDefinition {
  let current = RANKS[0];
  for (const rank of RANKS) {
    if (level >= rank.minLevel) current = rank;
  }
  return current;
}

export function getRankBySlug(slug: Rank): RankDefinition {
  return RANKS.find((r) => r.slug === slug) ?? RANKS[0];
}

export function nextRank(currentSlug: Rank): RankDefinition | undefined {
  const idx = RANKS.findIndex((r) => r.slug === currentSlug);
  return RANKS[idx + 1];
}
