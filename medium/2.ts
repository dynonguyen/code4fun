export class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

/* Solution 1

Complexity Analysis:
	- Time: O(n)
	- Space: O(n)

*/
export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	// Node head lưu trữ kết quả, không để null để tránh 1 bước kiểm tra
	let head = new ListNode();

	// Node tail để thêm kết quả sum vào head
	let tail = head;

	// Số dư của tỗng (sum % 10), do 0 <= Node.value <= 9
	let carry = 0;

	while (l1 || l2 || carry) {
		const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;

		tail.next = new ListNode(sum % 10);
		tail = tail.next;

		carry = Math.floor(sum / 10);
		if (l1) l1 = l1.next;
		if (l2) l2 = l2.next;
	}

	// Bỏ node 0 đầu tiên
	return head.next;
}
