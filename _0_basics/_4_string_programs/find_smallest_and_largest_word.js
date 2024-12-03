// TODO: Using Regular Expressions
{
    function myFunction(str) {
        const words = str.match(/\b\w+\b/g);
        if (!words) return { smallest: "", largest: "" };
    
        let smallest = words[0];
        let largest = words[0];
    
        words.map(word => {
            if (word.length < smallest.length) {
                smallest = word;
            }
            if (word.length > largest.length) {
                largest = word;
            }
        });
    
        return { smallest, largest };
    }
    
    let inputStr = 
        "GeeksforGeeks is a computer science portal.";
    let result = myFunction(inputStr);
    console.log(result);
}
// TODO: Using reduce() method
{
    function myFunction(str) {
        let words = str.split(' ');
    
        if (words.length === 0) {
            return { smallest: "", largest: "" };
        }
        let smallest = words.reduce((a, b) =>
            (a.length <= b.length ? a : b));
        let largest = words.reduce((a, b) =>
            (a.length >= b.length ? a : b));
    
    
        return { smallest, largest };
    }
    
    let inputStr =
        "GeeksforGeeks is a computer science portal.";
    let result = myFunction(inputStr);
    console.log(result);
}
// TODO: Using for loop
{
    function myFunction(str) {
        let words = str.split(' ');
        if (words.length === 0) {
            return { smallest: "", largest: "" };
        }
        
        let smallest = words[0];
        let largest = words[0];
        
        for (let i = 1; i < words.length; i++) {
            let word = words[i];
            if (word.length < smallest.length) {
                smallest = word;
            }
            if (word.length > largest.length) {
                largest = word;
            }
        }
        return { smallest, largest };
    }
    
    let inputStr = "GeeksforGeeks a computer science portal.";
    let result = myFunction(inputStr);
    console.log(result);
}
// TODO: Using String.prototype.match() and Math functions
{
    function findSmallestAndLargestWord(str) {
        const words = str.match(/\w+/g) || []; // Extract words using match() and regex
        const smallest = Math.min(...words.map(word => word.length)); // Find smallest word length
        const largest = Math.max(...words.map(word => word.length)); // Find largest word length
        const smallestWord = words.find(word => word.length === smallest); // Find smallest word
        const largestWord = words.find(word => word.length === largest); // Find largest word
        return { smallest: smallestWord, largest: largestWord }; // Return smallest and largest words
    }
    
    
    const result = findSmallestAndLargestWord("This is a sample string");
    console.log("Smallest word:", result.smallest); // Output: "a"
    console.log("Largest word:", result.largest);   // Output: "string"
}
// TODO: Using the sort() Method
{
    function myFunction(str) {
        let words = str.match(/\b\w+\b/g);  // Correctly extract words using match() with the regular expression
    
        if (!words || words.length === 0) {
            return { smallest: "", largest: "" };
        }
        
        words.sort((a, b) => a.length - b.length);
        
        let smallest = words[0];
        let largest = words[words.length - 1];
    
        return { smallest, largest };
    }
    
    let inputStr = "GeeksforGeeks is a computer science portal.";
    let result = myFunction(inputStr);
    console.log(result);  // Output: { smallest: 'a', largest: 'GeeksforGeeks' }
}