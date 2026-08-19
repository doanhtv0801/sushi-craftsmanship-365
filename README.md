# Sushi Craftsmanship 365

**365 Days. 365 Missions. One Craft.**
**Learn Sushi. Understand Japan. Master the Craft.**

A web app that trains people to become Japanese-style sushi craftsmen through 365
missions — not "how to name sushi rolls," but fish knowledge, knife skills, shari,
Edomae technique, omakase, omotenashi, and the road to a professional sushi career.

This README covers the Phase 1 build: requirements analysis, architecture, folder
structure, database schema, and what's implemented today vs. planned for later phases.

---

## 1. Requirements analysis (summary)

The product brief asked for a Duolingo × MasterClass × professional-training platform
with a calm, premium, Japanese-minimal aesthetic (washi paper, hinoki wood, a single
vermillion accent — no anime styling, no saturated multi-color UI). Content must be
trilingual (Japanese / English / Vietnamese) with an architecture that can add more
locales later without a schema migration. The curriculum is 365 missions across 8
stages, gated behind a Duolingo-style linear progression with XP, levels, ranks,
streaks, and skill tracking.

Two things made this a two-track build:

1. **No real backend was available.** There were no Supabase credentials to connect
   to, so Phase 1 ships a **typed mock data/auth/progress layer** that mirrors the
   target Postgres schema field-for-field. Every repository function is `async`, so
   swapping the implementation for real Supabase queries later touches only
   `src/lib/repositories/*` and `src/lib/auth/*` — no UI component changes.
2. **The sandbox network blocks common CDNs** (Google Fonts, `ui.shadcn.com`), so the
   shadcn/ui components here are hand-authored (Radix primitives + `class-variance-
   authority` + `tailwind-merge`, the same pattern the shadcn CLI generates) and the
   type system uses system font stacks instead of `next/font/google`. Swap in
   self-hosted font files via `next/font/local` for production if a specific
   Japanese serif (e.g. Shippori Mincho) is wanted — the CSS variables are already
   wired for it in `globals.css`.

## 2. Architecture

- **Framework:** Next.js 16 (App Router, Turbopack), TypeScript, Tailwind CSS v4.
- **UI kit:** hand-authored shadcn/ui-style components in `src/components/ui`
  (Button, Card, Badge, Progress, Tabs, Input, Label, Avatar, Separator) built on
  Radix primitives — swap-compatible with the real shadcn CLI once its CDN is
  reachable from wherever this runs next.
- **Icons:** lucide-react.
- **State:**
  - `zustand` + `persist` (localStorage) for the mock **auth** session
    (`src/lib/auth/auth-store.ts`) and **progress** (`src/lib/progress/progress-
    store.ts`) — XP, level, streak, completed missions, quiz results, skill points.
  - Server Components render static content (mission text, vocabulary tables);
    Client Components handle anything interactive (quiz, completion, nav state).
- **Data layer:** `src/data/*` holds the mock content (stages, skills, the 10 fully
  authored missions, and 355 placeholder mission stubs generated from the brief's
  own curriculum outline — see §5). `src/lib/repositories/*` wraps this in `async`
  functions matching the shape a Supabase-backed implementation would have.
- **Multilingual content:** every content field is typed `LocalizedText = { en:
  string; ja?: string; vi?: string }` (`src/types/locale.ts`). Adding Chinese or any
  other locale later is a data change (`SUPPORTED_LOCALES`, new keys on content
  objects) — never a code or schema change.
- **Hydration safety:** components that read persisted (localStorage) state use
  `useHydrated()` (`src/lib/use-hydrated.ts`, built on `useSyncExternalStore`) to
  render a skeleton until the client has mounted, so server HTML always matches the
  client's first paint — no React hydration-mismatch warnings.

## 3. Folder structure

