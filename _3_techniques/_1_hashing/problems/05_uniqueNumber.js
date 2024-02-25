// https://leetcode.com/problems/unique-number-of-occurrences/

var uniqueOccurrences = function(arr) {
    const n = arr.length;
    const numCount = {};

    for(let i = 0; i < n; i++) {
        numCount[arr[i]] = (numCount[arr[i]] || 0) + 1;
    }
    const number = new Set();
    for(key in numCount) {
        number.add(numCount[key]);
    }
    if(Object.keys(numCount).length == number.size) return true;
    return false;
};