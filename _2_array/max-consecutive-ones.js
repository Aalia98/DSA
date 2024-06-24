// https://leetcode.com/problems/max-consecutive-ones/description/

var findMaxConsecutiveOnes = function(nums) {
    let count = 0, max = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == 1) count++;
        else if(nums[i] == 0){
            if(count > max) max = count;
            count = 0;
        }
    }
     if(count > max) max = count;
    return max; 
  };