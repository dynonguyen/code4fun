import { generateTests } from '../common.test';
import { isSubsequence } from './392';

generateTests(isSubsequence, [
	{ i: ['abc', 'ahbgdc'], o: true },
	{ i: ['axc', 'ahbgdc'], o: false },
	{ i: ['', 'ahbgdc'], o: true },
	{ i: ['abc', ''], o: false },
	{ i: ['b', 'abc'], o: true },
	{ i: ['abc', 'abc'], o: true },
	{ i: ['acb', 'ahbgdc'], o: false },
	{ i: ['aaa', 'aaab'], o: true },
	{ i: ['xyz', 'xaybzc'], o: true },
	{ i: ['def', 'abc'], o: false },
]);
