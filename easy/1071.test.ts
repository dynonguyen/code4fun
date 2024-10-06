import { generateTests } from '../common.test';
import { gcdOfStrings } from './1071';

generateTests(gcdOfStrings, [
	{ i: ['ABCABC', 'ABC'], o: 'ABC' },
	{ i: ['ABABAB', 'ABAB'], o: 'AB' },
	{ i: ['ABC', 'ABC'], o: 'ABC' },
	{ i: ['LEET', 'CODE'], o: '' },
	{ i: ['AAA', 'A'], o: 'A' },
	{ i: ['AAA', 'AA'], o: 'A' },
	{ i: ['AAAABB', 'AA'], o: '' },
]);
