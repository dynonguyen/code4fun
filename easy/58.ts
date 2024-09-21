// Pattern: string
export function lengthOfLastWord(s: string): number {
	const len = s.length;
	let count = 0;

	for (let i = len - 1; i >= 0; --i) {
		const c = s[i];

		if (c !== ' ') count++;
		if (c === ' ' && count > 0) break;
	}

	return count;
}
