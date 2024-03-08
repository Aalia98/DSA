// brute force
// function targetString(name, targetName) {
//     let nameCount = {};
//     let targetCount = {};

//     // O(length of name)
//     for(let i = 0; i < name.length; i++) {
//         nameCount[name[i]] = (nameCount[name[i]] || 0) + 1
//     }

//     // O(len of targetName)
//     for(let i = 0; i < targetName.length; i++) {
//         targetCount[targetName[i]] = (targetCount[targetName[i]] || 0) + 1
//     }


//     for(const key in targetCount) {
//         let charCount = targetCount[key]
//         if(!nameCount[key]) return false
//         if(nameCount[key] >=charCount) continue;
//         else return false
//     }

//     return true;

// }

// optimize
function targetString(name, targetName) {

    if(name.length < targetName.length) return false
    let nameCount = {};

    // O(length of name)
    for(let i = 0; i < name.length; i++) {
        nameCount[name[i]] = (nameCount[name[i]] || 0) + 1
    }

    // O(len of targetName)
    for(let i = 0; i < targetName.length; i++) {
        if(!nameCount[targetName[i]]) return false
        if(nameCount[targetName[i]] > 0) nameCount[targetName[i]]--
        else return false
    }

    return true;

}

console.log(targetString("li", "aaliaj"));

