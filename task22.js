/*Используйте names.txt (правый клик и 'Save Link/Target As...'), текстовый файл размером 46 КБ, содержащий более пяти тысяч имён. Начните с сортировки в алфавитном порядке. Затем подсчитайте алфавитные значения каждого имени и умножьте это значение на порядковый номер имени в отсортированном списке для получения количества очков имени.
Например, если список отсортирован по алфавиту, имя COLIN (алфавитное значение которого 3 + 15 + 12 + 9 + 14 = 53) является 938-ым в списке. Поэтому, имя COLIN получает 938 × 53 = 49714 очков.
Какова сумма очков имён в файле?
*/
let fs = require('fs');

let alp = {
    'A':1,
    'B':2,
    'C':3,
    'D':4,
    'E':5,
    'F':6,
    'G':7,
    'H':8,
    'I':9,
    'J':10,
    'K':11,
    'L':12,
    'M':13,
    'N':14,
    'O':15,
    'P':16,
    'Q':17,
    'R':18,
    'S':19,
    'T':20,
    'U':21,
    'V':22,
    'W':23,
    'X':24,
    'Y':25,
    'Z':26
}

function getNmaes() {
    let parts = [];
    let data = [];
    const fileData = fs.readFileSync('names.txt', 'utf-8');
    parts = fileData.split(",");
    data = parts.map(el => el.slice(1, el.length-1));
    data.sort();

    return data;
}

function getScores(lst) {
    let sum = 0;
    let c = 1;
    for(let i of lst) {
        let coin = 0;
        for (j of i) {
            coin += alp[j]
        }
        sum += coin * c;
        c++;
    }

    return sum;
}

console.log(getScores(getNmaes()));