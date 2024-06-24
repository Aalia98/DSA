// https://leetcode.com/problems/jewels-and-stones/description/

var numJewelsInStones = function(jewels, stones) {
    const charCount = {};

    for(let i = 0; i < stones.length; i++) {
        charCount[stones[i]] = (charCount[stones[i]] || 0) + 1;
    }
    let i = 0;
    let count = 0;
    while(i < jewels.length){
        for(key in charCount) {
        if(jewels[i] == key){
           count += charCount[key];
        }
    }
    i++;
    }
    return count;
};