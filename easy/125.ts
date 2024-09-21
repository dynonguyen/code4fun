/* Solution: Two pointers

Complexity Analysis:
	- Time: O(n) -> O(3*n)
	- Space: O(n)
*/
export function isPalindrome1(s: string): boolean {
	// Remove all non-alphanumeric characters, lowercase letters -> O(n)
	const lowerS = s.toLowerCase().replace(/[^a-z0-9]/g, '');

	const sLen = lowerS.length;

	// Check if empty string or phrase has 1 char => true
	if (sLen <= 1) return true;

	// Two pointers i, j
	let i = 0,
		j = sLen - 1;

	// Check from 2 directions until the middle of the string, if any characters are different then return false O(n)
	while (i < j) {
		if (lowerS[i++] !== lowerS[j--]) return false;
	}

	return true;
}

/* Solution: Two pointers

Note:
	- Reduce algorithm complexity from O(3n) => O(n) and space from O(n) -> O(1) by calculating the string directly in the loop, instead of processing the string first.

Complexity Analysis:
	- Time: O(n)
	- Space: O(1)

*/

function isAlphanumeric(c: string) {
	return /[a-z0-9]/.test(c);
}

export function isPalindrome(s: string): boolean {
	const sLen = s.length;

	// Check if empty string or phrase has 1 char => true
	if (sLen <= 1) return true;

	// Two pointers i, j
	let i = 0,
		j = sLen - 1;

	// Check from 2 directions until the middle of the string, if any characters are different then return false O(n)
	while (i < j) {
		const lowerI = s[i].toLowerCase(),
			lowerJ = s[j].toLowerCase();

		const t1 = isAlphanumeric(lowerI),
			t2 = isAlphanumeric(lowerJ);

		if (!t1) {
			i++;
			continue;
		}

		if (!t2) {
			j--;
			continue;
		}

		if (lowerI !== lowerJ) return false;

		i++;
		j--;
	}

	return true;
}
