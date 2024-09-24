import { generateTests } from '../common.test';
import { isAnagram } from './242';

generateTests(isAnagram, [
	{ i: ['anagram', 'nagaram'], o: true },
	{ i: ['rat', 'car'], o: false },
	{ i: ['a', 'b'], o: false },
	{ i: ['a', 'a'], o: true },
	{ i: ['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaax'], o: false },
	{ i: ['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac', 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaca'], o: true },
]);
