// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix
package easy

import (
	"cmp"
	"slices"
)

// O(n * m)
// n: length of strs
// m: length of strs[0]
func longestCommonPrefix(strs []string) string {
	result := ""

	minLenItem := slices.MinFunc(strs, func(a, b string) int {
		return cmp.Compare(a, b)
	})

	for i, c := range minLenItem {
		for _, item := range strs {
			if rune(item[i]) != c {
				return result
			}
		}

		result += string(c)
	}

	return result
}
