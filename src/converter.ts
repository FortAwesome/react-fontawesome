import React, {
  HTMLAttributes,
  RefAttributes,
  SVGAttributes,
  type CSSProperties,
} from 'react'

import type { AbstractElement } from '@fortawesome/fontawesome-svg-core'

import type { FontAwesomeIconProps } from './types/icon-props'
import { camelize } from './utils/camelize'

function capitalize(val: string): string {
  return val.charAt(0).toUpperCase() + val.slice(1)
}

// Cache for parsed styles to avoid re-parsing identical style strings
// This is beneficial for performance not only due to the fact this function is called on each React render
// but also when multiple icons are rendered on a page, since many icon SVGs share similar built-in styles.
const styleCache = new Map<string, CSSProperties>()
const STYLE_CACHE_LIMIT = 1000

function styleToObject(style: string): CSSProperties {
  // Check cache first
  if (styleCache.has(style)) {
    return styleCache.get(style)!
  }

  const result: Record<string, string> = {}

  let start = 0
  const len = style.length

  while (start < len) {
    // Find the next semicolon
    const semicolonIndex = style.indexOf(';', start)
    const end = semicolonIndex === -1 ? len : semicolonIndex

    // Extract the property-value pair
    const pair = style.slice(start, end).trim()
    if (pair) {
      const colonIndex = pair.indexOf(':')
      if (colonIndex > 0) {
        const rawProp = pair.slice(0, colonIndex).trim()
        const value = pair.slice(colonIndex + 1).trim()

        if (rawProp && value) {
          const prop = camelize(rawProp)
          result[prop.startsWith('webkit') ? capitalize(prop) : prop] = value
        }
      }
    }

    start = end + 1
  }

  // Prevent memory leaks by removing the oldest item in the cache when it gets too large
  if (styleCache.size === STYLE_CACHE_LIMIT) {
    const oldestKey = styleCache.keys().next().value

    if (oldestKey) {
      styleCache.delete(oldestKey)
    }
  }

  // Cache the result
  styleCache.set(style, result)

  return result
}

type AttributesOverride = Record<string, unknown> & {
  style?: React.CSSProperties
}

export function convert<
  El extends Element = SVGSVGElement,
  Attr extends HTMLAttributes<El> = SVGAttributes<El>,
>(
  createElement: typeof React.createElement,
  element: Omit<AbstractElement, 'attributes'> & {
    attributes: AttributesOverride
  },
  extraProps: Attr &
    RefAttributes<El> & {
      radialGradient?: FontAwesomeIconProps['radialGradient']
      linearGradient?: FontAwesomeIconProps['linearGradient']
    } = {} as Attr & RefAttributes<El>,
): React.JSX.Element {
  if (typeof element === 'string') {
    return element
  }

  const children = (element.children || []).map((child) => {
    let element = child

    if (
      ('fill' in extraProps ||
        extraProps.radialGradient ||
        extraProps.linearGradient) &&
      child.tag === 'path' &&
      'fill' in child.attributes
    ) {
      // If a `fill` prop or a gradient is provided, remove the `fill` attribute from child elements to allow the prop to take precedence
      element = { ...child }
      delete (element.attributes as AttributesOverride).fill
    }

    return convert(createElement, element)
  })

  const elementAttributes: AttributesOverride = element.attributes || {}
  const attrs: AttributesOverride = {}

  // Process attributes in a single pass
  for (const [key, val] of Object.entries(elementAttributes)) {
    switch (true) {
      case key === 'class': {
        attrs.className = val
        break
      }
      case key === 'style': {
        attrs.style = styleToObject(String(val))
        break
      }
      case key.startsWith('aria-'):
      case key.startsWith('data-'): {
        attrs[key.toLowerCase()] = val
        break
      }
      default: {
        attrs[camelize(key)] = val
      }
    }
  }

  // Merge extraProps efficiently
  const {
    style: existingStyle,
    role: existingRole,
    'aria-label': ariaLabel,
    linearGradient,
    radialGradient,
    ...remaining
  } = extraProps

  if (existingStyle) {
    attrs.style = attrs.style
      ? { ...attrs.style, ...existingStyle }
      : existingStyle
  }

  if (existingRole) {
    attrs.role = existingRole
  }

  // If an `aria-label` is set, ensure `aria-hidden` is false
  if (ariaLabel) {
    attrs['aria-label'] = ariaLabel
    attrs['aria-hidden'] = 'false'
  }

  if (linearGradient) {
    attrs.fill = `url(#${linearGradient.id})`

    children.unshift(
      createElement('linearGradient', {
        id: linearGradient.id,
        x1: linearGradient.x1,
        x2: linearGradient.x2,
        y1: linearGradient.y1,
        y2: linearGradient.y2,
        children: linearGradient.stops.map((stop, index) =>
          createElement('stop', {
            key: `${index}-${stop.offset}`,
            offset: stop.offset,
            stopColor: stop.color,
            ...(stop.opacity !== undefined && { stopOpacity: stop.opacity }),
          }),
        ),
      }),
    )
  }

  if (radialGradient) {
    attrs.fill = `url(#${radialGradient.id})`

    children.unshift(
      createElement('radialGradient', {
        id: radialGradient.id,
        cx: radialGradient.cx,
        cy: radialGradient.cy,
        r: radialGradient.r,
        fx: radialGradient.fx,
        fy: radialGradient.fy,
        children: radialGradient.stops.map((stop, index) =>
          createElement('stop', {
            key: `${index}-${stop.offset}`,
            offset: stop.offset,
            stopColor: stop.color,
            ...(stop.opacity !== undefined && { stopOpacity: stop.opacity }),
          }),
        ),
      }),
    )
  }

  return createElement(element.tag, { ...attrs, ...remaining }, ...children)
}

export const makeReactConverter = convert.bind(null, React.createElement)
