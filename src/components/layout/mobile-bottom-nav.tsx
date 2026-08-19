"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Map, GraduationCap, Search, CircleUserRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { useProgressStore } from "@/lib/progress/progress-store";
import { getMissionByNumber } from "@/data/missions";
import { useHydrated } from "@/lib/use-hydrated";

export function MobileBottomNav() {
  const pathname = usePathname();
  const hydrated = useHydrated();
  const highestUnlocked = useProgressStore((s) => s.highestUnlockedMission());
  const currentMission = hydrated
    ? getMissionByNumber(highestUnlocked) ?? getMissionByNumber(1)
    : getMissionByNumber(1);

  const tabs = [
    { href: "/dashboard", label: "Home", icon: Home },
    { href: "/missions", label: "Missions", icon: Map },
    { href: currentMission ? `/missions/${currentMission.slug}` : "/missions", label: "Learn", icon: GraduationCap },
    { href: "/search", label: "Search", icon: Search },
    { href: "/profile", label: "Profile", icon: CircleUserRound },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-washi/95 backdrop-blur supports-[backdrop-filter]:bg-washi/85 md:hidden">
      <div className="mx-auto flex max-w-6xl items-stretch justify-between px-1">
        {tabs.map((tab) => {
          const active = pathname === tab.href || pathname.startsWith(tab.href + "/");
          const Icon = tab.icon;
          return (
            <Link
              key={tab.label}
              href={tab.href}
              className={cn(
                "flex flex-1 flex-col items-center gap-0.5 py-2.5 text-[11px] font-medium text-sumi transition-colors",
                active && "text-accent"
              )}
            >
              <Icon className="size-5" strokeWidth={active ? 2.25 : 1.75} />
              {tab.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
