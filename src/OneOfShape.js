import { _getName } from './index';

class OneOfShape {
	constructor(shapes) {
		this.shapes = shapes;
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

		for(let shape of this.shapes) {
			try {
				shape.matches(name, object);

				return true;
			} catch (e) {

			}
		}

		throw new Error(`${_getName(name)} is not of any required shape.`);
	}
}

export default OneOfShape;