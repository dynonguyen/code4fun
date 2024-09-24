/* Solution Hash table

Complexity Analysis:
  - Time: O(n)
  - Space: O(n)

*/
export function containsDuplicate(nums: number[]): boolean {
	const map: Record<number, boolean> = {};

	for (const num of nums) {
		if (map[num]) return true;

		map[num] = true;
	}

	return false;
}
