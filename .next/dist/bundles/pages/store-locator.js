module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 104);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("classnames/bind");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = withTheme;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__themeContext__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function withTheme(Component) {
  // ...and returns another component...
  return function ThemedComponent(props) {
    // ... and renders the wrapped component with the context theme!
    // Notice that we pass through any additional props as well
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__themeContext__["a" /* ThemeContext */].Consumer, null, function (theme) {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, _extends({}, props, {
        inverted: theme
      }));
    });
  };
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export XXL */
/* unused harmony export XL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MD; });
/* unused harmony export SM */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ML; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_responsive__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_responsive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_responsive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var XXL = function XXL(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react_responsive___default.a, _extends({}, props, {
    minWidth: 1440,
    values: {
      deviceWidth: 1600
    }
  }));
};
var XL = function XL(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react_responsive___default.a, _extends({}, props, {
    minWidth: 1240,
    values: {
      deviceWidth: 1400
    }
  }));
};
var LG = function LG(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react_responsive___default.a, _extends({}, props, {
    minWidth: 1024,
    values: {
      deviceWidth: 1600
    }
  }));
};
var MD = function MD(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react_responsive___default.a, _extends({}, props, {
    minWidth: 768,
    values: {
      deviceWidth: 768
    }
  }));
};
var SM = function SM(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react_responsive___default.a, _extends({}, props, {
    minWidth: 576,
    values: {
      deviceWidth: 1600
    }
  }));
};
var MB = function MB(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react_responsive___default.a, _extends({}, props, {
    maxWidth: 767,
    values: {
      deviceWidth: 1600
    }
  }));
};
var ML = function ML(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react_responsive___default.a, _extends({}, props, {
    maxWidth: 1023,
    values: {
      deviceWidth: 1600
    }
  }));
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IconButton__ = __webpack_require__(18);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__IconButton__["a" /* default */]);

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_querystring__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_querystring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_querystring__);

var defaults = {
  fit: 'crop',
  auto: ['compress'],
  wm: 'jpg'
};

var imgix = function imgix(imagePath, params) {
  return "".concat(imagePath, "?").concat(__WEBPACK_IMPORTED_MODULE_0_querystring___default.a.stringify(Object.assign({}, defaults, params)));
};

/* harmony default export */ __webpack_exports__["a"] = (imgix);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export theme */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeContext; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var theme = {
  inverted: true,
  menuIsOpen: false
};
var ThemeContext = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext(theme.inverted);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-addons-css-transition-group");

/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_scss__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__button_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Global_withTheme__ = __webpack_require__(3);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }






var cx = __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_3__button_scss___default.a);
var btnTransform = {
  x: [-50, 50],
  y: [-50, 50]
};

var Button = function Button(_ref) {
  var className = _ref.className,
      type = _ref.type,
      title = _ref.title,
      role = _ref.role,
      navLink = _ref.navLink,
      active = _ref.active,
      link = _ref.link,
      forced = _ref.forced,
      other = _objectWithoutProperties(_ref, ["className", "type", "title", "role", "navLink", "active", "link", "forced"]);

  var btnClasses = cx(className, __WEBPACK_IMPORTED_MODULE_3__button_scss___default.a.extrusion, {
    active: active,
    inverted: !forced,
    navLink: navLink
  });
  var commonProps = {
    className: btnClasses,
    "data-min": true
  };
  var child = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    "data-text": title,
    className: __WEBPACK_IMPORTED_MODULE_3__button_scss___default.a.outer
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, title));
  return !link ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", _extends({}, other, commonProps), child) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", _extends({}, other, commonProps, {
    role: role
  }), child);
};

Button.defaultProps = {
  disabled: false,
  type: 'button'
};
/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(6);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: external "classnames/bind"
var bind_ = __webpack_require__(1);
var bind__default = /*#__PURE__*/__webpack_require__.n(bind_);

// EXTERNAL MODULE: ./components/IconButton/iconButton.scss
var iconButton = __webpack_require__(28);
var iconButton_default = /*#__PURE__*/__webpack_require__.n(iconButton);

// CONCATENATED MODULE: ./components/utils/getMousePosition.js
function getMousePosition(e) {
  var posx = 0,
      posy = 0;
  if (!e) var e = window.event;

  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  return {
    x: posx,
    y: posy
  };
}
// CONCATENATED MODULE: ./components/Global/mouseTranslate.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



function mouseTranslate(WrappedComponent) {
  var btnRanges = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    x: [-20, 20],
    y: [-20, 20]
  };
  return (
    /*#__PURE__*/
    function (_Component) {
      _inherits(MouseTranslate, _Component);

      function MouseTranslate() {
        var _this;

        _classCallCheck(this, MouseTranslate);

        _this = _possibleConstructorReturn(this, (MouseTranslate.__proto__ || Object.getPrototypeOf(MouseTranslate)).call(this));
        Object.defineProperty(_assertThisInitialized(_this), "triggerTouch", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: function value() {
            _this.isTouch = true;
          }
        });
        Object.defineProperty(_assertThisInitialized(_this), "position3dFunction", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: function value() {
            if (_this.isTouch) {
              return;
            }

            if (typeof _this.relMousePos !== 'undefined') {
              var bounds = _this.el.getBoundingClientRect();

              _this.setState({
                btnTransform: getTransform(_this.relMousePos, bounds, btnRanges)
              });
            }
          }
        });
        Object.defineProperty(_assertThisInitialized(_this), "handleMouseEnter", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: function value() {
            if (_this.isTouch) {
              return;
            }

            _this.interval = setInterval(_this.position3dFunction, 100);
          }
        });
        Object.defineProperty(_assertThisInitialized(_this), "handleMouseMove", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: function value(e) {
            var mousePos = getMousePosition(e),
                docScrolls = {
              left: document.body.scrollLeft + document.documentElement.scrollLeft,
              top: document.body.scrollTop + document.documentElement.scrollTop
            },
                bounds = _this.el.getBoundingClientRect(); // Mouse position relative to the main element


            _this.relMousePos = {
              x: mousePos.x - bounds.left - docScrolls.left,
              y: mousePos.y - bounds.top - docScrolls.top
            };
          }
        });
        Object.defineProperty(_assertThisInitialized(_this), "handleMouseLeave", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: function value() {
            clearInterval(_this.interval);

            _this.setState({
              btnTransform: 'translate3d(0, 0, 0)'
            });
          }
        });
        _this.state = {
          btnTransform: 'translate3d(0, 0, 0)'
        };
        _this.interval = null;
        _this.isTouch = false;
        return _this;
      }

      _createClass(MouseTranslate, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          window.addEventListener('touchstart', this.triggerTouch);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          clearInterval(this.interval);
          window.removeEventListener('touchstart', this.triggerTouch);
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;

          return external__react__default.a.createElement("div", {
            onMouseMove: this.handleMouseMove,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            ref: function ref(el) {
              _this2.el = el;
            }
          }, external__react__default.a.createElement(WrappedComponent, _extends({}, this.props, {
            btnTransform: this.state.btnTransform
          })));
        }
      }]);

      return MouseTranslate;
    }(external__react_["Component"])
  );
}

function getTransform(relMousePos, bounds, ranges) {
  var vals = {
    x: (ranges.x[1] - ranges.x[0]) / bounds.width * relMousePos.x + ranges.x[0],
    y: (ranges.y[1] - ranges.y[0]) / bounds.height * relMousePos.y + ranges.y[0]
  };
  return "translate3d(".concat(vals.x, "px, ").concat(vals.y, "px, 0)");
}
// EXTERNAL MODULE: ./components/Global/withTheme.js
var withTheme = __webpack_require__(3);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/IconButton/IconButton.js
function IconButton__extends() { IconButton__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return IconButton__extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }








var cx = bind__default.a.bind(iconButton_default.a);

var IconButton_IconButton = function IconButton(_ref) {
  var children = _ref.children,
      className = _ref.className,
      path = _ref.path,
      asPath = _ref.asPath,
      type = _ref.type,
      inverted = _ref.inverted,
      color = _ref.color,
      title = _ref.title,
      role = _ref.role,
      right = _ref.right,
      top = _ref.top,
      bottom = _ref.bottom,
      btnTransform = _ref.btnTransform,
      other = _objectWithoutProperties(_ref, ["children", "className", "path", "asPath", "type", "inverted", "color", "title", "role", "right", "top", "bottom", "btnTransform"]);

  var btnClasses = cx(className, iconButton_default.a.icon, {
    top: top,
    bottom: bottom,
    right: right,
    inverted: inverted
  });

  var commonProps = _objectSpread({
    className: btnClasses,
    style: {
      transform: btnTransform
    }
  }, other);

  var button = external__react__default.a.createElement("button", IconButton__extends({}, commonProps, {
    type: type,
    name: title,
    "aria-label": title,
    "data-mouse": true
  }), title ? external__react__default.a.createElement("small", {
    className: iconButton_default.a.label
  }, title) : false, children);
  var anchor = path && external__react__default.a.createElement(link__default.a, {
    href: path,
    as: asPath,
    prefetch: true
  }, external__react__default.a.createElement("a", IconButton__extends({}, commonProps, {
    role: role,
    "data-mouse": true
  }), title ? external__react__default.a.createElement("small", {
    className: iconButton_default.a.label
  }, title) : false, children));
  return path ? anchor : button;
};

IconButton_IconButton.defaultProps = {
  disabled: false,
  type: 'button',
  inverted: false,
  right: false,
  top: false
};
/* harmony default export */ var components_IconButton_IconButton = __webpack_exports__["a"] = (Object(withTheme["a" /* withTheme */])(mouseTranslate(IconButton_IconButton)));

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./components/Nav/nav.scss
var nav = __webpack_require__(21);
var nav_default = /*#__PURE__*/__webpack_require__.n(nav);

