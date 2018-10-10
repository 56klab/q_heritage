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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Cursor/Cursor.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cursor_scss__ = __webpack_require__("./components/Cursor/cursor.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cursor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__cursor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind__ = __webpack_require__("classnames/bind");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames_bind__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Global_movingCursor__ = __webpack_require__("./components/Global/movingCursor.js");
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\Cursor\\Cursor.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var cx = __WEBPACK_IMPORTED_MODULE_3_classnames_bind___default.a.bind(__WEBPACK_IMPORTED_MODULE_2__cursor_scss___default.a);

var Cursor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Cursor, _React$Component);

  function Cursor() {
    _classCallCheck(this, Cursor);

    return _possibleConstructorReturn(this, (Cursor.__proto__ || Object.getPrototypeOf(Cursor)).apply(this, arguments));
  }

  _createClass(Cursor, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          isHover = _props.isHover,
          isMouseDown = _props.isMouseDown,
          isMin = _props.isMin,
          pointer = _props.pointer,
          outer = _props.outer,
          isLoading = _props.isLoading;
      var cursorClasses = cx({
        isHover: isHover
      }, {
        isMouseDown: isMouseDown
      }, {
        isMin: isMin
      }, {
        isLoading: isLoading
      });

      var commonProps = _objectSpread({
        className: cursorClasses
      }, __WEBPACK_IMPORTED_MODULE_2__cursor_scss___default.a.pointer);

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_2__cursor_scss___default.a.cursor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_2__cursor_scss___default.a.inner + ' ' + cursorClasses,
        style: {
          top: pointer.y + 'px',
          left: pointer.x + 'px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_2__cursor_scss___default.a.outer + ' ' + cursorClasses,
        style: {
          top: outer.y + 'px',
          left: outer.x + 'px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }));
    }
  }]);

  return Cursor;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Cursor.propTypes = {
  pointer: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.objectOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number),
  outer: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.objectOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number),
  isHover: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  isMouseDown: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  isMin: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4__Global_movingCursor__["a" /* default */])(Cursor));

/***/ }),

/***/ "./components/Cursor/cursor.scss":
/***/ (function(module, exports) {

module.exports = {
	"cursor": "cursor__cursor___3bf33",
	"pointer": "cursor__pointer___1gSRx",
	"outer": "cursor__outer___3Zztu cursor__pointer___1gSRx",
	"isHover": "cursor__isHover___2Y4n7",
	"isMouseDown": "cursor__isMouseDown___2A0JA",
	"isMin": "cursor__isMin___1Hlsa",
	"inner": "cursor__inner___3qh_Q cursor__pointer___1gSRx",
	"isLoading": "cursor__isLoading___2vuTL",
	"beating": "cursor__beating___1_xG0"
};

/***/ }),

/***/ "./components/Global/PageTransition.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_transition_group_Transition__ = __webpack_require__("react-transition-group/Transition");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_transition_group_Transition___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_transition_group_Transition__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transition_group_CSSTransition__ = __webpack_require__("react-transition-group/CSSTransition");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_transition_group_CSSTransition___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_transition_group_CSSTransition__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_transition_group_utils_PropTypes__ = __webpack_require__("react-transition-group/utils/PropTypes");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_transition_group_utils_PropTypes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_transition_group_utils_PropTypes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Transition_TransitionOverlay__ = __webpack_require__("./components/Transition/TransitionOverlay.js");
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\Global\\PageTransition.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(oldChildren) && __WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }

  return true;
}

function buildClassName(className, state) {
  switch (state) {
    case 'enter':
      return "".concat(className, "-enter");

    case 'entering':
      return "".concat(className, "-enter ").concat(className, "-enter-active");

    case 'entered':
      return "".concat(className, "-enter-done");

    case 'exit':
      return "".concat(className, "-exit");

    case 'exiting':
      return "".concat(className, "-exit ").concat(className, "-exit-active");

    case 'exited':
      return "".concat(className, "-exit-done");

    default:
      return '';
  }
}

function shouldDelayEnter(children) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(children) && children.type.pageTransitionDelayEnter;
}

