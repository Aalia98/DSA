// https://leetcode.com/problems/maximum-average-subarray-i/description/

var findMaxAverage = function(nums, k) {
    let i = 0, j = 0, sum = 0, maxiAvg = -Infinity;

    while(j < nums.length){
        sum += nums[j];
        if(j-i+1 == k) {
            let avg = sum / k;
            maxiAvg = Math.max(maxiAvg, avg);
            sum -= nums[i];
            i++;
        }
        j++;
    }
    return maxiAvg;
};