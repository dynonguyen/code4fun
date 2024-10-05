// https://leetcode.com/problems/permutation-in-string/description
// 567. Permutation in String

/* Solution Hashmap, sliding window

Complexity Analysis:
	- Time: O(n)
	- Space: O(n)

*/
export function checkInclusion(s1: string, s2: string): boolean {
	const k = s1.length,
		l = s2.length;

	if (k > l) return false;

	const freq = new Map<string, number>();
	for (let i = 0; i < k; ++i) {
		freq.set(s1[i], (freq.get(s1[i]) || 0) + 1);
	}

	for (let i = 0; i < l - k + 1; ++i) {
		const tmpFreq = new Map(freq);

		for (let j = 0; j < k; ++j) {
			const c = s2[i + j];
			if (!tmpFreq.has(c)) break;

			const count = tmpFreq.get(c)! - 1;
			if (count === 0) tmpFreq.delete(c);
			else tmpFreq.set(c, count);
		}

		if (tmpFreq.size === 0) return true;
	}

	return false;
}
