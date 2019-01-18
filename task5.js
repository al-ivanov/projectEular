/**
 * 2520 - самое маленькое число, которое делится без остатка на все числа от 1 до 10.

    Какое самое маленькое число делится нацело на все числа от 1 до 20?
 * 
 */

 function getMinDiv() {
    for (let i = 1; i < 100000000000; i++) {
        let sum = 0;
        for(let j = 1; j <= 20; j++) {
            if(i % j === 0) {
                sum++;
                //console.log(sum)
            }
            if (sum == 20) {
                return i;
            }
        }
    }
}

console.log(getMinDiv());