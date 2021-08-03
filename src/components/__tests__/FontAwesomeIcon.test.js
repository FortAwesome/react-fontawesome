import * as fontawesome from '@fortawesome/fontawesome-svg-core'
import log from '../../logger'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCoffee, faCircle, faSpartan } from '../__fixtures__/icons'
import { coreHasFeature, REFERENCE_ICON_USING_STRING, REFERENCE_ICON_BY_STYLE, ICON_ALIASES, mount } from '../__fixtures__/helpers'

jest.mock('../../logger')

beforeEach(() => {
  fontawesome.library.add(faCoffee, faCircle, faSpartan)
})

afterEach(() => {
  fontawesome.library.reset()
})

test('using a FAT icon using array format', () => {
  const vm = mount({
    icon: ['fat', 'spartan']
  })

  expect(vm.type).toBe('svg')
  expect(vm.props.className.includes('fa-spartan')).toBeTruthy()
})

if (coreHasFeature(ICON_ALIASES)) {
  test('find a free-solid-svg-icon with array format', () => {
    fontawesome.library.add(faTimes)
    const vm = mount({ icon: ['fas', 'xmark'] })

    expect(vm.type).toBe('svg')
    expect(vm.props.className.includes('fa-xmark')).toBeTruthy()
  })

  test('find a free-solid-svg-icon that is an alias ', () => {
    fontawesome.library.add(faTimes)
    const vm = mount({ icon: ['fas', 'close'] })

    expect(vm.type).toBe('svg')
    expect(vm.props.className.includes('fa-xmark')).toBeTruthy()
  })
}

if (coreHasFeature(REFERENCE_ICON_USING_STRING)) {
  test('find an icon using string format', () => {
    const vm = mount({ icon: 'fa-coffee' })

    expect(vm.type).toBe('svg')
    expect(vm.props.className.includes('fa-coffee')).toBeTruthy()
  })

  test('find an icon using string format with style', () => {
    const vm = mount({ icon: 'fa-solid fa-coffee' })

    expect(vm.type).toBe('svg')
    expect(vm.props.className.includes('fa-coffee')).toBeTruthy()
  })
}

if (coreHasFeature(REFERENCE_ICON_BY_STYLE)) {
  test('find a THIN icon with array format', () => {
    const vm = mount({ icon: ['thin', 'spartan'] })

    expect(vm.type).toBe('svg')
    expect(vm.props.className.includes('fa-spartan')).toBeTruthy()
  })

  test('find a FA-THIN icon with array format', () => {
    const vm = mount({ icon: ['fa-thin', 'spartan'] })

    expect(vm.type).toBe('svg')
    expect(vm.props.className.includes('fa-spartan')).toBeTruthy()
  })
}

test('using imported object from svg icons package', () => {
  const vm = mount({
    icon: faTimes
  })

  expect(vm.type).toBe('svg')
})

test('using pack and name', () => {
  const vm = mount({
    icon: ['fas', 'coffee'],
    style: { backgroundColor: 'white' }
  })

  expect(vm.type).toBe('svg')
  expect(vm.props.className.includes('fa-coffee')).toBeTruthy()
  expect(vm.props['aria-hidden']).toBe('true')
  expect(vm.props['data-icon']).toBe('coffee')
  expect(vm.props.style).toEqual({ backgroundColor: 'white' })
})

test('using pack common names', () => {
  const vm = mount({ icon: 'coffee' })

  expect(vm.type).toBe('svg')
  expect(vm.props.className.includes('fa-coffee')).toBeTruthy()
})

test('using pack common names not added to library', () => {
  const vm = mount({ icon: 'spinner' })
  expect(vm).toBeNull()
  expect(log.mock.calls.length).toBe(1)
  expect(log.mock.calls[0][0]).toEqual(
    expect.stringContaining('Could not find icon')
  )
})

test('using icon', () => {
  const vm = mount({ icon: faCoffee })

  expect(vm.type).toBe('svg')
  expect(vm.props.className.includes('fa-coffee')).toBeTruthy()
})

test('using border', () => {
  const vm = mount({ icon: faCoffee, border: true })

  expect(vm.props.className.includes('fa-border')).toBeTruthy()
})

test('using fixedWidth', () => {
  const vm = mount({ icon: faCoffee, fixedWidth: true })

  expect(vm.props.className.includes('fa-fw')).toBeTruthy()
})

test('using inverse', () => {
  const vm = mount({ icon: faCoffee, inverse: true })

  expect(vm.props.className.includes('fa-inverse')).toBeTruthy()
})

describe('using flip', () => {
  test('horizontal', () => {
    const vm = mount({ icon: faCoffee, flip: 'horizontal' })

    expect(vm.props.className.includes('fa-flip-horizontal')).toBeTruthy()
  })

  test('vertical', () => {
    const vm = mount({ icon: faCoffee, flip: 'vertical' })

    expect(vm.props.className.includes('fa-flip-vertical')).toBeTruthy()
  })

  test('both', () => {
    const vm = mount({ icon: faCoffee, flip: 'both' })

    expect(vm.props.className.includes('fa-flip-horizontal')).toBeTruthy()
    expect(vm.props.className.includes('fa-flip-vertical')).toBeTruthy()
  })
})

test('using listItem', () => {
  const vm = mount({ icon: faCoffee, listItem: true })

  expect(vm.props.className.includes('fa-li')).toBeTruthy()
})

describe('using pull', () => {
  test('right', () => {
    const vm = mount({ icon: faCoffee, pull: 'right' })

    expect(vm.props.className.includes('fa-pull-right')).toBeTruthy()
  })

  test('left', () => {
    const vm = mount({ icon: faCoffee, pull: 'left' })

    expect(vm.props.className.includes('fa-pull-left')).toBeTruthy()
  })
})

