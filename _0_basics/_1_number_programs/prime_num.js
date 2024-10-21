// Javascript Program to Check Prime Number

// Checking prime number using Flag variable

function isPrime(num) {
    let i, flag = true;

    if(num<=1){
        flag = false;
    }

    for(i = 2; i <= num/2; i++) {
        
        if(num % i == 0) {
            flag = false;
            break;
        }
    }
        if(flag == true){
            console.log(num + " is Prime Number")
        } else {
            console.log(num + " is Not Prime Number")
        }
}

isPrime(1)
isPrime(17)

// Using recursive approach

function checkPrime(num, div = 2) {
    if (num <= 1) {
        return false;
    }
    if (div > Math.sqrt(num)) {
        return true;
    }
    if (num % div === 0) {
        return false;
    } 
    else {
        return checkPrime(num, div + 1);
    }
}
console.log(checkPrime(5) ? "Passed number is Prime" :
    "Passed number is not Prime");
console.log(checkPrime(4) ? "Passed number is Prime" :
    "Passed number is not Prime");


// Using Lambda and Array Methods

const isPrime = num => {
    if (num <= 1) return false;
    if (num === 2) return true;
    return ![...Array(num).keys()].slice(2).some(i => num % i === 0);
}


console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(17)); // true
console.log(isPrime(18)); // false
