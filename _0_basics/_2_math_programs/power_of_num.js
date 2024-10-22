// Using JavaScript Loops

let n = 5

let power = 3

let num = 1;
for (let i = 0; i < power; ++i) {
    num = num * n;
}
console.log(num);

// Using Recursion

function pow(n, p) {
    if (p == 1) return n;
    return n * pow(n, p - 1);
}

let n1 = 8;
let power1 = 3
console.log(pow(n1, power1));

// Using the Math.pow() Method

let n2 = 7;
let power2 = 9;

console.log(Math.pow(n2,power2));

// Using JavaScript Exponentiation (**) Operator

let n3 = 17;
let power3 = 3;

console.log(n3**power3);

// Using Exponentiation by Squaring

function powerBySquaring(base, exponent) {
    if (exponent === 0) return 1;
    if (exponent % 2 === 0) {
        let halfPower = powerBySquaring(base, exponent / 2);
        return halfPower * halfPower;
    } else {
        return base * powerBySquaring(base, exponent - 1);
    }
}

let base = 2;
let exponent = 10;
console.log(powerBySquaring(base, exponent));
