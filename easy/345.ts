// https://leetcode.com/problems/reverse-vowels-of-a-string
// 345. Reverse Vowels of a String

/* Solution Hash table + two pointer

Complexity Analysis:
  - Time: O(n)
  - Space: O(n)

*/
export function reverseVowels(s: string): string {
	if (s.length === 1) return s;

	let l = 0,
		r = s.length - 1;

	const vowel = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
	const chars = s.split('');

	while (l < r) {
		if (vowel.has(chars[l]) && vowel.has(chars[r])) {
			[chars[l], chars[r]] = [chars[r], chars[l]];
			r--;
			l++;
			continue;
		}

		if (!vowel.has(chars[l])) l++;
		if (!vowel.has(chars[r])) r--;
	}

	return chars.join('');
}
