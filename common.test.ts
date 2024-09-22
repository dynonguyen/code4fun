import { expect, test } from 'bun:test';

export function generateTests<T extends (...args: any) => any>(
	fn: T,
	testCases: Array<{ i: Parameters<T>; o: ReturnType<T> }>,
) {
	testCases.forEach((tc, index) => {
		test(`Case ${index + 1}`, () => {
			expect(fn(...tc.i), `Case ${index + 1}: ${tc.i.join(' - ')}`).toEqual(tc.o);
		});
	});
}
