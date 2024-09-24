// 347. Top K Frequent Elements
// https://leetcode.com/problems/top-k-frequent-elements

/* Solution Hash table + sorting

Complexity Analysis:
  - Time: O(n + m*log(m)) -> O(n*log(n))
  - Space: O(n)

*/
export function topKFrequent(nums: number[], k: number): number[] {
	const freqMap = new Map<number, number>(); // [num, frequency]

	nums.forEach(num => {
		freqMap.set(num, freqMap.has(num) ? freqMap.get(num)! + 1 : 1);
	});

	return Array.from(freqMap.entries())
		.sort((a, b) => b[1] - a[1])
		.slice(0, k)
		.map(item => item[0]);
}

/* Solution Hash table + Max (min) heap

Note:
	- Mỗi lần thêm hoặc loại bỏ phần tử khỏi heap có độ phức tạp O(log K), và ta làm điều này N lần, nên tổng cộng là O(N log K).

Complexity Analysis:
  - Time: O(n * log(k))
  - Space: O(n + k) 

*/
