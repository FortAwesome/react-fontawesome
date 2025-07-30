import React from 'react'

import * as fontawesome from '@fortawesome/fontawesome-svg-core'
import { faBacon, faTimes } from '@fortawesome/free-solid-svg-icons'
import { render, screen } from '@testing-library/react'
import semver from 'semver'

import {
  ICON_PACKS_STARTING_VERSION,
  SVG_CORE_VERSION,
} from '../../utils/get-class-list-from-props'
import {
  coreHasFeature,
  REFERENCE_ICON_USING_STRING,
  REFERENCE_ICON_BY_STYLE,
  ICON_ALIASES,
} from '../__fixtures__/helpers'
import { faCoffee, faCircle, faSpartan } from '../__fixtures__/icons'
import { FontAwesomeIcon } from '../FontAwesomeIcon'

const mockLoggerLog = jest.fn()
const mockLoggerWarn = jest.fn()
const mockLoggerError = jest.fn()

/* eslint-disable @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-argument */
jest.mock('../../logger', () => ({
  Logger: jest.fn().mockImplementation(() => ({
    log: jest.fn((...args) => mockLoggerLog(...args)),
    warn: jest.fn((...args) => mockLoggerWarn(...args)),
    error: jest.fn((...args) => mockLoggerError(...args)),
  })),
}))
/* eslint-enable @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-argument */

