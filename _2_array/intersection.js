// https://leetcode.com/problems/intersection-of-two-arrays/

var intersection = function(nums1, nums2) {
    const n = nums1.length;
    const m = nums2.length;
    const maxLen = Math.max(n, m);
    const count1 = {};
    const count2 = {};
    const resultArr = [];
    for(let i = 0; i < maxLen; i++) {
        (nums1[i] != undefined) && (count1[nums1[i]] = (count1[nums1[i]] || 0) + 1);
        (nums2[i] != undefined) && (count2[nums2[i]] = (count2[nums2[i]] || 0) + 1);
    }
    for(const key in count1){
        if(count2[key]){
            resultArr.push(key);
        }
    }
    return resultArr;
};