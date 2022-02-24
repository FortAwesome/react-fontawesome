import classList from '../utils/get-class-list-from-props'
import convert from '../converter'
import { icon, parse } from '@fortawesome/fontawesome-svg-core'
import log from '../logger'
import normalizeIconArgs from '../utils/normalize-icon-args'
import objectWithKey from '../utils/object-with-key'
import PropTypes from 'prop-types'
import React from 'react'

export default function FontAwesomeIcon({ forwardedRef, ...props }) {
  const {
    icon: iconArgs,
    mask: maskArgs,
    symbol,
    className,
    title,
    titleId
  } = props

  const iconLookup = normalizeIconArgs(iconArgs)

  const classes = objectWithKey('classes', [
    ...classList(props),
    ...className.split(' ')
  ])
  const transform = objectWithKey(
    'transform',
    typeof props.transform === 'string'
      ? parse.transform(props.transform)
      : props.transform
  )
  const mask = objectWithKey('mask', normalizeIconArgs(maskArgs))

  const renderedIcon = icon(iconLookup, {
    ...classes,
    ...transform,
    ...mask,
    symbol,
    title,
    titleId
  })

  if (!renderedIcon) {
    log('Could not find icon', iconLookup)
    return null
  }

  const { abstract } = renderedIcon
  const extraProps = { ref: forwardedRef }

  Object.keys(props).forEach(key => {
    // eslint-disable-next-line no-prototype-builtins
    if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
      extraProps[key] = props[key]
    }
  })

  return convertCurry(abstract[0], extraProps)
}

FontAwesomeIcon.displayName = 'FontAwesomeIcon'

FontAwesomeIcon.propTypes = {
  beat: PropTypes.bool,

  border: PropTypes.bool,

  bounce: PropTypes.bool,

  className: PropTypes.string,

  fade: PropTypes.bool,

  flash: PropTypes.bool,

  mask: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]),

  fixedWidth: PropTypes.bool,

  inverse: PropTypes.bool,

  flip: PropTypes.oneOf(['horizontal', 'vertical', 'both']),

  icon: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]),

  listItem: PropTypes.bool,

  pull: PropTypes.oneOf(['right', 'left']),

  pulse: PropTypes.bool,

  rotation: PropTypes.oneOf([0, 90, 180, 270]),

  shake: PropTypes.bool,

  size: PropTypes.oneOf([
    '2xs',
    'xs',
    'sm',
    'lg',
    'xl',
    '2xl',
    '1x',
    '2x',
    '3x',
    '4x',
    '5x',
    '6x',
    '7x',
    '8x',
    '9x',
    '10x'
  ]),

  spin: PropTypes.bool,

  spinPulse: PropTypes.bool,

  spinReverse: PropTypes.bool,

  symbol: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  title: PropTypes.string,

  titleId: PropTypes.string,

  transform: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

  swapOpacity: PropTypes.bool
}

FontAwesomeIcon.defaultProps = {
  border: false,
  className: '',
  mask: null,
  fixedWidth: false,
  inverse: false,
  flip: null,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  rotation: null,
  size: null,
  spin: false,
  beat: false,
  fade: false,
  beatFade: false,
  bounce: false,
  shake: false,
  symbol: false,
  title: '',
  titleId: null,
  transform: null,
  swapOpacity: false
}

const convertCurry = convert.bind(null, React.createElement)
