// https://leetcode.com/problems/smallest-even-multiple/

var smallestEvenMultiple = function(n) {
    //brute force
    // let i = 2;

    // while(true){
    //     if(i%n == 0) return i;
    //     i = i + 2;
    // }

    //optimize
    let i = 1;

    while(true){
        if((n*i)%2 == 0) return n*i;
        i++;
    }
};

console.log(smallestEvenMultiple(1));