// EXTERNAL MODULE: external "classnames/bind"
var bind_ = __webpack_require__(1);
var bind__default = /*#__PURE__*/__webpack_require__.n(bind_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(16);
var router__default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./components/Button/Button.js
var Button = __webpack_require__(14);

// EXTERNAL MODULE: external "apollo-boost"
var external__apollo_boost_ = __webpack_require__(7);
var external__apollo_boost__default = /*#__PURE__*/__webpack_require__.n(external__apollo_boost_);

// EXTERNAL MODULE: external "react-apollo"
var external__react_apollo_ = __webpack_require__(5);
var external__react_apollo__default = /*#__PURE__*/__webpack_require__.n(external__react_apollo_);

// EXTERNAL MODULE: ./components/ResponsiveWrapper/Responsive.js
var Responsive = __webpack_require__(4);

// EXTERNAL MODULE: ./components/Global/imgix.js
var imgix = __webpack_require__(10);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "react-addons-css-transition-group"
var external__react_addons_css_transition_group_ = __webpack_require__(12);
var external__react_addons_css_transition_group__default = /*#__PURE__*/__webpack_require__.n(external__react_addons_css_transition_group_);

// EXTERNAL MODULE: ./components/SubMenu/subMenu.scss
var SubMenu_subMenu = __webpack_require__(24);
var subMenu_default = /*#__PURE__*/__webpack_require__.n(SubMenu_subMenu);

// CONCATENATED MODULE: ./components/SubMenu/SubMenu.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }







var SubMenu_SubMenu = function SubMenu(_ref) {
  var subMenu = _ref.subMenu,
      visible = _ref.visible,
      openSubMenu = _ref.openSubMenu,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["subMenu", "visible", "openSubMenu", "className"]);

  return external__react__default.a.createElement(external__react_addons_css_transition_group__default.a, {
    transitionName: "submenu",
    transitionEnterTimeout: 800,
    transitionLeaveTimeout: 800,
    component: "div",
    className: className
  }, visible && subMenu.map(function (link, index) {
    return external__react__default.a.createElement(external__react__default.a.Fragment, null, external__react__default.a.createElement(Responsive["a" /* LG */], null, external__react__default.a.createElement(Nav_NavigationLink, _extends({
      style: {
        transitionDelay: "".concat(50 * index, "ms")
      },
      key: index
    }, normalize(link, openSubMenu), rest, {
      isSubLink: true
    }))), external__react__default.a.createElement(Responsive["d" /* ML */], null, external__react__default.a.createElement(Nav_NavigationLink, _extends({
      key: index
    }, normalize(link, openSubMenu), rest, {
      isSubLink: true
    }))));
  }));
};

/* harmony default export */ var components_SubMenu_SubMenu = (SubMenu_SubMenu);
// CONCATENATED MODULE: ./components/Nav/Nav.js
var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["{\nmenuItems: allMenuItems(filter: {parent: {exists: false}}) {\n    title\n    asPath: slug\n    image {\n          url\n          }\n    links: children {\n      title\n      asPath: slug\n    }\n  }\n}"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Nav__extends() { Nav__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Nav__extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }













var cx = bind__default.a.bind(nav_default.a);
var MENU_ITEMS = Object(external__apollo_boost_["gql"])(_templateObject);
function normalize(items) {
  var currentUrl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var normalizedItems = _objectSpread({}, items);

  if (currentUrl.length > 0) {
    switch (items.asPath) {
      case null:
        normalizedItems.asPath = "/collections";
        normalizedItems.path = "/collections";
        break;

      default:
        if (currentUrl === 'Collections') {
          normalizedItems.asPath = "/collections/".concat(items.asPath);
          normalizedItems.path = "/collection?slug=".concat(items.asPath);
        } else {
          normalizedItems.asPath = "/".concat(items.asPath);
          normalizedItems.path = "/content?slug=".concat(items.asPath);
        }

        break;
    }
  } else {
    switch (items.asPath) {
      case 'store-locator':
        normalizedItems.asPath = "/".concat(items.asPath);
        normalizedItems.path = "/".concat(items.asPath);
        break;

      default:
        normalizedItems.asPath = "/".concat(items.asPath);
        normalizedItems.path = "/content?slug=".concat(items.asPath);
        normalizedItems.swallow = true;
        break;
    }
  }

  return normalizedItems;
}

var Nav_Nav = function Nav(_ref) {
  var currentUrl = _ref.currentUrl,
      toggleSubMenu = _ref.toggleSubMenu,
      openSubMenu = _ref.openSubMenu,
      handleCloseMenu = _ref.handleCloseMenu,
      menuIsOpen = _ref.menuIsOpen;
  var navClasses = cx({
    open: menuIsOpen
  }, {
    menu: true
  });
  var innerClasses = cx({
    open: openSubMenu
  }, {
    inner: true
  });
  return external__react__default.a.createElement("div", {
    className: navClasses
  }, external__react__default.a.createElement("nav", {
    className: nav_default.a.wrapper
  }, external__react__default.a.createElement(external__react_apollo_["Query"], {
    query: MENU_ITEMS
  }, function (_ref2) {
    var loading = _ref2.loading,
        menuItems = _ref2.data.menuItems;
    return external__react__default.a.createElement("div", {
      className: innerClasses
    }, external__react__default.a.createElement(external__react_addons_css_transition_group__default.a, {
      transitionName: "nav",
      transitionEnterTimeout: 1500,
      transitionLeaveTimeout: 1500,
      component: "div",
      className: nav_default.a.links
    }, menuItems.map(function (i, index) {
      return menuIsOpen && external__react__default.a.createElement(Nav_Item, Nav__extends({
        key: index
      }, normalize(i), {
        currentUrl: currentUrl,
        toggleSubMenu: toggleSubMenu,
        openSubMenu: openSubMenu,
        handleCloseMenu: handleCloseMenu
      }));
    })), external__react__default.a.createElement("div", {
      className: nav_default.a.submenus
    }, menuItems.map(function (_ref3, index) {
      var title = _ref3.title,
          links = _ref3.links;
      return links.length > 0 && external__react__default.a.createElement(components_SubMenu_SubMenu, {
        key: index,
        currentUrl: currentUrl,
        subMenu: links,
        visible: openSubMenu === title,
        openSubMenu: openSubMenu,
        handleCloseMenu: handleCloseMenu,
        className: nav_default.a.submenu
      });
    })));
  }), external__react__default.a.createElement("div", {
    className: nav_default.a.footer
  }, external__react__default.a.createElement("span", null, external__react__default.a.createElement(link__default.a, {
    as: '/cookie-policy',
    href: '/legal?slug=cookie-policy'
  }, external__react__default.a.createElement("a", {
    className: 'baseLink',
    "data-min": true
  }, "Cookie Policy")), external__react__default.a.createElement(link__default.a, {
    as: '/privacy-policy',
    href: '/legal?slug=privacy-policy'
  }, external__react__default.a.createElement("a", {
    className: 'baseLink',
    "data-min": true
  }, "Privacy Policy")), external__react__default.a.createElement(link__default.a, {
    as: '/terms-and-conditions',
    href: '/legal?slug=terms-and-conditions'
  }, external__react__default.a.createElement("a", {
    className: 'baseLink',
    "data-min": true
  }, "Terms & Conditions"))))));
};

var Nav_Item =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Item, _React$Component);

  function Item() {
    _classCallCheck(this, Item);

    return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
  }

  _createClass(Item, [{
    key: "render",
    value: function render() {
      var _props$links = this.props.links,
          links = _props$links === void 0 ? [] : _props$links;
      var Component = links.length > 0 ? Nav_SubMenuToggle : Nav_NavigationLink;
      return external__react__default.a.createElement(Component, this.props);
    }
  }]);

  return Item;
}(external__react__default.a.Component);

var Nav_SubMenuToggle = function SubMenuToggle(_ref4) {
  var subMenu = _ref4.subMenu,
      title = _ref4.title,
      openSubMenu = _ref4.openSubMenu,
      toggleSubMenu = _ref4.toggleSubMenu,
      url = _ref4.image.url,
      style = _ref4.style;
  var bg = external__react__default.a.createElement("div", {
    className: "".concat(nav_default.a.bg, " ").concat(openSubMenu === title ? nav_default.a.bgActive : ''),
    style: {
      background: "url(".concat(Object(imgix["a" /* default */])(url, {
        w: 250,
        h: 850
      }), ") center center no-repeat"),
      backgroundSize: 'cover'
    }
  }, external__react__default.a.createElement("div", {
    className: nav_default.a.bgOverlay
  }), external__react__default.a.createElement(Button["a" /* default */], {
    className: nav_default.a.link,
    onClick: function onClick() {
      return toggleSubMenu(title);
    },
    active: openSubMenu === title,
    title: title,
    style: style
  }));
  var btn = external__react__default.a.createElement(Button["a" /* default */], {
    className: nav_default.a.link,
    onClick: function onClick() {
      return toggleSubMenu(title);
    },
    active: openSubMenu === title,
    title: title,
    style: style
  });
  return external__react__default.a.createElement(external__react__default.a.Fragment, null, external__react__default.a.createElement(Responsive["a" /* LG */], null, url ? bg : btn), external__react__default.a.createElement(Responsive["d" /* ML */], null, btn));
};

