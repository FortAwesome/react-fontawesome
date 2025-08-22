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

  if (isIconDefinition(icon)) {
    return icon
  }

  return faParse.icon(icon)
}
