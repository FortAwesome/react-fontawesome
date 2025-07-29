import type {
  IconLookup,
  IconName,
  IconPrefix,
} from '@fortawesome/fontawesome-svg-core'

import { normalizeIconArgs } from '../normalize-icon-args'

describe('normalize icon args', () => {
  const PREFIX: IconPrefix = 'far'
  const NAME: IconName = 'circle'

  test('handle null', () => {
    expect(normalizeIconArgs(null)).toBeUndefined()
  })

  test('handle object', () => {
    const icon: IconLookup = {
      prefix: 'far',
      iconName: 'circle',
    }
    expect(normalizeIconArgs(icon)).toStrictEqual(icon)
  })

  test('handle array', () => {
    const icon: [IconPrefix, IconName] = [PREFIX, NAME]
    expect(normalizeIconArgs(icon)).toStrictEqual({
      prefix: PREFIX,
      iconName: NAME,
    })
  })

  test('handle string', () => {
    const DEFAULT_PREFIX: IconPrefix = 'fas'
    expect(normalizeIconArgs(NAME)).toStrictEqual({
      prefix: DEFAULT_PREFIX,
      iconName: NAME,
    })
  })
})
