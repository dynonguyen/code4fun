// https://leetcode.com/problems/ransom-note/description/
// 383. Ransom Note

export function canConstruct(ransomNote: string, magazine: string): boolean {
	const lenR = ransomNote.length,
		lenM = magazine.length;

	if (lenR > lenM) return false;

	const cMap = new Map<string, number>();

	for (let c of ransomNote) {
		cMap.set(c, (cMap.get(c) || 0) + 1);
	}

	for (let c of magazine) {
		if (cMap.has(c)) {
			let count = cMap.get(c)! - 1;

			if (count === 0) cMap.delete(c);
			else cMap.set(c, count);

			if (cMap.size === 0) return true;
		}
	}

	return false;
}
