
class BasicShape {
	constructor(fn, options) {
		this.fn = fn;
		this.options = options || {};
	}

	modify(options) {
		return new BasicShape(this.fn, Object.assign(this.options, options));
	}

	matches(a, b) {
		if(b === undefined) {
			return this.fn(['<anonymous>'], a, this.options);
		} else {
			return this.fn(a, b, this.options);
		}
	}
}

export default BasicShape;