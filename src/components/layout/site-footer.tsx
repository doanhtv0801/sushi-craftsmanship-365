import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-washi px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-serif-display text-sm font-medium text-ink">
            Sushi Craftsmanship 365
          </p>
          <p className="mt-1 text-xs text-sumi">
            Learn Sushi. Understand Japan. Master the Craft.
          </p>
        </div>
        <nav className="flex items-center gap-5 text-xs text-sumi">
          <Link href="/missions" className="hover:text-ink">
            Missions
          </Link>
          <Link href="/dashboard" className="hover:text-ink">
            Dashboard
          </Link>
          <Link href="/search" className="hover:text-ink">
            Search
          </Link>
        </nav>
      </div>
    </footer>
  );
}
