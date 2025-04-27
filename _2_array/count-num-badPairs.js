// https://leetcode.com/problems/count-number-of-bad-pairs/description/

var countBadPairs = function(nums) {
    const map = new Map();
    const n = nums.length;
    let goodPairs = 0;

    for(let i = 0; i < n; i++) {
        let value = nums[i] - i;
        if(map.has(value)) {
            goodPairs += map.get(value);
        }
        map.set(value, (map.get(value) || 0) + 1);
    }
    const totalPairs = (n*(n-1))/2;
    const badPairs = totalPairs - goodPairs;
    return badPairs;
};