// TODO: Using ASCII values in JavaScript regEx

let str = "Hidd©©©en??Ascii ©©®®®Charac££ter";
console.log(str);

function gfg_Run() {
    
    str = str.replace(/[^\x00-\x7F]/g, "");
    console.log(str);
}

gfg_Run();

// TODO: Using Unicode in JavaScript regEx

{let str = "Hidd©©©en??Ascii ©©®®®Charac££ter";
console.log(str);
function gfg_Run() {
    
    str = str.replace(/[\u{0080}-\u{FFFF}]/gu, "");
    console.log(str);
}

gfg_Run();}

// TODO: Using ASCII values with the Array filter method

{
let str = "Hidd©©©en??Ascii ©©®®®Charac££ter";
console.log(str);

function gfg_Run() {
    
    str = str
    .split("")
    .filter(function (char) {
      return char.charCodeAt(0) <= 127;
    })
    .join("");
        console.log(str);
}

gfg_Run();
}

// TODO: Using ES6 methods with a custom function

{
let str = "Hidd©©©en??Ascii ©©®®®Charac££ter";
console.log(str);

function removeNonASCII(input) {
    return input.replace(/[^\x00-\x7F]/g, "");
}

function gfg_Run() {
    str = removeNonASCII(str);
        console.log(str);
}

gfg_Run();
}
