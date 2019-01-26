import objectWithKey from '../object-with-key'

describe('object with key', () => {
  const KEY = 'my-key'

  test('value is array length greater than 1', () => {
    const VALUE = [1]
    expect(objectWithKey(KEY, [1])).toStrictEqual({
      [KEY]: VALUE
    })
  })

  test('value array empty', () => {
    expect(objectWithKey(KEY, [])).toStrictEqual({})
  })

  test('value is not array', () => {
    const VALUE = 'value'
    expect(objectWithKey(KEY, VALUE)).toStrictEqual({
      [KEY]: VALUE
    })
  })

  test('value not truthy', () => {
    expect(objectWithKey(KEY)).toStrictEqual({})
    expect(objectWithKey(KEY, null)).toStrictEqual({})
  })
})
