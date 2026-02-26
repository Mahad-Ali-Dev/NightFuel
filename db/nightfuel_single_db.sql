-- ╔═══════════════════════════════════════════════════════════════════════════╗
-- ║       NightFuel — SINGLE DATABASE SCHEMA (All Services, One DB)         ║
-- ║       Version: 2.1  |  Date: 2026-02-26                                 ║
-- ╠═══════════════════════════════════════════════════════════════════════════╣
-- ║  Designed to run in a SINGLE PostgreSQL database (Supabase, pgAdmin,    ║
-- ║  or any SQL query block). No \connect or CREATE DATABASE needed.         ║
-- ║                                                                         ║
-- ║  Conflict fix vs multi-db version:                                      ║
-- ║    • coach_profiles (chat) → renamed to coach_directory                 ║
-- ║    • All duplicate extension/function/enum guards applied               ║
-- ║                                                                         ║
-- ║  Tables: 51 | Enums: 18 | Indexes: 65+ | Triggers: 22                  ║
-- ╚═══════════════════════════════════════════════════════════════════════════╝

-- ─── Extensions (once) ────────────────────────────────────────────────────────
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ─── Shared trigger function (once) ──────────────────────────────────────────
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;


-- ═══════════════════════════════════════════════════════════════════════════════
--  §1  AUTH SERVICE
--      users, refresh_tokens
-- ═══════════════════════════════════════════════════════════════════════════════

