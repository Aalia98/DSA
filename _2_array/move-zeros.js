https://leetcode.com/problems/move-zeroes/

var moveZeroes = function(nums) {
    let i = 0;
  
    if((nums.length === 0) || (nums.length === 1)) return nums;
    
    for(let j = 0; j < nums.length; j++) {
        if(nums[j] !== 0) {
        nums[i] = nums[j];
        i++;
        }
    }
    for(let k = i; k < nums.length; k++) {
        nums[k] = 0;
    }
    return nums;
    // const n = nums.length;
    // let k = -1;

    // for(let i = 0; i < n; i++) {
    //     if(nums[i] == 0) {
    //         k = i;
    //         break;
    //     };
    // }
    // if(k == -1) return nums;
    // let i = k, j = k+1;

    // while(j < n) {
    //     if((nums[j] != 0)) {
    //         let temp = nums[i];
    //         nums[i] = nums[j];
    //         nums[j] = temp;
    //         i++;
    //     }
    //     j++;
    // }
    // return nums;
};