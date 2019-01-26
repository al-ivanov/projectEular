/**
 Последовательность треугольных чисел образуется путем сложения натуральных чисел. К примеру, 7-ое треугольное число равно 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. Первые десять треугольных чисел:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

Перечислим делители первых семи треугольных чисел:

 1: 1
 3: 1, 3
 6: 1, 2, 3, 6
10: 1, 2, 5, 10
15: 1, 3, 5, 15
21: 1, 3, 7, 21
28: 1, 2, 4, 7, 14, 28
Как мы видим, 28 - первое треугольное число, у которого более пяти делителей.

Каково первое треугольное число, у которого более пятисот делителей?
 * 
 */

function getTriangularNumber(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

function getDividorCount(number) {
    let nod = 0;
    const sqrt = Math.floor(Math.sqrt(number));

    for(let i = 1; i <= sqrt; i++) {
        if(number % i === 0) {
            nod += 2;
        }
    }

    if(sqrt * sqrt === number) {
        nod -= 1;
    }

    return nod;
}

let number = 0, counter = 1;

while(getDividorCount(number) < 500) {
    number += counter;
    counter += 1;
}

console.log(number);