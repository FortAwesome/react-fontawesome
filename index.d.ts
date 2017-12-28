/// <reference types="react" />
import {
    Transform,
    IconProp,
    FlipProp,
    SizeProp,
    PullProp,
    RotateProp
} from '@fortawesome/fontawesome';

export interface Props {
    icon: IconProp;
    mask?: IconProp;
    className?: string;
    spin?: boolean;
    pulse?: boolean;
    border?: boolean;
    fixedWidth?: boolean;
    listItem?: boolean;
    flip?: FlipProp;
    size?: SizeProp;
    pull?: PullProp;
    rotate?: RotateProp;
    transform?: string | Transform;
    symbol?: boolean | string;
    style?: React.CSSProperties;
}
export default function FontAwesomeIcon(props: Props): JSX.Element;

