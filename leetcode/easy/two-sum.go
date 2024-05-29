// https://leetcode.com/problems/two-sum

package main

import "fmt"

func twoSum(nums []int, target int) [2]int {
	fmt.Println(nums, target)

	return [2]int{0, 1}
}

func main() {
	fmt.Println(twoSum([]int{3, 2, 4}, 6))
}
