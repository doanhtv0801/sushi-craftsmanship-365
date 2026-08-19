import type { Mission, Stage } from "@/types/database";
import { getAllMissions, getMissionBySlug, getMissionByNumber, getMissionsByStage } from "@/data/missions";
import { STAGES } from "@/data/stages";

/**
 * Mission repository — Phase 1 implementation reads from the in-memory mock
 * data layer (src/data). Every function is async so the call sites in pages
 * and components are already Supabase-ready: swapping the body of these
 * functions for `supabase.from('missions').select(...)` calls later requires
 * zero changes anywhere else in the app.
 */
export const missionRepository = {
  async listStages(): Promise<Stage[]> {
    return STAGES;
  },

  async listMissions(): Promise<Mission[]> {
    return getAllMissions();
  },

  async getMissionBySlug(slug: string): Promise<Mission | undefined> {
    return getMissionBySlug(slug);
  },

  async getMissionByNumber(missionNumber: number): Promise<Mission | undefined> {
    return getMissionByNumber(missionNumber);
  },

  async listMissionsByStage(stageId: string): Promise<Mission[]> {
    return getMissionsByStage(stageId);
  },
};
