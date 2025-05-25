// https://leetcode.com/problems/intersection-of-two-linked-lists/description/

// brute force
var getIntersectionNode = function(headA, headB) {
    while(headB) {
        let temp = headA;
        while(temp) {
            if(temp == headB) return headB;
            temp = temp.next;
        }
        headB = headB.next;
    }
    return null;
};

// better using map
var getIntersectionNode = function(headA, headB) {
    const map = new Map();
    let temp = headA;
    while(temp) {
        map.set(temp, 1);
        temp = temp.next;
    }
    temp = headB;
    while(temp) {
        if(map.has(temp)) return temp;
        temp = temp.next;
    }
    return null;
}

// using difference in length
var getIntersectionNode = function(headA, headB) {
    function getLength(head) {
        let count = 0;
        while (head) {
            count++;
            head = head.next;
        }
        return count;
    }

    let lenA = getLength(headA);
    let lenB = getLength(headB);

    while (lenA > lenB) {
        headA = headA.next;
        lenA--;
    }

    while (lenB > lenA) {
        headB = headB.next;
        lenB--;
    }

    while (headA && headB) {
        if (headA === headB) return headA;
        headA = headA.next;
        headB = headB.next;
    }

    return null;
}

// optimized
var getIntersectionNode = function(headA, headB) {
    let t1 = headA;
    let t2 = headB;
    while(t1 != t2) {
        t1 = t1 == null ? headB: t1.next;
        t2 = t2 == null ? headA: t2.next;
    }
    return t1;
}