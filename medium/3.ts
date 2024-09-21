/* Solution: Variable sliding window

Complexity Analysis:
  - Time: O(n)
  - Space: O(n) -> appearedMap

*/
export function lengthOfLongestSubstring(s: string): number {
	const len = s.length;
	let maxSubLen = 0;
	let l = 0;

	// Lưu lại các ký tự đã xuất hiện trong substring (Dùng map để giảm access O(1))
	const appearedMap = new Map<string, number>(); // [char, index of char]

	// Sliding window
	for (let r = 0; r < len; ++r) {
		const c = s[r];

		// Nếu ký tự đã xuất hiện thì lấy substring length (chỉ tính các ký tự từ vị trí left)
		if (appearedMap.has(c) && appearedMap.get(c)! >= l) {
			l = appearedMap.get(c)! + 1;
		}

		appearedMap.set(c, r);
		maxSubLen = Math.max(maxSubLen, r - l + 1);
	}

	return maxSubLen;
}
