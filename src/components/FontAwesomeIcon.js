import classList from '../utils/get-class-list-from-props'
import convert from '../converter'
import { icon, parse } from '@fortawesome/fontawesome-svg-core'
import log from '../logger'
import normalizeIconArgs from '../utils/normalize-icon-args'
import objectWithKey from '../utils/object-with-key'
import PropTypes from 'prop-types'
import React from 'react'

const defaultProps = {
  border: false,
  className: '',
  mask: null,
  maskId: null,
  fixedWidth: false,
  inverse: false,
  flip: false,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  rotation: null,
  size: null,
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
  titleId: null,
  transform: null,
  swapOpacity: false
}

const FontAwesomeIcon = React.forwardRef((props, ref) => {
  const allProps = { ...defaultProps, ...props }

  const {
    icon: iconArgs,
    mask: maskArgs,
    symbol,
    className,
    title,
    titleId,
    maskId
  } = allProps

  const iconLookup = normalizeIconArgs(iconArgs)

  const classes = objectWithKey('classes', [
    ...classList(allProps),
    ...(className || '').split(' ')
  ])
  const transform = objectWithKey(
    'transform',
    typeof allProps.transform === 'string'
      ? parse.transform(allProps.transform)
      : allProps.transform
  )
  const mask = objectWithKey('mask', normalizeIconArgs(maskArgs))

  const renderedIcon = icon(iconLookup, {
    ...classes,
    ...transform,
    ...mask,
    symbol,
    title,
    titleId,
    maskId
  })

  if (!renderedIcon) {
    log('Could not find icon', iconLookup)
    return null
  }

  const { abstract } = renderedIcon
  const extraProps = { ref }

  Object.keys(allProps).forEach(key => {
    // eslint-disable-next-line no-prototype-builtins
    if (!defaultProps.hasOwnProperty(key)) {
      extraProps[key] = allProps[key]
    }
  })

  return convertCurry(abstract[0], extraProps)
})

FontAwesomeIcon.displayName = 'FontAwesomeIcon'

FontAwesomeIcon.propTypes = {
  beat: PropTypes.bool,

  border: PropTypes.bool,

  beatFade: PropTypes.bool,

  bounce: PropTypes.bool,

  className: PropTypes.string,

  fade: PropTypes.bool,

  flash: PropTypes.bool,

  mask: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]),

  maskId: PropTypes.string,

  fixedWidth: PropTypes.bool,

  inverse: PropTypes.bool,

  flip: PropTypes.oneOf([true, false, 'horizontal', 'vertical', 'both']),

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

export default FontAwesomeIcon

const convertCurry = convert.bind(null, React.createElement)
