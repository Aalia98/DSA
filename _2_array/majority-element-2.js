// https://leetcode.com/problems/majority-element-ii/

var majorityElement = function(nums) {
    const count = {}, n = nums.length;
    const result = [];

    for(let i = 0; i < nums.length; i++) {
        count[nums[i]] = (count[nums[i]] || 0) + 1;
    }
    for(key in count) {
        if(count[key] > Math.floor(n/3)) result.push(parseInt(key));
    }
    return result;
};