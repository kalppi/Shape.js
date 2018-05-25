import ObjectShape from './ObjectShape';
import ArrayShape from './ArrayShape';

export default {
	object: (options) => {
		return new ObjectShape(options);
	},

	arrayOf: (shape, options) => {
		return new ArrayShape(shape, options);
	},

	integer: (options) => {
		options = options || {};
		
		return (field, s) => {
			s = String(s);

			if(/^\-?[0-9]+$/.test(s)) {
				const int = parseInt(s, 10);

				if(options.min !== undefined) {
					if(s < options.min) {
						throw Error(`Field '${field.name}' (${s}) is smaller than expected minimum ${options.min}.`);
					}
				}

				if(options.max !== undefined) {
					if(s > options.max) {
						throw Error(`Field '${field.name}' (${s}) is bigger than expected maximum ${options.max}.`);
					}
				}
			} else {
				throw Error(`Field '${field.name}' has wrong shape. Expected integer.`);
			}
		}
	},

	regex: (regex) => {
		return (field, s) => {
			if(!regex.test(s)) {
				throw Error(`Field '${field.name}' (${s}) not passing regex ${regex}.`);
			}
		}
	},

	array: () => {
		return (field, s) => {
			if(!Array.isArray(s)) {
				throw Error(`Field '${field.name}' is not an array.`);
			}
		}
	},

	any: () => {
		return (field, s) => {
			
		}
	},

	string: (options) => {
		return (field, s) => {
			if(typeof s !== 'string') {
				throw Error(`Field '${field.name}' is not a string.`);
			}
		}
	},

	toBeShaped: () => {
		return {
			toBeShaped: (received, shape) => {
				try {
					shape.matches(received);
				} catch (e) {
					return { pass: false, message: () => e.message };
				}

				return { pass: true };
			}
		};
	}
}