import {
  PullProp,
  RotateProp,
  SizeProp,
} from '@fortawesome/fontawesome-svg-core'

export const ANIMATION_CLASSES = {
  beat: 'fa-beat',
  fade: 'fa-fade',
  beatFade: 'fa-beat-fade',
  bounce: 'fa-bounce',
  shake: 'fa-shake',
  spin: 'fa-spin',
  spinPulse: 'fa-spin-pulse',
  spinReverse: 'fa-spin-reverse',
  pulse: 'fa-pulse',
} as const

export const PULL_CLASSES: {
  [key in PullProp]: `fa-pull-${key}`
} = {
  left: 'fa-pull-left',
  right: 'fa-pull-right',
}

export const ROTATE_CLASSES: {
  [key in RotateProp]: `fa-rotate-${key}`
} = {
  '90': 'fa-rotate-90',
  '180': 'fa-rotate-180',
  '270': 'fa-rotate-270',
}

export const SIZE_CLASSES: {
  [key in SizeProp]: `fa-${key}`
} = {
  '2xs': 'fa-2xs',
  xs: 'fa-xs',
  sm: 'fa-sm',
  lg: 'fa-lg',
  xl: 'fa-xl',
  '2xl': 'fa-2xl',
  '1x': 'fa-1x',
  '2x': 'fa-2x',
  '3x': 'fa-3x',
  '4x': 'fa-4x',
  '5x': 'fa-5x',
  '6x': 'fa-6x',
  '7x': 'fa-7x',
  '8x': 'fa-8x',
  '9x': 'fa-9x',
  '10x': 'fa-10x',
}

export const STYLE_CLASSES = {
  border: 'fa-border',
  /** @deprecated */
  fixedWidth: 'fa-fw',
  flip: 'fa-flip',
  flipHorizontal: 'fa-flip-horizontal',
  flipVertical: 'fa-flip-vertical',
  inverse: 'fa-inverse',
  listItem: 'fa-li',
  rotateBy: 'fa-rotate-by',
  swapOpacity: 'fa-swap-opacity',
  widthAuto: 'fa-width-auto',
} as const
