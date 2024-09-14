package easy

import "testing"

func Test28FindIndex(t *testing.T) {
	testCases := []struct {
		haystack, needle string
		expected         int
	}{
		{haystack: "sadbutsad", needle: "sad", expected: 0},
		{haystack: "leetcode", needle: "leeto", expected: -1},
		{haystack: "mississippi", needle: "issip", expected: 4},
		{haystack: "aaa", needle: "aaaa", expected: -1},
		{haystack: "a", needle: "a", expected: 0},
	}

	for _, tc := range testCases {
		if actual := strStr(tc.haystack, tc.needle); actual != tc.expected {
			t.Errorf("FAILED => Input: %v %v, Expected: %v, Actual: %v", tc.haystack, tc.needle, tc.expected, actual)
			continue
		}

		t.Logf("PASS => Input: %v %v", tc.haystack, tc.needle)
	}

}
