import { createGradientStops } from '../gradients'

describe('gradient utilities', () => {
  describe('createGradientStops', () => {
    it('should create a stop element with the correct attributes', () => {
      const stop = { offset: '50%', color: '#FF0000', opacity: 0.5 }
      const element = createGradientStops(stop, 0)

      expect(element.type).toBe('stop')
      expect(element.key).toBe('0-50%')
      expect(element.props).toEqual({
        offset: '50%',
        stopColor: '#FF0000',
        stopOpacity: 0.5,
      })
    })

    it('should omit the stopOpacity attribute if opacity is not provided', () => {
      const stop = { offset: '75%', color: '#00FF00' }
      const element = createGradientStops(stop, 1)

      expect(element.type).toBe('stop')
      expect(element.key).toBe('1-75%')
      expect(element.props).toEqual({
        offset: '75%',
        stopColor: '#00FF00',
      })
    })
  })
})
