// Approach 1: Using the Modulus Operator (%)

function haveSameLastDigit(num1, num2) {

    const lastDigit1 = num1 % 10;
    const lastDigit2 = num2 % 10;

    return lastDigit1 === lastDigit2;
}

const number1 = 123;
const number2 = 456;

const result = haveSameLastDigit(number1, number2);

console.log(result);

// Approach 2: Converting Numbers to Strings

function haveSameLastDigit(num1, num2) { 
    const lastDigit1 = num1.toString().slice(-1); 
    const lastDigit2 = num2.toString().slice(-1); 

    return lastDigit1 === lastDigit2; 
} 

const num1 = 123; 
const num2 = 453; 

const ans = haveSameLastDigit(num1, num2); 

console.log(ans);

// Approach 3: Using the Array of Digits

function haveSameLastDigit(num1, num2) {

    const digits1 = [...num1.toString()];
    const digits2 = [...num2.toString()];
    
    const lastDigit1 = digits1[digits1.length - 1];
    const lastDigit2 = digits2[digits2.length - 1];

    return lastDigit1 === lastDigit2;
}

const n1 = 123;
const n2 = 453;

const result1 = haveSameLastDigit(n1, n2);

console.log(result1);

// Approach 4: Using the Bitwise AND Operator

function hasSameLastDigit(num1, num2) {

    const lastDigit1 = num1 & 1;

    const lastDigit2 = num2 & 1;
    return lastDigit1 === lastDigit2;
}

const digit1 = 123;
const digit2 = 453;
const result2 = hasSameLastDigit(digit1, digit2);
console.log(result2); // Output: false
