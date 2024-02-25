function name(n) {
    if(n<1) return;
    name(n-1);
    console.log(n);
}
name(4);