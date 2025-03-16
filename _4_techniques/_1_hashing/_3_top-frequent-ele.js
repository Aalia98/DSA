{
  const arr = [1, 1, 1, 1, 2, 3, 1, 2, 1, 4, 5, 4, 1, 1, 1, 1, 1, 1, 1, 1, 2];

  let freqCount = {};
  let ans = -1;
  let maxiValue = 0;

  for (let i = 0; i < arr.length; i++) {
    freqCount[arr[i]] = (freqCount[arr[i]] || 0) + 1;
    if (freqCount[arr[i]] > maxiValue) {
      maxiValue = freqCount[arr[i]];
      ans = arr[i];
    }
  }
  console.log(ans);     // output: 1
} 
