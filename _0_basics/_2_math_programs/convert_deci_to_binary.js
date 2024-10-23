// TODO: Using unsigned right shift operator (>>>)

function decimalToBinary(N) {
    return (N >>> 0).toString(2);
}

let N = 10;
let binary = decimalToBinary(N);
console.log(
    "The binary representation of given number is:- " + binary);

// TODO: Using Loop and String Concatenation

function decimalToBinary(N) {
    let binary = '';

    while (N > 0) {
        binary = (N % 2) + binary;
        N = Math.floor(N / 2);
    }

    return binary;
}

let N1 = 10;
let binary1 = decimalToBinary(N1);
console.log(
    "The binary representation of given number is:- " + binary1);

// TODO: Using toString(2) Method

function decimalToBinary(val) {
    return val.toString(2);
}

let num1 = 10;
let result = decimalToBinary(num1);
console.log("Binary representation:", result);

// TODO: Using Array and Math method

function decimalToBinary(num1) {
    if (num1 === 0) return "0";

    let arr = [];
    for (; num1 > 0; num1 = Math.floor(num1 / 2)) {
        arr.unshift(num1 % 2);
    }
    return arr.join("");
}

let givenNumber = 10;
let result1 = decimalToBinary(givenNumber);
console.log("The binary representation is: " + result1);

// TODO: Using Bitwise Operations and an Array

function decimalToBinary(N) {
    if (N === 0) return "0";

    let binaryArray = [];
    while (N > 0) {
        binaryArray.push(N & 1);
        N = N >> 1;
    }
    
    return binaryArray.reverse().join('');
}

let number = 10;
let binary2 = decimalToBinary(number);
console.log("The binary representation of the given number is: " + binary2);
