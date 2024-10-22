// TODO: Using For loop

function fibonacci(num) {
    let num1 = 0;
    let num2 = 1;
    let sum;
    if (num === 1) {
        return num1;
    } else if (num === 2) {
        return num2;
    } else {
        for (let i = 3; i <= num; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        return num2;
    }
}

console.log("Fibonacci(5): " + fibonacci(5));
console.log("Fibonacci(8): " + fibonacci(8));

// TODO: Using While loop

function fibonacci(num) {
    if (num == 1)
        return 0;
    if (num == 2)
        return 1;
    let num1 = 0;
    let num2 = 1;
    let sum;
    let i = 2;
    while (i < num) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        i += 1;
    }
    return num2;
}

console.log("Fibonacci(5): " + fibonacci(15));
console.log("Fibonacci(8): " + fibonacci(18));

// TODO: Using Recursion Method

function fibonacci(num) {
    if (num == 1)
        return 0;
    if (num == 2)
        return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
console.log("Fibonacci(5): " + fibonacci(5));
console.log("Fibonacci(8): " + fibonacci(8));

// TODO: Using Generator Function

function* fibonacciGenerator(num) {
    let num1 = 0;
    let num2 = 1;
    yield num1;
    yield num2;
    for (let i = 3; i <= num; i++) {
        let sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        yield num2;
    }
}

function fibonacci(num) {
    let result;
    const iterator = fibonacciGenerator(num);
    for (let i = 0; i < num; i++) {
        result = iterator.next().value;
    }
    return result;
}

console.log("Fibonacci(5): " + fibonacci(5));
console.log("Fibonacci(8): " + fibonacci(8));
