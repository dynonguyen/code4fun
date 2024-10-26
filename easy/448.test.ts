import { generateTests } from '../common.test';
import { findDisappearedNumbers } from './448';

generateTests(findDisappearedNumbers, [
	{ i: [[4, 3, 2, 7, 8, 2, 3, 1]], o: [5, 6] },
	{ i: [[1, 1]], o: [2] },
]);
