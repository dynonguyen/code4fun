// 334. Increasing Triplet Subsequence
// https://leetcode.com/problems/increasing-triplet-subsequence/description

/* Solution Brute force

Complexity Analysis:
  - Time: O(n^3)
  - Space: O(1)

*/
export function increasingTripletBruteForce(nums: number[]): boolean {
	const n = nums.length;

	for (let i = 0; i < n; ++i) {
		for (let j = i + 1; j < n; ++j) {
			for (let k = j + 1; k < n; ++k) {
				if (nums[i] < nums[j] && nums[j] < nums[k]) {
					return true;
				}
			}
		}
	}

	return false;
}

/* Solution 

- Đặt first và second là 2 số vô cùng lớn
- Tìm các số nhỏ theo thứ tự
- Nếu tìm được 1 số mà số đó lớn hơn cả first và second thì return true

Complexity Analysis:
  - Time: O(n)
  - Space: O(1)

*/
export function increasingTriplet(nums: number[]): boolean {
	let first = Infinity,
		second = Infinity;

	for (const num of nums) {
		if (num <= first) first = num;
		else if (num <= second) second = num;
		else return true;
	}

	return false;
}
