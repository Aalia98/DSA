// TODO: Using charAt() Method
 
let str = "GeeksforGeeks";
let res = str.charAt(str.length - 1);

console.log(res);

// TODO: Using str.slice() Method

let str1 = "GeeksforGeeks";
let res1 = str1.slice(-1);

console.log(res1);

// TODO: Using str.substr() Method

let str2 = "GeeksforGeeks";
let res2 = str2.substr(-1);

console.log(res2);

// TODO: Using JavaScript str.length for index

let str3 = "GeeksforGeeks";
let res3 = str3[str3.length-1];

console.log(res3);

// TODO: Using String.at() method

let str4 = "GeeksforGeeks";
let res4 = str4.at(-1);

console.log(res4);

// TODO: Using String.match() method

let str5 = "GeeksforGeeks";
let res5 = str5.match(/.$/g);

console.log(res5);

// TODO: Using Array.prototype.pop() Method

let str6 = "GeeksforGeeks";

let arr = str6.split('');
let lastChar = arr.pop();

console.log(lastChar);
