// https://leetcode.com/problems/largest-odd-number-in-string/description/

var largestOddNumber = function(num) {
    let odd, i = num.length-1;
    while(i >= 0) {
        odd = num[i];
        if(odd%2 != 0) return num.substring(0, i+1);
        i--;
    }
    return "";
};