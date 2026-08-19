import { Hero } from "@/components/landing/hero";
import { MoreThanSushi } from "@/components/landing/more-than-sushi";
import { JourneySection } from "@/components/landing/journey-section";
import { MissionsSection } from "@/components/landing/missions-section";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <MoreThanSushi />
        <JourneySection />
        <MissionsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
