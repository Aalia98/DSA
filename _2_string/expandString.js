// Given string str of the type “3(ab)4(cd)”, the task is to expand it to “abababcdcdcdcd” where integers are from the range [1, 9].
// Examples: 
//     Input: str = “3(ab)4(cd)” 
//     Output: abababcdcdcdcd

//     Input: str = “2(kl)3(ap)” 
//     Output: klklapapap

function expandStr(str) {
    let s = "";
    var n;
    for(let i = 0; i < str.length; i++) {
        if(str[i] >= '1' && str[i] <= '9'){
            n = parseInt(str[i]);
        } else if(str[i] == "(") {
            let temp = "";
            while(str[++i] != ")"){
                temp += str[i];
            }
            for(let j = 0; j < n; j++) {
                s += temp;
            }
        } 
    }
    return s;
}
const str = "3(ab)4(cde)";
console.log(expandStr(str));