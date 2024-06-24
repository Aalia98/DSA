// https://leetcode.com/problems/check-if-the-number-is-fascinating/description/

var isFascinating = function(n) {
    const twoN = 2*n;
    const threeN = 3*n;
    const str = ""+n+twoN+threeN;
    const numCount = {};
    for(let i = 0; i < str.length; i++) {
        numCount[str[i]] = (numCount[str[i]] || 0) + 1;
    }
    for(key in numCount) {
            if(key == "0") return false;
            else if(numCount[key] == 1) continue;
            else return false;
    }
    return true;
};