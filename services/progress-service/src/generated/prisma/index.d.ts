
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
 * Model DailyProgress
 * 
 */
export type DailyProgress = $Result.DefaultSelection<Prisma.$DailyProgressPayload>
/**
 * Model Streak
 * 
 */
export type Streak = $Result.DefaultSelection<Prisma.$StreakPayload>
/**
 * Model BodyMetrics
 * 
 */
export type BodyMetrics = $Result.DefaultSelection<Prisma.$BodyMetricsPayload>
/**
 * Model AiUsageLog
 * 
 */
export type AiUsageLog = $Result.DefaultSelection<Prisma.$AiUsageLogPayload>
/**
 * Model HydrationLog
 * 
 */
export type HydrationLog = $Result.DefaultSelection<Prisma.$HydrationLogPayload>
/**
 * Model PerformanceReport
 * 
 */
export type PerformanceReport = $Result.DefaultSelection<Prisma.$PerformanceReportPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DailyProgresses
 * const dailyProgresses = await prisma.dailyProgress.findMany()
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
   * // Fetch zero or more DailyProgresses
   * const dailyProgresses = await prisma.dailyProgress.findMany()
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
   * `prisma.dailyProgress`: Exposes CRUD operations for the **DailyProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyProgresses
    * const dailyProgresses = await prisma.dailyProgress.findMany()
    * ```
    */
  get dailyProgress(): Prisma.DailyProgressDelegate<ExtArgs>;

  /**
   * `prisma.streak`: Exposes CRUD operations for the **Streak** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Streaks
    * const streaks = await prisma.streak.findMany()
    * ```
    */
  get streak(): Prisma.StreakDelegate<ExtArgs>;

  /**
   * `prisma.bodyMetrics`: Exposes CRUD operations for the **BodyMetrics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BodyMetrics
    * const bodyMetrics = await prisma.bodyMetrics.findMany()
    * ```
    */
  get bodyMetrics(): Prisma.BodyMetricsDelegate<ExtArgs>;

  /**
   * `prisma.aiUsageLog`: Exposes CRUD operations for the **AiUsageLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AiUsageLogs
    * const aiUsageLogs = await prisma.aiUsageLog.findMany()
    * ```
    */
  get aiUsageLog(): Prisma.AiUsageLogDelegate<ExtArgs>;

  /**
   * `prisma.hydrationLog`: Exposes CRUD operations for the **HydrationLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HydrationLogs
    * const hydrationLogs = await prisma.hydrationLog.findMany()
    * ```
    */
  get hydrationLog(): Prisma.HydrationLogDelegate<ExtArgs>;

  /**
   * `prisma.performanceReport`: Exposes CRUD operations for the **PerformanceReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PerformanceReports
    * const performanceReports = await prisma.performanceReport.findMany()
    * ```
    */
  get performanceReport(): Prisma.PerformanceReportDelegate<ExtArgs>;
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
    DailyProgress: 'DailyProgress',
    Streak: 'Streak',
    BodyMetrics: 'BodyMetrics',
    AiUsageLog: 'AiUsageLog',
    HydrationLog: 'HydrationLog',
    PerformanceReport: 'PerformanceReport'
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
      modelProps: "dailyProgress" | "streak" | "bodyMetrics" | "aiUsageLog" | "hydrationLog" | "performanceReport"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      DailyProgress: {
        payload: Prisma.$DailyProgressPayload<ExtArgs>
        fields: Prisma.DailyProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyProgressPayload>
          }
          findFirst: {
            args: Prisma.DailyProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyProgressPayload>
          }
          findMany: {
            args: Prisma.DailyProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyProgressPayload>[]
          }
          create: {
            args: Prisma.DailyProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyProgressPayload>
          }
          createMany: {
            args: Prisma.DailyProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyProgressPayload>[]
          }
          delete: {
            args: Prisma.DailyProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyProgressPayload>
          }
          update: {
            args: Prisma.DailyProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyProgressPayload>
          }
          deleteMany: {
            args: Prisma.DailyProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DailyProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyProgressPayload>
          }
          aggregate: {
            args: Prisma.DailyProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyProgress>
          }
          groupBy: {
            args: Prisma.DailyProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyProgressCountArgs<ExtArgs>
            result: $Utils.Optional<DailyProgressCountAggregateOutputType> | number
          }
        }
      }
      Streak: {
        payload: Prisma.$StreakPayload<ExtArgs>
        fields: Prisma.StreakFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StreakFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StreakFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          findFirst: {
            args: Prisma.StreakFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StreakFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          findMany: {
            args: Prisma.StreakFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>[]
          }
          create: {
            args: Prisma.StreakCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          createMany: {
            args: Prisma.StreakCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StreakCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>[]
          }
          delete: {
            args: Prisma.StreakDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          update: {
            args: Prisma.StreakUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          deleteMany: {
            args: Prisma.StreakDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StreakUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StreakUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreakPayload>
          }
          aggregate: {
            args: Prisma.StreakAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStreak>
          }
          groupBy: {
            args: Prisma.StreakGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreakGroupByOutputType>[]
          }
          count: {
            args: Prisma.StreakCountArgs<ExtArgs>
            result: $Utils.Optional<StreakCountAggregateOutputType> | number
          }
        }
      }
      BodyMetrics: {
        payload: Prisma.$BodyMetricsPayload<ExtArgs>
        fields: Prisma.BodyMetricsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BodyMetricsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMetricsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BodyMetricsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMetricsPayload>
          }
          findFirst: {
            args: Prisma.BodyMetricsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMetricsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BodyMetricsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMetricsPayload>
          }
          findMany: {
            args: Prisma.BodyMetricsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMetricsPayload>[]
          }
          create: {
            args: Prisma.BodyMetricsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMetricsPayload>
          }
          createMany: {
            args: Prisma.BodyMetricsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BodyMetricsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMetricsPayload>[]
          }
          delete: {
            args: Prisma.BodyMetricsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMetricsPayload>
          }
          update: {
            args: Prisma.BodyMetricsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMetricsPayload>
          }
          deleteMany: {
            args: Prisma.BodyMetricsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BodyMetricsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BodyMetricsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BodyMetricsPayload>
          }
          aggregate: {
            args: Prisma.BodyMetricsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBodyMetrics>
          }
          groupBy: {
            args: Prisma.BodyMetricsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BodyMetricsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BodyMetricsCountArgs<ExtArgs>
            result: $Utils.Optional<BodyMetricsCountAggregateOutputType> | number
          }
        }
      }
      AiUsageLog: {
        payload: Prisma.$AiUsageLogPayload<ExtArgs>
        fields: Prisma.AiUsageLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AiUsageLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsageLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AiUsageLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsageLogPayload>
          }
          findFirst: {
            args: Prisma.AiUsageLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsageLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AiUsageLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsageLogPayload>
          }
          findMany: {
            args: Prisma.AiUsageLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsageLogPayload>[]
          }
          create: {
            args: Prisma.AiUsageLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsageLogPayload>
          }
          createMany: {
            args: Prisma.AiUsageLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AiUsageLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsageLogPayload>[]
          }
          delete: {
            args: Prisma.AiUsageLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsageLogPayload>
          }
          update: {
            args: Prisma.AiUsageLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsageLogPayload>
          }
          deleteMany: {
            args: Prisma.AiUsageLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AiUsageLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AiUsageLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AiUsageLogPayload>
          }
          aggregate: {
            args: Prisma.AiUsageLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAiUsageLog>
          }
          groupBy: {
            args: Prisma.AiUsageLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AiUsageLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AiUsageLogCountArgs<ExtArgs>
            result: $Utils.Optional<AiUsageLogCountAggregateOutputType> | number
          }
        }
      }
      HydrationLog: {
        payload: Prisma.$HydrationLogPayload<ExtArgs>
        fields: Prisma.HydrationLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HydrationLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HydrationLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HydrationLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HydrationLogPayload>
          }
          findFirst: {
            args: Prisma.HydrationLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HydrationLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HydrationLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HydrationLogPayload>
          }
          findMany: {
            args: Prisma.HydrationLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HydrationLogPayload>[]
          }
          create: {
            args: Prisma.HydrationLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HydrationLogPayload>
          }
          createMany: {
            args: Prisma.HydrationLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HydrationLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HydrationLogPayload>[]
          }
          delete: {
            args: Prisma.HydrationLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HydrationLogPayload>
          }
          update: {
            args: Prisma.HydrationLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HydrationLogPayload>
          }
          deleteMany: {
            args: Prisma.HydrationLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HydrationLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HydrationLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HydrationLogPayload>
          }
          aggregate: {
            args: Prisma.HydrationLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHydrationLog>
          }
          groupBy: {
            args: Prisma.HydrationLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<HydrationLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.HydrationLogCountArgs<ExtArgs>
            result: $Utils.Optional<HydrationLogCountAggregateOutputType> | number
          }
        }
      }
      PerformanceReport: {
        payload: Prisma.$PerformanceReportPayload<ExtArgs>
        fields: Prisma.PerformanceReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PerformanceReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PerformanceReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceReportPayload>
          }
          findFirst: {
            args: Prisma.PerformanceReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PerformanceReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceReportPayload>
          }
          findMany: {
            args: Prisma.PerformanceReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceReportPayload>[]
          }
          create: {
            args: Prisma.PerformanceReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceReportPayload>
          }
          createMany: {
            args: Prisma.PerformanceReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PerformanceReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceReportPayload>[]
          }
          delete: {
            args: Prisma.PerformanceReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceReportPayload>
          }
          update: {
            args: Prisma.PerformanceReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceReportPayload>
          }
          deleteMany: {
            args: Prisma.PerformanceReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PerformanceReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PerformanceReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerformanceReportPayload>
          }
          aggregate: {
            args: Prisma.PerformanceReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerformanceReport>
          }
          groupBy: {
            args: Prisma.PerformanceReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<PerformanceReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.PerformanceReportCountArgs<ExtArgs>
            result: $Utils.Optional<PerformanceReportCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model DailyProgress
   */

  export type AggregateDailyProgress = {
    _count: DailyProgressCountAggregateOutputType | null
    _avg: DailyProgressAvgAggregateOutputType | null
    _sum: DailyProgressSumAggregateOutputType | null
    _min: DailyProgressMinAggregateOutputType | null
    _max: DailyProgressMaxAggregateOutputType | null
  }

  export type DailyProgressAvgAggregateOutputType = {
    caloriesTarget: number | null
    caloriesActual: number | null
    proteinTarget: number | null
    proteinActual: number | null
    carbsTarget: number | null
    carbsActual: number | null
    fatTarget: number | null
    fatActual: number | null
    mealsLogged: number | null
    fatigueScore: number | null
    hydrationActual: number | null
    stepCount: number | null
  }

  export type DailyProgressSumAggregateOutputType = {
    caloriesTarget: number | null
    caloriesActual: number | null
    proteinTarget: number | null
    proteinActual: number | null
    carbsTarget: number | null
    carbsActual: number | null
    fatTarget: number | null
    fatActual: number | null
    mealsLogged: number | null
    fatigueScore: number | null
    hydrationActual: number | null
    stepCount: number | null
  }

  export type DailyProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    caloriesTarget: number | null
    caloriesActual: number | null
    proteinTarget: number | null
    proteinActual: number | null
    carbsTarget: number | null
    carbsActual: number | null
    fatTarget: number | null
    fatActual: number | null
    mealsLogged: number | null
    isAdherent: boolean | null
    fatigueScore: number | null
    hydrationActual: number | null
    stepCount: number | null
    source: string | null
    lightExposureCompleted: boolean | null
    planId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    caloriesTarget: number | null
    caloriesActual: number | null
    proteinTarget: number | null
    proteinActual: number | null
    carbsTarget: number | null
    carbsActual: number | null
    fatTarget: number | null
    fatActual: number | null
    mealsLogged: number | null
    isAdherent: boolean | null
    fatigueScore: number | null
    hydrationActual: number | null
    stepCount: number | null
    source: string | null
    lightExposureCompleted: boolean | null
    planId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DailyProgressCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    caloriesTarget: number
    caloriesActual: number
    proteinTarget: number
    proteinActual: number
    carbsTarget: number
    carbsActual: number
    fatTarget: number
    fatActual: number
    mealsLogged: number
    isAdherent: number
    fatigueScore: number
    hydrationActual: number
    stepCount: number
    source: number
    supplementsLogged: number
    lightExposureCompleted: number
    planId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DailyProgressAvgAggregateInputType = {
    caloriesTarget?: true
    caloriesActual?: true
    proteinTarget?: true
    proteinActual?: true
    carbsTarget?: true
    carbsActual?: true
    fatTarget?: true
    fatActual?: true
    mealsLogged?: true
    fatigueScore?: true
    hydrationActual?: true
    stepCount?: true
  }

  export type DailyProgressSumAggregateInputType = {
    caloriesTarget?: true
    caloriesActual?: true
    proteinTarget?: true
    proteinActual?: true
    carbsTarget?: true
    carbsActual?: true
    fatTarget?: true
    fatActual?: true
    mealsLogged?: true
    fatigueScore?: true
    hydrationActual?: true
    stepCount?: true
  }

  export type DailyProgressMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    caloriesTarget?: true
    caloriesActual?: true
    proteinTarget?: true
    proteinActual?: true
    carbsTarget?: true
    carbsActual?: true
    fatTarget?: true
    fatActual?: true
    mealsLogged?: true
    isAdherent?: true
    fatigueScore?: true
    hydrationActual?: true
    stepCount?: true
    source?: true
    lightExposureCompleted?: true
    planId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    caloriesTarget?: true
    caloriesActual?: true
    proteinTarget?: true
    proteinActual?: true
    carbsTarget?: true
    carbsActual?: true
    fatTarget?: true
    fatActual?: true
    mealsLogged?: true
    isAdherent?: true
    fatigueScore?: true
    hydrationActual?: true
    stepCount?: true
    source?: true
    lightExposureCompleted?: true
    planId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DailyProgressCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    caloriesTarget?: true
    caloriesActual?: true
    proteinTarget?: true
    proteinActual?: true
    carbsTarget?: true
    carbsActual?: true
    fatTarget?: true
    fatActual?: true
    mealsLogged?: true
    isAdherent?: true
    fatigueScore?: true
    hydrationActual?: true
    stepCount?: true
    source?: true
    supplementsLogged?: true
    lightExposureCompleted?: true
    planId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DailyProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyProgress to aggregate.
     */
    where?: DailyProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyProgresses to fetch.
     */
    orderBy?: DailyProgressOrderByWithRelationInput | DailyProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyProgresses
    **/
    _count?: true | DailyProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyProgressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyProgressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyProgressMaxAggregateInputType
  }

  export type GetDailyProgressAggregateType<T extends DailyProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyProgress[P]>
      : GetScalarType<T[P], AggregateDailyProgress[P]>
  }




  export type DailyProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyProgressWhereInput
    orderBy?: DailyProgressOrderByWithAggregationInput | DailyProgressOrderByWithAggregationInput[]
    by: DailyProgressScalarFieldEnum[] | DailyProgressScalarFieldEnum
    having?: DailyProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyProgressCountAggregateInputType | true
    _avg?: DailyProgressAvgAggregateInputType
    _sum?: DailyProgressSumAggregateInputType
    _min?: DailyProgressMinAggregateInputType
    _max?: DailyProgressMaxAggregateInputType
  }

  export type DailyProgressGroupByOutputType = {
    id: string
    userId: string
    date: Date
    caloriesTarget: number | null
    caloriesActual: number
    proteinTarget: number | null
    proteinActual: number
    carbsTarget: number | null
    carbsActual: number
    fatTarget: number | null
    fatActual: number
    mealsLogged: number
    isAdherent: boolean
    fatigueScore: number
    hydrationActual: number
    stepCount: number
    source: string
    supplementsLogged: JsonValue | null
    lightExposureCompleted: boolean
    planId: string | null
    createdAt: Date
    updatedAt: Date
    _count: DailyProgressCountAggregateOutputType | null
    _avg: DailyProgressAvgAggregateOutputType | null
    _sum: DailyProgressSumAggregateOutputType | null
    _min: DailyProgressMinAggregateOutputType | null
    _max: DailyProgressMaxAggregateOutputType | null
  }

  type GetDailyProgressGroupByPayload<T extends DailyProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyProgressGroupByOutputType[P]>
            : GetScalarType<T[P], DailyProgressGroupByOutputType[P]>
        }
      >
    >


  export type DailyProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    caloriesTarget?: boolean
    caloriesActual?: boolean
    proteinTarget?: boolean
    proteinActual?: boolean
    carbsTarget?: boolean
    carbsActual?: boolean
    fatTarget?: boolean
    fatActual?: boolean
    mealsLogged?: boolean
    isAdherent?: boolean
    fatigueScore?: boolean
    hydrationActual?: boolean
    stepCount?: boolean
    source?: boolean
    supplementsLogged?: boolean
    lightExposureCompleted?: boolean
    planId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dailyProgress"]>

  export type DailyProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    caloriesTarget?: boolean
    caloriesActual?: boolean
    proteinTarget?: boolean
    proteinActual?: boolean
    carbsTarget?: boolean
    carbsActual?: boolean
    fatTarget?: boolean
    fatActual?: boolean
    mealsLogged?: boolean
    isAdherent?: boolean
    fatigueScore?: boolean
    hydrationActual?: boolean
    stepCount?: boolean
    source?: boolean
    supplementsLogged?: boolean
    lightExposureCompleted?: boolean
    planId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["dailyProgress"]>

  export type DailyProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    caloriesTarget?: boolean
    caloriesActual?: boolean
    proteinTarget?: boolean
    proteinActual?: boolean
    carbsTarget?: boolean
    carbsActual?: boolean
    fatTarget?: boolean
    fatActual?: boolean
    mealsLogged?: boolean
    isAdherent?: boolean
    fatigueScore?: boolean
    hydrationActual?: boolean
    stepCount?: boolean
    source?: boolean
    supplementsLogged?: boolean
    lightExposureCompleted?: boolean
    planId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $DailyProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyProgress"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      caloriesTarget: number | null
      caloriesActual: number
      proteinTarget: number | null
      proteinActual: number
      carbsTarget: number | null
      carbsActual: number
      fatTarget: number | null
      fatActual: number
      mealsLogged: number
      isAdherent: boolean
      fatigueScore: number
      hydrationActual: number
      stepCount: number
      source: string
      supplementsLogged: Prisma.JsonValue | null
      lightExposureCompleted: boolean
      planId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dailyProgress"]>
    composites: {}
  }

  type DailyProgressGetPayload<S extends boolean | null | undefined | DailyProgressDefaultArgs> = $Result.GetResult<Prisma.$DailyProgressPayload, S>

  type DailyProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DailyProgressFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DailyProgressCountAggregateInputType | true
    }

  export interface DailyProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyProgress'], meta: { name: 'DailyProgress' } }
    /**
     * Find zero or one DailyProgress that matches the filter.
     * @param {DailyProgressFindUniqueArgs} args - Arguments to find a DailyProgress
     * @example
     * // Get one DailyProgress
     * const dailyProgress = await prisma.dailyProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyProgressFindUniqueArgs>(args: SelectSubset<T, DailyProgressFindUniqueArgs<ExtArgs>>): Prisma__DailyProgressClient<$Result.GetResult<Prisma.$DailyProgressPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DailyProgress that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DailyProgressFindUniqueOrThrowArgs} args - Arguments to find a DailyProgress
     * @example
     * // Get one DailyProgress
     * const dailyProgress = await prisma.dailyProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyProgressClient<$Result.GetResult<Prisma.$DailyProgressPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DailyProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyProgressFindFirstArgs} args - Arguments to find a DailyProgress
     * @example
     * // Get one DailyProgress
     * const dailyProgress = await prisma.dailyProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyProgressFindFirstArgs>(args?: SelectSubset<T, DailyProgressFindFirstArgs<ExtArgs>>): Prisma__DailyProgressClient<$Result.GetResult<Prisma.$DailyProgressPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DailyProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyProgressFindFirstOrThrowArgs} args - Arguments to find a DailyProgress
     * @example
     * // Get one DailyProgress
     * const dailyProgress = await prisma.dailyProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyProgressClient<$Result.GetResult<Prisma.$DailyProgressPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DailyProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyProgresses
     * const dailyProgresses = await prisma.dailyProgress.findMany()
     * 
     * // Get first 10 DailyProgresses
     * const dailyProgresses = await prisma.dailyProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyProgressWithIdOnly = await prisma.dailyProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyProgressFindManyArgs>(args?: SelectSubset<T, DailyProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyProgressPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DailyProgress.
     * @param {DailyProgressCreateArgs} args - Arguments to create a DailyProgress.
     * @example
     * // Create one DailyProgress
     * const DailyProgress = await prisma.dailyProgress.create({
     *   data: {
     *     // ... data to create a DailyProgress
     *   }
     * })
     * 
     */
    create<T extends DailyProgressCreateArgs>(args: SelectSubset<T, DailyProgressCreateArgs<ExtArgs>>): Prisma__DailyProgressClient<$Result.GetResult<Prisma.$DailyProgressPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DailyProgresses.
     * @param {DailyProgressCreateManyArgs} args - Arguments to create many DailyProgresses.
     * @example
     * // Create many DailyProgresses
     * const dailyProgress = await prisma.dailyProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyProgressCreateManyArgs>(args?: SelectSubset<T, DailyProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyProgresses and returns the data saved in the database.
     * @param {DailyProgressCreateManyAndReturnArgs} args - Arguments to create many DailyProgresses.
     * @example
     * // Create many DailyProgresses
     * const dailyProgress = await prisma.dailyProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyProgresses and only return the `id`
     * const dailyProgressWithIdOnly = await prisma.dailyProgress.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyProgressPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DailyProgress.
     * @param {DailyProgressDeleteArgs} args - Arguments to delete one DailyProgress.
     * @example
     * // Delete one DailyProgress
     * const DailyProgress = await prisma.dailyProgress.delete({
     *   where: {
     *     // ... filter to delete one DailyProgress
     *   }
     * })
     * 
     */
    delete<T extends DailyProgressDeleteArgs>(args: SelectSubset<T, DailyProgressDeleteArgs<ExtArgs>>): Prisma__DailyProgressClient<$Result.GetResult<Prisma.$DailyProgressPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DailyProgress.
     * @param {DailyProgressUpdateArgs} args - Arguments to update one DailyProgress.
     * @example
     * // Update one DailyProgress
     * const dailyProgress = await prisma.dailyProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyProgressUpdateArgs>(args: SelectSubset<T, DailyProgressUpdateArgs<ExtArgs>>): Prisma__DailyProgressClient<$Result.GetResult<Prisma.$DailyProgressPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DailyProgresses.
     * @param {DailyProgressDeleteManyArgs} args - Arguments to filter DailyProgresses to delete.
     * @example
     * // Delete a few DailyProgresses
     * const { count } = await prisma.dailyProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyProgressDeleteManyArgs>(args?: SelectSubset<T, DailyProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyProgresses
     * const dailyProgress = await prisma.dailyProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyProgressUpdateManyArgs>(args: SelectSubset<T, DailyProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailyProgress.
     * @param {DailyProgressUpsertArgs} args - Arguments to update or create a DailyProgress.
     * @example
     * // Update or create a DailyProgress
     * const dailyProgress = await prisma.dailyProgress.upsert({
     *   create: {
     *     // ... data to create a DailyProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyProgress we want to update
     *   }
     * })
     */
    upsert<T extends DailyProgressUpsertArgs>(args: SelectSubset<T, DailyProgressUpsertArgs<ExtArgs>>): Prisma__DailyProgressClient<$Result.GetResult<Prisma.$DailyProgressPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DailyProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyProgressCountArgs} args - Arguments to filter DailyProgresses to count.
     * @example
     * // Count the number of DailyProgresses
     * const count = await prisma.dailyProgress.count({
     *   where: {
     *     // ... the filter for the DailyProgresses we want to count
     *   }
     * })
    **/
    count<T extends DailyProgressCountArgs>(
      args?: Subset<T, DailyProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyProgressAggregateArgs>(args: Subset<T, DailyProgressAggregateArgs>): Prisma.PrismaPromise<GetDailyProgressAggregateType<T>>

    /**
     * Group by DailyProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyProgressGroupByArgs} args - Group by arguments.
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
      T extends DailyProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyProgressGroupByArgs['orderBy'] }
        : { orderBy?: DailyProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyProgress model
   */
  readonly fields: DailyProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DailyProgress model
   */ 
  interface DailyProgressFieldRefs {
    readonly id: FieldRef<"DailyProgress", 'String'>
    readonly userId: FieldRef<"DailyProgress", 'String'>
    readonly date: FieldRef<"DailyProgress", 'DateTime'>
    readonly caloriesTarget: FieldRef<"DailyProgress", 'Float'>
    readonly caloriesActual: FieldRef<"DailyProgress", 'Float'>
    readonly proteinTarget: FieldRef<"DailyProgress", 'Float'>
    readonly proteinActual: FieldRef<"DailyProgress", 'Float'>
    readonly carbsTarget: FieldRef<"DailyProgress", 'Float'>
    readonly carbsActual: FieldRef<"DailyProgress", 'Float'>
    readonly fatTarget: FieldRef<"DailyProgress", 'Float'>
    readonly fatActual: FieldRef<"DailyProgress", 'Float'>
    readonly mealsLogged: FieldRef<"DailyProgress", 'Int'>
    readonly isAdherent: FieldRef<"DailyProgress", 'Boolean'>
    readonly fatigueScore: FieldRef<"DailyProgress", 'Int'>
    readonly hydrationActual: FieldRef<"DailyProgress", 'Float'>
    readonly stepCount: FieldRef<"DailyProgress", 'Int'>
    readonly source: FieldRef<"DailyProgress", 'String'>
    readonly supplementsLogged: FieldRef<"DailyProgress", 'Json'>
    readonly lightExposureCompleted: FieldRef<"DailyProgress", 'Boolean'>
    readonly planId: FieldRef<"DailyProgress", 'String'>
    readonly createdAt: FieldRef<"DailyProgress", 'DateTime'>
    readonly updatedAt: FieldRef<"DailyProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyProgress findUnique
   */
  export type DailyProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyProgress
     */
    select?: DailyProgressSelect<ExtArgs> | null
    /**
     * Filter, which DailyProgress to fetch.
     */
    where: DailyProgressWhereUniqueInput
  }

  /**
   * DailyProgress findUniqueOrThrow
   */
  export type DailyProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyProgress
     */
    select?: DailyProgressSelect<ExtArgs> | null
    /**
     * Filter, which DailyProgress to fetch.
     */
    where: DailyProgressWhereUniqueInput
  }

  /**
   * DailyProgress findFirst
   */
  export type DailyProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyProgress
     */
    select?: DailyProgressSelect<ExtArgs> | null
    /**
     * Filter, which DailyProgress to fetch.
     */
    where?: DailyProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyProgresses to fetch.
     */
    orderBy?: DailyProgressOrderByWithRelationInput | DailyProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyProgresses.
     */
    cursor?: DailyProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyProgresses.
     */
    distinct?: DailyProgressScalarFieldEnum | DailyProgressScalarFieldEnum[]
  }

  /**
   * DailyProgress findFirstOrThrow
   */
  export type DailyProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyProgress
     */
    select?: DailyProgressSelect<ExtArgs> | null
    /**
     * Filter, which DailyProgress to fetch.
     */
    where?: DailyProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyProgresses to fetch.
     */
    orderBy?: DailyProgressOrderByWithRelationInput | DailyProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyProgresses.
     */
    cursor?: DailyProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyProgresses.
     */
    distinct?: DailyProgressScalarFieldEnum | DailyProgressScalarFieldEnum[]
  }

  /**
   * DailyProgress findMany
   */
  export type DailyProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyProgress
     */
    select?: DailyProgressSelect<ExtArgs> | null
    /**
     * Filter, which DailyProgresses to fetch.
     */
    where?: DailyProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyProgresses to fetch.
     */
    orderBy?: DailyProgressOrderByWithRelationInput | DailyProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyProgresses.
     */
    cursor?: DailyProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyProgresses.
     */
    skip?: number
    distinct?: DailyProgressScalarFieldEnum | DailyProgressScalarFieldEnum[]
  }

  /**
   * DailyProgress create
   */
  export type DailyProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyProgress
     */
    select?: DailyProgressSelect<ExtArgs> | null
    /**
     * The data needed to create a DailyProgress.
     */
    data: XOR<DailyProgressCreateInput, DailyProgressUncheckedCreateInput>
  }

  /**
   * DailyProgress createMany
   */
  export type DailyProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyProgresses.
     */
    data: DailyProgressCreateManyInput | DailyProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyProgress createManyAndReturn
   */
  export type DailyProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyProgress
     */
    select?: DailyProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DailyProgresses.
     */
    data: DailyProgressCreateManyInput | DailyProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyProgress update
   */
  export type DailyProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyProgress
     */
    select?: DailyProgressSelect<ExtArgs> | null
    /**
     * The data needed to update a DailyProgress.
     */
    data: XOR<DailyProgressUpdateInput, DailyProgressUncheckedUpdateInput>
    /**
     * Choose, which DailyProgress to update.
     */
    where: DailyProgressWhereUniqueInput
  }

  /**
   * DailyProgress updateMany
   */
  export type DailyProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyProgresses.
     */
    data: XOR<DailyProgressUpdateManyMutationInput, DailyProgressUncheckedUpdateManyInput>
    /**
     * Filter which DailyProgresses to update
     */
    where?: DailyProgressWhereInput
  }

  /**
   * DailyProgress upsert
   */
  export type DailyProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyProgress
     */
    select?: DailyProgressSelect<ExtArgs> | null
    /**
     * The filter to search for the DailyProgress to update in case it exists.
     */
    where: DailyProgressWhereUniqueInput
    /**
     * In case the DailyProgress found by the `where` argument doesn't exist, create a new DailyProgress with this data.
     */
    create: XOR<DailyProgressCreateInput, DailyProgressUncheckedCreateInput>
    /**
     * In case the DailyProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyProgressUpdateInput, DailyProgressUncheckedUpdateInput>
  }

  /**
   * DailyProgress delete
   */
  export type DailyProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyProgress
     */
    select?: DailyProgressSelect<ExtArgs> | null
    /**
     * Filter which DailyProgress to delete.
     */
    where: DailyProgressWhereUniqueInput
  }

  /**
   * DailyProgress deleteMany
   */
  export type DailyProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyProgresses to delete
     */
    where?: DailyProgressWhereInput
  }

  /**
   * DailyProgress without action
   */
  export type DailyProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyProgress
     */
    select?: DailyProgressSelect<ExtArgs> | null
  }


  /**
   * Model Streak
   */

  export type AggregateStreak = {
    _count: StreakCountAggregateOutputType | null
    _avg: StreakAvgAggregateOutputType | null
    _sum: StreakSumAggregateOutputType | null
    _min: StreakMinAggregateOutputType | null
    _max: StreakMaxAggregateOutputType | null
  }

  export type StreakAvgAggregateOutputType = {
    currentStreak: number | null
    longestStreak: number | null
  }

  export type StreakSumAggregateOutputType = {
    currentStreak: number | null
    longestStreak: number | null
  }

  export type StreakMinAggregateOutputType = {
    id: string | null
    userId: string | null
    currentStreak: number | null
    longestStreak: number | null
    lastAdherentDate: Date | null
    updatedAt: Date | null
  }

  export type StreakMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    currentStreak: number | null
    longestStreak: number | null
    lastAdherentDate: Date | null
    updatedAt: Date | null
  }

  export type StreakCountAggregateOutputType = {
    id: number
    userId: number
    currentStreak: number
    longestStreak: number
    lastAdherentDate: number
    updatedAt: number
    _all: number
  }


  export type StreakAvgAggregateInputType = {
    currentStreak?: true
    longestStreak?: true
  }

  export type StreakSumAggregateInputType = {
    currentStreak?: true
    longestStreak?: true
  }

  export type StreakMinAggregateInputType = {
    id?: true
    userId?: true
    currentStreak?: true
    longestStreak?: true
    lastAdherentDate?: true
    updatedAt?: true
  }

  export type StreakMaxAggregateInputType = {
    id?: true
    userId?: true
    currentStreak?: true
    longestStreak?: true
    lastAdherentDate?: true
    updatedAt?: true
  }

  export type StreakCountAggregateInputType = {
    id?: true
    userId?: true
    currentStreak?: true
    longestStreak?: true
    lastAdherentDate?: true
    updatedAt?: true
    _all?: true
  }

  export type StreakAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Streak to aggregate.
     */
    where?: StreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streaks to fetch.
     */
    orderBy?: StreakOrderByWithRelationInput | StreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Streaks
    **/
    _count?: true | StreakCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StreakAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StreakSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreakMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreakMaxAggregateInputType
  }

  export type GetStreakAggregateType<T extends StreakAggregateArgs> = {
        [P in keyof T & keyof AggregateStreak]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStreak[P]>
      : GetScalarType<T[P], AggregateStreak[P]>
  }




  export type StreakGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreakWhereInput
    orderBy?: StreakOrderByWithAggregationInput | StreakOrderByWithAggregationInput[]
    by: StreakScalarFieldEnum[] | StreakScalarFieldEnum
    having?: StreakScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreakCountAggregateInputType | true
    _avg?: StreakAvgAggregateInputType
    _sum?: StreakSumAggregateInputType
    _min?: StreakMinAggregateInputType
    _max?: StreakMaxAggregateInputType
  }

  export type StreakGroupByOutputType = {
    id: string
    userId: string
    currentStreak: number
    longestStreak: number
    lastAdherentDate: Date | null
    updatedAt: Date
    _count: StreakCountAggregateOutputType | null
    _avg: StreakAvgAggregateOutputType | null
    _sum: StreakSumAggregateOutputType | null
    _min: StreakMinAggregateOutputType | null
    _max: StreakMaxAggregateOutputType | null
  }

  type GetStreakGroupByPayload<T extends StreakGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreakGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreakGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreakGroupByOutputType[P]>
            : GetScalarType<T[P], StreakGroupByOutputType[P]>
        }
      >
    >


  export type StreakSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    lastAdherentDate?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["streak"]>

  export type StreakSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    lastAdherentDate?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["streak"]>

  export type StreakSelectScalar = {
    id?: boolean
    userId?: boolean
    currentStreak?: boolean
    longestStreak?: boolean
    lastAdherentDate?: boolean
    updatedAt?: boolean
  }


  export type $StreakPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Streak"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      currentStreak: number
      longestStreak: number
      lastAdherentDate: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["streak"]>
    composites: {}
  }

  type StreakGetPayload<S extends boolean | null | undefined | StreakDefaultArgs> = $Result.GetResult<Prisma.$StreakPayload, S>

  type StreakCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StreakFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StreakCountAggregateInputType | true
    }

  export interface StreakDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Streak'], meta: { name: 'Streak' } }
    /**
     * Find zero or one Streak that matches the filter.
     * @param {StreakFindUniqueArgs} args - Arguments to find a Streak
     * @example
     * // Get one Streak
     * const streak = await prisma.streak.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StreakFindUniqueArgs>(args: SelectSubset<T, StreakFindUniqueArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Streak that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StreakFindUniqueOrThrowArgs} args - Arguments to find a Streak
     * @example
     * // Get one Streak
     * const streak = await prisma.streak.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StreakFindUniqueOrThrowArgs>(args: SelectSubset<T, StreakFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Streak that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakFindFirstArgs} args - Arguments to find a Streak
     * @example
     * // Get one Streak
     * const streak = await prisma.streak.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StreakFindFirstArgs>(args?: SelectSubset<T, StreakFindFirstArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Streak that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakFindFirstOrThrowArgs} args - Arguments to find a Streak
     * @example
     * // Get one Streak
     * const streak = await prisma.streak.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StreakFindFirstOrThrowArgs>(args?: SelectSubset<T, StreakFindFirstOrThrowArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Streaks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Streaks
     * const streaks = await prisma.streak.findMany()
     * 
     * // Get first 10 Streaks
     * const streaks = await prisma.streak.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streakWithIdOnly = await prisma.streak.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StreakFindManyArgs>(args?: SelectSubset<T, StreakFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Streak.
     * @param {StreakCreateArgs} args - Arguments to create a Streak.
     * @example
     * // Create one Streak
     * const Streak = await prisma.streak.create({
     *   data: {
     *     // ... data to create a Streak
     *   }
     * })
     * 
     */
    create<T extends StreakCreateArgs>(args: SelectSubset<T, StreakCreateArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Streaks.
     * @param {StreakCreateManyArgs} args - Arguments to create many Streaks.
     * @example
     * // Create many Streaks
     * const streak = await prisma.streak.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StreakCreateManyArgs>(args?: SelectSubset<T, StreakCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Streaks and returns the data saved in the database.
     * @param {StreakCreateManyAndReturnArgs} args - Arguments to create many Streaks.
     * @example
     * // Create many Streaks
     * const streak = await prisma.streak.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Streaks and only return the `id`
     * const streakWithIdOnly = await prisma.streak.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StreakCreateManyAndReturnArgs>(args?: SelectSubset<T, StreakCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Streak.
     * @param {StreakDeleteArgs} args - Arguments to delete one Streak.
     * @example
     * // Delete one Streak
     * const Streak = await prisma.streak.delete({
     *   where: {
     *     // ... filter to delete one Streak
     *   }
     * })
     * 
     */
    delete<T extends StreakDeleteArgs>(args: SelectSubset<T, StreakDeleteArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Streak.
     * @param {StreakUpdateArgs} args - Arguments to update one Streak.
     * @example
     * // Update one Streak
     * const streak = await prisma.streak.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StreakUpdateArgs>(args: SelectSubset<T, StreakUpdateArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Streaks.
     * @param {StreakDeleteManyArgs} args - Arguments to filter Streaks to delete.
     * @example
     * // Delete a few Streaks
     * const { count } = await prisma.streak.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StreakDeleteManyArgs>(args?: SelectSubset<T, StreakDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Streaks
     * const streak = await prisma.streak.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StreakUpdateManyArgs>(args: SelectSubset<T, StreakUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Streak.
     * @param {StreakUpsertArgs} args - Arguments to update or create a Streak.
     * @example
     * // Update or create a Streak
     * const streak = await prisma.streak.upsert({
     *   create: {
     *     // ... data to create a Streak
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Streak we want to update
     *   }
     * })
     */
    upsert<T extends StreakUpsertArgs>(args: SelectSubset<T, StreakUpsertArgs<ExtArgs>>): Prisma__StreakClient<$Result.GetResult<Prisma.$StreakPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Streaks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakCountArgs} args - Arguments to filter Streaks to count.
     * @example
     * // Count the number of Streaks
     * const count = await prisma.streak.count({
     *   where: {
     *     // ... the filter for the Streaks we want to count
     *   }
     * })
    **/
    count<T extends StreakCountArgs>(
      args?: Subset<T, StreakCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreakCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Streak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StreakAggregateArgs>(args: Subset<T, StreakAggregateArgs>): Prisma.PrismaPromise<GetStreakAggregateType<T>>

    /**
     * Group by Streak.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreakGroupByArgs} args - Group by arguments.
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
      T extends StreakGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreakGroupByArgs['orderBy'] }
        : { orderBy?: StreakGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StreakGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreakGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Streak model
   */
  readonly fields: StreakFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Streak.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StreakClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Streak model
   */ 
  interface StreakFieldRefs {
    readonly id: FieldRef<"Streak", 'String'>
    readonly userId: FieldRef<"Streak", 'String'>
    readonly currentStreak: FieldRef<"Streak", 'Int'>
    readonly longestStreak: FieldRef<"Streak", 'Int'>
    readonly lastAdherentDate: FieldRef<"Streak", 'DateTime'>
    readonly updatedAt: FieldRef<"Streak", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Streak findUnique
   */
  export type StreakFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Filter, which Streak to fetch.
     */
    where: StreakWhereUniqueInput
  }

  /**
   * Streak findUniqueOrThrow
   */
  export type StreakFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Filter, which Streak to fetch.
     */
    where: StreakWhereUniqueInput
  }

  /**
   * Streak findFirst
   */
  export type StreakFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Filter, which Streak to fetch.
     */
    where?: StreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streaks to fetch.
     */
    orderBy?: StreakOrderByWithRelationInput | StreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streaks.
     */
    cursor?: StreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streaks.
     */
    distinct?: StreakScalarFieldEnum | StreakScalarFieldEnum[]
  }

  /**
   * Streak findFirstOrThrow
   */
  export type StreakFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Filter, which Streak to fetch.
     */
    where?: StreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streaks to fetch.
     */
    orderBy?: StreakOrderByWithRelationInput | StreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streaks.
     */
    cursor?: StreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streaks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streaks.
     */
    distinct?: StreakScalarFieldEnum | StreakScalarFieldEnum[]
  }

  /**
   * Streak findMany
   */
  export type StreakFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Filter, which Streaks to fetch.
     */
    where?: StreakWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streaks to fetch.
     */
    orderBy?: StreakOrderByWithRelationInput | StreakOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Streaks.
     */
    cursor?: StreakWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streaks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streaks.
     */
    skip?: number
    distinct?: StreakScalarFieldEnum | StreakScalarFieldEnum[]
  }

  /**
   * Streak create
   */
  export type StreakCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * The data needed to create a Streak.
     */
    data: XOR<StreakCreateInput, StreakUncheckedCreateInput>
  }

  /**
   * Streak createMany
   */
  export type StreakCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Streaks.
     */
    data: StreakCreateManyInput | StreakCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Streak createManyAndReturn
   */
  export type StreakCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Streaks.
     */
    data: StreakCreateManyInput | StreakCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Streak update
   */
  export type StreakUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * The data needed to update a Streak.
     */
    data: XOR<StreakUpdateInput, StreakUncheckedUpdateInput>
    /**
     * Choose, which Streak to update.
     */
    where: StreakWhereUniqueInput
  }

  /**
   * Streak updateMany
   */
  export type StreakUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Streaks.
     */
    data: XOR<StreakUpdateManyMutationInput, StreakUncheckedUpdateManyInput>
    /**
     * Filter which Streaks to update
     */
    where?: StreakWhereInput
  }

  /**
   * Streak upsert
   */
  export type StreakUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * The filter to search for the Streak to update in case it exists.
     */
    where: StreakWhereUniqueInput
    /**
     * In case the Streak found by the `where` argument doesn't exist, create a new Streak with this data.
     */
    create: XOR<StreakCreateInput, StreakUncheckedCreateInput>
    /**
     * In case the Streak was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreakUpdateInput, StreakUncheckedUpdateInput>
  }

  /**
   * Streak delete
   */
  export type StreakDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
    /**
     * Filter which Streak to delete.
     */
    where: StreakWhereUniqueInput
  }

  /**
   * Streak deleteMany
   */
  export type StreakDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Streaks to delete
     */
    where?: StreakWhereInput
  }

  /**
   * Streak without action
   */
  export type StreakDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Streak
     */
    select?: StreakSelect<ExtArgs> | null
  }


  /**
   * Model BodyMetrics
   */

  export type AggregateBodyMetrics = {
    _count: BodyMetricsCountAggregateOutputType | null
    _avg: BodyMetricsAvgAggregateOutputType | null
    _sum: BodyMetricsSumAggregateOutputType | null
    _min: BodyMetricsMinAggregateOutputType | null
    _max: BodyMetricsMaxAggregateOutputType | null
  }

  export type BodyMetricsAvgAggregateOutputType = {
    weightKg: number | null
    heightCm: number | null
    bodyFatPct: number | null
    muscleMassKg: number | null
    bmi: number | null
    chestCm: number | null
    waistCm: number | null
    hipsCm: number | null
    armsCm: number | null
    thighsCm: number | null
    calvesCm: number | null
  }

  export type BodyMetricsSumAggregateOutputType = {
    weightKg: number | null
    heightCm: number | null
    bodyFatPct: number | null
    muscleMassKg: number | null
    bmi: number | null
    chestCm: number | null
    waistCm: number | null
    hipsCm: number | null
    armsCm: number | null
    thighsCm: number | null
    calvesCm: number | null
  }

  export type BodyMetricsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    weightKg: number | null
    heightCm: number | null
    bodyFatPct: number | null
    muscleMassKg: number | null
    bmi: number | null
    chestCm: number | null
    waistCm: number | null
    hipsCm: number | null
    armsCm: number | null
    thighsCm: number | null
    calvesCm: number | null
    recordedAt: Date | null
    createdAt: Date | null
  }

  export type BodyMetricsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    weightKg: number | null
    heightCm: number | null
    bodyFatPct: number | null
    muscleMassKg: number | null
    bmi: number | null
    chestCm: number | null
    waistCm: number | null
    hipsCm: number | null
    armsCm: number | null
    thighsCm: number | null
    calvesCm: number | null
    recordedAt: Date | null
    createdAt: Date | null
  }

  export type BodyMetricsCountAggregateOutputType = {
    id: number
    userId: number
    weightKg: number
    heightCm: number
    bodyFatPct: number
    muscleMassKg: number
    bmi: number
    chestCm: number
    waistCm: number
    hipsCm: number
    armsCm: number
    thighsCm: number
    calvesCm: number
    recordedAt: number
    createdAt: number
    _all: number
  }


  export type BodyMetricsAvgAggregateInputType = {
    weightKg?: true
    heightCm?: true
    bodyFatPct?: true
    muscleMassKg?: true
    bmi?: true
    chestCm?: true
    waistCm?: true
    hipsCm?: true
    armsCm?: true
    thighsCm?: true
    calvesCm?: true
  }

  export type BodyMetricsSumAggregateInputType = {
    weightKg?: true
    heightCm?: true
    bodyFatPct?: true
    muscleMassKg?: true
    bmi?: true
    chestCm?: true
    waistCm?: true
    hipsCm?: true
    armsCm?: true
    thighsCm?: true
    calvesCm?: true
  }

  export type BodyMetricsMinAggregateInputType = {
    id?: true
    userId?: true
    weightKg?: true
    heightCm?: true
    bodyFatPct?: true
    muscleMassKg?: true
    bmi?: true
    chestCm?: true
    waistCm?: true
    hipsCm?: true
    armsCm?: true
    thighsCm?: true
    calvesCm?: true
    recordedAt?: true
    createdAt?: true
  }

  export type BodyMetricsMaxAggregateInputType = {
    id?: true
    userId?: true
    weightKg?: true
    heightCm?: true
    bodyFatPct?: true
    muscleMassKg?: true
    bmi?: true
    chestCm?: true
    waistCm?: true
    hipsCm?: true
    armsCm?: true
    thighsCm?: true
    calvesCm?: true
    recordedAt?: true
    createdAt?: true
  }

  export type BodyMetricsCountAggregateInputType = {
    id?: true
    userId?: true
    weightKg?: true
    heightCm?: true
    bodyFatPct?: true
    muscleMassKg?: true
    bmi?: true
    chestCm?: true
    waistCm?: true
    hipsCm?: true
    armsCm?: true
    thighsCm?: true
    calvesCm?: true
    recordedAt?: true
    createdAt?: true
    _all?: true
  }

  export type BodyMetricsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BodyMetrics to aggregate.
     */
    where?: BodyMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyMetrics to fetch.
     */
    orderBy?: BodyMetricsOrderByWithRelationInput | BodyMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BodyMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BodyMetrics
    **/
    _count?: true | BodyMetricsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BodyMetricsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BodyMetricsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BodyMetricsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BodyMetricsMaxAggregateInputType
  }

  export type GetBodyMetricsAggregateType<T extends BodyMetricsAggregateArgs> = {
        [P in keyof T & keyof AggregateBodyMetrics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBodyMetrics[P]>
      : GetScalarType<T[P], AggregateBodyMetrics[P]>
  }




  export type BodyMetricsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BodyMetricsWhereInput
    orderBy?: BodyMetricsOrderByWithAggregationInput | BodyMetricsOrderByWithAggregationInput[]
    by: BodyMetricsScalarFieldEnum[] | BodyMetricsScalarFieldEnum
    having?: BodyMetricsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BodyMetricsCountAggregateInputType | true
    _avg?: BodyMetricsAvgAggregateInputType
    _sum?: BodyMetricsSumAggregateInputType
    _min?: BodyMetricsMinAggregateInputType
    _max?: BodyMetricsMaxAggregateInputType
  }

  export type BodyMetricsGroupByOutputType = {
    id: string
    userId: string
    weightKg: number | null
    heightCm: number | null
    bodyFatPct: number | null
    muscleMassKg: number | null
    bmi: number | null
    chestCm: number | null
    waistCm: number | null
    hipsCm: number | null
    armsCm: number | null
    thighsCm: number | null
    calvesCm: number | null
    recordedAt: Date
    createdAt: Date
    _count: BodyMetricsCountAggregateOutputType | null
    _avg: BodyMetricsAvgAggregateOutputType | null
    _sum: BodyMetricsSumAggregateOutputType | null
    _min: BodyMetricsMinAggregateOutputType | null
    _max: BodyMetricsMaxAggregateOutputType | null
  }

  type GetBodyMetricsGroupByPayload<T extends BodyMetricsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BodyMetricsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BodyMetricsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BodyMetricsGroupByOutputType[P]>
            : GetScalarType<T[P], BodyMetricsGroupByOutputType[P]>
        }
      >
    >


  export type BodyMetricsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    weightKg?: boolean
    heightCm?: boolean
    bodyFatPct?: boolean
    muscleMassKg?: boolean
    bmi?: boolean
    chestCm?: boolean
    waistCm?: boolean
    hipsCm?: boolean
    armsCm?: boolean
    thighsCm?: boolean
    calvesCm?: boolean
    recordedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["bodyMetrics"]>

  export type BodyMetricsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    weightKg?: boolean
    heightCm?: boolean
    bodyFatPct?: boolean
    muscleMassKg?: boolean
    bmi?: boolean
    chestCm?: boolean
    waistCm?: boolean
    hipsCm?: boolean
    armsCm?: boolean
    thighsCm?: boolean
    calvesCm?: boolean
    recordedAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["bodyMetrics"]>

  export type BodyMetricsSelectScalar = {
    id?: boolean
    userId?: boolean
    weightKg?: boolean
    heightCm?: boolean
    bodyFatPct?: boolean
    muscleMassKg?: boolean
    bmi?: boolean
    chestCm?: boolean
    waistCm?: boolean
    hipsCm?: boolean
    armsCm?: boolean
    thighsCm?: boolean
    calvesCm?: boolean
    recordedAt?: boolean
    createdAt?: boolean
  }


  export type $BodyMetricsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BodyMetrics"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      weightKg: number | null
      heightCm: number | null
      bodyFatPct: number | null
      muscleMassKg: number | null
      bmi: number | null
      chestCm: number | null
      waistCm: number | null
      hipsCm: number | null
      armsCm: number | null
      thighsCm: number | null
      calvesCm: number | null
      recordedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["bodyMetrics"]>
    composites: {}
  }

  type BodyMetricsGetPayload<S extends boolean | null | undefined | BodyMetricsDefaultArgs> = $Result.GetResult<Prisma.$BodyMetricsPayload, S>

  type BodyMetricsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BodyMetricsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BodyMetricsCountAggregateInputType | true
    }

  export interface BodyMetricsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BodyMetrics'], meta: { name: 'BodyMetrics' } }
    /**
     * Find zero or one BodyMetrics that matches the filter.
     * @param {BodyMetricsFindUniqueArgs} args - Arguments to find a BodyMetrics
     * @example
     * // Get one BodyMetrics
     * const bodyMetrics = await prisma.bodyMetrics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BodyMetricsFindUniqueArgs>(args: SelectSubset<T, BodyMetricsFindUniqueArgs<ExtArgs>>): Prisma__BodyMetricsClient<$Result.GetResult<Prisma.$BodyMetricsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BodyMetrics that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BodyMetricsFindUniqueOrThrowArgs} args - Arguments to find a BodyMetrics
     * @example
     * // Get one BodyMetrics
     * const bodyMetrics = await prisma.bodyMetrics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BodyMetricsFindUniqueOrThrowArgs>(args: SelectSubset<T, BodyMetricsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BodyMetricsClient<$Result.GetResult<Prisma.$BodyMetricsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BodyMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMetricsFindFirstArgs} args - Arguments to find a BodyMetrics
     * @example
     * // Get one BodyMetrics
     * const bodyMetrics = await prisma.bodyMetrics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BodyMetricsFindFirstArgs>(args?: SelectSubset<T, BodyMetricsFindFirstArgs<ExtArgs>>): Prisma__BodyMetricsClient<$Result.GetResult<Prisma.$BodyMetricsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BodyMetrics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMetricsFindFirstOrThrowArgs} args - Arguments to find a BodyMetrics
     * @example
     * // Get one BodyMetrics
     * const bodyMetrics = await prisma.bodyMetrics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BodyMetricsFindFirstOrThrowArgs>(args?: SelectSubset<T, BodyMetricsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BodyMetricsClient<$Result.GetResult<Prisma.$BodyMetricsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BodyMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMetricsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BodyMetrics
     * const bodyMetrics = await prisma.bodyMetrics.findMany()
     * 
     * // Get first 10 BodyMetrics
     * const bodyMetrics = await prisma.bodyMetrics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bodyMetricsWithIdOnly = await prisma.bodyMetrics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BodyMetricsFindManyArgs>(args?: SelectSubset<T, BodyMetricsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyMetricsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BodyMetrics.
     * @param {BodyMetricsCreateArgs} args - Arguments to create a BodyMetrics.
     * @example
     * // Create one BodyMetrics
     * const BodyMetrics = await prisma.bodyMetrics.create({
     *   data: {
     *     // ... data to create a BodyMetrics
     *   }
     * })
     * 
     */
    create<T extends BodyMetricsCreateArgs>(args: SelectSubset<T, BodyMetricsCreateArgs<ExtArgs>>): Prisma__BodyMetricsClient<$Result.GetResult<Prisma.$BodyMetricsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BodyMetrics.
     * @param {BodyMetricsCreateManyArgs} args - Arguments to create many BodyMetrics.
     * @example
     * // Create many BodyMetrics
     * const bodyMetrics = await prisma.bodyMetrics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BodyMetricsCreateManyArgs>(args?: SelectSubset<T, BodyMetricsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BodyMetrics and returns the data saved in the database.
     * @param {BodyMetricsCreateManyAndReturnArgs} args - Arguments to create many BodyMetrics.
     * @example
     * // Create many BodyMetrics
     * const bodyMetrics = await prisma.bodyMetrics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BodyMetrics and only return the `id`
     * const bodyMetricsWithIdOnly = await prisma.bodyMetrics.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BodyMetricsCreateManyAndReturnArgs>(args?: SelectSubset<T, BodyMetricsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BodyMetricsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BodyMetrics.
     * @param {BodyMetricsDeleteArgs} args - Arguments to delete one BodyMetrics.
     * @example
     * // Delete one BodyMetrics
     * const BodyMetrics = await prisma.bodyMetrics.delete({
     *   where: {
     *     // ... filter to delete one BodyMetrics
     *   }
     * })
     * 
     */
    delete<T extends BodyMetricsDeleteArgs>(args: SelectSubset<T, BodyMetricsDeleteArgs<ExtArgs>>): Prisma__BodyMetricsClient<$Result.GetResult<Prisma.$BodyMetricsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BodyMetrics.
     * @param {BodyMetricsUpdateArgs} args - Arguments to update one BodyMetrics.
     * @example
     * // Update one BodyMetrics
     * const bodyMetrics = await prisma.bodyMetrics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BodyMetricsUpdateArgs>(args: SelectSubset<T, BodyMetricsUpdateArgs<ExtArgs>>): Prisma__BodyMetricsClient<$Result.GetResult<Prisma.$BodyMetricsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BodyMetrics.
     * @param {BodyMetricsDeleteManyArgs} args - Arguments to filter BodyMetrics to delete.
     * @example
     * // Delete a few BodyMetrics
     * const { count } = await prisma.bodyMetrics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BodyMetricsDeleteManyArgs>(args?: SelectSubset<T, BodyMetricsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BodyMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMetricsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BodyMetrics
     * const bodyMetrics = await prisma.bodyMetrics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BodyMetricsUpdateManyArgs>(args: SelectSubset<T, BodyMetricsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BodyMetrics.
     * @param {BodyMetricsUpsertArgs} args - Arguments to update or create a BodyMetrics.
     * @example
     * // Update or create a BodyMetrics
     * const bodyMetrics = await prisma.bodyMetrics.upsert({
     *   create: {
     *     // ... data to create a BodyMetrics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BodyMetrics we want to update
     *   }
     * })
     */
    upsert<T extends BodyMetricsUpsertArgs>(args: SelectSubset<T, BodyMetricsUpsertArgs<ExtArgs>>): Prisma__BodyMetricsClient<$Result.GetResult<Prisma.$BodyMetricsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BodyMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMetricsCountArgs} args - Arguments to filter BodyMetrics to count.
     * @example
     * // Count the number of BodyMetrics
     * const count = await prisma.bodyMetrics.count({
     *   where: {
     *     // ... the filter for the BodyMetrics we want to count
     *   }
     * })
    **/
    count<T extends BodyMetricsCountArgs>(
      args?: Subset<T, BodyMetricsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BodyMetricsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BodyMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMetricsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BodyMetricsAggregateArgs>(args: Subset<T, BodyMetricsAggregateArgs>): Prisma.PrismaPromise<GetBodyMetricsAggregateType<T>>

    /**
     * Group by BodyMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BodyMetricsGroupByArgs} args - Group by arguments.
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
      T extends BodyMetricsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BodyMetricsGroupByArgs['orderBy'] }
        : { orderBy?: BodyMetricsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BodyMetricsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBodyMetricsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BodyMetrics model
   */
  readonly fields: BodyMetricsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BodyMetrics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BodyMetricsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the BodyMetrics model
   */ 
  interface BodyMetricsFieldRefs {
    readonly id: FieldRef<"BodyMetrics", 'String'>
    readonly userId: FieldRef<"BodyMetrics", 'String'>
    readonly weightKg: FieldRef<"BodyMetrics", 'Float'>
    readonly heightCm: FieldRef<"BodyMetrics", 'Float'>
    readonly bodyFatPct: FieldRef<"BodyMetrics", 'Float'>
    readonly muscleMassKg: FieldRef<"BodyMetrics", 'Float'>
    readonly bmi: FieldRef<"BodyMetrics", 'Float'>
    readonly chestCm: FieldRef<"BodyMetrics", 'Float'>
    readonly waistCm: FieldRef<"BodyMetrics", 'Float'>
    readonly hipsCm: FieldRef<"BodyMetrics", 'Float'>
    readonly armsCm: FieldRef<"BodyMetrics", 'Float'>
    readonly thighsCm: FieldRef<"BodyMetrics", 'Float'>
    readonly calvesCm: FieldRef<"BodyMetrics", 'Float'>
    readonly recordedAt: FieldRef<"BodyMetrics", 'DateTime'>
    readonly createdAt: FieldRef<"BodyMetrics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BodyMetrics findUnique
   */
  export type BodyMetricsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMetrics
     */
    select?: BodyMetricsSelect<ExtArgs> | null
    /**
     * Filter, which BodyMetrics to fetch.
     */
    where: BodyMetricsWhereUniqueInput
  }

  /**
   * BodyMetrics findUniqueOrThrow
   */
  export type BodyMetricsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMetrics
     */
    select?: BodyMetricsSelect<ExtArgs> | null
    /**
     * Filter, which BodyMetrics to fetch.
     */
    where: BodyMetricsWhereUniqueInput
  }

  /**
   * BodyMetrics findFirst
   */
  export type BodyMetricsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMetrics
     */
    select?: BodyMetricsSelect<ExtArgs> | null
    /**
     * Filter, which BodyMetrics to fetch.
     */
    where?: BodyMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyMetrics to fetch.
     */
    orderBy?: BodyMetricsOrderByWithRelationInput | BodyMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BodyMetrics.
     */
    cursor?: BodyMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BodyMetrics.
     */
    distinct?: BodyMetricsScalarFieldEnum | BodyMetricsScalarFieldEnum[]
  }

  /**
   * BodyMetrics findFirstOrThrow
   */
  export type BodyMetricsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMetrics
     */
    select?: BodyMetricsSelect<ExtArgs> | null
    /**
     * Filter, which BodyMetrics to fetch.
     */
    where?: BodyMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyMetrics to fetch.
     */
    orderBy?: BodyMetricsOrderByWithRelationInput | BodyMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BodyMetrics.
     */
    cursor?: BodyMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BodyMetrics.
     */
    distinct?: BodyMetricsScalarFieldEnum | BodyMetricsScalarFieldEnum[]
  }

  /**
   * BodyMetrics findMany
   */
  export type BodyMetricsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMetrics
     */
    select?: BodyMetricsSelect<ExtArgs> | null
    /**
     * Filter, which BodyMetrics to fetch.
     */
    where?: BodyMetricsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BodyMetrics to fetch.
     */
    orderBy?: BodyMetricsOrderByWithRelationInput | BodyMetricsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BodyMetrics.
     */
    cursor?: BodyMetricsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BodyMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BodyMetrics.
     */
    skip?: number
    distinct?: BodyMetricsScalarFieldEnum | BodyMetricsScalarFieldEnum[]
  }

  /**
   * BodyMetrics create
   */
  export type BodyMetricsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMetrics
     */
    select?: BodyMetricsSelect<ExtArgs> | null
    /**
     * The data needed to create a BodyMetrics.
     */
    data: XOR<BodyMetricsCreateInput, BodyMetricsUncheckedCreateInput>
  }

  /**
   * BodyMetrics createMany
   */
  export type BodyMetricsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BodyMetrics.
     */
    data: BodyMetricsCreateManyInput | BodyMetricsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BodyMetrics createManyAndReturn
   */
  export type BodyMetricsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMetrics
     */
    select?: BodyMetricsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BodyMetrics.
     */
    data: BodyMetricsCreateManyInput | BodyMetricsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BodyMetrics update
   */
  export type BodyMetricsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMetrics
     */
    select?: BodyMetricsSelect<ExtArgs> | null
    /**
     * The data needed to update a BodyMetrics.
     */
    data: XOR<BodyMetricsUpdateInput, BodyMetricsUncheckedUpdateInput>
    /**
     * Choose, which BodyMetrics to update.
     */
    where: BodyMetricsWhereUniqueInput
  }

  /**
   * BodyMetrics updateMany
   */
  export type BodyMetricsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BodyMetrics.
     */
    data: XOR<BodyMetricsUpdateManyMutationInput, BodyMetricsUncheckedUpdateManyInput>
    /**
     * Filter which BodyMetrics to update
     */
    where?: BodyMetricsWhereInput
  }

  /**
   * BodyMetrics upsert
   */
  export type BodyMetricsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMetrics
     */
    select?: BodyMetricsSelect<ExtArgs> | null
    /**
     * The filter to search for the BodyMetrics to update in case it exists.
     */
    where: BodyMetricsWhereUniqueInput
    /**
     * In case the BodyMetrics found by the `where` argument doesn't exist, create a new BodyMetrics with this data.
     */
    create: XOR<BodyMetricsCreateInput, BodyMetricsUncheckedCreateInput>
    /**
     * In case the BodyMetrics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BodyMetricsUpdateInput, BodyMetricsUncheckedUpdateInput>
  }

  /**
   * BodyMetrics delete
   */
  export type BodyMetricsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMetrics
     */
    select?: BodyMetricsSelect<ExtArgs> | null
    /**
     * Filter which BodyMetrics to delete.
     */
    where: BodyMetricsWhereUniqueInput
  }

  /**
   * BodyMetrics deleteMany
   */
  export type BodyMetricsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BodyMetrics to delete
     */
    where?: BodyMetricsWhereInput
  }

  /**
   * BodyMetrics without action
   */
  export type BodyMetricsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BodyMetrics
     */
    select?: BodyMetricsSelect<ExtArgs> | null
  }


  /**
   * Model AiUsageLog
   */

  export type AggregateAiUsageLog = {
    _count: AiUsageLogCountAggregateOutputType | null
    _avg: AiUsageLogAvgAggregateOutputType | null
    _sum: AiUsageLogSumAggregateOutputType | null
    _min: AiUsageLogMinAggregateOutputType | null
    _max: AiUsageLogMaxAggregateOutputType | null
  }

  export type AiUsageLogAvgAggregateOutputType = {
    promptTokens: number | null
    completionTokens: number | null
    totalTokens: number | null
  }

  export type AiUsageLogSumAggregateOutputType = {
    promptTokens: number | null
    completionTokens: number | null
    totalTokens: number | null
  }

  export type AiUsageLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    provider: string | null
    promptTokens: number | null
    completionTokens: number | null
    totalTokens: number | null
    createdAt: Date | null
  }

  export type AiUsageLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    provider: string | null
    promptTokens: number | null
    completionTokens: number | null
    totalTokens: number | null
    createdAt: Date | null
  }

  export type AiUsageLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    provider: number
    promptTokens: number
    completionTokens: number
    totalTokens: number
    createdAt: number
    _all: number
  }


  export type AiUsageLogAvgAggregateInputType = {
    promptTokens?: true
    completionTokens?: true
    totalTokens?: true
  }

  export type AiUsageLogSumAggregateInputType = {
    promptTokens?: true
    completionTokens?: true
    totalTokens?: true
  }

  export type AiUsageLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    provider?: true
    promptTokens?: true
    completionTokens?: true
    totalTokens?: true
    createdAt?: true
  }

  export type AiUsageLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    provider?: true
    promptTokens?: true
    completionTokens?: true
    totalTokens?: true
    createdAt?: true
  }

  export type AiUsageLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    provider?: true
    promptTokens?: true
    completionTokens?: true
    totalTokens?: true
    createdAt?: true
    _all?: true
  }

  export type AiUsageLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiUsageLog to aggregate.
     */
    where?: AiUsageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiUsageLogs to fetch.
     */
    orderBy?: AiUsageLogOrderByWithRelationInput | AiUsageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AiUsageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiUsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiUsageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AiUsageLogs
    **/
    _count?: true | AiUsageLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AiUsageLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AiUsageLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AiUsageLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AiUsageLogMaxAggregateInputType
  }

  export type GetAiUsageLogAggregateType<T extends AiUsageLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAiUsageLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAiUsageLog[P]>
      : GetScalarType<T[P], AggregateAiUsageLog[P]>
  }




  export type AiUsageLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AiUsageLogWhereInput
    orderBy?: AiUsageLogOrderByWithAggregationInput | AiUsageLogOrderByWithAggregationInput[]
    by: AiUsageLogScalarFieldEnum[] | AiUsageLogScalarFieldEnum
    having?: AiUsageLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AiUsageLogCountAggregateInputType | true
    _avg?: AiUsageLogAvgAggregateInputType
    _sum?: AiUsageLogSumAggregateInputType
    _min?: AiUsageLogMinAggregateInputType
    _max?: AiUsageLogMaxAggregateInputType
  }

  export type AiUsageLogGroupByOutputType = {
    id: string
    userId: string
    action: string
    provider: string
    promptTokens: number
    completionTokens: number
    totalTokens: number
    createdAt: Date
    _count: AiUsageLogCountAggregateOutputType | null
    _avg: AiUsageLogAvgAggregateOutputType | null
    _sum: AiUsageLogSumAggregateOutputType | null
    _min: AiUsageLogMinAggregateOutputType | null
    _max: AiUsageLogMaxAggregateOutputType | null
  }

  type GetAiUsageLogGroupByPayload<T extends AiUsageLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AiUsageLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AiUsageLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AiUsageLogGroupByOutputType[P]>
            : GetScalarType<T[P], AiUsageLogGroupByOutputType[P]>
        }
      >
    >


  export type AiUsageLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    provider?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    totalTokens?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["aiUsageLog"]>

  export type AiUsageLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    provider?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    totalTokens?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["aiUsageLog"]>

  export type AiUsageLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    provider?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    totalTokens?: boolean
    createdAt?: boolean
  }


  export type $AiUsageLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AiUsageLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      action: string
      provider: string
      promptTokens: number
      completionTokens: number
      totalTokens: number
      createdAt: Date
    }, ExtArgs["result"]["aiUsageLog"]>
    composites: {}
  }

  type AiUsageLogGetPayload<S extends boolean | null | undefined | AiUsageLogDefaultArgs> = $Result.GetResult<Prisma.$AiUsageLogPayload, S>

  type AiUsageLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AiUsageLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AiUsageLogCountAggregateInputType | true
    }

  export interface AiUsageLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AiUsageLog'], meta: { name: 'AiUsageLog' } }
    /**
     * Find zero or one AiUsageLog that matches the filter.
     * @param {AiUsageLogFindUniqueArgs} args - Arguments to find a AiUsageLog
     * @example
     * // Get one AiUsageLog
     * const aiUsageLog = await prisma.aiUsageLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AiUsageLogFindUniqueArgs>(args: SelectSubset<T, AiUsageLogFindUniqueArgs<ExtArgs>>): Prisma__AiUsageLogClient<$Result.GetResult<Prisma.$AiUsageLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AiUsageLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AiUsageLogFindUniqueOrThrowArgs} args - Arguments to find a AiUsageLog
     * @example
     * // Get one AiUsageLog
     * const aiUsageLog = await prisma.aiUsageLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AiUsageLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AiUsageLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AiUsageLogClient<$Result.GetResult<Prisma.$AiUsageLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AiUsageLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiUsageLogFindFirstArgs} args - Arguments to find a AiUsageLog
     * @example
     * // Get one AiUsageLog
     * const aiUsageLog = await prisma.aiUsageLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AiUsageLogFindFirstArgs>(args?: SelectSubset<T, AiUsageLogFindFirstArgs<ExtArgs>>): Prisma__AiUsageLogClient<$Result.GetResult<Prisma.$AiUsageLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AiUsageLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiUsageLogFindFirstOrThrowArgs} args - Arguments to find a AiUsageLog
     * @example
     * // Get one AiUsageLog
     * const aiUsageLog = await prisma.aiUsageLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AiUsageLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AiUsageLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AiUsageLogClient<$Result.GetResult<Prisma.$AiUsageLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AiUsageLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiUsageLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AiUsageLogs
     * const aiUsageLogs = await prisma.aiUsageLog.findMany()
     * 
     * // Get first 10 AiUsageLogs
     * const aiUsageLogs = await prisma.aiUsageLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aiUsageLogWithIdOnly = await prisma.aiUsageLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AiUsageLogFindManyArgs>(args?: SelectSubset<T, AiUsageLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiUsageLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AiUsageLog.
     * @param {AiUsageLogCreateArgs} args - Arguments to create a AiUsageLog.
     * @example
     * // Create one AiUsageLog
     * const AiUsageLog = await prisma.aiUsageLog.create({
     *   data: {
     *     // ... data to create a AiUsageLog
     *   }
     * })
     * 
     */
    create<T extends AiUsageLogCreateArgs>(args: SelectSubset<T, AiUsageLogCreateArgs<ExtArgs>>): Prisma__AiUsageLogClient<$Result.GetResult<Prisma.$AiUsageLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AiUsageLogs.
     * @param {AiUsageLogCreateManyArgs} args - Arguments to create many AiUsageLogs.
     * @example
     * // Create many AiUsageLogs
     * const aiUsageLog = await prisma.aiUsageLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AiUsageLogCreateManyArgs>(args?: SelectSubset<T, AiUsageLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AiUsageLogs and returns the data saved in the database.
     * @param {AiUsageLogCreateManyAndReturnArgs} args - Arguments to create many AiUsageLogs.
     * @example
     * // Create many AiUsageLogs
     * const aiUsageLog = await prisma.aiUsageLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AiUsageLogs and only return the `id`
     * const aiUsageLogWithIdOnly = await prisma.aiUsageLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AiUsageLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AiUsageLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AiUsageLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AiUsageLog.
     * @param {AiUsageLogDeleteArgs} args - Arguments to delete one AiUsageLog.
     * @example
     * // Delete one AiUsageLog
     * const AiUsageLog = await prisma.aiUsageLog.delete({
     *   where: {
     *     // ... filter to delete one AiUsageLog
     *   }
     * })
     * 
     */
    delete<T extends AiUsageLogDeleteArgs>(args: SelectSubset<T, AiUsageLogDeleteArgs<ExtArgs>>): Prisma__AiUsageLogClient<$Result.GetResult<Prisma.$AiUsageLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AiUsageLog.
     * @param {AiUsageLogUpdateArgs} args - Arguments to update one AiUsageLog.
     * @example
     * // Update one AiUsageLog
     * const aiUsageLog = await prisma.aiUsageLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AiUsageLogUpdateArgs>(args: SelectSubset<T, AiUsageLogUpdateArgs<ExtArgs>>): Prisma__AiUsageLogClient<$Result.GetResult<Prisma.$AiUsageLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AiUsageLogs.
     * @param {AiUsageLogDeleteManyArgs} args - Arguments to filter AiUsageLogs to delete.
     * @example
     * // Delete a few AiUsageLogs
     * const { count } = await prisma.aiUsageLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AiUsageLogDeleteManyArgs>(args?: SelectSubset<T, AiUsageLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AiUsageLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiUsageLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AiUsageLogs
     * const aiUsageLog = await prisma.aiUsageLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AiUsageLogUpdateManyArgs>(args: SelectSubset<T, AiUsageLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AiUsageLog.
     * @param {AiUsageLogUpsertArgs} args - Arguments to update or create a AiUsageLog.
     * @example
     * // Update or create a AiUsageLog
     * const aiUsageLog = await prisma.aiUsageLog.upsert({
     *   create: {
     *     // ... data to create a AiUsageLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AiUsageLog we want to update
     *   }
     * })
     */
    upsert<T extends AiUsageLogUpsertArgs>(args: SelectSubset<T, AiUsageLogUpsertArgs<ExtArgs>>): Prisma__AiUsageLogClient<$Result.GetResult<Prisma.$AiUsageLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AiUsageLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiUsageLogCountArgs} args - Arguments to filter AiUsageLogs to count.
     * @example
     * // Count the number of AiUsageLogs
     * const count = await prisma.aiUsageLog.count({
     *   where: {
     *     // ... the filter for the AiUsageLogs we want to count
     *   }
     * })
    **/
    count<T extends AiUsageLogCountArgs>(
      args?: Subset<T, AiUsageLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AiUsageLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AiUsageLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiUsageLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AiUsageLogAggregateArgs>(args: Subset<T, AiUsageLogAggregateArgs>): Prisma.PrismaPromise<GetAiUsageLogAggregateType<T>>

    /**
     * Group by AiUsageLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AiUsageLogGroupByArgs} args - Group by arguments.
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
      T extends AiUsageLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AiUsageLogGroupByArgs['orderBy'] }
        : { orderBy?: AiUsageLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AiUsageLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAiUsageLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AiUsageLog model
   */
  readonly fields: AiUsageLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AiUsageLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AiUsageLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AiUsageLog model
   */ 
  interface AiUsageLogFieldRefs {
    readonly id: FieldRef<"AiUsageLog", 'String'>
    readonly userId: FieldRef<"AiUsageLog", 'String'>
    readonly action: FieldRef<"AiUsageLog", 'String'>
    readonly provider: FieldRef<"AiUsageLog", 'String'>
    readonly promptTokens: FieldRef<"AiUsageLog", 'Int'>
    readonly completionTokens: FieldRef<"AiUsageLog", 'Int'>
    readonly totalTokens: FieldRef<"AiUsageLog", 'Int'>
    readonly createdAt: FieldRef<"AiUsageLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AiUsageLog findUnique
   */
  export type AiUsageLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsageLog
     */
    select?: AiUsageLogSelect<ExtArgs> | null
    /**
     * Filter, which AiUsageLog to fetch.
     */
    where: AiUsageLogWhereUniqueInput
  }

  /**
   * AiUsageLog findUniqueOrThrow
   */
  export type AiUsageLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsageLog
     */
    select?: AiUsageLogSelect<ExtArgs> | null
    /**
     * Filter, which AiUsageLog to fetch.
     */
    where: AiUsageLogWhereUniqueInput
  }

  /**
   * AiUsageLog findFirst
   */
  export type AiUsageLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsageLog
     */
    select?: AiUsageLogSelect<ExtArgs> | null
    /**
     * Filter, which AiUsageLog to fetch.
     */
    where?: AiUsageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiUsageLogs to fetch.
     */
    orderBy?: AiUsageLogOrderByWithRelationInput | AiUsageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiUsageLogs.
     */
    cursor?: AiUsageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiUsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiUsageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiUsageLogs.
     */
    distinct?: AiUsageLogScalarFieldEnum | AiUsageLogScalarFieldEnum[]
  }

  /**
   * AiUsageLog findFirstOrThrow
   */
  export type AiUsageLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsageLog
     */
    select?: AiUsageLogSelect<ExtArgs> | null
    /**
     * Filter, which AiUsageLog to fetch.
     */
    where?: AiUsageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiUsageLogs to fetch.
     */
    orderBy?: AiUsageLogOrderByWithRelationInput | AiUsageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AiUsageLogs.
     */
    cursor?: AiUsageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiUsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiUsageLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AiUsageLogs.
     */
    distinct?: AiUsageLogScalarFieldEnum | AiUsageLogScalarFieldEnum[]
  }

  /**
   * AiUsageLog findMany
   */
  export type AiUsageLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsageLog
     */
    select?: AiUsageLogSelect<ExtArgs> | null
    /**
     * Filter, which AiUsageLogs to fetch.
     */
    where?: AiUsageLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AiUsageLogs to fetch.
     */
    orderBy?: AiUsageLogOrderByWithRelationInput | AiUsageLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AiUsageLogs.
     */
    cursor?: AiUsageLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AiUsageLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AiUsageLogs.
     */
    skip?: number
    distinct?: AiUsageLogScalarFieldEnum | AiUsageLogScalarFieldEnum[]
  }

  /**
   * AiUsageLog create
   */
  export type AiUsageLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsageLog
     */
    select?: AiUsageLogSelect<ExtArgs> | null
    /**
     * The data needed to create a AiUsageLog.
     */
    data: XOR<AiUsageLogCreateInput, AiUsageLogUncheckedCreateInput>
  }

  /**
   * AiUsageLog createMany
   */
  export type AiUsageLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AiUsageLogs.
     */
    data: AiUsageLogCreateManyInput | AiUsageLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiUsageLog createManyAndReturn
   */
  export type AiUsageLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsageLog
     */
    select?: AiUsageLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AiUsageLogs.
     */
    data: AiUsageLogCreateManyInput | AiUsageLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AiUsageLog update
   */
  export type AiUsageLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsageLog
     */
    select?: AiUsageLogSelect<ExtArgs> | null
    /**
     * The data needed to update a AiUsageLog.
     */
    data: XOR<AiUsageLogUpdateInput, AiUsageLogUncheckedUpdateInput>
    /**
     * Choose, which AiUsageLog to update.
     */
    where: AiUsageLogWhereUniqueInput
  }

  /**
   * AiUsageLog updateMany
   */
  export type AiUsageLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AiUsageLogs.
     */
    data: XOR<AiUsageLogUpdateManyMutationInput, AiUsageLogUncheckedUpdateManyInput>
    /**
     * Filter which AiUsageLogs to update
     */
    where?: AiUsageLogWhereInput
  }

  /**
   * AiUsageLog upsert
   */
  export type AiUsageLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsageLog
     */
    select?: AiUsageLogSelect<ExtArgs> | null
    /**
     * The filter to search for the AiUsageLog to update in case it exists.
     */
    where: AiUsageLogWhereUniqueInput
    /**
     * In case the AiUsageLog found by the `where` argument doesn't exist, create a new AiUsageLog with this data.
     */
    create: XOR<AiUsageLogCreateInput, AiUsageLogUncheckedCreateInput>
    /**
     * In case the AiUsageLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AiUsageLogUpdateInput, AiUsageLogUncheckedUpdateInput>
  }

  /**
   * AiUsageLog delete
   */
  export type AiUsageLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsageLog
     */
    select?: AiUsageLogSelect<ExtArgs> | null
    /**
     * Filter which AiUsageLog to delete.
     */
    where: AiUsageLogWhereUniqueInput
  }

  /**
   * AiUsageLog deleteMany
   */
  export type AiUsageLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AiUsageLogs to delete
     */
    where?: AiUsageLogWhereInput
  }

  /**
   * AiUsageLog without action
   */
  export type AiUsageLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AiUsageLog
     */
    select?: AiUsageLogSelect<ExtArgs> | null
  }


  /**
   * Model HydrationLog
   */

  export type AggregateHydrationLog = {
    _count: HydrationLogCountAggregateOutputType | null
    _avg: HydrationLogAvgAggregateOutputType | null
    _sum: HydrationLogSumAggregateOutputType | null
    _min: HydrationLogMinAggregateOutputType | null
    _max: HydrationLogMaxAggregateOutputType | null
  }

  export type HydrationLogAvgAggregateOutputType = {
    amountMl: number | null
    dailyGoalMl: number | null
  }

  export type HydrationLogSumAggregateOutputType = {
    amountMl: number | null
    dailyGoalMl: number | null
  }

  export type HydrationLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amountMl: number | null
    dailyGoalMl: number | null
    date: Date | null
    createdAt: Date | null
  }

  export type HydrationLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amountMl: number | null
    dailyGoalMl: number | null
    date: Date | null
    createdAt: Date | null
  }

  export type HydrationLogCountAggregateOutputType = {
    id: number
    userId: number
    amountMl: number
    dailyGoalMl: number
    date: number
    createdAt: number
    _all: number
  }


  export type HydrationLogAvgAggregateInputType = {
    amountMl?: true
    dailyGoalMl?: true
  }

  export type HydrationLogSumAggregateInputType = {
    amountMl?: true
    dailyGoalMl?: true
  }

  export type HydrationLogMinAggregateInputType = {
    id?: true
    userId?: true
    amountMl?: true
    dailyGoalMl?: true
    date?: true
    createdAt?: true
  }

  export type HydrationLogMaxAggregateInputType = {
    id?: true
    userId?: true
    amountMl?: true
    dailyGoalMl?: true
    date?: true
    createdAt?: true
  }

  export type HydrationLogCountAggregateInputType = {
    id?: true
    userId?: true
    amountMl?: true
    dailyGoalMl?: true
    date?: true
    createdAt?: true
    _all?: true
  }

  export type HydrationLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HydrationLog to aggregate.
     */
    where?: HydrationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HydrationLogs to fetch.
     */
    orderBy?: HydrationLogOrderByWithRelationInput | HydrationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HydrationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HydrationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HydrationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HydrationLogs
    **/
    _count?: true | HydrationLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HydrationLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HydrationLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HydrationLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HydrationLogMaxAggregateInputType
  }

  export type GetHydrationLogAggregateType<T extends HydrationLogAggregateArgs> = {
        [P in keyof T & keyof AggregateHydrationLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHydrationLog[P]>
      : GetScalarType<T[P], AggregateHydrationLog[P]>
  }




  export type HydrationLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HydrationLogWhereInput
    orderBy?: HydrationLogOrderByWithAggregationInput | HydrationLogOrderByWithAggregationInput[]
    by: HydrationLogScalarFieldEnum[] | HydrationLogScalarFieldEnum
    having?: HydrationLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HydrationLogCountAggregateInputType | true
    _avg?: HydrationLogAvgAggregateInputType
    _sum?: HydrationLogSumAggregateInputType
    _min?: HydrationLogMinAggregateInputType
    _max?: HydrationLogMaxAggregateInputType
  }

  export type HydrationLogGroupByOutputType = {
    id: string
    userId: string
    amountMl: number
    dailyGoalMl: number
    date: Date
    createdAt: Date
    _count: HydrationLogCountAggregateOutputType | null
    _avg: HydrationLogAvgAggregateOutputType | null
    _sum: HydrationLogSumAggregateOutputType | null
    _min: HydrationLogMinAggregateOutputType | null
    _max: HydrationLogMaxAggregateOutputType | null
  }

  type GetHydrationLogGroupByPayload<T extends HydrationLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HydrationLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HydrationLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HydrationLogGroupByOutputType[P]>
            : GetScalarType<T[P], HydrationLogGroupByOutputType[P]>
        }
      >
    >


  export type HydrationLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amountMl?: boolean
    dailyGoalMl?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["hydrationLog"]>

  export type HydrationLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amountMl?: boolean
    dailyGoalMl?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["hydrationLog"]>

  export type HydrationLogSelectScalar = {
    id?: boolean
    userId?: boolean
    amountMl?: boolean
    dailyGoalMl?: boolean
    date?: boolean
    createdAt?: boolean
  }


  export type $HydrationLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HydrationLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amountMl: number
      dailyGoalMl: number
      date: Date
      createdAt: Date
    }, ExtArgs["result"]["hydrationLog"]>
    composites: {}
  }

  type HydrationLogGetPayload<S extends boolean | null | undefined | HydrationLogDefaultArgs> = $Result.GetResult<Prisma.$HydrationLogPayload, S>

  type HydrationLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HydrationLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HydrationLogCountAggregateInputType | true
    }

  export interface HydrationLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HydrationLog'], meta: { name: 'HydrationLog' } }
    /**
     * Find zero or one HydrationLog that matches the filter.
     * @param {HydrationLogFindUniqueArgs} args - Arguments to find a HydrationLog
     * @example
     * // Get one HydrationLog
     * const hydrationLog = await prisma.hydrationLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HydrationLogFindUniqueArgs>(args: SelectSubset<T, HydrationLogFindUniqueArgs<ExtArgs>>): Prisma__HydrationLogClient<$Result.GetResult<Prisma.$HydrationLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one HydrationLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HydrationLogFindUniqueOrThrowArgs} args - Arguments to find a HydrationLog
     * @example
     * // Get one HydrationLog
     * const hydrationLog = await prisma.hydrationLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HydrationLogFindUniqueOrThrowArgs>(args: SelectSubset<T, HydrationLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HydrationLogClient<$Result.GetResult<Prisma.$HydrationLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first HydrationLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HydrationLogFindFirstArgs} args - Arguments to find a HydrationLog
     * @example
     * // Get one HydrationLog
     * const hydrationLog = await prisma.hydrationLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HydrationLogFindFirstArgs>(args?: SelectSubset<T, HydrationLogFindFirstArgs<ExtArgs>>): Prisma__HydrationLogClient<$Result.GetResult<Prisma.$HydrationLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first HydrationLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HydrationLogFindFirstOrThrowArgs} args - Arguments to find a HydrationLog
     * @example
     * // Get one HydrationLog
     * const hydrationLog = await prisma.hydrationLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HydrationLogFindFirstOrThrowArgs>(args?: SelectSubset<T, HydrationLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__HydrationLogClient<$Result.GetResult<Prisma.$HydrationLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more HydrationLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HydrationLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HydrationLogs
     * const hydrationLogs = await prisma.hydrationLog.findMany()
     * 
     * // Get first 10 HydrationLogs
     * const hydrationLogs = await prisma.hydrationLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hydrationLogWithIdOnly = await prisma.hydrationLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HydrationLogFindManyArgs>(args?: SelectSubset<T, HydrationLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HydrationLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a HydrationLog.
     * @param {HydrationLogCreateArgs} args - Arguments to create a HydrationLog.
     * @example
     * // Create one HydrationLog
     * const HydrationLog = await prisma.hydrationLog.create({
     *   data: {
     *     // ... data to create a HydrationLog
     *   }
     * })
     * 
     */
    create<T extends HydrationLogCreateArgs>(args: SelectSubset<T, HydrationLogCreateArgs<ExtArgs>>): Prisma__HydrationLogClient<$Result.GetResult<Prisma.$HydrationLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many HydrationLogs.
     * @param {HydrationLogCreateManyArgs} args - Arguments to create many HydrationLogs.
     * @example
     * // Create many HydrationLogs
     * const hydrationLog = await prisma.hydrationLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HydrationLogCreateManyArgs>(args?: SelectSubset<T, HydrationLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HydrationLogs and returns the data saved in the database.
     * @param {HydrationLogCreateManyAndReturnArgs} args - Arguments to create many HydrationLogs.
     * @example
     * // Create many HydrationLogs
     * const hydrationLog = await prisma.hydrationLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HydrationLogs and only return the `id`
     * const hydrationLogWithIdOnly = await prisma.hydrationLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HydrationLogCreateManyAndReturnArgs>(args?: SelectSubset<T, HydrationLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HydrationLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a HydrationLog.
     * @param {HydrationLogDeleteArgs} args - Arguments to delete one HydrationLog.
     * @example
     * // Delete one HydrationLog
     * const HydrationLog = await prisma.hydrationLog.delete({
     *   where: {
     *     // ... filter to delete one HydrationLog
     *   }
     * })
     * 
     */
    delete<T extends HydrationLogDeleteArgs>(args: SelectSubset<T, HydrationLogDeleteArgs<ExtArgs>>): Prisma__HydrationLogClient<$Result.GetResult<Prisma.$HydrationLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one HydrationLog.
     * @param {HydrationLogUpdateArgs} args - Arguments to update one HydrationLog.
     * @example
     * // Update one HydrationLog
     * const hydrationLog = await prisma.hydrationLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HydrationLogUpdateArgs>(args: SelectSubset<T, HydrationLogUpdateArgs<ExtArgs>>): Prisma__HydrationLogClient<$Result.GetResult<Prisma.$HydrationLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more HydrationLogs.
     * @param {HydrationLogDeleteManyArgs} args - Arguments to filter HydrationLogs to delete.
     * @example
     * // Delete a few HydrationLogs
     * const { count } = await prisma.hydrationLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HydrationLogDeleteManyArgs>(args?: SelectSubset<T, HydrationLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HydrationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HydrationLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HydrationLogs
     * const hydrationLog = await prisma.hydrationLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HydrationLogUpdateManyArgs>(args: SelectSubset<T, HydrationLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HydrationLog.
     * @param {HydrationLogUpsertArgs} args - Arguments to update or create a HydrationLog.
     * @example
     * // Update or create a HydrationLog
     * const hydrationLog = await prisma.hydrationLog.upsert({
     *   create: {
     *     // ... data to create a HydrationLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HydrationLog we want to update
     *   }
     * })
     */
    upsert<T extends HydrationLogUpsertArgs>(args: SelectSubset<T, HydrationLogUpsertArgs<ExtArgs>>): Prisma__HydrationLogClient<$Result.GetResult<Prisma.$HydrationLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of HydrationLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HydrationLogCountArgs} args - Arguments to filter HydrationLogs to count.
     * @example
     * // Count the number of HydrationLogs
     * const count = await prisma.hydrationLog.count({
     *   where: {
     *     // ... the filter for the HydrationLogs we want to count
     *   }
     * })
    **/
    count<T extends HydrationLogCountArgs>(
      args?: Subset<T, HydrationLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HydrationLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HydrationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HydrationLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HydrationLogAggregateArgs>(args: Subset<T, HydrationLogAggregateArgs>): Prisma.PrismaPromise<GetHydrationLogAggregateType<T>>

    /**
     * Group by HydrationLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HydrationLogGroupByArgs} args - Group by arguments.
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
      T extends HydrationLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HydrationLogGroupByArgs['orderBy'] }
        : { orderBy?: HydrationLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HydrationLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHydrationLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HydrationLog model
   */
  readonly fields: HydrationLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HydrationLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HydrationLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the HydrationLog model
   */ 
  interface HydrationLogFieldRefs {
    readonly id: FieldRef<"HydrationLog", 'String'>
    readonly userId: FieldRef<"HydrationLog", 'String'>
    readonly amountMl: FieldRef<"HydrationLog", 'Int'>
    readonly dailyGoalMl: FieldRef<"HydrationLog", 'Int'>
    readonly date: FieldRef<"HydrationLog", 'DateTime'>
    readonly createdAt: FieldRef<"HydrationLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HydrationLog findUnique
   */
  export type HydrationLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HydrationLog
     */
    select?: HydrationLogSelect<ExtArgs> | null
    /**
     * Filter, which HydrationLog to fetch.
     */
    where: HydrationLogWhereUniqueInput
  }

  /**
   * HydrationLog findUniqueOrThrow
   */
  export type HydrationLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HydrationLog
     */
    select?: HydrationLogSelect<ExtArgs> | null
    /**
     * Filter, which HydrationLog to fetch.
     */
    where: HydrationLogWhereUniqueInput
  }

  /**
   * HydrationLog findFirst
   */
  export type HydrationLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HydrationLog
     */
    select?: HydrationLogSelect<ExtArgs> | null
    /**
     * Filter, which HydrationLog to fetch.
     */
    where?: HydrationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HydrationLogs to fetch.
     */
    orderBy?: HydrationLogOrderByWithRelationInput | HydrationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HydrationLogs.
     */
    cursor?: HydrationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HydrationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HydrationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HydrationLogs.
     */
    distinct?: HydrationLogScalarFieldEnum | HydrationLogScalarFieldEnum[]
  }

  /**
   * HydrationLog findFirstOrThrow
   */
  export type HydrationLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HydrationLog
     */
    select?: HydrationLogSelect<ExtArgs> | null
    /**
     * Filter, which HydrationLog to fetch.
     */
    where?: HydrationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HydrationLogs to fetch.
     */
    orderBy?: HydrationLogOrderByWithRelationInput | HydrationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HydrationLogs.
     */
    cursor?: HydrationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HydrationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HydrationLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HydrationLogs.
     */
    distinct?: HydrationLogScalarFieldEnum | HydrationLogScalarFieldEnum[]
  }

  /**
   * HydrationLog findMany
   */
  export type HydrationLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HydrationLog
     */
    select?: HydrationLogSelect<ExtArgs> | null
    /**
     * Filter, which HydrationLogs to fetch.
     */
    where?: HydrationLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HydrationLogs to fetch.
     */
    orderBy?: HydrationLogOrderByWithRelationInput | HydrationLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HydrationLogs.
     */
    cursor?: HydrationLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HydrationLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HydrationLogs.
     */
    skip?: number
    distinct?: HydrationLogScalarFieldEnum | HydrationLogScalarFieldEnum[]
  }

  /**
   * HydrationLog create
   */
  export type HydrationLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HydrationLog
     */
    select?: HydrationLogSelect<ExtArgs> | null
    /**
     * The data needed to create a HydrationLog.
     */
    data: XOR<HydrationLogCreateInput, HydrationLogUncheckedCreateInput>
  }

  /**
   * HydrationLog createMany
   */
  export type HydrationLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HydrationLogs.
     */
    data: HydrationLogCreateManyInput | HydrationLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HydrationLog createManyAndReturn
   */
  export type HydrationLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HydrationLog
     */
    select?: HydrationLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many HydrationLogs.
     */
    data: HydrationLogCreateManyInput | HydrationLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HydrationLog update
   */
  export type HydrationLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HydrationLog
     */
    select?: HydrationLogSelect<ExtArgs> | null
    /**
     * The data needed to update a HydrationLog.
     */
    data: XOR<HydrationLogUpdateInput, HydrationLogUncheckedUpdateInput>
    /**
     * Choose, which HydrationLog to update.
     */
    where: HydrationLogWhereUniqueInput
  }

  /**
   * HydrationLog updateMany
   */
  export type HydrationLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HydrationLogs.
     */
    data: XOR<HydrationLogUpdateManyMutationInput, HydrationLogUncheckedUpdateManyInput>
    /**
     * Filter which HydrationLogs to update
     */
    where?: HydrationLogWhereInput
  }

  /**
   * HydrationLog upsert
   */
  export type HydrationLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HydrationLog
     */
    select?: HydrationLogSelect<ExtArgs> | null
    /**
     * The filter to search for the HydrationLog to update in case it exists.
     */
    where: HydrationLogWhereUniqueInput
    /**
     * In case the HydrationLog found by the `where` argument doesn't exist, create a new HydrationLog with this data.
     */
    create: XOR<HydrationLogCreateInput, HydrationLogUncheckedCreateInput>
    /**
     * In case the HydrationLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HydrationLogUpdateInput, HydrationLogUncheckedUpdateInput>
  }

  /**
   * HydrationLog delete
   */
  export type HydrationLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HydrationLog
     */
    select?: HydrationLogSelect<ExtArgs> | null
    /**
     * Filter which HydrationLog to delete.
     */
    where: HydrationLogWhereUniqueInput
  }

  /**
   * HydrationLog deleteMany
   */
  export type HydrationLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HydrationLogs to delete
     */
    where?: HydrationLogWhereInput
  }

  /**
   * HydrationLog without action
   */
  export type HydrationLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HydrationLog
     */
    select?: HydrationLogSelect<ExtArgs> | null
  }


  /**
   * Model PerformanceReport
   */

  export type AggregatePerformanceReport = {
    _count: PerformanceReportCountAggregateOutputType | null
    _avg: PerformanceReportAvgAggregateOutputType | null
    _sum: PerformanceReportSumAggregateOutputType | null
    _min: PerformanceReportMinAggregateOutputType | null
    _max: PerformanceReportMaxAggregateOutputType | null
  }

  export type PerformanceReportAvgAggregateOutputType = {
    score: number | null
  }

  export type PerformanceReportSumAggregateOutputType = {
    score: number | null
  }

  export type PerformanceReportMinAggregateOutputType = {
    id: string | null
    userId: string | null
    weekRange: string | null
    score: number | null
    summary: string | null
    focusArea: string | null
    date: Date | null
    createdAt: Date | null
  }

  export type PerformanceReportMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    weekRange: string | null
    score: number | null
    summary: string | null
    focusArea: string | null
    date: Date | null
    createdAt: Date | null
  }

  export type PerformanceReportCountAggregateOutputType = {
    id: number
    userId: number
    weekRange: number
    score: number
    summary: number
    highlights: number
    improvements: number
    focusArea: number
    date: number
    createdAt: number
    _all: number
  }


  export type PerformanceReportAvgAggregateInputType = {
    score?: true
  }

  export type PerformanceReportSumAggregateInputType = {
    score?: true
  }

  export type PerformanceReportMinAggregateInputType = {
    id?: true
    userId?: true
    weekRange?: true
    score?: true
    summary?: true
    focusArea?: true
    date?: true
    createdAt?: true
  }

  export type PerformanceReportMaxAggregateInputType = {
    id?: true
    userId?: true
    weekRange?: true
    score?: true
    summary?: true
    focusArea?: true
    date?: true
    createdAt?: true
  }

  export type PerformanceReportCountAggregateInputType = {
    id?: true
    userId?: true
    weekRange?: true
    score?: true
    summary?: true
    highlights?: true
    improvements?: true
    focusArea?: true
    date?: true
    createdAt?: true
    _all?: true
  }

  export type PerformanceReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PerformanceReport to aggregate.
     */
    where?: PerformanceReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerformanceReports to fetch.
     */
    orderBy?: PerformanceReportOrderByWithRelationInput | PerformanceReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PerformanceReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerformanceReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerformanceReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PerformanceReports
    **/
    _count?: true | PerformanceReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PerformanceReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PerformanceReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerformanceReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerformanceReportMaxAggregateInputType
  }

  export type GetPerformanceReportAggregateType<T extends PerformanceReportAggregateArgs> = {
        [P in keyof T & keyof AggregatePerformanceReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerformanceReport[P]>
      : GetScalarType<T[P], AggregatePerformanceReport[P]>
  }




  export type PerformanceReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerformanceReportWhereInput
    orderBy?: PerformanceReportOrderByWithAggregationInput | PerformanceReportOrderByWithAggregationInput[]
    by: PerformanceReportScalarFieldEnum[] | PerformanceReportScalarFieldEnum
    having?: PerformanceReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerformanceReportCountAggregateInputType | true
    _avg?: PerformanceReportAvgAggregateInputType
    _sum?: PerformanceReportSumAggregateInputType
    _min?: PerformanceReportMinAggregateInputType
    _max?: PerformanceReportMaxAggregateInputType
  }

  export type PerformanceReportGroupByOutputType = {
    id: string
    userId: string
    weekRange: string
    score: number
    summary: string
    highlights: JsonValue
    improvements: JsonValue
    focusArea: string
    date: Date
    createdAt: Date
    _count: PerformanceReportCountAggregateOutputType | null
    _avg: PerformanceReportAvgAggregateOutputType | null
    _sum: PerformanceReportSumAggregateOutputType | null
    _min: PerformanceReportMinAggregateOutputType | null
    _max: PerformanceReportMaxAggregateOutputType | null
  }

  type GetPerformanceReportGroupByPayload<T extends PerformanceReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerformanceReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerformanceReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerformanceReportGroupByOutputType[P]>
            : GetScalarType<T[P], PerformanceReportGroupByOutputType[P]>
        }
      >
    >


  export type PerformanceReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    weekRange?: boolean
    score?: boolean
    summary?: boolean
    highlights?: boolean
    improvements?: boolean
    focusArea?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["performanceReport"]>

  export type PerformanceReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    weekRange?: boolean
    score?: boolean
    summary?: boolean
    highlights?: boolean
    improvements?: boolean
    focusArea?: boolean
    date?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["performanceReport"]>

  export type PerformanceReportSelectScalar = {
    id?: boolean
    userId?: boolean
    weekRange?: boolean
    score?: boolean
    summary?: boolean
    highlights?: boolean
    improvements?: boolean
    focusArea?: boolean
    date?: boolean
    createdAt?: boolean
  }


  export type $PerformanceReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PerformanceReport"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      weekRange: string
      score: number
      summary: string
      highlights: Prisma.JsonValue
      improvements: Prisma.JsonValue
      focusArea: string
      date: Date
      createdAt: Date
    }, ExtArgs["result"]["performanceReport"]>
    composites: {}
  }

  type PerformanceReportGetPayload<S extends boolean | null | undefined | PerformanceReportDefaultArgs> = $Result.GetResult<Prisma.$PerformanceReportPayload, S>

  type PerformanceReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PerformanceReportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PerformanceReportCountAggregateInputType | true
    }

  export interface PerformanceReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PerformanceReport'], meta: { name: 'PerformanceReport' } }
    /**
     * Find zero or one PerformanceReport that matches the filter.
     * @param {PerformanceReportFindUniqueArgs} args - Arguments to find a PerformanceReport
     * @example
     * // Get one PerformanceReport
     * const performanceReport = await prisma.performanceReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PerformanceReportFindUniqueArgs>(args: SelectSubset<T, PerformanceReportFindUniqueArgs<ExtArgs>>): Prisma__PerformanceReportClient<$Result.GetResult<Prisma.$PerformanceReportPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PerformanceReport that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PerformanceReportFindUniqueOrThrowArgs} args - Arguments to find a PerformanceReport
     * @example
     * // Get one PerformanceReport
     * const performanceReport = await prisma.performanceReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PerformanceReportFindUniqueOrThrowArgs>(args: SelectSubset<T, PerformanceReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PerformanceReportClient<$Result.GetResult<Prisma.$PerformanceReportPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PerformanceReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceReportFindFirstArgs} args - Arguments to find a PerformanceReport
     * @example
     * // Get one PerformanceReport
     * const performanceReport = await prisma.performanceReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PerformanceReportFindFirstArgs>(args?: SelectSubset<T, PerformanceReportFindFirstArgs<ExtArgs>>): Prisma__PerformanceReportClient<$Result.GetResult<Prisma.$PerformanceReportPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PerformanceReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceReportFindFirstOrThrowArgs} args - Arguments to find a PerformanceReport
     * @example
     * // Get one PerformanceReport
     * const performanceReport = await prisma.performanceReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PerformanceReportFindFirstOrThrowArgs>(args?: SelectSubset<T, PerformanceReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__PerformanceReportClient<$Result.GetResult<Prisma.$PerformanceReportPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PerformanceReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PerformanceReports
     * const performanceReports = await prisma.performanceReport.findMany()
     * 
     * // Get first 10 PerformanceReports
     * const performanceReports = await prisma.performanceReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const performanceReportWithIdOnly = await prisma.performanceReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PerformanceReportFindManyArgs>(args?: SelectSubset<T, PerformanceReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerformanceReportPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PerformanceReport.
     * @param {PerformanceReportCreateArgs} args - Arguments to create a PerformanceReport.
     * @example
     * // Create one PerformanceReport
     * const PerformanceReport = await prisma.performanceReport.create({
     *   data: {
     *     // ... data to create a PerformanceReport
     *   }
     * })
     * 
     */
    create<T extends PerformanceReportCreateArgs>(args: SelectSubset<T, PerformanceReportCreateArgs<ExtArgs>>): Prisma__PerformanceReportClient<$Result.GetResult<Prisma.$PerformanceReportPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PerformanceReports.
     * @param {PerformanceReportCreateManyArgs} args - Arguments to create many PerformanceReports.
     * @example
     * // Create many PerformanceReports
     * const performanceReport = await prisma.performanceReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PerformanceReportCreateManyArgs>(args?: SelectSubset<T, PerformanceReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PerformanceReports and returns the data saved in the database.
     * @param {PerformanceReportCreateManyAndReturnArgs} args - Arguments to create many PerformanceReports.
     * @example
     * // Create many PerformanceReports
     * const performanceReport = await prisma.performanceReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PerformanceReports and only return the `id`
     * const performanceReportWithIdOnly = await prisma.performanceReport.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PerformanceReportCreateManyAndReturnArgs>(args?: SelectSubset<T, PerformanceReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerformanceReportPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PerformanceReport.
     * @param {PerformanceReportDeleteArgs} args - Arguments to delete one PerformanceReport.
     * @example
     * // Delete one PerformanceReport
     * const PerformanceReport = await prisma.performanceReport.delete({
     *   where: {
     *     // ... filter to delete one PerformanceReport
     *   }
     * })
     * 
     */
    delete<T extends PerformanceReportDeleteArgs>(args: SelectSubset<T, PerformanceReportDeleteArgs<ExtArgs>>): Prisma__PerformanceReportClient<$Result.GetResult<Prisma.$PerformanceReportPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PerformanceReport.
     * @param {PerformanceReportUpdateArgs} args - Arguments to update one PerformanceReport.
     * @example
     * // Update one PerformanceReport
     * const performanceReport = await prisma.performanceReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PerformanceReportUpdateArgs>(args: SelectSubset<T, PerformanceReportUpdateArgs<ExtArgs>>): Prisma__PerformanceReportClient<$Result.GetResult<Prisma.$PerformanceReportPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PerformanceReports.
     * @param {PerformanceReportDeleteManyArgs} args - Arguments to filter PerformanceReports to delete.
     * @example
     * // Delete a few PerformanceReports
     * const { count } = await prisma.performanceReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PerformanceReportDeleteManyArgs>(args?: SelectSubset<T, PerformanceReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PerformanceReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PerformanceReports
     * const performanceReport = await prisma.performanceReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PerformanceReportUpdateManyArgs>(args: SelectSubset<T, PerformanceReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PerformanceReport.
     * @param {PerformanceReportUpsertArgs} args - Arguments to update or create a PerformanceReport.
     * @example
     * // Update or create a PerformanceReport
     * const performanceReport = await prisma.performanceReport.upsert({
     *   create: {
     *     // ... data to create a PerformanceReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PerformanceReport we want to update
     *   }
     * })
     */
    upsert<T extends PerformanceReportUpsertArgs>(args: SelectSubset<T, PerformanceReportUpsertArgs<ExtArgs>>): Prisma__PerformanceReportClient<$Result.GetResult<Prisma.$PerformanceReportPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PerformanceReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceReportCountArgs} args - Arguments to filter PerformanceReports to count.
     * @example
     * // Count the number of PerformanceReports
     * const count = await prisma.performanceReport.count({
     *   where: {
     *     // ... the filter for the PerformanceReports we want to count
     *   }
     * })
    **/
    count<T extends PerformanceReportCountArgs>(
      args?: Subset<T, PerformanceReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerformanceReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PerformanceReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PerformanceReportAggregateArgs>(args: Subset<T, PerformanceReportAggregateArgs>): Prisma.PrismaPromise<GetPerformanceReportAggregateType<T>>

    /**
     * Group by PerformanceReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerformanceReportGroupByArgs} args - Group by arguments.
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
      T extends PerformanceReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerformanceReportGroupByArgs['orderBy'] }
        : { orderBy?: PerformanceReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PerformanceReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerformanceReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PerformanceReport model
   */
  readonly fields: PerformanceReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PerformanceReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerformanceReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PerformanceReport model
   */ 
  interface PerformanceReportFieldRefs {
    readonly id: FieldRef<"PerformanceReport", 'String'>
    readonly userId: FieldRef<"PerformanceReport", 'String'>
    readonly weekRange: FieldRef<"PerformanceReport", 'String'>
    readonly score: FieldRef<"PerformanceReport", 'Int'>
    readonly summary: FieldRef<"PerformanceReport", 'String'>
    readonly highlights: FieldRef<"PerformanceReport", 'Json'>
    readonly improvements: FieldRef<"PerformanceReport", 'Json'>
    readonly focusArea: FieldRef<"PerformanceReport", 'String'>
    readonly date: FieldRef<"PerformanceReport", 'DateTime'>
    readonly createdAt: FieldRef<"PerformanceReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PerformanceReport findUnique
   */
  export type PerformanceReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceReport
     */
    select?: PerformanceReportSelect<ExtArgs> | null
    /**
     * Filter, which PerformanceReport to fetch.
     */
    where: PerformanceReportWhereUniqueInput
  }

  /**
   * PerformanceReport findUniqueOrThrow
   */
  export type PerformanceReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceReport
     */
    select?: PerformanceReportSelect<ExtArgs> | null
    /**
     * Filter, which PerformanceReport to fetch.
     */
    where: PerformanceReportWhereUniqueInput
  }

  /**
   * PerformanceReport findFirst
   */
  export type PerformanceReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceReport
     */
    select?: PerformanceReportSelect<ExtArgs> | null
    /**
     * Filter, which PerformanceReport to fetch.
     */
    where?: PerformanceReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerformanceReports to fetch.
     */
    orderBy?: PerformanceReportOrderByWithRelationInput | PerformanceReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PerformanceReports.
     */
    cursor?: PerformanceReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerformanceReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerformanceReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PerformanceReports.
     */
    distinct?: PerformanceReportScalarFieldEnum | PerformanceReportScalarFieldEnum[]
  }

  /**
   * PerformanceReport findFirstOrThrow
   */
  export type PerformanceReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceReport
     */
    select?: PerformanceReportSelect<ExtArgs> | null
    /**
     * Filter, which PerformanceReport to fetch.
     */
    where?: PerformanceReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerformanceReports to fetch.
     */
    orderBy?: PerformanceReportOrderByWithRelationInput | PerformanceReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PerformanceReports.
     */
    cursor?: PerformanceReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerformanceReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerformanceReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PerformanceReports.
     */
    distinct?: PerformanceReportScalarFieldEnum | PerformanceReportScalarFieldEnum[]
  }

  /**
   * PerformanceReport findMany
   */
  export type PerformanceReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceReport
     */
    select?: PerformanceReportSelect<ExtArgs> | null
    /**
     * Filter, which PerformanceReports to fetch.
     */
    where?: PerformanceReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerformanceReports to fetch.
     */
    orderBy?: PerformanceReportOrderByWithRelationInput | PerformanceReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PerformanceReports.
     */
    cursor?: PerformanceReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerformanceReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerformanceReports.
     */
    skip?: number
    distinct?: PerformanceReportScalarFieldEnum | PerformanceReportScalarFieldEnum[]
  }

  /**
   * PerformanceReport create
   */
  export type PerformanceReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceReport
     */
    select?: PerformanceReportSelect<ExtArgs> | null
    /**
     * The data needed to create a PerformanceReport.
     */
    data: XOR<PerformanceReportCreateInput, PerformanceReportUncheckedCreateInput>
  }

  /**
   * PerformanceReport createMany
   */
  export type PerformanceReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PerformanceReports.
     */
    data: PerformanceReportCreateManyInput | PerformanceReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PerformanceReport createManyAndReturn
   */
  export type PerformanceReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceReport
     */
    select?: PerformanceReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PerformanceReports.
     */
    data: PerformanceReportCreateManyInput | PerformanceReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PerformanceReport update
   */
  export type PerformanceReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceReport
     */
    select?: PerformanceReportSelect<ExtArgs> | null
    /**
     * The data needed to update a PerformanceReport.
     */
    data: XOR<PerformanceReportUpdateInput, PerformanceReportUncheckedUpdateInput>
    /**
     * Choose, which PerformanceReport to update.
     */
    where: PerformanceReportWhereUniqueInput
  }

  /**
   * PerformanceReport updateMany
   */
  export type PerformanceReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PerformanceReports.
     */
    data: XOR<PerformanceReportUpdateManyMutationInput, PerformanceReportUncheckedUpdateManyInput>
    /**
     * Filter which PerformanceReports to update
     */
    where?: PerformanceReportWhereInput
  }

  /**
   * PerformanceReport upsert
   */
  export type PerformanceReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceReport
     */
    select?: PerformanceReportSelect<ExtArgs> | null
    /**
     * The filter to search for the PerformanceReport to update in case it exists.
     */
    where: PerformanceReportWhereUniqueInput
    /**
     * In case the PerformanceReport found by the `where` argument doesn't exist, create a new PerformanceReport with this data.
     */
    create: XOR<PerformanceReportCreateInput, PerformanceReportUncheckedCreateInput>
    /**
     * In case the PerformanceReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PerformanceReportUpdateInput, PerformanceReportUncheckedUpdateInput>
  }

  /**
   * PerformanceReport delete
   */
  export type PerformanceReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceReport
     */
    select?: PerformanceReportSelect<ExtArgs> | null
    /**
     * Filter which PerformanceReport to delete.
     */
    where: PerformanceReportWhereUniqueInput
  }

  /**
   * PerformanceReport deleteMany
   */
  export type PerformanceReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PerformanceReports to delete
     */
    where?: PerformanceReportWhereInput
  }

  /**
   * PerformanceReport without action
   */
  export type PerformanceReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerformanceReport
     */
    select?: PerformanceReportSelect<ExtArgs> | null
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


  export const DailyProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    caloriesTarget: 'caloriesTarget',
    caloriesActual: 'caloriesActual',
    proteinTarget: 'proteinTarget',
    proteinActual: 'proteinActual',
    carbsTarget: 'carbsTarget',
    carbsActual: 'carbsActual',
    fatTarget: 'fatTarget',
    fatActual: 'fatActual',
    mealsLogged: 'mealsLogged',
    isAdherent: 'isAdherent',
    fatigueScore: 'fatigueScore',
    hydrationActual: 'hydrationActual',
    stepCount: 'stepCount',
    source: 'source',
    supplementsLogged: 'supplementsLogged',
    lightExposureCompleted: 'lightExposureCompleted',
    planId: 'planId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DailyProgressScalarFieldEnum = (typeof DailyProgressScalarFieldEnum)[keyof typeof DailyProgressScalarFieldEnum]


  export const StreakScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    currentStreak: 'currentStreak',
    longestStreak: 'longestStreak',
    lastAdherentDate: 'lastAdherentDate',
    updatedAt: 'updatedAt'
  };

  export type StreakScalarFieldEnum = (typeof StreakScalarFieldEnum)[keyof typeof StreakScalarFieldEnum]


  export const BodyMetricsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    weightKg: 'weightKg',
    heightCm: 'heightCm',
    bodyFatPct: 'bodyFatPct',
    muscleMassKg: 'muscleMassKg',
    bmi: 'bmi',
    chestCm: 'chestCm',
    waistCm: 'waistCm',
    hipsCm: 'hipsCm',
    armsCm: 'armsCm',
    thighsCm: 'thighsCm',
    calvesCm: 'calvesCm',
    recordedAt: 'recordedAt',
    createdAt: 'createdAt'
  };

  export type BodyMetricsScalarFieldEnum = (typeof BodyMetricsScalarFieldEnum)[keyof typeof BodyMetricsScalarFieldEnum]


  export const AiUsageLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    provider: 'provider',
    promptTokens: 'promptTokens',
    completionTokens: 'completionTokens',
    totalTokens: 'totalTokens',
    createdAt: 'createdAt'
  };

  export type AiUsageLogScalarFieldEnum = (typeof AiUsageLogScalarFieldEnum)[keyof typeof AiUsageLogScalarFieldEnum]


  export const HydrationLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amountMl: 'amountMl',
    dailyGoalMl: 'dailyGoalMl',
    date: 'date',
    createdAt: 'createdAt'
  };

  export type HydrationLogScalarFieldEnum = (typeof HydrationLogScalarFieldEnum)[keyof typeof HydrationLogScalarFieldEnum]


  export const PerformanceReportScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    weekRange: 'weekRange',
    score: 'score',
    summary: 'summary',
    highlights: 'highlights',
    improvements: 'improvements',
    focusArea: 'focusArea',
    date: 'date',
    createdAt: 'createdAt'
  };

  export type PerformanceReportScalarFieldEnum = (typeof PerformanceReportScalarFieldEnum)[keyof typeof PerformanceReportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type DailyProgressWhereInput = {
    AND?: DailyProgressWhereInput | DailyProgressWhereInput[]
    OR?: DailyProgressWhereInput[]
    NOT?: DailyProgressWhereInput | DailyProgressWhereInput[]
    id?: StringFilter<"DailyProgress"> | string
    userId?: StringFilter<"DailyProgress"> | string
    date?: DateTimeFilter<"DailyProgress"> | Date | string
    caloriesTarget?: FloatNullableFilter<"DailyProgress"> | number | null
    caloriesActual?: FloatFilter<"DailyProgress"> | number
    proteinTarget?: FloatNullableFilter<"DailyProgress"> | number | null
    proteinActual?: FloatFilter<"DailyProgress"> | number
    carbsTarget?: FloatNullableFilter<"DailyProgress"> | number | null
    carbsActual?: FloatFilter<"DailyProgress"> | number
    fatTarget?: FloatNullableFilter<"DailyProgress"> | number | null
    fatActual?: FloatFilter<"DailyProgress"> | number
    mealsLogged?: IntFilter<"DailyProgress"> | number
    isAdherent?: BoolFilter<"DailyProgress"> | boolean
    fatigueScore?: IntFilter<"DailyProgress"> | number
    hydrationActual?: FloatFilter<"DailyProgress"> | number
    stepCount?: IntFilter<"DailyProgress"> | number
    source?: StringFilter<"DailyProgress"> | string
    supplementsLogged?: JsonNullableFilter<"DailyProgress">
    lightExposureCompleted?: BoolFilter<"DailyProgress"> | boolean
    planId?: StringNullableFilter<"DailyProgress"> | string | null
    createdAt?: DateTimeFilter<"DailyProgress"> | Date | string
    updatedAt?: DateTimeFilter<"DailyProgress"> | Date | string
  }

  export type DailyProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    caloriesTarget?: SortOrderInput | SortOrder
    caloriesActual?: SortOrder
    proteinTarget?: SortOrderInput | SortOrder
    proteinActual?: SortOrder
    carbsTarget?: SortOrderInput | SortOrder
    carbsActual?: SortOrder
    fatTarget?: SortOrderInput | SortOrder
    fatActual?: SortOrder
    mealsLogged?: SortOrder
    isAdherent?: SortOrder
    fatigueScore?: SortOrder
    hydrationActual?: SortOrder
    stepCount?: SortOrder
    source?: SortOrder
    supplementsLogged?: SortOrderInput | SortOrder
    lightExposureCompleted?: SortOrder
    planId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_date?: DailyProgressUserIdDateCompoundUniqueInput
    AND?: DailyProgressWhereInput | DailyProgressWhereInput[]
    OR?: DailyProgressWhereInput[]
    NOT?: DailyProgressWhereInput | DailyProgressWhereInput[]
    userId?: StringFilter<"DailyProgress"> | string
    date?: DateTimeFilter<"DailyProgress"> | Date | string
    caloriesTarget?: FloatNullableFilter<"DailyProgress"> | number | null
    caloriesActual?: FloatFilter<"DailyProgress"> | number
    proteinTarget?: FloatNullableFilter<"DailyProgress"> | number | null
    proteinActual?: FloatFilter<"DailyProgress"> | number
    carbsTarget?: FloatNullableFilter<"DailyProgress"> | number | null
    carbsActual?: FloatFilter<"DailyProgress"> | number
    fatTarget?: FloatNullableFilter<"DailyProgress"> | number | null
    fatActual?: FloatFilter<"DailyProgress"> | number
    mealsLogged?: IntFilter<"DailyProgress"> | number
    isAdherent?: BoolFilter<"DailyProgress"> | boolean
    fatigueScore?: IntFilter<"DailyProgress"> | number
    hydrationActual?: FloatFilter<"DailyProgress"> | number
    stepCount?: IntFilter<"DailyProgress"> | number
    source?: StringFilter<"DailyProgress"> | string
    supplementsLogged?: JsonNullableFilter<"DailyProgress">
    lightExposureCompleted?: BoolFilter<"DailyProgress"> | boolean
    planId?: StringNullableFilter<"DailyProgress"> | string | null
    createdAt?: DateTimeFilter<"DailyProgress"> | Date | string
    updatedAt?: DateTimeFilter<"DailyProgress"> | Date | string
  }, "id" | "userId_date">

  export type DailyProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    caloriesTarget?: SortOrderInput | SortOrder
    caloriesActual?: SortOrder
    proteinTarget?: SortOrderInput | SortOrder
    proteinActual?: SortOrder
    carbsTarget?: SortOrderInput | SortOrder
    carbsActual?: SortOrder
    fatTarget?: SortOrderInput | SortOrder
    fatActual?: SortOrder
    mealsLogged?: SortOrder
    isAdherent?: SortOrder
    fatigueScore?: SortOrder
    hydrationActual?: SortOrder
    stepCount?: SortOrder
    source?: SortOrder
    supplementsLogged?: SortOrderInput | SortOrder
    lightExposureCompleted?: SortOrder
    planId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DailyProgressCountOrderByAggregateInput
    _avg?: DailyProgressAvgOrderByAggregateInput
    _max?: DailyProgressMaxOrderByAggregateInput
    _min?: DailyProgressMinOrderByAggregateInput
    _sum?: DailyProgressSumOrderByAggregateInput
  }

  export type DailyProgressScalarWhereWithAggregatesInput = {
    AND?: DailyProgressScalarWhereWithAggregatesInput | DailyProgressScalarWhereWithAggregatesInput[]
    OR?: DailyProgressScalarWhereWithAggregatesInput[]
    NOT?: DailyProgressScalarWhereWithAggregatesInput | DailyProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailyProgress"> | string
    userId?: StringWithAggregatesFilter<"DailyProgress"> | string
    date?: DateTimeWithAggregatesFilter<"DailyProgress"> | Date | string
    caloriesTarget?: FloatNullableWithAggregatesFilter<"DailyProgress"> | number | null
    caloriesActual?: FloatWithAggregatesFilter<"DailyProgress"> | number
    proteinTarget?: FloatNullableWithAggregatesFilter<"DailyProgress"> | number | null
    proteinActual?: FloatWithAggregatesFilter<"DailyProgress"> | number
    carbsTarget?: FloatNullableWithAggregatesFilter<"DailyProgress"> | number | null
    carbsActual?: FloatWithAggregatesFilter<"DailyProgress"> | number
    fatTarget?: FloatNullableWithAggregatesFilter<"DailyProgress"> | number | null
    fatActual?: FloatWithAggregatesFilter<"DailyProgress"> | number
    mealsLogged?: IntWithAggregatesFilter<"DailyProgress"> | number
    isAdherent?: BoolWithAggregatesFilter<"DailyProgress"> | boolean
    fatigueScore?: IntWithAggregatesFilter<"DailyProgress"> | number
    hydrationActual?: FloatWithAggregatesFilter<"DailyProgress"> | number
    stepCount?: IntWithAggregatesFilter<"DailyProgress"> | number
    source?: StringWithAggregatesFilter<"DailyProgress"> | string
    supplementsLogged?: JsonNullableWithAggregatesFilter<"DailyProgress">
    lightExposureCompleted?: BoolWithAggregatesFilter<"DailyProgress"> | boolean
    planId?: StringNullableWithAggregatesFilter<"DailyProgress"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DailyProgress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DailyProgress"> | Date | string
  }

  export type StreakWhereInput = {
    AND?: StreakWhereInput | StreakWhereInput[]
    OR?: StreakWhereInput[]
    NOT?: StreakWhereInput | StreakWhereInput[]
    id?: StringFilter<"Streak"> | string
    userId?: StringFilter<"Streak"> | string
    currentStreak?: IntFilter<"Streak"> | number
    longestStreak?: IntFilter<"Streak"> | number
    lastAdherentDate?: DateTimeNullableFilter<"Streak"> | Date | string | null
    updatedAt?: DateTimeFilter<"Streak"> | Date | string
  }

  export type StreakOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastAdherentDate?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type StreakWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: StreakWhereInput | StreakWhereInput[]
    OR?: StreakWhereInput[]
    NOT?: StreakWhereInput | StreakWhereInput[]
    currentStreak?: IntFilter<"Streak"> | number
    longestStreak?: IntFilter<"Streak"> | number
    lastAdherentDate?: DateTimeNullableFilter<"Streak"> | Date | string | null
    updatedAt?: DateTimeFilter<"Streak"> | Date | string
  }, "id" | "userId">

  export type StreakOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastAdherentDate?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: StreakCountOrderByAggregateInput
    _avg?: StreakAvgOrderByAggregateInput
    _max?: StreakMaxOrderByAggregateInput
    _min?: StreakMinOrderByAggregateInput
    _sum?: StreakSumOrderByAggregateInput
  }

  export type StreakScalarWhereWithAggregatesInput = {
    AND?: StreakScalarWhereWithAggregatesInput | StreakScalarWhereWithAggregatesInput[]
    OR?: StreakScalarWhereWithAggregatesInput[]
    NOT?: StreakScalarWhereWithAggregatesInput | StreakScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Streak"> | string
    userId?: StringWithAggregatesFilter<"Streak"> | string
    currentStreak?: IntWithAggregatesFilter<"Streak"> | number
    longestStreak?: IntWithAggregatesFilter<"Streak"> | number
    lastAdherentDate?: DateTimeNullableWithAggregatesFilter<"Streak"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Streak"> | Date | string
  }

  export type BodyMetricsWhereInput = {
    AND?: BodyMetricsWhereInput | BodyMetricsWhereInput[]
    OR?: BodyMetricsWhereInput[]
    NOT?: BodyMetricsWhereInput | BodyMetricsWhereInput[]
    id?: StringFilter<"BodyMetrics"> | string
    userId?: StringFilter<"BodyMetrics"> | string
    weightKg?: FloatNullableFilter<"BodyMetrics"> | number | null
    heightCm?: FloatNullableFilter<"BodyMetrics"> | number | null
    bodyFatPct?: FloatNullableFilter<"BodyMetrics"> | number | null
    muscleMassKg?: FloatNullableFilter<"BodyMetrics"> | number | null
    bmi?: FloatNullableFilter<"BodyMetrics"> | number | null
    chestCm?: FloatNullableFilter<"BodyMetrics"> | number | null
    waistCm?: FloatNullableFilter<"BodyMetrics"> | number | null
    hipsCm?: FloatNullableFilter<"BodyMetrics"> | number | null
    armsCm?: FloatNullableFilter<"BodyMetrics"> | number | null
    thighsCm?: FloatNullableFilter<"BodyMetrics"> | number | null
    calvesCm?: FloatNullableFilter<"BodyMetrics"> | number | null
    recordedAt?: DateTimeFilter<"BodyMetrics"> | Date | string
    createdAt?: DateTimeFilter<"BodyMetrics"> | Date | string
  }

  export type BodyMetricsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    weightKg?: SortOrderInput | SortOrder
    heightCm?: SortOrderInput | SortOrder
    bodyFatPct?: SortOrderInput | SortOrder
    muscleMassKg?: SortOrderInput | SortOrder
    bmi?: SortOrderInput | SortOrder
    chestCm?: SortOrderInput | SortOrder
    waistCm?: SortOrderInput | SortOrder
    hipsCm?: SortOrderInput | SortOrder
    armsCm?: SortOrderInput | SortOrder
    thighsCm?: SortOrderInput | SortOrder
    calvesCm?: SortOrderInput | SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BodyMetricsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BodyMetricsWhereInput | BodyMetricsWhereInput[]
    OR?: BodyMetricsWhereInput[]
    NOT?: BodyMetricsWhereInput | BodyMetricsWhereInput[]
    userId?: StringFilter<"BodyMetrics"> | string
    weightKg?: FloatNullableFilter<"BodyMetrics"> | number | null
    heightCm?: FloatNullableFilter<"BodyMetrics"> | number | null
    bodyFatPct?: FloatNullableFilter<"BodyMetrics"> | number | null
    muscleMassKg?: FloatNullableFilter<"BodyMetrics"> | number | null
    bmi?: FloatNullableFilter<"BodyMetrics"> | number | null
    chestCm?: FloatNullableFilter<"BodyMetrics"> | number | null
    waistCm?: FloatNullableFilter<"BodyMetrics"> | number | null
    hipsCm?: FloatNullableFilter<"BodyMetrics"> | number | null
    armsCm?: FloatNullableFilter<"BodyMetrics"> | number | null
    thighsCm?: FloatNullableFilter<"BodyMetrics"> | number | null
    calvesCm?: FloatNullableFilter<"BodyMetrics"> | number | null
    recordedAt?: DateTimeFilter<"BodyMetrics"> | Date | string
    createdAt?: DateTimeFilter<"BodyMetrics"> | Date | string
  }, "id">

  export type BodyMetricsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    weightKg?: SortOrderInput | SortOrder
    heightCm?: SortOrderInput | SortOrder
    bodyFatPct?: SortOrderInput | SortOrder
    muscleMassKg?: SortOrderInput | SortOrder
    bmi?: SortOrderInput | SortOrder
    chestCm?: SortOrderInput | SortOrder
    waistCm?: SortOrderInput | SortOrder
    hipsCm?: SortOrderInput | SortOrder
    armsCm?: SortOrderInput | SortOrder
    thighsCm?: SortOrderInput | SortOrder
    calvesCm?: SortOrderInput | SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
    _count?: BodyMetricsCountOrderByAggregateInput
    _avg?: BodyMetricsAvgOrderByAggregateInput
    _max?: BodyMetricsMaxOrderByAggregateInput
    _min?: BodyMetricsMinOrderByAggregateInput
    _sum?: BodyMetricsSumOrderByAggregateInput
  }

  export type BodyMetricsScalarWhereWithAggregatesInput = {
    AND?: BodyMetricsScalarWhereWithAggregatesInput | BodyMetricsScalarWhereWithAggregatesInput[]
    OR?: BodyMetricsScalarWhereWithAggregatesInput[]
    NOT?: BodyMetricsScalarWhereWithAggregatesInput | BodyMetricsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BodyMetrics"> | string
    userId?: StringWithAggregatesFilter<"BodyMetrics"> | string
    weightKg?: FloatNullableWithAggregatesFilter<"BodyMetrics"> | number | null
    heightCm?: FloatNullableWithAggregatesFilter<"BodyMetrics"> | number | null
    bodyFatPct?: FloatNullableWithAggregatesFilter<"BodyMetrics"> | number | null
    muscleMassKg?: FloatNullableWithAggregatesFilter<"BodyMetrics"> | number | null
    bmi?: FloatNullableWithAggregatesFilter<"BodyMetrics"> | number | null
    chestCm?: FloatNullableWithAggregatesFilter<"BodyMetrics"> | number | null
    waistCm?: FloatNullableWithAggregatesFilter<"BodyMetrics"> | number | null
    hipsCm?: FloatNullableWithAggregatesFilter<"BodyMetrics"> | number | null
    armsCm?: FloatNullableWithAggregatesFilter<"BodyMetrics"> | number | null
    thighsCm?: FloatNullableWithAggregatesFilter<"BodyMetrics"> | number | null
    calvesCm?: FloatNullableWithAggregatesFilter<"BodyMetrics"> | number | null
    recordedAt?: DateTimeWithAggregatesFilter<"BodyMetrics"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"BodyMetrics"> | Date | string
  }

  export type AiUsageLogWhereInput = {
    AND?: AiUsageLogWhereInput | AiUsageLogWhereInput[]
    OR?: AiUsageLogWhereInput[]
    NOT?: AiUsageLogWhereInput | AiUsageLogWhereInput[]
    id?: StringFilter<"AiUsageLog"> | string
    userId?: StringFilter<"AiUsageLog"> | string
    action?: StringFilter<"AiUsageLog"> | string
    provider?: StringFilter<"AiUsageLog"> | string
    promptTokens?: IntFilter<"AiUsageLog"> | number
    completionTokens?: IntFilter<"AiUsageLog"> | number
    totalTokens?: IntFilter<"AiUsageLog"> | number
    createdAt?: DateTimeFilter<"AiUsageLog"> | Date | string
  }

  export type AiUsageLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    provider?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    totalTokens?: SortOrder
    createdAt?: SortOrder
  }

  export type AiUsageLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AiUsageLogWhereInput | AiUsageLogWhereInput[]
    OR?: AiUsageLogWhereInput[]
    NOT?: AiUsageLogWhereInput | AiUsageLogWhereInput[]
    userId?: StringFilter<"AiUsageLog"> | string
    action?: StringFilter<"AiUsageLog"> | string
    provider?: StringFilter<"AiUsageLog"> | string
    promptTokens?: IntFilter<"AiUsageLog"> | number
    completionTokens?: IntFilter<"AiUsageLog"> | number
    totalTokens?: IntFilter<"AiUsageLog"> | number
    createdAt?: DateTimeFilter<"AiUsageLog"> | Date | string
  }, "id">

  export type AiUsageLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    provider?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    totalTokens?: SortOrder
    createdAt?: SortOrder
    _count?: AiUsageLogCountOrderByAggregateInput
    _avg?: AiUsageLogAvgOrderByAggregateInput
    _max?: AiUsageLogMaxOrderByAggregateInput
    _min?: AiUsageLogMinOrderByAggregateInput
    _sum?: AiUsageLogSumOrderByAggregateInput
  }

  export type AiUsageLogScalarWhereWithAggregatesInput = {
    AND?: AiUsageLogScalarWhereWithAggregatesInput | AiUsageLogScalarWhereWithAggregatesInput[]
    OR?: AiUsageLogScalarWhereWithAggregatesInput[]
    NOT?: AiUsageLogScalarWhereWithAggregatesInput | AiUsageLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AiUsageLog"> | string
    userId?: StringWithAggregatesFilter<"AiUsageLog"> | string
    action?: StringWithAggregatesFilter<"AiUsageLog"> | string
    provider?: StringWithAggregatesFilter<"AiUsageLog"> | string
    promptTokens?: IntWithAggregatesFilter<"AiUsageLog"> | number
    completionTokens?: IntWithAggregatesFilter<"AiUsageLog"> | number
    totalTokens?: IntWithAggregatesFilter<"AiUsageLog"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AiUsageLog"> | Date | string
  }

  export type HydrationLogWhereInput = {
    AND?: HydrationLogWhereInput | HydrationLogWhereInput[]
    OR?: HydrationLogWhereInput[]
    NOT?: HydrationLogWhereInput | HydrationLogWhereInput[]
    id?: StringFilter<"HydrationLog"> | string
    userId?: StringFilter<"HydrationLog"> | string
    amountMl?: IntFilter<"HydrationLog"> | number
    dailyGoalMl?: IntFilter<"HydrationLog"> | number
    date?: DateTimeFilter<"HydrationLog"> | Date | string
    createdAt?: DateTimeFilter<"HydrationLog"> | Date | string
  }

  export type HydrationLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amountMl?: SortOrder
    dailyGoalMl?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type HydrationLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HydrationLogWhereInput | HydrationLogWhereInput[]
    OR?: HydrationLogWhereInput[]
    NOT?: HydrationLogWhereInput | HydrationLogWhereInput[]
    userId?: StringFilter<"HydrationLog"> | string
    amountMl?: IntFilter<"HydrationLog"> | number
    dailyGoalMl?: IntFilter<"HydrationLog"> | number
    date?: DateTimeFilter<"HydrationLog"> | Date | string
    createdAt?: DateTimeFilter<"HydrationLog"> | Date | string
  }, "id">

  export type HydrationLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amountMl?: SortOrder
    dailyGoalMl?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    _count?: HydrationLogCountOrderByAggregateInput
    _avg?: HydrationLogAvgOrderByAggregateInput
    _max?: HydrationLogMaxOrderByAggregateInput
    _min?: HydrationLogMinOrderByAggregateInput
    _sum?: HydrationLogSumOrderByAggregateInput
  }

  export type HydrationLogScalarWhereWithAggregatesInput = {
    AND?: HydrationLogScalarWhereWithAggregatesInput | HydrationLogScalarWhereWithAggregatesInput[]
    OR?: HydrationLogScalarWhereWithAggregatesInput[]
    NOT?: HydrationLogScalarWhereWithAggregatesInput | HydrationLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HydrationLog"> | string
    userId?: StringWithAggregatesFilter<"HydrationLog"> | string
    amountMl?: IntWithAggregatesFilter<"HydrationLog"> | number
    dailyGoalMl?: IntWithAggregatesFilter<"HydrationLog"> | number
    date?: DateTimeWithAggregatesFilter<"HydrationLog"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"HydrationLog"> | Date | string
  }

  export type PerformanceReportWhereInput = {
    AND?: PerformanceReportWhereInput | PerformanceReportWhereInput[]
    OR?: PerformanceReportWhereInput[]
    NOT?: PerformanceReportWhereInput | PerformanceReportWhereInput[]
    id?: StringFilter<"PerformanceReport"> | string
    userId?: StringFilter<"PerformanceReport"> | string
    weekRange?: StringFilter<"PerformanceReport"> | string
    score?: IntFilter<"PerformanceReport"> | number
    summary?: StringFilter<"PerformanceReport"> | string
    highlights?: JsonFilter<"PerformanceReport">
    improvements?: JsonFilter<"PerformanceReport">
    focusArea?: StringFilter<"PerformanceReport"> | string
    date?: DateTimeFilter<"PerformanceReport"> | Date | string
    createdAt?: DateTimeFilter<"PerformanceReport"> | Date | string
  }

  export type PerformanceReportOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    weekRange?: SortOrder
    score?: SortOrder
    summary?: SortOrder
    highlights?: SortOrder
    improvements?: SortOrder
    focusArea?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type PerformanceReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PerformanceReportWhereInput | PerformanceReportWhereInput[]
    OR?: PerformanceReportWhereInput[]
    NOT?: PerformanceReportWhereInput | PerformanceReportWhereInput[]
    userId?: StringFilter<"PerformanceReport"> | string
    weekRange?: StringFilter<"PerformanceReport"> | string
    score?: IntFilter<"PerformanceReport"> | number
    summary?: StringFilter<"PerformanceReport"> | string
    highlights?: JsonFilter<"PerformanceReport">
    improvements?: JsonFilter<"PerformanceReport">
    focusArea?: StringFilter<"PerformanceReport"> | string
    date?: DateTimeFilter<"PerformanceReport"> | Date | string
    createdAt?: DateTimeFilter<"PerformanceReport"> | Date | string
  }, "id">

  export type PerformanceReportOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    weekRange?: SortOrder
    score?: SortOrder
    summary?: SortOrder
    highlights?: SortOrder
    improvements?: SortOrder
    focusArea?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    _count?: PerformanceReportCountOrderByAggregateInput
    _avg?: PerformanceReportAvgOrderByAggregateInput
    _max?: PerformanceReportMaxOrderByAggregateInput
    _min?: PerformanceReportMinOrderByAggregateInput
    _sum?: PerformanceReportSumOrderByAggregateInput
  }

  export type PerformanceReportScalarWhereWithAggregatesInput = {
    AND?: PerformanceReportScalarWhereWithAggregatesInput | PerformanceReportScalarWhereWithAggregatesInput[]
    OR?: PerformanceReportScalarWhereWithAggregatesInput[]
    NOT?: PerformanceReportScalarWhereWithAggregatesInput | PerformanceReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PerformanceReport"> | string
    userId?: StringWithAggregatesFilter<"PerformanceReport"> | string
    weekRange?: StringWithAggregatesFilter<"PerformanceReport"> | string
    score?: IntWithAggregatesFilter<"PerformanceReport"> | number
    summary?: StringWithAggregatesFilter<"PerformanceReport"> | string
    highlights?: JsonWithAggregatesFilter<"PerformanceReport">
    improvements?: JsonWithAggregatesFilter<"PerformanceReport">
    focusArea?: StringWithAggregatesFilter<"PerformanceReport"> | string
    date?: DateTimeWithAggregatesFilter<"PerformanceReport"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"PerformanceReport"> | Date | string
  }

  export type DailyProgressCreateInput = {
    id?: string
    userId: string
    date: Date | string
    caloriesTarget?: number | null
    caloriesActual?: number
    proteinTarget?: number | null
    proteinActual?: number
    carbsTarget?: number | null
    carbsActual?: number
    fatTarget?: number | null
    fatActual?: number
    mealsLogged?: number
    isAdherent?: boolean
    fatigueScore?: number
    hydrationActual?: number
    stepCount?: number
    source?: string
    supplementsLogged?: NullableJsonNullValueInput | InputJsonValue
    lightExposureCompleted?: boolean
    planId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyProgressUncheckedCreateInput = {
    id?: string
    userId: string
    date: Date | string
    caloriesTarget?: number | null
    caloriesActual?: number
    proteinTarget?: number | null
    proteinActual?: number
    carbsTarget?: number | null
    carbsActual?: number
    fatTarget?: number | null
    fatActual?: number
    mealsLogged?: number
    isAdherent?: boolean
    fatigueScore?: number
    hydrationActual?: number
    stepCount?: number
    source?: string
    supplementsLogged?: NullableJsonNullValueInput | InputJsonValue
    lightExposureCompleted?: boolean
    planId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    caloriesTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    caloriesActual?: FloatFieldUpdateOperationsInput | number
    proteinTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    proteinActual?: FloatFieldUpdateOperationsInput | number
    carbsTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    carbsActual?: FloatFieldUpdateOperationsInput | number
    fatTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    fatActual?: FloatFieldUpdateOperationsInput | number
    mealsLogged?: IntFieldUpdateOperationsInput | number
    isAdherent?: BoolFieldUpdateOperationsInput | boolean
    fatigueScore?: IntFieldUpdateOperationsInput | number
    hydrationActual?: FloatFieldUpdateOperationsInput | number
    stepCount?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    supplementsLogged?: NullableJsonNullValueInput | InputJsonValue
    lightExposureCompleted?: BoolFieldUpdateOperationsInput | boolean
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    caloriesTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    caloriesActual?: FloatFieldUpdateOperationsInput | number
    proteinTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    proteinActual?: FloatFieldUpdateOperationsInput | number
    carbsTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    carbsActual?: FloatFieldUpdateOperationsInput | number
    fatTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    fatActual?: FloatFieldUpdateOperationsInput | number
    mealsLogged?: IntFieldUpdateOperationsInput | number
    isAdherent?: BoolFieldUpdateOperationsInput | boolean
    fatigueScore?: IntFieldUpdateOperationsInput | number
    hydrationActual?: FloatFieldUpdateOperationsInput | number
    stepCount?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    supplementsLogged?: NullableJsonNullValueInput | InputJsonValue
    lightExposureCompleted?: BoolFieldUpdateOperationsInput | boolean
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyProgressCreateManyInput = {
    id?: string
    userId: string
    date: Date | string
    caloriesTarget?: number | null
    caloriesActual?: number
    proteinTarget?: number | null
    proteinActual?: number
    carbsTarget?: number | null
    carbsActual?: number
    fatTarget?: number | null
    fatActual?: number
    mealsLogged?: number
    isAdherent?: boolean
    fatigueScore?: number
    hydrationActual?: number
    stepCount?: number
    source?: string
    supplementsLogged?: NullableJsonNullValueInput | InputJsonValue
    lightExposureCompleted?: boolean
    planId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    caloriesTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    caloriesActual?: FloatFieldUpdateOperationsInput | number
    proteinTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    proteinActual?: FloatFieldUpdateOperationsInput | number
    carbsTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    carbsActual?: FloatFieldUpdateOperationsInput | number
    fatTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    fatActual?: FloatFieldUpdateOperationsInput | number
    mealsLogged?: IntFieldUpdateOperationsInput | number
    isAdherent?: BoolFieldUpdateOperationsInput | boolean
    fatigueScore?: IntFieldUpdateOperationsInput | number
    hydrationActual?: FloatFieldUpdateOperationsInput | number
    stepCount?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    supplementsLogged?: NullableJsonNullValueInput | InputJsonValue
    lightExposureCompleted?: BoolFieldUpdateOperationsInput | boolean
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    caloriesTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    caloriesActual?: FloatFieldUpdateOperationsInput | number
    proteinTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    proteinActual?: FloatFieldUpdateOperationsInput | number
    carbsTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    carbsActual?: FloatFieldUpdateOperationsInput | number
    fatTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    fatActual?: FloatFieldUpdateOperationsInput | number
    mealsLogged?: IntFieldUpdateOperationsInput | number
    isAdherent?: BoolFieldUpdateOperationsInput | boolean
    fatigueScore?: IntFieldUpdateOperationsInput | number
    hydrationActual?: FloatFieldUpdateOperationsInput | number
    stepCount?: IntFieldUpdateOperationsInput | number
    source?: StringFieldUpdateOperationsInput | string
    supplementsLogged?: NullableJsonNullValueInput | InputJsonValue
    lightExposureCompleted?: BoolFieldUpdateOperationsInput | boolean
    planId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreakCreateInput = {
    id?: string
    userId: string
    currentStreak?: number
    longestStreak?: number
    lastAdherentDate?: Date | string | null
    updatedAt?: Date | string
  }

  export type StreakUncheckedCreateInput = {
    id?: string
    userId: string
    currentStreak?: number
    longestStreak?: number
    lastAdherentDate?: Date | string | null
    updatedAt?: Date | string
  }

  export type StreakUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastAdherentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreakUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastAdherentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreakCreateManyInput = {
    id?: string
    userId: string
    currentStreak?: number
    longestStreak?: number
    lastAdherentDate?: Date | string | null
    updatedAt?: Date | string
  }

  export type StreakUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastAdherentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StreakUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentStreak?: IntFieldUpdateOperationsInput | number
    longestStreak?: IntFieldUpdateOperationsInput | number
    lastAdherentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyMetricsCreateInput = {
    id?: string
    userId: string
    weightKg?: number | null
    heightCm?: number | null
    bodyFatPct?: number | null
    muscleMassKg?: number | null
    bmi?: number | null
    chestCm?: number | null
    waistCm?: number | null
    hipsCm?: number | null
    armsCm?: number | null
    thighsCm?: number | null
    calvesCm?: number | null
    recordedAt?: Date | string
    createdAt?: Date | string
  }

  export type BodyMetricsUncheckedCreateInput = {
    id?: string
    userId: string
    weightKg?: number | null
    heightCm?: number | null
    bodyFatPct?: number | null
    muscleMassKg?: number | null
    bmi?: number | null
    chestCm?: number | null
    waistCm?: number | null
    hipsCm?: number | null
    armsCm?: number | null
    thighsCm?: number | null
    calvesCm?: number | null
    recordedAt?: Date | string
    createdAt?: Date | string
  }

  export type BodyMetricsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    bodyFatPct?: NullableFloatFieldUpdateOperationsInput | number | null
    muscleMassKg?: NullableFloatFieldUpdateOperationsInput | number | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
    chestCm?: NullableFloatFieldUpdateOperationsInput | number | null
    waistCm?: NullableFloatFieldUpdateOperationsInput | number | null
    hipsCm?: NullableFloatFieldUpdateOperationsInput | number | null
    armsCm?: NullableFloatFieldUpdateOperationsInput | number | null
    thighsCm?: NullableFloatFieldUpdateOperationsInput | number | null
    calvesCm?: NullableFloatFieldUpdateOperationsInput | number | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyMetricsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    bodyFatPct?: NullableFloatFieldUpdateOperationsInput | number | null
    muscleMassKg?: NullableFloatFieldUpdateOperationsInput | number | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
    chestCm?: NullableFloatFieldUpdateOperationsInput | number | null
    waistCm?: NullableFloatFieldUpdateOperationsInput | number | null
    hipsCm?: NullableFloatFieldUpdateOperationsInput | number | null
    armsCm?: NullableFloatFieldUpdateOperationsInput | number | null
    thighsCm?: NullableFloatFieldUpdateOperationsInput | number | null
    calvesCm?: NullableFloatFieldUpdateOperationsInput | number | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyMetricsCreateManyInput = {
    id?: string
    userId: string
    weightKg?: number | null
    heightCm?: number | null
    bodyFatPct?: number | null
    muscleMassKg?: number | null
    bmi?: number | null
    chestCm?: number | null
    waistCm?: number | null
    hipsCm?: number | null
    armsCm?: number | null
    thighsCm?: number | null
    calvesCm?: number | null
    recordedAt?: Date | string
    createdAt?: Date | string
  }

  export type BodyMetricsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    bodyFatPct?: NullableFloatFieldUpdateOperationsInput | number | null
    muscleMassKg?: NullableFloatFieldUpdateOperationsInput | number | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
    chestCm?: NullableFloatFieldUpdateOperationsInput | number | null
    waistCm?: NullableFloatFieldUpdateOperationsInput | number | null
    hipsCm?: NullableFloatFieldUpdateOperationsInput | number | null
    armsCm?: NullableFloatFieldUpdateOperationsInput | number | null
    thighsCm?: NullableFloatFieldUpdateOperationsInput | number | null
    calvesCm?: NullableFloatFieldUpdateOperationsInput | number | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BodyMetricsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    bodyFatPct?: NullableFloatFieldUpdateOperationsInput | number | null
    muscleMassKg?: NullableFloatFieldUpdateOperationsInput | number | null
    bmi?: NullableFloatFieldUpdateOperationsInput | number | null
    chestCm?: NullableFloatFieldUpdateOperationsInput | number | null
    waistCm?: NullableFloatFieldUpdateOperationsInput | number | null
    hipsCm?: NullableFloatFieldUpdateOperationsInput | number | null
    armsCm?: NullableFloatFieldUpdateOperationsInput | number | null
    thighsCm?: NullableFloatFieldUpdateOperationsInput | number | null
    calvesCm?: NullableFloatFieldUpdateOperationsInput | number | null
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiUsageLogCreateInput = {
    id?: string
    userId: string
    action: string
    provider: string
    promptTokens?: number
    completionTokens?: number
    totalTokens?: number
    createdAt?: Date | string
  }

  export type AiUsageLogUncheckedCreateInput = {
    id?: string
    userId: string
    action: string
    provider: string
    promptTokens?: number
    completionTokens?: number
    totalTokens?: number
    createdAt?: Date | string
  }

  export type AiUsageLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    totalTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiUsageLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    totalTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiUsageLogCreateManyInput = {
    id?: string
    userId: string
    action: string
    provider: string
    promptTokens?: number
    completionTokens?: number
    totalTokens?: number
    createdAt?: Date | string
  }

  export type AiUsageLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    totalTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AiUsageLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    totalTokens?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HydrationLogCreateInput = {
    id?: string
    userId: string
    amountMl: number
    dailyGoalMl?: number
    date: Date | string
    createdAt?: Date | string
  }

  export type HydrationLogUncheckedCreateInput = {
    id?: string
    userId: string
    amountMl: number
    dailyGoalMl?: number
    date: Date | string
    createdAt?: Date | string
  }

  export type HydrationLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amountMl?: IntFieldUpdateOperationsInput | number
    dailyGoalMl?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HydrationLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amountMl?: IntFieldUpdateOperationsInput | number
    dailyGoalMl?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HydrationLogCreateManyInput = {
    id?: string
    userId: string
    amountMl: number
    dailyGoalMl?: number
    date: Date | string
    createdAt?: Date | string
  }

  export type HydrationLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amountMl?: IntFieldUpdateOperationsInput | number
    dailyGoalMl?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HydrationLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amountMl?: IntFieldUpdateOperationsInput | number
    dailyGoalMl?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerformanceReportCreateInput = {
    id?: string
    userId: string
    weekRange: string
    score: number
    summary: string
    highlights: JsonNullValueInput | InputJsonValue
    improvements: JsonNullValueInput | InputJsonValue
    focusArea: string
    date: Date | string
    createdAt?: Date | string
  }

  export type PerformanceReportUncheckedCreateInput = {
    id?: string
    userId: string
    weekRange: string
    score: number
    summary: string
    highlights: JsonNullValueInput | InputJsonValue
    improvements: JsonNullValueInput | InputJsonValue
    focusArea: string
    date: Date | string
    createdAt?: Date | string
  }

  export type PerformanceReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weekRange?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    improvements?: JsonNullValueInput | InputJsonValue
    focusArea?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerformanceReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weekRange?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    improvements?: JsonNullValueInput | InputJsonValue
    focusArea?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerformanceReportCreateManyInput = {
    id?: string
    userId: string
    weekRange: string
    score: number
    summary: string
    highlights: JsonNullValueInput | InputJsonValue
    improvements: JsonNullValueInput | InputJsonValue
    focusArea: string
    date: Date | string
    createdAt?: Date | string
  }

  export type PerformanceReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weekRange?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    improvements?: JsonNullValueInput | InputJsonValue
    focusArea?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerformanceReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    weekRange?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    summary?: StringFieldUpdateOperationsInput | string
    highlights?: JsonNullValueInput | InputJsonValue
    improvements?: JsonNullValueInput | InputJsonValue
    focusArea?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DailyProgressUserIdDateCompoundUniqueInput = {
    userId: string
    date: Date | string
  }

  export type DailyProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    caloriesTarget?: SortOrder
    caloriesActual?: SortOrder
    proteinTarget?: SortOrder
    proteinActual?: SortOrder
    carbsTarget?: SortOrder
    carbsActual?: SortOrder
    fatTarget?: SortOrder
    fatActual?: SortOrder
    mealsLogged?: SortOrder
    isAdherent?: SortOrder
    fatigueScore?: SortOrder
    hydrationActual?: SortOrder
    stepCount?: SortOrder
    source?: SortOrder
    supplementsLogged?: SortOrder
    lightExposureCompleted?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyProgressAvgOrderByAggregateInput = {
    caloriesTarget?: SortOrder
    caloriesActual?: SortOrder
    proteinTarget?: SortOrder
    proteinActual?: SortOrder
    carbsTarget?: SortOrder
    carbsActual?: SortOrder
    fatTarget?: SortOrder
    fatActual?: SortOrder
    mealsLogged?: SortOrder
    fatigueScore?: SortOrder
    hydrationActual?: SortOrder
    stepCount?: SortOrder
  }

  export type DailyProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    caloriesTarget?: SortOrder
    caloriesActual?: SortOrder
    proteinTarget?: SortOrder
    proteinActual?: SortOrder
    carbsTarget?: SortOrder
    carbsActual?: SortOrder
    fatTarget?: SortOrder
    fatActual?: SortOrder
    mealsLogged?: SortOrder
    isAdherent?: SortOrder
    fatigueScore?: SortOrder
    hydrationActual?: SortOrder
    stepCount?: SortOrder
    source?: SortOrder
    lightExposureCompleted?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    caloriesTarget?: SortOrder
    caloriesActual?: SortOrder
    proteinTarget?: SortOrder
    proteinActual?: SortOrder
    carbsTarget?: SortOrder
    carbsActual?: SortOrder
    fatTarget?: SortOrder
    fatActual?: SortOrder
    mealsLogged?: SortOrder
    isAdherent?: SortOrder
    fatigueScore?: SortOrder
    hydrationActual?: SortOrder
    stepCount?: SortOrder
    source?: SortOrder
    lightExposureCompleted?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DailyProgressSumOrderByAggregateInput = {
    caloriesTarget?: SortOrder
    caloriesActual?: SortOrder
    proteinTarget?: SortOrder
    proteinActual?: SortOrder
    carbsTarget?: SortOrder
    carbsActual?: SortOrder
    fatTarget?: SortOrder
    fatActual?: SortOrder
    mealsLogged?: SortOrder
    fatigueScore?: SortOrder
    hydrationActual?: SortOrder
    stepCount?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type StreakCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastAdherentDate?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreakAvgOrderByAggregateInput = {
    currentStreak?: SortOrder
    longestStreak?: SortOrder
  }

  export type StreakMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastAdherentDate?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreakMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentStreak?: SortOrder
    longestStreak?: SortOrder
    lastAdherentDate?: SortOrder
    updatedAt?: SortOrder
  }

  export type StreakSumOrderByAggregateInput = {
    currentStreak?: SortOrder
    longestStreak?: SortOrder
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

  export type BodyMetricsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weightKg?: SortOrder
    heightCm?: SortOrder
    bodyFatPct?: SortOrder
    muscleMassKg?: SortOrder
    bmi?: SortOrder
    chestCm?: SortOrder
    waistCm?: SortOrder
    hipsCm?: SortOrder
    armsCm?: SortOrder
    thighsCm?: SortOrder
    calvesCm?: SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BodyMetricsAvgOrderByAggregateInput = {
    weightKg?: SortOrder
    heightCm?: SortOrder
    bodyFatPct?: SortOrder
    muscleMassKg?: SortOrder
    bmi?: SortOrder
    chestCm?: SortOrder
    waistCm?: SortOrder
    hipsCm?: SortOrder
    armsCm?: SortOrder
    thighsCm?: SortOrder
    calvesCm?: SortOrder
  }

  export type BodyMetricsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weightKg?: SortOrder
    heightCm?: SortOrder
    bodyFatPct?: SortOrder
    muscleMassKg?: SortOrder
    bmi?: SortOrder
    chestCm?: SortOrder
    waistCm?: SortOrder
    hipsCm?: SortOrder
    armsCm?: SortOrder
    thighsCm?: SortOrder
    calvesCm?: SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BodyMetricsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weightKg?: SortOrder
    heightCm?: SortOrder
    bodyFatPct?: SortOrder
    muscleMassKg?: SortOrder
    bmi?: SortOrder
    chestCm?: SortOrder
    waistCm?: SortOrder
    hipsCm?: SortOrder
    armsCm?: SortOrder
    thighsCm?: SortOrder
    calvesCm?: SortOrder
    recordedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type BodyMetricsSumOrderByAggregateInput = {
    weightKg?: SortOrder
    heightCm?: SortOrder
    bodyFatPct?: SortOrder
    muscleMassKg?: SortOrder
    bmi?: SortOrder
    chestCm?: SortOrder
    waistCm?: SortOrder
    hipsCm?: SortOrder
    armsCm?: SortOrder
    thighsCm?: SortOrder
    calvesCm?: SortOrder
  }

  export type AiUsageLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    provider?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    totalTokens?: SortOrder
    createdAt?: SortOrder
  }

  export type AiUsageLogAvgOrderByAggregateInput = {
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    totalTokens?: SortOrder
  }

  export type AiUsageLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    provider?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    totalTokens?: SortOrder
    createdAt?: SortOrder
  }

  export type AiUsageLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    provider?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    totalTokens?: SortOrder
    createdAt?: SortOrder
  }

  export type AiUsageLogSumOrderByAggregateInput = {
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    totalTokens?: SortOrder
  }

  export type HydrationLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amountMl?: SortOrder
    dailyGoalMl?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type HydrationLogAvgOrderByAggregateInput = {
    amountMl?: SortOrder
    dailyGoalMl?: SortOrder
  }

  export type HydrationLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amountMl?: SortOrder
    dailyGoalMl?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type HydrationLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amountMl?: SortOrder
    dailyGoalMl?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type HydrationLogSumOrderByAggregateInput = {
    amountMl?: SortOrder
    dailyGoalMl?: SortOrder
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

  export type PerformanceReportCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weekRange?: SortOrder
    score?: SortOrder
    summary?: SortOrder
    highlights?: SortOrder
    improvements?: SortOrder
    focusArea?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type PerformanceReportAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type PerformanceReportMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weekRange?: SortOrder
    score?: SortOrder
    summary?: SortOrder
    focusArea?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type PerformanceReportMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weekRange?: SortOrder
    score?: SortOrder
    summary?: SortOrder
    focusArea?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type PerformanceReportSumOrderByAggregateInput = {
    score?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use DailyProgressDefaultArgs instead
     */
    export type DailyProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DailyProgressDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StreakDefaultArgs instead
     */
    export type StreakArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StreakDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BodyMetricsDefaultArgs instead
     */
    export type BodyMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BodyMetricsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AiUsageLogDefaultArgs instead
     */
    export type AiUsageLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AiUsageLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HydrationLogDefaultArgs instead
     */
    export type HydrationLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HydrationLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PerformanceReportDefaultArgs instead
     */
    export type PerformanceReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PerformanceReportDefaultArgs<ExtArgs>

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