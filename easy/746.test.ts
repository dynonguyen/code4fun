import { generateTests } from '../common.test';
import { minCostClimbingStairs } from './746';

generateTests(minCostClimbingStairs, [
	{ i: [[10, 15, 20]], o: 15 },
	{ i: [[1, 100, 1, 1, 1, 100, 1, 1, 100, 1]], o: 6 },
	{ i: [[1, 3, 10, 1, 1, 2, 0, 0, 0, 100, 0, 0, 0]], o: 5 },
]);
