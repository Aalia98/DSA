// Using For Loop

let n = 12;
let i = 1;
for (i = 1; i < n; i++) {
    if (n % i == 0) {
        console.log(i);
    }
}
console.log(n);

// Using Spread Operator

let fact = (n) =>
    [...Array(n + 1).keys()]
    .filter(
        (i) => n % i === 0
    );
console.log(fact(12));

// Using the reduce method

let n1 = 12;
[...Array(n1 + 1).keys()].reduce(
    (_, i) => {
        if (i !== 0 && n1 % i === 0) {
            console.log(i);
        }
    }
);

// Using the map method

let n2 = 12;
let factor = [...Array(n2 + 1).keys()]
    .map((i) => {
        if (n2 % i === 0) {
            return i;
        }
    })
    .filter((i) => i !== undefined);
console.log(factor);

// Using a While Loop

let n3 = 12;
let j = 1;
let factors = [];

while (j <= n3) {
    if (n3 % j === 0) {
        factors.push(j);
    }
    j++;
}

console.log(factors);

