// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

/* Solution Brute Force

Complexity Analysis:
  - Time: O(n ^ 2)
  - Space: O(1)

*/
export function maxProfit1(prices: number[]): number {
	const len = prices.length;

	if (len < 2) return 0;

	let max = 0;

	for (let i = 0; i < len - 1; ++i) {
		for (let j = i + 1; j < len; ++j) {
			if (prices[j] - prices[i] > max) max = prices[j] - prices[i];
		}
	}

	return max;
}

/* Solution Two pointer

Complexity Analysis:
  - Time: O(n)
  - Space: O(1)

*/
export function maxProfit(prices: number[]): number {
	const len = prices.length;

	if (len < 2) return 0;

	let l = 0, // Buy
		r = 1, // Sell
		maxProfit = 0;

	while (r < len) {
		const currProfit = prices[r] - prices[l];

		if (currProfit < 0) l = r;

		maxProfit = Math.max(currProfit, maxProfit);
		r++;
	}

	return maxProfit;
}
