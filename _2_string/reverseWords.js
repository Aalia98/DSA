// https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

var reverseWords = function(s) {
    const strArray = s.split(" ");
    let str = "";
    
    for(let i = 0; i < strArray.length; i++) {
        const reveredStr = reverse(strArray[i])
        if(i==strArray.length-1) {
            str += reveredStr
        } else {
            str += (reveredStr+" ");
        }
    }
    return str;
};

function reverse(str) {
    const arr = str.split("");
let l = 0, r = arr.length-1;
        while(l < r){
            let temp = arr[l];
            arr[l] = arr[r];
            arr[r] = temp;
            l++;
            r--;
        }

        return arr.join("");
}