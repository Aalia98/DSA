// TODO: Using the Spread Operator (…)

const originalArray = [1, 2, 3, 4, 5];
const copiedArray = [...originalArray];

console.log(copiedArray); // Output: [1, 2, 3, 4, 5]

// TODO: Using slice() Method

const originalArray1 = [1, 2, 3, 4, 5];
const copiedArray1 = originalArray1.slice();

console.log(copiedArray1); // Output: [1, 2, 3, 4, 5]

// TODO: Using Array.concat() Method

const sourceArray = [1, 2, 3, 4, 5];
const newArray = [].concat(sourceArray);

console.log(newArray);

// TODO: Using map() Method

const arr = [5, 10, 15, 20, 25];
const result = arr.map(item => item);

console.log(result);

// TODO: Using Array.from() Method

const originalArray2 = [1, 2, 3, 4, 5];
const copiedArray2 = Array.from(originalArray2);

console.log(copiedArray2); // Output: [1, 2, 3, 4, 5]

