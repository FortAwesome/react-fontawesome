import type { CSSProperties, RefAttributes, SVGAttributes } from 'react'

import type { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core'

import type { AnimationProps } from './animation-props'
import { CSSVariables } from './css-variables'
import type { TransformProps } from './transform-props'

export interface FontAwesomeIconProps
  extends
    AnimationProps,
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
   * Creates a `<linearGradient />` element inside the icon svg, and applies it as a fill to the icon.
   *
   * If you also provide a `fill` prop, the `fill` prop will take precedence over the gradient.
   * Omit the `fill` prop to allow the gradient to be applied correctly.
   *
   * NOTE: Only supports one gradient type, providing both linear and radial gradient props will have undesired side-effects.
   */
  linearGradient?:
    | {
        /**
         * The `id` of the gradient, which is used to reference the gradient in the `fill` attribute of the icon's svg element.
         * This must be a unique value to prevent conflicts with other elements on the page.
         */
        id: string
        x1?: number | string | undefined
        x2?: number | string | undefined
        y1?: number | string | undefined
        y2?: number | string | undefined
        stops: { offset: string; color: string; opacity?: number | undefined }[]
      }
    | undefined
  /**
   * Creates a `<radialGradient />` element inside the icon svg, and applies it as a fill to the icon.
   *
   * If you also provide a `fill` prop, the `fill` prop will take precedence over the gradient.
   * Omit the `fill` prop to allow the gradient to be applied correctly.
   *
   * NOTE: Only supports one gradient type, providing both linear and radial gradient props will have undesired side-effects.
   */
  radialGradient?:
    | {
        /**
         * The `id` of the gradient, which is used to reference the gradient in the `fill` attribute of the icon's svg element.
         * This must be a unique value to prevent conflicts with other elements on the page.
         */
        id: string
        cx?: number | string | undefined
        cy?: number | string | undefined
        r?: number | string | undefined
        fx?: number | string | undefined
        fy?: number | string | undefined
        stops: { offset: string; color: string; opacity?: number | undefined }[]
      }
    | undefined
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
