'use client'

import { config } from '@fortawesome/fontawesome-svg-core'

interface CustomPrefixProviderProps {
  customPrefix: string
}

export const CustomPrefixProvider = ({
  customPrefix,
}: CustomPrefixProviderProps): null => {
  config.cssPrefix = customPrefix

  return null
}
