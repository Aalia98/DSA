// https://leetcode.com/problems/set-matrix-zeroes/

var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let row = Array(m).fill(-1);
    let col = Array(n).fill(-1);

    for(let i=0;i<m;i++) {
        for(let j=0;j<n;j++) {
            if(matrix[i][j]==0) {
                row[i]=0;col[j]=0;
            }
        }
    }

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if((row[i] == 0) || (col[j] == 0)) matrix[i][j] = 0;
        }
    }
    return matrix;
};