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
  const isVersion7OrLater = versionCheckGte(
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

// check if verion1 is greater than or equal to version2
export function versionCheckGte(version1, version2) {
  const [v1Base, v1PreRelease] = version1.split('-')
  const [v2Base, v2PreRelease] = version2.split('-')

  const v1Parts = v1Base.split('.')
  const v2Parts = v2Base.split('.')

  // Compare version numbers first
  for (let i = 0; i < Math.max(v1Parts.length, v2Parts.length); i++) {
    const v1Part = v1Parts[i] || '0'
    const v2Part = v2Parts[i] || '0'

    // Compare numeric values
    const v1Num = parseInt(v1Part, 10)
    const v2Num = parseInt(v2Part, 10)

    if (v1Num !== v2Num) {
      return v1Num > v2Num
    }
  }

  // If numeric values are equal, look for any remaining parts
  // that would make one version greater than the other
  for (let i = 0; i < Math.max(v1Parts.length, v2Parts.length); i++) {
    const v1Part = v1Parts[i] || '0'
    const v2Part = v2Parts[i] || '0'

    if (v1Part !== v2Part) {
      // When numeric values are equal but strings differ,
      // the one without leading zeros is greater
      if (v1Part.length !== v2Part.length) {
        return v1Part.length < v2Part.length
      }
    }
  }

  // If version numbers are equal, compare pre-release identifiers
  // A version with a pre-release identifier is less than one without
  if (v1PreRelease && !v2PreRelease) return false
  if (!v1PreRelease && v2PreRelease) return true

  return true
}
