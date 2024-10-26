// TODO: Using Array.from() Method

let myInt = 235345;

let myFunc = num => Number(num);

let intArr = Array.from(String(myInt), myFunc);

console.log(intArr);

// TODO: Using mathematical operations

function numberToArray(number) {
    let array = [];
    while (number > 0) {
        array.unshift(number % 10);
        number = Math.floor(number / 10);
    }
    return array;
}

let number1 = 12345;
let array1 = numberToArray(number1);
console.log(array1); 

// TODO: Using a For Loop

const number2 = 12345;
const array = [];
const numStr = String(number2);

for (let i = 0; i < numStr.length; i++) {
    array.push(Number(numStr[i]));
}

console.log(array); 

// TODO: Using String.prototype.split() Method

function numberToArray(number) {
    return number.toString().split('').map(Number);
}
const number3 = 235345;
const numberArray3 = numberToArray(number3);

console.log('Number:', number3); 

console.log('Number Array:', numberArray3); 

// TODO: Using Recursion

function numberToArrayRecursively(number) {
    if (number === 0) {
        return [];
    }
    const digits = numberToArrayRecursively(Math.floor(number / 10));
    digits.push(number % 10);

    return digits;
}

const number = 235345;
const numberArray = numberToArrayRecursively(number);

console.log('Number:', number);
console.log('Number Array:', numberArray);
