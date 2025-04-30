// https://leetcode.com/problems/set-matrix-zeroes/

// brute force

function setZeroes(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const mark = -1000000; // koi special marker value jo matrix mein nahi hoga
  
    // First pass: mark rows and columns
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] === 0) {
          // mark entire row
          for (let k = 0; k < n; k++) {
            if (matrix[i][k] !== 0) matrix[i][k] = mark;
          }
          // mark entire column
          for (let k = 0; k < m; k++) {
            if (matrix[k][j] !== 0) matrix[k][j] = mark;
          }
        }
      }
    }
  
    // Second pass: replace marks with 0
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] === mark) {
          matrix[i][j] = 0;
        }
      }
    }
  }

//   better approach

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

// optimized approach

function setZeroes(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
  
    let firstRowZero = false;
    let firstColZero = false;
  
    // Step 1: Check if first row and column have zero
    for (let i = 0; i < m; i++) {
      if (matrix[i][0] === 0) firstColZero = true;
    }
    for (let j = 0; j < n; j++) {
      if (matrix[0][j] === 0) firstRowZero = true;
    }
  
    // Step 2: Use first row and column as marker
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (matrix[i][j] === 0) {
          matrix[i][0] = 0;
          matrix[0][j] = 0;
        }
      }
    }
  
    // Step 3: Set cells to zero based on markers
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (matrix[i][0] === 0 || matrix[0][j] === 0) {
          matrix[i][j] = 0;
        }
      }
    }
  
    // Step 4: Set first row and first column
    if (firstColZero) {
      for (let i = 0; i < m; i++) {
        matrix[i][0] = 0;
      }
    }
    if (firstRowZero) {
      for (let j = 0; j < n; j++) {
        matrix[0][j] = 0;
      }
    }
  }
  