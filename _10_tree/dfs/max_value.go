type TreeNode struct {
	Val int
	Left *TreeNode
	Right *TreeNode
}

func maxValue(root *TreeNode) int {

	if root == nil {
		return 0
	}

	leftMax := maxValue(root.Left)
	rightMax := maxValue(root.Right)

	maxi := root.Val

	if leftMax > maxi {
		maxi = leftMax
	}

	if rightMax > maxi {
		maxi = rightMax
	}

	return maxi
}

Time:  O(n)
Space: O(h)