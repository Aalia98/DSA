type TreeNode struct {
	Val int
	Left *TreeNode
	Right *TreeNode
}

func postorderTraversal(root *TreeNode) []int {
    result := []int{}

    var postorder func(node *TreeNode)

    postorder = func(node *TreeNode) {
        if node == nil {
            return
        }

        // Left
        postorder(node.Left)

        // Right
        postorder(node.Right)

        // Root
        result = append(result, node.Val)
    }

    postorder(root)

    return result
}

Time:  O(n)
Space: O(h)