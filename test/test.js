import Shape from '../src/index';

expect.extend(Shape.toBeShaped());

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