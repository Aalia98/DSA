// TODO: Using regular expressions

function checkWhitespace(str) {
    return /\s/.test(str);
}
let str = "Hi I am a Geek";
if (checkWhitespace(str)) {
    console.log(
        "The string contains whitespace characters."
    );
} else {
    console.log(
        "The string does not contain whitespace characters."
    );
}

// TODO: Using JavaScript Sets

function checkWhitespace(str) {
    let whitespace = new Set([" ", "\t", "\n"]);
    for (let i = 0; i < str.length; i++) {
        if (whitespace.has(str[i])) {
            return true;
        }
    }
    return false;
}

let str1 = "GeeksforGeeks";
if (checkWhitespace(str1)) {
    console.log(
        "The string contains whitespace characters."
    );
} else {
    console.log(
        "The string does not contain whitespace characters."
    );
}

// TODO: Using for loop

function containsWhitespace(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            return true; // Found a whitespace character
        }
    }
    return false; // No whitespace characters found
}

let str2 = "GeeksFor  Geeks";

console.log;
if (containsWhitespace(str2)) {
    console.log(
        "The string contains whitespace characters"
    );
} else {
    console.log(
        "The string does not contains whitespace characters"
    );
}

// TODO: Using String.prototype.includes

function checkWhitespace(str) {
    return str.includes(' ') || str.includes('\t') || str.includes('\n');
}

let str3 = "Hi I am a Geek";

if (checkWhitespace(str3)) {
    console.log("The string contains whitespace characters.");
} else {
    console.log("The string does not contain whitespace characters.");
}

// TODO: Using Array.prototype.some

function containsWhitespace(str) {
    return [...str].some(char => char === ' ' || char === '\t' || char === '\n');
}

let string1 = "Hi I am a Geek";
let string2 = "GeeksforGeeks";

if (containsWhitespace(string1)) {
    console.log("The string contains whitespace characters.");
} else {
    console.log("The string does not contain whitespace characters.");
}

if (containsWhitespace(string2)) {
    console.log("The string contains whitespace characters.");
} else {
    console.log("The string does not contain whitespace characters.");
}

// TODO: Using String.prototype.match

function containsWhitespace(str) {
    return str.match(/\s/) !== null;
}

let st1 = "Hi I am a Geek";
let st2 = "helloWorld";

if (containsWhitespace(st1)) {
    console.log("The string contains whitespace characters.");
} else {
    console.log("The string does not contain whitespace characters.");
}

if (containsWhitespace(st2)) {
    console.log("The string contains whitespace characters.");
} else {
    console.log("The string does not contain whitespace characters.");
}

// TODO: Using String.prototype.search

function containsWhitespace(str) {
    return str.search(/\s/) !== -1;
}

let s1 = "Hi I am a Geek";
let s2 = "helloWorld";

console.log(containsWhitespace(s1) ? "The string contains whitespace characters." : "The string does not contain whitespace characters.");
console.log(containsWhitespace(s2) ? "The string contains whitespace characters." : "The string does not contain whitespace characters.");

// TODO: Using Array.prototype.filter

function containsWhitespace(str) {
    return str.split('').filter(char => char === ' ' || char === '\t' || char === '\n').length > 0;
}

let strings1 = "Hi I am a Geek";
let strings2 = "helloWorld";

console.log(containsWhitespace(strings1) ? "The string contains whitespace characters." : "The string does not contain whitespace characters.");
console.log(containsWhitespace(strings2) ? "The string contains whitespace characters." : "The string does not contain whitespace characters.");
