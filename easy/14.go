// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix
package easy

import (
	"cmp"
	"slices"
)

//lint:ignore U1000 Ignore unused function temporarily for debugging
/* Solution 1: Brute force

Note:
	- n: length of strs
	- m: length of shortest strs

Algorithm:
	- Tìm chuỗi có độ dài ngắn nhất trong chuỗi -> longest string không thể dài hơn string ngắn nhất này.
	- Kiểm tra từ ký tự trong shortest string với từ ký tự tại vị trí tương ứng trong các chuỗi còn lại.
		+ If có bất kỳ vị trí nào != ký tự hiện tại của shortest thì trả về chuỗi đã kiểm tra.
		+ Ngược lại, tăng vị trí hiện tại


Complexity Analysis:
	- Time: O(n*m)
	- Space: O(m)

*/
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
