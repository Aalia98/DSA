// https://leetcode.com/problems/search-insert-position/

var searchInsert = function(nums, target) {
    let l = 0, r = nums.length - 1;
    let ans = nums.length;

    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);

        if (nums[mid] >= target) {
            ans = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return ans;
};