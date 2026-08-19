-- ============================================================================
-- Sushi Craftsmanship 365 — Database Schema (PostgreSQL / Supabase)
-- ============================================================================
-- This schema is the target production schema for Supabase Postgres + Auth.
-- Phase 1 of the app runs against a mock, in-memory/localStorage data layer
-- (see src/lib/repositories) that mirrors these tables 1:1 in TypeScript
-- (see src/types/database.ts). When Supabase credentials are available, the
-- repository layer can be swapped to real Postgres queries without changing
-- any call sites in the UI.
--
-- Conventions:
--   * All primary keys are UUIDs (uuid_generate_v4() / gen_random_uuid()).
--   * `profiles` extends Supabase's built-in `auth.users` (1:1).
--   * Multi-language content (Japanese / English / Vietnamese, extensible to
--     more locales) is stored as JSONB keyed by ISO locale code, e.g.
--     { "ja": "...", "en": "...", "vi": "..." } so new languages (Chinese,
--     etc.) can be added without a migration.
--   * created_at / updated_at timestamps are on every table for auditing.
-- ============================================================================

create extension if not exists "pgcrypto";

-- ----------------------------------------------------------------------------
-- PROFILES (extends auth.users)
-- ----------------------------------------------------------------------------
create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text not null,
  email text not null,
  avatar_url text,
  preferred_locale text not null default 'en', -- ui/content locale: en | ja | vi | (future) zh
  current_rank text not null default 'sushi_student',
  level int not null default 1,
  total_xp int not null default 0,
  current_streak int not null default 0,
  longest_streak int not null default 0,
  last_active_date date,
  total_study_minutes int not null default 0,
  onboarded boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ----------------------------------------------------------------------------
