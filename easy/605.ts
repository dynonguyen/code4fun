// 605. Can Place Flowers
// https://leetcode.com/problems/can-place-flowers

/* Solution 

- Lặp qua từng ô đất, nếu ô nào trống và 2 ô kế bên nó cũng trống thì trồng cây vào đó (đỗi value = 1) và giảm số cây đi (n--)

Complexity Analysis:
  - Time: O(n)
  - Space: O(1)

*/
export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
	if (n === 0) return true;

	const l = flowerbed.length;

	for (let i = 0; i < l; ++i) {
		if (flowerbed[i] === 0) {
			if ((i === 0 || flowerbed[i - 1] === 0) && (i === l - 1 || flowerbed[i + 1] === 0)) {
				flowerbed[i] = 1;
				n--;
			}
			if (n === 0) return true;
		}
	}

	return false;
}
