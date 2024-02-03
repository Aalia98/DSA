const name = "aalia";

let freqCount = {};

for(let i = 0; i < name.length; i++) {
    freqCount[name[i]] = (freqCount[name[i]] || 0) + 1;
}
console.log(freqCount);