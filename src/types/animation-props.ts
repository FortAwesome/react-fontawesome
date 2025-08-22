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
}
