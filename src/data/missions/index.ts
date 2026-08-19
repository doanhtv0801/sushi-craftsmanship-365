import type { Mission } from "@/types/database";
import { SEED_MISSIONS } from "./seed-missions";
import { SEED_MISSIONS_011_050 } from "./seed-missions-011-050";
import { getMissionStubs } from "./mission-stubs";

let cachedAll: Mission[] | null = null;

/** All 365 missions — 001–050 fully authored (Stage 1 complete), 051–365 placeholder stubs. */
export function getAllMissions(): Mission[] {
  if (cachedAll) return cachedAll;
  cachedAll = [...SEED_MISSIONS, ...SEED_MISSIONS_011_050, ...getMissionStubs()].sort(
    (a, b) => a.missionNumber - b.missionNumber
  );
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
