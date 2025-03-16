// https://www.geeksforgeeks.org/problems/bubble-sort/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=bubble-sort

const arr = [4,8,2,1,9,3,7];
const n = arr.length;

for(let i = n-1; i >= 1; i--) {
    for(let j = 0; j <= i-1; j++) {
        if(arr[j] > arr[j+1]) {
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr);  // output: [1,2,3,4,7,8,9]