function makeStateUpdater(state, otherProps) {
  return function updateState() {
    this.setState(_objectSpread({
      state: state
    }, otherProps));
  };
}

var PageTransition =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PageTransition, _React$Component);

  function PageTransition(props) {
    var _this;

    _classCallCheck(this, PageTransition);

    _this = _possibleConstructorReturn(this, (PageTransition.__proto__ || Object.getPrototypeOf(PageTransition)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "onEntering", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: makeStateUpdater('entering').bind(_assertThisInitialized(_this))
    });
    Object.defineProperty(_assertThisInitialized(_this), "onEntered", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: makeStateUpdater('entered').bind(_assertThisInitialized(_this))
    });
    Object.defineProperty(_assertThisInitialized(_this), "onExiting", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: makeStateUpdater('exiting').bind(_assertThisInitialized(_this))
    });
    Object.defineProperty(_assertThisInitialized(_this), "onExited", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: makeStateUpdater('exited', {
        renderedChildren: null
      }).bind(_assertThisInitialized(_this))
    });
    var children = props.children;
    _this.state = {
      state: 'enter',
      isIn: !shouldDelayEnter(children),
      currentChildren: children,
      nextChildren: null,
      renderedChildren: children,
      showLoading: false
    };
    return _this;
  }

  _createClass(PageTransition, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (shouldDelayEnter(this.props.children)) {
        this.setState({
          timeoutId: this.startEnterTimer()
        });
      }

      if (this.props.monkeyPatchScrolling && typeof window !== 'undefined') {
        // Forgive me for what I'm about to do
        this.originalScrollTo = window.scrollTo;
        this.disableScrolling = false;

        window.scrollTo = function () {
          if (_this2.disableScrolling) return;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this2.originalScrollTo.apply(window, args);
        };
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _state = this.state,
          currentChildren = _state.currentChildren,
          renderedChildren = _state.renderedChildren,
          nextChildren = _state.nextChildren,
          isIn = _state.isIn,
          state = _state.state;
      var children = this.props.children;
      var hasNewChildren = areChildrenDifferent(currentChildren, children);
      var needsTransition = areChildrenDifferent(renderedChildren, children);

      if (hasNewChildren) {
        // We got a new set of children while we were transitioning some in
        // Immediately start transitioning out this component and update the next
        // component
        this.setState({
          isIn: false,
          nextChildren: children,
          currentChildren: children
        });

        if (this.state.timeoutId) {
          clearTimeout(this.state.timeoutId);
        }
      } else if (needsTransition && !isIn && state === 'exited') {
        if (shouldDelayEnter(nextChildren)) {
          // Wait for the ready callback to actually transition in, but still
          // mount the component to allow it to start loading things
          this.setState({
            renderedChildren: nextChildren,
            nextChildren: null,
            timeoutId: this.startEnterTimer()
          });
        } else {
          // No need to wait, mount immediately
          this.setState({
            isIn: true,
            renderedChildren: nextChildren,
            nextChildren: null
          });
        }
      } else if (prevState.showLoading && !this.state.showLoading) {
        // We hid the loading indicator; now that that change has been flushed to
        // the DOM, we can now bring in the next component!
        this.setState({
          isIn: true
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.originalScrollTo && typeof window !== 'undefined') {
        window.scrollTo = this.originalScrollTo;
      }

      if (this.state.timeoutId) clearTimeout(this.state.timeoutId);
    }
  }, {
    key: "onEnter",
    value: function onEnter() {
      // It's safe to reenable scrolling now
      this.disableScrolling = false;
      this.setState({
        state: 'enter',
        showLoading: false
      });
    }
  }, {
    key: "onExit",
    value: function onExit() {
      // Disable scrolling until this component has unmounted
      this.disableScrolling = true;
      this.setState({
        state: 'exit'
      });
    }
  }, {
    key: "onChildLoaded",
    value: function onChildLoaded() {
      if (this.state.timeoutId) {
        clearTimeout(this.state.timeoutId);
      }

      if (this.state.showLoading) {
        // We'll hide the loader first and animate in the page on the next tick
        this.setState({
          showLoading: false
        });
      } else {
        // We can immediately bring in the next page!
        this.setState({
          isIn: true
        });
      }
    }
  }, {
    key: "startEnterTimer",
    value: function startEnterTimer() {
      var _this3 = this;

      return setTimeout(function () {
        _this3.setState({
          showLoading: true
        });
      }, this.props.loadingDelay);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          timeout = _props.timeout,
          loadingComponent = _props.loadingComponent,
          loadingCallbackName = _props.loadingCallbackName;
      var _state2 = this.state,
          children = _state2.renderedChildren,
          state = _state2.state;

      if (['entering', 'exiting', 'exited'].indexOf(state) !== -1) {
        if (document.body) document.body.scrollTop;
      }

      var hasLoadingComponent = !!loadingComponent;
      var containerClassName = buildClassName(this.props.classNames, state);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_transition_group_Transition___default.a, {
        timeout: timeout,
        "in": this.state.isIn,
        appear: true,
        onEnter: function onEnter() {
          return _this4.onEnter();
        },
        onEntering: function onEntering() {
          return _this4.onEntering();
        },
        onEntered: function onEntered() {
          return _this4.onEntered();
        },
        onExit: function onExit() {
          return _this4.onExit();
        },
        onExiting: function onExiting() {
          return _this4.onExiting();
        },
        onExited: function onExited() {
          return _this4.onExited();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: containerClassName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Transition_TransitionOverlay__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }), children && __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(children, _defineProperty({}, loadingCallbackName, function () {
        return _this4.onChildLoaded();
      })))), hasLoadingComponent && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_transition_group_CSSTransition___default.a, {
        "in": this.state.showLoading,
        mountOnEnter: true,
        unmountOnExit: true,
        appear: true,
        classNames: this.props.loadingClassNames,
        timeout: this.props.loadingTimeout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227
        }
      }, loadingComponent));
    }
  }]);

  return PageTransition;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