var Nav_NavigationLink = function NavigationLink(_ref5) {
  var asPath = _ref5.asPath,
      _ref5$currentUrl = _ref5.currentUrl,
      currentUrl = _ref5$currentUrl === void 0 ? '' : _ref5$currentUrl,
      _ref5$title = _ref5.title,
      title = _ref5$title === void 0 ? '' : _ref5$title,
      path = _ref5.path,
      handleCloseMenu = _ref5.handleCloseMenu,
      isSubLink = _ref5.isSubLink,
      swallow = _ref5.swallow,
      _ref5$image = _ref5.image;
  _ref5$image = _ref5$image === void 0 ? false : _ref5$image;
  var url = _ref5$image.url,
      style = _ref5.style;
  var bg = external__react__default.a.createElement("div", {
    className: "".concat(nav_default.a.bg, " ").concat(currentUrl === asPath ? nav_default.a.bgActive : ''),
    style: {
      background: "url(".concat(Object(imgix["a" /* default */])(url, {
        w: 250,
        h: 850
      }), ") center center no-repeat"),
      backgroundSize: 'cover'
    }
  }, external__react__default.a.createElement("div", {
    className: nav_default.a.bgOverlay
  }), external__react__default.a.createElement(Button["a" /* default */], {
    className: isSubLink ? nav_default.a.subLink : nav_default.a.link,
    onClick: function onClick(e) {
      e.preventDefault();
      router__default.a.push(path, asPath, {
        swallow: swallow
      });
    },
    active: currentUrl === asPath,
    title: title,
    style: style,
    link: true
  }));
  var btn = external__react__default.a.createElement(Button["a" /* default */], {
    className: isSubLink ? nav_default.a.subLink : nav_default.a.link,
    onClick: function onClick(e) {
      e.preventDefault();
      router__default.a.push(path, asPath, {
        swallow: swallow
      });
    },
    active: currentUrl === asPath,
    title: title,
    style: style,
    link: true
  });
  return external__react__default.a.createElement(external__react__default.a.Fragment, null, external__react__default.a.createElement(Responsive["a" /* LG */], null, url ? bg : btn), external__react__default.a.createElement(Responsive["d" /* ML */], null, btn));
};
/* harmony default export */ var components_Nav_Nav = (Nav_Nav);
// CONCATENATED MODULE: ./components/Nav/index.js

/* harmony default export */ var components_Nav = (components_Nav_Nav);
// EXTERNAL MODULE: ./components/Bar/bar.scss
var bar = __webpack_require__(25);
var bar_default = /*#__PURE__*/__webpack_require__.n(bar);

// EXTERNAL MODULE: ./components/Global/withTheme.js
var withTheme = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Bar/Bar.js




var Bar_cx = bind__default.a.bind(bar_default.a);

var Bar_Bar = function Bar(_ref) {
  var inverted = _ref.inverted;
  var barClasses = Bar_cx(bar_default.a.outer, {
    inverted: inverted
  });
  return external__react__default.a.createElement("div", {
    className: barClasses
  });
};

/* harmony default export */ var components_Bar_Bar = (Object(withTheme["a" /* withTheme */])(Bar_Bar));
// CONCATENATED MODULE: ./components/Bar/index.js

/* harmony default export */ var components_Bar = (components_Bar_Bar);
// EXTERNAL MODULE: ./components/Burger/burger.scss
var burger = __webpack_require__(26);
var burger_default = /*#__PURE__*/__webpack_require__.n(burger);

// CONCATENATED MODULE: ./components/Burger/Burger.js
function Burger__extends() { Burger__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Burger__extends.apply(this, arguments); }

function Burger__objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }





var Burger_cx = bind__default.a.bind(burger_default.a);

var Burger_Burger = function Burger(_ref) {
  var className = _ref.className,
      inverted = _ref.inverted,
      isClose = _ref.isClose,
      rest = Burger__objectWithoutProperties(_ref, ["className", "inverted", "isClose"]);

  var BurgerClass = Burger_cx({
    isClose: isClose
  }, {
    inverted: inverted
  }, {
    inner: true
  });
  return external__react__default.a.createElement("div", Burger__extends({
    className: BurgerClass
  }, rest), external__react__default.a.createElement("span", null), external__react__default.a.createElement("span", null), external__react__default.a.createElement("span", null));
};

/* harmony default export */ var components_Burger_Burger = (Object(withTheme["a" /* withTheme */])(Burger_Burger));
// CONCATENATED MODULE: ./components/Burger/index.js

/* harmony default export */ var components_Burger = (components_Burger_Burger);
// EXTERNAL MODULE: ./components/Header/header.scss
var header = __webpack_require__(27);
var header_default = /*#__PURE__*/__webpack_require__.n(header);

// EXTERNAL MODULE: ./components/IconButton/index.js
var IconButton = __webpack_require__(8);

// CONCATENATED MODULE: ./components/Icon/Grid.js


var Grid_Grid = function Grid(_ref) {
  var stroke = _ref.stroke;
  return external__react__default.a.createElement("svg", {
    viewBox: "0 0 64 64",
    height: 24,
    width: 24
  }, external__react__default.a.createElement("path", {
    d: "M2 2h12v12H2zm24 0h12v12H26zm24 0h12v12H50zM2 50h12v12H2z",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt"
  }), external__react__default.a.createElement("path", {
    d: "M26 50h12v12H26zm24 0h12v12H50z",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt"
  }), external__react__default.a.createElement("path", {
    d: "M2 25.988h12v12H2z",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt"
  }), external__react__default.a.createElement("path", {
    d: "M26 25.988h12v12H26zm24 0h12v12H50z",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt"
  }));
};

/* harmony default export */ var Icon_Grid = (Grid_Grid);
// CONCATENATED MODULE: ./components/Icon/Back.js


var Back_Back = function Back(_ref) {
  var stroke = _ref.stroke;
  return external__react__default.a.createElement("svg", {
    viewBox: "0 0 64 64",
    height: 24,
    width: 24
  }, external__react__default.a.createElement("path", {
    d: "M14 31.998h36",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt"
  }), external__react__default.a.createElement("path", {
    d: "M28 18L14 32l14 14",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt"
  }));
};

/* harmony default export */ var Icon_Back = (Back_Back);
// CONCATENATED MODULE: ./components/Icon/Logo.js



