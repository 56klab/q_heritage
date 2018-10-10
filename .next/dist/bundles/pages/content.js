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
/******/ 	return __webpack_require__(__webpack_require__.s = 90);
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
/* 9 */
/***/ (function(module, exports) {

module.exports = {
	"align": "scroller__align___3PH4C",
	"scroller": "scroller__scroller___3n1ax",
	"list": "scroller__list___14zgW scroller__align___3PH4C",
	"wrapper": "scroller__wrapper___1MeUu scroller__align___3PH4C",
	"inner": "scroller__inner___1VzdQ",
	"progress": "scroller__progress___2vf68"
};

/***/ }),
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
/* 13 */
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),
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
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__titleRevealer_scss__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__titleRevealer_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__titleRevealer_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);




var cx = __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_1__titleRevealer_scss___default.a);
var SubtitleRevealer = __WEBPACK_IMPORTED_MODULE_0_react___default.a.forwardRef(function (_ref, ref) {
  var _ref$subtitle = _ref.subtitle,
      subtitle = _ref$subtitle === void 0 ? false : _ref$subtitle,
      collection = _ref.collection;
  var subtitleClass = cx({
    collection: collection
  }, {
    revealerSubtitle: true
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: subtitleClass
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h4", {
    className: __WEBPACK_IMPORTED_MODULE_1__titleRevealer_scss___default.a.subtitle,
    ref: ref
  }, subtitle ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, subtitle) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
    href: '/collections'
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    "data-min": true
  }, "collections")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", null, " \xB7 "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
    as: "/collections/".concat(collection.slug),
    href: "/collection?slug=".concat(collection.slug)
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    "data-min": true
  }, collection.name)))));
});
/* harmony default export */ __webpack_exports__["a"] = (SubtitleRevealer);

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = {
	"double": "titleRevealer__double___7b8tF",
	"single": "titleRevealer__single___166ct",
	"triple": "titleRevealer__triple___1APdx",
	"paragraph": "titleRevealer__paragraph___nlvHj",
	"revealerSubtitle": "titleRevealer__revealerSubtitle___23IoO",
	"revealer": "titleRevealer__revealer___2F_NL",
	"phrase": "titleRevealer__phrase___16drS",
	"subtitle": "titleRevealer__subtitle___3ovgI",
	"title": "titleRevealer__title___12Yv_"
};

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__titleRevealer_scss__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__titleRevealer_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__titleRevealer_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames_bind__);



var cx = __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_1__titleRevealer_scss___default.a);
var TitleRevealer = __WEBPACK_IMPORTED_MODULE_0_react___default.a.forwardRef(function (_ref, ref) {
  var title = _ref.title,
      legal = _ref.legal,
      _ref$split = _ref.split,
      split = _ref$split === void 0 ? false : _ref$split;
  var phrase = title.split(/\n|<br.*?>/gi);
  var titleClass = cx({
    revealer: true
  }, {
    legal: legal
  }, {
    paragraph: !split
  }, {
    single: split && phrase.length === 1
  }, {
    double: split && phrase.length === 2
  }, {
    triple: split && phrase.length === 3
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: titleClass
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: __WEBPACK_IMPORTED_MODULE_1__titleRevealer_scss___default.a.title,
    ref: ref
  }, split ? phrase.map(function (p, index) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
      key: index,
      className: __WEBPACK_IMPORTED_MODULE_1__titleRevealer_scss___default.a.phrase
    }, p);
  }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: __WEBPACK_IMPORTED_MODULE_1__titleRevealer_scss___default.a.phrase
  }, title))));
});
/* harmony default export */ __webpack_exports__["a"] = (TitleRevealer);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imageRevealer_scss__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imageRevealer_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__imageRevealer_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Global_imgix__ = __webpack_require__(10);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var cx = __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_1__imageRevealer_scss___default.a);

