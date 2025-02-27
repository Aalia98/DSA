// TODO: Approach 1: By iterating over the set
{
let mySet = new Set()

mySet.add(3);
mySet.add(2);
mySet.add(9);
mySet.add(6);

console.log(mySet);

let myArr = [];

for (let element of mySet) {

    myArr.push(element);
}

console.log(myArr);
myArr.sort()

mySet.clear()

for (let element of myArr) {

    mySet.add(element);
}

console.log(mySet);
}

// TODO: Approach 2. Using Array.from() Method
{
let mySet = new Set()

mySet.add(3);
mySet.add(2);
mySet.add(9);
mySet.add(6);

console.log(mySet);

let myArray = [];

myArray = Array.from(mySet)
myArray.sort()
console.log(myArray)
mySet.clear()
mySet = new Set(myArray);
console.log(mySet)
}

// TODO: Approach 3: Using Spread Operator and Sort Method
{
let mySet = new Set()

mySet.add(3);
mySet.add(2);
mySet.add(9);
mySet.add(6);

console.log(mySet);

const sortedArray = [...mySet].sort();
const newSet = new Set(sortedArray);
console.log(newSet);
}
