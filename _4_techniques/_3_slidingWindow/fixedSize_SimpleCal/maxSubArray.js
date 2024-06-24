// https://geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1

function maximumSumSubarray(K, Arr, N) {
    //code here
    let i = 0, j = 0, sum = 0, maxi = -Infinity;
    
    while(j <= N-1) {
        sum += Arr[j];
        if(j-i+1 == K) {
            maxi = Math.max(sum, maxi);
            sum -= Arr[i];
            i++;
        }
        j++;
    }
    return maxi;
  }

  console.log(maximumSumSubarray(1, [-100], 1));