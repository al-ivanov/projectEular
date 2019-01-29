/**
Следующая повторяющаяся последовательность определена для множества натуральных чисел:

n → n/2 (n - четное)
n → 3n + 1 (n - нечетное)

Используя описанное выше правило и начиная с 13, сгенерируется следующая последовательность:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
Получившаяся последовательность (начиная с 13 и заканчивая 1) содержит 10 элементов. Хотя это до сих пор и не доказано (проблема Коллатца (Collatz)), предполагается, что все сгенерированные таким образом последовательности оканчиваются на 1.

Какой начальный элемент меньше миллиона генерирует самую длинную последовательность?

Примечание: Следующие за первым элементы последовательности могут быть больше миллиона.
 */

/*let inArr = (arr, el) => {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === el) 
            return true;
    }

    return false;
}

let longest = 0,
    final_num = 0,
    known_sums = new Array(1000000).fill(0);

for (let i = 13; i < 1000000; i++) {
    let temp = i,
        count = 1;
    
        while (temp > 1) {
            if (temp % 2 === 0) {
                temp /= 2;
            } else {
                temp = 3 * temp + 1;
            }

            if(known_sums.includes(temp) && known_sums[temp] != 0) {
                count += known_sums[temp];
                break;
            }


            count++;
        }
        console.log(i);
        known_sums[i] = count;
        if (count > longest) {
            longest = count;
            final_num = i
        }
}

console.log(final_num);*/

// Закоментированный код тоже рабочий, но метод includes работает очень медленно

function getCollatz(n, qty) {
    if(n == 1) {
        return qty;
    } else if (n % 2 == 0) {
        return getCollatz(n/2, qty+1);
    } else {
        return getCollatz(3*n+1, qty+1);
    }
}

console.time("time");
let n = 0,
    a = 0;

for (let i = 13; i < 1000000; i++) {
    let c = getCollatz(i, 1);
    if(c > n) {
        a = i;
        n = c;
    }
}
console.timeEnd("time");
console.log(a);