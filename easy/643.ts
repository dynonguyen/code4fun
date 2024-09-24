// 643. Maximum Average Subarray I
// https://leetcode.com/problems/maximum-average-subarray-i

/* Solution: Sliding window + DP

Complexity Analysis:
  - Time: O(n)
  - Space: O(n - k)

*/
export function findMaxAverage(nums: number[], k: number): number {
	let max: number | undefined;
	let sum: number | undefined;
	const n = nums.length;

	// Chia array thành các sub array có kích thước k (sliding windows), tính avg các sub array này
	for (let i = 0; i <= n - k; ++i) {
		// Chỉ tính sum cho sub array đầu tiên giúp giảm tính toán lại những lần sau. Tránh "Time Limit Exceeded" khi nums rất lớn
		if (sum === undefined) {
			sum = 0;
			for (let j = i; j < i + k; ++j) {
				sum += nums[j];
			}
		} else {
			sum = sum - nums[i - 1] + nums[i + k - 1];
		}

		if (max === undefined || sum > max) max = sum;
	}

	return (max as number) / k;
}
