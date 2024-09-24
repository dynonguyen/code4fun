// 209. Minimum Size Subarray Sum
// https://leetcode.com/problems/minimum-size-subarray-sum

/* Solution: Variable sliding window

Complexity Analysis:
  - Time: O(n)
  - Space: O(1)

*/
export function minSubArrayLen(target: number, nums: number[]): number {
	const len = nums.length + 1;
	let left = 0,
		right = 0;
	let currentSum = 0;
	let minSubLen = len + 1;

	while (right < len) {
		// Tìm right thoả mãn sum >= target
		while (currentSum < target && right < len) {
			currentSum += nums[right++];
		}

		// Tìm mảng nhỏ nhất bằng cách trừ lại các phần tử từ vị trí left
		while (currentSum >= target && left < len) {
			minSubLen = Math.min(minSubLen, right - left);
			currentSum -= nums[left++];
		}
	}

	return minSubLen > len ? 0 : minSubLen;
}
