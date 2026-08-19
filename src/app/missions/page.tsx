import type { Metadata } from "next";
import { MissionsMapContent } from "@/components/missions/missions-map-content";

export const metadata: Metadata = {
  title: "Mission Map",
  description:
    "365 missions across 8 stages of Japanese sushi craftsmanship — fish knowledge, knife skills, shari, Edomae technique, and omakase.",
};

export default function MissionsPage() {
  return <MissionsMapContent />;
}
