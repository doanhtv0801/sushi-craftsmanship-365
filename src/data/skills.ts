import type { Skill } from "@/types/database";

export const SKILLS: Skill[] = [
  {
    id: "skill-fish-knowledge",
    slug: "fish_knowledge",
    name: { en: "Fish Knowledge", ja: "魚の知識", vi: "Kiến thức về cá" },
    icon: "Fish",
    sortOrder: 1,
  },
  {
    id: "skill-knife-skills",
    slug: "knife_skills",
    name: { en: "Knife Skills", ja: "包丁技術", vi: "Kỹ năng dao" },
    icon: "Slice",
    sortOrder: 2,
  },
  {
    id: "skill-shari",
    slug: "shari",
    name: { en: "Shari", ja: "シャリ", vi: "Cơm giấm (Shari)" },
    icon: "Wheat",
    sortOrder: 3,
  },
  {
    id: "skill-edomae",
    slug: "edomae",
    name: { en: "Edomae Technique", ja: "江戸前技術", vi: "Kỹ thuật Edomae" },
    icon: "Flame",
    sortOrder: 4,
  },
  {
    id: "skill-omakase",
    slug: "omakase",
    name: { en: "Omakase & Omotenashi", ja: "おまかせ・おもてなし", vi: "Omakase & Omotenashi" },
    icon: "HandPlatter",
    sortOrder: 5,
  },
];

export function getSkillBySlug(slug: string) {
  return SKILLS.find((s) => s.slug === slug);
}
