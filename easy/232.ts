// 232. Implement Queue using Stacks
// https://leetcode.com/problems/implement-queue-using-stacks/description/
class MyQueue {
	constructor() {}

	private queue: number[] = [];

	push(x: number): void {
		this.queue.push(x);
	}

	pop(): number {
		return this.queue.shift()!;
	}

	peek(): number {
		return this.queue[0];
	}

	empty(): boolean {
		return this.queue.length === 0;
	}
}
