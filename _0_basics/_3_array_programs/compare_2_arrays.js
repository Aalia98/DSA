// TODO: Method 1: Using the JSON.stringify() Method

let arr1 = [1, 2, 3, 5];
let arr2 = [1, 2, 3, 5];

if (JSON.stringify(arr1) == JSON.stringify(arr2))
    console.log("True");
else
    console.log("False");
   
let arr3 = [1, 2, 4, 5];
if (JSON.stringify(arr1) == JSON.stringify(arr3))
    console.log("True");
else
    console.log("False");

// TODO: Method 2: Using JavaScript for Loop

function isEqual() {
    let a = [1, 2, 3, 5];
    let b = [1, 2, 3, 5];

    if (a.length != b.length)
        return "False";
    else {

        for (let i = 0; i < a.length; i++)
            if (a[i] != b[i])
                return "False";
        return "True";
    }
}
let v = isEqual();
console.log(v);

// TODO: Method 3: String Comparison

function isEqual(a, b) {
    return a.join() == b.join();
}
let a = [1, 2, 3, 5];
let b = [1, 2, 3, 5];

console.log(isEqual(a, b));

// TODO: Method 4: Using Array every() Method

const compareFunc = (a, b) =>
    a.length === b.length &&
    a.every((element, index) => element === b[index]);

let a1 = [1, 2, 3, 5];
let b1 = [1, 2, 3, 5];
console.log(compareFunc(a1, b1)); 

// TODO: Method 5: Using Lodash _.isEqual() Method

const _ = require('lodash');

let val1 = [1, 2, 3, 4];
let val2 = [1, 2, 3, 4];

console.log("The Values are Equal : "
    + _.isEqual(val1, val2));

// TODO: Method 6: Using Set

function compareArrays(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    if (set1.size !== set2.size) {
        return false;
    }

    for (const item of set1) {
        if (!set2.has(item)) {
            return false;
        }
    }

    return true;
}

const array1 = [1, 2, 3, 4];
const array2 = [4, 3, 2, 1];

console.log(compareArrays(array1, array2)); // Output: true

// TODO: Method 7: Using reduce and some Methods

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    const countElements = (arr) => 
        arr.reduce((acc, val) => {
            acc[val] = (acc[val] || 0) + 1;
            return acc;
        }, {});

    const count1 = countElements(arr1);
    const count2 = countElements(arr2);

    return !Object.keys(count1).some(key => count1[key] !== count2[key]);
}

// Example usage
const A = [1, 2, 3, 4];
const B = [4, 3, 2, 1];
const C = [1, 2, 3, 5];

console.log(arraysEqual(A, B)); // Output: true
console.log(arraysEqual(A, C)); // Output: false

// TODO: Method 8: Using Array.prototype.sort() Method

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let sortedArr1 = arr1.slice().sort();
    let sortedArr2 = arr2.slice().sort();

    for (let i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) return false;
    }
    return true;
}
let p = [3, 1, 2];
let q = [2, 3, 1];

console.log(arraysEqual(p, q)); 

