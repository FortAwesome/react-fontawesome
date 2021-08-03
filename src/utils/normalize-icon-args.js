import { parse as faParse } from '@fortawesome/fontawesome-svg-core'

// Normalize icon arguments
export default function normalizeIconArgs(icon) {
  // this has everything that it needs to be rendered which means it was probably imported
  // directly from an icon svg package
  if (icon && typeof icon === 'object' && icon.prefix && icon.iconName && icon.icon) {
    return icon
  }

  if (faParse.icon) {
    return faParse.icon(icon)
  }

  // if the icon is null, there's nothing to do
  if (icon === null) {
    return null
  }

  // if the icon is an object and has a prefix and an icon name, return it
  if (icon && typeof icon === 'object' && icon.prefix && icon.iconName) {
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
}
