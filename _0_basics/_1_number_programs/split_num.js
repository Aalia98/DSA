// Using number.toString() and split(”)

function splitNumberIntoDigits(number) {
    return number
        .toString()
        .split("")
        .map(Number);
}

const number = 12345;
const digits = splitNumberIntoDigits(number);
console.log(digits);

// Direct Character Iteration and Array Push

function GFG_Fun() {
    let str = "123456";

    let res = [];

    for (
        let i = 0, len = str.length;
        i < len;
        i += 1
    ) {
        res.push(+str.charAt(i));
    }

    console.log(res);
}

GFG_Fun();

// Splitting String into Array of Characters

function GFG_Fun() {
    let n = "123456";
    let str = n.split('');
    console.log(str);
}

GFG_Fun();

// Using Modulo Operator

function GFG_Fun() {
    let number = 123456;
    let digit = [];

    while (number > 0) {
        digit.unshift(number % 10);
        number = Math.floor(number / 10);
    }
    console.log(digit);
}

GFG_Fun();

// Using Array.prototype.map with String Conversion

function splitDigits(number) {
    return number
        .toString()
        .split('')
        .map(digit => parseInt(digit, 10));
}

// Example usage:
const num = 987654;
const values = splitDigits(num);
console.log(values); 
