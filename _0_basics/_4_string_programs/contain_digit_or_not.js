// TODO: Using for Loop
{
    function checkDigits(str) {
        for (let i = 0; i < str.length; i++) {
          if (str[i] >= '0' && str[i] <= '9') {
            return true;
          }
        }
        return false;
      }
      
      const input = "Geeks for Geeks 123 numbers.";
      console.log(checkDigits(input));
}
// TODO: Using Regular Expressions
{
    function checkDigits(str) {
        const digitPattern = /\d/;
        return digitPattern.test(str);
      }
      
      const input = "Geeks for Geeks";
      console.log(checkDigits(input));
}
// TODO: Using filter() and isNaN()
{
    function containsDigit(str) {
        return (
            str
                .split("")
                .filter(
                    (char) => !isNaN(parseInt(char))
                ).length > 0
        );
    }
    
    let str = "Hello  GeeksforGeeks123";
    console.log(containsDigit(str));
}
// TODO: Using String.prototype.match
{
    function containsDigit(str) {
        return str.match(/\d/) !== null;
    }
    
    
    console.log(containsDigit("Hello123")); 
    console.log(containsDigit("Hello"));
}
// TODO: Using Array.prototype.some
{
    function containsDigit(str) {
        return str.split('').some(char => /\d/.test(char));
    }
    
    const input1 = "Geeks for Geeks";
    const input2 = "Geeks for Geeks 123";
    console.log(containsDigit(input1)); // Output: false
    console.log(containsDigit(input2)); // Output: true
}
// TODO: Using the every Method
{
    function containsDigit(str) {
        return !str.split('').every(char => isNaN(parseInt(char)));
    }
    
    const input1 = "Geeks for Geeks";
    const input2 = "Geeks for Geeks 123";
    console.log(containsDigit(input1)); // Output: false
    console.log(containsDigit(input2)); // Output: true
}
// TODO: Using Array.prototype.find
{
    function containsDigit(str) {
        return str.split('').find(char => /\d/.test(char)) !== undefined;
    }
    
    const input1 = "Geeks for Geeks";
    const input2 = "Geeks for Geeks 123";
    console.log(containsDigit(input1)); // Output: false
    console.log(containsDigit(input2)); // Output: true
}
// TODO: Using includes Method with an Array of Digits
{
    function containsDigit(inputString) {
        const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        
        for (let char of inputString) {
            if (digits.includes(char)) {
                return true;
            }
        }
        return false;
    }
    
    let str1 = "Hello123";
    let str2 = "HelloWorld";
    console.log(containsDigit(str1));  // Output: true
    console.log(containsDigit(str2));  // Output: false
}
