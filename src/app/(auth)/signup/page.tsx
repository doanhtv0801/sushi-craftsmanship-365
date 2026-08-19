"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/lib/auth/auth-store";

export default function SignupPage() {
  const router = useRouter();
  const signUp = useAuthStore((s) => s.signUp);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    signUp({ email, displayName, password });
    router.push("/dashboard");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-washi-texture px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center gap-2 text-center">
          <span className="flex size-11 items-center justify-center rounded-full bg-ink text-washi">
            <ChefHat className="size-5" />
          </span>
          <h1 className="font-serif-display text-xl font-medium text-ink">Start Your Journey</h1>
          <p className="text-sm text-sumi">
            I am not just learning sushi. I am training to become a sushi craftsman.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-lg border border-border bg-washi-soft p-6">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Your name"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-sm text-accent">{error}</p>}
          <Button type="submit" variant="accent" size="lg" className="mt-2">
            Create Account
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-sumi">
          Already training?{" "}
          <Link href="/login" className="font-medium text-accent hover:underline">
            Log in
          </Link>
        </p>
        <p className="mt-2 text-center text-xs text-sumi/70">
          This is a Phase 1 preview — your account is stored on this device only.
        </p>
      </div>
    </div>
  );
}
