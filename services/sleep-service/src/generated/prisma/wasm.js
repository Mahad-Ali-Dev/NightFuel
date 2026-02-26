
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.SleepSessionScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  startTime: 'startTime',
  endTime: 'endTime',
  durationMins: 'durationMins',
  quality: 'quality',
  disturbances: 'disturbances',
  source: 'source',
  circadianAlignmentScore: 'circadianAlignmentScore',
  notes: 'notes',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SleepPreferenceScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  targetDuration: 'targetDuration',
  windDownDuration: 'windDownDuration',
  temperatureTarget: 'temperatureTarget',
  updatedAt: 'updatedAt'
};

exports.Prisma.Body_metricsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  weight_kg: 'weight_kg',
  height_cm: 'height_cm',
  body_fat_pct: 'body_fat_pct',
  muscle_mass_kg: 'muscle_mass_kg',
  bmi: 'bmi',
  recorded_at: 'recorded_at',
  created_at: 'created_at'
};

exports.Prisma.Coach_client_relationsScalarFieldEnum = {
  id: 'id',
  coach_user_id: 'coach_user_id',
  client_user_id: 'client_user_id',
  status: 'status',
  started_at: 'started_at',
  ended_at: 'ended_at',
  created_at: 'created_at'
};

exports.Prisma.Coach_profilesScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  specializations: 'specializations',
  bio: 'bio',
  certifications: 'certifications',
  is_available: 'is_available',
  monthly_rate_usd: 'monthly_rate_usd',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Daily_progressScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  date: 'date',
  calories_target: 'calories_target',
  calories_actual: 'calories_actual',
  protein_target: 'protein_target',
  protein_actual: 'protein_actual',
  carbs_target: 'carbs_target',
  carbs_actual: 'carbs_actual',
  fat_target: 'fat_target',
  fat_actual: 'fat_actual',
  meals_logged: 'meals_logged',
  is_adherent: 'is_adherent',
  fatigue_score: 'fatigue_score',
  hydration_actual: 'hydration_actual',
  step_count: 'step_count',
  source: 'source',
  supplements_logged: 'supplements_logged',
  light_exposure_completed: 'light_exposure_completed',
  plan_id: 'plan_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Day_plansScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  plan_date: 'plan_date',
  shift_id: 'shift_id',
  circadian_profile_id: 'circadian_profile_id',
  protocol_id: 'protocol_id',
  plan_version: 'plan_version',
  plan: 'plan',
  generation_model: 'generation_model',
  generation_latency_ms: 'generation_latency_ms',
  generation_tokens: 'generation_tokens',
  user_rating: 'user_rating',
  status: 'status',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.ExercisesScalarFieldEnum = {
  id: 'id',
  workout_id: 'workout_id',
  name: 'name',
  muscle_group: 'muscle_group',
  sets: 'sets',
  reps: 'reps',
  weight_kg: 'weight_kg',
  distance_km: 'distance_km',
  duration_secs: 'duration_secs',
  rest_secs: 'rest_secs',
  order: 'order'
};

exports.Prisma.Food_itemsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  calories: 'calories',
  protein: 'protein',
  carbs: 'carbs',
  fat: 'fat',
  serving_size: 'serving_size',
  glycemic_index: 'glycemic_index',
  is_vegan: 'is_vegan',
  is_gluten_free: 'is_gluten_free',
  is_halal: 'is_halal',
  region: 'region',
  cuisine_tags: 'cuisine_tags',
  created_at: 'created_at'
};

exports.Prisma.Library_exercisesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  muscle_group: 'muscle_group',
  equipment: 'equipment',
  instructions: 'instructions',
  created_at: 'created_at'
};

