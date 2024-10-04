// https://leetcode.com/problems/move-zeroes/
// 283. Move Zeroes

/* Solution Two pointers

Complexity Analysis:
  - Time: O(n)
  - Space: O(1)

*/
export function moveZeroes(nums: number[]): void {
	const len = nums.length;
	let p1 = 0,
		p2 = 0;

	while (p1 < len && p2 < len) {
		if (nums[p2] !== 0) {
			nums[p1] = nums[p2];
			if (p1 !== p2) nums[p2] = 0;
			++p1;
		}

		++p2;
	}
}
