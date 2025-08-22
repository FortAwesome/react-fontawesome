import { useId } from 'react'

/**
 * A custom hook to generate a unique ID for accessibility.
 * It uses React's `useId` hook so that the ID remains stable across both server and client renders.
 *
 * @param id - The provided ID from the component props, if provided.
 * @param hasAccessibleProps - Whether the component has the relevant prop that requires an accessible ID.
 * @returns The unique ID for accessibility.
 */
export const useAccessibilityId = (
  id?: string,
  hasAccessibleProps?: boolean,
): string | undefined => {
  const generatedId = useId()

  return id || (hasAccessibleProps ? generatedId : undefined)
}
