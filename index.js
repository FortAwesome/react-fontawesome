(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@fortawesome/fontawesome-svg-core'), require('prop-types'), require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', '@fortawesome/fontawesome-svg-core', 'prop-types', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["react-fontawesome"] = {}, global.FontAwesome, global.PropTypes, global.React));
})(this, (function (exports, fontawesomeSvgCore, PropTypes, React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function _arrayLikeToArray(r, a) {
    (null == a || a > r.length) && (a = r.length);
    for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
    return n;
  }
  function _arrayWithHoles(r) {
    if (Array.isArray(r)) return r;
  }
  function _arrayWithoutHoles(r) {
    if (Array.isArray(r)) return _arrayLikeToArray(r);
  }
  function _defineProperty(e, r, t) {
    return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
      value: t,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[r] = t, e;
  }
  function _iterableToArray(r) {
    if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
  }
  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _objectWithoutProperties(e, t) {
    if (null == e) return {};
    var o,
      r,
      i = _objectWithoutPropertiesLoose(e, t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
    }
    return i;
  }
  function _objectWithoutPropertiesLoose(r, e) {
    if (null == r) return {};
    var t = {};
    for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r[n];
    }
    return t;
  }
  function _slicedToArray(r, e) {
    return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
  }
  function _toConsumableArray(r) {
    return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
  }
  function _toPrimitive(t, r) {
    if ("object" != typeof t || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
      var i = e.call(t, r || "default");
      if ("object" != typeof i) return i;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
  }
  function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == typeof i ? i : i + "";
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _unsupportedIterableToArray(r, a) {
    if (r) {
      if ("string" == typeof r) return _arrayLikeToArray(r, a);
      var t = {}.toString.call(r).slice(8, -1);
      return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
    }
  }

  var ICON_PACKS_STARTING_VERSION = '7.0.0-alpha1';

  // Try to get version from installed package first, fallback to env var, then default
  var SVG_CORE_VERSION;
  try {
    var svgCorePackageJson = require('@fortawesome/fontawesome-svg-core/package.json');
    SVG_CORE_VERSION = svgCorePackageJson.version;
  } catch (e) {
    // If package.json can't be loaded, try environment variable
    SVG_CORE_VERSION = process.env.FA_VERSION || '7.0.0-alpha8';
  }

  // Get CSS class list from a props object
  function classList(props) {
    var beat = props.beat,
      fade = props.fade,
      beatFade = props.beatFade,
      bounce = props.bounce,
      shake = props.shake,
      flash = props.flash,
      spin = props.spin,
      spinPulse = props.spinPulse,
      spinReverse = props.spinReverse,
      pulse = props.pulse,
      fixedWidth = props.fixedWidth,
      inverse = props.inverse,
      border = props.border,
      listItem = props.listItem,
      flip = props.flip,
      size = props.size,
      rotation = props.rotation,
      pull = props.pull,
      swapOpacity = props.swapOpacity,
      rotateBy = props.rotateBy,
      widthAuto = props.widthAuto;

    // Check if we're using version 7 or later
    var isVersion7OrLater = versionCheckGte(SVG_CORE_VERSION, ICON_PACKS_STARTING_VERSION);

    // map of CSS class names to properties
    var classes = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({
      'fa-beat': beat,
      'fa-fade': fade,
      'fa-beat-fade': beatFade,
      'fa-bounce': bounce,
      'fa-shake': shake,
      'fa-flash': flash,
      'fa-spin': spin,
      'fa-spin-reverse': spinReverse,
      'fa-spin-pulse': spinPulse,
      'fa-pulse': pulse,
      'fa-fw': fixedWidth,
      'fa-inverse': inverse,
      'fa-border': border,
      'fa-li': listItem,
      'fa-flip': flip === true,
      'fa-flip-horizontal': flip === 'horizontal' || flip === 'both',
      'fa-flip-vertical': flip === 'vertical' || flip === 'both'
    }, "fa-".concat(size), typeof size !== 'undefined' && size !== null), "fa-rotate-".concat(rotation), typeof rotation !== 'undefined' && rotation !== null && rotation !== 0), "fa-pull-".concat(pull), typeof pull !== 'undefined' && pull !== null), 'fa-swap-opacity', swapOpacity), 'fa-rotate-by', isVersion7OrLater && rotateBy), 'fa-width-auto', isVersion7OrLater && widthAuto);

    // map over all the keys in the classes object
    // return an array of the keys where the value for the key is not null
    return Object.keys(classes).map(function (key) {
      return classes[key] ? key : null;
    }).filter(function (key) {
      return key;
    });
  }

  // check if verion1 is greater than or equal to version2
  function versionCheckGte(version1, version2) {
    var _version1$split = version1.split('-'),
      _version1$split2 = _slicedToArray(_version1$split, 2),
      v1Base = _version1$split2[0],
      v1PreRelease = _version1$split2[1];
    var _version2$split = version2.split('-'),
      _version2$split2 = _slicedToArray(_version2$split, 2),
      v2Base = _version2$split2[0],
      v2PreRelease = _version2$split2[1];
    var v1Parts = v1Base.split('.');
    var v2Parts = v2Base.split('.');

    // Compare version numbers first
    for (var i = 0; i < Math.max(v1Parts.length, v2Parts.length); i++) {
      var v1Part = v1Parts[i] || '0';
      var v2Part = v2Parts[i] || '0';

      // Compare numeric values
      var v1Num = parseInt(v1Part, 10);
      var v2Num = parseInt(v2Part, 10);
      if (v1Num !== v2Num) {
        return v1Num > v2Num;
      }
    }

    // If numeric values are equal, look for any remaining parts
    // that would make one version greater than the other
    for (var _i = 0; _i < Math.max(v1Parts.length, v2Parts.length); _i++) {
      var _v1Part = v1Parts[_i] || '0';
      var _v2Part = v2Parts[_i] || '0';
      if (_v1Part !== _v2Part) {
        // When numeric values are equal but strings differ,
        // the one without leading zeros is greater
        if (_v1Part.length !== _v2Part.length) {
          return _v1Part.length < _v2Part.length;
        }
      }
    }

    // If version numbers are equal, compare pre-release identifiers
    // A version with a pre-release identifier is less than one without
    if (v1PreRelease && !v2PreRelease) return false;
    if (!v1PreRelease && v2PreRelease) return true;
    return true;
  }

  // Camelize taken from humps
  // humps is copyright © 2012+ Dom Christie
  // Released under the MIT license.

  // Performant way to determine if object coerces to a number
  function _isNumerical(obj) {
    obj = obj - 0;

    // eslint-disable-next-line no-self-compare
    return obj === obj;
  }
  function camelize(string) {
    if (_isNumerical(string)) {
      return string;
    }

    // eslint-disable-next-line no-useless-escape
    string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
      return chr ? chr.toUpperCase() : '';
    });

    // Ensure 1st char is always lowercase
    return string.substr(0, 1).toLowerCase() + string.substr(1);
  }

  var _excluded = ["style"];
  function capitalize(val) {
    return val.charAt(0).toUpperCase() + val.slice(1);
  }
  function styleToObject(style) {
    return style.split(';').map(function (s) {
      return s.trim();
    }).filter(function (s) {
      return s;
    }).reduce(function (acc, pair) {
      var i = pair.indexOf(':');
      var prop = camelize(pair.slice(0, i));
      var value = pair.slice(i + 1).trim();
      prop.startsWith('webkit') ? acc[capitalize(prop)] = value : acc[prop] = value;
      return acc;
    }, {});
  }
  function convert(createElement, element) {
    var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (typeof element === 'string') {
      return element;
    }
    var children = (element.children || []).map(function (child) {
      return convert(createElement, child);
    });

    /* eslint-disable dot-notation */
    var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
      var val = element.attributes[key];
      switch (key) {
        case 'class':
          acc.attrs['className'] = val;
          delete element.attributes['class'];
          break;
        case 'style':
          acc.attrs['style'] = styleToObject(val);
          break;
        default:
          if (key.indexOf('aria-') === 0 || key.indexOf('data-') === 0) {
            acc.attrs[key.toLowerCase()] = val;
          } else {
            acc.attrs[camelize(key)] = val;
          }
      }
      return acc;
    }, {
      attrs: {}
    });
    var _extraProps$style = extraProps.style,
      existingStyle = _extraProps$style === void 0 ? {} : _extraProps$style,
      remaining = _objectWithoutProperties(extraProps, _excluded);
    mixins.attrs['style'] = _objectSpread2(_objectSpread2({}, mixins.attrs['style']), existingStyle);
    /* eslint-enable */

    return createElement.apply(void 0, [element.tag, _objectSpread2(_objectSpread2({}, mixins.attrs), remaining)].concat(_toConsumableArray(children)));
  }

  var PRODUCTION = false;
  try {
    PRODUCTION = process.env.NODE_ENV === 'production';
  } catch (e) {}
  function log () {
    if (!PRODUCTION && console && typeof console.error === 'function') {
      var _console;
      (_console = console).error.apply(_console, arguments);
    }
  }

  // Normalize icon arguments
  function normalizeIconArgs(icon) {
    // this has everything that it needs to be rendered which means it was probably imported
    // directly from an icon svg package
    if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName && icon.icon) {
      return icon;
    }
    if (fontawesomeSvgCore.parse.icon) {
      return fontawesomeSvgCore.parse.icon(icon);
    }

    // if the icon is null, there's nothing to do
    if (icon === null) {
      return null;
    }

    // if the icon is an object and has a prefix and an icon name, return it
    if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName) {
      return icon;
    }

    // if it's an array with length of two
    if (Array.isArray(icon) && icon.length === 2) {
      // use the first item as prefix, second as icon name
      return {
        prefix: icon[0],
        iconName: icon[1]
      };
    }

    // if it's a string, use it as the icon name
    if (typeof icon === 'string') {
      return {
        prefix: 'fas',
        iconName: icon
      };
    }
  }

  // creates an object with a key of key
  // and a value of value
  // if certain conditions are met
  function objectWithKey(key, value) {
    // if the value is a non-empty array
    // or it's not an array but it is truthy
    // then create the object with the key and the value
    // if not, return an empty array
    return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty({}, key, value) : {};
  }

  var defaultProps = {
    border: false,
    className: '',
    mask: null,
    maskId: null,
    // the fixedWidth property has been deprecated as of version 7
    fixedWidth: false,
    inverse: false,
    flip: false,
    icon: null,
    listItem: false,
    pull: null,
    pulse: false,
    rotation: null,
    rotateBy: false,
    size: null,
    spin: false,
    spinPulse: false,
    spinReverse: false,
    beat: false,
    fade: false,
    beatFade: false,
    bounce: false,
    shake: false,
    symbol: false,
    title: '',
    titleId: null,
    transform: null,
    swapOpacity: false,
    widthAuto: false
  };
  var FontAwesomeIcon = /*#__PURE__*/React__default["default"].forwardRef(function (props, ref) {
    var allProps = _objectSpread2(_objectSpread2({}, defaultProps), props);
    var iconArgs = allProps.icon,
      maskArgs = allProps.mask,
      symbol = allProps.symbol,
      className = allProps.className,
      title = allProps.title,
      titleId = allProps.titleId,
      maskId = allProps.maskId;
    var iconLookup = normalizeIconArgs(iconArgs);
    var classes = objectWithKey('classes', [].concat(_toConsumableArray(classList(allProps)), _toConsumableArray((className || '').split(' '))));
    var transform = objectWithKey('transform', typeof allProps.transform === 'string' ? fontawesomeSvgCore.parse.transform(allProps.transform) : allProps.transform);
    var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));
    var renderedIcon = fontawesomeSvgCore.icon(iconLookup, _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, classes), transform), mask), {}, {
      symbol: symbol,
      title: title,
      titleId: titleId,
      maskId: maskId
    }));
    if (!renderedIcon) {
      log('Could not find icon', iconLookup);
      return null;
    }
    var abstract = renderedIcon.abstract;
    var extraProps = {
      ref: ref
    };
    Object.keys(allProps).forEach(function (key) {
      // eslint-disable-next-line no-prototype-builtins
      if (!defaultProps.hasOwnProperty(key)) {
        extraProps[key] = allProps[key];
      }
    });
    return convertCurry(abstract[0], extraProps);
  });
  FontAwesomeIcon.displayName = 'FontAwesomeIcon';
  FontAwesomeIcon.propTypes = {
    beat: PropTypes__default["default"].bool,
    border: PropTypes__default["default"].bool,
    beatFade: PropTypes__default["default"].bool,
    bounce: PropTypes__default["default"].bool,
    className: PropTypes__default["default"].string,
    fade: PropTypes__default["default"].bool,
    flash: PropTypes__default["default"].bool,
    mask: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].array, PropTypes__default["default"].string]),
    maskId: PropTypes__default["default"].string,
    // the fixedWidth property has been deprecated as of version 7
    fixedWidth: PropTypes__default["default"].bool,
    inverse: PropTypes__default["default"].bool,
    flip: PropTypes__default["default"].oneOf([true, false, 'horizontal', 'vertical', 'both']),
    icon: PropTypes__default["default"].oneOfType([PropTypes__default["default"].object, PropTypes__default["default"].array, PropTypes__default["default"].string]),
    listItem: PropTypes__default["default"].bool,
    pull: PropTypes__default["default"].oneOf(['right', 'left']),
    pulse: PropTypes__default["default"].bool,
    rotation: PropTypes__default["default"].oneOf([0, 90, 180, 270]),
    rotateBy: PropTypes__default["default"].bool,
    shake: PropTypes__default["default"].bool,
    size: PropTypes__default["default"].oneOf(['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
    spin: PropTypes__default["default"].bool,
    spinPulse: PropTypes__default["default"].bool,
    spinReverse: PropTypes__default["default"].bool,
    symbol: PropTypes__default["default"].oneOfType([PropTypes__default["default"].bool, PropTypes__default["default"].string]),
    title: PropTypes__default["default"].string,
    titleId: PropTypes__default["default"].string,
    transform: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].object]),
    swapOpacity: PropTypes__default["default"].bool,
    widthAuto: PropTypes__default["default"].bool
  };
  var convertCurry = convert.bind(null, React__default["default"].createElement);

  exports.FontAwesomeIcon = FontAwesomeIcon;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
