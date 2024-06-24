// lower_bound = smallest index such that arr[index] >= x
// upper_bound = smallest index such that arr[index] > x

function lowerBound(arr, n, x) {
    let l = 0, r = n - 1;
    let ans = n; // if not found till last element

    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);

        // may be answer
        if (arr[mid] >= x) {
            ans = mid;
            r = mid - 1; // look for more small index on left
        } else {
            l = mid + 1;
        }
    }

    return ans;
}

function upperBound(arr, n, x) {
    let l = 0, r = n - 1;
    let ans = n; // if not found till last element

    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);

        // may be answer
        if (arr[mid] > x) {
            ans = mid;
            r = mid - 1; // look for more small index on left
        } else {
            l = mid + 1;
        }
    }

    return ans;
}