// TODO: Using map() & split() method to replace characters from String

const str = "Hello user, welcome to GeeksforGeeks";
oldWord='Hello';
newWord='Hi'
const replacedString=str.split(' ').map(word => word === oldWord ? newWord : word).join(' ');
console.log(replacedString);

// TODO: Using String replace() Method to replace characters from String

const str1 = 'Welcome to GfG';
const replStr = 'GfG';
const newStr = 'Geeks';

const updatedStr = str1.replace(replStr, newStr);

console.log(updatedStr);

// TODO: Using Regular Expression to replace characters from String

const str2 = 'Welcome GeeksforGeeks, Welcome geeks';
const searchString ="Welcome";
const replacementString ="Hello";

let regex = new RegExp(searchString, 'g');

let replacedString1 = 
    str2.replace(regex, replacementString);

console.log(replacedString1);

// TODO: Using split and join Method to Replace Characters from a String

const str3 = 'Welcome to GfG';
const oldStr = 'GfG';
const newStr3 = 'Geeks';

const updatedStr3 = str3.split(oldStr).join(newStr3);

console.log(updatedStr3);
