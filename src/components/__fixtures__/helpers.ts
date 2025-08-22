import { parse } from '@fortawesome/fontawesome-svg-core'
import SolidSVGIconsPackageJson from '@fortawesome/free-solid-svg-icons/package.json'
import semver from 'semver'

const SVG_ICONS_VERSION = semver.parse(SolidSVGIconsPackageJson.version)

export const REFERENCE_ICON_BY_STYLE = 0x00
export const ICON_ALIASES = 0x01
export const REFERENCE_ICON_USING_STRING = 0x02

export function coreHasFeature(feature: number): boolean {
  if (feature === ICON_ALIASES) {
    // Aliases were not introduced until version 6 so we need to check the
    // installed free-solid-svg-icons package as well.
    return !!parse.icon && !!SVG_ICONS_VERSION && SVG_ICONS_VERSION.major >= 6
  }

  if (
    feature === REFERENCE_ICON_BY_STYLE ||
    feature === REFERENCE_ICON_USING_STRING
  ) {
    return !!parse.icon
  }

  return false
}
