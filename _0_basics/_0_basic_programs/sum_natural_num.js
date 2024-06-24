// JavaScript Program to Find the Sum of Natural Numbers

// Using for Loop

function findSum(n) { 
    let sum = 0; 
    for (let i = 1; i <= n; i++) 
        sum = sum + i; 
    return sum; 
}  
const n = 5; 
console.log(findSum(n));

// Using Recursion

function findSum(n) { 
    if (n !== 0) 
        return n + findSum(n - 1); 
    else
        return n; 
} 
const num = 5; 
console.log(findSum(num));

// Using Mathematical formula

function findSum(n) { 
    return n * (n + 1) / 2; 
} 
const val = 5; 
console.log(findSum(val));