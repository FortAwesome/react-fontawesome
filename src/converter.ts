import React, { type CSSProperties } from 'react'

import type { AbstractElement } from '@fortawesome/fontawesome-svg-core'

import type { FontAwesomeIconProps } from './types/icon-props'
import { camelize } from './utils/camelize'

function capitalize(val: string): string {
  return val.charAt(0).toUpperCase() + val.slice(1)
}

// Cache for parsed styles to avoid re-parsing identical style strings
// This is beneficial for performance not only due to the fact this function is called on each React render
// but also when multiple icons are rendered on a page, since many icon SVGs share similar built-in styles.
export const styleCache = new Map<string, CSSProperties>()
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

  // Prevent memory leaks by clearing cache when it gets too large
  if (styleCache.size === STYLE_CACHE_LIMIT) {
    styleCache.clear()
  }

  // Cache the result
  styleCache.set(style, result)

  return result
}

type AttributesOverride = Record<string, unknown> & {
  style?: React.CSSProperties
}

export function convert(
  createElement: typeof React.createElement,
  element: Omit<AbstractElement, 'attributes'> & {
    attributes: AttributesOverride
  },
  extraProps: Partial<FontAwesomeIconProps> = {},
): React.JSX.Element {
  if (typeof element === 'string') {
    return element
  }

  const children = (element.children || []).map((child) => {
    return convert(createElement, child)
  })

  const elementAttributes: AttributesOverride = element.attributes || {}
  const attrs: AttributesOverride = {}

  // Process attributes in a single pass
  for (const [key, val] of Object.entries(elementAttributes)) {
    switch (true) {
      case key === 'class': {
        attrs.className = val
        delete elementAttributes.class
        break
      }
      case key === 'style': {
        attrs.style = styleToObject(String(val))
        break
      }
      case key === 'aria-label': {
        attrs['aria-label'] = val
        attrs['aria-hidden'] = 'false' // Set aria-hidden to false when aria-label has a value
        break
      }
      case key === 'aria-hidden': {
        attrs['aria-hidden'] = attrs['aria-label'] ? 'false' : val
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
  const { style: existingStyle, ...remaining } = extraProps

  if (existingStyle) {
    attrs.style = attrs.style
      ? { ...attrs.style, ...existingStyle }
      : existingStyle
  }

  return createElement(element.tag, { ...remaining, ...attrs }, ...children)
}
