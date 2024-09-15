// 1. Two sum
// https://leetcode.com/problems/two-sum

package easy

//lint:ignore U1000 Ignore unused function temporarily for debugging
/* Solution 1: Brute force

Algorithm:
	- Sử dụng 2 vòng lặp để duyệt qua từng phần tử trong mảng.
	- Kiểm tra xem tổng của 2 phần tử có bằng target hay không.

Complexity Analysis:
	- Time: O(n^2)
	- Space: O(1)

*/
func twoSum1(nums []int, target int) []int {
	len := len(nums)

	for i := 0; i < len-1; i++ {
		for j := i + 1; j < len; j++ {
			if nums[i]+nums[j] == target {
				return []int{i, j}
			}
		}
	}

	return []int{0, 1}
}

//lint:ignore U1000 Ignore unused function temporarily for debugging
/* Solution 2: Hash map

Algorithm:
  - Sử dụng hash map với key = arr[i] và value = i
  - Tìm cặp value phù hợp bằng cách duyệt qua từng phần tử trong mảng, kiểm tra xem `target - arr[i]` có tồn tại trong hash map không.
		- Nếu có thì trả về index của 2 phần tử đó.
		- Nếu không thì thêm phần tử đó vào hash map.

Complexity Analysis:
  - Time: N/A
  - Space: N/A
*/
func twoSum(nums []int, target int) []int {
	m := make(map[int]int) // map[value][index]

	for i, value := range nums {
		if firstIndex, ok := m[target-value]; ok {
			return []int{firstIndex, i}
		}

		m[value] = i
	}

	return []int{0, 1}
}
