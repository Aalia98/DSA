// TODO: Using Native Approach

let first_array = [1, 3, 5, 7, 9];
let second_array = [2, 3, 4, 5, 6, 9];

let res_arr = (first_array, second_array) => {
    let new_array = [];
    for (let i = 0; i < first_array.length; i++) {
        for (let j = 0; j < second_array.length; j++) {
            if (first_array[i] === second_array[j]) {
                new_array.push(first_array[i]);
            }
        }
    }
    return new_array;
};

console.log("Array obtained is :");
console.log(res_arr(first_array, second_array));

// TODO: Using Better Approach

let first_array1 = [1, 3, 5, 7, 9];
let second_array2 = [2, 3, 4, 5, 6, 9];

let new_array = first_array2.filter(
    (element) => second_array2.includes(element));

console.log("Array obtained is :");
console.log(new_array);

// TODO: Using Set

let res_arr1 = (arr1, arr2) => {
    let first_array_set = new Set(arr1);
    let second_array_set = new Set(arr2);
    let new_array = [];
    for (let element of second_array_set) {
        if (first_array_set.has(element)) {
            new_array.push(element);
        }
    }
    return new_array;
};

let array1 = [1, 3, 5, 7, 9];
let array2 = [2, 3, 4, 5, 6, 9];

console.log("Array obtained is: ");
console.log(res_arr1(array1, array2));

// TODO: Using reduce() method

let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

let intersection = arr1.reduce((acc, curr) => {
  if (arr2.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(intersection); 

