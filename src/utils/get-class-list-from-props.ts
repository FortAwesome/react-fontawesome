import { version as SVGCorePackageVersion } from '@fortawesome/fontawesome-svg-core/package.json'
import semver from 'semver'

import { FontAwesomeIconProps } from '../components/FontAwesomeIcon'

export const ICON_PACKS_STARTING_VERSION = '7.0.0-alpha1'

// Try to get version from installed package first, fallback to env var, then default
export const SVG_CORE_VERSION =
  SVGCorePackageVersion || process.env.FA_VERSION || '7.0.0-alpha8'

// Cache the version check result since it never changes during runtime
const IS_VERSION_7_OR_LATER = semver.gte(
  SVG_CORE_VERSION,
  ICON_PACKS_STARTING_VERSION,
)

/**
 * Get CSS class list from a props object.
 * This function maps our React props to the corresponding CSS class names from Font Awesome.
 *
 * @param props Partial props object from which to extract CSS classes.
 * @returns An array of CSS class names derived from the props.
 */
export function getClassListFromProps(
  props: Partial<FontAwesomeIconProps>,
): string[] {
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

  const result: string[] = []

  // Add classes only if the condition is truthy
  if (beat) result.push('fa-beat')
  if (fade) result.push('fa-fade')
  if (beatFade) result.push('fa-beat-fade')
  if (bounce) result.push('fa-bounce')
  if (shake) result.push('fa-shake')
  if (spin) result.push('fa-spin')
  if (spinReverse) result.push('fa-spin-reverse')
  if (spinPulse) result.push('fa-spin-pulse')
  if (pulse) result.push('fa-pulse')
  if (fixedWidth) result.push('fa-fw')
  if (inverse) result.push('fa-inverse')
  if (border) result.push('fa-border')
  if (listItem) result.push('fa-li')
  if (flip === true) result.push('fa-flip')
  if (flip === 'horizontal' || flip === 'both') {
    result.push('fa-flip-horizontal')
  }
  if (flip === 'vertical' || flip === 'both') result.push('fa-flip-vertical')
  if (size !== undefined && size !== null) result.push(`fa-${size}`)
  if (
    rotation !== undefined &&
    rotation !== null &&
    (rotation as number) !== 0
  ) {
    result.push(`fa-rotate-${rotation}`)
  }
  if (pull !== undefined && pull !== null) result.push(`fa-pull-${pull}`)
  if (swapOpacity) result.push('fa-swap-opacity')

  // Bail early if not version 7 or later
  if (!IS_VERSION_7_OR_LATER) return result

  // Add classes specific to version 7+
  if (rotateBy) result.push('fa-rotate-by')
  if (widthAuto) result.push('fa-width-auto')

  return result
}
