/* Solution Sort & Compare

Complexity Analysis:
  - Time: O(nlogn) - Quicksort
  - Space: O(n)

*/
export function isAnagram1(s: string, t: string): boolean {
	if (s.length !== t.length) return false;

	return s.split('').sort().join('') === t.split('').sort().join('');
}

/* Solution Hash table

Complexity Analysis:
  - Time: O(n)
  - Space: O(n)

*/
export function isAnagram(s: string, t: string): boolean {
	if (s.length !== t.length) return false;

	const sMap: Record<string, number> = {};

	for (const c of s) {
		if (sMap[c]) sMap[c]++;
		else sMap[c] = 1;
	}

	for (const c of t) {
		if (!sMap[c]) return false;
		sMap[c]--;
	}

	return Object.values(sMap).every(count => count === 0);
}
