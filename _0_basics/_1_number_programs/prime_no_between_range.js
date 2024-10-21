// Using Trial Division Method
let x, y, l, m, flag; 

x = 2 
y = 11 
for (l = x; l <= y; l++) { 
	if (l == 1 || l == 0) 
		continue; 

	// flag variable to tell 
	// if i is prime or not 
	flag = 1; 

	for (m = 2; m <= l / 2; ++m) { 
		if (l % m == 0) { 
			flag = 0; 
			break; 
		} 
	} 

	// flag = 1 means i is prime 
	// and flag = 0 means i is not prime 
	if (flag == 1) 
		console.log(l); 
}

// Optimized Solution
let a, b, i, j; 
a = 5; 
b = 27; 
if (a <= 2) { 
	a = 2; 
	if (b >= 2) { 
		console.log(a); 
		a++; 
	} 
} 

// Make sure that a is odd before 
// we begin the loop 
if (a % 2 == 0) 
	a++; 

// Note: We traverse through odd numbers only 
for (i = a; i <= b; i = i + 2) { 

	// flag variable to tell 
	// if i is prime or not 
	let flag = 1; 

	// Traverse till square root of j 
	// (Largest possible value of a prime factor) 
	for (j = 2; j * j <= i; ++j) { 
		if (i % j == 0) { 
			flag = 0; 
			break; 
		} 
	} 

	// flag = 1 means i is prime 
	// and flag = 0 means i is not prime 

	if (flag == 1) { 
		if (i == 1) continue; 
		else
			console.log(i); 
	} 
}

// Using the Sieve of Eratosthenes” algorithm
function sieveOfEratosthenesOptimized(start, end) { 
	const primes = new Array(end + 1).fill(true); 
	primes[0] = primes[1] = false; 

	for (let i = 2; i * i <= end; i++) { 
		if (primes[i]) { 
			for (let j = i * i; j <= end; j += i) { 
				primes[j] = false; 
			} 
		} 
	} 

	for (let i = Math.max(2, start); i <= end; i++) { 
		if (primes[i]) console.log(i); 
	} 
} 

// Take input from the user using prompt 
const startInterval = 10; 
const endInterval = 20; 

// Execute the function with user-provided interval 
console.log("Prime numbers between", startInterval, 
	"and", endInterval, 
	"(Sieve of Eratosthenes - Optimized):"); 
sieveOfEratosthenesOptimized(startInterval, endInterval);
