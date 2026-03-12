export type GradientStop = {
  /** The offset of the gradient stop, specified as a percentage (e.g., '0%', '50%', '100%') or a number between 0 and 1 (e.g., 0, 0.5, 1). */
  offset: string | number
  /** The color of the gradient stop, specified as a valid CSS color string (e.g., '#FF0000', 'rgb(255, 0, 0)', 'red'). */
  color: string
  /** The opacity of the gradient stop, specified as a number between 0 and 1 (e.g., 0, 0.5, 1). This is optional and defaults to 1 if not provided. */
  opacity?: number | undefined
}

export type LinearGradient = {
  /**
   * The `id` of the gradient, which is used to reference the gradient in the `fill` attribute of the icon's svg element.
   * This must be a unique value to prevent conflicts with other elements on the page.
   */
  id: string
  /** The x-coordinate of the start of the gradient. Can be a number or a string (e.g., '0%', '50%', '100%'). */
  x1?: number | string | undefined
  /** The x-coordinate of the end of the gradient. Can be a number or a string (e.g., '0%', '50%', '100%'). */
  x2?: number | string | undefined
  /** The y-coordinate of the start of the gradient. Can be a number or a string (e.g., '0%', '50%', '100%'). */
  y1?: number | string | undefined
  /** The y-coordinate of the end of the gradient. Can be a number or a string (e.g., '0%', '50%', '100%'). */
  y2?: number | string | undefined
  stops: GradientStop[]
}

export type RadialGradient = {
  /**
   * The `id` of the gradient, which is used to reference the gradient in the `fill` attribute of the icon's svg element.
   * This must be a unique value to prevent conflicts with other elements on the page.
   */
  id: string
  /** The x-coordinate of the center of the gradient. Can be a number or a string (e.g., '0%', '50%', '100%'). */
  cx?: number | string | undefined
  /** The y-coordinate of the center of the gradient. Can be a number or a string (e.g., '0%', '50%', '100%'). */
  cy?: number | string | undefined
  /** The radius of the gradient. Can be a number or a string (e.g., '0%', '50%', '100%'). */
  r?: number | string | undefined
  /** The x-coordinate of the focal point of the gradient. Can be a number or a string (e.g., '0%', '50%', '100%'). */
  fx?: number | string | undefined
  /** The y-coordinate of the focal point of the gradient. Can be a number or a string (e.g., '0%', '50%', '100%'). */
  fy?: number | string | undefined
  stops: GradientStop[]
}

export type Gradient<T extends 'linear' | 'radial'> = T extends 'linear'
  ? { type: 'linear' } & LinearGradient
  : T extends 'radial'
    ? { type: 'radial' } & RadialGradient
    : never
