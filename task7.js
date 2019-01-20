/**
 Выписав первые шесть простых чисел, получим 2, 3, 5, 7, 11 и 13. Очевидно, что 6-ое простое число - 13.

Какое число является 10001-ым простым числом?
 * 
 */

 function resheto() {
    let n = 110000; 
    let p = 2;
    let arr = [];
    let simpleArr = [];
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

    arr.forEach((element, index) => {
        if(element)
            simpleArr.push(index);
    });
            
    return simpleArr[10000];
 }

 console.log(resheto());