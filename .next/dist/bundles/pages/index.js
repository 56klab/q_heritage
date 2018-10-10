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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Bar/Bar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bar_scss__ = __webpack_require__("./components/Bar/bar.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bar_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__bar_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind__ = __webpack_require__("classnames/bind");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Global_withTheme__ = __webpack_require__("./components/Global/withTheme.js");
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\Bar\\Bar.js";




var cx = __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_1__bar_scss___default.a);

var Bar = function Bar(_ref) {
  var inverted = _ref.inverted;
  var barClasses = cx(__WEBPACK_IMPORTED_MODULE_1__bar_scss___default.a.outer, {
    inverted: inverted
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: barClasses,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3__Global_withTheme__["a" /* withTheme */])(Bar));

/***/ }),

/***/ "./components/Bar/bar.scss":
/***/ (function(module, exports) {

module.exports = {
	"outer": "bar__outer___q_U31",
	"inverted": "bar__inverted___3U33A"
};

/***/ }),

/***/ "./components/Bar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Bar__ = __webpack_require__("./components/Bar/Bar.js");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__Bar__["a" /* default */]);

/***/ }),

/***/ "./components/Burger/Burger.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__burger_scss__ = __webpack_require__("./components/Burger/burger.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__burger_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__burger_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind__ = __webpack_require__("classnames/bind");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Global_withTheme__ = __webpack_require__("./components/Global/withTheme.js");
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\Burger\\Burger.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }





var cx = __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_1__burger_scss___default.a);

var Burger = function Burger(_ref) {
  var className = _ref.className,
      inverted = _ref.inverted,
      isClose = _ref.isClose,
      rest = _objectWithoutProperties(_ref, ["className", "inverted", "isClose"]);

  var BurgerClass = cx({
    isClose: isClose
  }, {
    inverted: inverted
  }, {
    inner: true
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", _extends({
    className: BurgerClass
  }, rest, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }));
};

Burger.propTypes = {};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3__Global_withTheme__["a" /* withTheme */])(Burger));

/***/ }),

/***/ "./components/Burger/burger.scss":
/***/ (function(module, exports) {

module.exports = {
	"inner": "burger__inner___2cnjb",
	"isClose": "burger__isClose___3_Xlr",
	"inverted": "burger__inverted___32bhN"
};

/***/ }),

/***/ "./components/Burger/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Burger__ = __webpack_require__("./components/Burger/Burger.js");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__Burger__["a" /* default */]);

/***/ }),

/***/ "./components/Button/Button.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind__ = __webpack_require__("classnames/bind");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_scss__ = __webpack_require__("./components/Button/button.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__button_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__button_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Global_withTheme__ = __webpack_require__("./components/Global/withTheme.js");
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\Button\\Button.js";

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
    className: __WEBPACK_IMPORTED_MODULE_3__button_scss___default.a.outer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, title));
  return !link ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", _extends({}, other, commonProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }), child) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", _extends({}, other, commonProps, {
    role: role,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }), child);
};

Button.defaultProps = {
  disabled: false,
  type: 'button'
};
Button.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  hasIcon: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  mouse: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  link: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  icon: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['primary', 'secondary', 'white', 'blank']),
  path: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['button', 'reset', 'submit']),
  role: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "./components/Button/button.scss":
/***/ (function(module, exports) {

module.exports = {
	"navLink": "button__navLink___2K4TZ",
	"extrusion": "button__extrusion___MvOTI",
	"active": "button__active___2SsXo",
	"outer": "button__outer___C3Odi",
	"inverted": "button__inverted___-kKcP"
};

/***/ }),

/***/ "./components/Footer/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_scss__ = __webpack_require__("./components/Footer/footer.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__footer_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__footer_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Icon_Pin__ = __webpack_require__("./components/Icon/Pin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IconButton__ = __webpack_require__("./components/IconButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ResponsiveWrapper_Responsive__ = __webpack_require__("./components/ResponsiveWrapper/Responsive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ScrollDown_ScrollDown__ = __webpack_require__("./components/ScrollDown/ScrollDown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_link__);
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\Footer\\Footer.js";








var Footer = function Footer(_ref) {
  var menuIsOpen = _ref.menuIsOpen,
      hideUI = _ref.hideUI,
      isInfo = _ref.isInfo;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, !hideUI && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ScrollDown_ScrollDown__["a" /* default */], {
    isInfo: isInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ResponsiveWrapper_Responsive__["c" /* MD */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__footer_scss___default.a.slideBtnWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__footer_scss___default.a.slideBtnInner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a, {
    href: '/store-locator',
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__IconButton__["a" /* default */], {
    title: 'store locator',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Icon_Pin__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/Footer/footer.scss":
/***/ (function(module, exports) {

module.exports = {
	"slideBtnWrapper": "footer__slideBtnWrapper___1mYpA",
	"slideBtnInner": "footer__slideBtnInner___1F_E3"
};

/***/ }),

/***/ "./components/Footer/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Footer__ = __webpack_require__("./components/Footer/Footer.js");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__Footer__["a" /* default */]);

/***/ }),

/***/ "./components/Global/imgix.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_querystring__ = __webpack_require__("querystring");
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

/***/ "./components/Global/mouseTranslate.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mouseTranslate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_getMousePosition__ = __webpack_require__("./components/utils/getMousePosition.js");
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\Global\\mouseTranslate.js";

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
            var mousePos = Object(__WEBPACK_IMPORTED_MODULE_1__utils_getMousePosition__["a" /* default */])(e),
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

          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            onMouseMove: this.handleMouseMove,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            ref: function ref(el) {
              _this2.el = el;
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(WrappedComponent, _extends({}, this.props, {
            btnTransform: this.state.btnTransform,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            }
          })));
        }
      }]);

      return MouseTranslate;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"])
  );
}

