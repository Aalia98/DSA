type TreeNode struct {
	Val int
	Left *TreeNode
	Right *TreeNode
}

func inorderTraversal(root *TreeNode) []int {
    result := []int{}

    var inorder func(node *TreeNode)

    inorder = func(node *TreeNode) {
        if node == nil {
            return
        }

        // Left
        inorder(node.Left)

        // Root
        result = append(result, node.Val)

        // Right
        inorder(node.Right)
    }

    inorder(root)

    return result
}

Time:  O(n)
Space: O(h)