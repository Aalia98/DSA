// https://leetcode.com/problems/next-permutation/

// brute force (using recursion)


// optimized

var nextPermutation = function(nums) {
    let index = -1;
    const n = nums.length;

    for(let i = n-2; i >= 0; i--) {
        if(nums[i] < nums[i+1]) {
            index = i;
            break;
        }
    }
    if(index == -1) {
        reverse(nums, 0, n-1);
        return nums;
    }
    for(let i = n-1; i > index; i--) {
        if(nums[i] > nums[index]) {
            [nums[i],nums[index]] = [nums[index], nums[i]];
            break;
        }
    }
    reverse(nums, index + 1, n-1);
    return nums;
};

function reverse(arr, left, right) {
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}