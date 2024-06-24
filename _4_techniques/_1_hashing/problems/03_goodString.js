// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/

var areOccurrencesEqual = function(s) {
    const charCount = {};
    for(let i = 0; i < s.length; i++) {
        charCount[s[i]] = (charCount[s[i]] || 0) + 1;
    }
    const count = Object.values(charCount)[0];
    for(key in charCount) {
        if(count != charCount[key]) return false;
    }
    return true;
};