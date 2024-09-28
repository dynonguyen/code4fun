import { generateTests } from '../common.test';
import { firstUniqChar } from './387';

generateTests(firstUniqChar, [
	{ i: ['leetcode'], o: 0 },
	{ i: ['loveleetcode'], o: 2 },
	{ i: ['aabb'], o: -1 },
]);
