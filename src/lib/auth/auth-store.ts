"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * Mock authentication store (Phase 1).
 *
 * Simulates Supabase Auth's session shape (`user.id`, `email`,
 * `user_metadata.display_name`) closely enough that swapping to real
 * `@supabase/supabase-js` auth later only touches this file — every
 * component consumes `useAuthStore` / `useAuth`, never a raw session object.
 */

export interface MockUser {
  id: string;
  email: string;
  displayName: string;
  preferredLocale: "ja" | "en" | "vi";
  createdAt: string;
}

interface AuthState {
  user: MockUser | null;
  signUp: (input: { email: string; displayName: string; password: string }) => void;
  signIn: (input: { email: string; password: string }) => { ok: boolean; error?: string };
  signOut: () => void;
  updateProfile: (patch: Partial<Pick<MockUser, "displayName" | "preferredLocale">>) => void;
}

// Phase 1 has no server, so "password" isn't actually verified — this store
// only simulates the auth *shape* so the UI, routing, and future Supabase
// swap are already correct. A real backend must never work this way.
export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,

      signUp: ({ email, displayName }) => {
        set({
          user: {
            id: `user-${Date.now()}`,
            email,
            displayName: displayName || email.split("@")[0],
            preferredLocale: "en",
            createdAt: new Date().toISOString(),
          },
        });
      },

      signIn: ({ email }) => {
        const existing = get().user;
        if (existing && existing.email === email) return { ok: true };
        set({
          user: {
            id: `user-${Date.now()}`,
            email,
            displayName: email.split("@")[0],
            preferredLocale: "en",
            createdAt: new Date().toISOString(),
          },
        });
        return { ok: true };
      },

      signOut: () => set({ user: null }),

      updateProfile: (patch) =>
        set((state) => (state.user ? { user: { ...state.user, ...patch } } : {})),
    }),
    { name: "sushi365-auth" }
  )
);
