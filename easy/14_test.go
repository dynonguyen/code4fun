package easy

import "testing"

func Test14(t *testing.T) {
	testCases := []struct {
		strs     []string
		expected string
	}{
		{strs: []string{"flower", "flow", "flight"}, expected: "fl"},
		{strs: []string{"dog", "racecar", "car"}, expected: ""},
		{strs: []string{"program", "program", "program"}, expected: "program"},
	}

	for _, tc := range testCases {
		if actual := longestCommonPrefix(tc.strs); actual != tc.expected {
			t.Errorf("FAILED => Expected: %v, Actual: %v", tc.expected, actual)
			continue
		}

		t.Logf("PASS => Input: %v", tc.strs)
	}
}
