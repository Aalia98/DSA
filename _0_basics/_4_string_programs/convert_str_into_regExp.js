// TODO: Example 1:  For the string, we will take “Geeks For Geeks'”.

const str = "Geeks for Geeks";
const regex = prompt("Enter RegExp");
const reg = new RegExp(regex, "g");

const result = str.match(reg);

if (result) console.log(result);
else console.log("Not Found");

// TODO: Example 2: In this example, we will use the RegExp constructor.

{const userInput = prompt("Enter a regular expression pattern:");
const regex = new RegExp(userInput);
console.log(regex);}