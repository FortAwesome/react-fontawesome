import { version as SVGCorePackageVersion } from '@fortawesome/fontawesome-svg-core/package.json'
import semver from 'semver'

import { FontAwesomeIconProps } from '../components/FontAwesomeIcon'

export const ICON_PACKS_STARTING_VERSION = '7.0.0-alpha1'

// Try to get version from installed package first, fallback to env var, then default
export const SVG_CORE_VERSION =
  SVGCorePackageVersion || process.env.FA_VERSION || '7.0.0-alpha8'

// Get CSS class list from a props object
export function classList(props: Partial<FontAwesomeIconProps>): string[] {
  const {
    beat,
    fade,
    beatFade,
    bounce,
    shake,
    spin,
    spinPulse,
    spinReverse,
    pulse,
    fixedWidth,
    inverse,
    border,
    listItem,
    flip,
    size,
    rotation,
    pull,
    swapOpacity,
    rotateBy,
    widthAuto,
  } = props

  // Check if we're using version 7 or later
  const isVersion7OrLater = semver.gte(
    SVG_CORE_VERSION,
    ICON_PACKS_STARTING_VERSION,
  )

  // map of CSS class names to properties
  const classes = {
    'fa-beat': beat,
    'fa-fade': fade,
    'fa-beat-fade': beatFade,
    'fa-bounce': bounce,
    'fa-shake': shake,
    'fa-spin': spin,
    'fa-spin-reverse': spinReverse,
    'fa-spin-pulse': spinPulse,
    'fa-pulse': pulse,
    'fa-fw': fixedWidth,
    'fa-inverse': inverse,
    'fa-border': border,
    'fa-li': listItem,
    'fa-flip': flip === true,
    'fa-flip-horizontal': flip === 'horizontal' || flip === 'both',
    'fa-flip-vertical': flip === 'vertical' || flip === 'both',
    [`fa-${size}`]: size !== undefined && size !== null,
    [`fa-rotate-${rotation}`]:
      rotation !== undefined && rotation !== null && (rotation as number) !== 0,
    [`fa-pull-${pull}`]: pull !== undefined && pull !== null,
    'fa-swap-opacity': swapOpacity,
    'fa-rotate-by': isVersion7OrLater && rotateBy,
    'fa-width-auto': isVersion7OrLater && widthAuto,
  }

  // map over all the keys in the classes object
  // return an array of the keys where the value for the key is not null
  return Object.keys(classes)
    .map((key) => (classes[key] ? key : null))
    .filter(Boolean) as string[]
}
