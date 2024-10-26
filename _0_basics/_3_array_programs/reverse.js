// TODO: Using the reverse method

let numbers_array = [1, 2, 3, 4, 5];

console.log("Original Array: ");
console.log(numbers_array);

numbers_array.reverse();

console.log("Reversed Array: ");
console.log(numbers_array);

// TODO: Using for loop

let original_array = [1, 2, 3, 4];

let reversed_array = [];

console.log("Original Array: ");
console.log(original_array);

for (let i = original_array.length - 1;
    i >= 0; i--) {
    reversed_array.push(original_array[i]);
}

console.log("Reversed Array: ");
console.log(reversed_array);

// TODO: Using unshift method

let original_array1 = [1, 2, 3, 4, 5, 6];

let reversed_array1 = [];

console.log("Original Array: ");
console.log(original_array1);

original_array1.forEach((element) => {
    reversed_array1.unshift(element);
});

console.log("Reversed Array: ");
console.log(reversed_array1);

// TODO: Using reduce method

let original_array2 = [1, 2, 3, 4];

let reversed_array2 = [];

console.log("Original Array: ");
console.log(original_array2);

reversed_array2 = original_array2
    .reduce((acc, item) => [item].concat(acc), [])

console.log("Reversed Array: ");
console.log(reversed_array2);

// TODO: Using map function

let array = [1, 2, 3, 4, 5];

console.log("Original Array: ");
console.log(array);

const reverse_array = array.map((item, idx) => array[array.length - 1 - idx])

console.log("Reversed Array: ");
console.log(reverse_array);

// TODO: Using Lodash _.reverse method

const _ = require("lodash");

let array1 = [1, 2, 3, 4]

console.log("original Array1: ", array1)

let reversedArray = _.reverse(array1);

console.log("reversed Array: ", reversedArray)

console.log("original Array1: ", array1)

// TODO: Using recursion

function reverseArray(arr) {
    if (arr.length === 0) {
        return [];
    } else {
        return [arr[arr.length - 1]].concat(reverseArray(
        arr.slice(0, arr.length - 1)));
    }
}

const arr = [1, 2, 3, 4, 5];
const reversedArr = reverseArray(arr);
console.log(reversedArr);

