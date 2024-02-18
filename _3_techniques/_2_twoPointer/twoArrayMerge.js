// https://www.codingninjas.com/studio/problems/merge-two-sorted-arrays-without-extra-space_6898839
var mergeTwoLists = function(list1, list2) {
    
let i = 0, j = 0;
    let ans = [];
    
    while(i < list1.length && j < list2.length) {
        if(list1[i] > list2[j]) {
            ans.push(list2[j]);
            j++;
        }else if(list1[i] < list2[j]) {
            ans.push(list1[i]);
            i++;
        }else {
            ans.push(list1[i]);
            ans.push(list2[j]);
            i++;
            j++;
        }
    }
    if(i < list1.length){
        while(i < list1.length){
            ans.push(list1[i]);
            i++;
        }
    } 
    if(j < list2.length){
        while(j < list2.length){
            ans.push(list2[j]);
            j++;
        }
    } 

    return ans;
};

console.log(mergeTwoLists([1,3,4], [1,2,4,5,9,10]));