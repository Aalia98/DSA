// TODO: Using Javascript Loops

let n = 5;
for (let i = 1; i <= 10; ++i)
    console.log(n + " * " + i +
        " = " + n * i);

// TODO: Using Recursion in JavaScript

function print_table(n, i = 1) {
    if (i == 11) // Base case
        return;
    console.log(n + " * " + i + " = " + n * i);
    i++;  // Increment i
    print_table(n, i);
}

// Driver Code
let num = 5;
print_table(num);

// TODO: Using Array.from() method

function printMultiplicationTable(num) {
    Array.from({ length: 10 }, (_, i) => console.log(`${num} * ${i + 1} = ${
    num * (i + 1)}`));
}


printMultiplicationTable(12);