var Logo_Logo = function Logo(_ref) {
  var inverted = _ref.inverted;
  var fill = inverted ? "#fff" : "#000";
  return external__react__default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 396.85 64.09"
  }, external__react__default.a.createElement("path", {
    fill: fill,
    d: "M139.08,1.25h13.15c3.75,0,6.77,1.13,8.69,3.05a8.49,8.49,0,0,1,2.36,6v.09c0,5.07-3.5,8-8.3,8.91l9.39,12.49h-4.24l-8.86-11.88h-8.74V31.82h-3.45Zm12.84,15.59c4.59,0,7.86-2.36,7.86-6.29v-.09c0-3.75-2.88-6-7.81-6h-9.44v12.4Z",
    transform: "translate(-22.18 -0.72)"
  }), external__react__default.a.createElement("rect", {
    fill: fill,
    x: "170.28",
    y: "0.52",
    width: "3.45",
    height: "30.57"
  }), external__react__default.a.createElement("polygon", {
    fill: fill,
    points: "212.59 3.71 202.33 3.71 202.33 0.52 226.35 0.52 226.35 3.71 216.09 3.71 216.09 31.09 212.59 31.09 212.59 3.71"
  }), external__react__default.a.createElement("path", {
    fill: fill,
    d: "M290.89,1h3.23l13.93,30.79h-3.71l-3.58-8.08H284.12l-3.63,8.08H277Zm8.51,19.56L292.46,5.05l-7,15.54Z",
    transform: "translate(-22.18 -0.72)"
  }), external__react__default.a.createElement("path", {
    fill: fill,
    d: "M337.75,16.62v-.09c0-8.38,6.16-15.81,15.33-15.81a16.12,16.12,0,0,1,11.4,4.06L362.25,7.4A13,13,0,0,0,353,3.91c-6.76,0-11.61,5.72-11.61,12.53v.09c0,7.3,4.67,12.71,12.09,12.71a14.32,14.32,0,0,0,8.82-3.06V18.59H353v-3.1h12.63V27.67a18.55,18.55,0,0,1-12.28,4.67c-9.61,0-15.55-7-15.55-15.72",
    transform: "translate(-22.18 -0.72)"
  }), external__react__default.a.createElement("polygon", {
    fill: fill,
    points: "374.53 0.52 396.63 0.52 396.63 3.67 377.98 3.67 377.98 14.11 394.67 14.11 394.67 17.25 377.98 17.25 377.98 27.95 396.85 27.95 396.85 31.09 374.53 31.09 374.53 0.52"
  }), external__react__default.a.createElement("path", {
    fill: fill,
    d: "M25.63,1.25H22.18V31.82h3.45V18.06H49.31V14.83H25.63Zm28.5,30.57h3.45V1.25H54.13Z",
    transform: "translate(-22.18 -0.72)"
  }), external__react__default.a.createElement("rect", {
    fill: fill,
    x: "65.52",
    y: "49.01",
    width: "1.1",
    height: "14.83"
  }), external__react__default.a.createElement("path", {
    fill: fill,
    d: "M101.15,57.19v0a7.46,7.46,0,0,1,7.42-7.67,7.83,7.83,0,0,1,5.76,2.37l-.79.81a6.79,6.79,0,0,0-5-2.18,6.33,6.33,0,0,0-6.24,6.62v0a6.4,6.4,0,0,0,6.27,6.67,6.78,6.78,0,0,0,5.1-2.31l.74.72a7.82,7.82,0,0,1-5.89,2.58,7.37,7.37,0,0,1-7.37-7.62",
    transform: "translate(-22.18 -0.72)"
  }), external__react__default.a.createElement("path", {
    fill: fill,
    d: "M124.81,57.19v0a7.46,7.46,0,0,1,7.48-7.67,7.39,7.39,0,0,1,7.43,7.62v0a7.46,7.46,0,0,1-7.48,7.66,7.39,7.39,0,0,1-7.43-7.62m13.77,0v0a6.41,6.41,0,0,0-6.34-6.67A6.34,6.34,0,0,0,126,57.1v0a6.42,6.42,0,0,0,6.34,6.67,6.35,6.35,0,0,0,6.29-6.63",
    transform: "translate(-22.18 -0.72)"
  }), external__react__default.a.createElement("polygon", {
    fill: fill,
    points: "129.74 49.01 130.77 49.01 141 61.91 141 49.01 142.06 49.01 142.06 63.84 141.24 63.84 130.79 50.66 130.79 63.84 129.74 63.84 129.74 49.01"
  }), external__react__default.a.createElement("rect", {
    fill: fill,
    x: "155.06",
    y: "49.01",
    width: "1.1",
    height: "14.83"
  }), external__react__default.a.createElement("path", {
    fill: fill,
    d: "M190.7,57.19v0a7.45,7.45,0,0,1,7.41-7.67,7.81,7.81,0,0,1,5.76,2.37l-.78.81a6.82,6.82,0,0,0-5-2.18,6.34,6.34,0,0,0-6.25,6.62v0a6.4,6.4,0,0,0,6.27,6.67,6.78,6.78,0,0,0,5.1-2.31l.74.72a7.82,7.82,0,0,1-5.88,2.58,7.36,7.36,0,0,1-7.37-7.62",
    transform: "translate(-22.18 -0.72)"
  }), external__react__default.a.createElement("polygon", {
    fill: fill,
    points: "214.41 49.01 215.51 49.01 215.51 62.82 224.21 62.82 224.21 63.84 214.41 63.84 214.41 49.01"
  }), external__react__default.a.createElement("path", {
    fill: fill,
    d: "M257.49,58.4V49.73h1.1v8.56c0,3.49,1.89,5.51,5,5.51s4.94-1.83,4.94-5.4V49.73h1.1v8.54c0,4.26-2.48,6.52-6.08,6.52s-6.08-2.24-6.08-6.39",
    transform: "translate(-22.18 -0.72)"
  }), external__react__default.a.createElement("polygon", {
    fill: fill,
    points: "271.68 49.01 265.98 56.28 271.89 63.84 270.57 63.84 265.3 56.99 260.05 63.84 258.75 63.84 264.64 56.28 258.97 49.01 260.28 49.01 265.34 55.55 270.38 49.01 271.68 49.01"
  }), external__react__default.a.createElement("path", {
    fill: fill,
    d: "M305.35,58.4V49.73h1.1v8.56c0,3.49,1.89,5.51,5,5.51s4.94-1.83,4.94-5.4V49.73h1.1v8.54c0,4.26-2.48,6.52-6.08,6.52s-6.08-2.24-6.08-6.39",
    transform: "translate(-22.18 -0.72)"
  }), external__react__default.a.createElement("path", {
    fill: fill,
    d: "M330.13,49.73h6.23a5.88,5.88,0,0,1,4.17,1.46A4,4,0,0,1,341.65,54v0c0,2.48-1.84,3.9-4.34,4.24l4.89,6.33h-1.4l-4.72-6.14h-4.85v6.14h-1.1Zm6.1,7.69c2.47,0,4.31-1.25,4.31-3.39v0c0-2-1.56-3.24-4.25-3.24h-5.06v6.67Z",
    transform: "translate(-22.18 -0.72)"
  }), external__react__default.a.createElement("polygon", {
    fill: fill,
    points: "336.01 57.97 329.66 49.01 331.03 49.01 336.58 56.97 342.15 49.01 343.46 49.01 337.11 57.95 337.11 63.84 336.01 63.84 336.01 57.97"
  }), external__react__default.a.createElement("polygon", {
    fill: fill,
    points: "65.59 0.52 87.69 0.52 87.69 3.67 69.04 3.67 69.04 14.11 85.72 14.11 85.72 17.25 69.04 17.25 69.04 27.95 87.91 27.95 87.91 31.09 65.59 31.09 65.59 0.52"
  }));
};

/* harmony default export */ var Icon_Logo = (Object(withTheme["a" /* withTheme */])(Logo_Logo));
// CONCATENATED MODULE: ./components/Icon/Filter.js


var Filter_Filter = function Filter(_ref) {
  var stroke = _ref.stroke;
  return external__react__default.a.createElement("svg", {
    viewBox: "0 0 64 64",
    height: 24,
    width: 24
  }, external__react__default.a.createElement("path", {
    d: "M2 2h59L36 34v20l-8 8V34L2 2z",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt"
  }));
};

/* harmony default export */ var Icon_Filter = (Filter_Filter);
// CONCATENATED MODULE: ./components/Icon/Check.js


var Check_Check = function Check(_ref) {
  var stroke = _ref.stroke;
  return external__react__default.a.createElement("svg", {
    viewBox: "0 0 64 64",
    height: 24,
    width: 24
  }, external__react__default.a.createElement("path", {
    d: "M2 30l21 22 39-40",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt"
  }));
};

/* harmony default export */ var Icon_Check = (Check_Check);
// CONCATENATED MODULE: ./components/Header/Header.js












var Header_cx = bind__default.a.bind(header_default.a);

var Header_Header = function Header(_ref) {
  var isDetail = _ref.isDetail,
      isProducts = _ref.isProducts,
      menuIsOpen = _ref.menuIsOpen,
      toggleMenu = _ref.toggleMenu,
      toggleFilter = _ref.toggleFilter,
      openSubMenu = _ref.openSubMenu,
      toggleSubMenu = _ref.toggleSubMenu,
      isStore = _ref.isStore,
      filterIsOpen = _ref.filterIsOpen;
  var filterClasses = Header_cx({
    open: filterIsOpen
  });
  return external__react__default.a.createElement(external__react__default.a.Fragment, null, external__react__default.a.createElement("div", {
    className: header_default.a.wrapper + ' ' + header_default.a.left
  }, external__react__default.a.createElement("div", {
    className: header_default.a.inner
  }, external__react__default.a.createElement(Responsive["d" /* ML */], null, openSubMenu !== '' && external__react__default.a.createElement(IconButton["a" /* default */], {
    onClick: function onClick() {
      return toggleSubMenu('');
    },
    title: 'back',
    right: true
  }, external__react__default.a.createElement(Icon_Back, null))), !isStore && !menuIsOpen && !isProducts && !isDetail && external__react__default.a.createElement(link__default.a, {
    href: '/products',
    prefetch: true
  }, external__react__default.a.createElement(IconButton["a" /* default */], {
    title: 'all products',
    right: true
  }, external__react__default.a.createElement(Icon_Grid, null))), !isStore && !menuIsOpen && !isProducts && isDetail && external__react__default.a.createElement(link__default.a, {
    href: {
      pathname: '/products',
      query: isDetail
    },
    prefetch: true
  }, external__react__default.a.createElement(IconButton["a" /* default */], {
    title: 'back to selection',
    right: true
  }, external__react__default.a.createElement(Icon_Back, null))), !menuIsOpen && isProducts && !filterIsOpen && external__react__default.a.createElement(IconButton["a" /* default */], {
    onClick: function onClick() {
      return toggleFilter('');
    },
    title: 'filter',
    right: true
  }, external__react__default.a.createElement(Icon_Filter, null)), !menuIsOpen && isProducts && filterIsOpen && external__react__default.a.createElement(IconButton["a" /* default */], {
    onClick: function onClick() {
      return toggleFilter('');
    },
    title: 'save',
    right: true
  }, external__react__default.a.createElement(Icon_Check, null)))), external__react__default.a.createElement("div", {
    className: header_default.a.wrapper + ' ' + header_default.a.center
  }, external__react__default.a.createElement("div", {
    className: header_default.a.inner
  }, external__react__default.a.createElement(link__default.a, {
    href: '/',
    prefetch: true
  }, external__react__default.a.createElement("button", {
    "aria-label": "home",
    role: "button",
    "data-min": true
  }, external__react__default.a.createElement(Icon_Logo, null))))), external__react__default.a.createElement("div", {
    className: header_default.a.wrapper + ' ' + header_default.a.right
  }, external__react__default.a.createElement("div", {
    className: header_default.a.inner
  }, external__react__default.a.createElement(Responsive["b" /* MB */], null, external__react__default.a.createElement(IconButton["a" /* default */], {
    title: menuIsOpen ? 'close' : 'menu',
    onClick: toggleMenu
  }, external__react__default.a.createElement(components_Burger, {
    isClose: menuIsOpen
  }))), external__react__default.a.createElement(Responsive["c" /* MD */], null, external__react__default.a.createElement(IconButton["a" /* default */], {
    title: menuIsOpen ? 'close' : 'menu',
    onClick: toggleMenu
  }, external__react__default.a.createElement(components_Burger, {
    isClose: menuIsOpen
  }))))));
};

/* harmony default export */ var components_Header_Header = (Header_Header);
// CONCATENATED MODULE: ./components/Header/index.js

/* harmony default export */ var components_Header = (components_Header_Header);
// EXTERNAL MODULE: ./components/Footer/footer.scss
var footer = __webpack_require__(29);
var footer_default = /*#__PURE__*/__webpack_require__.n(footer);

// EXTERNAL MODULE: ./components/Icon/Pin.js
var Pin = __webpack_require__(20);

// EXTERNAL MODULE: ./components/ScrollDown/scrolldown.scss
var scrolldown = __webpack_require__(30);
var scrolldown_default = /*#__PURE__*/__webpack_require__.n(scrolldown);

// CONCATENATED MODULE: ./components/Icon/Scroll.js


