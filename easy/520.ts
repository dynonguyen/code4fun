// Pattern: string
export function detectCapitalUse(word: string): boolean {
	let nLower = 0,
		nUpper = 0,
		isFirstUpper = false;

	const len = word.length;
	for (let i = 0; i < len; ++i) {
		const code = word.charCodeAt(i);

		// charCode "a" = 97
		if (code > 96) {
			nLower++;
		} else {
			nUpper++;
			if (i === 0) isFirstUpper = true;
		}

		if (nUpper > 1 && nLower >= 1) return false;
		if (nUpper >= 1 && !isFirstUpper) return false;
	}

	return true;
}