function getTransform(relMousePos, bounds, ranges) {
  var vals = {
    x: (ranges.x[1] - ranges.x[0]) / bounds.width * relMousePos.x + ranges.x[0],
    y: (ranges.y[1] - ranges.y[0]) / bounds.height * relMousePos.y + ranges.y[0]
  };
  return "translate3d(".concat(vals.x, "px, ").concat(vals.y, "px, 0)");
}

/***/ }),

/***/ "./components/Global/themeContext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export theme */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeContext; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var theme = {
  inverted: true,
  menuIsOpen: false
};
var ThemeContext = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext(theme.inverted);

/***/ }),

/***/ "./components/Global/withTheme.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = withTheme;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__themeContext__ = __webpack_require__("./components/Global/themeContext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\Global\\withTheme.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function withTheme(Component) {
  // ...and returns another component...
  return function ThemedComponent(props) {
    // ... and renders the wrapped component with the context theme!
    // Notice that we pass through any additional props as well
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__themeContext__["a" /* ThemeContext */].Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, function (theme) {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, _extends({}, props, {
        inverted: theme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }));
    });
  };
}

/***/ }),

/***/ "./components/Header/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Burger__ = __webpack_require__("./components/Burger/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_scss__ = __webpack_require__("./components/Header/header.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__header_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IconButton__ = __webpack_require__("./components/IconButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ResponsiveWrapper_Responsive__ = __webpack_require__("./components/ResponsiveWrapper/Responsive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Icon_Grid__ = __webpack_require__("./components/Icon/Grid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Icon_Back__ = __webpack_require__("./components/Icon/Back.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Icon_Logo__ = __webpack_require__("./components/Icon/Logo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Icon_Filter__ = __webpack_require__("./components/Icon/Filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames_bind__ = __webpack_require__("classnames/bind");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Icon_Check__ = __webpack_require__("./components/Icon/Check.js");
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\Header\\Header.js";












var cx = __WEBPACK_IMPORTED_MODULE_10_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_2__header_scss___default.a);

var Header = function Header(_ref) {
  var isDetail = _ref.isDetail,
      isProducts = _ref.isProducts,
      menuIsOpen = _ref.menuIsOpen,
      toggleMenu = _ref.toggleMenu,
      toggleFilter = _ref.toggleFilter,
      openSubMenu = _ref.openSubMenu,
      toggleSubMenu = _ref.toggleSubMenu,
      isStore = _ref.isStore,
      filterIsOpen = _ref.filterIsOpen;
  var filterClasses = cx({
    open: filterIsOpen
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_2__header_scss___default.a.wrapper + ' ' + __WEBPACK_IMPORTED_MODULE_2__header_scss___default.a.left,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_2__header_scss___default.a.inner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ResponsiveWrapper_Responsive__["d" /* ML */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, openSubMenu !== '' && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__IconButton__["a" /* default */], {
    onClick: function onClick() {
      return toggleSubMenu('');
    },
    title: 'back',
    right: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Icon_Back__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }))), !isStore && !menuIsOpen && !isProducts && !isDetail && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_next_link___default.a, {
    href: '/products',
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__IconButton__["a" /* default */], {
    title: 'all products',
    right: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Icon_Grid__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }))), !isStore && !menuIsOpen && !isProducts && isDetail && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_next_link___default.a, {
    href: {
      pathname: '/products',
      query: isDetail
    },
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__IconButton__["a" /* default */], {
    title: 'back to selection',
    right: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Icon_Back__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }))), !menuIsOpen && isProducts && !filterIsOpen && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__IconButton__["a" /* default */], {
    onClick: function onClick() {
      return toggleFilter('');
    },
    title: 'filter',
    right: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Icon_Filter__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  })), !menuIsOpen && isProducts && filterIsOpen && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__IconButton__["a" /* default */], {
    onClick: function onClick() {
      return toggleFilter('');
    },
    title: 'save',
    right: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__Icon_Check__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_2__header_scss___default.a.wrapper + ' ' + __WEBPACK_IMPORTED_MODULE_2__header_scss___default.a.center,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_2__header_scss___default.a.inner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8_next_link___default.a, {
    href: '/',
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    "aria-label": "home",
    role: "button",
    "data-min": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Icon_Logo__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_2__header_scss___default.a.wrapper + ' ' + __WEBPACK_IMPORTED_MODULE_2__header_scss___default.a.right,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_2__header_scss___default.a.inner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ResponsiveWrapper_Responsive__["b" /* MB */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__IconButton__["a" /* default */], {
    title: menuIsOpen ? 'close' : 'menu',
    onClick: toggleMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Burger__["a" /* default */], {
    isClose: menuIsOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ResponsiveWrapper_Responsive__["c" /* MD */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__IconButton__["a" /* default */], {
    title: menuIsOpen ? 'close' : 'menu',
    onClick: toggleMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Burger__["a" /* default */], {
    isClose: menuIsOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/Header/header.scss":
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "header__wrapper___3mJuT",
	"right": "header__right___3E8pu",
	"left": "header__left___2iZYy",
	"center": "header__center___2LNn3",
	"inner": "header__inner___fARAv"
};

/***/ }),

/***/ "./components/Header/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header__ = __webpack_require__("./components/Header/Header.js");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__Header__["a" /* default */]);

/***/ }),

/***/ "./components/Icon/Back.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\Icon\\Back.js";


var Back = function Back(_ref) {
  var stroke = _ref.stroke;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
    viewBox: "0 0 64 64",
    height: 24,
    width: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M14 31.998h36",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M28 18L14 32l14 14",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Back);

/***/ }),

/***/ "./components/Icon/Check.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\Icon\\Check.js";


var Check = function Check(_ref) {
  var stroke = _ref.stroke;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
    viewBox: "0 0 64 64",
    height: 24,
    width: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M2 30l21 22 39-40",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Check);

/***/ }),

