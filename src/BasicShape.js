
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
<<<<<<< Updated upstream
			return this.fn(['<anonymous>'], a, this.options);
		} else {
			return this.fn(a, b, this.options);
=======
			this.fn('<anonymous>', a, this.options);
		} else {
			this.fn(a, b, this.options);
>>>>>>> Stashed changes
		}
	}
}

export default BasicShape;