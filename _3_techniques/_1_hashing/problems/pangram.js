// https://leetcode.com/problems/check-if-the-sentence-is-pangram/description/

var checkIfPangram = function(sentence) {
    if(sentence.length < 26) return false;
    const charCount = {};

    for(let i = 0; i < sentence.length; i++) {
        charCount[sentence[i]] = (charCount[sentence[i]] || 0) + 1;
    }
    if(Object.keys(charCount).length == 26) return true;
    else return false;
};