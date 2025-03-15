import { generateTests } from '../common.test';
import { kidsWithCandies } from './1431';

generateTests(kidsWithCandies, [
	{ i: [[2, 3, 5, 1, 3], 3], o: [true, true, true, false, true] },
	{ i: [[4, 2, 1, 1, 2], 1], o: [true, false, false, false, false] },
	{ i: [[12, 1, 12], 10], o: [true, false, true] },
]);
