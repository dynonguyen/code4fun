// 9. Palindrome Number
// https://leetcode.com/problems/palindrome-number
// Pattern: Math
package easy

//lint:ignore U1000 Ignore unused function temporarily for debugging
/* Solution 1: Use slices (array)

Note:
	- n = number of digits

Algorithm:
	- Tạo 1 mảng chứa các chữ số đơn vị. x = 121 => arr = [1, 2, 1]
	- Kiểm tra các cặp đối xứng nhau 0 -> n - 1, ... (từ 0 -> n / 2)
		+ Nếu có bất kì cặp nào không bằng nhau thì return false
		+ Ngược lại là true

Complexity Analysis:
	- Time: O(n)
	- Space: O(n)

*/
func isPalindrome1(x int) bool {
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

//lint:ignore U1000 Ignore unused function temporarily for debugging
/* Solution 2: Use Math ✅

Note:
	- n = number of digits

Algorithm:
	- x < 0 => false
	- x < 10 => true
	- x chia hết cho 10 => false
	- Sử dụng toán để đảo ngược giá trị và so sánh với x /= 10

Complexity Analysis:
	- Time: O(n)
	- Space: O(1)

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
