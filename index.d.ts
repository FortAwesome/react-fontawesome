/// <reference types="react" />
import { CSSProperties } from 'react'
import {
  FaSymbol,
  FlipProp,
  IconProp,
  PullProp,
  RotateProp,
  SizeProp,
  Transform,
} from '@fortawesome/fontawesome-svg-core'

export function FontAwesomeIcon(props: Props): JSX.Element

export interface Props {
  border?: boolean
  className?: string
  color?: string
  fixedWidth?: boolean
  flip?: FlipProp
  icon: IconProp
  inverse?: boolean
  listItem?: boolean
  mask?: IconProp
  pull?: PullProp
  pulse?: boolean
  rotation?: RotateProp
  size?: SizeProp
  spin?: boolean
  style?: CSSProperties
  symbol?: FaSymbol
  transform?: string | Transform
}
