// https://leetcode.com/problems/single-number/

var singleNumber = function(nums) {
    const unique = {};

    for(let i = 0; i < nums.length; i++){
        unique[nums[i]] = (unique[nums[i]] || 0) + 1;
    }
    for(key in unique){
        if(unique[key] == 1) return key;
    }
};