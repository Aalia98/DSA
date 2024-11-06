// TODO: Using the Array.slice() Method

const originalArray = [1, 2, 3];
const clonedArray = originalArray.slice();
console.log(clonedArray); 

// TODO: Using the spread Operator

const originalArray1 = [1, 2, 3];
const clonedArray1 = [...originalArray1];
console.log(clonedArray1);

// TODO: Using the Array.from() Method

const originalArray2 = [1, 2, 3];
const clonedArray2 = Array.from(originalArray2);
console.log(clonedArray2);

// TODO: Using the Array.concat() Method

const originalArray3 = [1, 2, 3];
const clonedArray3 = [].concat(originalArray3);
console.log(clonedArray3);

// TODO: Using a for loop

const originalArray4 = [1, 2, 3];
const clonedArray4 = [];
for (let i = 0; i < originalArray4.length; i++) {
    clonedArray4.push(originalArray4[i]);
}
console.log(clonedArray4);

// TODO: Using the Array.map() Method

const originalArray5 = [1, 2, 3];
const clonedArray5 = originalArray5.map(x => x);
console.log(clonedArray5);

// TODO: Using the Array.of() Method

const originalArray6 = [1, 2, 3];
const clonedArray6 = Array.of(...originalArray6);
console.log(clonedArray6);

// TODO: Using the JSON.parse() and JSON.stringify() Methods

const originalArray7 = [1, 2, 3];
const clonedArray7 = JSON.parse(JSON.stringify(originalArray7));
console.log(clonedArray7);

// TODO: Using the Object.assign() Method

const originalArray8 = [1, 2, 3];
const clonedArray8 = Object.assign([], originalArray8);
console.log(clonedArray8);

// TODO: Using Array.reduce() Method

const originalArray9 = [1, 2, 3, 4];

const clonedArray9 = originalArray9.reduce((acc, val) => {
  acc.push(val);
  return acc;
}, []);

console.log("Original Array:", originalArray9); // Output: [1, 2, 3, 4]
console.log("Cloned Array:", clonedArra9y); // Output: [1, 2, 3, 4]

// TODO: Using the Array.flatMap() Method

const originalArr = [1, 2, 3, 4, 5];

const clonedArr = originalArr.flatMap(element => [element]);

console.log(clonedArr);
console.log(originalArr === clonedArr);

