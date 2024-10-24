// TODO: Approach 1: Using length property in JavaScript

let s = [3, 2, 3, 4, 5];
function Gfg() {

    let f = s[0];

    let l = s[s.length - 1];

    console.log("First element is " + f);
    console.log("Last element is " + l);
}
Gfg();

// TODO: Approach 2: Using Array.pop() and Array.shift() Method

let s1 = [3, 2, 3, 4, 5];
function Gfg() {
    let f = s1.shift(0);

    let l = s1.pop();

    console.log("first element is " + f);
    console.log(" Last element is " + l);
}

Gfg();

// TODO: Approach 3: Using Array.slice() Method

let s2 = [3, 2, 3, 4, 5];
function Gfg() {

    let f = s2.slice(0, 1);

    let l = s2.slice(-1);

    console.log("first element is " + f);
    console.log("Last element is " + l);
}
Gfg();

// TODO: Approach 4: Using Array.filter() Method

let s3 = [3, 2, 3, 4, 5];
function Gfg() {

    let [f, l] = s3.filter((item, i) => 
                (i == 0) || (i == s3.length - 1));

    console.log("first element is " + f);
    console.log(" Last element is " + l);
}
Gfg();

// TODO: Approach 5: Using Spread Operator

const array = [1, 2, 3, 4, 5];

const [firstItem, ...rest] = array;
const lastItem = rest.pop();

console.log('First item:', firstItem);
console.log('Last item:', lastItem);

// TODO: Approach 6: Using Array.at() Method

function gfg() {
    let s = ["Geeks", "for", "geeks", "computer", "science"];
  
    console.log(s.at(0))
  
    console.log(s.at(s.length - 1))
  }
  
  gfg();
  
// TODO: Approach 7: Using Array.find() Method

let s4 = [3, 2, 3, 4, 5];
function Gfg() {

    let f = s4.find((_, index) => index === 0);

    let l = s4.find((_, index) => index === s4.length - 1);

    console.log("first element is " + f);
    console.log("Last element is " + l);
}
Gfg();
