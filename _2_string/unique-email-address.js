// https://leetcode.com/problems/unique-email-addresses/

var numUniqueEmails = function(emails) {
    const subEmail = new Set();
 
    for(let k = 0; k < emails.length; k++) {
        let str = "";
        for(let i = 0; i < emails[k].length; i++) {
            if(emails[k][i] == "+" || emails[k][i] == "@") break;
            else if(emails[k][i] == ".") continue;
            else {
                str += emails[k][i];
            }
        }
        str += "@" + emails[k].split("@")[1];
        subEmail.add(str);
    } 
    return subEmail.size;
 };