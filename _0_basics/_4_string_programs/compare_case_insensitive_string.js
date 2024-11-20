// TODO: Approach 1: JavaScript toUpperCase() function

let str1 = "this iS geeksForGeeKs";
let str2 = "This IS GeeksfOrgeeks";
console.log(str1)
console.log(str2)

function myGeeks() {
    let areEqual = str1.toUpperCase() === str2.toUpperCase();
    console.log(areEqual);
}
myGeeks()

// TODO: Approach 2: JavaScript toLowerCase() function

let st1 = "this iS geeks";
let st2 = "This IS GeeksfOrgeeks";
console.log(st1)
console.log(st2)

function myGeeks() {
    let areEqual = st1.toLowerCase() === st2.toLowerCase();
    console.log(areEqual);
}
myGeeks()

// TODO: Approach 3: Using localCompare()

{let str1 = "this iS geeks";
let str2 = "This IS GeeksfOrgeeks";
console.log(str1)
console.log(str2)

function myGeeks() {
    let areEqual = str1.localeCompare(str2, undefined, { sensitivity: 'accent' });
    console.log(areEqual === 0 ? true : false);
}
myGeeks()}

// TODO: Approach 4: Using regular expression

{
    let str1 = "this iS geeksforGeeks";
let str2 = "This IS GeeksfOrgeeks";
console.log(str1)
console.log(str2)

function myGeeks() {
    let pattern = new RegExp(str1, 'gi');
    let result = pattern.test(str2);
    console.log(result ? true : false);
}
myGeeks()
}

// TODO: Approach 5: Using String.prototype.localeCompare() with Sensitivity Option

{
    function compareStringsCaseInsensitive(str1, str2) {
        return str1.localeCompare(str2, undefined, { sensitivity: 'base' }) === 0;
      }
      
      let string1 = "HelloWorld";
      let string2 = "helloworld";
      
      console.log(compareStringsCaseInsensitive(string1, string2)); // Output: true
}
