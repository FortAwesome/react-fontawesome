export interface AnimationProps {
  /**
   * Makes the icon spin 360deg clockwise continuously.
   * @see {@link https://docs.fontawesome.com/web/style/animate#spin}
   */
  spin?: boolean | undefined
  /**
   * Makes the icon spin 360deg clockwise in 8 incremental steps.
   * @see {@link https://docs.fontawesome.com/web/style/animate#spin}
   */
  spinPulse?: boolean | undefined
  /**
   * When used in conjunction with {@link spin} or {@link spinPulse}, makes the icon spin in reverse.
   * @see {@link https://docs.fontawesome.com/web/style/animate#spin-utilities}
   */
  spinReverse?: boolean | undefined
  /**
   * @deprecated
   * Will be removed in a future version.
   * Please use {@link spinPulse} instead.
   *
   * Makes the icon spin 360deg clockwise in 8 incremental steps.
   * @see {@link https://docs.fontawesome.com/web/style/animate#spin-utilities}
   */
  pulse?: boolean | undefined
  /**
   * Makes the icon scale in and out continuously.
   * @see {@link https://docs.fontawesome.com/web/style/animate#beat}
   */
  beat?: boolean | undefined
  /**
   * Makes the icon fade in and out continuously.
   * @see {@link https://docs.fontawesome.com/web/style/animate#fade}
   */
  fade?: boolean | undefined
  /**
   * Applies both scaling and fading animations from {@link beat} and {@link fade}.
   * @see {@link https://docs.fontawesome.com/web/style/animate#beat-fade}
   */
  beatFade?: boolean | undefined
  /**
   * Makes the icon bounce up and down.
   * @see {@link https://docs.fontawesome.com/web/style/animate#bounce}
   */
  bounce?: boolean | undefined
  /**
   * Makes the icon shake.
   * @see {@link https://docs.fontawesome.com/web/style/animate#shake}
   */
  shake?: boolean | undefined
  /**
   * Makes the icon flip 360deg.
   * @since 7.3.0
   * @see {@link https://docs.fontawesome.com/web/style/animate#flip-360}
   */
  flip360?: boolean | undefined
  /**
   * Makes the icon buzz.
   * @since 7.3.0
   * @see {@link https://docs.fontawesome.com/web/style/animate#buzz}
   */
  buzz?: boolean | undefined
  /**
   * Makes the icon float.
   * @since 7.3.0
   * @see {@link https://docs.fontawesome.com/web/style/animate#float}
   */
  float?: boolean | undefined
  /**
   * Makes the icon jello.
   * @since 7.3.0
   * @see {@link https://docs.fontawesome.com/web/style/animate#jello}
   */
  jello?: boolean | undefined
  /**
   * Makes the icon spin, snapping to each step.
   * @since 7.3.0
   * @see {@link https://docs.fontawesome.com/web/style/animate#spin-and-spin-snap}
   */
  spinSnap?: boolean | undefined
  /**
   * Makes the icon spin, snapping to 4 steps.
   * @since 7.3.0
   * @see {@link https://docs.fontawesome.com/web/style/animate#spin-and-spin-snap}
   */
  spinSnap4?: boolean | undefined
  /**
   * Makes the icon spin, snapping to 8 steps.
   * @since 7.3.0
   * @see {@link https://docs.fontawesome.com/web/style/animate#spin-and-spin-snap}
   */
  spinSnap8?: boolean | undefined
  /**
   * Makes the icon swing.
   * @since 7.3.0
   * @see {@link https://docs.fontawesome.com/web/style/animate#swing}
   */
  swing?: boolean | undefined
  /**
   * Makes the icon wag.
   * @since 7.3.0
   * @see {@link https://docs.fontawesome.com/web/style/animate#wag}
   */
  wag?: boolean | undefined
}
