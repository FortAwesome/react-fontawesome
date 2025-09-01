import React from 'react'

import type { AbstractElement } from '@fortawesome/fontawesome-svg-core'

import { convert } from '../converter'
import { FontAwesomeIconProps } from '../types/icon-props'

// Mock data structures for testing
const createMockElement = (
  tag: string = 'svg',
  attributes: Record<string, unknown> = {},
  children: AbstractElement[] = [],
): AbstractElement => ({
  tag,
  attributes,
  children,
})

const COMPLEX_STYLE = [
  'fill: currentColor',
  'display: inline-block',
  'font-size: inherit',
  'height: 1em',
  'overflow: visible',
  'vertical-align: -0.125em',
  'width: 1em',
  '-webkit-font-smoothing: antialiased',
  '-moz-osx-font-smoothing: grayscale',
].join('; ')

const SIMPLE_STYLE = 'fill: currentColor; display: inline-block;'

describe('convert function performance', () => {
  let mockCreateElement: jest.MockedFunction<typeof React.createElement>

  beforeEach(() => {
    mockCreateElement = jest
      .fn()
      .mockImplementation(
        (tag: string, props: object, ...children: object[]) => ({
          type: tag,
          props: { ...props, children },
        }),
      )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('baseline functionality', () => {
    it('should handle simple string elements', () => {
      const result = convert(
        mockCreateElement,
        'text' as unknown as AbstractElement,
      )
      expect(result).toBe('text')
    })

    it('should handle elements with basic attributes', () => {
      const element = createMockElement('svg', {
        class: 'fa-icon',
        style: 'fill: red',
      })

      convert(mockCreateElement, element)

      expect(mockCreateElement).toHaveBeenCalledWith('svg', {
        className: 'fa-icon',
        style: { fill: 'red' },
      })
    })

    it('should handle nested elements', () => {
      const child = createMockElement('path', { d: 'M0,0 L10,10' })
      const parent = createMockElement('svg', { class: 'fa-icon' }, [child])

      convert(mockCreateElement, parent)

      expect(mockCreateElement).toHaveBeenCalledTimes(2)
    })
  })

  describe('style parsing performance', () => {
    it('should parse complex styles efficiently', () => {
      const element = createMockElement('svg', { style: COMPLEX_STYLE })

      const startTime = performance.now()

      // Run multiple times to measure consistent performance
      for (let i = 0; i < 100; i++) {
        convert(mockCreateElement, element)
      }

      const endTime = performance.now()
      const duration = endTime - startTime

      // Expect reasonable performance (less than 50ms for 100 iterations)
      expect(duration).toBeLessThan(50)
    })

    it('should handle many unique styles without memory issues', () => {
      const startMemory = process.memoryUsage().heapUsed

      // Create 2000 unique styles to test cache management
      for (let i = 0; i < 2000; i++) {
        const uniqueStyle = `fill: rgb(${i}, ${i % 255}, ${(i * 2) % 255}); opacity: ${i / 2000}`
        const element = createMockElement('svg', { style: uniqueStyle })
        convert(mockCreateElement, element)
      }

      const endMemory = process.memoryUsage().heapUsed
      const memoryIncrease = endMemory - startMemory

      // Memory increase should be reasonable (less than 10MB)
      expect(memoryIncrease).toBeLessThan(10 * 1024 * 1024)
    })
  })

  describe('attribute processing performance', () => {
    it('should handle many attributes efficiently', () => {
      const manyAttributes: Record<string, unknown> = {}

      // Create 50 attributes of various types
      for (let i = 0; i < 50; i++) {
        manyAttributes[`data-attr-${i}`] = `value-${i}`
        manyAttributes[`aria-label-${i}`] = `label-${i}`
      }
      manyAttributes.class = 'fa-icon fa-large'
      manyAttributes.style = COMPLEX_STYLE

      const element = createMockElement('svg', manyAttributes)

      const startTime = performance.now()

      for (let i = 0; i < 100; i++) {
        convert(mockCreateElement, element)
      }

      const endTime = performance.now()
      const duration = endTime - startTime

      // Should handle many attributes efficiently
      expect(duration).toBeLessThan(100)
    })

    it('should process aria and data attributes correctly', () => {
      const element = createMockElement('svg', {
        'aria-hidden': 'true',
        'data-icon': 'some-icon',
        'data-testid': 'icon',
      })

      const startTime = performance.now()
      convert(mockCreateElement, element, {
        'aria-label': 'test icon',
        'data-custom': 'value',
      } as Partial<FontAwesomeIconProps>)
      const endTime = performance.now()

      expect(endTime - startTime).toBeLessThan(5) // Should be very fast
      expect(mockCreateElement).toHaveBeenCalledWith(
        'svg',
        expect.objectContaining({
          'aria-label': 'test icon',
          'aria-hidden': 'false', // Should be overridden because `aria-label` is present
          'data-icon': 'some-icon',
          'data-testid': 'icon',
          'data-custom': 'value', // Should add custom data attributes
        }),
      )
    })
  })

  describe('memory efficiency', () => {
    it('should not create excessive temporary objects', () => {
      const initialMemory = process.memoryUsage().heapUsed

      // Process many elements to test memory efficiency
      for (let i = 0; i < 1000; i++) {
        const element = createMockElement('svg', {
          class: `fa-icon-${i}`,
          style: i % 10 === 0 ? COMPLEX_STYLE : SIMPLE_STYLE,
          'data-index': i.toString(),
        })
        convert(mockCreateElement, element)
      }

      // Force garbage collection if available
      if (globalThis.gc) {
        globalThis.gc()
      }

      const finalMemory = process.memoryUsage().heapUsed
      const memoryIncrease = finalMemory - initialMemory

      // Memory increase should be minimal (less than 5MB)
      expect(memoryIncrease).toBeLessThan(5 * 1024 * 1024)
    })
  })

  describe('real-world performance scenarios', () => {
    it('should handle typical FontAwesome icon conversion efficiently', () => {
      // Simulate a typical FontAwesome SVG structure
      const iconElement = createMockElement(
        'svg',
        {
          'aria-hidden': 'true',
          focusable: 'false',
          'data-prefix': 'fas',
          'data-icon': 'coffee',
          class: 'svg-inline--fa fa-coffee',
          role: 'img',
          style:
            'fill: currentColor; display: inline-block; font-size: inherit; height: 1em; overflow: visible; vertical-align: -0.125em;',
          viewBox: '0 0 640 512',
        },
        [
          createMockElement('path', {
            fill: 'currentColor',
            d: 'M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96z',
          }),
        ],
      )

      const extraProps = {
        className: 'custom-icon',
        style: { color: '#007bff' },
        onClick: jest.fn(),
      }

      const startTime = performance.now()

      // Simulate rendering 100 icons (typical for a page with many icons)
      for (let i = 0; i < 100; i++) {
        convert(mockCreateElement, iconElement, extraProps)
      }

      const endTime = performance.now()
      const duration = endTime - startTime

      // Should handle 100 typical icons very efficiently
      expect(duration).toBeLessThan(25)
    })

    it('should handle icon list rendering efficiently', () => {
      // Simulate rendering a list of different icons
      const iconConfigs = [
        { class: 'fa-coffee', style: 'color: brown' },
        { class: 'fa-heart', style: 'color: red' },
        { class: 'fa-star', style: 'color: gold' },
        { class: 'fa-user', style: 'color: blue' },
        { class: 'fa-home', style: 'color: green' },
      ]

      const startTime = performance.now()

      // Render each icon type 20 times (100 total icons)
      for (const [index, config] of iconConfigs.entries()) {
        for (let i = 0; i < 20; i++) {
          const element = createMockElement(
            'svg',
            {
              class: `svg-inline--fa ${config.class}`,
              style: config.style,
              'data-icon': config.class.replace('fa-', ''),
            },
            [
              createMockElement('path', {
                fill: 'currentColor',
                d: `path-data-${index}`,
              }),
            ],
          )

          convert(mockCreateElement, element, {
            key: `${config.class}-${i}`,
          })
        }
      }

      const endTime = performance.now()
      const duration = endTime - startTime

      // Should handle rendering 100 varied icons efficiently
      expect(duration).toBeLessThan(30)
    })
  })
})
