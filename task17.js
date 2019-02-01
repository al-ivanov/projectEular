/**
 * 
 * Если записать числа от 1 до 5 английскими словами (one, two, three, four, five), то используется всего 3 + 3 + 5 + 4 + 4 = 19 букв.

Сколько букв понадобится для записи всех чисел от 1 до 1000 (one thousand) включительно?


Примечание: Не считайте пробелы и дефисы. Например, число 342 (three hundred and forty-two) состоит из 23 букв, число 115 (one hundred and fifteen) - из 20 букв. Использование "and" при записи чисел соответствует правилам британского английского.
 */

let nums={
    1:'one',
    2:'two',
    3:'three',
    4:'four',
    5:'five',
    6:'six',
    7:'seven',
    8:'eight',
    9:'nine',
    10:'ten',
    11:'eleven',
    12:'twelve',
    13:'thirteen',
    15:'fifteen',
    18:'eighteen',
    20:'twenty',
    30:'thirty',
    40:'forty',
    50:'fifty',
    60:'sixty',
    70:'seventy',
    80:'eighty',
    90:'ninety',
};

function gen_num(n, dic) {
    let tmp = '';
    let t = n.toString();
    if(dic.hasOwnProperty(n)) {
        return dic[n]
    } else if(n < 20) {
        return dic[Number(t[1])] + 'teen';
    } else if(n < 100) {
        tmp = n - Number(t[1]);
        return dic[tmp] + dic[Number(t[1])];
    } else if(n < 1000) {
        //console.log(t.substring(1,3) === '00');
        if(t.substring(1,3) === '00') {
            return dic[Number(t[0])] + 'hundred';
        } else {
            return dic[Number(t[0])] + 'hundredand' + gen_num(Number(t.substring(1,3)), nums);
        }
    } else if (n === 1000) {
        return 'onethousand';
    }
}

let s = 0;
for (let i = 1; i <= 1000; i++) {
    s += gen_num(i, nums).length;
}

console.log(s)