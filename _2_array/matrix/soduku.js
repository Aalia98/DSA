// https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/

var checkValid = function(arr) {
    const row = new Set();
    const col = new Set();             

    for(let i = 0; i < arr.length; i++) {
       for(let j = 0; j < arr[i].length; j++) {
        if(row.has(arr[i][j])) return false;
        else row.add(arr[i][j]);
        if(col.has(arr[j][i])) return false;
        else col.add(arr[j][i]);
    }
    row.clear();
    col.clear();
}
return true;
};