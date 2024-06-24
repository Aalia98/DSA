// https://leetcode.com/problems/length-of-last-word/

var lengthOfLastWord = function(s) {
    let arr = s.split(" ");
    const n = arr.length;
    let j = n-1;

    while(j >= 0){
        if(arr[j].length == 0) j--;
        else return arr[j].length;
        
    }
};