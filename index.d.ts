/// <reference types="react" />
import { CSSProperties, SVGAttributes, RefAttributes } from 'react'
import {
  Transform,
  IconProp,
  FlipProp,
  SizeProp,
  PullProp,
  RotateProp,
  FaSymbol
} from '@fortawesome/fontawesome-svg-core'

export function FontAwesomeIcon(props: FontAwesomeIconProps): React.JSX.Element

/**
 * @deprecated use FontAwesomeIconProps
 */
export type Props = FontAwesomeIconProps

// This is identical to the version of Omit in Typescript 3.5. It is included for compatibility with older versions of Typescript.
type BackwardCompatibleOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

export interface FontAwesomeIconProps extends BackwardCompatibleOmit<SVGAttributes<SVGSVGElement>, 'children' | 'mask' | 'transform'>, RefAttributes<SVGSVGElement> {
  icon: IconProp
  mask?: IconProp | undefined;
  maskId?: string | undefined;
  className?: string | undefined;
  color?: string | undefined;
  spin?: boolean | undefined;
  spinPulse?: boolean | undefined;
  spinReverse?: boolean | undefined;
  pulse?: boolean | undefined;
  beat?: boolean | undefined;
  fade?: boolean | undefined;
  beatFade?: boolean | undefined;
  bounce?: boolean | undefined;
  shake?: boolean | undefined;
  border?: boolean | undefined;
  fixedWidth?: boolean | undefined;
  inverse?: boolean | undefined;
  listItem?: boolean | undefined;
  flip?: FlipProp | undefined;
  size?: SizeProp | undefined;
  pull?: PullProp | undefined;
  rotation?: RotateProp | undefined;
  rotateBy?: boolean | undefined;
  transform?: string | Transform | undefined;
  symbol?: FaSymbol | undefined;
  style?: CSSProperties | undefined;
  tabIndex?: number | undefined;
  title?: string | undefined;
  titleId?: string | undefined;
  swapOpacity?: boolean | undefined;
  widthAuto?: boolean | undefined;
}
