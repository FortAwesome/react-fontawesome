import React from 'react'

import { GradientStop } from '../types/gradients'

export const createGradientStops = (stop: GradientStop, index: number) =>
  React.createElement('stop', {
    key: `${index}-${stop.offset}`,
    offset: stop.offset,
    stopColor: stop.color,
    ...(stop.opacity !== undefined && { stopOpacity: stop.opacity }),
  })
