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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._getName = undefined;

var _ObjectShape = __webpack_require__(3);

var _ObjectShape2 = _interopRequireDefault(_ObjectShape);

var _ArrayShape = __webpack_require__(1);

var _ArrayShape2 = _interopRequireDefault(_ArrayShape);

var _BasicShape = __webpack_require__(2);

var _BasicShape2 = _interopRequireDefault(_BasicShape);

var _OneOfShape = __webpack_require__(4);

var _OneOfShape2 = _interopRequireDefault(_OneOfShape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _getName = exports._getName = function _getName(arr) {
	return arr.join('.').replace('.[', '[');
};

var toBeShaped = function toBeShaped() {
	return {
		toBeShaped: function toBeShaped(received, a, b) {
			var name = void 0,
			    shape = void 0;

			if (b === undefined) {
				name = '<anonymous>';
				shape = a;
			} else {
				name = a;
				shape = b;
			}

			try {
				var pass = shape.matches([name], received);

				if (pass === true) {
					return { pass: true };
				} else {
					return { pass: false };
				}
			} catch (e) {
				return { pass: false, message: function message() {
						return e.message;
					} };
			}
		}
	};
};

var object = function object(options) {
	return new _ObjectShape2.default(options);
};

var arrayOf = function arrayOf(shape, options) {
	return new _ArrayShape2.default(shape, options);
};

var oneOf = function oneOf() {
	for (var _len = arguments.length, shapes = Array(_len), _key = 0; _key < _len; _key++) {
		shapes[_key] = arguments[_key];
	}

	return new _OneOfShape2.default(shapes);
};

var integer = function integer(options) {
	var fn = function fn(name, value, options) {
		value = String(value);

		if (/^\-?[0-9]+$/.test(value)) {
			var int = parseInt(value, 10);

			if (options.min !== undefined) {
				if (value < options.min) {
					throw Error(_getName(name) + ' (' + value + ') is smaller than expected minimum ' + options.min + '.');
				}
			}

			if (options.max !== undefined) {
				if (value > options.max) {
					throw Error(_getName(name) + ' (' + value + ') is bigger than expected maximum ' + options.max + '.');
				}
			}
		} else {
			throw Error(_getName(name) + ' has wrong shape. Expected integer.');
		}

		return true;
	};

	return new _BasicShape2.default(fn, options);
};

var regex = function regex(_regex, options) {
	var fn = function fn(name, value, options) {
		if (!_regex.test(value)) {
			throw Error(_getName(name) + ' (' + value + ') not passing regex ' + _regex + '.');
		}

		return true;
	};

	return new _BasicShape2.default(fn, options);
};

var string = function string(options) {
	var fn = function fn(name, value, options) {
		if (typeof value !== 'string') {
			throw Error(_getName(name) + ' is not a string.');
		}

		return true;
	};

	return new _BasicShape2.default(fn, options);
};

var array = function array(options) {
	var fn = function fn(name, value, options) {
		if (!Array.isArray(value)) {
			throw Error(_getName(name) + ' is not an array.');
		}

		return true;
	};

	return new _BasicShape2.default(fn, options);
};

var any = function any(options) {
	var fn = function fn(field, value, options) {
		return true;
	};

	return new _BasicShape2.default(fn, options);
};

var shapes = { object: object, arrayOf: arrayOf, integer: integer, regex: regex, string: string, array: array, any: any, oneOf: oneOf };

exports.default = Object.assign({ toBeShaped: toBeShaped }, shapes);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ObjectShape = __webpack_require__(3);

var _ObjectShape2 = _interopRequireDefault(_ObjectShape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArrayShape = function () {
	function ArrayShape(arrayShape, options) {
		_classCallCheck(this, ArrayShape);

		this.arrayShape = new _ObjectShape2.default(options);
		this.options = options || {};

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = arrayShape.fieldsArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var field = _step.value;

				this.arrayShape.field(field.name, field.shape);
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	}

	_createClass(ArrayShape, [{
		key: 'omit',
		value: function omit(name) {
			this.arrayShape.omit(name);

			return this;
		}
	}, {
		key: 'field',
		value: function field(name, shape) {
			this.arrayShape.omit(name);
			this.arrayShape.field(name, shape);

			return this;
		}
	}, {
		key: 'matchesRequest',
		value: function matchesRequest(name) {
			var _this = this;

			name = name || '<anonymous>';

			return function (res) {
				return _this.matches(name, res.body);
			};
		}
	}, {
		key: 'matches',
		value: function matches(a, b) {
			var name = void 0,
			    object = void 0;

			if (b === undefined) {
				name = '<anonymous>';
				object = a;
			} else {
				name = a;
				object = b;
			}

			if (!Array.isArray(name)) name = [name];

			if (!Array.isArray(object)) {
				throw new Error('Expected array.');
			}

			for (var i = 0; i < object.length; i++) {
				this.arrayShape.matches([].concat(_toConsumableArray(name), ['[' + i + ']']), object[i]);
			}

			return true;
		}
	}]);

	return ArrayShape;
}();

exports.default = ArrayShape;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BasicShape = function () {
	function BasicShape(fn, options) {
		_classCallCheck(this, BasicShape);

		this.fn = fn;
		this.options = options || {};
	}

	_createClass(BasicShape, [{
		key: 'modify',
		value: function modify(options) {
			return new BasicShape(this.fn, Object.assign(this.options, options));
		}
	}, {
		key: 'matches',
		value: function matches(a, b) {
			if (b === undefined) {
				return this.fn(['<anonymous>'], a, this.options);
			} else {
				return this.fn(a, b, this.options);
			}
		}
	}]);

	return BasicShape;
}();

exports.default = BasicShape;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ArrayShape = __webpack_require__(1);

var _ArrayShape2 = _interopRequireDefault(_ArrayShape);

var _BasicShape = __webpack_require__(2);

var _BasicShape2 = _interopRequireDefault(_BasicShape);

var _index = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ObjectShape = function () {
	function ObjectShape(options) {
		_classCallCheck(this, ObjectShape);

		this.fieldsArray = [];
		this.options = options || {};
	}

	_createClass(ObjectShape, [{
		key: 'field',
		value: function field(name, shape) {
			this.fieldsArray.push({
				name: name,
				shape: shape
			});

			return this;
		}
	}, {
		key: 'fields',
		value: function fields(_fields) {
			for (var field in _fields) {
				this.field(field, _fields[field]);
			}

			return this;
		}
	}, {
		key: 'clone',
		value: function clone() {
			var shape = new ObjectShape(this.options);

			shape.fieldsArray = [].concat(_toConsumableArray(this.fieldsArray));

			return shape;
		}
	}, {
		key: 'omit',
		value: function omit(name) {
			this.fieldsArray = this.fieldsArray.filter(function (f) {
				return f.name !== name;
			});

			return this;
		}
	}, {
		key: 'only',
		value: function only(name) {
			this.fieldsArray = this.fieldsArray.filter(function (f) {
				return f.name === name;
			});

			return this;
		}
	}, {
		key: 'matchesRequest',
		value: function matchesRequest(name) {
			var _this = this;

			name = name || '<anonymous>';

			return function (res) {
				return _this.matches(name, res.body);
			};
		}
	}, {
		key: 'matches',
		value: function matches(a, b) {
			var name = void 0,
			    object = void 0;

			if (b === undefined) {
				name = '<anonymous>';
				object = a;
			} else {
				name = a;
				object = b;
			}

			if (!Array.isArray(name)) name = [name];

			var handled = [];

			if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object' || Array.isArray(object)) {
				throw new Error((0, _index._getName)(newName) + ' is not an object.');
			}

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this.fieldsArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var field = _step.value;

					var value = object[field.name];
					var _newName = [].concat(_toConsumableArray(name), [field.name]);

					if (value === undefined) {
						throw new Error('Missing field: ' + (0, _index._getName)(_newName));
					}

					if (field.shape !== undefined) {
						if (field.shape instanceof _BasicShape2.default) {
							field.shape.matches(_newName, value);
						} else if (field.shape instanceof _ArrayShape2.default || field.shape instanceof ObjectShape) {
							field.shape.matches(_newName, value);
						} else if (typeof field.shape === 'number') {
							var num = parseInt(value, 10);

							if (num !== field.shape) {
								throw new Error((0, _index._getName)(_newName) + ' (' + num + ') should be ' + field.shape + '.');
							}
						} else if (typeof field.shape === 'string') {
							if (value !== field.shape) {
								throw new Error((0, _index._getName)(_newName) + ' (' + value + ') should be ' + field.shape + '.');
							}
						}
					}

					handled.push(field.name);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			var unknown = [];
			var keys = Object.keys(object);

			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = keys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var key = _step2.value;

					if (!handled.includes(key)) {
						unknown.push(key);
					}
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}

			if (unknown.length > 0) {
				var _keys = unknown.join(', ');
				var msg = 'Unknown key' + (unknown.length > 1 ? 's' : '') + ' \'' + _keys + '\'';

				if (this.options.errorUnknowns) {
					throw new Error(msg);
				} else {
					console.warn(msg);
				}
			}

			return true;
		}
	}]);

	return ObjectShape;
}();

exports.default = ObjectShape;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OneOfShape = function () {
	function OneOfShape(shapes) {
		_classCallCheck(this, OneOfShape);

		this.shapes = shapes;
	}

	_createClass(OneOfShape, [{
		key: 'matches',
		value: function matches(a, b) {
			var name = void 0,
			    object = void 0;

			if (b === undefined) {
				name = '<anonymous>';
				object = a;
			} else {
				name = a;
				object = b;
			}

			if (!Array.isArray(name)) name = [name];

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this.shapes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var shape = _step.value;

					try {
						shape.matches(name, object);

						return true;
					} catch (e) {}
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			throw new Error((0, _index._getName)(name) + ' is not of any required shape.');
		}
	}]);

	return OneOfShape;
}();

exports.default = OneOfShape;

/***/ })
/******/ ]);