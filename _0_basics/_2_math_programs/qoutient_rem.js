// TODO: Using Math.floor() method

let a = 39;
let b = 5;
function Geeks() {
	console.log("quotient = " + Math.floor(a / b))
	console.log("remainder = " + a % b);
}
Geeks()

// TODO: Using ~~ operator

let x = 39;
let y = 5;
function Geeks() {
	let num = ~~(x / y);
	console.log("quotient = " + num)
	console.log("remainder = " + x % y);
}
Geeks()

// TODO: right shift >> operator

let p = 39;
let q = 5;
function Geeks() {
	let num = (p / q) >> 0;
	console.log("quotient = " + num)
	console.log("remainder = " + p % q);
}
Geeks()

