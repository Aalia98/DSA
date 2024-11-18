// TODO: Using localeCompare() method

let str1 = "GFG"
let str2 = "GeeksforGeeks"
 
let ans = str1.localeCompare(str2);
let res = "";
 
if (ans == -1) {
    res = '"' + str1 + '" comes before "' + str2 + '"';
} else if (ans === 0) {
    res = 'Both string are same';
} else {
    res = '"' + str1 + '" comes after "' + str2 + '"';
}
 
console.log(res);

// -----------------------------------------------------------------------------------------

let st1 = "Geeks"
let st2 = "GFG"
 
let ans1 = st1 < st2 ? -1 : (st1 > st2 ? 1 : 0);
let res1 = "";
 
if (ans1 == -1) {
    res1 = '"' + st1 + '" comes before "' + st2 + '"';
} else if (ans1 === 0) {
    res1 = 'Both string are same';
} else {
    res1 = '"' + st1 + '" comes after "' + st2 + '"';
}
 
console.log(res1);

// -------------------------------------------------------------------------------------------

let string1 = "GeeksforGeeks"
let string2 = "GeeksforGeeks"
 
let ans2 = string1.localeCompare(string2);
let res2 = "";
 
if (ans2 == -1) {
    res2 = '"' + string1 + '" comes before "' + string2 + '"';
} else if (ans2 == 0) {
    res2 = 'Both string are same';
} else {
    res2 = '"' + string1 + '" comes after "' + string2 + '"';
}
 
console.log(res2);