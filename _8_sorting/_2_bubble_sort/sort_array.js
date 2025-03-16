// https://www.geeksforgeeks.org/problems/bubble-sort/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=bubble-sort

// brute force
{
const arr = [4,8,2,1,9,3,7];
const n = arr.length;

for(let i = n-1; i >= 0; i--) {
    for(let j = 0; j <= i-1; j++) {
        if(arr[j] > arr[j+1]) {
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr);  // output: [1,2,3,4,7,8,9]
}

// optimized
{
    const arr = [1,2,3,4,5,6];
    const n = arr.length;
    
    for(let i = n-1; i >= 0; i--) {
        let didSwap = 0
        for(let j = 0; j <= i-1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                didSwap = 1;
            }
        }
        if(didSwap === 0) {
            break;
        }
    }
    console.log(arr);   // output: [1,2,3,4,5,6]
}
