// https://leetcode.com/problems/majority-element/description/

// brute force
var majorityElement = function(nums) {
    const count = {}, n = nums.length;

    for(let i = 0; i < nums.length; i++) {
        count[nums[i]] = (count[nums[i]] || 0) + 1;
    }
    for(key in count) {
        if(count[key] > Math.floor(n/2)) return key;
    }
};