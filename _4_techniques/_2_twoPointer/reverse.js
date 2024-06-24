// https://leetcode.com/problems/reverse-string/

var reverseString = function(s) {
    const rev = s;
    let i = 0, j = rev.length-1;
 
    while(i < j) {
        let temp = rev[i];
        rev[i] = rev[j];
        rev[j] = temp;
        j--;
        i++;
    }
    return rev;
 };