// TODO: Using the forEach loop approach

// Using forEach loop
let inputArray = [1, 2, 3, 4, 5, 6, 7];
let cummulativeSum = 0;

let outputCummulativeSumArray = [];
inputArray.forEach((element) => {
    cummulativeSum += element;
    outputCummulativeSumArray.push(cummulativeSum);
});

const outputSum =
    outputCummulativeSumArray[outputCummulativeSumArray.length - 1];

console.log("Cumulative Sum Array is:", outputCummulativeSumArray);
console.log("Total Cumulative Sum:", outputSum);

// TODO: Using the map() method in JavaScript

//Using map() method
let inputArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let cummulativeSum1 = 0;

let cumulativeSumArray = inputArray1.map((element) => {
    cummulativeSum1 += element;
    return cummulativeSum1;
});

let outputSum1 =
    cumulativeSumArray[cumulativeSumArray.length - 1];

console.log("Cumulative Sum Array is:", cumulativeSumArray);
console.log("Total Cumulative Sum:", outputSum);

// TODO: Using recursive function

//Using Recursion
let inputArray2 = [1, 2, 3, 4];
let totalCummaltiveArray = [];
let cummulativeSum2 = 0;
function calculateCumulativeSumUsingRecursion(index) {
    if (index < inputArray2.length) {
        cummulativeSum2 += inputArray2[index];
        totalCummaltiveArray.push(cummulativeSum2);
        calculateCumulativeSumUsingRecursion(index + 1);
    }
}
calculateCumulativeSumUsingRecursion(0);
let outputSum2 = totalCummaltiveArray[totalCummaltiveArray.length - 1];
console.log("Cumulative Sum Array is:", totalCummaltiveArray);
console.log("Total Cumulative Sum:", outputSum2);

// TODO: Using the reduce Method

function cumulativeSum(arr) {
    let sum = 0;
    return arr.map(num => sum += num);
}

let array = [1, 2, 3, 4];
console.log(cumulativeSum(array));

// TODO: Using the for loop

// Using for loop
let inputArray3 = [1, 2, 3, 4, 5, 6, 7];
let cummulativeSum3 = 0;

let outputCummulativeSumArray3 = [];
for (let i = 0; i < inputArray3.length; i++) {
    cummulativeSum3 += inputArray3[i];
    outputCummulativeSumArray3.push(cummulativeSum3);
}

const outputSum3 = outputCummulativeSumArray3[outputCummulativeSumArray3.length - 1];

console.log("Cumulative Sum Array is:", outputCummulativeSumArray3);
console.log("Total Cumulative Sum:", outputSum3);

