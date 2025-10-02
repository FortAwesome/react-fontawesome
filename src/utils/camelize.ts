/**
 * Performant way to determine if object coerces to a number
 */
function _isNumerical(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  object: any,
): boolean {
  object = object - 0

  return object === object
}

/**
 * Converts a string to camelCase.
 * @param string The string to convert.
 * @returns The camelCased string.
 */
export function camelize(string: string): string {
  if (_isNumerical(string)) {
    return string
  }

  string = string.replace(/[_-]+(.)?/g, (_: string, chr: string): string => {
    return chr ? chr.toUpperCase() : ''
  })

  // Ensure 1st char is always lowercase
  return string.charAt(0).toLowerCase() + string.slice(1)
}
