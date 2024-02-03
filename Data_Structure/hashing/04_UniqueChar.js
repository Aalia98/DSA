const name = "aalia";

let visitedChar = {};
let uniqueChar = ""


for(let i = 0; i < name.length; i++) {

    if(!visitedChar[name[i]]) {
        visitedChar[name[i]] = true
        uniqueChar += name[i]
    }
}
console.log(uniqueChar);