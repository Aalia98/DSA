// https://www.geeksforgeeks.org/problems/union-of-two-arrays3538/1

function doUnion(a, n, b, m){
    // code here
    const intCount = {};
    const maxLen = Math.max(n, m);
    
    // optimize
    // for(let i = 0; i < n; i++) {
    //     intCount[a[i]] = (intCount[a[i]] || 0) + 1;
    // }
    // for(let i = 0; i < m; i++) {
    //     intCount[b[i]] = (intCount[b[i]] || 0) + 1;
    // }

    // more optimize
    for(let i = 0; i < maxLen; i++) {
            a[i] && (intCount[a[i]] = (intCount[a[i]] || 0) + 1);
            b[i] && (intCount[b[i]] = (intCount[b[i]] || 0) + 1);
        }
    const len = Object.keys(intCount).length;
    return len;
}

console.log(doUnion([1,2,3,4,5], 5, [1,2,3], 3));