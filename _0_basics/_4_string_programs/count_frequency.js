// TODO: Using frequency count

function freqCount(s) {
    const freq = {};
    for (let x of s) {
      freq[x] = (freq[x] || 0) + 1;
    }
    return freq;
  }
  
  console.log(freqCount("geeksforgeeks"));
  
// TODO: Using map

function freqCount(s) {
    const m = new Map();
    for (let x of s) {
      m.set(x, (m.get(x) || 0) + 1);
    }
    return m;
  }
  
  console.log(freqCount("geeksforgeeks"));
  
// TODO: Using Regular expression

function freqCount(s) {
    return (s.match(/[a-z]/gi) || []).reduce((freq, x) => {
      freq[x] = (freq[x] || 0) + 1;
      return freq;
    }, {});
  }
  
  console.log(freqCount("geeksforgeeks"));
  