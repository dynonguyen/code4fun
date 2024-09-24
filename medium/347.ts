/* Solution Hash table + sorting

Complexity Analysis:
  - Time: O(n + m*log(m))
  - Space: N/A

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
