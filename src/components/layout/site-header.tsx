"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChefHat } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/lib/auth/auth-store";
import { useHydrated } from "@/lib/use-hydrated";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/missions", label: "Missions" },
  { href: "/search", label: "Search" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const user = useAuthStore((s) => s.user);
  const hydrated = useHydrated();
  const showAuthed = hydrated && Boolean(user);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-washi/95 backdrop-blur supports-[backdrop-filter]:bg-washi/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-ink text-washi">
            <ChefHat className="size-4" />
          </span>
          <span className="whitespace-nowrap font-serif-display text-[15px] font-medium tracking-tight text-ink">
            <span className="sm:hidden">
              Sushi <span className="text-accent">365</span>
            </span>
            <span className="hidden sm:inline">
              Sushi Craftsmanship <span className="text-accent">365</span>
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3.5 py-2 text-sm font-medium text-sumi transition-colors hover:bg-washi-soft hover:text-ink",
                pathname === link.href && "bg-washi-soft text-ink"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {showAuthed && user ? (
            <Link href="/profile" className="flex items-center gap-2">
              <span className="hidden text-sm font-medium text-ink sm:inline">
                {user.displayName}
              </span>
              <Avatar>
                <AvatarFallback>{user.displayName.slice(0, 1).toUpperCase()}</AvatarFallback>
              </Avatar>
            </Link>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
                <Link href="/login">Log in</Link>
              </Button>
              <Button variant="accent" size="sm" asChild>
                <Link href="/signup">
                  <span className="sm:hidden">Sign Up</span>
                  <span className="hidden sm:inline">Start Your Journey</span>
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
