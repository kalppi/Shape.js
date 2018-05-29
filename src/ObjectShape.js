import ArrayShape from './ArrayShape';
import BasicShape from './BasicShape';
import { _getName } from './index';

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

	matchesRequest(name) {
		name = name || '<anonymous>';

		return (res) => {
			return this.matches(name, res.body);
		}
	}

	matches(a, b) {
		let name, object;

		if(b === undefined) {
			name = '<anonymous>';
			object = a;
		} else {
			name = a;
			object = b;
		}

		if(!Array.isArray(name)) name = [name];

		const handled = [];

		if(typeof object !== 'object' || Array.isArray(object)) {
			throw new Error(`${_getName(newName)} is not an object.`);
		}

		for(let field of this.fieldsArray) {
			const value = object[field.name];
			const newName = [...name, field.name];

			if(value === undefined) {
				throw new Error(`Missing field: ${_getName(newName)}`);
			}

			if(field.shape !== undefined) {
				if(field.shape instanceof BasicShape) {
					field.shape.matches(newName, value);	
				} else if(field.shape instanceof ArrayShape || field.shape instanceof ObjectShape) {
					field.shape.matches(newName, value);
				} else if(typeof field.shape === 'number') {
					const num = parseInt(value, 10);

					if(num !== field.shape) {
						throw new Error(`${_getName(newName)} (${num}) should be ${field.shape}.`);
					}
				} else if(typeof field.shape === 'string') {
					if(value !== field.shape) {
						throw new Error(`${_getName(newName)} (${value}) should be ${field.shape}.`);
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

		return true;
	}
}

export default ObjectShape;