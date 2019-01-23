/**
 * 
 Сумма простых чисел меньше 10 равна 2 + 3 + 5 + 7 = 17.

Найдите сумму всех простых чисел меньше двух миллионов.
 */

function resheto() {
    let n = 2000000; 
    let p = 2;
    let arr = [];
    let result = 0;
    for(let i = p; i < n; i++) {
        arr[i] = true;
    }
    do {
        for(var i = 2*p; i < n; i+=p) {
            if (arr[i])
                arr[i] = false;
        }
                
        for (var i = p + 1; i < n; i++) {
            if (arr[i]) break;
        }
    
        p = i;
    }while(p*p < n);

    for (let i = 0; i < arr.length; i++) {
        if(arr[i])
            result += i;
    }
            
    return result;
 }

 console.log(resheto());