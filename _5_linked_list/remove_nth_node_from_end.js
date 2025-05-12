// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

// brute
var removeNthFromEnd = function(head, n) {
     if(head === null) return null;

     let count = 0;
     let curr = head;

     while(curr) {
        count++;
        curr = curr.next;
     }
     if(count === n) {
        let newHead = head.next;
        head = null;
        return newHead;
     }
     let res = count - n;
     curr = head;

     while(curr) {
        res--;
        if(res === 0) {
            break;
        }
        curr = curr.next;
     }
     let delNode = curr.next;
     curr.next = curr.next.next;
     delNode = null;
     return head;
};

// optimized
var removeNthFromEnd = function(head, n) {
    // optimized
    let fast = head;
    let slow = head;

    for(let i = 0; i < n; i++) {
        fast = fast.next;
    }
    if(fast === null) return head.next;
    
    while(fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    let delNode = slow.next;
    slow.next = slow.next.next;
    delNode = null;
    return head;
}