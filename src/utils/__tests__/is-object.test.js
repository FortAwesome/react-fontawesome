import isObject from '../is-object'

describe('object', () => {
  test('actual object', () => {
    const obj = {a: 1}
    expect(isObject(obj)).toBe(true)
  })

  test('not an array', () => {
    const arr = [1]
    expect(isObject(arr)).toBe(false)
  })
})
