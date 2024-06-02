package easy

import (
	"slices"
	"testing"
)

func nodeToSortedSlice(node *ListNode) (s []int) {
	p := node

	for {
		if p == nil {
			break
		}

		s = append(s, p.Val)
		p = p.Next
	}

	slices.Sort(s)

	return
}

func Test21MergeTwoSortedList(t *testing.T) {
	testCases := []struct {
		list1, list2, expected *ListNode
	}{
		{
			list1:    &ListNode{Val: 1, Next: &ListNode{Val: 2, Next: &ListNode{Val: 4}}},
			list2:    &ListNode{Val: 1, Next: &ListNode{Val: 3, Next: &ListNode{Val: 4}}},
			expected: &ListNode{Val: 1, Next: &ListNode{Val: 1, Next: &ListNode{Val: 2, Next: &ListNode{Val: 3, Next: &ListNode{Val: 4, Next: &ListNode{Val: 4}}}}}},
		},
	}

	for i, tc := range testCases {
		if actual, expected := nodeToSortedSlice(mergeTwoLists(tc.list1, tc.list2)), nodeToSortedSlice(tc.expected); !slices.Equal(actual, expected) {
			t.Errorf("FAILED => Test case: %d, Expected: %v, Actual: %v", i, expected, actual)
			continue
		}

		t.Logf("PASS => Test case: %d", i)
	}
}
