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

function maximumSum(arr, k) {
        let currentSum = 0, maxSum = -Infinity;
        
        for(let i = 0; i < arr.length; i++) {
            currentSum += arr[i];
            if(i >= k-1) {
                maxSum = Math.max(currentSum, maxSum);
                currentSum -= arr[i-(k-1)];
            }
        }
        return maxSum;
    }
    const arr = [100, 200, 300, 400] , k = 2;
    console.log(maximumSum(arr, k));
 