var ImageReveal =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ImageReveal, _React$Component);

  function ImageReveal(props) {
    var _this;

    _classCallCheck(this, ImageReveal);

    _this = _possibleConstructorReturn(this, (ImageReveal.__proto__ || Object.getPrototypeOf(ImageReveal)).call(this, props));
    _this.divElement = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createRef();
    _this.state = {
      width: 0,
      height: 0
    };
    return _this;
  }

  _createClass(ImageReveal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.divElement.current) {
        var bounding = this.divElement.current.getBoundingClientRect();
        this.setState({
          height: bounding.height,
          width: bounding.width
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          src = _props.src,
          paragraph = _props.paragraph,
          cover = _props.cover,
          imageRef = _props.imageRef;
      var _state = this.state,
          height = _state.height,
          width = _state.width;
      var imageClass = cx({
        revealer: true
      }, {
        paragraph: paragraph
      }, {
        cover: cover
      });
      var url = '';

      if (width && height) {
        url = Object(__WEBPACK_IMPORTED_MODULE_3__Global_imgix__["a" /* default */])(src, {
          w: width,
          h: height
        });
      } else if (cover) {
        url = Object(__WEBPACK_IMPORTED_MODULE_3__Global_imgix__["a" /* default */])(src, {
          w: 1200,
          h: 800
        });
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: imageClass,
        ref: imageRef
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_1__imageRevealer_scss___default.a.image,
        ref: this.divElement,
        style: {
          backgroundImage: "url(".concat(url, ")")
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_1__imageRevealer_scss___default.a.sliceContainer
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_1__imageRevealer_scss___default.a.slice
      })));
    }
  }]);

  return ImageReveal;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ImageReveal);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Layout__ = __webpack_require__(19);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__Layout__["a" /* default */]);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scroller_scss__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scroller_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scroller_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prefix__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prefix___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prefix__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dom_classes__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dom_classes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_dom_classes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_gsap__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_gsap__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







