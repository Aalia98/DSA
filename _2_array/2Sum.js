// https://leetcode.com/problems/two-sum/

// brute force approach
var twoSum = function(nums, target) {
    const ans = [];
    
    for(let i = 0; i < nums.length-1; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if((nums[i] + nums[j]) == target) ans.push(i, j);
        }
    }
    return ans;
};

// optimize approach
