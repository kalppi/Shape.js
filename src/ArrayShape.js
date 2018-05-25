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

	matchesRequest() {
		return (res) => {
			return this.matches(res.body, {});
		}
	}

	matches(object, options) {
		options = options || {};

		if(!Array.isArray(object)) {
			throw new Error(`Expected array.`);
		}

		for(let item of object) {
			this.arrayShape.matches(item);
		}
	}
}

export default ArrayShape;