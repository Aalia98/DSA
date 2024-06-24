// https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/

var mergeArrays = function(list1, list2) {
    let i = 0, j = 0;
    let ans = [];
    
    while(i < list1.length && j < list2.length) {
        if(list1[i][0] > list2[j][0]) {
           ans.push([list2[j][0], list2[j][1]])     
       j++;
        }else if(list1[i][0] < list2[j][0]) {
           ans.push([list1[i][0], list1[i][1]])     
            i++;
        }else {
            ans.push([list1[i][0], list1[i][1]+list2[j][1]])           
            i++;
            j++;
        }
    }
    while(i < list1.length){
           ans.push([list1[i][0], list1[i][1]])     
            i++;
        } 
    while(j < list2.length){
           ans.push([list2[j][0], list2[j][1]])     
            j++;
        }

    return ans;
};