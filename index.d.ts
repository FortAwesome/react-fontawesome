declare module '@fortawesome/react-fontawesome' {
  export type FontAwesomeIconMask = object | any[] | string;

  export type FontAwesomeIconFlip = 'horizontal' | 'vertical' | 'both';

  export type FontAwesomeIconIcon = object | any[] | string;

  export type FontAwesomeIconPull = 'right' | 'left';

  export type FontAwesomeIconRotation = 90 | 180 | 270;

  export type FontAwesomeIconSize =
    | 'lg'
    | 'xs'
    | 'sm'
    | '1x'
    | '2x'
    | '3x'
    | '4x'
    | '5x'
    | '6x'
    | '7x'
    | '8x'
    | '9x'
    | '10x';

  export type FontAwesomeIconSymbol = boolean | string;

  export type FontAwesomeIconTransform = string | object;

  export interface FontAwesomeIconProps {
    border?: boolean;
    className?: string;
    mask?: FontAwesomeIconMask;
    fixedWidth?: boolean;
    flip?: FontAwesomeIconFlip;
    icon?: FontAwesomeIconIcon;
    listItem?: boolean;
    pull?: FontAwesomeIconPull;
    pulse?: boolean;
    name?: string;
    rotation?: FontAwesomeIconRotation;
    size?: FontAwesomeIconSize;
    spin?: boolean;
    symbol?: FontAwesomeIconSymbol;
    transform?: FontAwesomeIconTransform;
  }

  export default function FontAwesomeIcon(
    props: FontAwesomeIconProps
  ): JSX.Element;
}
