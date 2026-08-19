"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "./site-header";
import { MobileBottomNav } from "./mobile-bottom-nav";

const CHROMELESS_ROUTES = ["/", "/login", "/signup"];

export function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showChrome = !CHROMELESS_ROUTES.includes(pathname);

  return (
    <>
      {showChrome && <SiteHeader />}
      <div className={showChrome ? "pb-20 md:pb-0" : undefined}>{children}</div>
      {showChrome && <MobileBottomNav />}
    </>
  );
}
