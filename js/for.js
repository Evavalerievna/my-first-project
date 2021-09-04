'use scrict';

/* //нахождение факториала (цикл while)
const factorial = n => {
    let counter = 1; //переменная счетчика чтобы считать от 1 до верхнего предела
    let result = 1; //текущий результат

    while (counter <=n) {
        result = result * counter;
        counter = counter + 1;
    }
    return result;

};
console.log(factorial(3)); 
 */


//нахождение факториала (цикл for)

/* const factorial = n => {
    let result = 1; 
    for (let counter = 1; counter <=n; counter ++) {
        result *= counter;
    }
    return result;
};
console.log(factorial(3)); */

// все три выражения в цикле не являются обязательными
// 1) в блоке инициализации не требуется определять переменные
// let counter = 1;
// for(; counter <=n; counter++) {
    //любой код
//};

//2) блок условия не является обязательным
//for(let counter = 1;; counter++) {
//    if(counter <=n) break;
    //любой код
//};

//3)вы можете пропустить все 3 блока
//let counter =1;
//for (;;) {
//if (counter <=n) break;
// еще какой-нибудь код
//counter++;
//}

// функция должна посчитать сумму всех чисел от 1 до n
/* const sum = n => {
    let result = 0;
    for(let counter = 1; counter <= n; counter++) {
        return 10; // return прерывает цикл
        result += counter;
    }
    return result;
};
console.log(sum(5)); // 10
console.log(sum(20)); // 10
console.log(sum(50)); // 10 */

// switch/case
let answer;

if(num ===1) {
    answer = "one";
} else if (num ===2) {
    answer = "two";
} else {
    answer = "nothing";
};

//с использованием switch
switch(num) {
    case 1: // if(num ===1)
        answer = "one";
        break; //необходим чтобы выйти из блока switch

    case 2: // if(num ===2)
        answer = "two";
        break; //необходим чтобы выйти из блока switch

    default: 
        answer = "nothing";
        break; //необходим чтобы выйти из блока switch
};



// упрощенная форма записи
//resalt *= counter; //то же, что resalt = resalt * counter;
//resalt += counter; //то же, что resalt = resalt + counter;
//resalt -= counter; //то же, что resalt = resalt - counter;
//resalt %= counter; //то же, что resalt = resalt % counter;

// упрощенная форма записи (инкремент, декремент)
// counter = counter + 1; // counter ++
// counter = counter - 1; // counter --

/* //postfix
let a = 3;
let b;
b = a++; // b = 3, a = 4
console.log(a);
console.log(b); */

/* //prefix notation - сложение произойдет перед тем, как значение вернется
let a = 3;
let b;
b = ++a; // b = 4, a = 4
console.log(a);
console.log(b); */