exports.Prisma.Meal_logsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  logged_at: 'logged_at',
  meal_type: 'meal_type',
  food_items: 'food_items',
  total_calories: 'total_calories',
  total_protein: 'total_protein',
  total_carbs: 'total_carbs',
  total_fat: 'total_fat',
  is_adherent: 'is_adherent',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Notification_preferencesScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  meal_reminder_enabled: 'meal_reminder_enabled',
  workout_reminder_enabled: 'workout_reminder_enabled',
  sleep_reminder_enabled: 'sleep_reminder_enabled',
  shift_alert_enabled: 'shift_alert_enabled',
  plan_ready_enabled: 'plan_ready_enabled',
  adherence_alert_enabled: 'adherence_alert_enabled',
  streak_update_enabled: 'streak_update_enabled',
  weekly_report_enabled: 'weekly_report_enabled',
  coach_message_enabled: 'coach_message_enabled',
  quiet_hours_start: 'quiet_hours_start',
  quiet_hours_end: 'quiet_hours_end',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.NotificationsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  type: 'type',
  title: 'title',
  body: 'body',
  data: 'data',
  is_read: 'is_read',
  created_at: 'created_at'
};

exports.Prisma.Protocol_templatesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  creator_id: 'creator_id',
  parameters: 'parameters',
  is_public: 'is_public',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Refresh_tokensScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  token_hash: 'token_hash',
  device_id: 'device_id',
  expires_at: 'expires_at',
  created_at: 'created_at'
};

exports.Prisma.Rotation_patternsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  pattern_name: 'pattern_name',
  cycle_days: 'cycle_days',
  pattern: 'pattern',
  is_active: 'is_active',
  created_at: 'created_at'
};

exports.Prisma.ShiftsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  shift_date: 'shift_date',
  start_time: 'start_time',
  end_time: 'end_time',
  shift_type: 'shift_type',
  sleep_window_start: 'sleep_window_start',
  sleep_window_end: 'sleep_window_end',
  work_intensity: 'work_intensity',
  commute_minutes: 'commute_minutes',
  is_day_off: 'is_day_off',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.StreaksScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  current_streak: 'current_streak',
  longest_streak: 'longest_streak',
  last_adherent_date: 'last_adherent_date',
  updated_at: 'updated_at'
};

exports.Prisma.Subscription_eventsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  event_type: 'event_type',
  from_tier: 'from_tier',
  to_tier: 'to_tier',
  metadata: 'metadata',
  created_at: 'created_at'
};

exports.Prisma.SubscriptionsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  tier: 'tier',
  status: 'status',
  current_period_start: 'current_period_start',
  current_period_end: 'current_period_end',
  cancel_at_period_end: 'cancel_at_period_end',
  stripe_customer_id: 'stripe_customer_id',
  stripe_sub_id: 'stripe_sub_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.User_preferencesScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  primary_goal: 'primary_goal',
  dietary_preference: 'dietary_preference',
  target_calories: 'target_calories',
  target_protein_g: 'target_protein_g',
  target_carbs_g: 'target_carbs_g',
  target_fat_g: 'target_fat_g',
  activity_level: 'activity_level',
  experience_level: 'experience_level',
  lifestyle_type: 'lifestyle_type',
  sleep_window_start: 'sleep_window_start',
  sleep_window_end: 'sleep_window_end',
  allergies: 'allergies',
  health_conditions: 'health_conditions',
  diet_mode: 'diet_mode',
  workout_environment: 'workout_environment',
  available_equipment: 'available_equipment',
  is_bodybuilder_mode: 'is_bodybuilder_mode',
  is_injury_safe_mode: 'is_injury_safe_mode',
  workout_duration_preference: 'workout_duration_preference',
  split_preference: 'split_preference',
  active_protocol_id: 'active_protocol_id',
  updated_at: 'updated_at'
};

exports.Prisma.User_profilesScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  display_name: 'display_name',
  avatar_url: 'avatar_url',
  date_of_birth: 'date_of_birth',
  height_cm: 'height_cm',
  weight_kg: 'weight_kg',
  biological_sex: 'biological_sex',
  timezone: 'timezone',
  region: 'region',
  onboarding_completed: 'onboarding_completed',
  onboarding_step: 'onboarding_step',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.User_statusesScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  fatigue_score: 'fatigue_score',
  circadian_peak_time: 'circadian_peak_time',
  circadian_low_time: 'circadian_low_time',
  adherence_rate: 'adherence_rate',
  current_streak: 'current_streak',
  current_tdee: 'current_tdee',
  weight_trend: 'weight_trend',
  last_updated_by: 'last_updated_by',
  updated_at: 'updated_at'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password_hash: 'password_hash',
  display_name: 'display_name',
  avatar_url: 'avatar_url',
  timezone: 'timezone',
  locale: 'locale',
  region: 'region',
  role: 'role',
  onboarding_completed: 'onboarding_completed',
  email_verified: 'email_verified',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.WorkoutsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  type: 'type',
  title: 'title',
  duration: 'duration',
  intensity: 'intensity',
  split_type: 'split_type',
  muscle_groups: 'muscle_groups',
  calories_burned: 'calories_burned',
  notes: 'notes',
  scheduled_at: 'scheduled_at',
  completed_at: 'completed_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.PlanStatus = exports.$Enums.PlanStatus = {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  ACTIVE: 'ACTIVE',
  ADJUSTED: 'ADJUSTED',
  SUPERSEDED: 'SUPERSEDED',
  INVALIDATED: 'INVALIDATED',
  EXPIRED: 'EXPIRED',
  DELETED: 'DELETED'
};

