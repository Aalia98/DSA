{let str = 'geeks for geeks';
let newStr = "";
for(let i = 0; i < str.length; i++) {
    if(i === 0 || str.charAt(i-1) === " ") {
        newStr = newStr.concat(str.charAt(i).toUpperCase());
    }else {
        newStr = newStr.concat(str.charAt(i));
    }
    
}
console.log(newStr);}

// TODO: Using replace() function

function sentenceCase(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();

    return str.replace(/\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() +
                txt.substr(1).toLowerCase();
        });
}

console.log(sentenceCase('geeks for geeks'));

// TODO: Using For loop to titleCase a string

function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(titleCase("geeks for geeks"));

// TODO: Using map() method

function titleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
console.log(titleCase("converting string to title case"));

// TODO: Using reduce() method

function titleCase(st) {
    return st.toLowerCase().split(" ").reduce((s, c) =>
        s + "" + (c.charAt(0).toUpperCase() + c.slice(1) + " "), '');
}
console.log(titleCase("converting string to title case"));

// TODO: Using Foreach loop

const str = "geeks for geeks";
let titleCase = "";
str.split(" ").forEach(word => {
    const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    titleCase += capitalizedWord + " ";
});
console.log(titleCase);

// TODO: Using Regular Expressions and String Split

function titleCase(str) {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}

console.log(titleCase("converting string to title case"));

// TODO: Using Lodash’s _.startCase

const _ = require('lodash');

function toTitleCase(str) {
    return _.startCase(str);
}

console.log(toTitleCase("welcome to geeks for geeks"));

// TODO: Approach 8: Using toLocaleLowerCase() and replace() with a Callback Function

function toTitleCase(str) {
    return str.toLocaleLowerCase().replace(/\b\w/g, function(char) {
      return char.toUpperCase();
    });
  }
  
  let sentence = "welcome to geeks for geeks";
  console.log(toTitleCase(sentence)); // Output: "Welcome To Geeks For Geeks"

