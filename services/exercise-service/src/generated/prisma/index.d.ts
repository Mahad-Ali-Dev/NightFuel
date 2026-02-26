
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Workout
 * 
 */
export type Workout = $Result.DefaultSelection<Prisma.$WorkoutPayload>
/**
 * Model Exercise
 * 
 */
export type Exercise = $Result.DefaultSelection<Prisma.$ExercisePayload>
/**
 * Model LibraryExercise
 * 
 */
export type LibraryExercise = $Result.DefaultSelection<Prisma.$LibraryExercisePayload>
/**
 * Model WorkoutRoutine
 * 
 */
export type WorkoutRoutine = $Result.DefaultSelection<Prisma.$WorkoutRoutinePayload>
/**
 * Model OneRepMaxLog
 * 
 */
export type OneRepMaxLog = $Result.DefaultSelection<Prisma.$OneRepMaxLogPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Workouts
 * const workouts = await prisma.workout.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Workouts
   * const workouts = await prisma.workout.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.workout`: Exposes CRUD operations for the **Workout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workouts
    * const workouts = await prisma.workout.findMany()
    * ```
    */
  get workout(): Prisma.WorkoutDelegate<ExtArgs>;

  /**
   * `prisma.exercise`: Exposes CRUD operations for the **Exercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exercises
    * const exercises = await prisma.exercise.findMany()
    * ```
    */
  get exercise(): Prisma.ExerciseDelegate<ExtArgs>;

  /**
   * `prisma.libraryExercise`: Exposes CRUD operations for the **LibraryExercise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LibraryExercises
    * const libraryExercises = await prisma.libraryExercise.findMany()
    * ```
    */
  get libraryExercise(): Prisma.LibraryExerciseDelegate<ExtArgs>;

  /**
   * `prisma.workoutRoutine`: Exposes CRUD operations for the **WorkoutRoutine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkoutRoutines
    * const workoutRoutines = await prisma.workoutRoutine.findMany()
    * ```
    */
  get workoutRoutine(): Prisma.WorkoutRoutineDelegate<ExtArgs>;

  /**
   * `prisma.oneRepMaxLog`: Exposes CRUD operations for the **OneRepMaxLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OneRepMaxLogs
    * const oneRepMaxLogs = await prisma.oneRepMaxLog.findMany()
    * ```
    */
  get oneRepMaxLog(): Prisma.OneRepMaxLogDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Workout: 'Workout',
    Exercise: 'Exercise',
    LibraryExercise: 'LibraryExercise',
    WorkoutRoutine: 'WorkoutRoutine',
    OneRepMaxLog: 'OneRepMaxLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "workout" | "exercise" | "libraryExercise" | "workoutRoutine" | "oneRepMaxLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Workout: {
        payload: Prisma.$WorkoutPayload<ExtArgs>
        fields: Prisma.WorkoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findFirst: {
            args: Prisma.WorkoutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          findMany: {
            args: Prisma.WorkoutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          create: {
            args: Prisma.WorkoutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          createMany: {
            args: Prisma.WorkoutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>[]
          }
          delete: {
            args: Prisma.WorkoutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          update: {
            args: Prisma.WorkoutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          deleteMany: {
            args: Prisma.WorkoutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkoutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutPayload>
          }
          aggregate: {
            args: Prisma.WorkoutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkout>
          }
          groupBy: {
            args: Prisma.WorkoutGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutCountAggregateOutputType> | number
          }
        }
      }
      Exercise: {
        payload: Prisma.$ExercisePayload<ExtArgs>
        fields: Prisma.ExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findFirst: {
            args: Prisma.ExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          findMany: {
            args: Prisma.ExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          create: {
            args: Prisma.ExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          createMany: {
            args: Prisma.ExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>[]
          }
          delete: {
            args: Prisma.ExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          update: {
            args: Prisma.ExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          deleteMany: {
            args: Prisma.ExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExercisePayload>
          }
          aggregate: {
            args: Prisma.ExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExercise>
          }
          groupBy: {
            args: Prisma.ExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<ExerciseCountAggregateOutputType> | number
          }
        }
      }
      LibraryExercise: {
        payload: Prisma.$LibraryExercisePayload<ExtArgs>
        fields: Prisma.LibraryExerciseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LibraryExerciseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryExercisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LibraryExerciseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryExercisePayload>
          }
          findFirst: {
            args: Prisma.LibraryExerciseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryExercisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LibraryExerciseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryExercisePayload>
          }
          findMany: {
            args: Prisma.LibraryExerciseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryExercisePayload>[]
          }
          create: {
            args: Prisma.LibraryExerciseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryExercisePayload>
          }
          createMany: {
            args: Prisma.LibraryExerciseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LibraryExerciseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryExercisePayload>[]
          }
          delete: {
            args: Prisma.LibraryExerciseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryExercisePayload>
          }
          update: {
            args: Prisma.LibraryExerciseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryExercisePayload>
          }
          deleteMany: {
            args: Prisma.LibraryExerciseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LibraryExerciseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LibraryExerciseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryExercisePayload>
          }
          aggregate: {
            args: Prisma.LibraryExerciseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLibraryExercise>
          }
          groupBy: {
            args: Prisma.LibraryExerciseGroupByArgs<ExtArgs>
            result: $Utils.Optional<LibraryExerciseGroupByOutputType>[]
          }
          count: {
            args: Prisma.LibraryExerciseCountArgs<ExtArgs>
            result: $Utils.Optional<LibraryExerciseCountAggregateOutputType> | number
          }
        }
      }
      WorkoutRoutine: {
        payload: Prisma.$WorkoutRoutinePayload<ExtArgs>
        fields: Prisma.WorkoutRoutineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkoutRoutineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRoutinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkoutRoutineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRoutinePayload>
          }
          findFirst: {
            args: Prisma.WorkoutRoutineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRoutinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkoutRoutineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRoutinePayload>
          }
          findMany: {
            args: Prisma.WorkoutRoutineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRoutinePayload>[]
          }
          create: {
            args: Prisma.WorkoutRoutineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRoutinePayload>
          }
          createMany: {
            args: Prisma.WorkoutRoutineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkoutRoutineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRoutinePayload>[]
          }
          delete: {
            args: Prisma.WorkoutRoutineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRoutinePayload>
          }
          update: {
            args: Prisma.WorkoutRoutineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRoutinePayload>
          }
          deleteMany: {
            args: Prisma.WorkoutRoutineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkoutRoutineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkoutRoutineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkoutRoutinePayload>
          }
          aggregate: {
            args: Prisma.WorkoutRoutineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkoutRoutine>
          }
          groupBy: {
            args: Prisma.WorkoutRoutineGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkoutRoutineGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkoutRoutineCountArgs<ExtArgs>
            result: $Utils.Optional<WorkoutRoutineCountAggregateOutputType> | number
          }
        }
      }
      OneRepMaxLog: {
        payload: Prisma.$OneRepMaxLogPayload<ExtArgs>
        fields: Prisma.OneRepMaxLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OneRepMaxLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OneRepMaxLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OneRepMaxLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OneRepMaxLogPayload>
          }
          findFirst: {
            args: Prisma.OneRepMaxLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OneRepMaxLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OneRepMaxLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OneRepMaxLogPayload>
          }
          findMany: {
            args: Prisma.OneRepMaxLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OneRepMaxLogPayload>[]
          }
          create: {
            args: Prisma.OneRepMaxLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OneRepMaxLogPayload>
          }
          createMany: {
            args: Prisma.OneRepMaxLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OneRepMaxLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OneRepMaxLogPayload>[]
          }
          delete: {
            args: Prisma.OneRepMaxLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OneRepMaxLogPayload>
          }
          update: {
            args: Prisma.OneRepMaxLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OneRepMaxLogPayload>
          }
          deleteMany: {
            args: Prisma.OneRepMaxLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OneRepMaxLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OneRepMaxLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OneRepMaxLogPayload>
          }
          aggregate: {
            args: Prisma.OneRepMaxLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOneRepMaxLog>
          }
          groupBy: {
            args: Prisma.OneRepMaxLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<OneRepMaxLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.OneRepMaxLogCountArgs<ExtArgs>
            result: $Utils.Optional<OneRepMaxLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type WorkoutCountOutputType
   */

  export type WorkoutCountOutputType = {
    exercises: number
  }

  export type WorkoutCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | WorkoutCountOutputTypeCountExercisesArgs
  }

  // Custom InputTypes
  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutCountOutputType
     */
    select?: WorkoutCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkoutCountOutputType without action
   */
  export type WorkoutCountOutputTypeCountExercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Workout
   */

  export type AggregateWorkout = {
    _count: WorkoutCountAggregateOutputType | null
    _avg: WorkoutAvgAggregateOutputType | null
    _sum: WorkoutSumAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  export type WorkoutAvgAggregateOutputType = {
    duration: number | null
    caloriesBurned: number | null
    totalVolume: number | null
  }

  export type WorkoutSumAggregateOutputType = {
    duration: number | null
    caloriesBurned: number | null
    totalVolume: number | null
  }

  export type WorkoutMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    title: string | null
    duration: number | null
    intensity: string | null
    splitType: string | null
    caloriesBurned: number | null
    totalVolume: number | null
    notes: string | null
    scheduledAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkoutMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    title: string | null
    duration: number | null
    intensity: string | null
    splitType: string | null
    caloriesBurned: number | null
    totalVolume: number | null
    notes: string | null
    scheduledAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkoutCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    title: number
    duration: number
    intensity: number
    splitType: number
    muscleGroups: number
    caloriesBurned: number
    totalVolume: number
    notes: number
    scheduledAt: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkoutAvgAggregateInputType = {
    duration?: true
    caloriesBurned?: true
    totalVolume?: true
  }

  export type WorkoutSumAggregateInputType = {
    duration?: true
    caloriesBurned?: true
    totalVolume?: true
  }

  export type WorkoutMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    duration?: true
    intensity?: true
    splitType?: true
    caloriesBurned?: true
    totalVolume?: true
    notes?: true
    scheduledAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkoutMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    duration?: true
    intensity?: true
    splitType?: true
    caloriesBurned?: true
    totalVolume?: true
    notes?: true
    scheduledAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkoutCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    duration?: true
    intensity?: true
    splitType?: true
    muscleGroups?: true
    caloriesBurned?: true
    totalVolume?: true
    notes?: true
    scheduledAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workout to aggregate.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workouts
    **/
    _count?: true | WorkoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkoutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkoutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutMaxAggregateInputType
  }

  export type GetWorkoutAggregateType<T extends WorkoutAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkout[P]>
      : GetScalarType<T[P], AggregateWorkout[P]>
  }




  export type WorkoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutWhereInput
    orderBy?: WorkoutOrderByWithAggregationInput | WorkoutOrderByWithAggregationInput[]
    by: WorkoutScalarFieldEnum[] | WorkoutScalarFieldEnum
    having?: WorkoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutCountAggregateInputType | true
    _avg?: WorkoutAvgAggregateInputType
    _sum?: WorkoutSumAggregateInputType
    _min?: WorkoutMinAggregateInputType
    _max?: WorkoutMaxAggregateInputType
  }

  export type WorkoutGroupByOutputType = {
    id: string
    userId: string
    type: string
    title: string
    duration: number
    intensity: string
    splitType: string | null
    muscleGroups: string[]
    caloriesBurned: number | null
    totalVolume: number | null
    notes: string | null
    scheduledAt: Date | null
    completedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: WorkoutCountAggregateOutputType | null
    _avg: WorkoutAvgAggregateOutputType | null
    _sum: WorkoutSumAggregateOutputType | null
    _min: WorkoutMinAggregateOutputType | null
    _max: WorkoutMaxAggregateOutputType | null
  }

  type GetWorkoutGroupByPayload<T extends WorkoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    duration?: boolean
    intensity?: boolean
    splitType?: boolean
    muscleGroups?: boolean
    caloriesBurned?: boolean
    totalVolume?: boolean
    notes?: boolean
    scheduledAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    exercises?: boolean | Workout$exercisesArgs<ExtArgs>
    _count?: boolean | WorkoutCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    duration?: boolean
    intensity?: boolean
    splitType?: boolean
    muscleGroups?: boolean
    caloriesBurned?: boolean
    totalVolume?: boolean
    notes?: boolean
    scheduledAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workout"]>

  export type WorkoutSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    duration?: boolean
    intensity?: boolean
    splitType?: boolean
    muscleGroups?: boolean
    caloriesBurned?: boolean
    totalVolume?: boolean
    notes?: boolean
    scheduledAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkoutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exercises?: boolean | Workout$exercisesArgs<ExtArgs>
    _count?: boolean | WorkoutCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkoutIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorkoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workout"
    objects: {
      exercises: Prisma.$ExercisePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      title: string
      duration: number
      intensity: string
      splitType: string | null
      muscleGroups: string[]
      caloriesBurned: number | null
      totalVolume: number | null
      notes: string | null
      scheduledAt: Date | null
      completedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workout"]>
    composites: {}
  }

  type WorkoutGetPayload<S extends boolean | null | undefined | WorkoutDefaultArgs> = $Result.GetResult<Prisma.$WorkoutPayload, S>

  type WorkoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorkoutFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkoutCountAggregateInputType | true
    }

  export interface WorkoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workout'], meta: { name: 'Workout' } }
    /**
     * Find zero or one Workout that matches the filter.
     * @param {WorkoutFindUniqueArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutFindUniqueArgs>(args: SelectSubset<T, WorkoutFindUniqueArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Workout that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WorkoutFindUniqueOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Workout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutFindFirstArgs>(args?: SelectSubset<T, WorkoutFindFirstArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Workout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindFirstOrThrowArgs} args - Arguments to find a Workout
     * @example
     * // Get one Workout
     * const workout = await prisma.workout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Workouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workouts
     * const workouts = await prisma.workout.findMany()
     * 
     * // Get first 10 Workouts
     * const workouts = await prisma.workout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutWithIdOnly = await prisma.workout.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutFindManyArgs>(args?: SelectSubset<T, WorkoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Workout.
     * @param {WorkoutCreateArgs} args - Arguments to create a Workout.
     * @example
     * // Create one Workout
     * const Workout = await prisma.workout.create({
     *   data: {
     *     // ... data to create a Workout
     *   }
     * })
     * 
     */
    create<T extends WorkoutCreateArgs>(args: SelectSubset<T, WorkoutCreateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Workouts.
     * @param {WorkoutCreateManyArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workout = await prisma.workout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutCreateManyArgs>(args?: SelectSubset<T, WorkoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workouts and returns the data saved in the database.
     * @param {WorkoutCreateManyAndReturnArgs} args - Arguments to create many Workouts.
     * @example
     * // Create many Workouts
     * const workout = await prisma.workout.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workouts and only return the `id`
     * const workoutWithIdOnly = await prisma.workout.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Workout.
     * @param {WorkoutDeleteArgs} args - Arguments to delete one Workout.
     * @example
     * // Delete one Workout
     * const Workout = await prisma.workout.delete({
     *   where: {
     *     // ... filter to delete one Workout
     *   }
     * })
     * 
     */
    delete<T extends WorkoutDeleteArgs>(args: SelectSubset<T, WorkoutDeleteArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Workout.
     * @param {WorkoutUpdateArgs} args - Arguments to update one Workout.
     * @example
     * // Update one Workout
     * const workout = await prisma.workout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutUpdateArgs>(args: SelectSubset<T, WorkoutUpdateArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Workouts.
     * @param {WorkoutDeleteManyArgs} args - Arguments to filter Workouts to delete.
     * @example
     * // Delete a few Workouts
     * const { count } = await prisma.workout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutDeleteManyArgs>(args?: SelectSubset<T, WorkoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workouts
     * const workout = await prisma.workout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutUpdateManyArgs>(args: SelectSubset<T, WorkoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Workout.
     * @param {WorkoutUpsertArgs} args - Arguments to update or create a Workout.
     * @example
     * // Update or create a Workout
     * const workout = await prisma.workout.upsert({
     *   create: {
     *     // ... data to create a Workout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workout we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutUpsertArgs>(args: SelectSubset<T, WorkoutUpsertArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Workouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutCountArgs} args - Arguments to filter Workouts to count.
     * @example
     * // Count the number of Workouts
     * const count = await prisma.workout.count({
     *   where: {
     *     // ... the filter for the Workouts we want to count
     *   }
     * })
    **/
    count<T extends WorkoutCountArgs>(
      args?: Subset<T, WorkoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkoutAggregateArgs>(args: Subset<T, WorkoutAggregateArgs>): Prisma.PrismaPromise<GetWorkoutAggregateType<T>>

    /**
     * Group by Workout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workout model
   */
  readonly fields: WorkoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exercises<T extends Workout$exercisesArgs<ExtArgs> = {}>(args?: Subset<T, Workout$exercisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Workout model
   */ 
  interface WorkoutFieldRefs {
    readonly id: FieldRef<"Workout", 'String'>
    readonly userId: FieldRef<"Workout", 'String'>
    readonly type: FieldRef<"Workout", 'String'>
    readonly title: FieldRef<"Workout", 'String'>
    readonly duration: FieldRef<"Workout", 'Int'>
    readonly intensity: FieldRef<"Workout", 'String'>
    readonly splitType: FieldRef<"Workout", 'String'>
    readonly muscleGroups: FieldRef<"Workout", 'String[]'>
    readonly caloriesBurned: FieldRef<"Workout", 'Int'>
    readonly totalVolume: FieldRef<"Workout", 'Float'>
    readonly notes: FieldRef<"Workout", 'String'>
    readonly scheduledAt: FieldRef<"Workout", 'DateTime'>
    readonly completedAt: FieldRef<"Workout", 'DateTime'>
    readonly createdAt: FieldRef<"Workout", 'DateTime'>
    readonly updatedAt: FieldRef<"Workout", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workout findUnique
   */
  export type WorkoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findUniqueOrThrow
   */
  export type WorkoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout findFirst
   */
  export type WorkoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findFirstOrThrow
   */
  export type WorkoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workout to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workouts.
     */
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout findMany
   */
  export type WorkoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter, which Workouts to fetch.
     */
    where?: WorkoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workouts to fetch.
     */
    orderBy?: WorkoutOrderByWithRelationInput | WorkoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workouts.
     */
    cursor?: WorkoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workouts.
     */
    skip?: number
    distinct?: WorkoutScalarFieldEnum | WorkoutScalarFieldEnum[]
  }

  /**
   * Workout create
   */
  export type WorkoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to create a Workout.
     */
    data: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
  }

  /**
   * Workout createMany
   */
  export type WorkoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutCreateManyInput | WorkoutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workout createManyAndReturn
   */
  export type WorkoutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Workouts.
     */
    data: WorkoutCreateManyInput | WorkoutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workout update
   */
  export type WorkoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The data needed to update a Workout.
     */
    data: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
    /**
     * Choose, which Workout to update.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout updateMany
   */
  export type WorkoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workouts.
     */
    data: XOR<WorkoutUpdateManyMutationInput, WorkoutUncheckedUpdateManyInput>
    /**
     * Filter which Workouts to update
     */
    where?: WorkoutWhereInput
  }

  /**
   * Workout upsert
   */
  export type WorkoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * The filter to search for the Workout to update in case it exists.
     */
    where: WorkoutWhereUniqueInput
    /**
     * In case the Workout found by the `where` argument doesn't exist, create a new Workout with this data.
     */
    create: XOR<WorkoutCreateInput, WorkoutUncheckedCreateInput>
    /**
     * In case the Workout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutUpdateInput, WorkoutUncheckedUpdateInput>
  }

  /**
   * Workout delete
   */
  export type WorkoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
    /**
     * Filter which Workout to delete.
     */
    where: WorkoutWhereUniqueInput
  }

  /**
   * Workout deleteMany
   */
  export type WorkoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workouts to delete
     */
    where?: WorkoutWhereInput
  }

  /**
   * Workout.exercises
   */
  export type Workout$exercisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    cursor?: ExerciseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Workout without action
   */
  export type WorkoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workout
     */
    select?: WorkoutSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkoutInclude<ExtArgs> | null
  }


  /**
   * Model Exercise
   */

  export type AggregateExercise = {
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  export type ExerciseAvgAggregateOutputType = {
    sets: number | null
    reps: number | null
    weightKg: number | null
    distanceKm: number | null
    durationSecs: number | null
    restSecs: number | null
    order: number | null
  }

  export type ExerciseSumAggregateOutputType = {
    sets: number | null
    reps: number | null
    weightKg: number | null
    distanceKm: number | null
    durationSecs: number | null
    restSecs: number | null
    order: number | null
  }

  export type ExerciseMinAggregateOutputType = {
    id: string | null
    workoutId: string | null
    name: string | null
    muscleGroup: string | null
    sets: number | null
    reps: number | null
    weightKg: number | null
    distanceKm: number | null
    durationSecs: number | null
    restSecs: number | null
    order: number | null
  }

  export type ExerciseMaxAggregateOutputType = {
    id: string | null
    workoutId: string | null
    name: string | null
    muscleGroup: string | null
    sets: number | null
    reps: number | null
    weightKg: number | null
    distanceKm: number | null
    durationSecs: number | null
    restSecs: number | null
    order: number | null
  }

  export type ExerciseCountAggregateOutputType = {
    id: number
    workoutId: number
    name: number
    muscleGroup: number
    sets: number
    reps: number
    weightKg: number
    distanceKm: number
    durationSecs: number
    restSecs: number
    order: number
    _all: number
  }


  export type ExerciseAvgAggregateInputType = {
    sets?: true
    reps?: true
    weightKg?: true
    distanceKm?: true
    durationSecs?: true
    restSecs?: true
    order?: true
  }

  export type ExerciseSumAggregateInputType = {
    sets?: true
    reps?: true
    weightKg?: true
    distanceKm?: true
    durationSecs?: true
    restSecs?: true
    order?: true
  }

  export type ExerciseMinAggregateInputType = {
    id?: true
    workoutId?: true
    name?: true
    muscleGroup?: true
    sets?: true
    reps?: true
    weightKg?: true
    distanceKm?: true
    durationSecs?: true
    restSecs?: true
    order?: true
  }

  export type ExerciseMaxAggregateInputType = {
    id?: true
    workoutId?: true
    name?: true
    muscleGroup?: true
    sets?: true
    reps?: true
    weightKg?: true
    distanceKm?: true
    durationSecs?: true
    restSecs?: true
    order?: true
  }

  export type ExerciseCountAggregateInputType = {
    id?: true
    workoutId?: true
    name?: true
    muscleGroup?: true
    sets?: true
    reps?: true
    weightKg?: true
    distanceKm?: true
    durationSecs?: true
    restSecs?: true
    order?: true
    _all?: true
  }

  export type ExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercise to aggregate.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exercises
    **/
    _count?: true | ExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExerciseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExerciseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExerciseMaxAggregateInputType
  }

  export type GetExerciseAggregateType<T extends ExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExercise[P]>
      : GetScalarType<T[P], AggregateExercise[P]>
  }




  export type ExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExerciseWhereInput
    orderBy?: ExerciseOrderByWithAggregationInput | ExerciseOrderByWithAggregationInput[]
    by: ExerciseScalarFieldEnum[] | ExerciseScalarFieldEnum
    having?: ExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExerciseCountAggregateInputType | true
    _avg?: ExerciseAvgAggregateInputType
    _sum?: ExerciseSumAggregateInputType
    _min?: ExerciseMinAggregateInputType
    _max?: ExerciseMaxAggregateInputType
  }

  export type ExerciseGroupByOutputType = {
    id: string
    workoutId: string
    name: string
    muscleGroup: string
    sets: number | null
    reps: number | null
    weightKg: number | null
    distanceKm: number | null
    durationSecs: number | null
    restSecs: number | null
    order: number
    _count: ExerciseCountAggregateOutputType | null
    _avg: ExerciseAvgAggregateOutputType | null
    _sum: ExerciseSumAggregateOutputType | null
    _min: ExerciseMinAggregateOutputType | null
    _max: ExerciseMaxAggregateOutputType | null
  }

  type GetExerciseGroupByPayload<T extends ExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], ExerciseGroupByOutputType[P]>
        }
      >
    >


  export type ExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutId?: boolean
    name?: boolean
    muscleGroup?: boolean
    sets?: boolean
    reps?: boolean
    weightKg?: boolean
    distanceKm?: boolean
    durationSecs?: boolean
    restSecs?: boolean
    order?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workoutId?: boolean
    name?: boolean
    muscleGroup?: boolean
    sets?: boolean
    reps?: boolean
    weightKg?: boolean
    distanceKm?: boolean
    durationSecs?: boolean
    restSecs?: boolean
    order?: boolean
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exercise"]>

  export type ExerciseSelectScalar = {
    id?: boolean
    workoutId?: boolean
    name?: boolean
    muscleGroup?: boolean
    sets?: boolean
    reps?: boolean
    weightKg?: boolean
    distanceKm?: boolean
    durationSecs?: boolean
    restSecs?: boolean
    order?: boolean
  }

  export type ExerciseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
  }
  export type ExerciseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workout?: boolean | WorkoutDefaultArgs<ExtArgs>
  }

  export type $ExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exercise"
    objects: {
      workout: Prisma.$WorkoutPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workoutId: string
      name: string
      muscleGroup: string
      sets: number | null
      reps: number | null
      weightKg: number | null
      distanceKm: number | null
      durationSecs: number | null
      restSecs: number | null
      order: number
    }, ExtArgs["result"]["exercise"]>
    composites: {}
  }

  type ExerciseGetPayload<S extends boolean | null | undefined | ExerciseDefaultArgs> = $Result.GetResult<Prisma.$ExercisePayload, S>

  type ExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExerciseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExerciseCountAggregateInputType | true
    }

  export interface ExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exercise'], meta: { name: 'Exercise' } }
    /**
     * Find zero or one Exercise that matches the filter.
     * @param {ExerciseFindUniqueArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExerciseFindUniqueArgs>(args: SelectSubset<T, ExerciseFindUniqueArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Exercise that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExerciseFindUniqueOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Exercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExerciseFindFirstArgs>(args?: SelectSubset<T, ExerciseFindFirstArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Exercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindFirstOrThrowArgs} args - Arguments to find a Exercise
     * @example
     * // Get one Exercise
     * const exercise = await prisma.exercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Exercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exercises
     * const exercises = await prisma.exercise.findMany()
     * 
     * // Get first 10 Exercises
     * const exercises = await prisma.exercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exerciseWithIdOnly = await prisma.exercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExerciseFindManyArgs>(args?: SelectSubset<T, ExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Exercise.
     * @param {ExerciseCreateArgs} args - Arguments to create a Exercise.
     * @example
     * // Create one Exercise
     * const Exercise = await prisma.exercise.create({
     *   data: {
     *     // ... data to create a Exercise
     *   }
     * })
     * 
     */
    create<T extends ExerciseCreateArgs>(args: SelectSubset<T, ExerciseCreateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Exercises.
     * @param {ExerciseCreateManyArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExerciseCreateManyArgs>(args?: SelectSubset<T, ExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exercises and returns the data saved in the database.
     * @param {ExerciseCreateManyAndReturnArgs} args - Arguments to create many Exercises.
     * @example
     * // Create many Exercises
     * const exercise = await prisma.exercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exercises and only return the `id`
     * const exerciseWithIdOnly = await prisma.exercise.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Exercise.
     * @param {ExerciseDeleteArgs} args - Arguments to delete one Exercise.
     * @example
     * // Delete one Exercise
     * const Exercise = await prisma.exercise.delete({
     *   where: {
     *     // ... filter to delete one Exercise
     *   }
     * })
     * 
     */
    delete<T extends ExerciseDeleteArgs>(args: SelectSubset<T, ExerciseDeleteArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Exercise.
     * @param {ExerciseUpdateArgs} args - Arguments to update one Exercise.
     * @example
     * // Update one Exercise
     * const exercise = await prisma.exercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExerciseUpdateArgs>(args: SelectSubset<T, ExerciseUpdateArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Exercises.
     * @param {ExerciseDeleteManyArgs} args - Arguments to filter Exercises to delete.
     * @example
     * // Delete a few Exercises
     * const { count } = await prisma.exercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExerciseDeleteManyArgs>(args?: SelectSubset<T, ExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exercises
     * const exercise = await prisma.exercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExerciseUpdateManyArgs>(args: SelectSubset<T, ExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exercise.
     * @param {ExerciseUpsertArgs} args - Arguments to update or create a Exercise.
     * @example
     * // Update or create a Exercise
     * const exercise = await prisma.exercise.upsert({
     *   create: {
     *     // ... data to create a Exercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exercise we want to update
     *   }
     * })
     */
    upsert<T extends ExerciseUpsertArgs>(args: SelectSubset<T, ExerciseUpsertArgs<ExtArgs>>): Prisma__ExerciseClient<$Result.GetResult<Prisma.$ExercisePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Exercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseCountArgs} args - Arguments to filter Exercises to count.
     * @example
     * // Count the number of Exercises
     * const count = await prisma.exercise.count({
     *   where: {
     *     // ... the filter for the Exercises we want to count
     *   }
     * })
    **/
    count<T extends ExerciseCountArgs>(
      args?: Subset<T, ExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExerciseAggregateArgs>(args: Subset<T, ExerciseAggregateArgs>): Prisma.PrismaPromise<GetExerciseAggregateType<T>>

    /**
     * Group by Exercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExerciseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExerciseGroupByArgs['orderBy'] }
        : { orderBy?: ExerciseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exercise model
   */
  readonly fields: ExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workout<T extends WorkoutDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkoutDefaultArgs<ExtArgs>>): Prisma__WorkoutClient<$Result.GetResult<Prisma.$WorkoutPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Exercise model
   */ 
  interface ExerciseFieldRefs {
    readonly id: FieldRef<"Exercise", 'String'>
    readonly workoutId: FieldRef<"Exercise", 'String'>
    readonly name: FieldRef<"Exercise", 'String'>
    readonly muscleGroup: FieldRef<"Exercise", 'String'>
    readonly sets: FieldRef<"Exercise", 'Int'>
    readonly reps: FieldRef<"Exercise", 'Int'>
    readonly weightKg: FieldRef<"Exercise", 'Float'>
    readonly distanceKm: FieldRef<"Exercise", 'Float'>
    readonly durationSecs: FieldRef<"Exercise", 'Int'>
    readonly restSecs: FieldRef<"Exercise", 'Int'>
    readonly order: FieldRef<"Exercise", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Exercise findUnique
   */
  export type ExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findUniqueOrThrow
   */
  export type ExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise findFirst
   */
  export type ExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findFirstOrThrow
   */
  export type ExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercise to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exercises.
     */
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise findMany
   */
  export type ExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter, which Exercises to fetch.
     */
    where?: ExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exercises to fetch.
     */
    orderBy?: ExerciseOrderByWithRelationInput | ExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exercises.
     */
    cursor?: ExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exercises.
     */
    skip?: number
    distinct?: ExerciseScalarFieldEnum | ExerciseScalarFieldEnum[]
  }

  /**
   * Exercise create
   */
  export type ExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to create a Exercise.
     */
    data: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
  }

  /**
   * Exercise createMany
   */
  export type ExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exercise createManyAndReturn
   */
  export type ExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Exercises.
     */
    data: ExerciseCreateManyInput | ExerciseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Exercise update
   */
  export type ExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The data needed to update a Exercise.
     */
    data: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
    /**
     * Choose, which Exercise to update.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise updateMany
   */
  export type ExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exercises.
     */
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyInput>
    /**
     * Filter which Exercises to update
     */
    where?: ExerciseWhereInput
  }

  /**
   * Exercise upsert
   */
  export type ExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * The filter to search for the Exercise to update in case it exists.
     */
    where: ExerciseWhereUniqueInput
    /**
     * In case the Exercise found by the `where` argument doesn't exist, create a new Exercise with this data.
     */
    create: XOR<ExerciseCreateInput, ExerciseUncheckedCreateInput>
    /**
     * In case the Exercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExerciseUpdateInput, ExerciseUncheckedUpdateInput>
  }

  /**
   * Exercise delete
   */
  export type ExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
    /**
     * Filter which Exercise to delete.
     */
    where: ExerciseWhereUniqueInput
  }

  /**
   * Exercise deleteMany
   */
  export type ExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exercises to delete
     */
    where?: ExerciseWhereInput
  }

  /**
   * Exercise without action
   */
  export type ExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exercise
     */
    select?: ExerciseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExerciseInclude<ExtArgs> | null
  }


  /**
   * Model LibraryExercise
   */

  export type AggregateLibraryExercise = {
    _count: LibraryExerciseCountAggregateOutputType | null
    _min: LibraryExerciseMinAggregateOutputType | null
    _max: LibraryExerciseMaxAggregateOutputType | null
  }

  export type LibraryExerciseMinAggregateOutputType = {
    id: string | null
    name: string | null
    muscleGroup: string | null
    equipment: string | null
    instructions: string | null
    createdAt: Date | null
  }

  export type LibraryExerciseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    muscleGroup: string | null
    equipment: string | null
    instructions: string | null
    createdAt: Date | null
  }

  export type LibraryExerciseCountAggregateOutputType = {
    id: number
    name: number
    muscleGroup: number
    equipment: number
    instructions: number
    createdAt: number
    _all: number
  }


  export type LibraryExerciseMinAggregateInputType = {
    id?: true
    name?: true
    muscleGroup?: true
    equipment?: true
    instructions?: true
    createdAt?: true
  }

  export type LibraryExerciseMaxAggregateInputType = {
    id?: true
    name?: true
    muscleGroup?: true
    equipment?: true
    instructions?: true
    createdAt?: true
  }

  export type LibraryExerciseCountAggregateInputType = {
    id?: true
    name?: true
    muscleGroup?: true
    equipment?: true
    instructions?: true
    createdAt?: true
    _all?: true
  }

  export type LibraryExerciseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LibraryExercise to aggregate.
     */
    where?: LibraryExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryExercises to fetch.
     */
    orderBy?: LibraryExerciseOrderByWithRelationInput | LibraryExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LibraryExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LibraryExercises
    **/
    _count?: true | LibraryExerciseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LibraryExerciseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LibraryExerciseMaxAggregateInputType
  }

  export type GetLibraryExerciseAggregateType<T extends LibraryExerciseAggregateArgs> = {
        [P in keyof T & keyof AggregateLibraryExercise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLibraryExercise[P]>
      : GetScalarType<T[P], AggregateLibraryExercise[P]>
  }




  export type LibraryExerciseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibraryExerciseWhereInput
    orderBy?: LibraryExerciseOrderByWithAggregationInput | LibraryExerciseOrderByWithAggregationInput[]
    by: LibraryExerciseScalarFieldEnum[] | LibraryExerciseScalarFieldEnum
    having?: LibraryExerciseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LibraryExerciseCountAggregateInputType | true
    _min?: LibraryExerciseMinAggregateInputType
    _max?: LibraryExerciseMaxAggregateInputType
  }

  export type LibraryExerciseGroupByOutputType = {
    id: string
    name: string
    muscleGroup: string
    equipment: string | null
    instructions: string | null
    createdAt: Date
    _count: LibraryExerciseCountAggregateOutputType | null
    _min: LibraryExerciseMinAggregateOutputType | null
    _max: LibraryExerciseMaxAggregateOutputType | null
  }

  type GetLibraryExerciseGroupByPayload<T extends LibraryExerciseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LibraryExerciseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LibraryExerciseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LibraryExerciseGroupByOutputType[P]>
            : GetScalarType<T[P], LibraryExerciseGroupByOutputType[P]>
        }
      >
    >


  export type LibraryExerciseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    muscleGroup?: boolean
    equipment?: boolean
    instructions?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["libraryExercise"]>

  export type LibraryExerciseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    muscleGroup?: boolean
    equipment?: boolean
    instructions?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["libraryExercise"]>

  export type LibraryExerciseSelectScalar = {
    id?: boolean
    name?: boolean
    muscleGroup?: boolean
    equipment?: boolean
    instructions?: boolean
    createdAt?: boolean
  }


  export type $LibraryExercisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LibraryExercise"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      muscleGroup: string
      equipment: string | null
      instructions: string | null
      createdAt: Date
    }, ExtArgs["result"]["libraryExercise"]>
    composites: {}
  }

  type LibraryExerciseGetPayload<S extends boolean | null | undefined | LibraryExerciseDefaultArgs> = $Result.GetResult<Prisma.$LibraryExercisePayload, S>

  type LibraryExerciseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LibraryExerciseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LibraryExerciseCountAggregateInputType | true
    }

  export interface LibraryExerciseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LibraryExercise'], meta: { name: 'LibraryExercise' } }
    /**
     * Find zero or one LibraryExercise that matches the filter.
     * @param {LibraryExerciseFindUniqueArgs} args - Arguments to find a LibraryExercise
     * @example
     * // Get one LibraryExercise
     * const libraryExercise = await prisma.libraryExercise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LibraryExerciseFindUniqueArgs>(args: SelectSubset<T, LibraryExerciseFindUniqueArgs<ExtArgs>>): Prisma__LibraryExerciseClient<$Result.GetResult<Prisma.$LibraryExercisePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LibraryExercise that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LibraryExerciseFindUniqueOrThrowArgs} args - Arguments to find a LibraryExercise
     * @example
     * // Get one LibraryExercise
     * const libraryExercise = await prisma.libraryExercise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LibraryExerciseFindUniqueOrThrowArgs>(args: SelectSubset<T, LibraryExerciseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LibraryExerciseClient<$Result.GetResult<Prisma.$LibraryExercisePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LibraryExercise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryExerciseFindFirstArgs} args - Arguments to find a LibraryExercise
     * @example
     * // Get one LibraryExercise
     * const libraryExercise = await prisma.libraryExercise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LibraryExerciseFindFirstArgs>(args?: SelectSubset<T, LibraryExerciseFindFirstArgs<ExtArgs>>): Prisma__LibraryExerciseClient<$Result.GetResult<Prisma.$LibraryExercisePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LibraryExercise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryExerciseFindFirstOrThrowArgs} args - Arguments to find a LibraryExercise
     * @example
     * // Get one LibraryExercise
     * const libraryExercise = await prisma.libraryExercise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LibraryExerciseFindFirstOrThrowArgs>(args?: SelectSubset<T, LibraryExerciseFindFirstOrThrowArgs<ExtArgs>>): Prisma__LibraryExerciseClient<$Result.GetResult<Prisma.$LibraryExercisePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LibraryExercises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryExerciseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LibraryExercises
     * const libraryExercises = await prisma.libraryExercise.findMany()
     * 
     * // Get first 10 LibraryExercises
     * const libraryExercises = await prisma.libraryExercise.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const libraryExerciseWithIdOnly = await prisma.libraryExercise.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LibraryExerciseFindManyArgs>(args?: SelectSubset<T, LibraryExerciseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryExercisePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LibraryExercise.
     * @param {LibraryExerciseCreateArgs} args - Arguments to create a LibraryExercise.
     * @example
     * // Create one LibraryExercise
     * const LibraryExercise = await prisma.libraryExercise.create({
     *   data: {
     *     // ... data to create a LibraryExercise
     *   }
     * })
     * 
     */
    create<T extends LibraryExerciseCreateArgs>(args: SelectSubset<T, LibraryExerciseCreateArgs<ExtArgs>>): Prisma__LibraryExerciseClient<$Result.GetResult<Prisma.$LibraryExercisePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LibraryExercises.
     * @param {LibraryExerciseCreateManyArgs} args - Arguments to create many LibraryExercises.
     * @example
     * // Create many LibraryExercises
     * const libraryExercise = await prisma.libraryExercise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LibraryExerciseCreateManyArgs>(args?: SelectSubset<T, LibraryExerciseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LibraryExercises and returns the data saved in the database.
     * @param {LibraryExerciseCreateManyAndReturnArgs} args - Arguments to create many LibraryExercises.
     * @example
     * // Create many LibraryExercises
     * const libraryExercise = await prisma.libraryExercise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LibraryExercises and only return the `id`
     * const libraryExerciseWithIdOnly = await prisma.libraryExercise.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LibraryExerciseCreateManyAndReturnArgs>(args?: SelectSubset<T, LibraryExerciseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryExercisePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LibraryExercise.
     * @param {LibraryExerciseDeleteArgs} args - Arguments to delete one LibraryExercise.
     * @example
     * // Delete one LibraryExercise
     * const LibraryExercise = await prisma.libraryExercise.delete({
     *   where: {
     *     // ... filter to delete one LibraryExercise
     *   }
     * })
     * 
     */
    delete<T extends LibraryExerciseDeleteArgs>(args: SelectSubset<T, LibraryExerciseDeleteArgs<ExtArgs>>): Prisma__LibraryExerciseClient<$Result.GetResult<Prisma.$LibraryExercisePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LibraryExercise.
     * @param {LibraryExerciseUpdateArgs} args - Arguments to update one LibraryExercise.
     * @example
     * // Update one LibraryExercise
     * const libraryExercise = await prisma.libraryExercise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LibraryExerciseUpdateArgs>(args: SelectSubset<T, LibraryExerciseUpdateArgs<ExtArgs>>): Prisma__LibraryExerciseClient<$Result.GetResult<Prisma.$LibraryExercisePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LibraryExercises.
     * @param {LibraryExerciseDeleteManyArgs} args - Arguments to filter LibraryExercises to delete.
     * @example
     * // Delete a few LibraryExercises
     * const { count } = await prisma.libraryExercise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LibraryExerciseDeleteManyArgs>(args?: SelectSubset<T, LibraryExerciseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LibraryExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryExerciseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LibraryExercises
     * const libraryExercise = await prisma.libraryExercise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LibraryExerciseUpdateManyArgs>(args: SelectSubset<T, LibraryExerciseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LibraryExercise.
     * @param {LibraryExerciseUpsertArgs} args - Arguments to update or create a LibraryExercise.
     * @example
     * // Update or create a LibraryExercise
     * const libraryExercise = await prisma.libraryExercise.upsert({
     *   create: {
     *     // ... data to create a LibraryExercise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LibraryExercise we want to update
     *   }
     * })
     */
    upsert<T extends LibraryExerciseUpsertArgs>(args: SelectSubset<T, LibraryExerciseUpsertArgs<ExtArgs>>): Prisma__LibraryExerciseClient<$Result.GetResult<Prisma.$LibraryExercisePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LibraryExercises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryExerciseCountArgs} args - Arguments to filter LibraryExercises to count.
     * @example
     * // Count the number of LibraryExercises
     * const count = await prisma.libraryExercise.count({
     *   where: {
     *     // ... the filter for the LibraryExercises we want to count
     *   }
     * })
    **/
    count<T extends LibraryExerciseCountArgs>(
      args?: Subset<T, LibraryExerciseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LibraryExerciseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LibraryExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryExerciseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LibraryExerciseAggregateArgs>(args: Subset<T, LibraryExerciseAggregateArgs>): Prisma.PrismaPromise<GetLibraryExerciseAggregateType<T>>

    /**
     * Group by LibraryExercise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryExerciseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LibraryExerciseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LibraryExerciseGroupByArgs['orderBy'] }
        : { orderBy?: LibraryExerciseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LibraryExerciseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLibraryExerciseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LibraryExercise model
   */
  readonly fields: LibraryExerciseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LibraryExercise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LibraryExerciseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LibraryExercise model
   */ 
  interface LibraryExerciseFieldRefs {
    readonly id: FieldRef<"LibraryExercise", 'String'>
    readonly name: FieldRef<"LibraryExercise", 'String'>
    readonly muscleGroup: FieldRef<"LibraryExercise", 'String'>
    readonly equipment: FieldRef<"LibraryExercise", 'String'>
    readonly instructions: FieldRef<"LibraryExercise", 'String'>
    readonly createdAt: FieldRef<"LibraryExercise", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LibraryExercise findUnique
   */
  export type LibraryExerciseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryExercise
     */
    select?: LibraryExerciseSelect<ExtArgs> | null
    /**
     * Filter, which LibraryExercise to fetch.
     */
    where: LibraryExerciseWhereUniqueInput
  }

  /**
   * LibraryExercise findUniqueOrThrow
   */
  export type LibraryExerciseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryExercise
     */
    select?: LibraryExerciseSelect<ExtArgs> | null
    /**
     * Filter, which LibraryExercise to fetch.
     */
    where: LibraryExerciseWhereUniqueInput
  }

  /**
   * LibraryExercise findFirst
   */
  export type LibraryExerciseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryExercise
     */
    select?: LibraryExerciseSelect<ExtArgs> | null
    /**
     * Filter, which LibraryExercise to fetch.
     */
    where?: LibraryExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryExercises to fetch.
     */
    orderBy?: LibraryExerciseOrderByWithRelationInput | LibraryExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LibraryExercises.
     */
    cursor?: LibraryExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LibraryExercises.
     */
    distinct?: LibraryExerciseScalarFieldEnum | LibraryExerciseScalarFieldEnum[]
  }

  /**
   * LibraryExercise findFirstOrThrow
   */
  export type LibraryExerciseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryExercise
     */
    select?: LibraryExerciseSelect<ExtArgs> | null
    /**
     * Filter, which LibraryExercise to fetch.
     */
    where?: LibraryExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryExercises to fetch.
     */
    orderBy?: LibraryExerciseOrderByWithRelationInput | LibraryExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LibraryExercises.
     */
    cursor?: LibraryExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryExercises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LibraryExercises.
     */
    distinct?: LibraryExerciseScalarFieldEnum | LibraryExerciseScalarFieldEnum[]
  }

  /**
   * LibraryExercise findMany
   */
  export type LibraryExerciseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryExercise
     */
    select?: LibraryExerciseSelect<ExtArgs> | null
    /**
     * Filter, which LibraryExercises to fetch.
     */
    where?: LibraryExerciseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryExercises to fetch.
     */
    orderBy?: LibraryExerciseOrderByWithRelationInput | LibraryExerciseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LibraryExercises.
     */
    cursor?: LibraryExerciseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryExercises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryExercises.
     */
    skip?: number
    distinct?: LibraryExerciseScalarFieldEnum | LibraryExerciseScalarFieldEnum[]
  }

  /**
   * LibraryExercise create
   */
  export type LibraryExerciseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryExercise
     */
    select?: LibraryExerciseSelect<ExtArgs> | null
    /**
     * The data needed to create a LibraryExercise.
     */
    data: XOR<LibraryExerciseCreateInput, LibraryExerciseUncheckedCreateInput>
  }

  /**
   * LibraryExercise createMany
   */
  export type LibraryExerciseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LibraryExercises.
     */
    data: LibraryExerciseCreateManyInput | LibraryExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LibraryExercise createManyAndReturn
   */
  export type LibraryExerciseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryExercise
     */
    select?: LibraryExerciseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LibraryExercises.
     */
    data: LibraryExerciseCreateManyInput | LibraryExerciseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LibraryExercise update
   */
  export type LibraryExerciseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryExercise
     */
    select?: LibraryExerciseSelect<ExtArgs> | null
    /**
     * The data needed to update a LibraryExercise.
     */
    data: XOR<LibraryExerciseUpdateInput, LibraryExerciseUncheckedUpdateInput>
    /**
     * Choose, which LibraryExercise to update.
     */
    where: LibraryExerciseWhereUniqueInput
  }

  /**
   * LibraryExercise updateMany
   */
  export type LibraryExerciseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LibraryExercises.
     */
    data: XOR<LibraryExerciseUpdateManyMutationInput, LibraryExerciseUncheckedUpdateManyInput>
    /**
     * Filter which LibraryExercises to update
     */
    where?: LibraryExerciseWhereInput
  }

  /**
   * LibraryExercise upsert
   */
  export type LibraryExerciseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryExercise
     */
    select?: LibraryExerciseSelect<ExtArgs> | null
    /**
     * The filter to search for the LibraryExercise to update in case it exists.
     */
    where: LibraryExerciseWhereUniqueInput
    /**
     * In case the LibraryExercise found by the `where` argument doesn't exist, create a new LibraryExercise with this data.
     */
    create: XOR<LibraryExerciseCreateInput, LibraryExerciseUncheckedCreateInput>
    /**
     * In case the LibraryExercise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LibraryExerciseUpdateInput, LibraryExerciseUncheckedUpdateInput>
  }

  /**
   * LibraryExercise delete
   */
  export type LibraryExerciseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryExercise
     */
    select?: LibraryExerciseSelect<ExtArgs> | null
    /**
     * Filter which LibraryExercise to delete.
     */
    where: LibraryExerciseWhereUniqueInput
  }

  /**
   * LibraryExercise deleteMany
   */
  export type LibraryExerciseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LibraryExercises to delete
     */
    where?: LibraryExerciseWhereInput
  }

  /**
   * LibraryExercise without action
   */
  export type LibraryExerciseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryExercise
     */
    select?: LibraryExerciseSelect<ExtArgs> | null
  }


  /**
   * Model WorkoutRoutine
   */

  export type AggregateWorkoutRoutine = {
    _count: WorkoutRoutineCountAggregateOutputType | null
    _min: WorkoutRoutineMinAggregateOutputType | null
    _max: WorkoutRoutineMaxAggregateOutputType | null
  }

  export type WorkoutRoutineMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    splitType: string | null
    createdAt: Date | null
  }

  export type WorkoutRoutineMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    splitType: string | null
    createdAt: Date | null
  }

  export type WorkoutRoutineCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    splitType: number
    muscleGroups: number
    exercises: number
    createdAt: number
    _all: number
  }


  export type WorkoutRoutineMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    splitType?: true
    createdAt?: true
  }

  export type WorkoutRoutineMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    splitType?: true
    createdAt?: true
  }

  export type WorkoutRoutineCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    splitType?: true
    muscleGroups?: true
    exercises?: true
    createdAt?: true
    _all?: true
  }

  export type WorkoutRoutineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutRoutine to aggregate.
     */
    where?: WorkoutRoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutRoutines to fetch.
     */
    orderBy?: WorkoutRoutineOrderByWithRelationInput | WorkoutRoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkoutRoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutRoutines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutRoutines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkoutRoutines
    **/
    _count?: true | WorkoutRoutineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkoutRoutineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkoutRoutineMaxAggregateInputType
  }

  export type GetWorkoutRoutineAggregateType<T extends WorkoutRoutineAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkoutRoutine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkoutRoutine[P]>
      : GetScalarType<T[P], AggregateWorkoutRoutine[P]>
  }




  export type WorkoutRoutineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkoutRoutineWhereInput
    orderBy?: WorkoutRoutineOrderByWithAggregationInput | WorkoutRoutineOrderByWithAggregationInput[]
    by: WorkoutRoutineScalarFieldEnum[] | WorkoutRoutineScalarFieldEnum
    having?: WorkoutRoutineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkoutRoutineCountAggregateInputType | true
    _min?: WorkoutRoutineMinAggregateInputType
    _max?: WorkoutRoutineMaxAggregateInputType
  }

  export type WorkoutRoutineGroupByOutputType = {
    id: string
    userId: string | null
    title: string
    description: string | null
    splitType: string | null
    muscleGroups: string[]
    exercises: JsonValue
    createdAt: Date
    _count: WorkoutRoutineCountAggregateOutputType | null
    _min: WorkoutRoutineMinAggregateOutputType | null
    _max: WorkoutRoutineMaxAggregateOutputType | null
  }

  type GetWorkoutRoutineGroupByPayload<T extends WorkoutRoutineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkoutRoutineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkoutRoutineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkoutRoutineGroupByOutputType[P]>
            : GetScalarType<T[P], WorkoutRoutineGroupByOutputType[P]>
        }
      >
    >


  export type WorkoutRoutineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    splitType?: boolean
    muscleGroups?: boolean
    exercises?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["workoutRoutine"]>

  export type WorkoutRoutineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    splitType?: boolean
    muscleGroups?: boolean
    exercises?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["workoutRoutine"]>

  export type WorkoutRoutineSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    splitType?: boolean
    muscleGroups?: boolean
    exercises?: boolean
    createdAt?: boolean
  }


  export type $WorkoutRoutinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkoutRoutine"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      title: string
      description: string | null
      splitType: string | null
      muscleGroups: string[]
      exercises: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["workoutRoutine"]>
    composites: {}
  }

  type WorkoutRoutineGetPayload<S extends boolean | null | undefined | WorkoutRoutineDefaultArgs> = $Result.GetResult<Prisma.$WorkoutRoutinePayload, S>

  type WorkoutRoutineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorkoutRoutineFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkoutRoutineCountAggregateInputType | true
    }

  export interface WorkoutRoutineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkoutRoutine'], meta: { name: 'WorkoutRoutine' } }
    /**
     * Find zero or one WorkoutRoutine that matches the filter.
     * @param {WorkoutRoutineFindUniqueArgs} args - Arguments to find a WorkoutRoutine
     * @example
     * // Get one WorkoutRoutine
     * const workoutRoutine = await prisma.workoutRoutine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkoutRoutineFindUniqueArgs>(args: SelectSubset<T, WorkoutRoutineFindUniqueArgs<ExtArgs>>): Prisma__WorkoutRoutineClient<$Result.GetResult<Prisma.$WorkoutRoutinePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WorkoutRoutine that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WorkoutRoutineFindUniqueOrThrowArgs} args - Arguments to find a WorkoutRoutine
     * @example
     * // Get one WorkoutRoutine
     * const workoutRoutine = await prisma.workoutRoutine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkoutRoutineFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkoutRoutineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkoutRoutineClient<$Result.GetResult<Prisma.$WorkoutRoutinePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WorkoutRoutine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutRoutineFindFirstArgs} args - Arguments to find a WorkoutRoutine
     * @example
     * // Get one WorkoutRoutine
     * const workoutRoutine = await prisma.workoutRoutine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkoutRoutineFindFirstArgs>(args?: SelectSubset<T, WorkoutRoutineFindFirstArgs<ExtArgs>>): Prisma__WorkoutRoutineClient<$Result.GetResult<Prisma.$WorkoutRoutinePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WorkoutRoutine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutRoutineFindFirstOrThrowArgs} args - Arguments to find a WorkoutRoutine
     * @example
     * // Get one WorkoutRoutine
     * const workoutRoutine = await prisma.workoutRoutine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkoutRoutineFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkoutRoutineFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkoutRoutineClient<$Result.GetResult<Prisma.$WorkoutRoutinePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WorkoutRoutines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutRoutineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkoutRoutines
     * const workoutRoutines = await prisma.workoutRoutine.findMany()
     * 
     * // Get first 10 WorkoutRoutines
     * const workoutRoutines = await prisma.workoutRoutine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workoutRoutineWithIdOnly = await prisma.workoutRoutine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkoutRoutineFindManyArgs>(args?: SelectSubset<T, WorkoutRoutineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutRoutinePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WorkoutRoutine.
     * @param {WorkoutRoutineCreateArgs} args - Arguments to create a WorkoutRoutine.
     * @example
     * // Create one WorkoutRoutine
     * const WorkoutRoutine = await prisma.workoutRoutine.create({
     *   data: {
     *     // ... data to create a WorkoutRoutine
     *   }
     * })
     * 
     */
    create<T extends WorkoutRoutineCreateArgs>(args: SelectSubset<T, WorkoutRoutineCreateArgs<ExtArgs>>): Prisma__WorkoutRoutineClient<$Result.GetResult<Prisma.$WorkoutRoutinePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WorkoutRoutines.
     * @param {WorkoutRoutineCreateManyArgs} args - Arguments to create many WorkoutRoutines.
     * @example
     * // Create many WorkoutRoutines
     * const workoutRoutine = await prisma.workoutRoutine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkoutRoutineCreateManyArgs>(args?: SelectSubset<T, WorkoutRoutineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkoutRoutines and returns the data saved in the database.
     * @param {WorkoutRoutineCreateManyAndReturnArgs} args - Arguments to create many WorkoutRoutines.
     * @example
     * // Create many WorkoutRoutines
     * const workoutRoutine = await prisma.workoutRoutine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkoutRoutines and only return the `id`
     * const workoutRoutineWithIdOnly = await prisma.workoutRoutine.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkoutRoutineCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkoutRoutineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkoutRoutinePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WorkoutRoutine.
     * @param {WorkoutRoutineDeleteArgs} args - Arguments to delete one WorkoutRoutine.
     * @example
     * // Delete one WorkoutRoutine
     * const WorkoutRoutine = await prisma.workoutRoutine.delete({
     *   where: {
     *     // ... filter to delete one WorkoutRoutine
     *   }
     * })
     * 
     */
    delete<T extends WorkoutRoutineDeleteArgs>(args: SelectSubset<T, WorkoutRoutineDeleteArgs<ExtArgs>>): Prisma__WorkoutRoutineClient<$Result.GetResult<Prisma.$WorkoutRoutinePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WorkoutRoutine.
     * @param {WorkoutRoutineUpdateArgs} args - Arguments to update one WorkoutRoutine.
     * @example
     * // Update one WorkoutRoutine
     * const workoutRoutine = await prisma.workoutRoutine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkoutRoutineUpdateArgs>(args: SelectSubset<T, WorkoutRoutineUpdateArgs<ExtArgs>>): Prisma__WorkoutRoutineClient<$Result.GetResult<Prisma.$WorkoutRoutinePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WorkoutRoutines.
     * @param {WorkoutRoutineDeleteManyArgs} args - Arguments to filter WorkoutRoutines to delete.
     * @example
     * // Delete a few WorkoutRoutines
     * const { count } = await prisma.workoutRoutine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkoutRoutineDeleteManyArgs>(args?: SelectSubset<T, WorkoutRoutineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkoutRoutines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutRoutineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkoutRoutines
     * const workoutRoutine = await prisma.workoutRoutine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkoutRoutineUpdateManyArgs>(args: SelectSubset<T, WorkoutRoutineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkoutRoutine.
     * @param {WorkoutRoutineUpsertArgs} args - Arguments to update or create a WorkoutRoutine.
     * @example
     * // Update or create a WorkoutRoutine
     * const workoutRoutine = await prisma.workoutRoutine.upsert({
     *   create: {
     *     // ... data to create a WorkoutRoutine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkoutRoutine we want to update
     *   }
     * })
     */
    upsert<T extends WorkoutRoutineUpsertArgs>(args: SelectSubset<T, WorkoutRoutineUpsertArgs<ExtArgs>>): Prisma__WorkoutRoutineClient<$Result.GetResult<Prisma.$WorkoutRoutinePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WorkoutRoutines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutRoutineCountArgs} args - Arguments to filter WorkoutRoutines to count.
     * @example
     * // Count the number of WorkoutRoutines
     * const count = await prisma.workoutRoutine.count({
     *   where: {
     *     // ... the filter for the WorkoutRoutines we want to count
     *   }
     * })
    **/
    count<T extends WorkoutRoutineCountArgs>(
      args?: Subset<T, WorkoutRoutineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkoutRoutineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkoutRoutine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutRoutineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkoutRoutineAggregateArgs>(args: Subset<T, WorkoutRoutineAggregateArgs>): Prisma.PrismaPromise<GetWorkoutRoutineAggregateType<T>>

    /**
     * Group by WorkoutRoutine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkoutRoutineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkoutRoutineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkoutRoutineGroupByArgs['orderBy'] }
        : { orderBy?: WorkoutRoutineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkoutRoutineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkoutRoutineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkoutRoutine model
   */
  readonly fields: WorkoutRoutineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkoutRoutine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkoutRoutineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkoutRoutine model
   */ 
  interface WorkoutRoutineFieldRefs {
    readonly id: FieldRef<"WorkoutRoutine", 'String'>
    readonly userId: FieldRef<"WorkoutRoutine", 'String'>
    readonly title: FieldRef<"WorkoutRoutine", 'String'>
    readonly description: FieldRef<"WorkoutRoutine", 'String'>
    readonly splitType: FieldRef<"WorkoutRoutine", 'String'>
    readonly muscleGroups: FieldRef<"WorkoutRoutine", 'String[]'>
    readonly exercises: FieldRef<"WorkoutRoutine", 'Json'>
    readonly createdAt: FieldRef<"WorkoutRoutine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkoutRoutine findUnique
   */
  export type WorkoutRoutineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRoutine
     */
    select?: WorkoutRoutineSelect<ExtArgs> | null
    /**
     * Filter, which WorkoutRoutine to fetch.
     */
    where: WorkoutRoutineWhereUniqueInput
  }

  /**
   * WorkoutRoutine findUniqueOrThrow
   */
  export type WorkoutRoutineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRoutine
     */
    select?: WorkoutRoutineSelect<ExtArgs> | null
    /**
     * Filter, which WorkoutRoutine to fetch.
     */
    where: WorkoutRoutineWhereUniqueInput
  }

  /**
   * WorkoutRoutine findFirst
   */
  export type WorkoutRoutineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRoutine
     */
    select?: WorkoutRoutineSelect<ExtArgs> | null
    /**
     * Filter, which WorkoutRoutine to fetch.
     */
    where?: WorkoutRoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutRoutines to fetch.
     */
    orderBy?: WorkoutRoutineOrderByWithRelationInput | WorkoutRoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutRoutines.
     */
    cursor?: WorkoutRoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutRoutines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutRoutines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutRoutines.
     */
    distinct?: WorkoutRoutineScalarFieldEnum | WorkoutRoutineScalarFieldEnum[]
  }

  /**
   * WorkoutRoutine findFirstOrThrow
   */
  export type WorkoutRoutineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRoutine
     */
    select?: WorkoutRoutineSelect<ExtArgs> | null
    /**
     * Filter, which WorkoutRoutine to fetch.
     */
    where?: WorkoutRoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutRoutines to fetch.
     */
    orderBy?: WorkoutRoutineOrderByWithRelationInput | WorkoutRoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkoutRoutines.
     */
    cursor?: WorkoutRoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutRoutines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutRoutines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkoutRoutines.
     */
    distinct?: WorkoutRoutineScalarFieldEnum | WorkoutRoutineScalarFieldEnum[]
  }

  /**
   * WorkoutRoutine findMany
   */
  export type WorkoutRoutineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRoutine
     */
    select?: WorkoutRoutineSelect<ExtArgs> | null
    /**
     * Filter, which WorkoutRoutines to fetch.
     */
    where?: WorkoutRoutineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkoutRoutines to fetch.
     */
    orderBy?: WorkoutRoutineOrderByWithRelationInput | WorkoutRoutineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkoutRoutines.
     */
    cursor?: WorkoutRoutineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkoutRoutines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkoutRoutines.
     */
    skip?: number
    distinct?: WorkoutRoutineScalarFieldEnum | WorkoutRoutineScalarFieldEnum[]
  }

  /**
   * WorkoutRoutine create
   */
  export type WorkoutRoutineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRoutine
     */
    select?: WorkoutRoutineSelect<ExtArgs> | null
    /**
     * The data needed to create a WorkoutRoutine.
     */
    data: XOR<WorkoutRoutineCreateInput, WorkoutRoutineUncheckedCreateInput>
  }

  /**
   * WorkoutRoutine createMany
   */
  export type WorkoutRoutineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkoutRoutines.
     */
    data: WorkoutRoutineCreateManyInput | WorkoutRoutineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutRoutine createManyAndReturn
   */
  export type WorkoutRoutineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRoutine
     */
    select?: WorkoutRoutineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WorkoutRoutines.
     */
    data: WorkoutRoutineCreateManyInput | WorkoutRoutineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkoutRoutine update
   */
  export type WorkoutRoutineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRoutine
     */
    select?: WorkoutRoutineSelect<ExtArgs> | null
    /**
     * The data needed to update a WorkoutRoutine.
     */
    data: XOR<WorkoutRoutineUpdateInput, WorkoutRoutineUncheckedUpdateInput>
    /**
     * Choose, which WorkoutRoutine to update.
     */
    where: WorkoutRoutineWhereUniqueInput
  }

  /**
   * WorkoutRoutine updateMany
   */
  export type WorkoutRoutineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkoutRoutines.
     */
    data: XOR<WorkoutRoutineUpdateManyMutationInput, WorkoutRoutineUncheckedUpdateManyInput>
    /**
     * Filter which WorkoutRoutines to update
     */
    where?: WorkoutRoutineWhereInput
  }

  /**
   * WorkoutRoutine upsert
   */
  export type WorkoutRoutineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRoutine
     */
    select?: WorkoutRoutineSelect<ExtArgs> | null
    /**
     * The filter to search for the WorkoutRoutine to update in case it exists.
     */
    where: WorkoutRoutineWhereUniqueInput
    /**
     * In case the WorkoutRoutine found by the `where` argument doesn't exist, create a new WorkoutRoutine with this data.
     */
    create: XOR<WorkoutRoutineCreateInput, WorkoutRoutineUncheckedCreateInput>
    /**
     * In case the WorkoutRoutine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkoutRoutineUpdateInput, WorkoutRoutineUncheckedUpdateInput>
  }

  /**
   * WorkoutRoutine delete
   */
  export type WorkoutRoutineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRoutine
     */
    select?: WorkoutRoutineSelect<ExtArgs> | null
    /**
     * Filter which WorkoutRoutine to delete.
     */
    where: WorkoutRoutineWhereUniqueInput
  }

  /**
   * WorkoutRoutine deleteMany
   */
  export type WorkoutRoutineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkoutRoutines to delete
     */
    where?: WorkoutRoutineWhereInput
  }

  /**
   * WorkoutRoutine without action
   */
  export type WorkoutRoutineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkoutRoutine
     */
    select?: WorkoutRoutineSelect<ExtArgs> | null
  }


  /**
   * Model OneRepMaxLog
   */

  export type AggregateOneRepMaxLog = {
    _count: OneRepMaxLogCountAggregateOutputType | null
    _avg: OneRepMaxLogAvgAggregateOutputType | null
    _sum: OneRepMaxLogSumAggregateOutputType | null
    _min: OneRepMaxLogMinAggregateOutputType | null
    _max: OneRepMaxLogMaxAggregateOutputType | null
  }

  export type OneRepMaxLogAvgAggregateOutputType = {
    weightKg: number | null
    estimated1RMKg: number | null
  }

  export type OneRepMaxLogSumAggregateOutputType = {
    weightKg: number | null
    estimated1RMKg: number | null
  }

  export type OneRepMaxLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    exerciseName: string | null
    weightKg: number | null
    estimated1RMKg: number | null
    date: Date | null
    createdAt: Date | null
  }

  export type OneRepMaxLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    exerciseName: string | null
    weightKg: number | null
    estimated1RMKg: number | null
    date: Date | null
    createdAt: Date | null
  }

  export type OneRepMaxLogCountAggregateOutputType = {
    id: number
    userId: number
    exerciseName: number
    weightKg: number
    estimated1RMKg: number
    date: number
    createdAt: number
    _all: number
  }


  export type OneRepMaxLogAvgAggregateInputType = {
    weightKg?: true
    estimated1RMKg?: true
  }

  export type OneRepMaxLogSumAggregateInputType = {
    weightKg?: true
    estimated1RMKg?: true
  }

  export type OneRepMaxLogMinAggregateInputType = {
    id?: true
    userId?: true
    exerciseName?: true
    weightKg?: true
    estimated1RMKg?: true
    date?: true
    createdAt?: true
  }

  export type OneRepMaxLogMaxAggregateInputType = {
    id?: true
    userId?: true
    exerciseName?: true
    weightKg?: true
    estimated1RMKg?: true
    date?: true
    createdAt?: true
  }

  export type OneRepMaxLogCountAggregateInputType = {
    id?: true
    userId?: true
    exerciseName?: true
    weightKg?: true
    estimated1RMKg?: true
    date?: true
    createdAt?: true
    _all?: true
  }

  export type OneRepMaxLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OneRepMaxLog to aggregate.
     */
    where?: OneRepMaxLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OneRepMaxLogs to fetch.
     */
    orderBy?: OneRepMaxLogOrderByWithRelationInput | OneRepMaxLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OneRepMaxLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OneRepMaxLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OneRepMaxLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OneRepMaxLogs
    **/
    _count?: true | OneRepMaxLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OneRepMaxLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OneRepMaxLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OneRepMaxLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OneRepMaxLogMaxAggregateInputType
  }

  export type GetOneRepMaxLogAggregateType<T extends OneRepMaxLogAggregateArgs> = {
        [P in keyof T & keyof AggregateOneRepMaxLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOneRepMaxLog[P]>
      : GetScalarType<T[P], AggregateOneRepMaxLog[P]>
  }




  export type OneRepMaxLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OneRepMaxLogWhereInput
    orderBy?: OneRepMaxLogOrderByWithAggregationInput | OneRepMaxLogOrderByWithAggregationInput[]
    by: OneRepMaxLogScalarFieldEnum[] | OneRepMaxLogScalarFieldEnum
    having?: OneRepMaxLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OneRepMaxLogCountAggregateInputType | true
    _avg?: OneRepMaxLogAvgAggregateInputType
    _sum?: OneRepMaxLogSumAggregateInputType
    _min?: OneRepMaxLogMinAggregateInputType
    _max?: OneRepMaxLogMaxAggregateInputType
  }

  export type OneRepMaxLogGroupByOutputType = {
    id: string
    userId: string
    exerciseName: string
    weightKg: number
    estimated1RMKg: number
    date: Date
    createdAt: Date
    _count: OneRepMaxLogCountAggregateOutputType | null
    _avg: OneRepMaxLogAvgAggregateOutputType | null
    _sum: OneRepMaxLogSumAggregateOutputType | null
    _min: OneRepMaxLogMinAggregateOutputType | null
    _max: OneRepMaxLogMaxAggregateOutputType | null
  }

  type GetOneRepMaxLogGroupByPayload<T extends OneRepMaxLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OneRepMaxLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OneRepMaxLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OneRepMaxLogGroupByOutputType[P]>
            : GetScalarType<T[P], OneRepMaxLogGroupByOutputType[P]>
        }
      >
    >


  export type OneRepMaxLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    exerciseName?: boolean
    weightKg?: boolean
    estimated1RMKg?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["oneRepMaxLog"]>

  export type OneRepMaxLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    exerciseName?: boolean
    weightKg?: boolean
    estimated1RMKg?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["oneRepMaxLog"]>

  export type OneRepMaxLogSelectScalar = {
    id?: boolean
    userId?: boolean
    exerciseName?: boolean
    weightKg?: boolean
    estimated1RMKg?: boolean
    date?: boolean
    createdAt?: boolean
  }


  export type $OneRepMaxLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OneRepMaxLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      exerciseName: string
      weightKg: number
      estimated1RMKg: number
      date: Date
      createdAt: Date
    }, ExtArgs["result"]["oneRepMaxLog"]>
    composites: {}
  }

  type OneRepMaxLogGetPayload<S extends boolean | null | undefined | OneRepMaxLogDefaultArgs> = $Result.GetResult<Prisma.$OneRepMaxLogPayload, S>

  type OneRepMaxLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OneRepMaxLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OneRepMaxLogCountAggregateInputType | true
    }

  export interface OneRepMaxLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OneRepMaxLog'], meta: { name: 'OneRepMaxLog' } }
    /**
     * Find zero or one OneRepMaxLog that matches the filter.
     * @param {OneRepMaxLogFindUniqueArgs} args - Arguments to find a OneRepMaxLog
     * @example
     * // Get one OneRepMaxLog
     * const oneRepMaxLog = await prisma.oneRepMaxLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OneRepMaxLogFindUniqueArgs>(args: SelectSubset<T, OneRepMaxLogFindUniqueArgs<ExtArgs>>): Prisma__OneRepMaxLogClient<$Result.GetResult<Prisma.$OneRepMaxLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OneRepMaxLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OneRepMaxLogFindUniqueOrThrowArgs} args - Arguments to find a OneRepMaxLog
     * @example
     * // Get one OneRepMaxLog
     * const oneRepMaxLog = await prisma.oneRepMaxLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OneRepMaxLogFindUniqueOrThrowArgs>(args: SelectSubset<T, OneRepMaxLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OneRepMaxLogClient<$Result.GetResult<Prisma.$OneRepMaxLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OneRepMaxLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OneRepMaxLogFindFirstArgs} args - Arguments to find a OneRepMaxLog
     * @example
     * // Get one OneRepMaxLog
     * const oneRepMaxLog = await prisma.oneRepMaxLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OneRepMaxLogFindFirstArgs>(args?: SelectSubset<T, OneRepMaxLogFindFirstArgs<ExtArgs>>): Prisma__OneRepMaxLogClient<$Result.GetResult<Prisma.$OneRepMaxLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OneRepMaxLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OneRepMaxLogFindFirstOrThrowArgs} args - Arguments to find a OneRepMaxLog
     * @example
     * // Get one OneRepMaxLog
     * const oneRepMaxLog = await prisma.oneRepMaxLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OneRepMaxLogFindFirstOrThrowArgs>(args?: SelectSubset<T, OneRepMaxLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__OneRepMaxLogClient<$Result.GetResult<Prisma.$OneRepMaxLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OneRepMaxLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OneRepMaxLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OneRepMaxLogs
     * const oneRepMaxLogs = await prisma.oneRepMaxLog.findMany()
     * 
     * // Get first 10 OneRepMaxLogs
     * const oneRepMaxLogs = await prisma.oneRepMaxLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oneRepMaxLogWithIdOnly = await prisma.oneRepMaxLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OneRepMaxLogFindManyArgs>(args?: SelectSubset<T, OneRepMaxLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OneRepMaxLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OneRepMaxLog.
     * @param {OneRepMaxLogCreateArgs} args - Arguments to create a OneRepMaxLog.
     * @example
     * // Create one OneRepMaxLog
     * const OneRepMaxLog = await prisma.oneRepMaxLog.create({
     *   data: {
     *     // ... data to create a OneRepMaxLog
     *   }
     * })
     * 
     */
    create<T extends OneRepMaxLogCreateArgs>(args: SelectSubset<T, OneRepMaxLogCreateArgs<ExtArgs>>): Prisma__OneRepMaxLogClient<$Result.GetResult<Prisma.$OneRepMaxLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OneRepMaxLogs.
     * @param {OneRepMaxLogCreateManyArgs} args - Arguments to create many OneRepMaxLogs.
     * @example
     * // Create many OneRepMaxLogs
     * const oneRepMaxLog = await prisma.oneRepMaxLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OneRepMaxLogCreateManyArgs>(args?: SelectSubset<T, OneRepMaxLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OneRepMaxLogs and returns the data saved in the database.
     * @param {OneRepMaxLogCreateManyAndReturnArgs} args - Arguments to create many OneRepMaxLogs.
     * @example
     * // Create many OneRepMaxLogs
     * const oneRepMaxLog = await prisma.oneRepMaxLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OneRepMaxLogs and only return the `id`
     * const oneRepMaxLogWithIdOnly = await prisma.oneRepMaxLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OneRepMaxLogCreateManyAndReturnArgs>(args?: SelectSubset<T, OneRepMaxLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OneRepMaxLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OneRepMaxLog.
     * @param {OneRepMaxLogDeleteArgs} args - Arguments to delete one OneRepMaxLog.
     * @example
     * // Delete one OneRepMaxLog
     * const OneRepMaxLog = await prisma.oneRepMaxLog.delete({
     *   where: {
     *     // ... filter to delete one OneRepMaxLog
     *   }
     * })
     * 
     */
    delete<T extends OneRepMaxLogDeleteArgs>(args: SelectSubset<T, OneRepMaxLogDeleteArgs<ExtArgs>>): Prisma__OneRepMaxLogClient<$Result.GetResult<Prisma.$OneRepMaxLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OneRepMaxLog.
     * @param {OneRepMaxLogUpdateArgs} args - Arguments to update one OneRepMaxLog.
     * @example
     * // Update one OneRepMaxLog
     * const oneRepMaxLog = await prisma.oneRepMaxLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OneRepMaxLogUpdateArgs>(args: SelectSubset<T, OneRepMaxLogUpdateArgs<ExtArgs>>): Prisma__OneRepMaxLogClient<$Result.GetResult<Prisma.$OneRepMaxLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OneRepMaxLogs.
     * @param {OneRepMaxLogDeleteManyArgs} args - Arguments to filter OneRepMaxLogs to delete.
     * @example
     * // Delete a few OneRepMaxLogs
     * const { count } = await prisma.oneRepMaxLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OneRepMaxLogDeleteManyArgs>(args?: SelectSubset<T, OneRepMaxLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OneRepMaxLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OneRepMaxLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OneRepMaxLogs
     * const oneRepMaxLog = await prisma.oneRepMaxLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OneRepMaxLogUpdateManyArgs>(args: SelectSubset<T, OneRepMaxLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OneRepMaxLog.
     * @param {OneRepMaxLogUpsertArgs} args - Arguments to update or create a OneRepMaxLog.
     * @example
     * // Update or create a OneRepMaxLog
     * const oneRepMaxLog = await prisma.oneRepMaxLog.upsert({
     *   create: {
     *     // ... data to create a OneRepMaxLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OneRepMaxLog we want to update
     *   }
     * })
     */
    upsert<T extends OneRepMaxLogUpsertArgs>(args: SelectSubset<T, OneRepMaxLogUpsertArgs<ExtArgs>>): Prisma__OneRepMaxLogClient<$Result.GetResult<Prisma.$OneRepMaxLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OneRepMaxLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OneRepMaxLogCountArgs} args - Arguments to filter OneRepMaxLogs to count.
     * @example
     * // Count the number of OneRepMaxLogs
     * const count = await prisma.oneRepMaxLog.count({
     *   where: {
     *     // ... the filter for the OneRepMaxLogs we want to count
     *   }
     * })
    **/
    count<T extends OneRepMaxLogCountArgs>(
      args?: Subset<T, OneRepMaxLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OneRepMaxLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OneRepMaxLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OneRepMaxLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OneRepMaxLogAggregateArgs>(args: Subset<T, OneRepMaxLogAggregateArgs>): Prisma.PrismaPromise<GetOneRepMaxLogAggregateType<T>>

    /**
     * Group by OneRepMaxLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OneRepMaxLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OneRepMaxLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OneRepMaxLogGroupByArgs['orderBy'] }
        : { orderBy?: OneRepMaxLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OneRepMaxLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOneRepMaxLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OneRepMaxLog model
   */
  readonly fields: OneRepMaxLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OneRepMaxLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OneRepMaxLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OneRepMaxLog model
   */ 
  interface OneRepMaxLogFieldRefs {
    readonly id: FieldRef<"OneRepMaxLog", 'String'>
    readonly userId: FieldRef<"OneRepMaxLog", 'String'>
    readonly exerciseName: FieldRef<"OneRepMaxLog", 'String'>
    readonly weightKg: FieldRef<"OneRepMaxLog", 'Float'>
    readonly estimated1RMKg: FieldRef<"OneRepMaxLog", 'Float'>
    readonly date: FieldRef<"OneRepMaxLog", 'DateTime'>
    readonly createdAt: FieldRef<"OneRepMaxLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OneRepMaxLog findUnique
   */
  export type OneRepMaxLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OneRepMaxLog
     */
    select?: OneRepMaxLogSelect<ExtArgs> | null
    /**
     * Filter, which OneRepMaxLog to fetch.
     */
    where: OneRepMaxLogWhereUniqueInput
  }

  /**
   * OneRepMaxLog findUniqueOrThrow
   */
  export type OneRepMaxLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OneRepMaxLog
     */
    select?: OneRepMaxLogSelect<ExtArgs> | null
    /**
     * Filter, which OneRepMaxLog to fetch.
     */
    where: OneRepMaxLogWhereUniqueInput
  }

  /**
   * OneRepMaxLog findFirst
   */
  export type OneRepMaxLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OneRepMaxLog
     */
    select?: OneRepMaxLogSelect<ExtArgs> | null
    /**
     * Filter, which OneRepMaxLog to fetch.
     */
    where?: OneRepMaxLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OneRepMaxLogs to fetch.
     */
    orderBy?: OneRepMaxLogOrderByWithRelationInput | OneRepMaxLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OneRepMaxLogs.
     */
    cursor?: OneRepMaxLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OneRepMaxLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OneRepMaxLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OneRepMaxLogs.
     */
    distinct?: OneRepMaxLogScalarFieldEnum | OneRepMaxLogScalarFieldEnum[]
  }

  /**
   * OneRepMaxLog findFirstOrThrow
   */
  export type OneRepMaxLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OneRepMaxLog
     */
    select?: OneRepMaxLogSelect<ExtArgs> | null
    /**
     * Filter, which OneRepMaxLog to fetch.
     */
    where?: OneRepMaxLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OneRepMaxLogs to fetch.
     */
    orderBy?: OneRepMaxLogOrderByWithRelationInput | OneRepMaxLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OneRepMaxLogs.
     */
    cursor?: OneRepMaxLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OneRepMaxLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OneRepMaxLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OneRepMaxLogs.
     */
    distinct?: OneRepMaxLogScalarFieldEnum | OneRepMaxLogScalarFieldEnum[]
  }

  /**
   * OneRepMaxLog findMany
   */
  export type OneRepMaxLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OneRepMaxLog
     */
    select?: OneRepMaxLogSelect<ExtArgs> | null
    /**
     * Filter, which OneRepMaxLogs to fetch.
     */
    where?: OneRepMaxLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OneRepMaxLogs to fetch.
     */
    orderBy?: OneRepMaxLogOrderByWithRelationInput | OneRepMaxLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OneRepMaxLogs.
     */
    cursor?: OneRepMaxLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OneRepMaxLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OneRepMaxLogs.
     */
    skip?: number
    distinct?: OneRepMaxLogScalarFieldEnum | OneRepMaxLogScalarFieldEnum[]
  }

  /**
   * OneRepMaxLog create
   */
  export type OneRepMaxLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OneRepMaxLog
     */
    select?: OneRepMaxLogSelect<ExtArgs> | null
    /**
     * The data needed to create a OneRepMaxLog.
     */
    data: XOR<OneRepMaxLogCreateInput, OneRepMaxLogUncheckedCreateInput>
  }

  /**
   * OneRepMaxLog createMany
   */
  export type OneRepMaxLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OneRepMaxLogs.
     */
    data: OneRepMaxLogCreateManyInput | OneRepMaxLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OneRepMaxLog createManyAndReturn
   */
  export type OneRepMaxLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OneRepMaxLog
     */
    select?: OneRepMaxLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OneRepMaxLogs.
     */
    data: OneRepMaxLogCreateManyInput | OneRepMaxLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OneRepMaxLog update
   */
  export type OneRepMaxLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OneRepMaxLog
     */
    select?: OneRepMaxLogSelect<ExtArgs> | null
    /**
     * The data needed to update a OneRepMaxLog.
     */
    data: XOR<OneRepMaxLogUpdateInput, OneRepMaxLogUncheckedUpdateInput>
    /**
     * Choose, which OneRepMaxLog to update.
     */
    where: OneRepMaxLogWhereUniqueInput
  }

  /**
   * OneRepMaxLog updateMany
   */
  export type OneRepMaxLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OneRepMaxLogs.
     */
    data: XOR<OneRepMaxLogUpdateManyMutationInput, OneRepMaxLogUncheckedUpdateManyInput>
    /**
     * Filter which OneRepMaxLogs to update
     */
    where?: OneRepMaxLogWhereInput
  }

  /**
   * OneRepMaxLog upsert
   */
  export type OneRepMaxLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OneRepMaxLog
     */
    select?: OneRepMaxLogSelect<ExtArgs> | null
    /**
     * The filter to search for the OneRepMaxLog to update in case it exists.
     */
    where: OneRepMaxLogWhereUniqueInput
    /**
     * In case the OneRepMaxLog found by the `where` argument doesn't exist, create a new OneRepMaxLog with this data.
     */
    create: XOR<OneRepMaxLogCreateInput, OneRepMaxLogUncheckedCreateInput>
    /**
     * In case the OneRepMaxLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OneRepMaxLogUpdateInput, OneRepMaxLogUncheckedUpdateInput>
  }

  /**
   * OneRepMaxLog delete
   */
  export type OneRepMaxLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OneRepMaxLog
     */
    select?: OneRepMaxLogSelect<ExtArgs> | null
    /**
     * Filter which OneRepMaxLog to delete.
     */
    where: OneRepMaxLogWhereUniqueInput
  }

  /**
   * OneRepMaxLog deleteMany
   */
  export type OneRepMaxLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OneRepMaxLogs to delete
     */
    where?: OneRepMaxLogWhereInput
  }

  /**
   * OneRepMaxLog without action
   */
  export type OneRepMaxLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OneRepMaxLog
     */
    select?: OneRepMaxLogSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WorkoutScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    title: 'title',
    duration: 'duration',
    intensity: 'intensity',
    splitType: 'splitType',
    muscleGroups: 'muscleGroups',
    caloriesBurned: 'caloriesBurned',
    totalVolume: 'totalVolume',
    notes: 'notes',
    scheduledAt: 'scheduledAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkoutScalarFieldEnum = (typeof WorkoutScalarFieldEnum)[keyof typeof WorkoutScalarFieldEnum]


  export const ExerciseScalarFieldEnum: {
    id: 'id',
    workoutId: 'workoutId',
    name: 'name',
    muscleGroup: 'muscleGroup',
    sets: 'sets',
    reps: 'reps',
    weightKg: 'weightKg',
    distanceKm: 'distanceKm',
    durationSecs: 'durationSecs',
    restSecs: 'restSecs',
    order: 'order'
  };

  export type ExerciseScalarFieldEnum = (typeof ExerciseScalarFieldEnum)[keyof typeof ExerciseScalarFieldEnum]


  export const LibraryExerciseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    muscleGroup: 'muscleGroup',
    equipment: 'equipment',
    instructions: 'instructions',
    createdAt: 'createdAt'
  };

  export type LibraryExerciseScalarFieldEnum = (typeof LibraryExerciseScalarFieldEnum)[keyof typeof LibraryExerciseScalarFieldEnum]


  export const WorkoutRoutineScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    splitType: 'splitType',
    muscleGroups: 'muscleGroups',
    exercises: 'exercises',
    createdAt: 'createdAt'
  };

  export type WorkoutRoutineScalarFieldEnum = (typeof WorkoutRoutineScalarFieldEnum)[keyof typeof WorkoutRoutineScalarFieldEnum]


  export const OneRepMaxLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    exerciseName: 'exerciseName',
    weightKg: 'weightKg',
    estimated1RMKg: 'estimated1RMKg',
    date: 'date',
    createdAt: 'createdAt'
  };

  export type OneRepMaxLogScalarFieldEnum = (typeof OneRepMaxLogScalarFieldEnum)[keyof typeof OneRepMaxLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type WorkoutWhereInput = {
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    id?: StringFilter<"Workout"> | string
    userId?: StringFilter<"Workout"> | string
    type?: StringFilter<"Workout"> | string
    title?: StringFilter<"Workout"> | string
    duration?: IntFilter<"Workout"> | number
    intensity?: StringFilter<"Workout"> | string
    splitType?: StringNullableFilter<"Workout"> | string | null
    muscleGroups?: StringNullableListFilter<"Workout">
    caloriesBurned?: IntNullableFilter<"Workout"> | number | null
    totalVolume?: FloatNullableFilter<"Workout"> | number | null
    notes?: StringNullableFilter<"Workout"> | string | null
    scheduledAt?: DateTimeNullableFilter<"Workout"> | Date | string | null
    completedAt?: DateTimeFilter<"Workout"> | Date | string
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    updatedAt?: DateTimeFilter<"Workout"> | Date | string
    exercises?: ExerciseListRelationFilter
  }

  export type WorkoutOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    intensity?: SortOrder
    splitType?: SortOrderInput | SortOrder
    muscleGroups?: SortOrder
    caloriesBurned?: SortOrderInput | SortOrder
    totalVolume?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    exercises?: ExerciseOrderByRelationAggregateInput
  }

  export type WorkoutWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkoutWhereInput | WorkoutWhereInput[]
    OR?: WorkoutWhereInput[]
    NOT?: WorkoutWhereInput | WorkoutWhereInput[]
    userId?: StringFilter<"Workout"> | string
    type?: StringFilter<"Workout"> | string
    title?: StringFilter<"Workout"> | string
    duration?: IntFilter<"Workout"> | number
    intensity?: StringFilter<"Workout"> | string
    splitType?: StringNullableFilter<"Workout"> | string | null
    muscleGroups?: StringNullableListFilter<"Workout">
    caloriesBurned?: IntNullableFilter<"Workout"> | number | null
    totalVolume?: FloatNullableFilter<"Workout"> | number | null
    notes?: StringNullableFilter<"Workout"> | string | null
    scheduledAt?: DateTimeNullableFilter<"Workout"> | Date | string | null
    completedAt?: DateTimeFilter<"Workout"> | Date | string
    createdAt?: DateTimeFilter<"Workout"> | Date | string
    updatedAt?: DateTimeFilter<"Workout"> | Date | string
    exercises?: ExerciseListRelationFilter
  }, "id">

  export type WorkoutOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    intensity?: SortOrder
    splitType?: SortOrderInput | SortOrder
    muscleGroups?: SortOrder
    caloriesBurned?: SortOrderInput | SortOrder
    totalVolume?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkoutCountOrderByAggregateInput
    _avg?: WorkoutAvgOrderByAggregateInput
    _max?: WorkoutMaxOrderByAggregateInput
    _min?: WorkoutMinOrderByAggregateInput
    _sum?: WorkoutSumOrderByAggregateInput
  }

  export type WorkoutScalarWhereWithAggregatesInput = {
    AND?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    OR?: WorkoutScalarWhereWithAggregatesInput[]
    NOT?: WorkoutScalarWhereWithAggregatesInput | WorkoutScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workout"> | string
    userId?: StringWithAggregatesFilter<"Workout"> | string
    type?: StringWithAggregatesFilter<"Workout"> | string
    title?: StringWithAggregatesFilter<"Workout"> | string
    duration?: IntWithAggregatesFilter<"Workout"> | number
    intensity?: StringWithAggregatesFilter<"Workout"> | string
    splitType?: StringNullableWithAggregatesFilter<"Workout"> | string | null
    muscleGroups?: StringNullableListFilter<"Workout">
    caloriesBurned?: IntNullableWithAggregatesFilter<"Workout"> | number | null
    totalVolume?: FloatNullableWithAggregatesFilter<"Workout"> | number | null
    notes?: StringNullableWithAggregatesFilter<"Workout"> | string | null
    scheduledAt?: DateTimeNullableWithAggregatesFilter<"Workout"> | Date | string | null
    completedAt?: DateTimeWithAggregatesFilter<"Workout"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Workout"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Workout"> | Date | string
  }

  export type ExerciseWhereInput = {
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    id?: StringFilter<"Exercise"> | string
    workoutId?: StringFilter<"Exercise"> | string
    name?: StringFilter<"Exercise"> | string
    muscleGroup?: StringFilter<"Exercise"> | string
    sets?: IntNullableFilter<"Exercise"> | number | null
    reps?: IntNullableFilter<"Exercise"> | number | null
    weightKg?: FloatNullableFilter<"Exercise"> | number | null
    distanceKm?: FloatNullableFilter<"Exercise"> | number | null
    durationSecs?: IntNullableFilter<"Exercise"> | number | null
    restSecs?: IntNullableFilter<"Exercise"> | number | null
    order?: IntFilter<"Exercise"> | number
    workout?: XOR<WorkoutRelationFilter, WorkoutWhereInput>
  }

  export type ExerciseOrderByWithRelationInput = {
    id?: SortOrder
    workoutId?: SortOrder
    name?: SortOrder
    muscleGroup?: SortOrder
    sets?: SortOrderInput | SortOrder
    reps?: SortOrderInput | SortOrder
    weightKg?: SortOrderInput | SortOrder
    distanceKm?: SortOrderInput | SortOrder
    durationSecs?: SortOrderInput | SortOrder
    restSecs?: SortOrderInput | SortOrder
    order?: SortOrder
    workout?: WorkoutOrderByWithRelationInput
  }

  export type ExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExerciseWhereInput | ExerciseWhereInput[]
    OR?: ExerciseWhereInput[]
    NOT?: ExerciseWhereInput | ExerciseWhereInput[]
    workoutId?: StringFilter<"Exercise"> | string
    name?: StringFilter<"Exercise"> | string
    muscleGroup?: StringFilter<"Exercise"> | string
    sets?: IntNullableFilter<"Exercise"> | number | null
    reps?: IntNullableFilter<"Exercise"> | number | null
    weightKg?: FloatNullableFilter<"Exercise"> | number | null
    distanceKm?: FloatNullableFilter<"Exercise"> | number | null
    durationSecs?: IntNullableFilter<"Exercise"> | number | null
    restSecs?: IntNullableFilter<"Exercise"> | number | null
    order?: IntFilter<"Exercise"> | number
    workout?: XOR<WorkoutRelationFilter, WorkoutWhereInput>
  }, "id">

  export type ExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    workoutId?: SortOrder
    name?: SortOrder
    muscleGroup?: SortOrder
    sets?: SortOrderInput | SortOrder
    reps?: SortOrderInput | SortOrder
    weightKg?: SortOrderInput | SortOrder
    distanceKm?: SortOrderInput | SortOrder
    durationSecs?: SortOrderInput | SortOrder
    restSecs?: SortOrderInput | SortOrder
    order?: SortOrder
    _count?: ExerciseCountOrderByAggregateInput
    _avg?: ExerciseAvgOrderByAggregateInput
    _max?: ExerciseMaxOrderByAggregateInput
    _min?: ExerciseMinOrderByAggregateInput
    _sum?: ExerciseSumOrderByAggregateInput
  }

  export type ExerciseScalarWhereWithAggregatesInput = {
    AND?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    OR?: ExerciseScalarWhereWithAggregatesInput[]
    NOT?: ExerciseScalarWhereWithAggregatesInput | ExerciseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exercise"> | string
    workoutId?: StringWithAggregatesFilter<"Exercise"> | string
    name?: StringWithAggregatesFilter<"Exercise"> | string
    muscleGroup?: StringWithAggregatesFilter<"Exercise"> | string
    sets?: IntNullableWithAggregatesFilter<"Exercise"> | number | null
    reps?: IntNullableWithAggregatesFilter<"Exercise"> | number | null
    weightKg?: FloatNullableWithAggregatesFilter<"Exercise"> | number | null
    distanceKm?: FloatNullableWithAggregatesFilter<"Exercise"> | number | null
    durationSecs?: IntNullableWithAggregatesFilter<"Exercise"> | number | null
    restSecs?: IntNullableWithAggregatesFilter<"Exercise"> | number | null
    order?: IntWithAggregatesFilter<"Exercise"> | number
  }

  export type LibraryExerciseWhereInput = {
    AND?: LibraryExerciseWhereInput | LibraryExerciseWhereInput[]
    OR?: LibraryExerciseWhereInput[]
    NOT?: LibraryExerciseWhereInput | LibraryExerciseWhereInput[]
    id?: StringFilter<"LibraryExercise"> | string
    name?: StringFilter<"LibraryExercise"> | string
    muscleGroup?: StringFilter<"LibraryExercise"> | string
    equipment?: StringNullableFilter<"LibraryExercise"> | string | null
    instructions?: StringNullableFilter<"LibraryExercise"> | string | null
    createdAt?: DateTimeFilter<"LibraryExercise"> | Date | string
  }

  export type LibraryExerciseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    muscleGroup?: SortOrder
    equipment?: SortOrderInput | SortOrder
    instructions?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type LibraryExerciseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: LibraryExerciseWhereInput | LibraryExerciseWhereInput[]
    OR?: LibraryExerciseWhereInput[]
    NOT?: LibraryExerciseWhereInput | LibraryExerciseWhereInput[]
    muscleGroup?: StringFilter<"LibraryExercise"> | string
    equipment?: StringNullableFilter<"LibraryExercise"> | string | null
    instructions?: StringNullableFilter<"LibraryExercise"> | string | null
    createdAt?: DateTimeFilter<"LibraryExercise"> | Date | string
  }, "id" | "name">

  export type LibraryExerciseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    muscleGroup?: SortOrder
    equipment?: SortOrderInput | SortOrder
    instructions?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LibraryExerciseCountOrderByAggregateInput
    _max?: LibraryExerciseMaxOrderByAggregateInput
    _min?: LibraryExerciseMinOrderByAggregateInput
  }

  export type LibraryExerciseScalarWhereWithAggregatesInput = {
    AND?: LibraryExerciseScalarWhereWithAggregatesInput | LibraryExerciseScalarWhereWithAggregatesInput[]
    OR?: LibraryExerciseScalarWhereWithAggregatesInput[]
    NOT?: LibraryExerciseScalarWhereWithAggregatesInput | LibraryExerciseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LibraryExercise"> | string
    name?: StringWithAggregatesFilter<"LibraryExercise"> | string
    muscleGroup?: StringWithAggregatesFilter<"LibraryExercise"> | string
    equipment?: StringNullableWithAggregatesFilter<"LibraryExercise"> | string | null
    instructions?: StringNullableWithAggregatesFilter<"LibraryExercise"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LibraryExercise"> | Date | string
  }

  export type WorkoutRoutineWhereInput = {
    AND?: WorkoutRoutineWhereInput | WorkoutRoutineWhereInput[]
    OR?: WorkoutRoutineWhereInput[]
    NOT?: WorkoutRoutineWhereInput | WorkoutRoutineWhereInput[]
    id?: StringFilter<"WorkoutRoutine"> | string
    userId?: StringNullableFilter<"WorkoutRoutine"> | string | null
    title?: StringFilter<"WorkoutRoutine"> | string
    description?: StringNullableFilter<"WorkoutRoutine"> | string | null
    splitType?: StringNullableFilter<"WorkoutRoutine"> | string | null
    muscleGroups?: StringNullableListFilter<"WorkoutRoutine">
    exercises?: JsonFilter<"WorkoutRoutine">
    createdAt?: DateTimeFilter<"WorkoutRoutine"> | Date | string
  }

  export type WorkoutRoutineOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    splitType?: SortOrderInput | SortOrder
    muscleGroups?: SortOrder
    exercises?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkoutRoutineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkoutRoutineWhereInput | WorkoutRoutineWhereInput[]
    OR?: WorkoutRoutineWhereInput[]
    NOT?: WorkoutRoutineWhereInput | WorkoutRoutineWhereInput[]
    userId?: StringNullableFilter<"WorkoutRoutine"> | string | null
    title?: StringFilter<"WorkoutRoutine"> | string
    description?: StringNullableFilter<"WorkoutRoutine"> | string | null
    splitType?: StringNullableFilter<"WorkoutRoutine"> | string | null
    muscleGroups?: StringNullableListFilter<"WorkoutRoutine">
    exercises?: JsonFilter<"WorkoutRoutine">
    createdAt?: DateTimeFilter<"WorkoutRoutine"> | Date | string
  }, "id">

  export type WorkoutRoutineOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    splitType?: SortOrderInput | SortOrder
    muscleGroups?: SortOrder
    exercises?: SortOrder
    createdAt?: SortOrder
    _count?: WorkoutRoutineCountOrderByAggregateInput
    _max?: WorkoutRoutineMaxOrderByAggregateInput
    _min?: WorkoutRoutineMinOrderByAggregateInput
  }

  export type WorkoutRoutineScalarWhereWithAggregatesInput = {
    AND?: WorkoutRoutineScalarWhereWithAggregatesInput | WorkoutRoutineScalarWhereWithAggregatesInput[]
    OR?: WorkoutRoutineScalarWhereWithAggregatesInput[]
    NOT?: WorkoutRoutineScalarWhereWithAggregatesInput | WorkoutRoutineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkoutRoutine"> | string
    userId?: StringNullableWithAggregatesFilter<"WorkoutRoutine"> | string | null
    title?: StringWithAggregatesFilter<"WorkoutRoutine"> | string
    description?: StringNullableWithAggregatesFilter<"WorkoutRoutine"> | string | null
    splitType?: StringNullableWithAggregatesFilter<"WorkoutRoutine"> | string | null
    muscleGroups?: StringNullableListFilter<"WorkoutRoutine">
    exercises?: JsonWithAggregatesFilter<"WorkoutRoutine">
    createdAt?: DateTimeWithAggregatesFilter<"WorkoutRoutine"> | Date | string
  }

  export type OneRepMaxLogWhereInput = {
    AND?: OneRepMaxLogWhereInput | OneRepMaxLogWhereInput[]
    OR?: OneRepMaxLogWhereInput[]
    NOT?: OneRepMaxLogWhereInput | OneRepMaxLogWhereInput[]
    id?: StringFilter<"OneRepMaxLog"> | string
    userId?: StringFilter<"OneRepMaxLog"> | string
    exerciseName?: StringFilter<"OneRepMaxLog"> | string
    weightKg?: FloatFilter<"OneRepMaxLog"> | number
    estimated1RMKg?: FloatFilter<"OneRepMaxLog"> | number
    date?: DateTimeFilter<"OneRepMaxLog"> | Date | string
    createdAt?: DateTimeFilter<"OneRepMaxLog"> | Date | string
  }

  export type OneRepMaxLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    exerciseName?: SortOrder
    weightKg?: SortOrder
    estimated1RMKg?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type OneRepMaxLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OneRepMaxLogWhereInput | OneRepMaxLogWhereInput[]
    OR?: OneRepMaxLogWhereInput[]
    NOT?: OneRepMaxLogWhereInput | OneRepMaxLogWhereInput[]
    userId?: StringFilter<"OneRepMaxLog"> | string
    exerciseName?: StringFilter<"OneRepMaxLog"> | string
    weightKg?: FloatFilter<"OneRepMaxLog"> | number
    estimated1RMKg?: FloatFilter<"OneRepMaxLog"> | number
    date?: DateTimeFilter<"OneRepMaxLog"> | Date | string
    createdAt?: DateTimeFilter<"OneRepMaxLog"> | Date | string
  }, "id">

  export type OneRepMaxLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    exerciseName?: SortOrder
    weightKg?: SortOrder
    estimated1RMKg?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    _count?: OneRepMaxLogCountOrderByAggregateInput
    _avg?: OneRepMaxLogAvgOrderByAggregateInput
    _max?: OneRepMaxLogMaxOrderByAggregateInput
    _min?: OneRepMaxLogMinOrderByAggregateInput
    _sum?: OneRepMaxLogSumOrderByAggregateInput
  }

  export type OneRepMaxLogScalarWhereWithAggregatesInput = {
    AND?: OneRepMaxLogScalarWhereWithAggregatesInput | OneRepMaxLogScalarWhereWithAggregatesInput[]
    OR?: OneRepMaxLogScalarWhereWithAggregatesInput[]
    NOT?: OneRepMaxLogScalarWhereWithAggregatesInput | OneRepMaxLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OneRepMaxLog"> | string
    userId?: StringWithAggregatesFilter<"OneRepMaxLog"> | string
    exerciseName?: StringWithAggregatesFilter<"OneRepMaxLog"> | string
    weightKg?: FloatWithAggregatesFilter<"OneRepMaxLog"> | number
    estimated1RMKg?: FloatWithAggregatesFilter<"OneRepMaxLog"> | number
    date?: DateTimeWithAggregatesFilter<"OneRepMaxLog"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"OneRepMaxLog"> | Date | string
  }

  export type WorkoutCreateInput = {
    id?: string
    userId: string
    type: string
    title: string
    duration: number
    intensity: string
    splitType?: string | null
    muscleGroups?: WorkoutCreatemuscleGroupsInput | string[]
    caloriesBurned?: number | null
    totalVolume?: number | null
    notes?: string | null
    scheduledAt?: Date | string | null
    completedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    exercises?: ExerciseCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    title: string
    duration: number
    intensity: string
    splitType?: string | null
    muscleGroups?: WorkoutCreatemuscleGroupsInput | string[]
    caloriesBurned?: number | null
    totalVolume?: number | null
    notes?: string | null
    scheduledAt?: Date | string | null
    completedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    exercises?: ExerciseUncheckedCreateNestedManyWithoutWorkoutInput
  }

  export type WorkoutUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    intensity?: StringFieldUpdateOperationsInput | string
    splitType?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroups?: WorkoutUpdatemuscleGroupsInput | string[]
    caloriesBurned?: NullableIntFieldUpdateOperationsInput | number | null
    totalVolume?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: ExerciseUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    intensity?: StringFieldUpdateOperationsInput | string
    splitType?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroups?: WorkoutUpdatemuscleGroupsInput | string[]
    caloriesBurned?: NullableIntFieldUpdateOperationsInput | number | null
    totalVolume?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exercises?: ExerciseUncheckedUpdateManyWithoutWorkoutNestedInput
  }

  export type WorkoutCreateManyInput = {
    id?: string
    userId: string
    type: string
    title: string
    duration: number
    intensity: string
    splitType?: string | null
    muscleGroups?: WorkoutCreatemuscleGroupsInput | string[]
    caloriesBurned?: number | null
    totalVolume?: number | null
    notes?: string | null
    scheduledAt?: Date | string | null
    completedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkoutUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    intensity?: StringFieldUpdateOperationsInput | string
    splitType?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroups?: WorkoutUpdatemuscleGroupsInput | string[]
    caloriesBurned?: NullableIntFieldUpdateOperationsInput | number | null
    totalVolume?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    intensity?: StringFieldUpdateOperationsInput | string
    splitType?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroups?: WorkoutUpdatemuscleGroupsInput | string[]
    caloriesBurned?: NullableIntFieldUpdateOperationsInput | number | null
    totalVolume?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseCreateInput = {
    id?: string
    name: string
    muscleGroup?: string
    sets?: number | null
    reps?: number | null
    weightKg?: number | null
    distanceKm?: number | null
    durationSecs?: number | null
    restSecs?: number | null
    order?: number
    workout: WorkoutCreateNestedOneWithoutExercisesInput
  }

  export type ExerciseUncheckedCreateInput = {
    id?: string
    workoutId: string
    name: string
    muscleGroup?: string
    sets?: number | null
    reps?: number | null
    weightKg?: number | null
    distanceKm?: number | null
    durationSecs?: number | null
    restSecs?: number | null
    order?: number
  }

  export type ExerciseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    distanceKm?: NullableFloatFieldUpdateOperationsInput | number | null
    durationSecs?: NullableIntFieldUpdateOperationsInput | number | null
    restSecs?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
    workout?: WorkoutUpdateOneRequiredWithoutExercisesNestedInput
  }

  export type ExerciseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    distanceKm?: NullableFloatFieldUpdateOperationsInput | number | null
    durationSecs?: NullableIntFieldUpdateOperationsInput | number | null
    restSecs?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ExerciseCreateManyInput = {
    id?: string
    workoutId: string
    name: string
    muscleGroup?: string
    sets?: number | null
    reps?: number | null
    weightKg?: number | null
    distanceKm?: number | null
    durationSecs?: number | null
    restSecs?: number | null
    order?: number
  }

  export type ExerciseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    distanceKm?: NullableFloatFieldUpdateOperationsInput | number | null
    durationSecs?: NullableIntFieldUpdateOperationsInput | number | null
    restSecs?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ExerciseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workoutId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    distanceKm?: NullableFloatFieldUpdateOperationsInput | number | null
    durationSecs?: NullableIntFieldUpdateOperationsInput | number | null
    restSecs?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type LibraryExerciseCreateInput = {
    id?: string
    name: string
    muscleGroup: string
    equipment?: string | null
    instructions?: string | null
    createdAt?: Date | string
  }

  export type LibraryExerciseUncheckedCreateInput = {
    id?: string
    name: string
    muscleGroup: string
    equipment?: string | null
    instructions?: string | null
    createdAt?: Date | string
  }

  export type LibraryExerciseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LibraryExerciseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LibraryExerciseCreateManyInput = {
    id?: string
    name: string
    muscleGroup: string
    equipment?: string | null
    instructions?: string | null
    createdAt?: Date | string
  }

  export type LibraryExerciseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LibraryExerciseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    equipment?: NullableStringFieldUpdateOperationsInput | string | null
    instructions?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutRoutineCreateInput = {
    id?: string
    userId?: string | null
    title: string
    description?: string | null
    splitType?: string | null
    muscleGroups?: WorkoutRoutineCreatemuscleGroupsInput | string[]
    exercises: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WorkoutRoutineUncheckedCreateInput = {
    id?: string
    userId?: string | null
    title: string
    description?: string | null
    splitType?: string | null
    muscleGroups?: WorkoutRoutineCreatemuscleGroupsInput | string[]
    exercises: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WorkoutRoutineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroups?: WorkoutRoutineUpdatemuscleGroupsInput | string[]
    exercises?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutRoutineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroups?: WorkoutRoutineUpdatemuscleGroupsInput | string[]
    exercises?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutRoutineCreateManyInput = {
    id?: string
    userId?: string | null
    title: string
    description?: string | null
    splitType?: string | null
    muscleGroups?: WorkoutRoutineCreatemuscleGroupsInput | string[]
    exercises: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WorkoutRoutineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroups?: WorkoutRoutineUpdatemuscleGroupsInput | string[]
    exercises?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutRoutineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    splitType?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroups?: WorkoutRoutineUpdatemuscleGroupsInput | string[]
    exercises?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OneRepMaxLogCreateInput = {
    id?: string
    userId: string
    exerciseName: string
    weightKg: number
    estimated1RMKg: number
    date: Date | string
    createdAt?: Date | string
  }

  export type OneRepMaxLogUncheckedCreateInput = {
    id?: string
    userId: string
    exerciseName: string
    weightKg: number
    estimated1RMKg: number
    date: Date | string
    createdAt?: Date | string
  }

  export type OneRepMaxLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    exerciseName?: StringFieldUpdateOperationsInput | string
    weightKg?: FloatFieldUpdateOperationsInput | number
    estimated1RMKg?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OneRepMaxLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    exerciseName?: StringFieldUpdateOperationsInput | string
    weightKg?: FloatFieldUpdateOperationsInput | number
    estimated1RMKg?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OneRepMaxLogCreateManyInput = {
    id?: string
    userId: string
    exerciseName: string
    weightKg: number
    estimated1RMKg: number
    date: Date | string
    createdAt?: Date | string
  }

  export type OneRepMaxLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    exerciseName?: StringFieldUpdateOperationsInput | string
    weightKg?: FloatFieldUpdateOperationsInput | number
    estimated1RMKg?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OneRepMaxLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    exerciseName?: StringFieldUpdateOperationsInput | string
    weightKg?: FloatFieldUpdateOperationsInput | number
    estimated1RMKg?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ExerciseListRelationFilter = {
    every?: ExerciseWhereInput
    some?: ExerciseWhereInput
    none?: ExerciseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ExerciseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkoutCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    intensity?: SortOrder
    splitType?: SortOrder
    muscleGroups?: SortOrder
    caloriesBurned?: SortOrder
    totalVolume?: SortOrder
    notes?: SortOrder
    scheduledAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkoutAvgOrderByAggregateInput = {
    duration?: SortOrder
    caloriesBurned?: SortOrder
    totalVolume?: SortOrder
  }

  export type WorkoutMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    intensity?: SortOrder
    splitType?: SortOrder
    caloriesBurned?: SortOrder
    totalVolume?: SortOrder
    notes?: SortOrder
    scheduledAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkoutMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    duration?: SortOrder
    intensity?: SortOrder
    splitType?: SortOrder
    caloriesBurned?: SortOrder
    totalVolume?: SortOrder
    notes?: SortOrder
    scheduledAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkoutSumOrderByAggregateInput = {
    duration?: SortOrder
    caloriesBurned?: SortOrder
    totalVolume?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type WorkoutRelationFilter = {
    is?: WorkoutWhereInput
    isNot?: WorkoutWhereInput
  }

  export type ExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    name?: SortOrder
    muscleGroup?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weightKg?: SortOrder
    distanceKm?: SortOrder
    durationSecs?: SortOrder
    restSecs?: SortOrder
    order?: SortOrder
  }

  export type ExerciseAvgOrderByAggregateInput = {
    sets?: SortOrder
    reps?: SortOrder
    weightKg?: SortOrder
    distanceKm?: SortOrder
    durationSecs?: SortOrder
    restSecs?: SortOrder
    order?: SortOrder
  }

  export type ExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    name?: SortOrder
    muscleGroup?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weightKg?: SortOrder
    distanceKm?: SortOrder
    durationSecs?: SortOrder
    restSecs?: SortOrder
    order?: SortOrder
  }

  export type ExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    workoutId?: SortOrder
    name?: SortOrder
    muscleGroup?: SortOrder
    sets?: SortOrder
    reps?: SortOrder
    weightKg?: SortOrder
    distanceKm?: SortOrder
    durationSecs?: SortOrder
    restSecs?: SortOrder
    order?: SortOrder
  }

  export type ExerciseSumOrderByAggregateInput = {
    sets?: SortOrder
    reps?: SortOrder
    weightKg?: SortOrder
    distanceKm?: SortOrder
    durationSecs?: SortOrder
    restSecs?: SortOrder
    order?: SortOrder
  }

  export type LibraryExerciseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    muscleGroup?: SortOrder
    equipment?: SortOrder
    instructions?: SortOrder
    createdAt?: SortOrder
  }

  export type LibraryExerciseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    muscleGroup?: SortOrder
    equipment?: SortOrder
    instructions?: SortOrder
    createdAt?: SortOrder
  }

  export type LibraryExerciseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    muscleGroup?: SortOrder
    equipment?: SortOrder
    instructions?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WorkoutRoutineCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    splitType?: SortOrder
    muscleGroups?: SortOrder
    exercises?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkoutRoutineMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    splitType?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkoutRoutineMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    splitType?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type OneRepMaxLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    exerciseName?: SortOrder
    weightKg?: SortOrder
    estimated1RMKg?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type OneRepMaxLogAvgOrderByAggregateInput = {
    weightKg?: SortOrder
    estimated1RMKg?: SortOrder
  }

  export type OneRepMaxLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    exerciseName?: SortOrder
    weightKg?: SortOrder
    estimated1RMKg?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type OneRepMaxLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    exerciseName?: SortOrder
    weightKg?: SortOrder
    estimated1RMKg?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type OneRepMaxLogSumOrderByAggregateInput = {
    weightKg?: SortOrder
    estimated1RMKg?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type WorkoutCreatemuscleGroupsInput = {
    set: string[]
  }

  export type ExerciseCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutInput, ExerciseUncheckedCreateWithoutWorkoutInput> | ExerciseCreateWithoutWorkoutInput[] | ExerciseUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutInput | ExerciseCreateOrConnectWithoutWorkoutInput[]
    createMany?: ExerciseCreateManyWorkoutInputEnvelope
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type ExerciseUncheckedCreateNestedManyWithoutWorkoutInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutInput, ExerciseUncheckedCreateWithoutWorkoutInput> | ExerciseCreateWithoutWorkoutInput[] | ExerciseUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutInput | ExerciseCreateOrConnectWithoutWorkoutInput[]
    createMany?: ExerciseCreateManyWorkoutInputEnvelope
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type WorkoutUpdatemuscleGroupsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ExerciseUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutInput, ExerciseUncheckedCreateWithoutWorkoutInput> | ExerciseCreateWithoutWorkoutInput[] | ExerciseUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutInput | ExerciseCreateOrConnectWithoutWorkoutInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutWorkoutInput | ExerciseUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: ExerciseCreateManyWorkoutInputEnvelope
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutWorkoutInput | ExerciseUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutWorkoutInput | ExerciseUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type ExerciseUncheckedUpdateManyWithoutWorkoutNestedInput = {
    create?: XOR<ExerciseCreateWithoutWorkoutInput, ExerciseUncheckedCreateWithoutWorkoutInput> | ExerciseCreateWithoutWorkoutInput[] | ExerciseUncheckedCreateWithoutWorkoutInput[]
    connectOrCreate?: ExerciseCreateOrConnectWithoutWorkoutInput | ExerciseCreateOrConnectWithoutWorkoutInput[]
    upsert?: ExerciseUpsertWithWhereUniqueWithoutWorkoutInput | ExerciseUpsertWithWhereUniqueWithoutWorkoutInput[]
    createMany?: ExerciseCreateManyWorkoutInputEnvelope
    set?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    disconnect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    delete?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    connect?: ExerciseWhereUniqueInput | ExerciseWhereUniqueInput[]
    update?: ExerciseUpdateWithWhereUniqueWithoutWorkoutInput | ExerciseUpdateWithWhereUniqueWithoutWorkoutInput[]
    updateMany?: ExerciseUpdateManyWithWhereWithoutWorkoutInput | ExerciseUpdateManyWithWhereWithoutWorkoutInput[]
    deleteMany?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
  }

  export type WorkoutCreateNestedOneWithoutExercisesInput = {
    create?: XOR<WorkoutCreateWithoutExercisesInput, WorkoutUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutExercisesInput
    connect?: WorkoutWhereUniqueInput
  }

  export type WorkoutUpdateOneRequiredWithoutExercisesNestedInput = {
    create?: XOR<WorkoutCreateWithoutExercisesInput, WorkoutUncheckedCreateWithoutExercisesInput>
    connectOrCreate?: WorkoutCreateOrConnectWithoutExercisesInput
    upsert?: WorkoutUpsertWithoutExercisesInput
    connect?: WorkoutWhereUniqueInput
    update?: XOR<XOR<WorkoutUpdateToOneWithWhereWithoutExercisesInput, WorkoutUpdateWithoutExercisesInput>, WorkoutUncheckedUpdateWithoutExercisesInput>
  }

  export type WorkoutRoutineCreatemuscleGroupsInput = {
    set: string[]
  }

  export type WorkoutRoutineUpdatemuscleGroupsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ExerciseCreateWithoutWorkoutInput = {
    id?: string
    name: string
    muscleGroup?: string
    sets?: number | null
    reps?: number | null
    weightKg?: number | null
    distanceKm?: number | null
    durationSecs?: number | null
    restSecs?: number | null
    order?: number
  }

  export type ExerciseUncheckedCreateWithoutWorkoutInput = {
    id?: string
    name: string
    muscleGroup?: string
    sets?: number | null
    reps?: number | null
    weightKg?: number | null
    distanceKm?: number | null
    durationSecs?: number | null
    restSecs?: number | null
    order?: number
  }

  export type ExerciseCreateOrConnectWithoutWorkoutInput = {
    where: ExerciseWhereUniqueInput
    create: XOR<ExerciseCreateWithoutWorkoutInput, ExerciseUncheckedCreateWithoutWorkoutInput>
  }

  export type ExerciseCreateManyWorkoutInputEnvelope = {
    data: ExerciseCreateManyWorkoutInput | ExerciseCreateManyWorkoutInput[]
    skipDuplicates?: boolean
  }

  export type ExerciseUpsertWithWhereUniqueWithoutWorkoutInput = {
    where: ExerciseWhereUniqueInput
    update: XOR<ExerciseUpdateWithoutWorkoutInput, ExerciseUncheckedUpdateWithoutWorkoutInput>
    create: XOR<ExerciseCreateWithoutWorkoutInput, ExerciseUncheckedCreateWithoutWorkoutInput>
  }

  export type ExerciseUpdateWithWhereUniqueWithoutWorkoutInput = {
    where: ExerciseWhereUniqueInput
    data: XOR<ExerciseUpdateWithoutWorkoutInput, ExerciseUncheckedUpdateWithoutWorkoutInput>
  }

  export type ExerciseUpdateManyWithWhereWithoutWorkoutInput = {
    where: ExerciseScalarWhereInput
    data: XOR<ExerciseUpdateManyMutationInput, ExerciseUncheckedUpdateManyWithoutWorkoutInput>
  }

  export type ExerciseScalarWhereInput = {
    AND?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
    OR?: ExerciseScalarWhereInput[]
    NOT?: ExerciseScalarWhereInput | ExerciseScalarWhereInput[]
    id?: StringFilter<"Exercise"> | string
    workoutId?: StringFilter<"Exercise"> | string
    name?: StringFilter<"Exercise"> | string
    muscleGroup?: StringFilter<"Exercise"> | string
    sets?: IntNullableFilter<"Exercise"> | number | null
    reps?: IntNullableFilter<"Exercise"> | number | null
    weightKg?: FloatNullableFilter<"Exercise"> | number | null
    distanceKm?: FloatNullableFilter<"Exercise"> | number | null
    durationSecs?: IntNullableFilter<"Exercise"> | number | null
    restSecs?: IntNullableFilter<"Exercise"> | number | null
    order?: IntFilter<"Exercise"> | number
  }

  export type WorkoutCreateWithoutExercisesInput = {
    id?: string
    userId: string
    type: string
    title: string
    duration: number
    intensity: string
    splitType?: string | null
    muscleGroups?: WorkoutCreatemuscleGroupsInput | string[]
    caloriesBurned?: number | null
    totalVolume?: number | null
    notes?: string | null
    scheduledAt?: Date | string | null
    completedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkoutUncheckedCreateWithoutExercisesInput = {
    id?: string
    userId: string
    type: string
    title: string
    duration: number
    intensity: string
    splitType?: string | null
    muscleGroups?: WorkoutCreatemuscleGroupsInput | string[]
    caloriesBurned?: number | null
    totalVolume?: number | null
    notes?: string | null
    scheduledAt?: Date | string | null
    completedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkoutCreateOrConnectWithoutExercisesInput = {
    where: WorkoutWhereUniqueInput
    create: XOR<WorkoutCreateWithoutExercisesInput, WorkoutUncheckedCreateWithoutExercisesInput>
  }

  export type WorkoutUpsertWithoutExercisesInput = {
    update: XOR<WorkoutUpdateWithoutExercisesInput, WorkoutUncheckedUpdateWithoutExercisesInput>
    create: XOR<WorkoutCreateWithoutExercisesInput, WorkoutUncheckedCreateWithoutExercisesInput>
    where?: WorkoutWhereInput
  }

  export type WorkoutUpdateToOneWithWhereWithoutExercisesInput = {
    where?: WorkoutWhereInput
    data: XOR<WorkoutUpdateWithoutExercisesInput, WorkoutUncheckedUpdateWithoutExercisesInput>
  }

  export type WorkoutUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    intensity?: StringFieldUpdateOperationsInput | string
    splitType?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroups?: WorkoutUpdatemuscleGroupsInput | string[]
    caloriesBurned?: NullableIntFieldUpdateOperationsInput | number | null
    totalVolume?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkoutUncheckedUpdateWithoutExercisesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    intensity?: StringFieldUpdateOperationsInput | string
    splitType?: NullableStringFieldUpdateOperationsInput | string | null
    muscleGroups?: WorkoutUpdatemuscleGroupsInput | string[]
    caloriesBurned?: NullableIntFieldUpdateOperationsInput | number | null
    totalVolume?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExerciseCreateManyWorkoutInput = {
    id?: string
    name: string
    muscleGroup?: string
    sets?: number | null
    reps?: number | null
    weightKg?: number | null
    distanceKm?: number | null
    durationSecs?: number | null
    restSecs?: number | null
    order?: number
  }

  export type ExerciseUpdateWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    distanceKm?: NullableFloatFieldUpdateOperationsInput | number | null
    durationSecs?: NullableIntFieldUpdateOperationsInput | number | null
    restSecs?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ExerciseUncheckedUpdateWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    distanceKm?: NullableFloatFieldUpdateOperationsInput | number | null
    durationSecs?: NullableIntFieldUpdateOperationsInput | number | null
    restSecs?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ExerciseUncheckedUpdateManyWithoutWorkoutInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    muscleGroup?: StringFieldUpdateOperationsInput | string
    sets?: NullableIntFieldUpdateOperationsInput | number | null
    reps?: NullableIntFieldUpdateOperationsInput | number | null
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    distanceKm?: NullableFloatFieldUpdateOperationsInput | number | null
    durationSecs?: NullableIntFieldUpdateOperationsInput | number | null
    restSecs?: NullableIntFieldUpdateOperationsInput | number | null
    order?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use WorkoutCountOutputTypeDefaultArgs instead
     */
    export type WorkoutCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkoutCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkoutDefaultArgs instead
     */
    export type WorkoutArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkoutDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExerciseDefaultArgs instead
     */
    export type ExerciseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExerciseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LibraryExerciseDefaultArgs instead
     */
    export type LibraryExerciseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LibraryExerciseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkoutRoutineDefaultArgs instead
     */
    export type WorkoutRoutineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkoutRoutineDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OneRepMaxLogDefaultArgs instead
     */
    export type OneRepMaxLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OneRepMaxLogDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}