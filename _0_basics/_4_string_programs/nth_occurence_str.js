// TODO: Using split() and join() methods
{
let string = "Geeks gfg Geeks Geek Geeks gfg";
let searchString = "Geeks";
let occurrence = 3;

console.log(
    occurrence +
        "rd occurrence of a '" +
        searchString +
        "' in " +
        string +
        "'."
);
function getPos(str, subStr, i) {
    return str.split(subStr, i).join(subStr).length;
}

function GFG_Fun() {
    console.log(getPos(
        string, 
        searchString, 
        occurrence
    ));
}

GFG_Fun();
}
// TODO: Using indexOf() method
{
let string = "Geeks gfg Geeks Geek Geeks gfg";
let searchString = "Geeks";
let occurrence = 3;

console.log(
    occurrence +
        "rd occurrence of a '" +
        searchString +
        "' in " +
        string +
        "'."
);

function getIndex(str, substr, ind) {
    let Len = str.length,
        i = -1;
    while (ind-- && i++ < Len) {
        i = str.indexOf(substr, i);
        if (i < 0) break;
    }
    return i;
}

function GFG_Fun() {
    console.log(getIndex(string, searchString, occurrence));
}

GFG_Fun();
}
// TODO: Using regular expressions
{
let string = "Geeks gfg Geeks Geek Geeks gfg";
let searchString = "Geeks";
let occurrence = 3;

let regex = new RegExp(searchString, 'g');
let matches = Array.from(string.matchAll(regex));

if(matches.length >= occurrence) {
    let nthIndex = matches[occurrence - 1].index;
    console.log(occurrence + "rd occurrence of a '" + searchString + "' in " + string + "'.");
    console.log("Index of the " + occurrence + "rd occurrence: " + nthIndex);
} else {
    console.log("The string does not have " + occurrence + " occurrences of '" + searchString + "'.");
}
}
// TODO: Using lastIndexOf() Method in a Loop
{
let string = "Geeks gfg Geeks Geek Geeks gfg";
let searchString = "Geeks";
let occurrence = 3;

console.log(
    occurrence +
        "rd occurrence of a '" +
        searchString +
        "' in " +
        string +
        "'."
);

function getLastIndex(str, substr, occ) {
    let index = str.length;
    while (occ-- > 0 && index >= 0) {
        index = str.lastIndexOf(substr, index - 1);
    }
    return index;
}

function GFG_Fun() {
    console.log(getLastIndex(string, searchString, occurrence));
}

GFG_Fun();
}
// TODO: Using a Loop and substr()
{
    function getNthOccurrence(string, substring, n) {
        let count = 0;
        let position = 0;
    
        while (count < n) {
            position = string.indexOf(substring, position);
    
            if (position === -1) {
                return -1;
            }
    
            count++;
            position++;
        }
    
        return position - 1;
    }
    
    const str = "the quick brown fox jumps over the lazy dog. the dog barks.";
    const subStr = "the";
    const nth = 2;
    
    const result = getNthOccurrence(str, subStr, nth);
    console.log(result);
}

// TODO: Using Array.prototype.reduce() Method
{
    function getNthOccurrence(str, subStr, n) {
        let count = 0;
        let result = str.split(subStr).reduce((acc, part, index, array) => {
          if (index < array.length - 1) {
            count++;
            if (count === n) {
              acc = acc.length + part.length;
            }
            return acc + part + subStr;
          }
          return acc + part;
        }, '');
      
        return count >= n ? result.length - subStr.length : -1;
      }
      
      let str = "This is a test. This test is for testing.";
      let subStr = "test";
      let nth = 2;
      
      console.log(getNthOccurrence(str, subStr, nth)); // Output: 25
}