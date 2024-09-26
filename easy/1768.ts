// 1768. Merge Strings Alternately
// https://leetcode.com/problems/merge-strings-alternately/

/* Solution String/Array

Complexity Analysis:
	- Time: O(n)
	- Space: O(n)

*/
export function mergeAlternately(word1: string, word2: string): string {
	const len1 = word1.length;
	const len2 = word2.length;
	const minLen = Math.min(len1, len2);

	let merged = '';
	for (let i = 0; i < minLen; ++i) {
		merged += word1[i] + word2[i];
	}

	if (len1 !== len2) {
		merged += len1 > len2 ? word1.slice(minLen) : word2.slice(minLen);
	}

	return merged;
}
