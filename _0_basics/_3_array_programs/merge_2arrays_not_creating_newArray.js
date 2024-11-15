// TODO: Using push() method

let array1 = [ 1, 2, 3 ];
let array2 = [ 4, 5, 6 ];

array1.push(...array2);

console.log(array1); 

// TODO: Using Array concat() Method

let arr1 = [ 1, 2, 3 ]; 
let arr2 = [ 4, 5, 6 ];

arr1 = arr1.concat(arr2);
console.log(arr1);

// TODO: Using Array splice() Method

let ar1 = [ 1, 2, 3 ];
let ar2 = [ 4, 5, 6 ];

ar1.splice(ar1.length, 0, ...ar2);
console.log(ar1); 

// TODO: Using a for Loop

let a1 = [ 1, 2, 3 ];
let a2 = [ 4, 5, 6 ];

for (let i = 0; i < a2.length; i++) {
    a1.push(a2[i]);
}

console.log(a1);
