// https://leetcode.com/problems/binary-search/submissions/1191468075/

function binarySearch(arr, target, n) {
    let l = 0, r = n - 1, mid;
    while (l <= r) {
        mid = Math.floor(l + (r - l) / 2);
        if (arr[mid] === target)
            return mid;
        if (arr[mid] < target)
            l = mid + 1;
        else
            r = mid - 1;
    }
    return -1;
}

// Time Complexity: O(log n)
// Space Complexity: O(1)

const arr = [3,4,5,6,7,8,9,10];
console.log(binarySearch(arr,11,arr.length));
