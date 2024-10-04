import { generateTests } from '../common.test';
import { dividePlayers } from './2491';

generateTests(
	dividePlayers,
	[
		{ i: [[3, 2, 5, 1, 3, 4]], o: 22 },
		{ i: [[3, 4]], o: 12 },
		{ i: [[1, 1, 2, 3]], o: -1 },
		{ i: [[1, 2, 2, 3]], o: 7 },
		{ i: [[2, 2, 2, 2]], o: 8 },
		{ i: [[1, 2, 2, 2, 1, 1]], o: 6 },
		{ i: [[13, 1, 14, 3, 2, 15]], o: 82 },
	],
	{ only: 7 },
);
