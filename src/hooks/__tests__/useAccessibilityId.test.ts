import { renderHook } from '@testing-library/react'

import { useAccessibilityId } from '../useAccessibilityId'

// Mock React's useId hook so we can validate generated IDs
const mockUseId = jest.fn()
jest.mock('react', () => ({
  ...jest.requireActual<typeof import('react')>('react'),
  useId: () => mockUseId() as string,
}))

describe('useAccessibilityId', () => {
  const mockGeneratedId = 'generated-id-123'

  beforeEach(() => {
    jest.clearAllMocks()
    mockUseId.mockReturnValue(mockGeneratedId)
  })

  describe('when id is provided', () => {
    it('should return the provided id', () => {
      const providedId = 'my-custom-id'
      const { result } = renderHook(() => useAccessibilityId(providedId, true))

      expect(result.current).toBe(providedId)
    })

    it('should return the provided id even when hasAccessibleProps is false', () => {
      const providedId = 'my-custom-id'
      const { result } = renderHook(() => useAccessibilityId(providedId, false))

      expect(result.current).toBe(providedId)
    })

    it('should return the provided id even when hasAccessibleProps is undefined', () => {
      const providedId = 'my-custom-id'
      const { result } = renderHook(() => useAccessibilityId(providedId))

      expect(result.current).toBe(providedId)
    })

    it('should prefer provided id over generated id', () => {
      const providedId = 'my-custom-id'
      const { result } = renderHook(() => useAccessibilityId(providedId, true))

      expect(result.current).toBe(providedId)
      expect(result.current).not.toBe(mockGeneratedId)
    })
  })

  describe('when id is not provided', () => {
    it('should return generated id when hasAccessibleProps is true', () => {
      const { result } = renderHook(() => useAccessibilityId(undefined, true))

      expect(result.current).toBe(mockGeneratedId)
      expect(mockUseId).toHaveBeenCalled()
    })

    it('should return undefined when hasAccessibleProps is false', () => {
      const { result } = renderHook(() => useAccessibilityId(undefined, false))

      expect(result.current).toBeUndefined()
    })

    it('should return undefined when hasAccessibleProps is undefined', () => {
      const { result } = renderHook(() => useAccessibilityId())

      expect(result.current).toBeUndefined()
    })

    it('should return undefined when both parameters are undefined', () => {
      const { result } = renderHook(() => useAccessibilityId())

      expect(result.current).toBeUndefined()
    })
  })

  describe('when id is empty string', () => {
    it('should return generated id when hasAccessibleProps is true', () => {
      const { result } = renderHook(() => useAccessibilityId('', true))

      expect(result.current).toBe(mockGeneratedId)
    })

    it('should return undefined when hasAccessibleProps is false', () => {
      const { result } = renderHook(() => useAccessibilityId('', false))

      expect(result.current).toBeUndefined()
    })
  })

  describe('when id is null', () => {
    it('should return generated id when hasAccessibleProps is true', () => {
      const { result } = renderHook(() =>
        useAccessibilityId(null as unknown as string, true),
      )

      expect(result.current).toBe(mockGeneratedId)
    })

    it('should return undefined when hasAccessibleProps is false', () => {
      const { result } = renderHook(() =>
        useAccessibilityId(null as unknown as string, false),
      )

      expect(result.current).toBeUndefined()
    })
  })

  describe('stability and consistency', () => {
    it('should return the same id across multiple renders when id is provided', () => {
      const providedId = 'stable-id'
      const { result, rerender } = renderHook(() =>
        useAccessibilityId(providedId, true),
      )

      const firstResult = result.current
      rerender()
      const secondResult = result.current

      expect(firstResult).toBe(secondResult)
      expect(firstResult).toBe(providedId)
    })

    it('should return the same generated id across multiple renders', () => {
      const { result, rerender } = renderHook(() =>
        useAccessibilityId(undefined, true),
      )

      const firstResult = result.current
      rerender()
      const secondResult = result.current

      expect(firstResult).toBe(secondResult)
      expect(firstResult).toBe(mockGeneratedId)
    })

    it('should maintain consistency when hasAccessibleProps changes', () => {
      const providedId = 'consistent-id'
      const { result, rerender } = renderHook(
        ({ hasAccessibleProps }) =>
          useAccessibilityId(providedId, hasAccessibleProps),
        {
          initialProps: { hasAccessibleProps: true },
        },
      )

      const firstResult = result.current
      rerender({ hasAccessibleProps: false })
      const secondResult = result.current

      expect(firstResult).toBe(secondResult)
      expect(firstResult).toBe(providedId)
    })
  })

  describe('React useId integration', () => {
    it('should call React useId on every render', () => {
      const { rerender } = renderHook(() => useAccessibilityId(undefined, true))

      expect(mockUseId).toHaveBeenCalledTimes(1)

      rerender()
      expect(mockUseId).toHaveBeenCalledTimes(2)
    })

    it('should call React useId even when not using the generated id', () => {
      renderHook(() => useAccessibilityId('provided-id', false))

      expect(mockUseId).toHaveBeenCalled()
    })

    it('should handle different generated ids from React useId', () => {
      const firstId = 'first-generated-id'
      const secondId = 'second-generated-id'

      mockUseId.mockReturnValueOnce(firstId)
      const { result: firstResult } = renderHook(() =>
        useAccessibilityId(undefined, true),
      )

      mockUseId.mockReturnValueOnce(secondId)
      const { result: secondResult } = renderHook(() =>
        useAccessibilityId(undefined, true),
      )

      expect(firstResult.current).toBe(firstId)
      expect(secondResult.current).toBe(secondId)
    })
  })

  describe('edge cases', () => {
    it('should handle whitespace-only id strings', () => {
      const whitespaceId = '   '
      const { result } = renderHook(() =>
        useAccessibilityId(whitespaceId, true),
      )

      expect(result.current).toBe(whitespaceId)
    })

    it('should handle numeric string ids', () => {
      const numericId = '123'
      const { result } = renderHook(() => useAccessibilityId(numericId, true))

      expect(result.current).toBe(numericId)
    })

    it('should handle special character ids', () => {
      const specialId = 'id-with_special.chars'
      const { result } = renderHook(() => useAccessibilityId(specialId, true))

      expect(result.current).toBe(specialId)
    })
  })
})
