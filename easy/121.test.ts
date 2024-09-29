import { generateTests } from '../common.test';
import { maxProfit } from './121';

generateTests(maxProfit, [
	{ i: [[7, 1, 5, 3, 6, 4]], o: 5 },
	{ i: [[7, 6, 4, 3, 1]], o: 0 },
	{ i: [[1]], o: 0 },
	{ i: [[100, 2, 200, 1, 2, 4]], o: 198 },
	{ i: [[100, 200, 1, 400]], o: 399 },
]);
