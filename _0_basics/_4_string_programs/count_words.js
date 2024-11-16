// TODO: 1. Using trim() and split() Methods in JavaScript

function wordsLen(str) {
    const array = str.trim().split(/\s+/);
    return array.length;
}

const str = "Welcome, to the Geeeksforgeeks";
console.log("Word count:" ,wordsLen(str));

// TODO: 2. Using Regular Expression and match() Methods in JavaScript

function numberOfWords(str) {
    const words = str.match(/\S+/g);
    if(words.length!==0){
        return words.length;
    }
    else{
        return 0;
    }
}

const str1 = "Welcome, to the Geeksforgeeks";
console.log("Word count:", numberOfWords(str1));

// TODO: 3. Using for loop

function numberOfWords(str) {
    let count = 0;
    let check = false;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ' && !check) {
            count++;
            check = true;
        } else if (str[i] === ' ') {
            check = false;
        }
    }

    return count;
}

const str2 = "Welcome to the Geeksforgeeks";
console.log("Word count:", numberOfWords(str2));

// TODO: 4. Using String.prototype.split() and filter() Methods

function countWords(str) {
    return str.split(/\s+/).filter(word => word !== '').length;
}

const str3 = "Welcome, to the Geeksforgeeks";
console.log("Word count:", countWords(str3));

// TODO: 5. Using Array.prototype.reduce() Method

function countWordsWithReduce(str) {
    return str.split('').reduce((count, char, index, arr) => {
        if ((char !== ' ' && char !== '\n' && char !== '\t') && 
            (index === 0 || arr[index - 1] === ' ' || arr[index - 1] === '\n' || arr[index - 1] === '\t')) {
            count++;
        }
        return count;
    }, 0);
}

const str4 = "Welcome, to the Geeksforgeeks";
console.log("Word count:", countWordsWithReduce(str4));

// TODO: 6. Using String.prototype.replace() Method

function countWordsUsingReplace(str) {
    const normalizedStr = str.replace(/\s+/g, ' ').trim();
    return normalizedStr === '' ? 0 : normalizedStr.split(' ').length;
}

const str5 = "Welcome,    to the    Geeksforgeeks";
console.log("Word count:", countWordsUsingReplace(str5));

