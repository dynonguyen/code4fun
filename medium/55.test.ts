import { generateTests } from '../common.test';
import { canJump } from './55';

generateTests(canJump, [
	{ i: [[2, 3, 1, 1, 4]], o: true },
	{ i: [[3, 2, 1, 0, 4]], o: false },
	{ i: [[0]], o: true },
	{ i: [[2, 5, 0, 0]], o: true },
	{ i: [[1, 2]], o: true },
]);
