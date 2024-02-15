// https://leetcode.com/problems/longest-common-prefix/

var longestCommonPrefix = function(strs) {
    if(strs.length == 1) return strs[0];
    const sortStrs = strs.sort();
    let i = 0, ans = "";
    const n = sortStrs.length;

    const fs = sortStrs[0];
    const ls = sortStrs[n-1];

    while(fs[i] == ls[i] && i < fs.length && i<ls.length){
        ans += fs[i++];
    }
    return ans;
};