// 268. Missing Number
// https://leetcode.com/problems/missing-number/description/

package easy

/*
Space: O(1)
Time: O(n)
*/
func missingNumber(nums []int) int {
	n := len(nums)

	expectedSum := (n * (n + 1)) / 2
	actualSum := 0

	for _, num := range nums {
		actualSum += num
	}

	return expectedSum - actualSum
}