/***/ "./components/Icon/Filter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\Icon\\Filter.js";


var Filter = function Filter(_ref) {
  var stroke = _ref.stroke;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
    viewBox: "0 0 64 64",
    height: 24,
    width: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M2 2h59L36 34v20l-8 8V34L2 2z",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Filter);

/***/ }),

/***/ "./components/Icon/Grid.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\Icon\\Grid.js";


var Grid = function Grid(_ref) {
  var stroke = _ref.stroke;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
    viewBox: "0 0 64 64",
    height: 24,
    width: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M2 2h12v12H2zm24 0h12v12H26zm24 0h12v12H50zM2 50h12v12H2z",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M26 50h12v12H26zm24 0h12v12H50z",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M2 25.988h12v12H2z",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M26 25.988h12v12H26zm24 0h12v12H50z",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Grid);

/***/ }),

/***/ "./components/Icon/Logo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Global_withTheme__ = __webpack_require__("./components/Global/withTheme.js");
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\Icon\\Logo.js";



var Logo = function Logo(_ref) {
  var inverted = _ref.inverted;
  var fill = inverted ? "#fff" : "#000";
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 396.85 64.09",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    fill: fill,
    d: "M139.08,1.25h13.15c3.75,0,6.77,1.13,8.69,3.05a8.49,8.49,0,0,1,2.36,6v.09c0,5.07-3.5,8-8.3,8.91l9.39,12.49h-4.24l-8.86-11.88h-8.74V31.82h-3.45Zm12.84,15.59c4.59,0,7.86-2.36,7.86-6.29v-.09c0-3.75-2.88-6-7.81-6h-9.44v12.4Z",
    transform: "translate(-22.18 -0.72)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", {
    fill: fill,
    x: "170.28",
    y: "0.52",
    width: "3.45",
    height: "30.57",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("polygon", {
    fill: fill,
    points: "212.59 3.71 202.33 3.71 202.33 0.52 226.35 0.52 226.35 3.71 216.09 3.71 216.09 31.09 212.59 31.09 212.59 3.71",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    fill: fill,
    d: "M290.89,1h3.23l13.93,30.79h-3.71l-3.58-8.08H284.12l-3.63,8.08H277Zm8.51,19.56L292.46,5.05l-7,15.54Z",
    transform: "translate(-22.18 -0.72)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    fill: fill,
    d: "M337.75,16.62v-.09c0-8.38,6.16-15.81,15.33-15.81a16.12,16.12,0,0,1,11.4,4.06L362.25,7.4A13,13,0,0,0,353,3.91c-6.76,0-11.61,5.72-11.61,12.53v.09c0,7.3,4.67,12.71,12.09,12.71a14.32,14.32,0,0,0,8.82-3.06V18.59H353v-3.1h12.63V27.67a18.55,18.55,0,0,1-12.28,4.67c-9.61,0-15.55-7-15.55-15.72",
    transform: "translate(-22.18 -0.72)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("polygon", {
    fill: fill,
    points: "374.53 0.52 396.63 0.52 396.63 3.67 377.98 3.67 377.98 14.11 394.67 14.11 394.67 17.25 377.98 17.25 377.98 27.95 396.85 27.95 396.85 31.09 374.53 31.09 374.53 0.52",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    fill: fill,
    d: "M25.63,1.25H22.18V31.82h3.45V18.06H49.31V14.83H25.63Zm28.5,30.57h3.45V1.25H54.13Z",
    transform: "translate(-22.18 -0.72)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", {
    fill: fill,
    x: "65.52",
    y: "49.01",
    width: "1.1",
    height: "14.83",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    fill: fill,
    d: "M101.15,57.19v0a7.46,7.46,0,0,1,7.42-7.67,7.83,7.83,0,0,1,5.76,2.37l-.79.81a6.79,6.79,0,0,0-5-2.18,6.33,6.33,0,0,0-6.24,6.62v0a6.4,6.4,0,0,0,6.27,6.67,6.78,6.78,0,0,0,5.1-2.31l.74.72a7.82,7.82,0,0,1-5.89,2.58,7.37,7.37,0,0,1-7.37-7.62",
    transform: "translate(-22.18 -0.72)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    fill: fill,
    d: "M124.81,57.19v0a7.46,7.46,0,0,1,7.48-7.67,7.39,7.39,0,0,1,7.43,7.62v0a7.46,7.46,0,0,1-7.48,7.66,7.39,7.39,0,0,1-7.43-7.62m13.77,0v0a6.41,6.41,0,0,0-6.34-6.67A6.34,6.34,0,0,0,126,57.1v0a6.42,6.42,0,0,0,6.34,6.67,6.35,6.35,0,0,0,6.29-6.63",
    transform: "translate(-22.18 -0.72)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("polygon", {
    fill: fill,
    points: "129.74 49.01 130.77 49.01 141 61.91 141 49.01 142.06 49.01 142.06 63.84 141.24 63.84 130.79 50.66 130.79 63.84 129.74 63.84 129.74 49.01",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("rect", {
    fill: fill,
    x: "155.06",
    y: "49.01",
    width: "1.1",
    height: "14.83",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    fill: fill,
    d: "M190.7,57.19v0a7.45,7.45,0,0,1,7.41-7.67,7.81,7.81,0,0,1,5.76,2.37l-.78.81a6.82,6.82,0,0,0-5-2.18,6.34,6.34,0,0,0-6.25,6.62v0a6.4,6.4,0,0,0,6.27,6.67,6.78,6.78,0,0,0,5.1-2.31l.74.72a7.82,7.82,0,0,1-5.88,2.58,7.36,7.36,0,0,1-7.37-7.62",
    transform: "translate(-22.18 -0.72)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("polygon", {
    fill: fill,
    points: "214.41 49.01 215.51 49.01 215.51 62.82 224.21 62.82 224.21 63.84 214.41 63.84 214.41 49.01",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    fill: fill,
    d: "M257.49,58.4V49.73h1.1v8.56c0,3.49,1.89,5.51,5,5.51s4.94-1.83,4.94-5.4V49.73h1.1v8.54c0,4.26-2.48,6.52-6.08,6.52s-6.08-2.24-6.08-6.39",
    transform: "translate(-22.18 -0.72)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("polygon", {
    fill: fill,
    points: "271.68 49.01 265.98 56.28 271.89 63.84 270.57 63.84 265.3 56.99 260.05 63.84 258.75 63.84 264.64 56.28 258.97 49.01 260.28 49.01 265.34 55.55 270.38 49.01 271.68 49.01",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    fill: fill,
    d: "M305.35,58.4V49.73h1.1v8.56c0,3.49,1.89,5.51,5,5.51s4.94-1.83,4.94-5.4V49.73h1.1v8.54c0,4.26-2.48,6.52-6.08,6.52s-6.08-2.24-6.08-6.39",
    transform: "translate(-22.18 -0.72)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    fill: fill,
    d: "M330.13,49.73h6.23a5.88,5.88,0,0,1,4.17,1.46A4,4,0,0,1,341.65,54v0c0,2.48-1.84,3.9-4.34,4.24l4.89,6.33h-1.4l-4.72-6.14h-4.85v6.14h-1.1Zm6.1,7.69c2.47,0,4.31-1.25,4.31-3.39v0c0-2-1.56-3.24-4.25-3.24h-5.06v6.67Z",
    transform: "translate(-22.18 -0.72)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("polygon", {
    fill: fill,
    points: "336.01 57.97 329.66 49.01 331.03 49.01 336.58 56.97 342.15 49.01 343.46 49.01 337.11 57.95 337.11 63.84 336.01 63.84 336.01 57.97",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("polygon", {
    fill: fill,
    points: "65.59 0.52 87.69 0.52 87.69 3.67 69.04 3.67 69.04 14.11 85.72 14.11 85.72 17.25 69.04 17.25 69.04 27.95 87.91 27.95 87.91 31.09 65.59 31.09 65.59 0.52",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__Global_withTheme__["a" /* withTheme */])(Logo));

/***/ }),

/***/ "./components/Icon/Pin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\Icon\\Pin.js";


var Pin = function Pin(_ref) {
  var stroke = _ref.stroke;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
    viewBox: "0 0 64 64",
    height: 24,
    width: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M55.9 28.3c.1-.8.1-1.5.1-2.3a24 24 0 0 0-48 0c0 .8 0 1.6.1 2.3v.3C10.1 47.6 32 61 32 61s21.9-13.6 23.8-32.3z",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("circle", {
    r: "12",
    cy: "26",
    cx: "32",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Pin);

/***/ }),

/***/ "./components/Icon/Scroll.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\Icon\\Scroll.js";


var Arrow = function Arrow(_ref) {
  var _ref$stroke = _ref.stroke,
      stroke = _ref$stroke === void 0 ? "#222222" : _ref$stroke;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("svg", {
    viewBox: "0 0 64 16",
    height: 24,
    width: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("path", {
    d: "M58,8 L0,8",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("polyline", {
    points: "49 16 58 8 49 0",
    fill: "none",
    stroke: stroke,
    strokeMiterlimit: "10",
    strokeWidth: "2",
    strokeLinejoin: "miter",
    strokeLinecap: "butt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Arrow);

/***/ }),

/***/ "./components/IconButton/IconButton.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind__ = __webpack_require__("classnames/bind");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__iconButton_scss__ = __webpack_require__("./components/IconButton/iconButton.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__iconButton_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__iconButton_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Global_mouseTranslate__ = __webpack_require__("./components/Global/mouseTranslate.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Global_withTheme__ = __webpack_require__("./components/Global/withTheme.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_link__);
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\IconButton\\IconButton.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }








var cx = __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_3__iconButton_scss___default.a);

var IconButton = function IconButton(_ref) {
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

  var btnClasses = cx(className, __WEBPACK_IMPORTED_MODULE_3__iconButton_scss___default.a.icon, {
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

  var button = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", _extends({}, commonProps, {
    type: type,
    name: title,
    "aria-label": title,
    "data-mouse": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }), title ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("small", {
    className: __WEBPACK_IMPORTED_MODULE_3__iconButton_scss___default.a.label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, title) : false, children);
  var anchor = path && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_next_link___default.a, {
    href: path,
    as: asPath,
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", _extends({}, commonProps, {
    role: role,
    "data-mouse": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }), title ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("small", {
    className: __WEBPACK_IMPORTED_MODULE_3__iconButton_scss___default.a.label,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, title) : false, children));
  return path ? anchor : button;
};

IconButton.defaultProps = {
  disabled: false,
  type: 'button',
  inverted: false,
  right: false,
  top: false
};
IconButton.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  hasIcon: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  mouse: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  inverted: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  icon: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  color: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['primary', 'secondary', 'white', 'blank']),
  path: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['button', 'reset', 'submit']),
  role: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5__Global_withTheme__["a" /* withTheme */])(Object(__WEBPACK_IMPORTED_MODULE_4__Global_mouseTranslate__["a" /* default */])(IconButton)));

