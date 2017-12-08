import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '../FontAwesomeIcon'
import React from 'react'
import renderer from 'react-test-renderer'
import log from "../../logger"
jest.mock("../../logger")

const faCoffee = {
  prefix: 'fas',
  iconName: 'coffee',
  icon: [
    640,
    512,
    [],
    "f0f4",
    "M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"
  ]
}

const faCircle = {
  prefix: 'fas',
  iconName: 'circle',
  icon: [
    640,
    512,
    [],
    "f0f4",
    "M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"
  ]
}

fontawesome.library.add(faCoffee, faCircle)

function mount (props = {}) {
  const component = renderer.create(
    <FontAwesomeIcon {...props} />
  )

  return component.toJSON()
}

test('using pack and name', () => {
  const vm = mount({ icon: ['fas', 'coffee'], style: { backgroundColor: 'white' } })

  expect(vm.type).toBe('svg')
  expect(vm.props.className.includes('fa-coffee')).toBeTruthy()
  expect(vm.props['aria-hidden']).toBe("true")
  expect(vm.props['data-icon']).toBe("coffee")
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
  expect(log.mock.calls[0][0]).toEqual(expect.stringContaining('Could not find icon'))
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

describe('using flip', () => {
  test('horizontal', () => {
    const vm = mount({ icon: faCoffee, flip: "horizontal" })

    expect(vm.props.className.includes('fa-flip-horizontal')).toBeTruthy()
  })

  test('vertical', () => {
    const vm = mount({ icon: faCoffee, flip: "vertical" })

    expect(vm.props.className.includes('fa-flip-vertical')).toBeTruthy()
  })

  test('both', () => {
    const vm = mount({ icon: faCoffee, flip: "both" })

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
    const vm = mount({ icon: faCoffee, pull: "right" })

    expect(vm.props.className.includes('fa-pull-right')).toBeTruthy()
  })

  test('left', () => {
    const vm = mount({ icon: faCoffee, pull: "left" })

    expect(vm.props.className.includes('fa-pull-left')).toBeTruthy()
  })
})

test('using pulse', () => {
  const vm = mount({ icon: faCoffee, pulse: true })

  expect(vm.props.className.includes('fa-pulse')).toBeTruthy()
})

describe('using rotation', () => {
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
  ['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].forEach(size => {
    const vm = mount({ icon: faCoffee, size: size })

    expect(vm.props.className.includes(`fa-${size}`)).toBeTruthy()
  })
})

test('using spin', () => {
  const vm = mount({ icon: faCoffee, spin: true })

  expect(vm.props.className.includes('fa-spin')).toBeTruthy()
})

test('using className', () => {
  const vm = mount({ icon: faCoffee, className: 'highlight' })

  expect(vm.props.className.includes('highlight')).toBeTruthy()
})

describe('using transform', () => {
  test('string', () => {
    const vm = mount({ icon: faCoffee, transform: 'grow-40 left-4 rotate-15', style: { backgroundColor: 'white' } })

    expect(vm.props.style).toEqual({ backgroundColor: 'white', transformOrigin: '0.375em 0.5em' })
  })

  test('object', () => {
    const vm = mount({ icon: faCoffee, transform: { flipX: false, flipY: false, rotate: 15, size: 56, x: -4, y: 0 } })

    expect(vm.props.style).toEqual({ transformOrigin: "0.375em 0.5em" })
  })
})

describe('mask', () => {
  test('will add icon', () => {
    const vm = mount({ icon: faCoffee, mask: faCircle })

    expect(vm.children.length).toBe(2)
    expect(vm.children[1].props.hasOwnProperty('clipPath')).toBeTruthy()
  })
})

describe('symbol', () => {
  const spy = jest.spyOn(fontawesome, 'icon')

  afterEach(() => {
    spy.mockClear()
  })

  test("will not create a symbol", () => {
    const vm = mount({ icon: faCoffee })

    expect(spy.mock.calls[0][1].symbol)
      .toBe(false)
  })

  test("will create a symbol", () => {
    const vm = mount({ icon: faCoffee, symbol: 'coffee-icon' })

    expect(spy.mock.calls[0][1].symbol)
      .toBe('coffee-icon')
  })
})
