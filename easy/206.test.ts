import { generateTests } from '../common.test';
import { ListNode, reverseList } from './206';

const toListNode = (arr: number[]): ListNode | null => {
	if (!arr.length) return null;
	return { val: arr[0], next: toListNode(arr.slice(1)) };
};

const toArray = (node: ListNode | null): number[] => {
	if (!node) return [];
	return [node.val, ...toArray(node.next)];
};

function mockFn(nums: number[]) {
	return toArray(reverseList(toListNode(nums)));
}

generateTests(mockFn, [
	{ i: [[1, 2, 3, 4, 5]], o: [5, 4, 3, 2, 1] },
	{ i: [[1, 2]], o: [2, 1] },
	{ i: [[0, 0, 1]], o: [1, 0, 0] },
	{ i: [[]], o: [] },
]);
