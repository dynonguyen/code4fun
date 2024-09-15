// 26. Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
package easy

//lint:ignore U1000 Ignore unused function temporarily for debugging
/* Solution 1: Brute force

Algorithm:

Complexity Analysis:
	- Time: O(n)
	- Space: O(1)

*/
func removeDuplicates(nums []int) int {
	i := 0

	for j, len := 1, len(nums); j < len; j++ {
		if nums[i] != nums[j] {
			i++
			nums[i] = nums[j]
		}
	}

	return i + 1
}
