import semver from 'semver'

export const ICON_PACKS_STARTING_VERSION = '7.0.0-alpha1'

const svgCorePackageJson = require('@fortawesome/fontawesome-svg-core/package.json')

export const SVG_CORE_VERSION = svgCorePackageJson.version

// Get CSS class list from a props object
export default function classList(props) {
  const {
    beat,
    fade,
    beatFade,
    bounce,
    shake,
    flash,
    spin,
    spinPulse,
    spinReverse,
    pulse,
    fixedWidth, // the fixedWidth property has been deprecated as of version 7
    inverse,
    border,
    listItem,
    flip,
    size,
    rotation,
    pull,
    swapOpacity,
    rotateBy, // only supported in version 7.0.0 and later
    widthAuto // only supported in version 7.0.0 and later
  } = props

  // map of CSS class names to properties
  const classes = {
    'fa-beat': beat,
    'fa-fade': fade,
    'fa-beat-fade': beatFade,
    'fa-bounce': bounce,
    'fa-shake': shake,
    'fa-flash': flash,
    'fa-spin': spin,
    'fa-spin-reverse': spinReverse,
    'fa-spin-pulse': spinPulse,
    'fa-pulse': pulse,
    'fa-fw':
      semver.lt(SVG_CORE_VERSION, ICON_PACKS_STARTING_VERSION) && fixedWidth, // the fixedWidth property has been deprecated as of version 7
    'fa-inverse': inverse,
    'fa-border': border,
    'fa-li': listItem,
    'fa-flip': flip === true,
    'fa-flip-horizontal': flip === 'horizontal' || flip === 'both',
    'fa-flip-vertical': flip === 'vertical' || flip === 'both',
    [`fa-${size}`]: typeof size !== 'undefined' && size !== null,
    [`fa-rotate-${rotation}`]:
      typeof rotation !== 'undefined' && rotation !== null && rotation !== 0,
    [`fa-pull-${pull}`]: typeof pull !== 'undefined' && pull !== null,
    'fa-swap-opacity': swapOpacity,
    'fa-rotate-by':
      semver.gte(SVG_CORE_VERSION, ICON_PACKS_STARTING_VERSION) && rotateBy, // the rotateBy property is only supported in version 7.0.0 and later
    'fa-width-auto':
      semver.gte(SVG_CORE_VERSION, ICON_PACKS_STARTING_VERSION) && widthAuto // the widthAuto property is only supported in version 7.0.0 and later
  }

  // map over all the keys in the classes object
  // return an array of the keys where the value for the key is not null
  return Object.keys(classes)
    .map((key) => (classes[key] ? key : null))
    .filter((key) => key)
}
