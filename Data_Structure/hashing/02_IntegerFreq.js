const arr = [1, 2, 3, 1, 2, 1, 4, 5, 4, 1];

let freqCount = {};

for(let i = 0; i < arr.length; i++) {
    freqCount[arr[i]] = (freqCount[arr[i]] || 0) + 1;
}
console.log(freqCount);

// output -> {
//   1: 4,
//   2: 2,
//   3: 1,
//   4: 2,
//   5: 1
// }

