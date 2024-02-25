function pow(x,y){
    if(y == 0) return 1;
    return x * pow(x, y-1);
}




const x = 2, y = 5;
console.log(pow(x,y)); // 32