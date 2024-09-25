// JavaScript Program to Generate Random Number in Given Range

// Using JavaScript random Function

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

console.log("Random Number between 1 and 5: ")
console.log( randomNumber(1, 5) );

// Using JavaScript Floor Function
// example 1
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log("Random Number between 1 and 100: ")
console.log( randomNumber(1, 100) );

// example 2
function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Random Number between 1 and 10: ")
console.log( randomNumber(1, 10) );

// Using Math.random() and Math.ceil()

function getRandomNumber(min, max) {
    return Math.ceil(Math.random() * (max - min)) + min - 1;
}

console.log(getRandomNumber(1, 10));

// Using a custom random number generator function

function customRandom() {
    return (new Date().getTime() % 10000) / 10000;
}

function getRandomInRange(min, max) {
    return Math.floor(customRandom() * (max - min + 1)) + min;
}

// Example usage:
const min = 1;
const max = 100;
const randomNumber = getRandomInRange(min, max);
console.log(randomNumber); 
