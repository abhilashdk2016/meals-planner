
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
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Food
 * 
 */
export type Food = $Result.DefaultSelection<Prisma.$FoodPayload>
/**
 * Model ServingUnit
 * 
 */
export type ServingUnit = $Result.DefaultSelection<Prisma.$ServingUnitPayload>
/**
 * Model FoodServingUnit
 * 
 */
export type FoodServingUnit = $Result.DefaultSelection<Prisma.$FoodServingUnitPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Meal
 * 
 */
export type Meal = $Result.DefaultSelection<Prisma.$MealPayload>
/**
 * Model MealFood
 * 
 */
export type MealFood = $Result.DefaultSelection<Prisma.$MealFoodPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.food`: Exposes CRUD operations for the **Food** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Foods
    * const foods = await prisma.food.findMany()
    * ```
    */
  get food(): Prisma.FoodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servingUnit`: Exposes CRUD operations for the **ServingUnit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServingUnits
    * const servingUnits = await prisma.servingUnit.findMany()
    * ```
    */
  get servingUnit(): Prisma.ServingUnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.foodServingUnit`: Exposes CRUD operations for the **FoodServingUnit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodServingUnits
    * const foodServingUnits = await prisma.foodServingUnit.findMany()
    * ```
    */
  get foodServingUnit(): Prisma.FoodServingUnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meal`: Exposes CRUD operations for the **Meal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meals
    * const meals = await prisma.meal.findMany()
    * ```
    */
  get meal(): Prisma.MealDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mealFood`: Exposes CRUD operations for the **MealFood** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MealFoods
    * const mealFoods = await prisma.mealFood.findMany()
    * ```
    */
  get mealFood(): Prisma.MealFoodDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Category: 'Category',
    Food: 'Food',
    ServingUnit: 'ServingUnit',
    FoodServingUnit: 'FoodServingUnit',
    User: 'User',
    Meal: 'Meal',
    MealFood: 'MealFood'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "category" | "food" | "servingUnit" | "foodServingUnit" | "user" | "meal" | "mealFood"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Food: {
        payload: Prisma.$FoodPayload<ExtArgs>
        fields: Prisma.FoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          findFirst: {
            args: Prisma.FoodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          findMany: {
            args: Prisma.FoodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          create: {
            args: Prisma.FoodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          createMany: {
            args: Prisma.FoodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          delete: {
            args: Prisma.FoodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          update: {
            args: Prisma.FoodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          deleteMany: {
            args: Prisma.FoodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FoodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>[]
          }
          upsert: {
            args: Prisma.FoodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodPayload>
          }
          aggregate: {
            args: Prisma.FoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFood>
          }
          groupBy: {
            args: Prisma.FoodGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodCountArgs<ExtArgs>
            result: $Utils.Optional<FoodCountAggregateOutputType> | number
          }
        }
      }
      ServingUnit: {
        payload: Prisma.$ServingUnitPayload<ExtArgs>
        fields: Prisma.ServingUnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServingUnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServingUnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServingUnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServingUnitPayload>
          }
          findFirst: {
            args: Prisma.ServingUnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServingUnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServingUnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServingUnitPayload>
          }
          findMany: {
            args: Prisma.ServingUnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServingUnitPayload>[]
          }
          create: {
            args: Prisma.ServingUnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServingUnitPayload>
          }
          createMany: {
            args: Prisma.ServingUnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServingUnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServingUnitPayload>[]
          }
          delete: {
            args: Prisma.ServingUnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServingUnitPayload>
          }
          update: {
            args: Prisma.ServingUnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServingUnitPayload>
          }
          deleteMany: {
            args: Prisma.ServingUnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServingUnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServingUnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServingUnitPayload>[]
          }
          upsert: {
            args: Prisma.ServingUnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServingUnitPayload>
          }
          aggregate: {
            args: Prisma.ServingUnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServingUnit>
          }
          groupBy: {
            args: Prisma.ServingUnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServingUnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServingUnitCountArgs<ExtArgs>
            result: $Utils.Optional<ServingUnitCountAggregateOutputType> | number
          }
        }
      }
      FoodServingUnit: {
        payload: Prisma.$FoodServingUnitPayload<ExtArgs>
        fields: Prisma.FoodServingUnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FoodServingUnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodServingUnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodServingUnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodServingUnitPayload>
          }
          findFirst: {
            args: Prisma.FoodServingUnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodServingUnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodServingUnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodServingUnitPayload>
          }
          findMany: {
            args: Prisma.FoodServingUnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodServingUnitPayload>[]
          }
          create: {
            args: Prisma.FoodServingUnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodServingUnitPayload>
          }
          createMany: {
            args: Prisma.FoodServingUnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FoodServingUnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodServingUnitPayload>[]
          }
          delete: {
            args: Prisma.FoodServingUnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodServingUnitPayload>
          }
          update: {
            args: Prisma.FoodServingUnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodServingUnitPayload>
          }
          deleteMany: {
            args: Prisma.FoodServingUnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FoodServingUnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FoodServingUnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodServingUnitPayload>[]
          }
          upsert: {
            args: Prisma.FoodServingUnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FoodServingUnitPayload>
          }
          aggregate: {
            args: Prisma.FoodServingUnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFoodServingUnit>
          }
          groupBy: {
            args: Prisma.FoodServingUnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<FoodServingUnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodServingUnitCountArgs<ExtArgs>
            result: $Utils.Optional<FoodServingUnitCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Meal: {
        payload: Prisma.$MealPayload<ExtArgs>
        fields: Prisma.MealFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findFirst: {
            args: Prisma.MealFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findMany: {
            args: Prisma.MealFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          create: {
            args: Prisma.MealCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          createMany: {
            args: Prisma.MealCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          delete: {
            args: Prisma.MealDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          update: {
            args: Prisma.MealUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          deleteMany: {
            args: Prisma.MealDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          upsert: {
            args: Prisma.MealUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          aggregate: {
            args: Prisma.MealAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeal>
          }
          groupBy: {
            args: Prisma.MealGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealCountArgs<ExtArgs>
            result: $Utils.Optional<MealCountAggregateOutputType> | number
          }
        }
      }
      MealFood: {
        payload: Prisma.$MealFoodPayload<ExtArgs>
        fields: Prisma.MealFoodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealFoodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealFoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealFoodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealFoodPayload>
          }
          findFirst: {
            args: Prisma.MealFoodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealFoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealFoodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealFoodPayload>
          }
          findMany: {
            args: Prisma.MealFoodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealFoodPayload>[]
          }
          create: {
            args: Prisma.MealFoodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealFoodPayload>
          }
          createMany: {
            args: Prisma.MealFoodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealFoodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealFoodPayload>[]
          }
          delete: {
            args: Prisma.MealFoodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealFoodPayload>
          }
          update: {
            args: Prisma.MealFoodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealFoodPayload>
          }
          deleteMany: {
            args: Prisma.MealFoodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealFoodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealFoodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealFoodPayload>[]
          }
          upsert: {
            args: Prisma.MealFoodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealFoodPayload>
          }
          aggregate: {
            args: Prisma.MealFoodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMealFood>
          }
          groupBy: {
            args: Prisma.MealFoodGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealFoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealFoodCountArgs<ExtArgs>
            result: $Utils.Optional<MealFoodCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    category?: CategoryOmit
    food?: FoodOmit
    servingUnit?: ServingUnitOmit
    foodServingUnit?: FoodServingUnitOmit
    user?: UserOmit
    meal?: MealOmit
    mealFood?: MealFoodOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    foods: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foods?: boolean | CategoryCountOutputTypeCountFoodsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountFoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodWhereInput
  }


  /**
   * Count Type FoodCountOutputType
   */

  export type FoodCountOutputType = {
    foodServingUnits: number
    servingUnits: number
    mealFood: number
  }

  export type FoodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foodServingUnits?: boolean | FoodCountOutputTypeCountFoodServingUnitsArgs
    servingUnits?: boolean | FoodCountOutputTypeCountServingUnitsArgs
    mealFood?: boolean | FoodCountOutputTypeCountMealFoodArgs
  }

  // Custom InputTypes
  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCountOutputType
     */
    select?: FoodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeCountFoodServingUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodServingUnitWhereInput
  }

  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeCountServingUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServingUnitWhereInput
  }

  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeCountMealFoodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealFoodWhereInput
  }


  /**
   * Count Type ServingUnitCountOutputType
   */

  export type ServingUnitCountOutputType = {
    foodServingUnit: number
    mealFood: number
  }

  export type ServingUnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foodServingUnit?: boolean | ServingUnitCountOutputTypeCountFoodServingUnitArgs
    mealFood?: boolean | ServingUnitCountOutputTypeCountMealFoodArgs
  }

  // Custom InputTypes
  /**
   * ServingUnitCountOutputType without action
   */
  export type ServingUnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServingUnitCountOutputType
     */
    select?: ServingUnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServingUnitCountOutputType without action
   */
  export type ServingUnitCountOutputTypeCountFoodServingUnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodServingUnitWhereInput
  }

  /**
   * ServingUnitCountOutputType without action
   */
  export type ServingUnitCountOutputTypeCountMealFoodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealFoodWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    meals: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meals?: boolean | UserCountOutputTypeCountMealsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
  }


  /**
   * Count Type MealCountOutputType
   */

  export type MealCountOutputType = {
    foods: number
    mealFoods: number
  }

  export type MealCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foods?: boolean | MealCountOutputTypeCountFoodsArgs
    mealFoods?: boolean | MealCountOutputTypeCountMealFoodsArgs
  }

  // Custom InputTypes
  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealCountOutputType
     */
    select?: MealCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeCountFoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodWhereInput
  }

  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeCountMealFoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealFoodWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    foods?: boolean | Category$foodsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foods?: boolean | Category$foodsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      foods: Prisma.$FoodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    foods<T extends Category$foodsArgs<ExtArgs> = {}>(args?: Subset<T, Category$foodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.foods
   */
  export type Category$foodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    where?: FoodWhereInput
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    cursor?: FoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Food
   */

  export type AggregateFood = {
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  export type FoodAvgAggregateOutputType = {
    id: number | null
    calories: number | null
    protein: number | null
    fat: number | null
    carbohydrates: number | null
    fiber: number | null
    sugar: number | null
    categoryId: number | null
    mealId: number | null
  }

  export type FoodSumAggregateOutputType = {
    id: number | null
    calories: number | null
    protein: number | null
    fat: number | null
    carbohydrates: number | null
    fiber: number | null
    sugar: number | null
    categoryId: number | null
    mealId: number | null
  }

  export type FoodMinAggregateOutputType = {
    id: number | null
    name: string | null
    calories: number | null
    protein: number | null
    fat: number | null
    carbohydrates: number | null
    fiber: number | null
    sugar: number | null
    categoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    mealId: number | null
  }

  export type FoodMaxAggregateOutputType = {
    id: number | null
    name: string | null
    calories: number | null
    protein: number | null
    fat: number | null
    carbohydrates: number | null
    fiber: number | null
    sugar: number | null
    categoryId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    mealId: number | null
  }

  export type FoodCountAggregateOutputType = {
    id: number
    name: number
    calories: number
    protein: number
    fat: number
    carbohydrates: number
    fiber: number
    sugar: number
    categoryId: number
    createdAt: number
    updatedAt: number
    mealId: number
    _all: number
  }


  export type FoodAvgAggregateInputType = {
    id?: true
    calories?: true
    protein?: true
    fat?: true
    carbohydrates?: true
    fiber?: true
    sugar?: true
    categoryId?: true
    mealId?: true
  }

  export type FoodSumAggregateInputType = {
    id?: true
    calories?: true
    protein?: true
    fat?: true
    carbohydrates?: true
    fiber?: true
    sugar?: true
    categoryId?: true
    mealId?: true
  }

  export type FoodMinAggregateInputType = {
    id?: true
    name?: true
    calories?: true
    protein?: true
    fat?: true
    carbohydrates?: true
    fiber?: true
    sugar?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    mealId?: true
  }

  export type FoodMaxAggregateInputType = {
    id?: true
    name?: true
    calories?: true
    protein?: true
    fat?: true
    carbohydrates?: true
    fiber?: true
    sugar?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    mealId?: true
  }

  export type FoodCountAggregateInputType = {
    id?: true
    name?: true
    calories?: true
    protein?: true
    fat?: true
    carbohydrates?: true
    fiber?: true
    sugar?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    mealId?: true
    _all?: true
  }

  export type FoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Food to aggregate.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Foods
    **/
    _count?: true | FoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodMaxAggregateInputType
  }

  export type GetFoodAggregateType<T extends FoodAggregateArgs> = {
        [P in keyof T & keyof AggregateFood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFood[P]>
      : GetScalarType<T[P], AggregateFood[P]>
  }




  export type FoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodWhereInput
    orderBy?: FoodOrderByWithAggregationInput | FoodOrderByWithAggregationInput[]
    by: FoodScalarFieldEnum[] | FoodScalarFieldEnum
    having?: FoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodCountAggregateInputType | true
    _avg?: FoodAvgAggregateInputType
    _sum?: FoodSumAggregateInputType
    _min?: FoodMinAggregateInputType
    _max?: FoodMaxAggregateInputType
  }

  export type FoodGroupByOutputType = {
    id: number
    name: string
    calories: number | null
    protein: number | null
    fat: number | null
    carbohydrates: number | null
    fiber: number | null
    sugar: number | null
    categoryId: number | null
    createdAt: Date
    updatedAt: Date
    mealId: number | null
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  type GetFoodGroupByPayload<T extends FoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodGroupByOutputType[P]>
            : GetScalarType<T[P], FoodGroupByOutputType[P]>
        }
      >
    >


  export type FoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    calories?: boolean
    protein?: boolean
    fat?: boolean
    carbohydrates?: boolean
    fiber?: boolean
    sugar?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mealId?: boolean
    foodServingUnits?: boolean | Food$foodServingUnitsArgs<ExtArgs>
    servingUnits?: boolean | Food$servingUnitsArgs<ExtArgs>
    category?: boolean | Food$categoryArgs<ExtArgs>
    meal?: boolean | Food$mealArgs<ExtArgs>
    mealFood?: boolean | Food$mealFoodArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>

  export type FoodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    calories?: boolean
    protein?: boolean
    fat?: boolean
    carbohydrates?: boolean
    fiber?: boolean
    sugar?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mealId?: boolean
    category?: boolean | Food$categoryArgs<ExtArgs>
    meal?: boolean | Food$mealArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>

  export type FoodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    calories?: boolean
    protein?: boolean
    fat?: boolean
    carbohydrates?: boolean
    fiber?: boolean
    sugar?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mealId?: boolean
    category?: boolean | Food$categoryArgs<ExtArgs>
    meal?: boolean | Food$mealArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>

  export type FoodSelectScalar = {
    id?: boolean
    name?: boolean
    calories?: boolean
    protein?: boolean
    fat?: boolean
    carbohydrates?: boolean
    fiber?: boolean
    sugar?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mealId?: boolean
  }

  export type FoodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "calories" | "protein" | "fat" | "carbohydrates" | "fiber" | "sugar" | "categoryId" | "createdAt" | "updatedAt" | "mealId", ExtArgs["result"]["food"]>
  export type FoodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foodServingUnits?: boolean | Food$foodServingUnitsArgs<ExtArgs>
    servingUnits?: boolean | Food$servingUnitsArgs<ExtArgs>
    category?: boolean | Food$categoryArgs<ExtArgs>
    meal?: boolean | Food$mealArgs<ExtArgs>
    mealFood?: boolean | Food$mealFoodArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FoodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Food$categoryArgs<ExtArgs>
    meal?: boolean | Food$mealArgs<ExtArgs>
  }
  export type FoodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Food$categoryArgs<ExtArgs>
    meal?: boolean | Food$mealArgs<ExtArgs>
  }

  export type $FoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Food"
    objects: {
      foodServingUnits: Prisma.$FoodServingUnitPayload<ExtArgs>[]
      servingUnits: Prisma.$ServingUnitPayload<ExtArgs>[]
      category: Prisma.$CategoryPayload<ExtArgs> | null
      meal: Prisma.$MealPayload<ExtArgs> | null
      mealFood: Prisma.$MealFoodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      calories: number | null
      protein: number | null
      fat: number | null
      carbohydrates: number | null
      fiber: number | null
      sugar: number | null
      categoryId: number | null
      createdAt: Date
      updatedAt: Date
      mealId: number | null
    }, ExtArgs["result"]["food"]>
    composites: {}
  }

  type FoodGetPayload<S extends boolean | null | undefined | FoodDefaultArgs> = $Result.GetResult<Prisma.$FoodPayload, S>

  type FoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodCountAggregateInputType | true
    }

  export interface FoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Food'], meta: { name: 'Food' } }
    /**
     * Find zero or one Food that matches the filter.
     * @param {FoodFindUniqueArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodFindUniqueArgs>(args: SelectSubset<T, FoodFindUniqueArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Food that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodFindUniqueOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodFindFirstArgs>(args?: SelectSubset<T, FoodFindFirstArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Food that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Foods
     * const foods = await prisma.food.findMany()
     * 
     * // Get first 10 Foods
     * const foods = await prisma.food.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodWithIdOnly = await prisma.food.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodFindManyArgs>(args?: SelectSubset<T, FoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Food.
     * @param {FoodCreateArgs} args - Arguments to create a Food.
     * @example
     * // Create one Food
     * const Food = await prisma.food.create({
     *   data: {
     *     // ... data to create a Food
     *   }
     * })
     * 
     */
    create<T extends FoodCreateArgs>(args: SelectSubset<T, FoodCreateArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Foods.
     * @param {FoodCreateManyArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const food = await prisma.food.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodCreateManyArgs>(args?: SelectSubset<T, FoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Foods and returns the data saved in the database.
     * @param {FoodCreateManyAndReturnArgs} args - Arguments to create many Foods.
     * @example
     * // Create many Foods
     * const food = await prisma.food.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Foods and only return the `id`
     * const foodWithIdOnly = await prisma.food.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoodCreateManyAndReturnArgs>(args?: SelectSubset<T, FoodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Food.
     * @param {FoodDeleteArgs} args - Arguments to delete one Food.
     * @example
     * // Delete one Food
     * const Food = await prisma.food.delete({
     *   where: {
     *     // ... filter to delete one Food
     *   }
     * })
     * 
     */
    delete<T extends FoodDeleteArgs>(args: SelectSubset<T, FoodDeleteArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Food.
     * @param {FoodUpdateArgs} args - Arguments to update one Food.
     * @example
     * // Update one Food
     * const food = await prisma.food.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodUpdateArgs>(args: SelectSubset<T, FoodUpdateArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Foods.
     * @param {FoodDeleteManyArgs} args - Arguments to filter Foods to delete.
     * @example
     * // Delete a few Foods
     * const { count } = await prisma.food.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodDeleteManyArgs>(args?: SelectSubset<T, FoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Foods
     * const food = await prisma.food.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodUpdateManyArgs>(args: SelectSubset<T, FoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods and returns the data updated in the database.
     * @param {FoodUpdateManyAndReturnArgs} args - Arguments to update many Foods.
     * @example
     * // Update many Foods
     * const food = await prisma.food.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Foods and only return the `id`
     * const foodWithIdOnly = await prisma.food.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FoodUpdateManyAndReturnArgs>(args: SelectSubset<T, FoodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Food.
     * @param {FoodUpsertArgs} args - Arguments to update or create a Food.
     * @example
     * // Update or create a Food
     * const food = await prisma.food.upsert({
     *   create: {
     *     // ... data to create a Food
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Food we want to update
     *   }
     * })
     */
    upsert<T extends FoodUpsertArgs>(args: SelectSubset<T, FoodUpsertArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCountArgs} args - Arguments to filter Foods to count.
     * @example
     * // Count the number of Foods
     * const count = await prisma.food.count({
     *   where: {
     *     // ... the filter for the Foods we want to count
     *   }
     * })
    **/
    count<T extends FoodCountArgs>(
      args?: Subset<T, FoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoodAggregateArgs>(args: Subset<T, FoodAggregateArgs>): Prisma.PrismaPromise<GetFoodAggregateType<T>>

    /**
     * Group by Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodGroupByArgs} args - Group by arguments.
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
      T extends FoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodGroupByArgs['orderBy'] }
        : { orderBy?: FoodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Food model
   */
  readonly fields: FoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Food.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    foodServingUnits<T extends Food$foodServingUnitsArgs<ExtArgs> = {}>(args?: Subset<T, Food$foodServingUnitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodServingUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    servingUnits<T extends Food$servingUnitsArgs<ExtArgs> = {}>(args?: Subset<T, Food$servingUnitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServingUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    category<T extends Food$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Food$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    meal<T extends Food$mealArgs<ExtArgs> = {}>(args?: Subset<T, Food$mealArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mealFood<T extends Food$mealFoodArgs<ExtArgs> = {}>(args?: Subset<T, Food$mealFoodArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealFoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Food model
   */
  interface FoodFieldRefs {
    readonly id: FieldRef<"Food", 'Int'>
    readonly name: FieldRef<"Food", 'String'>
    readonly calories: FieldRef<"Food", 'Float'>
    readonly protein: FieldRef<"Food", 'Float'>
    readonly fat: FieldRef<"Food", 'Float'>
    readonly carbohydrates: FieldRef<"Food", 'Float'>
    readonly fiber: FieldRef<"Food", 'Float'>
    readonly sugar: FieldRef<"Food", 'Float'>
    readonly categoryId: FieldRef<"Food", 'Int'>
    readonly createdAt: FieldRef<"Food", 'DateTime'>
    readonly updatedAt: FieldRef<"Food", 'DateTime'>
    readonly mealId: FieldRef<"Food", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Food findUnique
   */
  export type FoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food findUniqueOrThrow
   */
  export type FoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food findFirst
   */
  export type FoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food findFirstOrThrow
   */
  export type FoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food findMany
   */
  export type FoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Food create
   */
  export type FoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The data needed to create a Food.
     */
    data: XOR<FoodCreateInput, FoodUncheckedCreateInput>
  }

  /**
   * Food createMany
   */
  export type FoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Foods.
     */
    data: FoodCreateManyInput | FoodCreateManyInput[]
  }

  /**
   * Food createManyAndReturn
   */
  export type FoodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * The data used to create many Foods.
     */
    data: FoodCreateManyInput | FoodCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Food update
   */
  export type FoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The data needed to update a Food.
     */
    data: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
    /**
     * Choose, which Food to update.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food updateMany
   */
  export type FoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Foods.
     */
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyInput>
    /**
     * Filter which Foods to update
     */
    where?: FoodWhereInput
    /**
     * Limit how many Foods to update.
     */
    limit?: number
  }

  /**
   * Food updateManyAndReturn
   */
  export type FoodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * The data used to update Foods.
     */
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyInput>
    /**
     * Filter which Foods to update
     */
    where?: FoodWhereInput
    /**
     * Limit how many Foods to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Food upsert
   */
  export type FoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The filter to search for the Food to update in case it exists.
     */
    where: FoodWhereUniqueInput
    /**
     * In case the Food found by the `where` argument doesn't exist, create a new Food with this data.
     */
    create: XOR<FoodCreateInput, FoodUncheckedCreateInput>
    /**
     * In case the Food was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
  }

  /**
   * Food delete
   */
  export type FoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter which Food to delete.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food deleteMany
   */
  export type FoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foods to delete
     */
    where?: FoodWhereInput
    /**
     * Limit how many Foods to delete.
     */
    limit?: number
  }

  /**
   * Food.foodServingUnits
   */
  export type Food$foodServingUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodServingUnit
     */
    select?: FoodServingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodServingUnit
     */
    omit?: FoodServingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodServingUnitInclude<ExtArgs> | null
    where?: FoodServingUnitWhereInput
    orderBy?: FoodServingUnitOrderByWithRelationInput | FoodServingUnitOrderByWithRelationInput[]
    cursor?: FoodServingUnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodServingUnitScalarFieldEnum | FoodServingUnitScalarFieldEnum[]
  }

  /**
   * Food.servingUnits
   */
  export type Food$servingUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServingUnit
     */
    select?: ServingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServingUnit
     */
    omit?: ServingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServingUnitInclude<ExtArgs> | null
    where?: ServingUnitWhereInput
    orderBy?: ServingUnitOrderByWithRelationInput | ServingUnitOrderByWithRelationInput[]
    cursor?: ServingUnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServingUnitScalarFieldEnum | ServingUnitScalarFieldEnum[]
  }

  /**
   * Food.category
   */
  export type Food$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Food.meal
   */
  export type Food$mealArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    where?: MealWhereInput
  }

  /**
   * Food.mealFood
   */
  export type Food$mealFoodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodInclude<ExtArgs> | null
    where?: MealFoodWhereInput
    orderBy?: MealFoodOrderByWithRelationInput | MealFoodOrderByWithRelationInput[]
    cursor?: MealFoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealFoodScalarFieldEnum | MealFoodScalarFieldEnum[]
  }

  /**
   * Food without action
   */
  export type FoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
  }


  /**
   * Model ServingUnit
   */

  export type AggregateServingUnit = {
    _count: ServingUnitCountAggregateOutputType | null
    _avg: ServingUnitAvgAggregateOutputType | null
    _sum: ServingUnitSumAggregateOutputType | null
    _min: ServingUnitMinAggregateOutputType | null
    _max: ServingUnitMaxAggregateOutputType | null
  }

  export type ServingUnitAvgAggregateOutputType = {
    id: number | null
    foodId: number | null
  }

  export type ServingUnitSumAggregateOutputType = {
    id: number | null
    foodId: number | null
  }

  export type ServingUnitMinAggregateOutputType = {
    id: number | null
    name: string | null
    foodId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServingUnitMaxAggregateOutputType = {
    id: number | null
    name: string | null
    foodId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServingUnitCountAggregateOutputType = {
    id: number
    name: number
    foodId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServingUnitAvgAggregateInputType = {
    id?: true
    foodId?: true
  }

  export type ServingUnitSumAggregateInputType = {
    id?: true
    foodId?: true
  }

  export type ServingUnitMinAggregateInputType = {
    id?: true
    name?: true
    foodId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServingUnitMaxAggregateInputType = {
    id?: true
    name?: true
    foodId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServingUnitCountAggregateInputType = {
    id?: true
    name?: true
    foodId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServingUnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServingUnit to aggregate.
     */
    where?: ServingUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServingUnits to fetch.
     */
    orderBy?: ServingUnitOrderByWithRelationInput | ServingUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServingUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServingUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServingUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServingUnits
    **/
    _count?: true | ServingUnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServingUnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServingUnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServingUnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServingUnitMaxAggregateInputType
  }

  export type GetServingUnitAggregateType<T extends ServingUnitAggregateArgs> = {
        [P in keyof T & keyof AggregateServingUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServingUnit[P]>
      : GetScalarType<T[P], AggregateServingUnit[P]>
  }




  export type ServingUnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServingUnitWhereInput
    orderBy?: ServingUnitOrderByWithAggregationInput | ServingUnitOrderByWithAggregationInput[]
    by: ServingUnitScalarFieldEnum[] | ServingUnitScalarFieldEnum
    having?: ServingUnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServingUnitCountAggregateInputType | true
    _avg?: ServingUnitAvgAggregateInputType
    _sum?: ServingUnitSumAggregateInputType
    _min?: ServingUnitMinAggregateInputType
    _max?: ServingUnitMaxAggregateInputType
  }

  export type ServingUnitGroupByOutputType = {
    id: number
    name: string
    foodId: number | null
    createdAt: Date
    updatedAt: Date
    _count: ServingUnitCountAggregateOutputType | null
    _avg: ServingUnitAvgAggregateOutputType | null
    _sum: ServingUnitSumAggregateOutputType | null
    _min: ServingUnitMinAggregateOutputType | null
    _max: ServingUnitMaxAggregateOutputType | null
  }

  type GetServingUnitGroupByPayload<T extends ServingUnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServingUnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServingUnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServingUnitGroupByOutputType[P]>
            : GetScalarType<T[P], ServingUnitGroupByOutputType[P]>
        }
      >
    >


  export type ServingUnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    foodId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    foodServingUnit?: boolean | ServingUnit$foodServingUnitArgs<ExtArgs>
    food?: boolean | ServingUnit$foodArgs<ExtArgs>
    mealFood?: boolean | ServingUnit$mealFoodArgs<ExtArgs>
    _count?: boolean | ServingUnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servingUnit"]>

  export type ServingUnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    foodId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    food?: boolean | ServingUnit$foodArgs<ExtArgs>
  }, ExtArgs["result"]["servingUnit"]>

  export type ServingUnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    foodId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    food?: boolean | ServingUnit$foodArgs<ExtArgs>
  }, ExtArgs["result"]["servingUnit"]>

  export type ServingUnitSelectScalar = {
    id?: boolean
    name?: boolean
    foodId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServingUnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "foodId" | "createdAt" | "updatedAt", ExtArgs["result"]["servingUnit"]>
  export type ServingUnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foodServingUnit?: boolean | ServingUnit$foodServingUnitArgs<ExtArgs>
    food?: boolean | ServingUnit$foodArgs<ExtArgs>
    mealFood?: boolean | ServingUnit$mealFoodArgs<ExtArgs>
    _count?: boolean | ServingUnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServingUnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | ServingUnit$foodArgs<ExtArgs>
  }
  export type ServingUnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | ServingUnit$foodArgs<ExtArgs>
  }

  export type $ServingUnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServingUnit"
    objects: {
      foodServingUnit: Prisma.$FoodServingUnitPayload<ExtArgs>[]
      food: Prisma.$FoodPayload<ExtArgs> | null
      mealFood: Prisma.$MealFoodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      foodId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["servingUnit"]>
    composites: {}
  }

  type ServingUnitGetPayload<S extends boolean | null | undefined | ServingUnitDefaultArgs> = $Result.GetResult<Prisma.$ServingUnitPayload, S>

  type ServingUnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServingUnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServingUnitCountAggregateInputType | true
    }

  export interface ServingUnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServingUnit'], meta: { name: 'ServingUnit' } }
    /**
     * Find zero or one ServingUnit that matches the filter.
     * @param {ServingUnitFindUniqueArgs} args - Arguments to find a ServingUnit
     * @example
     * // Get one ServingUnit
     * const servingUnit = await prisma.servingUnit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServingUnitFindUniqueArgs>(args: SelectSubset<T, ServingUnitFindUniqueArgs<ExtArgs>>): Prisma__ServingUnitClient<$Result.GetResult<Prisma.$ServingUnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServingUnit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServingUnitFindUniqueOrThrowArgs} args - Arguments to find a ServingUnit
     * @example
     * // Get one ServingUnit
     * const servingUnit = await prisma.servingUnit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServingUnitFindUniqueOrThrowArgs>(args: SelectSubset<T, ServingUnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServingUnitClient<$Result.GetResult<Prisma.$ServingUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServingUnit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServingUnitFindFirstArgs} args - Arguments to find a ServingUnit
     * @example
     * // Get one ServingUnit
     * const servingUnit = await prisma.servingUnit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServingUnitFindFirstArgs>(args?: SelectSubset<T, ServingUnitFindFirstArgs<ExtArgs>>): Prisma__ServingUnitClient<$Result.GetResult<Prisma.$ServingUnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServingUnit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServingUnitFindFirstOrThrowArgs} args - Arguments to find a ServingUnit
     * @example
     * // Get one ServingUnit
     * const servingUnit = await prisma.servingUnit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServingUnitFindFirstOrThrowArgs>(args?: SelectSubset<T, ServingUnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServingUnitClient<$Result.GetResult<Prisma.$ServingUnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServingUnits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServingUnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServingUnits
     * const servingUnits = await prisma.servingUnit.findMany()
     * 
     * // Get first 10 ServingUnits
     * const servingUnits = await prisma.servingUnit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servingUnitWithIdOnly = await prisma.servingUnit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServingUnitFindManyArgs>(args?: SelectSubset<T, ServingUnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServingUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServingUnit.
     * @param {ServingUnitCreateArgs} args - Arguments to create a ServingUnit.
     * @example
     * // Create one ServingUnit
     * const ServingUnit = await prisma.servingUnit.create({
     *   data: {
     *     // ... data to create a ServingUnit
     *   }
     * })
     * 
     */
    create<T extends ServingUnitCreateArgs>(args: SelectSubset<T, ServingUnitCreateArgs<ExtArgs>>): Prisma__ServingUnitClient<$Result.GetResult<Prisma.$ServingUnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServingUnits.
     * @param {ServingUnitCreateManyArgs} args - Arguments to create many ServingUnits.
     * @example
     * // Create many ServingUnits
     * const servingUnit = await prisma.servingUnit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServingUnitCreateManyArgs>(args?: SelectSubset<T, ServingUnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServingUnits and returns the data saved in the database.
     * @param {ServingUnitCreateManyAndReturnArgs} args - Arguments to create many ServingUnits.
     * @example
     * // Create many ServingUnits
     * const servingUnit = await prisma.servingUnit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServingUnits and only return the `id`
     * const servingUnitWithIdOnly = await prisma.servingUnit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServingUnitCreateManyAndReturnArgs>(args?: SelectSubset<T, ServingUnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServingUnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServingUnit.
     * @param {ServingUnitDeleteArgs} args - Arguments to delete one ServingUnit.
     * @example
     * // Delete one ServingUnit
     * const ServingUnit = await prisma.servingUnit.delete({
     *   where: {
     *     // ... filter to delete one ServingUnit
     *   }
     * })
     * 
     */
    delete<T extends ServingUnitDeleteArgs>(args: SelectSubset<T, ServingUnitDeleteArgs<ExtArgs>>): Prisma__ServingUnitClient<$Result.GetResult<Prisma.$ServingUnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServingUnit.
     * @param {ServingUnitUpdateArgs} args - Arguments to update one ServingUnit.
     * @example
     * // Update one ServingUnit
     * const servingUnit = await prisma.servingUnit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServingUnitUpdateArgs>(args: SelectSubset<T, ServingUnitUpdateArgs<ExtArgs>>): Prisma__ServingUnitClient<$Result.GetResult<Prisma.$ServingUnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServingUnits.
     * @param {ServingUnitDeleteManyArgs} args - Arguments to filter ServingUnits to delete.
     * @example
     * // Delete a few ServingUnits
     * const { count } = await prisma.servingUnit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServingUnitDeleteManyArgs>(args?: SelectSubset<T, ServingUnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServingUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServingUnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServingUnits
     * const servingUnit = await prisma.servingUnit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServingUnitUpdateManyArgs>(args: SelectSubset<T, ServingUnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServingUnits and returns the data updated in the database.
     * @param {ServingUnitUpdateManyAndReturnArgs} args - Arguments to update many ServingUnits.
     * @example
     * // Update many ServingUnits
     * const servingUnit = await prisma.servingUnit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServingUnits and only return the `id`
     * const servingUnitWithIdOnly = await prisma.servingUnit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServingUnitUpdateManyAndReturnArgs>(args: SelectSubset<T, ServingUnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServingUnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServingUnit.
     * @param {ServingUnitUpsertArgs} args - Arguments to update or create a ServingUnit.
     * @example
     * // Update or create a ServingUnit
     * const servingUnit = await prisma.servingUnit.upsert({
     *   create: {
     *     // ... data to create a ServingUnit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServingUnit we want to update
     *   }
     * })
     */
    upsert<T extends ServingUnitUpsertArgs>(args: SelectSubset<T, ServingUnitUpsertArgs<ExtArgs>>): Prisma__ServingUnitClient<$Result.GetResult<Prisma.$ServingUnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServingUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServingUnitCountArgs} args - Arguments to filter ServingUnits to count.
     * @example
     * // Count the number of ServingUnits
     * const count = await prisma.servingUnit.count({
     *   where: {
     *     // ... the filter for the ServingUnits we want to count
     *   }
     * })
    **/
    count<T extends ServingUnitCountArgs>(
      args?: Subset<T, ServingUnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServingUnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServingUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServingUnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServingUnitAggregateArgs>(args: Subset<T, ServingUnitAggregateArgs>): Prisma.PrismaPromise<GetServingUnitAggregateType<T>>

    /**
     * Group by ServingUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServingUnitGroupByArgs} args - Group by arguments.
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
      T extends ServingUnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServingUnitGroupByArgs['orderBy'] }
        : { orderBy?: ServingUnitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServingUnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServingUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServingUnit model
   */
  readonly fields: ServingUnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServingUnit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServingUnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    foodServingUnit<T extends ServingUnit$foodServingUnitArgs<ExtArgs> = {}>(args?: Subset<T, ServingUnit$foodServingUnitArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodServingUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    food<T extends ServingUnit$foodArgs<ExtArgs> = {}>(args?: Subset<T, ServingUnit$foodArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mealFood<T extends ServingUnit$mealFoodArgs<ExtArgs> = {}>(args?: Subset<T, ServingUnit$mealFoodArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealFoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ServingUnit model
   */
  interface ServingUnitFieldRefs {
    readonly id: FieldRef<"ServingUnit", 'Int'>
    readonly name: FieldRef<"ServingUnit", 'String'>
    readonly foodId: FieldRef<"ServingUnit", 'Int'>
    readonly createdAt: FieldRef<"ServingUnit", 'DateTime'>
    readonly updatedAt: FieldRef<"ServingUnit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServingUnit findUnique
   */
  export type ServingUnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServingUnit
     */
    select?: ServingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServingUnit
     */
    omit?: ServingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServingUnitInclude<ExtArgs> | null
    /**
     * Filter, which ServingUnit to fetch.
     */
    where: ServingUnitWhereUniqueInput
  }

  /**
   * ServingUnit findUniqueOrThrow
   */
  export type ServingUnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServingUnit
     */
    select?: ServingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServingUnit
     */
    omit?: ServingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServingUnitInclude<ExtArgs> | null
    /**
     * Filter, which ServingUnit to fetch.
     */
    where: ServingUnitWhereUniqueInput
  }

  /**
   * ServingUnit findFirst
   */
  export type ServingUnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServingUnit
     */
    select?: ServingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServingUnit
     */
    omit?: ServingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServingUnitInclude<ExtArgs> | null
    /**
     * Filter, which ServingUnit to fetch.
     */
    where?: ServingUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServingUnits to fetch.
     */
    orderBy?: ServingUnitOrderByWithRelationInput | ServingUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServingUnits.
     */
    cursor?: ServingUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServingUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServingUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServingUnits.
     */
    distinct?: ServingUnitScalarFieldEnum | ServingUnitScalarFieldEnum[]
  }

  /**
   * ServingUnit findFirstOrThrow
   */
  export type ServingUnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServingUnit
     */
    select?: ServingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServingUnit
     */
    omit?: ServingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServingUnitInclude<ExtArgs> | null
    /**
     * Filter, which ServingUnit to fetch.
     */
    where?: ServingUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServingUnits to fetch.
     */
    orderBy?: ServingUnitOrderByWithRelationInput | ServingUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServingUnits.
     */
    cursor?: ServingUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServingUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServingUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServingUnits.
     */
    distinct?: ServingUnitScalarFieldEnum | ServingUnitScalarFieldEnum[]
  }

  /**
   * ServingUnit findMany
   */
  export type ServingUnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServingUnit
     */
    select?: ServingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServingUnit
     */
    omit?: ServingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServingUnitInclude<ExtArgs> | null
    /**
     * Filter, which ServingUnits to fetch.
     */
    where?: ServingUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServingUnits to fetch.
     */
    orderBy?: ServingUnitOrderByWithRelationInput | ServingUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServingUnits.
     */
    cursor?: ServingUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServingUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServingUnits.
     */
    skip?: number
    distinct?: ServingUnitScalarFieldEnum | ServingUnitScalarFieldEnum[]
  }

  /**
   * ServingUnit create
   */
  export type ServingUnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServingUnit
     */
    select?: ServingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServingUnit
     */
    omit?: ServingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServingUnitInclude<ExtArgs> | null
    /**
     * The data needed to create a ServingUnit.
     */
    data: XOR<ServingUnitCreateInput, ServingUnitUncheckedCreateInput>
  }

  /**
   * ServingUnit createMany
   */
  export type ServingUnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServingUnits.
     */
    data: ServingUnitCreateManyInput | ServingUnitCreateManyInput[]
  }

  /**
   * ServingUnit createManyAndReturn
   */
  export type ServingUnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServingUnit
     */
    select?: ServingUnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServingUnit
     */
    omit?: ServingUnitOmit<ExtArgs> | null
    /**
     * The data used to create many ServingUnits.
     */
    data: ServingUnitCreateManyInput | ServingUnitCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServingUnitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServingUnit update
   */
  export type ServingUnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServingUnit
     */
    select?: ServingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServingUnit
     */
    omit?: ServingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServingUnitInclude<ExtArgs> | null
    /**
     * The data needed to update a ServingUnit.
     */
    data: XOR<ServingUnitUpdateInput, ServingUnitUncheckedUpdateInput>
    /**
     * Choose, which ServingUnit to update.
     */
    where: ServingUnitWhereUniqueInput
  }

  /**
   * ServingUnit updateMany
   */
  export type ServingUnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServingUnits.
     */
    data: XOR<ServingUnitUpdateManyMutationInput, ServingUnitUncheckedUpdateManyInput>
    /**
     * Filter which ServingUnits to update
     */
    where?: ServingUnitWhereInput
    /**
     * Limit how many ServingUnits to update.
     */
    limit?: number
  }

  /**
   * ServingUnit updateManyAndReturn
   */
  export type ServingUnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServingUnit
     */
    select?: ServingUnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServingUnit
     */
    omit?: ServingUnitOmit<ExtArgs> | null
    /**
     * The data used to update ServingUnits.
     */
    data: XOR<ServingUnitUpdateManyMutationInput, ServingUnitUncheckedUpdateManyInput>
    /**
     * Filter which ServingUnits to update
     */
    where?: ServingUnitWhereInput
    /**
     * Limit how many ServingUnits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServingUnitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServingUnit upsert
   */
  export type ServingUnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServingUnit
     */
    select?: ServingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServingUnit
     */
    omit?: ServingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServingUnitInclude<ExtArgs> | null
    /**
     * The filter to search for the ServingUnit to update in case it exists.
     */
    where: ServingUnitWhereUniqueInput
    /**
     * In case the ServingUnit found by the `where` argument doesn't exist, create a new ServingUnit with this data.
     */
    create: XOR<ServingUnitCreateInput, ServingUnitUncheckedCreateInput>
    /**
     * In case the ServingUnit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServingUnitUpdateInput, ServingUnitUncheckedUpdateInput>
  }

  /**
   * ServingUnit delete
   */
  export type ServingUnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServingUnit
     */
    select?: ServingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServingUnit
     */
    omit?: ServingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServingUnitInclude<ExtArgs> | null
    /**
     * Filter which ServingUnit to delete.
     */
    where: ServingUnitWhereUniqueInput
  }

  /**
   * ServingUnit deleteMany
   */
  export type ServingUnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServingUnits to delete
     */
    where?: ServingUnitWhereInput
    /**
     * Limit how many ServingUnits to delete.
     */
    limit?: number
  }

  /**
   * ServingUnit.foodServingUnit
   */
  export type ServingUnit$foodServingUnitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodServingUnit
     */
    select?: FoodServingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodServingUnit
     */
    omit?: FoodServingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodServingUnitInclude<ExtArgs> | null
    where?: FoodServingUnitWhereInput
    orderBy?: FoodServingUnitOrderByWithRelationInput | FoodServingUnitOrderByWithRelationInput[]
    cursor?: FoodServingUnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodServingUnitScalarFieldEnum | FoodServingUnitScalarFieldEnum[]
  }

  /**
   * ServingUnit.food
   */
  export type ServingUnit$foodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    where?: FoodWhereInput
  }

  /**
   * ServingUnit.mealFood
   */
  export type ServingUnit$mealFoodArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodInclude<ExtArgs> | null
    where?: MealFoodWhereInput
    orderBy?: MealFoodOrderByWithRelationInput | MealFoodOrderByWithRelationInput[]
    cursor?: MealFoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealFoodScalarFieldEnum | MealFoodScalarFieldEnum[]
  }

  /**
   * ServingUnit without action
   */
  export type ServingUnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServingUnit
     */
    select?: ServingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServingUnit
     */
    omit?: ServingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServingUnitInclude<ExtArgs> | null
  }


  /**
   * Model FoodServingUnit
   */

  export type AggregateFoodServingUnit = {
    _count: FoodServingUnitCountAggregateOutputType | null
    _avg: FoodServingUnitAvgAggregateOutputType | null
    _sum: FoodServingUnitSumAggregateOutputType | null
    _min: FoodServingUnitMinAggregateOutputType | null
    _max: FoodServingUnitMaxAggregateOutputType | null
  }

  export type FoodServingUnitAvgAggregateOutputType = {
    id: number | null
    grams: number | null
    foodId: number | null
    servingUnitId: number | null
  }

  export type FoodServingUnitSumAggregateOutputType = {
    id: number | null
    grams: number | null
    foodId: number | null
    servingUnitId: number | null
  }

  export type FoodServingUnitMinAggregateOutputType = {
    id: number | null
    grams: number | null
    foodId: number | null
    servingUnitId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodServingUnitMaxAggregateOutputType = {
    id: number | null
    grams: number | null
    foodId: number | null
    servingUnitId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FoodServingUnitCountAggregateOutputType = {
    id: number
    grams: number
    foodId: number
    servingUnitId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FoodServingUnitAvgAggregateInputType = {
    id?: true
    grams?: true
    foodId?: true
    servingUnitId?: true
  }

  export type FoodServingUnitSumAggregateInputType = {
    id?: true
    grams?: true
    foodId?: true
    servingUnitId?: true
  }

  export type FoodServingUnitMinAggregateInputType = {
    id?: true
    grams?: true
    foodId?: true
    servingUnitId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodServingUnitMaxAggregateInputType = {
    id?: true
    grams?: true
    foodId?: true
    servingUnitId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FoodServingUnitCountAggregateInputType = {
    id?: true
    grams?: true
    foodId?: true
    servingUnitId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FoodServingUnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodServingUnit to aggregate.
     */
    where?: FoodServingUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodServingUnits to fetch.
     */
    orderBy?: FoodServingUnitOrderByWithRelationInput | FoodServingUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodServingUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodServingUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodServingUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodServingUnits
    **/
    _count?: true | FoodServingUnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodServingUnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodServingUnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodServingUnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodServingUnitMaxAggregateInputType
  }

  export type GetFoodServingUnitAggregateType<T extends FoodServingUnitAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodServingUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodServingUnit[P]>
      : GetScalarType<T[P], AggregateFoodServingUnit[P]>
  }




  export type FoodServingUnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FoodServingUnitWhereInput
    orderBy?: FoodServingUnitOrderByWithAggregationInput | FoodServingUnitOrderByWithAggregationInput[]
    by: FoodServingUnitScalarFieldEnum[] | FoodServingUnitScalarFieldEnum
    having?: FoodServingUnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodServingUnitCountAggregateInputType | true
    _avg?: FoodServingUnitAvgAggregateInputType
    _sum?: FoodServingUnitSumAggregateInputType
    _min?: FoodServingUnitMinAggregateInputType
    _max?: FoodServingUnitMaxAggregateInputType
  }

  export type FoodServingUnitGroupByOutputType = {
    id: number
    grams: number | null
    foodId: number
    servingUnitId: number
    createdAt: Date
    updatedAt: Date
    _count: FoodServingUnitCountAggregateOutputType | null
    _avg: FoodServingUnitAvgAggregateOutputType | null
    _sum: FoodServingUnitSumAggregateOutputType | null
    _min: FoodServingUnitMinAggregateOutputType | null
    _max: FoodServingUnitMaxAggregateOutputType | null
  }

  type GetFoodServingUnitGroupByPayload<T extends FoodServingUnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FoodServingUnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodServingUnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodServingUnitGroupByOutputType[P]>
            : GetScalarType<T[P], FoodServingUnitGroupByOutputType[P]>
        }
      >
    >


  export type FoodServingUnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grams?: boolean
    foodId?: boolean
    servingUnitId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    food?: boolean | FoodDefaultArgs<ExtArgs>
    servingUnit?: boolean | ServingUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodServingUnit"]>

  export type FoodServingUnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grams?: boolean
    foodId?: boolean
    servingUnitId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    food?: boolean | FoodDefaultArgs<ExtArgs>
    servingUnit?: boolean | ServingUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodServingUnit"]>

  export type FoodServingUnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grams?: boolean
    foodId?: boolean
    servingUnitId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    food?: boolean | FoodDefaultArgs<ExtArgs>
    servingUnit?: boolean | ServingUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["foodServingUnit"]>

  export type FoodServingUnitSelectScalar = {
    id?: boolean
    grams?: boolean
    foodId?: boolean
    servingUnitId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FoodServingUnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "grams" | "foodId" | "servingUnitId" | "createdAt" | "updatedAt", ExtArgs["result"]["foodServingUnit"]>
  export type FoodServingUnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | FoodDefaultArgs<ExtArgs>
    servingUnit?: boolean | ServingUnitDefaultArgs<ExtArgs>
  }
  export type FoodServingUnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | FoodDefaultArgs<ExtArgs>
    servingUnit?: boolean | ServingUnitDefaultArgs<ExtArgs>
  }
  export type FoodServingUnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | FoodDefaultArgs<ExtArgs>
    servingUnit?: boolean | ServingUnitDefaultArgs<ExtArgs>
  }

  export type $FoodServingUnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FoodServingUnit"
    objects: {
      food: Prisma.$FoodPayload<ExtArgs>
      servingUnit: Prisma.$ServingUnitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      grams: number | null
      foodId: number
      servingUnitId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["foodServingUnit"]>
    composites: {}
  }

  type FoodServingUnitGetPayload<S extends boolean | null | undefined | FoodServingUnitDefaultArgs> = $Result.GetResult<Prisma.$FoodServingUnitPayload, S>

  type FoodServingUnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FoodServingUnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FoodServingUnitCountAggregateInputType | true
    }

  export interface FoodServingUnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodServingUnit'], meta: { name: 'FoodServingUnit' } }
    /**
     * Find zero or one FoodServingUnit that matches the filter.
     * @param {FoodServingUnitFindUniqueArgs} args - Arguments to find a FoodServingUnit
     * @example
     * // Get one FoodServingUnit
     * const foodServingUnit = await prisma.foodServingUnit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FoodServingUnitFindUniqueArgs>(args: SelectSubset<T, FoodServingUnitFindUniqueArgs<ExtArgs>>): Prisma__FoodServingUnitClient<$Result.GetResult<Prisma.$FoodServingUnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FoodServingUnit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FoodServingUnitFindUniqueOrThrowArgs} args - Arguments to find a FoodServingUnit
     * @example
     * // Get one FoodServingUnit
     * const foodServingUnit = await prisma.foodServingUnit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FoodServingUnitFindUniqueOrThrowArgs>(args: SelectSubset<T, FoodServingUnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FoodServingUnitClient<$Result.GetResult<Prisma.$FoodServingUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodServingUnit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodServingUnitFindFirstArgs} args - Arguments to find a FoodServingUnit
     * @example
     * // Get one FoodServingUnit
     * const foodServingUnit = await prisma.foodServingUnit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FoodServingUnitFindFirstArgs>(args?: SelectSubset<T, FoodServingUnitFindFirstArgs<ExtArgs>>): Prisma__FoodServingUnitClient<$Result.GetResult<Prisma.$FoodServingUnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FoodServingUnit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodServingUnitFindFirstOrThrowArgs} args - Arguments to find a FoodServingUnit
     * @example
     * // Get one FoodServingUnit
     * const foodServingUnit = await prisma.foodServingUnit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FoodServingUnitFindFirstOrThrowArgs>(args?: SelectSubset<T, FoodServingUnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__FoodServingUnitClient<$Result.GetResult<Prisma.$FoodServingUnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FoodServingUnits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodServingUnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodServingUnits
     * const foodServingUnits = await prisma.foodServingUnit.findMany()
     * 
     * // Get first 10 FoodServingUnits
     * const foodServingUnits = await prisma.foodServingUnit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const foodServingUnitWithIdOnly = await prisma.foodServingUnit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FoodServingUnitFindManyArgs>(args?: SelectSubset<T, FoodServingUnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodServingUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FoodServingUnit.
     * @param {FoodServingUnitCreateArgs} args - Arguments to create a FoodServingUnit.
     * @example
     * // Create one FoodServingUnit
     * const FoodServingUnit = await prisma.foodServingUnit.create({
     *   data: {
     *     // ... data to create a FoodServingUnit
     *   }
     * })
     * 
     */
    create<T extends FoodServingUnitCreateArgs>(args: SelectSubset<T, FoodServingUnitCreateArgs<ExtArgs>>): Prisma__FoodServingUnitClient<$Result.GetResult<Prisma.$FoodServingUnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FoodServingUnits.
     * @param {FoodServingUnitCreateManyArgs} args - Arguments to create many FoodServingUnits.
     * @example
     * // Create many FoodServingUnits
     * const foodServingUnit = await prisma.foodServingUnit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FoodServingUnitCreateManyArgs>(args?: SelectSubset<T, FoodServingUnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FoodServingUnits and returns the data saved in the database.
     * @param {FoodServingUnitCreateManyAndReturnArgs} args - Arguments to create many FoodServingUnits.
     * @example
     * // Create many FoodServingUnits
     * const foodServingUnit = await prisma.foodServingUnit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FoodServingUnits and only return the `id`
     * const foodServingUnitWithIdOnly = await prisma.foodServingUnit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FoodServingUnitCreateManyAndReturnArgs>(args?: SelectSubset<T, FoodServingUnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodServingUnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FoodServingUnit.
     * @param {FoodServingUnitDeleteArgs} args - Arguments to delete one FoodServingUnit.
     * @example
     * // Delete one FoodServingUnit
     * const FoodServingUnit = await prisma.foodServingUnit.delete({
     *   where: {
     *     // ... filter to delete one FoodServingUnit
     *   }
     * })
     * 
     */
    delete<T extends FoodServingUnitDeleteArgs>(args: SelectSubset<T, FoodServingUnitDeleteArgs<ExtArgs>>): Prisma__FoodServingUnitClient<$Result.GetResult<Prisma.$FoodServingUnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FoodServingUnit.
     * @param {FoodServingUnitUpdateArgs} args - Arguments to update one FoodServingUnit.
     * @example
     * // Update one FoodServingUnit
     * const foodServingUnit = await prisma.foodServingUnit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FoodServingUnitUpdateArgs>(args: SelectSubset<T, FoodServingUnitUpdateArgs<ExtArgs>>): Prisma__FoodServingUnitClient<$Result.GetResult<Prisma.$FoodServingUnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FoodServingUnits.
     * @param {FoodServingUnitDeleteManyArgs} args - Arguments to filter FoodServingUnits to delete.
     * @example
     * // Delete a few FoodServingUnits
     * const { count } = await prisma.foodServingUnit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FoodServingUnitDeleteManyArgs>(args?: SelectSubset<T, FoodServingUnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodServingUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodServingUnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodServingUnits
     * const foodServingUnit = await prisma.foodServingUnit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FoodServingUnitUpdateManyArgs>(args: SelectSubset<T, FoodServingUnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodServingUnits and returns the data updated in the database.
     * @param {FoodServingUnitUpdateManyAndReturnArgs} args - Arguments to update many FoodServingUnits.
     * @example
     * // Update many FoodServingUnits
     * const foodServingUnit = await prisma.foodServingUnit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FoodServingUnits and only return the `id`
     * const foodServingUnitWithIdOnly = await prisma.foodServingUnit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FoodServingUnitUpdateManyAndReturnArgs>(args: SelectSubset<T, FoodServingUnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodServingUnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FoodServingUnit.
     * @param {FoodServingUnitUpsertArgs} args - Arguments to update or create a FoodServingUnit.
     * @example
     * // Update or create a FoodServingUnit
     * const foodServingUnit = await prisma.foodServingUnit.upsert({
     *   create: {
     *     // ... data to create a FoodServingUnit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodServingUnit we want to update
     *   }
     * })
     */
    upsert<T extends FoodServingUnitUpsertArgs>(args: SelectSubset<T, FoodServingUnitUpsertArgs<ExtArgs>>): Prisma__FoodServingUnitClient<$Result.GetResult<Prisma.$FoodServingUnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FoodServingUnits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodServingUnitCountArgs} args - Arguments to filter FoodServingUnits to count.
     * @example
     * // Count the number of FoodServingUnits
     * const count = await prisma.foodServingUnit.count({
     *   where: {
     *     // ... the filter for the FoodServingUnits we want to count
     *   }
     * })
    **/
    count<T extends FoodServingUnitCountArgs>(
      args?: Subset<T, FoodServingUnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodServingUnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodServingUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodServingUnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoodServingUnitAggregateArgs>(args: Subset<T, FoodServingUnitAggregateArgs>): Prisma.PrismaPromise<GetFoodServingUnitAggregateType<T>>

    /**
     * Group by FoodServingUnit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodServingUnitGroupByArgs} args - Group by arguments.
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
      T extends FoodServingUnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodServingUnitGroupByArgs['orderBy'] }
        : { orderBy?: FoodServingUnitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FoodServingUnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodServingUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FoodServingUnit model
   */
  readonly fields: FoodServingUnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodServingUnit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FoodServingUnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    food<T extends FoodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodDefaultArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    servingUnit<T extends ServingUnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServingUnitDefaultArgs<ExtArgs>>): Prisma__ServingUnitClient<$Result.GetResult<Prisma.$ServingUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FoodServingUnit model
   */
  interface FoodServingUnitFieldRefs {
    readonly id: FieldRef<"FoodServingUnit", 'Int'>
    readonly grams: FieldRef<"FoodServingUnit", 'Float'>
    readonly foodId: FieldRef<"FoodServingUnit", 'Int'>
    readonly servingUnitId: FieldRef<"FoodServingUnit", 'Int'>
    readonly createdAt: FieldRef<"FoodServingUnit", 'DateTime'>
    readonly updatedAt: FieldRef<"FoodServingUnit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FoodServingUnit findUnique
   */
  export type FoodServingUnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodServingUnit
     */
    select?: FoodServingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodServingUnit
     */
    omit?: FoodServingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodServingUnitInclude<ExtArgs> | null
    /**
     * Filter, which FoodServingUnit to fetch.
     */
    where: FoodServingUnitWhereUniqueInput
  }

  /**
   * FoodServingUnit findUniqueOrThrow
   */
  export type FoodServingUnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodServingUnit
     */
    select?: FoodServingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodServingUnit
     */
    omit?: FoodServingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodServingUnitInclude<ExtArgs> | null
    /**
     * Filter, which FoodServingUnit to fetch.
     */
    where: FoodServingUnitWhereUniqueInput
  }

  /**
   * FoodServingUnit findFirst
   */
  export type FoodServingUnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodServingUnit
     */
    select?: FoodServingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodServingUnit
     */
    omit?: FoodServingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodServingUnitInclude<ExtArgs> | null
    /**
     * Filter, which FoodServingUnit to fetch.
     */
    where?: FoodServingUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodServingUnits to fetch.
     */
    orderBy?: FoodServingUnitOrderByWithRelationInput | FoodServingUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodServingUnits.
     */
    cursor?: FoodServingUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodServingUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodServingUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodServingUnits.
     */
    distinct?: FoodServingUnitScalarFieldEnum | FoodServingUnitScalarFieldEnum[]
  }

  /**
   * FoodServingUnit findFirstOrThrow
   */
  export type FoodServingUnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodServingUnit
     */
    select?: FoodServingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodServingUnit
     */
    omit?: FoodServingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodServingUnitInclude<ExtArgs> | null
    /**
     * Filter, which FoodServingUnit to fetch.
     */
    where?: FoodServingUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodServingUnits to fetch.
     */
    orderBy?: FoodServingUnitOrderByWithRelationInput | FoodServingUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodServingUnits.
     */
    cursor?: FoodServingUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodServingUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodServingUnits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodServingUnits.
     */
    distinct?: FoodServingUnitScalarFieldEnum | FoodServingUnitScalarFieldEnum[]
  }

  /**
   * FoodServingUnit findMany
   */
  export type FoodServingUnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodServingUnit
     */
    select?: FoodServingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodServingUnit
     */
    omit?: FoodServingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodServingUnitInclude<ExtArgs> | null
    /**
     * Filter, which FoodServingUnits to fetch.
     */
    where?: FoodServingUnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodServingUnits to fetch.
     */
    orderBy?: FoodServingUnitOrderByWithRelationInput | FoodServingUnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodServingUnits.
     */
    cursor?: FoodServingUnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodServingUnits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodServingUnits.
     */
    skip?: number
    distinct?: FoodServingUnitScalarFieldEnum | FoodServingUnitScalarFieldEnum[]
  }

  /**
   * FoodServingUnit create
   */
  export type FoodServingUnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodServingUnit
     */
    select?: FoodServingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodServingUnit
     */
    omit?: FoodServingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodServingUnitInclude<ExtArgs> | null
    /**
     * The data needed to create a FoodServingUnit.
     */
    data: XOR<FoodServingUnitCreateInput, FoodServingUnitUncheckedCreateInput>
  }

  /**
   * FoodServingUnit createMany
   */
  export type FoodServingUnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodServingUnits.
     */
    data: FoodServingUnitCreateManyInput | FoodServingUnitCreateManyInput[]
  }

  /**
   * FoodServingUnit createManyAndReturn
   */
  export type FoodServingUnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodServingUnit
     */
    select?: FoodServingUnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodServingUnit
     */
    omit?: FoodServingUnitOmit<ExtArgs> | null
    /**
     * The data used to create many FoodServingUnits.
     */
    data: FoodServingUnitCreateManyInput | FoodServingUnitCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodServingUnitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FoodServingUnit update
   */
  export type FoodServingUnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodServingUnit
     */
    select?: FoodServingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodServingUnit
     */
    omit?: FoodServingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodServingUnitInclude<ExtArgs> | null
    /**
     * The data needed to update a FoodServingUnit.
     */
    data: XOR<FoodServingUnitUpdateInput, FoodServingUnitUncheckedUpdateInput>
    /**
     * Choose, which FoodServingUnit to update.
     */
    where: FoodServingUnitWhereUniqueInput
  }

  /**
   * FoodServingUnit updateMany
   */
  export type FoodServingUnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodServingUnits.
     */
    data: XOR<FoodServingUnitUpdateManyMutationInput, FoodServingUnitUncheckedUpdateManyInput>
    /**
     * Filter which FoodServingUnits to update
     */
    where?: FoodServingUnitWhereInput
    /**
     * Limit how many FoodServingUnits to update.
     */
    limit?: number
  }

  /**
   * FoodServingUnit updateManyAndReturn
   */
  export type FoodServingUnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodServingUnit
     */
    select?: FoodServingUnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FoodServingUnit
     */
    omit?: FoodServingUnitOmit<ExtArgs> | null
    /**
     * The data used to update FoodServingUnits.
     */
    data: XOR<FoodServingUnitUpdateManyMutationInput, FoodServingUnitUncheckedUpdateManyInput>
    /**
     * Filter which FoodServingUnits to update
     */
    where?: FoodServingUnitWhereInput
    /**
     * Limit how many FoodServingUnits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodServingUnitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FoodServingUnit upsert
   */
  export type FoodServingUnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodServingUnit
     */
    select?: FoodServingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodServingUnit
     */
    omit?: FoodServingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodServingUnitInclude<ExtArgs> | null
    /**
     * The filter to search for the FoodServingUnit to update in case it exists.
     */
    where: FoodServingUnitWhereUniqueInput
    /**
     * In case the FoodServingUnit found by the `where` argument doesn't exist, create a new FoodServingUnit with this data.
     */
    create: XOR<FoodServingUnitCreateInput, FoodServingUnitUncheckedCreateInput>
    /**
     * In case the FoodServingUnit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodServingUnitUpdateInput, FoodServingUnitUncheckedUpdateInput>
  }

  /**
   * FoodServingUnit delete
   */
  export type FoodServingUnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodServingUnit
     */
    select?: FoodServingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodServingUnit
     */
    omit?: FoodServingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodServingUnitInclude<ExtArgs> | null
    /**
     * Filter which FoodServingUnit to delete.
     */
    where: FoodServingUnitWhereUniqueInput
  }

  /**
   * FoodServingUnit deleteMany
   */
  export type FoodServingUnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodServingUnits to delete
     */
    where?: FoodServingUnitWhereInput
    /**
     * Limit how many FoodServingUnits to delete.
     */
    limit?: number
  }

  /**
   * FoodServingUnit without action
   */
  export type FoodServingUnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodServingUnit
     */
    select?: FoodServingUnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FoodServingUnit
     */
    omit?: FoodServingUnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodServingUnitInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    meals?: boolean | User$mealsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meals?: boolean | User$mealsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      meals: Prisma.$MealPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meals<T extends User$mealsArgs<ExtArgs> = {}>(args?: Subset<T, User$mealsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.meals
   */
  export type User$mealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    where?: MealWhereInput
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    cursor?: MealWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Meal
   */

  export type AggregateMeal = {
    _count: MealCountAggregateOutputType | null
    _avg: MealAvgAggregateOutputType | null
    _sum: MealSumAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  export type MealAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MealSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MealMinAggregateOutputType = {
    id: number | null
    dateTime: Date | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MealMaxAggregateOutputType = {
    id: number | null
    dateTime: Date | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MealCountAggregateOutputType = {
    id: number
    dateTime: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MealAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MealSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MealMinAggregateInputType = {
    id?: true
    dateTime?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MealMaxAggregateInputType = {
    id?: true
    dateTime?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MealCountAggregateInputType = {
    id?: true
    dateTime?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MealAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meal to aggregate.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meals
    **/
    _count?: true | MealCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealMaxAggregateInputType
  }

  export type GetMealAggregateType<T extends MealAggregateArgs> = {
        [P in keyof T & keyof AggregateMeal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeal[P]>
      : GetScalarType<T[P], AggregateMeal[P]>
  }




  export type MealGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
    orderBy?: MealOrderByWithAggregationInput | MealOrderByWithAggregationInput[]
    by: MealScalarFieldEnum[] | MealScalarFieldEnum
    having?: MealScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealCountAggregateInputType | true
    _avg?: MealAvgAggregateInputType
    _sum?: MealSumAggregateInputType
    _min?: MealMinAggregateInputType
    _max?: MealMaxAggregateInputType
  }

  export type MealGroupByOutputType = {
    id: number
    dateTime: Date
    userId: number | null
    createdAt: Date
    updatedAt: Date
    _count: MealCountAggregateOutputType | null
    _avg: MealAvgAggregateOutputType | null
    _sum: MealSumAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  type GetMealGroupByPayload<T extends MealGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealGroupByOutputType[P]>
            : GetScalarType<T[P], MealGroupByOutputType[P]>
        }
      >
    >


  export type MealSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateTime?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    foods?: boolean | Meal$foodsArgs<ExtArgs>
    user?: boolean | Meal$userArgs<ExtArgs>
    mealFoods?: boolean | Meal$mealFoodsArgs<ExtArgs>
    _count?: boolean | MealCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateTime?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Meal$userArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateTime?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Meal$userArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectScalar = {
    id?: boolean
    dateTime?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MealOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dateTime" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["meal"]>
  export type MealInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    foods?: boolean | Meal$foodsArgs<ExtArgs>
    user?: boolean | Meal$userArgs<ExtArgs>
    mealFoods?: boolean | Meal$mealFoodsArgs<ExtArgs>
    _count?: boolean | MealCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MealIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Meal$userArgs<ExtArgs>
  }
  export type MealIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Meal$userArgs<ExtArgs>
  }

  export type $MealPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meal"
    objects: {
      foods: Prisma.$FoodPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
      mealFoods: Prisma.$MealFoodPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dateTime: Date
      userId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["meal"]>
    composites: {}
  }

  type MealGetPayload<S extends boolean | null | undefined | MealDefaultArgs> = $Result.GetResult<Prisma.$MealPayload, S>

  type MealCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealCountAggregateInputType | true
    }

  export interface MealDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meal'], meta: { name: 'Meal' } }
    /**
     * Find zero or one Meal that matches the filter.
     * @param {MealFindUniqueArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealFindUniqueArgs>(args: SelectSubset<T, MealFindUniqueArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealFindUniqueOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealFindUniqueOrThrowArgs>(args: SelectSubset<T, MealFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealFindFirstArgs>(args?: SelectSubset<T, MealFindFirstArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealFindFirstOrThrowArgs>(args?: SelectSubset<T, MealFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meals
     * const meals = await prisma.meal.findMany()
     * 
     * // Get first 10 Meals
     * const meals = await prisma.meal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealWithIdOnly = await prisma.meal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealFindManyArgs>(args?: SelectSubset<T, MealFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meal.
     * @param {MealCreateArgs} args - Arguments to create a Meal.
     * @example
     * // Create one Meal
     * const Meal = await prisma.meal.create({
     *   data: {
     *     // ... data to create a Meal
     *   }
     * })
     * 
     */
    create<T extends MealCreateArgs>(args: SelectSubset<T, MealCreateArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meals.
     * @param {MealCreateManyArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealCreateManyArgs>(args?: SelectSubset<T, MealCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meals and returns the data saved in the database.
     * @param {MealCreateManyAndReturnArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealCreateManyAndReturnArgs>(args?: SelectSubset<T, MealCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meal.
     * @param {MealDeleteArgs} args - Arguments to delete one Meal.
     * @example
     * // Delete one Meal
     * const Meal = await prisma.meal.delete({
     *   where: {
     *     // ... filter to delete one Meal
     *   }
     * })
     * 
     */
    delete<T extends MealDeleteArgs>(args: SelectSubset<T, MealDeleteArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meal.
     * @param {MealUpdateArgs} args - Arguments to update one Meal.
     * @example
     * // Update one Meal
     * const meal = await prisma.meal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealUpdateArgs>(args: SelectSubset<T, MealUpdateArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meals.
     * @param {MealDeleteManyArgs} args - Arguments to filter Meals to delete.
     * @example
     * // Delete a few Meals
     * const { count } = await prisma.meal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealDeleteManyArgs>(args?: SelectSubset<T, MealDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealUpdateManyArgs>(args: SelectSubset<T, MealUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals and returns the data updated in the database.
     * @param {MealUpdateManyAndReturnArgs} args - Arguments to update many Meals.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MealUpdateManyAndReturnArgs>(args: SelectSubset<T, MealUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meal.
     * @param {MealUpsertArgs} args - Arguments to update or create a Meal.
     * @example
     * // Update or create a Meal
     * const meal = await prisma.meal.upsert({
     *   create: {
     *     // ... data to create a Meal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meal we want to update
     *   }
     * })
     */
    upsert<T extends MealUpsertArgs>(args: SelectSubset<T, MealUpsertArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealCountArgs} args - Arguments to filter Meals to count.
     * @example
     * // Count the number of Meals
     * const count = await prisma.meal.count({
     *   where: {
     *     // ... the filter for the Meals we want to count
     *   }
     * })
    **/
    count<T extends MealCountArgs>(
      args?: Subset<T, MealCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MealAggregateArgs>(args: Subset<T, MealAggregateArgs>): Prisma.PrismaPromise<GetMealAggregateType<T>>

    /**
     * Group by Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealGroupByArgs} args - Group by arguments.
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
      T extends MealGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealGroupByArgs['orderBy'] }
        : { orderBy?: MealGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MealGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meal model
   */
  readonly fields: MealFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    foods<T extends Meal$foodsArgs<ExtArgs> = {}>(args?: Subset<T, Meal$foodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends Meal$userArgs<ExtArgs> = {}>(args?: Subset<T, Meal$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mealFoods<T extends Meal$mealFoodsArgs<ExtArgs> = {}>(args?: Subset<T, Meal$mealFoodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealFoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Meal model
   */
  interface MealFieldRefs {
    readonly id: FieldRef<"Meal", 'Int'>
    readonly dateTime: FieldRef<"Meal", 'DateTime'>
    readonly userId: FieldRef<"Meal", 'Int'>
    readonly createdAt: FieldRef<"Meal", 'DateTime'>
    readonly updatedAt: FieldRef<"Meal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meal findUnique
   */
  export type MealFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findUniqueOrThrow
   */
  export type MealFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findFirst
   */
  export type MealFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal findFirstOrThrow
   */
  export type MealFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal findMany
   */
  export type MealFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meals to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal create
   */
  export type MealCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to create a Meal.
     */
    data: XOR<MealCreateInput, MealUncheckedCreateInput>
  }

  /**
   * Meal createMany
   */
  export type MealCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
  }

  /**
   * Meal createManyAndReturn
   */
  export type MealCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meal update
   */
  export type MealUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to update a Meal.
     */
    data: XOR<MealUpdateInput, MealUncheckedUpdateInput>
    /**
     * Choose, which Meal to update.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal updateMany
   */
  export type MealUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to update.
     */
    limit?: number
  }

  /**
   * Meal updateManyAndReturn
   */
  export type MealUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meal upsert
   */
  export type MealUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The filter to search for the Meal to update in case it exists.
     */
    where: MealWhereUniqueInput
    /**
     * In case the Meal found by the `where` argument doesn't exist, create a new Meal with this data.
     */
    create: XOR<MealCreateInput, MealUncheckedCreateInput>
    /**
     * In case the Meal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealUpdateInput, MealUncheckedUpdateInput>
  }

  /**
   * Meal delete
   */
  export type MealDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter which Meal to delete.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal deleteMany
   */
  export type MealDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meals to delete
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to delete.
     */
    limit?: number
  }

  /**
   * Meal.foods
   */
  export type Meal$foodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Food
     */
    omit?: FoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FoodInclude<ExtArgs> | null
    where?: FoodWhereInput
    orderBy?: FoodOrderByWithRelationInput | FoodOrderByWithRelationInput[]
    cursor?: FoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FoodScalarFieldEnum | FoodScalarFieldEnum[]
  }

  /**
   * Meal.user
   */
  export type Meal$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Meal.mealFoods
   */
  export type Meal$mealFoodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodInclude<ExtArgs> | null
    where?: MealFoodWhereInput
    orderBy?: MealFoodOrderByWithRelationInput | MealFoodOrderByWithRelationInput[]
    cursor?: MealFoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealFoodScalarFieldEnum | MealFoodScalarFieldEnum[]
  }

  /**
   * Meal without action
   */
  export type MealDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
  }


  /**
   * Model MealFood
   */

  export type AggregateMealFood = {
    _count: MealFoodCountAggregateOutputType | null
    _avg: MealFoodAvgAggregateOutputType | null
    _sum: MealFoodSumAggregateOutputType | null
    _min: MealFoodMinAggregateOutputType | null
    _max: MealFoodMaxAggregateOutputType | null
  }

  export type MealFoodAvgAggregateOutputType = {
    id: number | null
    foodId: number | null
    mealId: number | null
    amount: number | null
    servingUnitId: number | null
  }

  export type MealFoodSumAggregateOutputType = {
    id: number | null
    foodId: number | null
    mealId: number | null
    amount: number | null
    servingUnitId: number | null
  }

  export type MealFoodMinAggregateOutputType = {
    id: number | null
    foodId: number | null
    mealId: number | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    servingUnitId: number | null
  }

  export type MealFoodMaxAggregateOutputType = {
    id: number | null
    foodId: number | null
    mealId: number | null
    amount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    servingUnitId: number | null
  }

  export type MealFoodCountAggregateOutputType = {
    id: number
    foodId: number
    mealId: number
    amount: number
    createdAt: number
    updatedAt: number
    servingUnitId: number
    _all: number
  }


  export type MealFoodAvgAggregateInputType = {
    id?: true
    foodId?: true
    mealId?: true
    amount?: true
    servingUnitId?: true
  }

  export type MealFoodSumAggregateInputType = {
    id?: true
    foodId?: true
    mealId?: true
    amount?: true
    servingUnitId?: true
  }

  export type MealFoodMinAggregateInputType = {
    id?: true
    foodId?: true
    mealId?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    servingUnitId?: true
  }

  export type MealFoodMaxAggregateInputType = {
    id?: true
    foodId?: true
    mealId?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    servingUnitId?: true
  }

  export type MealFoodCountAggregateInputType = {
    id?: true
    foodId?: true
    mealId?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    servingUnitId?: true
    _all?: true
  }

  export type MealFoodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealFood to aggregate.
     */
    where?: MealFoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealFoods to fetch.
     */
    orderBy?: MealFoodOrderByWithRelationInput | MealFoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealFoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealFoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealFoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MealFoods
    **/
    _count?: true | MealFoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealFoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealFoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealFoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealFoodMaxAggregateInputType
  }

  export type GetMealFoodAggregateType<T extends MealFoodAggregateArgs> = {
        [P in keyof T & keyof AggregateMealFood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMealFood[P]>
      : GetScalarType<T[P], AggregateMealFood[P]>
  }




  export type MealFoodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealFoodWhereInput
    orderBy?: MealFoodOrderByWithAggregationInput | MealFoodOrderByWithAggregationInput[]
    by: MealFoodScalarFieldEnum[] | MealFoodScalarFieldEnum
    having?: MealFoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealFoodCountAggregateInputType | true
    _avg?: MealFoodAvgAggregateInputType
    _sum?: MealFoodSumAggregateInputType
    _min?: MealFoodMinAggregateInputType
    _max?: MealFoodMaxAggregateInputType
  }

  export type MealFoodGroupByOutputType = {
    id: number
    foodId: number
    mealId: number
    amount: number
    createdAt: Date
    updatedAt: Date
    servingUnitId: number
    _count: MealFoodCountAggregateOutputType | null
    _avg: MealFoodAvgAggregateOutputType | null
    _sum: MealFoodSumAggregateOutputType | null
    _min: MealFoodMinAggregateOutputType | null
    _max: MealFoodMaxAggregateOutputType | null
  }

  type GetMealFoodGroupByPayload<T extends MealFoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealFoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealFoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealFoodGroupByOutputType[P]>
            : GetScalarType<T[P], MealFoodGroupByOutputType[P]>
        }
      >
    >


  export type MealFoodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    foodId?: boolean
    mealId?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    servingUnitId?: boolean
    food?: boolean | FoodDefaultArgs<ExtArgs>
    meal?: boolean | MealDefaultArgs<ExtArgs>
    servingUnit?: boolean | ServingUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealFood"]>

  export type MealFoodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    foodId?: boolean
    mealId?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    servingUnitId?: boolean
    food?: boolean | FoodDefaultArgs<ExtArgs>
    meal?: boolean | MealDefaultArgs<ExtArgs>
    servingUnit?: boolean | ServingUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealFood"]>

  export type MealFoodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    foodId?: boolean
    mealId?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    servingUnitId?: boolean
    food?: boolean | FoodDefaultArgs<ExtArgs>
    meal?: boolean | MealDefaultArgs<ExtArgs>
    servingUnit?: boolean | ServingUnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealFood"]>

  export type MealFoodSelectScalar = {
    id?: boolean
    foodId?: boolean
    mealId?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    servingUnitId?: boolean
  }

  export type MealFoodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "foodId" | "mealId" | "amount" | "createdAt" | "updatedAt" | "servingUnitId", ExtArgs["result"]["mealFood"]>
  export type MealFoodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | FoodDefaultArgs<ExtArgs>
    meal?: boolean | MealDefaultArgs<ExtArgs>
    servingUnit?: boolean | ServingUnitDefaultArgs<ExtArgs>
  }
  export type MealFoodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | FoodDefaultArgs<ExtArgs>
    meal?: boolean | MealDefaultArgs<ExtArgs>
    servingUnit?: boolean | ServingUnitDefaultArgs<ExtArgs>
  }
  export type MealFoodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    food?: boolean | FoodDefaultArgs<ExtArgs>
    meal?: boolean | MealDefaultArgs<ExtArgs>
    servingUnit?: boolean | ServingUnitDefaultArgs<ExtArgs>
  }

  export type $MealFoodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MealFood"
    objects: {
      food: Prisma.$FoodPayload<ExtArgs>
      meal: Prisma.$MealPayload<ExtArgs>
      servingUnit: Prisma.$ServingUnitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      foodId: number
      mealId: number
      amount: number
      createdAt: Date
      updatedAt: Date
      servingUnitId: number
    }, ExtArgs["result"]["mealFood"]>
    composites: {}
  }

  type MealFoodGetPayload<S extends boolean | null | undefined | MealFoodDefaultArgs> = $Result.GetResult<Prisma.$MealFoodPayload, S>

  type MealFoodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealFoodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealFoodCountAggregateInputType | true
    }

  export interface MealFoodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MealFood'], meta: { name: 'MealFood' } }
    /**
     * Find zero or one MealFood that matches the filter.
     * @param {MealFoodFindUniqueArgs} args - Arguments to find a MealFood
     * @example
     * // Get one MealFood
     * const mealFood = await prisma.mealFood.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealFoodFindUniqueArgs>(args: SelectSubset<T, MealFoodFindUniqueArgs<ExtArgs>>): Prisma__MealFoodClient<$Result.GetResult<Prisma.$MealFoodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MealFood that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealFoodFindUniqueOrThrowArgs} args - Arguments to find a MealFood
     * @example
     * // Get one MealFood
     * const mealFood = await prisma.mealFood.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealFoodFindUniqueOrThrowArgs>(args: SelectSubset<T, MealFoodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealFoodClient<$Result.GetResult<Prisma.$MealFoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealFood that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFoodFindFirstArgs} args - Arguments to find a MealFood
     * @example
     * // Get one MealFood
     * const mealFood = await prisma.mealFood.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealFoodFindFirstArgs>(args?: SelectSubset<T, MealFoodFindFirstArgs<ExtArgs>>): Prisma__MealFoodClient<$Result.GetResult<Prisma.$MealFoodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealFood that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFoodFindFirstOrThrowArgs} args - Arguments to find a MealFood
     * @example
     * // Get one MealFood
     * const mealFood = await prisma.mealFood.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealFoodFindFirstOrThrowArgs>(args?: SelectSubset<T, MealFoodFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealFoodClient<$Result.GetResult<Prisma.$MealFoodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MealFoods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFoodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MealFoods
     * const mealFoods = await prisma.mealFood.findMany()
     * 
     * // Get first 10 MealFoods
     * const mealFoods = await prisma.mealFood.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealFoodWithIdOnly = await prisma.mealFood.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealFoodFindManyArgs>(args?: SelectSubset<T, MealFoodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealFoodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MealFood.
     * @param {MealFoodCreateArgs} args - Arguments to create a MealFood.
     * @example
     * // Create one MealFood
     * const MealFood = await prisma.mealFood.create({
     *   data: {
     *     // ... data to create a MealFood
     *   }
     * })
     * 
     */
    create<T extends MealFoodCreateArgs>(args: SelectSubset<T, MealFoodCreateArgs<ExtArgs>>): Prisma__MealFoodClient<$Result.GetResult<Prisma.$MealFoodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MealFoods.
     * @param {MealFoodCreateManyArgs} args - Arguments to create many MealFoods.
     * @example
     * // Create many MealFoods
     * const mealFood = await prisma.mealFood.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealFoodCreateManyArgs>(args?: SelectSubset<T, MealFoodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MealFoods and returns the data saved in the database.
     * @param {MealFoodCreateManyAndReturnArgs} args - Arguments to create many MealFoods.
     * @example
     * // Create many MealFoods
     * const mealFood = await prisma.mealFood.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MealFoods and only return the `id`
     * const mealFoodWithIdOnly = await prisma.mealFood.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealFoodCreateManyAndReturnArgs>(args?: SelectSubset<T, MealFoodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealFoodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MealFood.
     * @param {MealFoodDeleteArgs} args - Arguments to delete one MealFood.
     * @example
     * // Delete one MealFood
     * const MealFood = await prisma.mealFood.delete({
     *   where: {
     *     // ... filter to delete one MealFood
     *   }
     * })
     * 
     */
    delete<T extends MealFoodDeleteArgs>(args: SelectSubset<T, MealFoodDeleteArgs<ExtArgs>>): Prisma__MealFoodClient<$Result.GetResult<Prisma.$MealFoodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MealFood.
     * @param {MealFoodUpdateArgs} args - Arguments to update one MealFood.
     * @example
     * // Update one MealFood
     * const mealFood = await prisma.mealFood.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealFoodUpdateArgs>(args: SelectSubset<T, MealFoodUpdateArgs<ExtArgs>>): Prisma__MealFoodClient<$Result.GetResult<Prisma.$MealFoodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MealFoods.
     * @param {MealFoodDeleteManyArgs} args - Arguments to filter MealFoods to delete.
     * @example
     * // Delete a few MealFoods
     * const { count } = await prisma.mealFood.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealFoodDeleteManyArgs>(args?: SelectSubset<T, MealFoodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealFoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MealFoods
     * const mealFood = await prisma.mealFood.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealFoodUpdateManyArgs>(args: SelectSubset<T, MealFoodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealFoods and returns the data updated in the database.
     * @param {MealFoodUpdateManyAndReturnArgs} args - Arguments to update many MealFoods.
     * @example
     * // Update many MealFoods
     * const mealFood = await prisma.mealFood.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MealFoods and only return the `id`
     * const mealFoodWithIdOnly = await prisma.mealFood.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MealFoodUpdateManyAndReturnArgs>(args: SelectSubset<T, MealFoodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealFoodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MealFood.
     * @param {MealFoodUpsertArgs} args - Arguments to update or create a MealFood.
     * @example
     * // Update or create a MealFood
     * const mealFood = await prisma.mealFood.upsert({
     *   create: {
     *     // ... data to create a MealFood
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MealFood we want to update
     *   }
     * })
     */
    upsert<T extends MealFoodUpsertArgs>(args: SelectSubset<T, MealFoodUpsertArgs<ExtArgs>>): Prisma__MealFoodClient<$Result.GetResult<Prisma.$MealFoodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MealFoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFoodCountArgs} args - Arguments to filter MealFoods to count.
     * @example
     * // Count the number of MealFoods
     * const count = await prisma.mealFood.count({
     *   where: {
     *     // ... the filter for the MealFoods we want to count
     *   }
     * })
    **/
    count<T extends MealFoodCountArgs>(
      args?: Subset<T, MealFoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealFoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MealFood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MealFoodAggregateArgs>(args: Subset<T, MealFoodAggregateArgs>): Prisma.PrismaPromise<GetMealFoodAggregateType<T>>

    /**
     * Group by MealFood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFoodGroupByArgs} args - Group by arguments.
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
      T extends MealFoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealFoodGroupByArgs['orderBy'] }
        : { orderBy?: MealFoodGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MealFoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealFoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MealFood model
   */
  readonly fields: MealFoodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MealFood.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealFoodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    food<T extends FoodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FoodDefaultArgs<ExtArgs>>): Prisma__FoodClient<$Result.GetResult<Prisma.$FoodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    meal<T extends MealDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MealDefaultArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    servingUnit<T extends ServingUnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServingUnitDefaultArgs<ExtArgs>>): Prisma__ServingUnitClient<$Result.GetResult<Prisma.$ServingUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MealFood model
   */
  interface MealFoodFieldRefs {
    readonly id: FieldRef<"MealFood", 'Int'>
    readonly foodId: FieldRef<"MealFood", 'Int'>
    readonly mealId: FieldRef<"MealFood", 'Int'>
    readonly amount: FieldRef<"MealFood", 'Float'>
    readonly createdAt: FieldRef<"MealFood", 'DateTime'>
    readonly updatedAt: FieldRef<"MealFood", 'DateTime'>
    readonly servingUnitId: FieldRef<"MealFood", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MealFood findUnique
   */
  export type MealFoodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodInclude<ExtArgs> | null
    /**
     * Filter, which MealFood to fetch.
     */
    where: MealFoodWhereUniqueInput
  }

  /**
   * MealFood findUniqueOrThrow
   */
  export type MealFoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodInclude<ExtArgs> | null
    /**
     * Filter, which MealFood to fetch.
     */
    where: MealFoodWhereUniqueInput
  }

  /**
   * MealFood findFirst
   */
  export type MealFoodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodInclude<ExtArgs> | null
    /**
     * Filter, which MealFood to fetch.
     */
    where?: MealFoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealFoods to fetch.
     */
    orderBy?: MealFoodOrderByWithRelationInput | MealFoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealFoods.
     */
    cursor?: MealFoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealFoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealFoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealFoods.
     */
    distinct?: MealFoodScalarFieldEnum | MealFoodScalarFieldEnum[]
  }

  /**
   * MealFood findFirstOrThrow
   */
  export type MealFoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodInclude<ExtArgs> | null
    /**
     * Filter, which MealFood to fetch.
     */
    where?: MealFoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealFoods to fetch.
     */
    orderBy?: MealFoodOrderByWithRelationInput | MealFoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealFoods.
     */
    cursor?: MealFoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealFoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealFoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealFoods.
     */
    distinct?: MealFoodScalarFieldEnum | MealFoodScalarFieldEnum[]
  }

  /**
   * MealFood findMany
   */
  export type MealFoodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodInclude<ExtArgs> | null
    /**
     * Filter, which MealFoods to fetch.
     */
    where?: MealFoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealFoods to fetch.
     */
    orderBy?: MealFoodOrderByWithRelationInput | MealFoodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MealFoods.
     */
    cursor?: MealFoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealFoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealFoods.
     */
    skip?: number
    distinct?: MealFoodScalarFieldEnum | MealFoodScalarFieldEnum[]
  }

  /**
   * MealFood create
   */
  export type MealFoodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodInclude<ExtArgs> | null
    /**
     * The data needed to create a MealFood.
     */
    data: XOR<MealFoodCreateInput, MealFoodUncheckedCreateInput>
  }

  /**
   * MealFood createMany
   */
  export type MealFoodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MealFoods.
     */
    data: MealFoodCreateManyInput | MealFoodCreateManyInput[]
  }

  /**
   * MealFood createManyAndReturn
   */
  export type MealFoodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * The data used to create many MealFoods.
     */
    data: MealFoodCreateManyInput | MealFoodCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealFood update
   */
  export type MealFoodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodInclude<ExtArgs> | null
    /**
     * The data needed to update a MealFood.
     */
    data: XOR<MealFoodUpdateInput, MealFoodUncheckedUpdateInput>
    /**
     * Choose, which MealFood to update.
     */
    where: MealFoodWhereUniqueInput
  }

  /**
   * MealFood updateMany
   */
  export type MealFoodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MealFoods.
     */
    data: XOR<MealFoodUpdateManyMutationInput, MealFoodUncheckedUpdateManyInput>
    /**
     * Filter which MealFoods to update
     */
    where?: MealFoodWhereInput
    /**
     * Limit how many MealFoods to update.
     */
    limit?: number
  }

  /**
   * MealFood updateManyAndReturn
   */
  export type MealFoodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * The data used to update MealFoods.
     */
    data: XOR<MealFoodUpdateManyMutationInput, MealFoodUncheckedUpdateManyInput>
    /**
     * Filter which MealFoods to update
     */
    where?: MealFoodWhereInput
    /**
     * Limit how many MealFoods to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealFood upsert
   */
  export type MealFoodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodInclude<ExtArgs> | null
    /**
     * The filter to search for the MealFood to update in case it exists.
     */
    where: MealFoodWhereUniqueInput
    /**
     * In case the MealFood found by the `where` argument doesn't exist, create a new MealFood with this data.
     */
    create: XOR<MealFoodCreateInput, MealFoodUncheckedCreateInput>
    /**
     * In case the MealFood was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealFoodUpdateInput, MealFoodUncheckedUpdateInput>
  }

  /**
   * MealFood delete
   */
  export type MealFoodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodInclude<ExtArgs> | null
    /**
     * Filter which MealFood to delete.
     */
    where: MealFoodWhereUniqueInput
  }

  /**
   * MealFood deleteMany
   */
  export type MealFoodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealFoods to delete
     */
    where?: MealFoodWhereInput
    /**
     * Limit how many MealFoods to delete.
     */
    limit?: number
  }

  /**
   * MealFood without action
   */
  export type MealFoodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealFood
     */
    select?: MealFoodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealFood
     */
    omit?: MealFoodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealFoodInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const FoodScalarFieldEnum: {
    id: 'id',
    name: 'name',
    calories: 'calories',
    protein: 'protein',
    fat: 'fat',
    carbohydrates: 'carbohydrates',
    fiber: 'fiber',
    sugar: 'sugar',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    mealId: 'mealId'
  };

  export type FoodScalarFieldEnum = (typeof FoodScalarFieldEnum)[keyof typeof FoodScalarFieldEnum]


  export const ServingUnitScalarFieldEnum: {
    id: 'id',
    name: 'name',
    foodId: 'foodId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServingUnitScalarFieldEnum = (typeof ServingUnitScalarFieldEnum)[keyof typeof ServingUnitScalarFieldEnum]


  export const FoodServingUnitScalarFieldEnum: {
    id: 'id',
    grams: 'grams',
    foodId: 'foodId',
    servingUnitId: 'servingUnitId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FoodServingUnitScalarFieldEnum = (typeof FoodServingUnitScalarFieldEnum)[keyof typeof FoodServingUnitScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MealScalarFieldEnum: {
    id: 'id',
    dateTime: 'dateTime',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MealScalarFieldEnum = (typeof MealScalarFieldEnum)[keyof typeof MealScalarFieldEnum]


  export const MealFoodScalarFieldEnum: {
    id: 'id',
    foodId: 'foodId',
    mealId: 'mealId',
    amount: 'amount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    servingUnitId: 'servingUnitId'
  };

  export type MealFoodScalarFieldEnum = (typeof MealFoodScalarFieldEnum)[keyof typeof MealFoodScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    
  /**
   * Deep Input Types
   */


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    foods?: FoodListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    foods?: FoodOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    foods?: FoodListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type FoodWhereInput = {
    AND?: FoodWhereInput | FoodWhereInput[]
    OR?: FoodWhereInput[]
    NOT?: FoodWhereInput | FoodWhereInput[]
    id?: IntFilter<"Food"> | number
    name?: StringFilter<"Food"> | string
    calories?: FloatNullableFilter<"Food"> | number | null
    protein?: FloatNullableFilter<"Food"> | number | null
    fat?: FloatNullableFilter<"Food"> | number | null
    carbohydrates?: FloatNullableFilter<"Food"> | number | null
    fiber?: FloatNullableFilter<"Food"> | number | null
    sugar?: FloatNullableFilter<"Food"> | number | null
    categoryId?: IntNullableFilter<"Food"> | number | null
    createdAt?: DateTimeFilter<"Food"> | Date | string
    updatedAt?: DateTimeFilter<"Food"> | Date | string
    mealId?: IntNullableFilter<"Food"> | number | null
    foodServingUnits?: FoodServingUnitListRelationFilter
    servingUnits?: ServingUnitListRelationFilter
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    meal?: XOR<MealNullableScalarRelationFilter, MealWhereInput> | null
    mealFood?: MealFoodListRelationFilter
  }

  export type FoodOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    calories?: SortOrderInput | SortOrder
    protein?: SortOrderInput | SortOrder
    fat?: SortOrderInput | SortOrder
    carbohydrates?: SortOrderInput | SortOrder
    fiber?: SortOrderInput | SortOrder
    sugar?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mealId?: SortOrderInput | SortOrder
    foodServingUnits?: FoodServingUnitOrderByRelationAggregateInput
    servingUnits?: ServingUnitOrderByRelationAggregateInput
    category?: CategoryOrderByWithRelationInput
    meal?: MealOrderByWithRelationInput
    mealFood?: MealFoodOrderByRelationAggregateInput
  }

  export type FoodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: FoodWhereInput | FoodWhereInput[]
    OR?: FoodWhereInput[]
    NOT?: FoodWhereInput | FoodWhereInput[]
    calories?: FloatNullableFilter<"Food"> | number | null
    protein?: FloatNullableFilter<"Food"> | number | null
    fat?: FloatNullableFilter<"Food"> | number | null
    carbohydrates?: FloatNullableFilter<"Food"> | number | null
    fiber?: FloatNullableFilter<"Food"> | number | null
    sugar?: FloatNullableFilter<"Food"> | number | null
    categoryId?: IntNullableFilter<"Food"> | number | null
    createdAt?: DateTimeFilter<"Food"> | Date | string
    updatedAt?: DateTimeFilter<"Food"> | Date | string
    mealId?: IntNullableFilter<"Food"> | number | null
    foodServingUnits?: FoodServingUnitListRelationFilter
    servingUnits?: ServingUnitListRelationFilter
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    meal?: XOR<MealNullableScalarRelationFilter, MealWhereInput> | null
    mealFood?: MealFoodListRelationFilter
  }, "id" | "name">

  export type FoodOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    calories?: SortOrderInput | SortOrder
    protein?: SortOrderInput | SortOrder
    fat?: SortOrderInput | SortOrder
    carbohydrates?: SortOrderInput | SortOrder
    fiber?: SortOrderInput | SortOrder
    sugar?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mealId?: SortOrderInput | SortOrder
    _count?: FoodCountOrderByAggregateInput
    _avg?: FoodAvgOrderByAggregateInput
    _max?: FoodMaxOrderByAggregateInput
    _min?: FoodMinOrderByAggregateInput
    _sum?: FoodSumOrderByAggregateInput
  }

  export type FoodScalarWhereWithAggregatesInput = {
    AND?: FoodScalarWhereWithAggregatesInput | FoodScalarWhereWithAggregatesInput[]
    OR?: FoodScalarWhereWithAggregatesInput[]
    NOT?: FoodScalarWhereWithAggregatesInput | FoodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Food"> | number
    name?: StringWithAggregatesFilter<"Food"> | string
    calories?: FloatNullableWithAggregatesFilter<"Food"> | number | null
    protein?: FloatNullableWithAggregatesFilter<"Food"> | number | null
    fat?: FloatNullableWithAggregatesFilter<"Food"> | number | null
    carbohydrates?: FloatNullableWithAggregatesFilter<"Food"> | number | null
    fiber?: FloatNullableWithAggregatesFilter<"Food"> | number | null
    sugar?: FloatNullableWithAggregatesFilter<"Food"> | number | null
    categoryId?: IntNullableWithAggregatesFilter<"Food"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Food"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Food"> | Date | string
    mealId?: IntNullableWithAggregatesFilter<"Food"> | number | null
  }

  export type ServingUnitWhereInput = {
    AND?: ServingUnitWhereInput | ServingUnitWhereInput[]
    OR?: ServingUnitWhereInput[]
    NOT?: ServingUnitWhereInput | ServingUnitWhereInput[]
    id?: IntFilter<"ServingUnit"> | number
    name?: StringFilter<"ServingUnit"> | string
    foodId?: IntNullableFilter<"ServingUnit"> | number | null
    createdAt?: DateTimeFilter<"ServingUnit"> | Date | string
    updatedAt?: DateTimeFilter<"ServingUnit"> | Date | string
    foodServingUnit?: FoodServingUnitListRelationFilter
    food?: XOR<FoodNullableScalarRelationFilter, FoodWhereInput> | null
    mealFood?: MealFoodListRelationFilter
  }

  export type ServingUnitOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    foodId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    foodServingUnit?: FoodServingUnitOrderByRelationAggregateInput
    food?: FoodOrderByWithRelationInput
    mealFood?: MealFoodOrderByRelationAggregateInput
  }

  export type ServingUnitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ServingUnitWhereInput | ServingUnitWhereInput[]
    OR?: ServingUnitWhereInput[]
    NOT?: ServingUnitWhereInput | ServingUnitWhereInput[]
    foodId?: IntNullableFilter<"ServingUnit"> | number | null
    createdAt?: DateTimeFilter<"ServingUnit"> | Date | string
    updatedAt?: DateTimeFilter<"ServingUnit"> | Date | string
    foodServingUnit?: FoodServingUnitListRelationFilter
    food?: XOR<FoodNullableScalarRelationFilter, FoodWhereInput> | null
    mealFood?: MealFoodListRelationFilter
  }, "id" | "name">

  export type ServingUnitOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    foodId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServingUnitCountOrderByAggregateInput
    _avg?: ServingUnitAvgOrderByAggregateInput
    _max?: ServingUnitMaxOrderByAggregateInput
    _min?: ServingUnitMinOrderByAggregateInput
    _sum?: ServingUnitSumOrderByAggregateInput
  }

  export type ServingUnitScalarWhereWithAggregatesInput = {
    AND?: ServingUnitScalarWhereWithAggregatesInput | ServingUnitScalarWhereWithAggregatesInput[]
    OR?: ServingUnitScalarWhereWithAggregatesInput[]
    NOT?: ServingUnitScalarWhereWithAggregatesInput | ServingUnitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ServingUnit"> | number
    name?: StringWithAggregatesFilter<"ServingUnit"> | string
    foodId?: IntNullableWithAggregatesFilter<"ServingUnit"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"ServingUnit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ServingUnit"> | Date | string
  }

  export type FoodServingUnitWhereInput = {
    AND?: FoodServingUnitWhereInput | FoodServingUnitWhereInput[]
    OR?: FoodServingUnitWhereInput[]
    NOT?: FoodServingUnitWhereInput | FoodServingUnitWhereInput[]
    id?: IntFilter<"FoodServingUnit"> | number
    grams?: FloatNullableFilter<"FoodServingUnit"> | number | null
    foodId?: IntFilter<"FoodServingUnit"> | number
    servingUnitId?: IntFilter<"FoodServingUnit"> | number
    createdAt?: DateTimeFilter<"FoodServingUnit"> | Date | string
    updatedAt?: DateTimeFilter<"FoodServingUnit"> | Date | string
    food?: XOR<FoodScalarRelationFilter, FoodWhereInput>
    servingUnit?: XOR<ServingUnitScalarRelationFilter, ServingUnitWhereInput>
  }

  export type FoodServingUnitOrderByWithRelationInput = {
    id?: SortOrder
    grams?: SortOrderInput | SortOrder
    foodId?: SortOrder
    servingUnitId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    food?: FoodOrderByWithRelationInput
    servingUnit?: ServingUnitOrderByWithRelationInput
  }

  export type FoodServingUnitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FoodServingUnitWhereInput | FoodServingUnitWhereInput[]
    OR?: FoodServingUnitWhereInput[]
    NOT?: FoodServingUnitWhereInput | FoodServingUnitWhereInput[]
    grams?: FloatNullableFilter<"FoodServingUnit"> | number | null
    foodId?: IntFilter<"FoodServingUnit"> | number
    servingUnitId?: IntFilter<"FoodServingUnit"> | number
    createdAt?: DateTimeFilter<"FoodServingUnit"> | Date | string
    updatedAt?: DateTimeFilter<"FoodServingUnit"> | Date | string
    food?: XOR<FoodScalarRelationFilter, FoodWhereInput>
    servingUnit?: XOR<ServingUnitScalarRelationFilter, ServingUnitWhereInput>
  }, "id">

  export type FoodServingUnitOrderByWithAggregationInput = {
    id?: SortOrder
    grams?: SortOrderInput | SortOrder
    foodId?: SortOrder
    servingUnitId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FoodServingUnitCountOrderByAggregateInput
    _avg?: FoodServingUnitAvgOrderByAggregateInput
    _max?: FoodServingUnitMaxOrderByAggregateInput
    _min?: FoodServingUnitMinOrderByAggregateInput
    _sum?: FoodServingUnitSumOrderByAggregateInput
  }

  export type FoodServingUnitScalarWhereWithAggregatesInput = {
    AND?: FoodServingUnitScalarWhereWithAggregatesInput | FoodServingUnitScalarWhereWithAggregatesInput[]
    OR?: FoodServingUnitScalarWhereWithAggregatesInput[]
    NOT?: FoodServingUnitScalarWhereWithAggregatesInput | FoodServingUnitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FoodServingUnit"> | number
    grams?: FloatNullableWithAggregatesFilter<"FoodServingUnit"> | number | null
    foodId?: IntWithAggregatesFilter<"FoodServingUnit"> | number
    servingUnitId?: IntWithAggregatesFilter<"FoodServingUnit"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FoodServingUnit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FoodServingUnit"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    meals?: MealListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    meals?: MealOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    meals?: MealListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MealWhereInput = {
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    id?: IntFilter<"Meal"> | number
    dateTime?: DateTimeFilter<"Meal"> | Date | string
    userId?: IntNullableFilter<"Meal"> | number | null
    createdAt?: DateTimeFilter<"Meal"> | Date | string
    updatedAt?: DateTimeFilter<"Meal"> | Date | string
    foods?: FoodListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    mealFoods?: MealFoodListRelationFilter
  }

  export type MealOrderByWithRelationInput = {
    id?: SortOrder
    dateTime?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    foods?: FoodOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    mealFoods?: MealFoodOrderByRelationAggregateInput
  }

  export type MealWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    dateTime?: DateTimeFilter<"Meal"> | Date | string
    userId?: IntNullableFilter<"Meal"> | number | null
    createdAt?: DateTimeFilter<"Meal"> | Date | string
    updatedAt?: DateTimeFilter<"Meal"> | Date | string
    foods?: FoodListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    mealFoods?: MealFoodListRelationFilter
  }, "id">

  export type MealOrderByWithAggregationInput = {
    id?: SortOrder
    dateTime?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MealCountOrderByAggregateInput
    _avg?: MealAvgOrderByAggregateInput
    _max?: MealMaxOrderByAggregateInput
    _min?: MealMinOrderByAggregateInput
    _sum?: MealSumOrderByAggregateInput
  }

  export type MealScalarWhereWithAggregatesInput = {
    AND?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    OR?: MealScalarWhereWithAggregatesInput[]
    NOT?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Meal"> | number
    dateTime?: DateTimeWithAggregatesFilter<"Meal"> | Date | string
    userId?: IntNullableWithAggregatesFilter<"Meal"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Meal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Meal"> | Date | string
  }

  export type MealFoodWhereInput = {
    AND?: MealFoodWhereInput | MealFoodWhereInput[]
    OR?: MealFoodWhereInput[]
    NOT?: MealFoodWhereInput | MealFoodWhereInput[]
    id?: IntFilter<"MealFood"> | number
    foodId?: IntFilter<"MealFood"> | number
    mealId?: IntFilter<"MealFood"> | number
    amount?: FloatFilter<"MealFood"> | number
    createdAt?: DateTimeFilter<"MealFood"> | Date | string
    updatedAt?: DateTimeFilter<"MealFood"> | Date | string
    servingUnitId?: IntFilter<"MealFood"> | number
    food?: XOR<FoodScalarRelationFilter, FoodWhereInput>
    meal?: XOR<MealScalarRelationFilter, MealWhereInput>
    servingUnit?: XOR<ServingUnitScalarRelationFilter, ServingUnitWhereInput>
  }

  export type MealFoodOrderByWithRelationInput = {
    id?: SortOrder
    foodId?: SortOrder
    mealId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    servingUnitId?: SortOrder
    food?: FoodOrderByWithRelationInput
    meal?: MealOrderByWithRelationInput
    servingUnit?: ServingUnitOrderByWithRelationInput
  }

  export type MealFoodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MealFoodWhereInput | MealFoodWhereInput[]
    OR?: MealFoodWhereInput[]
    NOT?: MealFoodWhereInput | MealFoodWhereInput[]
    foodId?: IntFilter<"MealFood"> | number
    mealId?: IntFilter<"MealFood"> | number
    amount?: FloatFilter<"MealFood"> | number
    createdAt?: DateTimeFilter<"MealFood"> | Date | string
    updatedAt?: DateTimeFilter<"MealFood"> | Date | string
    servingUnitId?: IntFilter<"MealFood"> | number
    food?: XOR<FoodScalarRelationFilter, FoodWhereInput>
    meal?: XOR<MealScalarRelationFilter, MealWhereInput>
    servingUnit?: XOR<ServingUnitScalarRelationFilter, ServingUnitWhereInput>
  }, "id">

  export type MealFoodOrderByWithAggregationInput = {
    id?: SortOrder
    foodId?: SortOrder
    mealId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    servingUnitId?: SortOrder
    _count?: MealFoodCountOrderByAggregateInput
    _avg?: MealFoodAvgOrderByAggregateInput
    _max?: MealFoodMaxOrderByAggregateInput
    _min?: MealFoodMinOrderByAggregateInput
    _sum?: MealFoodSumOrderByAggregateInput
  }

  export type MealFoodScalarWhereWithAggregatesInput = {
    AND?: MealFoodScalarWhereWithAggregatesInput | MealFoodScalarWhereWithAggregatesInput[]
    OR?: MealFoodScalarWhereWithAggregatesInput[]
    NOT?: MealFoodScalarWhereWithAggregatesInput | MealFoodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MealFood"> | number
    foodId?: IntWithAggregatesFilter<"MealFood"> | number
    mealId?: IntWithAggregatesFilter<"MealFood"> | number
    amount?: FloatWithAggregatesFilter<"MealFood"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MealFood"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MealFood"> | Date | string
    servingUnitId?: IntWithAggregatesFilter<"MealFood"> | number
  }

  export type CategoryCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: FoodCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: FoodUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodCreateInput = {
    name: string
    calories?: number | null
    protein?: number | null
    fat?: number | null
    carbohydrates?: number | null
    fiber?: number | null
    sugar?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    foodServingUnits?: FoodServingUnitCreateNestedManyWithoutFoodInput
    servingUnits?: ServingUnitCreateNestedManyWithoutFoodInput
    category?: CategoryCreateNestedOneWithoutFoodsInput
    meal?: MealCreateNestedOneWithoutFoodsInput
    mealFood?: MealFoodCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateInput = {
    id?: number
    name: string
    calories?: number | null
    protein?: number | null
    fat?: number | null
    carbohydrates?: number | null
    fiber?: number | null
    sugar?: number | null
    categoryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mealId?: number | null
    foodServingUnits?: FoodServingUnitUncheckedCreateNestedManyWithoutFoodInput
    servingUnits?: ServingUnitUncheckedCreateNestedManyWithoutFoodInput
    mealFood?: MealFoodUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    carbohydrates?: NullableFloatFieldUpdateOperationsInput | number | null
    fiber?: NullableFloatFieldUpdateOperationsInput | number | null
    sugar?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodServingUnits?: FoodServingUnitUpdateManyWithoutFoodNestedInput
    servingUnits?: ServingUnitUpdateManyWithoutFoodNestedInput
    category?: CategoryUpdateOneWithoutFoodsNestedInput
    meal?: MealUpdateOneWithoutFoodsNestedInput
    mealFood?: MealFoodUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    carbohydrates?: NullableFloatFieldUpdateOperationsInput | number | null
    fiber?: NullableFloatFieldUpdateOperationsInput | number | null
    sugar?: NullableFloatFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealId?: NullableIntFieldUpdateOperationsInput | number | null
    foodServingUnits?: FoodServingUnitUncheckedUpdateManyWithoutFoodNestedInput
    servingUnits?: ServingUnitUncheckedUpdateManyWithoutFoodNestedInput
    mealFood?: MealFoodUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodCreateManyInput = {
    id?: number
    name: string
    calories?: number | null
    protein?: number | null
    fat?: number | null
    carbohydrates?: number | null
    fiber?: number | null
    sugar?: number | null
    categoryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mealId?: number | null
  }

  export type FoodUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    carbohydrates?: NullableFloatFieldUpdateOperationsInput | number | null
    fiber?: NullableFloatFieldUpdateOperationsInput | number | null
    sugar?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    carbohydrates?: NullableFloatFieldUpdateOperationsInput | number | null
    fiber?: NullableFloatFieldUpdateOperationsInput | number | null
    sugar?: NullableFloatFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ServingUnitCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    foodServingUnit?: FoodServingUnitCreateNestedManyWithoutServingUnitInput
    food?: FoodCreateNestedOneWithoutServingUnitsInput
    mealFood?: MealFoodCreateNestedManyWithoutServingUnitInput
  }

  export type ServingUnitUncheckedCreateInput = {
    id?: number
    name: string
    foodId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    foodServingUnit?: FoodServingUnitUncheckedCreateNestedManyWithoutServingUnitInput
    mealFood?: MealFoodUncheckedCreateNestedManyWithoutServingUnitInput
  }

  export type ServingUnitUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodServingUnit?: FoodServingUnitUpdateManyWithoutServingUnitNestedInput
    food?: FoodUpdateOneWithoutServingUnitsNestedInput
    mealFood?: MealFoodUpdateManyWithoutServingUnitNestedInput
  }

  export type ServingUnitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    foodId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodServingUnit?: FoodServingUnitUncheckedUpdateManyWithoutServingUnitNestedInput
    mealFood?: MealFoodUncheckedUpdateManyWithoutServingUnitNestedInput
  }

  export type ServingUnitCreateManyInput = {
    id?: number
    name: string
    foodId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServingUnitUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServingUnitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    foodId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodServingUnitCreateInput = {
    grams?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    food: FoodCreateNestedOneWithoutFoodServingUnitsInput
    servingUnit: ServingUnitCreateNestedOneWithoutFoodServingUnitInput
  }

  export type FoodServingUnitUncheckedCreateInput = {
    id?: number
    grams?: number | null
    foodId: number
    servingUnitId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodServingUnitUpdateInput = {
    grams?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUpdateOneRequiredWithoutFoodServingUnitsNestedInput
    servingUnit?: ServingUnitUpdateOneRequiredWithoutFoodServingUnitNestedInput
  }

  export type FoodServingUnitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    grams?: NullableFloatFieldUpdateOperationsInput | number | null
    foodId?: IntFieldUpdateOperationsInput | number
    servingUnitId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodServingUnitCreateManyInput = {
    id?: number
    grams?: number | null
    foodId: number
    servingUnitId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodServingUnitUpdateManyMutationInput = {
    grams?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodServingUnitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    grams?: NullableFloatFieldUpdateOperationsInput | number | null
    foodId?: IntFieldUpdateOperationsInput | number
    servingUnitId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    meals?: MealUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealCreateInput = {
    dateTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: FoodCreateNestedManyWithoutMealInput
    user?: UserCreateNestedOneWithoutMealsInput
    mealFoods?: MealFoodCreateNestedManyWithoutMealInput
  }

  export type MealUncheckedCreateInput = {
    id?: number
    dateTime: Date | string
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: FoodUncheckedCreateNestedManyWithoutMealInput
    mealFoods?: MealFoodUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealUpdateInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUpdateManyWithoutMealNestedInput
    user?: UserUpdateOneWithoutMealsNestedInput
    mealFoods?: MealFoodUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUncheckedUpdateManyWithoutMealNestedInput
    mealFoods?: MealFoodUncheckedUpdateManyWithoutMealNestedInput
  }

  export type MealCreateManyInput = {
    id?: number
    dateTime: Date | string
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealUpdateManyMutationInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealFoodCreateInput = {
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    food: FoodCreateNestedOneWithoutMealFoodInput
    meal: MealCreateNestedOneWithoutMealFoodsInput
    servingUnit: ServingUnitCreateNestedOneWithoutMealFoodInput
  }

  export type MealFoodUncheckedCreateInput = {
    id?: number
    foodId: number
    mealId: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    servingUnitId: number
  }

  export type MealFoodUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUpdateOneRequiredWithoutMealFoodNestedInput
    meal?: MealUpdateOneRequiredWithoutMealFoodsNestedInput
    servingUnit?: ServingUnitUpdateOneRequiredWithoutMealFoodNestedInput
  }

  export type MealFoodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
    mealId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servingUnitId?: IntFieldUpdateOperationsInput | number
  }

  export type MealFoodCreateManyInput = {
    id?: number
    foodId: number
    mealId: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    servingUnitId: number
  }

  export type MealFoodUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealFoodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
    mealId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servingUnitId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FoodListRelationFilter = {
    every?: FoodWhereInput
    some?: FoodWhereInput
    none?: FoodWhereInput
  }

  export type FoodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FoodServingUnitListRelationFilter = {
    every?: FoodServingUnitWhereInput
    some?: FoodServingUnitWhereInput
    none?: FoodServingUnitWhereInput
  }

  export type ServingUnitListRelationFilter = {
    every?: ServingUnitWhereInput
    some?: ServingUnitWhereInput
    none?: ServingUnitWhereInput
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type MealNullableScalarRelationFilter = {
    is?: MealWhereInput | null
    isNot?: MealWhereInput | null
  }

  export type MealFoodListRelationFilter = {
    every?: MealFoodWhereInput
    some?: MealFoodWhereInput
    none?: MealFoodWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FoodServingUnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServingUnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MealFoodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FoodCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    carbohydrates?: SortOrder
    fiber?: SortOrder
    sugar?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mealId?: SortOrder
  }

  export type FoodAvgOrderByAggregateInput = {
    id?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    carbohydrates?: SortOrder
    fiber?: SortOrder
    sugar?: SortOrder
    categoryId?: SortOrder
    mealId?: SortOrder
  }

  export type FoodMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    carbohydrates?: SortOrder
    fiber?: SortOrder
    sugar?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mealId?: SortOrder
  }

  export type FoodMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    carbohydrates?: SortOrder
    fiber?: SortOrder
    sugar?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mealId?: SortOrder
  }

  export type FoodSumOrderByAggregateInput = {
    id?: SortOrder
    calories?: SortOrder
    protein?: SortOrder
    fat?: SortOrder
    carbohydrates?: SortOrder
    fiber?: SortOrder
    sugar?: SortOrder
    categoryId?: SortOrder
    mealId?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type FoodNullableScalarRelationFilter = {
    is?: FoodWhereInput | null
    isNot?: FoodWhereInput | null
  }

  export type ServingUnitCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    foodId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServingUnitAvgOrderByAggregateInput = {
    id?: SortOrder
    foodId?: SortOrder
  }

  export type ServingUnitMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    foodId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServingUnitMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    foodId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServingUnitSumOrderByAggregateInput = {
    id?: SortOrder
    foodId?: SortOrder
  }

  export type FoodScalarRelationFilter = {
    is?: FoodWhereInput
    isNot?: FoodWhereInput
  }

  export type ServingUnitScalarRelationFilter = {
    is?: ServingUnitWhereInput
    isNot?: ServingUnitWhereInput
  }

  export type FoodServingUnitCountOrderByAggregateInput = {
    id?: SortOrder
    grams?: SortOrder
    foodId?: SortOrder
    servingUnitId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodServingUnitAvgOrderByAggregateInput = {
    id?: SortOrder
    grams?: SortOrder
    foodId?: SortOrder
    servingUnitId?: SortOrder
  }

  export type FoodServingUnitMaxOrderByAggregateInput = {
    id?: SortOrder
    grams?: SortOrder
    foodId?: SortOrder
    servingUnitId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodServingUnitMinOrderByAggregateInput = {
    id?: SortOrder
    grams?: SortOrder
    foodId?: SortOrder
    servingUnitId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FoodServingUnitSumOrderByAggregateInput = {
    id?: SortOrder
    grams?: SortOrder
    foodId?: SortOrder
    servingUnitId?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type MealListRelationFilter = {
    every?: MealWhereInput
    some?: MealWhereInput
    none?: MealWhereInput
  }

  export type MealOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MealCountOrderByAggregateInput = {
    id?: SortOrder
    dateTime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MealAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type MealMaxOrderByAggregateInput = {
    id?: SortOrder
    dateTime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MealMinOrderByAggregateInput = {
    id?: SortOrder
    dateTime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MealSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MealScalarRelationFilter = {
    is?: MealWhereInput
    isNot?: MealWhereInput
  }

  export type MealFoodCountOrderByAggregateInput = {
    id?: SortOrder
    foodId?: SortOrder
    mealId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    servingUnitId?: SortOrder
  }

  export type MealFoodAvgOrderByAggregateInput = {
    id?: SortOrder
    foodId?: SortOrder
    mealId?: SortOrder
    amount?: SortOrder
    servingUnitId?: SortOrder
  }

  export type MealFoodMaxOrderByAggregateInput = {
    id?: SortOrder
    foodId?: SortOrder
    mealId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    servingUnitId?: SortOrder
  }

  export type MealFoodMinOrderByAggregateInput = {
    id?: SortOrder
    foodId?: SortOrder
    mealId?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    servingUnitId?: SortOrder
  }

  export type MealFoodSumOrderByAggregateInput = {
    id?: SortOrder
    foodId?: SortOrder
    mealId?: SortOrder
    amount?: SortOrder
    servingUnitId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type FoodCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput> | FoodCreateWithoutCategoryInput[] | FoodUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutCategoryInput | FoodCreateOrConnectWithoutCategoryInput[]
    createMany?: FoodCreateManyCategoryInputEnvelope
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
  }

  export type FoodUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput> | FoodCreateWithoutCategoryInput[] | FoodUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutCategoryInput | FoodCreateOrConnectWithoutCategoryInput[]
    createMany?: FoodCreateManyCategoryInputEnvelope
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FoodUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput> | FoodCreateWithoutCategoryInput[] | FoodUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutCategoryInput | FoodCreateOrConnectWithoutCategoryInput[]
    upsert?: FoodUpsertWithWhereUniqueWithoutCategoryInput | FoodUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FoodCreateManyCategoryInputEnvelope
    set?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    disconnect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    delete?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    update?: FoodUpdateWithWhereUniqueWithoutCategoryInput | FoodUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FoodUpdateManyWithWhereWithoutCategoryInput | FoodUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FoodScalarWhereInput | FoodScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FoodUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput> | FoodCreateWithoutCategoryInput[] | FoodUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutCategoryInput | FoodCreateOrConnectWithoutCategoryInput[]
    upsert?: FoodUpsertWithWhereUniqueWithoutCategoryInput | FoodUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: FoodCreateManyCategoryInputEnvelope
    set?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    disconnect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    delete?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    update?: FoodUpdateWithWhereUniqueWithoutCategoryInput | FoodUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: FoodUpdateManyWithWhereWithoutCategoryInput | FoodUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: FoodScalarWhereInput | FoodScalarWhereInput[]
  }

  export type FoodServingUnitCreateNestedManyWithoutFoodInput = {
    create?: XOR<FoodServingUnitCreateWithoutFoodInput, FoodServingUnitUncheckedCreateWithoutFoodInput> | FoodServingUnitCreateWithoutFoodInput[] | FoodServingUnitUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: FoodServingUnitCreateOrConnectWithoutFoodInput | FoodServingUnitCreateOrConnectWithoutFoodInput[]
    createMany?: FoodServingUnitCreateManyFoodInputEnvelope
    connect?: FoodServingUnitWhereUniqueInput | FoodServingUnitWhereUniqueInput[]
  }

  export type ServingUnitCreateNestedManyWithoutFoodInput = {
    create?: XOR<ServingUnitCreateWithoutFoodInput, ServingUnitUncheckedCreateWithoutFoodInput> | ServingUnitCreateWithoutFoodInput[] | ServingUnitUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: ServingUnitCreateOrConnectWithoutFoodInput | ServingUnitCreateOrConnectWithoutFoodInput[]
    createMany?: ServingUnitCreateManyFoodInputEnvelope
    connect?: ServingUnitWhereUniqueInput | ServingUnitWhereUniqueInput[]
  }

  export type CategoryCreateNestedOneWithoutFoodsInput = {
    create?: XOR<CategoryCreateWithoutFoodsInput, CategoryUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutFoodsInput
    connect?: CategoryWhereUniqueInput
  }

  export type MealCreateNestedOneWithoutFoodsInput = {
    create?: XOR<MealCreateWithoutFoodsInput, MealUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: MealCreateOrConnectWithoutFoodsInput
    connect?: MealWhereUniqueInput
  }

  export type MealFoodCreateNestedManyWithoutFoodInput = {
    create?: XOR<MealFoodCreateWithoutFoodInput, MealFoodUncheckedCreateWithoutFoodInput> | MealFoodCreateWithoutFoodInput[] | MealFoodUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: MealFoodCreateOrConnectWithoutFoodInput | MealFoodCreateOrConnectWithoutFoodInput[]
    createMany?: MealFoodCreateManyFoodInputEnvelope
    connect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
  }

  export type FoodServingUnitUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<FoodServingUnitCreateWithoutFoodInput, FoodServingUnitUncheckedCreateWithoutFoodInput> | FoodServingUnitCreateWithoutFoodInput[] | FoodServingUnitUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: FoodServingUnitCreateOrConnectWithoutFoodInput | FoodServingUnitCreateOrConnectWithoutFoodInput[]
    createMany?: FoodServingUnitCreateManyFoodInputEnvelope
    connect?: FoodServingUnitWhereUniqueInput | FoodServingUnitWhereUniqueInput[]
  }

  export type ServingUnitUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<ServingUnitCreateWithoutFoodInput, ServingUnitUncheckedCreateWithoutFoodInput> | ServingUnitCreateWithoutFoodInput[] | ServingUnitUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: ServingUnitCreateOrConnectWithoutFoodInput | ServingUnitCreateOrConnectWithoutFoodInput[]
    createMany?: ServingUnitCreateManyFoodInputEnvelope
    connect?: ServingUnitWhereUniqueInput | ServingUnitWhereUniqueInput[]
  }

  export type MealFoodUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<MealFoodCreateWithoutFoodInput, MealFoodUncheckedCreateWithoutFoodInput> | MealFoodCreateWithoutFoodInput[] | MealFoodUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: MealFoodCreateOrConnectWithoutFoodInput | MealFoodCreateOrConnectWithoutFoodInput[]
    createMany?: MealFoodCreateManyFoodInputEnvelope
    connect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FoodServingUnitUpdateManyWithoutFoodNestedInput = {
    create?: XOR<FoodServingUnitCreateWithoutFoodInput, FoodServingUnitUncheckedCreateWithoutFoodInput> | FoodServingUnitCreateWithoutFoodInput[] | FoodServingUnitUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: FoodServingUnitCreateOrConnectWithoutFoodInput | FoodServingUnitCreateOrConnectWithoutFoodInput[]
    upsert?: FoodServingUnitUpsertWithWhereUniqueWithoutFoodInput | FoodServingUnitUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: FoodServingUnitCreateManyFoodInputEnvelope
    set?: FoodServingUnitWhereUniqueInput | FoodServingUnitWhereUniqueInput[]
    disconnect?: FoodServingUnitWhereUniqueInput | FoodServingUnitWhereUniqueInput[]
    delete?: FoodServingUnitWhereUniqueInput | FoodServingUnitWhereUniqueInput[]
    connect?: FoodServingUnitWhereUniqueInput | FoodServingUnitWhereUniqueInput[]
    update?: FoodServingUnitUpdateWithWhereUniqueWithoutFoodInput | FoodServingUnitUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: FoodServingUnitUpdateManyWithWhereWithoutFoodInput | FoodServingUnitUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: FoodServingUnitScalarWhereInput | FoodServingUnitScalarWhereInput[]
  }

  export type ServingUnitUpdateManyWithoutFoodNestedInput = {
    create?: XOR<ServingUnitCreateWithoutFoodInput, ServingUnitUncheckedCreateWithoutFoodInput> | ServingUnitCreateWithoutFoodInput[] | ServingUnitUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: ServingUnitCreateOrConnectWithoutFoodInput | ServingUnitCreateOrConnectWithoutFoodInput[]
    upsert?: ServingUnitUpsertWithWhereUniqueWithoutFoodInput | ServingUnitUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: ServingUnitCreateManyFoodInputEnvelope
    set?: ServingUnitWhereUniqueInput | ServingUnitWhereUniqueInput[]
    disconnect?: ServingUnitWhereUniqueInput | ServingUnitWhereUniqueInput[]
    delete?: ServingUnitWhereUniqueInput | ServingUnitWhereUniqueInput[]
    connect?: ServingUnitWhereUniqueInput | ServingUnitWhereUniqueInput[]
    update?: ServingUnitUpdateWithWhereUniqueWithoutFoodInput | ServingUnitUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: ServingUnitUpdateManyWithWhereWithoutFoodInput | ServingUnitUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: ServingUnitScalarWhereInput | ServingUnitScalarWhereInput[]
  }

  export type CategoryUpdateOneWithoutFoodsNestedInput = {
    create?: XOR<CategoryCreateWithoutFoodsInput, CategoryUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutFoodsInput
    upsert?: CategoryUpsertWithoutFoodsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutFoodsInput, CategoryUpdateWithoutFoodsInput>, CategoryUncheckedUpdateWithoutFoodsInput>
  }

  export type MealUpdateOneWithoutFoodsNestedInput = {
    create?: XOR<MealCreateWithoutFoodsInput, MealUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: MealCreateOrConnectWithoutFoodsInput
    upsert?: MealUpsertWithoutFoodsInput
    disconnect?: MealWhereInput | boolean
    delete?: MealWhereInput | boolean
    connect?: MealWhereUniqueInput
    update?: XOR<XOR<MealUpdateToOneWithWhereWithoutFoodsInput, MealUpdateWithoutFoodsInput>, MealUncheckedUpdateWithoutFoodsInput>
  }

  export type MealFoodUpdateManyWithoutFoodNestedInput = {
    create?: XOR<MealFoodCreateWithoutFoodInput, MealFoodUncheckedCreateWithoutFoodInput> | MealFoodCreateWithoutFoodInput[] | MealFoodUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: MealFoodCreateOrConnectWithoutFoodInput | MealFoodCreateOrConnectWithoutFoodInput[]
    upsert?: MealFoodUpsertWithWhereUniqueWithoutFoodInput | MealFoodUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: MealFoodCreateManyFoodInputEnvelope
    set?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    disconnect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    delete?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    connect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    update?: MealFoodUpdateWithWhereUniqueWithoutFoodInput | MealFoodUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: MealFoodUpdateManyWithWhereWithoutFoodInput | MealFoodUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: MealFoodScalarWhereInput | MealFoodScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FoodServingUnitUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<FoodServingUnitCreateWithoutFoodInput, FoodServingUnitUncheckedCreateWithoutFoodInput> | FoodServingUnitCreateWithoutFoodInput[] | FoodServingUnitUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: FoodServingUnitCreateOrConnectWithoutFoodInput | FoodServingUnitCreateOrConnectWithoutFoodInput[]
    upsert?: FoodServingUnitUpsertWithWhereUniqueWithoutFoodInput | FoodServingUnitUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: FoodServingUnitCreateManyFoodInputEnvelope
    set?: FoodServingUnitWhereUniqueInput | FoodServingUnitWhereUniqueInput[]
    disconnect?: FoodServingUnitWhereUniqueInput | FoodServingUnitWhereUniqueInput[]
    delete?: FoodServingUnitWhereUniqueInput | FoodServingUnitWhereUniqueInput[]
    connect?: FoodServingUnitWhereUniqueInput | FoodServingUnitWhereUniqueInput[]
    update?: FoodServingUnitUpdateWithWhereUniqueWithoutFoodInput | FoodServingUnitUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: FoodServingUnitUpdateManyWithWhereWithoutFoodInput | FoodServingUnitUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: FoodServingUnitScalarWhereInput | FoodServingUnitScalarWhereInput[]
  }

  export type ServingUnitUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<ServingUnitCreateWithoutFoodInput, ServingUnitUncheckedCreateWithoutFoodInput> | ServingUnitCreateWithoutFoodInput[] | ServingUnitUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: ServingUnitCreateOrConnectWithoutFoodInput | ServingUnitCreateOrConnectWithoutFoodInput[]
    upsert?: ServingUnitUpsertWithWhereUniqueWithoutFoodInput | ServingUnitUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: ServingUnitCreateManyFoodInputEnvelope
    set?: ServingUnitWhereUniqueInput | ServingUnitWhereUniqueInput[]
    disconnect?: ServingUnitWhereUniqueInput | ServingUnitWhereUniqueInput[]
    delete?: ServingUnitWhereUniqueInput | ServingUnitWhereUniqueInput[]
    connect?: ServingUnitWhereUniqueInput | ServingUnitWhereUniqueInput[]
    update?: ServingUnitUpdateWithWhereUniqueWithoutFoodInput | ServingUnitUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: ServingUnitUpdateManyWithWhereWithoutFoodInput | ServingUnitUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: ServingUnitScalarWhereInput | ServingUnitScalarWhereInput[]
  }

  export type MealFoodUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<MealFoodCreateWithoutFoodInput, MealFoodUncheckedCreateWithoutFoodInput> | MealFoodCreateWithoutFoodInput[] | MealFoodUncheckedCreateWithoutFoodInput[]
    connectOrCreate?: MealFoodCreateOrConnectWithoutFoodInput | MealFoodCreateOrConnectWithoutFoodInput[]
    upsert?: MealFoodUpsertWithWhereUniqueWithoutFoodInput | MealFoodUpsertWithWhereUniqueWithoutFoodInput[]
    createMany?: MealFoodCreateManyFoodInputEnvelope
    set?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    disconnect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    delete?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    connect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    update?: MealFoodUpdateWithWhereUniqueWithoutFoodInput | MealFoodUpdateWithWhereUniqueWithoutFoodInput[]
    updateMany?: MealFoodUpdateManyWithWhereWithoutFoodInput | MealFoodUpdateManyWithWhereWithoutFoodInput[]
    deleteMany?: MealFoodScalarWhereInput | MealFoodScalarWhereInput[]
  }

  export type FoodServingUnitCreateNestedManyWithoutServingUnitInput = {
    create?: XOR<FoodServingUnitCreateWithoutServingUnitInput, FoodServingUnitUncheckedCreateWithoutServingUnitInput> | FoodServingUnitCreateWithoutServingUnitInput[] | FoodServingUnitUncheckedCreateWithoutServingUnitInput[]
    connectOrCreate?: FoodServingUnitCreateOrConnectWithoutServingUnitInput | FoodServingUnitCreateOrConnectWithoutServingUnitInput[]
    createMany?: FoodServingUnitCreateManyServingUnitInputEnvelope
    connect?: FoodServingUnitWhereUniqueInput | FoodServingUnitWhereUniqueInput[]
  }

  export type FoodCreateNestedOneWithoutServingUnitsInput = {
    create?: XOR<FoodCreateWithoutServingUnitsInput, FoodUncheckedCreateWithoutServingUnitsInput>
    connectOrCreate?: FoodCreateOrConnectWithoutServingUnitsInput
    connect?: FoodWhereUniqueInput
  }

  export type MealFoodCreateNestedManyWithoutServingUnitInput = {
    create?: XOR<MealFoodCreateWithoutServingUnitInput, MealFoodUncheckedCreateWithoutServingUnitInput> | MealFoodCreateWithoutServingUnitInput[] | MealFoodUncheckedCreateWithoutServingUnitInput[]
    connectOrCreate?: MealFoodCreateOrConnectWithoutServingUnitInput | MealFoodCreateOrConnectWithoutServingUnitInput[]
    createMany?: MealFoodCreateManyServingUnitInputEnvelope
    connect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
  }

  export type FoodServingUnitUncheckedCreateNestedManyWithoutServingUnitInput = {
    create?: XOR<FoodServingUnitCreateWithoutServingUnitInput, FoodServingUnitUncheckedCreateWithoutServingUnitInput> | FoodServingUnitCreateWithoutServingUnitInput[] | FoodServingUnitUncheckedCreateWithoutServingUnitInput[]
    connectOrCreate?: FoodServingUnitCreateOrConnectWithoutServingUnitInput | FoodServingUnitCreateOrConnectWithoutServingUnitInput[]
    createMany?: FoodServingUnitCreateManyServingUnitInputEnvelope
    connect?: FoodServingUnitWhereUniqueInput | FoodServingUnitWhereUniqueInput[]
  }

  export type MealFoodUncheckedCreateNestedManyWithoutServingUnitInput = {
    create?: XOR<MealFoodCreateWithoutServingUnitInput, MealFoodUncheckedCreateWithoutServingUnitInput> | MealFoodCreateWithoutServingUnitInput[] | MealFoodUncheckedCreateWithoutServingUnitInput[]
    connectOrCreate?: MealFoodCreateOrConnectWithoutServingUnitInput | MealFoodCreateOrConnectWithoutServingUnitInput[]
    createMany?: MealFoodCreateManyServingUnitInputEnvelope
    connect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
  }

  export type FoodServingUnitUpdateManyWithoutServingUnitNestedInput = {
    create?: XOR<FoodServingUnitCreateWithoutServingUnitInput, FoodServingUnitUncheckedCreateWithoutServingUnitInput> | FoodServingUnitCreateWithoutServingUnitInput[] | FoodServingUnitUncheckedCreateWithoutServingUnitInput[]
    connectOrCreate?: FoodServingUnitCreateOrConnectWithoutServingUnitInput | FoodServingUnitCreateOrConnectWithoutServingUnitInput[]
    upsert?: FoodServingUnitUpsertWithWhereUniqueWithoutServingUnitInput | FoodServingUnitUpsertWithWhereUniqueWithoutServingUnitInput[]
    createMany?: FoodServingUnitCreateManyServingUnitInputEnvelope
    set?: FoodServingUnitWhereUniqueInput | FoodServingUnitWhereUniqueInput[]
    disconnect?: FoodServingUnitWhereUniqueInput | FoodServingUnitWhereUniqueInput[]
    delete?: FoodServingUnitWhereUniqueInput | FoodServingUnitWhereUniqueInput[]
    connect?: FoodServingUnitWhereUniqueInput | FoodServingUnitWhereUniqueInput[]
    update?: FoodServingUnitUpdateWithWhereUniqueWithoutServingUnitInput | FoodServingUnitUpdateWithWhereUniqueWithoutServingUnitInput[]
    updateMany?: FoodServingUnitUpdateManyWithWhereWithoutServingUnitInput | FoodServingUnitUpdateManyWithWhereWithoutServingUnitInput[]
    deleteMany?: FoodServingUnitScalarWhereInput | FoodServingUnitScalarWhereInput[]
  }

  export type FoodUpdateOneWithoutServingUnitsNestedInput = {
    create?: XOR<FoodCreateWithoutServingUnitsInput, FoodUncheckedCreateWithoutServingUnitsInput>
    connectOrCreate?: FoodCreateOrConnectWithoutServingUnitsInput
    upsert?: FoodUpsertWithoutServingUnitsInput
    disconnect?: FoodWhereInput | boolean
    delete?: FoodWhereInput | boolean
    connect?: FoodWhereUniqueInput
    update?: XOR<XOR<FoodUpdateToOneWithWhereWithoutServingUnitsInput, FoodUpdateWithoutServingUnitsInput>, FoodUncheckedUpdateWithoutServingUnitsInput>
  }

  export type MealFoodUpdateManyWithoutServingUnitNestedInput = {
    create?: XOR<MealFoodCreateWithoutServingUnitInput, MealFoodUncheckedCreateWithoutServingUnitInput> | MealFoodCreateWithoutServingUnitInput[] | MealFoodUncheckedCreateWithoutServingUnitInput[]
    connectOrCreate?: MealFoodCreateOrConnectWithoutServingUnitInput | MealFoodCreateOrConnectWithoutServingUnitInput[]
    upsert?: MealFoodUpsertWithWhereUniqueWithoutServingUnitInput | MealFoodUpsertWithWhereUniqueWithoutServingUnitInput[]
    createMany?: MealFoodCreateManyServingUnitInputEnvelope
    set?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    disconnect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    delete?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    connect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    update?: MealFoodUpdateWithWhereUniqueWithoutServingUnitInput | MealFoodUpdateWithWhereUniqueWithoutServingUnitInput[]
    updateMany?: MealFoodUpdateManyWithWhereWithoutServingUnitInput | MealFoodUpdateManyWithWhereWithoutServingUnitInput[]
    deleteMany?: MealFoodScalarWhereInput | MealFoodScalarWhereInput[]
  }

  export type FoodServingUnitUncheckedUpdateManyWithoutServingUnitNestedInput = {
    create?: XOR<FoodServingUnitCreateWithoutServingUnitInput, FoodServingUnitUncheckedCreateWithoutServingUnitInput> | FoodServingUnitCreateWithoutServingUnitInput[] | FoodServingUnitUncheckedCreateWithoutServingUnitInput[]
    connectOrCreate?: FoodServingUnitCreateOrConnectWithoutServingUnitInput | FoodServingUnitCreateOrConnectWithoutServingUnitInput[]
    upsert?: FoodServingUnitUpsertWithWhereUniqueWithoutServingUnitInput | FoodServingUnitUpsertWithWhereUniqueWithoutServingUnitInput[]
    createMany?: FoodServingUnitCreateManyServingUnitInputEnvelope
    set?: FoodServingUnitWhereUniqueInput | FoodServingUnitWhereUniqueInput[]
    disconnect?: FoodServingUnitWhereUniqueInput | FoodServingUnitWhereUniqueInput[]
    delete?: FoodServingUnitWhereUniqueInput | FoodServingUnitWhereUniqueInput[]
    connect?: FoodServingUnitWhereUniqueInput | FoodServingUnitWhereUniqueInput[]
    update?: FoodServingUnitUpdateWithWhereUniqueWithoutServingUnitInput | FoodServingUnitUpdateWithWhereUniqueWithoutServingUnitInput[]
    updateMany?: FoodServingUnitUpdateManyWithWhereWithoutServingUnitInput | FoodServingUnitUpdateManyWithWhereWithoutServingUnitInput[]
    deleteMany?: FoodServingUnitScalarWhereInput | FoodServingUnitScalarWhereInput[]
  }

  export type MealFoodUncheckedUpdateManyWithoutServingUnitNestedInput = {
    create?: XOR<MealFoodCreateWithoutServingUnitInput, MealFoodUncheckedCreateWithoutServingUnitInput> | MealFoodCreateWithoutServingUnitInput[] | MealFoodUncheckedCreateWithoutServingUnitInput[]
    connectOrCreate?: MealFoodCreateOrConnectWithoutServingUnitInput | MealFoodCreateOrConnectWithoutServingUnitInput[]
    upsert?: MealFoodUpsertWithWhereUniqueWithoutServingUnitInput | MealFoodUpsertWithWhereUniqueWithoutServingUnitInput[]
    createMany?: MealFoodCreateManyServingUnitInputEnvelope
    set?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    disconnect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    delete?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    connect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    update?: MealFoodUpdateWithWhereUniqueWithoutServingUnitInput | MealFoodUpdateWithWhereUniqueWithoutServingUnitInput[]
    updateMany?: MealFoodUpdateManyWithWhereWithoutServingUnitInput | MealFoodUpdateManyWithWhereWithoutServingUnitInput[]
    deleteMany?: MealFoodScalarWhereInput | MealFoodScalarWhereInput[]
  }

  export type FoodCreateNestedOneWithoutFoodServingUnitsInput = {
    create?: XOR<FoodCreateWithoutFoodServingUnitsInput, FoodUncheckedCreateWithoutFoodServingUnitsInput>
    connectOrCreate?: FoodCreateOrConnectWithoutFoodServingUnitsInput
    connect?: FoodWhereUniqueInput
  }

  export type ServingUnitCreateNestedOneWithoutFoodServingUnitInput = {
    create?: XOR<ServingUnitCreateWithoutFoodServingUnitInput, ServingUnitUncheckedCreateWithoutFoodServingUnitInput>
    connectOrCreate?: ServingUnitCreateOrConnectWithoutFoodServingUnitInput
    connect?: ServingUnitWhereUniqueInput
  }

  export type FoodUpdateOneRequiredWithoutFoodServingUnitsNestedInput = {
    create?: XOR<FoodCreateWithoutFoodServingUnitsInput, FoodUncheckedCreateWithoutFoodServingUnitsInput>
    connectOrCreate?: FoodCreateOrConnectWithoutFoodServingUnitsInput
    upsert?: FoodUpsertWithoutFoodServingUnitsInput
    connect?: FoodWhereUniqueInput
    update?: XOR<XOR<FoodUpdateToOneWithWhereWithoutFoodServingUnitsInput, FoodUpdateWithoutFoodServingUnitsInput>, FoodUncheckedUpdateWithoutFoodServingUnitsInput>
  }

  export type ServingUnitUpdateOneRequiredWithoutFoodServingUnitNestedInput = {
    create?: XOR<ServingUnitCreateWithoutFoodServingUnitInput, ServingUnitUncheckedCreateWithoutFoodServingUnitInput>
    connectOrCreate?: ServingUnitCreateOrConnectWithoutFoodServingUnitInput
    upsert?: ServingUnitUpsertWithoutFoodServingUnitInput
    connect?: ServingUnitWhereUniqueInput
    update?: XOR<XOR<ServingUnitUpdateToOneWithWhereWithoutFoodServingUnitInput, ServingUnitUpdateWithoutFoodServingUnitInput>, ServingUnitUncheckedUpdateWithoutFoodServingUnitInput>
  }

  export type MealCreateNestedManyWithoutUserInput = {
    create?: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput> | MealCreateWithoutUserInput[] | MealUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealCreateOrConnectWithoutUserInput | MealCreateOrConnectWithoutUserInput[]
    createMany?: MealCreateManyUserInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type MealUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput> | MealCreateWithoutUserInput[] | MealUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealCreateOrConnectWithoutUserInput | MealCreateOrConnectWithoutUserInput[]
    createMany?: MealCreateManyUserInputEnvelope
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type MealUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput> | MealCreateWithoutUserInput[] | MealUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealCreateOrConnectWithoutUserInput | MealCreateOrConnectWithoutUserInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutUserInput | MealUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealCreateManyUserInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutUserInput | MealUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealUpdateManyWithWhereWithoutUserInput | MealUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type MealUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput> | MealCreateWithoutUserInput[] | MealUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealCreateOrConnectWithoutUserInput | MealCreateOrConnectWithoutUserInput[]
    upsert?: MealUpsertWithWhereUniqueWithoutUserInput | MealUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealCreateManyUserInputEnvelope
    set?: MealWhereUniqueInput | MealWhereUniqueInput[]
    disconnect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    delete?: MealWhereUniqueInput | MealWhereUniqueInput[]
    connect?: MealWhereUniqueInput | MealWhereUniqueInput[]
    update?: MealUpdateWithWhereUniqueWithoutUserInput | MealUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealUpdateManyWithWhereWithoutUserInput | MealUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealScalarWhereInput | MealScalarWhereInput[]
  }

  export type FoodCreateNestedManyWithoutMealInput = {
    create?: XOR<FoodCreateWithoutMealInput, FoodUncheckedCreateWithoutMealInput> | FoodCreateWithoutMealInput[] | FoodUncheckedCreateWithoutMealInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutMealInput | FoodCreateOrConnectWithoutMealInput[]
    createMany?: FoodCreateManyMealInputEnvelope
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutMealsInput = {
    create?: XOR<UserCreateWithoutMealsInput, UserUncheckedCreateWithoutMealsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMealsInput
    connect?: UserWhereUniqueInput
  }

  export type MealFoodCreateNestedManyWithoutMealInput = {
    create?: XOR<MealFoodCreateWithoutMealInput, MealFoodUncheckedCreateWithoutMealInput> | MealFoodCreateWithoutMealInput[] | MealFoodUncheckedCreateWithoutMealInput[]
    connectOrCreate?: MealFoodCreateOrConnectWithoutMealInput | MealFoodCreateOrConnectWithoutMealInput[]
    createMany?: MealFoodCreateManyMealInputEnvelope
    connect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
  }

  export type FoodUncheckedCreateNestedManyWithoutMealInput = {
    create?: XOR<FoodCreateWithoutMealInput, FoodUncheckedCreateWithoutMealInput> | FoodCreateWithoutMealInput[] | FoodUncheckedCreateWithoutMealInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutMealInput | FoodCreateOrConnectWithoutMealInput[]
    createMany?: FoodCreateManyMealInputEnvelope
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
  }

  export type MealFoodUncheckedCreateNestedManyWithoutMealInput = {
    create?: XOR<MealFoodCreateWithoutMealInput, MealFoodUncheckedCreateWithoutMealInput> | MealFoodCreateWithoutMealInput[] | MealFoodUncheckedCreateWithoutMealInput[]
    connectOrCreate?: MealFoodCreateOrConnectWithoutMealInput | MealFoodCreateOrConnectWithoutMealInput[]
    createMany?: MealFoodCreateManyMealInputEnvelope
    connect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
  }

  export type FoodUpdateManyWithoutMealNestedInput = {
    create?: XOR<FoodCreateWithoutMealInput, FoodUncheckedCreateWithoutMealInput> | FoodCreateWithoutMealInput[] | FoodUncheckedCreateWithoutMealInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutMealInput | FoodCreateOrConnectWithoutMealInput[]
    upsert?: FoodUpsertWithWhereUniqueWithoutMealInput | FoodUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: FoodCreateManyMealInputEnvelope
    set?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    disconnect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    delete?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    update?: FoodUpdateWithWhereUniqueWithoutMealInput | FoodUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: FoodUpdateManyWithWhereWithoutMealInput | FoodUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: FoodScalarWhereInput | FoodScalarWhereInput[]
  }

  export type UserUpdateOneWithoutMealsNestedInput = {
    create?: XOR<UserCreateWithoutMealsInput, UserUncheckedCreateWithoutMealsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMealsInput
    upsert?: UserUpsertWithoutMealsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMealsInput, UserUpdateWithoutMealsInput>, UserUncheckedUpdateWithoutMealsInput>
  }

  export type MealFoodUpdateManyWithoutMealNestedInput = {
    create?: XOR<MealFoodCreateWithoutMealInput, MealFoodUncheckedCreateWithoutMealInput> | MealFoodCreateWithoutMealInput[] | MealFoodUncheckedCreateWithoutMealInput[]
    connectOrCreate?: MealFoodCreateOrConnectWithoutMealInput | MealFoodCreateOrConnectWithoutMealInput[]
    upsert?: MealFoodUpsertWithWhereUniqueWithoutMealInput | MealFoodUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: MealFoodCreateManyMealInputEnvelope
    set?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    disconnect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    delete?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    connect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    update?: MealFoodUpdateWithWhereUniqueWithoutMealInput | MealFoodUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: MealFoodUpdateManyWithWhereWithoutMealInput | MealFoodUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: MealFoodScalarWhereInput | MealFoodScalarWhereInput[]
  }

  export type FoodUncheckedUpdateManyWithoutMealNestedInput = {
    create?: XOR<FoodCreateWithoutMealInput, FoodUncheckedCreateWithoutMealInput> | FoodCreateWithoutMealInput[] | FoodUncheckedCreateWithoutMealInput[]
    connectOrCreate?: FoodCreateOrConnectWithoutMealInput | FoodCreateOrConnectWithoutMealInput[]
    upsert?: FoodUpsertWithWhereUniqueWithoutMealInput | FoodUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: FoodCreateManyMealInputEnvelope
    set?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    disconnect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    delete?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    connect?: FoodWhereUniqueInput | FoodWhereUniqueInput[]
    update?: FoodUpdateWithWhereUniqueWithoutMealInput | FoodUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: FoodUpdateManyWithWhereWithoutMealInput | FoodUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: FoodScalarWhereInput | FoodScalarWhereInput[]
  }

  export type MealFoodUncheckedUpdateManyWithoutMealNestedInput = {
    create?: XOR<MealFoodCreateWithoutMealInput, MealFoodUncheckedCreateWithoutMealInput> | MealFoodCreateWithoutMealInput[] | MealFoodUncheckedCreateWithoutMealInput[]
    connectOrCreate?: MealFoodCreateOrConnectWithoutMealInput | MealFoodCreateOrConnectWithoutMealInput[]
    upsert?: MealFoodUpsertWithWhereUniqueWithoutMealInput | MealFoodUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: MealFoodCreateManyMealInputEnvelope
    set?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    disconnect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    delete?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    connect?: MealFoodWhereUniqueInput | MealFoodWhereUniqueInput[]
    update?: MealFoodUpdateWithWhereUniqueWithoutMealInput | MealFoodUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: MealFoodUpdateManyWithWhereWithoutMealInput | MealFoodUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: MealFoodScalarWhereInput | MealFoodScalarWhereInput[]
  }

  export type FoodCreateNestedOneWithoutMealFoodInput = {
    create?: XOR<FoodCreateWithoutMealFoodInput, FoodUncheckedCreateWithoutMealFoodInput>
    connectOrCreate?: FoodCreateOrConnectWithoutMealFoodInput
    connect?: FoodWhereUniqueInput
  }

  export type MealCreateNestedOneWithoutMealFoodsInput = {
    create?: XOR<MealCreateWithoutMealFoodsInput, MealUncheckedCreateWithoutMealFoodsInput>
    connectOrCreate?: MealCreateOrConnectWithoutMealFoodsInput
    connect?: MealWhereUniqueInput
  }

  export type ServingUnitCreateNestedOneWithoutMealFoodInput = {
    create?: XOR<ServingUnitCreateWithoutMealFoodInput, ServingUnitUncheckedCreateWithoutMealFoodInput>
    connectOrCreate?: ServingUnitCreateOrConnectWithoutMealFoodInput
    connect?: ServingUnitWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FoodUpdateOneRequiredWithoutMealFoodNestedInput = {
    create?: XOR<FoodCreateWithoutMealFoodInput, FoodUncheckedCreateWithoutMealFoodInput>
    connectOrCreate?: FoodCreateOrConnectWithoutMealFoodInput
    upsert?: FoodUpsertWithoutMealFoodInput
    connect?: FoodWhereUniqueInput
    update?: XOR<XOR<FoodUpdateToOneWithWhereWithoutMealFoodInput, FoodUpdateWithoutMealFoodInput>, FoodUncheckedUpdateWithoutMealFoodInput>
  }

  export type MealUpdateOneRequiredWithoutMealFoodsNestedInput = {
    create?: XOR<MealCreateWithoutMealFoodsInput, MealUncheckedCreateWithoutMealFoodsInput>
    connectOrCreate?: MealCreateOrConnectWithoutMealFoodsInput
    upsert?: MealUpsertWithoutMealFoodsInput
    connect?: MealWhereUniqueInput
    update?: XOR<XOR<MealUpdateToOneWithWhereWithoutMealFoodsInput, MealUpdateWithoutMealFoodsInput>, MealUncheckedUpdateWithoutMealFoodsInput>
  }

  export type ServingUnitUpdateOneRequiredWithoutMealFoodNestedInput = {
    create?: XOR<ServingUnitCreateWithoutMealFoodInput, ServingUnitUncheckedCreateWithoutMealFoodInput>
    connectOrCreate?: ServingUnitCreateOrConnectWithoutMealFoodInput
    upsert?: ServingUnitUpsertWithoutMealFoodInput
    connect?: ServingUnitWhereUniqueInput
    update?: XOR<XOR<ServingUnitUpdateToOneWithWhereWithoutMealFoodInput, ServingUnitUpdateWithoutMealFoodInput>, ServingUnitUncheckedUpdateWithoutMealFoodInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type FoodCreateWithoutCategoryInput = {
    name: string
    calories?: number | null
    protein?: number | null
    fat?: number | null
    carbohydrates?: number | null
    fiber?: number | null
    sugar?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    foodServingUnits?: FoodServingUnitCreateNestedManyWithoutFoodInput
    servingUnits?: ServingUnitCreateNestedManyWithoutFoodInput
    meal?: MealCreateNestedOneWithoutFoodsInput
    mealFood?: MealFoodCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    calories?: number | null
    protein?: number | null
    fat?: number | null
    carbohydrates?: number | null
    fiber?: number | null
    sugar?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mealId?: number | null
    foodServingUnits?: FoodServingUnitUncheckedCreateNestedManyWithoutFoodInput
    servingUnits?: ServingUnitUncheckedCreateNestedManyWithoutFoodInput
    mealFood?: MealFoodUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutCategoryInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput>
  }

  export type FoodCreateManyCategoryInputEnvelope = {
    data: FoodCreateManyCategoryInput | FoodCreateManyCategoryInput[]
  }

  export type FoodUpsertWithWhereUniqueWithoutCategoryInput = {
    where: FoodWhereUniqueInput
    update: XOR<FoodUpdateWithoutCategoryInput, FoodUncheckedUpdateWithoutCategoryInput>
    create: XOR<FoodCreateWithoutCategoryInput, FoodUncheckedCreateWithoutCategoryInput>
  }

  export type FoodUpdateWithWhereUniqueWithoutCategoryInput = {
    where: FoodWhereUniqueInput
    data: XOR<FoodUpdateWithoutCategoryInput, FoodUncheckedUpdateWithoutCategoryInput>
  }

  export type FoodUpdateManyWithWhereWithoutCategoryInput = {
    where: FoodScalarWhereInput
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyWithoutCategoryInput>
  }

  export type FoodScalarWhereInput = {
    AND?: FoodScalarWhereInput | FoodScalarWhereInput[]
    OR?: FoodScalarWhereInput[]
    NOT?: FoodScalarWhereInput | FoodScalarWhereInput[]
    id?: IntFilter<"Food"> | number
    name?: StringFilter<"Food"> | string
    calories?: FloatNullableFilter<"Food"> | number | null
    protein?: FloatNullableFilter<"Food"> | number | null
    fat?: FloatNullableFilter<"Food"> | number | null
    carbohydrates?: FloatNullableFilter<"Food"> | number | null
    fiber?: FloatNullableFilter<"Food"> | number | null
    sugar?: FloatNullableFilter<"Food"> | number | null
    categoryId?: IntNullableFilter<"Food"> | number | null
    createdAt?: DateTimeFilter<"Food"> | Date | string
    updatedAt?: DateTimeFilter<"Food"> | Date | string
    mealId?: IntNullableFilter<"Food"> | number | null
  }

  export type FoodServingUnitCreateWithoutFoodInput = {
    grams?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    servingUnit: ServingUnitCreateNestedOneWithoutFoodServingUnitInput
  }

  export type FoodServingUnitUncheckedCreateWithoutFoodInput = {
    id?: number
    grams?: number | null
    servingUnitId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodServingUnitCreateOrConnectWithoutFoodInput = {
    where: FoodServingUnitWhereUniqueInput
    create: XOR<FoodServingUnitCreateWithoutFoodInput, FoodServingUnitUncheckedCreateWithoutFoodInput>
  }

  export type FoodServingUnitCreateManyFoodInputEnvelope = {
    data: FoodServingUnitCreateManyFoodInput | FoodServingUnitCreateManyFoodInput[]
  }

  export type ServingUnitCreateWithoutFoodInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    foodServingUnit?: FoodServingUnitCreateNestedManyWithoutServingUnitInput
    mealFood?: MealFoodCreateNestedManyWithoutServingUnitInput
  }

  export type ServingUnitUncheckedCreateWithoutFoodInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    foodServingUnit?: FoodServingUnitUncheckedCreateNestedManyWithoutServingUnitInput
    mealFood?: MealFoodUncheckedCreateNestedManyWithoutServingUnitInput
  }

  export type ServingUnitCreateOrConnectWithoutFoodInput = {
    where: ServingUnitWhereUniqueInput
    create: XOR<ServingUnitCreateWithoutFoodInput, ServingUnitUncheckedCreateWithoutFoodInput>
  }

  export type ServingUnitCreateManyFoodInputEnvelope = {
    data: ServingUnitCreateManyFoodInput | ServingUnitCreateManyFoodInput[]
  }

  export type CategoryCreateWithoutFoodsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutFoodsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutFoodsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutFoodsInput, CategoryUncheckedCreateWithoutFoodsInput>
  }

  export type MealCreateWithoutFoodsInput = {
    dateTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutMealsInput
    mealFoods?: MealFoodCreateNestedManyWithoutMealInput
  }

  export type MealUncheckedCreateWithoutFoodsInput = {
    id?: number
    dateTime: Date | string
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mealFoods?: MealFoodUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealCreateOrConnectWithoutFoodsInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutFoodsInput, MealUncheckedCreateWithoutFoodsInput>
  }

  export type MealFoodCreateWithoutFoodInput = {
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    meal: MealCreateNestedOneWithoutMealFoodsInput
    servingUnit: ServingUnitCreateNestedOneWithoutMealFoodInput
  }

  export type MealFoodUncheckedCreateWithoutFoodInput = {
    id?: number
    mealId: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    servingUnitId: number
  }

  export type MealFoodCreateOrConnectWithoutFoodInput = {
    where: MealFoodWhereUniqueInput
    create: XOR<MealFoodCreateWithoutFoodInput, MealFoodUncheckedCreateWithoutFoodInput>
  }

  export type MealFoodCreateManyFoodInputEnvelope = {
    data: MealFoodCreateManyFoodInput | MealFoodCreateManyFoodInput[]
  }

  export type FoodServingUnitUpsertWithWhereUniqueWithoutFoodInput = {
    where: FoodServingUnitWhereUniqueInput
    update: XOR<FoodServingUnitUpdateWithoutFoodInput, FoodServingUnitUncheckedUpdateWithoutFoodInput>
    create: XOR<FoodServingUnitCreateWithoutFoodInput, FoodServingUnitUncheckedCreateWithoutFoodInput>
  }

  export type FoodServingUnitUpdateWithWhereUniqueWithoutFoodInput = {
    where: FoodServingUnitWhereUniqueInput
    data: XOR<FoodServingUnitUpdateWithoutFoodInput, FoodServingUnitUncheckedUpdateWithoutFoodInput>
  }

  export type FoodServingUnitUpdateManyWithWhereWithoutFoodInput = {
    where: FoodServingUnitScalarWhereInput
    data: XOR<FoodServingUnitUpdateManyMutationInput, FoodServingUnitUncheckedUpdateManyWithoutFoodInput>
  }

  export type FoodServingUnitScalarWhereInput = {
    AND?: FoodServingUnitScalarWhereInput | FoodServingUnitScalarWhereInput[]
    OR?: FoodServingUnitScalarWhereInput[]
    NOT?: FoodServingUnitScalarWhereInput | FoodServingUnitScalarWhereInput[]
    id?: IntFilter<"FoodServingUnit"> | number
    grams?: FloatNullableFilter<"FoodServingUnit"> | number | null
    foodId?: IntFilter<"FoodServingUnit"> | number
    servingUnitId?: IntFilter<"FoodServingUnit"> | number
    createdAt?: DateTimeFilter<"FoodServingUnit"> | Date | string
    updatedAt?: DateTimeFilter<"FoodServingUnit"> | Date | string
  }

  export type ServingUnitUpsertWithWhereUniqueWithoutFoodInput = {
    where: ServingUnitWhereUniqueInput
    update: XOR<ServingUnitUpdateWithoutFoodInput, ServingUnitUncheckedUpdateWithoutFoodInput>
    create: XOR<ServingUnitCreateWithoutFoodInput, ServingUnitUncheckedCreateWithoutFoodInput>
  }

  export type ServingUnitUpdateWithWhereUniqueWithoutFoodInput = {
    where: ServingUnitWhereUniqueInput
    data: XOR<ServingUnitUpdateWithoutFoodInput, ServingUnitUncheckedUpdateWithoutFoodInput>
  }

  export type ServingUnitUpdateManyWithWhereWithoutFoodInput = {
    where: ServingUnitScalarWhereInput
    data: XOR<ServingUnitUpdateManyMutationInput, ServingUnitUncheckedUpdateManyWithoutFoodInput>
  }

  export type ServingUnitScalarWhereInput = {
    AND?: ServingUnitScalarWhereInput | ServingUnitScalarWhereInput[]
    OR?: ServingUnitScalarWhereInput[]
    NOT?: ServingUnitScalarWhereInput | ServingUnitScalarWhereInput[]
    id?: IntFilter<"ServingUnit"> | number
    name?: StringFilter<"ServingUnit"> | string
    foodId?: IntNullableFilter<"ServingUnit"> | number | null
    createdAt?: DateTimeFilter<"ServingUnit"> | Date | string
    updatedAt?: DateTimeFilter<"ServingUnit"> | Date | string
  }

  export type CategoryUpsertWithoutFoodsInput = {
    update: XOR<CategoryUpdateWithoutFoodsInput, CategoryUncheckedUpdateWithoutFoodsInput>
    create: XOR<CategoryCreateWithoutFoodsInput, CategoryUncheckedCreateWithoutFoodsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutFoodsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutFoodsInput, CategoryUncheckedUpdateWithoutFoodsInput>
  }

  export type CategoryUpdateWithoutFoodsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutFoodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealUpsertWithoutFoodsInput = {
    update: XOR<MealUpdateWithoutFoodsInput, MealUncheckedUpdateWithoutFoodsInput>
    create: XOR<MealCreateWithoutFoodsInput, MealUncheckedCreateWithoutFoodsInput>
    where?: MealWhereInput
  }

  export type MealUpdateToOneWithWhereWithoutFoodsInput = {
    where?: MealWhereInput
    data: XOR<MealUpdateWithoutFoodsInput, MealUncheckedUpdateWithoutFoodsInput>
  }

  export type MealUpdateWithoutFoodsInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutMealsNestedInput
    mealFoods?: MealFoodUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateWithoutFoodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealFoods?: MealFoodUncheckedUpdateManyWithoutMealNestedInput
  }

  export type MealFoodUpsertWithWhereUniqueWithoutFoodInput = {
    where: MealFoodWhereUniqueInput
    update: XOR<MealFoodUpdateWithoutFoodInput, MealFoodUncheckedUpdateWithoutFoodInput>
    create: XOR<MealFoodCreateWithoutFoodInput, MealFoodUncheckedCreateWithoutFoodInput>
  }

  export type MealFoodUpdateWithWhereUniqueWithoutFoodInput = {
    where: MealFoodWhereUniqueInput
    data: XOR<MealFoodUpdateWithoutFoodInput, MealFoodUncheckedUpdateWithoutFoodInput>
  }

  export type MealFoodUpdateManyWithWhereWithoutFoodInput = {
    where: MealFoodScalarWhereInput
    data: XOR<MealFoodUpdateManyMutationInput, MealFoodUncheckedUpdateManyWithoutFoodInput>
  }

  export type MealFoodScalarWhereInput = {
    AND?: MealFoodScalarWhereInput | MealFoodScalarWhereInput[]
    OR?: MealFoodScalarWhereInput[]
    NOT?: MealFoodScalarWhereInput | MealFoodScalarWhereInput[]
    id?: IntFilter<"MealFood"> | number
    foodId?: IntFilter<"MealFood"> | number
    mealId?: IntFilter<"MealFood"> | number
    amount?: FloatFilter<"MealFood"> | number
    createdAt?: DateTimeFilter<"MealFood"> | Date | string
    updatedAt?: DateTimeFilter<"MealFood"> | Date | string
    servingUnitId?: IntFilter<"MealFood"> | number
  }

  export type FoodServingUnitCreateWithoutServingUnitInput = {
    grams?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    food: FoodCreateNestedOneWithoutFoodServingUnitsInput
  }

  export type FoodServingUnitUncheckedCreateWithoutServingUnitInput = {
    id?: number
    grams?: number | null
    foodId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodServingUnitCreateOrConnectWithoutServingUnitInput = {
    where: FoodServingUnitWhereUniqueInput
    create: XOR<FoodServingUnitCreateWithoutServingUnitInput, FoodServingUnitUncheckedCreateWithoutServingUnitInput>
  }

  export type FoodServingUnitCreateManyServingUnitInputEnvelope = {
    data: FoodServingUnitCreateManyServingUnitInput | FoodServingUnitCreateManyServingUnitInput[]
  }

  export type FoodCreateWithoutServingUnitsInput = {
    name: string
    calories?: number | null
    protein?: number | null
    fat?: number | null
    carbohydrates?: number | null
    fiber?: number | null
    sugar?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    foodServingUnits?: FoodServingUnitCreateNestedManyWithoutFoodInput
    category?: CategoryCreateNestedOneWithoutFoodsInput
    meal?: MealCreateNestedOneWithoutFoodsInput
    mealFood?: MealFoodCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateWithoutServingUnitsInput = {
    id?: number
    name: string
    calories?: number | null
    protein?: number | null
    fat?: number | null
    carbohydrates?: number | null
    fiber?: number | null
    sugar?: number | null
    categoryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mealId?: number | null
    foodServingUnits?: FoodServingUnitUncheckedCreateNestedManyWithoutFoodInput
    mealFood?: MealFoodUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutServingUnitsInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutServingUnitsInput, FoodUncheckedCreateWithoutServingUnitsInput>
  }

  export type MealFoodCreateWithoutServingUnitInput = {
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    food: FoodCreateNestedOneWithoutMealFoodInput
    meal: MealCreateNestedOneWithoutMealFoodsInput
  }

  export type MealFoodUncheckedCreateWithoutServingUnitInput = {
    id?: number
    foodId: number
    mealId: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealFoodCreateOrConnectWithoutServingUnitInput = {
    where: MealFoodWhereUniqueInput
    create: XOR<MealFoodCreateWithoutServingUnitInput, MealFoodUncheckedCreateWithoutServingUnitInput>
  }

  export type MealFoodCreateManyServingUnitInputEnvelope = {
    data: MealFoodCreateManyServingUnitInput | MealFoodCreateManyServingUnitInput[]
  }

  export type FoodServingUnitUpsertWithWhereUniqueWithoutServingUnitInput = {
    where: FoodServingUnitWhereUniqueInput
    update: XOR<FoodServingUnitUpdateWithoutServingUnitInput, FoodServingUnitUncheckedUpdateWithoutServingUnitInput>
    create: XOR<FoodServingUnitCreateWithoutServingUnitInput, FoodServingUnitUncheckedCreateWithoutServingUnitInput>
  }

  export type FoodServingUnitUpdateWithWhereUniqueWithoutServingUnitInput = {
    where: FoodServingUnitWhereUniqueInput
    data: XOR<FoodServingUnitUpdateWithoutServingUnitInput, FoodServingUnitUncheckedUpdateWithoutServingUnitInput>
  }

  export type FoodServingUnitUpdateManyWithWhereWithoutServingUnitInput = {
    where: FoodServingUnitScalarWhereInput
    data: XOR<FoodServingUnitUpdateManyMutationInput, FoodServingUnitUncheckedUpdateManyWithoutServingUnitInput>
  }

  export type FoodUpsertWithoutServingUnitsInput = {
    update: XOR<FoodUpdateWithoutServingUnitsInput, FoodUncheckedUpdateWithoutServingUnitsInput>
    create: XOR<FoodCreateWithoutServingUnitsInput, FoodUncheckedCreateWithoutServingUnitsInput>
    where?: FoodWhereInput
  }

  export type FoodUpdateToOneWithWhereWithoutServingUnitsInput = {
    where?: FoodWhereInput
    data: XOR<FoodUpdateWithoutServingUnitsInput, FoodUncheckedUpdateWithoutServingUnitsInput>
  }

  export type FoodUpdateWithoutServingUnitsInput = {
    name?: StringFieldUpdateOperationsInput | string
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    carbohydrates?: NullableFloatFieldUpdateOperationsInput | number | null
    fiber?: NullableFloatFieldUpdateOperationsInput | number | null
    sugar?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodServingUnits?: FoodServingUnitUpdateManyWithoutFoodNestedInput
    category?: CategoryUpdateOneWithoutFoodsNestedInput
    meal?: MealUpdateOneWithoutFoodsNestedInput
    mealFood?: MealFoodUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateWithoutServingUnitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    carbohydrates?: NullableFloatFieldUpdateOperationsInput | number | null
    fiber?: NullableFloatFieldUpdateOperationsInput | number | null
    sugar?: NullableFloatFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealId?: NullableIntFieldUpdateOperationsInput | number | null
    foodServingUnits?: FoodServingUnitUncheckedUpdateManyWithoutFoodNestedInput
    mealFood?: MealFoodUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type MealFoodUpsertWithWhereUniqueWithoutServingUnitInput = {
    where: MealFoodWhereUniqueInput
    update: XOR<MealFoodUpdateWithoutServingUnitInput, MealFoodUncheckedUpdateWithoutServingUnitInput>
    create: XOR<MealFoodCreateWithoutServingUnitInput, MealFoodUncheckedCreateWithoutServingUnitInput>
  }

  export type MealFoodUpdateWithWhereUniqueWithoutServingUnitInput = {
    where: MealFoodWhereUniqueInput
    data: XOR<MealFoodUpdateWithoutServingUnitInput, MealFoodUncheckedUpdateWithoutServingUnitInput>
  }

  export type MealFoodUpdateManyWithWhereWithoutServingUnitInput = {
    where: MealFoodScalarWhereInput
    data: XOR<MealFoodUpdateManyMutationInput, MealFoodUncheckedUpdateManyWithoutServingUnitInput>
  }

  export type FoodCreateWithoutFoodServingUnitsInput = {
    name: string
    calories?: number | null
    protein?: number | null
    fat?: number | null
    carbohydrates?: number | null
    fiber?: number | null
    sugar?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    servingUnits?: ServingUnitCreateNestedManyWithoutFoodInput
    category?: CategoryCreateNestedOneWithoutFoodsInput
    meal?: MealCreateNestedOneWithoutFoodsInput
    mealFood?: MealFoodCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateWithoutFoodServingUnitsInput = {
    id?: number
    name: string
    calories?: number | null
    protein?: number | null
    fat?: number | null
    carbohydrates?: number | null
    fiber?: number | null
    sugar?: number | null
    categoryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mealId?: number | null
    servingUnits?: ServingUnitUncheckedCreateNestedManyWithoutFoodInput
    mealFood?: MealFoodUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutFoodServingUnitsInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutFoodServingUnitsInput, FoodUncheckedCreateWithoutFoodServingUnitsInput>
  }

  export type ServingUnitCreateWithoutFoodServingUnitInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    food?: FoodCreateNestedOneWithoutServingUnitsInput
    mealFood?: MealFoodCreateNestedManyWithoutServingUnitInput
  }

  export type ServingUnitUncheckedCreateWithoutFoodServingUnitInput = {
    id?: number
    name: string
    foodId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mealFood?: MealFoodUncheckedCreateNestedManyWithoutServingUnitInput
  }

  export type ServingUnitCreateOrConnectWithoutFoodServingUnitInput = {
    where: ServingUnitWhereUniqueInput
    create: XOR<ServingUnitCreateWithoutFoodServingUnitInput, ServingUnitUncheckedCreateWithoutFoodServingUnitInput>
  }

  export type FoodUpsertWithoutFoodServingUnitsInput = {
    update: XOR<FoodUpdateWithoutFoodServingUnitsInput, FoodUncheckedUpdateWithoutFoodServingUnitsInput>
    create: XOR<FoodCreateWithoutFoodServingUnitsInput, FoodUncheckedCreateWithoutFoodServingUnitsInput>
    where?: FoodWhereInput
  }

  export type FoodUpdateToOneWithWhereWithoutFoodServingUnitsInput = {
    where?: FoodWhereInput
    data: XOR<FoodUpdateWithoutFoodServingUnitsInput, FoodUncheckedUpdateWithoutFoodServingUnitsInput>
  }

  export type FoodUpdateWithoutFoodServingUnitsInput = {
    name?: StringFieldUpdateOperationsInput | string
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    carbohydrates?: NullableFloatFieldUpdateOperationsInput | number | null
    fiber?: NullableFloatFieldUpdateOperationsInput | number | null
    sugar?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servingUnits?: ServingUnitUpdateManyWithoutFoodNestedInput
    category?: CategoryUpdateOneWithoutFoodsNestedInput
    meal?: MealUpdateOneWithoutFoodsNestedInput
    mealFood?: MealFoodUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateWithoutFoodServingUnitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    carbohydrates?: NullableFloatFieldUpdateOperationsInput | number | null
    fiber?: NullableFloatFieldUpdateOperationsInput | number | null
    sugar?: NullableFloatFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealId?: NullableIntFieldUpdateOperationsInput | number | null
    servingUnits?: ServingUnitUncheckedUpdateManyWithoutFoodNestedInput
    mealFood?: MealFoodUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type ServingUnitUpsertWithoutFoodServingUnitInput = {
    update: XOR<ServingUnitUpdateWithoutFoodServingUnitInput, ServingUnitUncheckedUpdateWithoutFoodServingUnitInput>
    create: XOR<ServingUnitCreateWithoutFoodServingUnitInput, ServingUnitUncheckedCreateWithoutFoodServingUnitInput>
    where?: ServingUnitWhereInput
  }

  export type ServingUnitUpdateToOneWithWhereWithoutFoodServingUnitInput = {
    where?: ServingUnitWhereInput
    data: XOR<ServingUnitUpdateWithoutFoodServingUnitInput, ServingUnitUncheckedUpdateWithoutFoodServingUnitInput>
  }

  export type ServingUnitUpdateWithoutFoodServingUnitInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUpdateOneWithoutServingUnitsNestedInput
    mealFood?: MealFoodUpdateManyWithoutServingUnitNestedInput
  }

  export type ServingUnitUncheckedUpdateWithoutFoodServingUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    foodId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealFood?: MealFoodUncheckedUpdateManyWithoutServingUnitNestedInput
  }

  export type MealCreateWithoutUserInput = {
    dateTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: FoodCreateNestedManyWithoutMealInput
    mealFoods?: MealFoodCreateNestedManyWithoutMealInput
  }

  export type MealUncheckedCreateWithoutUserInput = {
    id?: number
    dateTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: FoodUncheckedCreateNestedManyWithoutMealInput
    mealFoods?: MealFoodUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealCreateOrConnectWithoutUserInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput>
  }

  export type MealCreateManyUserInputEnvelope = {
    data: MealCreateManyUserInput | MealCreateManyUserInput[]
  }

  export type MealUpsertWithWhereUniqueWithoutUserInput = {
    where: MealWhereUniqueInput
    update: XOR<MealUpdateWithoutUserInput, MealUncheckedUpdateWithoutUserInput>
    create: XOR<MealCreateWithoutUserInput, MealUncheckedCreateWithoutUserInput>
  }

  export type MealUpdateWithWhereUniqueWithoutUserInput = {
    where: MealWhereUniqueInput
    data: XOR<MealUpdateWithoutUserInput, MealUncheckedUpdateWithoutUserInput>
  }

  export type MealUpdateManyWithWhereWithoutUserInput = {
    where: MealScalarWhereInput
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyWithoutUserInput>
  }

  export type MealScalarWhereInput = {
    AND?: MealScalarWhereInput | MealScalarWhereInput[]
    OR?: MealScalarWhereInput[]
    NOT?: MealScalarWhereInput | MealScalarWhereInput[]
    id?: IntFilter<"Meal"> | number
    dateTime?: DateTimeFilter<"Meal"> | Date | string
    userId?: IntNullableFilter<"Meal"> | number | null
    createdAt?: DateTimeFilter<"Meal"> | Date | string
    updatedAt?: DateTimeFilter<"Meal"> | Date | string
  }

  export type FoodCreateWithoutMealInput = {
    name: string
    calories?: number | null
    protein?: number | null
    fat?: number | null
    carbohydrates?: number | null
    fiber?: number | null
    sugar?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    foodServingUnits?: FoodServingUnitCreateNestedManyWithoutFoodInput
    servingUnits?: ServingUnitCreateNestedManyWithoutFoodInput
    category?: CategoryCreateNestedOneWithoutFoodsInput
    mealFood?: MealFoodCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateWithoutMealInput = {
    id?: number
    name: string
    calories?: number | null
    protein?: number | null
    fat?: number | null
    carbohydrates?: number | null
    fiber?: number | null
    sugar?: number | null
    categoryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    foodServingUnits?: FoodServingUnitUncheckedCreateNestedManyWithoutFoodInput
    servingUnits?: ServingUnitUncheckedCreateNestedManyWithoutFoodInput
    mealFood?: MealFoodUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutMealInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutMealInput, FoodUncheckedCreateWithoutMealInput>
  }

  export type FoodCreateManyMealInputEnvelope = {
    data: FoodCreateManyMealInput | FoodCreateManyMealInput[]
  }

  export type UserCreateWithoutMealsInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutMealsInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutMealsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMealsInput, UserUncheckedCreateWithoutMealsInput>
  }

  export type MealFoodCreateWithoutMealInput = {
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    food: FoodCreateNestedOneWithoutMealFoodInput
    servingUnit: ServingUnitCreateNestedOneWithoutMealFoodInput
  }

  export type MealFoodUncheckedCreateWithoutMealInput = {
    id?: number
    foodId: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    servingUnitId: number
  }

  export type MealFoodCreateOrConnectWithoutMealInput = {
    where: MealFoodWhereUniqueInput
    create: XOR<MealFoodCreateWithoutMealInput, MealFoodUncheckedCreateWithoutMealInput>
  }

  export type MealFoodCreateManyMealInputEnvelope = {
    data: MealFoodCreateManyMealInput | MealFoodCreateManyMealInput[]
  }

  export type FoodUpsertWithWhereUniqueWithoutMealInput = {
    where: FoodWhereUniqueInput
    update: XOR<FoodUpdateWithoutMealInput, FoodUncheckedUpdateWithoutMealInput>
    create: XOR<FoodCreateWithoutMealInput, FoodUncheckedCreateWithoutMealInput>
  }

  export type FoodUpdateWithWhereUniqueWithoutMealInput = {
    where: FoodWhereUniqueInput
    data: XOR<FoodUpdateWithoutMealInput, FoodUncheckedUpdateWithoutMealInput>
  }

  export type FoodUpdateManyWithWhereWithoutMealInput = {
    where: FoodScalarWhereInput
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyWithoutMealInput>
  }

  export type UserUpsertWithoutMealsInput = {
    update: XOR<UserUpdateWithoutMealsInput, UserUncheckedUpdateWithoutMealsInput>
    create: XOR<UserCreateWithoutMealsInput, UserUncheckedCreateWithoutMealsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMealsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMealsInput, UserUncheckedUpdateWithoutMealsInput>
  }

  export type UserUpdateWithoutMealsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutMealsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealFoodUpsertWithWhereUniqueWithoutMealInput = {
    where: MealFoodWhereUniqueInput
    update: XOR<MealFoodUpdateWithoutMealInput, MealFoodUncheckedUpdateWithoutMealInput>
    create: XOR<MealFoodCreateWithoutMealInput, MealFoodUncheckedCreateWithoutMealInput>
  }

  export type MealFoodUpdateWithWhereUniqueWithoutMealInput = {
    where: MealFoodWhereUniqueInput
    data: XOR<MealFoodUpdateWithoutMealInput, MealFoodUncheckedUpdateWithoutMealInput>
  }

  export type MealFoodUpdateManyWithWhereWithoutMealInput = {
    where: MealFoodScalarWhereInput
    data: XOR<MealFoodUpdateManyMutationInput, MealFoodUncheckedUpdateManyWithoutMealInput>
  }

  export type FoodCreateWithoutMealFoodInput = {
    name: string
    calories?: number | null
    protein?: number | null
    fat?: number | null
    carbohydrates?: number | null
    fiber?: number | null
    sugar?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    foodServingUnits?: FoodServingUnitCreateNestedManyWithoutFoodInput
    servingUnits?: ServingUnitCreateNestedManyWithoutFoodInput
    category?: CategoryCreateNestedOneWithoutFoodsInput
    meal?: MealCreateNestedOneWithoutFoodsInput
  }

  export type FoodUncheckedCreateWithoutMealFoodInput = {
    id?: number
    name: string
    calories?: number | null
    protein?: number | null
    fat?: number | null
    carbohydrates?: number | null
    fiber?: number | null
    sugar?: number | null
    categoryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mealId?: number | null
    foodServingUnits?: FoodServingUnitUncheckedCreateNestedManyWithoutFoodInput
    servingUnits?: ServingUnitUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutMealFoodInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutMealFoodInput, FoodUncheckedCreateWithoutMealFoodInput>
  }

  export type MealCreateWithoutMealFoodsInput = {
    dateTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: FoodCreateNestedManyWithoutMealInput
    user?: UserCreateNestedOneWithoutMealsInput
  }

  export type MealUncheckedCreateWithoutMealFoodsInput = {
    id?: number
    dateTime: Date | string
    userId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    foods?: FoodUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealCreateOrConnectWithoutMealFoodsInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutMealFoodsInput, MealUncheckedCreateWithoutMealFoodsInput>
  }

  export type ServingUnitCreateWithoutMealFoodInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    foodServingUnit?: FoodServingUnitCreateNestedManyWithoutServingUnitInput
    food?: FoodCreateNestedOneWithoutServingUnitsInput
  }

  export type ServingUnitUncheckedCreateWithoutMealFoodInput = {
    id?: number
    name: string
    foodId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    foodServingUnit?: FoodServingUnitUncheckedCreateNestedManyWithoutServingUnitInput
  }

  export type ServingUnitCreateOrConnectWithoutMealFoodInput = {
    where: ServingUnitWhereUniqueInput
    create: XOR<ServingUnitCreateWithoutMealFoodInput, ServingUnitUncheckedCreateWithoutMealFoodInput>
  }

  export type FoodUpsertWithoutMealFoodInput = {
    update: XOR<FoodUpdateWithoutMealFoodInput, FoodUncheckedUpdateWithoutMealFoodInput>
    create: XOR<FoodCreateWithoutMealFoodInput, FoodUncheckedCreateWithoutMealFoodInput>
    where?: FoodWhereInput
  }

  export type FoodUpdateToOneWithWhereWithoutMealFoodInput = {
    where?: FoodWhereInput
    data: XOR<FoodUpdateWithoutMealFoodInput, FoodUncheckedUpdateWithoutMealFoodInput>
  }

  export type FoodUpdateWithoutMealFoodInput = {
    name?: StringFieldUpdateOperationsInput | string
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    carbohydrates?: NullableFloatFieldUpdateOperationsInput | number | null
    fiber?: NullableFloatFieldUpdateOperationsInput | number | null
    sugar?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodServingUnits?: FoodServingUnitUpdateManyWithoutFoodNestedInput
    servingUnits?: ServingUnitUpdateManyWithoutFoodNestedInput
    category?: CategoryUpdateOneWithoutFoodsNestedInput
    meal?: MealUpdateOneWithoutFoodsNestedInput
  }

  export type FoodUncheckedUpdateWithoutMealFoodInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    carbohydrates?: NullableFloatFieldUpdateOperationsInput | number | null
    fiber?: NullableFloatFieldUpdateOperationsInput | number | null
    sugar?: NullableFloatFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealId?: NullableIntFieldUpdateOperationsInput | number | null
    foodServingUnits?: FoodServingUnitUncheckedUpdateManyWithoutFoodNestedInput
    servingUnits?: ServingUnitUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type MealUpsertWithoutMealFoodsInput = {
    update: XOR<MealUpdateWithoutMealFoodsInput, MealUncheckedUpdateWithoutMealFoodsInput>
    create: XOR<MealCreateWithoutMealFoodsInput, MealUncheckedCreateWithoutMealFoodsInput>
    where?: MealWhereInput
  }

  export type MealUpdateToOneWithWhereWithoutMealFoodsInput = {
    where?: MealWhereInput
    data: XOR<MealUpdateWithoutMealFoodsInput, MealUncheckedUpdateWithoutMealFoodsInput>
  }

  export type MealUpdateWithoutMealFoodsInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUpdateManyWithoutMealNestedInput
    user?: UserUpdateOneWithoutMealsNestedInput
  }

  export type MealUncheckedUpdateWithoutMealFoodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUncheckedUpdateManyWithoutMealNestedInput
  }

  export type ServingUnitUpsertWithoutMealFoodInput = {
    update: XOR<ServingUnitUpdateWithoutMealFoodInput, ServingUnitUncheckedUpdateWithoutMealFoodInput>
    create: XOR<ServingUnitCreateWithoutMealFoodInput, ServingUnitUncheckedCreateWithoutMealFoodInput>
    where?: ServingUnitWhereInput
  }

  export type ServingUnitUpdateToOneWithWhereWithoutMealFoodInput = {
    where?: ServingUnitWhereInput
    data: XOR<ServingUnitUpdateWithoutMealFoodInput, ServingUnitUncheckedUpdateWithoutMealFoodInput>
  }

  export type ServingUnitUpdateWithoutMealFoodInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodServingUnit?: FoodServingUnitUpdateManyWithoutServingUnitNestedInput
    food?: FoodUpdateOneWithoutServingUnitsNestedInput
  }

  export type ServingUnitUncheckedUpdateWithoutMealFoodInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    foodId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodServingUnit?: FoodServingUnitUncheckedUpdateManyWithoutServingUnitNestedInput
  }

  export type FoodCreateManyCategoryInput = {
    id?: number
    name: string
    calories?: number | null
    protein?: number | null
    fat?: number | null
    carbohydrates?: number | null
    fiber?: number | null
    sugar?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mealId?: number | null
  }

  export type FoodUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    carbohydrates?: NullableFloatFieldUpdateOperationsInput | number | null
    fiber?: NullableFloatFieldUpdateOperationsInput | number | null
    sugar?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodServingUnits?: FoodServingUnitUpdateManyWithoutFoodNestedInput
    servingUnits?: ServingUnitUpdateManyWithoutFoodNestedInput
    meal?: MealUpdateOneWithoutFoodsNestedInput
    mealFood?: MealFoodUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    carbohydrates?: NullableFloatFieldUpdateOperationsInput | number | null
    fiber?: NullableFloatFieldUpdateOperationsInput | number | null
    sugar?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealId?: NullableIntFieldUpdateOperationsInput | number | null
    foodServingUnits?: FoodServingUnitUncheckedUpdateManyWithoutFoodNestedInput
    servingUnits?: ServingUnitUncheckedUpdateManyWithoutFoodNestedInput
    mealFood?: MealFoodUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    carbohydrates?: NullableFloatFieldUpdateOperationsInput | number | null
    fiber?: NullableFloatFieldUpdateOperationsInput | number | null
    sugar?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mealId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FoodServingUnitCreateManyFoodInput = {
    id?: number
    grams?: number | null
    servingUnitId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServingUnitCreateManyFoodInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealFoodCreateManyFoodInput = {
    id?: number
    mealId: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    servingUnitId: number
  }

  export type FoodServingUnitUpdateWithoutFoodInput = {
    grams?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servingUnit?: ServingUnitUpdateOneRequiredWithoutFoodServingUnitNestedInput
  }

  export type FoodServingUnitUncheckedUpdateWithoutFoodInput = {
    id?: IntFieldUpdateOperationsInput | number
    grams?: NullableFloatFieldUpdateOperationsInput | number | null
    servingUnitId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodServingUnitUncheckedUpdateManyWithoutFoodInput = {
    id?: IntFieldUpdateOperationsInput | number
    grams?: NullableFloatFieldUpdateOperationsInput | number | null
    servingUnitId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServingUnitUpdateWithoutFoodInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodServingUnit?: FoodServingUnitUpdateManyWithoutServingUnitNestedInput
    mealFood?: MealFoodUpdateManyWithoutServingUnitNestedInput
  }

  export type ServingUnitUncheckedUpdateWithoutFoodInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodServingUnit?: FoodServingUnitUncheckedUpdateManyWithoutServingUnitNestedInput
    mealFood?: MealFoodUncheckedUpdateManyWithoutServingUnitNestedInput
  }

  export type ServingUnitUncheckedUpdateManyWithoutFoodInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealFoodUpdateWithoutFoodInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meal?: MealUpdateOneRequiredWithoutMealFoodsNestedInput
    servingUnit?: ServingUnitUpdateOneRequiredWithoutMealFoodNestedInput
  }

  export type MealFoodUncheckedUpdateWithoutFoodInput = {
    id?: IntFieldUpdateOperationsInput | number
    mealId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servingUnitId?: IntFieldUpdateOperationsInput | number
  }

  export type MealFoodUncheckedUpdateManyWithoutFoodInput = {
    id?: IntFieldUpdateOperationsInput | number
    mealId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servingUnitId?: IntFieldUpdateOperationsInput | number
  }

  export type FoodServingUnitCreateManyServingUnitInput = {
    id?: number
    grams?: number | null
    foodId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealFoodCreateManyServingUnitInput = {
    id?: number
    foodId: number
    mealId: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FoodServingUnitUpdateWithoutServingUnitInput = {
    grams?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUpdateOneRequiredWithoutFoodServingUnitsNestedInput
  }

  export type FoodServingUnitUncheckedUpdateWithoutServingUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    grams?: NullableFloatFieldUpdateOperationsInput | number | null
    foodId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodServingUnitUncheckedUpdateManyWithoutServingUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    grams?: NullableFloatFieldUpdateOperationsInput | number | null
    foodId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealFoodUpdateWithoutServingUnitInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUpdateOneRequiredWithoutMealFoodNestedInput
    meal?: MealUpdateOneRequiredWithoutMealFoodsNestedInput
  }

  export type MealFoodUncheckedUpdateWithoutServingUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
    mealId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealFoodUncheckedUpdateManyWithoutServingUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
    mealId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealCreateManyUserInput = {
    id?: number
    dateTime: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealUpdateWithoutUserInput = {
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUpdateManyWithoutMealNestedInput
    mealFoods?: MealFoodUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foods?: FoodUncheckedUpdateManyWithoutMealNestedInput
    mealFoods?: MealFoodUncheckedUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    dateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FoodCreateManyMealInput = {
    id?: number
    name: string
    calories?: number | null
    protein?: number | null
    fat?: number | null
    carbohydrates?: number | null
    fiber?: number | null
    sugar?: number | null
    categoryId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealFoodCreateManyMealInput = {
    id?: number
    foodId: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    servingUnitId: number
  }

  export type FoodUpdateWithoutMealInput = {
    name?: StringFieldUpdateOperationsInput | string
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    carbohydrates?: NullableFloatFieldUpdateOperationsInput | number | null
    fiber?: NullableFloatFieldUpdateOperationsInput | number | null
    sugar?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodServingUnits?: FoodServingUnitUpdateManyWithoutFoodNestedInput
    servingUnits?: ServingUnitUpdateManyWithoutFoodNestedInput
    category?: CategoryUpdateOneWithoutFoodsNestedInput
    mealFood?: MealFoodUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    carbohydrates?: NullableFloatFieldUpdateOperationsInput | number | null
    fiber?: NullableFloatFieldUpdateOperationsInput | number | null
    sugar?: NullableFloatFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    foodServingUnits?: FoodServingUnitUncheckedUpdateManyWithoutFoodNestedInput
    servingUnits?: ServingUnitUncheckedUpdateManyWithoutFoodNestedInput
    mealFood?: MealFoodUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateManyWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    calories?: NullableFloatFieldUpdateOperationsInput | number | null
    protein?: NullableFloatFieldUpdateOperationsInput | number | null
    fat?: NullableFloatFieldUpdateOperationsInput | number | null
    carbohydrates?: NullableFloatFieldUpdateOperationsInput | number | null
    fiber?: NullableFloatFieldUpdateOperationsInput | number | null
    sugar?: NullableFloatFieldUpdateOperationsInput | number | null
    categoryId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealFoodUpdateWithoutMealInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    food?: FoodUpdateOneRequiredWithoutMealFoodNestedInput
    servingUnit?: ServingUnitUpdateOneRequiredWithoutMealFoodNestedInput
  }

  export type MealFoodUncheckedUpdateWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servingUnitId?: IntFieldUpdateOperationsInput | number
  }

  export type MealFoodUncheckedUpdateManyWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    servingUnitId?: IntFieldUpdateOperationsInput | number
  }



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