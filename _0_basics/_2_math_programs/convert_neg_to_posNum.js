// TODO: Multiplying by -1

// Javascript script to convert negative number to positive number

function convert_positive(a) {
	if (a < 0) {
		a = a * -1;
	}
	return a;
}

let n = -10;
let m = 5;

n = convert_positive(n);
console.log(n);
m = convert_positive(m);
console.log(m);

// TODO: Using Math.abs()

let a = -30;
let b = 15;

a = Math.abs(a);
console.log(a);
b = Math.abs(b);
console.log(b);

// TODO: adding a minus sign

function convert_positive(a) {
	return a < 0 ? -(a) : a;
}

let p = -10;
let q = 5;

p = convert_positive(p);
console.log(p);
q = convert_positive(q);
console.log(q);

// TODO: Flipping the bit

function convert_positive(a) {
	return a < 0 ? (~a + 1) : a;
}

let r = -10;
let s = 5;

r = convert_positive(r);
console.log(r);
s = convert_positive(s);
console.log(s);

// TODO: Using Math.sqrt()

function convertToPositive(number) {
	return Math.sqrt(Math.pow(number, 2));
}

const negativeNumber = -5;
const positiveResult = convertToPositive(negativeNumber);
console.log(positiveResult); // Output: 5
