// TODO: Using while loop

const str = "HelloWorld";
const arr = str.split('');
let i = 0, j = arr.length-1;

while(i < arr.length/2 && j < arr.length) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}
console.log(arr.join('').toString());

// TODO: Using split(), reverse() and join() Methods

let s = "GeeksforGeeks";
const ans = s.split('').reverse().join('');
console.log(ans);

// TODO: Using Spread Operator

let s1 = "GeeksforGeeks";
const ans1 = [...s1].reverse().join("");
console.log(ans1);
