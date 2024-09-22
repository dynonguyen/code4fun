/* Solution Greedy method

Complexity Analysis:
  - Time: O(n)
  - Space: O(1)

*/
export function canJump(nums: number[]): boolean {
	const len = nums.length;
	let maxPosition = 0; // Vị trí xa nhất có thể jump tới

	for (let i = 0; i < len; ++i) {
		// Case mà ta không thể đi tới (có thể do tồn tại jump = 0 => position < i)
		if (i > maxPosition) return false;

		// Cập nhật lại vị trí tối đa mà ta có thể đi tới
		maxPosition = Math.max(maxPosition, i + nums[i]);
	}

	return maxPosition >= len - 1;
}
