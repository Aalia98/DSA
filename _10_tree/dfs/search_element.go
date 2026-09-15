type TreeNode struct {
	Val int
	Left *TreeNode
	Right *TreeNode
}

func search(root *TreeNode, target int) bool {

    if root == nil {
        return false
    }

    if root.Val == target {
        return true
    }

    return search(root.Left, target) || search(root.Right, target)
}

Time:  O(n)
Space: O(h)