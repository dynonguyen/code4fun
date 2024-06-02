// https://leetcode.com/problems/two-sum
package easy

// Bad solution: two loops O(n^2)
//
//lint:ignore U1000 Ignore unused function temporarily for debugging
func twoSumWithLoops(nums []int, target int) []int {
	len := len(nums)

	for i := 0; i < len-1; i++ {
		for j := i + 1; j < len; j++ {
			if nums[i]+nums[j] == target {
				return []int{i, j}
			}
		}
	}

	return []int{0, 1}
}

// Good solution: Hashmap O(n) => Main solution
func twoSum(nums []int, target int) []int {
	m := make(map[int]int) // map[value][index]

	for i, value := range nums {
		if firstIndex, ok := m[target-value]; ok {
			return []int{firstIndex, i}
		}

		m[value] = i
	}

	return []int{0, 1}
}
