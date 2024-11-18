// TODO: Using toUpperCase() method

let s = "geeksforgeeks"

let s1 = s[0].toUpperCase() // s1 => "G"
s = s1  + s.slice(1)

console.log(s);

// TODO: Using charAt() with slice() Method

let a = 'geeksforgeeks';

console.log(a.charAt(0).toUpperCase() + a.slice(1));

// TODO: Using JavaScript string replace() Method

let s2 = 'geeksforgeeks';

console.log(s2.replace(/^./, s2[0].toUpperCase()));