-- STAGES (the 8 stages of the 365-mission curriculum)
-- ----------------------------------------------------------------------------
create table public.stages (
  id uuid primary key default gen_random_uuid(),
  stage_number int not null unique check (stage_number between 1 and 8),
  slug text not null unique,
  title jsonb not null,              -- { en, ja, vi }
  subtitle jsonb,
  description jsonb,
  mission_start int not null,
  mission_end int not null,
  icon text,                          -- lucide icon name
  color_token text,                   -- design-system accent token
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ----------------------------------------------------------------------------
-- SKILLS (tracked skill categories shown as progress bars on dashboard)
-- ----------------------------------------------------------------------------
create table public.skills (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,          -- fish_knowledge | knife_skills | shari | edomae | omakase ...
  name jsonb not null,                -- { en, ja, vi }
  icon text,
  sort_order int not null default 0
);

create table public.user_skills (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  skill_id uuid not null references public.skills (id) on delete cascade,
  points int not null default 0,
  level int not null default 0,
  updated_at timestamptz not null default now(),
  unique (user_id, skill_id)
);

-- ----------------------------------------------------------------------------
-- MISSIONS
-- ----------------------------------------------------------------------------
create table public.missions (
  id uuid primary key default gen_random_uuid(),
  mission_number int not null unique check (mission_number between 1 and 365),
  slug text not null unique,
  stage_id uuid not null references public.stages (id) on delete restrict,
  title jsonb not null,               -- { en, ja, vi }
  difficulty text not null default 'beginner' check (difficulty in ('beginner','intermediate','advanced')),
  description jsonb,                  -- short teaser / card description
  goal jsonb,                         -- "Mission Goal" section
  content jsonb,                      -- "Key Concept" rich content (per-locale markdown/rich text)
  cultural_insight jsonb,
  chef_tip jsonb,
  key_takeaway jsonb,                 -- "Remember This"
  primary_skill_id uuid references public.skills (id),
  xp int not null default 100,
  estimated_minutes int not null default 10,
  status text not null default 'published' check (status in ('draft','published','archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index idx_missions_stage on public.missions (stage_id);

-- Vocabulary rows attached to a specific mission (the "Japanese Vocabulary" table)
create table public.mission_vocabulary (
  id uuid primary key default gen_random_uuid(),
  mission_id uuid not null references public.missions (id) on delete cascade,
  vocabulary_id uuid references public.vocabulary (id) on delete set null,
  sort_order int not null default 0
);

-- ----------------------------------------------------------------------------
-- QUIZZES
-- ----------------------------------------------------------------------------
create table public.quizzes (
  id uuid primary key default gen_random_uuid(),
  mission_id uuid not null references public.missions (id) on delete cascade,
  title jsonb,
  passing_score int not null default 70
);

create table public.quiz_questions (
  id uuid primary key default gen_random_uuid(),
  quiz_id uuid not null references public.quizzes (id) on delete cascade,
  question jsonb not null,            -- { en, ja, vi }
  explanation jsonb,
  sort_order int not null default 0
);

create table public.quiz_answers (
  id uuid primary key default gen_random_uuid(),
  question_id uuid not null references public.quiz_questions (id) on delete cascade,
  label text not null,                 -- 'A' | 'B' | 'C' | 'D'
  answer jsonb not null,                -- { en, ja, vi }
  is_correct boolean not null default false,
  sort_order int not null default 0
);

create table public.user_quiz_results (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  quiz_id uuid not null references public.quizzes (id) on delete cascade,
  score int not null,
  is_perfect boolean not null default false,
  attempted_at timestamptz not null default now()
);

-- ----------------------------------------------------------------------------
-- MISSION PROGRESS (per-user, per-mission state)
-- ----------------------------------------------------------------------------
create table public.mission_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  mission_id uuid not null references public.missions (id) on delete cascade,
  status text not null default 'locked' check (status in ('locked','unlocked','current','completed')),
  started_at timestamptz,
  completed_at timestamptz,
  xp_earned int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, mission_id)
);
create index idx_mission_progress_user on public.mission_progress (user_id);

-- ----------------------------------------------------------------------------
-- USER STREAKS (daily activity log backing the streak calendar)
-- ----------------------------------------------------------------------------
create table public.user_streaks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  activity_date date not null,
  missions_completed int not null default 0,
  minutes_studied int not null default 0,
  unique (user_id, activity_date)
);

-- ----------------------------------------------------------------------------
-- FISH ENCYCLOPEDIA (Phase 2)
-- ----------------------------------------------------------------------------
create table public.fish (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name_japanese text not null,
  name_reading text not null,          -- furigana / romaji reading
  name jsonb not null,                 -- { en, vi } common name
  scientific_name text,
  season jsonb,                        -- e.g. { months: [...], text: {en,ja,vi} }
  origin jsonb,
  flavor_profile jsonb,
  texture jsonb,
  fat_level int not null default 3 check (fat_level between 1 and 5),
  difficulty int not null default 1 check (difficulty between 1 and 5),
  recommended_preparation jsonb,
  trivia jsonb,
  image_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.fish_techniques (
  fish_id uuid not null references public.fish (id) on delete cascade,
  technique_id uuid not null references public.techniques (id) on delete cascade,
  primary key (fish_id, technique_id)
);

create table public.fish_missions (
  fish_id uuid not null references public.fish (id) on delete cascade,
  mission_id uuid not null references public.missions (id) on delete cascade,
  primary key (fish_id, mission_id)
);

-- ----------------------------------------------------------------------------
-- TECHNIQUE LIBRARY (Phase 2)
-- ----------------------------------------------------------------------------
create table public.techniques (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  category text not null check (category in ('knife','fish_prep','shari','nigiri','edomae','washoku','omakase')),
  name_japanese text,
  name_reading text,
  name jsonb not null,                 -- { en, vi }
  difficulty text not null default 'beginner' check (difficulty in ('beginner','intermediate','advanced')),
  definition jsonb,
  purpose jsonb,
  procedure jsonb,                     -- ordered steps, locale-keyed
  common_mistakes jsonb,
  chef_tips jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.technique_missions (
  technique_id uuid not null references public.techniques (id) on delete cascade,
  mission_id uuid not null references public.missions (id) on delete cascade,
  primary key (technique_id, mission_id)
);

-- ----------------------------------------------------------------------------
-- VOCABULARY (Phase 2 dedicated /vocabulary page; also linked from missions)
-- ----------------------------------------------------------------------------
create table public.vocabulary (
  id uuid primary key default gen_random_uuid(),
  japanese text not null,
  reading text not null,
  english text not null,
  vietnamese text not null,
  category text not null check (category in ('fish','knife','kitchen','technique','service','omakase','business','general')),
  example jsonb,
  created_at timestamptz not null default now()
);

create table public.user_learned_vocabulary (
  user_id uuid not null references public.profiles (id) on delete cascade,
  vocabulary_id uuid not null references public.vocabulary (id) on delete cascade,
  learned_at timestamptz not null default now(),
  primary key (user_id, vocabulary_id)
);

-- ----------------------------------------------------------------------------
-- ACHIEVEMENTS (Phase 3)
-- ----------------------------------------------------------------------------
create table public.achievements (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name jsonb not null,
  description jsonb not null,
  icon text,
  criteria jsonb not null              -- machine-readable unlock rule, e.g. { type: 'missions_completed', value: 100 }
);

create table public.user_achievements (
  user_id uuid not null references public.profiles (id) on delete cascade,
  achievement_id uuid not null references public.achievements (id) on delete cascade,
  unlocked_at timestamptz not null default now(),
  primary key (user_id, achievement_id)
);

-- ----------------------------------------------------------------------------
-- FAVORITES (generic favoriting across entity types)
-- ----------------------------------------------------------------------------
create table public.favorites (
  user_id uuid not null references public.profiles (id) on delete cascade,
  entity_type text not null check (entity_type in ('fish','technique','mission','vocabulary')),
  entity_id uuid not null,
  created_at timestamptz not null default now(),
  primary key (user_id, entity_type, entity_id)
);

-- ----------------------------------------------------------------------------
-- CAREER ROADMAP (static reference content for /career, Phase 4)
-- ----------------------------------------------------------------------------
create table public.career_stages (
  id uuid primary key default gen_random_uuid(),
  sort_order int not null unique,
  slug text not null unique,
  title jsonb not null,
  skills_needed jsonb,
  estimated_experience jsonb,
  responsibilities jsonb,
  recommended_mission_range int4range
);

-- ----------------------------------------------------------------------------
-- Row Level Security (illustrative — enable once real Supabase auth is wired)
-- ----------------------------------------------------------------------------
-- alter table public.profiles enable row level security;
-- create policy "Users can view/update own profile" on public.profiles
--   for all using (auth.uid() = id);
-- (similar owner-scoped policies apply to mission_progress, user_skills,
--  user_streaks, user_quiz_results, user_achievements, favorites,
--  user_learned_vocabulary. Content tables — stages, missions, fish,
--  techniques, vocabulary, achievements, career_stages — are public read.)
