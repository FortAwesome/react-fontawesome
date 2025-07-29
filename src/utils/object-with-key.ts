/**
 * Creates an object with a specified key and value.
 * If the value is a non-empty array or a truthy non-array value,
 * it returns an object with the key and value.
 * Otherwise, it returns an empty object.
 */
export function objectWithKey<K extends string, V = unknown>(
  key: K,
  value?: V,
): Record<K, V> | typeof EMPTY_OBJECT {
  // if the value is a non-empty array
  // or it's not an array but it is truthy
  // then create the object with the key and the value
  // if not, return an empty object
  return (Array.isArray(value) && value.length > 0) ||
    (!Array.isArray(value) && value)
    ? { [key]: value }
    : EMPTY_OBJECT
}

const EMPTY_OBJECT = {}
