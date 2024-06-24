// 	JavaScript Program to Add Two Numbers

// Using + operator
const a = 9;
const b = 4;
const sum = a+b;
console.log("Sum of Numbers : ", sum);

// Using function
function add(a,b) {
    const sum = a+b;
    return sum;
}
console.log("Sum of Numbers : ",add(4,6));

// Using Arrow function

const addition = (a,b) => a+b
console.log("Sum of Numbers : ",add(4,6));

// Using Addition Assignment (+=) Operator

let num1 = 15;
let num2 = 10;
num1 += num2;
console.log("Sum of the given number is :", num1);