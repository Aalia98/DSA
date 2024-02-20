// https://leetcode.com/problems/sum-multiples/

var sumOfMultiples = function(n) {
    let i = 3, sum = 0;
    while(i <= n) {
        if((i%3==0) || (i%5==0) || (i%7==0)) sum += i;
        i++;
    }
    return sum;
};