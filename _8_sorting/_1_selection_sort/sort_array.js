// https://www.geeksforgeeks.org/problems/selection-sort/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=selection-sort

const arr = [4,1,9,2,6,8];

for(let i = 0; i < arr.length-1; i++) {
    let mini = i;
    for(let j = i; j < arr.length; j++) {
        if(arr[j] < arr[mini]) mini = j;
    }
    let temp = arr[i];
    arr[i] = arr[mini];
    arr[mini] = temp;
}
console.log(arr);   // output: [1,2,4,6,8,9]
