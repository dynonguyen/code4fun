// https://leetcode.com/problems/search-insert-position

package easy

import "testing"

func Test35(t *testing.T) {
	testCases := []struct {
		nums             []int
		target, expected int
	}{
		{nums: []int{1, 3, 5, 6}, target: 5, expected: 2},
		{nums: []int{1, 3, 5, 6}, target: 2, expected: 1},
		{nums: []int{1, 3, 5, 6}, target: 7, expected: 4},
	}

	for i, tc := range testCases {
		if actual := searchInsert(tc.nums, tc.target); actual != tc.expected {
			t.Errorf("FAILED => Case: %d, Expected: %v, Actual: %v", i+1, tc.expected, actual)
			continue
		}

		t.Logf("PASS => Case: %d", i+1)
	}
}
