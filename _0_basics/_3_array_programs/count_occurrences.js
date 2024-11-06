// TODO: Using the JavaScript forEach() Method

let arr = [
    'geeks', 2, 'geeks', 2, 'Javascript', 4,
    'Javascript', 5, 'for', 6, 'Javascript', 1,
    'for', 5, 7, 8, 'for'
];
const counter = {};
arr.forEach((ele) => {
    if(counter[ele]) {
        counter[ele] += 1;
    }else {
        counter[ele] = 1
    }
});
console.log(counter);

// TODO: Using reduce() Method

const arr1 = [
    'geeks', 2, 'geeks', 2, 'Javascript', 4,
    'Javascript', 5, 'for', 6, 'Javascript', 1,
    'for', 5, 7, 8, 'for'
];

let count = arr1.reduce(function (value, value2) {
    return (
        value[value2] ? ++value[value2] :(value[value2] = 1),
        value
    );
}, {});
console.log(count);

// TODO: Using filter() Method

const arr2 = [
    'geeks', 2, 'geeks', 2, 'Javascript', 4,
    'Javascript', 5, 'for', 6, 'Javascript', 1,
    'for', 5, 7, 8, 'for'
];

const itemCounter = (value, index) => {
    return value.filter((x) => x == index).length;
};
console.log(itemCounter(arr2, 'geeks'))

// TODO: Using for…of Loop

const arr3 = [
    'geeks', 2, 'geeks', 2, 'Javascript', 4,
    'Javascript', 5, 'for', 6, 'Javascript', 1,
    'for', 5, 7, 8, 'for'
];
const count1 = {};

for (let ele of arr3) {
    if (count1[ele]) {
        count1[ele] += 1;
    } else {
        count1[ele] = 1;
    }
}
console.log(count1);

// TODO: Using Lodash _.frequencies() Method

let _ = require('lodash-contrib');

let array = ["Geeks", "Geeks", "GFG",
    "Computer_Science_Portal",
    "Geeks", "GFG"];

let obj = _.frequencies(array);

console.log("Original Array : ", array);
console.log("Frequency of elements : ", obj);

// TODO: Using Array.prototype.sort() Method

const arr4 = [
    'geeks', 2, 'geeks', 2, 'Javascript', 4,
    'Javascript', 5, 'for', 6, 'Javascript', 1,
    'for', 5, 7, 8, 'for'
];

const countOccurrences = (arr) => {
    const sortedArr = arr.slice().sort();
    const counter = {};
    
    for (let i = 0; i < sortedArr.length; i++) {
        const ele = sortedArr[i];
        if (counter[ele]) {
            counter[ele] += 1;
        } else {
            counter[ele] = 1;
        }
    }

    return counter;
};
console.log(countOccurrences(arr4));
