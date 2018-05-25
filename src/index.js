import ObjectShape from './ObjectShape';
import ArrayShape from './ArrayShape';
import BasicShape from './BasicShape';

export const _getName = (arr) => {
	return arr.join('.').replace('.[', '[');
};


const object = (options) => {
	return new ObjectShape(options);
};

const arrayOf = (shape, options) => {
	return new ArrayShape(shape, options);
};

const integer = (options) => {
	const fn = (field, value, options) => {
		value = String(value);

		if(/^\-?[0-9]+$/.test(value)) {
			const int = parseInt(value, 10);

			if(options.min !== undefined) {
				if(value < options.min) {
					throw Error(`${field} (${value}) is smaller than expected minimum ${options.min}.`);
				}
			}

			if(options.max !== undefined) {
				if(value > options.max) {
					throw Error(`${field} (${value}) is bigger than expected maximum ${options.max}.`);
				}
			}
		} else {
			throw Error(`${field} has wrong shape. Expected integer.`);
		}
	};

	return new BasicShape(fn, options);
};

const regex = (regex, options) => {
	const fn = (name, value, options) => {
		if(!regex.test(value)) {
			throw Error(`${_getName(name)} (${value}) not passing regex ${regex}.`);
		}
	};

	return new BasicShape(fn, options);
};

const array = (options) => {
	const fn = (field, value, options) => {
		if(!Array.isArray(value)) {
			throw Error(`${field} is not an array.`);
		}
	};

	return new BasicShape(fn, options);
};

const any = (options) => {
	const fn = (field, value, options) => {
		
	};

	return new BasicShape(fn, options);
};

const string = (options) => {
	const fn = (field, value, options) => {
		if(typeof value !== 'string') {
			throw Error(`${field} is not a string.`);
		}
	};

	return new BasicShape(fn, options);
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
					shape.matches(name, received);
				} catch (e) {
					return { pass: false, message: () => e.message };
				}

				return { pass: true };
			}
		};
	}

const shapes = { object, arrayOf, integer, regex, array, any, string };

export default Object.assign({ toBeShaped }, shapes);