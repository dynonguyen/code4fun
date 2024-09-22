/* Solution Brute force

Complexity Analysis:
  - Time: O(n^2)
  - Space: O(1)

*/
export function subarraySum1(nums: number[], k: number): number {
	const len = nums.length;
	let count = 0;

	for (let i = 0; i < len; ++i) {
		let sum = 0;

		for (let j = i; j < len; ++j) {
			sum += nums[j];
			if (sum === k) {
				count++;
				break;
			}
		}
	}

	return count;
}

/* Solution Prefix sum + Hash table

Complexity Analysis:
  - Time: O(n)
  - Space: O(n)

*/
export function subarraySum(nums: number[], k: number): number {
	const len = nums.length;
	let count = 0;
	let prefixSum = 0;
	const prefixSumMap = new Map<number, number>([[0, 1]]); // [prefixSum, tần suất xuất hiện của prefixSum = số lượng subarray có tổng = prefixSum]

	for (let i = 0; i < len; ++i) {
		// Tính prefix sum
		prefixSum += nums[i];

		// Nếu "prefixSum - k" có tồn tại trong prefixSumMap tức là có tồn tại subarray thoả mãn
		if (prefixSumMap.has(prefixSum - k)) {
			count += prefixSumMap.get(prefixSum - k)!;
		}

		// Lưu prefix sum vào hash table
		const frequency = prefixSumMap.get(prefixSum) || 0;
		prefixSumMap.set(prefixSum, frequency + 1);
	}

	return count;
}