DO $$ BEGIN
  CREATE TYPE "Role" AS ENUM (
    'USER', 'COACH', 'TRAINER', 'NUTRITIONIST', 'DIETITIAN', 'ADMIN', 'SUPERADMIN'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS users (
  id                   UUID         PRIMARY KEY DEFAULT uuid_generate_v4(),
  email                VARCHAR(255) NOT NULL UNIQUE,
  password_hash        TEXT         NOT NULL,
  display_name         VARCHAR(255) NOT NULL,
  avatar_url           TEXT,
  timezone             VARCHAR(50)  NOT NULL DEFAULT 'UTC',
  locale               VARCHAR(10)  NOT NULL DEFAULT 'en-US',
  region               VARCHAR(10)  NOT NULL DEFAULT 'us',
  role                 "Role"       NOT NULL DEFAULT 'USER',
  onboarding_completed BOOLEAN      NOT NULL DEFAULT FALSE,
  email_verified       BOOLEAN      NOT NULL DEFAULT FALSE,
  created_at           TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  updated_at           TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS refresh_tokens (
  id          UUID         PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id     UUID         NOT NULL,
  token_hash  TEXT         NOT NULL UNIQUE,
  device_id   VARCHAR(255) NOT NULL,
  expires_at  TIMESTAMPTZ  NOT NULL,
  created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW(),

  CONSTRAINT fk_refresh_tokens_user
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_auth_users_email          ON users(email);
CREATE INDEX IF NOT EXISTS idx_auth_users_role           ON users(role);
CREATE INDEX IF NOT EXISTS idx_refresh_tokens_user_id    ON refresh_tokens(user_id);
CREATE INDEX IF NOT EXISTS idx_refresh_tokens_expires_at ON refresh_tokens(expires_at);

CREATE OR REPLACE TRIGGER trg_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


-- ═══════════════════════════════════════════════════════════════════════════════
--  §2  USER SERVICE
--      user_profiles, user_preferences, coach_profiles, coach_client_relations,
--      user_statuses
-- ═══════════════════════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS user_profiles (
  id                   UUID             PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id              UUID             NOT NULL UNIQUE,
  display_name         VARCHAR(255)     NOT NULL,
  avatar_url           TEXT,
  date_of_birth        DATE,
  height_cm            DOUBLE PRECISION,
  weight_kg            DOUBLE PRECISION,
  biological_sex       VARCHAR(20),
  timezone             VARCHAR(50)      NOT NULL DEFAULT 'UTC',
  region               VARCHAR(10)      NOT NULL DEFAULT 'us',
  onboarding_completed BOOLEAN          NOT NULL DEFAULT FALSE,
  onboarding_step      INTEGER          NOT NULL DEFAULT 0,
  created_at           TIMESTAMPTZ      NOT NULL DEFAULT NOW(),
  updated_at           TIMESTAMPTZ      NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS user_preferences (
  id                          UUID             PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id                     UUID             NOT NULL UNIQUE,
  primary_goal                VARCHAR(50)      NOT NULL DEFAULT 'GENERAL_HEALTH',
  dietary_preference          VARCHAR(50)      NOT NULL DEFAULT 'NONE',
  target_calories             DOUBLE PRECISION,
  target_protein_g            DOUBLE PRECISION,
  target_carbs_g              DOUBLE PRECISION,
  target_fat_g                DOUBLE PRECISION,
  activity_level              VARCHAR(30)      NOT NULL DEFAULT 'MODERATELY_ACTIVE',
  experience_level            VARCHAR(20)      NOT NULL DEFAULT 'BEGINNER',
  lifestyle_type              VARCHAR(30)      NOT NULL DEFAULT 'OFFICE_WORKER',
  sleep_window_start          VARCHAR(5),
  sleep_window_end            VARCHAR(5),
  allergies                   TEXT[]           DEFAULT '{}',
  health_conditions           TEXT[]           DEFAULT '{}',
  diet_mode                   VARCHAR(20)      NOT NULL DEFAULT 'BALANCED',
  workout_environment         VARCHAR(20)      DEFAULT 'GYM',
  available_equipment         TEXT[]           DEFAULT '{}',
  is_bodybuilder_mode         BOOLEAN          NOT NULL DEFAULT FALSE,
  is_injury_safe_mode         BOOLEAN          NOT NULL DEFAULT FALSE,
  workout_duration_preference INTEGER          NOT NULL DEFAULT 60,
  split_preference            VARCHAR(30)      NOT NULL DEFAULT 'FULL_BODY',
  active_protocol_id          UUID,
  updated_at                  TIMESTAMPTZ      NOT NULL DEFAULT NOW(),

  CONSTRAINT fk_user_preferences_profile
    FOREIGN KEY (user_id) REFERENCES user_profiles(user_id) ON DELETE CASCADE
);

-- Coach/specialist management profile (linked to user_profiles)
CREATE TABLE IF NOT EXISTS coach_profiles (
  id               UUID             PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id          UUID             NOT NULL UNIQUE,
  specializations  TEXT[]           DEFAULT '{}',
  bio              TEXT,
  certifications   TEXT[]           DEFAULT '{}',
  is_available     BOOLEAN          NOT NULL DEFAULT FALSE,
  monthly_rate_usd DOUBLE PRECISION,
  created_at       TIMESTAMPTZ      NOT NULL DEFAULT NOW(),
  updated_at       TIMESTAMPTZ      NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS coach_client_relations (
  id             UUID        PRIMARY KEY DEFAULT uuid_generate_v4(),
  coach_user_id  UUID        NOT NULL,
  client_user_id UUID        NOT NULL,
  status         VARCHAR(20) NOT NULL DEFAULT 'PENDING',
  started_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  ended_at       TIMESTAMPTZ,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  CONSTRAINT fk_ccr_coach
    FOREIGN KEY (coach_user_id) REFERENCES coach_profiles(user_id) ON DELETE CASCADE,
  CONSTRAINT uq_coach_client UNIQUE (coach_user_id, client_user_id)
);

CREATE TABLE IF NOT EXISTS user_statuses (
  id                  UUID             PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id             UUID             NOT NULL UNIQUE,
  fatigue_score       DOUBLE PRECISION NOT NULL DEFAULT 0,
  circadian_peak_time VARCHAR(5),
  circadian_low_time  VARCHAR(5),
  adherence_rate      DOUBLE PRECISION NOT NULL DEFAULT 0,
  current_streak      INTEGER          NOT NULL DEFAULT 0,
  current_tdee        DOUBLE PRECISION,
  weight_trend        VARCHAR(10),
  last_updated_by     VARCHAR(50),
  updated_at          TIMESTAMPTZ      NOT NULL DEFAULT NOW(),

  CONSTRAINT fk_user_statuses_profile
    FOREIGN KEY (user_id) REFERENCES user_profiles(user_id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_user_profiles_user_id    ON user_profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_user_prefs_user_id       ON user_preferences(user_id);
CREATE INDEX IF NOT EXISTS idx_coach_profiles_available ON coach_profiles(is_available) WHERE is_available = TRUE;
CREATE INDEX IF NOT EXISTS idx_ccr_client               ON coach_client_relations(client_user_id);
CREATE INDEX IF NOT EXISTS idx_ccr_status               ON coach_client_relations(status);

CREATE OR REPLACE TRIGGER trg_user_profiles_updated_at
  BEFORE UPDATE ON user_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE OR REPLACE TRIGGER trg_user_preferences_updated_at
  BEFORE UPDATE ON user_preferences
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE OR REPLACE TRIGGER trg_coach_profiles_updated_at
  BEFORE UPDATE ON coach_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE OR REPLACE TRIGGER trg_user_statuses_updated_at
  BEFORE UPDATE ON user_statuses
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


-- ═══════════════════════════════════════════════════════════════════════════════
--  §3  SHIFT SERVICE
--      shifts, rotation_patterns
-- ═══════════════════════════════════════════════════════════════════════════════

DO $$ BEGIN
  CREATE TYPE "ShiftType" AS ENUM (
    'FIXED_NIGHT', 'ROTATING', 'SPLIT', 'IRREGULAR', 'TWELVE_HOUR'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE "Intensity" AS ENUM ('SEDENTARY', 'MODERATE', 'DEMANDING');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS shifts (
  id                 UUID        PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id            UUID        NOT NULL,
  shift_date         DATE        NOT NULL,
  start_time         TIMESTAMPTZ NOT NULL,
  end_time           TIMESTAMPTZ NOT NULL,
  shift_type         "ShiftType" NOT NULL,
  sleep_window_start TIMESTAMPTZ,
  sleep_window_end   TIMESTAMPTZ,
  work_intensity     "Intensity" NOT NULL DEFAULT 'MODERATE',
  commute_minutes    INTEGER     NOT NULL DEFAULT 0,
  is_day_off         BOOLEAN     NOT NULL DEFAULT FALSE,
  notes              TEXT,
  created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  CONSTRAINT uq_shifts_user_date   UNIQUE (user_id, shift_date),
  CONSTRAINT chk_shifts_time_order CHECK (end_time > start_time),
  CONSTRAINT chk_shifts_commute    CHECK (commute_minutes >= 0)
);

CREATE TABLE IF NOT EXISTS rotation_patterns (
  id           UUID         PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id      UUID         NOT NULL,
  pattern_name VARCHAR(100) NOT NULL DEFAULT 'Default',
  cycle_days   INTEGER      NOT NULL,
  pattern      JSONB        NOT NULL,
  is_active    BOOLEAN      NOT NULL DEFAULT TRUE,
  created_at   TIMESTAMPTZ  NOT NULL DEFAULT NOW(),

  CONSTRAINT chk_rotation_cycle_days CHECK (cycle_days > 0)
);

CREATE INDEX IF NOT EXISTS idx_shifts_user_date         ON shifts(user_id, shift_date DESC);
CREATE INDEX IF NOT EXISTS idx_shifts_type              ON shifts(shift_type);
CREATE INDEX IF NOT EXISTS idx_shifts_is_day_off        ON shifts(user_id, is_day_off);
CREATE INDEX IF NOT EXISTS idx_rotation_patterns_user   ON rotation_patterns(user_id);
CREATE INDEX IF NOT EXISTS idx_rotation_patterns_active ON rotation_patterns(user_id, is_active) WHERE is_active = TRUE;

CREATE OR REPLACE TRIGGER trg_shifts_updated_at
  BEFORE UPDATE ON shifts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


-- ═══════════════════════════════════════════════════════════════════════════════
--  §4  PLAN SERVICE
--      protocol_templates, day_plans
-- ═══════════════════════════════════════════════════════════════════════════════

DO $$ BEGIN
  CREATE TYPE "PlanStatus" AS ENUM (
    'DRAFT', 'PUBLISHED', 'ACTIVE', 'ADJUSTED', 'SUPERSEDED',
    'INVALIDATED', 'EXPIRED', 'DELETED'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS protocol_templates (
  id          UUID         PRIMARY KEY DEFAULT uuid_generate_v4(),
  name        VARCHAR(255) NOT NULL,
  description TEXT,
  creator_id  UUID         NOT NULL,
  parameters  JSONB        NOT NULL,
  is_public   BOOLEAN      NOT NULL DEFAULT FALSE,
  created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS day_plans (
  id                    UUID         PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id               UUID         NOT NULL,
  plan_date             DATE         NOT NULL,
  shift_id              UUID,
  circadian_profile_id  UUID,
  protocol_id           UUID,
  plan_version          INTEGER      NOT NULL DEFAULT 1,
  plan                  JSONB        NOT NULL,
  generation_model      VARCHAR(100) NOT NULL,
  generation_latency_ms INTEGER,
  generation_tokens     INTEGER,
  user_rating           INTEGER      CHECK (user_rating BETWEEN 1 AND 5),
  status                "PlanStatus" NOT NULL DEFAULT 'ACTIVE',
  created_at            TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  updated_at            TIMESTAMPTZ  NOT NULL DEFAULT NOW(),

  CONSTRAINT fk_day_plans_protocol
    FOREIGN KEY (protocol_id) REFERENCES protocol_templates(id) ON DELETE SET NULL,
  CONSTRAINT uq_day_plans_user_date_version UNIQUE (user_id, plan_date, plan_version)
);

CREATE INDEX IF NOT EXISTS idx_day_plans_user_date        ON day_plans(user_id, plan_date DESC);
CREATE INDEX IF NOT EXISTS idx_day_plans_status           ON day_plans(status);
CREATE INDEX IF NOT EXISTS idx_day_plans_user_status      ON day_plans(user_id, status);
CREATE INDEX IF NOT EXISTS idx_protocol_templates_creator ON protocol_templates(creator_id);
CREATE INDEX IF NOT EXISTS idx_protocol_templates_public  ON protocol_templates(is_public) WHERE is_public = TRUE;

CREATE OR REPLACE TRIGGER trg_day_plans_updated_at
  BEFORE UPDATE ON day_plans
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE OR REPLACE TRIGGER trg_protocol_templates_updated_at
  BEFORE UPDATE ON protocol_templates
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


-- ═══════════════════════════════════════════════════════════════════════════════
--  §5  MEAL SERVICE
--      food_items, meal_logs, meal_plans, recipes, grocery_lists, fasting_logs
-- ═══════════════════════════════════════════════════════════════════════════════

DO $$ BEGIN
  CREATE TYPE "MealType" AS ENUM (
    'BREAKFAST', 'LUNCH', 'DINNER', 'SNACK', 'PRE_WORKOUT', 'POST_WORKOUT'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE "FastingStatus" AS ENUM ('ACTIVE', 'COMPLETED', 'BROKEN', 'SKIPPED');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS food_items (
  id             UUID             PRIMARY KEY DEFAULT uuid_generate_v4(),
  name           VARCHAR(255)     NOT NULL,
  barcode        VARCHAR(100)     UNIQUE,
  calories       DOUBLE PRECISION NOT NULL,
  protein        DOUBLE PRECISION NOT NULL,
  carbs          DOUBLE PRECISION NOT NULL,
  fat            DOUBLE PRECISION NOT NULL,
  fiber          DOUBLE PRECISION NOT NULL DEFAULT 0,
  sugar          DOUBLE PRECISION NOT NULL DEFAULT 0,
  sodium_mg      DOUBLE PRECISION NOT NULL DEFAULT 0,
  serving_size   VARCHAR(100)     NOT NULL DEFAULT '100g',
  glycemic_index INTEGER,
  is_vegan       BOOLEAN          NOT NULL DEFAULT FALSE,
  is_gluten_free BOOLEAN          NOT NULL DEFAULT FALSE,
  is_halal       BOOLEAN          NOT NULL DEFAULT FALSE,
  is_kosher      BOOLEAN          NOT NULL DEFAULT FALSE,
  region         VARCHAR(10),
  cuisine_tags   TEXT[]           DEFAULT '{}',
  source         VARCHAR(20)      NOT NULL DEFAULT 'OPENFOODFACTS',
  created_at     TIMESTAMPTZ      NOT NULL DEFAULT NOW(),
  updated_at     TIMESTAMPTZ      NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS meal_logs (
  id             UUID             PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id        UUID             NOT NULL,
  logged_at      TIMESTAMPTZ      NOT NULL DEFAULT NOW(),
  meal_type      "MealType"       NOT NULL,
  food_items     JSONB            NOT NULL,
  total_calories DOUBLE PRECISION NOT NULL DEFAULT 0,
  total_protein  DOUBLE PRECISION NOT NULL DEFAULT 0,
  total_carbs    DOUBLE PRECISION NOT NULL DEFAULT 0,
  total_fat      DOUBLE PRECISION NOT NULL DEFAULT 0,
  is_adherent    BOOLEAN          NOT NULL DEFAULT FALSE,
  shift_id       UUID,
  notes          TEXT,
  created_at     TIMESTAMPTZ      NOT NULL DEFAULT NOW(),
  updated_at     TIMESTAMPTZ      NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS meal_plans (
  id         UUID        PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id    UUID        NOT NULL,
  week_start DATE        NOT NULL,
  plan_data  JSONB       NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  CONSTRAINT uq_meal_plans_user_week UNIQUE (user_id, week_start)
);

CREATE TABLE IF NOT EXISTS recipes (
  id             UUID             PRIMARY KEY DEFAULT uuid_generate_v4(),
  title          VARCHAR(255)     NOT NULL,
  description    TEXT,
  prep_time_mins INTEGER          NOT NULL DEFAULT 0,
  cook_time_mins INTEGER          NOT NULL DEFAULT 0,
  servings       INTEGER          NOT NULL DEFAULT 1,
  calories       DOUBLE PRECISION NOT NULL DEFAULT 0,
  protein        DOUBLE PRECISION NOT NULL DEFAULT 0,
  carbs          DOUBLE PRECISION NOT NULL DEFAULT 0,
  fat            DOUBLE PRECISION NOT NULL DEFAULT 0,
  ingredients    JSONB            NOT NULL DEFAULT '[]',
  instructions   JSONB            NOT NULL DEFAULT '[]',
  tags           TEXT[]           DEFAULT '{}',
  cuisine_tag    VARCHAR(50),
  is_public      BOOLEAN          NOT NULL DEFAULT TRUE,
  image_url      TEXT,
  created_at     TIMESTAMPTZ      NOT NULL DEFAULT NOW(),
  updated_at     TIMESTAMPTZ      NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS grocery_lists (
  id         UUID        PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id    UUID        NOT NULL,
  plan_id    UUID,
  week_start DATE        NOT NULL,
  items      JSONB       NOT NULL DEFAULT '[]',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS fasting_logs (
  id           UUID            PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id      UUID            NOT NULL,
  start_time   TIMESTAMPTZ     NOT NULL,
  end_time     TIMESTAMPTZ,
  target_hours INTEGER         NOT NULL DEFAULT 16,
  actual_hours DOUBLE PRECISION,
  status       "FastingStatus" NOT NULL DEFAULT 'ACTIVE',
  protocol_id  VARCHAR(20),
  notes        TEXT,
  created_at   TIMESTAMPTZ     NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_meal_logs_user_logged   ON meal_logs(user_id, logged_at DESC);
CREATE INDEX IF NOT EXISTS idx_meal_logs_user_type     ON meal_logs(user_id, meal_type);
CREATE INDEX IF NOT EXISTS idx_food_items_name         ON food_items(name);
CREATE INDEX IF NOT EXISTS idx_food_items_barcode      ON food_items(barcode) WHERE barcode IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_food_items_region       ON food_items(region);
CREATE INDEX IF NOT EXISTS idx_recipes_tags            ON recipes USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_grocery_lists_user      ON grocery_lists(user_id, week_start DESC);
CREATE INDEX IF NOT EXISTS idx_fasting_logs_user_start ON fasting_logs(user_id, start_time DESC);
CREATE INDEX IF NOT EXISTS idx_fasting_logs_status     ON fasting_logs(user_id, status);

CREATE OR REPLACE TRIGGER trg_meal_logs_updated_at
  BEFORE UPDATE ON meal_logs
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE OR REPLACE TRIGGER trg_meal_plans_updated_at
  BEFORE UPDATE ON meal_plans
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE OR REPLACE TRIGGER trg_recipes_updated_at
  BEFORE UPDATE ON recipes
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE OR REPLACE TRIGGER trg_grocery_lists_updated_at
  BEFORE UPDATE ON grocery_lists
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE OR REPLACE TRIGGER trg_food_items_updated_at
  BEFORE UPDATE ON food_items
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


-- ═══════════════════════════════════════════════════════════════════════════════
--  §6  EXERCISE SERVICE
--      library_exercises, workouts, workout_sets, workout_routines, one_rm_logs
-- ═══════════════════════════════════════════════════════════════════════════════

DO $$ BEGIN
  CREATE TYPE "MuscleGroup" AS ENUM (
    'CHEST', 'BACK', 'SHOULDERS', 'BICEPS', 'TRICEPS', 'FOREARMS',
    'ABS', 'QUADS', 'HAMSTRINGS', 'GLUTES', 'CALVES', 'FULL_BODY', 'CARDIO'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE "SplitType" AS ENUM (
    'FULL_BODY', 'UPPER_LOWER', 'PPL', 'BRO_SPLIT', 'ARNOLD_SPLIT', 'CUSTOM'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE "WorkoutIntensity" AS ENUM ('LIGHT', 'MODERATE', 'INTENSE', 'MAXIMAL');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS library_exercises (
  id               UUID          PRIMARY KEY DEFAULT uuid_generate_v4(),
  external_id      VARCHAR(50)   UNIQUE,
  name             VARCHAR(255)  NOT NULL UNIQUE,
  muscle_group     "MuscleGroup" NOT NULL,
  secondary_muscles TEXT[]       DEFAULT '{}',
  equipment        VARCHAR(100),
  instructions     TEXT,
  gif_url          TEXT,
  is_compound      BOOLEAN       NOT NULL DEFAULT FALSE,
  created_at       TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS workouts (
  id              UUID               PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id         UUID               NOT NULL,
  title           VARCHAR(255)       NOT NULL,
  workout_type    VARCHAR(50)        NOT NULL DEFAULT 'STRENGTH',
  split_type      "SplitType",
  muscle_groups   TEXT[]             DEFAULT '{}',
  intensity       "WorkoutIntensity" NOT NULL DEFAULT 'MODERATE',
  duration_mins   INTEGER            NOT NULL,
  calories_burned INTEGER,
  notes           TEXT,
  scheduled_at    TIMESTAMPTZ,
  completed_at    TIMESTAMPTZ        NOT NULL DEFAULT NOW(),
  created_at      TIMESTAMPTZ        NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ        NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS workout_sets (
  id            UUID             PRIMARY KEY DEFAULT uuid_generate_v4(),
  workout_id    UUID             NOT NULL,
  exercise_name VARCHAR(255)     NOT NULL,
  library_ex_id UUID,
  set_number    INTEGER          NOT NULL,
  reps          INTEGER,
  weight_kg     DOUBLE PRECISION,
  duration_secs INTEGER,
  distance_km   DOUBLE PRECISION,
  rest_secs     INTEGER          NOT NULL DEFAULT 60,
  rpe           INTEGER          CHECK (rpe BETWEEN 1 AND 10),
  created_at    TIMESTAMPTZ      NOT NULL DEFAULT NOW(),

  CONSTRAINT fk_workout_sets_workout
    FOREIGN KEY (workout_id) REFERENCES workouts(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS workout_routines (
  id            UUID         PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id       UUID,
  title         VARCHAR(255) NOT NULL,
  description   TEXT,
  split_type    "SplitType",
  difficulty    VARCHAR(20)  NOT NULL DEFAULT 'INTERMEDIATE',
  days_per_week INTEGER      NOT NULL DEFAULT 3,
  exercises     JSONB        NOT NULL DEFAULT '[]',
  is_public     BOOLEAN      NOT NULL DEFAULT FALSE,
  created_at    TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS one_rm_logs (
  id               UUID             PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id          UUID             NOT NULL,
  exercise_name    VARCHAR(255)     NOT NULL,
  weight_kg        DOUBLE PRECISION NOT NULL,
  estimated_1rm_kg DOUBLE PRECISION NOT NULL,
  method           VARCHAR(20)      NOT NULL DEFAULT 'EPLEY',
  date             DATE             NOT NULL,
  created_at       TIMESTAMPTZ      NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_workouts_user_id        ON workouts(user_id);
CREATE INDEX IF NOT EXISTS idx_workouts_user_completed ON workouts(user_id, completed_at DESC);
CREATE INDEX IF NOT EXISTS idx_workout_sets_workout    ON workout_sets(workout_id);
CREATE INDEX IF NOT EXISTS idx_workout_routines_user   ON workout_routines(user_id);
CREATE INDEX IF NOT EXISTS idx_workout_routines_public ON workout_routines(is_public) WHERE is_public = TRUE;
CREATE INDEX IF NOT EXISTS idx_one_rm_user_exercise    ON one_rm_logs(user_id, exercise_name, date DESC);
CREATE INDEX IF NOT EXISTS idx_library_exercises_group ON library_exercises(muscle_group);

CREATE OR REPLACE TRIGGER trg_workouts_updated_at
  BEFORE UPDATE ON workouts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE OR REPLACE TRIGGER trg_workout_routines_updated_at
  BEFORE UPDATE ON workout_routines
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


-- ═══════════════════════════════════════════════════════════════════════════════
--  §7  SLEEP SERVICE
--      sleep_sessions, sleep_preferences, wearable_connections
-- ═══════════════════════════════════════════════════════════════════════════════

DO $$ BEGIN
  CREATE TYPE "SleepSource" AS ENUM (
    'MANUAL', 'APPLE_WATCH', 'OURA', 'FITBIT', 'GARMIN', 'WHOOP', 'SAMSUNG'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS sleep_sessions (
  id                        UUID          PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id                   UUID          NOT NULL,
  start_time                TIMESTAMPTZ   NOT NULL,
  end_time                  TIMESTAMPTZ,
  duration_mins             INTEGER,
  quality                   INTEGER       CHECK (quality BETWEEN 1 AND 10),
  deep_sleep_mins           INTEGER,
  rem_sleep_mins            INTEGER,
  light_sleep_mins          INTEGER,
  awake_mins                INTEGER,
  disturbances              INTEGER       NOT NULL DEFAULT 0,
  heart_rate_avg            INTEGER,
  hrv_ms                    DOUBLE PRECISION,
  source                    "SleepSource" NOT NULL DEFAULT 'MANUAL',
  circadian_alignment_score INTEGER       CHECK (circadian_alignment_score BETWEEN 0 AND 100),
  notes                     TEXT,
  created_at                TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
  updated_at                TIMESTAMPTZ   NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS sleep_preferences (
  id                 UUID             PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id            UUID             NOT NULL UNIQUE,
  target_duration    INTEGER          NOT NULL DEFAULT 480,
  wind_down_duration INTEGER          NOT NULL DEFAULT 30,
  wake_time_target   VARCHAR(5),
  sleep_time_target  VARCHAR(5),
  temperature_target DOUBLE PRECISION,
  noise_preference   VARCHAR(20)      DEFAULT 'SILENT',
  updated_at         TIMESTAMPTZ      NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS wearable_connections (
  id            UUID          PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id       UUID          NOT NULL,
  source        "SleepSource" NOT NULL,
  access_token  TEXT,
  refresh_token TEXT,
  expires_at    TIMESTAMPTZ,
  last_synced   TIMESTAMPTZ,
  is_active     BOOLEAN       NOT NULL DEFAULT TRUE,
  created_at    TIMESTAMPTZ   NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ   NOT NULL DEFAULT NOW(),

  CONSTRAINT uq_wearable_user_source UNIQUE (user_id, source)
);

CREATE INDEX IF NOT EXISTS idx_sleep_sessions_user_start  ON sleep_sessions(user_id, start_time DESC);
CREATE INDEX IF NOT EXISTS idx_sleep_sessions_source      ON sleep_sessions(source);
CREATE INDEX IF NOT EXISTS idx_wearable_connections_user  ON wearable_connections(user_id);
CREATE INDEX IF NOT EXISTS idx_wearable_connections_active ON wearable_connections(user_id, is_active) WHERE is_active = TRUE;

CREATE OR REPLACE TRIGGER trg_sleep_sessions_updated_at
  BEFORE UPDATE ON sleep_sessions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE OR REPLACE TRIGGER trg_sleep_preferences_updated_at
  BEFORE UPDATE ON sleep_preferences
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE OR REPLACE TRIGGER trg_wearable_connections_updated_at
  BEFORE UPDATE ON wearable_connections
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


-- ═══════════════════════════════════════════════════════════════════════════════
--  §8  PROGRESS SERVICE
--      daily_progress, streaks, body_metrics, progress_photos,
--      performance_reports, ai_usage_logs
-- ═══════════════════════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS daily_progress (
  id                       UUID             PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id                  UUID             NOT NULL,
  date                     DATE             NOT NULL,
  calories_target          DOUBLE PRECISION,
  calories_actual          DOUBLE PRECISION NOT NULL DEFAULT 0,
  protein_target           DOUBLE PRECISION,
  protein_actual           DOUBLE PRECISION NOT NULL DEFAULT 0,
  carbs_target             DOUBLE PRECISION,
  carbs_actual             DOUBLE PRECISION NOT NULL DEFAULT 0,
  fat_target               DOUBLE PRECISION,
  fat_actual               DOUBLE PRECISION NOT NULL DEFAULT 0,
  meals_logged             INTEGER          NOT NULL DEFAULT 0,
  is_adherent              BOOLEAN          NOT NULL DEFAULT FALSE,
  fatigue_score            INTEGER          NOT NULL DEFAULT 0,
  hydration_ml             DOUBLE PRECISION NOT NULL DEFAULT 0,
  hydration_goal_ml        DOUBLE PRECISION NOT NULL DEFAULT 3000,
  step_count               INTEGER          NOT NULL DEFAULT 0,
  active_minutes           INTEGER          NOT NULL DEFAULT 0,
  source                   VARCHAR(20)      NOT NULL DEFAULT 'MANUAL',
  supplements_logged       JSONB,
  light_exposure_completed BOOLEAN          NOT NULL DEFAULT FALSE,
  plan_id                  UUID,
  created_at               TIMESTAMPTZ      NOT NULL DEFAULT NOW(),
  updated_at               TIMESTAMPTZ      NOT NULL DEFAULT NOW(),

  CONSTRAINT uq_daily_progress_user_date UNIQUE (user_id, date)
);

CREATE TABLE IF NOT EXISTS streaks (
  id                 UUID        PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id            UUID        NOT NULL UNIQUE,
  current_streak     INTEGER     NOT NULL DEFAULT 0,
  longest_streak     INTEGER     NOT NULL DEFAULT 0,
  last_adherent_date DATE,
  updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS body_metrics (
  id             UUID             PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id        UUID             NOT NULL,
  weight_kg      DOUBLE PRECISION,
  height_cm      DOUBLE PRECISION,
  body_fat_pct   DOUBLE PRECISION,
  muscle_mass_kg DOUBLE PRECISION,
  waist_cm       DOUBLE PRECISION,
  chest_cm       DOUBLE PRECISION,
  hips_cm        DOUBLE PRECISION,
  bmi            DOUBLE PRECISION,
  source         VARCHAR(20)      NOT NULL DEFAULT 'MANUAL',
  notes          TEXT,
  recorded_at    TIMESTAMPTZ      NOT NULL DEFAULT NOW(),
  created_at     TIMESTAMPTZ      NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS progress_photos (
  id            UUID        PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id       UUID        NOT NULL,
  storage_url   TEXT        NOT NULL,
  thumbnail_url TEXT,
  body_part     VARCHAR(30) NOT NULL DEFAULT 'FULL_BODY',
  notes         TEXT,
  taken_at      DATE        NOT NULL DEFAULT NOW(),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS performance_reports (
  id           UUID         PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id      UUID         NOT NULL,
  week_start   DATE         NOT NULL,
  week_end     DATE         NOT NULL,
  score        INTEGER      NOT NULL,
  summary      TEXT         NOT NULL,
  highlights   JSONB        NOT NULL DEFAULT '[]',
  improvements JSONB        NOT NULL DEFAULT '[]',
  focus_area   VARCHAR(100) NOT NULL,
  ai_model     VARCHAR(50),
  created_at   TIMESTAMPTZ  NOT NULL DEFAULT NOW(),

  CONSTRAINT uq_perf_reports_user_week UNIQUE (user_id, week_start)
);

CREATE TABLE IF NOT EXISTS ai_usage_logs (
  id                UUID         PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id           UUID         NOT NULL,
  action            VARCHAR(100) NOT NULL,
  provider          VARCHAR(50)  NOT NULL DEFAULT 'anthropic',
  model             VARCHAR(100),
  prompt_tokens     INTEGER      NOT NULL DEFAULT 0,
  completion_tokens INTEGER      NOT NULL DEFAULT 0,
  total_tokens      INTEGER      NOT NULL DEFAULT 0,
  cost_usd          DOUBLE PRECISION,
  created_at        TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_daily_progress_user_date   ON daily_progress(user_id, date DESC);
CREATE INDEX IF NOT EXISTS idx_body_metrics_user_recorded ON body_metrics(user_id, recorded_at DESC);
CREATE INDEX IF NOT EXISTS idx_progress_photos_user_date  ON progress_photos(user_id, taken_at DESC);
CREATE INDEX IF NOT EXISTS idx_performance_reports_user   ON performance_reports(user_id, week_start DESC);
CREATE INDEX IF NOT EXISTS idx_ai_usage_logs_user_created ON ai_usage_logs(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_ai_usage_logs_provider     ON ai_usage_logs(provider, created_at DESC);

CREATE OR REPLACE TRIGGER trg_daily_progress_updated_at
  BEFORE UPDATE ON daily_progress
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE OR REPLACE TRIGGER trg_streaks_updated_at
  BEFORE UPDATE ON streaks
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


-- ═══════════════════════════════════════════════════════════════════════════════
--  §9  NOTIFICATION SERVICE
--      notification_preferences, notifications, push_subscriptions
-- ═══════════════════════════════════════════════════════════════════════════════

DO $$ BEGIN
  CREATE TYPE "NotificationType" AS ENUM (
    'MEAL_REMINDER', 'WORKOUT_REMINDER', 'SLEEP_REMINDER',
    'SHIFT_ALERT', 'PLAN_READY', 'ADHERENCE_ALERT',
    'STREAK_UPDATE', 'WEEKLY_REPORT', 'COACH_MESSAGE',
    'GOAL_ACHIEVED', 'BROADCAST', 'SYSTEM'
  );
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE "PushPlatform" AS ENUM ('WEB', 'EXPO');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS notification_preferences (
  id                       UUID        PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id                  UUID        NOT NULL UNIQUE,
  meal_reminder_enabled    BOOLEAN     NOT NULL DEFAULT TRUE,
  workout_reminder_enabled BOOLEAN     NOT NULL DEFAULT TRUE,
  sleep_reminder_enabled   BOOLEAN     NOT NULL DEFAULT TRUE,
  shift_alert_enabled      BOOLEAN     NOT NULL DEFAULT TRUE,
  plan_ready_enabled       BOOLEAN     NOT NULL DEFAULT TRUE,
  adherence_alert_enabled  BOOLEAN     NOT NULL DEFAULT TRUE,
  streak_update_enabled    BOOLEAN     NOT NULL DEFAULT TRUE,
  weekly_report_enabled    BOOLEAN     NOT NULL DEFAULT TRUE,
  coach_message_enabled    BOOLEAN     NOT NULL DEFAULT TRUE,
  quiet_hours_start        VARCHAR(5)  NOT NULL DEFAULT '22:00',
  quiet_hours_end          VARCHAR(5)  NOT NULL DEFAULT '07:00',
  created_at               TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at               TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS notifications (
  id         UUID               PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id    UUID               NOT NULL,
  type       "NotificationType" NOT NULL,
  title      VARCHAR(255)       NOT NULL,
  body       TEXT               NOT NULL,
  data       JSONB,
  action_url TEXT,
  is_read    BOOLEAN            NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ        NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS push_subscriptions (
  id         UUID           PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id    UUID           NOT NULL,
  endpoint   TEXT           NOT NULL UNIQUE,
  p256dh     TEXT,
  auth       TEXT,
  platform   "PushPlatform" NOT NULL DEFAULT 'WEB',
  user_agent TEXT,
  created_at TIMESTAMPTZ    NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ    NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_notifications_user_created ON notifications(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_notifications_unread       ON notifications(user_id, is_read) WHERE is_read = FALSE;
CREATE INDEX IF NOT EXISTS idx_notifications_type         ON notifications(type);
CREATE INDEX IF NOT EXISTS idx_push_subs_user             ON push_subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_push_subs_platform         ON push_subscriptions(user_id, platform);

CREATE OR REPLACE TRIGGER trg_notification_preferences_updated_at
  BEFORE UPDATE ON notification_preferences
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE OR REPLACE TRIGGER trg_push_subscriptions_updated_at
  BEFORE UPDATE ON push_subscriptions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


-- ═══════════════════════════════════════════════════════════════════════════════
--  §10 SUBSCRIPTION SERVICE
--      subscriptions, subscription_events
-- ═══════════════════════════════════════════════════════════════════════════════

DO $$ BEGIN
  CREATE TYPE "SubscriptionTier" AS ENUM ('FREE', 'PRO', 'PREMIUM', 'ENTERPRISE');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE "SubStatus" AS ENUM ('ACTIVE', 'CANCELLED', 'PAST_DUE', 'TRIALING', 'PAUSED');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS subscriptions (
  id                   UUID               PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id              UUID               NOT NULL UNIQUE,
  tier                 "SubscriptionTier" NOT NULL DEFAULT 'FREE',
  status               "SubStatus"        NOT NULL DEFAULT 'ACTIVE',
  current_period_start TIMESTAMPTZ        NOT NULL DEFAULT NOW(),
  current_period_end   TIMESTAMPTZ,
  trial_ends_at        TIMESTAMPTZ,
  cancel_at_period_end BOOLEAN            NOT NULL DEFAULT FALSE,
  stripe_customer_id   VARCHAR(255),
  stripe_sub_id        VARCHAR(255),
  created_at           TIMESTAMPTZ        NOT NULL DEFAULT NOW(),
  updated_at           TIMESTAMPTZ        NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS subscription_events (
  id         UUID        PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id    UUID        NOT NULL,
  event_type VARCHAR(50) NOT NULL,
  from_tier  VARCHAR(20),
  to_tier    VARCHAR(20),
  metadata   JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_subscriptions_status     ON subscriptions(status);
CREATE INDEX IF NOT EXISTS idx_subscriptions_tier       ON subscriptions(tier);
CREATE INDEX IF NOT EXISTS idx_subscriptions_stripe_cid ON subscriptions(stripe_customer_id) WHERE stripe_customer_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_subscriptions_stripe_sub ON subscriptions(stripe_sub_id) WHERE stripe_sub_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_sub_events_user_created  ON subscription_events(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_sub_events_type          ON subscription_events(event_type);

CREATE OR REPLACE TRIGGER trg_subscriptions_updated_at
  BEFORE UPDATE ON subscriptions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


-- ═══════════════════════════════════════════════════════════════════════════════
--  §11 STATE SERVICE
--      user_states, feature_flags
-- ═══════════════════════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS user_states (
  id                       UUID             PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id                  UUID             NOT NULL UNIQUE,
  last_7_days_adherence    DOUBLE PRECISION NOT NULL DEFAULT 1.0,
  avg_sleep_quality        DOUBLE PRECISION NOT NULL DEFAULT 7.0,
  fatigue_level            DOUBLE PRECISION NOT NULL DEFAULT 3.0,
  current_weight_kg        DOUBLE PRECISION,
  target_weight_kg         DOUBLE PRECISION,
  current_calorie_target   DOUBLE PRECISION,
  current_protein_target_g DOUBLE PRECISION,
  training_phase           VARCHAR(30)      NOT NULL DEFAULT 'HYPERTROPHY',
  cycle_week               INTEGER          NOT NULL DEFAULT 1,
  last_event_id            UUID,
  last_processed_at        TIMESTAMPTZ      NOT NULL DEFAULT NOW(),
  updated_at               TIMESTAMPTZ      NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS feature_flags (
  id         UUID         PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id    UUID         NOT NULL,
  flag_name  VARCHAR(100) NOT NULL,
  is_enabled BOOLEAN      NOT NULL DEFAULT FALSE,
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ  NOT NULL DEFAULT NOW(),

  CONSTRAINT uq_feature_flags_user_flag UNIQUE (user_id, flag_name)
);

CREATE INDEX IF NOT EXISTS idx_user_states_user_id        ON user_states(user_id);
CREATE INDEX IF NOT EXISTS idx_user_states_training_phase ON user_states(training_phase);
CREATE INDEX IF NOT EXISTS idx_feature_flags_user         ON feature_flags(user_id);

CREATE OR REPLACE TRIGGER trg_user_states_updated_at
  BEFORE UPDATE ON user_states
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


-- ═══════════════════════════════════════════════════════════════════════════════
--  §12 COMMUNITY SERVICE
--      posts, post_likes, comments, challenges, challenge_participants,
--      content_reports
-- ═══════════════════════════════════════════════════════════════════════════════

DO $$ BEGIN
  CREATE TYPE "PostStatus" AS ENUM ('ACTIVE', 'HIDDEN', 'REMOVED');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE "ReportStatus" AS ENUM ('PENDING', 'REVIEWED', 'ACTION_TAKEN', 'DISMISSED');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  CREATE TYPE "ReportTargetType" AS ENUM ('POST', 'COMMENT', 'USER', 'MESSAGE');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE TABLE IF NOT EXISTS posts (
  id          UUID         PRIMARY KEY DEFAULT uuid_generate_v4(),
  author_id   UUID         NOT NULL,
  content     TEXT         NOT NULL,
  image_url   TEXT,
  likes_count INTEGER      NOT NULL DEFAULT 0,
  status      "PostStatus" NOT NULL DEFAULT 'ACTIVE',
  created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS post_likes (
  id         UUID        PRIMARY KEY DEFAULT uuid_generate_v4(),
  post_id    UUID        NOT NULL,
  user_id    UUID        NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  CONSTRAINT fk_post_likes_post   FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
  CONSTRAINT uq_post_likes_unique UNIQUE (post_id, user_id)
);

CREATE TABLE IF NOT EXISTS comments (
  id         UUID         PRIMARY KEY DEFAULT uuid_generate_v4(),
  post_id    UUID         NOT NULL,
  author_id  UUID         NOT NULL,
  text       TEXT         NOT NULL,
  status     "PostStatus" NOT NULL DEFAULT 'ACTIVE',
  created_at TIMESTAMPTZ  NOT NULL DEFAULT NOW(),

  CONSTRAINT fk_comments_post FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS challenges (
  id          UUID         PRIMARY KEY DEFAULT uuid_generate_v4(),
  title       VARCHAR(255) NOT NULL,
  description TEXT         NOT NULL,
  start_date  DATE         NOT NULL,
  end_date    DATE         NOT NULL,
  xp_reward   INTEGER      NOT NULL DEFAULT 100,
  badge_url   TEXT,
  is_active   BOOLEAN      NOT NULL DEFAULT TRUE,
  created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW(),

  CONSTRAINT chk_challenge_dates CHECK (end_date >= start_date)
);

CREATE TABLE IF NOT EXISTS challenge_participants (
  id           UUID        PRIMARY KEY DEFAULT uuid_generate_v4(),
  challenge_id UUID        NOT NULL,
  user_id      UUID        NOT NULL,
  joined_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  xp_earned    INTEGER     NOT NULL DEFAULT 0,

  CONSTRAINT fk_cp_challenge FOREIGN KEY (challenge_id) REFERENCES challenges(id) ON DELETE CASCADE,
  CONSTRAINT uq_cp_unique    UNIQUE (challenge_id, user_id)
);

CREATE TABLE IF NOT EXISTS content_reports (
  id          UUID                PRIMARY KEY DEFAULT uuid_generate_v4(),
  reported_by UUID                NOT NULL,
  target_type "ReportTargetType"  NOT NULL,
  target_id   UUID                NOT NULL,
  reason      TEXT                NOT NULL,
  status      "ReportStatus"      NOT NULL DEFAULT 'PENDING',
  reviewed_by UUID,
  created_at  TIMESTAMPTZ         NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ         NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_posts_created_at            ON posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_posts_author                ON posts(author_id);
CREATE INDEX IF NOT EXISTS idx_posts_status                ON posts(status);
CREATE INDEX IF NOT EXISTS idx_comments_post_id            ON comments(post_id, created_at ASC);
CREATE INDEX IF NOT EXISTS idx_post_likes_post             ON post_likes(post_id);
CREATE INDEX IF NOT EXISTS idx_challenge_participants_user ON challenge_participants(user_id);
CREATE INDEX IF NOT EXISTS idx_content_reports_status      ON content_reports(status);
CREATE INDEX IF NOT EXISTS idx_content_reports_target      ON content_reports(target_type, target_id);

CREATE OR REPLACE TRIGGER trg_posts_updated_at
  BEFORE UPDATE ON posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE OR REPLACE TRIGGER trg_content_reports_updated_at
  BEFORE UPDATE ON content_reports
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


-- ═══════════════════════════════════════════════════════════════════════════════
--  §13 CHAT SERVICE
--      coach_directory, conversations, messages, ai_chat_threads,
--      ai_chat_messages
--
--  NOTE: Table renamed coach_profiles → coach_directory to avoid conflict
--        with the user-service coach_profiles table above.
-- ═══════════════════════════════════════════════════════════════════════════════

DO $$ BEGIN
  CREATE TYPE "MessageType" AS ENUM ('TEXT', 'IMAGE', 'FILE', 'PLAN_SHARE', 'SYSTEM');
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- Public coach marketplace listing (chat-service view of a coach)
-- Distinct from coach_profiles (user-service) which holds management/scheduling data
CREATE TABLE IF NOT EXISTS coach_directory (
  id           UUID             PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id      UUID             NOT NULL UNIQUE,
  specialty    VARCHAR(255)     NOT NULL,
  bio          TEXT             NOT NULL,
  hourly_rate  DOUBLE PRECISION NOT NULL DEFAULT 0,
  rating       DOUBLE PRECISION NOT NULL DEFAULT 5.0,
  review_count INTEGER          NOT NULL DEFAULT 0,
  is_active    BOOLEAN          NOT NULL DEFAULT TRUE,
  created_at   TIMESTAMPTZ      NOT NULL DEFAULT NOW(),
  updated_at   TIMESTAMPTZ      NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS conversations (
  id            UUID        PRIMARY KEY DEFAULT uuid_generate_v4(),
  participant_a UUID        NOT NULL,
  participant_b UUID        NOT NULL,
  last_message  TEXT,
  unread_a      INTEGER     NOT NULL DEFAULT 0,
  unread_b      INTEGER     NOT NULL DEFAULT 0,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  CONSTRAINT uq_conversation_pair       UNIQUE (participant_a, participant_b),
  CONSTRAINT chk_different_participants CHECK (participant_a <> participant_b)
);

CREATE TABLE IF NOT EXISTS messages (
  id              UUID          PRIMARY KEY DEFAULT uuid_generate_v4(),
  conversation_id UUID          NOT NULL,
  sender_id       UUID          NOT NULL,
  message_type    "MessageType" NOT NULL DEFAULT 'TEXT',
  text            TEXT,
  attachment_url  TEXT,
  metadata        JSONB,
  is_read         BOOLEAN       NOT NULL DEFAULT FALSE,
  created_at      TIMESTAMPTZ   NOT NULL DEFAULT NOW(),

  CONSTRAINT fk_messages_conversation
    FOREIGN KEY (conversation_id) REFERENCES conversations(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS ai_chat_threads (
  id         UUID        PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id    UUID        NOT NULL,
  title      VARCHAR(255),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS ai_chat_messages (
  id         UUID        PRIMARY KEY DEFAULT uuid_generate_v4(),
  thread_id  UUID        NOT NULL,
  role       VARCHAR(10) NOT NULL,
  content    TEXT        NOT NULL,
  tokens     INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),

  CONSTRAINT fk_ai_messages_thread
    FOREIGN KEY (thread_id) REFERENCES ai_chat_threads(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_messages_conv_created      ON messages(conversation_id, created_at ASC);
CREATE INDEX IF NOT EXISTS idx_messages_unread            ON messages(conversation_id, is_read) WHERE is_read = FALSE;
CREATE INDEX IF NOT EXISTS idx_conversations_participant_a ON conversations(participant_a);
CREATE INDEX IF NOT EXISTS idx_conversations_participant_b ON conversations(participant_b);
CREATE INDEX IF NOT EXISTS idx_coach_directory_active     ON coach_directory(is_active) WHERE is_active = TRUE;
CREATE INDEX IF NOT EXISTS idx_ai_chat_threads_user       ON ai_chat_threads(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_ai_chat_messages_thread    ON ai_chat_messages(thread_id, created_at ASC);

CREATE OR REPLACE TRIGGER trg_conversations_updated_at
  BEFORE UPDATE ON conversations
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE OR REPLACE TRIGGER trg_coach_directory_updated_at
  BEFORE UPDATE ON coach_directory
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE OR REPLACE TRIGGER trg_ai_chat_threads_updated_at
  BEFORE UPDATE ON ai_chat_threads
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();


-- ╔═══════════════════════════════════════════════════════════════════════════╗
-- ║                         SCHEMA COMPLETE                                 ║
-- ╠═══════════════════════════════════════════════════════════════════════════╣
-- ║  Tables  (51):                                                          ║
-- ║    §1  Auth:         users, refresh_tokens                              ║
-- ║    §2  Users:        user_profiles, user_preferences, coach_profiles,   ║
-- ║                      coach_client_relations, user_statuses              ║
-- ║    §3  Shifts:       shifts, rotation_patterns                          ║
-- ║    §4  Plans:        protocol_templates, day_plans                      ║
-- ║    §5  Meals:        food_items, meal_logs, meal_plans, recipes,        ║
-- ║                      grocery_lists, fasting_logs                        ║
-- ║    §6  Workouts:     library_exercises, workouts, workout_sets,         ║
-- ║                      workout_routines, one_rm_logs                      ║
-- ║    §7  Sleep:        sleep_sessions, sleep_preferences,                 ║
-- ║                      wearable_connections                               ║
-- ║    §8  Progress:     daily_progress, streaks, body_metrics,             ║
-- ║                      progress_photos, performance_reports,              ║
-- ║                      ai_usage_logs                                      ║
-- ║    §9  Notif:        notification_preferences, notifications,           ║
-- ║                      push_subscriptions                                 ║
-- ║    §10 Billing:      subscriptions, subscription_events                 ║
-- ║    §11 State:        user_states, feature_flags                         ║
-- ║    §12 Community:    posts, post_likes, comments, challenges,           ║
-- ║                      challenge_participants, content_reports            ║
-- ║    §13 Chat:         coach_directory, conversations, messages,          ║
-- ║                      ai_chat_threads, ai_chat_messages                  ║
-- ╠═══════════════════════════════════════════════════════════════════════════╣
-- ║  KEY CHANGE vs multi-db version:                                        ║
-- ║    coach_profiles (chat) → coach_directory                              ║
-- ║    Rename avoids table name collision in a single schema.               ║
-- ╚═══════════════════════════════════════════════════════════════════════════╝
