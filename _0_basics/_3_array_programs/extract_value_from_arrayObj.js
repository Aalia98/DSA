// TODO: Using Array Push

let desiredValue = (fruits_quantity) => {
    let output = [];
    for (let item of fruits_quantity) {
        output.push(item.apple);
    }
    return output;
};

let fruits_quantity = [
    {
        apple: 2,
        mango: 4,
    },
    {
        apple: 3,
        mango: 6,
    },
    {
        apple: 7,
        mango: 11,
    },
];

let result = desiredValue(fruits_quantity);
console.log(result);

// TODO: Using Map

let desiredValue1 = (fruits_quantity, desired_key) => {
    let desiredValue = fruits_quantity.map((element) => element[desired_key]);
    return desiredValue;
};

let fruits_quantity1 = [
    {
        apple: 2,
        mango: 4,
    },
    {
        apple: 3,
        mango: 6,
    },
    {
        apple: 7,
        mango: 11,
    },
];
let desired_key = "apple"; 

let result1 = desiredValue1(fruits_quantity1, desired_key);
console.log(result1);

// TODO: Using reduce()

const objectsArray = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];
  
  const names = objectsArray.reduce((acc, obj) => {
    acc.push(obj.name);
    return acc;
  }, []);
  console.log(names); // ['Alice', 'Bob', 'Charlie']
  
// TODO: Using for…of Loop

let objectsArray1 = [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}];
let names1 = [];
for (let obj of objectsArray1) {
  names1.push(obj.name);
}
console.log(names1); 

