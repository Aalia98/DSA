// JavaScript Program to Check for Palindrome Number

// Approach 1: Using String Reversal

function palindromeCheck(num) {
    let numStr = num.toString();
    let result = numStr.split('').reverse().join('');
    return numStr === result;
}

console.log(palindromeCheck(121)); // true
console.log(palindromeCheck(123)); // false

// Approach 2: Using Array Every() Method

function palindromeCheck(number) {
    let numStr = number.toString();
    let numArr = numStr.split('');
    return numArr.every((num, index) =>
        num === numArr[numArr.length - 1 - index]);
}

// Checking the number is Palindrome
console.log(palindromeCheck(121));
console.log(palindromeCheck(12321));
console.log(palindromeCheck(12345)); 

// Approach 3: Using XOR Operator

function palindromeCheck(number) {
    let numStr = number.toString();
    let length = numStr.length;
    let result = 0;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        result ^= numStr.charCodeAt(i) ^ 
                  numStr.charCodeAt(length - 1 - i);
    }
    return result === 0;
}

// Checking the given number is palidrome or not
console.log(palindromeCheck(121));
console.log(palindromeCheck(13531));
console.log(palindromeCheck(12345));

// Approach 4: Using for Loop and Math.floor() Method

function palindromeCheck(number) {
    if (number < 0) {
        return false;
    }
    let original = number;
    let reversed = 0;

    for (let temp = original; temp > 0;
        temp = Math.floor(temp / 10)) {
        reversed = reversed * 10 + temp % 10;
    }

    return number === reversed;
}

console.log(palindromeCheck(121));
console.log(palindromeCheck(12321));
console.log(palindromeCheck(12345));

// Approach 5: Using Recursion

function palindromeCheck(number) {
    let numStr = number.toString();
    return isPalindrome(numStr, 0, numStr.length - 1);
}

function isPalindrome(str, start, end) {
    if (start >= end) return true;
    if (str[start] !== str[end]) return false;
    return isPalindrome(str, start + 1, end - 1);
}

// Checking the given number is palindrome or not
console.log(palindromeCheck(121));    // true
console.log(palindromeCheck(12321));  // true
console.log(palindromeCheck(12345));  // false
console.log(palindromeCheck(1221));   // true

// Approach 6: Brute force 

function palindrome(num) {
    let temp = num;
    let palin = '', rem = 0, i = 0;
    const dig = num.toString().split('');

    while(i < dig.length) {
        rem = parseInt(temp%10);
        palin += rem;
        temp = temp/10;
        i++;
    }
    if(Number(palin) === num) console.log("Palindrome Number");
    else console.log("Not Palindrome Number");
}
palindrome(153);