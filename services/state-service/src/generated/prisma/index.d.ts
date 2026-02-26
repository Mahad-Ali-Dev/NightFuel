
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
 * Model UserState
 * 
 */
export type UserState = $Result.DefaultSelection<Prisma.$UserStatePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UserStates
 * const userStates = await prisma.userState.findMany()
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
   * // Fetch zero or more UserStates
   * const userStates = await prisma.userState.findMany()
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
   * `prisma.userState`: Exposes CRUD operations for the **UserState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserStates
    * const userStates = await prisma.userState.findMany()
    * ```
    */
  get userState(): Prisma.UserStateDelegate<ExtArgs>;
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
    UserState: 'UserState'
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
      modelProps: "userState"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UserState: {
        payload: Prisma.$UserStatePayload<ExtArgs>
        fields: Prisma.UserStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatePayload>
          }
          findFirst: {
            args: Prisma.UserStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatePayload>
          }
          findMany: {
            args: Prisma.UserStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatePayload>[]
          }
          create: {
            args: Prisma.UserStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatePayload>
          }
          createMany: {
            args: Prisma.UserStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatePayload>[]
          }
          delete: {
            args: Prisma.UserStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatePayload>
          }
          update: {
            args: Prisma.UserStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatePayload>
          }
          deleteMany: {
            args: Prisma.UserStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStatePayload>
          }
          aggregate: {
            args: Prisma.UserStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserState>
          }
          groupBy: {
            args: Prisma.UserStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserStateCountArgs<ExtArgs>
            result: $Utils.Optional<UserStateCountAggregateOutputType> | number
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
   * Model UserState
   */

  export type AggregateUserState = {
    _count: UserStateCountAggregateOutputType | null
    _avg: UserStateAvgAggregateOutputType | null
    _sum: UserStateSumAggregateOutputType | null
    _min: UserStateMinAggregateOutputType | null
    _max: UserStateMaxAggregateOutputType | null
  }

  export type UserStateAvgAggregateOutputType = {
    last7DaysAdherence: number | null
    avgSleepQuality: number | null
    fatigueLevel: number | null
    currentWeightKg: number | null
    targetWeightKg: number | null
    currentCalorieTarget: number | null
    currentProteinTargetG: number | null
    cycleWeek: number | null
  }

  export type UserStateSumAggregateOutputType = {
    last7DaysAdherence: number | null
    avgSleepQuality: number | null
    fatigueLevel: number | null
    currentWeightKg: number | null
    targetWeightKg: number | null
    currentCalorieTarget: number | null
    currentProteinTargetG: number | null
    cycleWeek: number | null
  }

  export type UserStateMinAggregateOutputType = {
    id: string | null
    userId: string | null
    last7DaysAdherence: number | null
    avgSleepQuality: number | null
    fatigueLevel: number | null
    currentWeightKg: number | null
    targetWeightKg: number | null
    currentCalorieTarget: number | null
    currentProteinTargetG: number | null
    trainingPhase: string | null
    cycleWeek: number | null
    lastEventId: string | null
    lastProcessedAt: Date | null
    updatedAt: Date | null
  }

  export type UserStateMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    last7DaysAdherence: number | null
    avgSleepQuality: number | null
    fatigueLevel: number | null
    currentWeightKg: number | null
    targetWeightKg: number | null
    currentCalorieTarget: number | null
    currentProteinTargetG: number | null
    trainingPhase: string | null
    cycleWeek: number | null
    lastEventId: string | null
    lastProcessedAt: Date | null
    updatedAt: Date | null
  }

  export type UserStateCountAggregateOutputType = {
    id: number
    userId: number
    last7DaysAdherence: number
    avgSleepQuality: number
    fatigueLevel: number
    currentWeightKg: number
    targetWeightKg: number
    currentCalorieTarget: number
    currentProteinTargetG: number
    trainingPhase: number
    cycleWeek: number
    lastEventId: number
    lastProcessedAt: number
    updatedAt: number
    _all: number
  }


  export type UserStateAvgAggregateInputType = {
    last7DaysAdherence?: true
    avgSleepQuality?: true
    fatigueLevel?: true
    currentWeightKg?: true
    targetWeightKg?: true
    currentCalorieTarget?: true
    currentProteinTargetG?: true
    cycleWeek?: true
  }

  export type UserStateSumAggregateInputType = {
    last7DaysAdherence?: true
    avgSleepQuality?: true
    fatigueLevel?: true
    currentWeightKg?: true
    targetWeightKg?: true
    currentCalorieTarget?: true
    currentProteinTargetG?: true
    cycleWeek?: true
  }

  export type UserStateMinAggregateInputType = {
    id?: true
    userId?: true
    last7DaysAdherence?: true
    avgSleepQuality?: true
    fatigueLevel?: true
    currentWeightKg?: true
    targetWeightKg?: true
    currentCalorieTarget?: true
    currentProteinTargetG?: true
    trainingPhase?: true
    cycleWeek?: true
    lastEventId?: true
    lastProcessedAt?: true
    updatedAt?: true
  }

  export type UserStateMaxAggregateInputType = {
    id?: true
    userId?: true
    last7DaysAdherence?: true
    avgSleepQuality?: true
    fatigueLevel?: true
    currentWeightKg?: true
    targetWeightKg?: true
    currentCalorieTarget?: true
    currentProteinTargetG?: true
    trainingPhase?: true
    cycleWeek?: true
    lastEventId?: true
    lastProcessedAt?: true
    updatedAt?: true
  }

  export type UserStateCountAggregateInputType = {
    id?: true
    userId?: true
    last7DaysAdherence?: true
    avgSleepQuality?: true
    fatigueLevel?: true
    currentWeightKg?: true
    targetWeightKg?: true
    currentCalorieTarget?: true
    currentProteinTargetG?: true
    trainingPhase?: true
    cycleWeek?: true
    lastEventId?: true
    lastProcessedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserState to aggregate.
     */
    where?: UserStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStates to fetch.
     */
    orderBy?: UserStateOrderByWithRelationInput | UserStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserStates
    **/
    _count?: true | UserStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserStateMaxAggregateInputType
  }

  export type GetUserStateAggregateType<T extends UserStateAggregateArgs> = {
        [P in keyof T & keyof AggregateUserState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserState[P]>
      : GetScalarType<T[P], AggregateUserState[P]>
  }




  export type UserStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStateWhereInput
    orderBy?: UserStateOrderByWithAggregationInput | UserStateOrderByWithAggregationInput[]
    by: UserStateScalarFieldEnum[] | UserStateScalarFieldEnum
    having?: UserStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserStateCountAggregateInputType | true
    _avg?: UserStateAvgAggregateInputType
    _sum?: UserStateSumAggregateInputType
    _min?: UserStateMinAggregateInputType
    _max?: UserStateMaxAggregateInputType
  }

  export type UserStateGroupByOutputType = {
    id: string
    userId: string
    last7DaysAdherence: number
    avgSleepQuality: number
    fatigueLevel: number
    currentWeightKg: number | null
    targetWeightKg: number | null
    currentCalorieTarget: number | null
    currentProteinTargetG: number | null
    trainingPhase: string
    cycleWeek: number
    lastEventId: string | null
    lastProcessedAt: Date
    updatedAt: Date
    _count: UserStateCountAggregateOutputType | null
    _avg: UserStateAvgAggregateOutputType | null
    _sum: UserStateSumAggregateOutputType | null
    _min: UserStateMinAggregateOutputType | null
    _max: UserStateMaxAggregateOutputType | null
  }

  type GetUserStateGroupByPayload<T extends UserStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserStateGroupByOutputType[P]>
            : GetScalarType<T[P], UserStateGroupByOutputType[P]>
        }
      >
    >


  export type UserStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    last7DaysAdherence?: boolean
    avgSleepQuality?: boolean
    fatigueLevel?: boolean
    currentWeightKg?: boolean
    targetWeightKg?: boolean
    currentCalorieTarget?: boolean
    currentProteinTargetG?: boolean
    trainingPhase?: boolean
    cycleWeek?: boolean
    lastEventId?: boolean
    lastProcessedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userState"]>

  export type UserStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    last7DaysAdherence?: boolean
    avgSleepQuality?: boolean
    fatigueLevel?: boolean
    currentWeightKg?: boolean
    targetWeightKg?: boolean
    currentCalorieTarget?: boolean
    currentProteinTargetG?: boolean
    trainingPhase?: boolean
    cycleWeek?: boolean
    lastEventId?: boolean
    lastProcessedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userState"]>

  export type UserStateSelectScalar = {
    id?: boolean
    userId?: boolean
    last7DaysAdherence?: boolean
    avgSleepQuality?: boolean
    fatigueLevel?: boolean
    currentWeightKg?: boolean
    targetWeightKg?: boolean
    currentCalorieTarget?: boolean
    currentProteinTargetG?: boolean
    trainingPhase?: boolean
    cycleWeek?: boolean
    lastEventId?: boolean
    lastProcessedAt?: boolean
    updatedAt?: boolean
  }


  export type $UserStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserState"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      last7DaysAdherence: number
      avgSleepQuality: number
      fatigueLevel: number
      currentWeightKg: number | null
      targetWeightKg: number | null
      currentCalorieTarget: number | null
      currentProteinTargetG: number | null
      trainingPhase: string
      cycleWeek: number
      lastEventId: string | null
      lastProcessedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userState"]>
    composites: {}
  }

  type UserStateGetPayload<S extends boolean | null | undefined | UserStateDefaultArgs> = $Result.GetResult<Prisma.$UserStatePayload, S>

  type UserStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserStateFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserStateCountAggregateInputType | true
    }

  export interface UserStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserState'], meta: { name: 'UserState' } }
    /**
     * Find zero or one UserState that matches the filter.
     * @param {UserStateFindUniqueArgs} args - Arguments to find a UserState
     * @example
     * // Get one UserState
     * const userState = await prisma.userState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserStateFindUniqueArgs>(args: SelectSubset<T, UserStateFindUniqueArgs<ExtArgs>>): Prisma__UserStateClient<$Result.GetResult<Prisma.$UserStatePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserState that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserStateFindUniqueOrThrowArgs} args - Arguments to find a UserState
     * @example
     * // Get one UserState
     * const userState = await prisma.userState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserStateFindUniqueOrThrowArgs>(args: SelectSubset<T, UserStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserStateClient<$Result.GetResult<Prisma.$UserStatePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStateFindFirstArgs} args - Arguments to find a UserState
     * @example
     * // Get one UserState
     * const userState = await prisma.userState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserStateFindFirstArgs>(args?: SelectSubset<T, UserStateFindFirstArgs<ExtArgs>>): Prisma__UserStateClient<$Result.GetResult<Prisma.$UserStatePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStateFindFirstOrThrowArgs} args - Arguments to find a UserState
     * @example
     * // Get one UserState
     * const userState = await prisma.userState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserStateFindFirstOrThrowArgs>(args?: SelectSubset<T, UserStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserStateClient<$Result.GetResult<Prisma.$UserStatePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserStates
     * const userStates = await prisma.userState.findMany()
     * 
     * // Get first 10 UserStates
     * const userStates = await prisma.userState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userStateWithIdOnly = await prisma.userState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserStateFindManyArgs>(args?: SelectSubset<T, UserStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserState.
     * @param {UserStateCreateArgs} args - Arguments to create a UserState.
     * @example
     * // Create one UserState
     * const UserState = await prisma.userState.create({
     *   data: {
     *     // ... data to create a UserState
     *   }
     * })
     * 
     */
    create<T extends UserStateCreateArgs>(args: SelectSubset<T, UserStateCreateArgs<ExtArgs>>): Prisma__UserStateClient<$Result.GetResult<Prisma.$UserStatePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserStates.
     * @param {UserStateCreateManyArgs} args - Arguments to create many UserStates.
     * @example
     * // Create many UserStates
     * const userState = await prisma.userState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserStateCreateManyArgs>(args?: SelectSubset<T, UserStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserStates and returns the data saved in the database.
     * @param {UserStateCreateManyAndReturnArgs} args - Arguments to create many UserStates.
     * @example
     * // Create many UserStates
     * const userState = await prisma.userState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserStates and only return the `id`
     * const userStateWithIdOnly = await prisma.userState.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserStateCreateManyAndReturnArgs>(args?: SelectSubset<T, UserStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStatePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserState.
     * @param {UserStateDeleteArgs} args - Arguments to delete one UserState.
     * @example
     * // Delete one UserState
     * const UserState = await prisma.userState.delete({
     *   where: {
     *     // ... filter to delete one UserState
     *   }
     * })
     * 
     */
    delete<T extends UserStateDeleteArgs>(args: SelectSubset<T, UserStateDeleteArgs<ExtArgs>>): Prisma__UserStateClient<$Result.GetResult<Prisma.$UserStatePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserState.
     * @param {UserStateUpdateArgs} args - Arguments to update one UserState.
     * @example
     * // Update one UserState
     * const userState = await prisma.userState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserStateUpdateArgs>(args: SelectSubset<T, UserStateUpdateArgs<ExtArgs>>): Prisma__UserStateClient<$Result.GetResult<Prisma.$UserStatePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserStates.
     * @param {UserStateDeleteManyArgs} args - Arguments to filter UserStates to delete.
     * @example
     * // Delete a few UserStates
     * const { count } = await prisma.userState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserStateDeleteManyArgs>(args?: SelectSubset<T, UserStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserStates
     * const userState = await prisma.userState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserStateUpdateManyArgs>(args: SelectSubset<T, UserStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserState.
     * @param {UserStateUpsertArgs} args - Arguments to update or create a UserState.
     * @example
     * // Update or create a UserState
     * const userState = await prisma.userState.upsert({
     *   create: {
     *     // ... data to create a UserState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserState we want to update
     *   }
     * })
     */
    upsert<T extends UserStateUpsertArgs>(args: SelectSubset<T, UserStateUpsertArgs<ExtArgs>>): Prisma__UserStateClient<$Result.GetResult<Prisma.$UserStatePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStateCountArgs} args - Arguments to filter UserStates to count.
     * @example
     * // Count the number of UserStates
     * const count = await prisma.userState.count({
     *   where: {
     *     // ... the filter for the UserStates we want to count
     *   }
     * })
    **/
    count<T extends UserStateCountArgs>(
      args?: Subset<T, UserStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserStateAggregateArgs>(args: Subset<T, UserStateAggregateArgs>): Prisma.PrismaPromise<GetUserStateAggregateType<T>>

    /**
     * Group by UserState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStateGroupByArgs} args - Group by arguments.
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
      T extends UserStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserStateGroupByArgs['orderBy'] }
        : { orderBy?: UserStateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserState model
   */
  readonly fields: UserStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserState model
   */ 
  interface UserStateFieldRefs {
    readonly id: FieldRef<"UserState", 'String'>
    readonly userId: FieldRef<"UserState", 'String'>
    readonly last7DaysAdherence: FieldRef<"UserState", 'Float'>
    readonly avgSleepQuality: FieldRef<"UserState", 'Float'>
    readonly fatigueLevel: FieldRef<"UserState", 'Float'>
    readonly currentWeightKg: FieldRef<"UserState", 'Float'>
    readonly targetWeightKg: FieldRef<"UserState", 'Float'>
    readonly currentCalorieTarget: FieldRef<"UserState", 'Float'>
    readonly currentProteinTargetG: FieldRef<"UserState", 'Float'>
    readonly trainingPhase: FieldRef<"UserState", 'String'>
    readonly cycleWeek: FieldRef<"UserState", 'Int'>
    readonly lastEventId: FieldRef<"UserState", 'String'>
    readonly lastProcessedAt: FieldRef<"UserState", 'DateTime'>
    readonly updatedAt: FieldRef<"UserState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserState findUnique
   */
  export type UserStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserState
     */
    select?: UserStateSelect<ExtArgs> | null
    /**
     * Filter, which UserState to fetch.
     */
    where: UserStateWhereUniqueInput
  }

  /**
   * UserState findUniqueOrThrow
   */
  export type UserStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserState
     */
    select?: UserStateSelect<ExtArgs> | null
    /**
     * Filter, which UserState to fetch.
     */
    where: UserStateWhereUniqueInput
  }

  /**
   * UserState findFirst
   */
  export type UserStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserState
     */
    select?: UserStateSelect<ExtArgs> | null
    /**
     * Filter, which UserState to fetch.
     */
    where?: UserStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStates to fetch.
     */
    orderBy?: UserStateOrderByWithRelationInput | UserStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStates.
     */
    cursor?: UserStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStates.
     */
    distinct?: UserStateScalarFieldEnum | UserStateScalarFieldEnum[]
  }

  /**
   * UserState findFirstOrThrow
   */
  export type UserStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserState
     */
    select?: UserStateSelect<ExtArgs> | null
    /**
     * Filter, which UserState to fetch.
     */
    where?: UserStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStates to fetch.
     */
    orderBy?: UserStateOrderByWithRelationInput | UserStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStates.
     */
    cursor?: UserStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStates.
     */
    distinct?: UserStateScalarFieldEnum | UserStateScalarFieldEnum[]
  }

  /**
   * UserState findMany
   */
  export type UserStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserState
     */
    select?: UserStateSelect<ExtArgs> | null
    /**
     * Filter, which UserStates to fetch.
     */
    where?: UserStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStates to fetch.
     */
    orderBy?: UserStateOrderByWithRelationInput | UserStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserStates.
     */
    cursor?: UserStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStates.
     */
    skip?: number
    distinct?: UserStateScalarFieldEnum | UserStateScalarFieldEnum[]
  }

  /**
   * UserState create
   */
  export type UserStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserState
     */
    select?: UserStateSelect<ExtArgs> | null
    /**
     * The data needed to create a UserState.
     */
    data: XOR<UserStateCreateInput, UserStateUncheckedCreateInput>
  }

  /**
   * UserState createMany
   */
  export type UserStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserStates.
     */
    data: UserStateCreateManyInput | UserStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserState createManyAndReturn
   */
  export type UserStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserState
     */
    select?: UserStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserStates.
     */
    data: UserStateCreateManyInput | UserStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserState update
   */
  export type UserStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserState
     */
    select?: UserStateSelect<ExtArgs> | null
    /**
     * The data needed to update a UserState.
     */
    data: XOR<UserStateUpdateInput, UserStateUncheckedUpdateInput>
    /**
     * Choose, which UserState to update.
     */
    where: UserStateWhereUniqueInput
  }

  /**
   * UserState updateMany
   */
  export type UserStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserStates.
     */
    data: XOR<UserStateUpdateManyMutationInput, UserStateUncheckedUpdateManyInput>
    /**
     * Filter which UserStates to update
     */
    where?: UserStateWhereInput
  }

  /**
   * UserState upsert
   */
  export type UserStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserState
     */
    select?: UserStateSelect<ExtArgs> | null
    /**
     * The filter to search for the UserState to update in case it exists.
     */
    where: UserStateWhereUniqueInput
    /**
     * In case the UserState found by the `where` argument doesn't exist, create a new UserState with this data.
     */
    create: XOR<UserStateCreateInput, UserStateUncheckedCreateInput>
    /**
     * In case the UserState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserStateUpdateInput, UserStateUncheckedUpdateInput>
  }

  /**
   * UserState delete
   */
  export type UserStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserState
     */
    select?: UserStateSelect<ExtArgs> | null
    /**
     * Filter which UserState to delete.
     */
    where: UserStateWhereUniqueInput
  }

  /**
   * UserState deleteMany
   */
  export type UserStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStates to delete
     */
    where?: UserStateWhereInput
  }

  /**
   * UserState without action
   */
  export type UserStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserState
     */
    select?: UserStateSelect<ExtArgs> | null
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


  export const UserStateScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    last7DaysAdherence: 'last7DaysAdherence',
    avgSleepQuality: 'avgSleepQuality',
    fatigueLevel: 'fatigueLevel',
    currentWeightKg: 'currentWeightKg',
    targetWeightKg: 'targetWeightKg',
    currentCalorieTarget: 'currentCalorieTarget',
    currentProteinTargetG: 'currentProteinTargetG',
    trainingPhase: 'trainingPhase',
    cycleWeek: 'cycleWeek',
    lastEventId: 'lastEventId',
    lastProcessedAt: 'lastProcessedAt',
    updatedAt: 'updatedAt'
  };

  export type UserStateScalarFieldEnum = (typeof UserStateScalarFieldEnum)[keyof typeof UserStateScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type UserStateWhereInput = {
    AND?: UserStateWhereInput | UserStateWhereInput[]
    OR?: UserStateWhereInput[]
    NOT?: UserStateWhereInput | UserStateWhereInput[]
    id?: StringFilter<"UserState"> | string
    userId?: StringFilter<"UserState"> | string
    last7DaysAdherence?: FloatFilter<"UserState"> | number
    avgSleepQuality?: FloatFilter<"UserState"> | number
    fatigueLevel?: FloatFilter<"UserState"> | number
    currentWeightKg?: FloatNullableFilter<"UserState"> | number | null
    targetWeightKg?: FloatNullableFilter<"UserState"> | number | null
    currentCalorieTarget?: FloatNullableFilter<"UserState"> | number | null
    currentProteinTargetG?: FloatNullableFilter<"UserState"> | number | null
    trainingPhase?: StringFilter<"UserState"> | string
    cycleWeek?: IntFilter<"UserState"> | number
    lastEventId?: StringNullableFilter<"UserState"> | string | null
    lastProcessedAt?: DateTimeFilter<"UserState"> | Date | string
    updatedAt?: DateTimeFilter<"UserState"> | Date | string
  }

  export type UserStateOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    last7DaysAdherence?: SortOrder
    avgSleepQuality?: SortOrder
    fatigueLevel?: SortOrder
    currentWeightKg?: SortOrderInput | SortOrder
    targetWeightKg?: SortOrderInput | SortOrder
    currentCalorieTarget?: SortOrderInput | SortOrder
    currentProteinTargetG?: SortOrderInput | SortOrder
    trainingPhase?: SortOrder
    cycleWeek?: SortOrder
    lastEventId?: SortOrderInput | SortOrder
    lastProcessedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserStateWhereInput | UserStateWhereInput[]
    OR?: UserStateWhereInput[]
    NOT?: UserStateWhereInput | UserStateWhereInput[]
    last7DaysAdherence?: FloatFilter<"UserState"> | number
    avgSleepQuality?: FloatFilter<"UserState"> | number
    fatigueLevel?: FloatFilter<"UserState"> | number
    currentWeightKg?: FloatNullableFilter<"UserState"> | number | null
    targetWeightKg?: FloatNullableFilter<"UserState"> | number | null
    currentCalorieTarget?: FloatNullableFilter<"UserState"> | number | null
    currentProteinTargetG?: FloatNullableFilter<"UserState"> | number | null
    trainingPhase?: StringFilter<"UserState"> | string
    cycleWeek?: IntFilter<"UserState"> | number
    lastEventId?: StringNullableFilter<"UserState"> | string | null
    lastProcessedAt?: DateTimeFilter<"UserState"> | Date | string
    updatedAt?: DateTimeFilter<"UserState"> | Date | string
  }, "id" | "userId">

  export type UserStateOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    last7DaysAdherence?: SortOrder
    avgSleepQuality?: SortOrder
    fatigueLevel?: SortOrder
    currentWeightKg?: SortOrderInput | SortOrder
    targetWeightKg?: SortOrderInput | SortOrder
    currentCalorieTarget?: SortOrderInput | SortOrder
    currentProteinTargetG?: SortOrderInput | SortOrder
    trainingPhase?: SortOrder
    cycleWeek?: SortOrder
    lastEventId?: SortOrderInput | SortOrder
    lastProcessedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserStateCountOrderByAggregateInput
    _avg?: UserStateAvgOrderByAggregateInput
    _max?: UserStateMaxOrderByAggregateInput
    _min?: UserStateMinOrderByAggregateInput
    _sum?: UserStateSumOrderByAggregateInput
  }

  export type UserStateScalarWhereWithAggregatesInput = {
    AND?: UserStateScalarWhereWithAggregatesInput | UserStateScalarWhereWithAggregatesInput[]
    OR?: UserStateScalarWhereWithAggregatesInput[]
    NOT?: UserStateScalarWhereWithAggregatesInput | UserStateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserState"> | string
    userId?: StringWithAggregatesFilter<"UserState"> | string
    last7DaysAdherence?: FloatWithAggregatesFilter<"UserState"> | number
    avgSleepQuality?: FloatWithAggregatesFilter<"UserState"> | number
    fatigueLevel?: FloatWithAggregatesFilter<"UserState"> | number
    currentWeightKg?: FloatNullableWithAggregatesFilter<"UserState"> | number | null
    targetWeightKg?: FloatNullableWithAggregatesFilter<"UserState"> | number | null
    currentCalorieTarget?: FloatNullableWithAggregatesFilter<"UserState"> | number | null
    currentProteinTargetG?: FloatNullableWithAggregatesFilter<"UserState"> | number | null
    trainingPhase?: StringWithAggregatesFilter<"UserState"> | string
    cycleWeek?: IntWithAggregatesFilter<"UserState"> | number
    lastEventId?: StringNullableWithAggregatesFilter<"UserState"> | string | null
    lastProcessedAt?: DateTimeWithAggregatesFilter<"UserState"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserState"> | Date | string
  }

  export type UserStateCreateInput = {
    id?: string
    userId: string
    last7DaysAdherence?: number
    avgSleepQuality?: number
    fatigueLevel?: number
    currentWeightKg?: number | null
    targetWeightKg?: number | null
    currentCalorieTarget?: number | null
    currentProteinTargetG?: number | null
    trainingPhase?: string
    cycleWeek?: number
    lastEventId?: string | null
    lastProcessedAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStateUncheckedCreateInput = {
    id?: string
    userId: string
    last7DaysAdherence?: number
    avgSleepQuality?: number
    fatigueLevel?: number
    currentWeightKg?: number | null
    targetWeightKg?: number | null
    currentCalorieTarget?: number | null
    currentProteinTargetG?: number | null
    trainingPhase?: string
    cycleWeek?: number
    lastEventId?: string | null
    lastProcessedAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    last7DaysAdherence?: FloatFieldUpdateOperationsInput | number
    avgSleepQuality?: FloatFieldUpdateOperationsInput | number
    fatigueLevel?: FloatFieldUpdateOperationsInput | number
    currentWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    targetWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    currentCalorieTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    currentProteinTargetG?: NullableFloatFieldUpdateOperationsInput | number | null
    trainingPhase?: StringFieldUpdateOperationsInput | string
    cycleWeek?: IntFieldUpdateOperationsInput | number
    lastEventId?: NullableStringFieldUpdateOperationsInput | string | null
    lastProcessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    last7DaysAdherence?: FloatFieldUpdateOperationsInput | number
    avgSleepQuality?: FloatFieldUpdateOperationsInput | number
    fatigueLevel?: FloatFieldUpdateOperationsInput | number
    currentWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    targetWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    currentCalorieTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    currentProteinTargetG?: NullableFloatFieldUpdateOperationsInput | number | null
    trainingPhase?: StringFieldUpdateOperationsInput | string
    cycleWeek?: IntFieldUpdateOperationsInput | number
    lastEventId?: NullableStringFieldUpdateOperationsInput | string | null
    lastProcessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStateCreateManyInput = {
    id?: string
    userId: string
    last7DaysAdherence?: number
    avgSleepQuality?: number
    fatigueLevel?: number
    currentWeightKg?: number | null
    targetWeightKg?: number | null
    currentCalorieTarget?: number | null
    currentProteinTargetG?: number | null
    trainingPhase?: string
    cycleWeek?: number
    lastEventId?: string | null
    lastProcessedAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    last7DaysAdherence?: FloatFieldUpdateOperationsInput | number
    avgSleepQuality?: FloatFieldUpdateOperationsInput | number
    fatigueLevel?: FloatFieldUpdateOperationsInput | number
    currentWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    targetWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    currentCalorieTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    currentProteinTargetG?: NullableFloatFieldUpdateOperationsInput | number | null
    trainingPhase?: StringFieldUpdateOperationsInput | string
    cycleWeek?: IntFieldUpdateOperationsInput | number
    lastEventId?: NullableStringFieldUpdateOperationsInput | string | null
    lastProcessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    last7DaysAdherence?: FloatFieldUpdateOperationsInput | number
    avgSleepQuality?: FloatFieldUpdateOperationsInput | number
    fatigueLevel?: FloatFieldUpdateOperationsInput | number
    currentWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    targetWeightKg?: NullableFloatFieldUpdateOperationsInput | number | null
    currentCalorieTarget?: NullableFloatFieldUpdateOperationsInput | number | null
    currentProteinTargetG?: NullableFloatFieldUpdateOperationsInput | number | null
    trainingPhase?: StringFieldUpdateOperationsInput | string
    cycleWeek?: IntFieldUpdateOperationsInput | number
    lastEventId?: NullableStringFieldUpdateOperationsInput | string | null
    lastProcessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserStateCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    last7DaysAdherence?: SortOrder
    avgSleepQuality?: SortOrder
    fatigueLevel?: SortOrder
    currentWeightKg?: SortOrder
    targetWeightKg?: SortOrder
    currentCalorieTarget?: SortOrder
    currentProteinTargetG?: SortOrder
    trainingPhase?: SortOrder
    cycleWeek?: SortOrder
    lastEventId?: SortOrder
    lastProcessedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStateAvgOrderByAggregateInput = {
    last7DaysAdherence?: SortOrder
    avgSleepQuality?: SortOrder
    fatigueLevel?: SortOrder
    currentWeightKg?: SortOrder
    targetWeightKg?: SortOrder
    currentCalorieTarget?: SortOrder
    currentProteinTargetG?: SortOrder
    cycleWeek?: SortOrder
  }

  export type UserStateMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    last7DaysAdherence?: SortOrder
    avgSleepQuality?: SortOrder
    fatigueLevel?: SortOrder
    currentWeightKg?: SortOrder
    targetWeightKg?: SortOrder
    currentCalorieTarget?: SortOrder
    currentProteinTargetG?: SortOrder
    trainingPhase?: SortOrder
    cycleWeek?: SortOrder
    lastEventId?: SortOrder
    lastProcessedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStateMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    last7DaysAdherence?: SortOrder
    avgSleepQuality?: SortOrder
    fatigueLevel?: SortOrder
    currentWeightKg?: SortOrder
    targetWeightKg?: SortOrder
    currentCalorieTarget?: SortOrder
    currentProteinTargetG?: SortOrder
    trainingPhase?: SortOrder
    cycleWeek?: SortOrder
    lastEventId?: SortOrder
    lastProcessedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserStateSumOrderByAggregateInput = {
    last7DaysAdherence?: SortOrder
    avgSleepQuality?: SortOrder
    fatigueLevel?: SortOrder
    currentWeightKg?: SortOrder
    targetWeightKg?: SortOrder
    currentCalorieTarget?: SortOrder
    currentProteinTargetG?: SortOrder
    cycleWeek?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserStateDefaultArgs instead
     */
    export type UserStateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserStateDefaultArgs<ExtArgs>

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