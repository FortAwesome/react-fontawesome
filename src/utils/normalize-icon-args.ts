import {
  parse as faParse,
  IconDefinition,
  IconLookup,
  IconProp,
} from '@fortawesome/fontawesome-svg-core'

const isIconDefinition = (
  icon: IconDefinition | IconProp,
): icon is IconDefinition =>
  typeof icon === 'object' && 'icon' in icon && !!icon.icon

/**
 * Normalize icon arguments
 * @param icon The icon to normalize
 * @returns The normalized icon definition or lookup
 */
export function normalizeIconArgs(
  icon?: IconDefinition | IconProp | null,
): IconDefinition | IconLookup | undefined {
  // if the icon is undefined or null, there's nothing to do
  if (!icon) {
    return undefined
  }

  switch (true) {
    // If we already have an `IconDefinition` object, which means it was probably
    // imported directly from an icon svg package, return it immediately since
    // it already has everything that it needs to be rendered
    case isIconDefinition(icon): {
      return icon
    }
    // If the `parse.icon` function is available from svg-core, use it to parse the icon.
    // This should be the final case since the function is available since around 2020.
    // Any cases after this are fallbacks for people using old versions of svg-core.
    case !!faParse.icon: {
      return faParse.icon(icon)
    }
    // If we have an icon name and a prefix, return it as an `IconLookup` object
    case typeof icon === 'object' &&
      'prefix' in icon &&
      'iconName' in icon &&
      !!icon.prefix &&
      !!icon.iconName: {
      return icon
    }
    // If it's an array with length of two, use the first item as prefix, second as icon name
    case Array.isArray(icon) && icon.length === 2: {
      return { prefix: icon[0], iconName: icon[1] }
    }
    // If the icon is a string, we assume it's an icon name and return it as an `IconLookup`
    case typeof icon === 'string': {
      return { prefix: 'fas', iconName: icon }
    }
    // If none of the above cases match, we return undefined
    default: {
      return undefined
    }
  }
}
