
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
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model UserPreferences
 * 
 */
export type UserPreferences = $Result.DefaultSelection<Prisma.$UserPreferencesPayload>
/**
 * Model CoachProfile
 * 
 */
export type CoachProfile = $Result.DefaultSelection<Prisma.$CoachProfilePayload>
/**
 * Model CoachClientRelation
 * 
 */
export type CoachClientRelation = $Result.DefaultSelection<Prisma.$CoachClientRelationPayload>
/**
 * Model UserStatus
 * 
 */
export type UserStatus = $Result.DefaultSelection<Prisma.$UserStatusPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserProfiles
 * const userProfiles = await prisma.userProfile.findMany()
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
   * // Fetch zero or more UserProfiles
   * const userProfiles = await prisma.userProfile.findMany()
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
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs>;

  /**
   * `prisma.userPreferences`: Exposes CRUD operations for the **UserPreferences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPreferences
    * const userPreferences = await prisma.userPreferences.findMany()
    * ```
    */
  get userPreferences(): Prisma.UserPreferencesDelegate<ExtArgs>;

  /**
   * `prisma.coachProfile`: Exposes CRUD operations for the **CoachProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoachProfiles
    * const coachProfiles = await prisma.coachProfile.findMany()
    * ```
    */
  get coachProfile(): Prisma.CoachProfileDelegate<ExtArgs>;

  /**
   * `prisma.coachClientRelation`: Exposes CRUD operations for the **CoachClientRelation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CoachClientRelations
    * const coachClientRelations = await prisma.coachClientRelation.findMany()
    * ```
    */
  get coachClientRelation(): Prisma.CoachClientRelationDelegate<ExtArgs>;

  /**
   * `prisma.userStatus`: Exposes CRUD operations for the **UserStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserStatuses
    * const userStatuses = await prisma.userStatus.findMany()
    * ```
    */
  get userStatus(): Prisma.UserStatusDelegate<ExtArgs>;
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
    UserProfile: 'UserProfile',
    UserPreferences: 'UserPreferences',
    CoachProfile: 'CoachProfile',
    CoachClientRelation: 'CoachClientRelation',
    UserStatus: 'UserStatus'
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
      modelProps: "userProfile" | "userPreferences" | "coachProfile" | "coachClientRelation" | "userStatus"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      UserPreferences: {
        payload: Prisma.$UserPreferencesPayload<ExtArgs>
        fields: Prisma.UserPreferencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPreferencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPreferencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          findFirst: {
            args: Prisma.UserPreferencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPreferencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          findMany: {
            args: Prisma.UserPreferencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          create: {
            args: Prisma.UserPreferencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          createMany: {
            args: Prisma.UserPreferencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPreferencesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          delete: {
            args: Prisma.UserPreferencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          update: {
            args: Prisma.UserPreferencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          deleteMany: {
            args: Prisma.UserPreferencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPreferencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserPreferencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          aggregate: {
            args: Prisma.UserPreferencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPreferences>
          }
          groupBy: {
            args: Prisma.UserPreferencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPreferencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPreferencesCountArgs<ExtArgs>
            result: $Utils.Optional<UserPreferencesCountAggregateOutputType> | number
          }
        }
      }
      CoachProfile: {
        payload: Prisma.$CoachProfilePayload<ExtArgs>
        fields: Prisma.CoachProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoachProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoachProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachProfilePayload>
          }
          findFirst: {
            args: Prisma.CoachProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoachProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachProfilePayload>
          }
          findMany: {
            args: Prisma.CoachProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachProfilePayload>[]
          }
          create: {
            args: Prisma.CoachProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachProfilePayload>
          }
          createMany: {
            args: Prisma.CoachProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoachProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachProfilePayload>[]
          }
          delete: {
            args: Prisma.CoachProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachProfilePayload>
          }
          update: {
            args: Prisma.CoachProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachProfilePayload>
          }
          deleteMany: {
            args: Prisma.CoachProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoachProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CoachProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachProfilePayload>
          }
          aggregate: {
            args: Prisma.CoachProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoachProfile>
          }
          groupBy: {
            args: Prisma.CoachProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoachProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoachProfileCountArgs<ExtArgs>
            result: $Utils.Optional<CoachProfileCountAggregateOutputType> | number
          }
        }
      }
      CoachClientRelation: {
        payload: Prisma.$CoachClientRelationPayload<ExtArgs>
        fields: Prisma.CoachClientRelationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoachClientRelationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachClientRelationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoachClientRelationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachClientRelationPayload>
          }
          findFirst: {
            args: Prisma.CoachClientRelationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachClientRelationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoachClientRelationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachClientRelationPayload>
          }
          findMany: {
            args: Prisma.CoachClientRelationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachClientRelationPayload>[]
          }
          create: {
            args: Prisma.CoachClientRelationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachClientRelationPayload>
          }
          createMany: {
            args: Prisma.CoachClientRelationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoachClientRelationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachClientRelationPayload>[]
          }
          delete: {
            args: Prisma.CoachClientRelationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachClientRelationPayload>
          }
          update: {
            args: Prisma.CoachClientRelationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachClientRelationPayload>
          }
          deleteMany: {
            args: Prisma.CoachClientRelationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoachClientRelationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CoachClientRelationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachClientRelationPayload>
          }
          aggregate: {
            args: Prisma.CoachClientRelationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoachClientRelation>
          }
          groupBy: {
            args: Prisma.CoachClientRelationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoachClientRelationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoachClientRelationCountArgs<ExtArgs>
            result: $Utils.Optional<CoachClientRelationCountAggregateOutputType> | number
          }
        }
      }
      UserStatus: {
        payload: Prisma.$UserStatusPayload<ExtArgs>
        fields: Prisma.UserStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatusPayload>
          }
          findFirst: {
            args: Prisma.UserStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatusPayload>
          }
          findMany: {
            args: Prisma.UserStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatusPayload>[]
          }
          create: {
            args: Prisma.UserStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatusPayload>
          }
          createMany: {
            args: Prisma.UserStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatusPayload>[]
          }
          delete: {
            args: Prisma.UserStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatusPayload>
          }
          update: {
            args: Prisma.UserStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatusPayload>
          }
          deleteMany: {
            args: Prisma.UserStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatusPayload>
          }
          aggregate: {
            args: Prisma.UserStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserStatus>
          }
          groupBy: {
            args: Prisma.UserStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserStatusCountArgs<ExtArgs>
            result: $Utils.Optional<UserStatusCountAggregateOutputType> | number
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
   * Count Type CoachProfileCountOutputType
   */

  export type CoachProfileCountOutputType = {
    clients: number
  }

  export type CoachProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | CoachProfileCountOutputTypeCountClientsArgs
  }

  // Custom InputTypes
  /**
   * CoachProfileCountOutputType without action
   */
  export type CoachProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachProfileCountOutputType
     */
    select?: CoachProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CoachProfileCountOutputType without action
   */
  export type CoachProfileCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachClientRelationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileAvgAggregateOutputType = {
    heightCm: number | null
    weightKg: number | null
    onboardingStep: number | null
  }

  export type UserProfileSumAggregateOutputType = {
    heightCm: number | null
    weightKg: number | null
    onboardingStep: number | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    displayName: string | null
    avatarUrl: string | null
    dateOfBirth: Date | null
    heightCm: number | null
    weightKg: number | null
    biologicalSex: string | null
    timezone: string | null
    region: string | null
    onboardingCompleted: boolean | null
    onboardingStep: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    displayName: string | null
    avatarUrl: string | null
    dateOfBirth: Date | null
    heightCm: number | null
    weightKg: number | null
    biologicalSex: string | null
    timezone: string | null
    region: string | null
    onboardingCompleted: boolean | null
    onboardingStep: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    userId: number
    displayName: number
    avatarUrl: number
    dateOfBirth: number
    heightCm: number
    weightKg: number
    biologicalSex: number
    timezone: number
    region: number
    onboardingCompleted: number
    onboardingStep: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserProfileAvgAggregateInputType = {
    heightCm?: true
    weightKg?: true
    onboardingStep?: true
  }

  export type UserProfileSumAggregateInputType = {
    heightCm?: true
    weightKg?: true
    onboardingStep?: true
  }

  export type UserProfileMinAggregateInputType = {
    id?: true
    userId?: true
    displayName?: true
    avatarUrl?: true
    dateOfBirth?: true
    heightCm?: true
    weightKg?: true
    biologicalSex?: true
    timezone?: true
    region?: true
    onboardingCompleted?: true
    onboardingStep?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    displayName?: true
    avatarUrl?: true
    dateOfBirth?: true
    heightCm?: true
    weightKg?: true
    biologicalSex?: true
    timezone?: true
    region?: true
    onboardingCompleted?: true
    onboardingStep?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    userId?: true
    displayName?: true
    avatarUrl?: true
    dateOfBirth?: true
    heightCm?: true
    weightKg?: true
    biologicalSex?: true
    timezone?: true
    region?: true
    onboardingCompleted?: true
    onboardingStep?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _avg?: UserProfileAvgAggregateInputType
    _sum?: UserProfileSumAggregateInputType
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    userId: string
    displayName: string
    avatarUrl: string | null
    dateOfBirth: Date | null
    heightCm: number | null
    weightKg: number | null
    biologicalSex: string | null
    timezone: string
    region: string
    onboardingCompleted: boolean
    onboardingStep: number
    createdAt: Date
    updatedAt: Date
    _count: UserProfileCountAggregateOutputType | null
    _avg: UserProfileAvgAggregateOutputType | null
    _sum: UserProfileSumAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    dateOfBirth?: boolean
    heightCm?: boolean
    weightKg?: boolean
    biologicalSex?: boolean
    timezone?: boolean
    region?: boolean
    onboardingCompleted?: boolean
    onboardingStep?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    preferences?: boolean | UserProfile$preferencesArgs<ExtArgs>
    status?: boolean | UserProfile$statusArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    dateOfBirth?: boolean
    heightCm?: boolean
    weightKg?: boolean
    biologicalSex?: boolean
    timezone?: boolean
    region?: boolean
    onboardingCompleted?: boolean
    onboardingStep?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    displayName?: boolean
    avatarUrl?: boolean
    dateOfBirth?: boolean
    heightCm?: boolean
    weightKg?: boolean
    biologicalSex?: boolean
    timezone?: boolean
    region?: boolean
    onboardingCompleted?: boolean
    onboardingStep?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferences?: boolean | UserProfile$preferencesArgs<ExtArgs>
    status?: boolean | UserProfile$statusArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      preferences: Prisma.$UserPreferencesPayload<ExtArgs> | null
      status: Prisma.$UserStatusPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      displayName: string
      avatarUrl: string | null
      dateOfBirth: Date | null
      heightCm: number | null
      weightKg: number | null
      biologicalSex: string | null
      timezone: string
      region: string
      onboardingCompleted: boolean
      onboardingStep: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    preferences<T extends UserProfile$preferencesArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$preferencesArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    status<T extends UserProfile$statusArgs<ExtArgs> = {}>(args?: Subset<T, UserProfile$statusArgs<ExtArgs>>): Prisma__UserStatusClient<$Result.GetResult<Prisma.$UserStatusPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the UserProfile model
   */ 
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly userId: FieldRef<"UserProfile", 'String'>
    readonly displayName: FieldRef<"UserProfile", 'String'>
    readonly avatarUrl: FieldRef<"UserProfile", 'String'>
    readonly dateOfBirth: FieldRef<"UserProfile", 'DateTime'>
    readonly heightCm: FieldRef<"UserProfile", 'Float'>
    readonly weightKg: FieldRef<"UserProfile", 'Float'>
    readonly biologicalSex: FieldRef<"UserProfile", 'String'>
    readonly timezone: FieldRef<"UserProfile", 'String'>
    readonly region: FieldRef<"UserProfile", 'String'>
    readonly onboardingCompleted: FieldRef<"UserProfile", 'Boolean'>
    readonly onboardingStep: FieldRef<"UserProfile", 'Int'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
  }

  /**
   * UserProfile.preferences
   */
  export type UserProfile$preferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    where?: UserPreferencesWhereInput
  }

  /**
   * UserProfile.status
   */
  export type UserProfile$statusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatus
     */
    select?: UserStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatusInclude<ExtArgs> | null
    where?: UserStatusWhereInput
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model UserPreferences
   */

  export type AggregateUserPreferences = {
    _count: UserPreferencesCountAggregateOutputType | null
    _avg: UserPreferencesAvgAggregateOutputType | null
    _sum: UserPreferencesSumAggregateOutputType | null
    _min: UserPreferencesMinAggregateOutputType | null
    _max: UserPreferencesMaxAggregateOutputType | null
  }

  export type UserPreferencesAvgAggregateOutputType = {
    targetCalories: number | null
    targetProteinG: number | null
    targetCarbsG: number | null
    targetFatG: number | null
    workoutDurationPreference: number | null
  }

  export type UserPreferencesSumAggregateOutputType = {
    targetCalories: number | null
    targetProteinG: number | null
    targetCarbsG: number | null
    targetFatG: number | null
    workoutDurationPreference: number | null
  }

  export type UserPreferencesMinAggregateOutputType = {
    id: string | null
    userId: string | null
    primaryGoal: string | null
    dietaryPreference: string | null
    targetCalories: number | null
    targetProteinG: number | null
    targetCarbsG: number | null
    targetFatG: number | null
    activityLevel: string | null
    experienceLevel: string | null
    lifestyleType: string | null
    sleepWindowStart: string | null
    sleepWindowEnd: string | null
    dietMode: string | null
    workoutEnvironment: string | null
    isBodybuilderMode: boolean | null
    isInjurySafeMode: boolean | null
    workoutDurationPreference: number | null
    splitPreference: string | null
    activeProtocolId: string | null
    updatedAt: Date | null
  }

  export type UserPreferencesMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    primaryGoal: string | null
    dietaryPreference: string | null
    targetCalories: number | null
    targetProteinG: number | null
    targetCarbsG: number | null
    targetFatG: number | null
    activityLevel: string | null
    experienceLevel: string | null
    lifestyleType: string | null
    sleepWindowStart: string | null
    sleepWindowEnd: string | null
    dietMode: string | null
    workoutEnvironment: string | null
    isBodybuilderMode: boolean | null
    isInjurySafeMode: boolean | null
    workoutDurationPreference: number | null
    splitPreference: string | null
    activeProtocolId: string | null
    updatedAt: Date | null
  }

  export type UserPreferencesCountAggregateOutputType = {
    id: number
    userId: number
    primaryGoal: number
    dietaryPreference: number
    targetCalories: number
    targetProteinG: number
    targetCarbsG: number
    targetFatG: number
    activityLevel: number
    experienceLevel: number
    lifestyleType: number
    sleepWindowStart: number
    sleepWindowEnd: number
    allergies: number
    healthConditions: number
    dietMode: number
    workoutEnvironment: number
    availableEquipment: number
    isBodybuilderMode: number
    isInjurySafeMode: number
    workoutDurationPreference: number
    splitPreference: number
    activeProtocolId: number
    updatedAt: number
    _all: number
  }


  export type UserPreferencesAvgAggregateInputType = {
    targetCalories?: true
    targetProteinG?: true
    targetCarbsG?: true
    targetFatG?: true
    workoutDurationPreference?: true
  }

  export type UserPreferencesSumAggregateInputType = {
    targetCalories?: true
    targetProteinG?: true
    targetCarbsG?: true
    targetFatG?: true
    workoutDurationPreference?: true
  }

  export type UserPreferencesMinAggregateInputType = {
    id?: true
    userId?: true
    primaryGoal?: true
    dietaryPreference?: true
    targetCalories?: true
    targetProteinG?: true
    targetCarbsG?: true
    targetFatG?: true
    activityLevel?: true
    experienceLevel?: true
    lifestyleType?: true
    sleepWindowStart?: true
    sleepWindowEnd?: true
    dietMode?: true
    workoutEnvironment?: true
    isBodybuilderMode?: true
    isInjurySafeMode?: true
    workoutDurationPreference?: true
    splitPreference?: true
    activeProtocolId?: true
    updatedAt?: true
  }

  export type UserPreferencesMaxAggregateInputType = {
    id?: true
    userId?: true
    primaryGoal?: true
    dietaryPreference?: true
    targetCalories?: true
    targetProteinG?: true
    targetCarbsG?: true
    targetFatG?: true
    activityLevel?: true
    experienceLevel?: true
    lifestyleType?: true
    sleepWindowStart?: true
    sleepWindowEnd?: true
    dietMode?: true
    workoutEnvironment?: true
    isBodybuilderMode?: true
    isInjurySafeMode?: true
    workoutDurationPreference?: true
    splitPreference?: true
    activeProtocolId?: true
    updatedAt?: true
  }

  export type UserPreferencesCountAggregateInputType = {
    id?: true
    userId?: true
    primaryGoal?: true
    dietaryPreference?: true
    targetCalories?: true
    targetProteinG?: true
    targetCarbsG?: true
    targetFatG?: true
    activityLevel?: true
    experienceLevel?: true
    lifestyleType?: true
    sleepWindowStart?: true
    sleepWindowEnd?: true
    allergies?: true
    healthConditions?: true
    dietMode?: true
    workoutEnvironment?: true
    availableEquipment?: true
    isBodybuilderMode?: true
    isInjurySafeMode?: true
    workoutDurationPreference?: true
    splitPreference?: true
    activeProtocolId?: true
    updatedAt?: true
    _all?: true
  }

  export type UserPreferencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to aggregate.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPreferences
    **/
    _count?: true | UserPreferencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPreferencesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPreferencesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPreferencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPreferencesMaxAggregateInputType
  }

  export type GetUserPreferencesAggregateType<T extends UserPreferencesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPreferences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPreferences[P]>
      : GetScalarType<T[P], AggregateUserPreferences[P]>
  }




  export type UserPreferencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferencesWhereInput
    orderBy?: UserPreferencesOrderByWithAggregationInput | UserPreferencesOrderByWithAggregationInput[]
    by: UserPreferencesScalarFieldEnum[] | UserPreferencesScalarFieldEnum
    having?: UserPreferencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPreferencesCountAggregateInputType | true
    _avg?: UserPreferencesAvgAggregateInputType
    _sum?: UserPreferencesSumAggregateInputType
    _min?: UserPreferencesMinAggregateInputType
    _max?: UserPreferencesMaxAggregateInputType
  }

  export type UserPreferencesGroupByOutputType = {
    id: string
    userId: string
    primaryGoal: string
    dietaryPreference: string
    targetCalories: number | null
    targetProteinG: number | null
    targetCarbsG: number | null
    targetFatG: number | null
    activityLevel: string
    experienceLevel: string
    lifestyleType: string
    sleepWindowStart: string | null
    sleepWindowEnd: string | null
    allergies: string[]
    healthConditions: string[]
    dietMode: string
    workoutEnvironment: string | null
    availableEquipment: string[]
    isBodybuilderMode: boolean
    isInjurySafeMode: boolean
    workoutDurationPreference: number
    splitPreference: string
    activeProtocolId: string | null
    updatedAt: Date
    _count: UserPreferencesCountAggregateOutputType | null
    _avg: UserPreferencesAvgAggregateOutputType | null
    _sum: UserPreferencesSumAggregateOutputType | null
    _min: UserPreferencesMinAggregateOutputType | null
    _max: UserPreferencesMaxAggregateOutputType | null
  }

  type GetUserPreferencesGroupByPayload<T extends UserPreferencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPreferencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPreferencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPreferencesGroupByOutputType[P]>
            : GetScalarType<T[P], UserPreferencesGroupByOutputType[P]>
        }
      >
    >


  export type UserPreferencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    primaryGoal?: boolean
    dietaryPreference?: boolean
    targetCalories?: boolean
    targetProteinG?: boolean
    targetCarbsG?: boolean
    targetFatG?: boolean
    activityLevel?: boolean
    experienceLevel?: boolean
    lifestyleType?: boolean
    sleepWindowStart?: boolean
    sleepWindowEnd?: boolean
    allergies?: boolean
    healthConditions?: boolean
    dietMode?: boolean
    workoutEnvironment?: boolean
    availableEquipment?: boolean
    isBodybuilderMode?: boolean
    isInjurySafeMode?: boolean
    workoutDurationPreference?: boolean
    splitPreference?: boolean
    activeProtocolId?: boolean
    updatedAt?: boolean
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    primaryGoal?: boolean
    dietaryPreference?: boolean
    targetCalories?: boolean
    targetProteinG?: boolean
    targetCarbsG?: boolean
    targetFatG?: boolean
    activityLevel?: boolean
    experienceLevel?: boolean
    lifestyleType?: boolean
    sleepWindowStart?: boolean
    sleepWindowEnd?: boolean
    allergies?: boolean
    healthConditions?: boolean
    dietMode?: boolean
    workoutEnvironment?: boolean
    availableEquipment?: boolean
    isBodybuilderMode?: boolean
    isInjurySafeMode?: boolean
    workoutDurationPreference?: boolean
    splitPreference?: boolean
    activeProtocolId?: boolean
    updatedAt?: boolean
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectScalar = {
    id?: boolean
    userId?: boolean
    primaryGoal?: boolean
    dietaryPreference?: boolean
    targetCalories?: boolean
    targetProteinG?: boolean
    targetCarbsG?: boolean
    targetFatG?: boolean
    activityLevel?: boolean
    experienceLevel?: boolean
    lifestyleType?: boolean
    sleepWindowStart?: boolean
    sleepWindowEnd?: boolean
    allergies?: boolean
    healthConditions?: boolean
    dietMode?: boolean
    workoutEnvironment?: boolean
    availableEquipment?: boolean
    isBodybuilderMode?: boolean
    isInjurySafeMode?: boolean
    workoutDurationPreference?: boolean
    splitPreference?: boolean
    activeProtocolId?: boolean
    updatedAt?: boolean
  }

  export type UserPreferencesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type UserPreferencesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }

  export type $UserPreferencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPreferences"
    objects: {
      profile: Prisma.$UserProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      primaryGoal: string
      dietaryPreference: string
      targetCalories: number | null
      targetProteinG: number | null
      targetCarbsG: number | null
      targetFatG: number | null
      activityLevel: string
      experienceLevel: string
      lifestyleType: string
      sleepWindowStart: string | null
      sleepWindowEnd: string | null
      allergies: string[]
      healthConditions: string[]
      dietMode: string
      workoutEnvironment: string | null
      availableEquipment: string[]
      isBodybuilderMode: boolean
      isInjurySafeMode: boolean
      workoutDurationPreference: number
      splitPreference: string
      activeProtocolId: string | null
      updatedAt: Date
    }, ExtArgs["result"]["userPreferences"]>
    composites: {}
  }

  type UserPreferencesGetPayload<S extends boolean | null | undefined | UserPreferencesDefaultArgs> = $Result.GetResult<Prisma.$UserPreferencesPayload, S>

  type UserPreferencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserPreferencesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserPreferencesCountAggregateInputType | true
    }

  export interface UserPreferencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPreferences'], meta: { name: 'UserPreferences' } }
    /**
     * Find zero or one UserPreferences that matches the filter.
     * @param {UserPreferencesFindUniqueArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPreferencesFindUniqueArgs>(args: SelectSubset<T, UserPreferencesFindUniqueArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserPreferences that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserPreferencesFindUniqueOrThrowArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPreferencesFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPreferencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindFirstArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPreferencesFindFirstArgs>(args?: SelectSubset<T, UserPreferencesFindFirstArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserPreferences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindFirstOrThrowArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPreferencesFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPreferencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPreferences
     * const userPreferences = await prisma.userPreferences.findMany()
     * 
     * // Get first 10 UserPreferences
     * const userPreferences = await prisma.userPreferences.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPreferencesFindManyArgs>(args?: SelectSubset<T, UserPreferencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserPreferences.
     * @param {UserPreferencesCreateArgs} args - Arguments to create a UserPreferences.
     * @example
     * // Create one UserPreferences
     * const UserPreferences = await prisma.userPreferences.create({
     *   data: {
     *     // ... data to create a UserPreferences
     *   }
     * })
     * 
     */
    create<T extends UserPreferencesCreateArgs>(args: SelectSubset<T, UserPreferencesCreateArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserPreferences.
     * @param {UserPreferencesCreateManyArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreferences = await prisma.userPreferences.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPreferencesCreateManyArgs>(args?: SelectSubset<T, UserPreferencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPreferences and returns the data saved in the database.
     * @param {UserPreferencesCreateManyAndReturnArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreferences = await prisma.userPreferences.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPreferences and only return the `id`
     * const userPreferencesWithIdOnly = await prisma.userPreferences.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPreferencesCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPreferencesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserPreferences.
     * @param {UserPreferencesDeleteArgs} args - Arguments to delete one UserPreferences.
     * @example
     * // Delete one UserPreferences
     * const UserPreferences = await prisma.userPreferences.delete({
     *   where: {
     *     // ... filter to delete one UserPreferences
     *   }
     * })
     * 
     */
    delete<T extends UserPreferencesDeleteArgs>(args: SelectSubset<T, UserPreferencesDeleteArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserPreferences.
     * @param {UserPreferencesUpdateArgs} args - Arguments to update one UserPreferences.
     * @example
     * // Update one UserPreferences
     * const userPreferences = await prisma.userPreferences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPreferencesUpdateArgs>(args: SelectSubset<T, UserPreferencesUpdateArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserPreferences.
     * @param {UserPreferencesDeleteManyArgs} args - Arguments to filter UserPreferences to delete.
     * @example
     * // Delete a few UserPreferences
     * const { count } = await prisma.userPreferences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPreferencesDeleteManyArgs>(args?: SelectSubset<T, UserPreferencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPreferences
     * const userPreferences = await prisma.userPreferences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPreferencesUpdateManyArgs>(args: SelectSubset<T, UserPreferencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserPreferences.
     * @param {UserPreferencesUpsertArgs} args - Arguments to update or create a UserPreferences.
     * @example
     * // Update or create a UserPreferences
     * const userPreferences = await prisma.userPreferences.upsert({
     *   create: {
     *     // ... data to create a UserPreferences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPreferences we want to update
     *   }
     * })
     */
    upsert<T extends UserPreferencesUpsertArgs>(args: SelectSubset<T, UserPreferencesUpsertArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesCountArgs} args - Arguments to filter UserPreferences to count.
     * @example
     * // Count the number of UserPreferences
     * const count = await prisma.userPreferences.count({
     *   where: {
     *     // ... the filter for the UserPreferences we want to count
     *   }
     * })
    **/
    count<T extends UserPreferencesCountArgs>(
      args?: Subset<T, UserPreferencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPreferencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPreferencesAggregateArgs>(args: Subset<T, UserPreferencesAggregateArgs>): Prisma.PrismaPromise<GetUserPreferencesAggregateType<T>>

    /**
     * Group by UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesGroupByArgs} args - Group by arguments.
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
      T extends UserPreferencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPreferencesGroupByArgs['orderBy'] }
        : { orderBy?: UserPreferencesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserPreferencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPreferencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPreferences model
   */
  readonly fields: UserPreferencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPreferences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPreferencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends UserProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserProfileDefaultArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UserPreferences model
   */ 
  interface UserPreferencesFieldRefs {
    readonly id: FieldRef<"UserPreferences", 'String'>
    readonly userId: FieldRef<"UserPreferences", 'String'>
    readonly primaryGoal: FieldRef<"UserPreferences", 'String'>
    readonly dietaryPreference: FieldRef<"UserPreferences", 'String'>
    readonly targetCalories: FieldRef<"UserPreferences", 'Float'>
    readonly targetProteinG: FieldRef<"UserPreferences", 'Float'>
    readonly targetCarbsG: FieldRef<"UserPreferences", 'Float'>
    readonly targetFatG: FieldRef<"UserPreferences", 'Float'>
    readonly activityLevel: FieldRef<"UserPreferences", 'String'>
    readonly experienceLevel: FieldRef<"UserPreferences", 'String'>
    readonly lifestyleType: FieldRef<"UserPreferences", 'String'>
    readonly sleepWindowStart: FieldRef<"UserPreferences", 'String'>
    readonly sleepWindowEnd: FieldRef<"UserPreferences", 'String'>
    readonly allergies: FieldRef<"UserPreferences", 'String[]'>
    readonly healthConditions: FieldRef<"UserPreferences", 'String[]'>
    readonly dietMode: FieldRef<"UserPreferences", 'String'>
    readonly workoutEnvironment: FieldRef<"UserPreferences", 'String'>
    readonly availableEquipment: FieldRef<"UserPreferences", 'String[]'>
    readonly isBodybuilderMode: FieldRef<"UserPreferences", 'Boolean'>
    readonly isInjurySafeMode: FieldRef<"UserPreferences", 'Boolean'>
    readonly workoutDurationPreference: FieldRef<"UserPreferences", 'Int'>
    readonly splitPreference: FieldRef<"UserPreferences", 'String'>
    readonly activeProtocolId: FieldRef<"UserPreferences", 'String'>
    readonly updatedAt: FieldRef<"UserPreferences", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPreferences findUnique
   */
  export type UserPreferencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences findUniqueOrThrow
   */
  export type UserPreferencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences findFirst
   */
  export type UserPreferencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences findFirstOrThrow
   */
  export type UserPreferencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences findMany
   */
  export type UserPreferencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences create
   */
  export type UserPreferencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPreferences.
     */
    data: XOR<UserPreferencesCreateInput, UserPreferencesUncheckedCreateInput>
  }

  /**
   * UserPreferences createMany
   */
  export type UserPreferencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferencesCreateManyInput | UserPreferencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPreferences createManyAndReturn
   */
  export type UserPreferencesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferencesCreateManyInput | UserPreferencesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreferences update
   */
  export type UserPreferencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPreferences.
     */
    data: XOR<UserPreferencesUpdateInput, UserPreferencesUncheckedUpdateInput>
    /**
     * Choose, which UserPreferences to update.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences updateMany
   */
  export type UserPreferencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferencesUpdateManyMutationInput, UserPreferencesUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferencesWhereInput
  }

  /**
   * UserPreferences upsert
   */
  export type UserPreferencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPreferences to update in case it exists.
     */
    where: UserPreferencesWhereUniqueInput
    /**
     * In case the UserPreferences found by the `where` argument doesn't exist, create a new UserPreferences with this data.
     */
    create: XOR<UserPreferencesCreateInput, UserPreferencesUncheckedCreateInput>
    /**
     * In case the UserPreferences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPreferencesUpdateInput, UserPreferencesUncheckedUpdateInput>
  }

  /**
   * UserPreferences delete
   */
  export type UserPreferencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter which UserPreferences to delete.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences deleteMany
   */
  export type UserPreferencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to delete
     */
    where?: UserPreferencesWhereInput
  }

  /**
   * UserPreferences without action
   */
  export type UserPreferencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
  }


  /**
   * Model CoachProfile
   */

  export type AggregateCoachProfile = {
    _count: CoachProfileCountAggregateOutputType | null
    _avg: CoachProfileAvgAggregateOutputType | null
    _sum: CoachProfileSumAggregateOutputType | null
    _min: CoachProfileMinAggregateOutputType | null
    _max: CoachProfileMaxAggregateOutputType | null
  }

  export type CoachProfileAvgAggregateOutputType = {
    monthlyRateUsd: number | null
  }

  export type CoachProfileSumAggregateOutputType = {
    monthlyRateUsd: number | null
  }

  export type CoachProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    bio: string | null
    isAvailable: boolean | null
    monthlyRateUsd: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoachProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    bio: string | null
    isAvailable: boolean | null
    monthlyRateUsd: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoachProfileCountAggregateOutputType = {
    id: number
    userId: number
    specializations: number
    bio: number
    certifications: number
    isAvailable: number
    monthlyRateUsd: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CoachProfileAvgAggregateInputType = {
    monthlyRateUsd?: true
  }

  export type CoachProfileSumAggregateInputType = {
    monthlyRateUsd?: true
  }

  export type CoachProfileMinAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    isAvailable?: true
    monthlyRateUsd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoachProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    isAvailable?: true
    monthlyRateUsd?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoachProfileCountAggregateInputType = {
    id?: true
    userId?: true
    specializations?: true
    bio?: true
    certifications?: true
    isAvailable?: true
    monthlyRateUsd?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CoachProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoachProfile to aggregate.
     */
    where?: CoachProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachProfiles to fetch.
     */
    orderBy?: CoachProfileOrderByWithRelationInput | CoachProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoachProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoachProfiles
    **/
    _count?: true | CoachProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoachProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoachProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoachProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoachProfileMaxAggregateInputType
  }

  export type GetCoachProfileAggregateType<T extends CoachProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateCoachProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoachProfile[P]>
      : GetScalarType<T[P], AggregateCoachProfile[P]>
  }




  export type CoachProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachProfileWhereInput
    orderBy?: CoachProfileOrderByWithAggregationInput | CoachProfileOrderByWithAggregationInput[]
    by: CoachProfileScalarFieldEnum[] | CoachProfileScalarFieldEnum
    having?: CoachProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoachProfileCountAggregateInputType | true
    _avg?: CoachProfileAvgAggregateInputType
    _sum?: CoachProfileSumAggregateInputType
    _min?: CoachProfileMinAggregateInputType
    _max?: CoachProfileMaxAggregateInputType
  }

  export type CoachProfileGroupByOutputType = {
    id: string
    userId: string
    specializations: string[]
    bio: string | null
    certifications: string[]
    isAvailable: boolean
    monthlyRateUsd: number | null
    createdAt: Date
    updatedAt: Date
    _count: CoachProfileCountAggregateOutputType | null
    _avg: CoachProfileAvgAggregateOutputType | null
    _sum: CoachProfileSumAggregateOutputType | null
    _min: CoachProfileMinAggregateOutputType | null
    _max: CoachProfileMaxAggregateOutputType | null
  }

  type GetCoachProfileGroupByPayload<T extends CoachProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoachProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoachProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoachProfileGroupByOutputType[P]>
            : GetScalarType<T[P], CoachProfileGroupByOutputType[P]>
        }
      >
    >


  export type CoachProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specializations?: boolean
    bio?: boolean
    certifications?: boolean
    isAvailable?: boolean
    monthlyRateUsd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clients?: boolean | CoachProfile$clientsArgs<ExtArgs>
    _count?: boolean | CoachProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coachProfile"]>

  export type CoachProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    specializations?: boolean
    bio?: boolean
    certifications?: boolean
    isAvailable?: boolean
    monthlyRateUsd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["coachProfile"]>

  export type CoachProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    specializations?: boolean
    bio?: boolean
    certifications?: boolean
    isAvailable?: boolean
    monthlyRateUsd?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CoachProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | CoachProfile$clientsArgs<ExtArgs>
    _count?: boolean | CoachProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CoachProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoachProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoachProfile"
    objects: {
      clients: Prisma.$CoachClientRelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      specializations: string[]
      bio: string | null
      certifications: string[]
      isAvailable: boolean
      monthlyRateUsd: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["coachProfile"]>
    composites: {}
  }

  type CoachProfileGetPayload<S extends boolean | null | undefined | CoachProfileDefaultArgs> = $Result.GetResult<Prisma.$CoachProfilePayload, S>

  type CoachProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CoachProfileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CoachProfileCountAggregateInputType | true
    }

  export interface CoachProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoachProfile'], meta: { name: 'CoachProfile' } }
    /**
     * Find zero or one CoachProfile that matches the filter.
     * @param {CoachProfileFindUniqueArgs} args - Arguments to find a CoachProfile
     * @example
     * // Get one CoachProfile
     * const coachProfile = await prisma.coachProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoachProfileFindUniqueArgs>(args: SelectSubset<T, CoachProfileFindUniqueArgs<ExtArgs>>): Prisma__CoachProfileClient<$Result.GetResult<Prisma.$CoachProfilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CoachProfile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CoachProfileFindUniqueOrThrowArgs} args - Arguments to find a CoachProfile
     * @example
     * // Get one CoachProfile
     * const coachProfile = await prisma.coachProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoachProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, CoachProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoachProfileClient<$Result.GetResult<Prisma.$CoachProfilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CoachProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachProfileFindFirstArgs} args - Arguments to find a CoachProfile
     * @example
     * // Get one CoachProfile
     * const coachProfile = await prisma.coachProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoachProfileFindFirstArgs>(args?: SelectSubset<T, CoachProfileFindFirstArgs<ExtArgs>>): Prisma__CoachProfileClient<$Result.GetResult<Prisma.$CoachProfilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CoachProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachProfileFindFirstOrThrowArgs} args - Arguments to find a CoachProfile
     * @example
     * // Get one CoachProfile
     * const coachProfile = await prisma.coachProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoachProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, CoachProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoachProfileClient<$Result.GetResult<Prisma.$CoachProfilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CoachProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoachProfiles
     * const coachProfiles = await prisma.coachProfile.findMany()
     * 
     * // Get first 10 CoachProfiles
     * const coachProfiles = await prisma.coachProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coachProfileWithIdOnly = await prisma.coachProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoachProfileFindManyArgs>(args?: SelectSubset<T, CoachProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachProfilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CoachProfile.
     * @param {CoachProfileCreateArgs} args - Arguments to create a CoachProfile.
     * @example
     * // Create one CoachProfile
     * const CoachProfile = await prisma.coachProfile.create({
     *   data: {
     *     // ... data to create a CoachProfile
     *   }
     * })
     * 
     */
    create<T extends CoachProfileCreateArgs>(args: SelectSubset<T, CoachProfileCreateArgs<ExtArgs>>): Prisma__CoachProfileClient<$Result.GetResult<Prisma.$CoachProfilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CoachProfiles.
     * @param {CoachProfileCreateManyArgs} args - Arguments to create many CoachProfiles.
     * @example
     * // Create many CoachProfiles
     * const coachProfile = await prisma.coachProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoachProfileCreateManyArgs>(args?: SelectSubset<T, CoachProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CoachProfiles and returns the data saved in the database.
     * @param {CoachProfileCreateManyAndReturnArgs} args - Arguments to create many CoachProfiles.
     * @example
     * // Create many CoachProfiles
     * const coachProfile = await prisma.coachProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CoachProfiles and only return the `id`
     * const coachProfileWithIdOnly = await prisma.coachProfile.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoachProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, CoachProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachProfilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CoachProfile.
     * @param {CoachProfileDeleteArgs} args - Arguments to delete one CoachProfile.
     * @example
     * // Delete one CoachProfile
     * const CoachProfile = await prisma.coachProfile.delete({
     *   where: {
     *     // ... filter to delete one CoachProfile
     *   }
     * })
     * 
     */
    delete<T extends CoachProfileDeleteArgs>(args: SelectSubset<T, CoachProfileDeleteArgs<ExtArgs>>): Prisma__CoachProfileClient<$Result.GetResult<Prisma.$CoachProfilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CoachProfile.
     * @param {CoachProfileUpdateArgs} args - Arguments to update one CoachProfile.
     * @example
     * // Update one CoachProfile
     * const coachProfile = await prisma.coachProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoachProfileUpdateArgs>(args: SelectSubset<T, CoachProfileUpdateArgs<ExtArgs>>): Prisma__CoachProfileClient<$Result.GetResult<Prisma.$CoachProfilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CoachProfiles.
     * @param {CoachProfileDeleteManyArgs} args - Arguments to filter CoachProfiles to delete.
     * @example
     * // Delete a few CoachProfiles
     * const { count } = await prisma.coachProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoachProfileDeleteManyArgs>(args?: SelectSubset<T, CoachProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoachProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoachProfiles
     * const coachProfile = await prisma.coachProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoachProfileUpdateManyArgs>(args: SelectSubset<T, CoachProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CoachProfile.
     * @param {CoachProfileUpsertArgs} args - Arguments to update or create a CoachProfile.
     * @example
     * // Update or create a CoachProfile
     * const coachProfile = await prisma.coachProfile.upsert({
     *   create: {
     *     // ... data to create a CoachProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoachProfile we want to update
     *   }
     * })
     */
    upsert<T extends CoachProfileUpsertArgs>(args: SelectSubset<T, CoachProfileUpsertArgs<ExtArgs>>): Prisma__CoachProfileClient<$Result.GetResult<Prisma.$CoachProfilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CoachProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachProfileCountArgs} args - Arguments to filter CoachProfiles to count.
     * @example
     * // Count the number of CoachProfiles
     * const count = await prisma.coachProfile.count({
     *   where: {
     *     // ... the filter for the CoachProfiles we want to count
     *   }
     * })
    **/
    count<T extends CoachProfileCountArgs>(
      args?: Subset<T, CoachProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoachProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoachProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoachProfileAggregateArgs>(args: Subset<T, CoachProfileAggregateArgs>): Prisma.PrismaPromise<GetCoachProfileAggregateType<T>>

    /**
     * Group by CoachProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachProfileGroupByArgs} args - Group by arguments.
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
      T extends CoachProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoachProfileGroupByArgs['orderBy'] }
        : { orderBy?: CoachProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CoachProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoachProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoachProfile model
   */
  readonly fields: CoachProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoachProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoachProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clients<T extends CoachProfile$clientsArgs<ExtArgs> = {}>(args?: Subset<T, CoachProfile$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachClientRelationPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the CoachProfile model
   */ 
  interface CoachProfileFieldRefs {
    readonly id: FieldRef<"CoachProfile", 'String'>
    readonly userId: FieldRef<"CoachProfile", 'String'>
    readonly specializations: FieldRef<"CoachProfile", 'String[]'>
    readonly bio: FieldRef<"CoachProfile", 'String'>
    readonly certifications: FieldRef<"CoachProfile", 'String[]'>
    readonly isAvailable: FieldRef<"CoachProfile", 'Boolean'>
    readonly monthlyRateUsd: FieldRef<"CoachProfile", 'Float'>
    readonly createdAt: FieldRef<"CoachProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"CoachProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CoachProfile findUnique
   */
  export type CoachProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachProfile
     */
    select?: CoachProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachProfileInclude<ExtArgs> | null
    /**
     * Filter, which CoachProfile to fetch.
     */
    where: CoachProfileWhereUniqueInput
  }

  /**
   * CoachProfile findUniqueOrThrow
   */
  export type CoachProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachProfile
     */
    select?: CoachProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachProfileInclude<ExtArgs> | null
    /**
     * Filter, which CoachProfile to fetch.
     */
    where: CoachProfileWhereUniqueInput
  }

  /**
   * CoachProfile findFirst
   */
  export type CoachProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachProfile
     */
    select?: CoachProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachProfileInclude<ExtArgs> | null
    /**
     * Filter, which CoachProfile to fetch.
     */
    where?: CoachProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachProfiles to fetch.
     */
    orderBy?: CoachProfileOrderByWithRelationInput | CoachProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoachProfiles.
     */
    cursor?: CoachProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoachProfiles.
     */
    distinct?: CoachProfileScalarFieldEnum | CoachProfileScalarFieldEnum[]
  }

  /**
   * CoachProfile findFirstOrThrow
   */
  export type CoachProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachProfile
     */
    select?: CoachProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachProfileInclude<ExtArgs> | null
    /**
     * Filter, which CoachProfile to fetch.
     */
    where?: CoachProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachProfiles to fetch.
     */
    orderBy?: CoachProfileOrderByWithRelationInput | CoachProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoachProfiles.
     */
    cursor?: CoachProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoachProfiles.
     */
    distinct?: CoachProfileScalarFieldEnum | CoachProfileScalarFieldEnum[]
  }

  /**
   * CoachProfile findMany
   */
  export type CoachProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachProfile
     */
    select?: CoachProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachProfileInclude<ExtArgs> | null
    /**
     * Filter, which CoachProfiles to fetch.
     */
    where?: CoachProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachProfiles to fetch.
     */
    orderBy?: CoachProfileOrderByWithRelationInput | CoachProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoachProfiles.
     */
    cursor?: CoachProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachProfiles.
     */
    skip?: number
    distinct?: CoachProfileScalarFieldEnum | CoachProfileScalarFieldEnum[]
  }

  /**
   * CoachProfile create
   */
  export type CoachProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachProfile
     */
    select?: CoachProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a CoachProfile.
     */
    data: XOR<CoachProfileCreateInput, CoachProfileUncheckedCreateInput>
  }

  /**
   * CoachProfile createMany
   */
  export type CoachProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoachProfiles.
     */
    data: CoachProfileCreateManyInput | CoachProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoachProfile createManyAndReturn
   */
  export type CoachProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachProfile
     */
    select?: CoachProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CoachProfiles.
     */
    data: CoachProfileCreateManyInput | CoachProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoachProfile update
   */
  export type CoachProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachProfile
     */
    select?: CoachProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a CoachProfile.
     */
    data: XOR<CoachProfileUpdateInput, CoachProfileUncheckedUpdateInput>
    /**
     * Choose, which CoachProfile to update.
     */
    where: CoachProfileWhereUniqueInput
  }

  /**
   * CoachProfile updateMany
   */
  export type CoachProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoachProfiles.
     */
    data: XOR<CoachProfileUpdateManyMutationInput, CoachProfileUncheckedUpdateManyInput>
    /**
     * Filter which CoachProfiles to update
     */
    where?: CoachProfileWhereInput
  }

  /**
   * CoachProfile upsert
   */
  export type CoachProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachProfile
     */
    select?: CoachProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the CoachProfile to update in case it exists.
     */
    where: CoachProfileWhereUniqueInput
    /**
     * In case the CoachProfile found by the `where` argument doesn't exist, create a new CoachProfile with this data.
     */
    create: XOR<CoachProfileCreateInput, CoachProfileUncheckedCreateInput>
    /**
     * In case the CoachProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoachProfileUpdateInput, CoachProfileUncheckedUpdateInput>
  }

  /**
   * CoachProfile delete
   */
  export type CoachProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachProfile
     */
    select?: CoachProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachProfileInclude<ExtArgs> | null
    /**
     * Filter which CoachProfile to delete.
     */
    where: CoachProfileWhereUniqueInput
  }

  /**
   * CoachProfile deleteMany
   */
  export type CoachProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoachProfiles to delete
     */
    where?: CoachProfileWhereInput
  }

  /**
   * CoachProfile.clients
   */
  export type CoachProfile$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachClientRelation
     */
    select?: CoachClientRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachClientRelationInclude<ExtArgs> | null
    where?: CoachClientRelationWhereInput
    orderBy?: CoachClientRelationOrderByWithRelationInput | CoachClientRelationOrderByWithRelationInput[]
    cursor?: CoachClientRelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CoachClientRelationScalarFieldEnum | CoachClientRelationScalarFieldEnum[]
  }

  /**
   * CoachProfile without action
   */
  export type CoachProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachProfile
     */
    select?: CoachProfileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachProfileInclude<ExtArgs> | null
  }


  /**
   * Model CoachClientRelation
   */

  export type AggregateCoachClientRelation = {
    _count: CoachClientRelationCountAggregateOutputType | null
    _min: CoachClientRelationMinAggregateOutputType | null
    _max: CoachClientRelationMaxAggregateOutputType | null
  }

  export type CoachClientRelationMinAggregateOutputType = {
    id: string | null
    coachUserId: string | null
    clientUserId: string | null
    status: string | null
    startedAt: Date | null
    endedAt: Date | null
    createdAt: Date | null
  }

  export type CoachClientRelationMaxAggregateOutputType = {
    id: string | null
    coachUserId: string | null
    clientUserId: string | null
    status: string | null
    startedAt: Date | null
    endedAt: Date | null
    createdAt: Date | null
  }

  export type CoachClientRelationCountAggregateOutputType = {
    id: number
    coachUserId: number
    clientUserId: number
    status: number
    startedAt: number
    endedAt: number
    createdAt: number
    _all: number
  }


  export type CoachClientRelationMinAggregateInputType = {
    id?: true
    coachUserId?: true
    clientUserId?: true
    status?: true
    startedAt?: true
    endedAt?: true
    createdAt?: true
  }

  export type CoachClientRelationMaxAggregateInputType = {
    id?: true
    coachUserId?: true
    clientUserId?: true
    status?: true
    startedAt?: true
    endedAt?: true
    createdAt?: true
  }

  export type CoachClientRelationCountAggregateInputType = {
    id?: true
    coachUserId?: true
    clientUserId?: true
    status?: true
    startedAt?: true
    endedAt?: true
    createdAt?: true
    _all?: true
  }

  export type CoachClientRelationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoachClientRelation to aggregate.
     */
    where?: CoachClientRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachClientRelations to fetch.
     */
    orderBy?: CoachClientRelationOrderByWithRelationInput | CoachClientRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoachClientRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachClientRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachClientRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CoachClientRelations
    **/
    _count?: true | CoachClientRelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoachClientRelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoachClientRelationMaxAggregateInputType
  }

  export type GetCoachClientRelationAggregateType<T extends CoachClientRelationAggregateArgs> = {
        [P in keyof T & keyof AggregateCoachClientRelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoachClientRelation[P]>
      : GetScalarType<T[P], AggregateCoachClientRelation[P]>
  }




  export type CoachClientRelationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachClientRelationWhereInput
    orderBy?: CoachClientRelationOrderByWithAggregationInput | CoachClientRelationOrderByWithAggregationInput[]
    by: CoachClientRelationScalarFieldEnum[] | CoachClientRelationScalarFieldEnum
    having?: CoachClientRelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoachClientRelationCountAggregateInputType | true
    _min?: CoachClientRelationMinAggregateInputType
    _max?: CoachClientRelationMaxAggregateInputType
  }

  export type CoachClientRelationGroupByOutputType = {
    id: string
    coachUserId: string
    clientUserId: string
    status: string
    startedAt: Date
    endedAt: Date | null
    createdAt: Date
    _count: CoachClientRelationCountAggregateOutputType | null
    _min: CoachClientRelationMinAggregateOutputType | null
    _max: CoachClientRelationMaxAggregateOutputType | null
  }

  type GetCoachClientRelationGroupByPayload<T extends CoachClientRelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoachClientRelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoachClientRelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoachClientRelationGroupByOutputType[P]>
            : GetScalarType<T[P], CoachClientRelationGroupByOutputType[P]>
        }
      >
    >


  export type CoachClientRelationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coachUserId?: boolean
    clientUserId?: boolean
    status?: boolean
    startedAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    coach?: boolean | CoachProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coachClientRelation"]>

  export type CoachClientRelationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    coachUserId?: boolean
    clientUserId?: boolean
    status?: boolean
    startedAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    coach?: boolean | CoachProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["coachClientRelation"]>

  export type CoachClientRelationSelectScalar = {
    id?: boolean
    coachUserId?: boolean
    clientUserId?: boolean
    status?: boolean
    startedAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
  }

  export type CoachClientRelationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coach?: boolean | CoachProfileDefaultArgs<ExtArgs>
  }
  export type CoachClientRelationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    coach?: boolean | CoachProfileDefaultArgs<ExtArgs>
  }

  export type $CoachClientRelationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CoachClientRelation"
    objects: {
      coach: Prisma.$CoachProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      coachUserId: string
      clientUserId: string
      status: string
      startedAt: Date
      endedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["coachClientRelation"]>
    composites: {}
  }

  type CoachClientRelationGetPayload<S extends boolean | null | undefined | CoachClientRelationDefaultArgs> = $Result.GetResult<Prisma.$CoachClientRelationPayload, S>

  type CoachClientRelationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CoachClientRelationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CoachClientRelationCountAggregateInputType | true
    }

  export interface CoachClientRelationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CoachClientRelation'], meta: { name: 'CoachClientRelation' } }
    /**
     * Find zero or one CoachClientRelation that matches the filter.
     * @param {CoachClientRelationFindUniqueArgs} args - Arguments to find a CoachClientRelation
     * @example
     * // Get one CoachClientRelation
     * const coachClientRelation = await prisma.coachClientRelation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoachClientRelationFindUniqueArgs>(args: SelectSubset<T, CoachClientRelationFindUniqueArgs<ExtArgs>>): Prisma__CoachClientRelationClient<$Result.GetResult<Prisma.$CoachClientRelationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CoachClientRelation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CoachClientRelationFindUniqueOrThrowArgs} args - Arguments to find a CoachClientRelation
     * @example
     * // Get one CoachClientRelation
     * const coachClientRelation = await prisma.coachClientRelation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoachClientRelationFindUniqueOrThrowArgs>(args: SelectSubset<T, CoachClientRelationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoachClientRelationClient<$Result.GetResult<Prisma.$CoachClientRelationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CoachClientRelation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachClientRelationFindFirstArgs} args - Arguments to find a CoachClientRelation
     * @example
     * // Get one CoachClientRelation
     * const coachClientRelation = await prisma.coachClientRelation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoachClientRelationFindFirstArgs>(args?: SelectSubset<T, CoachClientRelationFindFirstArgs<ExtArgs>>): Prisma__CoachClientRelationClient<$Result.GetResult<Prisma.$CoachClientRelationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CoachClientRelation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachClientRelationFindFirstOrThrowArgs} args - Arguments to find a CoachClientRelation
     * @example
     * // Get one CoachClientRelation
     * const coachClientRelation = await prisma.coachClientRelation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoachClientRelationFindFirstOrThrowArgs>(args?: SelectSubset<T, CoachClientRelationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoachClientRelationClient<$Result.GetResult<Prisma.$CoachClientRelationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CoachClientRelations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachClientRelationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CoachClientRelations
     * const coachClientRelations = await prisma.coachClientRelation.findMany()
     * 
     * // Get first 10 CoachClientRelations
     * const coachClientRelations = await prisma.coachClientRelation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coachClientRelationWithIdOnly = await prisma.coachClientRelation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoachClientRelationFindManyArgs>(args?: SelectSubset<T, CoachClientRelationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachClientRelationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CoachClientRelation.
     * @param {CoachClientRelationCreateArgs} args - Arguments to create a CoachClientRelation.
     * @example
     * // Create one CoachClientRelation
     * const CoachClientRelation = await prisma.coachClientRelation.create({
     *   data: {
     *     // ... data to create a CoachClientRelation
     *   }
     * })
     * 
     */
    create<T extends CoachClientRelationCreateArgs>(args: SelectSubset<T, CoachClientRelationCreateArgs<ExtArgs>>): Prisma__CoachClientRelationClient<$Result.GetResult<Prisma.$CoachClientRelationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CoachClientRelations.
     * @param {CoachClientRelationCreateManyArgs} args - Arguments to create many CoachClientRelations.
     * @example
     * // Create many CoachClientRelations
     * const coachClientRelation = await prisma.coachClientRelation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoachClientRelationCreateManyArgs>(args?: SelectSubset<T, CoachClientRelationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CoachClientRelations and returns the data saved in the database.
     * @param {CoachClientRelationCreateManyAndReturnArgs} args - Arguments to create many CoachClientRelations.
     * @example
     * // Create many CoachClientRelations
     * const coachClientRelation = await prisma.coachClientRelation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CoachClientRelations and only return the `id`
     * const coachClientRelationWithIdOnly = await prisma.coachClientRelation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoachClientRelationCreateManyAndReturnArgs>(args?: SelectSubset<T, CoachClientRelationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachClientRelationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CoachClientRelation.
     * @param {CoachClientRelationDeleteArgs} args - Arguments to delete one CoachClientRelation.
     * @example
     * // Delete one CoachClientRelation
     * const CoachClientRelation = await prisma.coachClientRelation.delete({
     *   where: {
     *     // ... filter to delete one CoachClientRelation
     *   }
     * })
     * 
     */
    delete<T extends CoachClientRelationDeleteArgs>(args: SelectSubset<T, CoachClientRelationDeleteArgs<ExtArgs>>): Prisma__CoachClientRelationClient<$Result.GetResult<Prisma.$CoachClientRelationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CoachClientRelation.
     * @param {CoachClientRelationUpdateArgs} args - Arguments to update one CoachClientRelation.
     * @example
     * // Update one CoachClientRelation
     * const coachClientRelation = await prisma.coachClientRelation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoachClientRelationUpdateArgs>(args: SelectSubset<T, CoachClientRelationUpdateArgs<ExtArgs>>): Prisma__CoachClientRelationClient<$Result.GetResult<Prisma.$CoachClientRelationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CoachClientRelations.
     * @param {CoachClientRelationDeleteManyArgs} args - Arguments to filter CoachClientRelations to delete.
     * @example
     * // Delete a few CoachClientRelations
     * const { count } = await prisma.coachClientRelation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoachClientRelationDeleteManyArgs>(args?: SelectSubset<T, CoachClientRelationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CoachClientRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachClientRelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CoachClientRelations
     * const coachClientRelation = await prisma.coachClientRelation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoachClientRelationUpdateManyArgs>(args: SelectSubset<T, CoachClientRelationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CoachClientRelation.
     * @param {CoachClientRelationUpsertArgs} args - Arguments to update or create a CoachClientRelation.
     * @example
     * // Update or create a CoachClientRelation
     * const coachClientRelation = await prisma.coachClientRelation.upsert({
     *   create: {
     *     // ... data to create a CoachClientRelation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CoachClientRelation we want to update
     *   }
     * })
     */
    upsert<T extends CoachClientRelationUpsertArgs>(args: SelectSubset<T, CoachClientRelationUpsertArgs<ExtArgs>>): Prisma__CoachClientRelationClient<$Result.GetResult<Prisma.$CoachClientRelationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CoachClientRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachClientRelationCountArgs} args - Arguments to filter CoachClientRelations to count.
     * @example
     * // Count the number of CoachClientRelations
     * const count = await prisma.coachClientRelation.count({
     *   where: {
     *     // ... the filter for the CoachClientRelations we want to count
     *   }
     * })
    **/
    count<T extends CoachClientRelationCountArgs>(
      args?: Subset<T, CoachClientRelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoachClientRelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CoachClientRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachClientRelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoachClientRelationAggregateArgs>(args: Subset<T, CoachClientRelationAggregateArgs>): Prisma.PrismaPromise<GetCoachClientRelationAggregateType<T>>

    /**
     * Group by CoachClientRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachClientRelationGroupByArgs} args - Group by arguments.
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
      T extends CoachClientRelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoachClientRelationGroupByArgs['orderBy'] }
        : { orderBy?: CoachClientRelationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CoachClientRelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoachClientRelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CoachClientRelation model
   */
  readonly fields: CoachClientRelationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CoachClientRelation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoachClientRelationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    coach<T extends CoachProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CoachProfileDefaultArgs<ExtArgs>>): Prisma__CoachProfileClient<$Result.GetResult<Prisma.$CoachProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the CoachClientRelation model
   */ 
  interface CoachClientRelationFieldRefs {
    readonly id: FieldRef<"CoachClientRelation", 'String'>
    readonly coachUserId: FieldRef<"CoachClientRelation", 'String'>
    readonly clientUserId: FieldRef<"CoachClientRelation", 'String'>
    readonly status: FieldRef<"CoachClientRelation", 'String'>
    readonly startedAt: FieldRef<"CoachClientRelation", 'DateTime'>
    readonly endedAt: FieldRef<"CoachClientRelation", 'DateTime'>
    readonly createdAt: FieldRef<"CoachClientRelation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CoachClientRelation findUnique
   */
  export type CoachClientRelationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachClientRelation
     */
    select?: CoachClientRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachClientRelationInclude<ExtArgs> | null
    /**
     * Filter, which CoachClientRelation to fetch.
     */
    where: CoachClientRelationWhereUniqueInput
  }

  /**
   * CoachClientRelation findUniqueOrThrow
   */
  export type CoachClientRelationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachClientRelation
     */
    select?: CoachClientRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachClientRelationInclude<ExtArgs> | null
    /**
     * Filter, which CoachClientRelation to fetch.
     */
    where: CoachClientRelationWhereUniqueInput
  }

  /**
   * CoachClientRelation findFirst
   */
  export type CoachClientRelationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachClientRelation
     */
    select?: CoachClientRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachClientRelationInclude<ExtArgs> | null
    /**
     * Filter, which CoachClientRelation to fetch.
     */
    where?: CoachClientRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachClientRelations to fetch.
     */
    orderBy?: CoachClientRelationOrderByWithRelationInput | CoachClientRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoachClientRelations.
     */
    cursor?: CoachClientRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachClientRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachClientRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoachClientRelations.
     */
    distinct?: CoachClientRelationScalarFieldEnum | CoachClientRelationScalarFieldEnum[]
  }

  /**
   * CoachClientRelation findFirstOrThrow
   */
  export type CoachClientRelationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachClientRelation
     */
    select?: CoachClientRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachClientRelationInclude<ExtArgs> | null
    /**
     * Filter, which CoachClientRelation to fetch.
     */
    where?: CoachClientRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachClientRelations to fetch.
     */
    orderBy?: CoachClientRelationOrderByWithRelationInput | CoachClientRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CoachClientRelations.
     */
    cursor?: CoachClientRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachClientRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachClientRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CoachClientRelations.
     */
    distinct?: CoachClientRelationScalarFieldEnum | CoachClientRelationScalarFieldEnum[]
  }

  /**
   * CoachClientRelation findMany
   */
  export type CoachClientRelationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachClientRelation
     */
    select?: CoachClientRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachClientRelationInclude<ExtArgs> | null
    /**
     * Filter, which CoachClientRelations to fetch.
     */
    where?: CoachClientRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CoachClientRelations to fetch.
     */
    orderBy?: CoachClientRelationOrderByWithRelationInput | CoachClientRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CoachClientRelations.
     */
    cursor?: CoachClientRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CoachClientRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CoachClientRelations.
     */
    skip?: number
    distinct?: CoachClientRelationScalarFieldEnum | CoachClientRelationScalarFieldEnum[]
  }

  /**
   * CoachClientRelation create
   */
  export type CoachClientRelationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachClientRelation
     */
    select?: CoachClientRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachClientRelationInclude<ExtArgs> | null
    /**
     * The data needed to create a CoachClientRelation.
     */
    data: XOR<CoachClientRelationCreateInput, CoachClientRelationUncheckedCreateInput>
  }

  /**
   * CoachClientRelation createMany
   */
  export type CoachClientRelationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CoachClientRelations.
     */
    data: CoachClientRelationCreateManyInput | CoachClientRelationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CoachClientRelation createManyAndReturn
   */
  export type CoachClientRelationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachClientRelation
     */
    select?: CoachClientRelationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CoachClientRelations.
     */
    data: CoachClientRelationCreateManyInput | CoachClientRelationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachClientRelationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CoachClientRelation update
   */
  export type CoachClientRelationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachClientRelation
     */
    select?: CoachClientRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachClientRelationInclude<ExtArgs> | null
    /**
     * The data needed to update a CoachClientRelation.
     */
    data: XOR<CoachClientRelationUpdateInput, CoachClientRelationUncheckedUpdateInput>
    /**
     * Choose, which CoachClientRelation to update.
     */
    where: CoachClientRelationWhereUniqueInput
  }

  /**
   * CoachClientRelation updateMany
   */
  export type CoachClientRelationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CoachClientRelations.
     */
    data: XOR<CoachClientRelationUpdateManyMutationInput, CoachClientRelationUncheckedUpdateManyInput>
    /**
     * Filter which CoachClientRelations to update
     */
    where?: CoachClientRelationWhereInput
  }

  /**
   * CoachClientRelation upsert
   */
  export type CoachClientRelationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachClientRelation
     */
    select?: CoachClientRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachClientRelationInclude<ExtArgs> | null
    /**
     * The filter to search for the CoachClientRelation to update in case it exists.
     */
    where: CoachClientRelationWhereUniqueInput
    /**
     * In case the CoachClientRelation found by the `where` argument doesn't exist, create a new CoachClientRelation with this data.
     */
    create: XOR<CoachClientRelationCreateInput, CoachClientRelationUncheckedCreateInput>
    /**
     * In case the CoachClientRelation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoachClientRelationUpdateInput, CoachClientRelationUncheckedUpdateInput>
  }

  /**
   * CoachClientRelation delete
   */
  export type CoachClientRelationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachClientRelation
     */
    select?: CoachClientRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachClientRelationInclude<ExtArgs> | null
    /**
     * Filter which CoachClientRelation to delete.
     */
    where: CoachClientRelationWhereUniqueInput
  }

  /**
   * CoachClientRelation deleteMany
   */
  export type CoachClientRelationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CoachClientRelations to delete
     */
    where?: CoachClientRelationWhereInput
  }

  /**
   * CoachClientRelation without action
   */
  export type CoachClientRelationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CoachClientRelation
     */
    select?: CoachClientRelationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CoachClientRelationInclude<ExtArgs> | null
  }


  /**
   * Model UserStatus
   */

  export type AggregateUserStatus = {
    _count: UserStatusCountAggregateOutputType | null
    _avg: UserStatusAvgAggregateOutputType | null
    _sum: UserStatusSumAggregateOutputType | null
    _min: UserStatusMinAggregateOutputType | null
    _max: UserStatusMaxAggregateOutputType | null
  }

  export type UserStatusAvgAggregateOutputType = {
    fatigueScore: number | null
    adherenceRate: number | null
    currentStreak: number | null
    currentTdee: number | null
  }

  export type UserStatusSumAggregateOutputType = {
    fatigueScore: number | null
    adherenceRate: number | null
    currentStreak: number | null
    currentTdee: number | null
  }

  export type UserStatusMinAggregateOutputType = {
    id: string | null
    userId: string | null
    fatigueScore: number | null
    circadianPeakTime: string | null
    circadianLowTime: string | null
    adherenceRate: number | null
    currentStreak: number | null
    currentTdee: number | null
    weightTrend: string | null
    lastUpdatedBy: string | null
    updatedAt: Date | null
  }

  export type UserStatusMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    fatigueScore: number | null
    circadianPeakTime: string | null
    circadianLowTime: string | null
    adherenceRate: number | null
    currentStreak: number | null
    currentTdee: number | null
    weightTrend: string | null
    lastUpdatedBy: string | null
    updatedAt: Date | null
  }

  export type UserStatusCountAggregateOutputType = {
    id: number
    userId: number
    fatigueScore: number
    circadianPeakTime: number
    circadianLowTime: number
    adherenceRate: number
    currentStreak: number
    currentTdee: number
    weightTrend: number
    lastUpdatedBy: number
    updatedAt: number
    _all: number
  }


  export type UserStatusAvgAggregateInputType = {
    fatigueScore?: true
    adherenceRate?: true
    currentStreak?: true
    currentTdee?: true
  }

  export type UserStatusSumAggregateInputType = {
    fatigueScore?: true
    adherenceRate?: true
    currentStreak?: true
    currentTdee?: true
  }

  export type UserStatusMinAggregateInputType = {
    id?: true
    userId?: true
    fatigueScore?: true
    circadianPeakTime?: true
    circadianLowTime?: true
    adherenceRate?: true
    currentStreak?: true
    currentTdee?: true
    weightTrend?: true
    lastUpdatedBy?: true
    updatedAt?: true
  }

  export type UserStatusMaxAggregateInputType = {
    id?: true
    userId?: true
    fatigueScore?: true
    circadianPeakTime?: true
    circadianLowTime?: true
    adherenceRate?: true
    currentStreak?: true
    currentTdee?: true
    weightTrend?: true
    lastUpdatedBy?: true
    updatedAt?: true
  }

  export type UserStatusCountAggregateInputType = {
    id?: true
    userId?: true
    fatigueScore?: true
    circadianPeakTime?: true
    circadianLowTime?: true
    adherenceRate?: true
    currentStreak?: true
    currentTdee?: true
    weightTrend?: true
    lastUpdatedBy?: true
    updatedAt?: true
    _all?: true
  }

  export type UserStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStatus to aggregate.
     */
    where?: UserStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStatuses to fetch.
     */
    orderBy?: UserStatusOrderByWithRelationInput | UserStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserStatuses
    **/
    _count?: true | UserStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserStatusMaxAggregateInputType
  }

  export type GetUserStatusAggregateType<T extends UserStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateUserStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserStatus[P]>
      : GetScalarType<T[P], AggregateUserStatus[P]>
  }




  export type UserStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStatusWhereInput
    orderBy?: UserStatusOrderByWithAggregationInput | UserStatusOrderByWithAggregationInput[]
    by: UserStatusScalarFieldEnum[] | UserStatusScalarFieldEnum
    having?: UserStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserStatusCountAggregateInputType | true
    _avg?: UserStatusAvgAggregateInputType
    _sum?: UserStatusSumAggregateInputType
    _min?: UserStatusMinAggregateInputType
    _max?: UserStatusMaxAggregateInputType
  }

  export type UserStatusGroupByOutputType = {
    id: string
    userId: string
    fatigueScore: number
    circadianPeakTime: string | null
    circadianLowTime: string | null
    adherenceRate: number
    currentStreak: number
    currentTdee: number | null
    weightTrend: string | null
    lastUpdatedBy: string | null
    updatedAt: Date
    _count: UserStatusCountAggregateOutputType | null
    _avg: UserStatusAvgAggregateOutputType | null
    _sum: UserStatusSumAggregateOutputType | null
    _min: UserStatusMinAggregateOutputType | null
    _max: UserStatusMaxAggregateOutputType | null
  }

  type GetUserStatusGroupByPayload<T extends UserStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserStatusGroupByOutputType[P]>
            : GetScalarType<T[P], UserStatusGroupByOutputType[P]>
        }
      >
    >


  export type UserStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fatigueScore?: boolean
    circadianPeakTime?: boolean
    circadianLowTime?: boolean
    adherenceRate?: boolean
    currentStreak?: boolean
    currentTdee?: boolean
    weightTrend?: boolean
    lastUpdatedBy?: boolean
    updatedAt?: boolean
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStatus"]>

  export type UserStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fatigueScore?: boolean
    circadianPeakTime?: boolean
    circadianLowTime?: boolean
    adherenceRate?: boolean
    currentStreak?: boolean
    currentTdee?: boolean
    weightTrend?: boolean
    lastUpdatedBy?: boolean
    updatedAt?: boolean
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStatus"]>

  export type UserStatusSelectScalar = {
    id?: boolean
    userId?: boolean
    fatigueScore?: boolean
    circadianPeakTime?: boolean
    circadianLowTime?: boolean
    adherenceRate?: boolean
    currentStreak?: boolean
    currentTdee?: boolean
    weightTrend?: boolean
    lastUpdatedBy?: boolean
    updatedAt?: boolean
  }

  export type UserStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }
  export type UserStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | UserProfileDefaultArgs<ExtArgs>
  }

  export type $UserStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserStatus"
    objects: {
      profile: Prisma.$UserProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      fatigueScore: number
      circadianPeakTime: string | null
      circadianLowTime: string | null
      adherenceRate: number
      currentStreak: number
      currentTdee: number | null
      weightTrend: string | null
      lastUpdatedBy: string | null
      updatedAt: Date
    }, ExtArgs["result"]["userStatus"]>
    composites: {}
  }

  type UserStatusGetPayload<S extends boolean | null | undefined | UserStatusDefaultArgs> = $Result.GetResult<Prisma.$UserStatusPayload, S>

  type UserStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserStatusFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserStatusCountAggregateInputType | true
    }

  export interface UserStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserStatus'], meta: { name: 'UserStatus' } }
    /**
     * Find zero or one UserStatus that matches the filter.
     * @param {UserStatusFindUniqueArgs} args - Arguments to find a UserStatus
     * @example
     * // Get one UserStatus
     * const userStatus = await prisma.userStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserStatusFindUniqueArgs>(args: SelectSubset<T, UserStatusFindUniqueArgs<ExtArgs>>): Prisma__UserStatusClient<$Result.GetResult<Prisma.$UserStatusPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserStatus that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserStatusFindUniqueOrThrowArgs} args - Arguments to find a UserStatus
     * @example
     * // Get one UserStatus
     * const userStatus = await prisma.userStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, UserStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserStatusClient<$Result.GetResult<Prisma.$UserStatusPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatusFindFirstArgs} args - Arguments to find a UserStatus
     * @example
     * // Get one UserStatus
     * const userStatus = await prisma.userStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserStatusFindFirstArgs>(args?: SelectSubset<T, UserStatusFindFirstArgs<ExtArgs>>): Prisma__UserStatusClient<$Result.GetResult<Prisma.$UserStatusPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatusFindFirstOrThrowArgs} args - Arguments to find a UserStatus
     * @example
     * // Get one UserStatus
     * const userStatus = await prisma.userStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, UserStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserStatusClient<$Result.GetResult<Prisma.$UserStatusPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserStatuses
     * const userStatuses = await prisma.userStatus.findMany()
     * 
     * // Get first 10 UserStatuses
     * const userStatuses = await prisma.userStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userStatusWithIdOnly = await prisma.userStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserStatusFindManyArgs>(args?: SelectSubset<T, UserStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatusPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserStatus.
     * @param {UserStatusCreateArgs} args - Arguments to create a UserStatus.
     * @example
     * // Create one UserStatus
     * const UserStatus = await prisma.userStatus.create({
     *   data: {
     *     // ... data to create a UserStatus
     *   }
     * })
     * 
     */
    create<T extends UserStatusCreateArgs>(args: SelectSubset<T, UserStatusCreateArgs<ExtArgs>>): Prisma__UserStatusClient<$Result.GetResult<Prisma.$UserStatusPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserStatuses.
     * @param {UserStatusCreateManyArgs} args - Arguments to create many UserStatuses.
     * @example
     * // Create many UserStatuses
     * const userStatus = await prisma.userStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserStatusCreateManyArgs>(args?: SelectSubset<T, UserStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserStatuses and returns the data saved in the database.
     * @param {UserStatusCreateManyAndReturnArgs} args - Arguments to create many UserStatuses.
     * @example
     * // Create many UserStatuses
     * const userStatus = await prisma.userStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserStatuses and only return the `id`
     * const userStatusWithIdOnly = await prisma.userStatus.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, UserStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatusPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserStatus.
     * @param {UserStatusDeleteArgs} args - Arguments to delete one UserStatus.
     * @example
     * // Delete one UserStatus
     * const UserStatus = await prisma.userStatus.delete({
     *   where: {
     *     // ... filter to delete one UserStatus
     *   }
     * })
     * 
     */
    delete<T extends UserStatusDeleteArgs>(args: SelectSubset<T, UserStatusDeleteArgs<ExtArgs>>): Prisma__UserStatusClient<$Result.GetResult<Prisma.$UserStatusPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserStatus.
     * @param {UserStatusUpdateArgs} args - Arguments to update one UserStatus.
     * @example
     * // Update one UserStatus
     * const userStatus = await prisma.userStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserStatusUpdateArgs>(args: SelectSubset<T, UserStatusUpdateArgs<ExtArgs>>): Prisma__UserStatusClient<$Result.GetResult<Prisma.$UserStatusPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserStatuses.
     * @param {UserStatusDeleteManyArgs} args - Arguments to filter UserStatuses to delete.
     * @example
     * // Delete a few UserStatuses
     * const { count } = await prisma.userStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserStatusDeleteManyArgs>(args?: SelectSubset<T, UserStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserStatuses
     * const userStatus = await prisma.userStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserStatusUpdateManyArgs>(args: SelectSubset<T, UserStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserStatus.
     * @param {UserStatusUpsertArgs} args - Arguments to update or create a UserStatus.
     * @example
     * // Update or create a UserStatus
     * const userStatus = await prisma.userStatus.upsert({
     *   create: {
     *     // ... data to create a UserStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserStatus we want to update
     *   }
     * })
     */
    upsert<T extends UserStatusUpsertArgs>(args: SelectSubset<T, UserStatusUpsertArgs<ExtArgs>>): Prisma__UserStatusClient<$Result.GetResult<Prisma.$UserStatusPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatusCountArgs} args - Arguments to filter UserStatuses to count.
     * @example
     * // Count the number of UserStatuses
     * const count = await prisma.userStatus.count({
     *   where: {
     *     // ... the filter for the UserStatuses we want to count
     *   }
     * })
    **/
    count<T extends UserStatusCountArgs>(
      args?: Subset<T, UserStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserStatusAggregateArgs>(args: Subset<T, UserStatusAggregateArgs>): Prisma.PrismaPromise<GetUserStatusAggregateType<T>>

    /**
     * Group by UserStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStatusGroupByArgs} args - Group by arguments.
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
      T extends UserStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserStatusGroupByArgs['orderBy'] }
        : { orderBy?: UserStatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserStatus model
   */
  readonly fields: UserStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends UserProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserProfileDefaultArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UserStatus model
   */ 
  interface UserStatusFieldRefs {
    readonly id: FieldRef<"UserStatus", 'String'>
    readonly userId: FieldRef<"UserStatus", 'String'>
    readonly fatigueScore: FieldRef<"UserStatus", 'Float'>
    readonly circadianPeakTime: FieldRef<"UserStatus", 'String'>
    readonly circadianLowTime: FieldRef<"UserStatus", 'String'>
    readonly adherenceRate: FieldRef<"UserStatus", 'Float'>
    readonly currentStreak: FieldRef<"UserStatus", 'Int'>
    readonly currentTdee: FieldRef<"UserStatus", 'Float'>
    readonly weightTrend: FieldRef<"UserStatus", 'String'>
    readonly lastUpdatedBy: FieldRef<"UserStatus", 'String'>
    readonly updatedAt: FieldRef<"UserStatus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserStatus findUnique
   */
  export type UserStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatus
     */
    select?: UserStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatusInclude<ExtArgs> | null
    /**
     * Filter, which UserStatus to fetch.
     */
    where: UserStatusWhereUniqueInput
  }

  /**
   * UserStatus findUniqueOrThrow
   */
  export type UserStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatus
     */
    select?: UserStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatusInclude<ExtArgs> | null
    /**
     * Filter, which UserStatus to fetch.
     */
    where: UserStatusWhereUniqueInput
  }

  /**
   * UserStatus findFirst
   */
  export type UserStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatus
     */
    select?: UserStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatusInclude<ExtArgs> | null
    /**
     * Filter, which UserStatus to fetch.
     */
    where?: UserStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStatuses to fetch.
     */
    orderBy?: UserStatusOrderByWithRelationInput | UserStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStatuses.
     */
    cursor?: UserStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStatuses.
     */
    distinct?: UserStatusScalarFieldEnum | UserStatusScalarFieldEnum[]
  }

  /**
   * UserStatus findFirstOrThrow
   */
  export type UserStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatus
     */
    select?: UserStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatusInclude<ExtArgs> | null
    /**
     * Filter, which UserStatus to fetch.
     */
    where?: UserStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStatuses to fetch.
     */
    orderBy?: UserStatusOrderByWithRelationInput | UserStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStatuses.
     */
    cursor?: UserStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStatuses.
     */
    distinct?: UserStatusScalarFieldEnum | UserStatusScalarFieldEnum[]
  }

  /**
   * UserStatus findMany
   */
  export type UserStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatus
     */
    select?: UserStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatusInclude<ExtArgs> | null
    /**
     * Filter, which UserStatuses to fetch.
     */
    where?: UserStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStatuses to fetch.
     */
    orderBy?: UserStatusOrderByWithRelationInput | UserStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserStatuses.
     */
    cursor?: UserStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStatuses.
     */
    skip?: number
    distinct?: UserStatusScalarFieldEnum | UserStatusScalarFieldEnum[]
  }

  /**
   * UserStatus create
   */
  export type UserStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatus
     */
    select?: UserStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a UserStatus.
     */
    data: XOR<UserStatusCreateInput, UserStatusUncheckedCreateInput>
  }

  /**
   * UserStatus createMany
   */
  export type UserStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserStatuses.
     */
    data: UserStatusCreateManyInput | UserStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserStatus createManyAndReturn
   */
  export type UserStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatus
     */
    select?: UserStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserStatuses.
     */
    data: UserStatusCreateManyInput | UserStatusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserStatus update
   */
  export type UserStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatus
     */
    select?: UserStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a UserStatus.
     */
    data: XOR<UserStatusUpdateInput, UserStatusUncheckedUpdateInput>
    /**
     * Choose, which UserStatus to update.
     */
    where: UserStatusWhereUniqueInput
  }

  /**
   * UserStatus updateMany
   */
  export type UserStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserStatuses.
     */
    data: XOR<UserStatusUpdateManyMutationInput, UserStatusUncheckedUpdateManyInput>
    /**
     * Filter which UserStatuses to update
     */
    where?: UserStatusWhereInput
  }

  /**
   * UserStatus upsert
   */
  export type UserStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatus
     */
    select?: UserStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the UserStatus to update in case it exists.
     */
    where: UserStatusWhereUniqueInput
    /**
     * In case the UserStatus found by the `where` argument doesn't exist, create a new UserStatus with this data.
     */
    create: XOR<UserStatusCreateInput, UserStatusUncheckedCreateInput>
    /**
     * In case the UserStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserStatusUpdateInput, UserStatusUncheckedUpdateInput>
  }

  /**
   * UserStatus delete
   */
  export type UserStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatus
     */
    select?: UserStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatusInclude<ExtArgs> | null
    /**
     * Filter which UserStatus to delete.
     */
    where: UserStatusWhereUniqueInput
  }

  /**
   * UserStatus deleteMany
   */
  export type UserStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStatuses to delete
     */
    where?: UserStatusWhereInput
  }

  /**
   * UserStatus without action
   */
  export type UserStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStatus
     */
    select?: UserStatusSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStatusInclude<ExtArgs> | null
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


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    displayName: 'displayName',
    avatarUrl: 'avatarUrl',
    dateOfBirth: 'dateOfBirth',
    heightCm: 'heightCm',
    weightKg: 'weightKg',
    biologicalSex: 'biologicalSex',
    timezone: 'timezone',
    region: 'region',
    onboardingCompleted: 'onboardingCompleted',
    onboardingStep: 'onboardingStep',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const UserPreferencesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    primaryGoal: 'primaryGoal',
    dietaryPreference: 'dietaryPreference',
    targetCalories: 'targetCalories',
    targetProteinG: 'targetProteinG',
    targetCarbsG: 'targetCarbsG',
    targetFatG: 'targetFatG',
    activityLevel: 'activityLevel',
    experienceLevel: 'experienceLevel',
    lifestyleType: 'lifestyleType',
    sleepWindowStart: 'sleepWindowStart',
    sleepWindowEnd: 'sleepWindowEnd',
    allergies: 'allergies',
    healthConditions: 'healthConditions',
    dietMode: 'dietMode',
    workoutEnvironment: 'workoutEnvironment',
    availableEquipment: 'availableEquipment',
    isBodybuilderMode: 'isBodybuilderMode',
    isInjurySafeMode: 'isInjurySafeMode',
    workoutDurationPreference: 'workoutDurationPreference',
    splitPreference: 'splitPreference',
    activeProtocolId: 'activeProtocolId',
    updatedAt: 'updatedAt'
  };

  export type UserPreferencesScalarFieldEnum = (typeof UserPreferencesScalarFieldEnum)[keyof typeof UserPreferencesScalarFieldEnum]


  export const CoachProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    specializations: 'specializations',
    bio: 'bio',
    certifications: 'certifications',
    isAvailable: 'isAvailable',
    monthlyRateUsd: 'monthlyRateUsd',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CoachProfileScalarFieldEnum = (typeof CoachProfileScalarFieldEnum)[keyof typeof CoachProfileScalarFieldEnum]


  export const CoachClientRelationScalarFieldEnum: {
    id: 'id',
    coachUserId: 'coachUserId',
    clientUserId: 'clientUserId',
    status: 'status',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    createdAt: 'createdAt'
  };

  export type CoachClientRelationScalarFieldEnum = (typeof CoachClientRelationScalarFieldEnum)[keyof typeof CoachClientRelationScalarFieldEnum]


  export const UserStatusScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fatigueScore: 'fatigueScore',
    circadianPeakTime: 'circadianPeakTime',
    circadianLowTime: 'circadianLowTime',
    adherenceRate: 'adherenceRate',
    currentStreak: 'currentStreak',
    currentTdee: 'currentTdee',
    weightTrend: 'weightTrend',
    lastUpdatedBy: 'lastUpdatedBy',
    updatedAt: 'updatedAt'
  };

  export type UserStatusScalarFieldEnum = (typeof UserStatusScalarFieldEnum)[keyof typeof UserStatusScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: StringFilter<"UserProfile"> | string
    userId?: StringFilter<"UserProfile"> | string
    displayName?: StringFilter<"UserProfile"> | string
    avatarUrl?: StringNullableFilter<"UserProfile"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    heightCm?: FloatNullableFilter<"UserProfile"> | number | null
    weightKg?: FloatNullableFilter<"UserProfile"> | number | null
    biologicalSex?: StringNullableFilter<"UserProfile"> | string | null
    timezone?: StringFilter<"UserProfile"> | string
    region?: StringFilter<"UserProfile"> | string
    onboardingCompleted?: BoolFilter<"UserProfile"> | boolean
    onboardingStep?: IntFilter<"UserProfile"> | number
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    preferences?: XOR<UserPreferencesNullableRelationFilter, UserPreferencesWhereInput> | null
    status?: XOR<UserStatusNullableRelationFilter, UserStatusWhereInput> | null
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    heightCm?: SortOrderInput | SortOrder
    weightKg?: SortOrderInput | SortOrder
    biologicalSex?: SortOrderInput | SortOrder
    timezone?: SortOrder
    region?: SortOrder
    onboardingCompleted?: SortOrder
    onboardingStep?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    preferences?: UserPreferencesOrderByWithRelationInput
    status?: UserStatusOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    displayName?: StringFilter<"UserProfile"> | string
    avatarUrl?: StringNullableFilter<"UserProfile"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"UserProfile"> | Date | string | null
    heightCm?: FloatNullableFilter<"UserProfile"> | number | null
    weightKg?: FloatNullableFilter<"UserProfile"> | number | null
    biologicalSex?: StringNullableFilter<"UserProfile"> | string | null
    timezone?: StringFilter<"UserProfile"> | string
    region?: StringFilter<"UserProfile"> | string
    onboardingCompleted?: BoolFilter<"UserProfile"> | boolean
    onboardingStep?: IntFilter<"UserProfile"> | number
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    preferences?: XOR<UserPreferencesNullableRelationFilter, UserPreferencesWhereInput> | null
    status?: XOR<UserStatusNullableRelationFilter, UserStatusWhereInput> | null
  }, "id" | "userId">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    heightCm?: SortOrderInput | SortOrder
    weightKg?: SortOrderInput | SortOrder
    biologicalSex?: SortOrderInput | SortOrder
    timezone?: SortOrder
    region?: SortOrder
    onboardingCompleted?: SortOrder
    onboardingStep?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _avg?: UserProfileAvgOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
    _sum?: UserProfileSumOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfile"> | string
    userId?: StringWithAggregatesFilter<"UserProfile"> | string
    displayName?: StringWithAggregatesFilter<"UserProfile"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"UserProfile"> | Date | string | null
    heightCm?: FloatNullableWithAggregatesFilter<"UserProfile"> | number | null
    weightKg?: FloatNullableWithAggregatesFilter<"UserProfile"> | number | null
    biologicalSex?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    timezone?: StringWithAggregatesFilter<"UserProfile"> | string
    region?: StringWithAggregatesFilter<"UserProfile"> | string
    onboardingCompleted?: BoolWithAggregatesFilter<"UserProfile"> | boolean
    onboardingStep?: IntWithAggregatesFilter<"UserProfile"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
  }

  export type UserPreferencesWhereInput = {
    AND?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    OR?: UserPreferencesWhereInput[]
    NOT?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    id?: StringFilter<"UserPreferences"> | string
    userId?: StringFilter<"UserPreferences"> | string
    primaryGoal?: StringFilter<"UserPreferences"> | string
    dietaryPreference?: StringFilter<"UserPreferences"> | string
    targetCalories?: FloatNullableFilter<"UserPreferences"> | number | null
    targetProteinG?: FloatNullableFilter<"UserPreferences"> | number | null
    targetCarbsG?: FloatNullableFilter<"UserPreferences"> | number | null
    targetFatG?: FloatNullableFilter<"UserPreferences"> | number | null
    activityLevel?: StringFilter<"UserPreferences"> | string
    experienceLevel?: StringFilter<"UserPreferences"> | string
    lifestyleType?: StringFilter<"UserPreferences"> | string
    sleepWindowStart?: StringNullableFilter<"UserPreferences"> | string | null
    sleepWindowEnd?: StringNullableFilter<"UserPreferences"> | string | null
    allergies?: StringNullableListFilter<"UserPreferences">
    healthConditions?: StringNullableListFilter<"UserPreferences">
    dietMode?: StringFilter<"UserPreferences"> | string
    workoutEnvironment?: StringNullableFilter<"UserPreferences"> | string | null
    availableEquipment?: StringNullableListFilter<"UserPreferences">
    isBodybuilderMode?: BoolFilter<"UserPreferences"> | boolean
    isInjurySafeMode?: BoolFilter<"UserPreferences"> | boolean
    workoutDurationPreference?: IntFilter<"UserPreferences"> | number
    splitPreference?: StringFilter<"UserPreferences"> | string
    activeProtocolId?: StringNullableFilter<"UserPreferences"> | string | null
    updatedAt?: DateTimeFilter<"UserPreferences"> | Date | string
    profile?: XOR<UserProfileRelationFilter, UserProfileWhereInput>
  }

  export type UserPreferencesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    primaryGoal?: SortOrder
    dietaryPreference?: SortOrder
    targetCalories?: SortOrderInput | SortOrder
    targetProteinG?: SortOrderInput | SortOrder
    targetCarbsG?: SortOrderInput | SortOrder
    targetFatG?: SortOrderInput | SortOrder
    activityLevel?: SortOrder
    experienceLevel?: SortOrder
    lifestyleType?: SortOrder
    sleepWindowStart?: SortOrderInput | SortOrder
    sleepWindowEnd?: SortOrderInput | SortOrder
    allergies?: SortOrder
    healthConditions?: SortOrder
    dietMode?: SortOrder
    workoutEnvironment?: SortOrderInput | SortOrder
    availableEquipment?: SortOrder
    isBodybuilderMode?: SortOrder
    isInjurySafeMode?: SortOrder
    workoutDurationPreference?: SortOrder
    splitPreference?: SortOrder
    activeProtocolId?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    profile?: UserProfileOrderByWithRelationInput
  }

  export type UserPreferencesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    OR?: UserPreferencesWhereInput[]
    NOT?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    primaryGoal?: StringFilter<"UserPreferences"> | string
    dietaryPreference?: StringFilter<"UserPreferences"> | string
    targetCalories?: FloatNullableFilter<"UserPreferences"> | number | null
    targetProteinG?: FloatNullableFilter<"UserPreferences"> | number | null
    targetCarbsG?: FloatNullableFilter<"UserPreferences"> | number | null
    targetFatG?: FloatNullableFilter<"UserPreferences"> | number | null
    activityLevel?: StringFilter<"UserPreferences"> | string
    experienceLevel?: StringFilter<"UserPreferences"> | string
    lifestyleType?: StringFilter<"UserPreferences"> | string
    sleepWindowStart?: StringNullableFilter<"UserPreferences"> | string | null
    sleepWindowEnd?: StringNullableFilter<"UserPreferences"> | string | null
    allergies?: StringNullableListFilter<"UserPreferences">
    healthConditions?: StringNullableListFilter<"UserPreferences">
    dietMode?: StringFilter<"UserPreferences"> | string
    workoutEnvironment?: StringNullableFilter<"UserPreferences"> | string | null
    availableEquipment?: StringNullableListFilter<"UserPreferences">
    isBodybuilderMode?: BoolFilter<"UserPreferences"> | boolean
    isInjurySafeMode?: BoolFilter<"UserPreferences"> | boolean
    workoutDurationPreference?: IntFilter<"UserPreferences"> | number
    splitPreference?: StringFilter<"UserPreferences"> | string
    activeProtocolId?: StringNullableFilter<"UserPreferences"> | string | null
    updatedAt?: DateTimeFilter<"UserPreferences"> | Date | string
    profile?: XOR<UserProfileRelationFilter, UserProfileWhereInput>
  }, "id" | "userId">

  export type UserPreferencesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    primaryGoal?: SortOrder
    dietaryPreference?: SortOrder
    targetCalories?: SortOrderInput | SortOrder
    targetProteinG?: SortOrderInput | SortOrder
    targetCarbsG?: SortOrderInput | SortOrder
    targetFatG?: SortOrderInput | SortOrder
    activityLevel?: SortOrder
    experienceLevel?: SortOrder
    lifestyleType?: SortOrder
    sleepWindowStart?: SortOrderInput | SortOrder
    sleepWindowEnd?: SortOrderInput | SortOrder
    allergies?: SortOrder
    healthConditions?: SortOrder
    dietMode?: SortOrder
    workoutEnvironment?: SortOrderInput | SortOrder
    availableEquipment?: SortOrder
    isBodybuilderMode?: SortOrder
    isInjurySafeMode?: SortOrder
    workoutDurationPreference?: SortOrder
    splitPreference?: SortOrder
    activeProtocolId?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: UserPreferencesCountOrderByAggregateInput
    _avg?: UserPreferencesAvgOrderByAggregateInput
    _max?: UserPreferencesMaxOrderByAggregateInput
    _min?: UserPreferencesMinOrderByAggregateInput
    _sum?: UserPreferencesSumOrderByAggregateInput
  }

  export type UserPreferencesScalarWhereWithAggregatesInput = {
    AND?: UserPreferencesScalarWhereWithAggregatesInput | UserPreferencesScalarWhereWithAggregatesInput[]
    OR?: UserPreferencesScalarWhereWithAggregatesInput[]
    NOT?: UserPreferencesScalarWhereWithAggregatesInput | UserPreferencesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserPreferences"> | string
    userId?: StringWithAggregatesFilter<"UserPreferences"> | string
    primaryGoal?: StringWithAggregatesFilter<"UserPreferences"> | string
    dietaryPreference?: StringWithAggregatesFilter<"UserPreferences"> | string
    targetCalories?: FloatNullableWithAggregatesFilter<"UserPreferences"> | number | null
    targetProteinG?: FloatNullableWithAggregatesFilter<"UserPreferences"> | number | null
    targetCarbsG?: FloatNullableWithAggregatesFilter<"UserPreferences"> | number | null
    targetFatG?: FloatNullableWithAggregatesFilter<"UserPreferences"> | number | null
    activityLevel?: StringWithAggregatesFilter<"UserPreferences"> | string
    experienceLevel?: StringWithAggregatesFilter<"UserPreferences"> | string
    lifestyleType?: StringWithAggregatesFilter<"UserPreferences"> | string
    sleepWindowStart?: StringNullableWithAggregatesFilter<"UserPreferences"> | string | null
    sleepWindowEnd?: StringNullableWithAggregatesFilter<"UserPreferences"> | string | null
    allergies?: StringNullableListFilter<"UserPreferences">
    healthConditions?: StringNullableListFilter<"UserPreferences">
    dietMode?: StringWithAggregatesFilter<"UserPreferences"> | string
    workoutEnvironment?: StringNullableWithAggregatesFilter<"UserPreferences"> | string | null
    availableEquipment?: StringNullableListFilter<"UserPreferences">
    isBodybuilderMode?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    isInjurySafeMode?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    workoutDurationPreference?: IntWithAggregatesFilter<"UserPreferences"> | number
    splitPreference?: StringWithAggregatesFilter<"UserPreferences"> | string
    activeProtocolId?: StringNullableWithAggregatesFilter<"UserPreferences"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"UserPreferences"> | Date | string
  }

  export type CoachProfileWhereInput = {
    AND?: CoachProfileWhereInput | CoachProfileWhereInput[]
    OR?: CoachProfileWhereInput[]
    NOT?: CoachProfileWhereInput | CoachProfileWhereInput[]
    id?: StringFilter<"CoachProfile"> | string
    userId?: StringFilter<"CoachProfile"> | string
    specializations?: StringNullableListFilter<"CoachProfile">
    bio?: StringNullableFilter<"CoachProfile"> | string | null
    certifications?: StringNullableListFilter<"CoachProfile">
    isAvailable?: BoolFilter<"CoachProfile"> | boolean
    monthlyRateUsd?: FloatNullableFilter<"CoachProfile"> | number | null
    createdAt?: DateTimeFilter<"CoachProfile"> | Date | string
    updatedAt?: DateTimeFilter<"CoachProfile"> | Date | string
    clients?: CoachClientRelationListRelationFilter
  }

  export type CoachProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    specializations?: SortOrder
    bio?: SortOrderInput | SortOrder
    certifications?: SortOrder
    isAvailable?: SortOrder
    monthlyRateUsd?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clients?: CoachClientRelationOrderByRelationAggregateInput
  }

  export type CoachProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CoachProfileWhereInput | CoachProfileWhereInput[]
    OR?: CoachProfileWhereInput[]
    NOT?: CoachProfileWhereInput | CoachProfileWhereInput[]
    specializations?: StringNullableListFilter<"CoachProfile">
    bio?: StringNullableFilter<"CoachProfile"> | string | null
    certifications?: StringNullableListFilter<"CoachProfile">
    isAvailable?: BoolFilter<"CoachProfile"> | boolean
    monthlyRateUsd?: FloatNullableFilter<"CoachProfile"> | number | null
    createdAt?: DateTimeFilter<"CoachProfile"> | Date | string
    updatedAt?: DateTimeFilter<"CoachProfile"> | Date | string
    clients?: CoachClientRelationListRelationFilter
  }, "id" | "userId">

  export type CoachProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    specializations?: SortOrder
    bio?: SortOrderInput | SortOrder
    certifications?: SortOrder
    isAvailable?: SortOrder
    monthlyRateUsd?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CoachProfileCountOrderByAggregateInput
    _avg?: CoachProfileAvgOrderByAggregateInput
    _max?: CoachProfileMaxOrderByAggregateInput
    _min?: CoachProfileMinOrderByAggregateInput
    _sum?: CoachProfileSumOrderByAggregateInput
  }

  export type CoachProfileScalarWhereWithAggregatesInput = {
    AND?: CoachProfileScalarWhereWithAggregatesInput | CoachProfileScalarWhereWithAggregatesInput[]
    OR?: CoachProfileScalarWhereWithAggregatesInput[]
    NOT?: CoachProfileScalarWhereWithAggregatesInput | CoachProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CoachProfile"> | string
    userId?: StringWithAggregatesFilter<"CoachProfile"> | string
    specializations?: StringNullableListFilter<"CoachProfile">
    bio?: StringNullableWithAggregatesFilter<"CoachProfile"> | string | null
    certifications?: StringNullableListFilter<"CoachProfile">
    isAvailable?: BoolWithAggregatesFilter<"CoachProfile"> | boolean
    monthlyRateUsd?: FloatNullableWithAggregatesFilter<"CoachProfile"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"CoachProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CoachProfile"> | Date | string
  }

  export type CoachClientRelationWhereInput = {
    AND?: CoachClientRelationWhereInput | CoachClientRelationWhereInput[]
    OR?: CoachClientRelationWhereInput[]
    NOT?: CoachClientRelationWhereInput | CoachClientRelationWhereInput[]
    id?: StringFilter<"CoachClientRelation"> | string
    coachUserId?: StringFilter<"CoachClientRelation"> | string
    clientUserId?: StringFilter<"CoachClientRelation"> | string
    status?: StringFilter<"CoachClientRelation"> | string
    startedAt?: DateTimeFilter<"CoachClientRelation"> | Date | string
    endedAt?: DateTimeNullableFilter<"CoachClientRelation"> | Date | string | null
    createdAt?: DateTimeFilter<"CoachClientRelation"> | Date | string
    coach?: XOR<CoachProfileRelationFilter, CoachProfileWhereInput>
  }

  export type CoachClientRelationOrderByWithRelationInput = {
    id?: SortOrder
    coachUserId?: SortOrder
    clientUserId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    coach?: CoachProfileOrderByWithRelationInput
  }

  export type CoachClientRelationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    coachUserId_clientUserId?: CoachClientRelationCoachUserIdClientUserIdCompoundUniqueInput
    AND?: CoachClientRelationWhereInput | CoachClientRelationWhereInput[]
    OR?: CoachClientRelationWhereInput[]
    NOT?: CoachClientRelationWhereInput | CoachClientRelationWhereInput[]
    coachUserId?: StringFilter<"CoachClientRelation"> | string
    clientUserId?: StringFilter<"CoachClientRelation"> | string
    status?: StringFilter<"CoachClientRelation"> | string
    startedAt?: DateTimeFilter<"CoachClientRelation"> | Date | string
    endedAt?: DateTimeNullableFilter<"CoachClientRelation"> | Date | string | null
    createdAt?: DateTimeFilter<"CoachClientRelation"> | Date | string
    coach?: XOR<CoachProfileRelationFilter, CoachProfileWhereInput>
  }, "id" | "coachUserId_clientUserId">

  export type CoachClientRelationOrderByWithAggregationInput = {
    id?: SortOrder
    coachUserId?: SortOrder
    clientUserId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CoachClientRelationCountOrderByAggregateInput
    _max?: CoachClientRelationMaxOrderByAggregateInput
    _min?: CoachClientRelationMinOrderByAggregateInput
  }

  export type CoachClientRelationScalarWhereWithAggregatesInput = {
    AND?: CoachClientRelationScalarWhereWithAggregatesInput | CoachClientRelationScalarWhereWithAggregatesInput[]
    OR?: CoachClientRelationScalarWhereWithAggregatesInput[]
    NOT?: CoachClientRelationScalarWhereWithAggregatesInput | CoachClientRelationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CoachClientRelation"> | string
    coachUserId?: StringWithAggregatesFilter<"CoachClientRelation"> | string
    clientUserId?: StringWithAggregatesFilter<"CoachClientRelation"> | string
    status?: StringWithAggregatesFilter<"CoachClientRelation"> | string
    startedAt?: DateTimeWithAggregatesFilter<"CoachClientRelation"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"CoachClientRelation"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CoachClientRelation"> | Date | string
  }

  export type UserStatusWhereInput = {
    AND?: UserStatusWhereInput | UserStatusWhereInput[]
    OR?: UserStatusWhereInput[]
    NOT?: UserStatusWhereInput | UserStatusWhereInput[]
    id?: StringFilter<"UserStatus"> | string
    userId?: StringFilter<"UserStatus"> | string
    fatigueScore?: FloatFilter<"UserStatus"> | number
    circadianPeakTime?: StringNullableFilter<"UserStatus"> | string | null
    circadianLowTime?: StringNullableFilter<"UserStatus"> | string | null
    adherenceRate?: FloatFilter<"UserStatus"> | number
    currentStreak?: IntFilter<"UserStatus"> | number
    currentTdee?: FloatNullableFilter<"UserStatus"> | number | null
    weightTrend?: StringNullableFilter<"UserStatus"> | string | null
    lastUpdatedBy?: StringNullableFilter<"UserStatus"> | string | null
    updatedAt?: DateTimeFilter<"UserStatus"> | Date | string
    profile?: XOR<UserProfileRelationFilter, UserProfileWhereInput>
  }

  export type UserStatusOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fatigueScore?: SortOrder
    circadianPeakTime?: SortOrderInput | SortOrder
    circadianLowTime?: SortOrderInput | SortOrder
    adherenceRate?: SortOrder
    currentStreak?: SortOrder
    currentTdee?: SortOrderInput | SortOrder
    weightTrend?: SortOrderInput | SortOrder
    lastUpdatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    profile?: UserProfileOrderByWithRelationInput
  }

  export type UserStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserStatusWhereInput | UserStatusWhereInput[]
    OR?: UserStatusWhereInput[]
    NOT?: UserStatusWhereInput | UserStatusWhereInput[]
    fatigueScore?: FloatFilter<"UserStatus"> | number
    circadianPeakTime?: StringNullableFilter<"UserStatus"> | string | null
    circadianLowTime?: StringNullableFilter<"UserStatus"> | string | null
    adherenceRate?: FloatFilter<"UserStatus"> | number
    currentStreak?: IntFilter<"UserStatus"> | number
    currentTdee?: FloatNullableFilter<"UserStatus"> | number | null
    weightTrend?: StringNullableFilter<"UserStatus"> | string | null
    lastUpdatedBy?: StringNullableFilter<"UserStatus"> | string | null
    updatedAt?: DateTimeFilter<"UserStatus"> | Date | string
    profile?: XOR<UserProfileRelationFilter, UserProfileWhereInput>
  }, "id" | "userId">

  export type UserStatusOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fatigueScore?: SortOrder
    circadianPeakTime?: SortOrderInput | SortOrder
    circadianLowTime?: SortOrderInput | SortOrder
    adherenceRate?: SortOrder
    currentStreak?: SortOrder
    currentTdee?: SortOrderInput | SortOrder
    weightTrend?: SortOrderInput | SortOrder
    lastUpdatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: UserStatusCountOrderByAggregateInput
    _avg?: UserStatusAvgOrderByAggregateInput
    _max?: UserStatusMaxOrderByAggregateInput
    _min?: UserStatusMinOrderByAggregateInput
    _sum?: UserStatusSumOrderByAggregateInput
  }

  export type UserStatusScalarWhereWithAggregatesInput = {
    AND?: UserStatusScalarWhereWithAggregatesInput | UserStatusScalarWhereWithAggregatesInput[]
    OR?: UserStatusScalarWhereWithAggregatesInput[]
    NOT?: UserStatusScalarWhereWithAggregatesInput | UserStatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserStatus"> | string
    userId?: StringWithAggregatesFilter<"UserStatus"> | string
    fatigueScore?: FloatWithAggregatesFilter<"UserStatus"> | number
    circadianPeakTime?: StringNullableWithAggregatesFilter<"UserStatus"> | string | null
    circadianLowTime?: StringNullableWithAggregatesFilter<"UserStatus"> | string | null
    adherenceRate?: FloatWithAggregatesFilter<"UserStatus"> | number
    currentStreak?: IntWithAggregatesFilter<"UserStatus"> | number
    currentTdee?: FloatNullableWithAggregatesFilter<"UserStatus"> | number | null
    weightTrend?: StringNullableWithAggregatesFilter<"UserStatus"> | string | null
    lastUpdatedBy?: StringNullableWithAggregatesFilter<"UserStatus"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"UserStatus"> | Date | string
  }

  export type UserProfileCreateInput = {
    id?: string
    userId: string
    displayName: string
    avatarUrl?: string | null
    dateOfBirth?: Date | string | null
    heightCm?: number | null
    weightKg?: number | null
    biologicalSex?: string | null
    timezone?: string
    region?: string
    onboardingCompleted?: boolean
    onboardingStep?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    preferences?: UserPreferencesCreateNestedOneWithoutProfileInput
    status?: UserStatusCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: string
    userId: string
    displayName: string
    avatarUrl?: string | null
    dateOfBirth?: Date | string | null
    heightCm?: number | null
    weightKg?: number | null
    biologicalSex?: string | null
    timezone?: string
    region?: string
    onboardingCompleted?: boolean
    onboardingStep?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutProfileInput
    status?: UserStatusUncheckedCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    biologicalSex?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    onboardingStep?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: UserPreferencesUpdateOneWithoutProfileNestedInput
    status?: UserStatusUpdateOneWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    biologicalSex?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    onboardingStep?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: UserPreferencesUncheckedUpdateOneWithoutProfileNestedInput
    status?: UserStatusUncheckedUpdateOneWithoutProfileNestedInput
  }

  export type UserProfileCreateManyInput = {
    id?: string
    userId: string
    displayName: string
    avatarUrl?: string | null
    dateOfBirth?: Date | string | null
    heightCm?: number | null
    weightKg?: number | null
    biologicalSex?: string | null
    timezone?: string
    region?: string
    onboardingCompleted?: boolean
    onboardingStep?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    biologicalSex?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    onboardingStep?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    biologicalSex?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    onboardingStep?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesCreateInput = {
    id?: string
    primaryGoal?: string
    dietaryPreference?: string
    targetCalories?: number | null
    targetProteinG?: number | null
    targetCarbsG?: number | null
    targetFatG?: number | null
    activityLevel?: string
    experienceLevel?: string
    lifestyleType?: string
    sleepWindowStart?: string | null
    sleepWindowEnd?: string | null
    allergies?: UserPreferencesCreateallergiesInput | string[]
    healthConditions?: UserPreferencesCreatehealthConditionsInput | string[]
    dietMode?: string
    workoutEnvironment?: string | null
    availableEquipment?: UserPreferencesCreateavailableEquipmentInput | string[]
    isBodybuilderMode?: boolean
    isInjurySafeMode?: boolean
    workoutDurationPreference?: number
    splitPreference?: string
    activeProtocolId?: string | null
    updatedAt?: Date | string
    profile: UserProfileCreateNestedOneWithoutPreferencesInput
  }

  export type UserPreferencesUncheckedCreateInput = {
    id?: string
    userId: string
    primaryGoal?: string
    dietaryPreference?: string
    targetCalories?: number | null
    targetProteinG?: number | null
    targetCarbsG?: number | null
    targetFatG?: number | null
    activityLevel?: string
    experienceLevel?: string
    lifestyleType?: string
    sleepWindowStart?: string | null
    sleepWindowEnd?: string | null
    allergies?: UserPreferencesCreateallergiesInput | string[]
    healthConditions?: UserPreferencesCreatehealthConditionsInput | string[]
    dietMode?: string
    workoutEnvironment?: string | null
    availableEquipment?: UserPreferencesCreateavailableEquipmentInput | string[]
    isBodybuilderMode?: boolean
    isInjurySafeMode?: boolean
    workoutDurationPreference?: number
    splitPreference?: string
    activeProtocolId?: string | null
    updatedAt?: Date | string
  }

  export type UserPreferencesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    primaryGoal?: StringFieldUpdateOperationsInput | string
    dietaryPreference?: StringFieldUpdateOperationsInput | string
    targetCalories?: NullableFloatFieldUpdateOperationsInput | number | null
    targetProteinG?: NullableFloatFieldUpdateOperationsInput | number | null
    targetCarbsG?: NullableFloatFieldUpdateOperationsInput | number | null
    targetFatG?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: StringFieldUpdateOperationsInput | string
    experienceLevel?: StringFieldUpdateOperationsInput | string
    lifestyleType?: StringFieldUpdateOperationsInput | string
    sleepWindowStart?: NullableStringFieldUpdateOperationsInput | string | null
    sleepWindowEnd?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: UserPreferencesUpdateallergiesInput | string[]
    healthConditions?: UserPreferencesUpdatehealthConditionsInput | string[]
    dietMode?: StringFieldUpdateOperationsInput | string
    workoutEnvironment?: NullableStringFieldUpdateOperationsInput | string | null
    availableEquipment?: UserPreferencesUpdateavailableEquipmentInput | string[]
    isBodybuilderMode?: BoolFieldUpdateOperationsInput | boolean
    isInjurySafeMode?: BoolFieldUpdateOperationsInput | boolean
    workoutDurationPreference?: IntFieldUpdateOperationsInput | number
    splitPreference?: StringFieldUpdateOperationsInput | string
    activeProtocolId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type UserPreferencesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    primaryGoal?: StringFieldUpdateOperationsInput | string
    dietaryPreference?: StringFieldUpdateOperationsInput | string
    targetCalories?: NullableFloatFieldUpdateOperationsInput | number | null
    targetProteinG?: NullableFloatFieldUpdateOperationsInput | number | null
    targetCarbsG?: NullableFloatFieldUpdateOperationsInput | number | null
    targetFatG?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: StringFieldUpdateOperationsInput | string
    experienceLevel?: StringFieldUpdateOperationsInput | string
    lifestyleType?: StringFieldUpdateOperationsInput | string
    sleepWindowStart?: NullableStringFieldUpdateOperationsInput | string | null
    sleepWindowEnd?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: UserPreferencesUpdateallergiesInput | string[]
    healthConditions?: UserPreferencesUpdatehealthConditionsInput | string[]
    dietMode?: StringFieldUpdateOperationsInput | string
    workoutEnvironment?: NullableStringFieldUpdateOperationsInput | string | null
    availableEquipment?: UserPreferencesUpdateavailableEquipmentInput | string[]
    isBodybuilderMode?: BoolFieldUpdateOperationsInput | boolean
    isInjurySafeMode?: BoolFieldUpdateOperationsInput | boolean
    workoutDurationPreference?: IntFieldUpdateOperationsInput | number
    splitPreference?: StringFieldUpdateOperationsInput | string
    activeProtocolId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesCreateManyInput = {
    id?: string
    userId: string
    primaryGoal?: string
    dietaryPreference?: string
    targetCalories?: number | null
    targetProteinG?: number | null
    targetCarbsG?: number | null
    targetFatG?: number | null
    activityLevel?: string
    experienceLevel?: string
    lifestyleType?: string
    sleepWindowStart?: string | null
    sleepWindowEnd?: string | null
    allergies?: UserPreferencesCreateallergiesInput | string[]
    healthConditions?: UserPreferencesCreatehealthConditionsInput | string[]
    dietMode?: string
    workoutEnvironment?: string | null
    availableEquipment?: UserPreferencesCreateavailableEquipmentInput | string[]
    isBodybuilderMode?: boolean
    isInjurySafeMode?: boolean
    workoutDurationPreference?: number
    splitPreference?: string
    activeProtocolId?: string | null
    updatedAt?: Date | string
  }

  export type UserPreferencesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    primaryGoal?: StringFieldUpdateOperationsInput | string
    dietaryPreference?: StringFieldUpdateOperationsInput | string
    targetCalories?: NullableFloatFieldUpdateOperationsInput | number | null
    targetProteinG?: NullableFloatFieldUpdateOperationsInput | number | null
    targetCarbsG?: NullableFloatFieldUpdateOperationsInput | number | null
    targetFatG?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: StringFieldUpdateOperationsInput | string
    experienceLevel?: StringFieldUpdateOperationsInput | string
    lifestyleType?: StringFieldUpdateOperationsInput | string
    sleepWindowStart?: NullableStringFieldUpdateOperationsInput | string | null
    sleepWindowEnd?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: UserPreferencesUpdateallergiesInput | string[]
    healthConditions?: UserPreferencesUpdatehealthConditionsInput | string[]
    dietMode?: StringFieldUpdateOperationsInput | string
    workoutEnvironment?: NullableStringFieldUpdateOperationsInput | string | null
    availableEquipment?: UserPreferencesUpdateavailableEquipmentInput | string[]
    isBodybuilderMode?: BoolFieldUpdateOperationsInput | boolean
    isInjurySafeMode?: BoolFieldUpdateOperationsInput | boolean
    workoutDurationPreference?: IntFieldUpdateOperationsInput | number
    splitPreference?: StringFieldUpdateOperationsInput | string
    activeProtocolId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    primaryGoal?: StringFieldUpdateOperationsInput | string
    dietaryPreference?: StringFieldUpdateOperationsInput | string
    targetCalories?: NullableFloatFieldUpdateOperationsInput | number | null
    targetProteinG?: NullableFloatFieldUpdateOperationsInput | number | null
    targetCarbsG?: NullableFloatFieldUpdateOperationsInput | number | null
    targetFatG?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: StringFieldUpdateOperationsInput | string
    experienceLevel?: StringFieldUpdateOperationsInput | string
    lifestyleType?: StringFieldUpdateOperationsInput | string
    sleepWindowStart?: NullableStringFieldUpdateOperationsInput | string | null
    sleepWindowEnd?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: UserPreferencesUpdateallergiesInput | string[]
    healthConditions?: UserPreferencesUpdatehealthConditionsInput | string[]
    dietMode?: StringFieldUpdateOperationsInput | string
    workoutEnvironment?: NullableStringFieldUpdateOperationsInput | string | null
    availableEquipment?: UserPreferencesUpdateavailableEquipmentInput | string[]
    isBodybuilderMode?: BoolFieldUpdateOperationsInput | boolean
    isInjurySafeMode?: BoolFieldUpdateOperationsInput | boolean
    workoutDurationPreference?: IntFieldUpdateOperationsInput | number
    splitPreference?: StringFieldUpdateOperationsInput | string
    activeProtocolId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachProfileCreateInput = {
    id?: string
    userId: string
    specializations?: CoachProfileCreatespecializationsInput | string[]
    bio?: string | null
    certifications?: CoachProfileCreatecertificationsInput | string[]
    isAvailable?: boolean
    monthlyRateUsd?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: CoachClientRelationCreateNestedManyWithoutCoachInput
  }

  export type CoachProfileUncheckedCreateInput = {
    id?: string
    userId: string
    specializations?: CoachProfileCreatespecializationsInput | string[]
    bio?: string | null
    certifications?: CoachProfileCreatecertificationsInput | string[]
    isAvailable?: boolean
    monthlyRateUsd?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: CoachClientRelationUncheckedCreateNestedManyWithoutCoachInput
  }

  export type CoachProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specializations?: CoachProfileUpdatespecializationsInput | string[]
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: CoachProfileUpdatecertificationsInput | string[]
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    monthlyRateUsd?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: CoachClientRelationUpdateManyWithoutCoachNestedInput
  }

  export type CoachProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specializations?: CoachProfileUpdatespecializationsInput | string[]
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: CoachProfileUpdatecertificationsInput | string[]
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    monthlyRateUsd?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: CoachClientRelationUncheckedUpdateManyWithoutCoachNestedInput
  }

  export type CoachProfileCreateManyInput = {
    id?: string
    userId: string
    specializations?: CoachProfileCreatespecializationsInput | string[]
    bio?: string | null
    certifications?: CoachProfileCreatecertificationsInput | string[]
    isAvailable?: boolean
    monthlyRateUsd?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoachProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specializations?: CoachProfileUpdatespecializationsInput | string[]
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: CoachProfileUpdatecertificationsInput | string[]
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    monthlyRateUsd?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specializations?: CoachProfileUpdatespecializationsInput | string[]
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: CoachProfileUpdatecertificationsInput | string[]
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    monthlyRateUsd?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachClientRelationCreateInput = {
    id?: string
    clientUserId: string
    status?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    createdAt?: Date | string
    coach: CoachProfileCreateNestedOneWithoutClientsInput
  }

  export type CoachClientRelationUncheckedCreateInput = {
    id?: string
    coachUserId: string
    clientUserId: string
    status?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CoachClientRelationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    coach?: CoachProfileUpdateOneRequiredWithoutClientsNestedInput
  }

  export type CoachClientRelationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    coachUserId?: StringFieldUpdateOperationsInput | string
    clientUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachClientRelationCreateManyInput = {
    id?: string
    coachUserId: string
    clientUserId: string
    status?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CoachClientRelationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachClientRelationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    coachUserId?: StringFieldUpdateOperationsInput | string
    clientUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatusCreateInput = {
    id?: string
    fatigueScore?: number
    circadianPeakTime?: string | null
    circadianLowTime?: string | null
    adherenceRate?: number
    currentStreak?: number
    currentTdee?: number | null
    weightTrend?: string | null
    lastUpdatedBy?: string | null
    updatedAt?: Date | string
    profile: UserProfileCreateNestedOneWithoutStatusInput
  }

  export type UserStatusUncheckedCreateInput = {
    id?: string
    userId: string
    fatigueScore?: number
    circadianPeakTime?: string | null
    circadianLowTime?: string | null
    adherenceRate?: number
    currentStreak?: number
    currentTdee?: number | null
    weightTrend?: string | null
    lastUpdatedBy?: string | null
    updatedAt?: Date | string
  }

  export type UserStatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fatigueScore?: FloatFieldUpdateOperationsInput | number
    circadianPeakTime?: NullableStringFieldUpdateOperationsInput | string | null
    circadianLowTime?: NullableStringFieldUpdateOperationsInput | string | null
    adherenceRate?: FloatFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    currentTdee?: NullableFloatFieldUpdateOperationsInput | number | null
    weightTrend?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: UserProfileUpdateOneRequiredWithoutStatusNestedInput
  }

  export type UserStatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fatigueScore?: FloatFieldUpdateOperationsInput | number
    circadianPeakTime?: NullableStringFieldUpdateOperationsInput | string | null
    circadianLowTime?: NullableStringFieldUpdateOperationsInput | string | null
    adherenceRate?: FloatFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    currentTdee?: NullableFloatFieldUpdateOperationsInput | number | null
    weightTrend?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatusCreateManyInput = {
    id?: string
    userId: string
    fatigueScore?: number
    circadianPeakTime?: string | null
    circadianLowTime?: string | null
    adherenceRate?: number
    currentStreak?: number
    currentTdee?: number | null
    weightTrend?: string | null
    lastUpdatedBy?: string | null
    updatedAt?: Date | string
  }

  export type UserStatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fatigueScore?: FloatFieldUpdateOperationsInput | number
    circadianPeakTime?: NullableStringFieldUpdateOperationsInput | string | null
    circadianLowTime?: NullableStringFieldUpdateOperationsInput | string | null
    adherenceRate?: FloatFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    currentTdee?: NullableFloatFieldUpdateOperationsInput | number | null
    weightTrend?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    fatigueScore?: FloatFieldUpdateOperationsInput | number
    circadianPeakTime?: NullableStringFieldUpdateOperationsInput | string | null
    circadianLowTime?: NullableStringFieldUpdateOperationsInput | string | null
    adherenceRate?: FloatFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    currentTdee?: NullableFloatFieldUpdateOperationsInput | number | null
    weightTrend?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserPreferencesNullableRelationFilter = {
    is?: UserPreferencesWhereInput | null
    isNot?: UserPreferencesWhereInput | null
  }

  export type UserStatusNullableRelationFilter = {
    is?: UserStatusWhereInput | null
    isNot?: UserStatusWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    dateOfBirth?: SortOrder
    heightCm?: SortOrder
    weightKg?: SortOrder
    biologicalSex?: SortOrder
    timezone?: SortOrder
    region?: SortOrder
    onboardingCompleted?: SortOrder
    onboardingStep?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileAvgOrderByAggregateInput = {
    heightCm?: SortOrder
    weightKg?: SortOrder
    onboardingStep?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    dateOfBirth?: SortOrder
    heightCm?: SortOrder
    weightKg?: SortOrder
    biologicalSex?: SortOrder
    timezone?: SortOrder
    region?: SortOrder
    onboardingCompleted?: SortOrder
    onboardingStep?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    displayName?: SortOrder
    avatarUrl?: SortOrder
    dateOfBirth?: SortOrder
    heightCm?: SortOrder
    weightKg?: SortOrder
    biologicalSex?: SortOrder
    timezone?: SortOrder
    region?: SortOrder
    onboardingCompleted?: SortOrder
    onboardingStep?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileSumOrderByAggregateInput = {
    heightCm?: SortOrder
    weightKg?: SortOrder
    onboardingStep?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserProfileRelationFilter = {
    is?: UserProfileWhereInput
    isNot?: UserProfileWhereInput
  }

  export type UserPreferencesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    primaryGoal?: SortOrder
    dietaryPreference?: SortOrder
    targetCalories?: SortOrder
    targetProteinG?: SortOrder
    targetCarbsG?: SortOrder
    targetFatG?: SortOrder
    activityLevel?: SortOrder
    experienceLevel?: SortOrder
    lifestyleType?: SortOrder
    sleepWindowStart?: SortOrder
    sleepWindowEnd?: SortOrder
    allergies?: SortOrder
    healthConditions?: SortOrder
    dietMode?: SortOrder
    workoutEnvironment?: SortOrder
    availableEquipment?: SortOrder
    isBodybuilderMode?: SortOrder
    isInjurySafeMode?: SortOrder
    workoutDurationPreference?: SortOrder
    splitPreference?: SortOrder
    activeProtocolId?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferencesAvgOrderByAggregateInput = {
    targetCalories?: SortOrder
    targetProteinG?: SortOrder
    targetCarbsG?: SortOrder
    targetFatG?: SortOrder
    workoutDurationPreference?: SortOrder
  }

  export type UserPreferencesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    primaryGoal?: SortOrder
    dietaryPreference?: SortOrder
    targetCalories?: SortOrder
    targetProteinG?: SortOrder
    targetCarbsG?: SortOrder
    targetFatG?: SortOrder
    activityLevel?: SortOrder
    experienceLevel?: SortOrder
    lifestyleType?: SortOrder
    sleepWindowStart?: SortOrder
    sleepWindowEnd?: SortOrder
    dietMode?: SortOrder
    workoutEnvironment?: SortOrder
    isBodybuilderMode?: SortOrder
    isInjurySafeMode?: SortOrder
    workoutDurationPreference?: SortOrder
    splitPreference?: SortOrder
    activeProtocolId?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferencesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    primaryGoal?: SortOrder
    dietaryPreference?: SortOrder
    targetCalories?: SortOrder
    targetProteinG?: SortOrder
    targetCarbsG?: SortOrder
    targetFatG?: SortOrder
    activityLevel?: SortOrder
    experienceLevel?: SortOrder
    lifestyleType?: SortOrder
    sleepWindowStart?: SortOrder
    sleepWindowEnd?: SortOrder
    dietMode?: SortOrder
    workoutEnvironment?: SortOrder
    isBodybuilderMode?: SortOrder
    isInjurySafeMode?: SortOrder
    workoutDurationPreference?: SortOrder
    splitPreference?: SortOrder
    activeProtocolId?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferencesSumOrderByAggregateInput = {
    targetCalories?: SortOrder
    targetProteinG?: SortOrder
    targetCarbsG?: SortOrder
    targetFatG?: SortOrder
    workoutDurationPreference?: SortOrder
  }

  export type CoachClientRelationListRelationFilter = {
    every?: CoachClientRelationWhereInput
    some?: CoachClientRelationWhereInput
    none?: CoachClientRelationWhereInput
  }

  export type CoachClientRelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoachProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    specializations?: SortOrder
    bio?: SortOrder
    certifications?: SortOrder
    isAvailable?: SortOrder
    monthlyRateUsd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoachProfileAvgOrderByAggregateInput = {
    monthlyRateUsd?: SortOrder
  }

  export type CoachProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    isAvailable?: SortOrder
    monthlyRateUsd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoachProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    isAvailable?: SortOrder
    monthlyRateUsd?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoachProfileSumOrderByAggregateInput = {
    monthlyRateUsd?: SortOrder
  }

  export type CoachProfileRelationFilter = {
    is?: CoachProfileWhereInput
    isNot?: CoachProfileWhereInput
  }

  export type CoachClientRelationCoachUserIdClientUserIdCompoundUniqueInput = {
    coachUserId: string
    clientUserId: string
  }

  export type CoachClientRelationCountOrderByAggregateInput = {
    id?: SortOrder
    coachUserId?: SortOrder
    clientUserId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CoachClientRelationMaxOrderByAggregateInput = {
    id?: SortOrder
    coachUserId?: SortOrder
    clientUserId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CoachClientRelationMinOrderByAggregateInput = {
    id?: SortOrder
    coachUserId?: SortOrder
    clientUserId?: SortOrder
    status?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
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

  export type UserStatusCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fatigueScore?: SortOrder
    circadianPeakTime?: SortOrder
    circadianLowTime?: SortOrder
    adherenceRate?: SortOrder
    currentStreak?: SortOrder
    currentTdee?: SortOrder
    weightTrend?: SortOrder
    lastUpdatedBy?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStatusAvgOrderByAggregateInput = {
    fatigueScore?: SortOrder
    adherenceRate?: SortOrder
    currentStreak?: SortOrder
    currentTdee?: SortOrder
  }

  export type UserStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fatigueScore?: SortOrder
    circadianPeakTime?: SortOrder
    circadianLowTime?: SortOrder
    adherenceRate?: SortOrder
    currentStreak?: SortOrder
    currentTdee?: SortOrder
    weightTrend?: SortOrder
    lastUpdatedBy?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStatusMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fatigueScore?: SortOrder
    circadianPeakTime?: SortOrder
    circadianLowTime?: SortOrder
    adherenceRate?: SortOrder
    currentStreak?: SortOrder
    currentTdee?: SortOrder
    weightTrend?: SortOrder
    lastUpdatedBy?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStatusSumOrderByAggregateInput = {
    fatigueScore?: SortOrder
    adherenceRate?: SortOrder
    currentStreak?: SortOrder
    currentTdee?: SortOrder
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

  export type UserPreferencesCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserPreferencesCreateWithoutProfileInput, UserPreferencesUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutProfileInput
    connect?: UserPreferencesWhereUniqueInput
  }

  export type UserStatusCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserStatusCreateWithoutProfileInput, UserStatusUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserStatusCreateOrConnectWithoutProfileInput
    connect?: UserStatusWhereUniqueInput
  }

  export type UserPreferencesUncheckedCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserPreferencesCreateWithoutProfileInput, UserPreferencesUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutProfileInput
    connect?: UserPreferencesWhereUniqueInput
  }

  export type UserStatusUncheckedCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserStatusCreateWithoutProfileInput, UserStatusUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserStatusCreateOrConnectWithoutProfileInput
    connect?: UserStatusWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserPreferencesUpdateOneWithoutProfileNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutProfileInput, UserPreferencesUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutProfileInput
    upsert?: UserPreferencesUpsertWithoutProfileInput
    disconnect?: UserPreferencesWhereInput | boolean
    delete?: UserPreferencesWhereInput | boolean
    connect?: UserPreferencesWhereUniqueInput
    update?: XOR<XOR<UserPreferencesUpdateToOneWithWhereWithoutProfileInput, UserPreferencesUpdateWithoutProfileInput>, UserPreferencesUncheckedUpdateWithoutProfileInput>
  }

  export type UserStatusUpdateOneWithoutProfileNestedInput = {
    create?: XOR<UserStatusCreateWithoutProfileInput, UserStatusUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserStatusCreateOrConnectWithoutProfileInput
    upsert?: UserStatusUpsertWithoutProfileInput
    disconnect?: UserStatusWhereInput | boolean
    delete?: UserStatusWhereInput | boolean
    connect?: UserStatusWhereUniqueInput
    update?: XOR<XOR<UserStatusUpdateToOneWithWhereWithoutProfileInput, UserStatusUpdateWithoutProfileInput>, UserStatusUncheckedUpdateWithoutProfileInput>
  }

  export type UserPreferencesUncheckedUpdateOneWithoutProfileNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutProfileInput, UserPreferencesUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutProfileInput
    upsert?: UserPreferencesUpsertWithoutProfileInput
    disconnect?: UserPreferencesWhereInput | boolean
    delete?: UserPreferencesWhereInput | boolean
    connect?: UserPreferencesWhereUniqueInput
    update?: XOR<XOR<UserPreferencesUpdateToOneWithWhereWithoutProfileInput, UserPreferencesUpdateWithoutProfileInput>, UserPreferencesUncheckedUpdateWithoutProfileInput>
  }

  export type UserStatusUncheckedUpdateOneWithoutProfileNestedInput = {
    create?: XOR<UserStatusCreateWithoutProfileInput, UserStatusUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserStatusCreateOrConnectWithoutProfileInput
    upsert?: UserStatusUpsertWithoutProfileInput
    disconnect?: UserStatusWhereInput | boolean
    delete?: UserStatusWhereInput | boolean
    connect?: UserStatusWhereUniqueInput
    update?: XOR<XOR<UserStatusUpdateToOneWithWhereWithoutProfileInput, UserStatusUpdateWithoutProfileInput>, UserStatusUncheckedUpdateWithoutProfileInput>
  }

  export type UserPreferencesCreateallergiesInput = {
    set: string[]
  }

  export type UserPreferencesCreatehealthConditionsInput = {
    set: string[]
  }

  export type UserPreferencesCreateavailableEquipmentInput = {
    set: string[]
  }

  export type UserProfileCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<UserProfileCreateWithoutPreferencesInput, UserProfileUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutPreferencesInput
    connect?: UserProfileWhereUniqueInput
  }

  export type UserPreferencesUpdateallergiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserPreferencesUpdatehealthConditionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserPreferencesUpdateavailableEquipmentInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserProfileUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<UserProfileCreateWithoutPreferencesInput, UserProfileUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutPreferencesInput
    upsert?: UserProfileUpsertWithoutPreferencesInput
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutPreferencesInput, UserProfileUpdateWithoutPreferencesInput>, UserProfileUncheckedUpdateWithoutPreferencesInput>
  }

  export type CoachProfileCreatespecializationsInput = {
    set: string[]
  }

  export type CoachProfileCreatecertificationsInput = {
    set: string[]
  }

  export type CoachClientRelationCreateNestedManyWithoutCoachInput = {
    create?: XOR<CoachClientRelationCreateWithoutCoachInput, CoachClientRelationUncheckedCreateWithoutCoachInput> | CoachClientRelationCreateWithoutCoachInput[] | CoachClientRelationUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: CoachClientRelationCreateOrConnectWithoutCoachInput | CoachClientRelationCreateOrConnectWithoutCoachInput[]
    createMany?: CoachClientRelationCreateManyCoachInputEnvelope
    connect?: CoachClientRelationWhereUniqueInput | CoachClientRelationWhereUniqueInput[]
  }

  export type CoachClientRelationUncheckedCreateNestedManyWithoutCoachInput = {
    create?: XOR<CoachClientRelationCreateWithoutCoachInput, CoachClientRelationUncheckedCreateWithoutCoachInput> | CoachClientRelationCreateWithoutCoachInput[] | CoachClientRelationUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: CoachClientRelationCreateOrConnectWithoutCoachInput | CoachClientRelationCreateOrConnectWithoutCoachInput[]
    createMany?: CoachClientRelationCreateManyCoachInputEnvelope
    connect?: CoachClientRelationWhereUniqueInput | CoachClientRelationWhereUniqueInput[]
  }

  export type CoachProfileUpdatespecializationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CoachProfileUpdatecertificationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type CoachClientRelationUpdateManyWithoutCoachNestedInput = {
    create?: XOR<CoachClientRelationCreateWithoutCoachInput, CoachClientRelationUncheckedCreateWithoutCoachInput> | CoachClientRelationCreateWithoutCoachInput[] | CoachClientRelationUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: CoachClientRelationCreateOrConnectWithoutCoachInput | CoachClientRelationCreateOrConnectWithoutCoachInput[]
    upsert?: CoachClientRelationUpsertWithWhereUniqueWithoutCoachInput | CoachClientRelationUpsertWithWhereUniqueWithoutCoachInput[]
    createMany?: CoachClientRelationCreateManyCoachInputEnvelope
    set?: CoachClientRelationWhereUniqueInput | CoachClientRelationWhereUniqueInput[]
    disconnect?: CoachClientRelationWhereUniqueInput | CoachClientRelationWhereUniqueInput[]
    delete?: CoachClientRelationWhereUniqueInput | CoachClientRelationWhereUniqueInput[]
    connect?: CoachClientRelationWhereUniqueInput | CoachClientRelationWhereUniqueInput[]
    update?: CoachClientRelationUpdateWithWhereUniqueWithoutCoachInput | CoachClientRelationUpdateWithWhereUniqueWithoutCoachInput[]
    updateMany?: CoachClientRelationUpdateManyWithWhereWithoutCoachInput | CoachClientRelationUpdateManyWithWhereWithoutCoachInput[]
    deleteMany?: CoachClientRelationScalarWhereInput | CoachClientRelationScalarWhereInput[]
  }

  export type CoachClientRelationUncheckedUpdateManyWithoutCoachNestedInput = {
    create?: XOR<CoachClientRelationCreateWithoutCoachInput, CoachClientRelationUncheckedCreateWithoutCoachInput> | CoachClientRelationCreateWithoutCoachInput[] | CoachClientRelationUncheckedCreateWithoutCoachInput[]
    connectOrCreate?: CoachClientRelationCreateOrConnectWithoutCoachInput | CoachClientRelationCreateOrConnectWithoutCoachInput[]
    upsert?: CoachClientRelationUpsertWithWhereUniqueWithoutCoachInput | CoachClientRelationUpsertWithWhereUniqueWithoutCoachInput[]
    createMany?: CoachClientRelationCreateManyCoachInputEnvelope
    set?: CoachClientRelationWhereUniqueInput | CoachClientRelationWhereUniqueInput[]
    disconnect?: CoachClientRelationWhereUniqueInput | CoachClientRelationWhereUniqueInput[]
    delete?: CoachClientRelationWhereUniqueInput | CoachClientRelationWhereUniqueInput[]
    connect?: CoachClientRelationWhereUniqueInput | CoachClientRelationWhereUniqueInput[]
    update?: CoachClientRelationUpdateWithWhereUniqueWithoutCoachInput | CoachClientRelationUpdateWithWhereUniqueWithoutCoachInput[]
    updateMany?: CoachClientRelationUpdateManyWithWhereWithoutCoachInput | CoachClientRelationUpdateManyWithWhereWithoutCoachInput[]
    deleteMany?: CoachClientRelationScalarWhereInput | CoachClientRelationScalarWhereInput[]
  }

  export type CoachProfileCreateNestedOneWithoutClientsInput = {
    create?: XOR<CoachProfileCreateWithoutClientsInput, CoachProfileUncheckedCreateWithoutClientsInput>
    connectOrCreate?: CoachProfileCreateOrConnectWithoutClientsInput
    connect?: CoachProfileWhereUniqueInput
  }

  export type CoachProfileUpdateOneRequiredWithoutClientsNestedInput = {
    create?: XOR<CoachProfileCreateWithoutClientsInput, CoachProfileUncheckedCreateWithoutClientsInput>
    connectOrCreate?: CoachProfileCreateOrConnectWithoutClientsInput
    upsert?: CoachProfileUpsertWithoutClientsInput
    connect?: CoachProfileWhereUniqueInput
    update?: XOR<XOR<CoachProfileUpdateToOneWithWhereWithoutClientsInput, CoachProfileUpdateWithoutClientsInput>, CoachProfileUncheckedUpdateWithoutClientsInput>
  }

  export type UserProfileCreateNestedOneWithoutStatusInput = {
    create?: XOR<UserProfileCreateWithoutStatusInput, UserProfileUncheckedCreateWithoutStatusInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutStatusInput
    connect?: UserProfileWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserProfileUpdateOneRequiredWithoutStatusNestedInput = {
    create?: XOR<UserProfileCreateWithoutStatusInput, UserProfileUncheckedCreateWithoutStatusInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutStatusInput
    upsert?: UserProfileUpsertWithoutStatusInput
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutStatusInput, UserProfileUpdateWithoutStatusInput>, UserProfileUncheckedUpdateWithoutStatusInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserPreferencesCreateWithoutProfileInput = {
    id?: string
    primaryGoal?: string
    dietaryPreference?: string
    targetCalories?: number | null
    targetProteinG?: number | null
    targetCarbsG?: number | null
    targetFatG?: number | null
    activityLevel?: string
    experienceLevel?: string
    lifestyleType?: string
    sleepWindowStart?: string | null
    sleepWindowEnd?: string | null
    allergies?: UserPreferencesCreateallergiesInput | string[]
    healthConditions?: UserPreferencesCreatehealthConditionsInput | string[]
    dietMode?: string
    workoutEnvironment?: string | null
    availableEquipment?: UserPreferencesCreateavailableEquipmentInput | string[]
    isBodybuilderMode?: boolean
    isInjurySafeMode?: boolean
    workoutDurationPreference?: number
    splitPreference?: string
    activeProtocolId?: string | null
    updatedAt?: Date | string
  }

  export type UserPreferencesUncheckedCreateWithoutProfileInput = {
    id?: string
    primaryGoal?: string
    dietaryPreference?: string
    targetCalories?: number | null
    targetProteinG?: number | null
    targetCarbsG?: number | null
    targetFatG?: number | null
    activityLevel?: string
    experienceLevel?: string
    lifestyleType?: string
    sleepWindowStart?: string | null
    sleepWindowEnd?: string | null
    allergies?: UserPreferencesCreateallergiesInput | string[]
    healthConditions?: UserPreferencesCreatehealthConditionsInput | string[]
    dietMode?: string
    workoutEnvironment?: string | null
    availableEquipment?: UserPreferencesCreateavailableEquipmentInput | string[]
    isBodybuilderMode?: boolean
    isInjurySafeMode?: boolean
    workoutDurationPreference?: number
    splitPreference?: string
    activeProtocolId?: string | null
    updatedAt?: Date | string
  }

  export type UserPreferencesCreateOrConnectWithoutProfileInput = {
    where: UserPreferencesWhereUniqueInput
    create: XOR<UserPreferencesCreateWithoutProfileInput, UserPreferencesUncheckedCreateWithoutProfileInput>
  }

  export type UserStatusCreateWithoutProfileInput = {
    id?: string
    fatigueScore?: number
    circadianPeakTime?: string | null
    circadianLowTime?: string | null
    adherenceRate?: number
    currentStreak?: number
    currentTdee?: number | null
    weightTrend?: string | null
    lastUpdatedBy?: string | null
    updatedAt?: Date | string
  }

  export type UserStatusUncheckedCreateWithoutProfileInput = {
    id?: string
    fatigueScore?: number
    circadianPeakTime?: string | null
    circadianLowTime?: string | null
    adherenceRate?: number
    currentStreak?: number
    currentTdee?: number | null
    weightTrend?: string | null
    lastUpdatedBy?: string | null
    updatedAt?: Date | string
  }

  export type UserStatusCreateOrConnectWithoutProfileInput = {
    where: UserStatusWhereUniqueInput
    create: XOR<UserStatusCreateWithoutProfileInput, UserStatusUncheckedCreateWithoutProfileInput>
  }

  export type UserPreferencesUpsertWithoutProfileInput = {
    update: XOR<UserPreferencesUpdateWithoutProfileInput, UserPreferencesUncheckedUpdateWithoutProfileInput>
    create: XOR<UserPreferencesCreateWithoutProfileInput, UserPreferencesUncheckedCreateWithoutProfileInput>
    where?: UserPreferencesWhereInput
  }

  export type UserPreferencesUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserPreferencesWhereInput
    data: XOR<UserPreferencesUpdateWithoutProfileInput, UserPreferencesUncheckedUpdateWithoutProfileInput>
  }

  export type UserPreferencesUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    primaryGoal?: StringFieldUpdateOperationsInput | string
    dietaryPreference?: StringFieldUpdateOperationsInput | string
    targetCalories?: NullableFloatFieldUpdateOperationsInput | number | null
    targetProteinG?: NullableFloatFieldUpdateOperationsInput | number | null
    targetCarbsG?: NullableFloatFieldUpdateOperationsInput | number | null
    targetFatG?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: StringFieldUpdateOperationsInput | string
    experienceLevel?: StringFieldUpdateOperationsInput | string
    lifestyleType?: StringFieldUpdateOperationsInput | string
    sleepWindowStart?: NullableStringFieldUpdateOperationsInput | string | null
    sleepWindowEnd?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: UserPreferencesUpdateallergiesInput | string[]
    healthConditions?: UserPreferencesUpdatehealthConditionsInput | string[]
    dietMode?: StringFieldUpdateOperationsInput | string
    workoutEnvironment?: NullableStringFieldUpdateOperationsInput | string | null
    availableEquipment?: UserPreferencesUpdateavailableEquipmentInput | string[]
    isBodybuilderMode?: BoolFieldUpdateOperationsInput | boolean
    isInjurySafeMode?: BoolFieldUpdateOperationsInput | boolean
    workoutDurationPreference?: IntFieldUpdateOperationsInput | number
    splitPreference?: StringFieldUpdateOperationsInput | string
    activeProtocolId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    primaryGoal?: StringFieldUpdateOperationsInput | string
    dietaryPreference?: StringFieldUpdateOperationsInput | string
    targetCalories?: NullableFloatFieldUpdateOperationsInput | number | null
    targetProteinG?: NullableFloatFieldUpdateOperationsInput | number | null
    targetCarbsG?: NullableFloatFieldUpdateOperationsInput | number | null
    targetFatG?: NullableFloatFieldUpdateOperationsInput | number | null
    activityLevel?: StringFieldUpdateOperationsInput | string
    experienceLevel?: StringFieldUpdateOperationsInput | string
    lifestyleType?: StringFieldUpdateOperationsInput | string
    sleepWindowStart?: NullableStringFieldUpdateOperationsInput | string | null
    sleepWindowEnd?: NullableStringFieldUpdateOperationsInput | string | null
    allergies?: UserPreferencesUpdateallergiesInput | string[]
    healthConditions?: UserPreferencesUpdatehealthConditionsInput | string[]
    dietMode?: StringFieldUpdateOperationsInput | string
    workoutEnvironment?: NullableStringFieldUpdateOperationsInput | string | null
    availableEquipment?: UserPreferencesUpdateavailableEquipmentInput | string[]
    isBodybuilderMode?: BoolFieldUpdateOperationsInput | boolean
    isInjurySafeMode?: BoolFieldUpdateOperationsInput | boolean
    workoutDurationPreference?: IntFieldUpdateOperationsInput | number
    splitPreference?: StringFieldUpdateOperationsInput | string
    activeProtocolId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatusUpsertWithoutProfileInput = {
    update: XOR<UserStatusUpdateWithoutProfileInput, UserStatusUncheckedUpdateWithoutProfileInput>
    create: XOR<UserStatusCreateWithoutProfileInput, UserStatusUncheckedCreateWithoutProfileInput>
    where?: UserStatusWhereInput
  }

  export type UserStatusUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserStatusWhereInput
    data: XOR<UserStatusUpdateWithoutProfileInput, UserStatusUncheckedUpdateWithoutProfileInput>
  }

  export type UserStatusUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    fatigueScore?: FloatFieldUpdateOperationsInput | number
    circadianPeakTime?: NullableStringFieldUpdateOperationsInput | string | null
    circadianLowTime?: NullableStringFieldUpdateOperationsInput | string | null
    adherenceRate?: FloatFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    currentTdee?: NullableFloatFieldUpdateOperationsInput | number | null
    weightTrend?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStatusUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    fatigueScore?: FloatFieldUpdateOperationsInput | number
    circadianPeakTime?: NullableStringFieldUpdateOperationsInput | string | null
    circadianLowTime?: NullableStringFieldUpdateOperationsInput | string | null
    adherenceRate?: FloatFieldUpdateOperationsInput | number
    currentStreak?: IntFieldUpdateOperationsInput | number
    currentTdee?: NullableFloatFieldUpdateOperationsInput | number | null
    weightTrend?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateWithoutPreferencesInput = {
    id?: string
    userId: string
    displayName: string
    avatarUrl?: string | null
    dateOfBirth?: Date | string | null
    heightCm?: number | null
    weightKg?: number | null
    biologicalSex?: string | null
    timezone?: string
    region?: string
    onboardingCompleted?: boolean
    onboardingStep?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: UserStatusCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateWithoutPreferencesInput = {
    id?: string
    userId: string
    displayName: string
    avatarUrl?: string | null
    dateOfBirth?: Date | string | null
    heightCm?: number | null
    weightKg?: number | null
    biologicalSex?: string | null
    timezone?: string
    region?: string
    onboardingCompleted?: boolean
    onboardingStep?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: UserStatusUncheckedCreateNestedOneWithoutProfileInput
  }

  export type UserProfileCreateOrConnectWithoutPreferencesInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutPreferencesInput, UserProfileUncheckedCreateWithoutPreferencesInput>
  }

  export type UserProfileUpsertWithoutPreferencesInput = {
    update: XOR<UserProfileUpdateWithoutPreferencesInput, UserProfileUncheckedUpdateWithoutPreferencesInput>
    create: XOR<UserProfileCreateWithoutPreferencesInput, UserProfileUncheckedCreateWithoutPreferencesInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutPreferencesInput, UserProfileUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserProfileUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    biologicalSex?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    onboardingStep?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: UserStatusUpdateOneWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    biologicalSex?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    onboardingStep?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: UserStatusUncheckedUpdateOneWithoutProfileNestedInput
  }

  export type CoachClientRelationCreateWithoutCoachInput = {
    id?: string
    clientUserId: string
    status?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CoachClientRelationUncheckedCreateWithoutCoachInput = {
    id?: string
    clientUserId: string
    status?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CoachClientRelationCreateOrConnectWithoutCoachInput = {
    where: CoachClientRelationWhereUniqueInput
    create: XOR<CoachClientRelationCreateWithoutCoachInput, CoachClientRelationUncheckedCreateWithoutCoachInput>
  }

  export type CoachClientRelationCreateManyCoachInputEnvelope = {
    data: CoachClientRelationCreateManyCoachInput | CoachClientRelationCreateManyCoachInput[]
    skipDuplicates?: boolean
  }

  export type CoachClientRelationUpsertWithWhereUniqueWithoutCoachInput = {
    where: CoachClientRelationWhereUniqueInput
    update: XOR<CoachClientRelationUpdateWithoutCoachInput, CoachClientRelationUncheckedUpdateWithoutCoachInput>
    create: XOR<CoachClientRelationCreateWithoutCoachInput, CoachClientRelationUncheckedCreateWithoutCoachInput>
  }

  export type CoachClientRelationUpdateWithWhereUniqueWithoutCoachInput = {
    where: CoachClientRelationWhereUniqueInput
    data: XOR<CoachClientRelationUpdateWithoutCoachInput, CoachClientRelationUncheckedUpdateWithoutCoachInput>
  }

  export type CoachClientRelationUpdateManyWithWhereWithoutCoachInput = {
    where: CoachClientRelationScalarWhereInput
    data: XOR<CoachClientRelationUpdateManyMutationInput, CoachClientRelationUncheckedUpdateManyWithoutCoachInput>
  }

  export type CoachClientRelationScalarWhereInput = {
    AND?: CoachClientRelationScalarWhereInput | CoachClientRelationScalarWhereInput[]
    OR?: CoachClientRelationScalarWhereInput[]
    NOT?: CoachClientRelationScalarWhereInput | CoachClientRelationScalarWhereInput[]
    id?: StringFilter<"CoachClientRelation"> | string
    coachUserId?: StringFilter<"CoachClientRelation"> | string
    clientUserId?: StringFilter<"CoachClientRelation"> | string
    status?: StringFilter<"CoachClientRelation"> | string
    startedAt?: DateTimeFilter<"CoachClientRelation"> | Date | string
    endedAt?: DateTimeNullableFilter<"CoachClientRelation"> | Date | string | null
    createdAt?: DateTimeFilter<"CoachClientRelation"> | Date | string
  }

  export type CoachProfileCreateWithoutClientsInput = {
    id?: string
    userId: string
    specializations?: CoachProfileCreatespecializationsInput | string[]
    bio?: string | null
    certifications?: CoachProfileCreatecertificationsInput | string[]
    isAvailable?: boolean
    monthlyRateUsd?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoachProfileUncheckedCreateWithoutClientsInput = {
    id?: string
    userId: string
    specializations?: CoachProfileCreatespecializationsInput | string[]
    bio?: string | null
    certifications?: CoachProfileCreatecertificationsInput | string[]
    isAvailable?: boolean
    monthlyRateUsd?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoachProfileCreateOrConnectWithoutClientsInput = {
    where: CoachProfileWhereUniqueInput
    create: XOR<CoachProfileCreateWithoutClientsInput, CoachProfileUncheckedCreateWithoutClientsInput>
  }

  export type CoachProfileUpsertWithoutClientsInput = {
    update: XOR<CoachProfileUpdateWithoutClientsInput, CoachProfileUncheckedUpdateWithoutClientsInput>
    create: XOR<CoachProfileCreateWithoutClientsInput, CoachProfileUncheckedCreateWithoutClientsInput>
    where?: CoachProfileWhereInput
  }

  export type CoachProfileUpdateToOneWithWhereWithoutClientsInput = {
    where?: CoachProfileWhereInput
    data: XOR<CoachProfileUpdateWithoutClientsInput, CoachProfileUncheckedUpdateWithoutClientsInput>
  }

  export type CoachProfileUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specializations?: CoachProfileUpdatespecializationsInput | string[]
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: CoachProfileUpdatecertificationsInput | string[]
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    monthlyRateUsd?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachProfileUncheckedUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    specializations?: CoachProfileUpdatespecializationsInput | string[]
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: CoachProfileUpdatecertificationsInput | string[]
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    monthlyRateUsd?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateWithoutStatusInput = {
    id?: string
    userId: string
    displayName: string
    avatarUrl?: string | null
    dateOfBirth?: Date | string | null
    heightCm?: number | null
    weightKg?: number | null
    biologicalSex?: string | null
    timezone?: string
    region?: string
    onboardingCompleted?: boolean
    onboardingStep?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    preferences?: UserPreferencesCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateWithoutStatusInput = {
    id?: string
    userId: string
    displayName: string
    avatarUrl?: string | null
    dateOfBirth?: Date | string | null
    heightCm?: number | null
    weightKg?: number | null
    biologicalSex?: string | null
    timezone?: string
    region?: string
    onboardingCompleted?: boolean
    onboardingStep?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutProfileInput
  }

  export type UserProfileCreateOrConnectWithoutStatusInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutStatusInput, UserProfileUncheckedCreateWithoutStatusInput>
  }

  export type UserProfileUpsertWithoutStatusInput = {
    update: XOR<UserProfileUpdateWithoutStatusInput, UserProfileUncheckedUpdateWithoutStatusInput>
    create: XOR<UserProfileCreateWithoutStatusInput, UserProfileUncheckedCreateWithoutStatusInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutStatusInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutStatusInput, UserProfileUncheckedUpdateWithoutStatusInput>
  }

  export type UserProfileUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    biologicalSex?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    onboardingStep?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: UserPreferencesUpdateOneWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heightCm?: NullableFloatFieldUpdateOperationsInput | number | null
    weightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    biologicalSex?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    onboardingCompleted?: BoolFieldUpdateOperationsInput | boolean
    onboardingStep?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preferences?: UserPreferencesUncheckedUpdateOneWithoutProfileNestedInput
  }

  export type CoachClientRelationCreateManyCoachInput = {
    id?: string
    clientUserId: string
    status?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CoachClientRelationUpdateWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachClientRelationUncheckedUpdateWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachClientRelationUncheckedUpdateManyWithoutCoachInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CoachProfileCountOutputTypeDefaultArgs instead
     */
    export type CoachProfileCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CoachProfileCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserProfileDefaultArgs instead
     */
    export type UserProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserPreferencesDefaultArgs instead
     */
    export type UserPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserPreferencesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CoachProfileDefaultArgs instead
     */
    export type CoachProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CoachProfileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CoachClientRelationDefaultArgs instead
     */
    export type CoachClientRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CoachClientRelationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserStatusDefaultArgs instead
     */
    export type UserStatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserStatusDefaultArgs<ExtArgs>

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