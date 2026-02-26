
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
 * Model FoodItem
 * 
 */
export type FoodItem = $Result.DefaultSelection<Prisma.$FoodItemPayload>
/**
 * Model MealLog
 * 
 */
export type MealLog = $Result.DefaultSelection<Prisma.$MealLogPayload>
/**
 * Model Recipe
 * 
 */
export type Recipe = $Result.DefaultSelection<Prisma.$RecipePayload>
/**
 * Model FastingLog
 * 
 */
export type FastingLog = $Result.DefaultSelection<Prisma.$FastingLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MealType: {
  BREAKFAST: 'BREAKFAST',
  LUNCH: 'LUNCH',
  DINNER: 'DINNER',
  SNACK: 'SNACK'
};

export type MealType = (typeof MealType)[keyof typeof MealType]

}

export type MealType = $Enums.MealType

export const MealType: typeof $Enums.MealType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more FoodItems
 * const foodItems = await prisma.foodItem.findMany()
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
   * // Fetch zero or more FoodItems
   * const foodItems = await prisma.foodItem.findMany()
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
   * `prisma.foodItem`: Exposes CRUD operations for the **FoodItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodItems
    * const foodItems = await prisma.foodItem.findMany()
    * ```
    */
  get foodItem(): Prisma.FoodItemDelegate<ExtArgs>;

  /**
   * `prisma.mealLog`: Exposes CRUD operations for the **MealLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MealLogs
    * const mealLogs = await prisma.mealLog.findMany()
    * ```
    */
  get mealLog(): Prisma.MealLogDelegate<ExtArgs>;

  /**
   * `prisma.recipe`: Exposes CRUD operations for the **Recipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipe.findMany()
    * ```
    */
  get recipe(): Prisma.RecipeDelegate<ExtArgs>;

  /**
   * `prisma.fastingLog`: Exposes CRUD operations for the **FastingLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FastingLogs
    * const fastingLogs = await prisma.fastingLog.findMany()
    * ```
    */
  get fastingLog(): Prisma.FastingLogDelegate<ExtArgs>;
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
    FoodItem: 'FoodItem',
    MealLog: 'MealLog',
    Recipe: 'Recipe',
    FastingLog: 'FastingLog'
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
      modelProps: "foodItem" | "mealLog" | "recipe" | "fastingLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      FoodItem: {
        payload: Prisma.$FoodItemPayload<ExtArgs>
        fields: Prisma.FoodItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          findFirst: {
            args: Prisma.FoodItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          findMany: {
            args: Prisma.FoodItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>[]
          }
          create: {
            args: Prisma.FoodItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          createMany: {
            args: Prisma.FoodItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoodItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>[]
          }
          delete: {
            args: Prisma.FoodItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          update: {
            args: Prisma.FoodItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          deleteMany: {
            args: Prisma.FoodItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FoodItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodItemPayload>
          }
          aggregate: {
            args: Prisma.FoodItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoodItem>
          }
          groupBy: {
            args: Prisma.FoodItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodItemCountArgs<ExtArgs>
            result: $Utils.Optional<FoodItemCountAggregateOutputType> | number
          }
        }
      }
      MealLog: {
        payload: Prisma.$MealLogPayload<ExtArgs>
        fields: Prisma.MealLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealLogPayload>
          }
          findFirst: {
            args: Prisma.MealLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealLogPayload>
          }
          findMany: {
            args: Prisma.MealLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealLogPayload>[]
          }
          create: {
            args: Prisma.MealLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealLogPayload>
          }
          createMany: {
            args: Prisma.MealLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealLogPayload>[]
          }
          delete: {
            args: Prisma.MealLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealLogPayload>
          }
          update: {
            args: Prisma.MealLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealLogPayload>
          }
          deleteMany: {
            args: Prisma.MealLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MealLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealLogPayload>
          }
          aggregate: {
            args: Prisma.MealLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMealLog>
          }
          groupBy: {
            args: Prisma.MealLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealLogCountArgs<ExtArgs>
            result: $Utils.Optional<MealLogCountAggregateOutputType> | number
          }
        }
      }
      Recipe: {
        payload: Prisma.$RecipePayload<ExtArgs>
        fields: Prisma.RecipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findFirst: {
            args: Prisma.RecipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          findMany: {
            args: Prisma.RecipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          create: {
            args: Prisma.RecipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          createMany: {
            args: Prisma.RecipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>[]
          }
          delete: {
            args: Prisma.RecipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          update: {
            args: Prisma.RecipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          deleteMany: {
            args: Prisma.RecipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RecipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecipePayload>
          }
          aggregate: {
            args: Prisma.RecipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecipe>
          }
          groupBy: {
            args: Prisma.RecipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeCountArgs<ExtArgs>
            result: $Utils.Optional<RecipeCountAggregateOutputType> | number
          }
        }
      }
      FastingLog: {
        payload: Prisma.$FastingLogPayload<ExtArgs>
        fields: Prisma.FastingLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FastingLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FastingLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FastingLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FastingLogPayload>
          }
          findFirst: {
            args: Prisma.FastingLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FastingLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FastingLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FastingLogPayload>
          }
          findMany: {
            args: Prisma.FastingLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FastingLogPayload>[]
          }
          create: {
            args: Prisma.FastingLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FastingLogPayload>
          }
          createMany: {
            args: Prisma.FastingLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FastingLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FastingLogPayload>[]
          }
          delete: {
            args: Prisma.FastingLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FastingLogPayload>
          }
          update: {
            args: Prisma.FastingLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FastingLogPayload>
          }
          deleteMany: {
            args: Prisma.FastingLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FastingLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FastingLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FastingLogPayload>
          }
          aggregate: {
            args: Prisma.FastingLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFastingLog>
          }
          groupBy: {
            args: Prisma.FastingLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<FastingLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.FastingLogCountArgs<ExtArgs>
            result: $Utils.Optional<FastingLogCountAggregateOutputType> | number
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
   * Model FoodItem
   */

  export type AggregateFoodItem = {
    _count: FoodItemCountAggregateOutputType | null
    _avg: FoodItemAvgAggregateOutputType | null
    _sum: FoodItemSumAggregateOutputType | null
    _min: FoodItemMinAggregateOutputType | null
    _max: FoodItemMaxAggregateOutputType | null
  }

  export type FoodItemAvgAggregateOutputType = {
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    fiber: number | null
    sugar: number | null
    sodiumMg: number | null
    glycemicIndex: number | null
  }

  export type FoodItemSumAggregateOutputType = {
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    fiber: number | null
    sugar: number | null
    sodiumMg: number | null
    glycemicIndex: number | null
  }

  export type FoodItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    fiber: number | null
    sugar: number | null
    sodiumMg: number | null
    servingSize: string | null
    glycemicIndex: number | null
    isVegan: boolean | null
    isGlutenFree: boolean | null
    isHalal: boolean | null
    region: string | null
    source: string | null
    foodGroup: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    fiber: number | null
    sugar: number | null
    sodiumMg: number | null
    servingSize: string | null
    glycemicIndex: number | null
    isVegan: boolean | null
    isGlutenFree: boolean | null
    isHalal: boolean | null
    region: string | null
    source: string | null
    foodGroup: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodItemCountAggregateOutputType = {
    id: number
    name: number
    calories: number
    protein: number
    carbs: number
    fat: number
    fiber: number
    sugar: number
    sodiumMg: number
    servingSize: number
    glycemicIndex: number
    isVegan: number
    isGlutenFree: number
    isHalal: number
    region: number
    cuisineTags: number
    source: number
    foodGroup: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FoodItemAvgAggregateInputType = {
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    fiber?: true
    sugar?: true
    sodiumMg?: true
    glycemicIndex?: true
  }

  export type FoodItemSumAggregateInputType = {
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    fiber?: true
    sugar?: true
    sodiumMg?: true
    glycemicIndex?: true
  }

  export type FoodItemMinAggregateInputType = {
    id?: true
    name?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    fiber?: true
    sugar?: true
    sodiumMg?: true
    servingSize?: true
    glycemicIndex?: true
    isVegan?: true
    isGlutenFree?: true
    isHalal?: true
    region?: true
    source?: true
    foodGroup?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodItemMaxAggregateInputType = {
    id?: true
    name?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    fiber?: true
    sugar?: true
    sodiumMg?: true
    servingSize?: true
    glycemicIndex?: true
    isVegan?: true
    isGlutenFree?: true
    isHalal?: true
    region?: true
    source?: true
    foodGroup?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodItemCountAggregateInputType = {
    id?: true
    name?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    fiber?: true
    sugar?: true
    sodiumMg?: true
    servingSize?: true
    glycemicIndex?: true
    isVegan?: true
    isGlutenFree?: true
    isHalal?: true
    region?: true
    cuisineTags?: true
    source?: true
    foodGroup?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FoodItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodItem to aggregate.
     */
    where?: FoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodItems to fetch.
     */
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodItems
    **/
    _count?: true | FoodItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodItemMaxAggregateInputType
  }

  export type GetFoodItemAggregateType<T extends FoodItemAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodItem[P]>
      : GetScalarType<T[P], AggregateFoodItem[P]>
  }




  export type FoodItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodItemWhereInput
    orderBy?: FoodItemOrderByWithAggregationInput | FoodItemOrderByWithAggregationInput[]
    by: FoodItemScalarFieldEnum[] | FoodItemScalarFieldEnum
    having?: FoodItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodItemCountAggregateInputType | true
    _avg?: FoodItemAvgAggregateInputType
    _sum?: FoodItemSumAggregateInputType
    _min?: FoodItemMinAggregateInputType
    _max?: FoodItemMaxAggregateInputType
  }

  export type FoodItemGroupByOutputType = {
    id: string
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    fiber: number
    sugar: number
    sodiumMg: number
    servingSize: string
    glycemicIndex: number | null
    isVegan: boolean
    isGlutenFree: boolean
    isHalal: boolean
    region: string | null
    cuisineTags: string[]
    source: string
    foodGroup: string | null
    createdAt: Date
    updatedAt: Date
    _count: FoodItemCountAggregateOutputType | null
    _avg: FoodItemAvgAggregateOutputType | null
    _sum: FoodItemSumAggregateOutputType | null
    _min: FoodItemMinAggregateOutputType | null
    _max: FoodItemMaxAggregateOutputType | null
  }

  type GetFoodItemGroupByPayload<T extends FoodItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodItemGroupByOutputType[P]>
            : GetScalarType<T[P], FoodItemGroupByOutputType[P]>
        }
      >
    >


  export type FoodItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    fiber?: boolean
    sugar?: boolean
    sodiumMg?: boolean
    servingSize?: boolean
    glycemicIndex?: boolean
    isVegan?: boolean
    isGlutenFree?: boolean
    isHalal?: boolean
    region?: boolean
    cuisineTags?: boolean
    source?: boolean
    foodGroup?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["foodItem"]>

  export type FoodItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    fiber?: boolean
    sugar?: boolean
    sodiumMg?: boolean
    servingSize?: boolean
    glycemicIndex?: boolean
    isVegan?: boolean
    isGlutenFree?: boolean
    isHalal?: boolean
    region?: boolean
    cuisineTags?: boolean
    source?: boolean
    foodGroup?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["foodItem"]>

  export type FoodItemSelectScalar = {
    id?: boolean
    name?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    fiber?: boolean
    sugar?: boolean
    sodiumMg?: boolean
    servingSize?: boolean
    glycemicIndex?: boolean
    isVegan?: boolean
    isGlutenFree?: boolean
    isHalal?: boolean
    region?: boolean
    cuisineTags?: boolean
    source?: boolean
    foodGroup?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $FoodItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      calories: number
      protein: number
      carbs: number
      fat: number
      fiber: number
      sugar: number
      sodiumMg: number
      servingSize: string
      glycemicIndex: number | null
      isVegan: boolean
      isGlutenFree: boolean
      isHalal: boolean
      region: string | null
      cuisineTags: string[]
      source: string
      foodGroup: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["foodItem"]>
    composites: {}
  }

  type FoodItemGetPayload<S extends boolean | null | undefined | FoodItemDefaultArgs> = $Result.GetResult<Prisma.$FoodItemPayload, S>

  type FoodItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FoodItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FoodItemCountAggregateInputType | true
    }

  export interface FoodItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodItem'], meta: { name: 'FoodItem' } }
    /**
     * Find zero or one FoodItem that matches the filter.
     * @param {FoodItemFindUniqueArgs} args - Arguments to find a FoodItem
     * @example
     * // Get one FoodItem
     * const foodItem = await prisma.foodItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodItemFindUniqueArgs>(args: SelectSubset<T, FoodItemFindUniqueArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FoodItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FoodItemFindUniqueOrThrowArgs} args - Arguments to find a FoodItem
     * @example
     * // Get one FoodItem
     * const foodItem = await prisma.foodItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodItemFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FoodItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemFindFirstArgs} args - Arguments to find a FoodItem
     * @example
     * // Get one FoodItem
     * const foodItem = await prisma.foodItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodItemFindFirstArgs>(args?: SelectSubset<T, FoodItemFindFirstArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FoodItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemFindFirstOrThrowArgs} args - Arguments to find a FoodItem
     * @example
     * // Get one FoodItem
     * const foodItem = await prisma.foodItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodItemFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FoodItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodItems
     * const foodItems = await prisma.foodItem.findMany()
     * 
     * // Get first 10 FoodItems
     * const foodItems = await prisma.foodItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodItemWithIdOnly = await prisma.foodItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodItemFindManyArgs>(args?: SelectSubset<T, FoodItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FoodItem.
     * @param {FoodItemCreateArgs} args - Arguments to create a FoodItem.
     * @example
     * // Create one FoodItem
     * const FoodItem = await prisma.foodItem.create({
     *   data: {
     *     // ... data to create a FoodItem
     *   }
     * })
     * 
     */
    create<T extends FoodItemCreateArgs>(args: SelectSubset<T, FoodItemCreateArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FoodItems.
     * @param {FoodItemCreateManyArgs} args - Arguments to create many FoodItems.
     * @example
     * // Create many FoodItems
     * const foodItem = await prisma.foodItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodItemCreateManyArgs>(args?: SelectSubset<T, FoodItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FoodItems and returns the data saved in the database.
     * @param {FoodItemCreateManyAndReturnArgs} args - Arguments to create many FoodItems.
     * @example
     * // Create many FoodItems
     * const foodItem = await prisma.foodItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FoodItems and only return the `id`
     * const foodItemWithIdOnly = await prisma.foodItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoodItemCreateManyAndReturnArgs>(args?: SelectSubset<T, FoodItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FoodItem.
     * @param {FoodItemDeleteArgs} args - Arguments to delete one FoodItem.
     * @example
     * // Delete one FoodItem
     * const FoodItem = await prisma.foodItem.delete({
     *   where: {
     *     // ... filter to delete one FoodItem
     *   }
     * })
     * 
     */
    delete<T extends FoodItemDeleteArgs>(args: SelectSubset<T, FoodItemDeleteArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FoodItem.
     * @param {FoodItemUpdateArgs} args - Arguments to update one FoodItem.
     * @example
     * // Update one FoodItem
     * const foodItem = await prisma.foodItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodItemUpdateArgs>(args: SelectSubset<T, FoodItemUpdateArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FoodItems.
     * @param {FoodItemDeleteManyArgs} args - Arguments to filter FoodItems to delete.
     * @example
     * // Delete a few FoodItems
     * const { count } = await prisma.foodItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodItemDeleteManyArgs>(args?: SelectSubset<T, FoodItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodItems
     * const foodItem = await prisma.foodItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodItemUpdateManyArgs>(args: SelectSubset<T, FoodItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FoodItem.
     * @param {FoodItemUpsertArgs} args - Arguments to update or create a FoodItem.
     * @example
     * // Update or create a FoodItem
     * const foodItem = await prisma.foodItem.upsert({
     *   create: {
     *     // ... data to create a FoodItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodItem we want to update
     *   }
     * })
     */
    upsert<T extends FoodItemUpsertArgs>(args: SelectSubset<T, FoodItemUpsertArgs<ExtArgs>>): Prisma__FoodItemClient<$Result.GetResult<Prisma.$FoodItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FoodItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemCountArgs} args - Arguments to filter FoodItems to count.
     * @example
     * // Count the number of FoodItems
     * const count = await prisma.foodItem.count({
     *   where: {
     *     // ... the filter for the FoodItems we want to count
     *   }
     * })
    **/
    count<T extends FoodItemCountArgs>(
      args?: Subset<T, FoodItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoodItemAggregateArgs>(args: Subset<T, FoodItemAggregateArgs>): Prisma.PrismaPromise<GetFoodItemAggregateType<T>>

    /**
     * Group by FoodItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodItemGroupByArgs} args - Group by arguments.
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
      T extends FoodItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodItemGroupByArgs['orderBy'] }
        : { orderBy?: FoodItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FoodItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodItem model
   */
  readonly fields: FoodItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FoodItem model
   */ 
  interface FoodItemFieldRefs {
    readonly id: FieldRef<"FoodItem", 'String'>
    readonly name: FieldRef<"FoodItem", 'String'>
    readonly calories: FieldRef<"FoodItem", 'Float'>
    readonly protein: FieldRef<"FoodItem", 'Float'>
    readonly carbs: FieldRef<"FoodItem", 'Float'>
    readonly fat: FieldRef<"FoodItem", 'Float'>
    readonly fiber: FieldRef<"FoodItem", 'Float'>
    readonly sugar: FieldRef<"FoodItem", 'Float'>
    readonly sodiumMg: FieldRef<"FoodItem", 'Float'>
    readonly servingSize: FieldRef<"FoodItem", 'String'>
    readonly glycemicIndex: FieldRef<"FoodItem", 'Int'>
    readonly isVegan: FieldRef<"FoodItem", 'Boolean'>
    readonly isGlutenFree: FieldRef<"FoodItem", 'Boolean'>
    readonly isHalal: FieldRef<"FoodItem", 'Boolean'>
    readonly region: FieldRef<"FoodItem", 'String'>
    readonly cuisineTags: FieldRef<"FoodItem", 'String[]'>
    readonly source: FieldRef<"FoodItem", 'String'>
    readonly foodGroup: FieldRef<"FoodItem", 'String'>
    readonly createdAt: FieldRef<"FoodItem", 'DateTime'>
    readonly updatedAt: FieldRef<"FoodItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FoodItem findUnique
   */
  export type FoodItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Filter, which FoodItem to fetch.
     */
    where: FoodItemWhereUniqueInput
  }

  /**
   * FoodItem findUniqueOrThrow
   */
  export type FoodItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Filter, which FoodItem to fetch.
     */
    where: FoodItemWhereUniqueInput
  }

  /**
   * FoodItem findFirst
   */
  export type FoodItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Filter, which FoodItem to fetch.
     */
    where?: FoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodItems to fetch.
     */
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodItems.
     */
    cursor?: FoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodItems.
     */
    distinct?: FoodItemScalarFieldEnum | FoodItemScalarFieldEnum[]
  }

  /**
   * FoodItem findFirstOrThrow
   */
  export type FoodItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Filter, which FoodItem to fetch.
     */
    where?: FoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodItems to fetch.
     */
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodItems.
     */
    cursor?: FoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodItems.
     */
    distinct?: FoodItemScalarFieldEnum | FoodItemScalarFieldEnum[]
  }

  /**
   * FoodItem findMany
   */
  export type FoodItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Filter, which FoodItems to fetch.
     */
    where?: FoodItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodItems to fetch.
     */
    orderBy?: FoodItemOrderByWithRelationInput | FoodItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodItems.
     */
    cursor?: FoodItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodItems.
     */
    skip?: number
    distinct?: FoodItemScalarFieldEnum | FoodItemScalarFieldEnum[]
  }

  /**
   * FoodItem create
   */
  export type FoodItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * The data needed to create a FoodItem.
     */
    data: XOR<FoodItemCreateInput, FoodItemUncheckedCreateInput>
  }

  /**
   * FoodItem createMany
   */
  export type FoodItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodItems.
     */
    data: FoodItemCreateManyInput | FoodItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodItem createManyAndReturn
   */
  export type FoodItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FoodItems.
     */
    data: FoodItemCreateManyInput | FoodItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FoodItem update
   */
  export type FoodItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * The data needed to update a FoodItem.
     */
    data: XOR<FoodItemUpdateInput, FoodItemUncheckedUpdateInput>
    /**
     * Choose, which FoodItem to update.
     */
    where: FoodItemWhereUniqueInput
  }

  /**
   * FoodItem updateMany
   */
  export type FoodItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodItems.
     */
    data: XOR<FoodItemUpdateManyMutationInput, FoodItemUncheckedUpdateManyInput>
    /**
     * Filter which FoodItems to update
     */
    where?: FoodItemWhereInput
  }

  /**
   * FoodItem upsert
   */
  export type FoodItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * The filter to search for the FoodItem to update in case it exists.
     */
    where: FoodItemWhereUniqueInput
    /**
     * In case the FoodItem found by the `where` argument doesn't exist, create a new FoodItem with this data.
     */
    create: XOR<FoodItemCreateInput, FoodItemUncheckedCreateInput>
    /**
     * In case the FoodItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodItemUpdateInput, FoodItemUncheckedUpdateInput>
  }

  /**
   * FoodItem delete
   */
  export type FoodItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
    /**
     * Filter which FoodItem to delete.
     */
    where: FoodItemWhereUniqueInput
  }

  /**
   * FoodItem deleteMany
   */
  export type FoodItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodItems to delete
     */
    where?: FoodItemWhereInput
  }

  /**
   * FoodItem without action
   */
  export type FoodItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodItem
     */
    select?: FoodItemSelect<ExtArgs> | null
  }


  /**
   * Model MealLog
   */

  export type AggregateMealLog = {
    _count: MealLogCountAggregateOutputType | null
    _avg: MealLogAvgAggregateOutputType | null
    _sum: MealLogSumAggregateOutputType | null
    _min: MealLogMinAggregateOutputType | null
    _max: MealLogMaxAggregateOutputType | null
  }

  export type MealLogAvgAggregateOutputType = {
    totalCalories: number | null
    totalProtein: number | null
    totalCarbs: number | null
    totalFat: number | null
  }

  export type MealLogSumAggregateOutputType = {
    totalCalories: number | null
    totalProtein: number | null
    totalCarbs: number | null
    totalFat: number | null
  }

  export type MealLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    loggedAt: Date | null
    mealType: $Enums.MealType | null
    totalCalories: number | null
    totalProtein: number | null
    totalCarbs: number | null
    totalFat: number | null
    isAdherent: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MealLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    loggedAt: Date | null
    mealType: $Enums.MealType | null
    totalCalories: number | null
    totalProtein: number | null
    totalCarbs: number | null
    totalFat: number | null
    isAdherent: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MealLogCountAggregateOutputType = {
    id: number
    userId: number
    loggedAt: number
    mealType: number
    foodItems: number
    totalCalories: number
    totalProtein: number
    totalCarbs: number
    totalFat: number
    isAdherent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MealLogAvgAggregateInputType = {
    totalCalories?: true
    totalProtein?: true
    totalCarbs?: true
    totalFat?: true
  }

  export type MealLogSumAggregateInputType = {
    totalCalories?: true
    totalProtein?: true
    totalCarbs?: true
    totalFat?: true
  }

  export type MealLogMinAggregateInputType = {
    id?: true
    userId?: true
    loggedAt?: true
    mealType?: true
    totalCalories?: true
    totalProtein?: true
    totalCarbs?: true
    totalFat?: true
    isAdherent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MealLogMaxAggregateInputType = {
    id?: true
    userId?: true
    loggedAt?: true
    mealType?: true
    totalCalories?: true
    totalProtein?: true
    totalCarbs?: true
    totalFat?: true
    isAdherent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MealLogCountAggregateInputType = {
    id?: true
    userId?: true
    loggedAt?: true
    mealType?: true
    foodItems?: true
    totalCalories?: true
    totalProtein?: true
    totalCarbs?: true
    totalFat?: true
    isAdherent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MealLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealLog to aggregate.
     */
    where?: MealLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealLogs to fetch.
     */
    orderBy?: MealLogOrderByWithRelationInput | MealLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MealLogs
    **/
    _count?: true | MealLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealLogMaxAggregateInputType
  }

  export type GetMealLogAggregateType<T extends MealLogAggregateArgs> = {
        [P in keyof T & keyof AggregateMealLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMealLog[P]>
      : GetScalarType<T[P], AggregateMealLog[P]>
  }




  export type MealLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealLogWhereInput
    orderBy?: MealLogOrderByWithAggregationInput | MealLogOrderByWithAggregationInput[]
    by: MealLogScalarFieldEnum[] | MealLogScalarFieldEnum
    having?: MealLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealLogCountAggregateInputType | true
    _avg?: MealLogAvgAggregateInputType
    _sum?: MealLogSumAggregateInputType
    _min?: MealLogMinAggregateInputType
    _max?: MealLogMaxAggregateInputType
  }

  export type MealLogGroupByOutputType = {
    id: string
    userId: string
    loggedAt: Date
    mealType: $Enums.MealType
    foodItems: JsonValue
    totalCalories: number
    totalProtein: number
    totalCarbs: number
    totalFat: number
    isAdherent: boolean
    createdAt: Date
    updatedAt: Date
    _count: MealLogCountAggregateOutputType | null
    _avg: MealLogAvgAggregateOutputType | null
    _sum: MealLogSumAggregateOutputType | null
    _min: MealLogMinAggregateOutputType | null
    _max: MealLogMaxAggregateOutputType | null
  }

  type GetMealLogGroupByPayload<T extends MealLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealLogGroupByOutputType[P]>
            : GetScalarType<T[P], MealLogGroupByOutputType[P]>
        }
      >
    >


  export type MealLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    loggedAt?: boolean
    mealType?: boolean
    foodItems?: boolean
    totalCalories?: boolean
    totalProtein?: boolean
    totalCarbs?: boolean
    totalFat?: boolean
    isAdherent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mealLog"]>

  export type MealLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    loggedAt?: boolean
    mealType?: boolean
    foodItems?: boolean
    totalCalories?: boolean
    totalProtein?: boolean
    totalCarbs?: boolean
    totalFat?: boolean
    isAdherent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["mealLog"]>

  export type MealLogSelectScalar = {
    id?: boolean
    userId?: boolean
    loggedAt?: boolean
    mealType?: boolean
    foodItems?: boolean
    totalCalories?: boolean
    totalProtein?: boolean
    totalCarbs?: boolean
    totalFat?: boolean
    isAdherent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $MealLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MealLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      loggedAt: Date
      mealType: $Enums.MealType
      foodItems: Prisma.JsonValue
      totalCalories: number
      totalProtein: number
      totalCarbs: number
      totalFat: number
      isAdherent: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["mealLog"]>
    composites: {}
  }

  type MealLogGetPayload<S extends boolean | null | undefined | MealLogDefaultArgs> = $Result.GetResult<Prisma.$MealLogPayload, S>

  type MealLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MealLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MealLogCountAggregateInputType | true
    }

  export interface MealLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MealLog'], meta: { name: 'MealLog' } }
    /**
     * Find zero or one MealLog that matches the filter.
     * @param {MealLogFindUniqueArgs} args - Arguments to find a MealLog
     * @example
     * // Get one MealLog
     * const mealLog = await prisma.mealLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealLogFindUniqueArgs>(args: SelectSubset<T, MealLogFindUniqueArgs<ExtArgs>>): Prisma__MealLogClient<$Result.GetResult<Prisma.$MealLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MealLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MealLogFindUniqueOrThrowArgs} args - Arguments to find a MealLog
     * @example
     * // Get one MealLog
     * const mealLog = await prisma.mealLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealLogFindUniqueOrThrowArgs>(args: SelectSubset<T, MealLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealLogClient<$Result.GetResult<Prisma.$MealLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MealLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealLogFindFirstArgs} args - Arguments to find a MealLog
     * @example
     * // Get one MealLog
     * const mealLog = await prisma.mealLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealLogFindFirstArgs>(args?: SelectSubset<T, MealLogFindFirstArgs<ExtArgs>>): Prisma__MealLogClient<$Result.GetResult<Prisma.$MealLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MealLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealLogFindFirstOrThrowArgs} args - Arguments to find a MealLog
     * @example
     * // Get one MealLog
     * const mealLog = await prisma.mealLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealLogFindFirstOrThrowArgs>(args?: SelectSubset<T, MealLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealLogClient<$Result.GetResult<Prisma.$MealLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MealLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MealLogs
     * const mealLogs = await prisma.mealLog.findMany()
     * 
     * // Get first 10 MealLogs
     * const mealLogs = await prisma.mealLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealLogWithIdOnly = await prisma.mealLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealLogFindManyArgs>(args?: SelectSubset<T, MealLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MealLog.
     * @param {MealLogCreateArgs} args - Arguments to create a MealLog.
     * @example
     * // Create one MealLog
     * const MealLog = await prisma.mealLog.create({
     *   data: {
     *     // ... data to create a MealLog
     *   }
     * })
     * 
     */
    create<T extends MealLogCreateArgs>(args: SelectSubset<T, MealLogCreateArgs<ExtArgs>>): Prisma__MealLogClient<$Result.GetResult<Prisma.$MealLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MealLogs.
     * @param {MealLogCreateManyArgs} args - Arguments to create many MealLogs.
     * @example
     * // Create many MealLogs
     * const mealLog = await prisma.mealLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealLogCreateManyArgs>(args?: SelectSubset<T, MealLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MealLogs and returns the data saved in the database.
     * @param {MealLogCreateManyAndReturnArgs} args - Arguments to create many MealLogs.
     * @example
     * // Create many MealLogs
     * const mealLog = await prisma.mealLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MealLogs and only return the `id`
     * const mealLogWithIdOnly = await prisma.mealLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealLogCreateManyAndReturnArgs>(args?: SelectSubset<T, MealLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MealLog.
     * @param {MealLogDeleteArgs} args - Arguments to delete one MealLog.
     * @example
     * // Delete one MealLog
     * const MealLog = await prisma.mealLog.delete({
     *   where: {
     *     // ... filter to delete one MealLog
     *   }
     * })
     * 
     */
    delete<T extends MealLogDeleteArgs>(args: SelectSubset<T, MealLogDeleteArgs<ExtArgs>>): Prisma__MealLogClient<$Result.GetResult<Prisma.$MealLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MealLog.
     * @param {MealLogUpdateArgs} args - Arguments to update one MealLog.
     * @example
     * // Update one MealLog
     * const mealLog = await prisma.mealLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealLogUpdateArgs>(args: SelectSubset<T, MealLogUpdateArgs<ExtArgs>>): Prisma__MealLogClient<$Result.GetResult<Prisma.$MealLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MealLogs.
     * @param {MealLogDeleteManyArgs} args - Arguments to filter MealLogs to delete.
     * @example
     * // Delete a few MealLogs
     * const { count } = await prisma.mealLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealLogDeleteManyArgs>(args?: SelectSubset<T, MealLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MealLogs
     * const mealLog = await prisma.mealLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealLogUpdateManyArgs>(args: SelectSubset<T, MealLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MealLog.
     * @param {MealLogUpsertArgs} args - Arguments to update or create a MealLog.
     * @example
     * // Update or create a MealLog
     * const mealLog = await prisma.mealLog.upsert({
     *   create: {
     *     // ... data to create a MealLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MealLog we want to update
     *   }
     * })
     */
    upsert<T extends MealLogUpsertArgs>(args: SelectSubset<T, MealLogUpsertArgs<ExtArgs>>): Prisma__MealLogClient<$Result.GetResult<Prisma.$MealLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MealLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealLogCountArgs} args - Arguments to filter MealLogs to count.
     * @example
     * // Count the number of MealLogs
     * const count = await prisma.mealLog.count({
     *   where: {
     *     // ... the filter for the MealLogs we want to count
     *   }
     * })
    **/
    count<T extends MealLogCountArgs>(
      args?: Subset<T, MealLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MealLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MealLogAggregateArgs>(args: Subset<T, MealLogAggregateArgs>): Prisma.PrismaPromise<GetMealLogAggregateType<T>>

    /**
     * Group by MealLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealLogGroupByArgs} args - Group by arguments.
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
      T extends MealLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealLogGroupByArgs['orderBy'] }
        : { orderBy?: MealLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MealLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MealLog model
   */
  readonly fields: MealLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MealLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MealLog model
   */ 
  interface MealLogFieldRefs {
    readonly id: FieldRef<"MealLog", 'String'>
    readonly userId: FieldRef<"MealLog", 'String'>
    readonly loggedAt: FieldRef<"MealLog", 'DateTime'>
    readonly mealType: FieldRef<"MealLog", 'MealType'>
    readonly foodItems: FieldRef<"MealLog", 'Json'>
    readonly totalCalories: FieldRef<"MealLog", 'Float'>
    readonly totalProtein: FieldRef<"MealLog", 'Float'>
    readonly totalCarbs: FieldRef<"MealLog", 'Float'>
    readonly totalFat: FieldRef<"MealLog", 'Float'>
    readonly isAdherent: FieldRef<"MealLog", 'Boolean'>
    readonly createdAt: FieldRef<"MealLog", 'DateTime'>
    readonly updatedAt: FieldRef<"MealLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MealLog findUnique
   */
  export type MealLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealLog
     */
    select?: MealLogSelect<ExtArgs> | null
    /**
     * Filter, which MealLog to fetch.
     */
    where: MealLogWhereUniqueInput
  }

  /**
   * MealLog findUniqueOrThrow
   */
  export type MealLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealLog
     */
    select?: MealLogSelect<ExtArgs> | null
    /**
     * Filter, which MealLog to fetch.
     */
    where: MealLogWhereUniqueInput
  }

  /**
   * MealLog findFirst
   */
  export type MealLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealLog
     */
    select?: MealLogSelect<ExtArgs> | null
    /**
     * Filter, which MealLog to fetch.
     */
    where?: MealLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealLogs to fetch.
     */
    orderBy?: MealLogOrderByWithRelationInput | MealLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealLogs.
     */
    cursor?: MealLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealLogs.
     */
    distinct?: MealLogScalarFieldEnum | MealLogScalarFieldEnum[]
  }

  /**
   * MealLog findFirstOrThrow
   */
  export type MealLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealLog
     */
    select?: MealLogSelect<ExtArgs> | null
    /**
     * Filter, which MealLog to fetch.
     */
    where?: MealLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealLogs to fetch.
     */
    orderBy?: MealLogOrderByWithRelationInput | MealLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealLogs.
     */
    cursor?: MealLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealLogs.
     */
    distinct?: MealLogScalarFieldEnum | MealLogScalarFieldEnum[]
  }

  /**
   * MealLog findMany
   */
  export type MealLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealLog
     */
    select?: MealLogSelect<ExtArgs> | null
    /**
     * Filter, which MealLogs to fetch.
     */
    where?: MealLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealLogs to fetch.
     */
    orderBy?: MealLogOrderByWithRelationInput | MealLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MealLogs.
     */
    cursor?: MealLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealLogs.
     */
    skip?: number
    distinct?: MealLogScalarFieldEnum | MealLogScalarFieldEnum[]
  }

  /**
   * MealLog create
   */
  export type MealLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealLog
     */
    select?: MealLogSelect<ExtArgs> | null
    /**
     * The data needed to create a MealLog.
     */
    data: XOR<MealLogCreateInput, MealLogUncheckedCreateInput>
  }

  /**
   * MealLog createMany
   */
  export type MealLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MealLogs.
     */
    data: MealLogCreateManyInput | MealLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MealLog createManyAndReturn
   */
  export type MealLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealLog
     */
    select?: MealLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MealLogs.
     */
    data: MealLogCreateManyInput | MealLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MealLog update
   */
  export type MealLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealLog
     */
    select?: MealLogSelect<ExtArgs> | null
    /**
     * The data needed to update a MealLog.
     */
    data: XOR<MealLogUpdateInput, MealLogUncheckedUpdateInput>
    /**
     * Choose, which MealLog to update.
     */
    where: MealLogWhereUniqueInput
  }

  /**
   * MealLog updateMany
   */
  export type MealLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MealLogs.
     */
    data: XOR<MealLogUpdateManyMutationInput, MealLogUncheckedUpdateManyInput>
    /**
     * Filter which MealLogs to update
     */
    where?: MealLogWhereInput
  }

  /**
   * MealLog upsert
   */
  export type MealLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealLog
     */
    select?: MealLogSelect<ExtArgs> | null
    /**
     * The filter to search for the MealLog to update in case it exists.
     */
    where: MealLogWhereUniqueInput
    /**
     * In case the MealLog found by the `where` argument doesn't exist, create a new MealLog with this data.
     */
    create: XOR<MealLogCreateInput, MealLogUncheckedCreateInput>
    /**
     * In case the MealLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealLogUpdateInput, MealLogUncheckedUpdateInput>
  }

  /**
   * MealLog delete
   */
  export type MealLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealLog
     */
    select?: MealLogSelect<ExtArgs> | null
    /**
     * Filter which MealLog to delete.
     */
    where: MealLogWhereUniqueInput
  }

  /**
   * MealLog deleteMany
   */
  export type MealLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealLogs to delete
     */
    where?: MealLogWhereInput
  }

  /**
   * MealLog without action
   */
  export type MealLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealLog
     */
    select?: MealLogSelect<ExtArgs> | null
  }


  /**
   * Model Recipe
   */

  export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  export type RecipeAvgAggregateOutputType = {
    prepTimeMins: number | null
    cookTimeMins: number | null
    servings: number | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
  }

  export type RecipeSumAggregateOutputType = {
    prepTimeMins: number | null
    cookTimeMins: number | null
    servings: number | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
  }

  export type RecipeMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    prepTimeMins: number | null
    cookTimeMins: number | null
    servings: number | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecipeMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    prepTimeMins: number | null
    cookTimeMins: number | null
    servings: number | null
    calories: number | null
    protein: number | null
    carbs: number | null
    fat: number | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecipeCountAggregateOutputType = {
    id: number
    title: number
    description: number
    prepTimeMins: number
    cookTimeMins: number
    servings: number
    calories: number
    protein: number
    carbs: number
    fat: number
    ingredients: number
    instructions: number
    tags: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RecipeAvgAggregateInputType = {
    prepTimeMins?: true
    cookTimeMins?: true
    servings?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
  }

  export type RecipeSumAggregateInputType = {
    prepTimeMins?: true
    cookTimeMins?: true
    servings?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
  }

  export type RecipeMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    prepTimeMins?: true
    cookTimeMins?: true
    servings?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecipeMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    prepTimeMins?: true
    cookTimeMins?: true
    servings?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecipeCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    prepTimeMins?: true
    cookTimeMins?: true
    servings?: true
    calories?: true
    protein?: true
    carbs?: true
    fat?: true
    ingredients?: true
    instructions?: true
    tags?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RecipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe to aggregate.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipes
    **/
    _count?: true | RecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeMaxAggregateInputType
  }

  export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe[P]>
      : GetScalarType<T[P], AggregateRecipe[P]>
  }




  export type RecipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
    orderBy?: RecipeOrderByWithAggregationInput | RecipeOrderByWithAggregationInput[]
    by: RecipeScalarFieldEnum[] | RecipeScalarFieldEnum
    having?: RecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeCountAggregateInputType | true
    _avg?: RecipeAvgAggregateInputType
    _sum?: RecipeSumAggregateInputType
    _min?: RecipeMinAggregateInputType
    _max?: RecipeMaxAggregateInputType
  }

  export type RecipeGroupByOutputType = {
    id: string
    title: string
    description: string | null
    prepTimeMins: number
    cookTimeMins: number
    servings: number
    calories: number
    protein: number
    carbs: number
    fat: number
    ingredients: JsonValue
    instructions: JsonValue
    tags: string[]
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  type GetRecipeGroupByPayload<T extends RecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeGroupByOutputType[P]>
        }
      >
    >


  export type RecipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    prepTimeMins?: boolean
    cookTimeMins?: boolean
    servings?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    ingredients?: boolean
    instructions?: boolean
    tags?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    prepTimeMins?: boolean
    cookTimeMins?: boolean
    servings?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    ingredients?: boolean
    instructions?: boolean
    tags?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    prepTimeMins?: boolean
    cookTimeMins?: boolean
    servings?: boolean
    calories?: boolean
    protein?: boolean
    carbs?: boolean
    fat?: boolean
    ingredients?: boolean
    instructions?: boolean
    tags?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $RecipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Recipe"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      prepTimeMins: number
      cookTimeMins: number
      servings: number
      calories: number
      protein: number
      carbs: number
      fat: number
      ingredients: Prisma.JsonValue
      instructions: Prisma.JsonValue
      tags: string[]
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["recipe"]>
    composites: {}
  }

  type RecipeGetPayload<S extends boolean | null | undefined | RecipeDefaultArgs> = $Result.GetResult<Prisma.$RecipePayload, S>

  type RecipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RecipeFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RecipeCountAggregateInputType | true
    }

  export interface RecipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipe'], meta: { name: 'Recipe' } }
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {RecipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecipeFindUniqueArgs>(args: SelectSubset<T, RecipeFindUniqueArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Recipe that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RecipeFindUniqueOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecipeFindUniqueOrThrowArgs>(args: SelectSubset<T, RecipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecipeFindFirstArgs>(args?: SelectSubset<T, RecipeFindFirstArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Recipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecipeFindFirstOrThrowArgs>(args?: SelectSubset<T, RecipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recipeWithIdOnly = await prisma.recipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecipeFindManyArgs>(args?: SelectSubset<T, RecipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Recipe.
     * @param {RecipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     * 
     */
    create<T extends RecipeCreateArgs>(args: SelectSubset<T, RecipeCreateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Recipes.
     * @param {RecipeCreateManyArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecipeCreateManyArgs>(args?: SelectSubset<T, RecipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recipes and returns the data saved in the database.
     * @param {RecipeCreateManyAndReturnArgs} args - Arguments to create many Recipes.
     * @example
     * // Create many Recipes
     * const recipe = await prisma.recipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recipes and only return the `id`
     * const recipeWithIdOnly = await prisma.recipe.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecipeCreateManyAndReturnArgs>(args?: SelectSubset<T, RecipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Recipe.
     * @param {RecipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     * 
     */
    delete<T extends RecipeDeleteArgs>(args: SelectSubset<T, RecipeDeleteArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Recipe.
     * @param {RecipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecipeUpdateArgs>(args: SelectSubset<T, RecipeUpdateArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Recipes.
     * @param {RecipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecipeDeleteManyArgs>(args?: SelectSubset<T, RecipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecipeUpdateManyArgs>(args: SelectSubset<T, RecipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recipe.
     * @param {RecipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
     */
    upsert<T extends RecipeUpsertArgs>(args: SelectSubset<T, RecipeUpsertArgs<ExtArgs>>): Prisma__RecipeClient<$Result.GetResult<Prisma.$RecipePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends RecipeCountArgs>(
      args?: Subset<T, RecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecipeAggregateArgs>(args: Subset<T, RecipeAggregateArgs>): Prisma.PrismaPromise<GetRecipeAggregateType<T>>

    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupByArgs} args - Group by arguments.
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
      T extends RecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeGroupByArgs['orderBy'] }
        : { orderBy?: RecipeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Recipe model
   */
  readonly fields: RecipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Recipe model
   */ 
  interface RecipeFieldRefs {
    readonly id: FieldRef<"Recipe", 'String'>
    readonly title: FieldRef<"Recipe", 'String'>
    readonly description: FieldRef<"Recipe", 'String'>
    readonly prepTimeMins: FieldRef<"Recipe", 'Int'>
    readonly cookTimeMins: FieldRef<"Recipe", 'Int'>
    readonly servings: FieldRef<"Recipe", 'Int'>
    readonly calories: FieldRef<"Recipe", 'Float'>
    readonly protein: FieldRef<"Recipe", 'Float'>
    readonly carbs: FieldRef<"Recipe", 'Float'>
    readonly fat: FieldRef<"Recipe", 'Float'>
    readonly ingredients: FieldRef<"Recipe", 'Json'>
    readonly instructions: FieldRef<"Recipe", 'Json'>
    readonly tags: FieldRef<"Recipe", 'String[]'>
    readonly image: FieldRef<"Recipe", 'String'>
    readonly createdAt: FieldRef<"Recipe", 'DateTime'>
    readonly updatedAt: FieldRef<"Recipe", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Recipe findUnique
   */
  export type RecipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findUniqueOrThrow
   */
  export type RecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findFirst
   */
  export type RecipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findFirstOrThrow
   */
  export type RecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe findMany
   */
  export type RecipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Filter, which Recipes to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: RecipeOrderByWithRelationInput | RecipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    distinct?: RecipeScalarFieldEnum | RecipeScalarFieldEnum[]
  }

  /**
   * Recipe create
   */
  export type RecipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * The data needed to create a Recipe.
     */
    data: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
  }

  /**
   * Recipe createMany
   */
  export type RecipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipe createManyAndReturn
   */
  export type RecipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Recipes.
     */
    data: RecipeCreateManyInput | RecipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Recipe update
   */
  export type RecipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * The data needed to update a Recipe.
     */
    data: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
    /**
     * Choose, which Recipe to update.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe updateMany
   */
  export type RecipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
  }

  /**
   * Recipe upsert
   */
  export type RecipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * The filter to search for the Recipe to update in case it exists.
     */
    where: RecipeWhereUniqueInput
    /**
     * In case the Recipe found by the `where` argument doesn't exist, create a new Recipe with this data.
     */
    create: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
    /**
     * In case the Recipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
  }

  /**
   * Recipe delete
   */
  export type RecipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Filter which Recipe to delete.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe deleteMany
   */
  export type RecipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipes to delete
     */
    where?: RecipeWhereInput
  }

  /**
   * Recipe without action
   */
  export type RecipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
  }


  /**
   * Model FastingLog
   */

  export type AggregateFastingLog = {
    _count: FastingLogCountAggregateOutputType | null
    _avg: FastingLogAvgAggregateOutputType | null
    _sum: FastingLogSumAggregateOutputType | null
    _min: FastingLogMinAggregateOutputType | null
    _max: FastingLogMaxAggregateOutputType | null
  }

  export type FastingLogAvgAggregateOutputType = {
    targetHours: number | null
  }

  export type FastingLogSumAggregateOutputType = {
    targetHours: number | null
  }

  export type FastingLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    startTime: Date | null
    endTime: Date | null
    targetHours: number | null
    status: string | null
    createdAt: Date | null
  }

  export type FastingLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    startTime: Date | null
    endTime: Date | null
    targetHours: number | null
    status: string | null
    createdAt: Date | null
  }

  export type FastingLogCountAggregateOutputType = {
    id: number
    userId: number
    startTime: number
    endTime: number
    targetHours: number
    status: number
    createdAt: number
    _all: number
  }


  export type FastingLogAvgAggregateInputType = {
    targetHours?: true
  }

  export type FastingLogSumAggregateInputType = {
    targetHours?: true
  }

  export type FastingLogMinAggregateInputType = {
    id?: true
    userId?: true
    startTime?: true
    endTime?: true
    targetHours?: true
    status?: true
    createdAt?: true
  }

  export type FastingLogMaxAggregateInputType = {
    id?: true
    userId?: true
    startTime?: true
    endTime?: true
    targetHours?: true
    status?: true
    createdAt?: true
  }

  export type FastingLogCountAggregateInputType = {
    id?: true
    userId?: true
    startTime?: true
    endTime?: true
    targetHours?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type FastingLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FastingLog to aggregate.
     */
    where?: FastingLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FastingLogs to fetch.
     */
    orderBy?: FastingLogOrderByWithRelationInput | FastingLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FastingLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FastingLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FastingLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FastingLogs
    **/
    _count?: true | FastingLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FastingLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FastingLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FastingLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FastingLogMaxAggregateInputType
  }

  export type GetFastingLogAggregateType<T extends FastingLogAggregateArgs> = {
        [P in keyof T & keyof AggregateFastingLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFastingLog[P]>
      : GetScalarType<T[P], AggregateFastingLog[P]>
  }




  export type FastingLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FastingLogWhereInput
    orderBy?: FastingLogOrderByWithAggregationInput | FastingLogOrderByWithAggregationInput[]
    by: FastingLogScalarFieldEnum[] | FastingLogScalarFieldEnum
    having?: FastingLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FastingLogCountAggregateInputType | true
    _avg?: FastingLogAvgAggregateInputType
    _sum?: FastingLogSumAggregateInputType
    _min?: FastingLogMinAggregateInputType
    _max?: FastingLogMaxAggregateInputType
  }

  export type FastingLogGroupByOutputType = {
    id: string
    userId: string
    startTime: Date
    endTime: Date | null
    targetHours: number
    status: string
    createdAt: Date
    _count: FastingLogCountAggregateOutputType | null
    _avg: FastingLogAvgAggregateOutputType | null
    _sum: FastingLogSumAggregateOutputType | null
    _min: FastingLogMinAggregateOutputType | null
    _max: FastingLogMaxAggregateOutputType | null
  }

  type GetFastingLogGroupByPayload<T extends FastingLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FastingLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FastingLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FastingLogGroupByOutputType[P]>
            : GetScalarType<T[P], FastingLogGroupByOutputType[P]>
        }
      >
    >


  export type FastingLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    targetHours?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["fastingLog"]>

  export type FastingLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    targetHours?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["fastingLog"]>

  export type FastingLogSelectScalar = {
    id?: boolean
    userId?: boolean
    startTime?: boolean
    endTime?: boolean
    targetHours?: boolean
    status?: boolean
    createdAt?: boolean
  }


  export type $FastingLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FastingLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      startTime: Date
      endTime: Date | null
      targetHours: number
      status: string
      createdAt: Date
    }, ExtArgs["result"]["fastingLog"]>
    composites: {}
  }

  type FastingLogGetPayload<S extends boolean | null | undefined | FastingLogDefaultArgs> = $Result.GetResult<Prisma.$FastingLogPayload, S>

  type FastingLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FastingLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FastingLogCountAggregateInputType | true
    }

  export interface FastingLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FastingLog'], meta: { name: 'FastingLog' } }
    /**
     * Find zero or one FastingLog that matches the filter.
     * @param {FastingLogFindUniqueArgs} args - Arguments to find a FastingLog
     * @example
     * // Get one FastingLog
     * const fastingLog = await prisma.fastingLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FastingLogFindUniqueArgs>(args: SelectSubset<T, FastingLogFindUniqueArgs<ExtArgs>>): Prisma__FastingLogClient<$Result.GetResult<Prisma.$FastingLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FastingLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FastingLogFindUniqueOrThrowArgs} args - Arguments to find a FastingLog
     * @example
     * // Get one FastingLog
     * const fastingLog = await prisma.fastingLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FastingLogFindUniqueOrThrowArgs>(args: SelectSubset<T, FastingLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FastingLogClient<$Result.GetResult<Prisma.$FastingLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FastingLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FastingLogFindFirstArgs} args - Arguments to find a FastingLog
     * @example
     * // Get one FastingLog
     * const fastingLog = await prisma.fastingLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FastingLogFindFirstArgs>(args?: SelectSubset<T, FastingLogFindFirstArgs<ExtArgs>>): Prisma__FastingLogClient<$Result.GetResult<Prisma.$FastingLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FastingLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FastingLogFindFirstOrThrowArgs} args - Arguments to find a FastingLog
     * @example
     * // Get one FastingLog
     * const fastingLog = await prisma.fastingLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FastingLogFindFirstOrThrowArgs>(args?: SelectSubset<T, FastingLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__FastingLogClient<$Result.GetResult<Prisma.$FastingLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FastingLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FastingLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FastingLogs
     * const fastingLogs = await prisma.fastingLog.findMany()
     * 
     * // Get first 10 FastingLogs
     * const fastingLogs = await prisma.fastingLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fastingLogWithIdOnly = await prisma.fastingLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FastingLogFindManyArgs>(args?: SelectSubset<T, FastingLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FastingLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FastingLog.
     * @param {FastingLogCreateArgs} args - Arguments to create a FastingLog.
     * @example
     * // Create one FastingLog
     * const FastingLog = await prisma.fastingLog.create({
     *   data: {
     *     // ... data to create a FastingLog
     *   }
     * })
     * 
     */
    create<T extends FastingLogCreateArgs>(args: SelectSubset<T, FastingLogCreateArgs<ExtArgs>>): Prisma__FastingLogClient<$Result.GetResult<Prisma.$FastingLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FastingLogs.
     * @param {FastingLogCreateManyArgs} args - Arguments to create many FastingLogs.
     * @example
     * // Create many FastingLogs
     * const fastingLog = await prisma.fastingLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FastingLogCreateManyArgs>(args?: SelectSubset<T, FastingLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FastingLogs and returns the data saved in the database.
     * @param {FastingLogCreateManyAndReturnArgs} args - Arguments to create many FastingLogs.
     * @example
     * // Create many FastingLogs
     * const fastingLog = await prisma.fastingLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FastingLogs and only return the `id`
     * const fastingLogWithIdOnly = await prisma.fastingLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FastingLogCreateManyAndReturnArgs>(args?: SelectSubset<T, FastingLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FastingLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FastingLog.
     * @param {FastingLogDeleteArgs} args - Arguments to delete one FastingLog.
     * @example
     * // Delete one FastingLog
     * const FastingLog = await prisma.fastingLog.delete({
     *   where: {
     *     // ... filter to delete one FastingLog
     *   }
     * })
     * 
     */
    delete<T extends FastingLogDeleteArgs>(args: SelectSubset<T, FastingLogDeleteArgs<ExtArgs>>): Prisma__FastingLogClient<$Result.GetResult<Prisma.$FastingLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FastingLog.
     * @param {FastingLogUpdateArgs} args - Arguments to update one FastingLog.
     * @example
     * // Update one FastingLog
     * const fastingLog = await prisma.fastingLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FastingLogUpdateArgs>(args: SelectSubset<T, FastingLogUpdateArgs<ExtArgs>>): Prisma__FastingLogClient<$Result.GetResult<Prisma.$FastingLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FastingLogs.
     * @param {FastingLogDeleteManyArgs} args - Arguments to filter FastingLogs to delete.
     * @example
     * // Delete a few FastingLogs
     * const { count } = await prisma.fastingLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FastingLogDeleteManyArgs>(args?: SelectSubset<T, FastingLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FastingLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FastingLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FastingLogs
     * const fastingLog = await prisma.fastingLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FastingLogUpdateManyArgs>(args: SelectSubset<T, FastingLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FastingLog.
     * @param {FastingLogUpsertArgs} args - Arguments to update or create a FastingLog.
     * @example
     * // Update or create a FastingLog
     * const fastingLog = await prisma.fastingLog.upsert({
     *   create: {
     *     // ... data to create a FastingLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FastingLog we want to update
     *   }
     * })
     */
    upsert<T extends FastingLogUpsertArgs>(args: SelectSubset<T, FastingLogUpsertArgs<ExtArgs>>): Prisma__FastingLogClient<$Result.GetResult<Prisma.$FastingLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FastingLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FastingLogCountArgs} args - Arguments to filter FastingLogs to count.
     * @example
     * // Count the number of FastingLogs
     * const count = await prisma.fastingLog.count({
     *   where: {
     *     // ... the filter for the FastingLogs we want to count
     *   }
     * })
    **/
    count<T extends FastingLogCountArgs>(
      args?: Subset<T, FastingLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FastingLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FastingLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FastingLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FastingLogAggregateArgs>(args: Subset<T, FastingLogAggregateArgs>): Prisma.PrismaPromise<GetFastingLogAggregateType<T>>

    /**
     * Group by FastingLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FastingLogGroupByArgs} args - Group by arguments.
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
      T extends FastingLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FastingLogGroupByArgs['orderBy'] }
        : { orderBy?: FastingLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FastingLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFastingLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FastingLog model
   */
  readonly fields: FastingLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FastingLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FastingLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the FastingLog model
   */ 
  interface FastingLogFieldRefs {
    readonly id: FieldRef<"FastingLog", 'String'>
    readonly userId: FieldRef<"FastingLog", 'String'>
    readonly startTime: FieldRef<"FastingLog", 'DateTime'>
    readonly endTime: FieldRef<"FastingLog", 'DateTime'>
    readonly targetHours: FieldRef<"FastingLog", 'Int'>
    readonly status: FieldRef<"FastingLog", 'String'>
    readonly createdAt: FieldRef<"FastingLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FastingLog findUnique
   */
  export type FastingLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FastingLog
     */
    select?: FastingLogSelect<ExtArgs> | null
    /**
     * Filter, which FastingLog to fetch.
     */
    where: FastingLogWhereUniqueInput
  }

  /**
   * FastingLog findUniqueOrThrow
   */
  export type FastingLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FastingLog
     */
    select?: FastingLogSelect<ExtArgs> | null
    /**
     * Filter, which FastingLog to fetch.
     */
    where: FastingLogWhereUniqueInput
  }

  /**
   * FastingLog findFirst
   */
  export type FastingLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FastingLog
     */
    select?: FastingLogSelect<ExtArgs> | null
    /**
     * Filter, which FastingLog to fetch.
     */
    where?: FastingLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FastingLogs to fetch.
     */
    orderBy?: FastingLogOrderByWithRelationInput | FastingLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FastingLogs.
     */
    cursor?: FastingLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FastingLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FastingLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FastingLogs.
     */
    distinct?: FastingLogScalarFieldEnum | FastingLogScalarFieldEnum[]
  }

  /**
   * FastingLog findFirstOrThrow
   */
  export type FastingLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FastingLog
     */
    select?: FastingLogSelect<ExtArgs> | null
    /**
     * Filter, which FastingLog to fetch.
     */
    where?: FastingLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FastingLogs to fetch.
     */
    orderBy?: FastingLogOrderByWithRelationInput | FastingLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FastingLogs.
     */
    cursor?: FastingLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FastingLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FastingLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FastingLogs.
     */
    distinct?: FastingLogScalarFieldEnum | FastingLogScalarFieldEnum[]
  }

  /**
   * FastingLog findMany
   */
  export type FastingLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FastingLog
     */
    select?: FastingLogSelect<ExtArgs> | null
    /**
     * Filter, which FastingLogs to fetch.
     */
    where?: FastingLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FastingLogs to fetch.
     */
    orderBy?: FastingLogOrderByWithRelationInput | FastingLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FastingLogs.
     */
    cursor?: FastingLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FastingLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FastingLogs.
     */
    skip?: number
    distinct?: FastingLogScalarFieldEnum | FastingLogScalarFieldEnum[]
  }

  /**
   * FastingLog create
   */
  export type FastingLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FastingLog
     */
    select?: FastingLogSelect<ExtArgs> | null
    /**
     * The data needed to create a FastingLog.
     */
    data: XOR<FastingLogCreateInput, FastingLogUncheckedCreateInput>
  }

  /**
   * FastingLog createMany
   */
  export type FastingLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FastingLogs.
     */
    data: FastingLogCreateManyInput | FastingLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FastingLog createManyAndReturn
   */
  export type FastingLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FastingLog
     */
    select?: FastingLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FastingLogs.
     */
    data: FastingLogCreateManyInput | FastingLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FastingLog update
   */
  export type FastingLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FastingLog
     */
    select?: FastingLogSelect<ExtArgs> | null
    /**
     * The data needed to update a FastingLog.
     */
    data: XOR<FastingLogUpdateInput, FastingLogUncheckedUpdateInput>
    /**
     * Choose, which FastingLog to update.
     */
    where: FastingLogWhereUniqueInput
  }

  /**
   * FastingLog updateMany
   */
  export type FastingLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FastingLogs.
     */
    data: XOR<FastingLogUpdateManyMutationInput, FastingLogUncheckedUpdateManyInput>
    /**
     * Filter which FastingLogs to update
     */
    where?: FastingLogWhereInput
  }

  /**
   * FastingLog upsert
   */
  export type FastingLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FastingLog
     */
    select?: FastingLogSelect<ExtArgs> | null
    /**
     * The filter to search for the FastingLog to update in case it exists.
     */
    where: FastingLogWhereUniqueInput
    /**
     * In case the FastingLog found by the `where` argument doesn't exist, create a new FastingLog with this data.
     */
    create: XOR<FastingLogCreateInput, FastingLogUncheckedCreateInput>
    /**
     * In case the FastingLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FastingLogUpdateInput, FastingLogUncheckedUpdateInput>
  }

  /**
   * FastingLog delete
   */
  export type FastingLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FastingLog
     */
    select?: FastingLogSelect<ExtArgs> | null
    /**
     * Filter which FastingLog to delete.
     */
    where: FastingLogWhereUniqueInput
  }

  /**
   * FastingLog deleteMany
   */
  export type FastingLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FastingLogs to delete
     */
    where?: FastingLogWhereInput
  }

  /**
   * FastingLog without action
   */
  export type FastingLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FastingLog
     */
    select?: FastingLogSelect<ExtArgs> | null
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


  export const FoodItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    calories: 'calories',
    protein: 'protein',
    carbs: 'carbs',
    fat: 'fat',
    fiber: 'fiber',
    sugar: 'sugar',
    sodiumMg: 'sodiumMg',
    servingSize: 'servingSize',
    glycemicIndex: 'glycemicIndex',
    isVegan: 'isVegan',
    isGlutenFree: 'isGlutenFree',
    isHalal: 'isHalal',
    region: 'region',
    cuisineTags: 'cuisineTags',
    source: 'source',
    foodGroup: 'foodGroup',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FoodItemScalarFieldEnum = (typeof FoodItemScalarFieldEnum)[keyof typeof FoodItemScalarFieldEnum]


  export const MealLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    loggedAt: 'loggedAt',
    mealType: 'mealType',
    foodItems: 'foodItems',
    totalCalories: 'totalCalories',
    totalProtein: 'totalProtein',
    totalCarbs: 'totalCarbs',
    totalFat: 'totalFat',
    isAdherent: 'isAdherent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MealLogScalarFieldEnum = (typeof MealLogScalarFieldEnum)[keyof typeof MealLogScalarFieldEnum]


  export const RecipeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    prepTimeMins: 'prepTimeMins',
    cookTimeMins: 'cookTimeMins',
    servings: 'servings',
    calories: 'calories',
    protein: 'protein',
    carbs: 'carbs',
    fat: 'fat',
    ingredients: 'ingredients',
    instructions: 'instructions',
    tags: 'tags',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RecipeScalarFieldEnum = (typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum]


  export const FastingLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    startTime: 'startTime',
    endTime: 'endTime',
    targetHours: 'targetHours',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type FastingLogScalarFieldEnum = (typeof FastingLogScalarFieldEnum)[keyof typeof FastingLogScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MealType'
   */
  export type EnumMealTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MealType'>
    


  /**
   * Reference to a field of type 'MealType[]'
   */
  export type ListEnumMealTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MealType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type FoodItemWhereInput = {
    AND?: FoodItemWhereInput | FoodItemWhereInput[]
    OR?: FoodItemWhereInput[]
    NOT?: FoodItemWhereInput | FoodItemWhereInput[]
    id?: StringFilter<"FoodItem"> | string
    name?: StringFilter<"FoodItem"> | string
    calories?: FloatFilter<"FoodItem"> | number
    protein?: FloatFilter<"FoodItem"> | number
    carbs?: FloatFilter<"FoodItem"> | number
    fat?: FloatFilter<"FoodItem"> | number
    fiber?: FloatFilter<"FoodItem"> | number
    sugar?: FloatFilter<"FoodItem"> | number
    sodiumMg?: FloatFilter<"FoodItem"> | number
    servingSize?: StringFilter<"FoodItem"> | string
    glycemicIndex?: IntNullableFilter<"FoodItem"> | number | null
    isVegan?: BoolFilter<"FoodItem"> | boolean
    isGlutenFree?: BoolFilter<"FoodItem"> | boolean
    isHalal?: BoolFilter<"FoodItem"> | boolean
    region?: StringNullableFilter<"FoodItem"> | string | null
    cuisineTags?: StringNullableListFilter<"FoodItem">
    source?: StringFilter<"FoodItem"> | string
    foodGroup?: StringNullableFilter<"FoodItem"> | string | null
    createdAt?: DateTimeFilter<"FoodItem"> | Date | string
    updatedAt?: DateTimeFilter<"FoodItem"> | Date | string
  }

  export type FoodItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    fiber?: SortOrder
    sugar?: SortOrder
    sodiumMg?: SortOrder
    servingSize?: SortOrder
    glycemicIndex?: SortOrderInput | SortOrder
    isVegan?: SortOrder
    isGlutenFree?: SortOrder
    isHalal?: SortOrder
    region?: SortOrderInput | SortOrder
    cuisineTags?: SortOrder
    source?: SortOrder
    foodGroup?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FoodItemWhereInput | FoodItemWhereInput[]
    OR?: FoodItemWhereInput[]
    NOT?: FoodItemWhereInput | FoodItemWhereInput[]
    name?: StringFilter<"FoodItem"> | string
    calories?: FloatFilter<"FoodItem"> | number
    protein?: FloatFilter<"FoodItem"> | number
    carbs?: FloatFilter<"FoodItem"> | number
    fat?: FloatFilter<"FoodItem"> | number
    fiber?: FloatFilter<"FoodItem"> | number
    sugar?: FloatFilter<"FoodItem"> | number
    sodiumMg?: FloatFilter<"FoodItem"> | number
    servingSize?: StringFilter<"FoodItem"> | string
    glycemicIndex?: IntNullableFilter<"FoodItem"> | number | null
    isVegan?: BoolFilter<"FoodItem"> | boolean
    isGlutenFree?: BoolFilter<"FoodItem"> | boolean
    isHalal?: BoolFilter<"FoodItem"> | boolean
    region?: StringNullableFilter<"FoodItem"> | string | null
    cuisineTags?: StringNullableListFilter<"FoodItem">
    source?: StringFilter<"FoodItem"> | string
    foodGroup?: StringNullableFilter<"FoodItem"> | string | null
    createdAt?: DateTimeFilter<"FoodItem"> | Date | string
    updatedAt?: DateTimeFilter<"FoodItem"> | Date | string
  }, "id">

  export type FoodItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    fiber?: SortOrder
    sugar?: SortOrder
    sodiumMg?: SortOrder
    servingSize?: SortOrder
    glycemicIndex?: SortOrderInput | SortOrder
    isVegan?: SortOrder
    isGlutenFree?: SortOrder
    isHalal?: SortOrder
    region?: SortOrderInput | SortOrder
    cuisineTags?: SortOrder
    source?: SortOrder
    foodGroup?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FoodItemCountOrderByAggregateInput
    _avg?: FoodItemAvgOrderByAggregateInput
    _max?: FoodItemMaxOrderByAggregateInput
    _min?: FoodItemMinOrderByAggregateInput
    _sum?: FoodItemSumOrderByAggregateInput
  }

  export type FoodItemScalarWhereWithAggregatesInput = {
    AND?: FoodItemScalarWhereWithAggregatesInput | FoodItemScalarWhereWithAggregatesInput[]
    OR?: FoodItemScalarWhereWithAggregatesInput[]
    NOT?: FoodItemScalarWhereWithAggregatesInput | FoodItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FoodItem"> | string
    name?: StringWithAggregatesFilter<"FoodItem"> | string
    calories?: FloatWithAggregatesFilter<"FoodItem"> | number
    protein?: FloatWithAggregatesFilter<"FoodItem"> | number
    carbs?: FloatWithAggregatesFilter<"FoodItem"> | number
    fat?: FloatWithAggregatesFilter<"FoodItem"> | number
    fiber?: FloatWithAggregatesFilter<"FoodItem"> | number
    sugar?: FloatWithAggregatesFilter<"FoodItem"> | number
    sodiumMg?: FloatWithAggregatesFilter<"FoodItem"> | number
    servingSize?: StringWithAggregatesFilter<"FoodItem"> | string
    glycemicIndex?: IntNullableWithAggregatesFilter<"FoodItem"> | number | null
    isVegan?: BoolWithAggregatesFilter<"FoodItem"> | boolean
    isGlutenFree?: BoolWithAggregatesFilter<"FoodItem"> | boolean
    isHalal?: BoolWithAggregatesFilter<"FoodItem"> | boolean
    region?: StringNullableWithAggregatesFilter<"FoodItem"> | string | null
    cuisineTags?: StringNullableListFilter<"FoodItem">
    source?: StringWithAggregatesFilter<"FoodItem"> | string
    foodGroup?: StringNullableWithAggregatesFilter<"FoodItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FoodItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FoodItem"> | Date | string
  }

  export type MealLogWhereInput = {
    AND?: MealLogWhereInput | MealLogWhereInput[]
    OR?: MealLogWhereInput[]
    NOT?: MealLogWhereInput | MealLogWhereInput[]
    id?: StringFilter<"MealLog"> | string
    userId?: StringFilter<"MealLog"> | string
    loggedAt?: DateTimeFilter<"MealLog"> | Date | string
    mealType?: EnumMealTypeFilter<"MealLog"> | $Enums.MealType
    foodItems?: JsonFilter<"MealLog">
    totalCalories?: FloatFilter<"MealLog"> | number
    totalProtein?: FloatFilter<"MealLog"> | number
    totalCarbs?: FloatFilter<"MealLog"> | number
    totalFat?: FloatFilter<"MealLog"> | number
    isAdherent?: BoolFilter<"MealLog"> | boolean
    createdAt?: DateTimeFilter<"MealLog"> | Date | string
    updatedAt?: DateTimeFilter<"MealLog"> | Date | string
  }

  export type MealLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    loggedAt?: SortOrder
    mealType?: SortOrder
    foodItems?: SortOrder
    totalCalories?: SortOrder
    totalProtein?: SortOrder
    totalCarbs?: SortOrder
    totalFat?: SortOrder
    isAdherent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MealLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MealLogWhereInput | MealLogWhereInput[]
    OR?: MealLogWhereInput[]
    NOT?: MealLogWhereInput | MealLogWhereInput[]
    userId?: StringFilter<"MealLog"> | string
    loggedAt?: DateTimeFilter<"MealLog"> | Date | string
    mealType?: EnumMealTypeFilter<"MealLog"> | $Enums.MealType
    foodItems?: JsonFilter<"MealLog">
    totalCalories?: FloatFilter<"MealLog"> | number
    totalProtein?: FloatFilter<"MealLog"> | number
    totalCarbs?: FloatFilter<"MealLog"> | number
    totalFat?: FloatFilter<"MealLog"> | number
    isAdherent?: BoolFilter<"MealLog"> | boolean
    createdAt?: DateTimeFilter<"MealLog"> | Date | string
    updatedAt?: DateTimeFilter<"MealLog"> | Date | string
  }, "id">

  export type MealLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    loggedAt?: SortOrder
    mealType?: SortOrder
    foodItems?: SortOrder
    totalCalories?: SortOrder
    totalProtein?: SortOrder
    totalCarbs?: SortOrder
    totalFat?: SortOrder
    isAdherent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MealLogCountOrderByAggregateInput
    _avg?: MealLogAvgOrderByAggregateInput
    _max?: MealLogMaxOrderByAggregateInput
    _min?: MealLogMinOrderByAggregateInput
    _sum?: MealLogSumOrderByAggregateInput
  }

  export type MealLogScalarWhereWithAggregatesInput = {
    AND?: MealLogScalarWhereWithAggregatesInput | MealLogScalarWhereWithAggregatesInput[]
    OR?: MealLogScalarWhereWithAggregatesInput[]
    NOT?: MealLogScalarWhereWithAggregatesInput | MealLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MealLog"> | string
    userId?: StringWithAggregatesFilter<"MealLog"> | string
    loggedAt?: DateTimeWithAggregatesFilter<"MealLog"> | Date | string
    mealType?: EnumMealTypeWithAggregatesFilter<"MealLog"> | $Enums.MealType
    foodItems?: JsonWithAggregatesFilter<"MealLog">
    totalCalories?: FloatWithAggregatesFilter<"MealLog"> | number
    totalProtein?: FloatWithAggregatesFilter<"MealLog"> | number
    totalCarbs?: FloatWithAggregatesFilter<"MealLog"> | number
    totalFat?: FloatWithAggregatesFilter<"MealLog"> | number
    isAdherent?: BoolWithAggregatesFilter<"MealLog"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MealLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MealLog"> | Date | string
  }

  export type RecipeWhereInput = {
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    id?: StringFilter<"Recipe"> | string
    title?: StringFilter<"Recipe"> | string
    description?: StringNullableFilter<"Recipe"> | string | null
    prepTimeMins?: IntFilter<"Recipe"> | number
    cookTimeMins?: IntFilter<"Recipe"> | number
    servings?: IntFilter<"Recipe"> | number
    calories?: FloatFilter<"Recipe"> | number
    protein?: FloatFilter<"Recipe"> | number
    carbs?: FloatFilter<"Recipe"> | number
    fat?: FloatFilter<"Recipe"> | number
    ingredients?: JsonFilter<"Recipe">
    instructions?: JsonFilter<"Recipe">
    tags?: StringNullableListFilter<"Recipe">
    image?: StringNullableFilter<"Recipe"> | string | null
    createdAt?: DateTimeFilter<"Recipe"> | Date | string
    updatedAt?: DateTimeFilter<"Recipe"> | Date | string
  }

  export type RecipeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    prepTimeMins?: SortOrder
    cookTimeMins?: SortOrder
    servings?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    ingredients?: SortOrder
    instructions?: SortOrder
    tags?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecipeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecipeWhereInput | RecipeWhereInput[]
    OR?: RecipeWhereInput[]
    NOT?: RecipeWhereInput | RecipeWhereInput[]
    title?: StringFilter<"Recipe"> | string
    description?: StringNullableFilter<"Recipe"> | string | null
    prepTimeMins?: IntFilter<"Recipe"> | number
    cookTimeMins?: IntFilter<"Recipe"> | number
    servings?: IntFilter<"Recipe"> | number
    calories?: FloatFilter<"Recipe"> | number
    protein?: FloatFilter<"Recipe"> | number
    carbs?: FloatFilter<"Recipe"> | number
    fat?: FloatFilter<"Recipe"> | number
    ingredients?: JsonFilter<"Recipe">
    instructions?: JsonFilter<"Recipe">
    tags?: StringNullableListFilter<"Recipe">
    image?: StringNullableFilter<"Recipe"> | string | null
    createdAt?: DateTimeFilter<"Recipe"> | Date | string
    updatedAt?: DateTimeFilter<"Recipe"> | Date | string
  }, "id">

  export type RecipeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    prepTimeMins?: SortOrder
    cookTimeMins?: SortOrder
    servings?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    ingredients?: SortOrder
    instructions?: SortOrder
    tags?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RecipeCountOrderByAggregateInput
    _avg?: RecipeAvgOrderByAggregateInput
    _max?: RecipeMaxOrderByAggregateInput
    _min?: RecipeMinOrderByAggregateInput
    _sum?: RecipeSumOrderByAggregateInput
  }

  export type RecipeScalarWhereWithAggregatesInput = {
    AND?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    OR?: RecipeScalarWhereWithAggregatesInput[]
    NOT?: RecipeScalarWhereWithAggregatesInput | RecipeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Recipe"> | string
    title?: StringWithAggregatesFilter<"Recipe"> | string
    description?: StringNullableWithAggregatesFilter<"Recipe"> | string | null
    prepTimeMins?: IntWithAggregatesFilter<"Recipe"> | number
    cookTimeMins?: IntWithAggregatesFilter<"Recipe"> | number
    servings?: IntWithAggregatesFilter<"Recipe"> | number
    calories?: FloatWithAggregatesFilter<"Recipe"> | number
    protein?: FloatWithAggregatesFilter<"Recipe"> | number
    carbs?: FloatWithAggregatesFilter<"Recipe"> | number
    fat?: FloatWithAggregatesFilter<"Recipe"> | number
    ingredients?: JsonWithAggregatesFilter<"Recipe">
    instructions?: JsonWithAggregatesFilter<"Recipe">
    tags?: StringNullableListFilter<"Recipe">
    image?: StringNullableWithAggregatesFilter<"Recipe"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Recipe"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Recipe"> | Date | string
  }

  export type FastingLogWhereInput = {
    AND?: FastingLogWhereInput | FastingLogWhereInput[]
    OR?: FastingLogWhereInput[]
    NOT?: FastingLogWhereInput | FastingLogWhereInput[]
    id?: StringFilter<"FastingLog"> | string
    userId?: StringFilter<"FastingLog"> | string
    startTime?: DateTimeFilter<"FastingLog"> | Date | string
    endTime?: DateTimeNullableFilter<"FastingLog"> | Date | string | null
    targetHours?: IntFilter<"FastingLog"> | number
    status?: StringFilter<"FastingLog"> | string
    createdAt?: DateTimeFilter<"FastingLog"> | Date | string
  }

  export type FastingLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    targetHours?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type FastingLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FastingLogWhereInput | FastingLogWhereInput[]
    OR?: FastingLogWhereInput[]
    NOT?: FastingLogWhereInput | FastingLogWhereInput[]
    userId?: StringFilter<"FastingLog"> | string
    startTime?: DateTimeFilter<"FastingLog"> | Date | string
    endTime?: DateTimeNullableFilter<"FastingLog"> | Date | string | null
    targetHours?: IntFilter<"FastingLog"> | number
    status?: StringFilter<"FastingLog"> | string
    createdAt?: DateTimeFilter<"FastingLog"> | Date | string
  }, "id">

  export type FastingLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    targetHours?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: FastingLogCountOrderByAggregateInput
    _avg?: FastingLogAvgOrderByAggregateInput
    _max?: FastingLogMaxOrderByAggregateInput
    _min?: FastingLogMinOrderByAggregateInput
    _sum?: FastingLogSumOrderByAggregateInput
  }

  export type FastingLogScalarWhereWithAggregatesInput = {
    AND?: FastingLogScalarWhereWithAggregatesInput | FastingLogScalarWhereWithAggregatesInput[]
    OR?: FastingLogScalarWhereWithAggregatesInput[]
    NOT?: FastingLogScalarWhereWithAggregatesInput | FastingLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FastingLog"> | string
    userId?: StringWithAggregatesFilter<"FastingLog"> | string
    startTime?: DateTimeWithAggregatesFilter<"FastingLog"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"FastingLog"> | Date | string | null
    targetHours?: IntWithAggregatesFilter<"FastingLog"> | number
    status?: StringWithAggregatesFilter<"FastingLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FastingLog"> | Date | string
  }

  export type FoodItemCreateInput = {
    id?: string
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    fiber?: number
    sugar?: number
    sodiumMg?: number
    servingSize: string
    glycemicIndex?: number | null
    isVegan?: boolean
    isGlutenFree?: boolean
    isHalal?: boolean
    region?: string | null
    cuisineTags?: FoodItemCreatecuisineTagsInput | string[]
    source?: string
    foodGroup?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodItemUncheckedCreateInput = {
    id?: string
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    fiber?: number
    sugar?: number
    sodiumMg?: number
    servingSize: string
    glycemicIndex?: number | null
    isVegan?: boolean
    isGlutenFree?: boolean
    isHalal?: boolean
    region?: string | null
    cuisineTags?: FoodItemCreatecuisineTagsInput | string[]
    source?: string
    foodGroup?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    fiber?: FloatFieldUpdateOperationsInput | number
    sugar?: FloatFieldUpdateOperationsInput | number
    sodiumMg?: FloatFieldUpdateOperationsInput | number
    servingSize?: StringFieldUpdateOperationsInput | string
    glycemicIndex?: NullableIntFieldUpdateOperationsInput | number | null
    isVegan?: BoolFieldUpdateOperationsInput | boolean
    isGlutenFree?: BoolFieldUpdateOperationsInput | boolean
    isHalal?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    cuisineTags?: FoodItemUpdatecuisineTagsInput | string[]
    source?: StringFieldUpdateOperationsInput | string
    foodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    fiber?: FloatFieldUpdateOperationsInput | number
    sugar?: FloatFieldUpdateOperationsInput | number
    sodiumMg?: FloatFieldUpdateOperationsInput | number
    servingSize?: StringFieldUpdateOperationsInput | string
    glycemicIndex?: NullableIntFieldUpdateOperationsInput | number | null
    isVegan?: BoolFieldUpdateOperationsInput | boolean
    isGlutenFree?: BoolFieldUpdateOperationsInput | boolean
    isHalal?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    cuisineTags?: FoodItemUpdatecuisineTagsInput | string[]
    source?: StringFieldUpdateOperationsInput | string
    foodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodItemCreateManyInput = {
    id?: string
    name: string
    calories: number
    protein: number
    carbs: number
    fat: number
    fiber?: number
    sugar?: number
    sodiumMg?: number
    servingSize: string
    glycemicIndex?: number | null
    isVegan?: boolean
    isGlutenFree?: boolean
    isHalal?: boolean
    region?: string | null
    cuisineTags?: FoodItemCreatecuisineTagsInput | string[]
    source?: string
    foodGroup?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    fiber?: FloatFieldUpdateOperationsInput | number
    sugar?: FloatFieldUpdateOperationsInput | number
    sodiumMg?: FloatFieldUpdateOperationsInput | number
    servingSize?: StringFieldUpdateOperationsInput | string
    glycemicIndex?: NullableIntFieldUpdateOperationsInput | number | null
    isVegan?: BoolFieldUpdateOperationsInput | boolean
    isGlutenFree?: BoolFieldUpdateOperationsInput | boolean
    isHalal?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    cuisineTags?: FoodItemUpdatecuisineTagsInput | string[]
    source?: StringFieldUpdateOperationsInput | string
    foodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    fiber?: FloatFieldUpdateOperationsInput | number
    sugar?: FloatFieldUpdateOperationsInput | number
    sodiumMg?: FloatFieldUpdateOperationsInput | number
    servingSize?: StringFieldUpdateOperationsInput | string
    glycemicIndex?: NullableIntFieldUpdateOperationsInput | number | null
    isVegan?: BoolFieldUpdateOperationsInput | boolean
    isGlutenFree?: BoolFieldUpdateOperationsInput | boolean
    isHalal?: BoolFieldUpdateOperationsInput | boolean
    region?: NullableStringFieldUpdateOperationsInput | string | null
    cuisineTags?: FoodItemUpdatecuisineTagsInput | string[]
    source?: StringFieldUpdateOperationsInput | string
    foodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealLogCreateInput = {
    id?: string
    userId: string
    loggedAt?: Date | string
    mealType: $Enums.MealType
    foodItems: JsonNullValueInput | InputJsonValue
    totalCalories: number
    totalProtein: number
    totalCarbs: number
    totalFat: number
    isAdherent: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealLogUncheckedCreateInput = {
    id?: string
    userId: string
    loggedAt?: Date | string
    mealType: $Enums.MealType
    foodItems: JsonNullValueInput | InputJsonValue
    totalCalories: number
    totalProtein: number
    totalCarbs: number
    totalFat: number
    isAdherent: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    foodItems?: JsonNullValueInput | InputJsonValue
    totalCalories?: FloatFieldUpdateOperationsInput | number
    totalProtein?: FloatFieldUpdateOperationsInput | number
    totalCarbs?: FloatFieldUpdateOperationsInput | number
    totalFat?: FloatFieldUpdateOperationsInput | number
    isAdherent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    foodItems?: JsonNullValueInput | InputJsonValue
    totalCalories?: FloatFieldUpdateOperationsInput | number
    totalProtein?: FloatFieldUpdateOperationsInput | number
    totalCarbs?: FloatFieldUpdateOperationsInput | number
    totalFat?: FloatFieldUpdateOperationsInput | number
    isAdherent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealLogCreateManyInput = {
    id?: string
    userId: string
    loggedAt?: Date | string
    mealType: $Enums.MealType
    foodItems: JsonNullValueInput | InputJsonValue
    totalCalories: number
    totalProtein: number
    totalCarbs: number
    totalFat: number
    isAdherent: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    foodItems?: JsonNullValueInput | InputJsonValue
    totalCalories?: FloatFieldUpdateOperationsInput | number
    totalProtein?: FloatFieldUpdateOperationsInput | number
    totalCarbs?: FloatFieldUpdateOperationsInput | number
    totalFat?: FloatFieldUpdateOperationsInput | number
    isAdherent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    loggedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealType?: EnumMealTypeFieldUpdateOperationsInput | $Enums.MealType
    foodItems?: JsonNullValueInput | InputJsonValue
    totalCalories?: FloatFieldUpdateOperationsInput | number
    totalProtein?: FloatFieldUpdateOperationsInput | number
    totalCarbs?: FloatFieldUpdateOperationsInput | number
    totalFat?: FloatFieldUpdateOperationsInput | number
    isAdherent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeCreateInput = {
    id?: string
    title: string
    description?: string | null
    prepTimeMins?: number
    cookTimeMins?: number
    servings?: number
    calories?: number
    protein?: number
    carbs?: number
    fat?: number
    ingredients?: JsonNullValueInput | InputJsonValue
    instructions?: JsonNullValueInput | InputJsonValue
    tags?: RecipeCreatetagsInput | string[]
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecipeUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    prepTimeMins?: number
    cookTimeMins?: number
    servings?: number
    calories?: number
    protein?: number
    carbs?: number
    fat?: number
    ingredients?: JsonNullValueInput | InputJsonValue
    instructions?: JsonNullValueInput | InputJsonValue
    tags?: RecipeCreatetagsInput | string[]
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecipeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prepTimeMins?: IntFieldUpdateOperationsInput | number
    cookTimeMins?: IntFieldUpdateOperationsInput | number
    servings?: IntFieldUpdateOperationsInput | number
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    ingredients?: JsonNullValueInput | InputJsonValue
    instructions?: JsonNullValueInput | InputJsonValue
    tags?: RecipeUpdatetagsInput | string[]
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prepTimeMins?: IntFieldUpdateOperationsInput | number
    cookTimeMins?: IntFieldUpdateOperationsInput | number
    servings?: IntFieldUpdateOperationsInput | number
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    ingredients?: JsonNullValueInput | InputJsonValue
    instructions?: JsonNullValueInput | InputJsonValue
    tags?: RecipeUpdatetagsInput | string[]
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    prepTimeMins?: number
    cookTimeMins?: number
    servings?: number
    calories?: number
    protein?: number
    carbs?: number
    fat?: number
    ingredients?: JsonNullValueInput | InputJsonValue
    instructions?: JsonNullValueInput | InputJsonValue
    tags?: RecipeCreatetagsInput | string[]
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecipeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prepTimeMins?: IntFieldUpdateOperationsInput | number
    cookTimeMins?: IntFieldUpdateOperationsInput | number
    servings?: IntFieldUpdateOperationsInput | number
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    ingredients?: JsonNullValueInput | InputJsonValue
    instructions?: JsonNullValueInput | InputJsonValue
    tags?: RecipeUpdatetagsInput | string[]
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecipeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prepTimeMins?: IntFieldUpdateOperationsInput | number
    cookTimeMins?: IntFieldUpdateOperationsInput | number
    servings?: IntFieldUpdateOperationsInput | number
    calories?: FloatFieldUpdateOperationsInput | number
    protein?: FloatFieldUpdateOperationsInput | number
    carbs?: FloatFieldUpdateOperationsInput | number
    fat?: FloatFieldUpdateOperationsInput | number
    ingredients?: JsonNullValueInput | InputJsonValue
    instructions?: JsonNullValueInput | InputJsonValue
    tags?: RecipeUpdatetagsInput | string[]
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FastingLogCreateInput = {
    id?: string
    userId: string
    startTime: Date | string
    endTime?: Date | string | null
    targetHours?: number
    status?: string
    createdAt?: Date | string
  }

  export type FastingLogUncheckedCreateInput = {
    id?: string
    userId: string
    startTime: Date | string
    endTime?: Date | string | null
    targetHours?: number
    status?: string
    createdAt?: Date | string
  }

  export type FastingLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetHours?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FastingLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetHours?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FastingLogCreateManyInput = {
    id?: string
    userId: string
    startTime: Date | string
    endTime?: Date | string | null
    targetHours?: number
    status?: string
    createdAt?: Date | string
  }

  export type FastingLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetHours?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FastingLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    targetHours?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type FoodItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    fiber?: SortOrder
    sugar?: SortOrder
    sodiumMg?: SortOrder
    servingSize?: SortOrder
    glycemicIndex?: SortOrder
    isVegan?: SortOrder
    isGlutenFree?: SortOrder
    isHalal?: SortOrder
    region?: SortOrder
    cuisineTags?: SortOrder
    source?: SortOrder
    foodGroup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodItemAvgOrderByAggregateInput = {
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    fiber?: SortOrder
    sugar?: SortOrder
    sodiumMg?: SortOrder
    glycemicIndex?: SortOrder
  }

  export type FoodItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    fiber?: SortOrder
    sugar?: SortOrder
    sodiumMg?: SortOrder
    servingSize?: SortOrder
    glycemicIndex?: SortOrder
    isVegan?: SortOrder
    isGlutenFree?: SortOrder
    isHalal?: SortOrder
    region?: SortOrder
    source?: SortOrder
    foodGroup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    fiber?: SortOrder
    sugar?: SortOrder
    sodiumMg?: SortOrder
    servingSize?: SortOrder
    glycemicIndex?: SortOrder
    isVegan?: SortOrder
    isGlutenFree?: SortOrder
    isHalal?: SortOrder
    region?: SortOrder
    source?: SortOrder
    foodGroup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodItemSumOrderByAggregateInput = {
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    fiber?: SortOrder
    sugar?: SortOrder
    sodiumMg?: SortOrder
    glycemicIndex?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumMealTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MealType | EnumMealTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMealTypeFilter<$PrismaModel> | $Enums.MealType
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

  export type MealLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    loggedAt?: SortOrder
    mealType?: SortOrder
    foodItems?: SortOrder
    totalCalories?: SortOrder
    totalProtein?: SortOrder
    totalCarbs?: SortOrder
    totalFat?: SortOrder
    isAdherent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MealLogAvgOrderByAggregateInput = {
    totalCalories?: SortOrder
    totalProtein?: SortOrder
    totalCarbs?: SortOrder
    totalFat?: SortOrder
  }

  export type MealLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    loggedAt?: SortOrder
    mealType?: SortOrder
    totalCalories?: SortOrder
    totalProtein?: SortOrder
    totalCarbs?: SortOrder
    totalFat?: SortOrder
    isAdherent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MealLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    loggedAt?: SortOrder
    mealType?: SortOrder
    totalCalories?: SortOrder
    totalProtein?: SortOrder
    totalCarbs?: SortOrder
    totalFat?: SortOrder
    isAdherent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MealLogSumOrderByAggregateInput = {
    totalCalories?: SortOrder
    totalProtein?: SortOrder
    totalCarbs?: SortOrder
    totalFat?: SortOrder
  }

  export type EnumMealTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MealType | EnumMealTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMealTypeWithAggregatesFilter<$PrismaModel> | $Enums.MealType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMealTypeFilter<$PrismaModel>
    _max?: NestedEnumMealTypeFilter<$PrismaModel>
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

  export type RecipeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    prepTimeMins?: SortOrder
    cookTimeMins?: SortOrder
    servings?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    ingredients?: SortOrder
    instructions?: SortOrder
    tags?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecipeAvgOrderByAggregateInput = {
    prepTimeMins?: SortOrder
    cookTimeMins?: SortOrder
    servings?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
  }

  export type RecipeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    prepTimeMins?: SortOrder
    cookTimeMins?: SortOrder
    servings?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecipeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    prepTimeMins?: SortOrder
    cookTimeMins?: SortOrder
    servings?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecipeSumOrderByAggregateInput = {
    prepTimeMins?: SortOrder
    cookTimeMins?: SortOrder
    servings?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    carbs?: SortOrder
    fat?: SortOrder
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

  export type FastingLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    targetHours?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type FastingLogAvgOrderByAggregateInput = {
    targetHours?: SortOrder
  }

  export type FastingLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    targetHours?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type FastingLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    targetHours?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type FastingLogSumOrderByAggregateInput = {
    targetHours?: SortOrder
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

  export type FoodItemCreatecuisineTagsInput = {
    set: string[]
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

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
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

  export type FoodItemUpdatecuisineTagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumMealTypeFieldUpdateOperationsInput = {
    set?: $Enums.MealType
  }

  export type RecipeCreatetagsInput = {
    set: string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecipeUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumMealTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MealType | EnumMealTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMealTypeFilter<$PrismaModel> | $Enums.MealType
  }

  export type NestedEnumMealTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MealType | EnumMealTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MealType[] | ListEnumMealTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMealTypeWithAggregatesFilter<$PrismaModel> | $Enums.MealType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMealTypeFilter<$PrismaModel>
    _max?: NestedEnumMealTypeFilter<$PrismaModel>
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use FoodItemDefaultArgs instead
     */
    export type FoodItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FoodItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MealLogDefaultArgs instead
     */
    export type MealLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MealLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RecipeDefaultArgs instead
     */
    export type RecipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RecipeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FastingLogDefaultArgs instead
     */
    export type FastingLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FastingLogDefaultArgs<ExtArgs>

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