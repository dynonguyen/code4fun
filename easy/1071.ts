// https://leetcode.com/problems/greatest-common-divisor-of-strings
// 1071. Greatest Common Divisor of Strings

function gcd(a: number, b: number): number {
	while (b !== 0) {
		const r = a % b;
		a = b;
		b = r;
	}

	return a;
}

export function gcdOfStrings(str1: string, str2: string): string {
	const len1 = str1.length,
		len2 = str2.length;

	const tLen = gcd(len1, len2);
	const t = str1.slice(0, tLen);

	for (let i = tLen; i < len1; i += tLen) {
		const tmp = str1.slice(i, i + tLen);
		if (tmp !== t) return '';
	}

	for (let i = 0; i < len2; i += tLen) {
		const tmp = str2.slice(i, i + tLen);
		if (tmp !== t) return '';
	}

	return t;
}
