// https://leetcode.com/problems/find-the-highest-altitude/

var largestAltitude = function(gain) {
    let maxi = 0;
    let sum = 0;

    for(let i = 0; i < gain.length; i++) {
        sum += gain[i];
        if(sum > maxi) maxi = sum;
    }
    return maxi;
};