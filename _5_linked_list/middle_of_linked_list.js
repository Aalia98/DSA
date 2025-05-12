// https://leetcode.com/problems/middle-of-the-linked-list/description/

// using size, brute force
var middleNode = function(head) {
    let curr = head;
    let count = 0;
    while(curr) {
        count++;
        curr = curr.next;
    }
    let mid = Math.floor(count/2);
    curr = head;
    while(mid > 0) {
        curr = curr.next;
        mid--;
    }
    return curr;
};

// optimized
var middleNode = function(head) {
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}