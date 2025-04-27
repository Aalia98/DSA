// https://leetcode.com/problems/sort-colors/

var sortColors = function(nums) {
    let i = 0, j = i+1;
  
    while(j < nums.length) {
        if(nums[i] > nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        if(j === nums.length-1) {
        i++;
        j = i;
        }
        j++;
    }
    return nums;
};