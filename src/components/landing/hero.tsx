import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-texture text-washi">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-24 text-center sm:py-32">
        <span className="font-jp text-sm tracking-[0.3em] text-wood">寿司職人への道</span>

        <h1 className="font-serif-display max-w-3xl text-4xl font-medium leading-[1.15] tracking-tight sm:text-6xl">
          Master the Craft of Sushi
        </h1>

        <p className="max-w-2xl text-balance text-base leading-relaxed text-washi/80 sm:text-lg">
          365 missions to learn Japanese sushi craftsmanship — from fish and knives to
          Edomae techniques and Omakase.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button variant="accent" size="lg" asChild>
            <Link href="/signup">
              Start Your Journey <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-washi/25 text-washi hover:bg-washi/10"
            asChild
          >
            <Link href="/missions">
              <Compass className="size-4" /> Explore Missions
            </Link>
          </Button>
        </div>

        <p className="pt-6 font-jp text-xs tracking-widest text-washi/50">
          365 Days. 365 Missions. One Craft.
        </p>
      </div>
    </section>
  );
}
