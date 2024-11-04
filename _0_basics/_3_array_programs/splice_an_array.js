// TODO: Using splice() and the copy of the array

let originalArr = ["c", "cpp", "java",
    "python", "javascript", "kotlin"];

let cloneArr = [...originalArr]

let extractedArr = cloneArr.splice(0, 4);

console.log("Extracted Array");
console.log(extractedArr);

console.log("Original Array");
console.log(originalArr);

// TODO: Using the filter Method

let originalArr1 = ["c", "cpp", "java", 
    "python", "javascript", 
    "kotlin"];

let start = 1;
let howMany = 3;

let extractedArr1 = 
originalArr.filter((item, index) => {
return index >= start && index < howMany + start;
})

console.log("Extracted Array");
console.log(extractedArr1);

console.log("Original Array");
console.log(originalArr1);

// TODO: Using slice() Method

let arr = [10, 20, 30, 40, 50, 
    60, 70, 80, 90, 100];
let clonedArray = arr.slice(0);
let splicedArray = clonedArray.splice(1, 6);
console.log(arr);
console.log(splicedArray);
