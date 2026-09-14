type TreeNode struct {
	Val int
	Left *TreeNode
	Right *TreeNode
}

func preorderTraversal(root *TreeNode) []int {
    result := []int{}

    var preorder func(node *TreeNode)

    preorder = func(node *TreeNode) {
        if node == nil {
            return
        }

        // Root
        result = append(result, node.Val)

        // Left
        preorder(node.Left)

        // Right
        preorder(node.Right)
    }

    preorder(root)

    return result
}

Time:  O(n)
Space: O(h)