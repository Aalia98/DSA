// https://leetcode.com/problems/delete-node-in-a-linked-list/

var deleteNode = function(node) {
    if(node == null) return;

    node.val = node.next.val;
    node.next = node.next.next;
    return;
};