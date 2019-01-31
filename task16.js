/**
215 = 32768, сумма цифр этого числа равна 3 + 2 + 7 + 6 + 8 = 26.

Какова сумма цифр числа 21000?
 */

console.log(BigInt(2**1000).toString().split("").reduce((acc, el) => acc + Number(el), 0));