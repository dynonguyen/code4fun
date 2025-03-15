import { generateTests } from '../common.test';
import { canPlaceFlowers } from './605';

generateTests(canPlaceFlowers, [
	{ i: [[1, 0, 0, 0, 1], 1], o: true },
	{ i: [[1, 0, 0, 0, 1], 2], o: false },
	{ i: [[1, 0, 0, 1], 1], o: false },
	{ i: [[1, 0, 0, 1], 1], o: false },
	{ i: [[1, 0, 0, 0, 1], 1], o: true },
	{ i: [[1, 0, 1], 0], o: true },
	{ i: [[1, 0, 1, 0, 1, 0, 1], 2], o: false },
	{ i: [[0, 0, 0, 0, 0], 2], o: true },
	{ i: [[0, 0, 0], 1], o: true },
	{ i: [[1, 1, 0, 1], 1], o: false },
	{ i: [[0, 0, 0, 0], 2], o: true },
	{ i: [[1, 0, 0, 0, 0, 1], 2], o: false },
	{ i: [[0], 1], o: true },
	{ i: [[1], 1], o: false },
	{ i: [[0, 1, 0, 1, 0], 2], o: false },
	{ i: [[0, 0, 0, 0, 0, 0], 3], o: true },
	{ i: [[1, 1, 1], 1], o: false },
	{ i: [[0, 0], 2], o: false },
	{ i: [[1], 0], o: true },
]);
