import type { Mission } from "@/types/database";
import { SEED_MISSIONS } from "./seed-missions";
import { getMissionStubs } from "./mission-stubs";

let cachedAll: Mission[] | null = null;

/** All 365 missions — 001–010 fully authored, 011–365 placeholder stubs. */
export function getAllMissions(): Mission[] {
  if (cachedAll) return cachedAll;
  cachedAll = [...SEED_MISSIONS, ...getMissionStubs()].sort(
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