var Scroll_Arrow = function Arrow(_ref) {
  var _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === void 0 ? "#222222" : _ref$stroke;
  return external__react__default.a.createElement("svg", {
    viewBox: "0 0 64 16",
    height: 24,
    width: 24
  }, external__react__default.a.createElement("path", {
    d: "M58,8 L0,8",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt"
  }), external__react__default.a.createElement("polyline", {
    points: "49 16 58 8 49 0",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt"
  }));
};

/* harmony default export */ var Scroll = (Scroll_Arrow);
// CONCATENATED MODULE: ./components/ScrollDown/ScrollDown.js







var ScrollDown_cx = bind__default.a.bind(scrolldown_default.a);

var ScrollDown_ScrollDown = function ScrollDown(_ref) {
  var inverted = _ref.inverted,
      isInfo = _ref.isInfo;
  var scrollDownClass = ScrollDown_cx({
    wrapper: true,
    inverted: inverted,
    center: isInfo
  });
  return external__react__default.a.createElement("div", {
    className: scrollDownClass
  }, external__react__default.a.createElement("div", {
    className: scrolldown_default.a.inner
  }, isInfo ? external__react__default.a.createElement("span", {
    className: scrolldown_default.a.txt
  }, "Heritage by", external__react__default.a.createElement(link__default.a, {
    href: '/legal?slug=grandvision',
    as: '/grandvision'
  }, external__react__default.a.createElement("a", {
    className: 'baseLink',
    "data-min": true
  }, "Grandvision"))) : external__react__default.a.createElement(external__react__default.a.Fragment, null, external__react__default.a.createElement(Responsive["c" /* MD */], null, external__react__default.a.createElement("span", {
    className: scrolldown_default.a.txt
  }, "Scroll to navigate ")), external__react__default.a.createElement(Responsive["b" /* MB */], null, external__react__default.a.createElement("span", {
    className: scrolldown_default.a.txt
  }, "Navigate")), external__react__default.a.createElement(Scroll, null))));
};

/* harmony default export */ var components_ScrollDown_ScrollDown = (Object(withTheme["a" /* withTheme */])(ScrollDown_ScrollDown));
// CONCATENATED MODULE: ./components/Footer/Footer.js








var Footer_Footer = function Footer(_ref) {
  var menuIsOpen = _ref.menuIsOpen,
      hideUI = _ref.hideUI,
      isInfo = _ref.isInfo;
  return external__react__default.a.createElement(external__react__default.a.Fragment, null, !hideUI && external__react__default.a.createElement(components_ScrollDown_ScrollDown, {
    isInfo: isInfo
  }), external__react__default.a.createElement(Responsive["c" /* MD */], null, external__react__default.a.createElement("div", {
    className: footer_default.a.slideBtnWrapper
  }, external__react__default.a.createElement("div", {
    className: footer_default.a.slideBtnInner
  }, external__react__default.a.createElement(link__default.a, {
    href: '/store-locator',
    prefetch: true
  }, external__react__default.a.createElement(IconButton["a" /* default */], {
    title: 'store locator'
  }, external__react__default.a.createElement(Pin["a" /* default */], null)))))));
};

/* harmony default export */ var components_Footer_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./components/Footer/index.js

/* harmony default export */ var components_Footer = (components_Footer_Footer);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(15);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./components/Global/themeContext.js
var themeContext = __webpack_require__(11);

// EXTERNAL MODULE: ./scss/reset.scss
var scss_reset = __webpack_require__(31);
var reset_default = /*#__PURE__*/__webpack_require__.n(scss_reset);

// EXTERNAL MODULE: ./scss/global.scss
var global = __webpack_require__(32);
var global_default = /*#__PURE__*/__webpack_require__.n(global);

// CONCATENATED MODULE: ./components/Layout/Layout.js
function Layout__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Layout__typeof = function _typeof(obj) { return typeof obj; }; } else { Layout__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Layout__typeof(obj); }

function Layout__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Layout__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Layout__createClass(Constructor, protoProps, staticProps) { if (protoProps) Layout__defineProperties(Constructor.prototype, protoProps); if (staticProps) Layout__defineProperties(Constructor, staticProps); return Constructor; }

function Layout__possibleConstructorReturn(self, call) { if (call && (Layout__typeof(call) === "object" || typeof call === "function")) { return call; } return Layout__assertThisInitialized(self); }

function Layout__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Layout__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }











var Layout_Layout =
/*#__PURE__*/
function (_React$Component) {
  Layout__inherits(Layout, _React$Component);

  function Layout(props) {
    var _this;

    Layout__classCallCheck(this, Layout);

    _this = Layout__possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));
    _this.state = {
      openSubMenu: '',
      menuIsOpen: false
    };
    _this.setOpenSubMenu = _this.setOpenSubMenu.bind(Layout__assertThisInitialized(_this));
    _this.toggleMenu = _this.toggleMenu.bind(Layout__assertThisInitialized(_this));
    return _this;
  }

  Layout__createClass(Layout, [{
    key: "toggleMenu",
    value: function toggleMenu() {
      this.setState({
        menuIsOpen: !this.state.menuIsOpen,
        openSubMenu: ''
      });
    }
  }, {
    key: "setOpenSubMenu",
    value: function setOpenSubMenu(category) {
      var openSubMenu = this.state.openSubMenu;
      category = category === openSubMenu ? '' : category;
      this.setState({
        openSubMenu: category
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          currentUrl = _props.currentUrl,
          children = _props.children,
          isDark = _props.isDark,
          isProducts = _props.isProducts,
          _props$seo = _props.seo,
          _props$seo$title = _props$seo.title,
          title = _props$seo$title === void 0 ? false : _props$seo$title,
          _props$seo$descriptio = _props$seo.description,
          description = _props$seo$descriptio === void 0 ? false : _props$seo$descriptio,
          filters = _props.filters,
          hideUI = _props.hideUI,
          filterIsOpen = _props.filterIsOpen,
          toggleFilter = _props.toggleFilter,
          isStore = _props.isStore,
          isInfo = _props.isInfo,
          isDetail = _props.isDetail;
      var _state = this.state,
          openSubMenu = _state.openSubMenu,
          menuIsOpen = _state.menuIsOpen;
      return external__react__default.a.createElement("main", {
        style: {
          position: 'fixed',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: 1,
          backgroundColor: isDark ? '#000' : '#fff'
        }
      }, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", null, title || 'heritage'), external__react__default.a.createElement("meta", {
        charSet: "UTF-8"
      }), external__react__default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      }), external__react__default.a.createElement("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge, chrome=1"
      }), external__react__default.a.createElement("meta", {
        name: "theme-color",
        content: '#000'
      }), external__react__default.a.createElement("meta", {
        name: "description",
        content: description || 'heritage eyewear'
      }), external__react__default.a.createElement("link", {
        rel: "icon",
        href: "/static/favicon.ico"
      }), external__react__default.a.createElement("link", {
        rel: "manifest",
        href: "/static/manifest.json"
      })), external__react__default.a.createElement(themeContext["a" /* ThemeContext */].Provider, {
        value: menuIsOpen || isDark
      }, external__react__default.a.createElement(components_Header, {
        toggleMenu: this.toggleMenu,
        menuIsOpen: menuIsOpen,
        isProducts: isProducts,
        isDetail: isDetail,
        isStore: isStore,
        filterIsOpen: filterIsOpen,
        openSubMenu: openSubMenu,
        toggleSubMenu: this.setOpenSubMenu,
        toggleFilter: toggleFilter
      }), external__react__default.a.createElement(components_Nav, {
        currentUrl: currentUrl,
        openSubMenu: openSubMenu,
        handleCloseMenu: this.toggleMenu,
        toggleSubMenu: this.setOpenSubMenu,
        menuIsOpen: menuIsOpen
      }), !isStore && external__react__default.a.createElement(components_Bar, null), children, !isStore && external__react__default.a.createElement(components_Footer, {
        menuIsOpen: menuIsOpen,
        hideUI: hideUI,
        isInfo: isInfo
      })));
    }
  }]);

  return Layout;
}(external__react__default.a.Component);

