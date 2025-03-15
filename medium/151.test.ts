import { generateTests } from '../common.test';
import { reverseWords } from './151';

generateTests(
	reverseWords,
	[
		{ i: ['the sky is blue'], o: 'blue is sky the' },
		{ i: ['  hello world  '], o: 'world hello' },
		{ i: ['a good   example'], o: 'example good a' },
	],
	{
		// only: 2,
	},
);
