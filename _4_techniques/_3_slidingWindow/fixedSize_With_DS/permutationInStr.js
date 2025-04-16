// https://leetcode.com/problems/permutation-in-string/

var checkInclusion = function(s1, s2) {
    const s1Count = new Array(26).fill(0);
    const s2Count = new Array(26).fill(0);
    const aCharCode = 'a'.charCodeAt(0);

    if (s1.length > s2.length) return false;

    for (let char of s1) {
        s1Count[char.charCodeAt(0) - aCharCode]++;
    }

    for (let i = 0; i < s1.length; i++) {
        s2Count[s2[i].charCodeAt(0) - aCharCode]++;
    }

    const matches = (a,b) => {
        for(let i = 0; i < 26; i++) {
            if(a[i] !== b[i]) return false;
        }
        return true;
    }
    if(matches(s1Count, s2Count)) return true; 

    for (let i = 0; i < 26; i++) {
        if (s1Count[i] !== s2Count[i]) {
        check = false;
        break;
        }
    }

    for (let i = s1.length; i < s2.length; i++) {
        s2Count[s2[i].charCodeAt(0) - aCharCode]++;
        s2Count[s2[i - s1.length].charCodeAt(0) - aCharCode]--;

        if(matches(s1Count, s2Count)) return true; 
    }

    return false;
};