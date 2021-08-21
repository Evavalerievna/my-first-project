//const pi = 3.14;

//const surfaceAreaCalculator = (radius) => {
//    return 4 * pi * square(radius)
//};

//const square = num => {
//    return num * num;
//};

//const surfaceOfMarse = surfaceAreaCalculator(3390); //ответили как бы на вопрос что?
//const surfaceOfMercury = surfaceAreaCalculator(2440);

//const surfaceOfMercury = 4 * 3.14 * 3390 * 3390; // отвечает как бы на вопрос как?

//факториал
//задача. На столе стоит 3 книги. Сколько возможных вариантов их перестановки?
// рещение. всего шесть вариантов перестановки.
//1 * 2 * 3
//const factorial = n => {
//    if (n ===0) {
//        return 1;
//    } else {
//        return n * factorial (n-1);
//    }
//};
//console.log(factorial(3));

//создаетя идентичный яшик
//const factorial = 2 => {
//    if (2 ===0) {
//        return 1;
//    } else {
//        return 2 * factorial (2-1);
//    }
//};
//console.log(factorial(2));


//создаетя идентичный яшик
//const factorial = 1 => {
//    if (1 ===0) {
//        return 1;
//    } else {
//        return 1 * factorial (1-1);
//    }
//};
//console.log(factorial(1));

//требования к рекурсии
//рекурсия это когда что-то описывается через самого себя, содержит себя в своем описании.
// 1)базовый случай или терминальный сценарий. Это точка в которой нужно остановиться. В нашем примере это 0
//2) правило передвижения по рекурсии. углубление. в нашем случае это n * factorial(n-1)

//factorial(3);
//3 * factorial(2);
//3 * 2 * factorial(1);
//3 * 2 * 1 * factorial(0);
//3 * 2 * 1 * 1;
//3 * 2 * 1;
//3 * 2;
//6;


//задача
//проведено опред. ф-ции, которая принимает на выход целое положительное цисло n, меньшее или равно 5, и возвращает произведение всех чисел, входящих в интервал [n, 5]
//const product = n => {
//    if (n ===5) {
//        return n;
//    }
//    n * product(n+1);
//};

//console.log(product(2));
//console.log(product(3));
//console.log(product(4));


// Задача.
// реализуйте (с рекурсией) функцию, которая находит сумму последовательности целых чисел. 
// последовательность задается двумя значениями: begin - начало, end - конец. 
// Пример: begin = 2, и end = 6 дают такую последовательность 2, 3, 4, 5, 6. Сумма будет равна 20

const sequenceOfNumbers = (begin,end) => {
    if (begin = end) {
        return begin;
    } else if (begin > end) {
         return end;
     }
     return begin + sequenceOfNumbers(begin + 1, end);
};

console.log(2,6);