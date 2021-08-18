module.exports = function reverse(n) {
    
    n = Math.abs(n);
    let a = 0;
    while (n>0) {
        a = a* 10+ (n % 10);
        n = Math.floor(n / 10);
    }
     return a;
}
