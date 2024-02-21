// https://leetcode.com/problems/reverse-prefix-of-word/description/

var reversePrefix = function(word, ch) {
    const charId = idx(word, ch);
    if(charId != -1) {
        return reverse(word, 0, charId);
    }
    return word;
};

function idx(str, ch) {
    for(let i=0;i<str.length;i++) {
        if(str[i]==ch) return i;
    }
    return -1;
}

function reverse(str,i,j) {
const arr = str.split("");
    while(i < j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr.join("");
}