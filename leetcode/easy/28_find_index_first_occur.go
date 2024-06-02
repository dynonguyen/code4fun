// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
package easy

func strStr(haystack string, needle string) int {
	hLen, nLen := len(haystack), len(needle)

	if nLen > hLen {
		return -1
	}

	for i, hc := range haystack {
		if hc == rune(needle[0]) && (hLen-i) >= nLen {
			for j, nc := range needle {
				if nc != rune(haystack[i+j]) {
					break
				} else if j == nLen-1 {
					return i
				}
			}
		}
	}

	return -1
}
