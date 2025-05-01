// https://leetcode.com/problems/search-a-2d-matrix/description/

// brute force
var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) return true;
    }
  }
  return false;
};

// optimized
var searchMatrix = function(matrix, target) {

        const m = matrix.length;
        const n = matrix[0].length;

        let left = 0, right = m * n - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            let row = Math.floor(mid / n);
            let col = mid % n;
            let midVal = matrix[row][col];

            if (midVal === target) return true;
            else if (midVal < target) left = mid + 1;
            else right = mid - 1;
        }

        return false;
};
