// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses
package easy

var bracket = map[byte]byte{
	']': '[',
	')': '(',
	'}': '{',
}

//lint:ignore U1000 Ignore unused function temporarily for debugging
/* Solution 1: Stack + Hashmap

Note:
	- n = length of s

Algorithm:
	- Nếu là ký tự mở thì push và stack
	- Nếu ký tự đóng thì pop từ stack ra, kiểm tra trong hashmap xem có match với ký tự mở không, nếu không thì return false

Complexity Analysis:
	- Time: O(n)
	- Space: O(n)

*/
func isValidParentheses(s string) bool {
	stack := []byte{}

	for _, c := range s {
		if c == '{' || c == '(' || c == '[' {
			stack = append(stack, byte(c))
			continue
		}

		sLen := len(stack)

		if sLen == 0 {
			return false
		}

		last := stack[sLen-1]
		if bracket[byte(c)] != last {
			return false
		}

		stack = stack[:sLen-1]
	}

	return len(stack) == 0
}
