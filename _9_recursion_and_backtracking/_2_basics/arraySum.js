// descending
function sum(arr, n) {
    if(n<0) return 0;
 return arr[n] + sum(arr, n-1);
}

// ascending
function sum1(arr, n) {
    if(n>=arr.length) return 0;
   return arr[n] + sum1(arr, n+1);
}

let arr = [1,2,3,4,5];
console.log(sum(arr, arr.length-1));
console.log(sum1(arr, 0));