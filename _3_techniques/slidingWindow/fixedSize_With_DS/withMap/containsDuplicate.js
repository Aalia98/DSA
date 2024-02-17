// https://leetcode.com/problems/contains-duplicate-ii/description/

var containsNearbyDuplicate = function(nums, k) {
    let i = 0, j = 0;
    let intCount = {};
    while(j < nums.length) {
        intCount[nums[j]] = (intCount[nums[j]] || 0) + 1;
        if(intCount[nums[j]] > 1) return true;
        if(j-i == k){
            intCount[nums[i]]--;
            i++;
        }
        j++;
    }
    return false;
};