/* harmony default export */ var components_Layout_Layout = __webpack_exports__["a"] = (Layout_Layout);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var Pin = function Pin(_ref) {
  var stroke = _ref.stroke;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
    viewBox: "0 0 64 64",
    height: 24,
    width: 24
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M55.9 28.3c.1-.8.1-1.5.1-2.3a24 24 0 0 0-48 0c0 .8 0 1.6.1 2.3v.3C10.1 47.6 32 61 32 61s21.9-13.6 23.8-32.3z",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("circle", {
    r: "12",
    cy: "26",
    cx: "32",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Pin);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {
	"link": "nav__link___33jix",
	"subLink": "nav__subLink___26Qeq",
	"footer": "nav__footer___5s4sS",
	"menu": "nav__menu___3utul",
	"open": "nav__open___3fEPg",
	"wrapper": "nav__wrapper___2zp84",
	"inner": "nav__inner___1AVUh",
	"links": "nav__links___KUoih",
	"submenus": "nav__submenus___3oTUZ",
	"submenu": "nav__submenu____nd64",
	"outer": "nav__outer___VaPOB",
	"active": "nav__active___ejI2o",
	"bg": "nav__bg___6TnL9",
	"bgOverlay": "nav__bgOverlay___1EiSo",
	"bgActive": "nav__bgActive___1OGTU"
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {
	"navLink": "button__navLink___2K4TZ",
	"extrusion": "button__extrusion___MvOTI",
	"active": "button__active___2SsXo",
	"outer": "button__outer___C3Odi",
	"inverted": "button__inverted___-kKcP"
};

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 24 */
/***/ (function(module, exports) {



/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {
	"outer": "bar__outer___q_U31",
	"inverted": "bar__inverted___3U33A"
};

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {
	"inner": "burger__inner___2cnjb",
	"isClose": "burger__isClose___3_Xlr",
	"inverted": "burger__inverted___32bhN"
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "header__wrapper___3mJuT",
	"right": "header__right___3E8pu",
	"left": "header__left___2iZYy",
	"center": "header__center___2LNn3",
	"inner": "header__inner___fARAv"
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = {
	"label": "iconButton__label___GUe4T",
	"icon": "iconButton__icon___3wZTc",
	"inverted": "iconButton__inverted___22IXQ",
	"right": "iconButton__right___2wDMY",
	"top": "iconButton__top___2w1Zy",
	"bottom": "iconButton__bottom___2pNBx"
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {
	"slideBtnWrapper": "footer__slideBtnWrapper___1mYpA",
	"slideBtnInner": "footer__slideBtnInner___1F_E3"
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = {
	"txt": "scrolldown__txt___2vVkw",
	"wrapper": "scrolldown__wrapper___3xhtB",
	"center": "scrolldown__center___VSauo",
	"inner": "scrolldown__inner___2Nw-t",
	"inverted": "scrolldown__inverted___2v07x"
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {



/***/ }),
/* 32 */
/***/ (function(module, exports) {



/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(105);


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(33);
var regenerator__default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./components/Layout/Layout.js + 18 modules
var Layout = __webpack_require__(19);

// EXTERNAL MODULE: ./components/StoreOpeningHours/storeOpeningHours.scss
var storeOpeningHours = __webpack_require__(106);
var storeOpeningHours_default = /*#__PURE__*/__webpack_require__.n(storeOpeningHours);

// EXTERNAL MODULE: external "classnames/bind"
var bind_ = __webpack_require__(1);
var bind__default = /*#__PURE__*/__webpack_require__.n(bind_);

// CONCATENATED MODULE: ./components/StoreOpeningHours/StoreOpeningHours.js



var cx = bind__default.a.bind(storeOpeningHours_default.a);
var validHourRegex = /\d{3,4}/;

var formatHour = function formatHour(hour) {
  if (!hour) return '';
  hour = hour.toString();
  hour = hour.length === 3 ? "0".concat(hour) : hour;

  if (validHourRegex.test(hour)) {
    var hours = hour.length === 4 ? hour.slice(0, 2) : "0".concat(hour.slice(0, 1));
    var minutes = hour.length === 4 ? hour.slice(2) : hour.slice(1);
    return "".concat(hours, ":").concat(minutes);
  } else {
    return 'unknown';
  }
};

var getOpeningHours = function getOpeningHours(open, close) {
  return !open || !close ? 'closed' : "".concat(formatHour(open), " - ").concat(formatHour(close));
};

var StoreOpeningHours_StoreOpeningHours = function StoreOpeningHours(_ref) {
  var store = _ref.store;
  var sunday = cx(storeOpeningHours_default.a.time, {
    closed: getOpeningHours(store.Sunday_Open, store.Sunday_Close) === 'closed'
  });
  return external__react_["createElement"]("dl", {
    className: storeOpeningHours_default.a.container
  }, external__react_["createElement"]("div", {
    className: storeOpeningHours_default.a.days
  }, external__react_["createElement"]("dt", {
    className: storeOpeningHours_default.a.day
  }, "Monday"), external__react_["createElement"]("dt", {
    className: storeOpeningHours_default.a.day
  }, "Tuesday"), external__react_["createElement"]("dt", {
    className: storeOpeningHours_default.a.day
  }, "Wednesday"), external__react_["createElement"]("dt", {
    className: storeOpeningHours_default.a.day
  }, "Thursday"), external__react_["createElement"]("dt", {
    className: storeOpeningHours_default.a.day
  }, "Friday"), external__react_["createElement"]("dt", {
    className: storeOpeningHours_default.a.day
  }, "Monday"), external__react_["createElement"]("dt", {
    className: storeOpeningHours_default.a.day
  }, "Sunday")), external__react_["createElement"]("div", {
    className: storeOpeningHours_default.a.times
  }, external__react_["createElement"]("dd", {
    className: storeOpeningHours_default.a.time
  }, getOpeningHours(store.Monday_Open, store.Monday_Close)), external__react_["createElement"]("dd", {
    className: storeOpeningHours_default.a.time
  }, getOpeningHours(store.Tuesday_Open, store.Tuesday_Close)), external__react_["createElement"]("dd", {
    className: storeOpeningHours_default.a.time
  }, getOpeningHours(store.Wednesday_Open, store.Wednesday_Close)), external__react_["createElement"]("dd", {
    className: storeOpeningHours_default.a.time
  }, getOpeningHours(store.Thursday_Open, store.Thursday_Close)), external__react_["createElement"]("dd", {
    className: storeOpeningHours_default.a.time
  }, getOpeningHours(store.Friday_Open, store.Friday_Close)), external__react_["createElement"]("dd", {
    className: storeOpeningHours_default.a.time
  }, getOpeningHours(store.Saturday_Open, store.Saturday_Close)), external__react_["createElement"]("dd", {
    className: sunday
  }, getOpeningHours(store.Sunday_Open, store.Sunday_Close))));
};

/* harmony default export */ var components_StoreOpeningHours_StoreOpeningHours = (StoreOpeningHours_StoreOpeningHours);
// EXTERNAL MODULE: external "prop-types"
var external__prop_types_ = __webpack_require__(6);
var external__prop_types__default = /*#__PURE__*/__webpack_require__.n(external__prop_types_);

// EXTERNAL MODULE: ./components/Store/store.scss
var Store_store = __webpack_require__(107);
var store_default = /*#__PURE__*/__webpack_require__.n(Store_store);

// CONCATENATED MODULE: ./components/Store/Store.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Store_cx = bind__default.a.bind(store_default.a);

var Store_Store =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Store, _React$Component);

  function Store() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Store);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Store.__proto__ || Object.getPrototypeOf(Store)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "onStoreClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        event.preventDefault();
        var onStoreSelect = _this.props.onStoreSelect;
        onStoreSelect && onStoreSelect(_this.props.code || 0);
      }
    }), _temp));
  }

  _createClass(Store, [{
    key: "render",
    value: function render() {
      var store = this.props;
      var classes = Store_cx(store_default.a.item, {
        highlight: store.highlight
      });
      return external__react__default.a.createElement("article", {
        className: classes
      }, external__react__default.a.createElement("div", {
        className: store_default.a.content
      }, external__react__default.a.createElement("a", {
        className: store_default.a.link,
        href: "#",
        onClick: this.onStoreClick
      }, external__react__default.a.createElement("h3", {
        className: store_default.a.title,
        "data-min": true
      }, store.storeName), external__react__default.a.createElement("dl", {
        className: store_default.a.location
      }, external__react__default.a.createElement("dd", null, external__react__default.a.createElement("div", null, store.streetName, " ", store.streetNumber), external__react__default.a.createElement("div", null, store.postalCode, " ", store.town))))), external__react__default.a.createElement("div", {
        className: store_default.a.openingHours
      }, external__react__default.a.createElement(components_StoreOpeningHours_StoreOpeningHours, {
        store: store
      })));
    }
  }]);

  return Store;
}(external__react__default.a.Component);

/* harmony default export */ var components_Store_Store = (Store_Store);
// EXTERNAL MODULE: ./components/StoreList/storeList.scss
var storeList = __webpack_require__(108);
var storeList_default = /*#__PURE__*/__webpack_require__.n(storeList);

// CONCATENATED MODULE: ./components/StoreList/StoreList.js
function StoreList__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { StoreList__typeof = function _typeof(obj) { return typeof obj; }; } else { StoreList__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return StoreList__typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function StoreList__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StoreList__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function StoreList__createClass(Constructor, protoProps, staticProps) { if (protoProps) StoreList__defineProperties(Constructor.prototype, protoProps); if (staticProps) StoreList__defineProperties(Constructor, staticProps); return Constructor; }

function StoreList__possibleConstructorReturn(self, call) { if (call && (StoreList__typeof(call) === "object" || typeof call === "function")) { return call; } return StoreList__assertThisInitialized(self); }

function StoreList__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function StoreList__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var StoreList_StoreList =
/*#__PURE__*/
function (_React$Component) {
  StoreList__inherits(StoreList, _React$Component);

  function StoreList() {
    var _ref;

    var _temp, _this;

    StoreList__classCallCheck(this, StoreList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return StoreList__possibleConstructorReturn(_this, (_temp = _this = StoreList__possibleConstructorReturn(this, (_ref = StoreList.__proto__ || Object.getPrototypeOf(StoreList)).call.apply(_ref, [this].concat(args))), Object.defineProperty(StoreList__assertThisInitialized(_this), "stores", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {}
    }), _temp));
  }

  StoreList__createClass(StoreList, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.highlightStore !== this.props.highlightStore) {
        this.stores[this.props.highlightStore].scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          _props$items = _props.items,
          items = _props$items === void 0 ? [] : _props$items,
          highlightStore = _props.highlightStore,
          storeAction = _props.storeAction,
          onStoreSelect = _props.onStoreSelect,
          chooseThisStore = _props.chooseThisStore;
      return external__react__default.a.createElement("ul", {
        className: storeList_default.a.list
      }, items.map(function (item) {
        return external__react__default.a.createElement("li", {
          ref: function ref(el) {
            _this2.stores[item.code] = el;
          },
          key: item.code
        }, external__react__default.a.createElement(components_Store_Store, _extends({}, item, {
          onStoreSelect: onStoreSelect,
          onStoreAction: storeAction,
          highlight: highlightStore === item.code,
          chooseThisStore: chooseThisStore
        })));
      }));
    }
  }]);

  return StoreList;
}(external__react__default.a.Component);

