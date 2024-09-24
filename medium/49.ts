/* Solution Hash table

Complexity Analysis:
  - Time: O(n * mlog(m))
  - Space: O(n)

*/
export function groupAnagrams(strs: string[]): string[][] {
	const map = new Map<string, string[]>();

	for (const str of strs) {
		const sortedStr = str.split('').sort().join('');

		if (map.has(sortedStr)) {
			map.set(sortedStr, [...map.get(sortedStr)!, str]);
		} else {
			map.set(sortedStr, [str]);
		}
	}

	return Array.from(map.values());
}
