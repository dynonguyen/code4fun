// https://leetcode.com/problems/isomorphic-strings/description/
// 205. Isomorphic Strings

/* Solution Hash table

Complexity Analysis:
  - Time: O(n)
  - Space: O(n)

*/
export function isIsomorphic(s: string, t: string): boolean {
	const cMap = new Map<string, string>();
	const tMap = new Map<string, string>();

	const len = s.length;
	for (let i = 0; i < len; ++i) {
		const cs = s[i];
		const ct = t[i];

		if ((cMap.has(cs) && cMap.get(cs) !== ct) || (tMap.has(ct) && tMap.get(ct) !== cs)) return false;

		tMap.set(ct, cs);
		cMap.set(cs, ct);
	}

	return true;
}
