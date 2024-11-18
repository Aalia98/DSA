// TODO: Using startWith method

const str = 'Hello Geeks!';

console.log(str.startsWith('Hello')); // true
console.log(str.startsWith('Geeks', 6)); // true
console.log(str.startsWith('Geeks', 7)); // false

// --------------------------------------------------------------------------

let x ="Hello World!"
function myfunc() {
    if (x.startsWith('Hello')) {
        result = true;
    } else {
        result = false;
    }
console.log(result);
}
myfunc();

// TODO: Using Regular Expression (RegExp)

function startsWith(str, substr) {
    const escapedSubstr = substr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp('^' + escapedSubstr);
    return pattern.test(str);
}

console.log(startsWith('Hello World', 'Hello')); // Output: true
console.log(startsWith('JavaScript', 'Script')); // Output: false

// TODO: Using String.prototype.indexOf

const str1 = "Hello, world!";
const prefix = "Hello";

const startsWith = str1.indexOf(prefix) === 0;
console.log(startsWith); // true

// TODO: Using Brute force approach

function check(str, word) {
    let newWord = "";
    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) === " ") break;

        newWord = newWord.concat(str.charAt(i));
    }
    if(newWord === word) return true;
    else return false;
}

const string = "Hello World";
console.log(check(string, "World"));