PageTransition.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node.isRequired,
  classNames: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  timeout: __WEBPACK_IMPORTED_MODULE_4_react_transition_group_utils_PropTypes__["timeoutsShape"].isRequired,
  loadingComponent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element,
  loadingDelay: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  loadingCallbackName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  loadingTimeout: function loadingTimeout(props) {
    var pt = __WEBPACK_IMPORTED_MODULE_4_react_transition_group_utils_PropTypes__["timeoutsShape"];
    if (props.loadingComponent) pt = pt.isRequired;

    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    return pt.apply(void 0, [props].concat(args));
  },
  loadingClassNames: function loadingClassNames(props) {
    var pt = __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string;
    if (props.loadingTimeout) pt = pt.isRequired;

    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return pt.apply(void 0, [props].concat(args));
  },
  monkeyPatchScrolling: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
PageTransition.defaultProps = {
  loadingComponent: null,
  loadingCallbackName: 'pageTransitionReadyToEnter',
  loadingDelay: 500,
  monkeyPatchScrolling: false
};
/* harmony default export */ __webpack_exports__["a"] = (PageTransition);

/***/ }),

/***/ "./components/Global/movingCursor.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_router__);
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\Global\\movingCursor.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var movingCursor = function movingCursor(Component) {
  var dX = 0,
      dY = 0,
      dXOuter = 0,
      dYOuter = 0,
      xPos = 0,
      yPos = 0,
      xPosOuter = 0,
      yPosOuter = 0,
      isMin = false,
      isMouseDown = false,
      isHover = false;
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(_class2, _React$Component);

      function _class2(props) {
        var _this;

        _classCallCheck(this, _class2);

        _this = _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).call(this, props));
        Object.defineProperty(_assertThisInitialized(_this), "triggerTouch", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: function value() {
            _this.isTouch = true;
          }
        });
        _this.onMouseDown = _this.onMouseDown.bind(_assertThisInitialized(_this));
        _this.onMouseUp = _this.onMouseUp.bind(_assertThisInitialized(_this));
        _this.onMouseMove = _this.onMouseMove.bind(_assertThisInitialized(_this));
        _this.update = _this.update.bind(_assertThisInitialized(_this));
        _this.onMouseOver = _this.onMouseOver.bind(_assertThisInitialized(_this));
        _this.state = {
          pointer: {
            x: 0,
            y: 0
          },
          outer: {
            x: 0,
            y: 0
          },
          isMin: false,
          isMouseEnter: false,
          isHover: false,
          isLoading: false
        };
        _this.isTouch = false;
        _this.mouseX = 0;
        _this.mouseY = 0;
        return _this;
      }

      _createClass(_class2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          window.addEventListener('touchstart', this.triggerTouch);
          document.addEventListener('mousedown', this.onMouseDown, false);
          document.addEventListener('mouseup', this.onMouseUp, false);
          document.addEventListener('mousemove', this.onMouseMove, false);
          document.addEventListener('mouseover', this.onMouseOver, false);
          this.setState({
            pointer: {
              x: window.innerWidth / 2,
              y: window.innerHeight / 2
            },
            outer: {
              x: window.innerWidth / 2,
              y: window.innerHeight / 2
            }
          });
          this.mouseX = window.innerWidth / 2;
          this.mouseY = window.innerHeight / 2;
          requestAnimationFrame(this.update);

          __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.onRouteChangeStart = function (url) {
            console.log('start ' + url);

            _this2.setState({
              isLoading: true
            });
          };

          __WEBPACK_IMPORTED_MODULE_1_next_router___default.a.onRouteChangeComplete = function () {
            console.log('complete');

            _this2.setState({
              isLoading: false
            });
          };
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          window.removeEventListener('touchstart', this.triggerTouch);
          document.removeEventListener('mousedown', this.onMouseDown, false);
          document.removeEventListener('mouseup', this.onMouseUp, false);
          document.removeEventListener('mousemove', this.onMouseMove, false);
          cancelAnimationFrame(this.update);
        }
      }, {
        key: "onMouseOver",
        value: function onMouseOver(e) {
          if (e.target.dataset.mouse) {
            isHover = true;
          } else if (e.target.dataset.min) {
            isMin = true;
          } else {
            isHover = false;
            isMin = false;
          }
        }
      }, {
        key: "onMouseDown",
        value: function onMouseDown() {
          isMouseDown = true;
        }
      }, {
        key: "onMouseUp",
        value: function onMouseUp() {
          isMouseDown = false;
        }
      }, {
        key: "update",
        value: function update() {
          dX = this.mouseX - this.state.pointer.x;
          dY = this.mouseY - this.state.pointer.y;
          dXOuter = this.mouseX - this.state.outer.x;
          dYOuter = this.mouseY - this.state.outer.y;
          xPos = this.state.pointer.x + dX * 0.6;
          yPos = this.state.pointer.y + dY * 0.6;
          xPosOuter = this.state.outer.x + dXOuter * 0.15;
          yPosOuter = this.state.outer.y + dYOuter * 0.15;
          this.setState({
            pointer: {
              x: xPos,
              y: yPos
            },
            outer: {
              x: xPosOuter,
              y: yPosOuter
            },
            isMouseDown: isMouseDown,
            isHover: isHover,
            isMin: isMin
          });
          requestAnimationFrame(this.update);
        }
      }, {
        key: "onMouseMove",
        value: function onMouseMove(e) {
          this.mouseX = e.clientX;
          this.mouseY = e.clientY;
        }
      }, {
        key: "render",
        value: function render() {
          var _props = this.props,
              forwardedRef = _props.forwardedRef,
              rest = _objectWithoutProperties(_props, ["forwardedRef"]);

          return !this.isTouch && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, this.state, {
            ref: forwardedRef
          }, rest, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 146
            }
          }));
        }
      }]);

      return _class2;
    }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component)
  );
};

