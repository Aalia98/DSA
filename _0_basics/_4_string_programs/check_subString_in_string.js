// TODO: Using includes()

let s = "abcde";
let res = s.includes("bcd");

console.log(res); 

// TODO: Using indexOf() – Gives Index of First Occurrence as well

let s1 = "Hello, world!";
let res1 = s1.indexOf("world") !== -1;

console.log(res1); 

// TODO: Using Regular Expressions (RegExp)

let s2 = "Hello, world!";
let pat = /world/;
let res2 = pat.test(s2);

console.log(res2); 