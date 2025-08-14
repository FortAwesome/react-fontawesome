import type {
  FaSymbol,
  FlipProp,
  PullProp,
  RotateProp,
  SizeProp,
  Transform,
} from '@fortawesome/fontawesome-svg-core'

export interface TransformProps {
  /**
   * Use this property to indicate that the icon is to be used as the decorative bullet
   * for a list item. Remember to mark-up the list with `<ul className="fa-ul">` and the list items with
   * `<li className="fa-li">`.
   *
   * @see {@link https://docs.fontawesome.com/web/use-with/react/style#icons-in-a-list}
   * @see {@link https://docs.fontawesome.com/web/style/lists}
   */
  listItem?: boolean | undefined
  /** Flip the icon horizontally, vertically or both. */
  flip?: FlipProp | boolean | undefined
  /** The size of the icon from a predefined set of sizes. */
  size?: SizeProp | undefined
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
