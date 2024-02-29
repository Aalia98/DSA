// https://leetcode.com/problems/assign-cookies/description/

var findContentChildren = function(g, s) {
    const gSort = g.sort(function(a, b){return a - b});
    const sSort = s.sort(function(a, b){return a - b});
    let i = 0, j = 0, count = 0;

    while(i < gSort.length && j < sSort.length) {
        if(sSort[j] >= gSort[i]) {
            count++;
            i++;
            j++;
        }else {
            j++;
        }
    }
    return count;
};