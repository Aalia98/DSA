// brute force
// TC - O(n^2), SC - O(1)
const arr = [5, 3, 2, 4, 1];
let count = 0;

for(let i = 0; i < arr.length; i++) {
  for(let j = i+1; j < arr.length; j++) {
    if(arr[i] > arr[j]) count++;
  }
}
console.log(count);

// optimized
// Time Complexity: O(n log n)
// Space Complexity: O(n) 
function countInversions(arr) {
    function mergeSort(arr, temp, left, right) {
        let invCount = 0;

        if (left < right) {
            const mid = Math.floor((left + right) / 2);

            invCount += mergeSort(arr, temp, left, mid);
            invCount += mergeSort(arr, temp, mid + 1, right);

            invCount += merge(arr, temp, left, mid, right);
        }

        return invCount;
    }

    function merge(arr, temp, left, mid, right) {
        let i = left;      // Left subarray index
        let j = mid + 1;   // Right subarray index
        let k = left;      // Temp array index
        let invCount = 0;

        while (i <= mid && j <= right) {
            if (arr[i] <= arr[j]) {
                temp[k++] = arr[i++];
            } else {
                temp[k++] = arr[j++];
                invCount += (mid - i + 1); // All remaining elements in left subarray are greater
            }
        }

        while (i <= mid) temp[k++] = arr[i++];
        while (j <= right) temp[k++] = arr[j++];

        for (let idx = left; idx <= right; idx++) {
            arr[idx] = temp[idx];
        }

        return invCount;
    }

    const temp = new Array(arr.length);
    return mergeSort(arr, temp, 0, arr.length - 1);
}

// Example
const arr1 = [5, 3, 2, 4, 1];
console.log(countInversions(arr1)); // Output: 8


