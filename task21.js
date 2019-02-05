/**
Пусть d(n) определяется как сумма делителей n (числа меньше n, делящие n нацело).
Если d(a) = b и d(b) = a, где a ≠ b, то a и b называются дружественной парой, а каждое из чисел a и b - дружественным числом.
Например, делителями числа 220 являются 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 и 110, поэтому d(220) = 284. Делители 284 - 1, 2, 4, 71, 142, поэтому d(284) = 220.
Подсчитайте сумму всех дружественных чисел меньше 10000.
*/

function getSum(n) {
    let s = 0;
    for (let i = 1; i < n; i++) {
        if (n % i == 0) {
            s += i;
        }
    }

    return s;
}

function genFriendlys(n) {
    let res = [];
    for (let i = 1; i < n; i++) {
        if(!res.includes(i)) {
            let tmp = getSum(i);
            if(i == getSum(tmp) && i != tmp) {
                res.push(i);
                res.push(tmp);
            }
        }
    }

    return res.reduce((acc, el) => acc + el);
}

console.log(genFriendlys(10000));