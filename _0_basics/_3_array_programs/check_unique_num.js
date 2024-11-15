// TODO: Using of JavaScript Set

// JavaScript Approach using Set

function checkDistinct(array) {
    const checkSet = new Set(array);
    return checkSet.size === array.length;  
}

const input1 = [7, 8, 1, 5, 9];
console.log(checkDistinct(input1));

const input2 = [7, 8, 1, 5, 5];
console.log(checkDistinct(input2));

// TODO: Using of indexOf() Method

//JavaScript Program using indexOf() method

function checkDistinct(array) {
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) !== i) {
            return false;
        }
    }
    return true;
}
const arr1 = [7, 8, 1, 5, 9];
console.log(checkDistinct(input1));

const arr2 = [7, 8, 1, 5, 5];
console.log(checkDistinct(input2));

// TODO: Using Array.filter() and Array.includes()

function hasUniqueValues(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index).length === arr.length;
}

console.log(hasUniqueValues([1, 2, 3, 4, 5])); // true
console.log(hasUniqueValues([1, 2, 2, 3, 4])); // false

// TODO: Using Array.sort() and Array.every()

function checkDistinct(array) {
    array.sort((a, b) => a - b);
    return array.every((value, index) => index === 0 || value !== array[index - 1]);
}

const array1 = [7, 8, 1, 5, 9];
console.log(checkDistinct(array1));

const array2 = [7, 8, 1, 5, 5];
console.log(checkDistinct(array2));

// TODO: Using an object to track seen values

function hasUniqueValues(arr) {
    let seen = {};
    for (let val of arr) {
        if (seen[val]) {
            return false;
        }
        seen[val] = true;
    }
    return true;
}

console.log(hasUniqueValues([1, 2, 3, 4]));
console.log(hasUniqueValues([1, 2, 2, 4])); 
