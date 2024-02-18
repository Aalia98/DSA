// https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/

var findMatrix = function(nums) {
    let unique = {};

    for(let i = 0; i < nums.length; i++) {
        unique[nums[i]] = (unique[nums[i]] || 0) + 1;
    }
    let ans = [], temp;
    while(Object.keys(unique).length != 0) {
         temp = [];
        for(const i in unique) {
            temp.push(i);
            unique[i]--;
            if(unique[i] == 0){
              delete unique[i];
            }
    }
    ans.push(temp);
    }
    return ans;
};