/***/ }),

/***/ "./components/IconButton/iconButton.scss":
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

/***/ "./components/IconButton/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__IconButton__ = __webpack_require__("./components/IconButton/IconButton.js");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__IconButton__["a" /* default */]);

/***/ }),

/***/ "./components/Layout/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Nav__ = __webpack_require__("./components/Nav/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Bar__ = __webpack_require__("./components/Bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__("./components/Header/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Footer__ = __webpack_require__("./components/Footer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Global_themeContext__ = __webpack_require__("./components/Global/themeContext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scss_reset_scss__ = __webpack_require__("./scss/reset.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scss_reset_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__scss_reset_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__scss_global_scss__ = __webpack_require__("./scss/global.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__scss_global_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__scss_global_scss__);
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\Layout\\Layout.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }











var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout(props) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));
    _this.state = {
      openSubMenu: '',
      menuIsOpen: false
    };
    _this.setOpenSubMenu = _this.setOpenSubMenu.bind(_assertThisInitialized(_this));
    _this.toggleMenu = _this.toggleMenu.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Layout, [{
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
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("main", {
        style: {
          position: 'fixed',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: 1,
          backgroundColor: isDark ? '#000' : '#fff'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, title || 'heritage'), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        charSet: "UTF-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        httpEquiv: "X-UA-Compatible",
        content: "IE=edge, chrome=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "theme-color",
        content: '#000',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
        name: "description",
        content: description || 'heritage eyewear',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "icon",
        href: "/static/favicon.ico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
        rel: "manifest",
        href: "/static/manifest.json",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Global_themeContext__["a" /* ThemeContext */].Provider, {
        value: menuIsOpen || isDark,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Header__["a" /* default */], {
        toggleMenu: this.toggleMenu,
        menuIsOpen: menuIsOpen,
        isProducts: isProducts,
        isDetail: isDetail,
        isStore: isStore,
        filterIsOpen: filterIsOpen,
        openSubMenu: openSubMenu,
        toggleSubMenu: this.setOpenSubMenu,
        toggleFilter: toggleFilter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Nav__["a" /* default */], {
        currentUrl: currentUrl,
        openSubMenu: openSubMenu,
        handleCloseMenu: this.toggleMenu,
        toggleSubMenu: this.setOpenSubMenu,
        menuIsOpen: menuIsOpen,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }), !isStore && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Bar__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), children, !isStore && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Footer__["a" /* default */], {
        menuIsOpen: menuIsOpen,
        hideUI: hideUI,
        isInfo: isInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      })));
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/Nav/Nav.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MENU_ITEMS */
/* harmony export (immutable) */ __webpack_exports__["c"] = normalize;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationLink; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nav_scss__ = __webpack_require__("./components/Nav/nav.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nav_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__nav_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind__ = __webpack_require__("classnames/bind");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Button_Button__ = __webpack_require__("./components/Button/Button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_apollo_boost__ = __webpack_require__("apollo-boost");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_apollo_boost___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_apollo_boost__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ResponsiveWrapper_Responsive__ = __webpack_require__("./components/ResponsiveWrapper/Responsive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Global_imgix__ = __webpack_require__("./components/Global/imgix.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_addons_css_transition_group__ = __webpack_require__("react-addons-css-transition-group");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_addons_css_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__SubMenu_SubMenu__ = __webpack_require__("./components/SubMenu/SubMenu.js");
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\Nav\\Nav.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["{\nmenuItems: allMenuItems(filter: {parent: {exists: false}}) {\n    title\n    asPath: slug\n    image {\n          url\n          }\n    links: children {\n      title\n      asPath: slug\n    }\n  }\n}"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }













var cx = __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_1__nav_scss___default.a);
var MENU_ITEMS = Object(__WEBPACK_IMPORTED_MODULE_5_apollo_boost__["gql"])(_templateObject);
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

var Nav = function Nav(_ref) {
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
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: navClasses,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
    className: __WEBPACK_IMPORTED_MODULE_1__nav_scss___default.a.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_react_apollo__["Query"], {
    query: MENU_ITEMS,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, function (_ref2) {
    var loading = _ref2.loading,
        menuItems = _ref2.data.menuItems;
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: innerClasses,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10_react_addons_css_transition_group___default.a, {
      transitionName: "nav",
      transitionEnterTimeout: 1500,
      transitionLeaveTimeout: 1500,
      component: "div",
      className: __WEBPACK_IMPORTED_MODULE_1__nav_scss___default.a.links,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      }
    }, menuItems.map(function (i, index) {
      return menuIsOpen && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Item, _extends({
        key: index
      }, normalize(i), {
        currentUrl: currentUrl,
        toggleSubMenu: toggleSubMenu,
        openSubMenu: openSubMenu,
        handleCloseMenu: handleCloseMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }));
    })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: __WEBPACK_IMPORTED_MODULE_1__nav_scss___default.a.submenus,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      }
    }, menuItems.map(function (_ref3, index) {
      var title = _ref3.title,
          links = _ref3.links;
      return links.length > 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__SubMenu_SubMenu__["a" /* default */], {
        key: index,
        currentUrl: currentUrl,
        subMenu: links,
        visible: openSubMenu === title,
        openSubMenu: openSubMenu,
        handleCloseMenu: handleCloseMenu,
        className: __WEBPACK_IMPORTED_MODULE_1__nav_scss___default.a.submenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      });
    })));
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__nav_scss___default.a.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_next_link___default.a, {
    as: '/cookie-policy',
    href: '/legal?slug=cookie-policy',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: 'baseLink',
    "data-min": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    }
  }, "Cookie Policy")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_next_link___default.a, {
    as: '/privacy-policy',
    href: '/legal?slug=privacy-policy',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: 'baseLink',
    "data-min": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    }
  }, "Privacy Policy")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_next_link___default.a, {
    as: '/terms-and-conditions',
    href: '/legal?slug=terms-and-conditions',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: 'baseLink',
    "data-min": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    }
  }, "Terms & Conditions"))))));
};

