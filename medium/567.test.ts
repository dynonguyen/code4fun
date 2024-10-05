import { generateTests } from '../common.test';
import { checkInclusion } from './567';

generateTests(checkInclusion, [
	{ i: ['ab', 'eidbaooo'], o: true },
	{ i: ['ab', 'eidboaoo'], o: false },
	{ i: ['abc', 'abc'], o: true },
	{ i: ['aba', 'a'], o: false },
	{ i: ['abc', 'bbbca'], o: true },
	{ i: ['abcdxabcde', 'abcdeabcdx'], o: true },
]);
