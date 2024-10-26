// TODO: Using for loop

let arr = [4, 8, 7, 13, 12]
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log("Sum is " + sum) // Prints: 44

// TODO: Using forEach() Method

let arr1 = [4, 8, 7, 13, 12]
let sum1 = 0;

arr1.forEach(x => {
    sum1 += x;
});

// Prints: 44
console.log("Sum is " + sum1);

// TODO: Using reduce() Method

let arr2 = [4, 8, 7, 13, 12]

let sum2 = arr2.reduce(function (x, y) {
    return x + y;
}, 0);

// Prints: 44
console.log("Sum using Reduce method: " + sum2);

// TODO: Using Recursion

let arr3 = [4, 8, 7, 13, 12];

function sumArray(arr3, index) {
    if (index === arr3.length) {
        return 0;
    }
    return arr3[index] + sumArray(arr3, index + 1);
}

console.log("Sum is " + sumArray(arr3, 0));

// TODO: Using Lodash _.sum() Method

const _ = require("lodash");

let gfg = _.sum([5, 10, 15, 20, 25]);

console.log(gfg);

// TODO: Using the eval Function

const result = array => eval(array.join('+'));
const array = [1, 2, 3, 4, 5];
console.log(result(array)); // 15

