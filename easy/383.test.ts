import { generateTests } from '../common.test';
import { canConstruct } from './383';

generateTests(canConstruct, [
	{ i: ['aab', 'baa'], o: true },
	{ i: ['a', 'a'], o: true },
	{ i: ['a', 'b'], o: false },
	{ i: ['aa', 'ab'], o: false },
	{ i: ['aa', 'aab'], o: true },
	{ i: ['ihgg', 'ch'], o: false },
]);
