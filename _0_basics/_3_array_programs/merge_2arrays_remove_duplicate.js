// TODO: Using Spread Operator and Set() Object

let array1 = [1, 2, 3, 4, 5, 6]; 
let array2 = [3, 4, 5, 7];
let array = [...array1, ...array2];
let mergedArray = [...new Set(array)]
console.log(mergedArray);

// TODO: Using concat() Method and Set() Object

let arr1 = [1, 2, 3, 4, 5, 6]; 
let arr2 = [3, 4, 5, 7];
let arr = arr1.concat(arr2);
let mergedArr = [...new Set(arr)]
console.log(mergedArr);

// TODO: Using a for Loop and indexOf

let ar1 = [1, 2, 3];
let ar2 = [3, 4, 5];
let mergedArray2 = [...ar1];

for (let item of ar2) {
    if (mergedArray2.indexOf(item) === -1) {
        mergedArray2.push(item);
    }
}
console.log(mergedArray2); 

// TODO: Using Map for Merging Arrays and Removing Duplicates

const a = [1, 2, 3, 4, 5];
const b = [4, 5, 6, 7];
function mergeAndRemoveDuplicates(arr1, arr2) {
    const map = new Map();
    
    arr1.forEach(item => map.set(item, true));
    arr2.forEach(item => map.set(item, true));
    
    return Array.from(map.keys());
}

const mergedArray3 = mergeAndRemoveDuplicates(a, b);

console.log(mergedArray3);

