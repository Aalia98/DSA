// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/description/

var countKDifference = function(nums, k) {
    let count = 0;
    let i = 0, j = i+1;
    while(j < nums.length) {
        if(Math.abs(nums[i] - nums[j]) == k) count++;
        if(j === nums.length-1) {
        i++;
        j = i;
        }
        j++;
    }
    return count;
};