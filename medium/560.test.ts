import { expect, test } from 'bun:test';
import { subarraySum } from './560';

test('Case 1', () => {
	expect(subarraySum([1, 1, 1], 2)).toEqual(2);
});

test('Case 2', () => {
	expect(subarraySum([1, 2, 3], 3)).toEqual(2);
});

test('Case 3', () => {
	expect(subarraySum([1, 2, 3], 4)).toEqual(0);
});

test('Case 4', () => {
	expect(subarraySum([1, 2, 3, -1, 3], 2)).toEqual(3);
});

test('Case 5', () => {
	expect(subarraySum([1, 2, 4, -1, -1, 3], 2)).toEqual(3);
});
