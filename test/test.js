import Shape from '../src/index';

expect.extend(Shape.toBeShaped());

describe('any', () => {
	const anyShape = Shape.any();

	test('matches ints, floats, strings, objects, arrays', () => {
		expect(1).toBeShaped(anyShape);
		expect(1.2).toBeShaped(anyShape);
		expect("abc").toBeShaped(anyShape);
		expect({}).toBeShaped(anyShape);
		expect([]).toBeShaped(anyShape);
	});
});

describe('integer', () => {
	const intShape = Shape.integer();
	
	test('matches integer', () => {
		expect(100).toBeShaped(intShape);
		expect(-100).toBeShaped(intShape);
	});

	test('doesn\'t match strings, floats or objects', () => {
		expect("abc").not.toBeShaped(intShape);
		expect(1.2).not.toBeShaped(intShape);
		expect({}).not.toBeShaped(intShape);
	});

	test('min and max', () => {
		expect(1).not.toBeShaped(intShape.modify({min: 2}));
		expect(3).not.toBeShaped(intShape.modify({max: 2}));
	});
});

describe('object', () => {
	test('matches an empty object', () => {
		expect({}).toBeShaped(Shape.object());
	});

	test('doens\'t match ints, floats, strings or arrays', () => {
		const objShape = Shape.object();

		expect(1).not.toBeShaped(objShape);
		expect(1.2).not.toBeShaped(objShape);
		expect("abc").not.toBeShaped(objShape);
		expect([]).not.toBeShaped(objShape);
	});
});

describe('oneOf', () => {
	const stringOrObject = Shape.oneOf(Shape.string(), Shape.object());
	
	test('matches a string or an object', () => {
		expect("abc").toBeShaped(stringOrObject);
		expect({}).toBeShaped(stringOrObject);
	});

	test('doesn\'t match an integer or an array', () => {
		expect(1).not.toBeShaped(stringOrObject);
		expect([]).not.toBeShaped(stringOrObject);
	});
});