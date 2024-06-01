package easy

import "testing"

func TestPalindromeNumber(t *testing.T) {
	testCases := []struct {
		x        int
		expected bool
	}{
		{x: 121, expected: true},
		{x: -121, expected: false},
		{x: 10, expected: false},
		{x: 100, expected: false},
		{x: 0, expected: true},
		{x: 11, expected: true},
		{x: -11, expected: false},
		{x: 12321, expected: true},
		{x: -12321, expected: false},
		{x: 987654321, expected: false},
		{x: 123454321, expected: true},
		{x: 10001, expected: true},
		{x: -10001, expected: false},
		{x: 1234321, expected: true},
		{x: -1234321, expected: false},
		{x: 9876789, expected: true},
		{x: -9876789, expected: false},
	}

	for _, tc := range testCases {
		if actual := isPalindrome(tc.x); actual != tc.expected {
			t.Errorf("FAILED => Input: %v, Expected: %v, Actual: %v", tc.x, tc.expected, actual)
			continue
		}

		t.Logf("PASS => Input: %v", tc.x)
	}

}
