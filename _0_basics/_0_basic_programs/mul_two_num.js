// 	JavaScript Program for Multiplication of Two Numbers

// Using “*” Operator

let num1 = 10; 
let num2 = 10; 
let ans = num1 * num2; 
console.log("Result :", ans); 

// Using Functions

let c = 10; 
let d = 20; 
function multiply(a, b) { 
    return a * b; 
} 
console.log("After multiplication : " + multiply(c, d));

// Using Arrow function

let a = 10; 
let b = 20; 
let result = (a, b) => a * b; 
console.log("After multiplication : " + result(a, b));

// Using Multiplication assignment operator

let x = 20; 
x *= 10; 
console.log(x);
let y = 2; 
x *= y; 
console.log(x);

// Using for loop

function multiply(a, b) { 
    let prod = 0; 
    for (let i = 1; i <= b; i++) { 
        prod += a; 
    } 
    return prod; 
} 
  
let prod = multiply(5, 10);
console.log(result);
