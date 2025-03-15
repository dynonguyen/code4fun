// 151. Reverse Words in a String
// https://leetcode.com/problems/reverse-words-in-a-string/

/* Solution 

- Tách các từ bởi khoảng trống words, reverse mảng words này lại

Complexity Analysis:
	- Time: O(n)
	- Space: O(n)

*/
export function reverseWords(s: string): string {
	const words: string[] = [];

	let sub = '';
	for (const c of s) {
		if (c !== ' ') {
			sub += c;
			continue;
		}

		if (sub) {
			words.push(sub);
			sub = '';
		}
	}

	if (sub) words.push(sub);

	return words.reverse().join(' ');

	// Shorthand
	// return s.split(' ').filter(s => s.trim()).reverse().join(' ')
}

// Follow-up: If the string data type is mutable in your language, can you solve it in-place with O(1) extra space?
