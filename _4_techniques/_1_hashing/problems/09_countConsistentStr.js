// https://leetcode.com/problems/count-the-number-of-consistent-strings/

var countConsistentStrings = function(allowed, words) {
    let count = 0;
    const a = Array(256).fill(0); 
    for(let i=0;i<allowed.length;i++) {
        a[allowed.charCodeAt(i)]++;
    }
    for(let i = 0; i < words.length; i++) {
        if(check(a,words[i])) count++;
    }
    return count;
};

function check(a, str) {
    for(let i=0;i<str.length;i++) {
      if(a[str.charCodeAt(i)]==0) return false;
    }
    return true;
}