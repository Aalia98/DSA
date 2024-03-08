// https://leetcode.com/problems/rearrange-array-elements-by-sign/description/

var rearrangeArray = function(nums) {
    const arr = Array(nums.length).fill(-1);
    let i = 0, j = 1;

    for(let k = 0; k < nums.length; k++) {
        if(nums[k] > 0) {
            arr[i] = nums[k];
            i = i + 2;
        }else {
            arr[j] = nums[k];
            j = j + 2;
        }
    }
    return arr;
};