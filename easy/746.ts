// https://leetcode.com/problems/min-cost-climbing-stairs
// 746. Min Cost Climbing Stairs

/* Solution 

Note:
  - Thuật toán giống bài fib, climbing stairs (70)
  - Min cost to reach the top = Min(min cost to reach top - 1, min cost to reach top - 2)

Complexity Analysis:
  - Time: O(n)
  - Space: O(1)

*/
export function minCostClimbingStairs(cost: number[]): number {
	const len = cost.length;

	let p1 = cost[0],
		p2 = cost[1];

	for (let i = 2; i < len; ++i) {
		const tmp = p2;
		p2 = cost[i] + Math.min(p1, p2);
		p1 = tmp;
	}

	return Math.min(p1, p2);
}
