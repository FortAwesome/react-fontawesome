import type { CSSProperties, RefAttributes, SVGAttributes } from 'react'

import type { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'

import type { AnimationProps } from './animation-props'
import { CSSVariables } from './css-variables'
import type { TransformProps } from './transform-props'

export interface FontAwesomeIconProps
  extends AnimationProps,
    TransformProps,
    Omit<SVGAttributes<SVGSVGElement>, 'children' | 'mask' | 'transform'>,
    RefAttributes<SVGSVGElement> {
  /**
   * The icon to render.
   * @see {@link https://docs.fontawesome.com/web/use-with/react/add-icons}
   */
  icon: IconProp
  /** The size of the icon from a predefined set of sizes. */
  size?: SizeProp | undefined
  /**
   * Grab the Mask utility when you want to layer two icons but have the inner icon cut out from the icon below so the parent element’s background shows through.
   * @see {@link https://docs.fontawesome.com/web/use-with/react/style#mask}
   */
  mask?: IconProp | undefined
  /** Accessibility ID for the mask element */
  maskId?: string | undefined
  /** Any additional CSS classes to apply to the icon */
  className?: string | undefined
  /** The color of the icon. Can be any valid CSS color value */
  color?: string | undefined
  /**
   * Applies a border to the icon
   * @see {@link https://docs.fontawesome.com/web/use-with/react/style#bordered-icons}
   */
  border?: boolean | undefined
  /**
   * @deprecated
   * @since 7.0.0
   *
   * Starting in FontAwesome 7.0.0, all icons are fixed width by default.
   * This property will be removed in a future version.
   *
   * If you want to remove the fixed width to replicate the behavior of
   * previous versions, you can set the new {@link widthAuto} property to `true`.
   *
   * @see {@link FontAwesomeIconProps.widthAuto}
   */
  fixedWidth?: boolean | undefined
  /**
   * Invert the icon color.
   * @see {@link https://docs.fontawesome.com/web/use-with/react/style#invert-the-icon-color-to-white}
   */
  inverse?: boolean | undefined
  /** Any custom styles or CSS variable overrides for the icon element. */
  style?: (CSSProperties & CSSVariables) | undefined
  tabIndex?: number | undefined
  /**
   * @deprecated
   * @since 7.0.0
   *
   * Starting in FontAwesome 7.0.0, icons are decorative by default.
   * Instead of using a `title` prop, use the `aria-label` attribute instead.
   * 
   * @see {@link https://docs.fontawesome.com/upgrade/whats-changed#simpler-accessibility}
   */
  title?: string | undefined
  /**
   * @deprecated
   * @since 7.0.0
   *
   * Starting in FontAwesome 7.0.0, icons are decorative by default.
   * Instead of using a `titleId` prop, use an `aria-label` attribute instead.
   * 
   * @see {@link https://docs.fontawesome.com/upgrade/whats-changed#simpler-accessibility}
   */
  titleId?: string | undefined
  /**
   * When using Duotone icons, this property will swap the opacity of the two colors.
   * The first color will be rendered with the opacity of the second color, and vice versa
   *
   * @see {@link https://docs.fontawesome.com/web/use-with/react/style#duotone-icons}
   */
  swapOpacity?: boolean | undefined
  /**
   * When set to `true`, the icon will automatically adjust its width to
   * only the interior symbol and not the entire Icon Canvas.
   *
   * @see {@link https://docs.fontawesome.com/web/style/icon-canvas}
   * @since 7.0.0
   */
  widthAuto?: boolean | undefined
}
