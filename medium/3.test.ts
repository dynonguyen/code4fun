import { expect, test } from 'bun:test';
import { lengthOfLongestSubstring } from './3';

test('Case 1', () => {
	expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3);
});

test('Case 2', () => {
	expect(lengthOfLongestSubstring('bbbbb')).toEqual(1);
});

test('Case 3', () => {
	expect(lengthOfLongestSubstring('pwwkew')).toEqual(3);
});

test('Case 3', () => {
	expect(lengthOfLongestSubstring(' ')).toEqual(1);
});

test('Case 3', () => {
	expect(lengthOfLongestSubstring('au')).toEqual(2);
});
