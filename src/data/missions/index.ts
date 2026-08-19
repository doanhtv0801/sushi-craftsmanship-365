import type { Mission } from "@/types/database";
import { SEED_MISSIONS } from "./seed-missions";
import { SEED_MISSIONS_011_050 } from "./seed-missions-011-050";
import { SEED_MISSIONS_051_100 } from "./seed-missions-051-100";
import { SEED_MISSIONS_101_150 } from "./seed-missions-101-150";
import { getMissionStubs } from "./mission-stubs";

let cachedAll: Mission[] | null = null;

/** All 365 missions — 001–150 fully authored (Stages 1–3 complete), 151–365 placeholder stubs. */
export function getAllMissions(): Mission[] {
  if (cachedAll) return cachedAll;
  cachedAll = [
    ...SEED_MISSIONS,
    ...SEED_MISSIONS_011_050,
    ...SEED_MISSIONS_051_100,
    ...SEED_MISSIONS_101_150,
    ...getMissionStubs(),
  ].sort((a, b) => a.missionNumber - b.missionNumber);
  return cachedAll;
}

export function getMissionBySlug(slug: string): Mission | undefined {
  return getAllMissions().find((m) => m.slug === slug);
}

export function getMissionByNumber(missionNumber: number): Mission | undefined {
  return getAllMissions().find((m) => m.missionNumber === missionNumber);
}

export function getMissionsByStage(stageId: string): Mission[] {
  return getAllMissions().filter((m) => m.stageId === stageId);
}

export { SEED_MISSIONS };
