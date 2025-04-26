// https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/

var check = function(nums) {
    let count = 0;
    const n = nums.length;

    for(let i = 0; i < n; i++) {
        if(nums[i] > nums[(i+1)%n]) count++;
    }
    return count <= 1;
};