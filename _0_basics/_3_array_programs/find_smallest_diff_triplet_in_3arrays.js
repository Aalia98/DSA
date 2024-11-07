// TODO: Brute Force

const arr1 = [1, 2, 3, 4, 7];
const arr2 = [5, 10, 12];
const arr3 = [8, 9, 11, 14];
let minDifference = Number.MAX_SAFE_INTEGER;
let resultTriplet;

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    for (let k = 0; k < arr3.length; k++) {
      const min_value = Math.min(arr1[i], arr2[j], arr3[k]);
      const max_value = Math.max(arr1[i], arr2[j], arr3[k]);

      let diff = max_value - min_value;

      if (diff < minDifference) {
        minDifference = diff;
        resultTriplet = [arr1[i], arr2[j], arr3[k]];
      }
    }
  }
}
console.log(resultTriplet);

// TODO: Merge and Track

function findSmallestDifferenceTriplet(arr1, arr2, arr3) {
  let i = 0;
  let j = 0;
  let k = 0;
  let minDifference = Number.MAX_SAFE_INTEGER;
  let resultTriplet;

  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    const maxNum = Math.max(arr1[i], arr2[j], arr3[k]);
    const minNum = Math.min(arr1[i], arr2[j], arr3[k]);
    const difference = maxNum - minNum;

    if (difference < minDifference) {
      minDifference = difference;
      resultTriplet = [arr1[i], arr2[j], arr3[k]];
    }

    if (arr1[i] === minNum) {
      i++;
    } else if (arr2[j] === minNum) {
      j++;
    } else {
      k++;
    }
  }

  return resultTriplet;
}

const array1 = [1, 2, 3, 4, 7];
const array2 = [5, 10, 12];
const array3 = [8, 9, 11, 14];
console.log(findSmallestDifferenceTriplet(array1, array2, array3));

// TODO: Binary Search for Efficient Element Matching

function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return right;
}

function findSmallestDifferenceTriplet(arr1, arr2, arr3) {
    let minDifference = Number.MAX_SAFE_INTEGER;
    let resultTriplet = [];

    for (let i = 0; i < arr1.length; i++) {
        let a = arr1[i];

        // Find closest element in arr2
        let pos2 = binarySearch(arr2, a);
        let b1 = arr2[pos2] || Number.MAX_SAFE_INTEGER;
        let b2 = arr2[pos2 + 1] || Number.MAX_SAFE_INTEGER;
        let pos3 = binarySearch(arr3, a);
        let c1 = arr3[pos3] || Number.MAX_SAFE_INTEGER;
        let c2 = arr3[pos3 + 1] || Number.MAX_SAFE_INTEGER;
        for (let b of [b1, b2]) {
            for (let c of [c1, c2]) {
                let triplet = [a, b, c];
                let maxNum = Math.max(a, b, c);
                let minNum = Math.min(a, b, c);
                let difference = maxNum - minNum;

                if (difference < minDifference) {
                    minDifference = difference;
                    resultTriplet = triplet;
                }
            }
        }
    }

    return resultTriplet;
}
const ar1 = [1, 2, 3, 4, 7];
const ar2 = [5, 10, 12];
const ar3 = [8, 9, 11, 14];
console.log(findSmallestDifferenceTriplet(ar1, ar2, ar3));

