// https://leetcode.com/problems/two-sum

package main

import "fmt"

// Solution 1: two loops O(n^2)
func twoSum(nums []int, target int) []int {
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

// Solution 2: Hashmap O(n)
func twoSum2(nums []int, target int) []int {
	m := make(map[int]int) // map[value][index]

	for i, value := range nums {
		if firstIndex, ok := m[target-value]; ok {
			return []int{firstIndex, i}
		}

		m[value] = i
	}

	return []int{0, 1}
}

func main() {
	fmt.Println(twoSum([]int{2, 7, 11, 15}, 9))
	fmt.Println(twoSum2([]int{2, 7, 11, 15}, 9))
}
