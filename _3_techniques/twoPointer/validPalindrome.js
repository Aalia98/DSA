// https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function(s) {

    const n = s.length;
    let i = 0, j = n-1;

    while(i < j) {

        if(isChar(s[i]) && isChar(s[j]) && (s[i].toLowerCase() == s[j].toLowerCase())){
            i++;
            j--;
        } else if(!isChar(s[i]) || (s[i] == " ")) {
            i++;
        }
        else if(!isChar(s[j]) || (s[j] == " ")) {
            j--;
        }
        else return false;
    }
    return true;
};

function isChar(n) {
    
if((n >= 'a' && n <= 'z') || (n >= 'A' && n <= 'Z') || (n>='0' && n<= '9')) return true;
else return false;
            
}