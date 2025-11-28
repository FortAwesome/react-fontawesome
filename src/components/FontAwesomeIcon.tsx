import React, { RefAttributes, SVGAttributes } from 'react'

import {
  icon as faIcon,
  parse as faParse,
} from '@fortawesome/fontawesome-svg-core'

import { makeReactConverter } from '../converter'
import { useAccessibilityId } from '../hooks/useAccessibilityId'
import { Logger } from '../logger'
import { FontAwesomeIconProps } from '../types/icon-props'
import { getClassListFromProps } from '../utils/get-class-list-from-props'
import { normalizeIconArgs } from '../utils/normalize-icon-args'
import { typedObjectKeys } from '../utils/typed-object-keys'

const logger = new Logger('FontAwesomeIcon')

const DEFAULT_PROPS = {
  border: false,
  className: '',
  mask: undefined,
  maskId: undefined,
  fixedWidth: false,
  inverse: false,
  flip: false,
  icon: undefined,
  listItem: false,
  pull: undefined,
  pulse: false,
  rotation: undefined,
  rotateBy: false,
  size: undefined,
  spin: false,
  spinPulse: false,
  spinReverse: false,
  beat: false,
  fade: false,
  beatFade: false,
  bounce: false,
  shake: false,
  symbol: false,
  title: '',
  titleId: undefined,
  transform: undefined,
  swapOpacity: false,
  widthAuto: false,
} as const satisfies Partial<FontAwesomeIconProps>

const DEFAULT_PROP_KEYS = new Set(Object.keys(DEFAULT_PROPS))

/**
 * FontAwesomeIcon component.
 */
export const FontAwesomeIcon = React.forwardRef<
  SVGSVGElement,
  FontAwesomeIconProps
>((props, ref): React.JSX.Element | null => {
  const allProps: FontAwesomeIconProps = { ...DEFAULT_PROPS, ...props }

  const {
    icon: iconArgs,
    mask: maskArgs,
    symbol,
    title,
    titleId: titleIdFromProps,
    maskId: maskIdFromProps,
    transform,
  } = allProps

  const maskId = useAccessibilityId(maskIdFromProps, Boolean(maskArgs))
  const titleId = useAccessibilityId(titleIdFromProps, Boolean(title))

  const iconLookup = normalizeIconArgs(iconArgs)

  if (!iconLookup) {
    logger.error('Icon lookup is undefined', iconArgs)
    return null
  }

  const classList = getClassListFromProps(allProps)

  const transformProps =
    typeof transform === 'string' ? faParse.transform(transform) : transform

  const normalizedMaskArgs = normalizeIconArgs(maskArgs)

  const renderedIcon = faIcon(iconLookup, {
    ...(classList.length > 0 && { classes: classList }),
    ...(transformProps && { transform: transformProps }),
    ...(normalizedMaskArgs && { mask: normalizedMaskArgs }),
    symbol,
    title,
    titleId,
    maskId,
  })

  if (!renderedIcon) {
    logger.error('Could not find icon', iconLookup)
    return null
  }

  const { abstract } = renderedIcon
  const extraProps: Omit<
    SVGAttributes<SVGSVGElement>,
    'children' | 'mask' | 'transform'
  > &
    RefAttributes<SVGSVGElement> = { ref }

  for (const key of typedObjectKeys(allProps)) {
    // Skip default props
    if (DEFAULT_PROP_KEYS.has(key)) {
      continue
    }

    // Add all other props to the extraProps object
    // @ts-expect-error since `key` can be any of the keys in FontAwesomeIconProps,
    // TypeScript widens the type of the `obj[key]` lookups to a union of all possible values,
    // which will not correctly overlap each other.
    // TODO: remove eslint-disable when react hooks rules are fixed properly to stop false flags on refs
    // eslint-disable-next-line react-hooks/refs
    extraProps[key] = allProps[key]
  }

  // TODO: remove eslint-disable when react hooks rules are fixed properly to stop false flags on refs
  // eslint-disable-next-line react-hooks/refs
  return makeReactConverter(abstract[0], extraProps)
})

FontAwesomeIcon.displayName = 'FontAwesomeIcon'
