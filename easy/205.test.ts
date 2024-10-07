import { generateTests } from '../common.test';
import { isIsomorphic } from './205';

generateTests(isIsomorphic, [
	{ i: ['egg', 'add'], o: true },
	{ i: ['foo', 'bar'], o: false },
	{ i: ['paper', 'title'], o: true },
	{ i: ['badc', 'baba'], o: false },
]);
