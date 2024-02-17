// https://leetcode.com/problems/largest-number/description/

var largestNumber = function(nums) {
    const a = nums.sort((a,b) => {
    return Number(a.toString() + b.toString()) < Number(b.toString() + a.toString()) ? 1 : -1;
    });
    let ans = "";
    for(let i = 0; i < a.length; i++) {
        ans += a[i];
    }


return ans[0] == '0' ? "0" : ans;
};