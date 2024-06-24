function name(n, m) {
    if(n>10) return;
    console.log(m);
    name(n+1, m);
}
name(1, "Aalia");

