const name = "aalia";

// method 1
const unique = {};

for(let i = 0; i < name.length; i++) {
    unique[name[i]] = (unique[name[i]] || 0) + 1;
}

for (const key in unique) {
    console.log(key);
}

// method 2
let visitedChar = {};
let uniqueChar = ""


for(let i = 0; i < name.length; i++) {

    if(!visitedChar[name[i]]) {
        visitedChar[name[i]] = true
        uniqueChar += name[i]
    }
}
console.log(uniqueChar);