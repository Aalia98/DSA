// TODO: Using brute force approach

{const str = "Hello guys this is geeksforgeeks where students learn programming";
let maxCount = 0,
  longestWord = "";
const arrStr = str.split(" ");
const words = arrStr.map((word) => {
  if (word.length > maxCount) {
    maxCount = word.length;
    longestWord = "";
    longestWord = longestWord.concat(word);
  }
});
console.log(longestWord);}

// TODO: Approach 1: Using regex and for…loop
{
function longest(str) {
    str = str.match(/[a-zA-Z0-9]+/gi);
    let largest = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > largest.length) {
            largest = str[i];
        }
    }
    return largest;
}
console.log(
    longest(
        "Hello guys this is geeksforgeeks where" +
            " students learn programming"
    )
);
}
// TODO: Approach 2: Using the split() and sort() method
{
    function longest(str){ 
        str = str.split(" ") 
        return str.sort((a, b) => b.length - a.length)[0] 
    } 
    
    console.log(longest("Hello guys this is geeksforgeeks"+ 
                            " where students learn programming"))
}
// TODO: Approach 3: Using split() and reduce() methods
{
    function longest(str) {
        str = str.split(" ");
            let index = str.reduce((acc, curr, i) => {
            if (curr.length > str[acc].length) {
                return i;
            }
            return acc;
        }, 0);
    
        return str[index];
    }
    
    console.log(
        longest(
            "Hello guys this is geeksforgeeks" +
                " where students learn programming"
        )
    );
}
// TODO: Approach 4: Using split() and for…loop
{
let longestWord = (string) => {
    let stringg = string.split(" ");
    let longest = 0;
    let longest_word = null;
    for (let i = 0; i < stringg.length; i++) {
        if (longest < stringg[i].length) {
            longest = stringg[i].length;
            longest_word = stringg[i];
        }
    }
    return longest_word;
};

console.log(
    longestWord(
        "Hello guys this is geeksforgeeks where students learn programming"
    )
);
}
// TODO: Approach 5: Using sort() method
{
    function findLongestWord(inputString) {
        const wordsArray = inputString.split(/\s+/);

            const sortedWords = wordsArray.sort(function (a, b) {
            return b.length - a.length; 
        });
            const longestWord = sortedWords[0];
    
        return longestWord;
    }
        const inputString = "JavaScript is an awesome programming language";
    const result = findLongestWord(inputString);
    
    console.log("Longest word:", result);
}
// TODO: Approach 6: Using map() and reduce() methods
{
    function longestWord(str) {
        const words = str.split(" ");
                const wordLengths = words.map(word => ({ word, length: word.length }));
            const longestWordObj = wordLengths.reduce((prev, current) => {
            return (prev.length > current.length) ? prev : current;
        });
            return longestWordObj.word;
    }
    
    console.log(longestWord("Hello guys this is geeksforgeeks where students learn programming"));
}
// TODO: Approach 7: Using split() and Array.prototype.every() method
{
    function findLongestWord(str) {
        const words = str.split(" ");
                let longestWord = "";
        words.every(word => {
            if (word.length > longestWord.length) {
                longestWord = word;
            }
            return true;
        });
        return longestWord;
    }
    console.log(findLongestWord("Hello guys this is geeksforgeeks where students learn programming"));
}
