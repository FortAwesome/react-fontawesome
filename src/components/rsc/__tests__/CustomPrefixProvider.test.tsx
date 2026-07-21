import React from 'react'

import { config } from '@fortawesome/fontawesome-svg-core'
import { render } from '@testing-library/react'

import { CustomPrefixProvider } from '../CustomPrefixProvider'

describe('CustomPrefixProvider', () => {
  // Preserve the original prefix so we don't leak state into other test files
  const originalCssPrefix = config.cssPrefix

  afterEach(() => {
    config.cssPrefix = originalCssPrefix
  })

  it('sets config.cssPrefix to the provided custom prefix', () => {
    render(<CustomPrefixProvider customPrefix="my-custom-prefix" />)

    expect(config.cssPrefix).toBe('my-custom-prefix')
  })

  it('renders nothing (returns null)', () => {
    const { container } = render(
      <CustomPrefixProvider customPrefix="my-custom-prefix" />,
    )

    expect(container).toBeEmptyDOMElement()
  })

  it('updates config.cssPrefix when the customPrefix prop changes', () => {
    const { rerender } = render(
      <CustomPrefixProvider customPrefix="first-prefix" />,
    )

    expect(config.cssPrefix).toBe('first-prefix')

    rerender(<CustomPrefixProvider customPrefix="second-prefix" />)

    expect(config.cssPrefix).toBe('second-prefix')
  })

  it('handles an empty string prefix', () => {
    render(<CustomPrefixProvider customPrefix="" />)

    expect(config.cssPrefix).toBe('')
  })

  it('handles a prefix containing special characters', () => {
    const specialPrefix = 'my_custom-prefix.123'
    render(<CustomPrefixProvider customPrefix={specialPrefix} />)

    expect(config.cssPrefix).toBe(specialPrefix)
  })
})
