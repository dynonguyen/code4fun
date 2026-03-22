package easy

import "testing"

func Test268(t *testing.T) {
	tests := []struct {
		name     string
		nums     []int
		expected int
	}{
		{
			name:     "missing number in the middle",
			nums:     []int{3, 0, 1},
			expected: 2,
		},
		{
			name:     "missing last number",
			nums:     []int{0, 1},
			expected: 2,
		},
		{
			name:     "missing first number (0)",
			nums:     []int{1, 2},
			expected: 0,
		},
		{
			name:     "single element missing 0",
			nums:     []int{0},
			expected: 1,
		},
		{
			name:     "single element missing 1",
			nums:     []int{1},
			expected: 0,
		},
		{
			name:     "larger array missing in middle",
			nums:     []int{9, 6, 4, 2, 3, 5, 7, 0, 1},
			expected: 8,
		},
		{
			name:     "consecutive numbers missing last",
			nums:     []int{0, 1, 2, 3, 4, 5, 6, 7, 8},
			expected: 9,
		},
		{
			name:     "unordered array",
			nums:     []int{2, 0, 3, 1},
			expected: 4,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			got := missingNumber(tt.nums)
			if got != tt.expected {
				t.Errorf("missingNumber(%v) = %d; want %d", tt.nums, got, tt.expected)
			}
		})
	}
}
