// JavaScript Program to Perform Simple Mathematical Calculation

// Example 1:

// Input :
// Operation : '+'
// num1 : 5
// num2 : 6

// Output :
// 11
// Explanation: 
// '+' operator is used to add two values so , 5+6 will be 11.

// TODO: Using If-Else statement

function add(num1, num2) { 
	return num1 + num2; 
} 

function subtract(num1, num2) { 
	return num1 - num2; 
} 

function multiply(num1, num2) { 
	return num1 * num2; 
} 
 
function divide(num1, num2) { 
if(num2 === 0) return undefined; 
	return num1 / num2; 
} 

let num1 = 16; 
let num2 = 4; 

let operation = "/"; 

let result; 

if (operation === "+") { 
	result = add(num1, num2); 
} else if (operation === "-") { 
	result = subtract(num1, num2); 
} else if (operation === "*") { 
	result = multiply(num1, num2); 
} else if (operation === "/") { 
	result = divide(num1, num2); 
} else { 
	result = "Invalid operation"; 
} 
console.log("The Result of this operation is : " + result);

// TODO: Using switch case

function add(num1, num2) { 
	return num1 + num2; 
} 
function subtract(num1, num2) { 
	return num1 - num2; 
} 
function multiply(num1, num2) { 
	return num1 * num2; 
} 
function divide(num1, num2) { 
if(num2 === 0) return undefined; 
	return num1 / num2; 
} 
let operation1 = '+'; 
 
let n1 = 4; 
let n2 = 5; 

let result1; 

switch (operation1) { 
	case "+": 
		result1 = add(n1, n2); 
		break; 
	case "-": 
		result1 = subtract(n1, n2); 
		break; 
	case "*": 
		result1 = multiply(n1, n2); 
		break; 
	case "/": 
		result1 = divide(n1, n2); 
		break; 
	default: 
		result1 = "Invalid operation"; 
} 
console.log("The Result of this operation is : " + result1);
