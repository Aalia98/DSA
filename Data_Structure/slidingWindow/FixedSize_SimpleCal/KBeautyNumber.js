// https://leetcode.com/problems/find-the-k-beauty-of-a-number/

var divisorSubstrings = function(num, k) {
    let count = 0, i = 0, j = 0;
    let strNum = num.toString();
    while(j < strNum.length) {
        if(j-i+1 === k) {
            let sub = strNum.substring(i, j+1);
            let subNum = parseInt(sub, 10);
            if((subNum !== 0) && (num % subNum === 0)){
                count++;
            }
            i++;
        }
        j++;
    }
    return count;
};