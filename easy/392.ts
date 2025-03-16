// 392. Is Subsequence
// https://leetcode.com/problems/is-subsequence/description

/* Solution

- Sử dụng 2 con trỏ cùng chiều p1, p2.
- p1 đi theo chuỗi s, p2 theo chuỗi t. Nếu s[p1] = t[p2] thì p1++
=> true khi p1 = s.length

Complexity Analysis:
  - Time: O(t.length)
  - Space: O(1)

*/
export function isSubsequence(s: string, t: string): boolean {
	const sLen = s.length,
		tLen = t.length;

	if (sLen === 0) return true;
	if (sLen > tLen) return false;

	let p1 = 0,
		p2 = 0;

	for (; p2 < tLen; ++p2) {
		if (s[p1] === t[p2]) {
			p1++;
			if (p1 === sLen) return true;
		}
	}

	return false;
}
