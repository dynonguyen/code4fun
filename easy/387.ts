// 387. First Unique Character in a String
// https://leetcode.com/problems/first-unique-character-in-a-string/description/

/* Solution Hashmap

Complexity Analysis:
  - Time: O(n)
  - Space: O(n)

*/
export function firstUniqChar(s: string): number {
	const freq = new Map<string, [number, boolean]>(); // [index, isDuplicated]

	const len = s.length;

	for (let i = 0; i < len; ++i) {
		const c = s[i];
		if (freq.has(c)) freq.set(c, [i, true]);
		else freq.set(c, [i, false]);
	}

	let min = len + 1;
	freq.forEach(([index, isDuplicated]) => {
		if (!isDuplicated && index < min) {
			min = index;
		}
	});

	return min === len + 1 ? -1 : min;
}
