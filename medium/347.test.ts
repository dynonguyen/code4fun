import { generateTests } from '../common.test';
import { topKFrequent } from './347';

generateTests(topKFrequent, [
	{ i: [[1, 1, 1, 2, 2, 3], 2], o: [1, 2] },
	{ i: [[1], 1], o: [1] },
]);