```
src/
  app/                        Next.js App Router routes
    page.tsx                  Landing page (marketing)
    (auth)/login, (auth)/signup   Mock auth pages
    dashboard/                 Dashboard (rank, progress, streak, skills, today's mission)
    missions/page.tsx          Mission Map (365-node roadmap grouped by stage)
    missions/[slug]/page.tsx   Mission detail (goal, content, vocab, quiz, completion)
    search/page.tsx            Cross-content search (missions + vocabulary)
    profile/page.tsx            Profile (rank, level, streak, skills)
  components/
    ui/                        Hand-authored shadcn/ui-style primitives
    layout/                    Header, mobile bottom nav, app chrome, footer
    landing/                   Landing page sections
    dashboard/                 Dashboard widgets
    missions/                  Mission map, mission node, quiz, vocabulary table
    search/, profile/, shared/ Search UI, profile UI, skill bars, skeletons
  data/
    stages.ts                  The 8 curriculum stages
    skills.ts                  The 5 tracked skills
    missions/
      builders.ts               Typed helpers for authoring a mission
      seed-missions.ts          Missions 001–010, fully authored (trilingual)
      mission-stubs.ts           Missions 011–365, placeholder nodes for the map
      index.ts                   Combined lookup helpers
  lib/
    auth/auth-store.ts          Mock auth (Supabase-Auth-shaped)
    progress/progress-store.ts  Mock mission_progress / user_skills / streak state
    repositories/                Async data-access layer (Supabase-swap point)
    gamification.ts              XP curve, levels, 9-rank ladder
    use-hydrated.ts               SSR/localStorage hydration-safety hook
    utils.ts                      `cn()` class helper
  types/
    database.ts                  Domain types mirroring supabase/schema.sql
    locale.ts                    Locale / LocalizedText architecture
supabase/
  schema.sql                    Full target Postgres schema (see §4)
```

## 4. Database schema

`supabase/schema.sql` is the target production schema for Supabase Postgres + Auth,
covering every table requested in the brief: `profiles` (extends `auth.users`),
`stages`, `missions`, `mission_vocabulary`, `quizzes` / `quiz_questions` /
`quiz_answers`, `user_quiz_results`, `mission_progress`, `user_streaks`, `skills` /
`user_skills`, `fish` / `fish_techniques` / `fish_missions`, `techniques` /
`technique_missions`, `vocabulary` / `user_learned_vocabulary`, `achievements` /
`user_achievements`, `favorites`, and `career_stages`. Multilingual fields are
`jsonb` keyed by locale (`{ "en": "...", "ja": "...", "vi": "..." }`) so new
languages never require a migration. RLS policies are sketched as comments, ready to
enable once real Supabase Auth is wired in.

The Phase 1 mock layer (`src/data`, `src/types/database.ts`) mirrors this schema
field-for-field, so migrating means implementing `src/lib/repositories/*` and
`src/lib/auth/*` against real Postgres/Supabase Auth calls — no schema redesign.

## 5. What's implemented in Phase 1

- Design system: washi/ink/accent/wood palette, system font stacks, calm Japanese-
  minimal aesthetic, fully responsive (mobile bottom nav: Home / Missions / Learn /
  Search / Profile, per the brief).
- Mock auth: sign up / log in / sign out, session persisted to the browser.
- Landing page: hero, "More Than Sushi" pillars, journey ladder, 365-mission stage
  overview.
- Dashboard: greeting, rank + level + XP progress, mission progress bar, streak,
  study time, today's mission, skill bars.
- Mission Map (`/missions`): all 365 missions grouped into the 8 stages, with
  completed / current / locked node states driven by real progress state.
- Mission detail (`/missions/[slug]`): missions **001–010 are fully authored** in
  Japanese/English/Vietnamese — goal, key concept, Japanese vocabulary table, chef
  knowledge, cultural insight, "remember this," and a 4-question quiz. Completing a
  mission awards XP, updates the streak, and unlocks the next one. Missions 011–365
  are placeholder nodes (titles generated from the brief's own curriculum outline)
  so the roadmap is fully browsable while content is written stage by stage.
- Gamification: XP curve → level → 9-rank ladder (Sushi Student → Chef / Restaurant
  Owner), streaks, and 5 tracked skills (Fish Knowledge, Knife Skills, Shari,
  Edomae, Omakase).
- Search (`/search`) and Profile (`/profile`): lightweight versions built ahead of
  their Phase 2/4 schedule since the mobile bottom nav needs all 5 tabs functional.
- SEO: dynamic per-mission `<title>`/description metadata (e.g. *"Mission 003 — What
  is Edomae Sushi? | Sushi Craftsmanship 365"*).

**Not yet built** (planned for later phases, architecture already supports them):
Fish Encyclopedia, Technique Library, dedicated Vocabulary browser (Phase 2); full
achievement badges, richer skill-progression rules (Phase 3); Career Roadmap page,
full Profile (saved vocabulary, favorites), admin CRUD (Phase 4). The database
schema and mock data types for all of these already exist in
`supabase/schema.sql` / `src/types/database.ts`.

## 6. Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

No environment variables are required for Phase 1 — everything runs against the
in-memory/localStorage mock layer described above.

### Connecting real Supabase later

1. Run `supabase/schema.sql` against a Supabase project.
2. Add `@supabase/supabase-js` and the project's URL/anon key.
3. Reimplement `src/lib/repositories/mission-repository.ts` and
   `src/lib/auth/auth-store.ts` against real Supabase queries/Auth — keep the same
   function signatures so no page or component needs to change.
