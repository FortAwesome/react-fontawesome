import React, { useMemo } from 'react'

import {
  counter as faCounter,
  text as faText,
  parse as faParse,
  Transform,
  SizeProp,
} from '@fortawesome/fontawesome-svg-core'

import { makeReactConverter } from '../converter'
import { CSSVariables } from '../types/css-variables'
import { LAYER_CLASSES, STYLE_CLASSES } from '../utils/constants'
import { withPrefix } from '../utils/get-class-list-from-props'

type Attributes = React.HTMLAttributes<HTMLSpanElement>

interface FontAwesomeLayersProps extends Attributes {
  children: React.ReactNode
  className?: string | undefined
  size?: SizeProp | undefined
}

const DEFAULT_CLASSNAMES = `${LAYER_CLASSES.default} ${STYLE_CLASSES.fixedWidth}`

/**
 * React Component that allows you to stack multiple Font Awesome icons on top of each other,
 * or to layer with text or a counter.
 *
 * @see https://docs.fontawesome.com/web/style/layer
 *
 * @example
 * ```tsx
 * import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/react-fontawesome'
 * import { faBookmark, faCircle, faCheck, faHeart, faMoon, faPlay, faStar, faSun } from '@fortawesome/free-solid-svg-icons'
 *
 * // React versions of the examples from the FontAwesome Web Docs
 * export const Examples = () => (
 *   <div className="fa-4x">
 *     <FontAwesomeLayers>
 *       <FontAwesomeIcon icon={faCircle} color="tomato" />
 *       <FontAwesomeIcon icon={faCheck} inverse transform="shrink-6" />
 *     </FontAwesomeLayers>
 *     <FontAwesomeLayers>
 *       <FontAwesomeIcon icon={faBookmark} />
 *       <FontAwesomeIcon icon={faHeart} color="tomato" transform="shrink-10 up-2" />
 *     </FontAwesomeLayers>
 *     <FontAwesomeLayers>
 *       <FontAwesomeIcon icon={faPlay} transform="rotate--90 grow-4" />
 *       <FontAwesomeIcon icon={faSun} inverse transform="shrink-10 up-2" />
 *       <FontAwesomeIcon icon={faMoon} inverse transform="shrink-11 down-4.2 left-4" />
 *       <FontAwesomeIcon icon={faStar} inverse transform="shrink-11 down-4.2 right-4" />
 *     </FontAwesomeLayers>
 *   </div>
 * )
 * ```
 *
 * For examples using Text or Counter components:
 * @see {@link LayersText}
 * @see {@link LayersCounter}
 */
const FontAwesomeLayers = ({
  children,
  className,
  size,
  ...attributes
}: FontAwesomeLayersProps) => {
  const prefixedDefaultClasses = withPrefix(DEFAULT_CLASSNAMES)
  const classes = className
    ? `${prefixedDefaultClasses} ${className}`
    : prefixedDefaultClasses

  const element = (
    <span {...attributes} className={classes}>
      {children}
    </span>
  )

  if (size) {
    return <div className={withPrefix(`fa-${size}`)}>{element}</div>
  }

  return element
}

/**
 * Text component to be used within a `FontAwesomeLayers` component.
 *
 * @see https://docs.fontawesome.com/web/style/layer
 *
 * @example
 * ```tsx
 * import { FontAwesomeLayers, LayersText } from '@fortawesome/react-fontawesome'
 * import { faCalendar, faCertificate } from '@fortawesome/free-solid-svg-icons'
 *
 * // React versions of the examples from the FontAwesome Web Docs
 * export const Examples = () => (
 *   <div className="fa-4x">
 *     <FontAwesomeLayers>
 *       <FontAwesomeIcon icon={faCalendar} />
 *       <LayersText
 *         text="27"
 *         inverse
 *         style={{ fontWeight: '900' }}
 *         transform="shrink-8 down-3"
 *       />
 *     </FontAwesomeLayers>
 *     <FontAwesomeLayers>
 *       <FontAwesomeIcon icon={faCertificate} />
 *       <LayersText
 *         text="NEW"
 *         inverse
 *         style={{ fontWeight: '900' }}
 *         transform="shrink-11.5 rotate--30"
 *       />
 *     </FontAwesomeLayers>
 *   </div>
 * )
 * ```
 */
const LayersText = ({
  text,
  className,
  inverse,
  transform,
  style,
  ...attributes
}: Attributes & {
  text: string
  className?: string | undefined
  inverse?: boolean | undefined
  transform?: string | Transform | undefined
  style?: (React.CSSProperties & CSSVariables) | undefined
}) => {
  const textAbstractElement = useMemo(() => {
    const textObject = faText(text, {
      classes: [
        ...(className?.split(' ') || []),
        ...(inverse ? [STYLE_CLASSES.inverse] : []),
      ],
      transform:
        typeof transform === 'string'
          ? faParse.transform(transform)
          : transform,
    })

    console.log(textObject.abstract[0])

    return textObject.abstract[0]
  }, [text, transform, className, inverse])

  return makeReactConverter(textAbstractElement, { ...attributes, style })
}

/**
 * Counter component to be used within a `FontAwesomeLayers` component.
 *
 * @see https://docs.fontawesome.com/web/style/layer
 *
 * @example
 * ```tsx
 * import { FontAwesomeLayers, LayersCounter } from '@fortawesome/react-fontawesome'
 * import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
 *
 * // React version of the example from the FontAwesome Web Docs
 * export const Example = ({ count = 1419 }) => (
 *   <FontAwesomeLayers size="4x">
 *     <FontAwesomeIcon icon={faEnvelope} />
 *     <LayersCounter count={count.toLocaleString()} style={{ backgroundColor: 'tomato' }} />
 *   </FontAwesomeLayers>
 * )
 * ```
 */
const LayersCounter = ({
  count,
  className,
  style,
  ...attributes
}: Attributes & {
  count: number | string
  className?: string | undefined
  style?: (React.CSSProperties & CSSVariables) | undefined
}) => {
  const counterAbstractElement = useMemo(
    () =>
      faCounter(count, {
        classes: className?.split(' '),
      }).abstract[0],
    [count, className],
  )

  return makeReactConverter(counterAbstractElement, { ...attributes, style })
}

export { FontAwesomeLayers, LayersText, LayersCounter }
