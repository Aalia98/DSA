// TODO: Using split(), sort(), and join() Methods
{
    function checkAnagram(a, b) {

        if (a.length !== b.length) {
            return false;
        }
    
        let str1 = a.split('').sort().join('');
        let str2 = b.split('').sort().join('');
    
        let result = (str1 === str2);
        return result;
    }
    
    console.log(checkAnagram('abc', 'cba'));
}
// TODO: Using for loop
{
    function checkAnagram(a, b) {
        let array = {};
        if (a === b) {
            return true;
        }
        if (a.length !== b.length) {
            return false;
        }
        let minCharCode = Math.min(getMinCharCode(a),
            getMinCharCode(b));
    
        for (let i = 0; i < a.length; i++) {
            let res = a.charCodeAt(i) - minCharCode;
            array[res] = (array[res] || 0) + 1;
        }
    
        for (let j = 0; j < b.length; j++) {
            let res = b.charCodeAt(j) - minCharCode;
            if (!array[res]) {
                return false;
            }
            array[res]--;
        }
        return true;
    }
    
    function getMinCharCode(str) {
        let minCharCode = Infinity;
        for (let i = 0; i < str.length; i++) {
            let charCode = str.charCodeAt(i);
            if (charCode < minCharCode) {
                minCharCode = charCode;
            }
        }
        return minCharCode;
    }
    
    console.log(checkAnagram('abc', 'cba'));
}
// TODO: Using a Frequency Map
{
    const areAnagrams = (str1, str2) => {
        if (str1.length !== str2.length) return false;
    
        const frequencyMap = (str) => {
            const map = {};
            for (let char of str) {
                map[char] = (map[char] || 0) + 1;
            }
            return map;
        };
    
        const map1 = frequencyMap(str1);
        const map2 = frequencyMap(str2);
    
        for (let char in map1) {
            if (map1[char] !== map2[char]) return false;
        }
        return true;
    };
    
    console.log(areAnagrams("listen", "silent")); // true
    console.log(areAnagrams("hello", "world")); // false
}