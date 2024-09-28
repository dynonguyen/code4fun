// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/description/

export class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

/* Solution Linked-List

Complexity Analysis:
  - Time: O(n)
  - Space: O(n)

*/
export function reverseList(head: ListNode | null): ListNode | null {
	if (!head) return null;

	let prev: ListNode | null = null;
	let curr: ListNode | null = head;

	while (curr !== null) {
		const tmp: ListNode | null = curr.next;

		curr.next = prev;
		prev = curr;
		curr = tmp;
	}

	return prev;
}
