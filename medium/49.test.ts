import { generateTests } from '../common.test';
import { groupAnagrams } from './49';

generateTests(groupAnagrams, [
	{ i: [['eat', 'tea', 'tan', 'ate', 'nat', 'bat']], o: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']] },
	{ i: [['']], o: [['']] },
	{ i: [['a']], o: [['a']] },
]);
