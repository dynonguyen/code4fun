package easy

import "testing"

func Test20(t *testing.T) {
	testCases := []struct {
		s        string
		expected bool
	}{
		{s: "()[]{}", expected: true},
		{s: "([{{{}}}])", expected: true},
		{s: "(]", expected: false},
		{s: "([", expected: false},
		{s: "{[()]}", expected: true},
		{s: "(([]))", expected: true},
		{s: "(((())))", expected: true},
		{s: "{[}]}", expected: false},
		{s: "((}}})", expected: false},
		{s: "([)]", expected: false},
	}

	for _, tc := range testCases {
		if actual := isValidParentheses(tc.s); actual != tc.expected {
			t.Errorf("FAILED => Expected: %v, Actual: %v", tc.expected, actual)
			continue
		}

		t.Logf("PASS => Input: %v", tc.s)
	}
}
