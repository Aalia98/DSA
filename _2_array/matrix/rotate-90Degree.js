// https://leetcode.com/problems/rotate-image/description/

var rotate = function(matrix) {
    for(let i = 0; i < matrix.length; i++) {
      for(let j = 0; j < matrix[i]. length; j++) {
      if(j > i) {
          [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
      }
  }
  for(let i = 0; i < matrix.length; i++) {
      matrix[i].reverse();
  }
  return matrix;
};