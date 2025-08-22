/**
 * Adds support for FA's CSS variables to the React `style` prop.
 *
 * TODO: Move this to `fontawesome-common-types`
 * @see https://github.com/FortAwesome/react-fontawesome/pull/581#discussion_r2291185167
 */
export interface CSSVariables extends FontFamilyVariables {
  '--fa-family'?: string | undefined
  '--fa-style'?: string | undefined
  '--fa-display'?: string | undefined
  '--fa-inverse'?: string | undefined
  '--fa-width'?: string | undefined
  '--fa-li-margin'?: string | undefined
  '--fa-li-width'?: string | undefined
  '--fa-rotate-angle'?: string | undefined
  '--fa-animation-delay'?: string | undefined
  '--fa-animation-direction'?: string | undefined
  '--fa-animation-duration'?: string | undefined
  '--fa-animation-iteration-count'?: string | undefined
  '--fa-animation-timing'?: string | undefined
  '--fa-beat-scale'?: string | undefined
  '--fa-fade-opacity'?: string | undefined
  '--fa-beat-fade-opacity'?: string | undefined
  '--fa-beat-fade-scale'?: string | undefined
  '--fa-flip-x'?: string | undefined
  '--fa-flip-y'?: string | undefined
  '--fa-flip-z'?: string | undefined
  '--fa-flip-angle'?: string | undefined
  '--fa-border-color'?: string | undefined
  '--fa-border-padding'?: string | undefined
  '--fa-border-radius'?: string | undefined
  '--fa-border-style'?: string | undefined
  '--fa-border-width'?: string | undefined
  '--fa-pull-margin'?: string | undefined
  '--fa-stack-z-index'?: string | undefined
  '--fa-primary-color'?: string | undefined
  '--fa-primary-opacity'?: string | undefined
  '--fa-secondary-color'?: string | undefined
  '--fa-secondary-opacity'?: string | undefined
}

type FontFamilyVariables = {
  [K in `--fa-font-${string}`]?: string | undefined
}
