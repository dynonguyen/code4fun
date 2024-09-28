// 70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs

/*
  - Tương tự bài toán dãy fibonacci
  - Mỗi step S(n) sẽ có 2 cách bước là 1 hoặc 2 step

  - S(1) = 1, S(2) = 2

  - S(n) [n >= 3] = S(n - 1) + S(n - 2)
*/

/* Solution: Recursion

Complexity Analysis:
  - Time: O(2^n)
  - Space: O(n)

*/
export function climbStairs1(n: number): number {
	if (n <= 2) return n;
	return climbStairs1(n - 1) + climbStairs1(n - 2);
}

/* Solution: DP Memorization + Recursion

Complexity Analysis:
  - Time: O(n)
  - Space: O(n)

*/
const memorized: Record<number, number> = { 1: 1, 2: 2 };
export function climbStairs2(n: number): number {
	if (memorized[n]) return memorized[n];
	else {
		memorized[n] = climbStairs2(n - 1) + climbStairs2(n - 2);
		return memorized[n];
	}
}

/* Solution: DP Tabulation

Complexity Analysis:
  - Time: O(n)
  - Space: O(n)

*/
export function climbStairs3(n: number): number {
	if (n <= 2) return n;

	let result = 0;
	const steps: number[] = [1, 2];

	for (let i = 2; i < n; ++i) {
		steps[i] = steps[i - 1] + steps[i - 2];
		result = steps[i];
	}

	return result;
}

/* Solution: DP Tabulation - Space Optimized

Complexity Analysis:
  - Time: O(n)
  - Space: O(1)

*/
export function climbStairs(n: number): number {
	if (n <= 2) return n;

	let s1 = 1,
		s2 = 2;

	for (let i = 2; i < n; ++i) {
		const tmp = s2;
		s2 = s1 + s2;
		s1 = tmp;
	}

	return s2;
}
