// TODO: Approach 1: Using Naive Approach

{
    function findUnique(str) {
        let uniq = "";
    
        for (let i = 0; i < str.length; i++) {
            if (uniq.includes(str[i]) === false) {
                uniq += str[i]
            }
        }
        return uniq;
    }
    
    console.log(findUnique("Geeksforgeeks"))
    console.log(findUnique("Geeksforgeeks Is great"))
}
// TODO: Approach 2: Using the Set

{
function findUnique(str) {
    str = str.split("")

    str = new Set(str);

    str = [...str].join("");

    return str;
}

console.log(findUnique("Geeksforgeeks"))
console.log(findUnique("Geeksforgeeks Is a great site"))
}
// TODO: Approach 3: Using the spread operator

{
function findUnique(str) {
    return [...str].reduce((acc, curr) => {
        return acc.includes(curr) ? acc : acc + curr;
    }, "")
}

console.log(findUnique("Geeksforgeeks"))
console.log(findUnique("Geeksforgeeks Is great"))
}
// TODO: Approach 4: Using the indexOf() Method

{
    let uniqueCharacters = (stringg) => {
        let unique_characters = "";
        for (let i = 0; i < stringg.length; i++) {
            if (unique_characters.indexOf(stringg.charAt(i)) < 0) {
                unique_characters += stringg.charAt(i);
            }
        }
        return unique_characters;
    };
    console.log(uniqueCharacters("Geeksforgeeks"));
}
// TODO: Approach 5: Using regex
{
    function uniqueChar(str) {
        let uniqueChars = str.match(/(.)(?!\1)/g);
    
        return uniqueChars;
    }
    let str = "Geeksforgeeks";
    let newStr = uniqueChar(str);
    console.log(newStr);
}
// TODO: Approach 6: Using _.uniq() Method
{
const _ = require("lodash");
let y = "Geeksforgeeks";

let gfg = _.uniq(y).join('');
console.log(gfg);
}

// TODO: Approach 7: Using Object Property Lookup

function findUnique(str) {
    let unique = {};
    for (let char of str) {
        unique[char] = true;
    }
    return Object.keys(unique).join('');
}

console.log(findUnique("Geeksforgeeks"));
console.log(findUnique("Geeksforgeeks is a great site"));