var Item =
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
      var Component = links.length > 0 ? SubMenuToggle : NavigationLink;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        }
      }));
    }
  }]);

  return Item;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var SubMenuToggle = function SubMenuToggle(_ref4) {
  var subMenu = _ref4.subMenu,
      title = _ref4.title,
      openSubMenu = _ref4.openSubMenu,
      toggleSubMenu = _ref4.toggleSubMenu,
      url = _ref4.image.url,
      style = _ref4.style;
  var bg = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "".concat(__WEBPACK_IMPORTED_MODULE_1__nav_scss___default.a.bg, " ").concat(openSubMenu === title ? __WEBPACK_IMPORTED_MODULE_1__nav_scss___default.a.bgActive : ''),
    style: {
      background: "url(".concat(Object(__WEBPACK_IMPORTED_MODULE_8__Global_imgix__["a" /* default */])(url, {
        w: 250,
        h: 850
      }), ") center center no-repeat"),
      backgroundSize: 'cover'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__nav_scss___default.a.bgOverlay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Button_Button__["a" /* default */], {
    className: __WEBPACK_IMPORTED_MODULE_1__nav_scss___default.a.link,
    onClick: function onClick() {
      return toggleSubMenu(title);
    },
    active: openSubMenu === title,
    title: title,
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    }
  }));
  var btn = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Button_Button__["a" /* default */], {
    className: __WEBPACK_IMPORTED_MODULE_1__nav_scss___default.a.link,
    onClick: function onClick() {
      return toggleSubMenu(title);
    },
    active: openSubMenu === title,
    title: title,
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    }
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__ResponsiveWrapper_Responsive__["a" /* LG */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    }
  }, url ? bg : btn), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__ResponsiveWrapper_Responsive__["d" /* ML */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    }
  }, btn));
};

