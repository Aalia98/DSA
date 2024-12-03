// TODO: JavaScript Program to Find i’th Index Character in a Binary String Obtained After n Iterations

// Approach 1
{
let s = "";

function binary_conversion(m) {
    while (m !== 0) {
        let tmp = m % 2;
        s += tmp.toString();
        m = Math.floor(m / 2);
    }

    s = s.split("").reverse().join("");
}

function find_character(n, m, i) {
    binary_conversion(m);

    let s1 = "";

    for (let x = 0; x < n; x++) {
        let temp = "";

        for (let y = 0; y < s.length; y++) {
            temp += s[y] === '1' ? "10" : "01";
        }

        s = temp;
    }

    return s[i] === '1' ? 1 : 0;
}
let m = 5, n = 2, i = 8;
console.log(find_character(n, m, i));
}

// Approach 2
{
function KthCharacter(m, n, k) {

    let distance = Math.pow(2, n);
    let Block_number = Math.floor(k / distance);
    let remaining = k % distance;

    let s = new Array(32).fill(0);
    let x = 0;

    while (m > 0) {
        s[x] = m % 2;
        m = Math.floor(m / 2);
        x++;
    }

    let root = s[x - 1 -
        Block_number];

    if (remaining == 0) {
        console.log(root);
        return;
    }

    let flip = true;
    while (remaining > 1) {
        if ((remaining & 1) > 0) {
            flip = !flip;
        }
        remaining = remaining >> 1;
    }

    if (flip) {
        console.log((root > 0) ? 0 : 1);
    }
    else {
        console.log(root);
    }
}
let m = 5, k = 5, n = 3;
KthCharacter(m, n, k);
}

// Approach 3
{
    function getIthCharacter(m, n, i) {
        function toBinaryString(m) {
            return m.toString(2);
        }
    
        function findIthChar(binaryStr, n, i) {
            if (n == 0) {
                return binaryStr[i];
            }
    
            let length = Math.pow(2, n); 
            let mid = length / 2;
    
            if (i < mid) {
                return findIthChar(binaryStr, n - 1, i);
            } else {
                return findIthChar(binaryStr, n - 1, i - mid) == '0' ? '1' : '0';
            }
        }
    
        let binaryStr = toBinaryString(m); 
        return findIthChar(binaryStr, n, i);
    }
    
    let m = 5, n = 2, i = 3;
    console.log(getIthCharacter(m, n, i)); // Output: 1
    
    m = 3, n = 3, i = 6;
    console.log(getIthCharacter(m, n, i)); // Output: 1
}

// Approach 4
{
    function getIthCharacter(m, n, i) {
        function toBinaryString(m) {
            return m.toString(2);
        }
        function findIthChar(binaryStr, n, i) {
            while (n > 0) {
                let length = Math.pow(2, n);
                let mid = length / 2;
    
                if (i < mid) { 
                } else {
                    i -= mid;
                    binaryStr = binaryStr.split('').map(char => char === '0' ? '1' : '0').join(''); 
                }
                n--;
            }
            return binaryStr[i];
        }
    
        let binaryStr = toBinaryString(m);
        return findIthChar(binaryStr, n, i);
    }
    
    let m = 5, n = 2, i = 3;
    console.log(getIthCharacter(m, n, i))
    
    m = 3, n = 3, i = 6;
    console.log(getIthCharacter(m, n, i))
}