import { generateTests } from '../common.test';
import { mergeAlternately } from './1768';

generateTests(mergeAlternately, [
	{ i: ['abc', 'pqr'], o: 'apbqcr' },
	{ i: ['ab', 'pqrs'], o: 'apbqrs' },
	{ i: ['abcd', 'pq'], o: 'apbqcd' },
]);
