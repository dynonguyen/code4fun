import { generateTests } from '../common.test';
import { climbStairs } from './70';

generateTests(climbStairs, [
	{ i: [2], o: 2 },
	{ i: [3], o: 3 },
	{ i: [4], o: 5 },
	{ i: [5], o: 8 },
	{ i: [40], o: 165580141 },
]);
