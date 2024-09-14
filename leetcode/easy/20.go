// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses
package easy

var bracket = map[byte]byte{
	']': '[',
	')': '(',
	'}': '{',
}

// O(n), n = length of s
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
