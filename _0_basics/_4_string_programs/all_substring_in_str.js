// TODO: Using recursive
{
    function SubstringFunction(input) {
        if (input.length === 0) {
            return [''];
        }
    
        let first = input[0];
        let restSubstrings = SubstringFunction(input.slice(1));
    
        let substrings = restSubstrings.map(sub => first + sub);
    
        return [...substrings, ...restSubstrings];
    }
    
    let str1 = "abc";
    let result = SubstringFunction(str1);
    
    console.log(result);
}
// TODO: Using Array.reduce() and Array.concat()
{
    function substringFunction(input) {
        return input.split('').reduce((substrings, _, i) =>
            substrings.concat(Array.from(
                { length: input.length - i },
                (_, j) => input.slice(i, i + j + 1))),
            []
        );
    }
    
    let str1 = "abc";
    let result = substringFunction(str1);
    
    console.log(result);
}
// TODO: Using Nested Loops
{
    function substringFunction(input) {
        let substrings = [];
        for (let i = 0; i < input.length; i++) {
            for (let j = i + 1; j <= input.length; j++) {
                substrings.push(input.slice(i, j));
            }
        }
        return substrings;
    }
    
    let str1 = "abc";
    let result = substringFunction(str1);
    
    console.log(result);
}