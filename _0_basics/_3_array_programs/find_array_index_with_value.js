// TODO: Using indexOf() Method

const fruits = ['apple', 'banana', 'cherry', 'orange'];
const index = fruits.indexOf('cherry');
console.log(index); // Output: 2

// TODO: Using findIndex() Method

const array = [10, 20, 30, 40];
const idx = array.findIndex(num => num > 25);
console.log(idx); // Output: 2

// TODO: Using for Loop

const arrayNumbers = [10, 20, 30, 40];
let index1 = -1;
for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] === 30) {
        index1 = i;
        break;
    }
}
console.log(index1); // Output: 2

// TODO: Using Lodash _.findIndex() Method

const _ = require('lodash');
let array1 = [4, 2, 3, 1, 4, 2]

let index2 = _.findIndex(array1, (e) => {
    return e == 1;
}, 0);
console.log("original Array: ", array1)
console.log("index: ", index2)
