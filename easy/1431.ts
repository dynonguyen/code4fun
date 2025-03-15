// 1431. Kids With the Greatest Number of Candies
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies

/* Solution 

- Tìm số kẹo lớn nhất => lặp qua từng phần tử, nếu số kẹo sau khi + extra >= max thì true

Complexity Analysis:
  - Time: O(n)
  - Space: O(n)

*/
export function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
	const max = Math.max(...candies);
	return candies.map(nCandy => nCandy + extraCandies >= max);
}
