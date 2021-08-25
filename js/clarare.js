//декларативное и императивное программирование

//let pi = 3.14; //объявление переменной. Лучше использовать константы. Константа не изменна.

//const pi = 3.14;
//pi = 'asd';

//factorial(3);
//3 * factorial(2);
//3 * 2 * factorial(1);
//3 * 2 * 1 * factorial(0);
//3 * 2 * 1 * 1;
//3 * 2 * 1;
//3 * 2;
//6;

//let factorial = 1;
//factorial = factorial * 2; //2
//factorial = factorial * 3; //6

//цикл While
//while (условие) {
    //делаю что-то
    //и еще что-то
//}

//написать функцию факториала с переменной и циклом
/* const factorial = n => {
    let counter = 1; //переменная счетчика чтобы считать от 1 до верхнего предела
    let result = 1; //текущий результат

    while (counter <=n) {
        result = result * counter;
        counter = counter + 1;
    }
    return result;

};
console.log(factorial(3)); */

//функцию, используя итеративный процесс. функция должна находить наименьший делитель заданного числа. число передаваемое в функцию, больше 0.
// myFunction(15); // 3
// myFunction(17); // 17
// идея
// 1) пробуем разделить число на 2
// 2) если делится без остатка, то это наименьший делитель
// 3) если нет, то берем следующий делитель
// 4) если ничего не делит без остатка, то переданное число является простым, т.е. его наименьший делитель оно само (не считая 1)
/* 
const minimusMeasure = (num) => { 
    let a = 2;
    if ( num===1 ) {
        return num;
       }
    while (num % a !== 0)  {
        a = a + 1;
    } 

    return a;
};

console.log (minimusMeasure(15)); */


// строки

//const str = 'Hello';
//console.log(str);
//const str1 = "Hello'asdv'"; //если нужны ковычки в предложении, используем др ковычки. 
//console.log(str1);

//const str1 = "They call him \'Harry\', and he likes it"; //если нужны ковычки в предложении, используем др ковычки. Либо экранивароние
//console.log(str1);


//функция принимает строку и возвращает ту же строку, но без каждой второй буквы
//'California' "Clfri"
/* const skipString = str => {
    let i = 0;
    let result = '';

    while (i < str.length) {
        result = result + str[i];
        i = i + 2;
    }
    return result;
};
console.log(skipString('California')); */

// длина означает кол-во символов в строке
// индексация начинается с 0

/* const str = 'qwertyuiop';
const result = '${str[2]}${str[4]}${str[0]}';
console.log(result); */

const name = "Javascript";
const version = "5";
const result = `${name[0]} - ${name}, ${version}.`;
console.log(result);

