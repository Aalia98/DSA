function print(n) {
    if(n > 10) return    // base case
    console.log(n);      // task of this func.
    print(n+1);      // recursion call
}
print(1);