var Scroller =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Scroller, _React$Component);

  function Scroller(props) {
    var _this;

    _classCallCheck(this, Scroller);

    _this = _possibleConstructorReturn(this, (Scroller.__proto__ || Object.getPrototypeOf(Scroller)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "refresh", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var isFilter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        _this.dom = _objectSpread({}, _this.dom, {
          listener: document.body
        }, {
          divs: Array.prototype.slice.call(_this.dom.section.current.childNodes, 0)
        });

        _this.resize();
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "addEvents", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.on();

        ['wheel', 'DOMMouseScroll', 'mousewheel'].forEach(function (event) {
          return window.addEventListener(event, _this.checkEls);
        });
        window.addEventListener('resize', _this.resize);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "removeEvents", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.off();

        ['wheel', 'DOMMouseScroll', 'mousewheel'].forEach(function (event) {
          return window.removeEventListener(event, _this.checkEls);
        });
        window.removeEventListener('resize', _this.resize);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "destroy", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.vars.direction === 'vertical' ? __WEBPACK_IMPORTED_MODULE_3_dom_classes___default.a.remove(_this.dom.listener, 'y-scroll') : __WEBPACK_IMPORTED_MODULE_3_dom_classes___default.a.remove(_this.dom.listener, 'x-scroll');
        _this.vars.current = 0;
        _this.vs && (_this.vs.destroy(), _this.vs = null);

        _this.removeEvents();
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "on", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var requestAnimationFrame = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        if (_this.isRAFCanceled) {
          _this.isRAFCanceled = false;
        }

        _this.vs && _this.vs.on(_this.calc);
        requestAnimationFrame && _this.requestAnimationFrame();
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "off", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var cancelAnimationFrame = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        _this.vs && _this.vs.off(_this.calc);
        cancelAnimationFrame && _this.cancelAnimationFrame();
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "requestAnimationFrame", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.rAF = requestAnimationFrame(_this.run);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "cancelAnimationFrame", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.isRAFCanceled = true;
        cancelAnimationFrame(_this.rAF);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "resize", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var isFilter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        _this.resizing = true;
        _this.vars.current = _this.vars.last;

        _this.getCache();

        _this.vars.height = window.innerHeight;

        _this.clampTarget();

        _this.resizing = false;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "checkEls", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_ref) {
        var target = _ref.target;

        if (target.classList.contains('remove-events')) {
          if (!_this.vars.onEls) {
            _this.off();

            _this.vars.onEls = true;
          }
        } else {
          if (_this.vars.onEls) {
            _this.on();

            _this.vars.onEls = false;
          }
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getCache", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.cache = [];
        var totalWidth = 0;

        _this.dom.divs.forEach(function (el, index) {
          var scrollX = _this.vars.target;
          var bounding = el.getBoundingClientRect();
          var bounds = {
            el: el,
            state: false,
            left: bounding.left + scrollX,
            right: bounding.right + scrollX,
            center: bounding.width / 2
          };
          el.classList.add('column');
          totalWidth += bounding.width;

          _this.cache.push(bounds);
        });

        _this.dom.section.current.style.width = "".concat(_this.vars.width, "px");
        _this.dom.section.current.style.width = "".concat(_this.vars.width, "px");
        _this.vars.bounding = totalWidth - _this.vars.width;
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "inViewport", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(el, index) {
        if (!_this.cache || _this.resizing) return;
        var cache = _this.cache[index];
        var current = _this.vars.current;
        var left = Math.round(cache.left - current);
        var right = Math.round(cache.right - current);
        var inView = right > 0 && left < _this.vars.width;

        if (inView) {
          if (!el.state) {
            el.classList.add('in-viewport');
            _this.cache[index].state = true;
          }
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "calc", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var delta = e.deltaX || e.deltaY;
        _this.vars.target += delta * -1;

        _this.clampTarget();
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "clampTarget", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.vars.target = Math.round(Math.max(0, Math.min(_this.vars.target, _this.vars.bounding)));
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "getTransform", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_value) {
        return _this.vars.direction === 'vertical' ? 'translate3d(0,' + _value + 'px,0)' : 'translate3d(' + _value + 'px,0,0)';
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "run", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.dom.divs.forEach(_this.inViewport);

        _this.dom.section.current.style[_this.prefix] = _this.getTransform(_this.vars.current * -1);
        if (_this.isRAFCanceled) return;
        _this.vars.current += (_this.vars.target - _this.vars.current) * _this.vars.ease;
        _this.vars.current < .1 && (_this.vars.current = 0);

        _this.requestAnimationFrame();

        _this.setState({
          percentage: _this.vars.current / _this.vars.bounding || 0
        });

        _this.vars.last = _this.vars.current;
      }
    });
    _this.state = {
      percentage: 0
    };
    _this.prefix = __WEBPACK_IMPORTED_MODULE_2_prefix___default()('transform');
    _this.rAF = undefined;
    _this.isRAFCanceled = false;
    _this.resizing = false;
    _this.cache = null;
    _this.vars = {
      ease: 0.05,
      current: 0,
      last: 0,
      target: 0,
      height: 0,
      width: 0,
      bounding: 0,
      timer: null,
      ticking: false,
      onEls: false
    };
    _this.dom = {
      listener: null,
      section: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createRef(),
      divs: []
    };
    _this.vs = null;
    return _this;
  }

  _createClass(Scroller, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var VS = __webpack_require__(43);

      this.vars = _objectSpread({}, this.vars, {
        height: window.innerHeight
      }, {
        width: window.innerWidth
      });
      this.vs = new VS({
        limitInertia: false,
        mouseMultiplier: 1,
        touchMultiplier: 1.75,
        firefoxMultiplier: 30,
        preventTouch: false
      });
      this.dom = _objectSpread({}, this.dom, {
        listener: document.body
      }, {
        divs: Array.prototype.slice.call(this.dom.section.current.childNodes, 0)
      });
      this.dom.section.current.style.width = "".concat(this.vars.width, "px");
      this.addEvents();
      this.resize();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.children !== prevProps.children) {
        this.refresh(this.props.isFilter);
      }

      if (this.props.isFilter !== prevProps.isFilter) {
        this.vars.width = this.props.isFilter ? window.innerWidth - 320 : window.innerWidth;
        !this.props.isFilter && (this.vars.target -= 320);
        __WEBPACK_IMPORTED_MODULE_4_gsap__["TweenMax"].to(this.dom.section.current.parentElement, .7, {
          x: this.props.isFilter ? 320 : 0
        });
        this.resize(this.props.isFilter);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.destroy();
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          isProductList = _props.isProductList;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_1__scroller_scss___default.a.scroller
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: __WEBPACK_IMPORTED_MODULE_1__scroller_scss___default.a.progress,
        style: {
          width: this.vars.width,
          transform: "scaleX(".concat(this.state.percentage, ")")
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: __WEBPACK_IMPORTED_MODULE_1__scroller_scss___default.a.list,
        ref: this.dom.section
      }, children));
    }
  }]);

  return Scroller;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Scroller);

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = {
	"align": "scroller__align___3PH4C",
	"scroller": "scroller__scroller___3n1ax",
	"list": "scroller__list___14zgW scroller__align___3PH4C",
	"wrapper": "scroller__wrapper___1MeUu scroller__align___3PH4C",
	"inner": "scroller__inner___1VzdQ",
	"progress": "scroller__progress___2vf68"
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("prefix");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("dom-classes");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("virtual-scroll");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = {
	"revealer": "imageRevealer__revealer___7Whq7",
	"paragraph": "imageRevealer__paragraph___1UXs9",
	"image": "imageRevealer__image___kXHXy",
	"cover": "imageRevealer__cover___3Mnqd",
	"sliceContainer": "imageRevealer__sliceContainer___2Zgvp",
	"slice": "imageRevealer__slice___3kqsF",
	"reveal": "imageRevealer__reveal___3RhBg",
	"revealOut": "imageRevealer__revealOut___2_K7v"
};

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var View = function View(_ref) {
  var stroke = _ref.stroke;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
    viewBox: "0 0 64 64",
    height: 24,
    width: 24
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M32 14.5C14.8 14.5 2.5 32 2.5 32S14.8 49.5 32 49.5 61.5 32 61.5 32 49.2 14.5 32 14.5z",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("circle", {
    cx: "32",
    cy: "31.5",
    r: "10",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M28.5 29.5a4 4 0 0 0 3.5 6",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (View);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__headingGroup_scss__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__headingGroup_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__headingGroup_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TitleRevealer__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ImageRevealer_ImageRevealer__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TitleRevealer_SubtitleRevealer__ = __webpack_require__(34);






var HeadingGroup = function HeadingGroup(_ref) {
  var _ref$image = _ref.image;
  _ref$image = _ref$image === void 0 ? false : _ref$image;
  var _ref$image$url = _ref$image.url,
      url = _ref$image$url === void 0 ? false : _ref$image$url,
      title = _ref.title,
      subtitle = _ref.subtitle,
      legal = _ref.legal;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: __WEBPACK_IMPORTED_MODULE_1__headingGroup_scss___default.a.wrapper
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__headingGroup_scss___default.a.cover
  }, url && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__ImageRevealer_ImageRevealer__["a" /* default */], {
    src: url,
    paragraph: true,
    cover: true
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "".concat(__WEBPACK_IMPORTED_MODULE_1__headingGroup_scss___default.a.inner, " ").concat(legal && __WEBPACK_IMPORTED_MODULE_1__headingGroup_scss___default.a.legal)
  }, subtitle && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__TitleRevealer_SubtitleRevealer__["a" /* default */], {
    subtitle: subtitle
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__TitleRevealer__["a" /* default */], {
    title: title,
    split: true
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (HeadingGroup);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TitleRevealer__ = __webpack_require__(36);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__TitleRevealer__["a" /* default */]);

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./components/ColumnParagraphGroup/paragraphGroup.scss
var paragraphGroup = __webpack_require__(49);
var paragraphGroup_default = /*#__PURE__*/__webpack_require__.n(paragraphGroup);

// EXTERNAL MODULE: ./components/Icon/View.js
var View = __webpack_require__(45);

// EXTERNAL MODULE: ./components/ImageRevealer/ImageRevealer.js
var ImageRevealer = __webpack_require__(37);

// CONCATENATED MODULE: ./components/ImageRevealer/index.js

/* harmony default export */ var components_ImageRevealer = (ImageRevealer["a" /* default */]);
// EXTERNAL MODULE: ./components/IconButton/index.js
var IconButton = __webpack_require__(8);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "gsap"
var external__gsap_ = __webpack_require__(13);
var external__gsap__default = /*#__PURE__*/__webpack_require__.n(external__gsap_);

// EXTERNAL MODULE: external "react-markdown"
var external__react_markdown_ = __webpack_require__(50);
var external__react_markdown__default = /*#__PURE__*/__webpack_require__.n(external__react_markdown_);

// CONCATENATED MODULE: ./components/Global/ScrollableText.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





var ScrollableText_ScrollableText =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ScrollableText, _React$Component);

  function ScrollableText(props) {
    var _this;

    _classCallCheck(this, ScrollableText);

    _this = _possibleConstructorReturn(this, (ScrollableText.__proto__ || Object.getPrototypeOf(ScrollableText)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "transform", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.current += _this.target - _this.current;
        _this.current < .1 && (_this.current = 0);
        external__gsap_["TweenMax"].to(_this.txt.current.firstChild, 0, {
          y: _this.current * -1
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "clampTarget", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.target = Math.round(Math.max(0, Math.min(_this.target, _this.bounding)));
      }
    });
    _this.txt = external__react__default.a.createRef();
    _this.init = _this.init.bind(_assertThisInitialized(_this));
    _this.wheel = _this.wheel.bind(_assertThisInitialized(_this));
    _this.start = _this.start.bind(_assertThisInitialized(_this));
    _this.move = _this.move.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ScrollableText, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(nextProps) {
      if (this.props.text !== nextProps.text) {
        this.init();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.init, false);
      this.init();
    }
  }, {
    key: "init",
    value: function init() {
      //reset scroller position
      external__gsap_["TweenMax"].to(this.txt.current.firstChild, 0, {
        y: 0
      }); //reset vars

      this.last = 0;
      this.current = 0;
      this.target = 0;
      this.bounding = 0;
      this.last = 0;
      var innerBounds = this.txt.current.firstChild.getBoundingClientRect();
      var outerBounds = this.txt.current.getBoundingClientRect();

      if (innerBounds.height > outerBounds.height) {
        this.bounding = innerBounds.height - outerBounds.height + (innerBounds.top - outerBounds.top);
        this.txt.current.classList.add('remove-events');
      } else {
        this.bounding = 0;
      }
    }
  }, {
    key: "wheel",
    value: function wheel(e) {
      e.preventDefault();
      this.target += e.deltaY * -1;
      this.clampTarget();
      this.transform();
    }
  }, {
    key: "start",
    value: function start(e) {
      var touches = e.changedTouches ? e.changedTouches[0] : e;
      e.preventDefault();
      e.stopPropagation();
      this.last = touches.pageY;
    }
  }, {
    key: "move",
    value: function move(e) {
      e.preventDefault();
      var touches = e.changedTouches ? e.changedTouches[0] : e;
      this.target += (touches.pageY - this.last) * -1;
      this.last = touches.pageY;
      this.clampTarget();
      this.transform();
      e.stopPropagation();
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          text = _props.text,
          children = _props.children,
          className = _props.className;
      return external__react__default.a.createElement("div", {
        className: className,
        ref: this.txt,
        onWheel: this.wheel,
        onTouchStart: this.start,
        onTouchMove: this.move
      }, external__react__default.a.createElement(external__react_markdown__default.a, {
        className: 'scroller',
        source: text
      }));
    }
  }]);

  return ScrollableText;
}(external__react__default.a.Component);