/* harmony default export */ __webpack_exports__["a"] = (movingCursor);

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

/***/ "./components/Transition/TransitionOverlay.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transition_scss__ = __webpack_require__("./components/Transition/transition.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transition_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__transition_scss__);
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\Transition\\TransitionOverlay.js";


var TransitionOverlay = __WEBPACK_IMPORTED_MODULE_0_react___default.a.forwardRef(function (props, ref) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: 'overlay',
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: 'item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: 'item',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }));
});
/* harmony default export */ __webpack_exports__["a"] = (TransitionOverlay);

/***/ }),

/***/ "./components/Transition/transition.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./fragmentTypes.json":
/***/ (function(module, exports) {

module.exports = {"__schema":{"types":[{"kind":"UNION","name":"LegalContent","possibleTypes":[{"name":"ParagraphGroupRecord"},{"name":"ChapterGroupRecord"}]},{"kind":"UNION","name":"ParagraphGroupActionLink","possibleTypes":[{"name":"SeriesRecord"},{"name":"ShapeRecord"},{"name":"FrameRecord"},{"name":"EyewearRecord"}]},{"kind":"UNION","name":"CollectionContent","possibleTypes":[{"name":"ParagraphGroupRecord"},{"name":"TitleGroupRecord"},{"name":"ButtonGroupRecord"},{"name":"HeadingGroupRecord"}]},{"kind":"UNION","name":"PageContent","possibleTypes":[{"name":"ParagraphGroupRecord"},{"name":"ButtonGroupRecord"},{"name":"TitleGroupRecord"}]}]}}

/***/ }),

