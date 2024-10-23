// TODO: Using Recursion

function factorial(n) { 
	if (n <= 1) return 1 
	return n * factorial(n - 1) 
} 

function permutation(n, r) { 
	if (n < r) return -1 
	return factorial(n) / factorial(n - r) 
} 

console.log("4 P 1: ", permutation(4, 1)) 
console.log("13 P 2: ", permutation(13, 2))

// TODO: Using for Loop

function permutation(n, r) { 
	if (n < r) return -1 

	let result = n 
	for (let i = 1; i < r; i++) 
		result *= n - i; 

	return result 
} 

console.log("4 P 1: ", permutation(4, 1)) 
console.log("13 P 2: ", permutation(13, 2))
