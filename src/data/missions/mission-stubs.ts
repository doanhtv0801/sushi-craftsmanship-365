import type { Mission, SkillSlug } from "@/types/database";
import { getStageForMissionNumber } from "@/data/stages";

/**
 * Missions 011–365 — placeholder nodes for the Mission Map.
 *
 * The product brief (section 25) only asks for missions 001–010 to be fully
 * authored in Phase 1: "Không cần tạo đủ 365 mission ngay từ đầu." These
 * stubs exist purely so `/missions` can render the complete 365-mission
 * roadmap with locked nodes and believable titles drawn from the real
 * curriculum outline in the brief — not generic "Mission #011" placeholders.
 * Each will be replaced by a fully authored `buildMission(...)` entry as
 * content is produced (see src/data/missions/seed-missions.ts).
 */

interface StageThemeBank {
  skill: SkillSlug;
  topics: string[];
}

const THEME_BANKS: Record<number, StageThemeBank> = {
  1: {
    skill: "fish_knowledge",
    topics: [
      "Sushi Etiquette at the Counter",
      "Reading a Sushi Menu",
      "The Role of Soy Sauce",
      "Chopsticks vs. Hands",
      "What Makes Rice 'Sushi Rice'",
      "The Sushi Counter Layout",
      "Freshness vs. Umami",
      "The Itamae's Daily Routine",
      "Seasonality in Japanese Cuisine",
      "Ma: The Art of Timing and Space",
      "Ichigo Ichie: One Encounter, One Chance",
      "Ginger as a Palate Cleanser",
      "Green Tea and Sushi",
      "The Difference Between Sushi and Sashimi",
      "Regional Sushi Styles of Japan",
      "Sushi Beyond Tokyo: Osaka-Style",
      "The Role of Nori",
      "Reading Fish Freshness by Eye",
      "The Sushi Chef's Uniform and Hygiene",
      "Understanding Umami",
    ],
  },
  2: {
    skill: "fish_knowledge",
    topics: [
      "Maguro: The King of Sushi",
      "Akami, Chutoro and Otoro Explained",
      "Tai: The Celebration Fish",
      "Aji: The Everyday Classic",
      "Saba: Mastering a Strong Flavor",
      "Iwashi: Small Fish, Big Flavor",
      "Buri: Winter's Rich Yellowtail",
      "Hirame: Delicate Winter Flounder",
      "Kohada: The Symbol of Edomae Sushi",
      "Anago vs. Unagi",
      "Uni: The Ocean's Delicacy",
      "Hotate: Sweetness of the Sea",
      "Ikura and Fish Roe",
      "Kanpachi and Hamachi Compared",
      "Sayori: The Needlefish",
      "Tako: Preparing Octopus for Sushi",
      "Ebi: Shrimp Traditions",
      "Shako: The Mantis Shrimp",
      "Wild-Caught vs. Farmed Fish",
      "Sourcing Fish Responsibly",
    ],
  },
  3: {
    skill: "knife_skills",
    topics: [
      "Whetstone Grits Explained",
      "Finding the Correct Sharpening Angle",
      "Knife Safety in a Professional Kitchen",
      "Fish Anatomy for Chefs",
      "Scaling Without Bruising the Flesh",
      "Gutting a Whole Fish",
      "Sanmai-Oroshi: The Three-Piece Fillet",
      "Deboning Small Fish",
      "Skinning Techniques by Fish Type",
      "Trimming for Presentation",
      "Portioning for Nigiri vs. Sashimi",
      "Filleting Aji Cleanly",
      "Filleting Saba for Shime-Saba",
      "Preparing Tai for Sashimi",
      "Preparing Buri for Nigiri",
      "The Precision Cuts of Hirame",
      "Preparing Kohada: Salt and Vinegar",
      "Preparing Anago for Simmering",
      "Breaking Down a Whole Maguro Loin",
      "Caring for Your Knife Collection",
    ],
  },
  4: {
    skill: "shari",
    topics: [
      "Choosing the Right Rice Variety",
      "Washing Rice the Traditional Way",
      "Water Ratios for Perfect Texture",
      "Soaking Time and Why It Matters",
      "Cooking Rice for Sushi",
      "Komezu vs. Akazu Vinegar",
      "Balancing Salt and Sugar",
      "Shari Temperature Control",
      "Portioning Rice by Feel",
      "Shaping the Nigiri Mound",
      "Hand Pressure and Grain Integrity",
      "Incorporating Air into Shari",
      "Applying Wasabi Correctly",
      "Neta Placement and Angle",
      "Building Nigiri Speed",
      "Gunkan-Maki: The Battleship Roll",
      "Temaki: Hand Rolls",
      "Maki-Zushi Fundamentals",
      "Oshi-Zushi: Pressed Sushi",
      "Consistency Across a Full Service",
    ],
  },
  5: {
    skill: "edomae",
    topics: [
      "Zuke: Soy-Marinated Maguro",
      "Kobujime: Kelp-Curing White Fish",
      "Sujime: Vinegar-Curing Techniques",
      "Shio-Jime: Salt-Curing Basics",
      "Yubiki: The Boiling-Water Method",
      "Aburi: The Art of Searing",
      "Niru: Simmering for Anago",
      "Mushi: Steaming Techniques",
      "Aging Fish for Deeper Umami",
      "Making Nikiri Soy Sauce",
      "Perfecting Anago Preparation",
      "Perfecting Kohada Preparation",
      "Maguro Zuke, Step by Step",
      "Tamago: The Chef's Signature Test",
      "Timing a Multi-Day Cure",
      "Balancing Cure Strength by Fish Type",
      "When Not to Apply Shigoto",
      "Combining Techniques on One Piece",
      "Common Curing Mistakes",
      "Reading Doneness in Cured Fish",
    ],
  },
  6: {
    skill: "edomae",
    topics: [
      "Dashi: The Foundation of Washoku",
      "Miso Soup Fundamentals",
      "Grilling Techniques: Shioyaki",
      "Steaming Delicate Ingredients",
      "Simmering: Nimono Basics",
      "Tempura Batter and Technique",
      "Spring Ingredients in Japan",
      "Summer Ingredients in Japan",
      "Autumn Ingredients in Japan",
      "Winter Ingredients in Japan",
      "Principles of Japanese Plating",
      "Garnish as Storytelling",
      "An Introduction to Japanese Tea",
      "Sake Basics for Chefs",
      "Pairing Sake with Nigiri",
      "Wabi-Sabi in Culinary Aesthetics",
      "Negative Space on the Plate",
      "Seasonal Tableware Choices",
      "Kaiseki: Japan's Tasting Menu Tradition",
      "Washoku as UNESCO Heritage",
    ],
  },
  7: {
    skill: "omakase",
    topics: [
      "Designing an Omakase Sequence",
      "Flavor Progression: Light to Rich",
      "Texture Progression Across a Course",
      "Managing Temperature Contrasts",
      "Fat Progression Through a Meal",
      "Portion Control for a Full Course",
      "Timing Between Pieces",
      "Counter Etiquette for Chefs",
      "Observing Guest Reactions",
      "Communicating in Simple English",
      "Explaining a Dish in One Sentence",
      "Handling Dietary Requests Gracefully",
      "The Art of Storytelling at the Counter",
      "Reading the Room: Talkative vs. Quiet Guests",
      "Introducing Rare or Unusual Neta",
      "Explaining Kinmedai to a Guest",
      "Explaining Kohada's Edomae Significance",
      "Closing an Omakase Course Memorably",
      "Handling Compliments and Feedback",
      "Building Repeat Guests Through Omotenashi",
    ],
  },
  8: {
    skill: "omakase",
    topics: [
      "Daily Opening Procedures",
      "Food Safety Fundamentals (HACCP Basics)",
      "Cleaning Standards for a Sushi Kitchen",
      "Mise en Place for Service",
      "Working with Seafood Suppliers",
      "Evaluating Fish Quality on Arrival",
      "Inventory Management Basics",
      "Understanding Food Cost Percentage",
      "Reducing Waste in a Sushi Kitchen",
      "Menu Engineering for Profitability",
      "Understanding Labor Cost",
      "Leading and Training a Team",
      "Responsibilities of a Head Chef",
      "Building a Business Plan for a Sushi Restaurant",
      "Licensing and Regulations Overview",
      "Building an International Career",
      "Working Abroad: What to Expect",
      "Building Your Professional Reputation",
      "Continuing Education as a Craftsman",
      "From Sushi Student to International Sushi Craftsman",
    ],
  },
};

