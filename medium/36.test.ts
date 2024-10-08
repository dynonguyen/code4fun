import { generateTests } from '../common.test';
import { isValidSudoku } from './36';

generateTests(isValidSudoku, [
	{
		i: [
			[
				['5', '3', '.', '.', '7', '.', '.', '.', '.'],
				['6', '.', '.', '1', '9', '5', '.', '.', '.'],
				['.', '9', '8', '.', '.', '.', '.', '6', '.'],
				['8', '.', '.', '.', '6', '.', '.', '.', '3'],
				['4', '.', '.', '8', '.', '3', '.', '.', '1'],
				['7', '.', '.', '.', '2', '.', '.', '.', '6'],
				['.', '6', '.', '.', '.', '.', '2', '8', '.'],
				['.', '.', '.', '4', '1', '9', '.', '.', '5'],
				['.', '.', '.', '.', '8', '.', '.', '7', '9'],
			],
		],
		o: true,
	},
	{
		i: [
			[
				['8', '3', '.', '.', '7', '.', '.', '.', '.'],
				['6', '.', '.', '1', '9', '5', '.', '.', '.'],
				['.', '9', '8', '.', '.', '.', '.', '6', '.'],
				['8', '.', '.', '.', '6', '.', '.', '.', '3'],
				['4', '.', '.', '8', '.', '3', '.', '.', '1'],
				['7', '.', '.', '.', '2', '.', '.', '.', '6'],
				['.', '6', '.', '.', '.', '.', '2', '8', '.'],
				['.', '.', '.', '4', '1', '9', '.', '.', '5'],
				['.', '.', '.', '.', '8', '.', '.', '7', '9'],
			],
		],
		o: false,
	},
	{
		i: [
			[
				['8', '3', '.', '.', '7', '.', '.', '.', '.'],
				['6', '.', '.', '1', '9', '5', '.', '.', '.'],
				['.', '9', '1', '.', '.', '.', '.', '6', '.'],
				['1', '.', '.', '.', '6', '.', '.', '.', '3'],
				['4', '.', '.', '8', '.', '3', '.', '.', '1'],
				['7', '.', '.', '.', '2', '.', '.', '.', '6'],
				['.', '6', '.', '.', '.', '.', '2', '8', '.'],
				['.', '.', '.', '4', '1', '9', '.', '.', '5'],
				['.', '.', '.', '.', '8', '.', '.', '7', '9'],
			],
		],
		o: true,
	},
	{
		i: [
			[
				['8', '3', '.', '.', '7', '.', '.', '.', '.'],
				['6', '.', '.', '1', '9', '5', '.', '.', '.'],
				['.', '9', '1', '.', '.', '.', '.', '6', '.'],
				['1', '.', '.', '.', '6', '.', '.', '.', '3'],
				['4', '.', '.', '8', '.', '3', '.', '.', '1'],
				['7', '.', '.', '.', '2', '.', '.', '.', '6'],
				['.', '6', '.', '.', '.', '.', '2', '8', '.'],
				['.', '.', '.', '4', '1', '9', '.', '.', '5'],
				['.', '.', '.', '.', '8', '.', '.', '7', '9'],
			],
		],
		o: true,
	},
	{
		i: [
			[
				['.', '.', '.', '.', '.', '.', '.', '.', '.'],
				['.', '.', '.', '.', '.', '.', '.', '.', '.'],
				['.', '.', '.', '.', '.', '.', '.', '.', '.'],
				['.', '.', '.', '.', '.', '.', '.', '.', '.'],
				['.', '.', '.', '.', '.', '.', '.', '.', '.'],
				['.', '.', '.', '.', '.', '.', '.', '.', '.'],
				['.', '.', '.', '.', '.', '.', '.', '.', '.'],
				['.', '.', '.', '.', '.', '.', '.', '.', '.'],
				['.', '.', '.', '.', '.', '.', '.', '.', '.'],
			],
		],
		o: true,
	},
	{
		i: [
			[
				['1', '.', '.', '.', '.', '.', '.', '.', '.'],
				['.', '1', '.', '.', '.', '.', '.', '.', '.'],
				['.', '.', '.', '.', '.', '.', '.', '.', '.'],
				['.', '.', '.', '.', '.', '.', '.', '.', '.'],
				['.', '.', '.', '.', '.', '.', '.', '.', '.'],
				['.', '.', '.', '.', '.', '.', '.', '.', '.'],
				['.', '.', '.', '.', '.', '.', '.', '.', '.'],
				['.', '.', '.', '.', '.', '.', '.', '.', '.'],
				['.', '.', '.', '.', '.', '.', '.', '.', '.'],
			],
		],
		o: false,
	},
	{
		i: [
			[
				['.', '.', '.', '.', '.', '.', '.', '.', '.'],
				['.', '.', '.', '.', '.', '.', '3', '.', '.'],
				['.', '.', '.', '1', '8', '.', '.', '.', '.'],
				['.', '.', '.', '7', '.', '.', '.', '.', '.'],
				['.', '.', '.', '.', '1', '.', '9', '7', '.'],
				['.', '.', '.', '.', '.', '.', '.', '.', '.'],
				['.', '.', '.', '3', '6', '.', '1', '.', '.'],
				['.', '.', '.', '.', '.', '.', '.', '.', '.'],
				['.', '.', '.', '.', '.', '.', '.', '2', '.'],
			],
		],
		o: true,
	},
	{
		i: [
			[
				['.', '.', '.', '.', '5', '.', '.', '1', '.'],
				['.', '4', '.', '3', '.', '.', '.', '.', '.'],
				['.', '.', '.', '.', '.', '3', '.', '.', '1'],
				['8', '.', '.', '.', '.', '.', '.', '2', '.'],
				['.', '.', '2', '.', '7', '.', '.', '.', '.'],
				['.', '1', '5', '.', '.', '.', '.', '.', '.'],
				['.', '.', '.', '.', '.', '2', '.', '.', '.'],
				['.', '2', '.', '9', '.', '.', '.', '.', '.'],
				['.', '.', '4', '.', '.', '.', '.', '.', '.'],
			],
		],
		o: false,
	},
]);
