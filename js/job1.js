'use strict';

// Задача 
// посчитайте в цикле сумму квадратов от 1 до 10

/* const sumOfSquares = () =>
{   let result = 0;
    for (let i = 1; i<=10; i++) {
        result += i**2;
    }
    return result;
};

console.log (sumOfSquares()); */

/* let result =0;

let i =0;
while(i<=10){
    result +=i**2;
    i++;
}

console.log(result); */

// Задача 
// Написать функцию, которая переворачивает цифры в переданном числе и возвращает новое число. 
/* reverseNumber(13); // 31
reverseNumber(-123); // -321 */

/* const str = '321'
function reverseString(str) {
    return str.split('').reverse().join('')
   };
   
   console.log('str:', str);
   console.log('reverse:', reverseString(str)); */

/*    const reverseNumber = (n)=>{
    if(n<0){
        i=-n
    let c = String(l);
    let i=0;
    let b =c.length-1;
    let array = '';
    while(b>=i){
    array+= c[b];
    b--;
    }
    return(-array);
    }
    if(n>0){
    let c = String(n);
    let i=0;
    let b =c.length-1;
    let array = '';
    while(b>=i){
    array+= c[b];
    b--;
    }
    return(array);
}
};
console.log(reverseNumber(-134)); */

   /* const length = 12;
   const num = length(54);  *///type error
   // типизация - классификация информации

   // числа, строки, булеан, (underfind) - типы в js

 /*   let a;
   console.log(a); // специальное значение underfind
   typeof a;  */

// две концепции типизации:
// 1) динамическая и статическая
//    а) друие языки проверяют типы и ищут ошибки типизации на стадии исполнения - динамическая типизация (php,ruby, js)
//    б) некоторые языки проверяют типы и ищут ошибки на стадии компиляции - статическая компиляция (Си, С++, Java, Go)
// 2) слабая и сильная
// код при запуске конвертируется в понятную для пк форму - компиляция

// Задача
//функцию, которая работает так:
/* 1) дано неотрицительное число num.
2) Необходимо складывать все входящие в него цифры до тех пор, пока не останется одна цифра. 
Пример: Для числа 38 процесс будет таким:
1. 3 + 8 = 11
2. 1 + 1 = 2
Ответ :2 */
//Примеры вызова:

/* addNumbers(10); // 1
addNumbers(19); // 1
addNumbers(38); // 2 */
const addNumbers = (num) => {
    
    let strOfNumber = String(num);
    let length = strOfNumber.length - 1;
    let sum =0;
    while (length >=0) {
        sum += Number (strOfNumber[length]);
        length--;
    }

};

console.log(addNumbers(19));
