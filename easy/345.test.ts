import { generateTests } from '../common.test';
import { reverseVowels } from './345';

generateTests(reverseVowels, [
	{ i: ['IceCreAm'], o: 'AceCreIm' },
	{ i: ['leetcode'], o: 'leotcede' },
]);