exports.MealType = exports.$Enums.MealType = {
  BREAKFAST: 'BREAKFAST',
  LUNCH: 'LUNCH',
  DINNER: 'DINNER',
  SNACK: 'SNACK'
};

exports.NotificationType = exports.$Enums.NotificationType = {
  MEAL_REMINDER: 'MEAL_REMINDER',
  WORKOUT_REMINDER: 'WORKOUT_REMINDER',
  SLEEP_REMINDER: 'SLEEP_REMINDER',
  SHIFT_ALERT: 'SHIFT_ALERT',
  PLAN_READY: 'PLAN_READY',
  ADHERENCE_ALERT: 'ADHERENCE_ALERT',
  STREAK_UPDATE: 'STREAK_UPDATE',
  WEEKLY_REPORT: 'WEEKLY_REPORT',
  COACH_MESSAGE: 'COACH_MESSAGE',
  GOAL_ACHIEVED: 'GOAL_ACHIEVED',
  SYSTEM: 'SYSTEM'
};

exports.ShiftType = exports.$Enums.ShiftType = {
  FIXED_NIGHT: 'FIXED_NIGHT',
  ROTATING: 'ROTATING',
  SPLIT: 'SPLIT',
  IRREGULAR: 'IRREGULAR',
  TWELVE_HOUR: 'TWELVE_HOUR'
};

exports.Intensity = exports.$Enums.Intensity = {
  SEDENTARY: 'SEDENTARY',
  MODERATE: 'MODERATE',
  DEMANDING: 'DEMANDING'
};

exports.SubscriptionTier = exports.$Enums.SubscriptionTier = {
  FREE: 'FREE',
  PRO: 'PRO',
  PREMIUM: 'PREMIUM',
  ENTERPRISE: 'ENTERPRISE'
};

exports.SubStatus = exports.$Enums.SubStatus = {
  ACTIVE: 'ACTIVE',
  CANCELLED: 'CANCELLED',
  PAST_DUE: 'PAST_DUE',
  TRIALING: 'TRIALING'
};

exports.Role = exports.$Enums.Role = {
  USER: 'USER',
  COACH: 'COACH',
  TRAINER: 'TRAINER',
  NUTRITIONIST: 'NUTRITIONIST',
  DIETITIAN: 'DIETITIAN',
  ADMIN: 'ADMIN',
  SUPERADMIN: 'SUPERADMIN'
};

exports.Prisma.ModelName = {
  SleepSession: 'SleepSession',
  SleepPreference: 'SleepPreference',
  body_metrics: 'body_metrics',
  coach_client_relations: 'coach_client_relations',
  coach_profiles: 'coach_profiles',
  daily_progress: 'daily_progress',
  day_plans: 'day_plans',
  exercises: 'exercises',
  food_items: 'food_items',
  library_exercises: 'library_exercises',
  meal_logs: 'meal_logs',
  notification_preferences: 'notification_preferences',
  notifications: 'notifications',
  protocol_templates: 'protocol_templates',
  refresh_tokens: 'refresh_tokens',
  rotation_patterns: 'rotation_patterns',
  shifts: 'shifts',
  streaks: 'streaks',
  subscription_events: 'subscription_events',
  subscriptions: 'subscriptions',
  user_preferences: 'user_preferences',
  user_profiles: 'user_profiles',
  user_statuses: 'user_statuses',
  users: 'users',
  workouts: 'workouts'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
