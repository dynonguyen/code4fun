package main

import (
	"fmt"
	"slices"
)

func removeDuplicates(nums []int) int {
	noDupNums := []int{}

	for _, val := range nums {
		if !slices.Contains(noDupNums, val) {
			noDupNums = append(noDupNums, val)
		}
	}

	nums = noDupNums

	return len(noDupNums)
}

func main() {
	nums := []int{1, 1, 2}

	fmt.Println(removeDuplicates(nums), nums)
}
