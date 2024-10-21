class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function bfs(root) {
  if (root === null) return;

  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let node = queue.shift();
    console.log(node.data + " ");

    if (node.left !== null) queue.push(node.left);
    if (node.right !== null) queue.push(node.right);
  }
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.left.left = new Node(5);
root.left.left.right = new Node(6);

bfs(root);