/* harmony default export */ var components_StoreList_StoreList = (StoreList_StoreList);
// EXTERNAL MODULE: ./components/StoreSearch/storeSearch.scss
var storeSearch = __webpack_require__(109);
var storeSearch_default = /*#__PURE__*/__webpack_require__.n(storeSearch);

// CONCATENATED MODULE: ./components/Icon/Search.js


var Search_Search = function Search(_ref) {
  var stroke = _ref.stroke;
  return external__react__default.a.createElement("svg", {
    viewBox: "0 0 64 64",
    height: 24,
    width: 24
  }, external__react__default.a.createElement("path", {
    d: "M38.192 38.191L50 50",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt"
  }), external__react__default.a.createElement("circle", {
    r: "13",
    cy: "29",
    cx: "29",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt"
  }));
};

/* harmony default export */ var Icon_Search = (Search_Search);
// CONCATENATED MODULE: ./components/StoreSearch/StoreSearch.js





var StoreSearch_StoreSearch = function StoreSearch(_ref) {
  var onFormSubmit = _ref.onFormSubmit,
      onQueryChange = _ref.onQueryChange,
      initialValue = _ref.initialValue,
      placeholder = _ref.placeholder;
  return external__react_["createElement"]("form", {
    className: storeSearch_default.a.form,
    noValidate: true,
    onSubmit: onFormSubmit
  }, external__react_["createElement"]("label", {
    className: storeSearch_default.a.control
  }, external__react_["createElement"]("input", {
    className: storeSearch_default.a.input,
    value: initialValue || '',
    onChange: function onChange(_ref2) {
      var target = _ref2.target;
      return onQueryChange(target.value);
    },
    placeholder: placeholder || null
  })), external__react_["createElement"]("button", {
    className: storeSearch_default.a.submit,
    type: "submit",
    "data-mouse": true
  }, external__react_["createElement"](Icon_Search, null)));
};

/* harmony default export */ var components_StoreSearch_StoreSearch = (StoreSearch_StoreSearch);
// EXTERNAL MODULE: external "react-google-maps"
var external__react_google_maps_ = __webpack_require__(110);
var external__react_google_maps__default = /*#__PURE__*/__webpack_require__.n(external__react_google_maps_);

// EXTERNAL MODULE: external "react-google-maps/lib/components/addons/MarkerClusterer"
var MarkerClusterer_ = __webpack_require__(111);
var MarkerClusterer__default = /*#__PURE__*/__webpack_require__.n(MarkerClusterer_);

// EXTERNAL MODULE: ./components/GoogleMaps/googleMaps.scss
var googleMaps = __webpack_require__(112);
var googleMaps_default = /*#__PURE__*/__webpack_require__.n(googleMaps);

// EXTERNAL MODULE: ./components/GoogleMaps/style.json
var style = __webpack_require__(113);
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// CONCATENATED MODULE: ./components/GoogleMaps/GoogleMaps.js
function GoogleMaps__extends() { GoogleMaps__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return GoogleMaps__extends.apply(this, arguments); }

function GoogleMaps__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { GoogleMaps__typeof = function _typeof(obj) { return typeof obj; }; } else { GoogleMaps__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return GoogleMaps__typeof(obj); }

function GoogleMaps__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GoogleMaps__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GoogleMaps__createClass(Constructor, protoProps, staticProps) { if (protoProps) GoogleMaps__defineProperties(Constructor.prototype, protoProps); if (staticProps) GoogleMaps__defineProperties(Constructor, staticProps); return Constructor; }

function GoogleMaps__possibleConstructorReturn(self, call) { if (call && (GoogleMaps__typeof(call) === "object" || typeof call === "function")) { return call; } return GoogleMaps__assertThisInitialized(self); }

function GoogleMaps__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function GoogleMaps__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }








var GoogleMaps_GMaps =
/*#__PURE__*/
function (_React$Component) {
  GoogleMaps__inherits(GMaps, _React$Component);

  function GMaps() {
    var _ref;

    var _temp, _this;

    GoogleMaps__classCallCheck(this, GMaps);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return GoogleMaps__possibleConstructorReturn(_this, (_temp = _this = GoogleMaps__possibleConstructorReturn(this, (_ref = GMaps.__proto__ || Object.getPrototypeOf(GMaps)).call.apply(_ref, [this].concat(args))), Object.defineProperty(GoogleMaps__assertThisInitialized(_this), "map", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {}
    }), Object.defineProperty(GoogleMaps__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        highlight: null,
        zoomLevel: 7
      }
    }), Object.defineProperty(GoogleMaps__assertThisInitialized(_this), "handleMarkerClustererClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(markerClusterer) {
        var clickedMarkers = markerClusterer.getMarkers();
        console.log("Current clicked markers length: ".concat(clickedMarkers.length));
      }
    }), Object.defineProperty(GoogleMaps__assertThisInitialized(_this), "handleMarkerClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(code) {
        var _this$props = _this.props,
            markers = _this$props.markers,
            onMarkerClick = _this$props.onMarkerClick;
        var highlightPos = markers.find(function (marker) {
          return marker.code === code;
        }) || {};
        var newZoomLevel = _this.state.zoomLevel < 14 ? 14 : _this.state.zoomLevel;

        _this.map.panTo(highlightPos.position);

        _this.setState({
          zoomLevel: newZoomLevel
        });

        onMarkerClick && onMarkerClick(code);
      }
    }), Object.defineProperty(GoogleMaps__assertThisInitialized(_this), "handleZoomChanged", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          zoomLevel: _this.map.getZoom()
        });
      }
    }), _temp));
  }

  GoogleMaps__createClass(GMaps, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.highlight !== this.props.highlight) {
        this.handleMarkerClick(this.props.highlight);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external__react__default.a.createElement(external__react_google_maps_["GoogleMap"], {
        ref: function ref(map) {
          _this2.map = map;
        },
        zoom: this.state.zoomLevel,
        defaultCenter: this.props.center,
        onZoomChanged: this.handleZoomChanged,
        options: {
          streetViewControl: false,
          fullscreenControl: false,
          styles: style_default.a
        }
      }, external__react__default.a.createElement(MarkerClusterer_["MarkerClusterer"], {
        onClick: this.handleMarkerClustererClick,
        averageCenter: true,
        enableRetinaIcons: true,
        gridSize: 60
      }, this.props.markers.map(function (marker) {
        return external__react__default.a.createElement(external__react_google_maps_["Marker"], {
          key: marker.code,
          position: marker.position,
          onClick: function onClick() {
            return _this2.handleMarkerClick(marker.code);
          }
        });
      })));
    }
  }]);

  return GMaps;
}(external__react__default.a.Component);

var GoogleMaps = Object(external__react_google_maps_["withScriptjs"])(Object(external__react_google_maps_["withGoogleMap"])(GoogleMaps_GMaps));

var GoogleMaps_DefaultProps =
/*#__PURE__*/
function (_React$Component2) {
  GoogleMaps__inherits(DefaultProps, _React$Component2);

  function DefaultProps() {
    GoogleMaps__classCallCheck(this, DefaultProps);

    return GoogleMaps__possibleConstructorReturn(this, (DefaultProps.__proto__ || Object.getPrototypeOf(DefaultProps)).apply(this, arguments));
  }

  GoogleMaps__createClass(DefaultProps, [{
    key: "render",
    value: function render() {
      var props = this.props;
      console.log(process.env.GOOGLE_MAPS_API_KEY);
      return external__react__default.a.createElement(GoogleMaps, GoogleMaps__extends({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDM5I91fVitHaBbRbFDkL-q-Ubng3vk_gA&v=3.exp",
        containerElement: external__react__default.a.createElement("div", {
          className: googleMaps_default.a.container
        }),
        loadingElement: external__react__default.a.createElement("div", {
          className: googleMaps_default.a.loader
        }),
        mapElement: external__react__default.a.createElement("div", {
          className: googleMaps_default.a.inner
        })
      }, props));
    }
  }]);

  return DefaultProps;
}(external__react__default.a.Component);

/* harmony default export */ var GoogleMaps_GoogleMaps = (GoogleMaps_DefaultProps);
// EXTERNAL MODULE: ./components/Loader/loader.scss
var loader = __webpack_require__(114);
var loader_default = /*#__PURE__*/__webpack_require__.n(loader);

// CONCATENATED MODULE: ./components/Loader/Loader.js



var Loader_Loader = function Loader() {
  return external__react_["createElement"]("div", {
    className: loader_default.a.loader,
    "aria-hidden": "true"
  });
};

/* harmony default export */ var components_Loader_Loader = (Loader_Loader);
// EXTERNAL MODULE: external "isomorphic-unfetch"
var external__isomorphic_unfetch_ = __webpack_require__(57);
var external__isomorphic_unfetch__default = /*#__PURE__*/__webpack_require__.n(external__isomorphic_unfetch_);

// EXTERNAL MODULE: ./components/StoreFinder/storeFinder.scss
var storeFinder = __webpack_require__(115);
var storeFinder_default = /*#__PURE__*/__webpack_require__.n(storeFinder);

// EXTERNAL MODULE: ./components/ResponsiveWrapper/Responsive.js
var Responsive = __webpack_require__(4);

// CONCATENATED MODULE: ./components/StoreFinder/StoreFinder.js
function StoreFinder__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { StoreFinder__typeof = function _typeof(obj) { return typeof obj; }; } else { StoreFinder__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return StoreFinder__typeof(obj); }

function StoreFinder__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StoreFinder__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function StoreFinder__createClass(Constructor, protoProps, staticProps) { if (protoProps) StoreFinder__defineProperties(Constructor.prototype, protoProps); if (staticProps) StoreFinder__defineProperties(Constructor, staticProps); return Constructor; }

