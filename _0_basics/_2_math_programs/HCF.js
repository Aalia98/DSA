// TODO: Using for Loop

function myFunction(a, b) {
	let smaller = Math.min(a, b);
	let hcf = 1;

	for (let i = 1; i <= smaller; i++) {
		if (a % i === 0 && b % i === 0) {
			hcf = i;
		}
	}

	return hcf;
}

const num1 = 20;
const num2 = 12;

console.log("GCD of the giving numbers(20,12) is:", 
	myFunction(num1, num2));

// TODO: Using the Recursive method

function myFunction(a, b) {
	if (b === 0) {
		return a;
	}
	return myFunction(b, a % b);
}

let n1 = 12;
let n2 = 18;
let result = myFunction(n1, n2);
console.log(`GCD of ${n1} and ${n2} is ${result}`);

// TODO: Using if…else Statements

// Function to find GCD using if...else statement
function findGCDIfElse(a, b) {
	let gcd;

	if (a === 0) {
		gcd = b;
	} else if (b === 0) {
		gcd = a;
	} else {
		while (a !== b) {
			if (a > b) {
				a -= b;
			} else {
				b -= a;
			}
		}
		gcd = a;
	}

	return gcd;
}

// Example usage
let number1 = 36;
let number2 = 48;
let resultIfElse = findGCDIfElse(number1, number2);
console.log(`GCD of ${number1} and ${number2} : ${resultIfElse}`);
