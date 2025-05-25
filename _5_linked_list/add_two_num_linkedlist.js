// https://leetcode.com/problems/add-two-numbers/submissions/1632323301/

var addTwoNumbers = function(l1, l2) {
    let dummyNode = new ListNode(-1);
    let curr = dummyNode;
    let t1 = l1;
    let t2 = l2;
    let carry = 0;

    while(t1 != null || t2 != null) {
        let sum = carry;
        if(t1) sum += t1.val;
        if(t2) sum += t2.val;

        curr.next = new ListNode(sum % 10);
        carry = Math.floor(sum / 10);
        curr = curr.next;

        if(t1) t1 = t1.next;
        if(t2) t2 = t2.next;
    }
    if(carry) {
        curr.next = new ListNode(carry);
    }
    return dummyNode.next;
};