function StoreFinder__possibleConstructorReturn(self, call) { if (call && (StoreFinder__typeof(call) === "object" || typeof call === "function")) { return call; } return StoreFinder__assertThisInitialized(self); }

function StoreFinder__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function StoreFinder__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }











var StoreFinder_StoreFinder =
/*#__PURE__*/
function (_React$Component) {
  StoreFinder__inherits(StoreFinder, _React$Component);

  function StoreFinder() {
    var _ref;

    var _temp, _this;

    StoreFinder__classCallCheck(this, StoreFinder);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return StoreFinder__possibleConstructorReturn(_this, (_temp = _this = StoreFinder__possibleConstructorReturn(this, (_ref = StoreFinder.__proto__ || Object.getPrototypeOf(StoreFinder)).call.apply(_ref, [this].concat(args))), Object.defineProperty(StoreFinder__assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        isLoading: true,
        search: _this.props.initialValue || '',
        allStores: [],
        stores: [],
        selectedStore: null,
        highlightStore: null
      }
    }), Object.defineProperty(StoreFinder__assertThisInitialized(_this), "updateSearchQuery", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(query) {
        _this.setState({
          search: query
        });
      }
    }), Object.defineProperty(StoreFinder__assertThisInitialized(_this), "onSearchSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        event.preventDefault();

        _this.commitSearch();
      }
    }), Object.defineProperty(StoreFinder__assertThisInitialized(_this), "commitSearch", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var _this$state = _this.state,
            allStores = _this$state.allStores,
            search = _this$state.search;
        var nextStores = allStores.filter(function (store) {
          return _this.searchStore(store, search);
        });

        _this.setState({
          stores: nextStores
        }, function () {
          return window.history.replaceState({}, 'store-locator', "/store-locator?search=".concat(search));
        });
      }
    }), _temp));
  }

  StoreFinder__createClass(StoreFinder, [{
    key: "searchStore",
    value: function searchStore(store, query) {
      return Object.keys(store).some(function (key) {
        var value = store[key];

        if (typeof value === 'string' || typeof value === 'number') {
          var string = value.toString();
          return string.toLowerCase().includes(query.toLowerCase());
        }

        return false;
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      external__isomorphic_unfetch__default()("".concat(this.props.storesApiUrl, "/list")).then(function (response) {
        return response.json();
      }).then(function (stores) {
        _this2.setState({
          isLoading: false,
          allStores: stores,
          stores: stores
        }, function () {
          if (_this2.props.initialValue !== '') {
            _this2.commitSearch();
          }
        });
      }).catch(function (err) {
        return console.error(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          stores = _state.stores,
          highlightStore = _state.highlightStore,
          isLoading = _state.isLoading,
          search = _state.search;
      var _props = this.props,
          center = _props.center,
          storeAction = _props.storeAction,
          noResultText = _props.noResultText,
          title = _props.title,
          placeholderText = _props.placeholderText,
          chooseThisStore = _props.chooseThisStore;
      var markers = stores.map(function (store) {
        return {
          position: {
            lat: store.lat * 1,
            lng: store.lon * 1
          },
          code: store.code
        };
      });
      return external__react_["createElement"]("div", {
        className: storeFinder_default.a.wrapper
      }, external__react_["createElement"]("article", {
        className: storeFinder_default.a.inner
      }, external__react_["createElement"]("main", {
        className: storeFinder_default.a.stores
      }, external__react_["createElement"]("h2", {
        className: storeFinder_default.a.title
      }, title), external__react_["createElement"](components_StoreSearch_StoreSearch, {
        onQueryChange: this.updateSearchQuery,
        onFormSubmit: this.onSearchSubmit,
        initialValue: search,
        placeholder: placeholderText
      }), isLoading && external__react_["createElement"]("div", {
        className: storeFinder_default.a.loader
      }, external__react_["createElement"](components_Loader_Loader, null)), stores.length > 0 && external__react_["createElement"](components_StoreList_StoreList, {
        items: stores,
        highlightStore: highlightStore,
        onStoreSelect: function onStoreSelect(code) {
          return _this3.setState({
            highlightStore: code
          });
        },
        storeAction: storeAction,
        chooseThisStore: chooseThisStore
      }), stores.length === 0 && !isLoading && external__react_["createElement"]("h2", {
        className: storeFinder_default.a.message
      }, noResultText)), external__react_["createElement"](Responsive["a" /* LG */], null, external__react_["createElement"]("aside", {
        className: storeFinder_default.a.map
      }, external__react_["createElement"](GoogleMaps_GoogleMaps, {
        ref: function ref(maps) {
          _this3.maps = maps;
        },
        center: center,
        markers: markers,
        onMarkerClick: function onMarkerClick(code) {
          _this3.setState({
            highlightStore: code
          });
        },
        highlight: this.state.highlightStore
      })))));
    }
  }]);

  return StoreFinder;
}(external__react_["Component"]);

Object.defineProperty(StoreFinder_StoreFinder, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    title: 'Find your store',
    noResultText: 'No Stores found for your query',
    placeholderText: 'Postal code, city or town',
    chooseThisStore: 'Choose this store'
  }
});
/* harmony default export */ var components_StoreFinder_StoreFinder = (StoreFinder_StoreFinder);
// EXTERNAL MODULE: external "react-apollo"
var external__react_apollo_ = __webpack_require__(5);
var external__react_apollo__default = /*#__PURE__*/__webpack_require__.n(external__react_apollo_);

// EXTERNAL MODULE: external "apollo-boost"
var external__apollo_boost_ = __webpack_require__(7);
var external__apollo_boost__default = /*#__PURE__*/__webpack_require__.n(external__apollo_boost_);

// CONCATENATED MODULE: ./pages/store-locator.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEO", function() { return SEO; });


var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["{ \n  storeLocator {\n  \tseo {\n  \t    title\n  \t    description\n  \t}\n  }\n}"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function store_locator__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { store_locator__typeof = function _typeof(obj) { return typeof obj; }; } else { store_locator__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return store_locator__typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function store_locator__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function store_locator__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function store_locator__createClass(Constructor, protoProps, staticProps) { if (protoProps) store_locator__defineProperties(Constructor.prototype, protoProps); if (staticProps) store_locator__defineProperties(Constructor, staticProps); return Constructor; }

function store_locator__possibleConstructorReturn(self, call) { if (call && (store_locator__typeof(call) === "object" || typeof call === "function")) { return call; } return store_locator__assertThisInitialized(self); }

function store_locator__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function store_locator__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var store_locator_Page =
/*#__PURE__*/
function (_React$Component) {
  store_locator__inherits(Page, _React$Component);

  function Page() {
    store_locator__classCallCheck(this, Page);

    return store_locator__possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  store_locator__createClass(Page, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          currentUrl = _props.currentUrl,
          query = _props.query;
      var portugalCenter = {
        lat: 39.4036393,
        lng: -8.1725036
      };
      return external__react__default.a.createElement(external__react_apollo_["Query"], {
        query: SEO
      }, function (_ref) {
        var loading = _ref.loading,
            seo = _ref.data.storeLocator.seo;
        return external__react__default.a.createElement(Layout["a" /* default */], {
          seo: !seo ? {} : seo,
          currentUrl: currentUrl,
          hideUI: true,
          isStore: true
        }, external__react__default.a.createElement(components_StoreFinder_StoreFinder, {
          storesApiUrl: "https://api.grandvision.io/stores",
          center: portugalCenter,
          initialValue: query.search,
          title: "Store Locator"
        }));
      });
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator__default.a.mark(function _callee(_ref2) {
        var req, query, pathname;
        return regenerator__default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref2.req, query = _ref2.query, pathname = _ref2.pathname;
                return _context.abrupt("return", {
                  currentUrl: pathname,
                  query: query
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Page;
}(external__react__default.a.Component);

/* harmony default export */ var store_locator = __webpack_exports__["default"] = (store_locator_Page);
var SEO = Object(external__apollo_boost_["gql"])(_templateObject);

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = {
	"container": "storeOpeningHours__container___1OWLO",
	"day": "storeOpeningHours__day___Ao7Ae",
	"time": "storeOpeningHours__time___3xz2-",
	"times": "storeOpeningHours__times___LPzIv",
	"closed": "storeOpeningHours__closed___1yMXx"
};

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = {
	"item": "store__item___1tuFH",
	"title": "store__title___1EcwX",
	"link": "store__link___n16R3",
	"openingHours": "store__openingHours___9WTmc",
	"highlight": "store__highlight___27Wq1",
	"content": "store__content___2IZsj",
	"location": "store__location___2hUXs",
	"button": "store__button___1rsrB"
};

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = {
	"list": "storeList__list___1F5m8"
};

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = {
	"input": "storeSearch__input___3kjJx",
	"form": "storeSearch__form___3i5RC",
	"control": "storeSearch__control___2vlfs",
	"submit": "storeSearch__submit___2nkL8"
};

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = require("react-google-maps/lib/components/addons/MarkerClusterer");

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = {
	"container": "googleMaps__container___150tA",
	"inner": "googleMaps__inner___AKPUy",
	"loader": "googleMaps__loader___1zwZD"
};

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = {
	"loader": "loader__loader___blhHF",
	"spin": "loader__spin___2e2od"
};

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "storeFinder__wrapper___1kUhd",
	"message": "storeFinder__message___3ZISh",
	"title": "storeFinder__title___I9RNW",
	"inner": "storeFinder__inner___3Oitg",
	"loader": "storeFinder__loader___2RhXc",
	"stores": "storeFinder__stores___1UhKF",
	"map": "storeFinder__map___uwccA"
};

/***/ })
/******/ ]);