// https://leetcode.com/problems/rotate-array/

// brute force approach
var rotate = function(nums, k) {
    const len = nums.length;
    k = k%len;

    for(let m = 0; m < k; m++) {
        let temp = nums[len-1];
        for(let i=len-1;i>=1;i--) {
            nums[i]=nums[i-1];
        }
        nums[0] = temp;
    }
    return nums;
};

// brute force
var rotate = function(nums, k) {
    const n = nums.length;
    let j = 0;
    if(n === 0) return;

    while(j < k) {
    for(let i = n-1; i > 0; i--) {
    [nums[i], nums[i-1]] = [nums[i-1], nums[i]];
    }
    j++;
    }
    return nums;
}

// optimize or reversing approach
var rotate = function(nums, k) {
    const len = nums.length;
      if (len == 0) return;
    k = k % len;
    if (k > len) return;
    reverse(len-k, len-1, nums);
    reverse(0, len-k-1, nums);
    reverse(0, len-1, nums);
    return nums;
};

function reverse(i, j, arr) {
    while(i <= j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}