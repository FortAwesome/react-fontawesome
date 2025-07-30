import type {
  IconDefinition,
  IconLookup,
  IconName,
  IconPrefix,
} from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import { normalizeIconArgs } from '../normalize-icon-args'

describe('normalize icon args', () => {
  const PREFIX: IconPrefix = 'far'
  const NAME: IconName = 'circle'

  test('handle null', () => {
    expect(normalizeIconArgs(null)).toBeUndefined()
  })

  test('handle IconDefinition', () => {
    const icon: IconDefinition = faCoffee
    expect(normalizeIconArgs(icon)).toStrictEqual(icon)
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

  describe('without parse.icon', () => {
    beforeAll(() => {
      // Mock the faParse.icon function to simulate an environment without it
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      jest.mock('@fortawesome/fontawesome-svg-core', () => ({
        ...jest.requireActual('@fortawesome/fontawesome-svg-core'),
        parse: {
          icon: undefined,
        },
      }))
    })

    afterAll(() => {
      jest.restoreAllMocks()
    })

    test('handle object with prefix and iconName', () => {
      const icon: IconLookup = { prefix: PREFIX, iconName: NAME }
      expect(normalizeIconArgs(icon)).toStrictEqual(icon)
    })

    test('handle array with prefix and iconName', () => {
      const icon: [IconPrefix, IconName] = [PREFIX, NAME]
      expect(normalizeIconArgs(icon)).toStrictEqual({
        prefix: PREFIX,
        iconName: NAME,
      })
    })

    test('handle string with default prefix', () => {
      const DEFAULT_PREFIX: IconPrefix = 'fas'
      expect(normalizeIconArgs(NAME)).toStrictEqual({
        prefix: DEFAULT_PREFIX,
        iconName: NAME,
      })
    })
  })
})
