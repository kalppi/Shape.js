import ArrayShape from './ArrayShape';

class ObjectShape {
	constructor(options) {
		this.fieldsArray = [];
		this.options = options || {};
	}

	field(name, shape) {
		this.fieldsArray.push({
			name,
			shape
		});

		return this;
	}

	fields(fields) {
		for(let field in fields) {
			this.field(field, fields[field]);
		}

		return this;
	}

	clone() {
		const shape = new ObjectShape(this.options);

		shape.fieldsArray = [...this.fieldsArray];

		return shape;
	}


	omit(name) {
		this.fieldsArray = this.fieldsArray.filter(f => f.name !== name);

		return this;
	}

	only(name) {
		this.fieldsArray = this.fieldsArray.filter(f => f.name === name);

		return this;
	}

	matchesRequest() {
		return (res) => {
			return this.matches(res.body, {});
		}
	}

	matches(object, options) {
		options = options || {};

		const handled = [];

		for(let field of this.fieldsArray) {
			const value = object[field.name];

			if(value === undefined) {
				throw new Error(`Missing field: ${field.name}`);
			}

			if(field.shape !== undefined) {
				if(typeof field.shape === 'function') {
					field.shape(field, value);
				} else if(field.shape instanceof ArrayShape || field.shape instanceof ObjectShape) {
					field.shape.matches(value);
				} else if(typeof field.shape === 'number') {
					const num = parseInt(value, 10);

					if(num !== field.shape) {
						throw new Error(`Field '${field.name}' (${num}) should be ${field.shape}.`);
					}
				} else if(typeof field.shape === 'string') {
					if(value !== field.shape) {
						throw new Error(`Field '${field.name}' (${value}) should be ${field.shape}.`);
					}
				}
			}

			handled.push(field.name);
		}

		const unknown = [];
		const keys = Object.keys(object);

		for(let key of keys) {
			if(!handled.includes(key)) {
				unknown.push(key);
			}
		}

		if(unknown.length > 0) {
			const keys = unknown.join(', ');
			const msg = `Unknown key${unknown.length > 1 ? 's' : ''} '${keys}'`;

			if(this.options.errorUnknowns) {
				throw new Error(msg);
			} else {
				console.warn(msg);
			}
		}
	}
}

export default ObjectShape;