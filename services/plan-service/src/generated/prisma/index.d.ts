
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
 * Model DayPlan
 * 
 */
export type DayPlan = $Result.DefaultSelection<Prisma.$DayPlanPayload>
/**
 * Model ProtocolTemplate
 * 
 */
export type ProtocolTemplate = $Result.DefaultSelection<Prisma.$ProtocolTemplatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PlanStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  ACTIVE: 'ACTIVE',
  ADJUSTED: 'ADJUSTED',
  SUPERSEDED: 'SUPERSEDED',
  INVALIDATED: 'INVALIDATED',
  EXPIRED: 'EXPIRED',
  DELETED: 'DELETED'
};

export type PlanStatus = (typeof PlanStatus)[keyof typeof PlanStatus]

}

export type PlanStatus = $Enums.PlanStatus

export const PlanStatus: typeof $Enums.PlanStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DayPlans
 * const dayPlans = await prisma.dayPlan.findMany()
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
   * // Fetch zero or more DayPlans
   * const dayPlans = await prisma.dayPlan.findMany()
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
   * `prisma.dayPlan`: Exposes CRUD operations for the **DayPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DayPlans
    * const dayPlans = await prisma.dayPlan.findMany()
    * ```
    */
  get dayPlan(): Prisma.DayPlanDelegate<ExtArgs>;

  /**
   * `prisma.protocolTemplate`: Exposes CRUD operations for the **ProtocolTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProtocolTemplates
    * const protocolTemplates = await prisma.protocolTemplate.findMany()
    * ```
    */
  get protocolTemplate(): Prisma.ProtocolTemplateDelegate<ExtArgs>;
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
    DayPlan: 'DayPlan',
    ProtocolTemplate: 'ProtocolTemplate'
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
      modelProps: "dayPlan" | "protocolTemplate"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      DayPlan: {
        payload: Prisma.$DayPlanPayload<ExtArgs>
        fields: Prisma.DayPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DayPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DayPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayPlanPayload>
          }
          findFirst: {
            args: Prisma.DayPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DayPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayPlanPayload>
          }
          findMany: {
            args: Prisma.DayPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayPlanPayload>[]
          }
          create: {
            args: Prisma.DayPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayPlanPayload>
          }
          createMany: {
            args: Prisma.DayPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DayPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayPlanPayload>[]
          }
          delete: {
            args: Prisma.DayPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayPlanPayload>
          }
          update: {
            args: Prisma.DayPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayPlanPayload>
          }
          deleteMany: {
            args: Prisma.DayPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DayPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DayPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DayPlanPayload>
          }
          aggregate: {
            args: Prisma.DayPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDayPlan>
          }
          groupBy: {
            args: Prisma.DayPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<DayPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.DayPlanCountArgs<ExtArgs>
            result: $Utils.Optional<DayPlanCountAggregateOutputType> | number
          }
        }
      }
      ProtocolTemplate: {
        payload: Prisma.$ProtocolTemplatePayload<ExtArgs>
        fields: Prisma.ProtocolTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProtocolTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProtocolTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolTemplatePayload>
          }
          findFirst: {
            args: Prisma.ProtocolTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProtocolTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolTemplatePayload>
          }
          findMany: {
            args: Prisma.ProtocolTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolTemplatePayload>[]
          }
          create: {
            args: Prisma.ProtocolTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolTemplatePayload>
          }
          createMany: {
            args: Prisma.ProtocolTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProtocolTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolTemplatePayload>[]
          }
          delete: {
            args: Prisma.ProtocolTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolTemplatePayload>
          }
          update: {
            args: Prisma.ProtocolTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolTemplatePayload>
          }
          deleteMany: {
            args: Prisma.ProtocolTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProtocolTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProtocolTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProtocolTemplatePayload>
          }
          aggregate: {
            args: Prisma.ProtocolTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProtocolTemplate>
          }
          groupBy: {
            args: Prisma.ProtocolTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProtocolTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProtocolTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<ProtocolTemplateCountAggregateOutputType> | number
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
   * Count Type ProtocolTemplateCountOutputType
   */

  export type ProtocolTemplateCountOutputType = {
    plans: number
  }

  export type ProtocolTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plans?: boolean | ProtocolTemplateCountOutputTypeCountPlansArgs
  }

  // Custom InputTypes
  /**
   * ProtocolTemplateCountOutputType without action
   */
  export type ProtocolTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolTemplateCountOutputType
     */
    select?: ProtocolTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProtocolTemplateCountOutputType without action
   */
  export type ProtocolTemplateCountOutputTypeCountPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayPlanWhereInput
  }


  /**
   * Models
   */

  /**
   * Model DayPlan
   */

  export type AggregateDayPlan = {
    _count: DayPlanCountAggregateOutputType | null
    _avg: DayPlanAvgAggregateOutputType | null
    _sum: DayPlanSumAggregateOutputType | null
    _min: DayPlanMinAggregateOutputType | null
    _max: DayPlanMaxAggregateOutputType | null
  }

  export type DayPlanAvgAggregateOutputType = {
    planVersion: number | null
    generationLatencyMs: number | null
    generationTokens: number | null
    userRating: number | null
  }

  export type DayPlanSumAggregateOutputType = {
    planVersion: number | null
    generationLatencyMs: number | null
    generationTokens: number | null
    userRating: number | null
  }

  export type DayPlanMinAggregateOutputType = {
    id: string | null
    userId: string | null
    planDate: Date | null
    shiftId: string | null
    circadianProfileId: string | null
    protocolId: string | null
    planVersion: number | null
    generationModel: string | null
    generationLatencyMs: number | null
    generationTokens: number | null
    userRating: number | null
    status: $Enums.PlanStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DayPlanMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    planDate: Date | null
    shiftId: string | null
    circadianProfileId: string | null
    protocolId: string | null
    planVersion: number | null
    generationModel: string | null
    generationLatencyMs: number | null
    generationTokens: number | null
    userRating: number | null
    status: $Enums.PlanStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DayPlanCountAggregateOutputType = {
    id: number
    userId: number
    planDate: number
    shiftId: number
    circadianProfileId: number
    protocolId: number
    planVersion: number
    plan: number
    generationModel: number
    generationLatencyMs: number
    generationTokens: number
    userRating: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DayPlanAvgAggregateInputType = {
    planVersion?: true
    generationLatencyMs?: true
    generationTokens?: true
    userRating?: true
  }

  export type DayPlanSumAggregateInputType = {
    planVersion?: true
    generationLatencyMs?: true
    generationTokens?: true
    userRating?: true
  }

  export type DayPlanMinAggregateInputType = {
    id?: true
    userId?: true
    planDate?: true
    shiftId?: true
    circadianProfileId?: true
    protocolId?: true
    planVersion?: true
    generationModel?: true
    generationLatencyMs?: true
    generationTokens?: true
    userRating?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DayPlanMaxAggregateInputType = {
    id?: true
    userId?: true
    planDate?: true
    shiftId?: true
    circadianProfileId?: true
    protocolId?: true
    planVersion?: true
    generationModel?: true
    generationLatencyMs?: true
    generationTokens?: true
    userRating?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DayPlanCountAggregateInputType = {
    id?: true
    userId?: true
    planDate?: true
    shiftId?: true
    circadianProfileId?: true
    protocolId?: true
    planVersion?: true
    plan?: true
    generationModel?: true
    generationLatencyMs?: true
    generationTokens?: true
    userRating?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DayPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DayPlan to aggregate.
     */
    where?: DayPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayPlans to fetch.
     */
    orderBy?: DayPlanOrderByWithRelationInput | DayPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DayPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DayPlans
    **/
    _count?: true | DayPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DayPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DayPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DayPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DayPlanMaxAggregateInputType
  }

  export type GetDayPlanAggregateType<T extends DayPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateDayPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDayPlan[P]>
      : GetScalarType<T[P], AggregateDayPlan[P]>
  }




  export type DayPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DayPlanWhereInput
    orderBy?: DayPlanOrderByWithAggregationInput | DayPlanOrderByWithAggregationInput[]
    by: DayPlanScalarFieldEnum[] | DayPlanScalarFieldEnum
    having?: DayPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DayPlanCountAggregateInputType | true
    _avg?: DayPlanAvgAggregateInputType
    _sum?: DayPlanSumAggregateInputType
    _min?: DayPlanMinAggregateInputType
    _max?: DayPlanMaxAggregateInputType
  }

  export type DayPlanGroupByOutputType = {
    id: string
    userId: string
    planDate: Date
    shiftId: string | null
    circadianProfileId: string | null
    protocolId: string | null
    planVersion: number
    plan: JsonValue
    generationModel: string
    generationLatencyMs: number | null
    generationTokens: number | null
    userRating: number | null
    status: $Enums.PlanStatus
    createdAt: Date
    updatedAt: Date
    _count: DayPlanCountAggregateOutputType | null
    _avg: DayPlanAvgAggregateOutputType | null
    _sum: DayPlanSumAggregateOutputType | null
    _min: DayPlanMinAggregateOutputType | null
    _max: DayPlanMaxAggregateOutputType | null
  }

  type GetDayPlanGroupByPayload<T extends DayPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DayPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DayPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DayPlanGroupByOutputType[P]>
            : GetScalarType<T[P], DayPlanGroupByOutputType[P]>
        }
      >
    >


  export type DayPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planDate?: boolean
    shiftId?: boolean
    circadianProfileId?: boolean
    protocolId?: boolean
    planVersion?: boolean
    plan?: boolean
    generationModel?: boolean
    generationLatencyMs?: boolean
    generationTokens?: boolean
    userRating?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    protocol?: boolean | DayPlan$protocolArgs<ExtArgs>
  }, ExtArgs["result"]["dayPlan"]>

  export type DayPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planDate?: boolean
    shiftId?: boolean
    circadianProfileId?: boolean
    protocolId?: boolean
    planVersion?: boolean
    plan?: boolean
    generationModel?: boolean
    generationLatencyMs?: boolean
    generationTokens?: boolean
    userRating?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    protocol?: boolean | DayPlan$protocolArgs<ExtArgs>
  }, ExtArgs["result"]["dayPlan"]>

  export type DayPlanSelectScalar = {
    id?: boolean
    userId?: boolean
    planDate?: boolean
    shiftId?: boolean
    circadianProfileId?: boolean
    protocolId?: boolean
    planVersion?: boolean
    plan?: boolean
    generationModel?: boolean
    generationLatencyMs?: boolean
    generationTokens?: boolean
    userRating?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DayPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    protocol?: boolean | DayPlan$protocolArgs<ExtArgs>
  }
  export type DayPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    protocol?: boolean | DayPlan$protocolArgs<ExtArgs>
  }

  export type $DayPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DayPlan"
    objects: {
      protocol: Prisma.$ProtocolTemplatePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      planDate: Date
      shiftId: string | null
      circadianProfileId: string | null
      protocolId: string | null
      planVersion: number
      plan: Prisma.JsonValue
      generationModel: string
      generationLatencyMs: number | null
      generationTokens: number | null
      userRating: number | null
      status: $Enums.PlanStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dayPlan"]>
    composites: {}
  }

  type DayPlanGetPayload<S extends boolean | null | undefined | DayPlanDefaultArgs> = $Result.GetResult<Prisma.$DayPlanPayload, S>

  type DayPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DayPlanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DayPlanCountAggregateInputType | true
    }

  export interface DayPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DayPlan'], meta: { name: 'DayPlan' } }
    /**
     * Find zero or one DayPlan that matches the filter.
     * @param {DayPlanFindUniqueArgs} args - Arguments to find a DayPlan
     * @example
     * // Get one DayPlan
     * const dayPlan = await prisma.dayPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DayPlanFindUniqueArgs>(args: SelectSubset<T, DayPlanFindUniqueArgs<ExtArgs>>): Prisma__DayPlanClient<$Result.GetResult<Prisma.$DayPlanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DayPlan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DayPlanFindUniqueOrThrowArgs} args - Arguments to find a DayPlan
     * @example
     * // Get one DayPlan
     * const dayPlan = await prisma.dayPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DayPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, DayPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DayPlanClient<$Result.GetResult<Prisma.$DayPlanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DayPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayPlanFindFirstArgs} args - Arguments to find a DayPlan
     * @example
     * // Get one DayPlan
     * const dayPlan = await prisma.dayPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DayPlanFindFirstArgs>(args?: SelectSubset<T, DayPlanFindFirstArgs<ExtArgs>>): Prisma__DayPlanClient<$Result.GetResult<Prisma.$DayPlanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DayPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayPlanFindFirstOrThrowArgs} args - Arguments to find a DayPlan
     * @example
     * // Get one DayPlan
     * const dayPlan = await prisma.dayPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DayPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, DayPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__DayPlanClient<$Result.GetResult<Prisma.$DayPlanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DayPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DayPlans
     * const dayPlans = await prisma.dayPlan.findMany()
     * 
     * // Get first 10 DayPlans
     * const dayPlans = await prisma.dayPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dayPlanWithIdOnly = await prisma.dayPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DayPlanFindManyArgs>(args?: SelectSubset<T, DayPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayPlanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DayPlan.
     * @param {DayPlanCreateArgs} args - Arguments to create a DayPlan.
     * @example
     * // Create one DayPlan
     * const DayPlan = await prisma.dayPlan.create({
     *   data: {
     *     // ... data to create a DayPlan
     *   }
     * })
     * 
     */
    create<T extends DayPlanCreateArgs>(args: SelectSubset<T, DayPlanCreateArgs<ExtArgs>>): Prisma__DayPlanClient<$Result.GetResult<Prisma.$DayPlanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DayPlans.
     * @param {DayPlanCreateManyArgs} args - Arguments to create many DayPlans.
     * @example
     * // Create many DayPlans
     * const dayPlan = await prisma.dayPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DayPlanCreateManyArgs>(args?: SelectSubset<T, DayPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DayPlans and returns the data saved in the database.
     * @param {DayPlanCreateManyAndReturnArgs} args - Arguments to create many DayPlans.
     * @example
     * // Create many DayPlans
     * const dayPlan = await prisma.dayPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DayPlans and only return the `id`
     * const dayPlanWithIdOnly = await prisma.dayPlan.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DayPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, DayPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayPlanPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DayPlan.
     * @param {DayPlanDeleteArgs} args - Arguments to delete one DayPlan.
     * @example
     * // Delete one DayPlan
     * const DayPlan = await prisma.dayPlan.delete({
     *   where: {
     *     // ... filter to delete one DayPlan
     *   }
     * })
     * 
     */
    delete<T extends DayPlanDeleteArgs>(args: SelectSubset<T, DayPlanDeleteArgs<ExtArgs>>): Prisma__DayPlanClient<$Result.GetResult<Prisma.$DayPlanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DayPlan.
     * @param {DayPlanUpdateArgs} args - Arguments to update one DayPlan.
     * @example
     * // Update one DayPlan
     * const dayPlan = await prisma.dayPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DayPlanUpdateArgs>(args: SelectSubset<T, DayPlanUpdateArgs<ExtArgs>>): Prisma__DayPlanClient<$Result.GetResult<Prisma.$DayPlanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DayPlans.
     * @param {DayPlanDeleteManyArgs} args - Arguments to filter DayPlans to delete.
     * @example
     * // Delete a few DayPlans
     * const { count } = await prisma.dayPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DayPlanDeleteManyArgs>(args?: SelectSubset<T, DayPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DayPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DayPlans
     * const dayPlan = await prisma.dayPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DayPlanUpdateManyArgs>(args: SelectSubset<T, DayPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DayPlan.
     * @param {DayPlanUpsertArgs} args - Arguments to update or create a DayPlan.
     * @example
     * // Update or create a DayPlan
     * const dayPlan = await prisma.dayPlan.upsert({
     *   create: {
     *     // ... data to create a DayPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DayPlan we want to update
     *   }
     * })
     */
    upsert<T extends DayPlanUpsertArgs>(args: SelectSubset<T, DayPlanUpsertArgs<ExtArgs>>): Prisma__DayPlanClient<$Result.GetResult<Prisma.$DayPlanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DayPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayPlanCountArgs} args - Arguments to filter DayPlans to count.
     * @example
     * // Count the number of DayPlans
     * const count = await prisma.dayPlan.count({
     *   where: {
     *     // ... the filter for the DayPlans we want to count
     *   }
     * })
    **/
    count<T extends DayPlanCountArgs>(
      args?: Subset<T, DayPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DayPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DayPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DayPlanAggregateArgs>(args: Subset<T, DayPlanAggregateArgs>): Prisma.PrismaPromise<GetDayPlanAggregateType<T>>

    /**
     * Group by DayPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DayPlanGroupByArgs} args - Group by arguments.
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
      T extends DayPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DayPlanGroupByArgs['orderBy'] }
        : { orderBy?: DayPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DayPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDayPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DayPlan model
   */
  readonly fields: DayPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DayPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DayPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    protocol<T extends DayPlan$protocolArgs<ExtArgs> = {}>(args?: Subset<T, DayPlan$protocolArgs<ExtArgs>>): Prisma__ProtocolTemplateClient<$Result.GetResult<Prisma.$ProtocolTemplatePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the DayPlan model
   */ 
  interface DayPlanFieldRefs {
    readonly id: FieldRef<"DayPlan", 'String'>
    readonly userId: FieldRef<"DayPlan", 'String'>
    readonly planDate: FieldRef<"DayPlan", 'DateTime'>
    readonly shiftId: FieldRef<"DayPlan", 'String'>
    readonly circadianProfileId: FieldRef<"DayPlan", 'String'>
    readonly protocolId: FieldRef<"DayPlan", 'String'>
    readonly planVersion: FieldRef<"DayPlan", 'Int'>
    readonly plan: FieldRef<"DayPlan", 'Json'>
    readonly generationModel: FieldRef<"DayPlan", 'String'>
    readonly generationLatencyMs: FieldRef<"DayPlan", 'Int'>
    readonly generationTokens: FieldRef<"DayPlan", 'Int'>
    readonly userRating: FieldRef<"DayPlan", 'Int'>
    readonly status: FieldRef<"DayPlan", 'PlanStatus'>
    readonly createdAt: FieldRef<"DayPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"DayPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DayPlan findUnique
   */
  export type DayPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayPlan
     */
    select?: DayPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayPlanInclude<ExtArgs> | null
    /**
     * Filter, which DayPlan to fetch.
     */
    where: DayPlanWhereUniqueInput
  }

  /**
   * DayPlan findUniqueOrThrow
   */
  export type DayPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayPlan
     */
    select?: DayPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayPlanInclude<ExtArgs> | null
    /**
     * Filter, which DayPlan to fetch.
     */
    where: DayPlanWhereUniqueInput
  }

  /**
   * DayPlan findFirst
   */
  export type DayPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayPlan
     */
    select?: DayPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayPlanInclude<ExtArgs> | null
    /**
     * Filter, which DayPlan to fetch.
     */
    where?: DayPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayPlans to fetch.
     */
    orderBy?: DayPlanOrderByWithRelationInput | DayPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DayPlans.
     */
    cursor?: DayPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DayPlans.
     */
    distinct?: DayPlanScalarFieldEnum | DayPlanScalarFieldEnum[]
  }

  /**
   * DayPlan findFirstOrThrow
   */
  export type DayPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayPlan
     */
    select?: DayPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayPlanInclude<ExtArgs> | null
    /**
     * Filter, which DayPlan to fetch.
     */
    where?: DayPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayPlans to fetch.
     */
    orderBy?: DayPlanOrderByWithRelationInput | DayPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DayPlans.
     */
    cursor?: DayPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DayPlans.
     */
    distinct?: DayPlanScalarFieldEnum | DayPlanScalarFieldEnum[]
  }

  /**
   * DayPlan findMany
   */
  export type DayPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayPlan
     */
    select?: DayPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayPlanInclude<ExtArgs> | null
    /**
     * Filter, which DayPlans to fetch.
     */
    where?: DayPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DayPlans to fetch.
     */
    orderBy?: DayPlanOrderByWithRelationInput | DayPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DayPlans.
     */
    cursor?: DayPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DayPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DayPlans.
     */
    skip?: number
    distinct?: DayPlanScalarFieldEnum | DayPlanScalarFieldEnum[]
  }

  /**
   * DayPlan create
   */
  export type DayPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayPlan
     */
    select?: DayPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a DayPlan.
     */
    data: XOR<DayPlanCreateInput, DayPlanUncheckedCreateInput>
  }

  /**
   * DayPlan createMany
   */
  export type DayPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DayPlans.
     */
    data: DayPlanCreateManyInput | DayPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DayPlan createManyAndReturn
   */
  export type DayPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayPlan
     */
    select?: DayPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DayPlans.
     */
    data: DayPlanCreateManyInput | DayPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DayPlan update
   */
  export type DayPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayPlan
     */
    select?: DayPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a DayPlan.
     */
    data: XOR<DayPlanUpdateInput, DayPlanUncheckedUpdateInput>
    /**
     * Choose, which DayPlan to update.
     */
    where: DayPlanWhereUniqueInput
  }

  /**
   * DayPlan updateMany
   */
  export type DayPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DayPlans.
     */
    data: XOR<DayPlanUpdateManyMutationInput, DayPlanUncheckedUpdateManyInput>
    /**
     * Filter which DayPlans to update
     */
    where?: DayPlanWhereInput
  }

  /**
   * DayPlan upsert
   */
  export type DayPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayPlan
     */
    select?: DayPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the DayPlan to update in case it exists.
     */
    where: DayPlanWhereUniqueInput
    /**
     * In case the DayPlan found by the `where` argument doesn't exist, create a new DayPlan with this data.
     */
    create: XOR<DayPlanCreateInput, DayPlanUncheckedCreateInput>
    /**
     * In case the DayPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DayPlanUpdateInput, DayPlanUncheckedUpdateInput>
  }

  /**
   * DayPlan delete
   */
  export type DayPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayPlan
     */
    select?: DayPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayPlanInclude<ExtArgs> | null
    /**
     * Filter which DayPlan to delete.
     */
    where: DayPlanWhereUniqueInput
  }

  /**
   * DayPlan deleteMany
   */
  export type DayPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DayPlans to delete
     */
    where?: DayPlanWhereInput
  }

  /**
   * DayPlan.protocol
   */
  export type DayPlan$protocolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolTemplate
     */
    select?: ProtocolTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolTemplateInclude<ExtArgs> | null
    where?: ProtocolTemplateWhereInput
  }

  /**
   * DayPlan without action
   */
  export type DayPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayPlan
     */
    select?: DayPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayPlanInclude<ExtArgs> | null
  }


  /**
   * Model ProtocolTemplate
   */

  export type AggregateProtocolTemplate = {
    _count: ProtocolTemplateCountAggregateOutputType | null
    _min: ProtocolTemplateMinAggregateOutputType | null
    _max: ProtocolTemplateMaxAggregateOutputType | null
  }

  export type ProtocolTemplateMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    creatorId: string | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProtocolTemplateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    creatorId: string | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProtocolTemplateCountAggregateOutputType = {
    id: number
    name: number
    description: number
    creatorId: number
    parameters: number
    isPublic: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProtocolTemplateMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    creatorId?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProtocolTemplateMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    creatorId?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProtocolTemplateCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    creatorId?: true
    parameters?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProtocolTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProtocolTemplate to aggregate.
     */
    where?: ProtocolTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProtocolTemplates to fetch.
     */
    orderBy?: ProtocolTemplateOrderByWithRelationInput | ProtocolTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProtocolTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProtocolTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProtocolTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProtocolTemplates
    **/
    _count?: true | ProtocolTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProtocolTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProtocolTemplateMaxAggregateInputType
  }

  export type GetProtocolTemplateAggregateType<T extends ProtocolTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateProtocolTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProtocolTemplate[P]>
      : GetScalarType<T[P], AggregateProtocolTemplate[P]>
  }




  export type ProtocolTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProtocolTemplateWhereInput
    orderBy?: ProtocolTemplateOrderByWithAggregationInput | ProtocolTemplateOrderByWithAggregationInput[]
    by: ProtocolTemplateScalarFieldEnum[] | ProtocolTemplateScalarFieldEnum
    having?: ProtocolTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProtocolTemplateCountAggregateInputType | true
    _min?: ProtocolTemplateMinAggregateInputType
    _max?: ProtocolTemplateMaxAggregateInputType
  }

  export type ProtocolTemplateGroupByOutputType = {
    id: string
    name: string
    description: string | null
    creatorId: string
    parameters: JsonValue
    isPublic: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProtocolTemplateCountAggregateOutputType | null
    _min: ProtocolTemplateMinAggregateOutputType | null
    _max: ProtocolTemplateMaxAggregateOutputType | null
  }

  type GetProtocolTemplateGroupByPayload<T extends ProtocolTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProtocolTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProtocolTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProtocolTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], ProtocolTemplateGroupByOutputType[P]>
        }
      >
    >


  export type ProtocolTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    creatorId?: boolean
    parameters?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plans?: boolean | ProtocolTemplate$plansArgs<ExtArgs>
    _count?: boolean | ProtocolTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["protocolTemplate"]>

  export type ProtocolTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    creatorId?: boolean
    parameters?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["protocolTemplate"]>

  export type ProtocolTemplateSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    creatorId?: boolean
    parameters?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProtocolTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plans?: boolean | ProtocolTemplate$plansArgs<ExtArgs>
    _count?: boolean | ProtocolTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProtocolTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProtocolTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProtocolTemplate"
    objects: {
      plans: Prisma.$DayPlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      creatorId: string
      parameters: Prisma.JsonValue
      isPublic: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["protocolTemplate"]>
    composites: {}
  }

  type ProtocolTemplateGetPayload<S extends boolean | null | undefined | ProtocolTemplateDefaultArgs> = $Result.GetResult<Prisma.$ProtocolTemplatePayload, S>

  type ProtocolTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProtocolTemplateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProtocolTemplateCountAggregateInputType | true
    }

  export interface ProtocolTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProtocolTemplate'], meta: { name: 'ProtocolTemplate' } }
    /**
     * Find zero or one ProtocolTemplate that matches the filter.
     * @param {ProtocolTemplateFindUniqueArgs} args - Arguments to find a ProtocolTemplate
     * @example
     * // Get one ProtocolTemplate
     * const protocolTemplate = await prisma.protocolTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProtocolTemplateFindUniqueArgs>(args: SelectSubset<T, ProtocolTemplateFindUniqueArgs<ExtArgs>>): Prisma__ProtocolTemplateClient<$Result.GetResult<Prisma.$ProtocolTemplatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProtocolTemplate that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProtocolTemplateFindUniqueOrThrowArgs} args - Arguments to find a ProtocolTemplate
     * @example
     * // Get one ProtocolTemplate
     * const protocolTemplate = await prisma.protocolTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProtocolTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, ProtocolTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProtocolTemplateClient<$Result.GetResult<Prisma.$ProtocolTemplatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProtocolTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocolTemplateFindFirstArgs} args - Arguments to find a ProtocolTemplate
     * @example
     * // Get one ProtocolTemplate
     * const protocolTemplate = await prisma.protocolTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProtocolTemplateFindFirstArgs>(args?: SelectSubset<T, ProtocolTemplateFindFirstArgs<ExtArgs>>): Prisma__ProtocolTemplateClient<$Result.GetResult<Prisma.$ProtocolTemplatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProtocolTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocolTemplateFindFirstOrThrowArgs} args - Arguments to find a ProtocolTemplate
     * @example
     * // Get one ProtocolTemplate
     * const protocolTemplate = await prisma.protocolTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProtocolTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, ProtocolTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProtocolTemplateClient<$Result.GetResult<Prisma.$ProtocolTemplatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProtocolTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocolTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProtocolTemplates
     * const protocolTemplates = await prisma.protocolTemplate.findMany()
     * 
     * // Get first 10 ProtocolTemplates
     * const protocolTemplates = await prisma.protocolTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const protocolTemplateWithIdOnly = await prisma.protocolTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProtocolTemplateFindManyArgs>(args?: SelectSubset<T, ProtocolTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProtocolTemplatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProtocolTemplate.
     * @param {ProtocolTemplateCreateArgs} args - Arguments to create a ProtocolTemplate.
     * @example
     * // Create one ProtocolTemplate
     * const ProtocolTemplate = await prisma.protocolTemplate.create({
     *   data: {
     *     // ... data to create a ProtocolTemplate
     *   }
     * })
     * 
     */
    create<T extends ProtocolTemplateCreateArgs>(args: SelectSubset<T, ProtocolTemplateCreateArgs<ExtArgs>>): Prisma__ProtocolTemplateClient<$Result.GetResult<Prisma.$ProtocolTemplatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProtocolTemplates.
     * @param {ProtocolTemplateCreateManyArgs} args - Arguments to create many ProtocolTemplates.
     * @example
     * // Create many ProtocolTemplates
     * const protocolTemplate = await prisma.protocolTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProtocolTemplateCreateManyArgs>(args?: SelectSubset<T, ProtocolTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProtocolTemplates and returns the data saved in the database.
     * @param {ProtocolTemplateCreateManyAndReturnArgs} args - Arguments to create many ProtocolTemplates.
     * @example
     * // Create many ProtocolTemplates
     * const protocolTemplate = await prisma.protocolTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProtocolTemplates and only return the `id`
     * const protocolTemplateWithIdOnly = await prisma.protocolTemplate.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProtocolTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, ProtocolTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProtocolTemplatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProtocolTemplate.
     * @param {ProtocolTemplateDeleteArgs} args - Arguments to delete one ProtocolTemplate.
     * @example
     * // Delete one ProtocolTemplate
     * const ProtocolTemplate = await prisma.protocolTemplate.delete({
     *   where: {
     *     // ... filter to delete one ProtocolTemplate
     *   }
     * })
     * 
     */
    delete<T extends ProtocolTemplateDeleteArgs>(args: SelectSubset<T, ProtocolTemplateDeleteArgs<ExtArgs>>): Prisma__ProtocolTemplateClient<$Result.GetResult<Prisma.$ProtocolTemplatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProtocolTemplate.
     * @param {ProtocolTemplateUpdateArgs} args - Arguments to update one ProtocolTemplate.
     * @example
     * // Update one ProtocolTemplate
     * const protocolTemplate = await prisma.protocolTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProtocolTemplateUpdateArgs>(args: SelectSubset<T, ProtocolTemplateUpdateArgs<ExtArgs>>): Prisma__ProtocolTemplateClient<$Result.GetResult<Prisma.$ProtocolTemplatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProtocolTemplates.
     * @param {ProtocolTemplateDeleteManyArgs} args - Arguments to filter ProtocolTemplates to delete.
     * @example
     * // Delete a few ProtocolTemplates
     * const { count } = await prisma.protocolTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProtocolTemplateDeleteManyArgs>(args?: SelectSubset<T, ProtocolTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProtocolTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocolTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProtocolTemplates
     * const protocolTemplate = await prisma.protocolTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProtocolTemplateUpdateManyArgs>(args: SelectSubset<T, ProtocolTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProtocolTemplate.
     * @param {ProtocolTemplateUpsertArgs} args - Arguments to update or create a ProtocolTemplate.
     * @example
     * // Update or create a ProtocolTemplate
     * const protocolTemplate = await prisma.protocolTemplate.upsert({
     *   create: {
     *     // ... data to create a ProtocolTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProtocolTemplate we want to update
     *   }
     * })
     */
    upsert<T extends ProtocolTemplateUpsertArgs>(args: SelectSubset<T, ProtocolTemplateUpsertArgs<ExtArgs>>): Prisma__ProtocolTemplateClient<$Result.GetResult<Prisma.$ProtocolTemplatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProtocolTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocolTemplateCountArgs} args - Arguments to filter ProtocolTemplates to count.
     * @example
     * // Count the number of ProtocolTemplates
     * const count = await prisma.protocolTemplate.count({
     *   where: {
     *     // ... the filter for the ProtocolTemplates we want to count
     *   }
     * })
    **/
    count<T extends ProtocolTemplateCountArgs>(
      args?: Subset<T, ProtocolTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProtocolTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProtocolTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocolTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProtocolTemplateAggregateArgs>(args: Subset<T, ProtocolTemplateAggregateArgs>): Prisma.PrismaPromise<GetProtocolTemplateAggregateType<T>>

    /**
     * Group by ProtocolTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProtocolTemplateGroupByArgs} args - Group by arguments.
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
      T extends ProtocolTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProtocolTemplateGroupByArgs['orderBy'] }
        : { orderBy?: ProtocolTemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProtocolTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProtocolTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProtocolTemplate model
   */
  readonly fields: ProtocolTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProtocolTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProtocolTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plans<T extends ProtocolTemplate$plansArgs<ExtArgs> = {}>(args?: Subset<T, ProtocolTemplate$plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DayPlanPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the ProtocolTemplate model
   */ 
  interface ProtocolTemplateFieldRefs {
    readonly id: FieldRef<"ProtocolTemplate", 'String'>
    readonly name: FieldRef<"ProtocolTemplate", 'String'>
    readonly description: FieldRef<"ProtocolTemplate", 'String'>
    readonly creatorId: FieldRef<"ProtocolTemplate", 'String'>
    readonly parameters: FieldRef<"ProtocolTemplate", 'Json'>
    readonly isPublic: FieldRef<"ProtocolTemplate", 'Boolean'>
    readonly createdAt: FieldRef<"ProtocolTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"ProtocolTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProtocolTemplate findUnique
   */
  export type ProtocolTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolTemplate
     */
    select?: ProtocolTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ProtocolTemplate to fetch.
     */
    where: ProtocolTemplateWhereUniqueInput
  }

  /**
   * ProtocolTemplate findUniqueOrThrow
   */
  export type ProtocolTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolTemplate
     */
    select?: ProtocolTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ProtocolTemplate to fetch.
     */
    where: ProtocolTemplateWhereUniqueInput
  }

  /**
   * ProtocolTemplate findFirst
   */
  export type ProtocolTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolTemplate
     */
    select?: ProtocolTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ProtocolTemplate to fetch.
     */
    where?: ProtocolTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProtocolTemplates to fetch.
     */
    orderBy?: ProtocolTemplateOrderByWithRelationInput | ProtocolTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProtocolTemplates.
     */
    cursor?: ProtocolTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProtocolTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProtocolTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProtocolTemplates.
     */
    distinct?: ProtocolTemplateScalarFieldEnum | ProtocolTemplateScalarFieldEnum[]
  }

  /**
   * ProtocolTemplate findFirstOrThrow
   */
  export type ProtocolTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolTemplate
     */
    select?: ProtocolTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ProtocolTemplate to fetch.
     */
    where?: ProtocolTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProtocolTemplates to fetch.
     */
    orderBy?: ProtocolTemplateOrderByWithRelationInput | ProtocolTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProtocolTemplates.
     */
    cursor?: ProtocolTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProtocolTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProtocolTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProtocolTemplates.
     */
    distinct?: ProtocolTemplateScalarFieldEnum | ProtocolTemplateScalarFieldEnum[]
  }

  /**
   * ProtocolTemplate findMany
   */
  export type ProtocolTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolTemplate
     */
    select?: ProtocolTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolTemplateInclude<ExtArgs> | null
    /**
     * Filter, which ProtocolTemplates to fetch.
     */
    where?: ProtocolTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProtocolTemplates to fetch.
     */
    orderBy?: ProtocolTemplateOrderByWithRelationInput | ProtocolTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProtocolTemplates.
     */
    cursor?: ProtocolTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProtocolTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProtocolTemplates.
     */
    skip?: number
    distinct?: ProtocolTemplateScalarFieldEnum | ProtocolTemplateScalarFieldEnum[]
  }

  /**
   * ProtocolTemplate create
   */
  export type ProtocolTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolTemplate
     */
    select?: ProtocolTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a ProtocolTemplate.
     */
    data: XOR<ProtocolTemplateCreateInput, ProtocolTemplateUncheckedCreateInput>
  }

  /**
   * ProtocolTemplate createMany
   */
  export type ProtocolTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProtocolTemplates.
     */
    data: ProtocolTemplateCreateManyInput | ProtocolTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProtocolTemplate createManyAndReturn
   */
  export type ProtocolTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolTemplate
     */
    select?: ProtocolTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProtocolTemplates.
     */
    data: ProtocolTemplateCreateManyInput | ProtocolTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProtocolTemplate update
   */
  export type ProtocolTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolTemplate
     */
    select?: ProtocolTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a ProtocolTemplate.
     */
    data: XOR<ProtocolTemplateUpdateInput, ProtocolTemplateUncheckedUpdateInput>
    /**
     * Choose, which ProtocolTemplate to update.
     */
    where: ProtocolTemplateWhereUniqueInput
  }

  /**
   * ProtocolTemplate updateMany
   */
  export type ProtocolTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProtocolTemplates.
     */
    data: XOR<ProtocolTemplateUpdateManyMutationInput, ProtocolTemplateUncheckedUpdateManyInput>
    /**
     * Filter which ProtocolTemplates to update
     */
    where?: ProtocolTemplateWhereInput
  }

  /**
   * ProtocolTemplate upsert
   */
  export type ProtocolTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolTemplate
     */
    select?: ProtocolTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the ProtocolTemplate to update in case it exists.
     */
    where: ProtocolTemplateWhereUniqueInput
    /**
     * In case the ProtocolTemplate found by the `where` argument doesn't exist, create a new ProtocolTemplate with this data.
     */
    create: XOR<ProtocolTemplateCreateInput, ProtocolTemplateUncheckedCreateInput>
    /**
     * In case the ProtocolTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProtocolTemplateUpdateInput, ProtocolTemplateUncheckedUpdateInput>
  }

  /**
   * ProtocolTemplate delete
   */
  export type ProtocolTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolTemplate
     */
    select?: ProtocolTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolTemplateInclude<ExtArgs> | null
    /**
     * Filter which ProtocolTemplate to delete.
     */
    where: ProtocolTemplateWhereUniqueInput
  }

  /**
   * ProtocolTemplate deleteMany
   */
  export type ProtocolTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProtocolTemplates to delete
     */
    where?: ProtocolTemplateWhereInput
  }

  /**
   * ProtocolTemplate.plans
   */
  export type ProtocolTemplate$plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DayPlan
     */
    select?: DayPlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DayPlanInclude<ExtArgs> | null
    where?: DayPlanWhereInput
    orderBy?: DayPlanOrderByWithRelationInput | DayPlanOrderByWithRelationInput[]
    cursor?: DayPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DayPlanScalarFieldEnum | DayPlanScalarFieldEnum[]
  }

  /**
   * ProtocolTemplate without action
   */
  export type ProtocolTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProtocolTemplate
     */
    select?: ProtocolTemplateSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProtocolTemplateInclude<ExtArgs> | null
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


  export const DayPlanScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    planDate: 'planDate',
    shiftId: 'shiftId',
    circadianProfileId: 'circadianProfileId',
    protocolId: 'protocolId',
    planVersion: 'planVersion',
    plan: 'plan',
    generationModel: 'generationModel',
    generationLatencyMs: 'generationLatencyMs',
    generationTokens: 'generationTokens',
    userRating: 'userRating',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DayPlanScalarFieldEnum = (typeof DayPlanScalarFieldEnum)[keyof typeof DayPlanScalarFieldEnum]


  export const ProtocolTemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    creatorId: 'creatorId',
    parameters: 'parameters',
    isPublic: 'isPublic',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProtocolTemplateScalarFieldEnum = (typeof ProtocolTemplateScalarFieldEnum)[keyof typeof ProtocolTemplateScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'PlanStatus'
   */
  export type EnumPlanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanStatus'>
    


  /**
   * Reference to a field of type 'PlanStatus[]'
   */
  export type ListEnumPlanStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type DayPlanWhereInput = {
    AND?: DayPlanWhereInput | DayPlanWhereInput[]
    OR?: DayPlanWhereInput[]
    NOT?: DayPlanWhereInput | DayPlanWhereInput[]
    id?: StringFilter<"DayPlan"> | string
    userId?: StringFilter<"DayPlan"> | string
    planDate?: DateTimeFilter<"DayPlan"> | Date | string
    shiftId?: StringNullableFilter<"DayPlan"> | string | null
    circadianProfileId?: StringNullableFilter<"DayPlan"> | string | null
    protocolId?: StringNullableFilter<"DayPlan"> | string | null
    planVersion?: IntFilter<"DayPlan"> | number
    plan?: JsonFilter<"DayPlan">
    generationModel?: StringFilter<"DayPlan"> | string
    generationLatencyMs?: IntNullableFilter<"DayPlan"> | number | null
    generationTokens?: IntNullableFilter<"DayPlan"> | number | null
    userRating?: IntNullableFilter<"DayPlan"> | number | null
    status?: EnumPlanStatusFilter<"DayPlan"> | $Enums.PlanStatus
    createdAt?: DateTimeFilter<"DayPlan"> | Date | string
    updatedAt?: DateTimeFilter<"DayPlan"> | Date | string
    protocol?: XOR<ProtocolTemplateNullableRelationFilter, ProtocolTemplateWhereInput> | null
  }

  export type DayPlanOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    planDate?: SortOrder
    shiftId?: SortOrderInput | SortOrder
    circadianProfileId?: SortOrderInput | SortOrder
    protocolId?: SortOrderInput | SortOrder
    planVersion?: SortOrder
    plan?: SortOrder
    generationModel?: SortOrder
    generationLatencyMs?: SortOrderInput | SortOrder
    generationTokens?: SortOrderInput | SortOrder
    userRating?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    protocol?: ProtocolTemplateOrderByWithRelationInput
  }

  export type DayPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_planDate_planVersion?: DayPlanUserIdPlanDatePlanVersionCompoundUniqueInput
    AND?: DayPlanWhereInput | DayPlanWhereInput[]
    OR?: DayPlanWhereInput[]
    NOT?: DayPlanWhereInput | DayPlanWhereInput[]
    userId?: StringFilter<"DayPlan"> | string
    planDate?: DateTimeFilter<"DayPlan"> | Date | string
    shiftId?: StringNullableFilter<"DayPlan"> | string | null
    circadianProfileId?: StringNullableFilter<"DayPlan"> | string | null
    protocolId?: StringNullableFilter<"DayPlan"> | string | null
    planVersion?: IntFilter<"DayPlan"> | number
    plan?: JsonFilter<"DayPlan">
    generationModel?: StringFilter<"DayPlan"> | string
    generationLatencyMs?: IntNullableFilter<"DayPlan"> | number | null
    generationTokens?: IntNullableFilter<"DayPlan"> | number | null
    userRating?: IntNullableFilter<"DayPlan"> | number | null
    status?: EnumPlanStatusFilter<"DayPlan"> | $Enums.PlanStatus
    createdAt?: DateTimeFilter<"DayPlan"> | Date | string
    updatedAt?: DateTimeFilter<"DayPlan"> | Date | string
    protocol?: XOR<ProtocolTemplateNullableRelationFilter, ProtocolTemplateWhereInput> | null
  }, "id" | "userId_planDate_planVersion">

  export type DayPlanOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    planDate?: SortOrder
    shiftId?: SortOrderInput | SortOrder
    circadianProfileId?: SortOrderInput | SortOrder
    protocolId?: SortOrderInput | SortOrder
    planVersion?: SortOrder
    plan?: SortOrder
    generationModel?: SortOrder
    generationLatencyMs?: SortOrderInput | SortOrder
    generationTokens?: SortOrderInput | SortOrder
    userRating?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DayPlanCountOrderByAggregateInput
    _avg?: DayPlanAvgOrderByAggregateInput
    _max?: DayPlanMaxOrderByAggregateInput
    _min?: DayPlanMinOrderByAggregateInput
    _sum?: DayPlanSumOrderByAggregateInput
  }

  export type DayPlanScalarWhereWithAggregatesInput = {
    AND?: DayPlanScalarWhereWithAggregatesInput | DayPlanScalarWhereWithAggregatesInput[]
    OR?: DayPlanScalarWhereWithAggregatesInput[]
    NOT?: DayPlanScalarWhereWithAggregatesInput | DayPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DayPlan"> | string
    userId?: StringWithAggregatesFilter<"DayPlan"> | string
    planDate?: DateTimeWithAggregatesFilter<"DayPlan"> | Date | string
    shiftId?: StringNullableWithAggregatesFilter<"DayPlan"> | string | null
    circadianProfileId?: StringNullableWithAggregatesFilter<"DayPlan"> | string | null
    protocolId?: StringNullableWithAggregatesFilter<"DayPlan"> | string | null
    planVersion?: IntWithAggregatesFilter<"DayPlan"> | number
    plan?: JsonWithAggregatesFilter<"DayPlan">
    generationModel?: StringWithAggregatesFilter<"DayPlan"> | string
    generationLatencyMs?: IntNullableWithAggregatesFilter<"DayPlan"> | number | null
    generationTokens?: IntNullableWithAggregatesFilter<"DayPlan"> | number | null
    userRating?: IntNullableWithAggregatesFilter<"DayPlan"> | number | null
    status?: EnumPlanStatusWithAggregatesFilter<"DayPlan"> | $Enums.PlanStatus
    createdAt?: DateTimeWithAggregatesFilter<"DayPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DayPlan"> | Date | string
  }

  export type ProtocolTemplateWhereInput = {
    AND?: ProtocolTemplateWhereInput | ProtocolTemplateWhereInput[]
    OR?: ProtocolTemplateWhereInput[]
    NOT?: ProtocolTemplateWhereInput | ProtocolTemplateWhereInput[]
    id?: StringFilter<"ProtocolTemplate"> | string
    name?: StringFilter<"ProtocolTemplate"> | string
    description?: StringNullableFilter<"ProtocolTemplate"> | string | null
    creatorId?: StringFilter<"ProtocolTemplate"> | string
    parameters?: JsonFilter<"ProtocolTemplate">
    isPublic?: BoolFilter<"ProtocolTemplate"> | boolean
    createdAt?: DateTimeFilter<"ProtocolTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"ProtocolTemplate"> | Date | string
    plans?: DayPlanListRelationFilter
  }

  export type ProtocolTemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    creatorId?: SortOrder
    parameters?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plans?: DayPlanOrderByRelationAggregateInput
  }

  export type ProtocolTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProtocolTemplateWhereInput | ProtocolTemplateWhereInput[]
    OR?: ProtocolTemplateWhereInput[]
    NOT?: ProtocolTemplateWhereInput | ProtocolTemplateWhereInput[]
    name?: StringFilter<"ProtocolTemplate"> | string
    description?: StringNullableFilter<"ProtocolTemplate"> | string | null
    creatorId?: StringFilter<"ProtocolTemplate"> | string
    parameters?: JsonFilter<"ProtocolTemplate">
    isPublic?: BoolFilter<"ProtocolTemplate"> | boolean
    createdAt?: DateTimeFilter<"ProtocolTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"ProtocolTemplate"> | Date | string
    plans?: DayPlanListRelationFilter
  }, "id">

  export type ProtocolTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    creatorId?: SortOrder
    parameters?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProtocolTemplateCountOrderByAggregateInput
    _max?: ProtocolTemplateMaxOrderByAggregateInput
    _min?: ProtocolTemplateMinOrderByAggregateInput
  }

  export type ProtocolTemplateScalarWhereWithAggregatesInput = {
    AND?: ProtocolTemplateScalarWhereWithAggregatesInput | ProtocolTemplateScalarWhereWithAggregatesInput[]
    OR?: ProtocolTemplateScalarWhereWithAggregatesInput[]
    NOT?: ProtocolTemplateScalarWhereWithAggregatesInput | ProtocolTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProtocolTemplate"> | string
    name?: StringWithAggregatesFilter<"ProtocolTemplate"> | string
    description?: StringNullableWithAggregatesFilter<"ProtocolTemplate"> | string | null
    creatorId?: StringWithAggregatesFilter<"ProtocolTemplate"> | string
    parameters?: JsonWithAggregatesFilter<"ProtocolTemplate">
    isPublic?: BoolWithAggregatesFilter<"ProtocolTemplate"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ProtocolTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProtocolTemplate"> | Date | string
  }

  export type DayPlanCreateInput = {
    id?: string
    userId: string
    planDate: Date | string
    shiftId?: string | null
    circadianProfileId?: string | null
    planVersion?: number
    plan: JsonNullValueInput | InputJsonValue
    generationModel: string
    generationLatencyMs?: number | null
    generationTokens?: number | null
    userRating?: number | null
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    protocol?: ProtocolTemplateCreateNestedOneWithoutPlansInput
  }

  export type DayPlanUncheckedCreateInput = {
    id?: string
    userId: string
    planDate: Date | string
    shiftId?: string | null
    circadianProfileId?: string | null
    protocolId?: string | null
    planVersion?: number
    plan: JsonNullValueInput | InputJsonValue
    generationModel: string
    generationLatencyMs?: number | null
    generationTokens?: number | null
    userRating?: number | null
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DayPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftId?: NullableStringFieldUpdateOperationsInput | string | null
    circadianProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    planVersion?: IntFieldUpdateOperationsInput | number
    plan?: JsonNullValueInput | InputJsonValue
    generationModel?: StringFieldUpdateOperationsInput | string
    generationLatencyMs?: NullableIntFieldUpdateOperationsInput | number | null
    generationTokens?: NullableIntFieldUpdateOperationsInput | number | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    protocol?: ProtocolTemplateUpdateOneWithoutPlansNestedInput
  }

  export type DayPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftId?: NullableStringFieldUpdateOperationsInput | string | null
    circadianProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    protocolId?: NullableStringFieldUpdateOperationsInput | string | null
    planVersion?: IntFieldUpdateOperationsInput | number
    plan?: JsonNullValueInput | InputJsonValue
    generationModel?: StringFieldUpdateOperationsInput | string
    generationLatencyMs?: NullableIntFieldUpdateOperationsInput | number | null
    generationTokens?: NullableIntFieldUpdateOperationsInput | number | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayPlanCreateManyInput = {
    id?: string
    userId: string
    planDate: Date | string
    shiftId?: string | null
    circadianProfileId?: string | null
    protocolId?: string | null
    planVersion?: number
    plan: JsonNullValueInput | InputJsonValue
    generationModel: string
    generationLatencyMs?: number | null
    generationTokens?: number | null
    userRating?: number | null
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DayPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftId?: NullableStringFieldUpdateOperationsInput | string | null
    circadianProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    planVersion?: IntFieldUpdateOperationsInput | number
    plan?: JsonNullValueInput | InputJsonValue
    generationModel?: StringFieldUpdateOperationsInput | string
    generationLatencyMs?: NullableIntFieldUpdateOperationsInput | number | null
    generationTokens?: NullableIntFieldUpdateOperationsInput | number | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftId?: NullableStringFieldUpdateOperationsInput | string | null
    circadianProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    protocolId?: NullableStringFieldUpdateOperationsInput | string | null
    planVersion?: IntFieldUpdateOperationsInput | number
    plan?: JsonNullValueInput | InputJsonValue
    generationModel?: StringFieldUpdateOperationsInput | string
    generationLatencyMs?: NullableIntFieldUpdateOperationsInput | number | null
    generationTokens?: NullableIntFieldUpdateOperationsInput | number | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProtocolTemplateCreateInput = {
    id?: string
    name: string
    description?: string | null
    creatorId: string
    parameters: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    plans?: DayPlanCreateNestedManyWithoutProtocolInput
  }

  export type ProtocolTemplateUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    creatorId: string
    parameters: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    plans?: DayPlanUncheckedCreateNestedManyWithoutProtocolInput
  }

  export type ProtocolTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plans?: DayPlanUpdateManyWithoutProtocolNestedInput
  }

  export type ProtocolTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plans?: DayPlanUncheckedUpdateManyWithoutProtocolNestedInput
  }

  export type ProtocolTemplateCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    creatorId: string
    parameters: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProtocolTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProtocolTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumPlanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusFilter<$PrismaModel> | $Enums.PlanStatus
  }

  export type ProtocolTemplateNullableRelationFilter = {
    is?: ProtocolTemplateWhereInput | null
    isNot?: ProtocolTemplateWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DayPlanUserIdPlanDatePlanVersionCompoundUniqueInput = {
    userId: string
    planDate: Date | string
    planVersion: number
  }

  export type DayPlanCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planDate?: SortOrder
    shiftId?: SortOrder
    circadianProfileId?: SortOrder
    protocolId?: SortOrder
    planVersion?: SortOrder
    plan?: SortOrder
    generationModel?: SortOrder
    generationLatencyMs?: SortOrder
    generationTokens?: SortOrder
    userRating?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DayPlanAvgOrderByAggregateInput = {
    planVersion?: SortOrder
    generationLatencyMs?: SortOrder
    generationTokens?: SortOrder
    userRating?: SortOrder
  }

  export type DayPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planDate?: SortOrder
    shiftId?: SortOrder
    circadianProfileId?: SortOrder
    protocolId?: SortOrder
    planVersion?: SortOrder
    generationModel?: SortOrder
    generationLatencyMs?: SortOrder
    generationTokens?: SortOrder
    userRating?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DayPlanMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planDate?: SortOrder
    shiftId?: SortOrder
    circadianProfileId?: SortOrder
    protocolId?: SortOrder
    planVersion?: SortOrder
    generationModel?: SortOrder
    generationLatencyMs?: SortOrder
    generationTokens?: SortOrder
    userRating?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DayPlanSumOrderByAggregateInput = {
    planVersion?: SortOrder
    generationLatencyMs?: SortOrder
    generationTokens?: SortOrder
    userRating?: SortOrder
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

  export type EnumPlanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanStatusFilter<$PrismaModel>
    _max?: NestedEnumPlanStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DayPlanListRelationFilter = {
    every?: DayPlanWhereInput
    some?: DayPlanWhereInput
    none?: DayPlanWhereInput
  }

  export type DayPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProtocolTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    creatorId?: SortOrder
    parameters?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProtocolTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    creatorId?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProtocolTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    creatorId?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProtocolTemplateCreateNestedOneWithoutPlansInput = {
    create?: XOR<ProtocolTemplateCreateWithoutPlansInput, ProtocolTemplateUncheckedCreateWithoutPlansInput>
    connectOrCreate?: ProtocolTemplateCreateOrConnectWithoutPlansInput
    connect?: ProtocolTemplateWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPlanStatusFieldUpdateOperationsInput = {
    set?: $Enums.PlanStatus
  }

  export type ProtocolTemplateUpdateOneWithoutPlansNestedInput = {
    create?: XOR<ProtocolTemplateCreateWithoutPlansInput, ProtocolTemplateUncheckedCreateWithoutPlansInput>
    connectOrCreate?: ProtocolTemplateCreateOrConnectWithoutPlansInput
    upsert?: ProtocolTemplateUpsertWithoutPlansInput
    disconnect?: ProtocolTemplateWhereInput | boolean
    delete?: ProtocolTemplateWhereInput | boolean
    connect?: ProtocolTemplateWhereUniqueInput
    update?: XOR<XOR<ProtocolTemplateUpdateToOneWithWhereWithoutPlansInput, ProtocolTemplateUpdateWithoutPlansInput>, ProtocolTemplateUncheckedUpdateWithoutPlansInput>
  }

  export type DayPlanCreateNestedManyWithoutProtocolInput = {
    create?: XOR<DayPlanCreateWithoutProtocolInput, DayPlanUncheckedCreateWithoutProtocolInput> | DayPlanCreateWithoutProtocolInput[] | DayPlanUncheckedCreateWithoutProtocolInput[]
    connectOrCreate?: DayPlanCreateOrConnectWithoutProtocolInput | DayPlanCreateOrConnectWithoutProtocolInput[]
    createMany?: DayPlanCreateManyProtocolInputEnvelope
    connect?: DayPlanWhereUniqueInput | DayPlanWhereUniqueInput[]
  }

  export type DayPlanUncheckedCreateNestedManyWithoutProtocolInput = {
    create?: XOR<DayPlanCreateWithoutProtocolInput, DayPlanUncheckedCreateWithoutProtocolInput> | DayPlanCreateWithoutProtocolInput[] | DayPlanUncheckedCreateWithoutProtocolInput[]
    connectOrCreate?: DayPlanCreateOrConnectWithoutProtocolInput | DayPlanCreateOrConnectWithoutProtocolInput[]
    createMany?: DayPlanCreateManyProtocolInputEnvelope
    connect?: DayPlanWhereUniqueInput | DayPlanWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DayPlanUpdateManyWithoutProtocolNestedInput = {
    create?: XOR<DayPlanCreateWithoutProtocolInput, DayPlanUncheckedCreateWithoutProtocolInput> | DayPlanCreateWithoutProtocolInput[] | DayPlanUncheckedCreateWithoutProtocolInput[]
    connectOrCreate?: DayPlanCreateOrConnectWithoutProtocolInput | DayPlanCreateOrConnectWithoutProtocolInput[]
    upsert?: DayPlanUpsertWithWhereUniqueWithoutProtocolInput | DayPlanUpsertWithWhereUniqueWithoutProtocolInput[]
    createMany?: DayPlanCreateManyProtocolInputEnvelope
    set?: DayPlanWhereUniqueInput | DayPlanWhereUniqueInput[]
    disconnect?: DayPlanWhereUniqueInput | DayPlanWhereUniqueInput[]
    delete?: DayPlanWhereUniqueInput | DayPlanWhereUniqueInput[]
    connect?: DayPlanWhereUniqueInput | DayPlanWhereUniqueInput[]
    update?: DayPlanUpdateWithWhereUniqueWithoutProtocolInput | DayPlanUpdateWithWhereUniqueWithoutProtocolInput[]
    updateMany?: DayPlanUpdateManyWithWhereWithoutProtocolInput | DayPlanUpdateManyWithWhereWithoutProtocolInput[]
    deleteMany?: DayPlanScalarWhereInput | DayPlanScalarWhereInput[]
  }

  export type DayPlanUncheckedUpdateManyWithoutProtocolNestedInput = {
    create?: XOR<DayPlanCreateWithoutProtocolInput, DayPlanUncheckedCreateWithoutProtocolInput> | DayPlanCreateWithoutProtocolInput[] | DayPlanUncheckedCreateWithoutProtocolInput[]
    connectOrCreate?: DayPlanCreateOrConnectWithoutProtocolInput | DayPlanCreateOrConnectWithoutProtocolInput[]
    upsert?: DayPlanUpsertWithWhereUniqueWithoutProtocolInput | DayPlanUpsertWithWhereUniqueWithoutProtocolInput[]
    createMany?: DayPlanCreateManyProtocolInputEnvelope
    set?: DayPlanWhereUniqueInput | DayPlanWhereUniqueInput[]
    disconnect?: DayPlanWhereUniqueInput | DayPlanWhereUniqueInput[]
    delete?: DayPlanWhereUniqueInput | DayPlanWhereUniqueInput[]
    connect?: DayPlanWhereUniqueInput | DayPlanWhereUniqueInput[]
    update?: DayPlanUpdateWithWhereUniqueWithoutProtocolInput | DayPlanUpdateWithWhereUniqueWithoutProtocolInput[]
    updateMany?: DayPlanUpdateManyWithWhereWithoutProtocolInput | DayPlanUpdateManyWithWhereWithoutProtocolInput[]
    deleteMany?: DayPlanScalarWhereInput | DayPlanScalarWhereInput[]
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

  export type NestedEnumPlanStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusFilter<$PrismaModel> | $Enums.PlanStatus
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

  export type NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanStatus | EnumPlanStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanStatus[] | ListEnumPlanStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanStatusWithAggregatesFilter<$PrismaModel> | $Enums.PlanStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanStatusFilter<$PrismaModel>
    _max?: NestedEnumPlanStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProtocolTemplateCreateWithoutPlansInput = {
    id?: string
    name: string
    description?: string | null
    creatorId: string
    parameters: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProtocolTemplateUncheckedCreateWithoutPlansInput = {
    id?: string
    name: string
    description?: string | null
    creatorId: string
    parameters: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProtocolTemplateCreateOrConnectWithoutPlansInput = {
    where: ProtocolTemplateWhereUniqueInput
    create: XOR<ProtocolTemplateCreateWithoutPlansInput, ProtocolTemplateUncheckedCreateWithoutPlansInput>
  }

  export type ProtocolTemplateUpsertWithoutPlansInput = {
    update: XOR<ProtocolTemplateUpdateWithoutPlansInput, ProtocolTemplateUncheckedUpdateWithoutPlansInput>
    create: XOR<ProtocolTemplateCreateWithoutPlansInput, ProtocolTemplateUncheckedCreateWithoutPlansInput>
    where?: ProtocolTemplateWhereInput
  }

  export type ProtocolTemplateUpdateToOneWithWhereWithoutPlansInput = {
    where?: ProtocolTemplateWhereInput
    data: XOR<ProtocolTemplateUpdateWithoutPlansInput, ProtocolTemplateUncheckedUpdateWithoutPlansInput>
  }

  export type ProtocolTemplateUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProtocolTemplateUncheckedUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: StringFieldUpdateOperationsInput | string
    parameters?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayPlanCreateWithoutProtocolInput = {
    id?: string
    userId: string
    planDate: Date | string
    shiftId?: string | null
    circadianProfileId?: string | null
    planVersion?: number
    plan: JsonNullValueInput | InputJsonValue
    generationModel: string
    generationLatencyMs?: number | null
    generationTokens?: number | null
    userRating?: number | null
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DayPlanUncheckedCreateWithoutProtocolInput = {
    id?: string
    userId: string
    planDate: Date | string
    shiftId?: string | null
    circadianProfileId?: string | null
    planVersion?: number
    plan: JsonNullValueInput | InputJsonValue
    generationModel: string
    generationLatencyMs?: number | null
    generationTokens?: number | null
    userRating?: number | null
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DayPlanCreateOrConnectWithoutProtocolInput = {
    where: DayPlanWhereUniqueInput
    create: XOR<DayPlanCreateWithoutProtocolInput, DayPlanUncheckedCreateWithoutProtocolInput>
  }

  export type DayPlanCreateManyProtocolInputEnvelope = {
    data: DayPlanCreateManyProtocolInput | DayPlanCreateManyProtocolInput[]
    skipDuplicates?: boolean
  }

  export type DayPlanUpsertWithWhereUniqueWithoutProtocolInput = {
    where: DayPlanWhereUniqueInput
    update: XOR<DayPlanUpdateWithoutProtocolInput, DayPlanUncheckedUpdateWithoutProtocolInput>
    create: XOR<DayPlanCreateWithoutProtocolInput, DayPlanUncheckedCreateWithoutProtocolInput>
  }

  export type DayPlanUpdateWithWhereUniqueWithoutProtocolInput = {
    where: DayPlanWhereUniqueInput
    data: XOR<DayPlanUpdateWithoutProtocolInput, DayPlanUncheckedUpdateWithoutProtocolInput>
  }

  export type DayPlanUpdateManyWithWhereWithoutProtocolInput = {
    where: DayPlanScalarWhereInput
    data: XOR<DayPlanUpdateManyMutationInput, DayPlanUncheckedUpdateManyWithoutProtocolInput>
  }

  export type DayPlanScalarWhereInput = {
    AND?: DayPlanScalarWhereInput | DayPlanScalarWhereInput[]
    OR?: DayPlanScalarWhereInput[]
    NOT?: DayPlanScalarWhereInput | DayPlanScalarWhereInput[]
    id?: StringFilter<"DayPlan"> | string
    userId?: StringFilter<"DayPlan"> | string
    planDate?: DateTimeFilter<"DayPlan"> | Date | string
    shiftId?: StringNullableFilter<"DayPlan"> | string | null
    circadianProfileId?: StringNullableFilter<"DayPlan"> | string | null
    protocolId?: StringNullableFilter<"DayPlan"> | string | null
    planVersion?: IntFilter<"DayPlan"> | number
    plan?: JsonFilter<"DayPlan">
    generationModel?: StringFilter<"DayPlan"> | string
    generationLatencyMs?: IntNullableFilter<"DayPlan"> | number | null
    generationTokens?: IntNullableFilter<"DayPlan"> | number | null
    userRating?: IntNullableFilter<"DayPlan"> | number | null
    status?: EnumPlanStatusFilter<"DayPlan"> | $Enums.PlanStatus
    createdAt?: DateTimeFilter<"DayPlan"> | Date | string
    updatedAt?: DateTimeFilter<"DayPlan"> | Date | string
  }

  export type DayPlanCreateManyProtocolInput = {
    id?: string
    userId: string
    planDate: Date | string
    shiftId?: string | null
    circadianProfileId?: string | null
    planVersion?: number
    plan: JsonNullValueInput | InputJsonValue
    generationModel: string
    generationLatencyMs?: number | null
    generationTokens?: number | null
    userRating?: number | null
    status?: $Enums.PlanStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DayPlanUpdateWithoutProtocolInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftId?: NullableStringFieldUpdateOperationsInput | string | null
    circadianProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    planVersion?: IntFieldUpdateOperationsInput | number
    plan?: JsonNullValueInput | InputJsonValue
    generationModel?: StringFieldUpdateOperationsInput | string
    generationLatencyMs?: NullableIntFieldUpdateOperationsInput | number | null
    generationTokens?: NullableIntFieldUpdateOperationsInput | number | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayPlanUncheckedUpdateWithoutProtocolInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftId?: NullableStringFieldUpdateOperationsInput | string | null
    circadianProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    planVersion?: IntFieldUpdateOperationsInput | number
    plan?: JsonNullValueInput | InputJsonValue
    generationModel?: StringFieldUpdateOperationsInput | string
    generationLatencyMs?: NullableIntFieldUpdateOperationsInput | number | null
    generationTokens?: NullableIntFieldUpdateOperationsInput | number | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DayPlanUncheckedUpdateManyWithoutProtocolInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planDate?: DateTimeFieldUpdateOperationsInput | Date | string
    shiftId?: NullableStringFieldUpdateOperationsInput | string | null
    circadianProfileId?: NullableStringFieldUpdateOperationsInput | string | null
    planVersion?: IntFieldUpdateOperationsInput | number
    plan?: JsonNullValueInput | InputJsonValue
    generationModel?: StringFieldUpdateOperationsInput | string
    generationLatencyMs?: NullableIntFieldUpdateOperationsInput | number | null
    generationTokens?: NullableIntFieldUpdateOperationsInput | number | null
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPlanStatusFieldUpdateOperationsInput | $Enums.PlanStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ProtocolTemplateCountOutputTypeDefaultArgs instead
     */
    export type ProtocolTemplateCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProtocolTemplateCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DayPlanDefaultArgs instead
     */
    export type DayPlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DayPlanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProtocolTemplateDefaultArgs instead
     */
    export type ProtocolTemplateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProtocolTemplateDefaultArgs<ExtArgs>

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