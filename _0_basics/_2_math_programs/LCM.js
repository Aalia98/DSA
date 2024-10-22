// Javascript program to find LCM of two numbers 

TODO: // Recursive function to return gcd of a and b 
function gcd(a, b) 
{ 
if (b == 0) 
    return a; 
return gcd(b, a % b); 
} 

// Function to return LCM of two numbers 
function lcm(a, b) 
{ 
    return (a / gcd(a, b)) * b; 
} 

// Driver program to test above function 
 
    let a = 15, b = 20; 
    document.write("LCM of " + a + " and "
    + b + " is " + lcm(a, b)); 

// TODO: Using for loop

// Function to return LCM of two numbers
function LCM(a, b){
    let greater = Math.max(a, b);
    let smallest = Math.min(a, b);
    for(let i = greater; i <= a*b; i+=greater){
        if(i % smallest == 0){
            return i;
        }
    }
}

// Driver program to test above function
let x = 10;
let y = 5;
console.log("LCM of", x, "and", y, "is", LCM(x, y));
