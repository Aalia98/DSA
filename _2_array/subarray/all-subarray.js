// print all the subarray of an array

const nums = [1,2,3];
const ans = [];

for(let i = 0; i < nums.length; i++) {
    for(let j = i; j < nums.length; j++) {
        let temp = [];
        for(let k = i; k <= j; k++) {
            temp.push(nums[k]);
        }
        ans.push(temp)
    }
}
console.log(ans);
