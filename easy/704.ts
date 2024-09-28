// 704. Binary Search
// https://leetcode.com/problems/binary-search/description/

/* Solution Binary Search

Complexity Analysis:
	- Time: O(log(n))
	- Space: O(1)

*/
export function search(nums: number[], target: number): number {
	let low = 0,
		high = nums.length - 1;

	while (high >= low) {
		const mid = low + ~~((high - low) / 2);

		if (nums[mid] === target) return mid;

		if (nums[mid] > target) high = mid - 1;
		else low = mid + 1;
	}

	return -1;
}
