import convert from '../converter'
import fontawesome from '@fortawesome/fontawesome'
import log from '../logger'
import PropTypes from 'prop-types'
import React from 'react'

function objectWithKey (key, value) {
  return ((Array.isArray(value) && value.length > 0) || (!Array.isArray(value) && value)) ? {[key]: value} : {}
}

function classList (props) {
  let classes = {
    'fa-spin': props.spin,
    'fa-pulse': props.pulse,
    'fa-fw': props.fixedWidth,
    'fa-border': props.border,
    'fa-li': props.listItem,
    'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
    'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both',
    [`fa-${props.size}`]: props.size !== null,
    [`fa-rotate-${props.rotation}`]: props.rotation !== null,
    [`fa-pull-${props.pull}`]: props.pull !== null
  }

  return Object.keys(classes)
    .map(key => classes[key] ? key : null)
    .filter(key => key)
}

function normalizeIconArgs (icon) {
  if (icon === null) {
    return null
  }

  if (typeof icon === 'object' && icon.prefix && icon.iconName) {
    return icon
  }

  if (Array.isArray(icon) && icon.length === 2) {
    return { prefix: icon[0], iconName: icon[1] }
  }

  if (typeof icon === 'string') {
    return { prefix: 'fas', iconName: icon }
  }
}

function FontAwesomeIcon (props) {
  const { icon: iconArgs, mask: maskArgs, symbol, className } = props

  const icon = normalizeIconArgs(iconArgs)
  const classes = objectWithKey('classes', [...classList(props), ...className.split(' ')])
  const transform = objectWithKey('transform', (typeof props.transform === 'string') ? fontawesome.parse.transform(props.transform) : props.transform)
  const mask = objectWithKey('mask', normalizeIconArgs(maskArgs))

  const renderedIcon = fontawesome.icon(icon, {
    ...classes,
    ...transform,
    ...mask,
    symbol
  })

  if (!renderedIcon){
    log('Could not find icon', icon)
    return null
  }

  const {abstract} = renderedIcon
  const convertCurry = convert.bind(null, React.createElement)
  const extraProps = {}

  Object.keys(props).forEach(key => {
    if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) extraProps[key] = props[key]
  })

  return convertCurry(abstract[0], extraProps)
}

FontAwesomeIcon.propTypes = {
  border: PropTypes.bool,

  className: PropTypes.string,

  mask: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),

  fixedWidth: PropTypes.bool,

  flip: PropTypes.oneOf(['horizontal', 'vertical', 'both']),

  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),

  listItem: PropTypes.bool,

  pull: PropTypes.oneOf(['right', 'left']),

  pulse: PropTypes.bool,

  name: PropTypes.string,

  rotation: PropTypes.oneOf([90, 180, 270]),

  size: PropTypes.oneOf(['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),

  spin: PropTypes.bool,

  symbol: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  transform: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

FontAwesomeIcon.defaultProps = {
  border: false,
  className: '',
  mask: null,
  fixedWidth: false,
  flip: null,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  name: '',
  rotation: null,
  size: null,
  spin: false,
  symbol: false,
  transform: null
}

export default FontAwesomeIcon
