// TODO: Using the JavaScript split() method

function separateString() {
    originalString = "One, Two, Three, Four, Five";
    
    separatedArray = originalString.split(', ');
    
    console.log(separatedArray);
}
separateString();

// TODO: Using JavaScript loops and .slice() method

originalString = "One, Two, Three, Four, Five";
separatedArray = [];
let previousIndex = 0;

for (i = 0; i < originalString.length; i++) {

    if (originalString[i] == ",") {
        separated = originalString.slice(previousIndex, i);
        separatedArray.push(separated);

        previousIndex = i + 1;
    }
}
separatedArray.push(originalString.slice(previousIndex, i));
console.log(separatedArray);

// TODO: Using Regular Expression (RegExp) and String.prototype.match()

const originalString = "One, Two, Three, Four, Five";
const separatedArray = originalString.match(/[^,]+/g);

console.log(separatedArray);

// TODO: Using the reduce() Method

function splitStringToArray(str) {
    return str.split('').reduce((acc, char) => {
        if (char === ',') {
            acc.push('');
        } else {
            acc[acc.length - 1] += char;
        }
        return acc;
    }, ['']);
}

let str = "apple,banana,orange";
let result = splitStringToArray(str);
console.log(result);  // Output: ['apple', 'banana', 'orange']