/***/ "./lib/init-apollo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initApollo;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_client__ = __webpack_require__("apollo-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apollo_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__ = __webpack_require__("apollo-link-http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_link_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_link_context__ = __webpack_require__("apollo-link-context");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_link_context___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_apollo_link_context__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_apollo_cache_inmemory__ = __webpack_require__("apollo-cache-inmemory");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_apollo_cache_inmemory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_apollo_cache_inmemory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fragmentTypes_json__ = __webpack_require__("./fragmentTypes.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fragmentTypes_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__fragmentTypes_json__);






var fragmentMatcher = new __WEBPACK_IMPORTED_MODULE_4_apollo_cache_inmemory__["IntrospectionFragmentMatcher"]({
  introspectionQueryResultData: __WEBPACK_IMPORTED_MODULE_5__fragmentTypes_json___default.a
});
var apolloClient = null,
    token = 'ac1db6c9a3cec0b15bb4e9743e7c7e'; // Polyfill fetch() on the server (used by apollo-client)

if (!process.browser) {
  global.fetch = __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default.a;
}

var httpLink = Object(__WEBPACK_IMPORTED_MODULE_1_apollo_link_http__["createHttpLink"])({
  uri: 'https://graphql.datocms.com/'
});
var authLink = Object(__WEBPACK_IMPORTED_MODULE_2_apollo_link_context__["setContext"])(function (_, _ref) {
  var headers = _ref.headers;
  return {
    headers: Object.assign(headers || {}, {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': "Bearer ".concat(token)
    })
  };
});

function create(initialState) {
  return new __WEBPACK_IMPORTED_MODULE_0_apollo_client__["ApolloClient"]({
    connectToDevTools: true,
    ssrMode: !process.browser,
    // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache: new __WEBPACK_IMPORTED_MODULE_4_apollo_cache_inmemory__["InMemoryCache"]({
      fragmentMatcher: fragmentMatcher
    }).restore(initialState || {})
  });
}

function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  } // Reuse client on the client-side


  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}

/***/ }),

/***/ "./lib/with-apollo-client.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__init_apollo__ = __webpack_require__("./lib/init-apollo.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_apollo__);

