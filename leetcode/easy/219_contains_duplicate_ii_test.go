package easy

import "testing"

func Test219ContainNearbyDuplicate(t *testing.T) {
	testCases := []struct {
		nums     []int
		k        int
		expected bool
	}{
		{nums: []int{1, 2, 3, 1}, k: 3, expected: true},
		{nums: []int{1, 0, 1, 1}, k: 1, expected: true},
		{nums: []int{1, 2, 3, 1, 2, 3}, k: 2, expected: false},
	}

	for i, tc := range testCases {
		if actual := containsNearbyDuplicate(tc.nums, tc.k); actual != tc.expected {
			t.Errorf("FAILED => Case: %d, Expected: %v, Actual: %v", i+1, tc.expected, actual)
			continue
		}

		t.Logf("PASS => Case: %d", i+1)
	}
}
