// 27. Remove Element
// https://leetcode.com/problems/remove-element/description/
package easy

func removeElement(nums []int, val int) int {
	i := 0

	for _, num := range nums {
		if num != val {
			nums[i] = num
			i++
			continue
		}
	}

	return i
}