var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\lib\\with-apollo-client.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/* harmony default export */ __webpack_exports__["a"] = (function (App) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Apollo, _React$Component);

    _createClass(Apollo, null, [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
          var Component, router, appProps, apolloState, apollo;
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  Component = ctx.Component, router = ctx.router;
                  appProps = {};

                  if (!App.getInitialProps) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 5;
                  return App.getInitialProps(ctx);

                case 5:
                  appProps = _context.sent;

                case 6:
                  apolloState = {}; // Run all GraphQL queries in the component tree
                  // and extract the resulting data

                  apollo = Object(__WEBPACK_IMPORTED_MODULE_2__init_apollo__["a" /* default */])();
                  _context.prev = 8;
                  _context.next = 11;
                  return Object(__WEBPACK_IMPORTED_MODULE_4_react_apollo__["getDataFromTree"])(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(App, _extends({}, appProps, {
                    Component: Component,
                    router: router,
                    apolloState: apolloState,
                    apolloClient: apollo,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 25
                    }
                  })));

                case 11:
                  _context.next = 16;
                  break;

                case 13:
                  _context.prev = 13;
                  _context.t0 = _context["catch"](8);
                  // Prevent Apollo Client GraphQL errors from crashing SSR.
                  // Handle them in components via the data.error prop:
                  // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
                  console.error('Error while running `getDataFromTree`', _context.t0);

                case 16:
                  if (!process.browser) {
                    // getDataFromTree does not call componentWillUnmount
                    // head side effect therefore need to be cleared manually
                    __WEBPACK_IMPORTED_MODULE_3_next_head___default.a.rewind();
                  } // Extract query data from the Apollo store


                  apolloState.data = apollo.cache.extract();
                  return _context.abrupt("return", _objectSpread({}, appProps, {
                    apolloState: apolloState
                  }));

                case 19:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[8, 13]]);
        }));

        return function getInitialProps(_x) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }]);

    function Apollo(props) {
      var _this;

      _classCallCheck(this, Apollo);

      _this = _possibleConstructorReturn(this, (Apollo.__proto__ || Object.getPrototypeOf(Apollo)).call(this, props)); // `getDataFromTree` renders the component first, the client is passed off as a property.
      // After that rendering is done using Next's normal rendering pipeline

      _this.apolloClient = props.apolloClient || Object(__WEBPACK_IMPORTED_MODULE_2__init_apollo__["a" /* default */])(props.apolloState.data);
      return _this;
    }

    _createClass(Apollo, [{
      key: "render",
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(App, _extends({}, this.props, {
          apolloClient: this.apolloClient,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }));
      }
    }]);

    return Apollo;
  }(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component), Object.defineProperty(_class, "displayName", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: 'withApollo(App)'
  }), _temp;
});

/***/ }),

/***/ "./pages/_app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_app__ = __webpack_require__("next/app");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_with_apollo_client__ = __webpack_require__("./lib/with-apollo-client.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Cursor_Cursor__ = __webpack_require__("./components/Cursor/Cursor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Global_PageTransition__ = __webpack_require__("./components/Global/PageTransition.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_gsap__ = __webpack_require__("gsap");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_gsap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ResponsiveWrapper_Responsive__ = __webpack_require__("./components/ResponsiveWrapper/Responsive.js");
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\pages\\_app.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var MyApp =
/*#__PURE__*/
function (_App) {
  _inherits(MyApp, _App);

  function MyApp() {
    _classCallCheck(this, MyApp);

    return _possibleConstructorReturn(this, (MyApp.__proto__ || Object.getPrototypeOf(MyApp)).apply(this, arguments));
  }

  _createClass(MyApp, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          Component = _props.Component,
          pageProps = _props.pageProps,
          router = _props.router,
          apolloClient = _props.apolloClient;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_next_app__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["ApolloProvider"], {
        client: apolloClient,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Global_PageTransition__["a" /* default */], {
        timeout: 700,
        classNames: "page-transition",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, _extends({}, pageProps, router, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_ResponsiveWrapper_Responsive__["c" /* MD */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Cursor_Cursor__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      })));
    }
  }]);

  return MyApp;
}(__WEBPACK_IMPORTED_MODULE_0_next_app___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_2__lib_with_apollo_client__["a" /* default */])(MyApp));

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_app.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "apollo-cache-inmemory":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link-context":
/***/ (function(module, exports) {

module.exports = require("apollo-link-context");

/***/ }),

/***/ "apollo-link-http":
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "classnames/bind":
/***/ (function(module, exports) {

module.exports = require("classnames/bind");

/***/ }),

/***/ "gsap":
/***/ (function(module, exports) {

module.exports = require("gsap");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/app":
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-responsive":
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),

/***/ "react-transition-group/CSSTransition":
/***/ (function(module, exports) {

module.exports = require("react-transition-group/CSSTransition");

/***/ }),

/***/ "react-transition-group/Transition":
/***/ (function(module, exports) {

module.exports = require("react-transition-group/Transition");

/***/ }),

/***/ "react-transition-group/utils/PropTypes":
/***/ (function(module, exports) {

module.exports = require("react-transition-group/utils/PropTypes");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map