// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/

var countGoodSubstrings = function(s) {
    let i = 0, j = 0, count = 0;
    let charCount = {};

    while(j < s.length) {
        charCount[s[j]] = (charCount[s[j]] || 0) + 1;
        if(j-i+1 == 3) {
            if(Object.keys(charCount).length == 3) count++;
            charCount[s[i]]--;
            if(charCount[s[i]] == 0) delete charCount[s[i]];
            i++;
        }
        j++;
    }
    return count;
};