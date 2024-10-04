// https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/
// 2491. Divide Players Into Teams of Equal Skill

/* Solution Two pointer + sorting

Complexity Analysis:
  - Time: O(n * log(n)) = sort()
  - Space: O(n)

*/
export function dividePlayers(skill: number[]): number {
	const len = skill.length;

	if (len === 2) return skill[0] * skill[1];

	const sorted = skill.sort((a, b) => a - b);
	const totalSkill = sorted[0] + sorted[len - 1];
	let sum = sorted[0] * sorted[len - 1],
		l = 1,
		r = len - 2;

	while (l < r) {
		if (sorted[l] + sorted[r] !== totalSkill) return -1;
		sum += sorted[l++] * sorted[r--];
	}

	return sum;
}
