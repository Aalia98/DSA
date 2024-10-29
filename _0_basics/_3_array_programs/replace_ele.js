// TODO: Using Array Indexing

let array = [1, 2, 3, 4, 5];
const index = 2; 
const newValue = 10;
array[index] = newValue;
console.log(array);

// TODO: Using the splice() Method

function element_replace() {

    const list = ["January",
        "March",
        "April",
        "June"];

    list.splice(1, 0, "February");
    list.splice(4, 1, "May");
    console.log(list);
}
element_replace();

// TODO: Using the indexOf() Method

const arr = ['a', 'b', 'c'];
const idx = arr.indexOf('a');
if (idx !== -1) {
  arr[idx] = 'z';
}
console.log(arr);

// TODO: Using Array Destructuring

const replaceItem = (array, index, newItem) => {
    return [...array.slice(0, index), newItem, ...array.slice(index + 1)];
};

let array = [1, 2, 3, 4, 5];
array = replaceItem(array, 2, 99);
console.log(array);

// TODO: Using findIndex() Method

let arr1 = [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}, {id: 3, name: 'Doe'}];
let index1 = arr1.findIndex(item => item.id === 2);
if (index1 !== -1) {
    arr1[index1] = {id: 2, name: 'Janet'};
}
console.log(arr1); 

// TODO: Using JavaScript reduce() Method

function replaceItem(array, oldItem, newItem) {
    return array.reduce((acc, curr) => {
        if (curr === oldItem) {
            acc.push(newItem);
        } else {
            acc.push(curr);
        }
        return acc;
    }, []);
}
const originalArray = ['a', 'b', 'c', 'd'];
const oldItem = 'c';
const newItem = 'z';

const newArray = replaceItem(originalArray, oldItem, newItem);

console.log('Original Array:', originalArray); 

console.log('New Array:', newArray);

