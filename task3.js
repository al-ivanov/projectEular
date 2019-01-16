/*Простые делители числа 13195 - это 5, 7, 13 и 29.

Каков самый большой делитель числа 600851475143, являющийся простым числом?*/

/*var gcd = function(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
};*/

function getMaxSimpleDivider(x) {
    let arr = [];
    
    for (let i = 2; i <= x; i++) {
        if (x % i === 0) {
            arr.push(i);
            x = parseInt(x / i);
        }
    }

    return Math.max(...arr);
}


console.log(getMaxSimpleDivider(600851475143));