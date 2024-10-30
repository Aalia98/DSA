// TODO: Using a nested for loop

let gfg = [];
let row = 3;
let col = 3;
let h = 0

for (let i = 0; i < row; i++) {
    gfg[i] = [];
    for (let j = 0; j < col; j++) {
        gfg[i][j] = h++;
    }
}
console.log(gfg);

// -----------------------------------------------------------------------------------------

let gfg1 = new Array(3);
for (let i = 0; i < gfg1.length; i++) {
    gfg1[i] = [];
}
let h1 = 0;
let s = "GeeksforGeeks";

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {

        gfg1[i][j] = s[h1++];
    }
}
console.log(gfg1);

// TODO: Use the literal notation

let MathScore = [
    ["Bar", 20, 60, "A"],
    ["Foo", 10, 52, "B"],
    ["Joey", 5, 24, "F"],
    ["John", 28, 43, "A"],
    ["Liza", 16, 51, "B"]
];
console.log(MathScore);

// TODO: Using Array.from() Method

const rows = 3;
const columns = 4;
const matrix = Array.from({ length: rows }, () => 
               new Array(columns).fill(0));
console.log(matrix);

// TODO: Using Array.fill() Method

const rows1 = 3;
const columns1 = 4;

const matrix1 = Array(rows1).fill().map(() => 
               Array(columns1).fill(0));
               
console.log(matrix1);

// TODO: Using Array.prototype.map() Method

const rows2 = 3;
const cols2 = 4;

const array2D = Array.from({ length: rows2 }, () => Array.from({ length: cols2 }, () => 0));
console.log(array2D);