// TODO: Using JavaScript slice() Method

let chunk = 4;
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let arr1 = arr.slice(0, chunk);
let arr2 = arr.slice(chunk, arr.length);

console.log('Array1: ' + arr1 + '\nArray2: ' + arr2);

// TODO: Using JavaScript splice() Method

let chunk1 = 2;
let array = [1, 2, 3, 4, 5, 6, 7, 8];

let array1 = arr.splice(0, chunk1);
let array2 = arr.splice(0, chunk1);
let array3 = arr.splice(0, chunk1);
let array4 = arr.splice(0, chunk1);

console.log("Array1: " + array1);
console.log("Array2: " + array2);
console.log("Array3: " + array3);
console.log("Array4: " + array4);

// TODO: Using Lodash _.chunk() Method

let _ = require("lodash");
let ar = [1, 2, 3, 4, 5, 6,
    "a", "b", "c", "d"];
console.log("Before: ", ar)

console.log("After: ", _.chunk(ar, 3))

// TODO: Using a for Loop Method

function chunkArrayLoop(array, size) {
    let result = [];
    for (let i = 0; i < array.length; i += size) {
        let chunk = [];
        for (let j = i; j < i + size && j < array.length; j++) {
            chunk.push(array[j]);
        }
        result.push(chunk);
    }
    return result;
}
console.log(chunkArrayLoop([1, 2, 3, 4, 5, 6], 2));

// TODO: Approach 5: Using the reduce() Method

function chunkArrayReduce(arr, size) {
    return arr.reduce((acc, _, index) => {
        if (index % size === 0) {
            acc.push(arr.slice(index, index + size));
        }
        return acc;
    }, []);
}
console.log(chunkArrayReduce([1, 2, 3, 4, 5, 6, 7, 8], 3));

