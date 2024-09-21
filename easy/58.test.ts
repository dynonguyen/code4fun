import { expect, test } from 'bun:test';
import { lengthOfLastWord } from './58';

test('Case 1', () => {
	expect(lengthOfLastWord('Hello World')).toBe(5);
});

test('Case 2', () => {
	expect(lengthOfLastWord('   fly me   to   the moon  ')).toBe(4);
});

test('Case 3', () => {
	expect(lengthOfLastWord('luffy is still joyboy')).toBe(6);
});

test('Case 4', () => {
	expect(lengthOfLastWord(' ')).toBe(0);
});
