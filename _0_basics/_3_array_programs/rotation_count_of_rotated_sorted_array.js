// TODO: Approach 1: Using Recursive Approach

function findRotationCount(arr_input, low_part, high_part) {
    if (low_part >= high_part)
        return 0;

    if (arr_input[low_part] <= arr_input[high_part])
        return low_part;

    let mid_part =
        Math.floor((low_part + high_part) / 2);
    if (arr_input[mid_part] < arr_input[mid_part - 1]
        && arr_input[mid_part] < arr_input[mid_part + 1])
        return mid_part;

    if (arr_input[high_part] > arr_input[mid_part])
        return findRotationCount(
            arr_input, low_part, mid_part - 1);

    else
        return findRotationCount(
            arr_input, mid_part + 1, high_part);
}
let inputArray = [4, 5, 6, 7, 1, 2, 3];
let output =
    findRotationCount(
        inputArray, 0, inputArray.length - 1);
console.log("Rotation Count is:", output);

// TODO: Approach 2: Using Modulo Operation Approach

function rotationCountUsingModuloOperation(arrInput) {
    let tempVar = arrInput.length;
    let minimumIndex = 0;
    let minimumValue = arrInput[0];
    for (let i = 1; i < tempVar; i++) {
        if (arrInput[i] < minimumValue) {
            minimumValue = arrInput[i];
            minimumIndex = i;
        }
    }
    var rotationCountValue = minimumIndex % tempVar;
    return rotationCountValue;
}
let inputArr = [6, 7, 8, 1, 2, 3, 4, 5]
let output1 = rotationCountUsingModuloOperation(inputArr);
console.log("Rotation Count is:", output1);

// TODO: Approach 3: Using Repeated Concatenation and Substring

function rotationCountUsingConcat(arrInput) {
    const dupArray =
        arrInput.concat(arrInput);
    const sortedSubstr =
        dupArray.slice().sort((a, b) => a - b);
    const rotCountVal =
        dupArray.indexOf(sortedSubstr[0]);
    return rotCountVal;
}
const inputArr1 =
    [15, 18, 2, 3, 6, 12];
const output2 =
    rotationCountUsingConcat(inputArr1);
console.log("Rotation Count is:", output2);

// TODO: Approach 4: Two-Pointer Approach

function findRotationCount(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        if (arr[start] <= arr[end]) {
            return start;
        }

        let mid = Math.floor((start + end) / 2);
        let next = (mid + 1) % arr.length;
        let prev = (mid + arr.length - 1) % arr.length;

        if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
            return mid;
        }

        if (arr[mid] >= arr[start]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return 0;
}
const rotatedArray = [4, 5, 6, 7, 1, 2, 3];
const rotationCount = findRotationCount(rotatedArray);
console.log("Rotation count:", rotationCount);

