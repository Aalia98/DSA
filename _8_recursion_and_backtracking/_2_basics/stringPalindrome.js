function palindrome(str, l, r){
    if(l >= r) return true;

    if(str[l] != str[r]) return false;

    return palindrome(str, l+1, r-1);
}
const str = "naman";
console.log(palindrome(str, 0, str.length-1));