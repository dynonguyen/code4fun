import { expect, test } from 'bun:test';
import { isPalindrome } from './125';

test('Case 1', () => {
	expect(isPalindrome('A man, a plan, a canal: Panama')).toEqual(true);
});

test('Case 2', () => {
	expect(isPalindrome('race a car')).toEqual(false);
});

test('Case 3', () => {
	expect(isPalindrome(' ')).toEqual(true);
});

test('Case 4', () => {
	expect(isPalindrome('ab_a')).toEqual(true);
});
