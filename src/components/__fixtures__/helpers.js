import React from 'react'
import FontAwesomeIcon from '../FontAwesomeIcon'
import renderer from 'react-test-renderer'
import { parse } from '@fortawesome/fontawesome-svg-core'

export const REFERENCE_ICON_BY_STYLE = 0x00

export function coreHasFeature (feature) {
  if (feature === REFERENCE_ICON_BY_STYLE) {
    return parse.icon
  }
}

export function mount(props = {}, { createNodeMock } = {}) {
  const component = renderer.create(<FontAwesomeIcon {...props} />, {
    createNodeMock
  })

  return component.toJSON()
}
