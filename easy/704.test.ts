import { generateTests } from '../common.test';
import { search } from './704';

generateTests(search, [
	{ i: [[-1, 0, 3, 5, 9, 12], 9], o: 4 },
	{ i: [[-1, 0, 3, 5, 9, 12], 2], o: -1 },
]);
