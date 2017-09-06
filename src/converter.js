function convert (createElement, element) {
  const children = (element.children || []).map(convert.bind(null, createElement))

  return createElement(
    element.tag,
    element.attributes,
    children.length > 1 ? children : children[0]
  )
}

export default convert