// TODO: Using the Array unshift() Method

let Arr = [ 1, 2, 3, 4, 5 ];

console.log(`Array Elements Before adding the element at start: ${Arr}`);

function myGFG(){
    Arr.unshift("6");
    console.log(`Array Elements After adding the element at start: ${Arr}`);
}

myGFG();

// TODO: Using Array splice() Method

let Arr1 = [1, 2, 3, 4, 5];

console.log(`Array Elements Before element addition: ${Arr1}`);

function myGFG() {
    Arr1.splice(0, 0, "6");
    console.log(`Array Elements After element addition: ${Arr1}`);
}
myGFG();

// TODO: Using the Spread Operator

let arr = [66, 85, 19, 7];
console.log(`Array Elements Before element addition:${arr}`);
arr = [34, ...arr]; 
console.log(`Array Elements After element addition: ${arr}`);

// TODO: Using Array concat() Method

const arr1 = [23, 45, 12, 67];
console.log(`Array Elements Before element addition: ${arr1}`);

console.log(`Array Elements After element addition: ${[32].concat(arr1)}`);

// TODO: Using Array.prototype.copyWithin() Method

const prependElement = (arr, element) => {
    arr.length = arr.length + 1;
    arr.copyWithin(1, 0);
    arr[0] = element;
    return arr;
};

const originalArray = [2, 3, 4];
const newArray = prependElement(originalArray, 1);

console.log(newArray); 

// TODO: Using Array.prototype.reduceRight() Method

let arr2 = [2, 3, 4];

console.log(`Array Elements Before element addition: ${arr2}`);

const addAtBeginning = (arr, element) => {
    return arr.reduceRight((acc, current, index, array) => {
        acc.unshift(current);
        return acc;
    }, [element]);
};

arr2 = addAtBeginning(arr2, 1);

console.log(`Array Elements After element addition: ${arr2}`);
