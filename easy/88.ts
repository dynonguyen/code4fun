// 88. Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/description/
function merge(nums1: number[], m: number, nums2: number[], n: number) {
	const result: number[] = [];

	let i = 0,
		j = 0;

	while (i < m && j < n) {
		const num1 = nums1[i],
			num2 = nums2[j];

		if (num1 > num2) {
			result.push(num2);
			j++;
		} else if (num1 < num2) {
			result.push(num1);
			i++;
		} else {
			result.push(num1, num2);
			i++;
			j++;
		}
	}

	if (i < m) result.push(...nums1.slice(i, m));
	if (j < n) result.push(...nums2.slice(j, n));

	result.forEach((num, index) => (nums1[index] = num));
}

merge([2, 0], 1, [1], 1);
