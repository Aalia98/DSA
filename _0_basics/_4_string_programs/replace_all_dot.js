// TODO: Using JavaScript replace() Method
{
let str = "A.Computer.science.Portal";

let res = str.replace(/\./g, " ");

console.log("String 1: " + str);
console.log("String 2: " + res);
}
// TODO: Using JavaScript Split() and Join() Method
{
let str = "A.Computer.Science.portal";

let newStr = str.split(".").join(" ");

console.log("String 1: " + str);
console.log("String 2: " + newStr);
}
// TODO: Using JavaScript reduce() Method and spread operator
{
let str = "Geeks.for.Geeks";
let newStr = [...str].reduce(
    (s, c) => (c === "." ? s : s + c),""
);
console.log("String 1: " + str);
console.log("String 2: " + newStr);
}
// TODO: Using JavaScript replaceAll() Method
{
    let str = "Geeks.for.Geeks";
    let replacedStr = str.replaceAll(".", "");
    
    console.log("Original string : " + str);
    console.log("Modified string : " + replacedStr);
}
// TODO: Using JavaScript for loop
{
    const originalString = "Hi,.Welcome.to.GeeksforGeeks";
    let replacedStr = '';
       for (let i = 0; i < originalString.length; i++) {
           if (originalString[i] === '.') {
               replacedStr += ' ';
           } else {
               replacedStr += originalString[i];
           }
       }
   
   console.log("Original string : " + originalString);
   console.log("Modified string : " + replacedStr);
}
// TODO: Using JavaScript map() Method on Arrays
{
let str = "Learning.is.fun.with.JavaScript";
let newStr = Array.from(str).map(char => char === '.' ? ' ' : char).join('');

console.log("String 1: " + str);
console.log("String 2: " + newStr);
}
