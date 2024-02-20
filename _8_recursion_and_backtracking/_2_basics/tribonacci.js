var tribonacci = function(n) {
    let dp = Array(n+1).fill(-1);
    return f(n, dp);
};

function f(n, dp){
    if(n == 0) return 0;
    if((n == 1) || (n == 2)) return 1;
    if(dp[n] != -1) return dp[n];
    dp[n] = tribonacci(n-1) + tribonacci(n-2) + tribonacci(n-3);
    return dp[n];
}

console.log(tribonacci(37));