/* harmony default export */ var Global_ScrollableText = (ScrollableText_ScrollableText);
// EXTERNAL MODULE: ./components/TitleRevealer/TitleRevealer.js
var TitleRevealer = __webpack_require__(36);

// EXTERNAL MODULE: ./components/TitleRevealer/SubtitleRevealer.js
var SubtitleRevealer = __webpack_require__(34);

// CONCATENATED MODULE: ./components/ColumnParagraphGroup/ParagraphGroup.js











var ParagraphGroup_ParagraphGroup = function ParagraphGroup(_ref) {
  var id = _ref.id,
      title = _ref.title,
      text = _ref.text,
      _ref$split = _ref.split,
      split = _ref$split === void 0 ? false : _ref$split,
      _ref$subtitle = _ref.subtitle,
      subtitle = _ref$subtitle === void 0 ? false : _ref$subtitle,
      _ref$collection = _ref.collection,
      collection = _ref$collection === void 0 ? false : _ref$collection,
      image = _ref.image,
      _ref$actionLink = _ref.actionLink,
      actionLink = _ref$actionLink === void 0 ? false : _ref$actionLink;
  return external__react__default.a.createElement("li", {
    className: paragraphGroup_default.a.wrapper
  }, external__react__default.a.createElement("div", {
    className: paragraphGroup_default.a.inner
  }, external__react__default.a.createElement("div", {
    className: paragraphGroup_default.a.header
  }, subtitle && external__react__default.a.createElement(SubtitleRevealer["a" /* default */], {
    subtitle: subtitle
  }), collection && external__react__default.a.createElement(SubtitleRevealer["a" /* default */], {
    collection: collection
  }), title && external__react__default.a.createElement(TitleRevealer["a" /* default */], {
    title: title,
    split: split
  }), actionLink && external__react__default.a.createElement(link__default.a, {
    href: "/products?collection=".concat(id, "&").concat(actionLink._modelApiKey, "=").concat(actionLink.id),
    prefetch: true
  }, external__react__default.a.createElement(IconButton["a" /* default */], {
    title: 'view',
    top: true
  }, external__react__default.a.createElement(View["a" /* default */], null)))), external__react__default.a.createElement("div", {
    className: paragraphGroup_default.a.body
  }, external__react__default.a.createElement(Global_ScrollableText, {
    className: 'text',
    text: text
  }))), image && external__react__default.a.createElement("div", {
    className: paragraphGroup_default.a.inner
  }, external__react__default.a.createElement(components_ImageRevealer, {
    src: image.url,
    paragraph: true
  })));
};

