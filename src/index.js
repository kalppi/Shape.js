import ObjectShape from './ObjectShape';
import ArrayShape from './ArrayShape';
import BasicShape from './BasicShape';
import OneOfShape from './OneOfShape';

export const _getName = (arr) => {
	return arr.join('.').replace('.[', '[');
};

const toBeShaped = () => {
	return {
		toBeShaped: (received, a, b) => {
			let name, shape;

			if(b === undefined) {
				name = '<anonymous>';
				shape = a;
			} else {
				name = a;
				shape = b;
			}

			try {
				const pass = shape.matches([name], received);

				if(pass === true) {
					return { pass: true };
				} else {
					return { pass: false };
				}
			} catch (e) {
				return { pass: false, message: () => e.message };
			}
		}
	};
};

const object = (options) => {
	return new ObjectShape(options);
};

const arrayOf = (shape, options) => {
	return new ArrayShape(shape, options);
};

const oneOf = (...shapes) => {
	return new OneOfShape(shapes);
};

const integer = (options) => {
	const fn = (name, value, options) => {
		value = String(value);

		if(/^\-?[0-9]+$/.test(value)) {
			const int = parseInt(value, 10);

			if(options.min !== undefined) {
				if(value < options.min) {
					throw Error(`${_getName(name)} (${value}) is smaller than expected minimum ${options.min}.`);
				}
			}

			if(options.max !== undefined) {
				if(value > options.max) {
					throw Error(`${_getName(name)} (${value}) is bigger than expected maximum ${options.max}.`);
				}
			}
		} else {
			throw Error(`${_getName(name)} has wrong shape. Expected integer.`);
		}

		return true;
	};

	return new BasicShape(fn, options);
};

const regex = (regex, options) => {
	const fn = (name, value, options) => {
		if(!regex.test(value)) {
			throw Error(`${_getName(name)} (${value}) not passing regex ${regex}.`);
		}

		return true;
	};

	return new BasicShape(fn, options);
};

const string = (options) => {
	const fn = (name, value, options) => {
		if(typeof value !== 'string') {
			throw Error(`${_getName(name)} is not a string.`);
		}

		return true;
	};

	return new BasicShape(fn, options);
};

const array = (options) => {
	const fn = (name, value, options) => {
		if(!Array.isArray(value)) {
			throw Error(`${_getName(name)} is not an array.`);
		}

		return true;
	};

	return new BasicShape(fn, options);
};

const any = (options) => {
	const fn = (field, value, options) => {
		return true;
	};

	return new BasicShape(fn, options);
};

const shapes = { object, arrayOf, integer, regex, string, array, any, oneOf };

export default Object.assign({ toBeShaped }, shapes);