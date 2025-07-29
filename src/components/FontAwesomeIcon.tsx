import React, { CSSProperties, RefAttributes, SVGAttributes } from 'react'

import { icon, parse } from '@fortawesome/fontawesome-svg-core'
import type {
  FaSymbol,
  FlipProp,
  IconProp,
  PullProp,
  RotateProp,
  SizeProp,
  Transform,
} from '@fortawesome/fontawesome-svg-core'

import { convert } from '../converter'
import { Logger } from '../logger'
import { classList } from '../utils/get-class-list-from-props'
import { normalizeIconArgs } from '../utils/normalize-icon-args'
import { objectWithKey } from '../utils/object-with-key'
import { typedObjectKeys } from '../utils/typed-object-keys'

const logger = new Logger('FontAwesomeIcon')

const defaultProps = {
  border: false,
  className: '',
  mask: undefined,
  maskId: undefined,
  fixedWidth: false,
  inverse: false,
  flip: false,
  icon: undefined,
  listItem: false,
  pull: undefined,
  pulse: false,
  rotation: undefined,
  rotateBy: false,
  size: undefined,
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
  titleId: undefined,
  transform: undefined,
  swapOpacity: false,
  widthAuto: false,
}

export interface FontAwesomeIconProps
  extends Omit<SVGAttributes<SVGSVGElement>, 'children' | 'mask' | 'transform'>,
    RefAttributes<SVGSVGElement> {
  /**
   * The icon to render.
   * @see {@link https://docs.fontawesome.com/web/use-with/react/add-icons}
   */
  icon: IconProp
  /**
   * Grab the Mask utility when you want to layer two icons but have the inner icon cut out from the icon below so the parent element’s background shows through.
   * @see {@link https://docs.fontawesome.com/web/use-with/react/style#mask}
   */
  mask?: IconProp | undefined
  maskId?: string | undefined
  className?: string | undefined
  color?: string | undefined
  spin?: boolean | undefined
  spinPulse?: boolean | undefined
  spinReverse?: boolean | undefined
  pulse?: boolean | undefined
  beat?: boolean | undefined
  fade?: boolean | undefined
  beatFade?: boolean | undefined
  bounce?: boolean | undefined
  shake?: boolean | undefined
  border?: boolean | undefined
  /**
   * @deprecated
   * @since 7.0.0
   *
   * Starting in FontAwesome 7.0.0, all icons are fixed width by default.
   * This property will be removed in a future version.
   *
   * If you want to remove the fixed width to replicate the behavior of
   * previous versions, you can set the new `widthAuto` property to `true`.
   *
   * @see {@link FontAwesomeIconProps.widthAuto}
   */
  fixedWidth?: boolean | undefined
  inverse?: boolean | undefined
  listItem?: boolean | undefined
  flip?: FlipProp | boolean | undefined
  size?: SizeProp | undefined
  pull?: PullProp | undefined
  /**
   * The rotation property is used to rotate the icon by 90, 180, or 270 degrees.
   *
   * @see {@link https://docs.fontawesome.com/web/use-with/react/style#rotation}
   */
  rotation?: RotateProp | undefined
  /**
   * Custom rotation is used to rotate the icon by a specific number of degrees,
   * rather than the standard 90, 180, or 270 degrees available in the `rotation` property.
   *
   * To use this feature, set `rotateBy` to `true` and provide a CSS variable `--fa-rotate-angle`
   * with the desired rotation angle in degrees.
   *
   * @example
   * ```tsx
   * <FontAwesomeIcon
   *   icon="fa-solid fa-coffee"
   *   rotateBy
   *   style={{ '--fa-rotate-angle': '329deg' }}
   * />
   * ```
   *
   * @see {@link https://docs.fontawesome.com/web/use-with/react/style#custom-rotation}
   * @since 7.0.0
   */
  rotateBy?: boolean | undefined
  transform?: string | Transform | undefined
  symbol?: FaSymbol | undefined
  style?: CSSProperties | undefined
  tabIndex?: number | undefined
  title?: string | undefined
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

export const FontAwesomeIcon = React.forwardRef(
  (
    props: FontAwesomeIconProps,
    ref: React.Ref<SVGSVGElement>,
  ): React.JSX.Element | null => {
    const allProps: FontAwesomeIconProps = { ...defaultProps, ...props }

    const {
      icon: iconArgs,
      mask: maskArgs,
      symbol,
      className,
      title,
      titleId,
      maskId,
    } = allProps

    const iconLookup = normalizeIconArgs(iconArgs)

    const classes = objectWithKey('classes', [
      ...classList(allProps),
      ...(className || '').split(' '),
    ])
    const transform = objectWithKey(
      'transform',
      typeof allProps.transform === 'string'
        ? parse.transform(allProps.transform)
        : allProps.transform,
    )
    const mask = objectWithKey('mask', normalizeIconArgs(maskArgs))

    if (!iconLookup) {
      logger.error('Icon lookup is undefined', iconArgs)
      return null
    }

    const renderedIcon = icon(iconLookup, {
      ...classes,
      ...transform,
      ...mask,
      symbol,
      title,
      titleId,
      maskId,
    })

    if (!renderedIcon) {
      logger.error('Could not find icon', iconLookup)
      return null
    }

    const { abstract } = renderedIcon
    const extraProps: Partial<FontAwesomeIconProps> = { ref }

    for (const key of typedObjectKeys(allProps)) {
      // Skip default props
      if (key in defaultProps) {
        continue
      }

      // Add all other props to the extraProps object
      // @ts-expect-error TypeScript doesn't know that allProps[key] is valid
      extraProps[key] = allProps[key]
    }

    return convertCurry(abstract[0], extraProps)
  },
)

FontAwesomeIcon.displayName = 'FontAwesomeIcon'

const convertCurry = convert.bind(null, React.createElement)
