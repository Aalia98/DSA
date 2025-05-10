// https://leetcode.com/problems/3sum/description/

// brute force
var threeSum = function(nums) {
    const set = new Set();
  
    for(let i = 0; i < nums.length; i++) {
      for(let j = i+1; j < nums.length; j++) {
        for(let k = j+1; k < nums.length; k++) {
          if(nums[i] + nums[j] + nums[k] === 0) {
            const triplet = [nums[i], nums[j], nums[k]].sort((a,b) => a-b);
            set.add(triplet.toString());
          }
        }
      }
    }
    return Array.from(set).map(str => str.split(',').map(Number));
};