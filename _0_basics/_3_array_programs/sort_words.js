// TODO: Approach 1: Using the Array sort() method

const words = [
    "JavaScript",
    "Program",
    "to",
    "Sort",
    "Words",
    "in",
    "Alphabetical",
    "Order",
];

const sortedWords = words.sort();
console.log(sortedWords);

// TODO: Approach 2: Using the localeCompare() method

const words1 = [
    "JavaScript",
    "Program",
    "to",
    "Sort",
    "Words",
    "in",
    "Alphabetical",
    "Order",
];

const sortedWords1 = words1.sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" })
);

console.log(sortedWords1);

// TODO: Approach 3: Implementing a custom sorting algorithm

function bubbleSort(wordsArray) {
    
    const length = wordsArray.length;
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (
                wordsArray[j]
                    .localeCompare(wordsArray[j + 1], undefined, {
                    sensitivity: "base",
                }) > 0
            ) {
                const temp = wordsArray[j];
                wordsArray[j] = wordsArray[j + 1];
                wordsArray[j + 1] = temp;
            }
        }
    }
    return wordsArray;
}

const words2 = [
    "JavaScript",
    "Program",
    "to",
    "Sort",
    "Words",
    "in",
    "Alphabetical",
    "Order",
];

const sortedWords2 = bubbleSort(words2);
console.log(sortedWords2);

// TODO: Approach 4: Using the Intl.Collator object

const words3 = [
    "JavaScript",
    "Program",
    "to",
    "Sort",
    "Words",
    "in",
    "Alphabetical",
    "Order",
];

const collator = new Intl.Collator(undefined, { sensitivity: 'base' });
const sortedWords3 = words3.sort(collator.compare);

console.log(sortedWords3);

// TODO: Using a Trie Data Structure for Sorting

class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    traverseAndCollect(node = this.root, prefix = '', result = []) {
        if (node.isEndOfWord) {
            result.push(prefix);
        }
        for (let char in node.children) {
            this.traverseAndCollect(node.children[char], prefix + char, result);
        }
        return result;
    }

    sortWords() {
        return this.traverseAndCollect();
    }
}

const words4 = [
    "JavaScript",
    "Program",
    "to",
    "Sort",
    "Words",
    "in",
    "Alphabetical",
    "Order",
];

const trie = new Trie();
words4.forEach(word => trie.insert(word));
const sortedWords4 = trie.sortWords();

console.log(sortedWords4);

