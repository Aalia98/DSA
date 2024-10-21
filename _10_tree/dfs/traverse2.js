class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function preOrder(root) {
    // root, left, right
    if(root == null) return
    console.log(root.data);
    preOrder(root.left);
    preOrder(root.right)
}

function postOrder(root) {
    // left, right, root
    if(root == null) return
    preOrder(root.left);
    preOrder(root.right);
    console.log(root.data);
}

function inOrder(root) {
    // left, root, right
    if(root == null) return
    preOrder(root.left);
    console.log(root.data);
    preOrder(root.right);
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.left.left = new Node(5);
root.left.left.right = new Node(6);

console.log("PreOrder");
preOrder(root);

console.log("PostOrder");
postOrder(root);

console.log("InOrder");
inOrder(root)