var NavigationLink = function NavigationLink(_ref5) {
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
  var bg = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "".concat(__WEBPACK_IMPORTED_MODULE_1__nav_scss___default.a.bg, " ").concat(currentUrl === asPath ? __WEBPACK_IMPORTED_MODULE_1__nav_scss___default.a.bgActive : ''),
    style: {
      background: "url(".concat(Object(__WEBPACK_IMPORTED_MODULE_8__Global_imgix__["a" /* default */])(url, {
        w: 250,
        h: 850
      }), ") center center no-repeat"),
      backgroundSize: 'cover'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__nav_scss___default.a.bgOverlay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Button_Button__["a" /* default */], {
    className: isSubLink ? __WEBPACK_IMPORTED_MODULE_1__nav_scss___default.a.subLink : __WEBPACK_IMPORTED_MODULE_1__nav_scss___default.a.link,
    onClick: function onClick(e) {
      e.preventDefault();
      __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.push(path, asPath, {
        swallow: swallow
      });
    },
    active: currentUrl === asPath,
    title: title,
    style: style,
    link: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    }
  }));
  var btn = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Button_Button__["a" /* default */], {
    className: isSubLink ? __WEBPACK_IMPORTED_MODULE_1__nav_scss___default.a.subLink : __WEBPACK_IMPORTED_MODULE_1__nav_scss___default.a.link,
    onClick: function onClick(e) {
      e.preventDefault();
      __WEBPACK_IMPORTED_MODULE_3_next_router___default.a.push(path, asPath, {
        swallow: swallow
      });
    },
    active: currentUrl === asPath,
    title: title,
    style: style,
    link: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    }
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__ResponsiveWrapper_Responsive__["a" /* LG */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    }
  }, url ? bg : btn), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__ResponsiveWrapper_Responsive__["d" /* ML */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    }
  }, btn));
};
/* harmony default export */ __webpack_exports__["b"] = (Nav);

/***/ }),

/***/ "./components/Nav/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Nav__ = __webpack_require__("./components/Nav/Nav.js");

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__Nav__["b" /* default */]);

/***/ }),

/***/ "./components/Nav/nav.scss":
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

