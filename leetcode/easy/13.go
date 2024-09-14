// 13. Roman to Integer
// https://leetcode.com/problems/roman-to-integer
package easy

var romanMap = map[byte]int{
	'I': 1,
	'V': 5,
	'X': 10,
	'L': 50,
	'C': 100,
	'D': 500,
	'M': 1000,
}

// O(n)
func romanToInt(s string) int {
	sum := 0

	for i, len := 0, len(s); i < len; {
		current := romanMap[s[i]]

		if i != len-1 {
			if next := romanMap[s[i+1]]; current < next {
				sum += (next - current)
				i += 2
				continue
			}
		}

		sum += current
		i++
	}

	return sum
}
