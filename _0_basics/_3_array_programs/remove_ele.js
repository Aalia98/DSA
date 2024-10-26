// TODO: Using pop() Method

let arr = ["Apple", "Banana", "Orange", "Mango"];

let popped = arr.pop();

console.log("Removed Element:", popped);
console.log("Remaining Array Elements:", arr);
console.log("Array Length:", arr.length);

// ------------------------------------------------------------------

let arr1 = ["Apple", "Banana", "Orange", "Mango"];

console.log("Original Array: ", arr1)

while (arr1.length) {

    arr1.pop();
}
console.log("Array Length: ", arr1.length)

// TODO: Using shift() Method

let arr2 = ["Apple", "Banana", "Orange", "Mango"];

let shifted = arr2.shift();

console.log("Removed Element: ", shifted);
console.log("Remaining Array Elements: ", arr2);

// TODO: Using splice() Method

let arr3 = ["Apple", "Banana", "Orange", "Mango"];

let spliced = arr3.splice(1, 1);

console.log("Removed element: ", spliced);
console.log("Remaining elements: ", arr3);

// ------------------------------------------------------------------------------

let arr4 = ["Apple", "Banana", "Orange", "Mango"];

for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] === "Banana") {
        let spliced = arr4.splice(i, 1);
        console.log("Removed Element: ", spliced);
        console.log("Remaining Elements: ", arr4);
    }
}

// ----------------------------------------------------------------------------

let arr5 = ["Apple", "Banana", "Orange", "Mango"];

console.log("Original Array: ", arr5);

arr5.splice(0, arr5.length);

console.log("Empty Array: ", arr5);

// TODO: Using filter() Method

function isPositive(value) {
    return value > 0;
}

let arr6 = [10, 25, 30, -10, 32, -35];
let filtered = arr6.filter(isPositive);

console.log("Positive Array Elements: ", filtered);

// TODO: Using Delete Operator

let arr7 = ["Apple", "Banana", "Orange", "Mango"];

let deleted = delete arr7[2];

console.log("Removed Element: ", deleted);
console.log("Remaining Array Elements: ", arr7);

// TODO: Using Array Reset

let array1 = ["Apple", "Banana", "Orange", "Mango"];
let array2 = [10, 20, 30, 40, 50];

console.log("Array1 Elements: ", array1);
console.log("Array2 Elements: ", array2);

array1 = [];
array2.length = 0;

console.log("Updated Array1: ", array1);
console.log("Updated Array2: ", array2);

// TODO: Using for() Loop and New Array

let removeElement = (array, n) => {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== n) {
            newArray.push(array[i]);
        }
    }
    
    return newArray;
};

let arr8 = [10, 20, 30, 40, 50];
let remElement = 20;

let result = removeElement(arr8, remElement);

console.log("Remaining Array Elements: ", result);

// TODO: Using lodash _.remove() Method

// Import Lodash Library
const _ = require('lodash');

// Declare and Initialize an Array
let array = [101, 98, 12, -1, 848];

// Using _.remove() Method to Remove Odd Number
let evens= _.remove(array, function(n) {
    return n % 2 == 0;
});

console.log("Remaining Odd Elements: ", array);
console.log("Removed Even Elements: ", evens);  

// TODO: Using forEach() and splice() Methods

function removeElement(array, elementToRemove) {
    array.forEach((item, index) => {
        if (item === elementToRemove) {
            array.splice(index, 1);
        }
    });
    return array;
}

let arr9 = ["Apple", "Banana", "Orange", "Mango"];
console.log("Original Array: ", arr9);

removeElement(arr9, "Banana");

console.log("Updated Array: ", arr9);