test('using pulse', () => {
  const vm = mount({ icon: faCoffee, pulse: true })

  expect(vm.props.className.includes('fa-pulse')).toBeTruthy()
})

describe('using rotation', () => {
  test('0', () => {
    const vm = mount({ icon: faCoffee, rotation: 0 })

    expect(vm.props.className.includes('fa-rotate-')).toBeFalsy()
  })

  test('90', () => {
    const vm = mount({ icon: faCoffee, rotation: 90 })

    expect(vm.props.className.includes('fa-rotate-90')).toBeTruthy()
  })

  test('180', () => {
    const vm = mount({ icon: faCoffee, rotation: 180 })

    expect(vm.props.className.includes('fa-rotate-180')).toBeTruthy()
  })

  test('270', () => {
    const vm = mount({ icon: faCoffee, rotation: 270 })

    expect(vm.props.className.includes('fa-rotate-270')).toBeTruthy()
  })
})

test('using size', () => {
  ;[
    'lg',
    'xs',
    'sm',
    '1x',
    '2x',
    '3x',
    '4x',
    '5x',
    '6x',
    '7x',
    '8x',
    '9x',
    '10x'
  ].forEach(size => {
    const vm = mount({ icon: faCoffee, size: size })

    expect(vm.props.className.includes(`fa-${size}`)).toBeTruthy()
  })
})

describe('using spin', () => {
  test('setting spin prop to true adds fa-spin class', () => {
    const vm = mount({ icon: faCoffee, spin: true })

    expect(vm.props.className.includes('fa-spin')).toBeTruthy()
  })

  test('setting spin prop to false after setting it to true results in no fa-spin class', () => {
    let vm = mount({ icon: faCoffee, spin: true })
    expect(vm.props.className.includes('fa-spin')).toBeTruthy()
    vm = mount({ icon: faCoffee, spin: false })
    expect(vm.props.className.includes('fa-spin')).toBeFalsy()
  })
})

test('using className', () => {
  const vm = mount({ icon: faCoffee, className: 'highlight' })

  expect(vm.props.className.includes('highlight')).toBeTruthy()
})

describe('using transform', () => {
  test('string', () => {
    const vm = mount({
      icon: faCoffee,
      transform: 'grow-40 left-4 rotate-15',
      style: { backgroundColor: 'white' }
    })

    expect(vm.props.style).toEqual({
      backgroundColor: 'white',
      transformOrigin: '0.375em 0.5em'
    })
  })

  test('object', () => {
    const vm = mount({
      icon: faCoffee,
      transform: {
        flipX: false,
        flipY: false,
        rotate: 15,
        size: 56,
        x: -4,
        y: 0
      }
    })

    expect(vm.props.style).toEqual({ transformOrigin: '0.375em 0.5em' })
  })
})

describe('mask', () => {
  test('will add icon', () => {
    const vm = mount({ icon: faCoffee, mask: faCircle })

    expect(vm.children.length).toBe(2)
    expect(vm.children[1].props.hasOwnProperty('clipPath')).toBeTruthy() // eslint-disable-line no-prototype-builtins
  })
})

describe('symbol', () => {
  const spy = jest.spyOn(fontawesome, 'icon')

  afterEach(() => {
    spy.mockClear()
  })

  test('will not create a symbol', () => {
    mount({ icon: faCoffee })

    expect(spy.mock.calls[0][1].symbol).toBe(false)
  })

  test('will create a symbol', () => {
    mount({ icon: faCoffee, symbol: 'coffee-icon' })

    expect(spy.mock.calls[0][1].symbol).toBe('coffee-icon')
  })
})

describe('title', () => {
  test('will not add a title element', () => {
    const vm = mount({ icon: faCoffee })
    expect(vm.children[0].type).not.toBe('title')
  })

  test('will add a title element', () => {
    const vm = mount({ icon: faCoffee, title: 'Coffee' })
    expect(vm.children[0].type).toBe('title')
    expect(vm.children[0].children[0]).toBe('Coffee')
  })
})

describe('swap opacity', () => {
  test('setting swapOpacity prop to true adds fa-swap-opacity class', () => {
    const vm = mount({ icon: faCoffee, swapOpacity: true })

    expect(vm.props.className.includes('fa-swap-opacity')).toBeTruthy()
  })

  test('setting swapOpacity prop to false after setting it to true results in no fa-swap-opacity class', () => {
    let vm = mount({ icon: faCoffee, swapOpacity: true })
    expect(vm.props.className.includes('fa-swap-opacity')).toBeTruthy()
    vm = mount({ icon: faCoffee, swapOpacity: false })
    expect(vm.props.className.includes('fa-swap-opacity')).toBeFalsy()
  })
})

describe('using ref', () => {
  const node = {}

  test('function', () => {
    const spy = jest.fn(element => element)

    mount(
      { icon: faCoffee, forwardedRef: spy },
      {
        createNodeMock: () => node
      }
    )

    expect(spy.mock.calls.length).toBe(1)
    expect(spy.mock.results[0].value).toBe(node)
  })

  test('callback ref', () => {
    let forwardedRef = null
    const setForwardedRef = element => (forwardedRef = element)

    mount(
      { icon: faCoffee, forwardedRef: setForwardedRef },
      {
        createNodeMock: () => node
      }
    )

    expect(forwardedRef).toBe(node)
  })
})

describe('using titleId', () => {
  test('setting titleId prop reflects in the aria-labelledby attribute', () => {
    const titleId = 'foo'
    const vm = mount({ icon: faCoffee, titleId: titleId, title: 'Coffee' })
    const ariaLabelledby = vm.props['aria-labelledby']
    expect(ariaLabelledby.includes(titleId)).toBeTruthy()
  })
})
