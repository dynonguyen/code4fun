// 155. Min Stack
// https://leetcode.com/problems/min-stack/description/

// Linked list
class Node {
	constructor(
		public val: number | undefined = undefined,
		public min: number | undefined = undefined,
		public next: Node | null = null,
	) {}
}

// Stack based on linked-list
// Methods pop, top and getMin operations will always be called on non-empty stacks.
// Don't need check empty stack
class MinStack {
	constructor() {}
	private _head: Node | null = null;

	push(val: number): void {
		if (this._head === null) {
			this._head = new Node(val, val, null);
		} else {
			this._head = new Node(val, Math.min(this._head.min!, val), this._head);
		}
	}

	pop(): void {
		this._head = this._head!.next;
	}

	top(): number {
		return this._head!.val!;
	}

	getMin(): number {
		return this._head!.min!;
	}
}

const stack = new MinStack();
stack.push(-2);
stack.push(0);
stack.push(-3);
console.log(`☕ DYNO LOG ~ 155.ts:27 🥺`, stack.getMin()); // -3
stack.pop();
console.log(`☕ DYNO LOG ~ 155.ts:31 🥺`, stack.top()); // 0
console.log(`☕ DYNO LOG ~ 155.ts:31 🥺`, stack.getMin()); // -2
