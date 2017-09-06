import camelCase from 'camelcase'

function capitalize (val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

function styleToObject (style) {
  return style.split(';')
    .map(s => s.trim() )
    .filter(s => s)
    .reduce((acc, pair) => {
      const i = pair.indexOf(':')
      const prop = camelCase(pair.slice(0, i))
      const value = pair.slice(i + 1).trim()
      
      prop.startsWith('webkit') ? acc[capitalize(prop)] = value : acc[prop] = value
      
      return acc
    }, {})
}

function convert (createElement, element) {
  const children = (element.children || []).map(convert.bind(null, createElement))

  if (element.attributes.hasOwnProperty('class')) {
    element.attributes['className'] = element.attributes['class']
    delete element.attributes['class']
  }

  Object.keys(element.attributes).forEach(key => {
    const val = element.attributes[key]

    switch (key) {
      case 'class':
        element.attributes['className'] = val
        delete element.attributes['class']
        break
      case 'style':
        element.attributes['style'] = styleToObject(val)
        break
    }
  })

  return createElement(
    element.tag,
    element.attributes,
    children.length > 1 ? children : children[0]
  )
}

export default convert