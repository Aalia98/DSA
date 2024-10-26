// TODO: Setting the array to a new array.

let Arr = [1, 2, 3, 4, 5];

console.log("Array Elements: " + Arr);
console.log("Array Length: " + Arr.length);

function emptyArray() {
    Arr = [];
    console.log("Empty Array Elements: " + Arr);
    console.log("Empty Array Length: " + Arr.length);
}

emptyArray();

// TODO: By using the length property to set the array length to zero.

let Arr1 = [1, 2, 3, 4, 5];

console.log("Array Elements: " + Arr1);
console.log("Array Length: " + Arr1.length);

function emptyArray() {
    Arr1.length = 0;
    console.log("Empty Array Elements: " + Arr1);
    console.log("Empty Array Length: " + Arr1.length);
}

emptyArray();

// TODO: By using the pop() method we will be popping each element of the array.

let Arr2 = [1, 2, 3, 4, 5];

console.log("Array Elements: " + Arr2);
console.log("Array Length: " + Arr2.length);

function emptyArray() {
    while (Arr2.length > 0) {
        Arr2.pop();
    }

    console.log("Empty Array Elements: " + Arr2);
    console.log("Empty Array Length: " + Arr2.length);
}

emptyArray();

// TODO: Using splice method

let array = [1, 2, 3];
console.log("original array : "+array); 
array.splice(0, array.length);
console.log(array); 
console.log("The length of array is : "+array.length)

