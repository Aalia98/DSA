TODO: // Javascript program to find the sum of first n natural numbers using recursion

function findSum(n) { 
	if (n !== 0) 
		return n + findSum(n - 1); 
	else
		return n; 
} 

// Driver code 
const n = 5; 
console.log(findSum(n));
