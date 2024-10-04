import { generateTests } from '../common.test';
import { moveZeroes } from './283';

function mockFunction(nums: number[]): number[] {
	const clone = nums;
	moveZeroes(clone);
	console.log(clone);
	return clone;
}

generateTests(mockFunction, [
	{ i: [[0, 1, 0, 3, 12]], o: [1, 3, 12, 0, 0] },
	{ i: [[0]], o: [0] },
	{ i: [[1, 9, 0, -2, 0]], o: [1, 9, -2, 0, 0] },
]);
