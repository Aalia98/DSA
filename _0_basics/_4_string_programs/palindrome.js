// TODO: By using a Naive Approach

function check_palindrome(str) {
    let j = str.length - 1;
    for (let i = 0; i < j / 2; i++) {
        let x = str[i];//forward character 
        let y = str[j - i];//backward character
        if (x != y) {
            return false;
        }
    }
    return true;
}

function is_palindrome(str) {
    
    let ans = check_palindrome(str);
    
    if (ans == true) {
        console.log("passed string is palindrome ");
    }
    else {
        console.log("passed string not a palindrome");
    }
}

let test = "racecar";
is_palindrome(test);

// TODO: By reversing the string

function reverse(str) {
    
    let rev_str = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev_str += str[i];
    }
    return rev_str;
}

function is_palindrome(str) {
    reverse_str = reverse(str);
   
    if (reverse_str === str) {
        console.log("passed string is palindrome ");
    }
    else {
        console.log("passed string is not palindrome")
    }
}
let test1 = "hellolleh";
is_palindrome(test);

// TODO: Using the split(), reverse(), and join() Methods

let checkPalindrome = (string) => {
    return string === string.split("").reverse().join("");
};

console.log("Is Palindrome? : " + checkPalindrome("noon"));
console.log("Is Palindrome?: " + checkPalindrome("apple"));

// TODO: Using Array.every()

function isPalindrome(str) {
    return str.split('').every((char, index) => char === str[str.length - index - 1]);
  }

  console.log(isPalindrome("radar")); 
  console.log(isPalindrome("hello")); 
  console.log(isPalindrome("level")); 
  
// TODO: Using Two Pointers

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("test"));  // Output: false
console.log(isPalindrome("abba"));  // Output: true




