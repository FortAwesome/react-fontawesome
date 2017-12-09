import * as React from 'react';
export = FontAwesomeIcon;
export as namespace FontAwesomeIcon;
declare namespace FontAwesomeIcon {
  /**
   *
   */
  export enum Flip {
    Horizontal = 'horizontal',
    Vertical = 'vertical',
    Both = 'both',
  }
  /**
   *
   */
  export enum Size {
    Large = 'lg',
    ExtraSmall = 'xs',
    Small = 'sm',
    OneX = '1x',
    TwoX = '2x',
    ThreeX = '3x',
    FourX = '4x',
    FiveX = '5x',
    SixX = '6x',
    SevenX = '7x',
    EightX = '8x',
    NineX = '9x',
    TenX = '10x',
  }
  /**
   *
   */
  export enum Pull {
    Right = 'right',
    Left = 'left',
  }
  /**
   *
   */
  export enum Rotation {
    NinetyDegrees = 90,
    OneHundredEightyDegrees = 180,
    TwoHundredSeventyDegrees = 270,
  }
  /**
   *
   */
  export type RotationType = 90 | 180 | 270;
  /**
   *
   */
  export type Symbol = boolean | string;
  /**
   *
   */
  export type Mask = object | any[] | string;
  /**
   *
   */
  export type Icon = object | any[] | string;
  /**
   *
   */
  export type Transform = string | object;
  /**
   *
   */
  export interface Props {
    /**
     *
     */
    border?: boolean;
    /**
     *
     */
    className?: string;
    /**
     *
     */
    mask?: Mask;
    /**
     *
     */
    fixedWidth?: boolean;
    /**
     *
     */
    flip?: Flip | string;
    /**
     *
     */
    icon?: Icon;
    /**
     *
     */
    listItem?: boolean;
    /**
     *
     */
    pull?: Pull | string;
    /**
     *
     */
    pulse?: boolean;
    /**
     *
     */
    name?: string;
    /**
     *
     */
    rotation?: Rotation | RotationType;
    /**
     *
     */
    size?: Size | string;
    /**
     *
     */
    spin?: boolean;
    /**
     *
     */
    symbol?: Symbol;
    /**
     *
     */
    transform?: Transform;
  }
  /**
   *
   */
  export function Icon(props: Props): JSX.Element;
}
