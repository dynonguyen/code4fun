import { expect, test } from 'bun:test';

export function generateTests<T extends (...args: any) => any>(
	fn: T,
	testCases: Array<{ i: Parameters<T>; o: ReturnType<T> }>,
	opt: { only?: number } = {},
) {
	const { only } = opt;

	if (only !== undefined) {
		test(`Case ${only}`, () => {
			expect(fn(...testCases[only - 1].i), `Case ${only}`).toEqual(testCases[only - 1].o);
		});
		return;
	}

	testCases.forEach((tc, index) => {
		test(`Case ${index + 1}`, () => {
			expect(fn(...tc.i), `Case ${index + 1}`).toEqual(tc.o);
		});
	});
}
