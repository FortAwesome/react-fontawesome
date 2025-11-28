import { config } from '@fortawesome/fontawesome-svg-core'

import {
  ANIMATION_CLASSES,
  PULL_CLASSES,
  ROTATE_CLASSES,
  SIZE_CLASSES,
  STYLE_CLASSES,
  IS_VERSION_7_OR_LATER,
  DEFAULT_CLASSNAME_PREFIX,
} from './constants'
import { FontAwesomeIconProps } from '../types/icon-props'

export function withPrefix(cls: string): string {
  const prefix =
    config.cssPrefix || config.familyPrefix || DEFAULT_CLASSNAME_PREFIX
  return prefix === DEFAULT_CLASSNAME_PREFIX
    ? cls
    : cls.replace(
        new RegExp(String.raw`(?<=^|\s)${DEFAULT_CLASSNAME_PREFIX}-`, 'g'),
        `${prefix}-`,
      )
}

/**
 * Get CSS class list from a props object.
 * This function maps our React props to the corresponding CSS class names from Font Awesome.
 *
 * @param props Props object from which to extract CSS classes.
 * @returns An array of CSS class names derived from the props.
 */
export function getClassListFromProps(props: FontAwesomeIconProps): string[] {
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
    flip,
    size,
    rotation,
    pull,
    swapOpacity,
    rotateBy,
    widthAuto,
    className,
  } = props

  const result: string[] = []

  // Add classes only if the condition is truthy
  if (className) result.push(...className.split(' '))
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

  const prefix =
    config.cssPrefix || config.familyPrefix || DEFAULT_CLASSNAME_PREFIX

  return prefix === DEFAULT_CLASSNAME_PREFIX
    ? result
    : // TODO: see if we can achieve custom prefix support without iterating
      // eslint-disable-next-line unicorn/no-array-callback-reference
      result.map(withPrefix)
}
