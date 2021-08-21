/*
в js не строгая типизация
сценарный язык
*/
/* пять основных операций
+, -, *, /, %, ()
*/

// 25 * 91 // 25 и 91 операнды, а * оператор умножения.
//((12 * 5) - 4) / 12 // все операторы инфиксные
// =4 // префиксный оператор
// х++ // постфиксный оператор
// 5 / 0 //Infinity
// -5 /0  //-Infinity
// 0 / 'строка' //NAN - not a number

//ЗАДАЧА
// // радиус Марса 3397 км. Какая площадь поверхности Марса? s = 4 * p * r * r
// 4 * 3.14 * 3397 * 3397

// // радиус Меркурия 2440 км. Какая площадь поверхности Меркурия?
// 4 * 3.14 * 2440 * 2440

// const pi = 3.14;

// 4 * pi * 3397 * 3397
// 4 * pi * 2440 * 2440

// const surfaceOfMarse = 4 * pi * 3397 * 3397;
// const surfaceOfMercury = 4 * pi * 2440 * 2440;

// console.log(surfaceOfMarse);
// console.log(surfaceOfMercury);


// ЗАДАЧА. хочу чтобы было так

// const pi = 3.14;

// определение функции
//const surfaceAreaCalculator = (radius) => {
 // return 4 * pi * radius * radius
//}
///const surfaceOfMarse = surfaceAreaCalculator(3390); //вызов функции
//const surfaceOfMercury = surfaceAreaCalculator(2440); //вызов функции

//console.log(surfaceOfMarse);
//console.log(surfaceOfMercury);

//другая похожая функция

//const percentageCalculator = (number, total) => {
   // return number * 100 / total;
//}

//console.log(percentageCalculator(40,80));

//следующий пример

// const firstNum = 10;
// const secondNum = 5;

// const sum = (z, g) => z + g;

// console.log(sum(firstNum, secondNum));

//следующий пример
// const somefunction = (x) => {
   // return 10 * 420;
//};

//const y = somefunction(9281);
//console.log(y);

//написать функцию, которая принимает на вход два числа и возвращает квадрат суммы этих чисел.
// для вычисления значения используйте формулу из алгебры а ** а + 2 * 2 * b * b ** 2

//const squareOfSum = (a,b)=>(a ** a) + (2 * a * b) + (b ** 2);

//console.log(squareOfSum(2,3));

// способы определения функций
//const identity = (value) => {
//    return value;
//}

// другой способ

//const identity = value => value; // функция однострочник

// еще один способ определения функции. Используется редко
//const identity = function (value) {
//    return value;
//}

const somefunction = (x) => {
    return 10 * 450;
};

const y = somefunction(9281);
console.log(y);
