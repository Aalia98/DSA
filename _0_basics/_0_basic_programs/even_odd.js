// JavaScript Program to Check if a Number is Odd or Even

// Approach 1: Using the modulo Operator

function isEven(n) {
    return (n % 2 == 0);
}
let n = 101;

isEven(n) ? console.log("Even") : console.log("Odd");

// Approach 2: Using Bitwise & Operator

function checkOddOrEven(n) {
    if (n & 1 == 1) {
        return "Number is odd";
    }
    return "Number is even";
}
console.log(checkOddOrEven(12));
console.log(checkOddOrEven(121));

// Approach 3: Using Bitwise OR Operator (|)

function checkOddOrEven(number) {
    return (number | 1) === number ? 'Odd' : 'Even';
}
console.log(checkOddOrEven(14));
console.log(checkOddOrEven(17));

// Approach 4: Using Ternary Operator

function checkOddOrEven(num) {
    return num % 2 === 0 ? 'Even' : 'Odd';
}
console.log(checkOddOrEven(21));
console.log(checkOddOrEven(12));
