/**
 * Начиная в вершине треугольника (см. пример ниже) и перемещаясь вниз на смежные числа, максимальная сумма до основания составляет 23.

3
7 4
2 4 6
8 5 9 3

То есть, 3 + 7 + 4 + 9 = 23.

Найдите максимальную сумму пути от вершины до основания следующего треугольника:

75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23

Примечание: Так как в данном треугольнике всего 16384 возможных маршрута от вершины до основания, эту задачу можно решить проверяя каждый из маршрутов. Однако похожая Задача 67 с треугольником, состоящим из сотни строк, не решается перебором (brute force) и требует более умного подхода! ;o)
 */

const fs = require('fs');

function readFile(filePath) {
    let matrix = [];
    const fileContent = fs.readFileSync(filePath, "utf8");
    const rows = fileContent.split('\n');
    rows.forEach((item, index) => {
        matrix[index] = [];
        const elements = item.split(" ");
        elements.forEach(item => matrix[index].push(item));    
    });
    
    return matrix;
}

function getMaxSumFromTriangle(triangle, j, i) {
    if (i < 0 || i > j) {
        return -Infinity;
    } else if (!j) {
        return Number(triangle[0][0]);
    }
    let a = getMaxSumFromTriangle(triangle, j - 1, i - 1);
    let b = getMaxSumFromTriangle(triangle, j - 1, i);

    return Number(triangle[j][i]) + (a > b ? a : b);
}

const matrix = readFile("euler0018.txt");
let max = -Infinity;
for (let i = 0; i < matrix.length - 1; i++) {
    let sum = getMaxSumFromTriangle(matrix, matrix.length-1, i);
    if(sum > max) {
        max = sum;
    }
}
//console.log(getMaxSumFromTriangle(matrix));
console.log(max);