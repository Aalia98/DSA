// TODO: Using the filter() method

let array = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8];
console.log("Before filtering non unique values: " + array);

let unique = array.filter((value, index) => {
  return array.indexOf(value) === array.lastIndexOf(value);
});
console.log("After filtering non unique values: " + unique);

// TODO: Using for loop

const array1 = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8];
console.log("Before filtering non unique values: " + array1);
let unique1 = [];
for (let i = 0; i < array1.length; i++) {
  if (array1.lastIndexOf(array1[i]) === array1.indexOf(array1[i])) {
    unique1.push(array1[i]);
  }
}
console.log("After filtering non unique values: " + unique1);

// TODO: Using Set and filter

function filterNonUniqueUsingSet(arr) {
    const uniqueItems = new Set(arr.filter(item => 
    arr.indexOf(item) === arr.lastIndexOf(item)));
    return [...uniqueItems];
}

const array2 = [1, 2, 2, 3, 4, 4, 5];
console.log(filterNonUniqueUsingSet(array2));

// TODO: Using the reduce() Method

const array3 = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8];
console.log("Before filtering non unique values: " + array3);

const frequencyMap = array3.reduce((acc, value) => {
    acc[value] = (acc[value] || 0) + 1;
    return acc;
}, {});

const unique3 = array.filter(value => frequencyMap[value] === 1);

console.log("After filtering non unique values: " + unique3);

