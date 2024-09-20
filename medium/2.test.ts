import { expect, test } from 'bun:test';
import { addTwoNumbers, ListNode } from './2';

const toListNode = (arr: number[]): ListNode | null => {
	if (!arr.length) return null;
	return { val: arr[0], next: toListNode(arr.slice(1)) };
};

const toArray = (node: ListNode | null): number[] => {
	if (!node) return [];
	return [node.val, ...toArray(node.next)];
};

const mockExpect = (l1: number[], l2: number[]) => {
	const result = toArray(addTwoNumbers(toListNode(l1), toListNode(l2)));
	console.log(`☕ DYNO LOG ~ 2.test.ts:15 🥺`, l1, l2, result);
	return result;
};

test('Case 1', () => {
	expect(mockExpect([2, 4, 3], [5, 6, 4])).toEqual([7, 0, 8]);
});

test('Case 2', () => {
	expect(mockExpect([0], [0])).toEqual([0]);
});

test('Case 3', () => {
	expect(mockExpect([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
});
