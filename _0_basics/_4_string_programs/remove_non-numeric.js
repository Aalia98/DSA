// TODO: Method 1: Using JavaScript replace() Function

{
let str = "1Gee2ksFor345Geeks6";
console.log(str);

function stripValues() {
    console.log(str.replace(/\D/g, ""));
}

stripValues();}

// TODO: Method 3: Using JavaScript str.split() and array.filter() methods

{
let str = "1Gee2ksFor345Geeks6";
console.log(str);

function stripValues() {
    console.log((str.match(/[^\d.-]/g,"") || []).join(""));
}

stripValues();}

// TODO: Method 4: Using JavaScript ‘reduce’ Method

{
let str = "1Gee2ksFor345Geeks6";
console.log(str);

function stripValues() {
    let nonNumericStr = str.split("").reduce((acc, char) => {
        return isNaN(char) || char === " " ? acc + char : acc;
    }, "");
    console.log(nonNumericStr);
}

stripValues();}

// TODO: Method 5: Using JavaScript Array.prototype.forEach Method

let str = "1Gee2ksFor345Geeks6";
console.log(str);

function stripValues() {
    let numericStr = "";
    str.split("").forEach(char => {
        if (!isNaN(char) && char !== " ") {
            numericStr += char;
        }
    });
    console.log(numericStr);
}

stripValues();