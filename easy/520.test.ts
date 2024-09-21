import { expect, test } from 'bun:test';
import { detectCapitalUse } from './520';

test('Case 1', () => {
	expect(detectCapitalUse('USA')).toEqual(true);
});

test('Case 2', () => {
	expect(detectCapitalUse('leetcode')).toEqual(true);
});

test('Case 3', () => {
	expect(detectCapitalUse('Google')).toEqual(true);
});

test('Case 4', () => {
	expect(detectCapitalUse('hellOs')).toEqual(false);
});

test('Case 5', () => {
	expect(detectCapitalUse('FlaG')).toEqual(false);
});
