// Using the Mathematical Approach (Summation of first N natural Numbers)

function findMissingNumber(arr) {
    const n = arr.length + 1;
    const sumOfFirstN = (n * (n + 1)) / 2;

    let sumOfArray = 0;
    for (let i = 0; i < n - 1; i++) {
        sumOfArray = sumOfArray + arr[i];
    }

    let missingNumber = sumOfFirstN - sumOfArray;

    return missingNumber;
}

const arr = [1, 2, 5, 4, 6, 8, 7];
const missingNumber = findMissingNumber(arr);
console.log("Missing Number: ", missingNumber);

// Using Hashing

function findMissing(arr, N) {
    let i;

    let temp = new Array(N).fill(0);

    for (i = 0; i < N; i++) {
        temp[arr[i] - 1] = 1;
    }

    let ans = 0;
    for (i = 0; i <= N; i++) {
        if (temp[i] === 0)
            ans = i + 1;
    }
    console.log(ans);
}

let array = [1, 3, 7, 5, 6, 2];
let n = array.length;

findMissing(array, n);

// Using Sorting

const array1 = [1, 4, 3, 2, 6, 5, 7, 10, 9];

array1.sort((a,b) => a-b);

for(let i = 0; i < array1.length-1; i++) {
    let diff = array1[i+1] - array1[i];
    for(let j = 1; j < diff; j++) {
        console.log(array1[i] + j);
        
    }
}

// Using XOR

function findMissingNumber(arr) {
    const n = arr.length + 1;

    let xor_all = 0;
    for (let i = 1; i <= n; i++) {
        xor_all ^= i;
    }

    let xor_arr = 0;
    for (let i = 0; i < arr.length; i++) {
        xor_arr ^= arr[i];
    }

    const missingNumber = xor_all ^ xor_arr;

    return missingNumber;
}

const array2 = [1, 2, 3, 5];
const missingNum = findMissingNumber(array2);
console.log("Missing Number: ", missingNum);

const arr2 = [1, 4, 3, 2, 6, 5, 7, 10, 9];
const missingNumber2 = findMissingNumber(arr2);
console.log("Missing Number: ", missingNumber2);
