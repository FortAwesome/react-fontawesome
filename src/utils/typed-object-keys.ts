/**
 * Literally just `Object.keys` but with typings.
 *
 * Allows you to get the keys of an object as a union of string literal types,
 * rather than the standard `string[]` returned by `Object.keys`.
 *
 * @example
 * ```ts
 * const obj = { a: 1, b: 2, c: 3 }
 * const keys = typedObjectKeys(obj) // `keys` is now inferred as ('a' | 'b' | 'c')[] instead of string[]
 * ```
 */
export function typedObjectKeys<T extends object>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[]
}
