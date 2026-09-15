type TreeNode struct {
	Val int
	Left *TreeNode
	Right *TreeNode
}

func compareTrees(p *TreeNode, q *TreeNode) bool {

	if p == nil && q == nil {
		return true
	}
	if p == nil || q == nil {
		return false
	}

	if p.Val != q.Val {
		return false
	}

	return compareTrees(p.Left, q.Left) && compareTrees(p.Right, q.Right)
}

Time:  O(n)
Space: O(h)