/* harmony default export */ var ColumnParagraphGroup_ParagraphGroup = __webpack_exports__["a"] = (ParagraphGroup_ParagraphGroup);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
	"title": "paragraphGroup__title___1qgWv",
	"subtitle": "paragraphGroup__subtitle___1DUni",
	"wrapper": "paragraphGroup__wrapper___pc81I " + __webpack_require__(9)["wrapper"] + "",
	"inner": "paragraphGroup__inner___17blw " + __webpack_require__(9)["inner"] + "",
	"header": "paragraphGroup__header___15TwE",
	"callToAction": "paragraphGroup__callToAction___1TAQR",
	"btn": "paragraphGroup__btn___1Qhks",
	"body": "paragraphGroup__body____65VO"
};

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
	"wrapper": "headingGroup__wrapper___pypdC " + __webpack_require__(9)["wrapper"] + "",
	"inner": "headingGroup__inner___2lYMj " + __webpack_require__(9)["inner"] + "",
	"legal": "headingGroup__legal___98dwr",
	"cover": "headingGroup__cover___14xn2"
};

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: ./components/ColumnParagraphGroup/ParagraphGroup.js + 2 modules
var ParagraphGroup = __webpack_require__(48);

// CONCATENATED MODULE: ./components/ColumnParagraphGroup/index.js

