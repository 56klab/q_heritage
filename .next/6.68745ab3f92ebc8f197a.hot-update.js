webpackHotUpdate(6,{

/***/ "./components/Slider/Slider.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export collections */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slider_scss__ = __webpack_require__("./components/Slider/slider.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slider_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__slider_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Slide__ = __webpack_require__("./components/Slide/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_addons_transition_group__ = __webpack_require__("./node_modules/react-addons-transition-group/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_addons_transition_group___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_addons_transition_group__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_apollo_boost__ = __webpack_require__("./node_modules/apollo-boost/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_apollo_boost___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_apollo_boost__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo__ = __webpack_require__("./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__IconButton_IconButton__ = __webpack_require__("./components/IconButton/IconButton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Icon_Arrow__ = __webpack_require__("./components/Icon/Arrow.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_gsap__ = __webpack_require__("./node_modules/gsap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lethargy__ = __webpack_require__("./node_modules/lethargy/lethargy.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lethargy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lethargy__);
var _jsxFileName = "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\Slider\\Slider.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["{\n  collections: allCollections {\n    id\n    name\n    slug\n    displayTitle\n    image {\n      url\n      alt\n      width\n    }\n    intro\n  }\n  types: allTypes {\n    id\n    slug\n  }\n}"]);

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }












var Slider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider(props) {
    var _this;

    _classCallCheck(this, Slider);

    _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));
    _this.state = {
      current: 0,
      direction: null,
      total: props.data.collections.length
    };
    _this.isAnimating = false;
    _this.dist = 0;
    _this.lethargy = new __WEBPACK_IMPORTED_MODULE_9_lethargy__["Lethargy"]();
    _this.navigate = _this.navigate.bind(_assertThisInitialized(_this));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.wheel = _this.wheel.bind(_assertThisInitialized(_this));
    _this.onEndAnimation = _this.onEndAnimation.bind(_assertThisInitialized(_this));
    _this.start = _this.start.bind(_assertThisInitialized(_this));
    _this.move = _this.move.bind(_assertThisInitialized(_this));
    _this.end = _this.end.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Slider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.wheel);
    }
  }, {
    key: "handleClick",
    value: function handleClick(_ref) {
      var value = _ref.target.value;
      this.navigate(value);
    }
  }, {
    key: "navigate",
    value: function navigate() {
      var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'next';
      if (this.isAnimating) return false;
      this.isAnimating = true;
      var _state = this.state,
          current = _state.current,
          total = _state.total;
      this.setState({
        current: dir === 'next' ? current < total - 1 ? current + 1 : 0 : current > 0 ? current - 1 : total - 1,
        direction: dir
      });
    }
  }, {
    key: "onEndAnimation",
    value: function onEndAnimation() {
      this.isAnimating = false;
    }
  }, {
    key: "wheel",
    value: function wheel(e) {
      if (this.lethargy.check(e) !== false) {
        var dir = e.deltaY > 0 ? 'next' : 'prev';
        this.navigate(dir);
      }
    }
  }, {
    key: "start",
    value: function start(e) {
      var touches = e.changedTouches ? e.changedTouches[0] : e;
      this.last = touches.clientX;
    }
  }, {
    key: "move",
    value: function move(e) {}
  }, {
    key: "end",
    value: function end(e) {
      var touches = e.changedTouches ? e.changedTouches[0] : e;
      this.dist = touches.clientX - this.last;
      this.dist = Math.abs(this.dist) || 0;
      if (this.dist < 100) return;
      e.stopPropagation();
      console.log('start', this.last, Math.abs(this.dist), 'end', touches.clientX);

      if (this.last > touches.clientX) {
        this.navigate('next');
      } else {
        this.navigate('prev');
      }

      this.last = touches.clientX;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.wheel);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _state2 = this.state,
          current = _state2.current,
          direction = _state2.direction,
          total = _state2.total;
      var _props$data = this.props.data,
          collections = _props$data.collections,
          types = _props$data.types;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_1__slider_scss___default.a.slider,
        onWheel: function onWheel(e) {
          return _this2.wheel(e);
        },
        onTouchStart: this.start,
        onTouchMove: this.move,
        onTouchEnd: this.end,
        onMouseDown: this.start,
        onMouseUp: this.end,
        onMouseMove: this.move,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: __WEBPACK_IMPORTED_MODULE_1__slider_scss___default.a.counter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, "slide ", current + 1, " of ", total), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_addons_transition_group___default.a, {
        component: "div",
        className: __WEBPACK_IMPORTED_MODULE_1__slider_scss___default.a.slides,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, collections.map(function (s, index) {
        return index === current && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Slide__["a" /* default */], _extends({
          key: index,
          breadcrumb: "0".concat(index + 1, " \xB7 collection"),
          dir: direction,
          handleEndAnimation: _this2.onEndAnimation,
          types: types
        }, s, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 125
          }
        }));
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: __WEBPACK_IMPORTED_MODULE_1__slider_scss___default.a.nav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__IconButton_IconButton__["a" /* default */], {
        onClick: function onClick(e) {
          return _this2.handleClick(e);
        },
        value: 'prev',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Icon_Arrow__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__IconButton_IconButton__["a" /* default */], {
        onClick: function onClick(e) {
          return _this2.handleClick(e);
        },
        value: 'next',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Icon_Arrow__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Slider;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var collections = Object(__WEBPACK_IMPORTED_MODULE_4_apollo_boost__["gql"])(_templateObject);

var _default = Object(__WEBPACK_IMPORTED_MODULE_5_react_apollo__["graphql"])(collections)(Slider);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Slider, "Slider", "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\Slider\\Slider.js");
  reactHotLoader.register(collections, "collections", "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\Slider\\Slider.js");
  reactHotLoader.register(_default, "default", "D:\\Users\\Simone Bussoni\\GitHub Projects\\Quantility\\q_heritage\\components\\Slider\\Slider.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/lethargy/lethargy.js":
/***/ (function(module, exports) {

// Generated by CoffeeScript 1.9.2
(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.Lethargy = (function() {
    function Lethargy(stability, sensitivity, tolerance, delay) {
      this.stability = stability != null ? Math.abs(stability) : 8;
      this.sensitivity = sensitivity != null ? 1 + Math.abs(sensitivity) : 100;
      this.tolerance = tolerance != null ? 1 + Math.abs(tolerance) : 1.1;
      this.delay = delay != null ? delay : 150;
      this.lastUpDeltas = (function() {
        var i, ref, results;
        results = [];
        for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
          results.push(null);
        }
        return results;
      }).call(this);
      this.lastDownDeltas = (function() {
        var i, ref, results;
        results = [];
        for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
          results.push(null);
        }
        return results;
      }).call(this);
      this.deltasTimestamp = (function() {
        var i, ref, results;
        results = [];
        for (i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--) {
          results.push(null);
        }
        return results;
      }).call(this);
    }

    Lethargy.prototype.check = function(e) {
      var lastDelta;
      e = e.originalEvent || e;
      if (e.wheelDelta != null) {
        lastDelta = e.wheelDelta;
      } else if (e.deltaY != null) {
        lastDelta = e.deltaY * -40;
      } else if ((e.detail != null) || e.detail === 0) {
        lastDelta = e.detail * -40;
      }
      this.deltasTimestamp.push(Date.now());
      this.deltasTimestamp.shift();
      if (lastDelta > 0) {
        this.lastUpDeltas.push(lastDelta);
        this.lastUpDeltas.shift();
        return this.isInertia(1);
      } else {
        this.lastDownDeltas.push(lastDelta);
        this.lastDownDeltas.shift();
        return this.isInertia(-1);
      }
      return false;
    };

    Lethargy.prototype.isInertia = function(direction) {
      var lastDeltas, lastDeltasNew, lastDeltasOld, newAverage, newSum, oldAverage, oldSum;
      lastDeltas = direction === -1 ? this.lastDownDeltas : this.lastUpDeltas;
      if (lastDeltas[0] === null) {
        return direction;
      }
      if (this.deltasTimestamp[(this.stability * 2) - 2] + this.delay > Date.now() && lastDeltas[0] === lastDeltas[(this.stability * 2) - 1]) {
        return false;
      }
      lastDeltasOld = lastDeltas.slice(0, this.stability);
      lastDeltasNew = lastDeltas.slice(this.stability, this.stability * 2);
      oldSum = lastDeltasOld.reduce(function(t, s) {
        return t + s;
      });
      newSum = lastDeltasNew.reduce(function(t, s) {
        return t + s;
      });
      oldAverage = oldSum / lastDeltasOld.length;
      newAverage = newSum / lastDeltasNew.length;
      if (Math.abs(oldAverage) < Math.abs(newAverage * this.tolerance) && (this.sensitivity < Math.abs(newAverage))) {
        return direction;
      } else {
        return false;
      }
    };

    Lethargy.prototype.showLastUpDeltas = function() {
      return this.lastUpDeltas;
    };

    Lethargy.prototype.showLastDownDeltas = function() {
      return this.lastDownDeltas;
    };

    return Lethargy;

  })();

}).call(this);


/***/ })

})
//# sourceMappingURL=6.68745ab3f92ebc8f197a.hot-update.js.map