package medium

type ListNode struct {
	Val  int
	Next *ListNode
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	head := &ListNode{
		Val:  0,
		Next: nil,
	}

	tail := head
	carry := 0

	for l1 != nil || l2 != nil || carry > 0 {
		sum := carry

		if l1 != nil {
			sum += l1.Val
			l1 = l1.Next
		}

		if l2.Next != nil {
			sum += l2.Val
			l2 = l2.Next
		}

		tail.Next = &ListNode{Val: sum % 10, Next: nil}
		tail = tail.Next

		carry = sum / 10
	}

	return head.Next
}
