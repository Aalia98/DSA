// TODO: Using JavaScript filter() Method

let arr = ["apple", "mango", "apple",
    "orange", "mango", "mango"];

function removeDuplicates(arr) {
return arr.filter((item,
  index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));

// TODO: Using JavaScript set() Method

let arr1 = ["apple", "mango", "apple",
    "orange", "mango", "mango"];

function removeDuplicates(arr) {
return [...new Set(arr)];
}

console.log(removeDuplicates(arr1));

// TODO: Using JavaScript forEach() Method

let arr2 = ["apple", "mango",
    "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
let unique = [];
arr.forEach(element => {
  if (!unique.includes(element)) {
      unique.push(element);
  }
});
return unique;
}
console.log(removeDuplicates(arr2));

// TODO: Using JavaScript reduce() Method

let arr3 = ["apple", "mango",
    "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
let unique = arr.reduce(function (acc, curr) {
  if (!acc.includes(curr))
      acc.push(curr);
  return acc;
}, []);
return unique;
}
console.log(removeDuplicates(arr3));

// TODO: Using JavaScript indexOf() Method

let arr4 = ["apple", "mango",
    "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
let unique = [];
for (i = 0; i < arr.length; i++) {
  if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
  }
}
return unique;
}
console.log(removeDuplicates(arr4));


