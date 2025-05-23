// https://leetcode.com/problems/pascals-triangle/

var generate = function(numRows) {
    let result = [];

    for(let i = 0; i < numRows; i++) {
        let row = new Array(i+1).fill(1);
        for(let j = 1; j < i; j++) {
            row[j] = result[i-1][j-1] + result[i-1][j];
        }
        result.push(row);
    }
    return result;
};