function slugify(text: string, missionNumber: number): string {
  const base = text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/['".,:]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return `${String(missionNumber).padStart(3, "0")}-${base}`;
}

function buildStub(missionNumber: number): Mission {
  const stage = getStageForMissionNumber(missionNumber);
  if (!stage) throw new Error(`No stage for mission ${missionNumber}`);

  const bank = THEME_BANKS[stage.stageNumber];
  const topicIndex = (missionNumber - stage.missionStart) % bank.topics.length;
  const title = bank.topics[topicIndex];

  return {
    id: `mission-${String(missionNumber).padStart(3, "0")}`,
    missionNumber,
    slug: slugify(title, missionNumber),
    stageId: stage.id,
    title: { en: title },
    difficulty:
      missionNumber % 50 < 15
        ? "beginner"
        : missionNumber % 50 < 35
          ? "intermediate"
          : "advanced",
    description: {
      en: `Coming soon as part of ${bank.skill.replace("_", " ")} training.`,
    },
    primarySkill: bank.skill,
    vocabulary: [],
    xp: 100,
    estimatedMinutes: 10,
    status: "draft",
    hasFullContent: false,
  };
}

let cachedStubs: Mission[] | null = null;

export function getMissionStubs(): Mission[] {
  if (cachedStubs) return cachedStubs;
  const stubs: Mission[] = [];
  for (let n = 151; n <= 365; n++) {
    stubs.push(buildStub(n));
  }
  cachedStubs = stubs;
  return stubs;
}
