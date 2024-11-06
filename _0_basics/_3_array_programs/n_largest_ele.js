// TODO: Brute Force Approach

const array = [1, 2, 3, 4, 5, 6], n = 3;
array.sort((a,b) => a-b);
for(let i = array.length; i >= n; i--) {
    console.log(array[i]);
}

// --------------------------------------------------------------------------------

let largArr = new Array();
let arr = new Array(93, 17, 56, 91,
    98, 33, 9, 38, 55, 78, 29, 81, 60);

function largest() {
    largArr[0] = 0;
    largArr[1] = 0;
    largArr[2] = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > largArr[0]) {
            largArr[0] = arr[i];

        }
    }

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > largArr[1]
            && arr[i] < largArr[0]) {
            largArr[1] = arr[i];

        }
    }

    for (i = 0; i < arr.length; i++) {
        if (arr[i] > largArr[2]
            && arr[i] < largArr[1]) {
            largArr[2] = arr[i];
        }
    }

    console.log(largArr[0]);
    console.log(largArr[1]);
    console.log(largArr[2]);
}
largest();

// -------------------------------------------------------------------------------------

let arr1 = new Array(93, 17, 56, 91, 98,
          33, 9, 38, 55, 78, 29, 81, 60);

findLargest3();

function findLargest3() {
    arr1.sort((a, b) => a < b ?
        1 : a > b ? -1 : 0);

    console.log(arr1[0]);
    console.log(arr1[1]);
    console.log(arr1[2]);

    console.log(arr1.slice(0, 3));
}

// TODO: Using Math.max and filter() method

function getNLargestElementsWithFilter(arr, n) {
    const largestElements = [];
    for (let i = 0; i < n; i++) {
        const max = Math.max(...arr);
        largestElements.push(max);
        arr = arr.filter(num => num !== max);
    }
    return largestElements;
}

const array2 = [1, 8, 3, 5, 9, 2];
console.log(getNLargestElementsWithFilter(array2, 3)); 

// TODO: Using Array.reduce

const array3 = [10, 5, 20, 8, 15];
const n1 = 3;

const largestElements = array3.reduce((acc, curr) => {
    if (acc.length < n1 || curr > acc[acc.length - 1]) {
        acc.push(curr);
        acc.sort((a, b) => b - a).slice(0, n1);
    }
    return acc;
}, []);
console.log("Largest elements:", largestElements);
