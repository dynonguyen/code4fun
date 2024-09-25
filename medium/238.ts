// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/description/

/* Solution Prefix sum (product)

Note:
  - P1: prefix product 0 -> n - 1 = 1, a[1], a[1]*a[2],..., a[n-2]*a[n-1]
  - P2: prefix product n - 1 -> 0 = , ..., a[n-1]*a[n - 2], a[n - 1], 1

  - P[i] = P[0, i - 1] * P[i + 1, n - 1]
         = P1[i - 1] * P2[i + 1]

Complexity Analysis:
  - Time: O(n)
  - Space: O(n)

*/
export function productExceptSelf(nums: number[]): number[] {
	const result = [];
	const n = nums.length;

	const prefix1: number[] = Array(n + 1).fill(1);
	let prefix2: number[] = Array(n + 1).fill(1);

	for (let i = 1; i <= n; ++i) {
		prefix1[i] = nums[i - 1] * prefix1[i - 1];
		prefix2[n - i] = nums[n - i] * prefix2[n - i + 1];
	}

	for (let i = 1; i <= n; ++i) {
		// Tránh case -0 testcase của bun
		const p = prefix1[i - 1] * prefix2[i];
		result[i - 1] = p === -0 ? 0 : p;
	}

	return result;
}
