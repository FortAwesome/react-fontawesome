import semver from 'semver'

export const ICON_PACKS_STARTING_VERSION = '7.0.0-alpha1'

// Try to get version from installed package first, fallback to env var, then default
let SVG_CORE_VERSION
try {
  const svgCorePackageJson = require('@fortawesome/fontawesome-svg-core/package.json')
  SVG_CORE_VERSION = svgCorePackageJson.version
} catch (e) {
  // If package.json can't be loaded, try environment variable
  SVG_CORE_VERSION = process.env.FA_VERSION || '7.0.0-alpha8'
}

export { SVG_CORE_VERSION }

// Get CSS class list from a props object
export function classList(props) {
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
    widthAuto
  } = props

  // Check if we're using version 7 or later
  const isVersion7OrLater = semver.gte(
    SVG_CORE_VERSION,
    ICON_PACKS_STARTING_VERSION
  )

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
    'fa-fw': fixedWidth,
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
    'fa-rotate-by': isVersion7OrLater && rotateBy,
    'fa-width-auto': isVersion7OrLater && widthAuto
  }

  // map over all the keys in the classes object
  // return an array of the keys where the value for the key is not null
  return Object.keys(classes)
    .map((key) => (classes[key] ? key : null))
    .filter((key) => key)
}
