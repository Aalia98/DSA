// https://leetcode.com/problems/sort-colors/

// better
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

// optimized
var sortColors = function(nums) {
    let countZero = 0, countOne= 0, countTwo = 0;
  
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) countZero++;
        else if(nums[i] === 1) countOne++;
        else countTwo++;
    }
    for(let j = 0; j < nums.length; j++) {
        if(j < countZero) nums[j] = 0;
        else if(j < (countZero+countOne)) nums[j] = 1;
        else nums[j] = 2;
    }
    return nums;
};