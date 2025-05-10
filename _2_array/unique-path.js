// https://leetcode.com/problems/unique-paths/

// brute force

function uniquePath(i, j, m, n) {
    if(i == m-1 || j == n-1) return 1;
    if(i >= m || j >= n) return 0;
    else return uniquePath(i+1, j, m, n) + uniquePath(i, j+1, m, n);
}

const m = 3, n = 7;
console.log(uniquePath(0, 0, m, n));