import normalizeIconArgs from '../normalize-icon-args'

describe('normalize icon args', () => {
  const PREFIX = 'far'
  const FALPREFIX = 'fal'
  const NAME = 'circle'
  const FULLNAME = 'fal-circle'

  test('handle null', () => {
    expect(normalizeIconArgs(null)).toBeNull()
  })

  test('handle object', () => {
    const icon = {
      prefix: 'far',
      iconName: 'circle'
    }
    expect(normalizeIconArgs(icon)).toStrictEqual(icon)
  })

  test('handle array', () => {
    const icon = [PREFIX, NAME]
    expect(normalizeIconArgs(icon)).toStrictEqual({
      prefix: PREFIX,
      iconName: NAME
    })
  })

  test('handle string', () => {
    const DEFAULT_PREFIX = 'fas'
    expect(normalizeIconArgs(NAME)).toStrictEqual({
      prefix: DEFAULT_PREFIX,
      iconName: NAME
    })
  })
  
  
  test('handle prefixed string', () => {
    const DEFAULT_PREFIX = 'fas'
    expect(normalizeIconArgs(FULLNAME)).toStrictEqual({
      prefix: FALPREFIX,
      iconName: NAME
    })
  })
})
