// TODO: Approach 1: Iterative Method

let n = 5; 

function factorial(n) { 
    let ans = 1; 
    
    if(n === 0)
        return 1;
    for (let i = 2; i <= n; i++) 
        ans = ans * i; 
    return ans; 
}

console.log(factorial(n));

// TODO: Approach 2: Recursive Method

let n1 = 5;
function factorial(n) { 
    if (n === 0) { 
        return 1; 
    } 
    else { 
        return n * factorial( n - 1 ); 
    } 
} 

console.log(factorial(n1));

// TODO: Approach 3: Memoization Method

let n2 = 5;

function factorial(n, cache = []) {
    if (n === 0) {
        return 1;
    }
    if (cache[n] !== undefined) {
        return cache[n];
    }
    cache[n] = n * factorial(n - 1, cache);
    return cache[n];
}

console.log(factorial(n2));
