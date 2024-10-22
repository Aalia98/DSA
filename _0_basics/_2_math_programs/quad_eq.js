TODO: // using Sridharacharya Formula

     // equation ax * 2 + bx + x 
function findRoots(a, b, c) { 

	// If a is 0, then equation is not 
	// quadratic, but linear 
	if (a == 0) { 
		console.log("Invalid"); 
		return; 
	} 

	let d = b * b - 4 * a * c; 
	let sqrt_val = Math.sqrt(Math.abs(d)); 

	if (d > 0) { 
		console.log('Roots are real and different'); 

		console.log( 
			(-b + sqrt_val) / (2 * a) + " and " + 
			(-b - sqrt_val) / (2 * a) 
		); 
	} 
	else if (d == 0) { 
		console.log('Roots are real and same'); 

		console.log(-b / (2 * a) + " and " + 
			-b / (2 * a)); 
	} 

	// d < 0 
	else { 
		console.log('Roots are complex'); 

		console.log(-b / (2 * a) + " + i" + 
			sqrt_val / (2 * a) + " and " + 
			-b / (2 * a) + " - i" + sqrt_val) / (2 * a); 
	} 
} 

let a = 1, b = -7, c = 12; 
findRoots(a, b, c);

// TODO: using the Custom function

function findRoots(a, b, c) { 
	return b * b - 4 * a * c; 
} 

function myResult(a, b, c) { 
	const d = findRoots(a, b, c); 

	if (d > 0) { 
		const root1 = (-b + Math.sqrt(d)) / (2 * a); 
		const root2 = (-b - Math.sqrt(d)) / (2 * a); 
		return [root1, root2]; 
	} else if (d === 0) { 
		const root = -b / (2 * a); 
		return [root]; 
	} else { 
		return []; 
	} 
} 

// Example usage: 
let x = 1; 
let y = -3; 
let z = 2; 
let result = myResult(x, y, z); 
console.log("Roots:", result);
