import {
  config,
  PullProp,
  RotateProp,
  SizeProp,
} from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIconProps } from '../../types/icon-props'
import { IS_VERSION_7_OR_LATER } from '../constants'
import { getClassListFromProps } from '../get-class-list-from-props'

describe('get class list', () => {
  const props = {
    border: true,
    fixedWidth: true,
    inverse: true,
    pulse: true,
    spin: true,
    spinPulse: true,
    spinReverse: true,
    beat: true,
    fade: true,
    beatFade: true,
    bounce: true,
    shake: true,
    swapOpacity: true,
    flip: true,
    rotateBy: true,
    widthAuto: true,
  } as FontAwesomeIconProps

  const classList = getClassListFromProps(props)
  const expectedClasses = [
    'fa-beat',
    'fa-fade',
    'fa-beat-fade',
    'fa-bounce',
    'fa-shake',
    'fa-spin',
    'fa-spin-reverse',
    'fa-spin-pulse',
    'fa-pulse',
    'fa-fw',
    'fa-inverse',
    'fa-border',
    'fa-flip',
    'fa-swap-opacity',
  ]

  // Add version 7 specific classes if using version 7 or later
  if (IS_VERSION_7_OR_LATER) {
    expectedClasses.push('fa-rotate-by', 'fa-width-auto')
  }

  test('the booleans', () => {
    expect(classList).toStrictEqual(expectedClasses)
  })

  test('className prop', () => {
    const className = 'custom-class'
    const propsWithClassName = { ...props, className }
    expect(getClassListFromProps(propsWithClassName)).toContain(className)
  })

  test.each<SizeProp>([
    'xs',
    'sm',
    'lg',
    'xl',
    '2xl',
    '1x',
    '2x',
    '3x',
    '4x',
    '5x',
    '6x',
    '7x',
    '8x',
    '9x',
    '10x',
  ])('size %s', (size) => {
    expect(
      getClassListFromProps({ size } as FontAwesomeIconProps),
    ).toStrictEqual([`fa-${size}`])
  })

  test('flip', () => {
    const HORIZONTAL = 'fa-flip-horizontal'
    const VERTICAL = 'fa-flip-vertical'
    const FLIP_ANIMATION = 'fa-flip'

    const horizontalList = getClassListFromProps({
      flip: 'horizontal',
    } as FontAwesomeIconProps)

    const verticalList = getClassListFromProps({
      flip: 'vertical',
    } as FontAwesomeIconProps)

    const bothList = getClassListFromProps({
      flip: 'both',
    } as FontAwesomeIconProps)

    const flipAnimationOnly = getClassListFromProps({
      flip: true,
    } as FontAwesomeIconProps)

    expect(horizontalList).toContain(HORIZONTAL)
    expect(verticalList).toContain(VERTICAL)

    expect(bothList.length).toBe(2)
    expect(bothList).toContain(HORIZONTAL)
    expect(bothList).toContain(VERTICAL)

    expect(flipAnimationOnly).toContain(FLIP_ANIMATION)
  })

  test.each<RotateProp>([90, 180, 270])('rotation %s', (rotation) => {
    expect(
      getClassListFromProps({ rotation } as FontAwesomeIconProps),
    ).toStrictEqual([`fa-rotate-${rotation}`])
  })

  test.each<PullProp>(['left', 'right'])('pull %s', (pull) => {
    expect(
      getClassListFromProps({ pull } as FontAwesomeIconProps),
    ).toStrictEqual([`fa-pull-${pull}`])
  })

  test.each<keyof FontAwesomeIconProps>(['pull', 'rotation', 'size'])(
    'when prop "%s" is null',
    (prop) => {
      const NUM_CLASSES = 5

      const props = {
        spin: true,
        pulse: true,
        fixedWidth: true,
        inverse: true,
        border: true,
        [prop]: null,
      } as unknown as FontAwesomeIconProps

      expect(getClassListFromProps(props).length).toBe(NUM_CLASSES)
      expect(getClassListFromProps(props)).toStrictEqual([
        'fa-spin',
        'fa-pulse',
        'fa-fw',
        'fa-inverse',
        'fa-border',
      ])
    },
  )

  describe('with custom cssPrefix configured', () => {
    const customPrefix = 'custom-prefix'

    beforeEach(() => {
      config.cssPrefix = customPrefix
    })

    it('should use custom cssPrefix for all classes', () => {
      const classList = getClassListFromProps(props)
      const classes = expectedClasses.map((cls) =>
        cls.replace('fa-', `${customPrefix}-`),
      )
      expect(classList).toStrictEqual(classes)
    })
  })
})
