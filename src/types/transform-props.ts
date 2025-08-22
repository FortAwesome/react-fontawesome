import type {
  FaSymbol,
  FlipProp,
  PullProp,
  RotateProp,
  Transform,
} from '@fortawesome/fontawesome-svg-core'

export interface TransformProps {
  /**
   * @deprecated Simply wrap the icon instead, no need to pass this property.
   *
   * @example
   * ```tsx
   * <ul className='fa-ul'>
   *   <li>
   *     <span className='fa-li'>
   *       <FontAwesomeIcon icon={['fas', 'check']} />
   *     </span>
   *     List item with icon
   *   </li>
   * </ul>
   * ```
   *
   * @see {@link https://docs.fontawesome.com/web/style/lists}
   */
  listItem?: boolean | undefined
  /** Flip the icon horizontally, vertically or both. */
  flip?: FlipProp | boolean | undefined
  /** Wrap text around the icon by pulling it left or right. */
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
  /**
   * Apply a custom transform to the icon either using the built-in {@link Transform} config,
   * or a CSS transform string.
   * @see {@link https://docs.fontawesome.com/web/use-with/react/style#power-transforms}
   */
  transform?: string | Transform | undefined
  /**
   * The icon should render as an SVG symbol rather than a regular element.
   * @see {@link https://docs.fontawesome.com/web/use-with/react/style#use-svg-symbols}
   */
  symbol?: FaSymbol | undefined
}
