// JavaScript Program for Armstrong Numbers

// Using toString() and split() Method

function isArmstrong(number) {
    const digits = number.toString().split('');
    const order = digits.length;
    const sum = digits.reduce(
        (acc, digit) =>
            acc + Math.pow(parseInt(digit), order), 0);
 
    if (sum === number) {
        console.log(
            number + " is an Armstrong Number");
    }
    else {
        console.log
            (number + " is not an Armstrong Number");
    }
}
 
isArmstrong(9474);
isArmstrong(520);

// Using naive Method

function armstrong(num) {
    const digits = num.toString().split('');
    let temp = num;
    let sum = 0, rem = 0, i = 0;

    while(i < digits.length) {
        rem = parseInt(temp%10);
        sum += Math.pow(rem, 3);
        temp = temp/10;
        i++;
    }
    if(num === sum) {
        console.log("Armstrong Number");
    } else {
        console.log("Not Armstrong Number");
    }
}

armstrong(1534);

// Using Array.from() Method 

function isArmstrong(number) {
    const digits = Array.from(String(number), Number);
    const order = digits.length;
 
    // Calculate the total sum using array.map()
    const sum = digits.reduce(
        (acc, digit) =>
            acc + Math.pow(parseInt(digit), order), 0);
 
    if (sum === number) {
        console.log(
            number + " is an Armstrong Number");
    }
    else {
        console.log(
            number + " is not an Armstrong Number");
    }
}
 
isArmstrong(1634);
isArmstrong(749);

// Using Array Reduce

function isArmstrong(number) {
    const numStr = number.toString();
    const numDigits = numStr.length;
 
    const sum = [...numStr].reduce((acc, digit) =>
        acc + Math.pow(parseInt(digit), numDigits), 0);
 
    return sum === number;
}
 
console.log(isArmstrong(153)); 

