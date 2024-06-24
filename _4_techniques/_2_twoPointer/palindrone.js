// https://leetcode.com/problems/palindrome-number/

var isPalindrome = function(x) {
    const xStr = x.toString();
    const n = xStr.length;
    let i = 0, j = n-1;

    while(i <= j) {
        if(xStr[i] != xStr[j]){
            return false;
        }    
        j--;
        i++;
    }
    return true;
};