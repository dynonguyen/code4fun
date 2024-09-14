// 219. Contains Duplicate II
// https://leetcode.com/problems/contains-duplicate-ii/description/

package easy

import "fmt"

func containsNearbyDuplicate(nums []int, k int) bool {
	existed := map[int]int{}

	for i, num := range nums {
		fmt.Println(existed)

		if existedIndex, ok := existed[num]; ok && i-existedIndex <= k {
			return true
		}

		existed[num] = i
	}

	return false
}
