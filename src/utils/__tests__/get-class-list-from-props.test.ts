import {
  PullProp,
  RotateProp,
  SizeProp,
} from '@fortawesome/fontawesome-svg-core'
import semver from 'semver'

import { FontAwesomeIconProps } from '../../components/FontAwesomeIcon'
import {
  classList,
  ICON_PACKS_STARTING_VERSION,
  SVG_CORE_VERSION,
} from '../get-class-list-from-props'

describe('get class list', () => {
  const props = {
    border: true,
    fixedWidth: true,
    inverse: true,
    listItem: true,
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
  }

  const getPropsClassList = classList(props)
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
    'fa-li',
    'fa-flip',
    'fa-swap-opacity',
  ]

  // Add version 7 specific classes if using version 7 or later
  if (semver.gte(SVG_CORE_VERSION, ICON_PACKS_STARTING_VERSION)) {
    expectedClasses.push('fa-rotate-by', 'fa-width-auto')
  }

  test('the booleans', () => {
    expect(getPropsClassList).toStrictEqual(expectedClasses)
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
    expect(classList({ size })).toStrictEqual([`fa-${size}`])
  })

  test('flip', () => {
    const HORIZONTAL = 'fa-flip-horizontal'
    const VERTICAL = 'fa-flip-vertical'
    const FLIP_ANIMATION = 'fa-flip'

    const horizontalList = classList({
      flip: 'horizontal',
    })

    const verticalList = classList({
      flip: 'vertical',
    })

    const bothList = classList({
      flip: 'both',
    })

    const flipAnimationOnly = classList({
      flip: true,
    })

    expect(horizontalList).toContain(HORIZONTAL)
    expect(verticalList).toContain(VERTICAL)

    expect(bothList.length).toBe(2)
    expect(bothList).toContain(HORIZONTAL)
    expect(bothList).toContain(VERTICAL)

    expect(flipAnimationOnly).toContain(FLIP_ANIMATION)
  })

  test.each<RotateProp>([90, 180, 270])('rotation %s', (rotation) => {
    expect(classList({ rotation })).toStrictEqual([`fa-rotate-${rotation}`])
  })

  test.each<PullProp>(['left', 'right'])('pull %s', (pull) => {
    expect(classList({ pull })).toStrictEqual([`fa-pull-${pull}`])
  })

  test.each<keyof FontAwesomeIconProps>(['pull', 'rotation', 'size'])(
    'when prop "%s" is null',
    (prop) => {
      const NUM_CLASSES = 6

      const props = {
        spin: true,
        pulse: true,
        fixedWidth: true,
        inverse: true,
        border: true,
        listItem: true,
        [prop]: null,
      }

      expect(classList(props).length).toBe(NUM_CLASSES)
      expect(classList(props)).toStrictEqual([
        'fa-spin',
        'fa-pulse',
        'fa-fw',
        'fa-inverse',
        'fa-border',
        'fa-li',
      ])
    },
  )
})
