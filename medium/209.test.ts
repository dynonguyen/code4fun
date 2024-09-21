import { expect, test } from 'bun:test';
import { minSubArrayLen } from './209';

test('Case 1', () => {
	expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toEqual(2);
});

test('Case 2', () => {
	expect(minSubArrayLen(4, [1, 4, 4])).toEqual(1);
});

test('Case 3', () => {
	expect(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])).toEqual(0);
});

test('Case 4', () => {
	expect(minSubArrayLen(11, [1, 2, 3, 4, 5])).toEqual(3);
});
