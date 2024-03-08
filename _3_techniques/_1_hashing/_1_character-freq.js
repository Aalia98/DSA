const name = "aalia";

// using frequency array
const freq = Array(256).fill(0)
for(let i=0;i<name.length;i++) freq[name.charCodeAt(i)]++;
for(let i=0;i<freq.length;i++) {
    if(freq[i]>0) {
        console.log(String.fromCharCode(i) + " " + freq[i]);
    }
}

// using hashmap

let freqCount = {};
for(let i = 0; i < name.length; i++) {
    freqCount[name[i]] = (freqCount[name[i]] || 0) + 1;
}
console.log(freqCount);