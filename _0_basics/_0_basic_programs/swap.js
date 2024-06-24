// JavaScript Program to Swap Two Variables

// Using Temporary variable

let a = 20;
let b = 10;
let temp;
 
console.log(`before swapping: a= ${a}`);
console.log(`before swapping b= ${b}`);
 
temp = a;
a = b;
b = temp;
 
console.log(`after swapping a= ${a}`);
console.log(`after swapping b= ${b}`);

// Using Arithmetic Operations

let x = 10;
let y = 20;
 
console.log(`before swap a= ${x}`);
console.log(`before swap a= ${y}`);
 
x = x + y;//10=10+20 now a would be 30
y = x - y;//20=30-10 now b would be 10
x = x - y;//30=30-10 so a would be now 20
 
console.log(`after swap a= ${x}`);
console.log(`after swap a= ${y}`);

// Using destructing Assignment

let c = 40;
let d = 30;
 
console.log(`before swap a= ${c}`);
console.log(`before swap a= ${d}`);
 
// a would be swapped to b and b would be swapped to a
[d, c] = [c, d];
 
console.log(`after swap a= ${c}`);
console.log(`after swap a= ${d}`);

// Using XOR Bitwise Operator

let num1 = 5;
let num2 = 10;
 
console.log("Before swapping: a =", num1, "b =", num2);
 
num1 = num1 ^ num2;
num2 = num1 ^ num2;
num1 = num1 ^ num2;
 
console.log("After swapping: a =", num1, "b =", num2);
