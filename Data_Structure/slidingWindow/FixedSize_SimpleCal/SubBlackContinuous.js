// https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/

var minimumRecolors = function(blocks, k) {
    let i = 0, j = 0, count = 0, mini = Infinity;
    while(j < blocks.length) {
        if(blocks.charAt(j) === 'W') count++;
        if(j-i+1 === k) {
            mini = Math.min(mini, count);
            if(blocks.charAt(i) === 'W') count--;
            i++;
        }
        j++;
    }
    return mini;
};