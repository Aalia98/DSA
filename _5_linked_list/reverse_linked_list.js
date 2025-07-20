// https://leetcode.com/problems/reverse-linked-list/

// brute force, TC - O(2n), SC - O(n)
var reverseList = function(head) {
    let st = [];
    let curr = head;

    while(curr) {
        st.push(curr.val);
        curr = curr.next;
    }
    curr = head;
    while(curr) {
        curr.val = st[st.length-1];
        st.pop();
        curr = curr.next;
    }
    return head;
};

// better, TC - O(2n), SC - O(1)
var reverseList = function(head) {
    let prev = null;
    let curr = head;

    while(curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};