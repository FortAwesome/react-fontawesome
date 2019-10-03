import getClassList from '../get-class-list-from-props'

describe('get class list', () => {
  test('test the booleans', () => {
    // the six we're testing plus the three defaults
    const NUM_CLASSES = 6

    const props = {
      spin: true,
      pulse: true,
      fixedWidth: true,
      inverse: true,
      border: true,
      listItem: true
    }

    const classList = getClassList(props)
    expect(classList.length).toBe(NUM_CLASSES)
    expect(classList).toStrictEqual([
      'fa-spin',
      'fa-pulse',
      'fa-fw',
      'fa-inverse',
      'fa-border',
      'fa-li'
    ])
  })

  test('flip', () => {
    const HORIZONTAL = 'fa-flip-horizontal'
    const VERTICAL = 'fa-flip-vertical'

    const horizontalList = getClassList({
      flip: 'horizontal'
    })

    const verticalList = getClassList({
      flip: 'vertical'
    })

    const bothList = getClassList({
      flip: 'both'
    })

    expect(horizontalList).toContain(HORIZONTAL)
    expect(verticalList).toContain(VERTICAL)

    expect(bothList.length).toBe(2)
    expect(bothList).toContain(HORIZONTAL)
    expect(bothList).toContain(VERTICAL)
  })

  test('size', () => {
    function testSize(size) {
      expect(getClassList({ size })).toStrictEqual([`fa-${size}`])
    }

    testSize('xs')
  })

  test('rotation', () => {
    function testRotation(rotation) {
      expect(getClassList({ rotation })).toStrictEqual([
        `fa-rotate-${rotation}`
      ])
    }

    testRotation(90)
    testRotation(180)
    testRotation(270)
  })

  test('pull', () => {
    function testPull(pull) {
      expect(getClassList({ pull })).toStrictEqual([`fa-pull-${pull}`])
    }

    testPull('left')
    testPull('right')
  })

  describe('when some props are null', () => {
    function testNulls(prop) {
      const NUM_CLASSES = 6

      const props = {
        spin: true,
        pulse: true,
        fixedWidth: true,
        inverse: true,
        border: true,
        listItem: true,
        [prop]: null
      }

      const classList = getClassList(props)
      expect(classList.length).toBe(NUM_CLASSES)
      expect(classList).toStrictEqual([
        'fa-spin',
        'fa-pulse',
        'fa-fw',
        'fa-inverse',
        'fa-border',
        'fa-li'
      ])
    }

    test('pull', () => {
      testNulls('pull')
    })

    test('rotation', () => {
      testNulls('rotation')
    })

    test('size', () => {
      testNulls('size')
    })
  })
})
