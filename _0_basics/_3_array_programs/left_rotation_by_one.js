// TODO: Approach 1: Using the map() method

function rotationFunction(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    return arr.map((_, index, array) =>
        array[(index + 1) % array.length]);
}

let arr1 = [1, 2, 3, 4, 5];
let result = rotationFunction(arr1);

console.log("Original Array:", arr1);
console.log("Array after Left Rotation :", result);

// TODO: Approach 2: Using slice() method

function rotationalArray(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let element1 = arr[0];
    let remainingElement = arr.slice(1);

    return [...remainingElements, element1];
}

const array1 = [10, 20, 30, 40, 50];
const result1 = rotationalArray(array1);

console.log("Original Array:", array1);
console.log("Array after Left Rotate by one :", result1);

// TODO: Approach 3: Using shift() and push() method

function rotationalArray(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let elem1 = arr.shift();
    arr.push(elem1);

    return arr;
}

let array2 = [15, 16, 17, 18, 19];
let result2 = rotationalArray([...array2]);

console.log("Original Array:", array2);
console.log("Array after Left Rotation:", result2);

// TODO: Approach 4: Using for loop

function leftRotateByOne(arr) {
    const temp = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = temp;
    return arr;
}
const arr = [1, 2, 3, 4, 5];
console.log("Rotated Array:", leftRotateByOne(arr));

// TODO: Approach 5: Using destructuring assignment and the spread operator

function leftRotateByOne(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const [first, ...rest] = arr;
    return [...rest, first];
}

const array = [1, 2, 3, 4, 5];
console.log("Rotated Array:", leftRotateByOne(array));

// TODO: Approach 6: Using the reduce() Method

function leftRotateByOneUsingReduce(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    return arr.slice(1).reduce((accumulator, currentValue) => {
        accumulator.push(currentValue);
        return accumulator;
    }, [arr[0]]);
}

const arr3 = [6, 7, 8, 9, 10];
const result3 = leftRotateByOneUsingReduce(arr3);

console.log("Original Array:", arr3);
console.log("Array after Left Rotation:", result3);

// TODO: Approach 7: Using Array destructuring and Array.prototype.concat()

function leftRotateByOne(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const [first, ...rest] = arr;
    return rest.concat(first);
}
const array4 = [10, 20, 30, 40, 50];
console.log("Original Array:", array4);
const rotatedArray = leftRotateByOne(array4);
console.log("Array after Left Rotate by one:", rotatedArray);


