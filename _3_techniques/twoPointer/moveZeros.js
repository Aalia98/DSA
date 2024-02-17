// https://leetcode.com/problems/move-zeroes/

var moveZeroes = function(nums) {
    const n = nums.length;
    let k = -1;

    for(let i = 0; i < n; i++) {
        if(nums[i] == 0) {
            k = i;
            break;
        };
    }
    if(k == -1) return nums;
    let i = k, j = k+1;

    while(j < n) {
        if((nums[j] != 0)) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
        }
        j++;
    }
    return nums;
};