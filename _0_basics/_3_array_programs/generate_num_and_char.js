// TODO: Using Array from() and charCodeAt() method

const startNum = 1;
const endNum = 8;
const numbers = Array.from({ length: endNum - startNum + 1 },
    (_, index) => startNum + index);

const startChar = 'A';
const endChar = 'G';
const CharCode1 = startChar.charCodeAt(0);
const CharCode2 = endChar.charCodeAt(0);
const characters = Array.from(
    { length: CharCode2 - CharCode1 + 1 },
        (_, index) =>
            String.fromCharCode(CharCode1 + index)
);

console.log(numbers);
console.log(characters); 

// TODO: Using For…in loop method

function generateNumber(num1, num2) {
    const result = [];

    for (let i in [...Array(num2 - num1 + 1)]) {
        result.push(Number(i) + num1);
    }

    return result;
}

const result = generateNumber(1, 8);
console.log(result); 

// TODO: Using for loop method

const startChar1 = 'A';
const endChar1 = 'G';
const result1 = [];

for (let charCode = startChar1.charCodeAt(0);
    charCode <= endChar1.charCodeAt(0);
    charCode++) {
    result.push(String.fromCharCode(charCode));
}

console.log(result1); 

// TODO: Using while Loop

// Generating a range of numbers using while loop
function generateNumbersWhile(start, end) {
    const numbers = [];
    let current = start;
    
    while (current <= end) {
        numbers.push(current);
        current++;
    }
    
    return numbers;
}

const numbers1 = generateNumbersWhile(1, 8);
console.log(numbers1);  // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// Generating a range of characters using while loop
function generateCharactersWhile(startChar, endChar) {
    const characters = [];
    let currentCharCode = startChar.charCodeAt(0);
    const endCharCode = endChar.charCodeAt(0);
    
    while (currentCharCode <= endCharCode) {
        characters.push(String.fromCharCode(currentCharCode));
        currentCharCode++;
    }
    
    return characters;
}

const characters1 = generateCharactersWhile('A', 'G');
console.log(characters1);  // Output: ['A', 'B', 'C', 'D', 'E', 'F', 'G']

