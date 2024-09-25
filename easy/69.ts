// 69. Sqrt(x)
// https://leetcode.com/problems/sqrtx/description/

/* Solution Brute force

Complexity Analysis:
  - Time: O(n)
  - Space: O(1)

*/
export function mySqrt(x: number): number {
	if (x === 0) return 0;
	if (x <= 3) return 1;

	for (let i = 2; i <= x; ++i) {
		if (i * i > x) {
			return i - 1;
		}
	}

	return 0;
}

// TODO: Implement solution using binary search
