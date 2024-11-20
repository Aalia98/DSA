// TODO: Approach 1: Using match() function

function gfg() {
    let r = "Geeks For Geeks ";
    console.log(
        (r.match(/Geeks/g)).length);

}
gfg()
// TODO: Approach 2: Using a loop

function gfg() {
    let s = "Geeks for Geeks";
    let f = "for";
    let i = 0,
        n = 0,
        j = 0;

    while (true) {
        j = s.indexOf(f, j);
        if (j >= 0) {
            n++;
            j++;
        } else
            break;
    }
    console.log(n);
}
gfg()
// TODO: Approach 3: Using split() function

function gfg() {
    let s = "Geeks for Geeks";
    let f = "Geeks";
    let r = s.split(f).length - 1;
    console.log(r);
}
gfg()

// TODO: Approach 4: Using Indexof()

function gfg() {
    let s = "Geeks for Geeks";
    let f = "Geeks";
    let r = s.indexOf(f);
    let c = 0;
    while (r != -1) {
        c++;
        r = s.indexOf(f, r + 1);
    }
    console.log(c);
}
gfg()
// TODO: Approach 5: Using regular expressions

function countOccurrences(string, subString) {
    const escapedSubString = subString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedSubString, 'g');
    const matches = string.match(regex);
    return matches ? matches.length : 0;
}

const string = "Geeks for Geeks";
const subString = "Geeks";
console.log(countOccurrences(string, subString)); // Output: 2

// TODO: Approach 7: Using String.includes() and String.slice()

function countOccurrences(mainStr, subStr) {
    let count = 0;
    let pos = 0;
  
    while ((pos = mainStr.indexOf(subStr, pos)) !== -1) {
      count++;
      pos += subStr.length;
    }
  
    return count;
  }
  
  let mainString = "GeeksforGeeks";
  let searchString = "Geeks";
  console.log(countOccurrences(mainString, searchString)); // Output: 2
