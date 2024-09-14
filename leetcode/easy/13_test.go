package easy

import "testing"

func Test13RomanToInt(t *testing.T) {
	testCases := []struct {
		s        string
		expected int
	}{
		{s: "III", expected: 3},
		{s: "LVIII", expected: 58},
		{s: "I", expected: 1},
		{s: "IV", expected: 4},
		{s: "IX", expected: 9},
		{s: "X", expected: 10},
		{s: "XII", expected: 12},
		{s: "XXV", expected: 25},
		{s: "XL", expected: 40},
		{s: "L", expected: 50},
		{s: "XC", expected: 90},
		{s: "C", expected: 100},
		{s: "MCMXCIV", expected: 1994},
	}

	for _, tc := range testCases {
		if actual := romanToInt(tc.s); actual != tc.expected {
			t.Errorf("FAILED => Input: %v, Expected: %v, Actual: %v", tc.s, tc.expected, actual)
			continue
		}

		t.Logf("PASS => Input: %v", tc.s)
	}
}
