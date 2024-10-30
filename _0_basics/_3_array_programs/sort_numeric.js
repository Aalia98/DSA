// TODO: Using sort() method

let arr = [12, 25, 31, 23, 75, 81, 100]
console.log(arr.sort())

// TODO: Using Compare Function

let marks = [12, 25, 31, 23, 75, 81, 100];

console.log("Original Array");
console.log(marks);

marks.sort(function (a, b) { return b - a });

console.log("After sorting in Descending order");
console.log(marks);        

// TODO: Creating Loops

function Numeric_sort(ar) {
    let i = 0, j;
    while (i < ar.length) {
        j = i + 1;
        while (j < ar.length) {

            if (ar[j] < ar[i]) {
                let temp = ar[i];
                ar[i] = ar[j];
                ar[j] = temp;
            }
            j++;
        }
        i++;
    }
}
let arr1 = [1, 15, 10, 45, 27, 100];

console.log("Original Array");
console.log(arr1);

Numeric_sort(arr1);

console.log("Sorted Array"); 
console.log(arr1); 

// TODO: Using Array.prototype.sort with parseInt

let arr2 = ["10", "2", "30", "4"];
arr2.sort((a, b) => parseInt(a) - parseInt(b));
console.log(arr2); // ["2", "4", "10", "30"]

