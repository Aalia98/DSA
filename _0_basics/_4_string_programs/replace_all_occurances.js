// TODO: Using string1.replace() method

const str = 'Welcome GeeksforGeeks, Welcome geeks';

const newString = str.replace(/Welcome/gi, 'Hello');

console.log(newString);

// TODO: Using String split() and join() method

const str1 = 'Welcome GeeksforGeeks, Welcome geeks';

const newString1 = str1.split('Welcome').join('Hello');

console.log(newString1);

// TODO:  Using replaceAll() method

const str2 = 'Welcome GeeksforGeeks, Welcome geeks';

const newString2 = str2.replaceAll("Welcome", "Hello");

console.log(newString2);

// TODO: Using Regular Expression

const string = 'Welcome GeeksforGeeks, Welcome geeks';
const searchString ="Welcome";
const replacementString ="Hello";

let regex = new RegExp(searchString, 'g');
let replacedString = string.replace(regex, replacementString);
console.log(replacedString);

// TODO: Using reduce() method

const str3 = 'Welcome GeeksforGeeks, Welcome geeks';
const searchString3 = "Welcome";
const replacementString3 = "Hello";

const newString3 = str.split(searchString3).reduce((acc, current, index, array) => {
    return acc + current + (index < array.length - 1 ? replacementString3 : '');
}, '');

console.log(newString3);

