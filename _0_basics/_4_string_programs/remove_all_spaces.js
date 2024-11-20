// TODO: Using string.split() and array.join() Methods

let s = "  Geeks for Geeks   ";
let res = s.split(" ").join("");
console.log(res);

// TODO: Using string.replaceAll() Method

let s1 = "  Geeks for Geeks   ";
let res1 = s1.replaceAll(" ", "");
console.log(res1);

// TODO: Using string.trim() Method

let s2 = "  Geeks for Geeks   ";
let res2 = s2.trim();
console.log(res2);

// TODO: Using Lodash _.trim() Method

const _ = require('lodash');
let s3 = "  Geeks for Geeks   ";
let res3 = _.trim(s3);
console.log(res3);

// TODO: Using Regular Expressions with string.replace() Method

let s4 = "  Geeks for Geeks   ";
let res4 = s4.replace(/\s+/g, "");
console.log(res4);

// TODO: Using string.match() with array.join() Method

let s5 = "  Geeks for Geeks   ";
let res5 = s5.match(/\S+/g).join("");
console.log(res5);