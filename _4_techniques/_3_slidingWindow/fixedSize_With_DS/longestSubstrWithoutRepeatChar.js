// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function(s) {
    let j = 0, maxLength = 0;
    let set = new Set();
    if(s.length === 0) return 0;

    for(let i = 0; i < s.length; i++) {
        while(set.has(s[i])) {
            set.delete(s[j]);
            j++;
        }
        set.add(s[i]);
        maxLength = Math.max(maxLength, set.size);
    }
    return maxLength;
};