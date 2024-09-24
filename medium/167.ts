// 167. Two Sum II - Input Array Is Sorted
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted

/* Solution Two pointer

Complexity Analysis:
  - Time: O(n)
  - Space: O(1)

*/
export function twoSum(numbers: number[], target: number): number[] {
	const len = numbers.length;
	let i = 0,
		j = len - 1;

	// Dùng 2 con trỏ duyệt mảng từ 2 chiều
	while (i < j) {
		const sum = numbers[i] + numbers[j];

		// Happy case
		if (sum === target) return [i + 1, j + 1];

		if (sum > target) {
			// Giảm j vì numbers đã sort tăng dần, mà sum > target thì cần 1 con số khác nhỏ hơn
			j--;
		} else {
			// Tăng i vì đang cần tìm số lớn hơn
			i++;
		}
	}

	return [1, 2];
}
