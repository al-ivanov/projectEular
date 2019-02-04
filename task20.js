/**
n! означает n × (n − 1) × ... × 3 × 2 × 1

Например, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
и сумма цифр в числе 10! равна 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Найдите сумму цифр в числе 100!.
*/

function getFact(n) {
    if (n == 1) {
        return 1;
    } else {
        return BigInt(n) * BigInt(getFact(n-1));
    }
}

function getDigitsSum(number) {
    let sum = number.toString().split("").reduce((acc, el) => acc + Number(el), 0);
    return sum;
}

const factor = getFact(100);
const result = getDigitsSum(factor)
console.log(result);