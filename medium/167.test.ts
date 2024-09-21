import { expect, test } from 'bun:test';
import { twoSum } from './167';

test('Case 1', () => {
	expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
});

test('Case 2', () => {
	expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
});

test('Case 3', () => {
	expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
});
