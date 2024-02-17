// https://leetcode.com/problems/reverse-string-ii/

var reverseStr = function(s, k) {
    const len = s.length;
    const arr = s.split("");
    for(let i = 0; i < len-1; i += 2*k) {
        let start = i, j = i+k-1;
        let end = Math.min(j, len-1);
        while(start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    return arr.join("");
};