/***/ "./components/ResponsiveWrapper/Responsive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export XXL */
/* unused harmony export XL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MD; });
/* unused harmony export SM */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ML; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_responsive__ = __webpack_require__("react-responsive");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_responsive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_responsive__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\ResponsiveWrapper\\Responsive.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var XXL = function XXL(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react_responsive___default.a, _extends({}, props, {
    minWidth: 1440,
    values: {
      deviceWidth: 1600
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }));
};
var XL = function XL(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react_responsive___default.a, _extends({}, props, {
    minWidth: 1240,
    values: {
      deviceWidth: 1400
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }));
};
var LG = function LG(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react_responsive___default.a, _extends({}, props, {
    minWidth: 1024,
    values: {
      deviceWidth: 1600
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }));
};
var MD = function MD(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react_responsive___default.a, _extends({}, props, {
    minWidth: 768,
    values: {
      deviceWidth: 768
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }));
};
var SM = function SM(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react_responsive___default.a, _extends({}, props, {
    minWidth: 576,
    values: {
      deviceWidth: 1600
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
};
var MB = function MB(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react_responsive___default.a, _extends({}, props, {
    maxWidth: 767,
    values: {
      deviceWidth: 1600
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }));
};
var ML = function ML(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react_responsive___default.a, _extends({}, props, {
    maxWidth: 1023,
    values: {
      deviceWidth: 1600
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }));
};

/***/ }),

/***/ "./components/ScrollDown/ScrollDown.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scrolldown_scss__ = __webpack_require__("./components/ScrollDown/scrolldown.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scrolldown_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scrolldown_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind__ = __webpack_require__("classnames/bind");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Global_withTheme__ = __webpack_require__("./components/Global/withTheme.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ResponsiveWrapper_Responsive__ = __webpack_require__("./components/ResponsiveWrapper/Responsive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Icon_Scroll__ = __webpack_require__("./components/Icon/Scroll.js");
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\ScrollDown\\ScrollDown.js";







var cx = __WEBPACK_IMPORTED_MODULE_2_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_1__scrolldown_scss___default.a);

var ScrollDown = function ScrollDown(_ref) {
  var inverted = _ref.inverted,
      isInfo = _ref.isInfo;
  var scrollDownClass = cx({
    wrapper: true,
    inverted: inverted,
    center: isInfo
  });
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: scrollDownClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__scrolldown_scss___default.a.inner,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, isInfo ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: __WEBPACK_IMPORTED_MODULE_1__scrolldown_scss___default.a.txt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Heritage by", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_next_link___default.a, {
    href: '/legal?slug=grandvision',
    as: '/grandvision',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: 'baseLink',
    "data-min": true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "Grandvision"))) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ResponsiveWrapper_Responsive__["c" /* MD */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: __WEBPACK_IMPORTED_MODULE_1__scrolldown_scss___default.a.txt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "Scroll to navigate ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ResponsiveWrapper_Responsive__["b" /* MB */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: __WEBPACK_IMPORTED_MODULE_1__scrolldown_scss___default.a.txt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, "Navigate")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Icon_Scroll__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3__Global_withTheme__["a" /* withTheme */])(ScrollDown));

/***/ }),

/***/ "./components/ScrollDown/scrolldown.scss":
/***/ (function(module, exports) {

module.exports = {
	"txt": "scrolldown__txt___2vVkw",
	"wrapper": "scrolldown__wrapper___3xhtB",
	"center": "scrolldown__center___VSauo",
	"inner": "scrolldown__inner___2Nw-t",
	"inverted": "scrolldown__inverted___2v07x"
};

/***/ }),

/***/ "./components/SubMenu/SubMenu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subMenu_scss__ = __webpack_require__("./components/SubMenu/subMenu.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subMenu_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__subMenu_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_addons_css_transition_group__ = __webpack_require__("react-addons-css-transition-group");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_addons_css_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_addons_css_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Nav_Nav__ = __webpack_require__("./components/Nav/Nav.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ResponsiveWrapper_Responsive__ = __webpack_require__("./components/ResponsiveWrapper/Responsive.js");
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\SubMenu\\SubMenu.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }







var SubMenu = function SubMenu(_ref) {
  var subMenu = _ref.subMenu,
      visible = _ref.visible,
      openSubMenu = _ref.openSubMenu,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["subMenu", "visible", "openSubMenu", "className"]);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_addons_css_transition_group___default.a, {
    transitionName: "submenu",
    transitionEnterTimeout: 800,
    transitionLeaveTimeout: 800,
    component: "div",
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, visible && subMenu.map(function (link, index) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ResponsiveWrapper_Responsive__["a" /* LG */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Nav_Nav__["a" /* NavigationLink */], _extends({
      style: {
        transitionDelay: "".concat(50 * index, "ms")
      },
      key: index
    }, Object(__WEBPACK_IMPORTED_MODULE_3__Nav_Nav__["c" /* normalize */])(link, openSubMenu), rest, {
      isSubLink: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__ResponsiveWrapper_Responsive__["d" /* ML */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Nav_Nav__["a" /* NavigationLink */], _extends({
      key: index
    }, Object(__WEBPACK_IMPORTED_MODULE_3__Nav_Nav__["c" /* normalize */])(link, openSubMenu), rest, {
      isSubLink: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      }
    }))));
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (SubMenu);

/***/ }),

