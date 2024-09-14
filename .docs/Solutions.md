## [1. Two Sum](https://leetcode.com/problems/two-sum)

<details>
<summary><b>Solution 1:</b> Bruce force 😑</summary>

- **Ý tưởng:**

  - Sử dụng 2 vòng lặp để duyệt qua từng phần tử trong mảng và kiểm tra xem tổng của 2 phần tử có bằng target hay không.

- **Độ phức tạp:**

  - Time: `O(n^2)`
  - Memory: `O(1)`

```go
func twoSum(nums []int, target int) []int {
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
```

</details>

<details>
<summary><b>Solution 2:</b> Hash map 😍</summary>

- **Ý tưởng:**

  - Sử dụng hash map với `key` = `arr[i]` và `value` = `i`
  - Tìm cặp value phù hợp bằng cách duyệt qua từng phần tử trong mảng, kiểm tra xem `target - arr[i]` có tồn tại trong hash map không.
    - Nếu có thì trả về index của 2 phần tử đó.
    - Nếu không thì thêm phần tử đó vào hash map.

- **Độ phức tạp:**

  - Time: `O(n)`
  - Memory: `O(n)`

```go
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
```

</details>

> **Tags**: Array, Hash table
