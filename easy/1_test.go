package easy

import (
	"slices"
	"testing"
)

func Test1(t *testing.T) {
	testCases := []struct {
		nums     []int
		target   int
		expected []int
	}{
		{nums: []int{2, 7, 11, 15}, target: 9, expected: []int{0, 1}},
		{nums: []int{3, 2, 4}, target: 6, expected: []int{1, 2}},
		{nums: []int{3, 3}, target: 6, expected: []int{0, 1}},
	}

	for _, tc := range testCases {
		actual := twoSum(tc.nums, tc.target)

		slices.Sort(actual)
		slices.Sort(tc.expected)

		if !slices.Equal(actual, tc.expected) {
			t.Errorf("FAILED => Expected: %v, Actual: %v", tc.expected, actual)
			continue
		}

		t.Logf("PASS => Input: %v, %v", tc.nums, tc.target)
	}
}
