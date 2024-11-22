// TODO: Method 1: By using Type Conversion of JavaScript
{
function convert_to_float(a) {

    let floatValue = +a;
    return floatValue;
}
let n = "55.225";

n = convert_to_float(n);
console.log("Converted value = " + n +
    " Type of " + n + " = " + typeof n);

n = "-33.565";
n = convert_to_float(n);

console.log("Converted value = " + n +
        " Type of " + n + " = " + typeof n);
}
// TODO: Method 2: By using parseFloat() Method
{
function convert_to_float(a) {

    let floatValue = parseFloat(a);
    return floatValue;
}

let n = "245.165";

n = convert_to_float(n);

console.log("Converted value = " + n +
        " Type of " + n + " = " + typeof n);
n = "-915.55";

n = convert_to_float(n);

console.log("Converted value = " + n +
        " Type of " + n + " = " + typeof n);
}
{
function convert_to_float(a) {

    let floatValue = parseFloat(a.replace(/, /, "."));
    return floatValue;
}
let n = "245, 165";
n = convert_to_float(n);

console.log("Converted value = " + n +
        " Type of " + n + " = " + typeof n);

n = "-915, 55";
n = convert_to_float(n);

console.log("Converted value = " + n +
        " Type of " + n + " = " + typeof n);
}
// TODO: Method 3: By using the eval() function
{
function convert_to_float(a) {

    let floatValue = eval(a);
    return floatValue;
}

let n = "55.225";
n = convert_to_float(n);

console.log("Converted value = " + n +
        " Type of " + n + " = " + typeof n);

n = "-33.565";
n = convert_to_float(n);

console.log("Converted value = " + n +
        " Type of " + n + " = " + typeof n);
}
// TODO: Method 4: By using Number() constructor
{
let stringNumber = "3.14";
let floatNumber = Number(stringNumber);
console.log(floatNumber); // Output: 3.14
}
// TODO: Method 5: By using Unary Plus Operator
{
function convert_to_float(a) {
    let floatValue = +a;

    return floatValue;
}

let n = "123.456";
n = convert_to_float(n);

console.log("Converted value = " + n +
        " Type of " + n + " = " + typeof n);

n = "-789.012";
n = convert_to_float(n);

console.log("Converted value = " + n +
        " Type of " + n + " = " + typeof n);
}