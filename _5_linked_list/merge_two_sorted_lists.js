// https://leetcode.com/problems/merge-two-sorted-lists/description/

var mergeTwoLists = function(list1, list2) {
    if(list1 == null || list2 == null) {
        return list1 == null ? list2 : list1;
    }

    if(list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};