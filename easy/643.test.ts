import { expect, test } from 'bun:test';
import { findMaxAverage } from './643';

test('Case 1', () => {
	expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toEqual(12.75);
});

test('Case 2', () => {
	expect(findMaxAverage([5], 1)).toEqual(5.0);
});

test('Case 3', () => {
	expect(findMaxAverage([-1], 1)).toEqual(-1.0);
});