/***/ "./components/SubMenu/subMenu.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Video/Video.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__video_scss__ = __webpack_require__("./components/Video/video.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__video_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__video_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_apollo_boost__ = __webpack_require__("apollo-boost");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_apollo_boost___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_apollo_boost__);
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\Video\\Video.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Video =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Video, _React$Component);

  function Video(props) {
    var _this;

    _classCallCheck(this, Video);

    _this = _possibleConstructorReturn(this, (Video.__proto__ || Object.getPrototypeOf(Video)).call(this, props));
    _this.state = {
      loaded: false,
      usePoster: false
    };
    _this.handleLoaded = _this.handleLoaded.bind(_assertThisInitialized(_this));
    _this.checkPoster = _this.checkPoster.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Video, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.video.load();

      if (this.video.readyState >= 3) {
        this.handleLoaded();
      }

      this.posterTimeout = setInterval(this.checkPoster, 4000);
    }
  }, {
    key: "handleLoaded",
    value: function handleLoaded(e) {
      if (!this.state.loaded) {
        this.setState({
          loaded: true
        });
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.paused !== nextProps.paused) {
        nextProps.paused ? this.video.pause() : this.video.play();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(nextProps) {
      if (this.props.src !== nextProps.src) {
        this.video.load();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.posterTimeout);
    }
  }, {
    key: "checkPoster",
    value: function checkPoster() {
      if (this.video.currentTime === 0) {
        this.setState({
          usePoster: true
        });
      }
    }
  }, {
    key: "getPoster",
    value: function getPoster() {
      return this.props.poster ? this.props.poster : '';
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var url = this.props.video.url;
      var display = this.state.loaded && !this.props.hidden;
      var loadStyle = {
        opacity: display ? this.props.opacity : 0
      };
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_1__video_scss___default.a.wrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("video", {
        className: __WEBPACK_IMPORTED_MODULE_1__video_scss___default.a.cover,
        height: 360,
        width: 640,
        ref: function ref(el) {
          return _this2.video = el;
        },
        loop: true,
        autoPlay: true,
        playsInline: true,
        muted: true,
        onCanPlay: this.handleLoaded,
        src: url,
        style: loadStyle,
        onTouchStart: function onTouchStart() {
          return display ? _this2.video.play() : false;
        },
        poster: this.state.usePoster ? this.getPoster() : '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }));
    }
  }]);

  return Video;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Video);

/***/ }),

/***/ "./components/Video/VideoHeading.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__video_scss__ = __webpack_require__("./components/Video/video.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__video_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__video_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Button_Button__ = __webpack_require__("./components/Button/Button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\Video\\VideoHeading.js";





var VideoHeading = function VideoHeading(_ref) {
  var isError = _ref.isError,
      statusCode = _ref.statusCode;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__video_scss___default.a.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_1__video_scss___default.a.center,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
    href: '/content?slug=philosophy',
    as: '/philosophy',
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Button_Button__["a" /* default */], {
    title: 'Philosophy',
    className: __WEBPACK_IMPORTED_MODULE_1__video_scss___default.a.bordered,
    link: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  })), isError ? statusCode ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: __WEBPACK_IMPORTED_MODULE_1__video_scss___default.a.preface,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, "Ops!", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), "An error ", statusCode, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }), "occurred on server") : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: __WEBPACK_IMPORTED_MODULE_1__video_scss___default.a.preface,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Ops!", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), "An error occurred", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), "on client") : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: __WEBPACK_IMPORTED_MODULE_1__video_scss___default.a.preface,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "discover", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), "our"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
    href: '/collections',
    prefetch: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Button_Button__["a" /* default */], {
    title: 'Collections',
    className: __WEBPACK_IMPORTED_MODULE_1__video_scss___default.a.bordered,
    link: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (VideoHeading);

/***/ }),

/***/ "./components/Video/video.scss":
/***/ (function(module, exports) {

module.exports = {
	"bordered": "video__bordered___1F0Pt",
	"preface": "video__preface___1W3xZ",
	"cover": "video__cover___1BFs8",
	"wrapper": "video__wrapper___rn1Dv",
	"heading": "video__heading___WYq7G",
	"center": "video__center___1LIPS"
};

/***/ }),

/***/ "./components/utils/getMousePosition.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getMousePosition;
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

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME", function() { return HOME; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Video_VideoHeading__ = __webpack_require__("./components/Video/VideoHeading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout_Layout__ = __webpack_require__("./components/Layout/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Video_Video__ = __webpack_require__("./components/Video/Video.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_apollo_boost__ = __webpack_require__("apollo-boost");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_apollo_boost___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_apollo_boost__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_apollo__);
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\pages\\index.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["{ \n  home {\n    \tseo {\n  \t    title\n  \t    description\n  \t}\n  \tvideo {\n  \t    url\n  \t}\n  }\n}"]);

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_apollo__["Query"], {
    query: HOME,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, function (_ref) {
    var loading = _ref.loading,
        _ref$data$home = _ref.data.home,
        video = _ref$data$home.video,
        seo = _ref$data$home.seo;
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout_Layout__["a" /* default */], {
      seo: !seo ? {} : seo,
      isDark: true,
      isInfo: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Video_Video__["a" /* default */], {
      video: video,
      opacity: .5,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }), __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0__components_Video_VideoHeading__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }));
  });
});
var HOME = Object(__WEBPACK_IMPORTED_MODULE_4_apollo_boost__["gql"])(_templateObject);

/***/ }),

/***/ "./scss/global.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./scss/reset.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "apollo-boost":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "classnames/bind":
/***/ (function(module, exports) {

module.exports = require("classnames/bind");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "querystring":
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-addons-css-transition-group":
/***/ (function(module, exports) {

module.exports = require("react-addons-css-transition-group");

/***/ }),

/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-responsive":
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map