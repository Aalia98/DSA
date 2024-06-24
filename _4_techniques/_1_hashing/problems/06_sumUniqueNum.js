// https://leetcode.com/problems/sum-of-unique-elements/

var sumOfUnique = function(nums) {
    let sum = 0;
    const numCount = {};
    for(let i = 0; i < nums.length; i++) {
        numCount[nums[i]] = (numCount[nums[i]] || 0) + 1;
    }
    for(key in numCount) {
        if(numCount[key] == 1){
            sum += parseInt(key);
        }
    }
    return sum;
};