/* harmony default export */ var ColumnParagraphGroup = (ParagraphGroup["a" /* default */]);
// EXTERNAL MODULE: ./components/ColumnHeadingGroup/HeadingGroup.js
var HeadingGroup = __webpack_require__(46);

// CONCATENATED MODULE: ./components/ColumnHeadingGroup/index.js

/* harmony default export */ var ColumnHeadingGroup = (HeadingGroup["a" /* default */]);
// EXTERNAL MODULE: ./components/ColumnTitleGroup/titleGroup.scss
var titleGroup = __webpack_require__(55);
var titleGroup_default = /*#__PURE__*/__webpack_require__.n(titleGroup);

// EXTERNAL MODULE: ./components/TitleRevealer/index.js
var TitleRevealer = __webpack_require__(47);

// EXTERNAL MODULE: ./components/TitleRevealer/SubtitleRevealer.js
var SubtitleRevealer = __webpack_require__(34);

// EXTERNAL MODULE: ./components/Global/imgix.js
var imgix = __webpack_require__(10);

// CONCATENATED MODULE: ./components/ColumnTitleGroup/TitleGroup.js






var TitleGroup_TitleGroup = function TitleGroup(_ref) {
  var _ref$watercolor = _ref.watercolor,
      watercolor = _ref$watercolor === void 0 ? false : _ref$watercolor,
      title = _ref.title,
      subtitle = _ref.subtitle,
      legal = _ref.legal;
  return external__react__default.a.createElement("li", {
    className: titleGroup_default.a.wrapper
  }, external__react__default.a.createElement("div", {
    className: titleGroup_default.a.cover
  }, watercolor && external__react__default.a.createElement("img", {
    src: Object(imgix["a" /* default */])(watercolor.url, {
      w: 400,
      h: 800,
      fit: 'clip'
    })
  })), external__react__default.a.createElement("div", {
    className: "".concat(titleGroup_default.a.inner, " ").concat(legal && titleGroup_default.a.legal)
  }, subtitle && external__react__default.a.createElement(SubtitleRevealer["a" /* default */], {
    subtitle: subtitle
  }), external__react__default.a.createElement(TitleRevealer["a" /* default */], {
    title: title,
    split: true
  })));
};

