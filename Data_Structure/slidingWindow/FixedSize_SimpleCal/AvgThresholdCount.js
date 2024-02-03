// https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/

var numOfSubarrays = function(arr, k, threshold) {
    let i = 0, j = 0, sum = 0, count = 0;

    while(j < arr.length){
        sum += arr[j];
        if(j-i+1 == k) {
            let avg = sum / k;
            if (avg >= threshold) count++;
            sum -= arr[i];
            i++;
        }
        j++;
    }
    return count;
};