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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ToyReact.js":
/*!*********************!*\
  !*** ./ToyReact.js ***!
  \*********************/
/*! exports provided: Component, ToyReact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToyReact", function() { return ToyReact; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var childrenSymbol = Symbol("children");

var ElementWrapper = /*#__PURE__*/function () {
  function ElementWrapper(type) {
    _classCallCheck(this, ElementWrapper);

    this.type = type;
    this.props = Object.create(null);
    this[childrenSymbol] = [];
    this.children = [];
  }

  _createClass(ElementWrapper, [{
    key: "setAttribute",
    value: function setAttribute(name, value) {
      // 处理点击事件
      //   if(name.match(/^on([\s\S]+)$/)) {
      //     const eventName = RegExp.$1.replace(/^[\s\S]/, s => s.toLowerCase());
      //     this.root.addEventListener(eventName, value)
      //   }
      //   if(name === 'className') {
      //       name = 'class';
      //   }
      //    this.root.setAttribute(name, value);
      this.props[name] = value;
    } //    get children() {
    //       return this[childrenSymbol].map(child => child.vdom)
    //    }

  }, {
    key: "appendChild",
    value: function appendChild(vchild) {
      // let range = document.createRange();
      // if(this.root.children.length) {
      //     range.setStartAfter(this.root.lastChild)
      //     range.setEndAfter(this.root.lastChild)
      // }else {
      //     range.setStart(this.root, 0)
      //     range.setEnd(this.root, 0)
      // }
      // vchild.mountTo(range)
      this[childrenSymbol].push(vchild);
      this.children.push(vchild.vdom);
    }
  }, {
    key: "mountTo",
    value: function mountTo(range) {
      this.range = range;
      var placeholder = document.createComment('placeholder');
      var endange = document.createRange();
      endange.setStart(this.range.endContainer, this.range.endOffset);
      endange.setEnd(this.range.endContainer, this.range.endOffset);
      endange.insertNode(placeholder);
      this.range.deleteContents();
      range.deleteContents();
      var element = document.createElement(this.type);

      for (var name in this.props) {
        var value = this.props[name];

        if (name.match(/^on([\s\S]+)$/)) {
          var eventName = RegExp.$1.replace(/^[\s\S]/, function (s) {
            return s.toLowerCase();
          });
          element.addEventListener(eventName, value);
        }

        if (name === 'className') {
          name = 'class';
        }

        element.setAttribute(name, value);
      }

      var _iterator = _createForOfIteratorHelper(this.children),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;

          var _range = document.createRange();

          if (element.children.length) {
            _range.setStartAfter(element.lastChild);

            _range.setEndAfter(element.lastChild);
          } else {
            _range.setStart(element, 0);

            _range.setEnd(element, 0);
          }

          child.mountTo(_range);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      range.insertNode(element);
    }
  }, {
    key: "vdom",
    get: function get() {
      return this;
    }
  }]);

  return ElementWrapper;
}();

var TextWrapper = /*#__PURE__*/function () {
  function TextWrapper(content) {
    _classCallCheck(this, TextWrapper);

    this.root = document.createTextNode(content);
    this.type = '#text';
    this.children = [];
    this.props = Object.create(null);
  }

  _createClass(TextWrapper, [{
    key: "mountTo",
    value: function mountTo(range) {
      this.range = range;
      range.deleteContents();
      range.insertNode(this.root);
    }
  }, {
    key: "vdom",
    get: function get() {
      return this;
    }
  }]);

  return TextWrapper;
}();

