// Using Math.sqrt() Method

const num1 = 25;
const num2 = -120;
const num3 = 'Geeks';

console.log('Square Root of ' + 
    num1 + ' is ' + Math.sqrt(num1));
  
    // Math.sqrt() function returns NaN, because
    // the passed value is negative integer
console.log('Square Root of ' + 
    num2 + ' is ' + Math.sqrt(num2));
    
    // Math.sqrt() function returns NaN, because
    // the passed value is string
console.log('Square Root of ' + 
    num3 + ' is ' + Math.sqrt(num3));

// Using JavaScript Math.pow() Method

const n1 = 25;
const n2 = -120;
const n3 = 'Geeks';

console.log('Square Root of ' + 
    n1 + ' is ' + Math.pow(n1, 1/2));
  
    // Math.pow() function returns NaN, because
    // the passed value is negative integer
console.log('Square Root of ' + 
    n2 + ' is ' + Math.pow(n2, 1/2));
    
    // Math.pow() function returns NaN, because
    // the passed value is string
console.log('Square Root of ' + 
    n3 + ' is ' + Math.pow(n3, 1/2));

// Using Binary Search

function findSqrt(number) {
    let start = 0, end = number, mid, ans;

    // To find integral part of square
    // root of number
    while (start <= end) {

        // Find mid
        mid = Math.floor((start + end) / 2);

        // If number is perfect square
        // then break
        if (mid * mid == number) {
            ans = mid;
            break;
        }

        // Increment start if integral
        // part lies on right side
        // of the mid
        if (mid * mid < number) {

            // First start value should be
            // added to answer
            ans = start;

            // Then start should be changed
            start = mid + 1;
        }

        // Decrement end if integral part
        // lies on the left side of the mid
        else {
            end = mid - 1;
        }
    }

    // To find the fractional part
    // of square root upto 5 decimal
    let increment = 0.1;

    for (let i = 0; i < 5; i++) {
        while (ans * ans <= number) {
            ans += increment;
        }

        // Loop terminates,
        // when ans * ans > number
        ans = ans - increment;
        increment = increment / 10;
    }
    return ans;
}
const n = 36;
console.log(findSqrt(n));

// Newton’s Method

function findSquareRootUsingNewton(number) {
    if (number < 0) return NaN; // Square root of negative numbers is NaN

    let guess = number / 2; // Initial guess

    // Iterate until the guess converges
    while (Math.abs(guess * guess - number) > Number.EPSILON) {
        guess = (guess + number / guess) / 2;
    }

    return guess;
}

// Test Cases
console.log("Square root of 25:", findSquareRootUsingNewton(25)); // Output: 5
console.log("Square root of -120:", findSquareRootUsingNewton(-120)); // Output: NaN
console.log("Square root of 'Geeks':", findSquareRootUsingNewton('Geeks')); // Output: NaN
