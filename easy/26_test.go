package easy

import "testing"

func Test26(t *testing.T) {
	testCases := []struct {
		nums         []int
		expected     int
		expectedNums []int
	}{
		{nums: []int{1, 1, 2}, expected: 2, expectedNums: []int{1, 2}},
		{nums: []int{0, 0, 1, 1, 1, 2, 2, 3, 3, 4}, expected: 5, expectedNums: []int{0, 1, 2, 3, 4}},
		{nums: []int{1}, expected: 1, expectedNums: []int{1}},
	}

	compareExpectedNums := func(nums, expectedNums []int) bool {
		if len(nums) < len(expectedNums) {
			return false
		}

		for i, exp := range expectedNums {
			if nums[i] != exp {
				return false
			}
		}

		return true
	}

	for _, tc := range testCases {
		if actual := removeDuplicates(tc.nums); actual != tc.expected || !compareExpectedNums(tc.nums, tc.expectedNums) {
			t.Errorf("FAILED => Input: %v, Expected: %v, Actual: %v", tc.nums, tc.expected, actual)
			continue
		}

		t.Logf("PASS => Input: %v", tc.nums)
	}

}
