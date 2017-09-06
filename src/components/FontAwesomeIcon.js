import convert from '../converter'
import fontawesome from '@fortawesome/fontawesome'
import PropTypes from 'prop-types'
import React from 'react'

const packNames = {
  brands: 'fab',
  light: 'fal',
  regular: 'far',
  solid: 'fas'
}

class FontAwesomeIcon extends React.Component {
  _prefix () {
    return packNames[this.props.pack] || this.props.pack
  }

  _iconConfig () {
    return { prefix: this._prefix(), iconName: this.props.name }
  }

  _classList () {
    let classes = {
      'fa-spin': this.props.spin,
      'fa-pulse': this.props.pulse,
      'fa-fw': this.props.fixedWidth,
      'fa-border': this.props.border,
      'fa-li': this.props.listItem,
      'fa-flip-horizontal': this.props.flip === 'horizontal' || this.props.flip === 'both',
      'fa-flip-vertical': this.props.flip === 'vertical' || this.props.flip === 'both',
      [`fa-${this.props.size}`]: this.props.size !== null,
      [`fa-rotate-${this.props.rotation}`]: this.props.rotation !== null,
      [`fa-pull-${this.props.pull}`]: this.props.pull !== null
    }

    return Object.keys(classes)
      .map(key => classes[key] ? key : null)
      .filter(key => key)
  }

  _transformDirectives () {
    return (typeof this.props.transform === 'string') ? fontawesome.parse.transform(this.props.transform) : this.props.transform
  }

  render () {
    const params = Object.assign({},
      this._classList().length > 0 && {classes: this._classList()},
      this._transformDirectives() && {transform: this._transformDirectives()}
    )
    const {abstract} = fontawesome.icon(this.props.iconDefinition || this._iconConfig(), params)
    const convertCurry = convert.bind(null, React.createElement)
    
    return convertCurry(abstract[0])
  }
}

FontAwesomeIcon.propTypes = {
  border: PropTypes.bool,
  
  fixedWidth: PropTypes.bool,

  flip: PropTypes.oneOf(['horizontal', 'vertical', 'both']),

  iconDefinition: PropTypes.object,

  listItem: PropTypes.bool,

  pack: PropTypes.string,

  pull: PropTypes.oneOf(['right', 'left']),

  pulse: PropTypes.bool,

  name: PropTypes.string,

  rotation: PropTypes.oneOf([90, 180, 270]),

  size: PropTypes.oneOf(['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),

  spin: PropTypes.bool,

  transform: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
}

FontAwesomeIcon.defaultProps = {
  border: false,
  fixedWidth: false,
  flip: null,
  iconDefinition: null,
  listItem: false,
  pack: 'fa',
  pull: null,
  pulse: false,
  name: '',
  rotation: null,
  size: null,
  spin: false,
  transform: null
}

export default FontAwesomeIcon