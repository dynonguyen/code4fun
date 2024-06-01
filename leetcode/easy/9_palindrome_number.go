// https://leetcode.com/problems/palindrome-number/
package easy

/*
Use slices
n = number of digits
Time: O(n)
Space: O(n)
*/
func isPalindromeBad(x int) bool {
	if x < 0 {
		return false
	}

	if x < 10 {
		return true
	}

	nums := make([]int, 0, 10)

	for x > 0 {
		nums = append(nums, x%10)
		x /= 10
	}

	for i, n := 0, len(nums); i < n/2; i++ {
		if nums[i] != nums[n-1-i] {
			return false
		}
	}

	return true
}

/*
Use only math
n = number of digits
Time: O(n) -> O(n / 2)
Space: O(1)
*/
func isPalindrome(x int) bool {
	if x < 0 {
		return false
	}

	if x < 10 {
		return true
	}

	if x%10 == 0 {
		return false
	}

	reverse := 0

	for x > 0 {
		reverse = reverse*10 + x%10

		x /= 10

		if reverse == x || reverse == x/10 {
			return true
		}
	}

	return false
}
