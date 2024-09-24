import { generateTests } from '../common.test';
import { containsDuplicate } from './217';

generateTests(containsDuplicate, [
	{ i: [[1, 2, 3, 1]], o: true },
	{ i: [[1, 2, 3, 4]], o: false },
	{ i: [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]], o: true },
]);
