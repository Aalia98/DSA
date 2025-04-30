// https://leetcode.com/problems/find-the-duplicate-number/description/

var findDuplicate = function(nums) {
    const count = {};
    let ans = -1;
    
    for(let i = 0; i < nums.length; i++) {
        count[nums[i]] = (count[nums[i]] || 0) + 1;
    }
    for(const key in count) {
        if(count[key] > 1) ans = parseInt(key);
    }
    return ans;
};