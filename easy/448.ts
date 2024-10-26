// 448. Find All Numbers Disappeared in an Array
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/

/* Solution Set

Complexity Analysis:
  - Time: O(n)
  - Space: O(n)

*/
export function findDisappearedNumbers(nums: number[]): number[] {
	const set = new Set(Array.from({ length: nums.length }, (_, i) => i + 1));

	for (const num of nums) {
		set.delete(num);
	}

	return Array.from(set);
}
