import { generateTests } from '../common.test';
import { mySqrt } from './69';

generateTests(
	mySqrt,
	[0, 1, 2, 3, 4, 8, 120, Math.pow(2, 30), 11123].map(n => ({ i: [n], o: Math.floor(Math.sqrt(n)) })) as any,
);