var Component = /*#__PURE__*/function () {
  function Component() {
    _classCallCheck(this, Component);

    this.children = [];
    this.props = Object.create(null);
  }

  _createClass(Component, [{
    key: "setAttribute",
    value: function setAttribute(name, value) {
      if (name.match(/^on([\s\S]+)$/)) {
        console.log(RegExp.$1);
      }

      this[name] = value;
      this.props[name] = value;
    }
  }, {
    key: "mountTo",
    value: function mountTo(range) {
      this.range = range;
      this.update();
    }
  }, {
    key: "update",
    value: function update() {
      // let placeholder = document.createComment('placeholder');
      // let range = document.createRange();
      // range.setStart(this.range.endContainer, this.range.endOffset);
      // range.setEnd(this.range.endContainer, this.range.endOffset);
      // range.insertNode(placeholder);
      // this.range.deleteContents();
      // let vdom = this.render();
      var vdom = this.vdom;

      if (this.oldVdom) {
        var isSameNode = function isSameNode(node1, node2) {
          if (node1.type !== node2.type) {
            return false;
          }

          for (var name in node1.props) {
            // if(typeof node1.props[name] === 'function' && typeof node2.props[name] === 'function'
            // && node1.props[name].toString() === node2.props[name].toString()) {
            //     continue;
            // }
            if (_typeof(node1.props[name]) === 'object' && _typeof(node2.props[name]) === 'object' && JSON.stringify(node1.props[name]) === JSON.stringify(node2.props[name].toString())) {
              continue;
            }

            if (node1.props[name] !== node2.props[name]) {
              return false;
            }
          }

          if (Object.keys(node1.props).length !== Object.keys(node2.props).length) {
            // 属性长度不想等
            return false;
          }

          return true;
        };

        var isSameTree = function isSameTree(node1, node2) {
          if (!isSameNode(node1, node2)) {
            return false;
          }

          if (node1.children.length !== node2.children.length) {
            return false;
          }

          for (var i = 0; i < node1.children.length; i++) {
            if (!isSameTree(node1.children[i], node2.children[i])) {
              return false;
            }
          }

          return true;
        };

        var replace = function replace(newTree, oldTree) {
          if (isSameNode(newTree, oldTree)) {
            return;
          }

          if (!isSameNode(ewTree, oldTree)) {
            newTree.mountTo(oldTree.range);
          } else {
            for (var i = 0; i < newTree.children.length; i++) {
              replace(newTree.children[i], oldTree.children[i]);
            }
          }
        }; // console.log('new', vdom)
        // console.log('old', this.vdom)


        replace(vdom, this.oldVdom); // if(isSameTree(vdom, this.vdom)) {
        //     return;
        // }
        // if(!isSameNode(vdom, this.vdom)) {// 如果根结点不相同,直接替换
        //     vdom.mountTo(this.range);
        // }else {
        // }
      } else {
        vdom.mountTo(this.range);
      }

      this.oldVdom = vdom;
    }
  }, {
    key: "appendChild",
    value: function appendChild(vchild) {
      this.children.push(vchild);
    }
  }, {
    key: "setState",
    value: function setState(state) {
      var merge = function merge(oldState, newState) {
        for (var p in newState) {
          if (_typeof(newState[p]) === 'object' && newState[p] !== null) {
            if (_typeof(oldState[p]) !== 'object') {
              if (newState[p] instanceof Array) {
                oldState[p] = [];
              } else {
                oldState[p] = {};
              }
            }

            merge(oldState[p], newState[p]);
          } else {
            oldState[p] = newState[p];
          }
        }
      };

      if (!this.state && state) {
        this.state = {};
      }

      merge(this.state, state);
      this.update();
      console.log(this.state);
    }
  }, {
    key: "type",
    get: function get() {
      return this.constructor.name;
    }
  }, {
    key: "vdom",
    get: function get() {
      return this.render().vdom;
    }
  }]);

  return Component;
}();
var ToyReact = {
  createElement: function createElement(type, attributes) {
    var element;

    if (typeof type === 'string') {
      element = new ElementWrapper(type);
    } else {
      element = new type();
    }

    for (var name in attributes) {
      element.setAttribute(name, attributes[name]);
    }

    var insertChildren = function insertChildren(children) {
      var _iterator2 = _createForOfIteratorHelper(children),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var child = _step2.value;

          if (_typeof(child) === 'object' && child instanceof Array) {
            insertChildren(child);
          } else {
            if (child === null || child === void 0) child = '';

            if (!(child instanceof Component) && !(child instanceof ElementWrapper) && !(child instanceof TextWrapper)) {
              child = String(child);
            }

            if (typeof child === 'string') {
              child = new TextWrapper(child);
            }

            element.appendChild(child);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    };

    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }

    insertChildren(children);
    return element;
  },
  render: function render(vdom, element) {
    var range = document.createRange();

    if (element.children.length) {
      range.setStartAfter(element.lastChild);
      range.setEndAfter(element.lastChild);
    } else {
      range.setStart(element, 0);
      range.setEnd(element, 0);
    }

    vdom.mountTo(range);
  }
};

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToyReact.js */ "./ToyReact.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Square = /*#__PURE__*/function (_Component) {
  _inherits(Square, _Component);

  var _super = _createSuper(Square);

  function Square() {
    _classCallCheck(this, Square);

    return _super.apply(this, arguments);
  }

  _createClass(Square, [{
    key: "render",
    value: function render() {
      return _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("button", {
        className: "square",
        onClick: this.props.onClick
      }, this.props.value);
    }
  }]);

  return Square;
}(_ToyReact_js__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var Board = /*#__PURE__*/function (_Component2) {
  _inherits(Board, _Component2);

  var _super2 = _createSuper(Board);

  function Board() {
    _classCallCheck(this, Board);

    return _super2.apply(this, arguments);
  }

  _createClass(Board, [{
    key: "renderSquare",
    value: function renderSquare(i) {
      var _this = this;

      return _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement(Square, {
        value: this.props.squares[i],
        onClick: function onClick() {
          return _this.props.onClick(i);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("div", null, _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("div", {
        className: "board-row"
      }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("div", {
        className: "board-row"
      }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("div", {
        className: "board-row"
      }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)));
    }
  }]);

  return Board;
}(_ToyReact_js__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var Game = /*#__PURE__*/function (_Component3) {
  _inherits(Game, _Component3);

  var _super3 = _createSuper(Game);

  function Game(props) {
    var _this2;

    _classCallCheck(this, Game);

    _this2 = _super3.call(this, props);
    _this2.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    };
    return _this2;
  }

  _createClass(Game, [{
    key: "handleClick",
    value: function handleClick(i) {
      var history = this.state.history.slice(0, this.state.stepNumber + 1);
      var current = history[history.length - 1];
      var squares = current.squares.slice();

      if (calculateWinner(squares) || squares[i]) {
        return;
      }

      squares[i] = this.state.xIsNext ? "X" : "O";
      this.setState({
        history: history.concat([{
          squares: squares
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      });
    }
  }, {
    key: "jumpTo",
    value: function jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: step % 2 === 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var history = this.state.history;
      var current = history[this.state.stepNumber];
      var winner = calculateWinner(current.squares); //   const moves = history.map((step, move) => {
      //     const desc = move ?
      //       'Go to move #' + move :
      //       'Go to game start';
      //     return (
      //       <li key={move}>
      //         <button onClick={() => this.jumpTo(move)}>{desc}</button>
      //       </li>
      //     );
      //   });

      var status;

      if (winner) {
        status = "Winner: " + winner;
      } else {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      }

      return _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("div", {
        className: "game"
      }, _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement("div", {
        className: "game-board"
      }, _ToyReact_js__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement(Board, {
        squares: current.squares,
        onClick: function onClick(i) {
          return _this3.handleClick(i);
        }
      })));
    }
  }]);

  return Game;
}(_ToyReact_js__WEBPACK_IMPORTED_MODULE_0__["Component"]); // ========================================


_ToyReact_js__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].render(_ToyReact_js__WEBPACK_IMPORTED_MODULE_0__["ToyReact"].createElement(Game, null), document.body); //   let game = <Game />;
//   console.log(game.vdom)

function calculateWinner(squares) {
  var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  for (var i = 0; i < lines.length; i++) {
    var _lines$i = _slicedToArray(lines[i], 3),
        a = _lines$i[0],
        b = _lines$i[1],
        c = _lines$i[2];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
} // ToyReact.render(a, document.body)

/***/ })

/******/ });
//# sourceMappingURL=main.js.map