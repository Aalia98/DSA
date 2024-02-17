// https://leetcode.com/problems/reverse-vowels-of-a-string/

var reverseVowels = function(s) {
    let arr = s.split("");
    const len = arr.length;
    let i = 0, j = len-1;

    while(i < j) {
        if(isVowel(arr[i]) && isVowel(arr[j])) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }else if(!isVowel(arr[i])) i++;
        else if(!isVowel(arr[j])) j--;
    }
    return arr.join("");
};

function isVowel(a) {
    if(a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u' || a == 'A' || a == 'E' || a == 'I' || a == 'O' || a == 'U') return true;
    else false;
}