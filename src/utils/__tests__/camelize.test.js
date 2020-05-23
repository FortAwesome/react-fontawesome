import camelize from '../camelize'

describe('camelize', () => {
  test('numerical values return same value', () => {
    const numerical = 999
    expect(camelize(numerical)).toBe(numerical)
  })

  test('first char is always lowercase', () => {
    expect(camelize('f-a')).toBe('fA')
    expect(camelize('F-a')).toBe('fA')
  })

  test('multiple humps', () => {
    expect(camelize('fa-coffee')).toBe('faCoffee')
    expect(camelize('fa-fake-icon')).toBe('faFakeIcon')
    expect(camelize('fa-fake-icon-longer')).toBe('faFakeIconLonger')
  })
})
