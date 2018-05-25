import ObjectShape from './ObjectShape';

class ArrayShape {
	constructor(arrayShape, options) {
		this.arrayShape = new ObjectShape(options);
		this.options = options || {};

		for(let field of arrayShape.fieldsArray) {
			this.arrayShape.field(field.name, field.shape);
		}
	}

	omit(name) {
		this.arrayShape.omit(name);

		return this;
	}

	field(name, shape) {
		this.arrayShape.omit(name);
		this.arrayShape.field(name, shape);

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

		if(!Array.isArray(object)) {
			throw new Error(`Expected array.`);
		}

		for(let i = 0; i < object.length; i++) {
			this.arrayShape.matches([...name, `[${i}]`], object[i]);
		}
	}
}

export default ArrayShape;