describe('FontAwesomeIcon', () => {
  beforeEach(() => {
    fontawesome.library.add(faCoffee, faCircle, faSpartan)
  })

  afterEach(() => {
    fontawesome.library.reset()
  })

  test('using a FAT icon using array format', () => {
    render(
      <FontAwesomeIcon icon={['fat', 'spartan' as fontawesome.IconName]} />,
    )

    const element = screen.getByRole('img', { hidden: true })

    expect(element).toBeDefined()
    expect(element).toBeInstanceOf(SVGSVGElement)
    expect(element).toHaveClass('fa-spartan')
  })

  if (coreHasFeature(ICON_ALIASES)) {
    test('find a free-solid-svg-icon with array format', () => {
      fontawesome.library.add(faTimes)
      render(<FontAwesomeIcon icon={['fas', 'xmark']} />)

      const element = screen.getByRole('img', { hidden: true })

      expect(element).toBeDefined()
      expect(element).toBeInstanceOf(SVGSVGElement)
      expect(element).toHaveClass('fa-xmark')
    })

    test('find a free-solid-svg-icon that is an alias', () => {
      fontawesome.library.add(faTimes)
      render(<FontAwesomeIcon icon={['fas', 'close']} />)

      const element = screen.getByRole('img', { hidden: true })

      expect(element).toBeDefined()
      expect(element).toBeInstanceOf(SVGSVGElement)
      expect(element).toHaveClass('fa-xmark')
    })
  }

  if (coreHasFeature(REFERENCE_ICON_USING_STRING)) {
    test('find an icon using string format', () => {
      render(<FontAwesomeIcon icon="coffee" />)

      const element = screen.getByRole('img', { hidden: true })

      expect(element).toBeDefined()
      expect(element).toBeInstanceOf(SVGSVGElement)
      expect(element).toHaveClass('fa-coffee')
    })

    test('find an icon using string format with style', () => {
      render(
        <FontAwesomeIcon icon={'fa-solid fa-coffee' as fontawesome.IconProp} />,
      )

      const element = screen.getByRole('img', { hidden: true })

      expect(element).toBeDefined()
      expect(element).toBeInstanceOf(SVGSVGElement)
      expect(element).toHaveClass('fa-coffee')
    })
  }

  if (coreHasFeature(REFERENCE_ICON_BY_STYLE)) {
    test('find a THIN icon with array format', () => {
      render(
        <FontAwesomeIcon
          icon={[
            'thin' as fontawesome.IconPrefix,
            'spartan' as fontawesome.IconName,
          ]}
        />,
      )

      const element = screen.getByRole('img', { hidden: true })

      expect(element).toBeDefined()
      expect(element).toBeInstanceOf(SVGSVGElement)
      expect(element).toHaveClass('fa-spartan')
    })

    test('find a FA-THIN icon with array format', () => {
      render(
        <FontAwesomeIcon
          icon={[
            'fa-thin' as fontawesome.IconPrefix,
            'spartan' as fontawesome.IconName,
          ]}
        />,
      )
      const element = screen.getByRole('img', { hidden: true })

      expect(element).toBeDefined()
      expect(element).toBeInstanceOf(SVGSVGElement)
      expect(element).toHaveClass('fa-spartan')
    })
  }

  describe('using defaultProps', () => {
    const UNDEFINED_DEFAULT_PROPS = {
      border: undefined,
      className: undefined,
      mask: undefined,
      maskId: undefined,
      fixedWidth: undefined,
      inverse: undefined,
      flip: undefined,
      listItem: undefined,
      pull: undefined,
      pulse: undefined,
      rotation: undefined,
      size: undefined,
      spin: undefined,
      spinPulse: undefined,
      spinReverse: undefined,
      beat: undefined,
      fade: undefined,
      beatFade: undefined,
      bounce: undefined,
      shake: undefined,
      symbol: undefined,
      title: undefined,
      titleId: undefined,
      transform: undefined,
      swapOpacity: undefined,
    }

    test('undefined props passed', () => {
      expect(() =>
        render(
          <FontAwesomeIcon icon={faCoffee} {...UNDEFINED_DEFAULT_PROPS} />,
        ),
      ).not.toThrow(TypeError)
    })
  })

  test('when icon is not provided, it returns null', () => {
    const { container } = render(
      <FontAwesomeIcon icon={null as unknown as fontawesome.IconProp} />,
    )
    expect(container).toBeEmptyDOMElement()
  })

  test('using imported object from svg icons package', () => {
    render(<FontAwesomeIcon icon={faBacon} />)

    const element = screen.getByRole('img', { hidden: true })

    expect(element).toBeDefined()
    expect(element).toBeInstanceOf(SVGSVGElement)
    expect(element).toHaveClass('fa-bacon')
  })

  test('using pack and name', () => {
    render(
      <FontAwesomeIcon
        icon={['fas', 'coffee']}
        style={{ backgroundColor: 'white' }}
      />,
    )

    const element = screen.getByRole('img', { hidden: true })

    expect(element).toBeDefined()
    expect(element).toBeInstanceOf(SVGSVGElement)
    expect(element).toHaveClass('fa-coffee')
    expect(element.getAttribute('aria-hidden')).toBe('true')
    expect(element.dataset.icon).toBe('coffee')
    expect(element.style.backgroundColor).toEqual('white')
  })

  test('using pack common names', () => {
    render(<FontAwesomeIcon icon="coffee" />)

    const element = screen.getByRole('img', { hidden: true })

    expect(element).toBeDefined()
    expect(element).toBeInstanceOf(SVGSVGElement)
    expect(element).toHaveClass('fa-coffee')
  })

  test('using pack common names not added to library', () => {
    render(<FontAwesomeIcon icon="spinner" />)
    const element = screen.queryByRole('img', { hidden: true })
    expect(element).toBeNull()
    expect(mockLoggerError).toHaveBeenCalledTimes(1)
    expect(mockLoggerError).toHaveBeenCalledWith(
      expect.stringContaining('Could not find icon'),
      expect.objectContaining({
        iconName: 'spinner',
        prefix: 'fas',
      }),
    )
  })

  test('using icon', () => {
    render(<FontAwesomeIcon icon={faCoffee} />)

    const element = screen.getByRole('img', { hidden: true })

    expect(element).toBeDefined()
    expect(element).toBeInstanceOf(SVGSVGElement)
    expect(element).toHaveClass('fa-coffee')
  })

  test('using border', () => {
    render(<FontAwesomeIcon icon={faCoffee} border />)

    const element = screen.getByRole('img', { hidden: true })

    expect(element).toBeDefined()
    expect(element).toBeInstanceOf(SVGSVGElement)
    expect(element).toHaveClass('fa-border')
  })

  if (semver.lt(SVG_CORE_VERSION, ICON_PACKS_STARTING_VERSION)) {
    test('using fixedWidth', () => {
      render(<FontAwesomeIcon icon={faCoffee} fixedWidth />)

      const element = screen.getByRole('img', { hidden: true })

      expect(element).toBeDefined()
      expect(element).toBeInstanceOf(SVGSVGElement)
      expect(element).toHaveClass('fa-fw')
    })
  }

  test('using inverse', () => {
    render(<FontAwesomeIcon icon={faCoffee} inverse />)

    const element = screen.getByRole('img', { hidden: true })

    expect(element).toBeDefined()
    expect(element).toBeInstanceOf(SVGSVGElement)
    expect(element).toHaveClass('fa-inverse')
  })

  describe('using flip', () => {
    test('horizontal', () => {
      render(<FontAwesomeIcon icon={faCoffee} flip="horizontal" />)

      const element = screen.getByRole('img', { hidden: true })

      expect(element).toBeDefined()
      expect(element).toBeInstanceOf(SVGSVGElement)
      expect(element).toHaveClass('fa-flip-horizontal')
    })

    test('vertical', () => {
      render(<FontAwesomeIcon icon={faCoffee} flip="vertical" />)

      const element = screen.getByRole('img', { hidden: true })

      expect(element).toBeDefined()
      expect(element).toBeInstanceOf(SVGSVGElement)
      expect(element).toHaveClass('fa-flip-vertical')
    })

    test('both', () => {
      render(<FontAwesomeIcon icon={faCoffee} flip="both" />)

      const element = screen.getByRole('img', { hidden: true })

      expect(element).toBeDefined()
      expect(element).toBeInstanceOf(SVGSVGElement)
      expect(element).toHaveClass('fa-flip-horizontal')
      expect(element).toHaveClass('fa-flip-vertical')
    })

    test('animation', () => {
      render(<FontAwesomeIcon icon={faCoffee} flip={true} />)

      const element = screen.getByRole('img', { hidden: true })

      expect(element).toBeDefined()
      expect(element).toBeInstanceOf(SVGSVGElement)
      expect(element).toHaveClass('fa-flip')
    })
  })

  test('using listItem', () => {
    render(<FontAwesomeIcon icon={faCoffee} listItem={true} />)

    const element = screen.getByRole('img', { hidden: true })

    expect(element).toBeDefined()
    expect(element).toBeInstanceOf(SVGSVGElement)
    expect(element).toHaveClass('fa-li')
  })

  describe('using pull', () => {
    test('right', () => {
      render(<FontAwesomeIcon icon={faCoffee} pull="right" />)

      const element = screen.getByRole('img', { hidden: true })

      expect(element).toBeDefined()
      expect(element).toBeInstanceOf(SVGSVGElement)
      expect(element).toHaveClass('fa-pull-right')
    })

    test('left', () => {
      render(<FontAwesomeIcon icon={faCoffee} pull="left" />)

      const element = screen.getByRole('img', { hidden: true })

      expect(element).toBeDefined()
      expect(element).toBeInstanceOf(SVGSVGElement)
      expect(element).toHaveClass('fa-pull-left')
    })
  })

  test('using pulse', () => {
    render(<FontAwesomeIcon icon={faCoffee} pulse={true} />)

    const element = screen.getByRole('img', { hidden: true })

    expect(element).toBeDefined()
    expect(element).toBeInstanceOf(SVGSVGElement)
    expect(element).toHaveClass('fa-pulse')
  })

  describe('using rotation', () => {
    test('0', () => {
      render(
        <FontAwesomeIcon
          icon={faCoffee}
          rotation={0 as fontawesome.RotateProp}
        />,
      )

      const element = screen.getByRole('img', { hidden: true })

      expect(element).toBeDefined()
      expect(element).toBeInstanceOf(SVGSVGElement)
      expect(element).not.toHaveClass('fa-rotate-')
    })

    test.each<fontawesome.RotateProp>([90, 180, 270])(
      'rotate %d',
      (rotation) => {
        render(<FontAwesomeIcon icon={faCoffee} rotation={rotation} />)

        const element = screen.getByRole('img', { hidden: true })

        expect(element).toBeDefined()
        expect(element).toBeInstanceOf(SVGSVGElement)
        expect(element).toHaveClass(`fa-rotate-${rotation}`)
      },
    )
  })

  test.each<fontawesome.SizeProp>([
    '2xs',
    'xs',
    'sm',
    'lg',
    'xl',
    '2xl',
    '1x',
    '2x',
    '3x',
    '4x',
    '5x',
    '6x',
    '7x',
    '8x',
    '9x',
    '10x',
  ])('using size: %s', (size) => {
    render(<FontAwesomeIcon icon={faCoffee} size={size} />)

    const element = screen.getByRole('img', { hidden: true })

    expect(element).toHaveClass(`fa-${size}`)
  })

  describe('using beat', () => {
    test('setting beat prop to true adds fa-beat class', () => {
      render(<FontAwesomeIcon icon={faCoffee} beat={true} />)

      const element = screen.getByRole('img', { hidden: true })

      expect(element).toBeDefined()
      expect(element).toBeInstanceOf(SVGSVGElement)
      expect(element).toHaveClass('fa-beat')
    })

    test('setting beat prop to false after setting it to true results in no fa-beat class', () => {
      const { rerender } = render(
        <FontAwesomeIcon icon={faCoffee} beat={true} />,
      )

      const element = screen.getByRole('img', { hidden: true })
      expect(element).toHaveClass('fa-beat')

      rerender(<FontAwesomeIcon icon={faCoffee} beat={false} />)
      expect(element).not.toHaveClass('fa-beat')
    })
  })

  describe('using fade', () => {
    test('setting fade prop to true adds fa-fade class', () => {
      render(<FontAwesomeIcon icon={faCoffee} fade={true} />)

      const element = screen.getByRole('img', { hidden: true })
      expect(element).toBeDefined()
      expect(element).toBeInstanceOf(SVGSVGElement)
      expect(element).toHaveClass('fa-fade')
    })

    test('setting fade prop to false after setting it to true results in no fa-fade class', () => {
      const { rerender } = render(
        <FontAwesomeIcon icon={faCoffee} fade={true} />,
      )

      const element = screen.getByRole('img', { hidden: true })
      expect(element).toHaveClass('fa-fade')

      rerender(<FontAwesomeIcon icon={faCoffee} fade={false} />)
      expect(element).not.toHaveClass('fa-fade')
    })
  })

  describe('using beatFade', () => {
    test('setting beatFade prop to true adds fa-beat-fade class', () => {
      render(<FontAwesomeIcon icon={faCoffee} beatFade={true} />)

      const element = screen.getByRole('img', { hidden: true })
      expect(element).toHaveClass('fa-beat-fade')
    })

    test('setting beatFade prop to false after setting it to true results in no fa-beat-fade class', () => {
      const { rerender } = render(
        <FontAwesomeIcon icon={faCoffee} beatFade={true} />,
      )

      const element = screen.getByRole('img', { hidden: true })
      expect(element).toHaveClass('fa-beat-fade')

      rerender(<FontAwesomeIcon icon={faCoffee} beatFade={false} />)
      expect(element).not.toHaveClass('fa-beat-fade')
    })
  })

  describe('using bounce', () => {
    test('setting bounce prop to true adds fa-bounce class', () => {
      render(<FontAwesomeIcon icon={faCoffee} bounce={true} />)

      const element = screen.getByRole('img', { hidden: true })
      expect(element).toHaveClass('fa-bounce')
    })

    test('setting bounce prop to false after setting it to true results in no fa-bounce class', () => {
      const { rerender } = render(
        <FontAwesomeIcon icon={faCoffee} bounce={true} />,
      )

      const element = screen.getByRole('img', { hidden: true })
      expect(element).toHaveClass('fa-bounce')

      rerender(<FontAwesomeIcon icon={faCoffee} bounce={false} />)
      expect(element).not.toHaveClass('fa-bounce')
    })
  })

  describe('using shake', () => {
    test('setting shake prop to true adds fa-shake class', () => {
      render(<FontAwesomeIcon icon={faCoffee} shake={true} />)

      const element = screen.getByRole('img', { hidden: true })
      expect(element).toHaveClass('fa-shake')
    })

    test('setting shake prop to false after setting it to true results in no fa-shake class', () => {
      const { rerender } = render(
        <FontAwesomeIcon icon={faCoffee} shake={true} />,
      )
      const element = screen.getByRole('img', { hidden: true })
      expect(element).toHaveClass('fa-shake')

      rerender(<FontAwesomeIcon icon={faCoffee} shake={false} />)
      expect(element).not.toHaveClass('fa-shake')
    })
  })

  describe('using spin', () => {
    test('setting spin prop to true adds fa-spin class', () => {
      render(<FontAwesomeIcon icon={faCoffee} spin={true} />)

      const element = screen.getByRole('img', { hidden: true })
      expect(element).toHaveClass('fa-spin')
    })

    test('setting spinReverse and spinPulse prop to true adds fa-spin-reverse and fa-spin-pulse class', () => {
      render(
        <FontAwesomeIcon icon={faCoffee} spinReverse={true} spinPulse={true} />,
      )

      const element = screen.getByRole('img', { hidden: true })
      expect(element).toHaveClass('fa-spin-reverse')
      expect(element).toHaveClass('fa-spin-pulse')
    })

    test('setting spin prop to false after setting it to true results in no fa-spin class', () => {
      const { rerender } = render(
        <FontAwesomeIcon icon={faCoffee} spin={true} />,
      )

      const element = screen.getByRole('img', { hidden: true })
      expect(element).toHaveClass('fa-spin')

      rerender(<FontAwesomeIcon icon={faCoffee} spin={false} />)
      expect(element).not.toHaveClass('fa-spin')
    })

    test('setting spinPulse prop to false after setting it to true results in no fa-spin-pulse class', () => {
      const { rerender } = render(
        <FontAwesomeIcon icon={faCoffee} spinPulse={true} />,
      )

      const element = screen.getByRole('img', { hidden: true })
      expect(element).toHaveClass('fa-spin-pulse')

      rerender(<FontAwesomeIcon icon={faCoffee} spinPulse={false} />)
      expect(element).not.toHaveClass('fa-spin-pulse')
    })

    test('setting spinReverse prop to false after setting it to true results in no fa-spin-reverse class', () => {
      const { rerender } = render(
        <FontAwesomeIcon icon={faCoffee} spinReverse={true} />,
      )

      const element = screen.getByRole('img', { hidden: true })
      expect(element).toHaveClass('fa-spin-reverse')
      rerender(<FontAwesomeIcon icon={faCoffee} spinReverse={false} />)
      expect(element).not.toHaveClass('fa-spin-reverse')
    })
  })

  test('using className', () => {
    render(<FontAwesomeIcon icon={faCoffee} className="highlight" />)

    const element = screen.getByRole('img', { hidden: true })
    expect(element).toHaveClass('highlight')
  })

  describe('using transform', () => {
    test('string', () => {
      render(
        <FontAwesomeIcon
          icon={faCoffee}
          transform="grow-40 left-4 rotate-15"
          style={{ backgroundColor: 'white' }}
        />,
      )

      const element = screen.getByRole('img', { hidden: true })
      expect(element.style.backgroundColor).toEqual('white')
      expect(element.style.transformOrigin).toEqual('0.375em 0.5em')
    })

    test('object', () => {
      render(
        <FontAwesomeIcon
          icon={faCoffee}
          transform={{
            flipX: false,
            flipY: false,
            rotate: 15,
            size: 56,
            x: -4,
            y: 0,
          }}
          style={{ backgroundColor: 'white' }}
        />,
      )

      const element = screen.getByRole('img', { hidden: true })
      expect(element.style.backgroundColor).toEqual('white')
      expect(element.style.transformOrigin).toEqual('0.375em 0.5em')
    })
  })

  describe('mask', () => {
    test('will add icon', () => {
      render(<FontAwesomeIcon icon={faCoffee} mask={faCircle} />)

      const element = screen.getByRole('img', { hidden: true })
      // Ignore this rule as we are specifically testing the direct nodes created by the SVG renderer.
      // eslint-disable-next-line testing-library/no-node-access
      const children = element.children

      expect(element).toBeDefined()
      expect(element).toBeInstanceOf(SVGSVGElement)
      expect(children.length).toBe(2)
      expect(children[1].getAttribute('clip-path')).toBeTruthy()
    })

    test('will use maskId', () => {
      render(
        <FontAwesomeIcon
          icon={faCoffee}
          mask={faCircle}
          maskId="circle-mask"
        />,
      )

      const element = screen.getByRole('img', { hidden: true })

      // Ignore this rule as we are specifically testing the direct nodes created by the SVG renderer.
      // eslint-disable-next-line testing-library/no-node-access
      const children = element.children
      // eslint-disable-next-line testing-library/no-node-access
      const firstChildChildren = children[0].children

      expect(firstChildChildren[0].id).toEqual('clip-circle-mask')
      expect(firstChildChildren[1].id).toEqual('mask-circle-mask')
      expect(children[1].getAttribute('mask')).toEqual('url(#mask-circle-mask)')
      expect(children[1].getAttribute('clip-path')).toEqual(
        'url(#clip-circle-mask)',
      )
    })
  })

  describe('symbol', () => {
    const spy = jest.spyOn(fontawesome, 'icon')

    afterEach(() => {
      spy.mockClear()
    })

    test('will not create a symbol', () => {
      render(<FontAwesomeIcon icon={faCoffee} />)

      expect(spy.mock.calls[0][1]?.symbol).toBe(false)
    })

    test('will create a symbol', () => {
      render(<FontAwesomeIcon icon={faCoffee} symbol="coffee-icon" />)

      expect(spy.mock.calls[0][1]?.symbol).toBe('coffee-icon')
    })
  })

  if (semver.lt(SVG_CORE_VERSION, ICON_PACKS_STARTING_VERSION)) {
    describe('title', () => {
      test('will not add a title element', () => {
        render(<FontAwesomeIcon icon={faCoffee} />)

        const title = screen.queryByTitle('title')

        expect(title).not.toBeInTheDocument()
      })

      test('will add a title element', () => {
        render(<FontAwesomeIcon icon={faCoffee} title="Coffee" />)

        const title = screen.getByTitle('Coffee')

        expect(title).toBeInTheDocument()
      })

      test('will use an explicit titleId', () => {
        render(
          <FontAwesomeIcon
            icon={faCoffee}
            title="Coffee"
            titleId="coffee-title"
          />,
        )

        const element = screen.getByRole('img', { hidden: true })
        const title = screen.getByTitle('Coffee')

        expect(element).toHaveAttribute(
          'aria-labelledby',
          'svg-inline--fa-title-coffee-title',
        )
        expect(title).toEqual(
          expect.objectContaining({ id: 'svg-inline--fa-title-coffee-title' }),
        )
      })
    })
  }

  describe('swap opacity', () => {
    test('setting swapOpacity prop to true adds fa-swap-opacity class', () => {
      render(<FontAwesomeIcon icon={faCoffee} swapOpacity={true} />)

      const element = screen.getByRole('img', { hidden: true })
      expect(element).toHaveClass('fa-swap-opacity')
    })

    test('setting swapOpacity prop to false after setting it to true results in no fa-swap-opacity class', () => {
      const { rerender } = render(
        <FontAwesomeIcon icon={faCoffee} swapOpacity={true} />,
      )

      const element = screen.getByRole('img', { hidden: true })
      expect(element).toHaveClass('fa-swap-opacity')

      rerender(<FontAwesomeIcon icon={faCoffee} swapOpacity={false} />)
      expect(element).not.toHaveClass('fa-swap-opacity')
    })
  })

  describe('using ref', () => {
    const ref = React.createRef<SVGSVGElement>()

    test('should assign the ref to the SVG element', () => {
      render(<FontAwesomeIcon icon={faCoffee} ref={ref} />)

      expect(ref.current).toBeInstanceOf(SVGSVGElement)
      expect(ref.current).toHaveClass('fa-coffee')
    })

    test('works with callback ref', () => {
      let instance: SVGSVGElement | null = null
      const callbackRef = (el: SVGSVGElement | null) => {
        instance = el
      }

      render(<FontAwesomeIcon icon={faCoffee} ref={callbackRef} />)

      expect(instance).toBeInstanceOf(SVGSVGElement)
      expect(instance).toHaveClass('fa-coffee')
    })
  })

  if (semver.lt(SVG_CORE_VERSION, ICON_PACKS_STARTING_VERSION)) {
    describe('using titleId', () => {
      test('setting titleId prop reflects in the aria-labelledby attribute', () => {
        const titleId = 'foo'
        render(
          <FontAwesomeIcon icon={faCoffee} titleId={titleId} title="Coffee" />,
        )
        const ariaLabelledby = screen
          .getByRole('img', { hidden: true })
          .getAttribute('aria-labelledby')

        expect(ariaLabelledby?.includes(titleId)).toBeTruthy()
      })
    })
  }
})