/* harmony default export */ var ColumnTitleGroup_TitleGroup = (TitleGroup_TitleGroup);
// CONCATENATED MODULE: ./components/Column/Column.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var contentComponents = {
  'paragraph_group': ColumnParagraphGroup,
  'key_group': ColumnParagraphGroup,
  'series_group': ColumnParagraphGroup,
  'chapter_group': ColumnParagraphGroup,
  'title_group': ColumnTitleGroup_TitleGroup
};

var Column_ColumnItem = function ColumnItem(_ref) {
  var item = _ref.item,
      id = _ref.id;
  var ContentComponent = contentComponents[item.model];
  return ContentComponent ? external__react__default.a.createElement(ContentComponent, _extends({}, item, {
    id: id
  })) : external__react__default.a.createElement("div", null, "Content with unknown item type \"".concat(item.model, "\""));
};

var Column_Column = function Column(_ref2) {
  var _ref2$items = _ref2.items,
      items = _ref2$items === void 0 ? [] : _ref2$items,
      id = _ref2.id;
  return external__react__default.a.createElement(external__react__default.a.Fragment, null, items.map(function (item, index) {
    return external__react__default.a.createElement(Column_ColumnItem, {
      key: index,
      item: item,
      id: id
    });
  }));
};

/* harmony default export */ var components_Column_Column = __webpack_exports__["a"] = (Column_Column);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
	"wrapper": "titleGroup__wrapper___q03_v " + __webpack_require__(9)["wrapper"] + "",
	"inner": "titleGroup__inner___11RE5 " + __webpack_require__(9)["inner"] + "",
	"cover": "titleGroup__cover___3gmyr"
};

/***/ }),
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */
/***/ (function(module, exports) {

module.exports = require("apollo-boost/lib/index");

/***/ }),
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
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(91);


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE", function() { return PAGE; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Scroller_Scroller__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_apollo_boost_lib_index__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_apollo_boost_lib_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_apollo_boost_lib_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Column_Column__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ColumnHeadingGroup_HeadingGroup__ = __webpack_require__(46);


var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral([" \n  query page($slug: String!) {\n  page(filter: {slug: {eq: $slug}}) {\n    title\n    slug\n    displayTitle\n    subtitle\n    image {\n      url\n    }\n    seo {\n      title\n      description\n    }\n    content {\n      ... on TitleGroupRecord {\n        model: _modelApiKey\n        title\n        watercolor {\n            url\n        }\n      }\n      ... on ParagraphGroupRecord {\n        model: _modelApiKey\n        title\n        subtitle\n        text\n        image {\n          url\n          alt\n        }\n        actionLink {\n          ... on SeriesRecord {\n            slug\n          }\n          ... on FrameRecord {\n            slug\n          }\n          ... on EyewearRecord {\n            slug\n          }\n          ... on FrameRecord {\n            slug\n          }\n        }\n      }\n    }\n  }\n}"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      var slug = this.props.slug;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_apollo__["Query"], {
        query: PAGE,
        variables: {
          slug: slug
        }
      }, function (_ref) {
        var loading = _ref.loading,
            _ref$data$page = _ref.data.page,
            displayTitle = _ref$data$page.displayTitle,
            subtitle = _ref$data$page.subtitle,
            image = _ref$data$page.image,
            id = _ref$data$page.id,
            content = _ref$data$page.content,
            seo = _ref$data$page.seo;
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], {
          seo: !seo ? {} : seo,
          currentUrl: "/".concat(slug)
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Scroller_Scroller__["a" /* default */], null, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_ColumnHeadingGroup_HeadingGroup__["a" /* default */], {
          subtitle: subtitle,
          title: displayTitle,
          image: image
        }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Column_Column__["a" /* default */], {
          items: content
        })));
      });
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref2) {
        var slug;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                slug = _ref2.query.slug;
                return _context.abrupt("return", {
                  slug: slug
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
}(__WEBPACK_IMPORTED_MODULE_2_react___default.a.Component);


var PAGE = Object(__WEBPACK_IMPORTED_MODULE_5_apollo_boost_lib_index__["gql"])(_templateObject);

/***/ })
/******/ ]);