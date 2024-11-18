// TODO: Using slice() method

let s1 = "GeeksforGeeks";
let s2 = s1.slice(1);
console.log(s2);

// TODO: Using subString() method

let str = "GeeksforGeeks";
let newStr = str.substring(1);
console.log(newStr); 

// TODO: Using Array Destructuring with join()

let str1 = "GeeksforGeeks";
let str2 = [...str1].slice(1).join('');
console.log(str2);

// TODO: Using replace() with Regular Expression

let string1 = "GeeksforGeeks";
let string2 = string1.replace(/^./, '');
console.log(string2);
