// Get CSS class list from a props object
export default function classList(props) {
  const {
    spin,
    pulse,
    fixedWidth,
    inverse,
    border,
    listItem,
    flip,
    size,
    rotation,
    pull
  } = props

  // map of CSS class names to properties
  let classes = {
    'fa-spin': spin,
    'fa-pulse': pulse,
    'fa-fw': fixedWidth,
    'fa-inverse': inverse,
    'fa-border': border,
    'fa-li': listItem,
    'fa-flip-horizontal': flip === 'horizontal' || flip === 'both',
    'fa-flip-vertical': flip === 'vertical' || flip === 'both',
    [`fa-${size}`]: typeof size !== 'undefined',
    [`fa-rotate-${rotation}`]: typeof rotation !== 'undefined',
    [`fa-pull-${pull}`]: typeof pull !== 'undefined',
    'fa-swap-opacity': props.swapOpacity
  }

  // map over all the keys in the classes object
  // return an array of the keys where the value for the key is not null
  return Object.keys(classes)
    .map(key => (classes[key] ? key : null))
    .filter(key => key)
}
