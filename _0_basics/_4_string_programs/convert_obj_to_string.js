// TODO: 1. Using String() Constructor

// Inputs
let bool_to_s1 = Boolean(0);
let bool_to_s2 = Boolean(1);
let num_to_s = 1234;

// Display type of first input
console.log( typeof(bool_to_s1));

// After converting to string
console.log( typeof(String(bool_to_s1)));

// Display type of first input
console.log( typeof(bool_to_s2));

// After converting to string
console.log(typeof(String(bool_to_s2)));

// Display type of first input
console.log( typeof(num_to_s));

// After converting to string
console.log(typeof(String(num_to_s)));

// TODO: 2. Using JSON.stringify() Method

let obj_to_str = { 
    name: "GeeksForGeeks", 
    city: "Noida", 
    contact: 2488 
};

let myJSON = JSON.stringify(obj_to_str);
console.log(myJSON);

// TODO: 3. Using plus (+) Operator with string

let obj1 = new Object();
let obj2 = { ww : 99 , ss : 22};

console.log( typeof( obj1 ));
console.log( typeof( '' + obj1));
console.log( typeof( obj2 ));
console.log(typeof( '' + obj2 ));

// TODO: 4. Using toString() method

let obj = { 
    name: "GeeksForGeeks", 
    city: "Noida", 
    contact: 2488 
};

let objStr = obj.toString();

console.log(objStr);

// TODO: 5. Using Template Literals

const obj3 = { name: "Alice", age: 25, job: "Developer" };
const objToString = `Name: ${obj3.name}, Age: ${obj3.age}, Job: ${obj3.job}`;
console.log(objToString);
