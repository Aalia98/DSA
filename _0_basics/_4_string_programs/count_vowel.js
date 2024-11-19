// TODO: Using For Loop

function getVowels(string) {
    let Vowels = "aAeEiIoOuU";
    let vowelsCount = 0;
    for (let i = 0; i < string.length; i++) {
        if (Vowels.indexOf(string[i]) !== -1) {
            vowelsCount += 1;
        }
    }
    return vowelsCount;
}
console.log(
    "The Number of vowels in -" +
        " A Computer Science Portal for Geeks:" +
        getVowels(
            "A Computer Science Portal for Geeks"
        )
);

// TODO: Using Regular Expression

function vowelCount(str) {
    const vowelRegex = /[aeiou]/gi; 
    const strMatches = str.match(vowelRegex);

    if (strMatches) {
        return strMatches.length;
    } else {
        return 0; 
    }
}
const string = "Geeksforgeeks";
const len = vowelCount(string);
console.log("Number of vowels:", len);

// TODO: Using reduce() and indexOf() method

function countVowelsReduce(str) {
    const vowels = "aeiouAEIOU";
    return str
        .split("")
        .reduce(function (count, char) {
            return vowels.indexOf(char) !== -1
                ? count + 1
                : count;
        }, 0);
}
const result = countVowelsReduce("Hello, World!");
console.log(result);

// TODO: Using split() and Array.includes

function countVowels(str) {
    const vowels = [
        "a",
        "e",
        "i",
        "o",
        "u",
        "A",
        "E",
        "I",
        "O",
        "U",
    ];
    let count = 0;

    str.split("").forEach((char) => {
        if (vowels.includes(char)) {
            count++;
        }
    });

    return count;
}

const str1 = "Welcome to GeeksForGeeks";
console.log(countVowels(str1));

// TODO: Using a Map

function countVowelsMap(str) {
    const vowels = new Map([
        ['a', 0],
        ['e', 0],
        ['i', 0],
        ['o', 0],
        ['u', 0],
        ['A', 0],
        ['E', 0],
        ['I', 0],
        ['O', 0],
        ['U', 0],
    ]);

    for (let char of str) {
        if (vowels.has(char)) {
            vowels.set(char, vowels.get(char) + 1);
        }
    }

    let totalCount = 0;
    for (let count of vowels.values()) {
        totalCount += count;
    }

    return totalCount;
}

const str = "Hello, World!";
console.log("Number of vowels:", countVowelsMap(str));
