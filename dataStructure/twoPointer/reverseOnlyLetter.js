// https://leetcode.com/problems/reverse-only-letters/

var reverseOnlyLetters = function(s) {
    let arr = s.split("");
    const n = arr.length;
    let i = 0, j = n-1;

    while(i < j) {
        if(isChar(arr[i]) && isChar(arr[j])){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j--;
           i++;
           console.log(arr);
        } else if(!isChar(arr[i])) {
            i++;
        }
        else if(!isChar(arr[j])) j--;
    }
    return arr.join("");
};

function isChar(n) {
    
if((n >= 'a' && n <= 'z') || (n >= 'A' && n <= 'Z')) return true;
else return false;
            
}