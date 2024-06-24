// JavaScript Program to Check if a number is Positive, Negative, or Zero

// Using Switch Statement

function numberChecking(num) {
    switch (Math.sign(num)) {
        case 1:
            console.log("The number is Positive");
            break;
        case -1:
            console.log("The number is Negative");
            break;
        default:
            console.log("The number is Zero");
    }
}
numberChecking(12); // Output: Positive
numberChecking(-1); // Output: Negative
numberChecking(0); // Output: Zero

// Using if-else Statements

const number = prompt("Enter a number");
if (number > 0) {
    console.log("The number is positive");
}
else if (number < 0) {
    console.log("The number is negative");
}
else {
    console.log("The number is zero");
};

// Using Ternary Operator

function checkNumberSign() {
    const input = prompt("Enter a number:");
    const number = Number(input);
  
    if (isNaN(number)) {
      console.log("Invalid input. Please enter a valid number.");
    } else {
      const result =
        number === 0 ? "The number is zero." :
        number > 0 ? `${number} is positive.` : `${number} is negative.`;
  
      console.log(result);
    }
  }
  checkNumberSign();

// Using Math.abs()

function checkNumberSign(number) {
    if (isNaN(number)) {
        console.log("Invalid input. Please enter a valid number.");
    } else {
        if (number === 0) {
            console.log("The number is zero.");
        } else if (number === Math.abs(number)) {
            console.log("The number is positive.");
        } else {
            console.log("The number is negative.");
        }
    }
}
checkNumberSign(5);     // Output: The number is positive.
checkNumberSign(-7);    // Output: The number is negative.
checkNumberSign(0);     // Output: The number is zero.
