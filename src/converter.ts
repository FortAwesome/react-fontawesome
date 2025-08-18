import React, { type CSSProperties } from 'react'

import type { AbstractElement } from '@fortawesome/fontawesome-svg-core'

import type { FontAwesomeIconProps } from './types/icon-props'
import { camelize } from './utils/camelize'

function capitalize(val: string): string {
  return val.charAt(0).toUpperCase() + val.slice(1)
}

function styleToObject(style: string): CSSProperties {
  const styleArray = style
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean)

  const result: Record<string, string> = {}

  for (const pair of styleArray) {
    const i = pair.indexOf(':')
    if (i === -1) {
      continue // Skip invalid style pairs
    }
    const prop = camelize(pair.slice(0, i))
    const value = pair.slice(i + 1).trim()

    if (prop.startsWith('webkit')) {
      result[capitalize(prop)] = value
    } else {
      result[prop] = value
    }
  }

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
  const attributeKeys = Object.keys(elementAttributes)

  const mixins: { attrs: AttributesOverride } = { attrs: {} }

  for (const key of attributeKeys) {
    const val = elementAttributes[key]

    switch (key) {
      case 'class': {
        mixins.attrs['className'] = val
        delete elementAttributes['class']
        break
      }
      case 'style': {
        mixins.attrs['style'] = styleToObject(String(val))
        break
      }
      default: {
        if (key.indexOf('aria-') === 0 || key.indexOf('data-') === 0) {
          mixins.attrs[key.toLowerCase()] = val
          if (key === 'aria-label' && !!val) {
            mixins.attrs['aria-hidden'] = 'false'
          }
        } else {
          mixins.attrs[camelize(key)] = val
        }
      }
    }
  }

  const { style: existingStyle = {}, ...remaining } = extraProps

  mixins.attrs['style'] = { ...mixins.attrs['style'], ...existingStyle }

  return createElement(
    element.tag,
    { ...mixins.attrs, ...remaining },
    ...children,
  )
}
