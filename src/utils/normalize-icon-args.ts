import {
  parse as faParse,
  IconDefinition,
  IconLookup,
  IconProp,
} from '@fortawesome/fontawesome-svg-core'

/**
 * Normalize icon arguments
 * @param icon The icon to normalize
 * @returns The normalized icon definition or lookup
 */
export function normalizeIconArgs(
  icon?: IconProp | null,
): IconDefinition | IconLookup | undefined {
  // if the icon is undefined or null, there's nothing to do
  if (!icon) {
    return undefined
  }

  // this has everything that it needs to be rendered which means it was probably imported
  // directly from an icon svg package
  if (
    typeof icon === 'object' &&
    'prefix' in icon &&
    'iconName' in icon &&
    'icon' in icon &&
    icon.prefix &&
    icon.iconName &&
    icon.icon
  ) {
    return icon
  }

  if (faParse.icon) {
    return faParse.icon(icon)
  }

  // if the icon is an object and has a prefix and an icon name, return it
  if (
    typeof icon === 'object' &&
    'prefix' in icon &&
    'iconName' in icon &&
    icon.prefix &&
    icon.iconName
  ) {
    return icon
  }

  // if it's an array with length of two
  if (Array.isArray(icon) && icon.length === 2) {
    // use the first item as prefix, second as icon name
    return { prefix: icon[0], iconName: icon[1] }
  }

  // if it's a string, use it as the icon name
  if (typeof icon === 'string') {
    return { prefix: 'fas', iconName: icon }
  }

  return undefined
}
