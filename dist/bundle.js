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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shape = function () {
	function Shape(type, options) {
		_classCallCheck(this, Shape);

		this.type = type;
		this.fields = [];
		this.omitFields = [];
		this.options = options || {};
	}

	_createClass(Shape, [{
		key: 'field',
		value: function field(name, shape) {
			this.fields.push({
				shape: shape,
				name: name
			});

			return this;
		}
	}, {
		key: 'omit',
		value: function omit(name) {
			this.omitFields.push(name);

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

			switch (this.type.type) {
				case 'arrayOf':
					if (!Array.isArray(object)) {
						throw new Error('Expected array.');
					}

					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = object[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var item = _step.value;

							var err = this.type.shape.matches(item, { omit: this.omitFields });

							if (err) throw err;
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

					break;
				case 'object':
					var handled = [];

					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = this.fields[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var field = _step2.value;

							if (options.omit && options.omit.includes(field.name)) continue;

							var value = object[field.name];

							if (value === undefined) {
								throw new Error('Missing field: ' + field.name);
							}

							if (field.shape !== undefined) {
								var _err = field.shape(field, value);

								if (_err) throw _err;
							}

							handled.push(field.name);
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

					if (this.options.errorUnknowns) {
						var keys = Object.keys(object);

						var _iteratorNormalCompletion3 = true;
						var _didIteratorError3 = false;
						var _iteratorError3 = undefined;

						try {
							for (var _iterator3 = keys[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
								var key = _step3.value;

								if (!handled.includes(key)) {
									throw new Error('Unknown key \'' + key + '\'');
								}
							}
						} catch (err) {
							_didIteratorError3 = true;
							_iteratorError3 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion3 && _iterator3.return) {
									_iterator3.return();
								}
							} finally {
								if (_didIteratorError3) {
									throw _iteratorError3;
								}
							}
						}
					}

					break;
			}
		}
	}]);

	return Shape;
}();

exports.default = {
	object: function object(options) {
		return new Shape({ type: 'object' }, options);
	},

	arrayOf: function arrayOf(shape, options) {
		return new Shape({ type: 'arrayOf', shape: shape }, options);
	},

	integer: function integer(options) {
		return function (field, s) {
			s = String(s);

			if (/^\-?[0-9]+$/.test(s)) {
				var int = parseInt(s, 10);

				if (options.min !== undefined) {
					if (s < options.min) {
						return new Error('Field \'' + field.name + '\' (' + s + ') is smaller than expected minimum ' + options.min + '.');
					}
				}

				if (options.max !== undefined) {
					if (s > options.max) {
						return new Error('Field \'' + field.name + '\' (' + s + ') is bigger than expected maximum ' + options.max + '.');
					}
				}
			} else {
				return new Error('Field \'' + field.name + '\' has wrong shape. Expected integer.');
			}
		};
	},

	regex: function regex(_regex) {
		return function (field, s) {
			if (!_regex.test(s)) {
				return new Error('Field \'' + field.name + '\' (' + s + ') not passing regex ' + _regex + '.');
			}
		};
	},

	array: function array() {
		return function (field, s) {
			if (!Array.isArray(s)) {
				return new Error('Field \'' + field.name + '\' is not an array.');
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