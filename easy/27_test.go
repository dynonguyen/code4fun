package easy

import (
	"testing"
)

func Test27(t *testing.T) {
	testCases := []struct {
		nums         []int
		val          int
		expected     int
		expectedNums []int
	}{
		{nums: []int{3, 2, 2, 3}, val: 3, expected: 2, expectedNums: []int{2, 2}},
		{nums: []int{0, 1, 2, 2, 3, 0, 4, 2}, val: 2, expected: 5, expectedNums: []int{0, 1, 4, 0, 3}},
	}

	for _, tc := range testCases {
		if actual := removeElement(tc.nums, tc.val); actual != tc.expected {
			t.Errorf("FAILED => Input: %v, Expected: %v, Actual: %v", tc.nums, tc.expected, actual)
			continue
		}

		t.Logf("PASS => Input: %v", tc.nums)
	}
}
