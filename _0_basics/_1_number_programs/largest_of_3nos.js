// Using Conditional Statements (if-else)
function largest(a,b,c) {
    if(a > b) {
        if(a > c) return a;
        else return c;
    } else {
        if(b > c) return b;
        else return c;
    }
}
console.log(largest(1,3,6));

// Using the Math.max() Method
let largestNum = Math.max(1, Math.max(3,6));
console.log(largestNum);


// Using the Spread Operator with Math.max()
function findLargest(num1, num2, num3) {
    return Math.max(...[num1, num2, num3]);
}
const largestNumber = findLargest(10, 5, 8);
console.log("Largest number:", largestNumber);
    
// Using the Ternary Operator
const a = 1, b = 3, c = 6;
a > b ? (a > c ? console.log(a) : console.log(c)) : (b > c ? console.log(b) : console.log(c));

// Using Array.sort()
function largestOfThree(num1, num2, num3) {
    const array = [num1, num2, num3];
    array.sort((a, b) => a - b);
    return array[array.length-1];
}
console.log(largestOfThree(10, 11, 13));

