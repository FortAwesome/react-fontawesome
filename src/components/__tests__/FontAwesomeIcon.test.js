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
    swapOpacity: undefined
  }

  test('undefined props passed', () => {
    expect(() =>
      mount({ icon: faCoffee, ...UNDEFINED_DEFAULT_PROPS })
    ).not.toThrow(TypeError)
  })
})

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

  test('animation', () => {
    const vm = mount({ icon: faCoffee, flip: true })

    expect(vm.props.className.includes('fa-flip')).toBeTruthy()
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
    '10x'
  ].forEach(size => {
    const vm = mount({ icon: faCoffee, size: size })

    expect(vm.props.className.includes(`fa-${size}`)).toBeTruthy()
  })
})

describe('using beat', () => {
  test('setting beat prop to true adds fa-beat class', () => {
    const vm = mount({ icon: faCoffee, beat: true })

    expect(vm.props.className.includes('fa-beat')).toBeTruthy()
  })

  test('setting beat prop to false after setting it to true results in no fa-beat class', () => {
    let vm = mount({ icon: faCoffee, beat: true })
    expect(vm.props.className.includes('fa-beat')).toBeTruthy()
    vm = mount({ icon: faCoffee, beat: false })
    expect(vm.props.className.includes('fa-beat')).toBeFalsy()
  })
})

describe('using fade', () => {
  test('setting fade prop to true adds fa-fade class', () => {
    const vm = mount({ icon: faCoffee, fade: true })

    expect(vm.props.className.includes('fa-fade')).toBeTruthy()
  })

  test('setting fade prop to false after setting it to true results in no fa-fade class', () => {
    let vm = mount({ icon: faCoffee, fade: true })
    expect(vm.props.className.includes('fa-fade')).toBeTruthy()
    vm = mount({ icon: faCoffee, fade: false })
    expect(vm.props.className.includes('fa-fade')).toBeFalsy()
  })
})

describe('using beatFade', () => {
  test('setting beatFade prop to true adds fa-beat-fade class', () => {
    const vm = mount({ icon: faCoffee, beatFade: true })

    expect(vm.props.className.includes('fa-beat-fade')).toBeTruthy()
  })

  test('setting beatFade prop to false after setting it to true results in no fa-beat-fade class', () => {
    let vm = mount({ icon: faCoffee, beatFade: true })
    expect(vm.props.className.includes('fa-beat-fade')).toBeTruthy()
    vm = mount({ icon: faCoffee, beatFade: false })
    expect(vm.props.className.includes('fa-beat-fade')).toBeFalsy()
  })
})

describe('using bounce', () => {
  test('setting bounce prop to true adds fa-bounce class', () => {
    const vm = mount({ icon: faCoffee, bounce: true })

    expect(vm.props.className.includes('fa-bounce')).toBeTruthy()
  })

  test('setting bounce prop to false after setting it to true results in no fa-bounce class', () => {
    let vm = mount({ icon: faCoffee, bounce: true })
    expect(vm.props.className.includes('fa-bounce')).toBeTruthy()
    vm = mount({ icon: faCoffee, bounce: false })
    expect(vm.props.className.includes('fa-bounce')).toBeFalsy()
  })
})

describe('using shake', () => {
  test('setting shake prop to true adds fa-shake class', () => {
    const vm = mount({ icon: faCoffee, shake: true })

    expect(vm.props.className.includes('fa-shake')).toBeTruthy()
  })

  test('setting shake prop to false after setting it to true results in no fa-shake class', () => {
    let vm = mount({ icon: faCoffee, shake: true })
    expect(vm.props.className.includes('fa-shake')).toBeTruthy()
    vm = mount({ icon: faCoffee, shake: false })
    expect(vm.props.className.includes('fa-shake')).toBeFalsy()
  })
})

describe('using spin', () => {
  test('setting spin prop to true adds fa-spin class', () => {
    const vm = mount({ icon: faCoffee, spin: true })

    expect(vm.props.className.includes('fa-spin')).toBeTruthy()
  })

  test('setting spinReverse and spinPulse prop to true adds fa-spin-reverse and fa-spin-pulse class', () => {
    const vm = mount({ icon: faCoffee, spinReverse: true, spinPulse: true })

    expect(vm.props.className.includes('fa-spin-reverse')).toBeTruthy()
    expect(vm.props.className.includes('fa-spin-pulse')).toBeTruthy()
  })

  test('setting spin prop to false after setting it to true results in no fa-spin class', () => {
    let vm = mount({ icon: faCoffee, spin: true })
    expect(vm.props.className.includes('fa-spin')).toBeTruthy()
    vm = mount({ icon: faCoffee, spin: false })
    expect(vm.props.className.includes('fa-spin')).toBeFalsy()
  })

  test('setting spinPulse prop to false after setting it to true results in no fa-spin-pulse class', () => {
    let vm = mount({ icon: faCoffee, spinPulse: true })
    expect(vm.props.className.includes('fa-spin-pulse')).toBeTruthy()
    vm = mount({ icon: faCoffee, spinPulse: false })
    expect(vm.props.className.includes('fa-spin-pulse')).toBeFalsy()
  })

  test('setting spinReverse prop to false after setting it to true results in no fa-spin-reverse class', () => {
    let vm = mount({ icon: faCoffee, spinReverse: true })
    expect(vm.props.className.includes('fa-spin-reverse')).toBeTruthy()
    vm = mount({ icon: faCoffee, spinReverse: false })
    expect(vm.props.className.includes('fa-spin-reverse')).toBeFalsy()
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

  test('will use maskId', () => {
    const vm = mount({ icon: faCoffee, mask: faCircle, maskId: 'circle-mask' })

    expect(vm.children[0].children[0].props.id).toEqual('clip-circle-mask')
    expect(vm.children[0].children[1].props.id).toEqual('mask-circle-mask')
    expect(vm.children[1].props.mask).toEqual('url(#mask-circle-mask)')
    expect(vm.children[1].props.clipPath).toEqual('url(#clip-circle-mask)')
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

  test('will use an explicit titleId', () => {
    const vm = mount({ icon: faCoffee, title: 'Coffee', titleId: 'coffee-title' })

    expect(vm.props['aria-labelledby']).toBe('svg-inline--fa-title-coffee-title')
    expect(vm.children[0].props).toEqual(
      expect.objectContaining({ id: 'svg-inline--fa-title-coffee-title' })
    )
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
      { icon: faCoffee, ref: spy },
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
      { icon: faCoffee, ref: setForwardedRef },
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
