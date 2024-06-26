// JavaScript Program to Convert Celsius to Fahrenheit

// Using the formula with a custom function

function celcToFahr( n ) {
	return ((n * 9.0 / 5.0) + 32.0);
}

const num = 20;
console.log(celcToFahr( num ));

// Using the arrow function and template literals

const celcToFahr = (n) =>
    `${n} Celsius is equal to ${(n * 9 / 5) + 32} Fahrenheit.`;
 
const n = 20;
console.log(celcToFahr(n));
