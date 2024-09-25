import { generateTests } from '../common.test';
import { productExceptSelf } from './238';

generateTests(productExceptSelf, [
	{ i: [[1, 2, 3, 4]], o: [24, 12, 8, 6] },
	{ i: [[-1, 1, 0, -3, 3]], o: [0, 0, 9, 0, 0] },
	{ i: [[1, 3, 7, 5, 2]], o: [210, 70, 30, 42, 105] },
]);
