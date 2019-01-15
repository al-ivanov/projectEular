/*
 Каждый следующий элемент ряда Фибоначчи получается при сложении двух предыдущих. Начиная с 1 и 2, первые 10 элементов будут:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

Найдите сумму всех четных элементов ряда Фибоначчи, которые не превышают четыре миллиона.
 */

let sum = 0;
let numberPreview = 1;
let numberNext = 2;
let buf;

while (numberNext < 4000000) {
    if (numberNext % 2 == 0) 
        sum += numberNext;

    buf = numberNext;
    numberNext += numberPreview;
    numberPreview = buf;
}

console.log(sum);