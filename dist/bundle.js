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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ObjectShape = __webpack_require__(1);

var _ObjectShape2 = _interopRequireDefault(_ObjectShape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
		value: function matchesRequest() {
			var _this = this;

			return function (res) {
				return _this.matches(res.body, {});
			};
		}
	}, {
		key: 'matches',
		value: function matches(object, options) {
			options = options || {};

			if (!Array.isArray(object)) {
				throw new Error('Expected array.');
			}

			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = object[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var item = _step2.value;

					this.arrayShape.matches(item);
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
		}
	}]);

	return ArrayShape;
}();

exports.default = ArrayShape;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ArrayShape = __webpack_require__(0);

var _ArrayShape2 = _interopRequireDefault(_ArrayShape);

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
		value: function matchesRequest() {
			var _this = this;

			return function (res) {
				return _this.matches(res.body, {});
			};
		}
	}, {
		key: 'matches',
		value: function matches(object, options) {
			options = options || {};

			var handled = [];

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this.fieldsArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var field = _step.value;

					var value = object[field.name];

					if (value === undefined) {
						throw new Error('Missing field: ' + field.name);
					}

					if (field.shape !== undefined) {
						if (typeof field.shape === 'function') {
							field.shape(field, value);
						} else if (field.shape instanceof _ArrayShape2.default || field.shape instanceof ObjectShape) {
							field.shape.matches(value);
						} else if (typeof field.shape === 'number') {
							var num = parseInt(value, 10);

							if (num !== field.shape) {
								throw new Error('Field \'' + field.name + '\' (' + num + ') should be ' + field.shape + '.');
							}
						} else if (typeof field.shape === 'string') {
							if (value !== field.shape) {
								throw new Error('Field \'' + field.name + '\' (' + value + ') should be ' + field.shape + '.');
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
		}
	}]);

	return ObjectShape;
}();

exports.default = ObjectShape;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ObjectShape = __webpack_require__(1);

var _ObjectShape2 = _interopRequireDefault(_ObjectShape);

var _ArrayShape = __webpack_require__(0);

var _ArrayShape2 = _interopRequireDefault(_ArrayShape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	object: function object(options) {
		return new _ObjectShape2.default(options);
	},

	arrayOf: function arrayOf(shape, options) {
		return new _ArrayShape2.default(shape, options);
	},

	integer: function integer(options) {
		options = options || {};

		return function (field, s) {
			s = String(s);

			if (/^\-?[0-9]+$/.test(s)) {
				var int = parseInt(s, 10);

				if (options.min !== undefined) {
					if (s < options.min) {
						throw Error('Field \'' + field.name + '\' (' + s + ') is smaller than expected minimum ' + options.min + '.');
					}
				}

				if (options.max !== undefined) {
					if (s > options.max) {
						throw Error('Field \'' + field.name + '\' (' + s + ') is bigger than expected maximum ' + options.max + '.');
					}
				}
			} else {
				throw Error('Field \'' + field.name + '\' has wrong shape. Expected integer.');
			}
		};
	},

	regex: function regex(_regex) {
		return function (field, s) {
			if (!_regex.test(s)) {
				throw Error('Field \'' + field.name + '\' (' + s + ') not passing regex ' + _regex + '.');
			}
		};
	},

	array: function array() {
		return function (field, s) {
			if (!Array.isArray(s)) {
				throw Error('Field \'' + field.name + '\' is not an array.');
			}
		};
	},

	any: function any() {
		return function (field, s) {};
	},

	string: function string(options) {
		return function (field, s) {
			if (typeof s !== 'string') {
				throw Error('Field \'' + field.name + '\' is not a string.');
			}
		};
	},

	toBeShaped: function toBeShaped() {
		return {
			toBeShaped: function toBeShaped(received, shape) {
				try {
					shape.matches(received);
				} catch (e) {
					return { pass: false, message: function message() {
							return e.message;
						} };
				}

				return { pass: true };
			}
		};
	}
};

/***/ })
/******/ ]);