/* 
Число-палиндром с обеих сторон (справа налево и слева направо) читается одинаково. Самое большое число-палиндром, полученное умножением двух двузначных чисел – 9009 = 91 × 99.

Найдите самый большой палиндром, полученный умножением двух трехзначных чисел.
*/

function devideToDigits(number) {
    let arr = [];
    let stringNumber = number.toString();

    for(let i = 0; i < stringNumber.length; i++) {
        arr.push(+stringNumber.charAt(i));
    }

    return arr;
}

function isPalendrom(number) {
    let arr = devideToDigits(number);
    let counter = 0;
    let halfArr = Math.floor(arr.length / 2);
    for(let i = 0; i < halfArr; i++) {
        if(arr[i] === arr[arr.length - i - 1]) {
            counter++;
        }
    }

    if (counter === halfArr)
        return true;
    else
        return false;
}

function getMaxPalendrom() {
    let obj = {
        mult: [],
        i: [],
        j: []
    };
    for (let i = 999; i >= 100; i--) {
        for (let j = 999; j >= 100; j--) {
            if (isPalendrom(i * j)) {
                obj.mult.push(i * j);
                obj.i.push(i);
                obj.j.push(j);
            }
        }
    }
    let maxIndex = obj.mult.indexOf(Math.max(...obj.mult));
    return {mult: obj.mult[maxIndex], i: obj.i[maxIndex], j: obj.j[maxIndex]};
}

console.log(getMaxPalendrom());