import { parse } from '@fortawesome/fontawesome-svg-core'

export const REFERENCE_ICON_BY_STYLE = 0x00

export function coreHasFeature (feature) {
  if (feature === REFERENCE_ICON_BY_STYLE) {
    return parse.icon
  }
}
