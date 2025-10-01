import React from 'react'

import { text, counter, parse } from '@fortawesome/fontawesome-svg-core'
import { render, screen } from '@testing-library/react'

import { makeReactConverter } from '../../converter'
import {
  FontAwesomeLayers,
  LayersText,
  LayersCounter,
} from '../FontAwesomeLayers'

// Mock the converter module
jest.mock('../../converter', () => ({
  makeReactConverter: jest.fn((abstractElement, props) =>
    React.createElement('span', {
      ...props,
      'data-testid': 'converted-element',
    }),
  ),
}))

// Mock fontawesome-svg-core
// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('@fortawesome/fontawesome-svg-core', () => ({
  ...jest.requireActual('@fortawesome/fontawesome-svg-core'),
  text: jest.fn(() => ({
    abstract: [{ tag: 'span', attributes: {}, children: [] }],
  })),
  counter: jest.fn(() => ({
    abstract: [{ tag: 'span', attributes: {}, children: [] }],
  })),
  parse: {
    transform: jest.fn(),
  },
}))

describe('FontAwesomeLayers', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders with default classes', () => {
    render(<FontAwesomeLayers>content</FontAwesomeLayers>)

    const element = screen.getByText('content')
    expect(element).toHaveClass('fa-layers', 'fa-fw')
  })

  it('renders with custom className', () => {
    render(
      <FontAwesomeLayers className="custom-class">content</FontAwesomeLayers>,
    )

    const element = screen.getByText('content')
    expect(element).toHaveClass('fa-layers', 'fa-fw', 'custom-class')
  })

  it('renders with size wrapper', () => {
    render(<FontAwesomeLayers size="2x">content</FontAwesomeLayers>)

    // eslint-disable-next-line testing-library/no-node-access
    const wrapper = screen.getByText('content').parentElement
    expect(wrapper).toHaveClass('fa-2x')
  })

  it('passes through HTML attributes', () => {
    render(
      <FontAwesomeLayers data-testid="layers" id="test-id">
        content
      </FontAwesomeLayers>,
    )

    const element = screen.getByTestId('layers')
    expect(element).toHaveAttribute('id', 'test-id')
  })

  it('renders children correctly', () => {
    render(
      <FontAwesomeLayers>
        <span>child1</span>
        <span>child2</span>
      </FontAwesomeLayers>,
    )

    expect(screen.getByText('child1')).toBeInTheDocument()
    expect(screen.getByText('child2')).toBeInTheDocument()
  })
})

describe('LayersText', () => {
  it('renders text component', () => {
    render(<LayersText text="Hello" />)

    expect(screen.getByTestId('converted-element')).toBeInTheDocument()
  })

  it('handles inverse prop', () => {
    render(<LayersText text="Hello" inverse />)

    expect(text).toHaveBeenCalledWith(
      'Hello',
      expect.objectContaining({
        classes: expect.arrayContaining(['fa-inverse']) as string[],
      }),
    )
  })

  it('handles className prop', () => {
    render(<LayersText text="Hello" className="custom-class another-class" />)

    expect(text).toHaveBeenCalledWith(
      'Hello',
      expect.objectContaining({
        classes: expect.arrayContaining([
          'custom-class',
          'another-class',
        ]) as string[],
      }),
    )
  })

  it('handles transform as string', () => {
    render(<LayersText text="Hello" transform="shrink-6" />)

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(parse.transform).toHaveBeenCalledWith('shrink-6')
    expect(text).toHaveBeenCalled()
  })

  it('handles transform as object', () => {
    const transformObj = { size: 0.5 }
    render(<LayersText text="Hello" transform={transformObj} />)

    expect(text).toHaveBeenCalledWith(
      'Hello',
      expect.objectContaining({
        transform: transformObj,
      }),
    )
  })

  it('passes through style and attributes', () => {
    const style = { color: 'red' }
    render(<LayersText text="Hello" style={style} data-testid="text-layer" />)

    expect(makeReactConverter).toHaveBeenCalledWith(
      expect.any(Object),
      expect.objectContaining({
        style,
        'data-testid': 'text-layer',
      }),
    )
  })
})

describe('LayersCounter', () => {
  it('renders counter component with number', () => {
    render(<LayersCounter count={42} />)

    expect(screen.getByTestId('converted-element')).toBeInTheDocument()
  })

  it('renders counter component with string', () => {
    render(<LayersCounter count="99+" />)

    expect(counter).toHaveBeenCalledWith('99+', expect.any(Object))
  })

  it('handles className prop', () => {
    render(<LayersCounter count={5} className="badge red" />)

    expect(counter).toHaveBeenCalledWith(
      5,
      expect.objectContaining({
        classes: ['badge', 'red'],
      }),
    )
  })

  it('handles undefined className', () => {
    render(<LayersCounter count={5} />)

    expect(counter).toHaveBeenCalledWith(
      5,
      expect.objectContaining({
        classes: undefined,
      }),
    )
  })

  it('passes through style and attributes', () => {
    const style = { backgroundColor: 'tomato' }
    render(
      <LayersCounter count={10} style={style} data-testid="counter-layer" />,
    )

    expect(makeReactConverter).toHaveBeenCalledWith(
      expect.any(Object),
      expect.objectContaining({
        style,
        'data-testid': 'counter-layer',
      }),
    )
  })
})
