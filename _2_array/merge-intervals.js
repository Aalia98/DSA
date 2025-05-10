// https://leetcode.com/problems/merge-intervals/description/

// brute force

var merge = function(intervals) {
    const n = intervals.length;
    intervals.sort((a, b) => a[0] - b[0]);
    const ans = [];

    for (let i = 0; i < n; i++) { 
        let start = intervals[i][0];
        let end = intervals[i][1];

        if (ans.length && end <= ans[ans.length - 1][1]) {
        continue;
        }

        for (let j = i + 1; j < n; j++) {
        if (intervals[j][0] <= end) {
            end = Math.max(end, intervals[j][1]);
        } else {
            break;
        }
        }
        ans.push([start, end]);
    }
    return ans;
};

// optimized 

var merge = function(intervals) {
    const n = intervals.length;
    intervals.sort((a, b) => a[0] - b[0]);
    const ans = [intervals[0]];

    for (let i = 0; i < n; i++) { 
        const last = ans[ans.length-1];
        const curr = intervals[i];
        
        if(curr[0] <= last[1]) {
            last[1] = Math.max(last[1], curr[1])
        } else {
            ans.push(curr);
        }
    }
    return ans;
};