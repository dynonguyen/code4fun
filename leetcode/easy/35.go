// 35. Search Insert Position
// https://leetcode.com/problems/search-insert-position

package easy

// [1,3,5,6]
/*
	t = 7

	l = 0, r = 3, m = (l+r)/2 = 1 (3) < t
	l = 2, r = 3, m = 2 (5) < t
	l = 3, r = 3, m = 3 (6) < t
	l = 4, r = 3 (stop)

*/
func searchInsert(nums []int, target int) int {
	n := len(nums)

	if nums[n-1] < target {
		return n
	}

	l, r := 0, n-1

	for l <= r {
		m := (l + r) / 2
		mVal := nums[m]

		if mVal == target {
			return m
		} else if mVal < target {
			l = m + 1
		} else {
			r = m - 1
		}
	}

	return l
}
