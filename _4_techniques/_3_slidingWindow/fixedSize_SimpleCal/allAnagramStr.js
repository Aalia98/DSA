// https://leetcode.com/problems/find-all-anagrams-in-a-string/

var findAnagrams = function(s, p) {
    const result = [];
    const pCount = new Array(26).fill(0);
    const sCount = new Array(26).fill(0);
    const aCharCode = 'a'.charCodeAt(0);

    if (s.length < p.length) return result;

    for (let char of p) {
        pCount[char.charCodeAt(0) - aCharCode]++;
    }

    for (let i = 0; i < p.length; i++) {
        sCount[s[i].charCodeAt(0) - aCharCode]++;
    }

    let isEqual = true;
    for (let i = 0; i < 26; i++) {
        if (sCount[i] !== pCount[i]) {
        isEqual = false;
        break;
        }
    }
    if (isEqual) result.push(0);

    for (let i = p.length; i < s.length; i++) {
        sCount[s[i].charCodeAt(0) - aCharCode]++;
        sCount[s[i - p.length].charCodeAt(0) - aCharCode]--;

        let match = true;
        for (let j = 0; j < 26; j++) {
        if (sCount[j] !== pCount[j]) {
            match = false;
            break;
        }
        }
        if (match) result.push(i - p.length + 1);
    }

    return result;
};