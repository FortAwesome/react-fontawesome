import { version as SVGCorePackageVersion } from '@fortawesome/fontawesome-svg-core/package.json'
import semver from 'semver'

import {
  ANIMATION_CLASSES,
  PULL_CLASSES,
  ROTATE_CLASSES,
  SIZE_CLASSES,
  STYLE_CLASSES,
} from './constants'
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
  if (beat) result.push(ANIMATION_CLASSES.beat)
  if (fade) result.push(ANIMATION_CLASSES.fade)
  if (beatFade) result.push(ANIMATION_CLASSES.beatFade)
  if (bounce) result.push(ANIMATION_CLASSES.bounce)
  if (shake) result.push(ANIMATION_CLASSES.shake)
  if (spin) result.push(ANIMATION_CLASSES.spin)
  if (spinReverse) result.push(ANIMATION_CLASSES.spinReverse)
  if (spinPulse) result.push(ANIMATION_CLASSES.spinPulse)
  if (pulse) result.push(ANIMATION_CLASSES.pulse)
  if (fixedWidth) result.push(STYLE_CLASSES.fixedWidth)
  if (inverse) result.push(STYLE_CLASSES.inverse)
  if (border) result.push(STYLE_CLASSES.border)
  if (listItem) result.push(STYLE_CLASSES.listItem)
  if (flip === true) result.push(STYLE_CLASSES.flip)
  if (flip === 'horizontal' || flip === 'both') {
    result.push(STYLE_CLASSES.flipHorizontal)
  }
  if (flip === 'vertical' || flip === 'both') {
    result.push(STYLE_CLASSES.flipVertical)
  }
  if (size !== undefined && size !== null) result.push(SIZE_CLASSES[size])
  if (
    rotation !== undefined &&
    rotation !== null &&
    (rotation as number) !== 0
  ) {
    result.push(ROTATE_CLASSES[rotation])
  }
  if (pull !== undefined && pull !== null) result.push(PULL_CLASSES[pull])
  if (swapOpacity) result.push(STYLE_CLASSES.swapOpacity)

  // Bail early if not version 7 or later
  if (!IS_VERSION_7_OR_LATER) return result

  // Add classes specific to version 7+
  if (rotateBy) result.push(STYLE_CLASSES.rotateBy)
  if (widthAuto) result.push(STYLE_CLASSES.widthAuto)

  return result
}
