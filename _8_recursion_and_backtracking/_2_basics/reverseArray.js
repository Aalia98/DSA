function reverse(arr, l, r) {
    if(l >= r) return;
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
    return reverse(arr, l+1, r-1);
}
const arr = [1,2,3,4,5];
reverse(arr, 0, arr.length-1)
console.log(arr);