// JavaScript Program to Add Float Numbers

// Using parseFloat() and toFixed() method

let val = parseFloat('2.3') + parseFloat('2.4');
console.log("2.3 + 2.4 = " + val);

function addFloat() {
    console.log("2.3 + 2.4 = "
        + (parseFloat('2.3') +
            parseFloat('2.4')).toFixed(2));
}
addFloat()

// Using parseFloat() and Math.round() method

let value = parseFloat('2.3') + parseFloat('2.4');
console.log("2.3 + 2.4 = " + value);

function add() {
    console.log("2.3 + 2.4 = " +
        Math.round((parseFloat('2.3')
            + parseFloat('2.4')) * 100) / 100);
}
add()

// Using Number() and Intl.NumberFormat method

let x = Number('2.3') + Number('2.4');
console.log("2.3 + 2.4 = " + x);

function run() {
    let sum = Number('2.3') + Number('2.4');
    let formattedSum = new Intl.NumberFormat('en-US', 
    { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(sum);
    console.log("2.3 + 2.4 = " + formattedSum);
}
run();
