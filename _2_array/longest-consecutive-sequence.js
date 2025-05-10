// https://leetcode.com/problems/longest-consecutive-sequence/

// brute
function longestConsecutiveBrute(nums) {
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i];
    let currentStreak = 1;

    while (nums.includes(currentNum + 1)) {
      currentNum += 1;
      currentStreak += 1;
    }

    maxLen = Math.max(maxLen, currentStreak);
  }

  return maxLen;
}

//   better
var longestConsecutive = function (nums) {
  if (nums.length < 2) return nums.length;
  let count = 1,
    maxCount = 1;
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    let diff = nums[i] - nums[i - 1];
    if (diff === 1) {
      count++;
      maxCount = Math.max(maxCount, count);
    } else if (diff === 0) continue;
    else count = 1;
  }
  return maxCount;
};

// optimized
function longestConsecutive(nums) {
  const numSet = new Set(nums);
  let maxLen = 0;

  for (let num of numSet) {
    if (!numSet.has(num - 1)) {
      // start of sequence
      let currentNum = num;
      let currentStreak = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      maxLen = Math.max(maxLen, currentStreak);
    }
  }
}
